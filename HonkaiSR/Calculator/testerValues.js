// battleValues


const customEnergyBar = {
    "STANDARDCIRCLEBAR"(turnRef,specialEnergyData) {
        return `<div class="actionDetailHeaderRowCharacterEnergyBoxEnergyShutter" 
        style="height: ${
            (turnRef.specialEnergy ? turnRef.specialEnergyCurrent : turnRef.currentEnergy)
            /(turnRef.specialEnergy ? turnRef.specialEnergyMax : turnRef.maxEnergy) 
            * 100
        }%;
        background: linear-gradient(to bottom, ${specialEnergyData[turnRef.specialEnergy ? turnRef.properName : turnRef.element].energyColor2}, ${specialEnergyData[turnRef.specialEnergy ? turnRef.properName : turnRef.element].energyColor2}80);"></div>
        `;
    },
    "Saber": {
        isJustExtraFill: true,
        fillFunction(turnRef,specialEnergyData) {
            const coreReso = turnRef.battleValues.coreResonance;
            const energyPossible = coreReso * 8;

            // "Physical": {
            //         energyColor1: "#FFFFFF80",
            //         energyColor2: "#B9BABB80"
            //     },

            const currentEnergy = turnRef.currentEnergy/turnRef.maxEnergy;

            return customEnergyBar.STANDARDCIRCLEBAR(turnRef,specialEnergyData) + `<div class="actionDetailHeaderRowCharacterEnergyBoxEnergyShutter" 
            style="height: ${
                (energyPossible)
                /(turnRef.maxEnergy) 
                * 100
            }%;bottom: ${currentEnergy*100}%;
            background: linear-gradient(to bottom, #FFFFFF80, #B9BABB80);"></div>`;
        }
    },
    "Argenti": {
        isJustExtraFill: true,
        fillFunction(turnRef,specialEnergyData) {
            const halfMax = turnRef.maxEnergy * 0.5;

            const energyPossible = Math.max(0, turnRef.currentEnergy - halfMax);
            const energyOverflowRatio = energyPossible / halfMax

            // "Physical": {
            //         energyColor1: "#FFFFFF80",
            //         energyColor2: "#B9BABB80"
            //     },

            // const currentEnergy = turnRef.currentEnergy/turnRef.maxEnergy;




            return `<div class="actionDetailHeaderRowCharacterEnergyBoxEnergyShutter" 
                style="height: ${
                    (Math.min(halfMax, turnRef.currentEnergy))
                    /(halfMax) 
                    * 100
                }%;
                background: linear-gradient(to bottom, ${specialEnergyData[turnRef.specialEnergy ? turnRef.properName : turnRef.element].energyColor2}, ${specialEnergyData[turnRef.specialEnergy ? turnRef.properName : turnRef.element].energyColor2}80);"></div>
                ` + `<div class="actionDetailHeaderRowCharacterEnergyBoxEnergyShutter" 
                style="height: ${
                    (energyOverflowRatio)
                    * 100
                }%;bottom: 0%;
                background: linear-gradient(to bottom,rgba(255, 255, 255, 0.67),rgba(185, 186, 187, 0.72));"></div>
                ${energyOverflowRatio ? `<div class="actionDetailHeaderRowCharacterEnergyBoxInnerRing" style="border:2px solid ${specialEnergyData[turnRef.specialEnergy ? turnRef.properName : turnRef.element].energyColor1}"></div>` : ""}
                `;
        }
    }
}




const customDisplayValuesLog = {
    "Blade": [
        {valueName: "Charge", refName: "charge", isBattleValue: true},
        {valueName: "Hellscape", refName: "hellscapeActive", isBattleValue: true, isCharacterState: true},
        {valueName: "HP Loss Tally", refName: "bladeHPTally", isBattleValue: false},
    ],
    "Archer": [
        {valueName: "Charge Stacks", refName: "charge", isBattleValue: true},
        {valueName: "In Circuit-Connection", refName: "skillStarted", isBattleValue: true,isCharacterState: true},
        {valueName: "Skill Counter", refName: "skillCounter", isBattleValue: true},
    ],
    "Kafka": [
        {valueName: "FUA Stacks", refName: "fuaStacks", isBattleValue: true},
    ],
    "Hysilens": [
        {valueName: "Zone Active", refName: "hysilensFieldActive", isBattleValue: false},
    ],
    "Aventurine": [
        {valueName: "Blind Bet", refName: "betStacks", isBattleValue: true},
        // {valueName: "Hellscape", refName: "hellscapeActive", isBattleValue: true, isCharacterState: true},
        // {valueName: "HP Loss Tally", refName: "bladeHPTally", isBattleValue: false},
    ],
    "Evernight": [
        {valueName: "Evey on Field", refName: "eveyIsActive", isBattleValue: true, isCharacterState: true},
        {valueName: "Memoria", refName: "memoria", isBattleValue: true},
        {valueName: "Darkest Riddle", refName: "riddleStacks", isBattleValue: true},
    ],
    "Castorice": [
        {valueName: "Netherwing on Field", refName: "netherIsActive", isBattleValue: true, isCharacterState: true},
        {valueName: "Nether Turns Remaining", refName: "netherRemainingTurns", isBattleValue: true},
    ],
    "Hyacine": [
        {valueName: "Ica on Field", refName: "icaIsActive", isBattleValue: true, isCharacterState: true},
        {valueName: "Healing Tally", refName: "hyacineBattleHealingTally", isBattleValue: false},
        {valueName: "After Rain", refName: "hyacineAfterRainActive", isBattleValue: true, isCharacterState: true},
    ],  
    "Robin": [
        {valueName: "Aria Active", refName: "ariaIsActive", isBattleValue: true, isCharacterState: true},
        {valueName: "Concerto Active", refName: "robinConcertoActive", isBattleValue: true, isCharacterState: true},
    ],  
    "Sunday": [
        {valueName: "The Beatified", refName: "charWithBeatifiedNameSlot", isBattleValue: true, isCharacterSlot:true},
    ], 
    "Saber": [
        {valueName: "Basic is Enhanced", refName: "isEnhanced", isBattleValue: true, isCharacterState: true},
        {valueName: "Core Resonance", refName: "coreResonance", isBattleValue: true},
        {valueName: "Overflow Energy", refName: "overflowEnergy", isBattleValue: true},
        {valueName: "Advance Ready", refName: "advanceReady", isBattleValue: true, isCharacterState: true},
        {valueName: "E6 Ult Counter", refName: "e6UltCounter", isBattleValue: true, requiresEidolon: 6},
    ], 
    "Argenti": [
        {valueName: "Talent Stacks", refName: "apotheosisStacks", isBattleValue: true},
    ], 
    "Ruan Mei": [
        {valueName: "Overtone Active", refName: "overtoneIsActive", isBattleValue: true, isCharacterState: true},
        {valueName: "Zone Active", refName: "ruanmeiZoneActive", isBattleValue: true, isCharacterState: true},
    ], 
    "Trailblazer - Remembrance": [
        {valueName: "Mem on Field", refName: "memIsActive", isBattleValue: true, isCharacterState: true},
        {valueName: "Mem's Charge", refName: "memCharge", isBattleValue: true},
        {valueName: "Mem is Enhanced", refName: "memIsEnhanced", isBattleValue: true, isCharacterState: true},
        {valueName: "Epic Stacks", refName: "epicStacks", isBattleValue: true},
    ], 
    "Aglaea": [
        {valueName: "Garment on Field", refName: "garmentIsActive", isBattleValue: true, isCharacterState: true},
        {valueName: "Supreme Stance", refName: "supremeStanceActive", isBattleValue: true, isCharacterState: true},
        {valueName: "Memo SPD Stacks", refName: "lastSpdStacksMemo", isBattleValue: true},
        // {valueName: "Epic Stacks", refName: "epicStacks", isBattleValue: true},
    ], 
    "Dan Heng • Permansor Terrae": [
        {valueName: "Bondmate", refName: "bondmateSlot", isBattleValue: true, isCharacterSlot:true},
        {valueName: "Enhanced Turns", refName: "souldragonEnhancedTurns", isBattleValue: true},
        {valueName: "Souldragon on Field", refName: "souldragonActive", isBattleValue: true, isCharacterState: true},
    ], 
    "Topaz & Numby": [
        {valueName: "Bonanza Attacks", refName: "bonanzaStacks", isBattleValue: true},
        // {valueName: "E6 Ult Counter", refName: "e2AdvanceCooldown", isBattleValue: true, requiresEidolon: 6},
    ], 
    "Tingyun": [
        {valueName: "Ally with Benediction", refName: "charWithBenediction", isBattleValue: true, isCharacterSlot:true},
    ],
    "Silver Wolf": [],
    "Pela": [],
    "Gallagher": [
        {valueName: "Basic Enhanced", refName: "nextBasicEnhanced", isBattleValue: true, isCharacterState: true},
    ],
    "Huohuo": [
        {valueName: "Divine Provision Active", refName: "talentProvisionIsActive", isCharacterState: true},
        // {valueName: "Clease Remaining", refName: "cleanseCounter"},
    ],
    "Luocha": [
        // {valueName: "Divine Provision Active", refName: "talentProvisionIsActive", isCharacterState: true},
        // {valueName: "Clease Remaining", refName: "cleanseCounter"},
    ],
    "Tribbie": [
        {valueName: "Numinosity Active", refName: "numinosityIsActive", isCharacterState: true},
        {valueName: "Ult Zone Active", refName: "tribbieZoneActive", isCharacterState: true},

        
        // {valueName: "Clease Remaining", refName: "cleanseCounter"},
    ],
    "Bronya": [
        {valueName: "E1 Skillpoint Ready", refName: "e1SPRegenReady", isBattleValue: true, isCharacterState: true, requiresEidolon: 1},
        {valueName: "E4 Follow-up Ready", refName: "e4FUAReady", isBattleValue: true, isCharacterState: true, requiresEidolon: 4},
    ],  
    "Asta": [
        {valueName: "Charging Stacks", refName: "chargeStacks", isBattleValue: true},
        {valueName: "Skip Charge Decay", refName: "skipCost", isBattleValue: true, isCharacterState: true},
    ],
    "Natasha": [],  
    "Lynx": [], 
    "Anaxa": [],
}

const permaConditionsTextLibrary = {
    "energyMaxed": "Energy: Current === Energy: Max",
    "energyHalf": "Energy Current >= (Energy Max * 0.5)",
    "energyMaxedCyrene": "First battle's ultimate: Energy: Current === Energy: Max<br>Any further ultimates: Energy Current >= 12",
    "atLeast1SP": "Skill Points: Current >= 1",
    "atLeast2SP": "Skill Points: Current >= 2",
    "archerSub5casts": "Skill Use Count < 5",
}

const defaultStandardAbilityDisplayWarnings = {
    hasEnhancedState: false,
    "Skill": "",
    "Ultimate": "",
    "SkillPermaConditions": [permaConditionsTextLibrary.atLeast1SP,],
    "UltimatePermaConditions": [permaConditionsTextLibrary.energyMaxed]
};
const conditionsCharacterDisplayWarning = {
    "defaultStandardWarnings": {
        hasEnhancedState: false,
        "Skill": "",
        "Ultimate": "",
        "SkillPermaConditions": [permaConditionsTextLibrary.atLeast1SP,],
        "UltimatePermaConditions": [permaConditionsTextLibrary.energyMaxed]
    },
    "Saber": {
        hasEnhancedState: true,
        "Skill": "Skill conditions are ignored when Saber's Basic ATK is enhanced.",
        "Ultimate": "",

        "SkillPermaConditions": [permaConditionsTextLibrary.atLeast1SP,],
        "UltimatePermaConditions": [permaConditionsTextLibrary.energyMaxed]
    },
    "Blade": {
        hasEnhancedState: true,
        "Skill": "Skill conditions are ignored when Blade's Basic ATK is enhanced.",
        "Ultimate": "",

        "SkillPermaConditions": [permaConditionsTextLibrary.atLeast1SP,],
        "UltimatePermaConditions": [permaConditionsTextLibrary.energyMaxed]
    },
    "Sunday": defaultStandardAbilityDisplayWarnings,
    "Bronya": {
        hasEnhancedState: false,
        "Skill": "",
        "Ultimate": "",

        "SkillPermaConditions": [permaConditionsTextLibrary.atLeast1SP,],
        "UltimatePermaConditions": [permaConditionsTextLibrary.energyMaxed]
    },
    "Trailblazer - Remembrance": {
        hasEnhancedState: true,
        "Skill": "Skill conditions are ignored when Mem is already on field, and RMC's Basic ATK is enhanced.",
        "Ultimate": "",

        "SkillPermaConditions": [permaConditionsTextLibrary.atLeast1SP,],
        "UltimatePermaConditions": [permaConditionsTextLibrary.energyMaxed]
    },
    "Cyrene": {
        hasEnhancedState: true,
        "Skill": "Skill conditions are ignored when Cyrene's Basic ATK is enhanced.",
        "Ultimate": "",

        "SkillPermaConditions": [permaConditionsTextLibrary.atLeast1SP,],
        "UltimatePermaConditions": [permaConditionsTextLibrary.energyMaxedCyrene]
    },
    "Tribbie": defaultStandardAbilityDisplayWarnings,
    "Robin": defaultStandardAbilityDisplayWarnings,
    "Silver Wolf": defaultStandardAbilityDisplayWarnings,
    "Tingyun": defaultStandardAbilityDisplayWarnings,
    "Dan Heng • Permansor Terrae": defaultStandardAbilityDisplayWarnings,
    "Aglaea": {
        hasEnhancedState: true,
        "Skill": "",
        "Ultimate": "",
        "SkillPermaConditions": [permaConditionsTextLibrary.atLeast1SP,],
        "UltimatePermaConditions": [permaConditionsTextLibrary.energyMaxed]
    },
    "Argenti": {
        hasEnhancedState: false,
        "Skill": "",
        "Ultimate": "You as the user need to define conditions for Argenti that will determine if you use at Half-Energy or at full.",
        "SkillPermaConditions": [permaConditionsTextLibrary.atLeast1SP,],
        "UltimatePermaConditions": [permaConditionsTextLibrary.energyHalf]
    },
    "Aventurine": defaultStandardAbilityDisplayWarnings,
    "Kafka": defaultStandardAbilityDisplayWarnings,
    "Hysilens": defaultStandardAbilityDisplayWarnings,
    "Pela": defaultStandardAbilityDisplayWarnings,
    "Asta": defaultStandardAbilityDisplayWarnings,
    "Ruan Mei": defaultStandardAbilityDisplayWarnings,
    "Lynx": defaultStandardAbilityDisplayWarnings,
    "Topaz & Numby": defaultStandardAbilityDisplayWarnings,
    "Anaxa": defaultStandardAbilityDisplayWarnings,
    "Huohuo": defaultStandardAbilityDisplayWarnings,
    "Archer": {
        hasEnhancedState: false,
        "Skill": "",
        "Ultimate": "",
        "SkillPermaConditions": [permaConditionsTextLibrary.atLeast2SP,permaConditionsTextLibrary.archerSub5casts],
        "UltimatePermaConditions": [permaConditionsTextLibrary.energyMaxed]
    },
    "Luocha": defaultStandardAbilityDisplayWarnings,
}


const conditionLibrary = {
    AND(battleData,sourceTurn,destination) {
        const array = destination.array;
        // console.log(array)
        for (let condition of array) {
            
            const currentCondition = condition.type;
            const result = conditionLibrary[currentCondition](battleData,sourceTurn,condition);
            
            if (!result) {return false;}//if we ever find a condition that can't be met, then we abort bc the AND failed
        }
        return true;//if all conditions passed, return true
    },
    OR(battleData,sourceTurn,destination) {
        const array = destination.array;
        for (let condition of array) {
            const currentCondition = condition.type;
            const result = conditionLibrary[currentCondition](battleData,sourceTurn,condition);
            if (result) {return true;}//if we ever find a condition that CAN be met, return true bc the rest don't matter
        }
        return false;//if all conditions failed, return false
    },
    COMPARE(battleData,sourceTurn,destination) {
        // const array = destination.array;

        // {
        //     type: "COMPARE",
        //     stat1: {type: "Stat", target: "Self", targetType: "Character", statName: "Any Part"},
        //     comparison: ">",
        //     stat2: {type: "Stat", target: "Self", targetType: "Character", statName: "Any Part"}
        // },

        // statArray: [
        //     {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
        //     {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"}
        // ],
        const statArray = destination.array;

        const stat1Destination = statArray[0];
        const stat2Destination = statArray[1];
        const comparator = destination.comparison;

        const stat1Value = conditionLibrary[stat1Destination.type](battleData,sourceTurn,stat1Destination);
        const stat2Value = conditionLibrary[stat2Destination.type](battleData,sourceTurn,stat2Destination);
        // console.log(stat1Value,stat2Value,comparator)

        switch (comparator) {
            case ">": 
                return stat1Value > stat2Value;
            case ">=": 
                return stat1Value >= stat2Value;
            case "=": 
                return stat1Value === stat2Value;
            case "<=": 
                return stat1Value <= stat2Value;
            case "<": 
                return stat1Value < stat2Value;
            default: return false;
        }
    },
    MATH(battleData,sourceTurn,destination) {
        // const array = destination.array;

        // case "MATH":
        //     return {
        //         type: "MATH",
        //         array: [
        //             {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
        //             {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"}
        //         ],
        //         operator: "*",
        //     }

        const statArray = destination.array;

        const stat1Destination = statArray[0];
        const stat2Destination = statArray[1];
        const operator = destination.operator;

        const stat1Value = conditionLibrary[stat1Destination.type](battleData,sourceTurn,stat1Destination);
        const stat2Value = conditionLibrary[stat2Destination.type](battleData,sourceTurn,stat2Destination);
        // console.log(stat1Value,stat2Value)

        switch (operator) {
            case "+": 
                return stat1Value + stat2Value;
            case "-": 
                return stat1Value - stat2Value;
            case "*": 
                return stat1Value * stat2Value;
            case "/": 
                return stat1Value / stat2Value;
            case "%": 
                return stat1Value % stat2Value;
            // case "^": 
            //     return stat1Value ** stat2Value;
            default: return false;
        }
    },
    Stat(battleData,sourceTurn,condition) {
        // {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
        const allyTurns = battleData.nameBasedTurns;

        let targetStated = condition.target;
        let target = targetStated === "Self" ? sourceTurn : allyTurns[targetStated];
        const targetType = condition.targetType;
        if (targetType != "Character" && targetType === "Memosprite") {
            //summonEventRef memospriteEventRef
            const memoEventCheck = target.memospriteEventRef;
            if (memoEventCheck) {target = target[memoEventCheck];}
            else {return false;}//if the target has no memosprite, they can't pass these checks ever
        }

        const statName = condition.statName;
        const statValue = target.statTable[greatTableIndex[statName]];

        return statValue;
    },
    "User Value: Number"(battleData,sourceTurn,condition) {
        return condition.inputValue
    },
    "User Value: Boolean"(battleData,sourceTurn,condition) {
        return condition.inputValue
    },

    //CHARACTER VALUES
    "Character: Value"(battleData,sourceTurn,condition) {
        const allyTurns = battleData.nameBasedTurns;

        let targetStated = condition.target;
        let target = targetStated === "Self" ? sourceTurn : allyTurns[targetStated];
        const targetType = condition.targetType;
        if (targetType != "Character" && targetType === "Memosprite") {
            //summonEventRef memospriteEventRef
            const memoEventCheck = target.memospriteEventRef;
            if (memoEventCheck) {target = target[memoEventCheck];}
            else {return false;}//if the target has no memosprite, they can't pass these checks ever
        }

        return target[condition.characterValue];
    },

    //SPECIAL CHARACTER VALUES
    "Character: Special Value"(battleData,sourceTurn,condition) {
        // case "Character: Special Value":
        //         return {type: "Character: Special Value", target: "Self", specialValue: "currentEnergy", isBattleValue: false}
        //isBattleValue is assigned under the UI function of the same name, since we need to determine it as we populate the list

        const valueName = condition.specialValue;
        // console.log(condition)
        if (valueName === null) {return 0;}//if a character special value condition is used on a character with no valid character special values to read, return 0 by default
        const allyTurns = battleData.nameBasedTurns;
        const conditionTarget = condition.target;

        let target = conditionTarget === "Self" ? sourceTurn : allyTurns[conditionTarget];

        // console.log(valueName,target)
        // const valueToReturn = condition.isBattleValue ? target.battleValues[valueName] : target[valueName];
        // console.log(valueName,valueToReturn,condition.isBattleValue,target)

        return condition.isBattleValue ? target.battleValues[valueName] : target[valueName];
    },
    
    //TEAM VALUES
    "Team: Value"(battleData,sourceTurn,condition) {
        return conditionLibrary[condition.teamValue](battleData,sourceTurn);
    },
    "Battle: Value"(battleData,sourceTurn,condition) {
        return conditionLibrary[condition.battleValue](battleData,sourceTurn);
    },
    "Skill Points: Current"(battleData,sourceTurn,condition) {
        return battleData.skillPointCurrent
    },
    "Skill Points: Max"(battleData,sourceTurn,condition) {
        return battleData.battleTable.SPMax
    },


    //BATTLE VALUES
    "Cycle: AV Passed"(battleData,sourceTurn,condition) {
        return battleData.cycleAVPassed;
    },
    "Cycle: AV Remaining"(battleData,sourceTurn,condition) {
        return battleData.cycleAV;
    },
    "Cycle: Current Cycle"(battleData,sourceTurn,condition) {
        return battleData.currentCycle;
    },
    "Total AV Passed"(battleData,sourceTurn,condition) {
        return battleData.sumAV;
    },
    "Waves Completed"(battleData,sourceTurn,condition) {
        return battleData.wavesCompleted;
    },
    

    

    

    //SUSTAIN CHECKS
    "Sustain Checks"(battleData,sourceTurn,condition) {
        return conditionLibrary[condition.sustainValue](battleData,sourceTurn);
    },

    "Any Ally: Has no Shield"(battleData,sourceTurn,condition) {
        const allyPositions = battleData.allyPositions;

        for (let ally of allyPositions) {
            if (ally.shieldValueCurrent === 0) {
                return true;//if we find anyone with a shield value of 0, we can abort immediately and say true
            }
        }

        return false;//otherwise if we reached this point it's bc everyone that is a target(not including demiurge) still has at least one shield instance left
    },
    "Any Ally: HP < 100%"(battleData,sourceTurn,condition) {
        const allyPositions = battleData.allyPositions;

        // currentHP: HPStats.HPFinal,
        // maxHP: HPStats.HPFinal,

        for (let ally of allyPositions) {
            const currentHP = ally.currentHP;
            const maxHP = ally.maxHP;
            if (currentHP != maxHP) {return true;}
        }

        return false;
    },
    "Any Ally: HP <= 75%"(battleData,sourceTurn,condition) {
        const allyPositions = battleData.allyPositions;

        // currentHP: HPStats.HPFinal,
        // maxHP: HPStats.HPFinal,

        for (let ally of allyPositions) {
            const currentHP = ally.currentHP;
            const maxHP = ally.maxHP;
            const ratio = currentHP/maxHP;
            if (ratio <= 0.75) {return true;}
        }

        return false;
    },
    "Any Ally: HP <= 50%"(battleData,sourceTurn,condition) {
        const allyPositions = battleData.allyPositions;

        // currentHP: HPStats.HPFinal,
        // maxHP: HPStats.HPFinal,

        for (let ally of allyPositions) {
            const currentHP = ally.currentHP;
            const maxHP = ally.maxHP;
            const ratio = currentHP/maxHP;
            if (ratio <= 0.50) {return true;}
        }

        return false;
    },
    "Any Ally: HP <= 25%"(battleData,sourceTurn,condition) {
        const allyPositions = battleData.allyPositions;

        // currentHP: HPStats.HPFinal,
        // maxHP: HPStats.HPFinal,

        for (let ally of allyPositions) {
            const currentHP = ally.currentHP;
            const maxHP = ally.maxHP;
            const ratio = currentHP/maxHP;
            if (ratio <= 0.25) {return true;}
        }

        return false;
    },


    // "Any Ally: Has no Shield",
    // "Any Ally: < 100% HP",
    // "Any Ally: <= 75% HP",
    // "Any Ally: <= 50% HP",
    // "Any Ally: <= 25% HP",

    // sourceTurn.shieldValueCurrent = 0;
    // sourceTurn.shieldValueMax = 0;

    Turn(battleData,sourceTurn,condition) {
        // {type: "Turn", target: "Self", targetType: "Character", phase: "Any Part", state: true},

        // turnState: 0,
        // actionAssigned: false,
        const allyTurns = battleData.nameBasedTurns;
        let target = condition.target === "Self" ? sourceTurn : allyTurns[condition.target];
        const targetType = condition.targetType;
        if (targetType != "Character") {
            if (targetType === "Summon") {
                //summonEventRef memospriteEventRef
                const summonEventCheck = target.summonEventRef;
                if (summonEventCheck) {target = target[summonEventCheck];}
                else {return false;}//if the target has no summon, they can't pass these checks ever
            }
            if (targetType === "Memosprite") {
                //summonEventRef memospriteEventRef
                const memoEventCheck = target.memospriteEventRef;
                if (memoEventCheck) {target = target[memoEventCheck];}
                else {return false;}//if the target has no memosprite, they can't pass these checks ever
            }
        }
        const phase = condition.phase;
        const state = condition.state;

        switch (phase) {
            case "Pre-Action":
                return (target.actionAssigned === false && target.turnState) === state;//if the turn is active, but the action isn't assigned yet
            case "Post-Action":
                return (target.actionAssigned === true) === state;//if the turn is active, and the action WAS assigned/carried out
            case "Any Part":
                // console.log("reached any part comparison",target.turnState,state)
                return target.turnState === state;//if the turn is either active or not active, at all
            default: return true
        }
    },
    "Next Turn Is:"(battleData,sourceTurn,condition) {
        // {type: "Next Turn", target: "Self", targetType: "Character", state: true}

        // turnState: 0,
        // actionAssigned: false,
        const allyTurns = battleData.nameBasedTurns;
        let target = condition.target === "Self" ? sourceTurn : allyTurns[condition.target];
        const targetType = condition.targetType;
        if (targetType != "Character") {
            if (targetType === "Summon") {
                //summonEventRef memospriteEventRef
                const summonEventCheck = target.summonEventRef;
                if (summonEventCheck) {target = target[summonEventCheck];}
                else {return false;}//if the target has no summon, they can't pass these checks ever
            }
            if (targetType === "Memosprite") {
                //summonEventRef memospriteEventRef
                const memoEventCheck = target.memospriteEventRef;
                if (memoEventCheck) {target = target[memoEventCheck];}
                else {return false;}//if the target has no memosprite, they can't pass these checks ever
            }
        }
        const state = condition.state;

        const nextTurnIs = sim.getNextQueuedAllyTurn(battleData,true);

        const nextTurnMatch = target.properName === nextTurnIs.properName;

        return nextTurnMatch === state;
    },
    Buff(battleData,sourceTurn,condition) {
        // {type: "Buff", target: "Self", targetType: "Character", buffName: "Benison of Paper and Rites", state: true},

        // turnState: 0,
        // actionAssigned: false,
        const allyTurns = battleData.nameBasedTurns;
        const conditionTarget = condition.target;


        let target = conditionTarget === "Self" ? sourceTurn : allyTurns[conditionTarget];
        const targetType = condition.targetType;
        if (targetType != "Character" && targetType === "Memosprite") {
            //summonEventRef memospriteEventRef
            const memoEventCheck = target.memospriteEventRef;
            if (memoEventCheck) {target = target[memoEventCheck];}
            else {return false;}//if the target has no memosprite, they can't pass these checks ever
        }
        const buffName = condition.buffName;
        const state = condition.state;

        const buffCheck = target.buffsObject[buffName] != null;

        // console.log(buffName,buffCheck,state,buffCheck === state,target.buffsObject[buffName])
        // console.log(buffCheck)

        return buffCheck == state;
    },
    "Character: State"(battleData,sourceTurn,condition) {
        // {type: "Character: State", target: "Self", stateName: "currentEnergy", state: true, isBattleValue: false},
        //isBattleValue is assigned under the UI function of the same name, since we need to determine it as we populate the list

        const valueName = condition.stateName;
        // console.log(condition)
        if (valueName === null) {return true;}//if a character state condition is used on a character with no valid character states to read, return true by default
        const allyTurns = battleData.nameBasedTurns;
        const conditionTarget = condition.target;
        const state = condition.state;

        let target = conditionTarget === "Self" ? sourceTurn : allyTurns[conditionTarget];

        return condition.isBattleValue ? target.battleValues[valueName] === state : target[valueName] === state;
    },

    
}





const defaultConditions = {
    getUltimateCondition(battleData,sourceTurn) { 
        // characterObject
        const conditionPath = battleData[sourceTurn.name]?.Ultimate;
        // const conditionPath = defaultConditions[sourceTurn.properName]?.Ultimate;
        if (!conditionPath) {return true}//if someone doesn't have an ulty condition, then default to true so this doesn't prevent an ult


        const startType = conditionPath.type;
        const result = conditionLibrary[startType](battleData,sourceTurn,conditionPath);
        // if (sourceTurn.properName === "Saber") {console.log(result)}
        
        return result
    },
    getSkillCondition(battleData,sourceTurn) { 
        const conditionPath = battleData[sourceTurn.name]?.Skill;
        // const conditionPath = defaultConditions[sourceTurn.properName]?.Skill;
        if (!conditionPath) {return true}//if someone doesn't have an ulty condition, then default to true so this doesn't prevent an ult


        const startType = conditionPath.type;
        const result = conditionLibrary[startType](battleData,sourceTurn,conditionPath);
        // if (sourceTurn.properName === "Saber") {console.log(result)}
        
        return result
    },

    //DESTRUCTION
    "Saber": {
        "hasEnhancedState": true,
        "Skill": {
            "type": "AND",
            "array": []
        },
        "Ultimate": {
            "type": "AND",
            "array": [
                {
                    "type": "Turn",
                    "target": "Self",
                    "targetType": "Character",
                    "phase": "Any Part",
                    "state": true
                },
                // {
                //     "type": "Buff",
                //     "target": "Self",
                //     "targetType": "Character",
                //     "buffName": "Benison of Paper and Rites",
                //     "state": true
                // },
                {
                    "type": "Character: State",
                    "target": "Self",
                    "stateName": "isEnhanced",
                    "state": false,
                    "isBattleValue": true
                }
            ]
        }
    },
    "Blade": {
        "hasEnhancedState": true,
        "Skill": {
            "type": "AND",
            "array": []
        },
        "Ultimate": {
            "type": "AND",
            "array": []
        }
    },

    //HUNT
    // "Archer": {
    //     hasEnhancedState: false,
    //     "Skill": null,
    //     "Ultimate": {
    //         type: "AND",
    //         array: []
    //     }
    // },



    //REMEMBRANCE
    "Trailblazer - Remembrance": {
        hasEnhancedState: true,
        "Skill": null,
        "Ultimate": {
            type: "AND",
            array: []
        }
    },
    "Aglaea": {
        "hasEnhancedState": true,
        "Skill": {
            "type": "OR",
            "array": [
                {
                    "type": "AND",
                    "array": [
                        {
                            "type": "Character: State",
                            "target": "Self",
                            "stateName": "garmentIsActive",
                            "state": false,
                            "isBattleValue": true
                        },
                        {
                            "type": "COMPARE",
                            "comparison": "<",
                            "array": [
                                {
                                    "type": "Character: Value",
                                    "target": "Self",
                                    "targetType": "Character",
                                    "characterValue": "currentEnergy"
                                },
                                {
                                    "type": "MATH",
                                    "operator": "-",
                                    "array": [
                                        {
                                            "type": "Character: Value",
                                            "target": "Self",
                                            "targetType": "Character",
                                            "characterValue": "maxEnergy"
                                        },
                                        {
                                            "type": "MATH",
                                            "operator": "*",
                                            "array": [
                                                {
                                                    "type": "User Value: Number",
                                                    "inputValue": 20
                                                },
                                                {
                                                    "type": "MATH",
                                                    "operator": "+",
                                                    "array": [
                                                        {
                                                            "type": "User Value: Number",
                                                            "inputValue": 1
                                                        },
                                                        {
                                                            "type": "Stat",
                                                            "target": "Self",
                                                            "targetType": "Character",
                                                            "statName": "EnergyRegenRate"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "AND",
                    "array": [
                        {
                            "type": "Character: State",
                            "target": "Self",
                            "stateName": "garmentIsActive",
                            "state": true,
                            "isBattleValue": true
                        },
                        {
                            "type": "COMPARE",
                            "comparison": "<",
                            "array": [
                                {
                                    "type": "MATH",
                                    "operator": "/",
                                    "array": [
                                        {
                                            "type": "Character: Value",
                                            "target": "Self",
                                            "targetType": "Memosprite",
                                            "characterValue": "currentHP"
                                        },
                                        {
                                            "type": "Character: Value",
                                            "target": "Self",
                                            "targetType": "Memosprite",
                                            "characterValue": "maxHP"
                                        }
                                    ]
                                },
                                {
                                    "type": "User Value: Number",
                                    "inputValue": 0.25
                                }
                            ]
                        },
                        {
                            "type": "COMPARE",
                            "comparison": "<",
                            "array": [
                                {
                                    "type": "Character: Value",
                                    "target": "Self",
                                    "targetType": "Character",
                                    "characterValue": "currentEnergy"
                                },
                                {
                                    "type": "MATH",
                                    "operator": "-",
                                    "array": [
                                        {
                                            "type": "Character: Value",
                                            "target": "Self",
                                            "targetType": "Character",
                                            "characterValue": "maxEnergy"
                                        },
                                        {
                                            "type": "MATH",
                                            "operator": "*",
                                            "array": [
                                                {
                                                    "type": "User Value: Number",
                                                    "inputValue": 20
                                                },
                                                {
                                                    "type": "MATH",
                                                    "operator": "+",
                                                    "array": [
                                                        {
                                                            "type": "User Value: Number",
                                                            "inputValue": 1
                                                        },
                                                        {
                                                            "type": "Stat",
                                                            "target": "Self",
                                                            "targetType": "Character",
                                                            "statName": "EnergyRegenRate"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "Ultimate": {
            "type": "AND",
            "array": [
                {
                    "type": "Turn",
                    "target": "Self",
                    "targetType": "Character",
                    "phase": "Pre-Action",
                    "state": false
                },
                {
                    "type": "COMPARE",
                    "comparison": ">=",
                    "array": [
                        {
                            "type": "Character: Value",
                            "target": "Self",
                            "targetType": "Character",
                            "characterValue": "AV"
                        },
                        {
                            "type": "User Value: Number",
                            "inputValue": 20
                        }
                    ]
                }
            ]
        }
    },
    "Cyrene": {
        hasEnhancedState: true,
        "Skill": null,
        "Ultimate": {
            type: "AND",
            array: []
        }
    },

    //NIHILITY
    "Silver Wolf": {
        hasEnhancedState: false,
        "Skill": null,
        "Ultimate": {
            type: "AND",
            array: []
        }
    },
    "Pela": {
        hasEnhancedState: false,
        "Skill": null,
        "Ultimate": {
            type: "AND",
            array: []
        }
    },
    "Kafka": {
        "hasEnhancedState": false,
        "Skill": {
            "type": "AND",
            "array": []
        },
        "Ultimate": {
            "type": "COMPARE",
            "comparison": "<",
            "array": [
                {
                    "type": "Character: Special Value",
                    "target": "Self",
                    "specialValue": "fuaStacks",
                    "isBattleValue": true
                },
                {
                    "type": "User Value: Number",
                    "inputValue": 2
                }
            ]
        }
    },
    "Hysilens": {
        "hasEnhancedState": false,
        "Skill": null,
        "Ultimate": null
    },

    //HARMONY
    "Sunday": {
        "hasEnhancedState": false,
        "Skill": {
            "type": "AND",
            "array": []
        },
        "Ultimate": {
            "type": "AND",
            "array": [
                {
                    "type": "COMPARE",
                    "comparison": "<",
                    "array": [
                        {
                            "type": "Character: Value",
                            "target": "char1",
                            "targetType": "Character",
                            "characterValue": "currentEnergy"
                        },
                        {
                            "type": "Character: Value",
                            "target": "char1",
                            "targetType": "Character",
                            "characterValue": "maxEnergy"
                        }
                    ]
                }
            ]
        }
    },
    "Bronya": {
        hasEnhancedState: false,
        "Skill": null,
        "Ultimate": {
            type: "AND",
            array: []
        }
    },
    "Robin": {
        "hasEnhancedState": false,
        "Skill": {
            "type": "AND",
            "array": [
                {
                    "type": "Character: State",
                    "target": "Self",
                    "stateName": "ariaIsActive",
                    "state": false,
                    "isBattleValue": true
                }
            ]
        },
        "Ultimate": {
            "type": "AND",
            "array": [
                {
                    "type": "Turn",
                    "target": "char1",
                    "targetType": "Character",
                    "phase": "Any Part",
                    "state": false
                },
                {
                    "type": "Next Turn Is:",
                    "target": "char1",
                    "targetType": "Character",
                    "state": false
                }
            ]
        }
    },
    "Tingyun": {
        hasEnhancedState: false,
        "Skill": null,
        "Ultimate": {
            type: "AND",
            array: []
        }
    },
    "Tribbie": {
        hasEnhancedState: false,
        "Skill": null,
        "Ultimate": {
            type: "AND",
            array: []
        }
    },
    "Asta": {
        "hasEnhancedState": false,
        "Skill": {
            "type": "AND",
            "array": []
        },
        "Ultimate": {
            "type": "AND",
            "array": [
                {
                    "type": "Buff",
                    "target": "Self",
                    "targetType": "Character",
                    "buffName": "Astral Blessing (Asta)",
                    "state": false
                }
            ]
        }
    },
    "Ruan Mei": {
        "hasEnhancedState": false,
        "Skill": {
            "type": "AND",
            "array": [
                {
                    "type": "Buff",
                    "target": "Self",
                    "targetType": "Character",
                    "buffName": "Overtone (Countdown)",
                    "state": false
                }
            ]
        },
        "Ultimate": {
            "type": "AND",
            "array": []
        }
    },

    //ABUNDANCE
    "Huohuo": {
        hasEnhancedState: false,
        "Skill": null,
        "Ultimate": {
            type: "AND",
            array: []
        }
    },
    "Luocha": {
        hasEnhancedState: false,
        "Skill": null,
        "Ultimate": {
            type: "AND",
            array: []
        }
    },
    "Gallagher": {
        "hasEnhancedState": true,
        "Skill": {
            "type":"AND",
            "array": [ 
                {
                    "type":"Character: State",
                    "target":"Self",
                    "stateName":"nextBasicEnhanced",
                    "state":false,
                    "isBattleValue":true
                }
            ]
        },
        "Ultimate": {
            "type": "AND",
            "array": [
                {
                    "type": "Turn",
                    "target": "Self",
                    "targetType": "Character",
                    "phase": "Pre-Action",
                    "state": false
                }
            ]
        }
    },
    "Natasha": {
        "hasEnhancedState": false,
        "Skill": {
            "type": "AND",
            "array": [
                {
                    "type": "Sustain Checks",
                    "sustainValue": "Any Ally: HP <= 75%"
                },
                {
                    "type": "COMPARE",
                    "comparison": "<",
                    "array": [
                        {
                            "type": "Character: Value",
                            "target": "Self",
                            "targetType": "Character",
                            "characterValue": "currentEnergy"
                        },
                        {
                            "type": "Character: Value",
                            "target": "Self",
                            "targetType": "Character",
                            "characterValue": "maxEnergy"
                        }
                    ]
                }
            ]
        },
        "Ultimate": {
            "type": "AND",
            "array": [
                {
                    "type": "Sustain Checks",
                    "sustainValue": "Any Ally: HP <= 75%"
                }
            ]
        }
    },
    "Lynx": {
        "hasEnhancedState": false,
        "Skill": {
            "type": "AND",
            "array": [
                {
                    "type": "Sustain Checks",
                    "sustainValue": "Any Ally: HP <= 75%"
                },
                {
                    "type": "COMPARE",
                    "comparison": "<",
                    "array": [
                        {
                            "type": "Character: Value",
                            "target": "Self",
                            "targetType": "Character",
                            "characterValue": "currentEnergy"
                        },
                        {
                            "type": "Character: Value",
                            "target": "Self",
                            "targetType": "Character",
                            "characterValue": "maxEnergy"
                        }
                    ]
                }
            ]
        },
        "Ultimate": {
            "type": "AND",
            "array": [
                {
                    "type": "Sustain Checks",
                    "sustainValue": "Any Ally: HP <= 75%"
                }
            ]
        }
    },

    //PRESERVATION
    "Dan Heng • Permansor Terrae": {
        "hasEnhancedState": false,
        "Skill": {
            "type": "OR",
            "array": [
                {
                    "type": "Buff",
                    "target": "char1",
                    "targetType": "Character",
                    "buffName": "Bondmate [Empyreanity]",
                    "state": false
                },
                {
                    "type": "Sustain Checks",
                    "sustainValue": "Any Ally: Has no Shield"
                }
            ]
        },
        "Ultimate": {
            "type": "AND",
            "array": []
        }
    },
    "Aventurine": {
        "hasEnhancedState": false,
        "Skill": {
            "type": "AND",
            "array": [
                {
                    "type": "Sustain Checks",
                    "sustainValue": "Any Ally: Has no Shield"
                }
            ]
        },
        "Ultimate": {
            "type": "AND",
            "array": []
        }
    },

    //ERUDITON
    "Argenti": {
        hasEnhancedState: false,
        "Skill": null,
        "Ultimate": null,
    },
    "Anaxa": {
        hasEnhancedState: false,
        "Skill": null,
        "Ultimate": null,
    },

    //HUNT
    "Topaz & Numby": {
        "hasEnhancedState": false,
        "Skill": {
            "type": "AND",
            "array": []
        },
        "Ultimate": {
            "type": "AND",
            "array": [
                {
                    "type": "Turn",
                    "target": "Self",
                    "targetType": "Character",
                    "phase": "Any Part",
                    "state": false
                },
                {
                    "type": "Turn",
                    "target": "Self",
                    "targetType": "Summon",
                    "phase": "Any Part",
                    "state": false
                },
                {
                    "type": "COMPARE",
                    "comparison": "=",
                    "array": [
                        {
                            "type": "Character: Special Value",
                            "target": "Self",
                            "specialValue": "bonanzaStacks",
                            "isBattleValue": true
                        },
                        {
                            "type": "User Value: Number",
                            "inputValue": 0
                        }
                    ]
                }
            ]
        }
    },
    "Archer": {
        "hasEnhancedState": false,
        "Skill": {
            "type": "OR",
            "array": [
                {
                    "type": "AND",
                    "array": [
                        {
                            "type": "Character: State",
                            "target": "Self",
                            "stateName": "skillStarted",
                            "state": false,
                            "isBattleValue": true
                        },
                        {
                            "type": "COMPARE",
                            "comparison": ">=",
                            "array": [
                                {
                                    "type": "Team: Value",
                                    "teamValue": "Skill Points: Current"
                                },
                                {
                                    "type": "User Value: Number",
                                    "inputValue": 6
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "AND",
                    "array": [
                        {
                            "type": "Character: State",
                            "target": "Self",
                            "stateName": "skillStarted",
                            "state": true,
                            "isBattleValue": true
                        },
                        {
                            "type": "COMPARE",
                            "comparison": ">=",
                            "array": [
                                {
                                    "type": "Team: Value",
                                    "teamValue": "Skill Points: Current"
                                },
                                {
                                    "type": "User Value: Number",
                                    "inputValue": 2
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "Ultimate": {
            "type": "AND",
            "array": []
        }
    },
}

const checkUlty = defaultConditions.getUltimateCondition;
const checkSkill = defaultConditions.getSkillCondition;