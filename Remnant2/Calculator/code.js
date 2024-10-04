/* ---------------------------------------------------------------------------------------- */
/* ------------------ Everything used in updateFormulas() --------------------------------- */
/* ---------------------------------------------------------------------------------------- */
let formulasValues = {
  //Used in updateFormulas() to fill trait values on whatever table is passed through
  pullTraits (index) {
    const recordReference = globalRecords.greatTraitRecords; //Yoink all active trait values

    for (const trait of recordReference) {
      if (trait.name === "") {continue;}
      const traitLevel = trait.level;
      const traitPath = traits[trait.name];
      const propertyArray = Array.isArray(traitPath.property);
      const secondProperty = traitPath.property2;
      const secondPropertyArray = Array.isArray(traitPath.property);

      if (traitPath.property === "") {continue;}

      if (traitPath) {
        const levelRef = traitPath.level[traitLevel];
        if (!propertyArray) {
          if (Array.isArray(levelRef)) {index[traitPath.property] *= 1 + levelRef[0];}//times multiplicative values
          else {index[traitPath.property] += levelRef;}
        }
        else {
          for (const attribute of traitPath.property) {index[attribute] += traitPath.level[traitLevel];}//Otherwise just add the shit
        }

        if (secondProperty) {
          const level2Ref = traitPath.level2[traitLevel];
          if (!secondPropertyArray) {
            if (Array.isArray(level2Ref)) {index[traitPath.property2] *= 1 + level2Ref[0];}//times multiplicative values
            else {index[traitPath.property2] += level2Ref;}
          }
          else {
            for (const attribute of traitPath.property2) {index[attribute] += level2Ref;}//Otherwise just add the shit
          }
        }
      }
    }
  },
  //Used in updateFormulas() to read gear/accessory specific statistics and add them to the master table
  //Utilizes toggle states on the main UI version
  pullGearStatsCycles(index,ping,armorOnly,overAccessoryRef,overWeaponRef) {
    let pullStatsCallArray = formulasValues.pullStatsArray;
    if (!ping || armorOnly) {//ARMOR
      const {helmet,chest,leg,hand} = globalRecords.armor;
      // console.log(globalRecords.armor)
      pullStatsCallArray(index,[helmets[helmet].stats,chests[chest].stats,legs[leg].stats,hands[hand].stats]);
      if (armorOnly) {return}
    }

    const {amulet,ring1,ring2,ring3,ring4,relic} = overAccessoryRef;
    const {primary,primaryMutator,primaryMod,melee,meleeMutator,secondary,secondaryMutator,secondaryMod} = overWeaponRef;
    let builtInRef1 = primaries[primary].builtIN;
    let builtInRef2 = melees[melee].builtIN;
    let builtInRef3 = secondaries[secondary].builtIN;

    let iterableArray = [
      amulets[amulet].stats,rings[ring1].stats,rings[ring2].stats,rings[ring3].stats,rings[ring4].stats,
      relics[relic].stats,
      // fragments[fragment1].stats,fragments[fragment2].stats,fragments[fragment3].stats,
      primaries[primary].stats,melees[melee].stats,secondaries[secondary].stats,rangedMutators[primaryMutator].stats,meleeMutators[meleeMutator].stats,rangedMutators[secondaryMutator].stats,
      builtInRef1 ? builtInPrimary[builtInRef1].stats : rangedMods[primaryMod].stats,
      builtInRef2 ? builtInMelee[builtInRef2].stats : {},
      builtInRef3 ? builtInSecondary[builtInRef3].stats : rangedMods[secondaryMod].stats,
    ]

    // for (let i=1;i<=9;i++) {
    //   let categoryRef = i<9 ? prismRowOptions : legendaryPerks;
    //   let current = categoryRef[globalRecords.greatRowRecords[i-1].name];
    //   if (current.color === "Combo") {
    //     refArray.push({item: categoryRef[current.requirements[0]].stats},{item: categoryRef[current.requirements[1]].stats});
    //     continue;
    //   }
    //   else {
    //     refArray.push({item: current.stats})
    //   }
    // }

    //this is just for frags, as we pull the stats of all prism rows BEFORE the cycles even start
    for (let i=1;i<=3;i++) {
      let current = prismRowOptions[globalRecords.greatRowRecords[i-1].name];
      iterableArray.push(current.stats);
    }

    //Concoctions only, consumables are static
    recordPath = globalRecords.greatConcoctionRecords;
    globalRecords.totalConcLimit = 1 + index.ConcLimit;
    for (let i=1;i<=recordPath.length;i++) {
      let concoction = recordPath[i-1];
      iterableArray.push(concoctions[concoction].stats);
    }
    pullStatsCallArray(index,iterableArray);
    if (ping) {return {...index}}
    //We can afford to call conc stats like we do here bc conc combos are established by the main thread, which already accounts for conc limits. The UI calcs can't do this, though, they need to call stats first THEN concoctions stats right after
  },
  pullGearStats(index) {
    let pullStatsCall = formulasValues.pullStats;
    let archsTableName = globalRecords.archs;
    let arch1Path = classInfo[archsTableName.one.class];
    let arch2Path = classInfo[archsTableName.two.class];
    let ability1Path = arch1Path.abilities[archsTableName.one.ability];
    let ability2Path = arch2Path.abilities[archsTableName.two.ability];

    const {helmet,chest,leg,hand} = globalRecords.armor;
    const {amulet,ring1,ring2,ring3,ring4,relic} = globalRecords.accessories;
    const {primary,primaryMutator,primaryMod,melee,meleeMutator,secondary,secondaryMutator,secondaryMod} = globalRecords.weapons;
    let builtInRef1 = primaries[primary].builtIN;
    let builtInRef2 = melees[melee].builtIN;
    let builtInRef3 = secondaries[secondary].builtIN;

    function callArrayStats(refArray) {
      for (let entry of refArray) {
        if (entry.toggle && readSelection(entry.toggle).checked) {continue;}
        pullStatsCall(index,entry.item);
      }
    }

    let refArray = [
      {item: helmets[helmet].stats, toggle: 'USEtoggledHead'},{item: chests[chest].stats, toggle: 'USEtoggledChest'},{item: legs[leg].stats, toggle: 'USEtoggledLegs'},{item: hands[hand].stats, toggle: 'USEtoggledHands'},

      {item: amulets[amulet].stats, toggle: 'USEtoggledAmulet'},{item: rings[ring1].stats, toggle: 'USEtoggledRing1'},{item: rings[ring2].stats, toggle: 'USEtoggledRing2'},{item: rings[ring3].stats, toggle: 'USEtoggledRing3'},{item: rings[ring4].stats, toggle: 'USEtoggledRing4'},
      {item: relics[relic].stats, toggle: 'USEtoggledRelic'},
      // {item: fragments[fragment1].stats},{item: fragments[fragment2].stats},{item: fragments[fragment3].stats},
      {item: primaries[primary].stats, toggle: 'USEtoggledPrimary'},{item: rangedMutators[primaryMutator].stats, toggle: 'USEtoggledpMutator'},{item: builtInRef1 ? builtInPrimary[builtInRef1].stats : rangedMods[primaryMod].stats, toggle: 'USEtoggledpMod'},
      {item: melees[melee].stats, toggle: 'USEtoggledMelee'},{item: meleeMutators[meleeMutator].stats, toggle: 'USEtoggledmMutator'},{item: builtInRef2 ? builtInMelee[builtInRef2].stats : {}, toggle: 'USEtoggledmMod'},
      {item: secondaries[secondary].stats, toggle: 'USEtoggledSecondary'},{item: rangedMutators[secondaryMutator].stats, toggle: 'USEtoggledsMutator'},{item: builtInRef3 ? builtInSecondary[builtInRef3].stats : rangedMods[secondaryMod].stats, toggle: 'USEtoggledsMod'},

      {item: arch1Path.primeStats, toggle: 'USEtoggledPrimeP'},{item: ability1Path.stats, toggle: 'USEtoggledAbility1'},{item: ability2Path.stats, toggle: 'USEtoggledAbility2'},
      // {item: hands[hand].stats, toggle: 'USEtoggledHands'},
    ]
    for (let i=1;i<=9;i++) {
      let categoryRef = i<9 ? prismRowOptions : legendaryPerks;
      let current = categoryRef[globalRecords.greatRowRecords[i-1].name];
      if (current.color === "Combo") {
        refArray.push({item: categoryRef[current.requirements[0]].stats},{item: categoryRef[current.requirements[1]].stats});
        continue;
      }
      else {
        refArray.push({item: current.stats})
      }
      // console.log(globalRecords.greatRowRecords[i-1].name)
    }
    //Push PASSIVES
    for (let i=1;i<=4;i++) {
      refArray.push({item: arch1Path.passives[`passive${i}`].stats, toggle: `USEtoggledPassive${i}`},{item: arch2Path.passives[`passive${i}`].stats, toggle: `USEtoggledPassive${i+4}`});
    }
    
    callArrayStats(refArray);

    let refArray2 = [];
    //Concoctions need to be called after, since concoction limit needs to be established.
    globalRecords.totalConcLimit = 1 + index.ConcLimit;
    manipulateConsumable.updateConsumableCollection("concoction");
    let recordPath = globalRecords.greatConcoctionRecords;
    for (let i=1;i<=globalRecords.totalConcLimit;i++) {
      if (i<=recordPath.length) {refArray2.push({item: concoctions[recordPath[i-1]].stats, toggle: `USEtoggledConc${i}`});}
    }
    //Push Quick-Use Consumables
    manipulateConsumable.updateConsumableCollection("quickUse");
    recordPath = globalRecords.greatConsumableRecords;
    for (let i=1;i<=recordPath.length;i++) {
      if (quickUses[recordPath[i-1]]) {refArray2.push({item: quickUses[recordPath[i-1]].stats, toggle: `USEtoggledQuick${i}`});}
    }

    callArrayStats(refArray2);
  },
  //Shorthand for looping through an elements "stats" object and adding it to the corresponding master value
  pullStats(index,path) {
    for (let elements in path) {
      if (Array.isArray(path[elements])) {index[elements] *= 1 + path[elements][0];}//If the statistic is multiplicative, like REDmg or DMGKept, etc.
      else {index[elements] += path[elements];}//If the value is a general value, simply add it to the existing value on greatTable
    }
  },
  pullStatsArray(index,pathsArray) {
    let arrayCheck = Array.isArray;
    for (let path of pathsArray) {
      for (let elements in path) {
        let pathElement = path[elements];
        if (arrayCheck(pathElement)) {index[elements] *= 1 + pathElement[0]}
        else {index[elements] += pathElement}
      }
    }
  },
  //Shorthand for shit I got tired of typing every god damn time.
  updateDisplay(elemID,statistic,rounding,percent) {
    let percentage = percent ?? "";
    readSelection(elemID).innerHTML = `${statistic.toFixed(rounding)}${percentage}`;
  },
  readActiveConditionalsGeneralCYCLES(tieredFunctionStorage,conditionalPath) {//cycle specific version, still used within cycleWorker.js
    if (conditionalPath && conditionalPath.keys) {
      for (let key of conditionalPath.keys) {
        if (!tieredFunctionStorage[key]) {tieredFunctionStorage[key] = [];}
        tieredFunctionStorage[key].push(customItemFunctions[conditionalPath[key]])
      }
    }
  },
  readActiveConditionalsGeneralCYCLES_ARRAY(tieredFunctionStorage,conditionalPathArray) {//cycle specific version using an array instead of multiple separate calls
    for (let conditionalPath of conditionalPathArray) {
      let currentPath = conditionalPath.item;
      let currentKeys = currentPath.keys;
      if (currentPath && currentKeys) {
        for (let key of currentKeys) {
          if (!tieredFunctionStorage[key]) {tieredFunctionStorage[key] = [];}
          tieredFunctionStorage[key].push(customItemFunctions[currentPath[key]])
        }
      }
    }
  },
  readActiveConditionalsGeneralMAINUI(tieredFunctionStorage,toggleCheck,conditionalPath) {//main UI version
    if (!toggleCheck && conditionalPath && conditionalPath.keys) {
      for (let key of conditionalPath.keys) {
        if (!tieredFunctionStorage[key]) {tieredFunctionStorage[key] = [];}
        tieredFunctionStorage[key].push(customItemFunctions[conditionalPath[key]])
      }
    }
  },
  readActiveConditionalsTraits(tieredFunctionStorage,conditionalPath,traitLevel) {//Pushes an array so we can track the trait level as well as the function used
    if (conditionalPath && conditionalPath.keys) {
      for (let key of conditionalPath.keys) {
        if (!tieredFunctionStorage[key]) {tieredFunctionStorage[key] = [];}
        tieredFunctionStorage[key].push([customItemFunctions[conditionalPath[key]],traitLevel])
      }
    }
  },
  callStoredFunctions(tieredFunctionStorage,tierName,index,insertedStatistic) {
    let targetStorage = tieredFunctionStorage[tierName];
    if (targetStorage) {
      for (let storedFunction in targetStorage) {
        let target = targetStorage[storedFunction];
        if (Array.isArray(target) && target[0]) {target[0](index,target[1]);}//traits are pushed as arrays with a level as the inserted stat
        else if (storedFunction) {target(index,insertedStatistic);}
      }
    }
  },
  storeActiveConditionals(isUIcalcs,overAccessoryRef,overWeaponRef) {
    let tieredFunctionStorage = {};
    const {ring1,ring2,ring3,ring4,relic,fragment1,fragment2,fragment3,amulet} = overAccessoryRef;
    const {primary,secondary,melee,primaryMutator,meleeMutator,secondaryMutator,primaryMod,secondaryMod} = overWeaponRef;
    const builtInRef1 = primaries[primary].builtIN;
    const builtInRef2 = melees[melee].builtIN;
    const builtInRef3 = secondaries[secondary].builtIN;

    let refArray = [
      {item: amulets[amulet].usesConditional, toggle: 'USEtoggledAmulet'},{item: rings[ring1].usesConditional, toggle: 'USEtoggledRing1'},{item: rings[ring2].usesConditional, toggle: 'USEtoggledRing2'},{item: rings[ring3].usesConditional, toggle: 'USEtoggledRing3'},{item: rings[ring4].usesConditional, toggle: 'USEtoggledRing4'},
      {item: relics[relic].usesConditional, toggle: 'USEtoggledRelic'},
      {item: rangedMutators[primaryMutator].usesConditional, toggle: 'USEtoggledpMutator'},{item: builtInRef1 ? builtInPrimary[builtInRef1].usesConditional : rangedMods[primaryMod].usesConditional, toggle: 'USEtoggledpMod'},
      {item: meleeMutators[meleeMutator].usesConditional, toggle: 'USEtoggledmMutator'},{item: builtInRef2 ? builtInMelee[builtInRef2].usesConditional : {}, toggle: 'USEtoggledmMod'},
      {item: rangedMutators[secondaryMutator].usesConditional, toggle: 'USEtoggledsMutator'},{item: builtInRef3 ? builtInSecondary[builtInRef3].usesConditional : rangedMods[secondaryMod].usesConditional, toggle: 'USEtoggledsMod'},
    ]

    for (let i=1;i<=9;i++) {
      let categoryRef = i<9 ? prismRowOptions : legendaryPerks;
      let current = categoryRef[globalRecords.greatRowRecords[i-1].name];
      if (current.color === "Combo") {
        refArray.push({item: categoryRef[current.requirements[0]].usesConditional},{item: categoryRef[current.requirements[1]].usesConditional});
        continue;
      }
      else {
        refArray.push({item: current.usesConditional})
      }
      // console.log(globalRecords.greatRowRecords[i-1].name)
    }

      if (isUIcalcs) {
        let archsTableName = globalRecords.archs;
        let arch1Path = classInfo[archsTableName.one.class];
        let arch2Path = classInfo[archsTableName.two.class];
        let checkConditional = formulasValues.readActiveConditionalsGeneralMAINUI;

        //Push PASSIVES, only the UI calc has to do this as the queries have static abilities/passives etc. that are already stored in archs storage in cycleWorker.js
        for (let i=1;i<=4;i++) {refArray.push({item: arch1Path.passives[`passive${i}`].usesConditional, toggle: `USEtoggledPassive${i}`},{item: arch2Path.passives[`passive${i}`].usesConditional, toggle: `USEtoggledPassive${i+4}`});}
        
        for (let entry of refArray) {
            if (entry.toggle && readSelection(entry.toggle).checked) {continue;}
            checkConditional(tieredFunctionStorage,false,entry.item);
        }

        //Yoink all active trait values
        for (const trait of globalRecords.greatTraitRecords) {formulasValues.readActiveConditionalsTraits(tieredFunctionStorage,traits[trait.name].usesConditional,trait.level);}
      }
      else {
        let overKeysArray = globalRecords.tieredFunctionStorageKeys;
        let archsStorage = globalRecords.tieredFunctionStorage;
        let checkConditional = formulasValues.readActiveConditionalsGeneralCYCLES_ARRAY;

        if (overKeysArray.length) {
          for (let key of overKeysArray) {
            if (!tieredFunctionStorage[key]) {tieredFunctionStorage[key] = [];}
            tieredFunctionStorage[key].push(...archsStorage[key]);
          }
        }

        checkConditional(tieredFunctionStorage,refArray);
      }

      return tieredFunctionStorage;//If within cycles, class/passive/ability and trait specific tier pulls are done within cycleWorker.js
  },
}
/* ---------------------------------------------------------------------------------------- */
/* ---------------------- Custom, item-specific functions --------------------------------- */
/* ---------------------------------------------------------------------------------------- */
let customItemFunctions = {
  //Function names are specified in data.js under a given entry's "custom" key.
  //Remember to add stats to tags array in data.js whenever making one of these
  // valueTables[index].anyStatHere += 1;
  // "amulets": {
    abrasiveWhetstone(index) {//50
      if (index.outBLEED>0) {
        index.AllCritChance += 0.15;
        index.AllCritDamage += 0.15;
      }
    },
    birthrightOfTheLost(index) {//0 user input
      index.outEXPOSED += globalRecords.isPerfectDodge ? 1 : 0;
    },
    brewMasters(index) {//0 user selection
      if (index.thisIsAQuery) {
        index.FlatDR += 0.02 * (index.ConcLimit + 1);//If we are in the middle of cycles loops, and maybe the filtered concoctions are less than the limit, always apply the limit amount of DR so we don't skip a possible build
      }
      else {
        for (let i=1;i<=globalRecords.greatConcoctionRecords.length;i++) {
          let customPath = userTrigger.consumableToggleStates.concoctionsToggleArray[i-1];
          if (!customPath) {//We need to see if the toggle is checked or not. True would mean disabled, false means enabled
            index.FlatDR += 0.02;
          }
        }
      }
    },
    chainsOfAmplification(index) {//50
      index.AllDamage += index.outgoingStatus ? 0.20 : 0;
    },
    daredevil(index) {//50
      let armorMissing = 4;
      const {helmet,chest,leg,hand} = globalRecords.armor;
      armorMissing -= (helmet ? 1 : 0) + (chest ? 1 : 0) + (leg ? 1 : 0) + (hand ? 1 : 0);
      index.AllDamage += 0.075 * armorMissing;
      index.MovementSpeed += 0.03 * armorMissing;
      //If Daredevil ever shows up in the cycles, the ping section skips armor checks and forces the player to be naked, so cycles always assume full naked
    },
    deathSoakedIdol(index) {//50
      if (index.outgoingStatus) {
        let maxStacks = 5;
        let count = globalRecords.enemyCount + (index.incomingStatus ? 1 : 0);
        index.AllDamage += Math.min(maxStacks,count) * 0.06;
      }
    },
    differenceEngine(index) {//50
      if (index.Shield > 0) {
        index.Lifesteal += 0.045;
        index.AllDamage += 0.20;
      }
    },
    effigyPendant(index) {//0 user input
      if (globalRecords.greyHealthActive) {
        index.FlatDR += 0.1;
        index.AllDamage += 0.15;
        index.GreyHPHitThreshold += 1;
      }
    },
    energyDiverter(index) {//50
      if (index.Shield > 0) {
        index.AllCritChance += 0.10;
        index.AllDamage += 0.15;
      }
    },
    fragrantThorn(index) {//0. Not user input, but needs to happen first.
      if (index.outgoingStatus) {
        let activeStatus = conditionalHelpers.getActiveUniqueStatuses(index);
        index.outEXPOSED += activeStatus>4 ? 1 : 0;
      }
    },
    "counteredBurdenEffects": {
      "Burden of the Audacious": {stat: "HealingEFF", value: -rings[`Burden of the Audacious`].stats.HealingEFF},
      "Burden of the Departed": {stat: "RelicCharges%", value: [-(3/2) * rings[`Burden of the Departed`].stats[`RelicCharges%`][0]]},
      "Burden of the Destroyer": {stat: "Range%", value: -rings[`Burden of the Destroyer`].stats[`Range%`]},
      "Burden of the Divine": {stat: "AllDamage", value: -rings[`Burden of the Divine`].stats.AllDamage},
      "Burden of the Follower": {stat: "FireRate", value: -rings[`Burden of the Follower`].stats.FireRate},
      "Burden of the Gambler": {stat: "WeakspotDisable", value: -rings[`Burden of the Gambler`].stats.WeakspotDisable},
      "Burden of the Mariner": {stat: "CDR", value: -rings[`Burden of the Mariner`].stats.CDR},
      "Burden of the Mason": {stat: "WeightThreshold", value: -rings[`Burden of the Mason`].stats.WeightThreshold},
      "Burden of the Mesmer": {action: (index) => {index.GlobalHealthModifier *= 1 + (1/3);}},
      "Burden of the Rebel": {stat: "RelicSpeed", value: -rings[`Burden of the Rebel`].stats.RelicSpeed},
      "Burden of the Sciolist": {stat: "Reserves", value: -rings[`Burden of the Sciolist`].stats.Reserves},
      "Burden of the Protector": {stat: "ShieldDuration", value: -rings[`Burden of the Protector`].stats.ShieldDuration},
      "Burden of the Excavator": {stat: "ExplosiveCritChance", value: -rings[`Burden of the Excavator`].stats.ExplosiveCritChance},
      "Burden of the Stargazer": {action: () => {}}, // Negate health cost on skill activation.
      "Burden of the Warlock": {action: () => {}} // Negate health cost on mod activation.
    },//this is explicitly for Gift of the Unbound's burden negation math/effects
    giftOfTheUnbound(index) {//0, based on item selections not stats.
      let activeBurdens = 0;
      let movementModifier = 0.05;
      let customPath = globalRecords.accessories;
      const ringsArray = ["ring1","ring2","ring3","ring4"];
      const burdenEffects = customItemFunctions.counteredBurdenEffects;
      const isNotQuery = !index.thisIsAQuery;

      let counter = 0;
      for (let ring of ringsArray) {
        counter++;
        const currentRing = customPath[ring];
        const burdenPath = burdenEffects[currentRing];
        if (burdenPath) {
          if (isNotQuery && readSelection(`USEtoggledRing${counter}`).checked) {continue;}
          activeBurdens += 1;
          if (burdenPath.stat) {
            if (Array.isArray(burdenPath.value)) {index[burdenPath.stat] *= 1 + burdenPath.value[0];}
            else {index[burdenPath.stat] += burdenPath.value;}
          }
          else if (burdenPath.action) {burdenPath.action(index);}
        }
      }

      if (activeBurdens > 0) {index.MovementSpeed += movementModifier * activeBurdens;}
      //Remember to add checks for the negative effects later, on burden rings, to negate them.
    },
    insulationDriver(index) {//50
      if (index.Bulwark > 0) {
        index.AllDamage += 0.15;
        index.HASTE += 1;
      }
    },
    kineticShieldExchanger(index) {//50
      if (index.Shield > 0) {
        index.ModDamage += 0.25;
        index.ModPowerGen += 0.20;
      }
    },
    navigatorsPendant(index) {//0 user input
      if (globalRecords.armor.helmet === "Navigator's Helm") {index.Blight += 15;}
    },
    neckboneNecklace(index) {//50
      index.AllDamage += index.incomingStatus ? 0.25 : 0;
    },
    nightweaversGrudge(index) {//50
      if (index.incomingStatus || index.outgoingStatus) {
        index.AllCritChance += 0.15;
        index.HASTE += 1;
      }
    },
    oneEyedJokerIdol(index) {//0 user input
      index.AllCritChance += globalRecords.isEvade ? 0.25 : 0;
    },
    oneTrueKingSigil(index) {//base, modifies based on equip, not existing stats.
      let faerinActive = false;
      let faelinActive = false;
      let imposterRings = 0;
      let customPath = globalRecords.accessories;
      const ringsArray = ["ring1","ring2","ring3","ring4"]
      for (let ring of ringsArray) {
        if (customPath[ring] === "Faerin's Sigil") {
          faerinActive = true;imposterRings += 1;
        }
        else if (customPath[ring] === "Faelin's Sigil") {
          faelinActive = true;imposterRings += 1;
        }
      }
      if (imposterRings > 0) {
        let modifier = 0.5;
        if (faerinActive === true) {
          let faeRpath1 = rings[`Faerin's Sigil`].stats.ModPowerGenCrit;
          let faeRpath2 = rings[`Faerin's Sigil`].stats.ModPowerGenWeakspot;
          index.ModPowerGenCrit += faeRpath1 * (modifier * imposterRings);
          index.ModPowerGenWeakspot += faeRpath2 * (modifier * imposterRings);
        }
        if (faelinActive === true) {
          let faeLpath = rings[`Faelin's Sigil`].stats.ModPowerGenCrit;
          index.ModPowerGenMelee += faeLpath * (modifier * imposterRings);
        }
      }
    },
    profaneSoulStone(index) {//0 user input
      let minionCount = +globalRecords.minionCount;
      let modifier = -0.10;
      index.FlatDR += modifier * minionCount;
    },
    ravagersMark(index) {//50
      index.AllDamage += index.outBLEED ? 0.3 : 0;
    },
    soulAnchor(index) {//0 user input
      let customPath = globalRecords.minionCount;
      index.AllDamage += customPath ? 0.2 : 0;
    },
    spiritWisp(index) {//N/A
      //Add mod stuff later
    },
    weightlessWeight(index) {//PostWeightClass
      let weight = index.Encumbrance * (1+index["Encumbrance%"]);
      if (weight < 0) {weight = 0;}
      let multi = Math.floor(weight/5);
      index.StaminaCost += -0.0075 * multi;
      index.MovementSpeed += 0.0075 * multi;
    },
    whisperingMarble(index) {//50
      let bulwarkStacks = Math.min(index.Bulwark,index.BulwarkCap);
      index.AllDamage += 0.02 * bulwarkStacks;
    },
  // },
  // "rings": {//I... I think I'm done...?
    ataeriiBooster(index) {//0 user input
      let referenceTable = globalRecords.archs;
      if (referenceTable.one.class === "Engineer" || referenceTable.two.class === "Engineer" ) {
        index.AllDamage += 0.10;
        index.AllCritChance += 0.10;
      }
    },
    ahanaeCrystal(index) {//50
      if (index.outgoingStatus) {
        let activeStatus = conditionalHelpers.getActiveUniqueStatuses(index);
        index.AllDamage += (0.05 * activeStatus);
      }
    },
    akariWarBand(index) {//0 user input
      let perfectDodge = globalRecords.isPerfectDodge;
      if (perfectDodge === true) {
        index.AllCritChance += 0.10;
        index.AllCritDamage += 0.10;
      }
    },
    alchemyStone(index) {//base
      index.Lifesteal += index.incomingStatus ? 0.06 : 0;
    },
    anastasijasInspiration(index) {//PostHealing
      if (index["HP/S+"] || index["HP/S%"] || index.RelicHPbase) {index.HASTE += 1;}
    },
    blackSpinel(index) {//base
      index["HP/S%"] += index.outgoingStatus ? 0.02 : 0;
    },
    bloodTingedRing(index) {//base
      if (index.outBLEED || index.inBLEED) {index["HP/S+"] += 2;}
    },
    bridgeWardensCrest(index) {//0 user input
      if (globalRecords.isPerfectDodge) {
        index.MeleeDamage += 0.20;
        let weightClass = calcs.getWeight(index).dodgeClass;
        index.FlatDR += globalRecords.isEvade && weightClass === "Flop" ? 0.1 : 0;
      }
    },
    burdenOfTheMason(index,totalDR) {//postDR
      index.MeleeDamage += Math.min(0.80,totalDR) * 0.35
    },
    burdenOfTheMesmer1(index) {//base
      index.GlobalHealthModifier *= 0.80;//health modification
    },
    burdenOfTheMesmer2(index,totalDR) {//postDR
      let floorIncrement = 0.05;
      let dmgScaling = 0.01;
      index.AllDamage += dmgScaling * (Math.floor(Math.min(0.80,totalDR)/floorIncrement));//postDR damage calcs
    },
    driedClayRing(index) {//50
      let bulwarkStacks = Math.min(index.Bulwark,index.BulwarkCap);
      
      let bulwarkDR = -.005*(bulwarkStacks**2) + .075*bulwarkStacks;
      index.AllDamage += 0.5 * bulwarkDR;
    },
    embraceOfShahala(index) {//base
      let activeStatus = 0;

      if (index.incomingStatus) {
        //Slow, bleed, burn, overloaded, corroded
        //Shahala probably counts more statuses than Ahanae does, in terms of player debuffs.
        //Probably needs more work later, to figure out what.
        activeStatus += index.inSLOW ? 1 : 0;
        activeStatus += index.inBLEED ? 1 : 0;
        activeStatus += index.inBURN ? 1 : 0;
        activeStatus += index.inOVERLOADED ? 1 : 0;
        activeStatus += index.inCORRODED ? 1 : 0;
        index.FlatDR += (0.075 * Math.min(2,activeStatus));
      }
    },
    featheryBinding(index) {//50 after haste at 40
      if (index.HASTE) {
        index.ProjectileSpeed += 0.15;
        index.WeaponChargeTime += 0.10;
      }
    },
    floodlitDiamond(index) {//50
      index.AllWeakspot += index.outEXPOSED ? 0.12 : 0;
    },
    flyweightsSting(index) {//50
      let weight = Math.max(0,index.Encumbrance * (1+index["Encumbrance%"]));
      if (weight < 50) {index.MeleeDamage += (1 - (weight/49)) * 0.25;}
    },
    frivolousBand(index) {//0 user input
      if (globalRecords.isPerfectDodge && globalRecords.isEvade) {
        index.FireRate += 0.10;
        index.AttackSpeed += 0.10;
      }
    },
    gameMasters1(index) {//0 user input
      let teamCount = globalRecords.teamCount;
      if (teamCount>1) {
        index.DMGKept *= 1 + ((1/teamCount)-1); //dmgshared adjustments, healing is done in 2
      }
    },
    gameMasters2(index) {//PreHealing
      let teamCount = globalRecords.teamCount;

      index.GlobalHealingEff = index.GlobalHealingEff * 0.5;//Cut healing in half
      if (teamCount>1) {
        index.GlobalHealingEff *= 1/teamCount;//Further divide the healing by team members
      }
    },
    generatingBand(index) {//PreHealing
      if (index.Shield > 0) {index["HP/S%"] += 0.03;}
    },
    gulSignet(index,dodgeClass) {//PostWeightClass
      let currentClass = 0;
      switch (dodgeClass) {
        case "Flop": currentClass = 3;break;
        case "Heavy": currentClass = 2;break;
        case "Medium": currentClass = 1;break;
      }
      index.FlatDR -= 0.025 * currentClass
    },
    haymakersRing(index) {//50
      let weight = index.Encumbrance * (1+index["Encumbrance%"]);
      let modifier = 0.002;
      index.MeleeDamage += weight * modifier;
    },
    kolketEyelet(index) {//PostWeightClass
      let bulwarkStacks = Math.min(index.Bulwark,index.BulwarkCap);
      index["HP/S+"] += 0.3 * bulwarkStacks;
    },
    lodestoneRing(index) {//0 user input
      if (globalRecords.armor.helmet === "Lodestone Crown") {index.AllDamage += 0.05;}
    },
    matriarchsRing(index) {//0 user input
      let perfectDodge = globalRecords.isPerfectDodge;
      index.ChargeCost += perfectDodge ? 1 : 0;
    },
    mechanicsCog(index) {//0 user input
      let referenceTable = globalRecords.archs;
      if (referenceTable.one.class === "Engineer" || referenceTable.two.class === "Engineer" ) {
        index.Bulwark += 1;
        index.MovementSpeed += 0.15;
      }
    },
    painlessObsidian(index) {//0 user input
      const isActive = globalRecords.greyHealthActive;
      index.HASTE += isActive ? 1 : 0;
      index.Bulwark += isActive ? 1 : 0;
    },
    panWarBand(index) {// 0 team count user input
      let teamCount = globalRecords.teamCount;

      index.MovementSpeed += 0.03 * teamCount;
      index.ReloadSpeed += 0.03 * teamCount;
      index.FireRate += 0.02 * teamCount;
    },
    ravagersBargain(index) {//base
      let isBleeding = index.inBLEED;
      index.AllDamage += isBleeding ? 0.05 : 0;
      index.AllCritChance += isBleeding ? 0.05 : 0;
    },
    restrictionCord(index) {//base
      index.HealthCap *= 0.5;
    },
    ringOfSpirits(index) {//0 user input
      if (index.thisIsAQuery) {index.ModPowerGen += 0.03 * 5;}//If we are in the middle of cycles loops, and maybe the filtered concoctions are less than the limit, always apply the limit amount of Mod Gen so we don't skip a possible build
      else {
        let totalActive = 0;
        const toggleRef = userTrigger.consumableToggleStates;
        for (let value of toggleRef.consumablesToggleArray) {if (value === false) {totalActive +=1}}
        for (let value of toggleRef.concoctionsToggleArray) {if (value === false) {totalActive +=1}}
        index.ModPowerGen += 0.03 * Math.min(5,totalActive);//enforce the cap of 5.
      }
    },
    ringOfTheDamned(index) {//0 user input
      const isActive = globalRecords.greyHealthActive;
      index.AllDamage += isActive ? 0.004*50 : 0;
      index.AllCritChance += isActive ? 0.05 : 0;
    },
    singedRing(index) {//50
      index.AllDamage += index.outBURN ? 0.12 : 0;
    },
    soulGuard(index) {//0 user input
      index.Bulwark += +globalRecords.minionCount;
    },
    soulShard(index) {//0 user input
      let minionCount = Math.min(3,+globalRecords.minionCount);
      let modifier = 0.05;
      index.AllDamage += modifier * minionCount;
    },
    tokenOfFavor(index) {//50
      index.AllCritChance += index.outEXPOSED ? 0.10 : 0;
    },
    thalosEyelet(index) {//PostWeightClass
      let bulwarkStacks = Math.min(index.Bulwark,index.BulwarkCap);
      index["Stamina/S+"] += 2 * bulwarkStacks;
    },
    whiteGlassBead(index) {//0 user input
      index.Shield += globalRecords.isPerfectDodge ? 0.15 : 0;
    },
    volatileCartridge(index) {
      const totalShield = index.Shield * (1 + index.ShieldEFF);
      const actualShield = Math.min(totalShield,index.ShieldCap);

      const bonus = Math.floor(actualShield/5);

      index.ExplosiveCritChance += bonus;
      index.ExplosiveCritDamage += bonus;
    },
    timekeepersForfeit(index)  {
      if (outgoingStatus) {
        index.incomingStatus += 1;

        index.inSLOW += index.outSLOW ? 1 : 0;
        index.inBLEED += index.outBLEED ? 1 : 0;
        index.inBURN += index.outBURN ? 1 : 0;
        index.inOVERLOADED += index.outOVERLOADED ? 1 : 0;
        index.inCORRODED += index.outCORRODED ? 1 : 0;
      }
    },
    zeroHour(index) {
      let currentClass = 0;
      switch (dodgeClass) {
        case "Flop": currentClass = 3;break;
        case "Heavy": currentClass = 2;break;
        case "Medium": currentClass = 1;break;
      }
      index.AllDamage -= 0.05 * currentClass;
      index.AllCritChance -= 0.025 * currentClass;
    },
    insipidTalon(index) {
      let perfectDodge = globalRecords.isPerfectDodge;
      const stackCount = 15;
      if (perfectDodge === true) {
        index.AllDamage += 0.02 * stackCount;
        index.FlatDR += 0.01 * stackCount;
      }
    },
    shortCircuit(index) {
      if (index.Shield) {
        index.AllCritChance += 0.10;
        index.AllCritDamage += 0.10;
      }
    },
    cessationBulbel(index) {
      const totalShield = index.Shield * (1 + index.ShieldEFF);
      const actualShield = Math.min(totalShield,index.ShieldCap);

      const bonus = Math.floor(actualShield/20)

      index.AllDamage += Math.min(10,bonus) * 0.04;
    },

    nightmareSigil(index) {
      let perfectDodge = globalRecords.isPerfectDodge;
      if (perfectDodge === true) {
        index.Lifesteal += 0.05;
      }
    },
    stoneOfRevelation(index) {
      if (index.outEXPOSED) {
        index.ModDamage += 0.05;
        index.ModPowerGen += 0.05;
      }
    },
    wiredInhibitor(index) {
      index.outSLOW += index.outgoingStatus ? 1 : 0;
    },
    symbolOfRoyalty(index) {
      index.Bulwark += globalRecords.isPerfectDodge ? 3 : 0;
    },
    breachAccelerator(index) {
      if (index.HASTE) {
        index.MovementSpeed += 0.05;
        index.AllDamage += 0.05;
      }
    },
    siphonFilter(index) {
      index.HASTE += index.outSLOW ? 1 : 0;

      if (index.HASTE) {
        const totalHasteBonus = (0.07 + index.HASTEBonus) * index.HASTEEffectiveness;
        index.AllDamage += totalHasteBonus;
      }
    },
    custodiansBastion(index) {
      const totalShield = index.Shield * (1 + index.ShieldEFF);
      const actualShield = Math.min(totalShield,index.ShieldCap);

      index.Armor += Math.min(100,actualShield/2);
    },


  // },
  // "relic": {//DONE relics are currently tierless
    resonatingHeart(index,[relicHPscaled,totalHealth]) {
      //Healing/Relic EFF already factored before this function even starts
      let inputValue = relicHPscaled * 2 * (1+index.HealingEFF);
      //If input is blank or 0, all values will BE 0, but that's ok because in our check to pull relic healing
      //we will first check if the input is blank/0 before pulling either basic or complex stats.
      let relicPercHPpSec = inputValue/20;
      let relicHPpSec = (relicPercHPpSec/100) * totalHealth;
      let avgPercHPpSec = (relicHPscaled + inputValue)/25;
      let avgHPpSec = (avgPercHPpSec/100) * totalHealth;
    
      if (!index.thisIsAQuery) {
        readSelection("relicComplexEffect").innerHTML += `
        <div class="resoBonusHeader">Avg over 25s</div>
        <div class="complexRowContainer"><span class="basicsDRStat">As HP/s</span><span class="rowTraceLine"></span><span class="basicsDRValue">${avgHPpSec.toFixed(2)}</span></div>
        <div class="complexRowContainer"><span class="basicsDRStat">As %HP/s</span><span class="rowTraceLine"></span><span class="basicsDRValue">${avgPercHPpSec.toFixed(2)}%</span></div>
        `
      }
      globalRecords.relicComplexArray = [avgPercHPpSec,avgHPpSec];
    },
  // },
  //Ranged Mutators
    failsafe(index) {
      let modDamageBonus = 0.25;
      conditionalHelpers.applySpecifiedMutatorBaseBonus(index,"ModDamage",modDamageBonus,"Failsafe");
    },
    harmonizer(index) {
      let modDamageBonus = 0.20;
      conditionalHelpers.applySpecifiedMutatorBaseBonus(index,"ModDamage",modDamageBonus,"Harmonizer");
    },
    maelstrom(index) {
      let elementalDamageBonus = 0.10;

      if (index.outgoingStatus) {
        let outgoingDmgBonus = elementalDamageBonus * conditionalHelpers.getActiveUniqueStatuses(index);
        conditionalHelpers.applySpecifiedMutatorBaseBonus(index,"ElementalDamage",outgoingDmgBonus,"Maelstrom");
      }
    },
    spellweaver(index) {
      let modDamageBonus = 0.15;
      conditionalHelpers.applySpecifiedMutatorBaseBonus(index,"ModDamage",modDamageBonus,"Spellweaver");
    },
    spiritFeeder(index) {
      let modDamageBonus = 0.30;
      conditionalHelpers.applySpecifiedMutatorBaseBonus(index,"ModDamage",modDamageBonus,"Spirit Feeder");
    },
    spiritHealer(index) {
      let healingPerSecond = 0.02/10;
      index["HP/S%"] += (globalRecords.spiritHealerStacks * healingPerSecond);
    },
  // "mutators": {//DONE
    executor(index) {//base
      if (index.outgoingStatus) {
        let count = globalRecords.enemyCount;
        count += index.incomingStatus ? 1 : 0
        count = Math.min(4,count);
        index.AttackSpeed += (0.05 * count);
        index.ChargeSpeed += (0.05 * count);
      }
    },
    guts(index) {//0 user input
      if (globalRecords.greyHealthActive) {
        index.MeleeCritChance += 0.25;
        index.MeleeCritDamage += 0.25;//we don't have any %GHP specifications yet, this assume 50% GHP
      }
    },
    misfortune(index) {//base
      if (index.outgoingStatus) {
        let activeStatus = conditionalHelpers.getActiveUniqueStatuses(index);
        index.MeleeDamage += (0.10 * activeStatus);
      }
    },
    opportunist(index) {//0 user input
      if (globalRecords.isPerfectDodge) {
        index.MeleeCritChance += 1;
      }
    },
    resentment(index) {//0 user input
      if (globalRecords.greyHealthActive) {
        index.MeleeDamage += 0.30
      }
    },
    shieldedStrike(index) {//50
      let shieldAmount = Math.min(1,index.Shield);
      let dmgCap = 0.25;
      if (shieldAmount > 0) {index.ChargeDamage += shieldAmount * dmgCap;}
    },
    taintedBlade(index) {
      if (index.outCORRODED) {
        const bonusPerStack = 0.08;
        index.MeleeDamage += (bonusPerStack * Math.min(5,index.outCORRODED));
      }
    },
    vampireBlade(index) {//base
      if (index.outBLEED || index.inBLEED) {
        index.MeleeDamage += 0.30;
        index.MLifesteal += 0.03;
      }
    },
  // },
  // "meleeMods": {//DONE
    dreamwave(index) {//0 user input
      let count = globalRecords.enemyCount;
      index.AllDamage += 0.02 * count;
      index.MovementSpeed += 0.02 * count;
    },
    beyondTheVeil(index) {//0 user input
      index.MLifesteal += globalRecords.isEvade ? 0.05 : 0;
    },
    reaver(index) {//base
        index.MeleeDamage += index.outgoingStatus ? 0.10 : 0;
    },
  // },
  // "traits": {
    bloodBond(index,traitLevel) {//0 user input
      let referenceTable = globalRecords.archs;
      if (referenceTable.one.class === "Summoner" || referenceTable.two.class === "Summoner" ) {
        index.DMGKept *= 1 + (-0.01 * traitLevel);
      }
    },
  // }
  // PASSIVES
    intimidatingPresence(index) {
      let baseReduction = 0.10;
      let maxAdditionalReduction = 0.10;
      let reductionPerEnemy = 0.025;
      index.REdamage *= (1 - (baseReduction + Math.min(maxAdditionalReduction,(reductionPerEnemy * globalRecords.enemyCount))));
    },

    //leggy perks
    legendarySpectrum(index) {
      const recordRef = globalRecords.greatRowRecords;

      const colorRowBonuses = {
        "Blue": "FlatDR",
        "Red": "AllDamage",
        "Yellow": "MovementSpeed",
      }
      let colorArray = [];

      for (let i=1;i<=8;i++) {
        const currentRecord = recordRef[i-1];
        const name = currentRecord.name;
        const isCombo = currentRecord.isCombo;
        const comboArray = currentRecord.comboArray;

        if (!isCombo) {colorArray.push(prismRowOptions[name].color);}
        else {colorArray.push(prismRowOptions[comboArray[0]].color,prismRowOptions[comboArray[1]].color);}
      }

      for (let entry of colorArray) {
        if (!colorRowBonuses[entry]) {continue;}
        index[colorRowBonuses[entry]] += 0.03;
      }
    },
    legendaryVaccinated(index) {
      console.log("hi")
      index.incomingStatus = 0;
      index.inSLOW = 0;
      index.inBLEED = 0;
      index.inBURN = 0;
      index.inOVERLOADED = 0;
      index.inCORRODED = 0;
      index.inCURSE = 0;
      index.inMADNESS = 0;
      index.inSUPPRESSION = 0;
      index.inROOTROT = 0;
      index.inDATACORRUPTION = 0;
    },
    legendaryInsultToInjury(index) {
      if (index.outgoingStatus
       || index.outSLOW
       || index.outBLEED
       || index.outBURN
       || index.outOVERLOADED
       || index.outCORRODED)
       {index.outEXPOSED += 1;}
    },
}

function setupDamageBreakdowns(override,targetStat,tableReference,returnStats) {
  if (!override) {
    if (targetStat === "Composite") {
      let totalDPS = 0;
      let totalDamage = 0;
      for (let functions of globalRecords.damageBreakdownsArray) {
        if (!functions.isUsed) {continue;}
        else {
          let currentDamageFunction = customDamage[functions.name](1,tableReference);
          totalDPS += currentDamageFunction[3];
          totalDamage += currentDamageFunction[4];
          
        }
      }

      returnStats.compositeBreakdown = ["Composite Damage",1,1,totalDPS,totalDamage];
    }
    else {
      switch (targetStat) {
        case "Ability": 
          archspath = globalRecords.archs;
          abilityPath1 = archspath.one.ability;
          abilityPath2 = archspath.two.ability;
          ability1 = classInfo[archspath.one.class].abilities[abilityPath1].customStats;
          ability2 = classInfo[archspath.two.class].abilities[abilityPath2].customStats;
          returnStats.ability1Breakdown = (ability1 && ability1.customDPS) ? customDamage[ability1.customDPS](1,tableReference) : -1;
          returnStats.ability2Breakdown = (ability2 && ability2.customDPS) ? customDamage[ability2.customDPS](2,tableReference) : -1;
          break;
        case "Mod": 
          let weaponPath = globalRecords.weapons;
          modPath1 = primaries[weaponPath.primary].builtIN ? builtInPrimary[primaries[weaponPath.primary].builtIN].customStats : rangedMods[weaponPath.primaryMod].customStats;
          modPath2 = secondaries[weaponPath.secondary].builtIN ? builtInSecondary[secondaries[weaponPath.secondary].builtIN].customStats : rangedMods[weaponPath.secondaryMod].customStats;
          returnStats.mod1Breakdown = modPath1 ? (modPath1.customDPS ? customDamage[modPath1.customDPS](1,tableReference) : -1) : -1;
          returnStats.mod2Breakdown = modPath2 ? (modPath2.customDPS ? customDamage[modPath2.customDPS](2,tableReference) : -1) : -1;
          break;
        case "Melee": 
          returnStats.meleeBreakdown = customDamage.MeleeDamage(1,tableReference);
          break;
      }
    }
  }
  else {
    archspath = globalRecords.archs;
    abilityPath1 = archspath.one.ability;
    abilityPath2 = archspath.two.ability;
    ability1 = classInfo[archspath.one.class].abilities[abilityPath1].customStats;
    ability2 = classInfo[archspath.two.class].abilities[abilityPath2].customStats;
    returnStats.ability1Breakdown = (ability1 && ability1.customDPS) ? customDamage[ability1.customDPS](1,tableReference) : -1;
    returnStats.ability2Breakdown = (ability2 && ability2.customDPS) ? customDamage[ability2.customDPS](2,tableReference) : -1;
    
    let weaponPath = globalRecords.weapons;
    modPath1 = primaries[weaponPath.primary].builtIN ? builtInPrimary[primaries[weaponPath.primary].builtIN].customStats : rangedMods[weaponPath.primaryMod].customStats;
    modPath2 = secondaries[weaponPath.secondary].builtIN ? builtInSecondary[secondaries[weaponPath.secondary].builtIN].customStats : rangedMods[weaponPath.secondaryMod].customStats;
    returnStats.mod1Breakdown = modPath1 ? (modPath1.customDPS ? customDamage[modPath1.customDPS](1,tableReference) : -1) : -1;
    returnStats.mod2Breakdown = modPath2 ? (modPath2.customDPS ? customDamage[modPath2.customDPS](2,tableReference) : -1) : -1;
     
    returnStats.meleeBreakdown = customDamage.MeleeDamage(1,tableReference);

    //clears a breakdown tab if one is open and the source of the breakdown is removed from the loadout by the user
    if (!ability1 && readSelection("ability1BreakdownTab").style.display === "flex") {advancedUpdates.updateSelectedDamageBreakdown("clear")}
    if (!ability2 && readSelection("ability2BreakdownTab").style.display === "flex") {advancedUpdates.updateSelectedDamageBreakdown("clear")}
    if (!modPath1 && readSelection("mod1BreakdownTab").style.display === "flex") {advancedUpdates.updateSelectedDamageBreakdown("clear")}
    if (!modPath2 && readSelection("mod2BreakdownTab").style.display === "flex") {advancedUpdates.updateSelectedDamageBreakdown("clear")}
    //Melee doesn't need to be cleared bc even if removed, Fists will populate at a minimum

    basicsUpdates.updateWeakspotDisplayColor(tableReference.WeakspotDisable);//Adjust weakspot display's color based on disabled forcibly by gear or not.
  }
}

//The big cheese, the great clusterfuck, where all the formulas refresh.
function updateFormulas(ping,refFuncStorage,refStatsStorage) { 
  let isUIcalcs = !starterTable.thisIsAQuery;
  let statsOverride = null;
  let tableReference = {...(refStatsStorage ?? starterTable)};//Reset the table
  let targetStat,isDamageTarget;

  let overAccessoryRef = globalRecords.accessories,overWeaponRef = globalRecords.weapons;
  if (isUIcalcs) {
    basicsUpdates.pullUserInputs();//MISC STATS THAT NEED TO BE PULLED FROM DISPLAYS FIRST
    formulasValues.pullTraits(tableReference);
    formulasValues.pullGearStats(tableReference);//Weapons/Accessories/class/frags/etc

    readSelection("havocFormBoxHolder").style.display = "none"
    readSelection("damageBreakdownSelectorHolder").innerHTML = "";
  }
  else {
    if (!refStatsStorage) {statsOverride = formulasValues.pullGearStatsCycles(tableReference,ping,false,overAccessoryRef,overWeaponRef);}
    else {formulasValues.pullGearStatsCycles(tableReference,false,true,overAccessoryRef,overWeaponRef)}

    midQuery = globalRecords.midQuery;
    if (midQuery === undefined) {return;}
    else {
      targetStat = midQuery.targetStatistic;
      isDamageTarget = midQuery.targetIsArray;
    }
  }

  let tieredFunctionStorage = refFuncStorage ?? formulasValues.storeActiveConditionals(isUIcalcs,overAccessoryRef,overWeaponRef);
  let callStored = formulasValues.callStoredFunctions;
  
  callStored(tieredFunctionStorage,"customTier0",tableReference);//Has conditionals based upon user settings, or other things that do not need to wait for other conditionals.
  callStored(tieredFunctionStorage,"customBase",tableReference);//Standard conditionals. They might rely on Tier0 calcs, but nothing else.
  const {totalHealth,totalHealthNoGlobal,totalBaseHealth,percentHealthMulti,healthCap,globalCap} = calcs.getHealth(tableReference);
  let totalStamina = calcs.getStamina(tableReference); 
  const {totalWeight,dodgeClass,staminaPenalty,baseWeight,weightBoost,weightThreshold} = calcs.getWeight(tableReference);
  callStored(tieredFunctionStorage,"customPostWeightClass",tableReference,dodgeClass);//Gul Signet, etc
  const {staminaPerSec,staminaCost,adjustedPenalty,evadeCost,meleeCost,evadePrice} = calcs.getStaminaValues(tableReference, staminaPenalty);
  tableReference.AllDamage += (tableReference.outEXPOSED ? 0.15 : 0) + (tableReference.outCORRODED ? 0.10 : 0);
  tableReference.HealingEFF *= tableReference.inBLEED ? 0.5 : 1;
  callStored(tieredFunctionStorage,"customPreHealing",tableReference);//generating band, etc
  const {globalHealingMod,healingEffectiveness,flatHPperSec,percHPperSec,totalGreyHPperSec,greyConversionRate,greyHitThreshold} = calcs.getHealing(tableReference);
  callStored(tieredFunctionStorage,"customPostHealing",tableReference);//anastasijasInspiration, stuff like that
  const hasteBonus = (0.07 + tableReference.HASTEBonus) * tableReference.HASTEEffectiveness;
  if (tableReference.HASTE) {for (let bonuses of hasteTable) {tableReference[bonuses] += hasteBonus;}}//If haste exists, add relevant speed stats
//----------RELIC HEALING---------------------------------------------------
  const {relicHPbase,relicHPtype,relicHPtime,relicHPscaled,relicPercPerSecond,relicFlatPerSecond,relicComplexArray,relicUseTime,relicEffectiveness,relicCharges,relicChance} = calcs.getRelicHealing(tieredFunctionStorage,tableReference,totalHealthNoGlobal,globalHealingMod,healingEffectiveness);
  const useComplexValues = !!relicComplexArray;
//---------- DAMAGE REDUCTION ---------------------------------------------------
  const {baseArmor,armorEff,totalArmor} = calcs.getArmor(tableReference);
  const {armorDR,bulwarkStacks,bulwarkDR,otherFlat,totalFlat,totalDR} = calcs.getDR(tableReference,totalArmor);

  if (ping) {
    if (overAccessoryRef.amulet === "Daredevil's Charm") {globalRecords.armor = {helmet:"",chest:"",leg:"",hand:""};}
    else {
      const drCAP = 0.80
      if (totalFlat < drCAP) {
        let flatDR = Math.max(0, totalFlat);//Work backwards to find the total base armor we're after, if flat DR is less than the DR cap
        let targetArmorDR = Math.max(0, Math.min(drCAP, 1-((1-drCAP)/(1-flatDR))));//0.8 being the DR cap
        let targetArmor = Math.max(0, (((targetArmorDR*200)/(1-targetArmorDR)) / armorEff) - baseArmor);
        let armorPing = cyclesLoop.pingArmorCombos(+targetArmor.toFixed(2),baseWeight,weightThreshold,weightBoost,globalRecords.findLightestArmor);
        if (armorPing) {return updateFormulas(false,tieredFunctionStorage ?? null,statsOverride ?? null);}
      }
    }
  }

  callStored(tieredFunctionStorage,"customPostDR",tableReference,totalDR);//Burden of the Mason, etc
  const {reducedEnemyDamage,damageKept,totalBonusMitigation,effectiveDR,baseEHP,baseEHPforShieldsAndHealing} = calcs.getAdvancedDR(tableReference,totalDR,totalHealth,totalHealthNoGlobal);
  const {percShields,shieldEff,totalPercShields,shieldEHP} = calcs.getShields(tableReference,baseEHPforShieldsAndHealing);
  let totalEHP = calcs.getEHP(shieldEHP,baseEHP);
  let regHealing = {flatHPperSec,percHPperSec,relicHPtype,relicHPtime,relicHPscaled,useComplexValues,relicComplexArray};
  const {advancedRelicFlat,advancedRelicPerc,advancedRelicTotalFlat,advancedRelicTotalPerc,advancedTotalFlatHP,advancedTotalPercHP,EHPpSec} = calcs.getAdvancedHealing(baseEHP,regHealing,totalHealthNoGlobal);
  callStored(tieredFunctionStorage,"customTier50",tableReference);//TIER 50 CALLS PURELY FOR DMG RELATED CONDITIONALS + DMG CONDITIONALS THAT NEED TO BE DONE AFTER REG STATS
  const {lifestealEFF,lifestealALL,lifestealMelee,lifestealMeleeCharged,lifestealRange,peakLifesteal} = calcs.getLifesteal(tableReference,relicEffectiveness);

  //MISC STATS
  let movementSpeed = tableReference.MovementSpeed;

  let returnStats = {
    totalHealth,totalHealthNoGlobal,totalBaseHealth,percentHealthMulti,healthCap,globalCap,
    totalStamina,
    totalWeight,dodgeClass,staminaPenalty,baseWeight,weightBoost,weightThreshold,
    staminaPerSec,staminaCost,adjustedPenalty,evadeCost,meleeCost,evadePrice,
    globalHealingMod,relicEffectiveness,relicCharges,relicChance,healingEffectiveness,relicUseTime,flatHPperSec,percHPperSec,totalGreyHPperSec,greyConversionRate,greyHitThreshold,
    lifestealEFF,lifestealALL,lifestealMelee,lifestealMeleeCharged,lifestealRange,peakLifesteal,
    relicHPbase,relicHPtype,relicHPtime,relicHPscaled,relicPercPerSecond,relicFlatPerSecond,
    baseArmor,armorEff,totalArmor,
    armorDR,bulwarkStacks,bulwarkDR,otherFlat,totalFlat,totalDR,
    reducedEnemyDamage,damageKept,totalBonusMitigation,effectiveDR,baseEHP,
    percShields,shieldEff,totalPercShields,shieldEHP,totalEHP,
    advancedRelicFlat,advancedRelicPerc,advancedRelicTotalFlat,advancedRelicTotalPerc,advancedTotalFlatHP,advancedTotalPercHP,EHPpSec,
    movementSpeed
  }

  if (!isUIcalcs) {
    if (isDamageTarget) {setupDamageBreakdowns(false,targetStat[3],tableReference,returnStats);}
    return returnStats;
  }
  else {
    setupDamageBreakdowns(true,null,tableReference,returnStats);
    manipulateConsumable.updateConsumableCollection("concoction");
    basicsUpdates.updateMainFromFormulas(returnStats,tableReference);
    manipulateURL.updateURLparameters();
    basicsUpdates.updateSelectedConsumableDurations(tableReference);
    basicsUpdates.updateFocus(null,null,true);
    basicsUpdates.updateCurrentAbilityDisplayDurations(tableReference);
    tooltips.loadTooltips();
  }
}
