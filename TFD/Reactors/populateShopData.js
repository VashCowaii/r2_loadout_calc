//Shorthand for selecting an element by ID. Follow up with .value or .innerHTML, etc.
function readSelection(elemID) {return document.getElementById(elemID);}

let attributeIcons = {
    "": "/TFD/TFDImages/DamageTypes/Icon_Stat_Pc_Sd.png",
    "Non-Attribute": "/TFD/TFDImages/DamageTypes/Icon_DamageFloater_000.png",
    "Fire": "/TFD/TFDImages/DamageTypes/Icon_DamageFloater_001.png",
    "Chill": "/TFD/TFDImages/DamageTypes/Icon_DamageFloater_003.png",
    "Electric": "/TFD/TFDImages/DamageTypes/Icon_DamageFloater_002.png",
    "Toxic": "/TFD/TFDImages/DamageTypes/Icon_DamageFloater_004.png",
}
let typeIcons = {
    "": "/TFD/TFDImages/DamageTypes/Icon_Stat_Pc_Sd.png",
    "Dimension": "/TFD/TFDImages/DamageTypes/Icon_DamageFloater_ArcheDimension.png",
    "Fusion": "/TFD/TFDImages/DamageTypes/Icon_DamageFloater_ArcheFusion.png",
    "Singular": "/TFD/TFDImages/DamageTypes/Icon_DamageFloater_ArcheSingular.png",
    "Tech": "/TFD/TFDImages/DamageTypes/Icon_DamageFloater_ArcheTech.png",

    "Auxiliary": "/TFD/TFDImages/DamageTypes/Icon_Acc_01.png",
    "Sensor": "/TFD/TFDImages/DamageTypes/Icon_Acc_02.png",
    "Memmory": "/TFD/TFDImages/DamageTypes/Icon_Acc_03.png",
    "Processor": "/TFD/TFDImages/DamageTypes/Icon_Acc_04.png",
}
let nameCorrections = {
    "": "",
    "Plain": "Non-Attribute",
    "Blazer": "Fire",
    "Glacier": "Chill",
    "Electricity": "Electric",
    "Demonic": "Toxic",

    "Dimension": "Dimension",
    "Fusion": "Fusion",
    "Singular": "Singular",
    "Tech": "Tech",

    "Gyro": "Auxiliary",
    "Bracelet": "Processor",
    "Sensor": "Sensor",
    "Memory": "Memory",
}
let rotationBanners = {
    "KINGSTON": "/TFD/TFDImages/RotationZones/Image_RotationDrop_F02.png",
    "STERILE LAND": "/TFD/TFDImages/RotationZones/Image_RotationDrop_F06.png",
    "VESPERS": "/TFD/TFDImages/RotationZones/Image_RotationDrop_F01.png",
    "ECHO SWAMP": "/TFD/TFDImages/RotationZones/Image_RotationDrop_F04.png",
    "AGNA DESERT": "/TFD/TFDImages/RotationZones/Image_RotationDrop_F03.png",
    "WHITE-NIGHT GULCH": "/TFD/TFDImages/RotationZones/Image_RotationDrop_F08.png",
    "HAGIOS": "/TFD/TFDImages/RotationZones/Image_RotationDrop_F07.png",
    "FORTRESS": "/TFD/TFDImages/RotationZones/Image_RotationDrop_F05.png",
}

let cssValue = {
    "-1": "reactorZoneRowNameVeryBad",
    "0": "reactorZoneRowName",
    "1": "reactorZoneRowNameVeryGood",
}
let farmRating = {
    "Timberfall": {
        "worth": -1,
        "tooltip": [
            {
                "missionName": "N/A",
                "farmDesc": "No known worthwhile farms."
            }
        ],
    },
    "Moonlight Lake": {
        "worth": -1,
        "tooltip": [
            {
                "missionName": "N/A",
                "farmDesc": "No known worthwhile farms."
            }
        ],
    },
    "Lost Supply Depot": {
        "worth": -1,
        "tooltip": [
            {
                "missionName": "N/A",
                "farmDesc": "No known worthwhile farms."
            }
        ],
    },
    "The Lumber Yard": {
        "worth": 0,
        "tooltip": [
            {
                "missionName": "Frontline Base",
                "farmDesc": "Just do the mission. Good green brain farm."
            }
        ],
    },
    "Derelict Covert": {
        "worth": 0,
        "tooltip": [
            {
                "missionName": "Emergency Landing Strip",
                "farmDesc": "Just do the mission."
            }
        ],
    },
    "Muskeg Swamp": {
        "worth": 0,
        "tooltip": [
            {
                "missionName": "The Tree of Truth",
                "farmDesc": "Activate all points, run down the clock while killing enemies. Not amazing, but doable if needs be."
            }
        ],
    },
    "Misty Woods": {
        "worth": 0,
        "tooltip": [
            {
                "missionName": "Hazy Swamp",
                "farmDesc": "Quick runs, simple exterminate."
            }
        ],
    },
    "Classified Area": {
        "worth": 0,
        "tooltip": [
            {
                "missionName": "Large Nuclear Reactor",
                "farmDesc": "Using someone like Freyna, start the mission, drop a puddle kill the monsters and reset.<br><br>A good farm, but resets are required in order to make it usable."
            }
        ],
    },
    "Restricted Zone": {
        "worth": 0,
        "tooltip": [
            {
                "missionName": "Void Fusion Reactor",
                "farmDesc": "Don't open the spheres, just kill the boss repeatedly."
            }
        ],
    },
    "Vermilion Waste": {
        "worth": -1,
        "tooltip": [
            {
                "missionName": "N/A",
                "farmDesc": "No known worthwhile farms. This area sucks overall."
            }
        ],
    },
    "The Storage": {
        "worth": 0,
        "tooltip": [
            {
                "missionName": "Previous Construct Team Quarters",
                "farmDesc": "An \"ok\" exterminate."
            }
        ],
    },
    "The Mining Site": {
        "worth": 0,
        "tooltip": [
            {
                "missionName": "Mining Beacon",
                "farmDesc": "Just a standard barrier mission."
            }
        ],
    },
    "Remnant": {
        "worth": -1,
        "tooltip": [
            {
                "missionName": "N/A",
                "farmDesc": "No known worthwhile farms. This area sucks overall."
            }
        ],
    },
    "Ironworks": {
        "worth": 0,
        "tooltip": [
            {
                "missionName": "Weapon Processing Facility",
                "farmDesc": "Quick runs, decent exterminate."
            }
        ],
    },
    "Hatchery": {
        "worth": -1,
        "tooltip": [
            {
                "missionName": "N/A",
                "farmDesc": "No known worthwhile farms. This area sucks overall."
            }
        ],
    },
    "Observatory": {
        "worth": 0,
        "tooltip": [
            {
                "missionName": "Order's Veil",
                "farmDesc": "Just a standard barrier mission."
            }
        ],
    },
    "The Mountaintops": {
        "worth": 0,
        "tooltip": [
            {
                "missionName": "Triumphal Arch",
                "farmDesc": "A fairly decent exterminate, quick runs."
            },
            {
                "missionName": "Borderline of Truth",
                "farmDesc": "Barrier mission, sit in one spot, but less spawn frequency than the Exterminate offered here."
            }
        ],
    },
    "Fractured Monolith": {
        "worth": 0,
        "tooltip": [
            {
                "missionName": "Ruins Modification Base",
                "farmDesc": "Roughly 1.5min exterminate. Not amazing, but not terrible."
            }
        ],
    },
    "Forward Base": {
        "worth": 0,
        "tooltip": [
            {
                "missionName": "Broadband Fleet Beacon",
                "farmDesc": "Power shutdown into barrier mission, but the enemies have very tight spawns and minimal moving required."
            }
        ],
    },
    "Dune Base": {
        "worth": 0,
        "tooltip": [
            {
                "missionName": "Vulgus Blockade",
                "farmDesc": "Just a standard mid exterminate, lots of area to cover."
            }
        ],
    },
    "The Corrupted Zone": {
        "worth": 0,
        "tooltip": [
            {
                "missionName": "Deep Digger",
                "farmDesc": "Start the mission, complete the exterminate and then afterwards reset instead of finishing the mission."
            }
        ],
    },
    "Fallen Ark": {
        "worth": -1,
        "tooltip": [
            {
                "missionName": "N/A",
                "farmDesc": "No known worthwhile farms"
            }
        ],
    },
    "Convertor Facility": {
        "worth": 0,
        "tooltip": [
            {
                "missionName": "High Thermal Source Detected Zone",
                "farmDesc": "Just a standard mid exterminate"
            }
        ],
    },
    "Starfall Road": {
        "worth": -1,
        "tooltip": [
            {
                "missionName": "N/A",
                "farmDesc": "No known worthwhile farms"
            }
        ],
    },
    "Grand Square": {
        "worth": 0,
        "tooltip": [
            {
                "missionName": "Kingston Surveillance Radar",
                "farmDesc": "Just do the mission.<br><br>Great enemy density but prolonged spawns. Decent farm, just not amazing."
            }
        ],
    },
    "The Destruction": {
        "worth": -1,
        "tooltip": [
            {
                "missionName": "N/A",
                "farmDesc": "No known worthwhile farms"
            }
        ],
    },
    "Frozen Valley": {
        "worth": 1,
        "tooltip": [
            {
                "missionName": "Command Relay",
                "farmDesc": "Just kill enemies in the barrier, that's it.<br><br><i>Ajax: \"That's good for Lepic!\"</i><br>This farm may not actually be good for lepic, we're just quoting the game lines"
            }
        ],
    },
    "The Ruins": {
        "worth": 1,
        "tooltip": [
            {
                "missionName": "Ruins Courtyard",
                "farmDesc": "Just do the mission, that's all."
            }
        ],
    },
    "The Fallen Theater": {
        "worth": 1,
        "tooltip": [
            {
                "missionName": "Vulgus Occupied Buildings",
                "farmDesc": "As bunny, just sprint through to the end and that is it. Very condensed enemy spawns, quick cycles."
            }
        ],
    },
    "Repository": {
        "worth": 1,
        "tooltip": [
            {
                "missionName": "Kuiper Mine",
                "farmDesc": "Start the mission, enter the cave and interact with the console, but don't capture any kuiper nodes. Instead, sit in the center and have your way with the enemies.<br><br>Probably a little convenient for AFK farming, Jayber and Bunny excel here."
            }
        ],
    },
    "Rockfall": {
        "worth": 1,
        "tooltip": [
            {
                "missionName": "Anticipated Ambush Point",
                "farmDesc": "Just do the mission, that's pretty much it. Speed mobbers like bunny advised, but you can get away with other AOE builds due to the limited area spawns."
            }
        ],
    },
    "Miragestone": {
        "worth": 1,
        "tooltip": [
            {
                "missionName": "Outpost",
                "farmDesc": "Similar to Defense Line, get valby and modify your cooldown/duration to allow for infinite usage of her 3rd skill, then circle the inside of the outpost without ever hurting the boss but while still destroying the terminals. Run down the clock, and as long as the boss survives reactors will keep dropping.<br><br>Use little to no range on Valby for this one."
            },
            {
                "missionName": "Commanding Ground",
                "farmDesc": "Not amazing, just a standard barrier mission. Not bad though."
            }
        ],
    },
    "Abandoned Zone": {
        "worth": 1,
        "tooltip": [
            {
                "missionName": "Environment Contamination Zone",
                "farmDesc": "As bunny, usually without high voltage, just sprint through to the end and that is it. Speed increased with someone resetting mission for you.<br><br>Great gold farm."
            }
        ],
    },
    "Shipment Base": {
        "worth": 1,
        "tooltip": [
            {
                "missionName": "Fortress Outskirts",
                "farmDesc": "Activate all zones, kill enemies while running down the clock. Reset mission once all zones finish instead of finishing the mission."
            }
        ],
    },
    "Moongrave Basin": {
        "worth": 1,
        "tooltip": [
            {
                "missionName": "Water Cooling Recording Device",
                "farmDesc": "Leave the first enemies alive so they capture zone A(cave), then leave them there while running down the clock and killing everyone else.<br>So long as the enemies hold the zone, other enemies will spawn infinitely."
            }
        ],
    },
    "Defense Line": {
        "worth": 1,
        "tooltip": [
            {
                "missionName": "Outpost",
                "farmDesc": "Get valby and modify your cooldown/duration to allow for infinite usage of her 3rd skill, then circle the inside of the outpost without ever hurting the boss but while still destroying the terminals. Run down the clock, and as long as the boss survives reactors will keep dropping.<br><br>Also a decent gold farm."
            }
        ],
    },
    "The Aurora Forest": {
        "worth": -1,
        "tooltip": [
            {
                "missionName": "N/A",
                "farmDesc": "This entire zone sucks shit. Do not farm here."
            }
        ],
    }
}

substatColorMods = []
// List all exclusion cases here
// \s = any whitespace character
substatColorExclusions = {}

const sevenDayEpoch = 604800;
const adjustmentEpoch = 172800*1.5;

let scheduleStartTime = reactorRotation.startTimeRef.epoch + adjustmentEpoch;
let rotations = reactorRotation.rotationObject;

let startTimes = [];
let reactorKeys = Object.keys(rotations);
let reactorKeyCount = Object.keys(rotations[reactorKeys[0]].weeksObject).length;
readSelection("bulletSelectorInputWeapons").max = reactorKeyCount

let weekEpoch = {};
for (let i=1;i<=reactorKeyCount;i++) {
    weekEpoch[`Week${i}`] = {
        "start": scheduleStartTime + (sevenDayEpoch * (i-1)),
        "nextStart": scheduleStartTime + (sevenDayEpoch * (i))
    };
}

function findRelevantWeek(weekEpoch) {
    const currentEpoch = Math.floor(Date.now() / 1000);//Current time in seconds

    let keyNumber = 0
    for (let key in weekEpoch) {
        keyNumber++;
        const entry = weekEpoch[key];
        
        const {start,nextStart} = entry;
        //are we within the current week
        if (currentEpoch >= start && currentEpoch < nextStart) {return keyNumber;}
    }

    //if we're not in anything, then fail it
    return -1;
}
const currentWeekNow = findRelevantWeek(weekEpoch);

let weeksProcessedTotal = 0;
let keyNumber = 0;


let reactorFunctions = {
    "scheduleObject": {},
    "selectedWeek": currentWeekNow,
    "reactor": {
        "currentAttribute": "",
        "currentAttributeID": "reactorAttrBlank",
        "currentType": "",
        "currentTypeID": "reactorBlank",
        "componentType": "",
        "componentTypeID": "componentBlank",
    },
    createScheduleObject() {
        let scheduleObject = {};

        for (let reactorEntry of reactorKeys) {
            currentZone = rotations[reactorEntry];

            const currentMapName = currentZone.mapNameReal;
            const currentZoneName = currentZone.zoneIDReal;

            if (!scheduleObject[currentMapName]) {scheduleObject[currentMapName] = {};}
            if (!scheduleObject[currentMapName][currentZoneName]) {scheduleObject[currentMapName][currentZoneName] = {};}
            scheduleObject[currentMapName][currentZoneName].weeksObject = currentZone.weeksObject;
            scheduleObject[currentMapName][currentZoneName].static = currentZone.static
        }

        reactorFunctions.scheduleObject = scheduleObject;
    },
    updateRotationFilters(list,iconID,valueToAssign) {
        const lists = {
            "1": ["reactorAttrBlank","reactorNonAttribute","reactorFire","reactorElectric","reactorChill","reactorToxic"],
            "2": ["reactorBlank","reactorDimension","reactorFusion","reactorSingular","reactorTech"],
            "3": ["componentBlank","componentAuxiliary","componentSensor","componentMemory","componentProcessor"],
        }
        const globalRef = reactorFunctions.reactor;

        if (list) {
            const clearList = lists[list];
            for (let entry of clearList) {
                readSelection(entry).style.border = "none";
                readSelection(entry).style.filter = "brightness(0.5)";
            }
            if (list<3) {
                if (iconID) {globalRef[list === 1 ? "currentAttributeID" : "currentTypeID"] = iconID;}
                if (valueToAssign != undefined) {globalRef[list === 1 ? "currentAttribute" : "currentType"] = valueToAssign;}
            }
            else if (list===3) {
                if (iconID) {globalRef.componentTypeID = iconID;}
                if (valueToAssign != undefined) {globalRef.componentType = valueToAssign;}
            }
        }

        readSelection(globalRef.currentAttributeID).style.border = "1px solid white";
        readSelection(globalRef.currentAttributeID).style.filter = "brightness(1)";
        readSelection(globalRef.currentTypeID).style.border = "1px solid white";
        readSelection(globalRef.currentTypeID).style.filter = "brightness(1)";
        readSelection(globalRef.componentTypeID).style.border = "1px solid white";
        readSelection(globalRef.componentTypeID).style.filter = "brightness(1)";

        reactorFunctions.updateRotationDisplay();
    },
    updateRotationDisplay(adjustment,override) {
        //adjust based on the arrows pressed
        if (adjustment) {reactorFunctions.selectedWeek = Math.max(1,Math.min(reactorKeyCount,reactorFunctions.selectedWeek + adjustment));}
        //or assign the override of the current week on page load
        else if (override) {reactorFunctions.selectedWeek = override}
        //or actually read the input value input by the user
        else {reactorFunctions.selectedWeek = Math.max(1,Math.min(reactorKeyCount,readSelection("bulletSelectorInputWeapons").value));}
        let week = reactorFunctions.selectedWeek;
        readSelection("bulletSelectorInputWeapons").value = week;

        let currentWeekName = `Week${week}`;
        let startDate = reactorFunctions.epochToDateString(weekEpoch[currentWeekName].start);
        let endDate = reactorFunctions.epochToDateString(weekEpoch[currentWeekName].nextStart);

        readSelection("dateDisplayHeader").innerHTML = `${startDate} - ${endDate}`;


        let reactorRef = reactorFunctions.reactor;
        let currentAttribute = reactorRef.currentAttribute;
        let currentType = reactorRef.currentType
        let currentComponent = reactorRef.componentType

        const mapNames = Object.keys(reactorFunctions.scheduleObject);
        let bodyString = '';
        for (let map of mapNames) {
            // rotationBanners
            let mapString = "";
            let headerString = `
            <div class="mapZoneAreaBox">
                <div class="tooltipHeaderContainer">
                    <img class="tooltipHeaderZoneBanner" src="${rotationBanners[map.toUpperCase()]}">
                    <div class="tooltipHeaderShopBanner">${map.toUpperCase()}</div>
                </div>
            `;
            let rowString = "";
            let currentMap = reactorFunctions.scheduleObject[map];

            let zoneKeys = Object.keys(currentMap);

            for (let zone of zoneKeys) {
                let currentStatic = currentMap[zone].static.map(entry => entry = nameCorrections[entry]);
                let currentZoneWeeks = currentMap[zone].weeksObject[currentWeekName].map(entry => entry = nameCorrections[entry]);

                let targetFound = currentAttribute==="" && currentType==="" && currentComponent==="";
                let attributeFound = currentAttribute==="";
                let typeFound = currentType==="";
                let componentFound = currentComponent==="";

                let part1Match = false;
                let part2Match = false;
                if (!targetFound) {
                    if (currentStatic.length>1) {
                        let attributeFound1 = currentAttribute==="";
                        let typeFound1 = currentType==="";
                        if (currentStatic[0] === currentAttribute) {attributeFound1 = true;}
                        if (currentStatic[1] === currentType) {typeFound1 = true;}
                        if (attributeFound1 && typeFound1) {part1Match = true;}
                    }
                    if (currentZoneWeeks.length>1) {
                        let attributeFound2 = currentAttribute==="";
                        let typeFound2 = currentType==="";
                        if (currentZoneWeeks[0] === currentAttribute) {attributeFound2 = true;}
                        if (currentZoneWeeks[1] === currentType) {typeFound2 = true;}
                        if (attributeFound2 && typeFound2) {part2Match = true;}
                    }
                    else {
                        if (currentZoneWeeks[0] === currentComponent) {
                            part2Match = true;
                            componentFound = true;
                        }
                    }
                }
                if (part1Match || part2Match) {targetFound = true;}
                if (!targetFound) {continue;}

                let imageString = currentStatic.length > 1 ? `
                <div class="reactorIconStaticRowsBox">
                    ${currentZoneWeeks.length > 1 ? `<div class="reactorIconStaticRows">
                        <img class="bossWeaknessIcon" src="${attributeIcons[currentZoneWeeks[0]]}">
                        <img class="bossWeaknessIcon" src="${typeIcons[currentZoneWeeks[1]]}">
                    </div>` : `<span class="bossResistValue reactorIconStaticRows">${currentZoneWeeks[0]}</span>`}
                    <div class="reactorIconStaticRowsStatic">
                        <img class="bossWeaknessIcon" src="${attributeIcons[currentStatic[0]]}">
                        <img class="bossWeaknessIcon" src="${typeIcons[currentStatic[1]]}">
                    </div>
                </div>
                ` : "";
                let componentString = currentStatic.length === 1 ? 
                `<span class="bossResistValue">${nameCorrections[currentStatic[0]]}</span>` : "";

                let currentCSS = "reactorZoneRowName";
                if (farmRating[zone]) {
                    currentCSS = cssValue[farmRating[zone].worth];

                    let missionString = "";

                    for (let entry of farmRating[zone].tooltip) {
                        missionString += `<div class="weaponBreakdownSplitterHeader">${entry.missionName}</div>
                        <div class="abilityBreakdownGeneralMessage">${entry.farmDesc}</div>`
                    }

                    tooltipStorage[zone] = missionString;
                }
                rowString += `
                <div class="bossResistBoxHolderReactorZone hasHoverTooltip" id="${zone}">
                    <div class="${currentCSS}">${zone}</div>
                    <span class="rowTraceLine"></span>
                    ${componentString}
                    ${imageString}
                </div>
                `;
            }

            mapString += headerString + rowString + `</div>`
            if (rowString === "") {mapString = "";}

            bodyString += mapString;
        }

        if (bodyString === "") {bodyString = `<div class="abilityBreakdownGeneralMessage">No results matched your filters.</div>`}
        readSelection("shopA").innerHTML = bodyString;

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



reactorFunctions.createScheduleObject();
// console.log(reactorFunctions.scheduleObject)

reactorFunctions.updateRotationDisplay(null,currentWeekNow);

reactorFunctions.updateRotationFilters(1,'reactorAttrBlank','')
reactorFunctions.updateRotationFilters(2,'reactorBlank','')




// for (let entry of scheduleKeys) {
//     let weeksProcessed = 0;
//     let current = etaData[entry];

//     let shopDuration = current.shopDurationSeconds;

//     //this is the amount of time that differs from the schedule start date to the actual start of the eta shop.
//     //this could easily change between season to season
//     let startDateAdjustment = shopDuration
//     let currentStart = current.epoch + startDateAdjustment;
    

//     let weeks = current.weeksObject;
//     let weeksKeys = Object.keys(weeks);
//     keyNumber++;

//     for (let rotation of weeksKeys) {
//         let currentWeek = weeks[rotation];

//         let startKey = currentStart + (sevenDayEpoch * weeksProcessed);
//         let endKey = startKey + shopDuration;

        
//         if (keyNumber < scheduleCount) {
//             let nextScheduleStart = etaData[scheduleKeys[keyNumber]].epoch;
            
//             //if we find an overlapped start time from the current week with the starting week of the next schedule, then abort this schedule and move on to the next
//             if (startKey >= nextScheduleStart) {break;}
//         }
//         weeksProcessed++;
//         weeksProcessedTotal++

//         scheduleObject[weeksProcessedTotal] = {
//             "startDate": new Date(startKey * 1000),
//             "endDate": new Date(endKey * 1000),
//             "start": startKey,
//             "end": endKey,
//             "scheduleKey": entry,
//             "nextStart": startKey + sevenDayEpoch,
//             "shops": currentWeek,
//             "weekNumber": weeksProcessedTotal,
//         }
//     }
// }





// shop.updateShopDate(null,currentWeekNow)
// if (currentWeekNow) {
//     console.log(`You are in week ${currentWeekNow}:`);
// } else {
//     console.log("No matching week found.");
// }

// console.log(scheduleObject)



