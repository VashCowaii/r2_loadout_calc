const keyShortcut = basicShorthand.makeKeysArray;

const globalTagCacheKeysDMG = {};
const globalTagCacheKeysPEN = {};
const globalTagCacheKeysSHRED = {};
const globalTagCacheKeysVULN = {};

const superGlobal = {
    "generalImplants": {
        "stats": [WeaknessWind],
        // [WeaknessWind]: 1,
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
        const allyPositions = battleData.allyPositions;
        let targetOverride = null;
        for (let ally of allyPositions) {
            if (ally.isUniqueEvent) {continue;}
            const currentTurnLogic = turnLogic[ally.properName];
            const useTechnique = currentTurnLogic.useTechnique;
            const techniqueType = currentTurnLogic.techniqueType;

            // console.log(ally.properName,useTechnique,techniqueType)

            if (useTechnique && techniqueType === "Attack") {
                targetOverride = ally;
                break;
            }
        }

        return targetOverride ?? battleData.nameBasedTurns.char1;
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
}
const createQueueObject = superGlobal.createQueueObject;