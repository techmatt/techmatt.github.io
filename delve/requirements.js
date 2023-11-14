// This is a parser for connection requirements,
// which are nested lists of the form
// a OR b OR (a AND c AND d AND some text)
// AND and OR are special operators and the strings represent aspects
// Quoted text is a requirements, like
// "no explorer is overburdened"
// This gets parsed into a tree, which is then turned into a nested sequence of
// requirements to advance.

function tokenize(str) {
    let tokenized = (" "+str+" ").split(/(\s+OR\s+|\s+AND\s+|\(|\))/g);
    tokenized = tokenized.map((x)=>(x.trim()));
    tokenized = tokenized.filter((x)=>(x != ""));
    return tokenized;
}

// console.log(tokenize("do some stuff"));
// console.log(tokenize("do soANDme stuff"));
// console.log(tokenize("do some AND stu()ff OR )()()("));
// console.log(tokenize("AND some stuff) ( ) (do some stuff OR"));

// console.log(parseRequirement("a b c"));
// console.log(parseRequirement("a AND b"));
// console.log(parseRequirement("(a AND b) AND (c OR D)"));


function parseRequirement(str) {
    let tokenized = tokenize(str);
    return parseTokenRequirements(tokenized, 0, true).parsed;
}

function parseTokenRequirements(tokens, start_index, initial) {
    // start at start_index, parsing until we reach the end of the tokens or an end-parentheses.
    // console.log(tokens);
    // Note that a single string will emit as as a string inside an "UNKNOWN" operator. This is intentional.
    i = start_index;
    let parsed = {};
    parsed.operator = "UNKNOWN";
    parsed.operands = [];
    while(true) {
        let subphrase;
        if (i > tokens.length) {
            console.error("unexpected end-of-phrase while parsing" + tokens + " from index "+start_index);
        } if (tokens[i] == "(") {
            subphrase = parseTokenRequirements(tokens, i+1, false);
            if (tokens[subphrase.end] != ")") console.error("Expected \")\", but got " + tokens[i]);
        } else if (tokens[i] == ")") {
            return {"end": i, "parsed": parsed};
        } else {
            subphrase = {"end": i, parsed: {"operator": "STRING", "value":tokens[i]}}
        }
        i = subphrase.end + 1;
        if (parsed.operands === undefined) {
            parsed.operands = [];
        } else {
            parsed.operands.push(subphrase.parsed);
        }
        if (i > tokens.length) break;
        let operator_seen = tokens[i];
        if (operator_seen === undefined && !initial) {
            console.error(tokens);
        }
        if (operator_seen === undefined) {
            // if (parsed.operands.length == 1) {parsed = parsed.operands[0];}
            return {"end": i, "parsed": parsed};
        }
        if (operator_seen == ")") {
            // if (parsed.operands.length == 1) {parsed = parsed.operands[0];}
            return {"end": i, "parsed": parsed};
        }
        if (parsed.operator != "UNKNOWN" && parsed.operator != operator_seen) {
            console.error("Expected \""+parsed.operator+"\", but got " + operator_seen);
        }
        parsed.operator = operator_seen;
        i++;
    }
}

function renderRequirement(requirement) {
    // Create the requirements for a given connection
    // TODO: interactive checkmarks?
    const rlist = parseRequirement(requirement);
    return renderRequirementInner(rlist);
}
function renderRequirementInner(rlist) {
    // console.log(rlist);
    if (rlist.operator == "STRING") {
        // The criterion listed is just in plain text
        let newNode = document.getElementById("connection-text-template").cloneNode(true);
        newNode.id = undefined;
        newNode.innerHTML = rlist.value;
        return newNode;
    } else {
        // more nesting
        const operatorId = rlist.operator == "OR" ? "connection-or-operator-template" : "connection-and-operator-template";
        // console.log(id);
        // console.log(document.getElementById(id));
        let newNode = document.getElementById("connection-requirement-template").cloneNode(true);
        newNode.id = undefined;
        for (let i=0; i<rlist.operands.length; i++) {
            // console.log("child=");
            // console.log(renderRequirementInner(rlist.operands[i]));
            newNode.appendChild(renderRequirementInner(rlist.operands[i]));
            if (i == rlist.operands.length -1) continue; // skip for last
            let operator = document.getElementById(operatorId).cloneNode(true);
            operator.id = undefined;
            newNode.appendChild(operator);
        }
        return newNode;
    }
}

