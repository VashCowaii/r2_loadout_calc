let tooltipMath = {
    checkItemForStat(path,name,statistic,type) {
        //Checks the path provided for a given statistic, and if the stat exists within the path's stats or tags arrays, it returns the item name
        let tags = path.tags
        let newTagArray = [];
    
        if (!type) {
            let stats = Object.keys(path.stats);
            for (entry of stats) {newTagArray.push(entry);}
        }
        if (type != "prime") {
            let tags = path.tags
            for (entry of tags) {newTagArray.push(entry);}
        }
        else {
            let stats = Object.keys(path.primeStats);
            for (entry of stats) {newTagArray.push(entry);}
        }
    
        let itemFound = false;
    
        for (entry of newTagArray) {
            if (entry === statistic) {itemFound = true;}
        }
    
        return itemFound ? `${name}<br>` : "";
    },
    returnItemsWithStat(statistic) {
        //This is a function to go over every possible equipped item, check if it the item can at any point provide the target, and if so, return the item names.
        let htmlString = "";
        let globalReference = globalRecords;
        let accessoryReference = globalReference.accessories;
        let consumableReference = globalReference.greatConsumableRecords;
        let concoctionReference = globalReference.greatConcoctionRecords;
        let weaponReference = globalReference.weapons;
        let armorReference = globalReference.armor;
        let traitReference = globalReference.greatTraitRecords
        let classReference = globalReference.archs;
    
        htmlString += tooltipMath.checkItemForStat(amulets[accessoryReference.amulet],accessoryReference.amulet,statistic);
        for (let i=1;i<=4;i++) {
            htmlString += tooltipMath.checkItemForStat(rings[accessoryReference[`ring${i}`]],accessoryReference[`ring${i}`],statistic);
        }
        htmlString += tooltipMath.checkItemForStat(relics[accessoryReference.relic],accessoryReference.relic,statistic);
        for (let i=1;i<=3;i++) {
            htmlString += tooltipMath.checkItemForStat(fragments[accessoryReference[`fragment${i}`]],accessoryReference[`fragment${i}`],statistic);
        }
    

        for (let entry of consumableReference) {
            htmlString += tooltipMath.checkItemForStat(quickUses[entry],entry,statistic);
        }
        for (let entry of concoctionReference) {
            htmlString += tooltipMath.checkItemForStat(concoctions[entry],entry,statistic);
        }

        htmlString += tooltipMath.checkItemForStat(primary[weaponReference.primary],weaponReference.primary,statistic);
        htmlString += tooltipMath.checkItemForStat(rangedMutators[weaponReference.primaryMutator],weaponReference.primaryMutator,statistic);
        htmlString += primary[weaponReference.primary].builtIN ? tooltipMath.checkItemForStat(builtInPrimary[primary[weaponReference.primary].builtIN],primary[weaponReference.primary].builtIN,statistic)
        : tooltipMath.checkItemForStat(rangedMods[weaponReference.primaryMod],weaponReference.primaryMod,statistic);
        htmlString += tooltipMath.checkItemForStat(melee[weaponReference.melee],weaponReference.melee,statistic);
        htmlString += tooltipMath.checkItemForStat(meleeMutators[weaponReference.meleeMutator],weaponReference.meleeMutator,statistic);
        htmlString += melee[weaponReference.melee].builtIN ? tooltipMath.checkItemForStat(builtInMelee[melee[weaponReference.melee].builtIN],melee[weaponReference.melee].builtIN,statistic)
        : "";
        htmlString += tooltipMath.checkItemForStat(secondary[weaponReference.secondary],weaponReference.secondary,statistic);
        htmlString += tooltipMath.checkItemForStat(rangedMutators[weaponReference.secondaryMutator],weaponReference.secondaryMutator,statistic);
        htmlString += secondary[weaponReference.secondary].builtIN ? tooltipMath.checkItemForStat(builtInSecondary[secondary[weaponReference.secondary].builtIN],secondary[weaponReference.secondary].builtIN,statistic)
        : tooltipMath.checkItemForStat(rangedMods[weaponReference.secondaryMod],weaponReference.secondaryMod,statistic);
        htmlString += tooltipMath.checkItemForStat(helmets[armorReference.helmet],armorReference.helmet,statistic);
        htmlString += tooltipMath.checkItemForStat(chests[armorReference.chest],armorReference.chest,statistic);
        htmlString += tooltipMath.checkItemForStat(legs[armorReference.leg],armorReference.leg,statistic);
        htmlString += tooltipMath.checkItemForStat(hands[armorReference.hand],armorReference.hand,statistic);
    
        for (let i=0;i<traitReference.length;i++) {
            htmlString += tooltipMath.checkItemForStat(traits[traitReference[i].name],traitReference[i].name,statistic,"trait");
        }
    
    
        htmlString += tooltipMath.checkItemForStat(classInfo[classReference.one.class],classInfo[classReference.one.class].primePerk,statistic,"prime");
        htmlString += tooltipMath.checkItemForStat(classInfo[classReference.one.class].abilities[classReference.one.ability],classReference.one.ability,statistic);
        for (let i=1;i<=4;i++) {
            htmlString += tooltipMath.checkItemForStat(classInfo[classReference.one.class].passives[`passive${i}`],classInfo[classReference.one.class].passives[`passive${i}`].name,statistic);
        }
    
        htmlString += tooltipMath.checkItemForStat(classInfo[classReference.two.class].abilities[classReference.two.ability],classReference.two.ability,statistic);
        for (let i=1;i<=4;i++) {
            htmlString += tooltipMath.checkItemForStat(classInfo[classReference.two.class].passives[`passive${i}`],classInfo[classReference.two.class].passives[`passive${i}`].name,statistic);
        }
    
        // classReference
    
    
        return htmlString;
    },
    updateTooltipDisplay(elemID,breakdownString,statArray) {
        let listItemsHeader = "<div>The following selections can contribute to this statistic:</div>"
        let statsString = "";

        for (let i=0;i<statArray.length;i++) {
            statsString += tooltipMath.returnItemsWithStat(statArray[i])
        }

        tooltipStorage[elemID] =
        (breakdownString ? breakdownString : "")
        + (breakdownString && statsString ? "<br><br>" : "")
        + (statsString ? listItemsHeader + statsString : "");
    },
}