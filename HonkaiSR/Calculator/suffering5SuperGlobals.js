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

            points: 0,
            pointsOffset: 0,
            //for shit like DHIL cost offset, which won't stop it from being part of the initial cost read to events,
            //but will stop SP from being drained

            energyCost: null,
            energyCostFunction: null,
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

            properName: ownerTurn.properName,
            sourceTurn: null,
            eventOverrideImage: null,//"BEicons/BattleEvent_1506_Box.png"

            target: null,
            poolKey: null,

            elationForcedPunchline: null,
        }

        Object.assign(queueObject,overrideObject);

        return queueObject;
    }
}
const createQueueObject = superGlobal.createQueueObject;