var deltaEnabled = false; // Detect the Microfiche
var phiEnabled = false; // Detect how many fungus sites are active
var clairvoyanceEnabled = false;

function setupHeader() {
    // Phi button
    button = $("#phi-button");
    button.pressAndHold({holdTime: BUTTON_WAIT_MS, progressIndicatorRemoveDelay: 0,
        progressIndicatorColor: "#ff0000", progressIndicatorOpacity: 1.0});
    button.bind("complete.pressAndHold", function() {phiButton();});
    
    // Mu button
    button = $("#mu-button");
    button.pressAndHold({holdTime: BUTTON_WAIT_MS, progressIndicatorRemoveDelay: 0,
        progressIndicatorColor: "#ff0000", progressIndicatorOpacity: 1.0});
    button.bind("complete.pressAndHold", function() {muButton();});

    // Delta button
    button = $("#delta-button");
    button.pressAndHold({holdTime: BUTTON_WAIT_MS, progressIndicatorRemoveDelay: 0,
        progressIndicatorColor: "#ff0000", progressIndicatorOpacity: 1.0});
    button.bind("complete.pressAndHold", function() {deltaButton();});

    // Clairvoyance button
    button = $("#clairvoyance-button");
    button.pressAndHold({holdTime: BUTTON_WAIT_MS, progressIndicatorRemoveDelay: 0,
        progressIndicatorColor: "#ff0000", progressIndicatorOpacity: 1.0});
    button.bind("complete.pressAndHold", function() {clairvoyanceButton();});
}

function renderHeader() {
    renderPhi();
    renderDelta();
    renderMu();
    renderClairvoyance();
}

// phi status can be enabled in certain rooms, which are marked in the gameState.
// The users see the total phi count and the phi status of the current room.
// This is used for the total fungus state
function renderPhi() {
    let phiButton = document.getElementById("phi-button");
    if (phiEnabled) {
        phiButton.classList.remove("inactive");
        phiButton.classList.add("active");
    } else {
        phiButton.classList.remove("active");
        phiButton.classList.add("inactive");
    }

    let totalphi = 0;
    for (let room of Object.values(gameState.rooms)) {
        if (room.phiRoom) totalphi += room.phi;
    }
    document.getElementById("phi-button-total").innerHTML = totalphi + "/3 infused";
}

function phiButton() {
    
    phiEnabled = !phiEnabled;
    renderRoom();
}

function renderDelta() {
    let deltaButton = document.getElementById("delta-button");
    if (deltaEnabled) {
        deltaButton.classList.remove("inactive");
        deltaButton.classList.add("active");
    } else {
        deltaButton.classList.remove("active");
        deltaButton.classList.add("inactive");
    }

    let node = document.getElementById("delta-button-result");
    if (gameState.rooms[currentRoom].hasMu) {
        node.classList.add("positive");
        node.classList.remove("negative");
        node.innerHTML = "Positive";
    } else {
        node.classList.remove("positive");
        node.classList.add("negative");
        node.innerHTML = "Negative";
    }
}

function deltaButton() {
    deltaEnabled = !deltaEnabled;
    renderRoom();
}

function renderClairvoyance() {
    let clairvoyanceButton = document.getElementById("clairvoyance-button");
    if (clairvoyanceEnabled) {
        clairvoyanceButton.classList.remove("inactive");
        clairvoyanceButton.classList.add("active");
    } else {
        clairvoyanceButton.classList.remove("active");
        clairvoyanceButton.classList.add("inactive");
    }
}

function clairvoyanceButton() {
    clairvoyanceEnabled = !clairvoyanceEnabled;
    renderRoom();
}

// Mu tab is an item that can be picked up and left in certain rooms.
function renderMu() {
    // Nothing gets rendered here.
}

function muButton() {
    if (gameState.rooms[currentRoom].hasMu) {
        console.log("Picking up muItem from "+currentRoom);
        gameState.rooms[currentRoom].hasMu = false;
        socket.emit("takeMuItem", {"room":currentRoom});
    } else {
        console.log("Depositing muItem at "+currentRoom);
        gameState.rooms[currentRoom].hasMu = true;
        socket.emit("leaveMuItem", {"room":currentRoom});
    }
    renderRoom();
}

function processMuItemTaken(event) {
    /*DEBUG*/ console.log(event);
    if (!event.currentMu) {
        // TODO: informative error message.
        popupWarning("Failed to pick up \"small box\": it is no longer there.")
    }
}
