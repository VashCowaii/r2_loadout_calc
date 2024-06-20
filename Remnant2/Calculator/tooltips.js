const tooltipStorage = {
    //"elementID": "tooltip text here",
    "threadCountTooltip": "How many CPU threads should we use to speed up the query?<br>More = Faster, most of the time.<br><br>Refer to your CPU core count as a general rule of thumb. Too many threads opened when your computer can't handle it, will only slow it down. Monitor your CPU and RAM usage while a query is in effect, to see if you're using too much.",
    "lastFound": "This is simply a number that represents within the total possible combos, when the last loadout was found with an equivalent or better value. The number might change between query to query due to how multithreading works, it might be found sooner or later under performance considerations at the time.",
    "currentlySupportedDamageCalcs": "Breakdowns will not display unless the item is equipped<br><ul><li>Havoc Form (ability)</li><li>Sandstorm (mod)</li></ul>Someone will probably ask me to let you add the DPS breakdowns together - I will, but I made an insane number of changes just getting things to the point they are now, gimme a day or two.",


};

function showTooltip(elementId) {
    // console.log("triggered")
    const tooltip = document.getElementById('tooltip');
    const element = document.getElementById(elementId);
    const tooltipText = tooltipStorage[elementId];

    if (tooltipText) {
        tooltip.innerHTML = userTrigger.updateSubstatColor(tooltipText);
        tooltip.style.display = 'block';

        element.addEventListener('mousemove', function (event) {
            tooltip.style.left = event.pageX + 10 + 'px';
            tooltip.style.top = event.pageY + 10 + 'px';
        });
    }
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}

function addTooltipListeners() {
    document.querySelectorAll('.hasHoverTooltip').forEach(element => {
        // Check for custom data attributes that indicate the presence of listeners
        const hasMouseEnterListener = element.getAttribute('data-mouseenter-listener') === 'true';
        const hasMouseLeaveListener = element.getAttribute('data-mouseleave-listener') === 'true';
    
        if (!hasMouseEnterListener) {
            element.addEventListener('mouseenter', () => showTooltip(element.id));
            element.setAttribute('data-mouseenter-listener', 'true'); // Mark that mouseenter listener has been added
        }
    
        if (!hasMouseLeaveListener) {
            element.addEventListener('mouseleave', hideTooltip);
            element.setAttribute('data-mouseleave-listener', 'true'); // Mark that mouseleave listener has been added
        }
    });
}
addTooltipListeners();

// document.querySelectorAll('.hasHoverTooltip').forEach(element => {
//     element.addEventListener('mouseenter', () => showTooltip(element.id));
//     element.addEventListener('mouseleave', hideTooltip);
// });

function checkItemForStat(path,name,statistic,type) {
    let tags = path.tags

    let newTagArray = [];

    if (!type) {
        let stats = Object.keys(path.stats);
        for (entry of stats) {
            newTagArray.push(entry);
        }
    }
    if (type != "prime") {
        let tags = path.tags
        for (entry of tags) {
            newTagArray.push(entry);
        }
    }
    else {
        let stats = Object.keys(path.primeStats);
        for (entry of stats) {
            newTagArray.push(entry);
        }
    }
    // }
    // else {
    //     if (path.property)
    // }

    let itemFound = false;

    for (entry of newTagArray) {
        if (entry === statistic) {itemFound = true;}
    }

    return itemFound ? `${name}<br>` : "";
}

function returnItemsWithStat(statistic) {
    let htmlString = "";
    let globalReference = globalRecords;
    let accessoryReference = globalReference.accessories;
    let consumableReference = globalReference.consumables;
    let weaponReference = globalReference.weapons;
    let armorReference = globalReference.armor;
    let traitReference = globalReference.greatTraitRecords
    let classReference = globalReference.archs;

    htmlString += checkItemForStat(amulets[accessoryReference.amulet],accessoryReference.amulet,statistic);
    for (let i=1;i<=4;i++) {
        htmlString += checkItemForStat(rings[accessoryReference[`ring${i}`]],accessoryReference[`ring${i}`],statistic);
    }
    htmlString += checkItemForStat(relics[accessoryReference.relic],accessoryReference.relic,statistic);
    for (let i=1;i<=3;i++) {
        htmlString += checkItemForStat(fragments[accessoryReference[`fragment${i}`]],accessoryReference[`fragment${i}`],statistic);
    }

    for (let i=1;i<=7;i++) {
        htmlString += checkItemForStat(concoctions[consumableReference[`concoction${i}`]],consumableReference[`concoction${i}`],statistic);
    }
    for (let i=1;i<=4;i++) {
        htmlString += checkItemForStat(quickUses[consumableReference[`quickUse${i}`]],consumableReference[`quickUse${i}`],statistic);
    }
    htmlString += checkItemForStat(primary[weaponReference.primary],weaponReference.primary,statistic);
    htmlString += checkItemForStat(rangedMutators[weaponReference.primaryMutator],weaponReference.primaryMutator,statistic);
    htmlString += primary[weaponReference.primary].builtIN ? checkItemForStat(builtInPrimary[primary[weaponReference.primary].builtIN],primary[weaponReference.primary].builtIN,statistic)
    : checkItemForStat(rangedMods[weaponReference.primaryMod],weaponReference.primaryMod,statistic);
    htmlString += checkItemForStat(melee[weaponReference.melee],weaponReference.melee,statistic);
    htmlString += checkItemForStat(meleeMutators[weaponReference.meleeMutator],weaponReference.meleeMutator,statistic);
    htmlString += melee[weaponReference.melee].builtIN ? checkItemForStat(builtInMelee[melee[weaponReference.melee].builtIN],melee[weaponReference.melee].builtIN,statistic)
    : "";
    htmlString += checkItemForStat(secondary[weaponReference.secondary],weaponReference.secondary,statistic);
    htmlString += checkItemForStat(rangedMutators[weaponReference.secondaryMutator],weaponReference.secondaryMutator,statistic);
    htmlString += secondary[weaponReference.secondary].builtIN ? checkItemForStat(builtInSecondary[secondary[weaponReference.secondary].builtIN],secondary[weaponReference.secondary].builtIN,statistic)
    : checkItemForStat(rangedMods[weaponReference.secondaryMod],weaponReference.secondaryMod,statistic);
    htmlString += checkItemForStat(helmets[armorReference.helmet],armorReference.helmet,statistic);
    htmlString += checkItemForStat(chests[armorReference.chest],armorReference.chest,statistic);
    htmlString += checkItemForStat(legs[armorReference.leg],armorReference.leg,statistic);
    htmlString += checkItemForStat(hands[armorReference.hand],armorReference.hand,statistic);

    for (let i=0;i<traitReference.length;i++) {
        htmlString += checkItemForStat(traits[traitReference[i].name],traitReference[i].name,statistic,"trait");
    }


    htmlString += checkItemForStat(classInfo[classReference.one.class],classInfo[classReference.one.class].primePerk,statistic,"prime");
    htmlString += checkItemForStat(classInfo[classReference.one.class].abilities[classReference.one.ability],classReference.one.ability,statistic);
    for (let i=1;i<=4;i++) {
        htmlString += checkItemForStat(classInfo[classReference.one.class].passives[`passive${i}`],classInfo[classReference.one.class].passives[`passive${i}`].name,statistic);
    }

    htmlString += checkItemForStat(classInfo[classReference.two.class].abilities[classReference.two.ability],classReference.two.ability,statistic);
    for (let i=1;i<=4;i++) {
        htmlString += checkItemForStat(classInfo[classReference.two.class].passives[`passive${i}`],classInfo[classReference.two.class].passives[`passive${i}`].name,statistic);
    }

    // classReference


    return htmlString;
}

let tooltips = {
    updateTooltipDisplay(elemID,breakdownString,statArray) {
        let listItemsHeader = "<div>The following selections can contribute to this statistic:</div>"
        let statsString = "";

        for (let i=0;i<statArray.length;i++) {
            statsString += returnItemsWithStat(statArray[i])
        }


        tooltipStorage[elemID] =
        (breakdownString ? breakdownString : "")
        + (breakdownString && statsString ? "<br><br>" : "")
        + (statsString ? listItemsHeader + statsString : "");
    },
}