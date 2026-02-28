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
}