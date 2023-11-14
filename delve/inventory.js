var uniqueItemsInitial = {};
var recurringItemsInitial = {};

var recurringItemsTaken = {}; // recurring items taken from current room

function initializeItemsForRoom() {
    let room = gameState.rooms[currentRoom];
    console.log("initializeItemsForRoom");
    console.log(room);
    uniqueItemsInitial = {};
    console.log("DEBUG ");
    console.log(room);
    for (let item of room.uniqueItems) {
        if (item.quantity > 0) {
            uniqueItemsInitial[item.key] = item.quantity;
        }
    }
    recurringItemsInitial = {};
    for (let item of room.recurringItems) {
        recurringItemsInitial[item.key] = item.quantity;
    }
    recurringItemsTaken = {};
}

function renderRoomInventory() {
    let room = gameState.rooms[currentRoom];
    // Fill recurring items
    let itemTemplate = document.getElementById("item-template");
    let index = 0;

    // TODO: incremental updates of items? Is this useful at all?
    document.getElementById("recurring-items-available").innerHTML = "";
    for (let item of room.recurringItems) {
        if (!recurringItemsTaken.hasOwnProperty(item.key)) {
            recurringItemsTaken[item.key] = 0;
        }
        taken = recurringItemsTaken[item.key];

        itemsLeft = item.quantity - taken;

        let itemNode = itemTemplate.cloneNode(true);
        itemNode.classList.remove("template");
        if (itemsLeft > 0) {
            itemNode.classList.remove("none-left");
        } else {
            itemNode.classList.add("none-left");
        }
        itemNode.getElementsByClassName('name')[0].innerHTML = item.name;
        itemNode.getElementsByClassName('quantity')[0].innerHTML = itemsLeft;
        itemNode.getElementsByClassName('initial-quantity')[0].innerHTML = recurringItemsInitial[item.key];
        itemNode.getElementsByClassName('bulkyness')[0].innerHTML = item.bulkyness;
        itemNode.getElementsByClassName('location')[0].innerHTML = item.location;
        const list = document.getElementById("recurring-items-available");
        list.insertBefore(itemNode, list.children[index]);
        index += 1;
        
        if (itemsLeft > 0) {
            itemNode.getElementsByClassName('item-take-button')[0].onclick = function() {takeRecurringItem(item.key, 1);};
        }
    }

    // Update initial items if we find more items.
    for (let item of room.uniqueItems) {
        if (item.quantity <= 0) {continue;}
        if (!uniqueItemsInitial.hasOwnProperty(item.key)) {
            uniqueItemsInitial[item.key] = item.quantity;
        } else {
            uniqueItemsInitial[item.key] = Math.max(item.quantity, uniqueItemsInitial[item.key]);
        }
    }

    document.getElementById("unique-items-available").innerHTML = "";
    for (let key in uniqueItemsInitial) {
        itemsLeft = 0;
        let item;
        for (let item0 of room.uniqueItems) {
            if (item0.key == key) {itemsLeft += item0.quantity; item=item0;}
        }
        console.log(key);
        console.log(item);
        
        let itemNode = itemTemplate.cloneNode(true);
        itemNode.classList.remove("template");
        if (itemsLeft > 0) {
            itemNode.classList.remove("none-left");
        } else {
            itemNode.classList.add("none-left");
        }
        console.log(key);
        itemNode.getElementsByClassName('name')[0].innerHTML = item.name;
        itemNode.getElementsByClassName('quantity')[0].innerHTML = itemsLeft;
        itemNode.getElementsByClassName('initial-quantity')[0].innerHTML =  uniqueItemsInitial[key];
        itemNode.getElementsByClassName('bulkyness')[0].innerHTML = item.bulkyness;
        itemNode.getElementsByClassName('location')[0].innerHTML = item.location;
        const list = document.getElementById("unique-items-available");
        list.insertBefore(itemNode, list.children[index]);
        index += 1;
        
        if (itemsLeft > 0) {
            itemNode.getElementsByClassName('item-take-button')[0].onclick = function() {takeUniqueItem(key, 1);};
        }
    }
}

function takeRecurringItem(key, quantity) {
    console.log("takeRecurringItem", {"room":currentRoom, "key":key, "quantity":quantity});
    recurringItemsTaken[key] += quantity;
    renderRoom();
}

function takeUniqueItem(key, quantity) {
    console.log("attemptToTakeUniqueItem", {"room":currentRoom, "key":key, "quantity":quantity});
    for (let item of gameState.rooms[currentRoom].uniqueItems) {
        if (item.key == key) {
            item.quantity -= quantity;
            break;
        }
    }
    renderRoom();

    // Communicate with the server to figure out whether we can actually take the item.
    // socket.emit("attemptToTakeUniqueItem", {"room":currentRoom, "key":key, "quantity":quantity});
    // Success/failure are processed in processUniqueItemEvent
}

function processUniqueItemEvent(event) {
    /*DEBUG*/ console.log(event);
    if (event.quantityTaken < event.quantityRequested) {
        popupWarning("Failed to pick up all desired unique items: "+gameState.items[event.key].name+" in "+gameState.rooms[event.room].title+". Got "+event.quantityTaken+"/"+event.quantityRequested+" items requested.")
    }
}
