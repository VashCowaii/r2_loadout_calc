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
        return {
            "UpdateStatDamage": {
                //compositeCacheTag will define itself here when used, and the tag will be the key
            },
            "UpdateStatElation": {},
            "UpdateStatMerryMake": {},
            "UpdateStatDamageReduction": {},
            "UpdateStatDEFShred": {},
            "UpdateStatPEN": {},
            "UpdateStatVulnerable": {},
            "UpdateStatCritRate": {},
            "UpdateStatCritDamage": {},
        }
    },
    createStandardAttackObject(scalar,tags,actionTags,sourceTurn,overrideATKData,atkSlot) {
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
}