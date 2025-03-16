function readSelection(elemID) {return document.getElementById(elemID);}

const usableNodes = [];
let nodeCounter = 0;
for (let entry of tileListData) {
    for (let subEntry of entry) {
    nodeCounter++;

    let rarityCheck = subEntry.rarity != "Empty" || subEntry.isStarterNode || subEntry.isConnectorNode;
    if (rarityCheck) {usableNodes.push(subEntry.nodeNumber);}
    }
}
globalRecords.paragonBoard.usableNodes = usableNodes;
