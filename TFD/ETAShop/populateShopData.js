//Shorthand for selecting an element by ID. Follow up with .value or .innerHTML, etc.
function readSelection(elemID) {return document.getElementById(elemID);}

substatColorMods = [
	// "laundry","cold fury","towed","unique weapon","cryo","devotion mark","single reload for peace","pest control","close call",
	// "overclock","weaken regeneration","grenade throw","overkill","power unit change","burn","load mastery","change mastery",
	// "traction grenade","necrosis","toxic sense","purification","corrosion","room 0 trauma","toxic puddle","toxic reaction","panic",
	// "plague bodyarmor","despair","toxic swamp","venom-injected","toxic footprints","putric","nightmare",

    // //blair
    // "flame zones","flame zone","taste of aggression","giant fireball","small fireballs","power of fire",
]
// List all exclusion cases here
// \s = any whitespace character
substatColorExclusions = {
	// "fire": ":|\\srate|\\sall",
    // "status": "\\seffect" //Use this if for whatever reason, a need to differentiate between STATUS and STATUS EFFECT arises.
}

const sevenDayEpoch = 604800;

// Intercept battle rewards 
// Infiltration operation rewards 
// Supplies

/* <div class="mainLastsRowTitles">
    <a class="mainSelectionHeader" href="/TFD/Calculator/" rel="noopener noreferrer">Calculator</a>
    <a class="mainSelectionHeader" href="/TFD/BossStats/" rel="noopener noreferrer">Boss Stats</a>
    <a class="mainSelectionHeader" href="/TFD/VashBuilds/" rel="noopener noreferrer">Vash's Builds</a>
</div> */

let startTimes = [];
let scheduleKeys = Object.keys(etaData);
let scheduleCount = scheduleKeys.length;

let scheduleObject = {}

let weeksProcessedTotal = 0;
let keyNumber = 0;
for (let entry of scheduleKeys) {
    let weeksProcessed = 0;
    let current = etaData[entry];

    let shopDuration = current.shopDurationSeconds;

    //this is the amount of time that differs from the schedule start date to the actual start of the eta shop.
    //this could easily change between season to season
    let startDateAdjustment = shopDuration
    let currentStart = current.epoch + startDateAdjustment;
    

    let weeks = current.weeksObject;
    let weeksKeys = Object.keys(weeks);
    keyNumber++;

    for (let rotation of weeksKeys) {
        let currentWeek = weeks[rotation];

        let startKey = currentStart + (sevenDayEpoch * weeksProcessed);
        let endKey = startKey + shopDuration;

        
        if (keyNumber < scheduleCount) {
            let nextScheduleStart = etaData[scheduleKeys[keyNumber]].epoch;
            
            //if we find an overlapped start time from the current week with the starting week of the next schedule, then abort this schedule and move on to the next
            if (startKey >= nextScheduleStart) {break;}
        }
        weeksProcessed++;
        weeksProcessedTotal++

        scheduleObject[weeksProcessedTotal] = {
            "startDate": new Date(startKey * 1000),
            "endDate": new Date(endKey * 1000),
            "start": startKey,
            "end": endKey,
            "scheduleKey": entry,
            "nextStart": startKey + sevenDayEpoch,
            "shops": currentWeek,
            "weekNumber": weeksProcessedTotal,
        }
    }
}



function findRelevantWeek(scheduleObject) {
    const currentEpoch = Math.floor(Date.now() / 1000);//Current time in seconds

    for (let key in scheduleObject) {
        const entry = scheduleObject[key];
        const {start,end,nextStart } = entry;

        //are we within the current week
        if (currentEpoch >= start && currentEpoch < end) {return +key;}
        //or are we in the gap between this and the next week, in which case
        //I want to display the next week's info instead of what is already gone
        else if (currentEpoch >= end && currentEpoch < nextStart) {return +key+1;}
    }

    //if we're not in anything, then fail it
    return -1;
}

const currentWeekNow = findRelevantWeek(scheduleObject);

let shop = {
    "selectedWeek": currentWeekNow,
    updateShopDate(adjustment,override) {
        let weeksKeys = Object.keys(scheduleObject);
        let weekCount = weeksKeys.length;
        readSelection("bulletSelectorInputWeapons").max = weekCount
        console.log(weekCount)

        if (adjustment) {shop.selectedWeek = Math.max(1,Math.min(weekCount,shop.selectedWeek + adjustment));}
        else if (override) {shop.selectedWeek = override}
        let week = shop.selectedWeek;
        let current = scheduleObject[week];
        readSelection("bulletSelectorInputWeapons").value = week;



        let startDate = shop.epochToDateString(current.start);
        let endDate = shop.epochToDateString(current.end);

        readSelection("dateDisplayHeader").innerHTML = `${startDate} - ${endDate}`;
        readSelection("shopA").innerHTML = "";
        readSelection("shopB").innerHTML = "";
        // readSelection("shopC").innerHTML = "";

        let currentObject = current.shops;

        const shopArray = [
            "A",
            "B",
            // "C"
        ];
        const shopNames = {
            "A": "Infiltration Exchange",
            "B": "Supplies Exchange",
            "C": "Battle Exchange",
        }

        for (let entry of shopArray) {
            console.log(current)
            let currentArray = currentObject[entry];
            let boxPath = readSelection(`shop${entry}`);
            if (currentArray === null) {
                boxPath.innerHTML += `<div class="tooltipHeader">No entries found</div>`;
                continue
            }

            let itemString = "";
            for (item of currentArray) {

                if (typeof item === 'string') {
                    itemString += `
                    <div class="itemBoxHolder">
                        <div>${item}</div>
                    </div>
                    `;
                    continue;
                }
                let name = item.name;
                let image = `/TFD/TFDImages/Consumables/${item.image}.png`

                itemString += `
                <div class="itemBoxHolder hasHoverTooltip" id="${name}">
                    <img class="shopItemIcon" src="${image}">
                </div>
                `;

                tooltipStorage[name] = name;
                // <div>${name}</div>
            }

            boxPath.innerHTML += itemString;
        }



        // let mainBody = readSelection("shopOfferingsBodyBox");
        // mainBody.innerHTML = "";


        // const epochNow = Date.now();
        // console.log(epochNow)
        tooltips.loadTooltips();
    },
    epochToDateString(epoch) {
        const date = new Date(epoch * 1000); // Convert epoch (seconds) to milliseconds
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(date.getDate()).padStart(2, '0'); // Pad single-digit days
    
        return `${year}/${month}/${day}`;
    },
}

shop.updateShopDate(null,currentWeekNow)
// if (currentWeekNow) {
//     console.log(`You are in week ${currentWeekNow}:`);
// } else {
//     console.log("No matching week found.");
// }

// console.log(scheduleObject)



