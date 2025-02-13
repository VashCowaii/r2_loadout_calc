let tooltipMath = {
    checkItemForStat(path,name,statistic,type) {
        //Checks the path provided for a given statistic, and if the stat exists within the path's stats or tags arrays, it returns the item name
        let tags = path.tags
        let newTagArray = [];
    
        if (!type) {//pushes the stats into the tags array to merge it all into one thing
            let stats = Object.keys(path.stats);
            for (entry of stats) {newTagArray.push(entry);}
        }
        if (type != "prime") {
            let tags = path.tags
            for (entry of tags) {newTagArray.push(entry);}
        }
        else {//prime was only for remnant 2 but the functionality might be useful later so I kept it as is here
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
        let characterRef = globalRecords.character;
        let characterMods = characterRef.mods;
        let componentRef = globalRecords.components;
        let reactorRef = globalRecords.reactor;
        let weaponRef = globalRecords.weapon;
        let teamRef = globalRecords.teamBuffs;
        let enemyRef = globalRecords.enemyBuffs;

        const ratioTable = {
            "Fire" : "PowerRatioFire",
            "Non-Attribute" : "PowerRatioNonAttribute",
            "Electric" : "PowerRatioElectric",
            "Chill" : "PowerRatioChill",
            "Toxic" : "PowerRatioToxic",
            "Tech" : "PowerRatioTech",
            "Singular" : "PowerRatioSingular",
            "Dimension" : "PowerRatioDimension",
            "Fusion": "PowerRatioFusion"
        }
    
        //-----------------------------------------------//
        //------------REACTOR--------------------------//
        //-----------------------------------------------//
        //reactor attribute/type
        //we're creating a pseudo object for the reactor since reactors don't really have stats or tag options like other items do in my code
        //the values themselves do not matter, we're just recreating the object structure that everything else has for it to use
        const referenceTagsAttribute = {"stats": {[ratioTable[reactorRef.currentAttribute]]: 0,},"tags": []}
        htmlString += tooltipMath.checkItemForStat(referenceTagsAttribute,`${reactorRef.currentAttribute} - Reactor Attribute`,statistic);
        const referenceTagsType = {"stats": {[ratioTable[reactorRef.currentType]]: 0,}, "tags": []}
        htmlString += tooltipMath.checkItemForStat(referenceTagsType,`${reactorRef.currentType} - Reactor Type`,statistic);
        //reactor substats
        htmlString += tooltipMath.checkItemForStat(reactorSubRolls[reactorRef.subRoll1],`${reactorRef.subRoll1} - Reactor`,statistic);
        htmlString += tooltipMath.checkItemForStat(reactorSubRolls[reactorRef.subRoll2],`${reactorRef.subRoll2} - Reactor`,statistic);
        //reactor weapon condition
        const referenceTagsOptimization = {"stats": {"PowerOptimization": 0,},"tags": []}
        htmlString += tooltipMath.checkItemForStat(referenceTagsOptimization,`Reactor Weapon Match`,statistic);

        //-----------------------------------------------//
        //------------CHARACTER MODS--------------------------//
        //-----------------------------------------------//
        //character mods
        for (let i=3;i<=12;i++) {
            htmlString += tooltipMath.checkItemForStat(modData[characterMods[i-1]],characterMods[i-1],statistic);
        }

        //-----------------------------------------------//
        //------------ABILITIES--------------------------//
        //-----------------------------------------------//
        const selectedCharacter = characterRef.currentCharacter;
        const arrayRef = characterRef.abilityArray;
        const abilityRefs = characters[selectedCharacter].abilities;

        for (let i=1;i<=5;i++) {
            const path = arrayRef[i-1] === 0 ? "base" : arrayRef[i-1];
            const abilityString = `ability${i}`;

            // formulasValues.pullStats(index,abilityRefs[abilityString][path].stats);

            htmlString += tooltipMath.checkItemForStat(abilityRefs[abilityString][path],`Skill ${i} - ${abilityRefs[abilityString][path].name}`,statistic);
        }

        //-----------------------------------------------//
        //------------COMPONENTS--------------------------//
        //-----------------------------------------------//
        // componentSetBonuses
        htmlString += tooltipMath.checkItemForStat(componentSetBonuses[componentRef.current2piece]["2pc"],`${componentRef.current2piece} - 2pc`,statistic);
        htmlString += tooltipMath.checkItemForStat(componentSetBonuses[componentRef.current4piece]["4pc"],`${componentRef.current4piece} - 4pc`,statistic);
        //component base stat
        htmlString += tooltipMath.checkItemForStat(auxiliary[componentRef.auxiliary],`${componentRef.auxiliary} - Auxiliary`,statistic);
        htmlString += tooltipMath.checkItemForStat(sensor[componentRef.sensor],`${componentRef.sensor} - Sensor`,statistic);
        htmlString += tooltipMath.checkItemForStat(memory[componentRef.memory],`${componentRef.memory} - Memory`,statistic);
        htmlString += tooltipMath.checkItemForStat(processor[componentRef.processor],`${componentRef.processor} - Processor`,statistic);
        //component substats
        htmlString += tooltipMath.checkItemForStat(auxiliaryRolls[componentRef.auxiliarySub1],`${componentRef.auxiliarySub1} - Auxiliary`,statistic);
        htmlString += tooltipMath.checkItemForStat(auxiliaryRolls[componentRef.auxiliarySub2],`${componentRef.auxiliarySub2} - Auxiliary`,statistic);
        htmlString += tooltipMath.checkItemForStat(sensorRolls[componentRef.sensorSub1],`${componentRef.sensorSub1} - Sensor`,statistic);
        htmlString += tooltipMath.checkItemForStat(sensorRolls[componentRef.sensorSub2],`${componentRef.sensorSub2} - Sensor`,statistic);
        htmlString += tooltipMath.checkItemForStat(memoryRolls[componentRef.memorySub1],`${componentRef.memorySub1} - Memory`,statistic);
        htmlString += tooltipMath.checkItemForStat(memoryRolls[componentRef.memorySub2],`${componentRef.memorySub2} - Memory`,statistic);
        htmlString += tooltipMath.checkItemForStat(processorRolls[componentRef.processorSub1],`${componentRef.processorSub1} - Processor`,statistic);
        htmlString += tooltipMath.checkItemForStat(processorRolls[componentRef.processorSub2],`${componentRef.processorSub2} - Processor`,statistic);

        //-----------------------------------------------//
        //------------WEAPON--------------------------//
        //-----------------------------------------------//
        //weapon mods
        let modArrayRef = weaponRef.mods;
        const weaponModsCategory = userTriggers.weaponTypeModList[sniperList[globalRecords.weapon.currentWeapon].ammoType];
        for (let i=1;i<=10;i++) {
            let modName = modArrayRef[i-1]
            let path = weaponModsCategory[modName];
            htmlString += tooltipMath.checkItemForStat(path,modName,statistic);
        }
        //weapon substat rolls
        htmlString += tooltipMath.checkItemForStat(weaponSubstatList[weaponRef.subRoll1],`${weaponRef.subRoll1} - Weapon Substat 1`,statistic);
        htmlString += tooltipMath.checkItemForStat(weaponSubstatList[weaponRef.subRoll2],`${weaponRef.subRoll2} - Weapon Substat 2`,statistic);
        htmlString += tooltipMath.checkItemForStat(weaponSubstatList[weaponRef.subRoll3],`${weaponRef.subRoll3} - Weapon Substat 3`,statistic);
        htmlString += tooltipMath.checkItemForStat(weaponSubstatList[weaponRef.subRoll4],`${weaponRef.subRoll4} - Weapon Substat 4`,statistic);
        //weapon core rolls
        htmlString += tooltipMath.checkItemForStat(coreRainbow[weaponRef.coreRoll1],`${weaponRef.coreRoll1} - Weapon Core 1`,statistic)
        htmlString += tooltipMath.checkItemForStat(coreRainbow[weaponRef.coreRoll2],`${weaponRef.coreRoll2} - Weapon Core 2`,statistic)
        htmlString += tooltipMath.checkItemForStat(coreRainbow[weaponRef.coreRoll3],`${weaponRef.coreRoll3} - Weapon Core 3`,statistic)
        htmlString += tooltipMath.checkItemForStat(coreRainbow[weaponRef.coreRoll4],`${weaponRef.coreRoll4} - Weapon Core 4`,statistic)
        htmlString += tooltipMath.checkItemForStat(coreRainbow[weaponRef.coreRoll5],`${weaponRef.coreRoll5} - Weapon Core 5`,statistic)
        //weapon ability if applicable
        const weaponName = weaponRef.currentWeapon;
        htmlString += tooltipMath.checkItemForStat(sniperList[weaponName],`${weaponName} - Weapon Ability`,statistic);


        //-----------------------------------------------//
        //------------TEAM BUFFS--------------------------//
        //-----------------------------------------------//
        htmlString += tooltipMath.checkItemForStat(teamRef,`Team Buffs Option`,statistic);
        htmlString += tooltipMath.checkItemForStat(enemyRef,`Enemy Buffs Option`,statistic);

    
        return htmlString;
    },
    updateTooltipDisplay(elemID,breakdownString,statArray) {
        let listItemsHeader = "<div>The following selections can contribute to this statistic:</div>"
        let statsString = "";

        for (let i=0;i<statArray.length;i++) {
            statsString += tooltipMath.returnItemsWithStat(statArray[i]);
            statsString += tooltipMath.returnItemsWithStat(`${statArray[i]}CORE`);
        }

        tooltipStorage[elemID] =
        (breakdownString ? breakdownString : "")
        + (breakdownString && statsString ? "<br><br>" : "")
        + (statsString ? listItemsHeader + statsString : "");
    },
}