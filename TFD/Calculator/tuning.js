readSelection("paragonBoardHolderBox").innerHTML = "";
let paragonBox = readSelection("paragonBoardHolderBox");


let rarityColorRef = {
    "Ultimate": ` #7b6337`,
    "Rare": ` #652d7f`,
    "Common": ` #11528e`,
    // "Ultimate": `linear-gradient(to bottom right, #7b6337, transparent, transparent, transparent)`,
    // "Rare": `linear-gradient(to bottom right, #652d7f, transparent, transparent, transparent)`,
    // "Common": `linear-gradient(to bottom right, #11528e, transparent, transparent, transparent)`,
}

const nonPercentValues = {
    "MP Recovery Out of Combat": 1,
    "HP Recovery Modifier": 1,
    "Skill Power": 1,
    "MP Recovery Modifier": 1,
    "Shield Recovery Out of Combat": 1,
    // "": 1,
    // "": 1,
    // "": 1,
    // "": 1,
    // "": 1,
    // "": 1,
    // "": 1,
    // "": 1,
    // "": 1,
}

let rowNumber = 0;
let colNumber = 0;

let nodeDisplayType = [
    "Empty",
    "Blue",
    "Purple",
    "Gold",
    "Black",
    "Black"
];

let showNumbers = false;

let totalVisibleNodes = 0;
// let nodeNumber = 0;
for (let entry of tileListData) {
    // rowNumber++;
    let rowString = `<div class="paragonRowHolder">`;
    for (let columnEntry of entry) {
        let nodeNumber = columnEntry.nodeNumber;



        let entryRef = columnEntry;
        if (!entryRef.image.toLowerCase().includes("empty")) {totalVisibleNodes++;}

        if (entryRef && !entryRef.image.toLowerCase().includes("empty")) {
            rowString += `<div class="paragonRowNode paragon${nodeDisplayType[columnEntry.displayValue]} hasHoverTooltip" id="paragoneNode${nodeNumber}" style="${entryRef.isActive || entryRef.isStarterNode ? "opacity: 1" : "opacity: 0.3"}" onclick="userTriggers.toggleParagonGridUnit(${nodeNumber})">
            ${showNumbers ? nodeNumber : ""}
            ${!showNumbers ? `<img class="paragoneNodeImage paragonImage${nodeDisplayType[columnEntry.displayValue]}" src="${entryRef.image}" />` : ""}
            </div>`;

            statRowString = "";
            if (entryRef.statsArray) {
                for (let statEntry in entryRef.statsArray) {
                    statRowString += `<div class="weaponBreakdownSplitterHeaderParagonTooltipRow">
                    <div class="basicsDRContainer"><span class="basicsDRStat">${statEntry}</span><span class="rowTraceLine"></span><span class="basicsDRValue">${(entryRef.statsArray[statEntry] * (true ? 100 : 1)).toFixed(2)}${"%"}</span></div>
                    </div>`
                }
            }
            // {"stat": "Firearm ATK","statName": "FirearmATK%","displayValue": 0.6,"displayUnit": "%"},
            // {"stat": "Explosive ATK","statName": "","displayValue": 0.6,"displayUnit": "%"},


            tooltipStorage[`paragoneNode${nodeNumber}`] = `
                <div class="paragonTooltipImageNameRowHolder">
                    <div class="paragonRowNodeTooltipOverride paragon${nodeDisplayType[columnEntry.displayValue]}">
                        <img class="paragoneNodeImage paragonImage${nodeDisplayType[columnEntry.displayValue]}" src="${entryRef.image}" />
                    </div>
                    <div class="weaponBreakdownSplitterHeaderTooltipNameRow">${entryRef.nodeTitle ? entryRef.nodeTitle.toUpperCase() : "MISSING NAME"}</div>
                </div>
                ${statRowString}
                <div class="totalHealingBoxBreakdownRows">
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">Cost:&nbsp;${entryRef.cost}</div>
                    </div>
                </div>
            `;
        }
        else {
            rowString += `<div class="paragonRowNode paragon${nodeDisplayType[columnEntry.displayValue]}" id="paragoneNode${nodeNumber}">${showNumbers ? nodeNumber : ""}</div>` 
        }
    }

    rowString += `</div>`;

    paragonBox.innerHTML += rowString;
}

// console.log(totalVisibleNodes)







const wrapper = document.querySelector('.paragonBoardBoxHolderScroller');
const board = document.querySelector('.paragonBoardHolderBox');
let scale = 1;
let posX = 0, posY = 0;
let startX, startY, isDragging = false;

// Base maximum offset values
const baseMaxOffsetX = 500; 
const baseMaxOffsetY = 500; 

// Function to calculate max drag based on scale
function getScaledMaxOffset(base) {
    return base * scale; // Increase max movement as scale increases
}

// Zoom In/Out using Scroll Wheel (Desktop)
wrapper.addEventListener('wheel', (e) => {
    e.preventDefault();
    
    let scaleAmount = 0.1;
    if (e.deltaY < 0) {
        scale = Math.min(scale + scaleAmount, 3); // Max zoom in: 3x
    } else {
        scale = Math.max(scale - scaleAmount, 0.5); // Min zoom out: 0.5x
    }

    // Adjust position constraints after scaling
    posX = Math.min(Math.max(posX, -getScaledMaxOffset(baseMaxOffsetX)), getScaledMaxOffset(baseMaxOffsetX));
    posY = Math.min(Math.max(posY, -getScaledMaxOffset(baseMaxOffsetY)), getScaledMaxOffset(baseMaxOffsetY));

    board.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
}, { passive: false });

// Drag Start (Mouse & Touch)
function startDrag(e) {
    isDragging = true;

    // Handle touch events
    if (e.touches) {
        startX = e.touches[0].clientX - posX;
        startY = e.touches[0].clientY - posY;
    } else {
        startX = e.clientX - posX;
        startY = e.clientY - posY;
    }

    wrapper.style.cursor = 'grabbing';
}

// Drag Move (Mouse & Touch)
function dragMove(e) {
    if (!isDragging) return;
    
    let clientX, clientY;

    // Handle touch events
    if (e.touches) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        clientX = e.clientX;
        clientY = e.clientY;
    }

    // Calculate new position
    let newX = clientX - startX;
    let newY = clientY - startY;

    // Get scaled movement limits
    const maxOffsetX = getScaledMaxOffset(baseMaxOffsetX);
    const maxOffsetY = getScaledMaxOffset(baseMaxOffsetY);

    // Apply limits using Math.min/max
    posX = Math.min(Math.max(newX, -maxOffsetX), maxOffsetX);
    posY = Math.min(Math.max(newY, -maxOffsetY), maxOffsetY);

    board.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;

    // Prevent scrolling the page when dragging
    e.preventDefault();
}

// Drag End (Mouse & Touch)
function endDrag() {
    isDragging = false;
    wrapper.style.cursor = 'grab';
}

// Event Listeners for Mouse
wrapper.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', dragMove);
document.addEventListener('mouseup', endDrag);

// Event Listeners for Touch
wrapper.addEventListener('touchstart', startDrag, { passive: false });
document.addEventListener('touchmove', dragMove, { passive: false });
document.addEventListener('touchend', endDrag);



const zoomer = {
    applyZoomableToGraphs() {
        if (readSelection("bulletsDisplayGraph")) {

        }
    }
    
}