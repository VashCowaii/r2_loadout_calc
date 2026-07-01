const keyShortcut = basicShorthand.makeKeysArray;

const globalTagCacheKeysDMG = {};
const globalTagCacheKeysPEN = {};
const globalTagCacheKeysSHRED = {};
const globalTagCacheKeysVULN = {};

const superGlobal = {
    "generalImplants": {
        "stats": [WeaknessWind],
        // [WeaknessWind]: 1,
        "flags": [WEAKNESS_IMPLANT],
        "source": "",
        "sourceOwner": "",
        "buffName": "",
        "duration": 3,
        "AVApplied": 0,
        "maxStacks": 1,
        "currentStacks": 1,
        "decay": false,
        "expireType": "EndTurn",
        "isDebuff": true,
        "isImplant": true,
    },
    implantGeneralWeakness(battleData,targetTurn,duration,source,sourceOwner,weakness,buffName) {
        // [WeaknessWind]: {
        //     "stats": [WeaknessWind],
        //     [WeaknessWind]: 1,
        //     "source": "",
        //     "sourceOwner": "",
        //     "buffName": "",
        //     "duration": 3,
        //     "AVApplied": 0,
        //     "maxStacks": 1,
        //     "currentStacks": 1,
        //     "decay": false,
        //     "expireType": "EndTurn",
        //     "isDebuff": true,
        // },
        const preSheet = superGlobal.generalImplants;
        Object.assign(preSheet,{
            duration,source,sourceOwner,
            stats: [weakness],
            [weakness]: 1,
            buffName
        });

        battleActions.updateBuff(battleData,targetTurn,preSheet);
    },
    getStartingAttacker(battleData) {//for getting whoever is starting the fight, usually with a technique, otherwise default char1
        const combatStarterSlot = battleData.combatStarterSlot;
        const newTurn = battleData.nameBasedTurns[combatStarterSlot];

        return newTurn;
    },
    getStarterBattleTable() {
        return {
            "SPMax": 5,
        }
    },
    createEntityDOTObject() {
        return {
            "Lightning": 0,
            "Fire": 0,
            "Wind": 0,
            "Physical": 0
        }
    },
    createEntityCache() {//got tired of needing to ctrl f on this stuff, just making it a uniform function and idk why I didn't do this sooner lmao

        //REVISIT cacheTagFamilies in statListData if you EVER change these
        return {
            "UpdateStatDamage": {
                //compositeCacheTag will define itself here when used, and the tag will be the key
            },
            "UpdateStatATK": {},
            "UpdateStatHP": {},
            // "UpdateStatDEFScalar": {},
            "UpdateStatElation": {},
            "UpdateStatMerryMake": {},
            "UpdateStatDamageReduction": {},
            "UpdateStatDEFShred": {},
            "UpdateStatDEF": {},
            "UpdateStatPEN": {},
            "UpdateStatRES": [],
            "UpdateStatVulnerable": {},
            "UpdateStatCritRate": {},
            "UpdateStatCritDamage": {},
            "UpdateStatHealing": {},
            "UpdateStatShield": {},
            "UpdateStatBreak": {},
        }
    },
    createStandardAttackObject(scalar,tags,actionTags,sourceTurn,overrideATKData,atkSlot,energy) {
        const fullTag = tags + "";
        const realDMGKeys = globalTagCacheKeysDMG[fullTag] ??= keyShortcut(dmgKeys,tags);
        const realPENKeys = globalTagCacheKeysPEN[fullTag] ??= keyShortcut(resPENKeys,tags);
        const realShredKeys = globalTagCacheKeysSHRED[fullTag] ??= keyShortcut(defShredKeys,tags);
        const realVulnKeys = globalTagCacheKeysVULN[fullTag] ??= keyShortcut(vulnKeys,tags);

        const compositeCacheTag = tags + actionTags + sourceTurn.properName;

        const returnObject = {
            multipliers: {
                primary: null,
                blast: null,
                all: null,
            },
            energy,
            scalar,
            DMGTags: tags,
            slot: atkSlot,
            realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
            actionTags,compositeCacheTag,

            allToughness: false,
            isFUA: false,
        }
        Object.assign(returnObject,overrideATKData);

        return returnObject
    },
    generateAllATKObjects() {

    },
    createQueueObject(ownerTurn,overrideObject) {
        const queueObject = {
            name: null,
            priority: priorityList.turn.Default,
            queueTag: "QueuedUltimate",

            actionCall: null,
            action: "Ultimate",
            isContinuousTurn: false,
            isContinuousTurnBREAK: false,
            abortCheck: null,

            points: 0,
            pointsOffset: 0,
            //for shit like DHIL cost offset, which won't stop it from being part of the initial cost read to events,
            //but will stop SP from being drained

            energyCost: null,
            // energyCostFunction: null,
            //for shit that involves determining which ult to use, like Argenti's, whether it's enhanced how much it drains etc
            //turnLogic[ownerTurn.properName].skillFunctions.randomBullshitHereLater,
            specialEnergyPoke: null,
            //"SW999GainMMR",   //for shit like special energy costs

            //EXTRA TURN PAIN
            isTieBreaker: false,
            isExtraTurn: false,
            skipEXDisplay: false,
            allowUlts: false,
            decrementBuffs: false,
            extraTurnHasChoice: false,
            forceGlobalFirst: false,

            //mainly visual, but can be used elsewhere
            isInserted: false,

            dontKeepNextWave: false,//ults always clear out
            isEnhanced: false,
            isAttack: false,
            isAbility: false,
            useAnyTriggers: false,
            eventTypeStartLOG: "UltimateStart",
            hideStartEvent: false,

            properName: ownerTurn.properName,
            sourceTurn: null,
            eventOverrideImage: null,//"BEicons/BattleEvent_1506_Box.png"

            target: [],
            subTarget: [],
            poolKey: null,

            elationForcedPunchline: null,
        }

        Object.assign(queueObject,overrideObject);

        return queueObject;
    },
    createATKBounceObject(overrideObject) {
        const bounceData = {
            multi: 1,
            bounceCount: 1,
            energy: 0,
            target: {
                "hitRatio": 1,
                "energyRatio": 1,
                "toughness": 10,
            },
            subTarget: null,
            blast: null,
            bounceSkipFirstTarget: false,
            useStandardBounceOrder: true,
        }

        Object.assign(bounceData,overrideObject);

        return bounceData;
    },
    createStandardElementDOTSHEET(ownerTurn,element,overrideObject) {
        const tags = ["All",element];
        const keyShortcut = basicShorthand.makeKeysArray;
        const realDMGKeys = keyShortcut(dmgKeys,tags);
        const realPENKeys = keyShortcut(resPENKeys,tags);
        const realShredKeys = keyShortcut(defShredKeys,tags);
        const realVulnKeys = keyShortcut(vulnKeys,tags);
        //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
        const actionTags = ["All","DOT"];
        const compositeCacheTag = tags + actionTags + ownerTurn.properName;

        const baseObject = {
            "stats": null,
            "source": "Trace",
            "sourceOwner": ownerTurn.properName,
            "buffName": "UNNAMED DOT",
            "durationInTurn": 3,
            "duration": 2,
            "AVApplied": 0,
            "maxStacks": 1,
            "currentStacks": 1,
            "decay": false,
            "expireType": "EndTurn",
            "isDOT": true,
            "isDebuff": true,
            "element": element,
            "multiplier": 0.30,
            "scalar": "ATK",
            "slot": "Trace",
            "ownerSlot": ownerTurn.name,
            "avgChanceApplied": 1,
            "baseChance": 0.50,
            tags,actionTags,compositeCacheTag,
            realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
        }

        Object.assign(baseObject,overrideObject)
        return baseObject;
    },
    territoryActiveAbortUltimate(battleData,queueObject,sourceTurn) {
        const alreadyActive = battleData.territoryActive;
        if (alreadyActive) {
            sourceTurn.ultyQueued = false;
            return true;
        }
        else {return false;}
    },

    genericSpecialEnergyWithOverflowHandling(battleData,ownerTurn,generalInfo,generalData) {
        // const generalData = this.generalData ??= {summerName: "cyreneSpecialOverflowSummerTBD",overflowName: "recollectionOverflow",
        //     baseString: "Recollection",displayIcon:"/HonkaiSR/misc/cyrene/Icon1415Passive.png"};

        const pointsGained = generalInfo.pointsGained;

        const valuesRef = ownerTurn.battleValues;
        const overflowName = generalData.overflowName;

        const oldValue = ownerTurn.specialEnergyCurrent;
        const energyMax = ownerTurn.specialEnergyMax;
        const oldOverflow = valuesRef[overflowName];
        const overflowMax = ownerTurn.specialEnergyOverflowLimit;

        const proposedFinalValue = oldValue + pointsGained + oldOverflow;
        //we don't need to separately evaluate whether overflow stacks should enter the main energy container or not
        //because if we add it to the proposedFinalValue, due to the fact that we already assign overflow every time based on excess
        //this will automatically move the overflow into the standard container, hell yeah
        const overflowValue = proposedFinalValue > energyMax ? Math.min(overflowMax,proposedFinalValue-energyMax) : 0;
        valuesRef[overflowName] = overflowValue;

        ownerTurn.specialEnergyCurrent = Math.min(energyMax,proposedFinalValue);

        const resoRef = ownerTurn.specialEnergyCurrent;
        const valueWasDiff = resoRef != oldValue;

        const finalOverflow = valuesRef[overflowName]
        const overflowWasDiff = oldOverflow != finalOverflow;

        const sourceString = generalInfo.sourceString;
        if (battleData.isLoggyLogger) {
            const displayName = generalData.baseString;
            const displayIcon = generalData.displayIcon;

            
            if (valueWasDiff) {
                const displayOld = +oldValue.toFixed(7);
                const displayNew = +resoRef.toFixed(7);
                // GenericActionWithImage
                logToBattle(battleData,{logType: "GenericActionWithImage", imagePath:displayIcon,sourceName: ownerTurn.properName, source:"Special Energy Handler", bodyText: `${displayName}: ${displayOld} --> ${displayNew} [${sourceString}]`});
            }
            if (overflowWasDiff) {
                const displayOld = +oldOverflow.toFixed(7);
                const displayNew = +finalOverflow.toFixed(7);
                // GenericActionWithImage
                logToBattle(battleData,{logType: "GenericActionWithImage", imagePath:displayIcon,sourceName: ownerTurn.properName, source:"Special Energy Handler", bodyText: `${displayName} (OVERFLOW): ${displayOld} --> ${displayNew} [${sourceString}]`});
            }
        }
    },
    genericEnergyOverflowHandling(battleData,ownerTurn,generalInfo,generalData) {
        const overflow = generalInfo.overFill;
        if (overflow) {
            const valuesRef = ownerTurn.battleValues;
            const oldAmount = valuesRef.overflowEnergy;
            const cap = valuesRef.overflowEnergyMax;
            valuesRef.overflowEnergy = Math.min(cap,valuesRef.overflowEnergy + overflow);
            const amountGained = valuesRef.overflowEnergy - oldAmount;

            if (battleData.isLoggyLogger) {
                const summerName = generalData.summerName;
                const sourceString = generalData.sourceString;
                const energyOverrideIcon = generalData.energyOverrideIcon;

                logToBattle(battleData,{logType: "EnergyChange", isOverflow: true, target: ownerTurn.properName, amount: amountGained, oldEnergy:oldAmount, newEnergy:valuesRef.overflowEnergy, maximum:cap,
                    source:sourceString, energyOverrideIcon});
            
                if (valuesRef.overflowEnergy > oldAmount) {
                    ownerTurn[summerName] ??= 0;
                    ownerTurn[summerName] += amountGained;
                }
                logToBattle(battleData,{
                    logType: "SUMMARY:SUM",
                    function: summerName,
                    AV: battleData.sumAV,
                    currentValue: valuesRef.overflowEnergy,
                    currentSumValue: ownerTurn[summerName],
                    currentAddedValue: amountGained
                });
            }
        }
    },
    genericSubEnergyHandling(battleData,ownerTurn,generalInfo,generalData) {
        // coreResonance
        //NEVER need to check the source turn on this, bc only saber can poke this, and only she will ever have listeners for this
        const pointsGained = generalInfo.pointsGained;
        const valuesRef = ownerTurn.battleValues;

        const baseName = generalData.baseName;
        const maxName = generalData.maxName;
        const minName = generalData.minName;

        const oldValue = valuesRef[baseName];
        const maxValue = valuesRef[maxName];
        const minValue = valuesRef[minName] ?? 0;

        const isRealSubEnergy = generalData.isRealSubEnergy;//for cerydra later

        const preAdd = oldValue + pointsGained;
        valuesRef[baseName] = Math.max(minValue, maxValue ? Math.min(maxValue,preAdd) : preAdd);

        const valueWasDiff = valuesRef[baseName] != oldValue;

        if (valueWasDiff && battleData.isLoggyLogger) {
            const summerName = generalData.summerName;
            const baseString = generalData.baseString;
            const sourceString = generalInfo.sourceString
            const maxNameDisplay = generalData.maxNameDisplay;
            const displayIcon = generalData.displayIcon;

            const newValue = valuesRef[baseName];
            const displayMax = maxValue ?? valuesRef[maxNameDisplay];

            // logToBattle(battleData,{logType: "GenericAction", source:this.listenerName, bodyText: `Blind Bet (Aventurine): ${oldValue} --> ${valuesRef.weirdStacks}/10 [${sourceString}]`});
            logToBattle(battleData,{logType: "GenericActionWithImage", imagePath:displayIcon,sourceName: ownerTurn.properName, source:this.listenerName,
                bodyText: `${baseString}: ${oldValue} --> ${newValue}${displayMax ? `/${displayMax}` : ""} [${sourceString}]`});
            
            if (pointsGained > 0) {
                ownerTurn[summerName] ??= 0;
                ownerTurn[summerName] += newValue - oldValue;
            }
            logToBattle(battleData,{
                logType: "SUMMARY:SUM",
                function: summerName,
                AV: battleData.sumAV,
                currentValue: newValue,
                currentSumValue: ownerTurn[summerName],
                currentAddedValue: newValue - oldValue
            });
        }

        return valueWasDiff;
    },
}
const createQueueObject = superGlobal.createQueueObject;
const genericEnergyOverflow = superGlobal.genericEnergyOverflowHandling;
const genericSpecialOverflow = superGlobal.genericSpecialEnergyWithOverflowHandling;
const genericSubEnergy = superGlobal.genericSubEnergyHandling;