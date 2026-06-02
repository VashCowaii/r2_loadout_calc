function logToBattle(battleData,entry) {
    if (battleData.isLoggyLogger) {battleData.battleLog.push(entry);}
}


const enemiesDataRef = {
    "GenericBoss": {
        name: "Glorp (Boss)",
        lvl: 95,
        stats: {
            "HPBase": 3687106,//2000000,
            "ATKBase": 718,
            "SPDBase": 158,
            "Toughness": 120,
            "EffectRES": 0.30,
        },
        enemyTypeAttack: "Generic Boss",
        enemyType: "boss",
    },
    "GenericElite": {
        name: "Glorp (Elite)",
        lvl: 66,//95
        stats: {
            "HPBase": 1687106,//2000000,
            "ATKBase": 718,
            "SPDBase": 158,
            "Toughness": 160,
            "EffectRES": 0.30,
        },
        enemyTypeAttack: "Generic Boss",
        enemyType: "elite",
    },

    // "GenericMinion": {
    //     name: "Glorp (Minion)",
    //     lvl: 66,//95,
    //     stats: {
    //         "HPBase": 406770000,//80000,//2000000,
    //         "ATKBase": 718,
    //         "SPDBase": 130,
    //         "Toughness": 30,
    //         "EffectRES": 0.30,
    //     },
    //     enemyTypeAttack: "Generic Boss ST",
    //     enemyType: "minion",
    // },

    "Frigid Prowler": {
        name: "Fat guy",
        lvl: 66,//95,
        stats: {
            "HPBase": 87139*1.3,//80000,//2000000,
            "ATKBase": 397,
            "SPDBase": 110,
            "Toughness": 110,
            "EffectRES": 0.264,
        },
        enemyTypeAttack: "Generic Boss ST",
        enemyType: "minion",
    },
    "Everwinter Shadewalker": {//gunner boi
        name: "Everwinter Shadewalker",
        lvl: 66,//95,
        stats: {
            "HPBase": 10892*3,//70000,//2000000,
            "ATKBase": 397,
            "SPDBase": 110,
            "Toughness": 200,
            "EffectRES": 0.164,
        },
        enemyTypeAttack: "Generic Boss",
        enemyType: "minion",
    },


    //quantum doge
    "GenericMinion": {
        name: "Quantum Dog",
        lvl: 66,//95,
        stats: {
            "HPBase": 406770000,//80000,//2000000,
            "ATKBase": 718,
            "SPDBase": 130,
            "Toughness": 30,
            "EffectRES": 0.30,
        },
        enemyTypeAttack: "Generic Boss ST",
        enemyType: "minion",
    },
    "GenericMinion2": {//gunner boi
        name: "Gunner guy",
        lvl: 66,//95,
        stats: {
            "HPBase": 395960000,//70000,//2000000,
            "ATKBase": 718,
            "SPDBase": 91,
            "Toughness": 30,
            "EffectRES": 0.30,
        },
        enemyTypeAttack: "Generic Boss",
        enemyType: "minion",
    },


    "MOC6SwordBoi": {
        name: "Sword boi",
        lvl: 90,//66,//95,
        stats: {
            "HPBase": 26397,//80000,//2000000,
            "ATKBase": 718,
            "SPDBase": 110,
            "Toughness": 20,
            "EffectRES": 0.30,
        },
        enemyTypeAttack: "Generic Boss",
        enemyType: "minion",
    },
    "MOC6Fish": {
        name: "Fish",
        lvl: 90,//66,//95,
        stats: {
            "HPBase": 32997,//70000,//2000000,
            "ATKBase": 718,
            "SPDBase": 132,
            "Toughness": 20,
            "EffectRES": 0.30,
        },
        enemyTypeAttack: "Generic Boss",
        enemyType: "minion",
    }
}
const sim = { 
    getNextQueuedTurn(battleData,isConditionCheck,battleSettings) {
        const nextTurnAV = battleData.nextTurnAV;
        let nextOrder = nextTurnAV.reduce((min, obj) => {
            //in the case of an extra turn like hyacine's Ica, ica takes immediate action after she does without allowing for ultimates
            //in general but also between actions, unlike an extra turn like firefly e2, where the extra turn is queued, but ults can proc between it
            // if (battleData.extraTurnPriority && (obj.hasPriority ?? 0) > (min.hasPriority ?? 0)) {return obj;}
            if (obj.isExtraTurn && obj.actionCounter > (min.actionCounter ?? 0)) {return obj;}

            if (obj.AV < min.AV) {return obj;}//look for lowest action value first
            if (obj.AV === min.AV && obj.actionCounter > min.actionCounter) {return obj;}//then if multiple people at 0AV, look at the placement order for who was placed at 0 most recently
            // if (obj.AV === min.AV && obj.actionCounter === min.actionCounter && obj.SPD > min.SPD) {return obj;}//but if MULTIPLE people were moved to 0AV at the same time, then sort by spd instead, jesus this game
            return min;
        });

        if (battleData.readyForNewWave) {

            const waveID = battleData.wavesCompleted + 1;
            const AVToRevertTo = battleData.currentCycle === 0 ? 150 : 100;
            if (battleData.isLoggyLogger) {
                logToBattle(battleData,{logType: "WaveStart",AV:battleData.sumAV,waveID: waveID});

                logToBattle(battleData,{logType: "GenericAction", source:"Wave Cycle Reset", bodyText: `This cycle's remaining AV was reset from: ${+battleData.cycleAV.toFixed(7)}<br>To: ${+AVToRevertTo.toFixed(7)}<br>`});

                logToBattle(battleData,{logType: "CycleAVReset",AV:battleData.sumAV,waveID: waveID,currentCycle: battleData.currentCycle});
                logToBattle(battleData,{logType: "TurnOrderReset",AV:battleData.sumAV,waveID: waveID,currentCycle: battleData.currentCycle});
            }
            poke("WaveStart",battleData,{currentWave: waveID},null,null);
            battleData.readyForNewWave = false;

            for (let battleEntity of nextTurnAV) {
                if (battleEntity.blockWaveAVReset) {continue;}
                logToBattle(battleData,{logType: "GenericAction", source:"Wave Cycle Reset", bodyText: `${battleEntity.properName} remaining AV was reset from: ${+battleEntity.AV.toFixed(7)}<br>To: ${+battleEntity.AVBase.toFixed(7)}<br>`});
                battleEntity.AV = battleEntity.AVBase;//reset everyone's AV to base(or whatever their current base is)
                // AV:SPDStats.SPDActionValue,
                // AVBase:SPDStats.SPDActionValue,
            }

            const enemiesToMake = battleSettings["waveArray" + waveID];

            if (!enemiesToMake.length) {//if users added a new wave, but didn't populate it yet, then end the battle
                battleData.battleIsOver = true;
                return null;
            }

            battleData.cycleAV = AVToRevertTo;

            sim.createEnemyTargets(battleData,enemiesToMake);
            poke("WaveStartFinished",battleData,null,null);
            sim.clearUltimateQueue(battleData)

            const nextWaveTurn = battleData.battleIsOver ? null : sim.getNextQueuedTurn(battleData,false,battleSettings);
            // console.log(nextWaveTurn.properName)
            return nextWaveTurn
        }
        else if (nextOrder.AV >= battleData.cycleAV && !isConditionCheck) {
            //if the next action would take place AFTER the next cycle starts, then reach the cycle instead before proceeding to the next turn
            // console.log(`CYCLE --${battleData.currentCycle}-- END`);
            battleData.currentCycle += 1;
            // console.log(`CYCLE --${battleData.currentCycle}-- START`);

            for (let AVentry of nextTurnAV) {
                AVentry.AV = Math.max(0,AVentry.AV-battleData.cycleAV);//prevent negative action value
            }
            battleData.sumAV += battleData.cycleAV;
            battleData.cycleAV = 100;
            battleData.cycleAVPassed = 0;
            if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "EndCycle", cycle: battleData.currentCycle-1, AV: battleData.sumAV})}
            

            return null;
        }
        return nextOrder;
    },
    getNextQueuedAllyTurn(battleData,isConditionCheck) {
        const nextTurnAV = battleData.nextTurnAV;
        let nextOrder = nextTurnAV.reduce((min, obj) => {
            //in the case of an extra turn like hyacine's Ica, ica takes immediate action after she does without allowing for ultimates
            //in general but also between actions, unlike an extra turn like firefly e2, where the extra turn is queued, but ults can proc between it
            // if (battleData.extraTurnPriority && (obj.hasPriority ?? 0) > (min.hasPriority ?? 0)) {return obj;}
            const objIsEvent = obj.isUniqueEvent && !obj.isMemosprite && !obj.isSummon;
            const objIsEventOrEnemy = objIsEvent || obj.isEnemy;
            if (!objIsEventOrEnemy && obj.isExtraTurn && obj.actionCounter > (min.actionCounter ?? 0)) {return obj;}

            if (!objIsEventOrEnemy && obj.AV < min.AV) {return obj;}//look for lowest action value first
            if (!objIsEventOrEnemy && obj.AV === min.AV && obj.actionCounter > min.actionCounter) {return obj;}//then if multiple people at 0AV, look at the placement order for who was placed at 0 most recently
            // if (!objIsEventOrEnemy && obj.AV === min.AV && obj.actionCounter === min.actionCounter && obj.SPD > min.SPD) {return obj;}//but if MULTIPLE people were moved to 0AV at the same time, then sort by spd instead, jesus this game
            return min;
        });

        // if (nextOrder.AV >= battleData.cycleAV && !isConditionCheck) {
        //     //if the next action would take place AFTER the next cycle starts, then reach the cycle instead before proceeding to the next turn
        //     // console.log(`CYCLE --${battleData.currentCycle}-- END`);
        //     battleData.currentCycle += 1;
        //     // console.log(`CYCLE --${battleData.currentCycle}-- START`);

        //     for (let AVentry of nextTurnAV) {
        //         AVentry.AV = Math.max(0,AVentry.AV-battleData.cycleAV);//prevent negative action value
        //     }
        //     battleData.sumAV += battleData.cycleAV;
        //     battleData.cycleAV = 100;
        //     if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "EndCycle", cycle: battleData.currentCycle-1, AV: battleData.sumAV})}
            

        //     return null;
        // }
        return nextOrder;
    },
    getNextQueuedAllyTurnBuffableOnly(battleData,isConditionCheck) {
        const nextTurnAV = battleData.nextTurnAV;
        let nextOrder = nextTurnAV.reduce((min, obj) => {
            //in the case of an extra turn like hyacine's Ica, ica takes immediate action after she does without allowing for ultimates
            //in general but also between actions, unlike an extra turn like firefly e2, where the extra turn is queued, but ults can proc between it
            // if (battleData.extraTurnPriority && (obj.hasPriority ?? 0) > (min.hasPriority ?? 0)) {return obj;}
            const objIsSummon = obj.isUniqueEvent && !obj.isMemosprite;
            const isEnemyOrSummon = objIsSummon || obj.isEnemy;
            if (!isEnemyOrSummon && obj.isExtraTurn && obj.actionCounter > (min.actionCounter ?? 0)) {return obj;}

            if (!isEnemyOrSummon && obj.AV < min.AV) {return obj;}//look for lowest action value first
            if (!isEnemyOrSummon && obj.AV === min.AV && obj.actionCounter > min.actionCounter) {return obj;}//then if multiple people at 0AV, look at the placement order for who was placed at 0 most recently
            // if (!isEnemyOrSummon && obj.AV === min.AV && obj.actionCounter === min.actionCounter && obj.SPD > min.SPD) {return obj;}//but if MULTIPLE people were moved to 0AV at the same time, then sort by spd instead, jesus this game
            return min;
        });

        // if (nextOrder.AV >= battleData.cycleAV && !isConditionCheck) {
        //     //if the next action would take place AFTER the next cycle starts, then reach the cycle instead before proceeding to the next turn
        //     // console.log(`CYCLE --${battleData.currentCycle}-- END`);
        //     battleData.currentCycle += 1;
        //     // console.log(`CYCLE --${battleData.currentCycle}-- START`);

        //     for (let AVentry of nextTurnAV) {
        //         AVentry.AV = Math.max(0,AVentry.AV-battleData.cycleAV);//prevent negative action value
        //     }
        //     battleData.sumAV += battleData.cycleAV;
        //     battleData.cycleAV = 100;
        //     if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "EndCycle", cycle: battleData.currentCycle-1, AV: battleData.sumAV})}
            

        //     return null;
        // }
        return nextOrder;
    },
    // getNextQueuedTurn(battleData,isConditionCheck,battleSettings) {
    //     const nextTurnAV = battleData.nextTurnAV;
    //     const nextAVLength = nextTurnAV.length;

    //     let nextOrder = nextTurnAV[0];
    //     // let nextOrder = nextTurnAV.reduce((min, obj) => {
    //     //     //in the case of an extra turn like hyacine's Ica, ica takes immediate action after she does without allowing for ultimates
    //     //     //in general but also between actions, unlike an extra turn like firefly e2, where the extra turn is queued, but ults can proc between it
    //     //     // if (battleData.extraTurnPriority && (obj.hasPriority ?? 0) > (min.hasPriority ?? 0)) {return obj;}
    //     //     if (obj.isExtraTurn && obj.actionCounter > (min.actionCounter ?? 0)) {return obj;}

    //     //     if (obj.AV < min.AV) {return obj;}//look for lowest action value first
    //     //     if (obj.AV === min.AV && obj.actionCounter > min.actionCounter) {return obj;}//then if multiple people at 0AV, look at the placement order for who was placed at 0 most recently
    //     //     if (obj.AV === min.AV && obj.actionCounter === min.actionCounter && obj.SPD > min.SPD) {return obj;}//but if MULTIPLE people were moved to 0AV at the same time, then sort by spd instead, jesus this game
    //     //     return min;
    //     // });

    //     for (let i=1;i<nextAVLength;i++) {
    //         const currentTurn = nextTurnAV[i];

    //         const currentCounter = currentTurn.actionCounter;
    //         const nextCounter = nextOrder.actionCounter ?? 0;

    //         const counterGreater = currentCounter > nextCounter;

    //         if (currentTurn.isExtraTurn && counterGreater) {
    //             nextOrder = currentTurn;
    //             continue
    //         }

    //         const currentAV = currentTurn.AV;
    //         const nextAV = nextOrder.AV;

    //         if (currentAV < nextAV) {
    //             nextOrder = currentTurn;
    //             continue
    //         }//look for lowest action value first

    //         const AVEqual = currentAV === nextAV;
    //         if (AVEqual && counterGreater) {
    //             nextOrder = currentTurn;
    //             continue;
    //         }//then if multiple people at 0AV, look at the placement order for who was placed at 0 most recently
    //         if (AVEqual && currentCounter === nextCounter && currentTurn.SPD > nextOrder.SPD) {
    //             nextOrder = currentTurn;
    //             continue;
    //         }//but if MULTIPLE people were moved to 0AV at the same time, then sort by spd instead, jesus this game
    //     }


    //     if (battleData.readyForNewWave) {

    //         const waveID = battleData.wavesCompleted + 1;
    //         const AVToRevertTo = battleData.currentCycle === 0 ? 150 : 100;
    //         if (battleData.isLoggyLogger) {
    //             logToBattle(battleData,{logType: "WaveStart",AV:battleData.sumAV,waveID: waveID});

    //             logToBattle(battleData,{logType: "GenericAction", source:"Wave Cycle Reset", bodyText: `This cycle's remaining AV was reset from: ${+battleData.cycleAV.toFixed(7)}<br>To: ${+AVToRevertTo.toFixed(7)}<br>`});

    //             logToBattle(battleData,{logType: "CycleAVReset",AV:battleData.sumAV,waveID: waveID,currentCycle: battleData.currentCycle});
    //             logToBattle(battleData,{logType: "TurnOrderReset",AV:battleData.sumAV,waveID: waveID,currentCycle: battleData.currentCycle});
    //         }
    //         poke("WaveStart",battleData,null,null);
    //         battleData.readyForNewWave = false;

    //         for (let battleEntity of nextTurnAV) {
    //             if (battleEntity.blockWaveAVReset) {continue;}
    //             logToBattle(battleData,{logType: "GenericAction", source:"Wave Cycle Reset", bodyText: `${battleEntity.properName} remaining AV was reset from: ${+battleEntity.AV.toFixed(7)}<br>To: ${+battleEntity.AVBase.toFixed(7)}<br>`});
    //             battleEntity.AV = battleEntity.AVBase;//reset everyone's AV to base(or whatever their current base is)
    //             // AV:SPDStats.SPDActionValue,
    //             // AVBase:SPDStats.SPDActionValue,
    //         }

    //         const enemiesToMake = battleSettings["waveArray" + waveID];

    //         if (!enemiesToMake.length) {//if users added a new wave, but didn't populate it yet, then end the battle
    //             battleData.battleIsOver = true;
    //             return null;
    //         }

    //         battleData.cycleAV = AVToRevertTo;

    //         sim.createEnemyTargets(battleData,enemiesToMake);
    //         poke("WaveStartFinished",battleData,null,null);
    //         sim.clearUltimateQueue(battleData)

    //         const nextWaveTurn = battleData.battleIsOver ? null : sim.getNextQueuedTurn(battleData,false,battleSettings);
    //         // console.log(nextWaveTurn.properName)
    //         return nextWaveTurn
    //     }
    //     else if (nextOrder.AV >= battleData.cycleAV && !isConditionCheck) {
    //         //if the next action would take place AFTER the next cycle starts, then reach the cycle instead before proceeding to the next turn
    //         // console.log(`CYCLE --${battleData.currentCycle}-- END`);
    //         battleData.currentCycle += 1;
    //         // console.log(`CYCLE --${battleData.currentCycle}-- START`);

    //         for (let AVentry of nextTurnAV) {
    //             AVentry.AV = Math.max(0,AVentry.AV-battleData.cycleAV);//prevent negative action value
    //         }
    //         battleData.sumAV += battleData.cycleAV;
    //         battleData.cycleAV = 100;
    //         battleData.cycleAVPassed = 0;
    //         if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "EndCycle", cycle: battleData.currentCycle-1, AV: battleData.sumAV})}
            

    //         return null;
    //     }
    //     return nextOrder;
    // },
    // getNextQueuedAllyTurn(battleData,isConditionCheck) {
    //     const nextTurnAV = battleData.nextTurnAV;
    //     const nextAVLength = nextTurnAV.length;
    //     // let nextOrder = nextTurnAV.reduce((min, obj) => {
    //     //     //in the case of an extra turn like hyacine's Ica, ica takes immediate action after she does without allowing for ultimates
    //     //     //in general but also between actions, unlike an extra turn like firefly e2, where the extra turn is queued, but ults can proc between it
    //     //     // if (battleData.extraTurnPriority && (obj.hasPriority ?? 0) > (min.hasPriority ?? 0)) {return obj;}
    //     //     const objIsEvent = obj.isUniqueEvent && !obj.isMemosprite && !obj.isSummon;
    //     //     const objIsEventOrEnemy = objIsEvent || obj.isEnemy;
    //     //     if (!objIsEventOrEnemy && obj.isExtraTurn && obj.actionCounter > (min.actionCounter ?? 0)) {return obj;}

    //     //     if (!objIsEventOrEnemy && obj.AV < min.AV) {return obj;}//look for lowest action value first
    //     //     if (!objIsEventOrEnemy && obj.AV === min.AV && obj.actionCounter > min.actionCounter) {return obj;}//then if multiple people at 0AV, look at the placement order for who was placed at 0 most recently
    //     //     if (!objIsEventOrEnemy && obj.AV === min.AV && obj.actionCounter === min.actionCounter && obj.SPD > min.SPD) {return obj;}//but if MULTIPLE people were moved to 0AV at the same time, then sort by spd instead, jesus this game
    //     //     return min;
    //     // });

    //     let nextOrder = nextTurnAV[0];
    //     // let nextOrder = nextTurnAV.reduce((min, obj) => {
    //     //     //in the case of an extra turn like hyacine's Ica, ica takes immediate action after she does without allowing for ultimates
    //     //     //in general but also between actions, unlike an extra turn like firefly e2, where the extra turn is queued, but ults can proc between it
    //     //     // if (battleData.extraTurnPriority && (obj.hasPriority ?? 0) > (min.hasPriority ?? 0)) {return obj;}
    //     //     if (obj.isExtraTurn && obj.actionCounter > (min.actionCounter ?? 0)) {return obj;}

    //     //     if (obj.AV < min.AV) {return obj;}//look for lowest action value first
    //     //     if (obj.AV === min.AV && obj.actionCounter > min.actionCounter) {return obj;}//then if multiple people at 0AV, look at the placement order for who was placed at 0 most recently
    //     //     if (obj.AV === min.AV && obj.actionCounter === min.actionCounter && obj.SPD > min.SPD) {return obj;}//but if MULTIPLE people were moved to 0AV at the same time, then sort by spd instead, jesus this game
    //     //     return min;
    //     // });

    //     for (let i=1;i<nextAVLength;i++) {
    //         const currentTurn = nextTurnAV[i];

    //         const objIsEvent = currentTurn.isUniqueEvent && !currentTurn.isMemosprite && !currentTurn.isSummon;
    //         const objIsEventOrEnemy = objIsEvent || currentTurn.isEnemy;
    //         if (objIsEventOrEnemy) {continue;}

    //         const currentCounter = currentTurn.actionCounter;
    //         const nextCounter = nextOrder.actionCounter ?? 0;

    //         const counterGreater = currentCounter > nextCounter;

    //         if (currentTurn.isExtraTurn && counterGreater) {
    //             nextOrder = currentTurn;
    //             continue
    //         }

    //         const currentAV = currentTurn.AV;
    //         const nextAV = nextOrder.AV;

    //         if (currentAV < nextAV) {
    //             nextOrder = currentTurn;
    //             continue
    //         }//look for lowest action value first

    //         const AVEqual = currentAV === nextAV;
    //         if (AVEqual && counterGreater) {
    //             nextOrder = currentTurn;
    //             continue;
    //         }//then if multiple people at 0AV, look at the placement order for who was placed at 0 most recently
    //         if (AVEqual && currentCounter === nextCounter && currentTurn.SPD > nextOrder.SPD) {
    //             nextOrder = currentTurn;
    //             continue;
    //         }//but if MULTIPLE people were moved to 0AV at the same time, then sort by spd instead, jesus this game
    //     }

    //     return nextOrder;
    // },
    // getNextQueuedAllyTurnBuffableOnly(battleData,isConditionCheck) {
    //     const nextTurnAV = battleData.nextTurnAV;
    //     const nextAVLength = nextTurnAV.length;
    //     // let nextOrder = nextTurnAV.reduce((min, obj) => {
    //     //     //in the case of an extra turn like hyacine's Ica, ica takes immediate action after she does without allowing for ultimates
    //     //     //in general but also between actions, unlike an extra turn like firefly e2, where the extra turn is queued, but ults can proc between it
    //     //     // if (battleData.extraTurnPriority && (obj.hasPriority ?? 0) > (min.hasPriority ?? 0)) {return obj;}
    //     //     const objIsSummon = obj.isUniqueEvent && !obj.isMemosprite;
    //     //     const isEnemyOrSummon = objIsSummon || obj.isEnemy;
    //     //     if (!isEnemyOrSummon && obj.isExtraTurn && obj.actionCounter > (min.actionCounter ?? 0)) {return obj;}

    //     //     if (!isEnemyOrSummon && obj.AV < min.AV) {return obj;}//look for lowest action value first
    //     //     if (!isEnemyOrSummon && obj.AV === min.AV && obj.actionCounter > min.actionCounter) {return obj;}//then if multiple people at 0AV, look at the placement order for who was placed at 0 most recently
    //     //     if (!isEnemyOrSummon && obj.AV === min.AV && obj.actionCounter === min.actionCounter && obj.SPD > min.SPD) {return obj;}//but if MULTIPLE people were moved to 0AV at the same time, then sort by spd instead, jesus this game
    //     //     return min;
    //     // });

    //     let nextOrder = nextTurnAV[0];
    //     // let nextOrder = nextTurnAV.reduce((min, obj) => {
    //     //     //in the case of an extra turn like hyacine's Ica, ica takes immediate action after she does without allowing for ultimates
    //     //     //in general but also between actions, unlike an extra turn like firefly e2, where the extra turn is queued, but ults can proc between it
    //     //     // if (battleData.extraTurnPriority && (obj.hasPriority ?? 0) > (min.hasPriority ?? 0)) {return obj;}
    //     //     if (obj.isExtraTurn && obj.actionCounter > (min.actionCounter ?? 0)) {return obj;}

    //     //     if (obj.AV < min.AV) {return obj;}//look for lowest action value first
    //     //     if (obj.AV === min.AV && obj.actionCounter > min.actionCounter) {return obj;}//then if multiple people at 0AV, look at the placement order for who was placed at 0 most recently
    //     //     if (obj.AV === min.AV && obj.actionCounter === min.actionCounter && obj.SPD > min.SPD) {return obj;}//but if MULTIPLE people were moved to 0AV at the same time, then sort by spd instead, jesus this game
    //     //     return min;
    //     // });

    //     for (let i=1;i<nextAVLength;i++) {
    //         const currentTurn = nextTurnAV[i];

    //         const objIsSummon = currentTurn.isUniqueEvent && !currentTurn.isMemosprite;
    //         const isEnemyOrSummon = objIsSummon || currentTurn.isEnemy;
    //         if (isEnemyOrSummon) {continue;}

    //         const currentCounter = currentTurn.actionCounter;
    //         const nextCounter = nextOrder.actionCounter ?? 0;

    //         const counterGreater = currentCounter > nextCounter;

    //         if (currentTurn.isExtraTurn && counterGreater) {
    //             nextOrder = currentTurn;
    //             continue
    //         }

    //         const currentAV = currentTurn.AV;
    //         const nextAV = nextOrder.AV;

    //         if (currentAV < nextAV) {
    //             nextOrder = currentTurn;
    //             continue
    //         }//look for lowest action value first

    //         const AVEqual = currentAV === nextAV;
    //         if (AVEqual && counterGreater) {
    //             nextOrder = currentTurn;
    //             continue;
    //         }//then if multiple people at 0AV, look at the placement order for who was placed at 0 most recently
    //         if (AVEqual && currentCounter === nextCounter && currentTurn.SPD > nextOrder.SPD) {
    //             nextOrder = currentTurn;
    //             continue;
    //         }//but if MULTIPLE people were moved to 0AV at the same time, then sort by spd instead, jesus this game
    //     }
    //     return nextOrder;
    // },
    pullToCurrentAV(battleData,sourceTurn) {
        battleData.sumAV += sourceTurn.AV;
        battleData.cycleAV -= sourceTurn.AV;
        battleData.cycleAVPassed += sourceTurn.AV;
        for (let AVentry of battleData.nextTurnAV) {
            if (AVentry.name != sourceTurn.name) {
                AVentry.AV = Math.max(0,AVentry.AV - sourceTurn.AV);//prevent negative action value
            }
        }
        sourceTurn.AV = sourceTurn.AVBase;
    },
    sortEnemyTargets(enemyPositions) {
        const bosses = enemyPositions.filter(e => e.enemyType === "boss");
        const elites = enemyPositions.filter(e => e.enemyType === "elite");
        const minions = enemyPositions.filter(e => e.enemyType === "minion");
      
        let result = [];
        result.push(...bosses);
      
        elites.forEach((elite, i) => {
            if (i % 2 === 0) {result.unshift(elite);}
            else {result.push(elite);}
        });
      
        minions.forEach((minion, i) => {
            if (i % 2 === 0) {result.unshift(minion);}
            else {result.push(minion);}
        });
      
        return result;
    },
    attackTypes: {
        "Single Target": "Generic Boss ST",
        "Blast": null,
        "AoE": "Generic Boss",
        "Bounce": "Generic Boss",
    },
    createEnemyTargets(battleData,enemiesToMake) {
        // enemiesToMake = Math.max(1, enemiesToMake ?? 1);//always 1 minimum required target created
        // let enemiesMade = 0;
        const summaryTurns = battleData.battleTotal.Turns;


        // {
        //     "image": null,
        //     "entry": null,
        //     "name": "Gunner Guy",
        //     "lvl": 66,
        //     "hpBars": 1,
        //     "toughnessBars": 1,
        //     "stats": {
        //         "HPBase": 395960000,
        //         "ATKBase": 718,
        //         "SPDBase": 91,
        //         "Toughness": 30,
        //         "EffectRES": 0.3
        //     },
        //     "enemyTypeAttack": "Bounce",
        //     "enemyType": "minion",
        //     "weaknessOverrides": {
        //         "Ice": true,
        //         "Physical": true,
        //         "Wind": true
        //     },
        //     "resistantTo": {}
        // },

        const attackTypes = sim.attackTypes;

        const nameIndex = battleData.nameIndex;
        const enemyTurns = battleData.enemyBasedTurns ??= [];
        const enemyPositions = battleData.enemyPositions ??= [];
        const nextTurn = battleData.nextTurnAV;
        const dotsObject = {
            "Lightning": 0,
            "Fire": 0,
            "Wind": 0,
            "Physical": 0
        }

        const enemyRankID = {
            "boss": 3,
            "elite": 2,
            "minion": 1,
        }



        for (let i=0;i<enemiesToMake.length;i++) {
            let currentEntry = enemiesToMake[i];
            battleData.enemiesCreated++;
            const enemiesMade = battleData.enemiesCreated;

            // let ref = enemiesDataRef[currentEntry.entry];
            const enemyType = currentEntry.enemyType;
            let name = "Enemy " + enemiesMade + " " + currentEntry.name + " (" + enemyType + ")";
            let enemyRealName = currentEntry.name;
            let slot = "enemy" + enemiesMade;
            let stats = [...currentEntry.stats];

            const statsLength = stats.length;
            if (statsLength != greatTableSize) {
                const sizeDiff = greatTableSize - statsLength;
                for (let b=0;b<sizeDiff;b++) {
                    stats.push(0);
                }
            }

            summaryTurns[name] = 0;

            //most of the enemy stat stuff now happens within userTriggers.addEnemyToWave() to keep more work outside of the loops
            let finalStats = currentEntry.finalStats;
            // console.log(currentEntry)

            nameIndex[name] = slot;
            const slotRef = enemyTurns[slot] ??= {
                // ...baseEnemyData,
                name:slot,
                enemyNumber: enemiesMade,
                AV:finalStats.SPDActionValue,
                AVBase:finalStats.SPDActionValue,
                SPD:finalStats.SPDFinal,
                specialEnergy: null,
                maxEnergy: null,
                currentEnergy: null,
                actionCounter: 0,
                turnState: 0,
                properName: name,
                enemyRealName,
                statTable: stats,
                statTableONHIT: new Array(greatTableSize).fill(0),
                statTableONTurn: new Array(greatTableSize).fill(0),
                statTableFinals: finalStats,
                tagSpecific: {},
                tagSpecificArray: [],
                teamDebuffs: {},
                buffsObject: {},
                buffsStartTurn: [],
                buffsEndTurn: [],
                debuffCounter: 0,
                shieldCounter: 0,
                shieldValueCurrent: 0,
                shieldValueMax: 0,
                activeShields: {},
                DOTCounter: 0,
                dots: {...dotsObject},
                currentDotsArray: [],
                specialDotsArray: [],
                cacheTagValues: superGlobal.createEntityCache(),
                isEnemy: true,
                enemyTypeAttack: attackTypes[currentEntry.enemyTypeAttack],//ref.enemyTypeAttack,
                enemyType,
                enemyRank: enemyRankID[enemyType],
                currentHP: finalStats.HPFinal,
                maxHP: finalStats.HPFinal,
                currentToughness: stats[Toughness],
                maxToughness: stats[Toughness],
                isDead: false,
                isBroken: false,
                turnShouldEnd: false,
                energyGain: currentEntry.energyGain ?? 10
            };

            nextTurn.push(slotRef);
            enemyPositions.push(slotRef);

            if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "EnemyCreated", name:slot, AV: battleData.sumAV, turnRef: JSON.stringify(battleData.enemyBasedTurns[slot])});}
            poke("EnemyCreated",battleData,{slotRef},slotRef);
            battleData.enemiesRemaining += 1;
        }
        // battleData.enemyPositions = sim.sortEnemyTargets(enemyPositions);
        battleActions.assignAttackTargets(battleData);
        battleActions.assignAttackTargetsEnemy(battleData);
    },
    battlePrep(characterObject,isLoggyLogger,querySettingsOverride,battleSettings) {
        let battleData = {
            "isLoggyLogger": isLoggyLogger ?? false,
            "sumAV": 0,
            "cycleAV": 150,
            "cycleAVPassed": 0,
            "currentCycle": 0,
            "cyclesMax": 1,//+1 bc 0 counts as a cycle in this loop
            "nextTurnAV": [],
            "menuStats": {},
            "skillPointCurrent": 3,//starting points
            "nameBasedTurns": {},
            "fullCharacterArray": [],
            "allAlliesArray": [],
            "allAllyTargetsArray": [],
            "eventBasedTurns": {},
            "allyPositions": [],//ally equivalent of enemyPositions
            "actionCounter": 0,
            totalUltsQueued: 0,
            totalExTurnsQueued: 0,
            elationSkillsDone: 0,
            "battleListeners": {},
            "battleListenersPersonal": {},
            "followUpQueue": [],
            "ultimateQueue": [],
            "followUpQueueWAVE": [],
            "ultimateQueueWAVE": [],
            characterObject,
            char1: characterObject.char1.conditions,
            char2: characterObject.char2?.conditions,
            char3: characterObject.char3?.conditions,
            char4: characterObject.char4?.conditions,
            "nameIndex": {},
            battleTable: {...battleTableKnowerOfAll},//overarching battle stats like skill point max
            battleTotal: {
                DMG: {},
                DMGOverkill: {},
                Turns: {},
                Actions: {},
                SP: {},
                Healing: {},
                OverHeal: {},
                ShieldAmount: {},
                Shields: {},
                Overshield: {}
            },
            // territoryObject: {buffsObject:{}},
            battleDamageSUM: 0,
            battleHealingSUM: 0,
            readyForNewWave: false,
            battleLog: [],
            declaredMemosprites: [],
            declaredSummons: [],
            familyRef: {},//used to cache buff family names for their stats
            familyCacheRef: {},//similar to above, but for caching-specific purposes on pull-type functions in damage instances
            enemiesRemaining: 0,
            enemiesCreated: 0,
            charactersRemaining: 0,
            backupHPOnField: 0,
            backupHPObject: {},
            battleIsOver: false,
            battleFailed: false,
            attackTechniqueUsed: false,
            attackIsActive: false,
            addedDMGTallyAttack: 0,
            techniquesAllowed: true,
            // extraTurnPriority: 0,
            battleLogicTemp: {},
            teamSPD: 0,
            punchline: 0,
            punchlineForced: 0,
            bangersDone: 0,
            punchlineConsume: true,
        };
        if (isLoggyLogger) {logToBattle(battleData,{logType: "BattlePrep"});}
        const summaryTurns = battleData.battleTotal.Turns;
        
        let lightconeOwners = {};
        let relicSetOwners2pc = {};
        let relicSetOwners4pc = {};
        let slotNumber = 1;
        // for (let characterEntry in characterObject) {
        const charKeys = Object.keys(characterObject);
        const getSPD = calcs.getSPDFinal;
        const getHP = calcs.getHPFinal;
        const getAggro = calcs.getAggroFinal;
        let elationCharactersThisFight = 0;


        // battleSettings.useTechniquesChar1

        const nameIndex = battleData.nameIndex;
        const characterObjectInner = battleData.characterObject;
        const namedTurns = battleData.nameBasedTurns;
        const menuStatsInner = battleData.menuStats;
        const nextTurn = battleData.nextTurnAV;
        const allyPositions = battleData.allyPositions;
        const battleListeners = battleData.battleListeners;
        const fullCharacterArray = battleData.fullCharacterArray;
        const allAlliesArray = battleData.allAlliesArray;
        const allAllyTargetsArray = battleData.allAllyTargetsArray;

        const techSlotArray = ["useTechniquesChar1","useTechniquesChar2","useTechniquesChar3","useTechniquesChar4"]

        for (let i=charKeys.length-1;i>=0;i--) {
            const characterEntry = charKeys[i];
            let currentCharacter = characterObject[characterEntry];
            if (!currentCharacter) {continue;}
            let properName = currentCharacter.name;

            const logicRef = turnLogic[properName];
            logicRef.useTechnique = battleSettings[techSlotArray[i]]
            if (logicRef?.characterValuesBattle) {
                logicRef.characterValuesBattle = {...logicRef.characterValues}//needed to avoid overlap between diff battles
            }

            //we're saving the menu/out of combat stats for every character cause ain't no fuckin way we're calling base stats
            //EVERY time lmao, we can just use a spread of the menu stats every time as a baseline, should also help processing speed that way later if my R2 calc has anything to say about it
            let statRefTemp = updateFormulas(characterEntry,null,characterObject,querySettingsOverride);
            const menuStats = statRefTemp.tableReference;
            menuStatsInner[characterEntry] = menuStats;
            //technically this is also needed for the sake of shit like Poet's 4pc spd check, but that's just a bonus of doing it this way(surely I thought that far ahead, trust)
            // nextTurnAV[characterEntry] = calcs.getSPDFinal(menuStats[characterEntry]);
            let SPDStats = getSPD(menuStats);
            const finalSPD = SPDStats.SPDFinal;
            battleData.teamSPD += finalSPD;
            let HPStats = getHP(menuStats);
            let AggroStats = getAggro(menuStats);

            



            let charEntryTemp = characters[characterObject[characterEntry].name];
            // let specialEnergy = charEntryTemp.energyMax<30;//TODO: use the actual sp override entries later to determine this instead, found that too late and forgot about it again and again
            nameIndex[properName] = characterEntry;

            let rank = characterObjectInner[characterEntry].rank;
            // const actionEntry = 

            namedTurns[characterEntry] = {
                name:characterEntry,
                AV:SPDStats.SPDActionValue,
                AVBase:SPDStats.SPDActionValue,
                SPD:finalSPD,
                initialSPD: finalSPD,
                currentHP: HPStats.HPFinal,
                maxHP: HPStats.HPFinal,
                currentAggro: AggroStats.AggroFinal,
                baseAggro: AggroStats.AggroBaseFinal,
                specialEnergy: false,
                specialEnergyCurrent: null,
                specialEnergyMax: null,
                maxEnergy: charEntryTemp.energyMax ?? 0,//TODO: account for special energy stacks like acheron bullshit later
                currentEnergy: 0,
                actionCounter: 0,
                ultsUsed: 0,
                turnState: false,
                actionAssigned: false,
                turnShouldEnd: false,
                debuffCounter: 0,
                shieldCounter: 0,
                shieldValueCurrent: 0,
                shieldValueMax: 0,
                activeShields: {},
                activeFinalMultipliers: {},
                finalMultiCounter: 0,
                DOTCounter: 0,
                dots: {
                    "Lightning": 0,
                    "Fire": 0,
                    "Wind": 0,
                    "Physical": 0
                },
                currentDotsArray: [],
                properName: properName,
                statTable: statRefTemp.tableReference,
                statTableONHIT: new Array(greatTableSize).fill(0),
                statTableONTurn: new Array(greatTableSize).fill(0),
                // statTableFinals: statRefTemp.returnObject,
                buffsObject: {},
                teamDebuffs: {},
                buffsStartTurn: [],
                buffsEndTurn: [],
                additionalDMGObject: {},
                tagSpecific: {},
                // tagSpecificArray: [],
                cacheTagValues: superGlobal.createEntityCache(),
                isDead: false,
                canBeTargeted: true,
                slotNumber,
                rank: rank,
                element: charEntryTemp.element,
                path: charEntryTemp.path,
                ultyQueued: false,
                activeSummons: 0,
                activeMemosprites: 0,
                actionCounter: 0,
                certifiedBanger: 0,
                notPresentInActionOrder: false,
                battleValues: logicRef?.characterValuesBattle,
            };
            battleData.charactersRemaining += 1;
            summaryTurns[properName] = 0;
            let slotRef = namedTurns[characterEntry];
            if (slotRef.path === "Elation") {
                elationCharactersThisFight++;
            }
            
            slotRef.statTable[LVL] = 80;

            const ATKObjects = logicRef?.ATKObjects;
            if (ATKObjects && !ATKObjects.skillPathingDefined) {
                let skillPathing = characters[properName].skills;
                for (let skillKey in skillPathing) {
                    ATKObjects[skillKey] ??= skillPathing[skillKey];
                }
                ATKObjects.skillPathingDefined = true;
            }
            // let skillRef = skillPathing.Technique["Banner of Command"].variant1;



            slotNumber++;
            slotRef.statTableONHIT[LVL] = 0;
            nextTurn.push(slotRef);
            allyPositions.unshift(slotRef);
            fullCharacterArray.push(slotRef);
            allAlliesArray.push(slotRef);
            allAllyTargetsArray.push(slotRef);
            //we need AV to be able to be sortable via an array, but also called and modified via an object, hence what will look like duplication here
            //but it's not dupin, it's object referencing, even in the array, just remember that. Editing one edits both.
            //probably the first time I've ever been truly grateful for this functionality in JS, jesus christ

            // const listenerRef = battleData.battleListeners;//reg character listeners + eidolons
            const charListeners = logicRef?.listeners;
            if (charListeners && charListeners.length) {
                for (let eachListener of charListeners) {
                    //say we have an AttackEnd trigger but we haven't found any so far in the characters/gear/lightcones etc, then we make it listed under that key for faster access later.
                    const triggerName = eachListener.trigger;

                    eachListener.ownerTurn = slotRef;
                    addListenerPREPPriority(battleData,eachListener,triggerName,slotRef)

                    // const triggerArray = battleListeners[triggerName] ??= [];
                    // eachListener.ownerTurn = slotRef;
                    // triggerArray.push(eachListener);
                }
            }


            let lcName = currentCharacter.lcName;
            let lcRank = currentCharacter.lcRank;
            let lcPath = lightcones[lcName].path;
            let charPath = characters[properName].path;
            

            const slot = characterEntry;
            if (lcPath === charPath) {
                // if (!lightconeOwners[lcName]) {lightconeOwners[lcName] = [];}
                (lightconeOwners[lcName] ??= []).push({slot, rank:lcRank});
            }

            let planar = currentCharacter.planar;
            let pc2 = currentCharacter['2pc'];
            let pc4 = currentCharacter['4pc'];
            

            // if (!relicSetOwners2pc[planar]) {relicSetOwners2pc[planar] = [];}
            const push2pc = {slot,setAmount:"2pc"};
            const push4pc = {slot,setAmount:"4pc"};
            (relicSetOwners2pc[planar] ??= []).push(push2pc)

            const current2pc = relicSetOwners2pc[pc2] ??= [];
            // if (!relicSetOwners2pc[pc2]) {relicSetOwners2pc[pc2] = [];}
            if (pc2 === pc4) {
                // if (!relicSetOwners4pc[pc2]) {relicSetOwners4pc[pc2] = [];}
                const current4pc = relicSetOwners4pc[pc2] ??= [];
                //basically, we're keeping the owner arrays separate for 2pc and 4pc, makes life a little easier for after this
                current2pc.push(push2pc)
                current4pc.push(push4pc)
            }
            else {
                // if (!relicSetOwners2pc[pc4]) {relicSetOwners2pc[pc4] = [];}
                const extra2pc = relicSetOwners2pc[pc4] ??= [];
                current2pc.push(push2pc);
                extra2pc.push(push2pc);
            }

            // if (!logicRef.preLogicCompleted) {
            logicRef.preLogic(slotRef,battleData);
                // logicRef.preLogicCompleted = true;
            // }
        }


        // if (elationCharactersThisFight || true) {//dumb to use true, but was using it to force aha to spawn with no elation units
        if (elationCharactersThisFight) {
            // let ownerArray = lightconeOwners[lightconeSet];
            const logicRef = turnLogic["Aha Instant"];
            battleData.isElationTypeBattle = true;

            if (logicRef?.listeners && logicRef.listeners.length) {
                for (let eachListener of logicRef.listeners) {
                    // eachListener.owners = ownerArray;
                    // eachListener.completedCounter = 0;
                    // eachListener.ownerTurn = slotRef;

                    const triggerName = eachListener.trigger;
                    // eachListener.ownerTurn = slotRef;
                    addListenerPREPPriority(battleData,eachListener,triggerName)

                    //say we have an AttackEnd trigger but we haven't found any so far in the characters/gear/lightcones etc, then we make it listed under that key for faster access later.
                    // const currentListenerArray = battleListeners[eachListener.trigger] ??= [];

                    // currentListenerArray.push(eachListener);
                }
            }
        }


        for (let lightconeSet in lightconeOwners) {
            let ownerArray = lightconeOwners[lightconeSet];
            let logicRef = turnLogicLightcones[lightconeSet];

            if (logicRef?.listeners && logicRef.listeners.length) {
                for (let eachListener of logicRef.listeners) {
                    eachListener.owners = ownerArray;
                    eachListener.completedCounter = 0;

                    const currentSlots = eachListener.ownersSlots = {};

                    for (let ownerEntry of ownerArray) {
                        currentSlots[ownerEntry.slot] = ownerEntry.rank;
                    }

                    const triggerName = eachListener.trigger
                    // eachListener.ownerTurn = slotRef;
                    addListenerPREPPriority(battleData,eachListener,triggerName)

                    // //say we have an AttackEnd trigger but we haven't found any so far in the characters/gear/lightcones etc, then we make it listed under that key for faster access later.
                    // const currentListenerArray = battleListeners[eachListener.trigger] ??= [];

                    // currentListenerArray.push(eachListener);
                }
            }
        }

        for (let relicSet in relicSetOwners2pc) {//2pc set listeners
            let ownerArray = relicSetOwners2pc[relicSet];
            let logicRef = turnLogicRelics[relicSet]?.["2pc"];
            // let logicRef4pc = turnLogicRelics[relicSet]?.["4pc"];

            //we push 2pc logic at a minimum wherever it is found
            if (logicRef?.listeners && logicRef.listeners.length) {
                for (let eachListener of logicRef.listeners) {
                    eachListener.owners = ownerArray;
                    const currentSlots = eachListener.ownersSlots = {};

                    for (let ownerEntry of ownerArray) {
                        currentSlots[ownerEntry.slot] = ownerEntry.setAmount;
                    }

                    const triggerName = eachListener.trigger
                    // eachListener.ownerTurn = slotRef;
                    addListenerPREPPriority(battleData,eachListener,triggerName)

                    // //say we have an AttackEnd trigger but we haven't found any so far in the characters/gear/lightcones etc, then we make it listed under that key for faster access later.
                    // const currentListenerArray = battleListeners[eachListener.trigger] ??= [];
                    // currentListenerArray.push(eachListener);
                }
            }
        }
        for (let relicSet in relicSetOwners4pc) {//4pc set listeners
            let ownerArray = relicSetOwners4pc[relicSet];
            let logicRef = turnLogicRelics[relicSet]?.["4pc"];
            // let logicRef4pc = turnLogicRelics[relicSet]?.["4pc"];


            if (logicRef?.listeners && logicRef.listeners.length) {
                for (let eachListener of logicRef.listeners) {
                    eachListener.owners = ownerArray;

                    const currentSlots = eachListener.ownersSlots = {};

                    for (let ownerEntry of ownerArray) {
                        currentSlots[ownerEntry.slot] = ownerEntry.setAmount;
                    }

                    const triggerName = eachListener.trigger
                    // eachListener.ownerTurn = slotRef;
                    addListenerPREPPriority(battleData,eachListener,triggerName)

                    // //say we have an AttackEnd trigger but we haven't found any so far in the characters/gear/lightcones etc, then we make it listed under that key for faster access later.
                    // const currentListenerArray = battleListeners[eachListener.trigger] ??= [];
                    // currentListenerArray.push(eachListener);
                }
            }
        }

        //UNIVERSAL TRIGGERS, shit like buff expiration based on StartTurn or EndTurn that don't need custom handling.
        const universalRef = turnLogic.Universal;
        if (universalRef?.listeners && universalRef.listeners.length) {
            for (let eachListener of universalRef.listeners) {
                // const currentListenerArray = battleListeners[eachListener.trigger] ??= [];

                // currentListenerArray.push(eachListener);

                const triggerName = eachListener.trigger
                // eachListener.ownerTurn = slotRef;
                addListenerPREPPriority(battleData,eachListener,triggerName)
            }
        }
        if (universalRef?.finalListeners && universalRef.finalListeners.length) {
            for (let eachListener of universalRef.finalListeners) {
                const currentListenerArray = battleListeners[eachListener.trigger] ??= [];

                currentListenerArray.unshift(eachListener);
            }
        }
        
        // console.log(battleListeners.BattlePrep)
        return battleData;
    },
    battleStart(characterObject,isLoggyLogger,querySettingsOverride,battleSettings) {
        let battleData = sim.battlePrep(characterObject,isLoggyLogger,querySettingsOverride,battleSettings);

        battleData.cyclesMax = battleSettings.cyclesToRun + 1;
        battleData.techniquesAllowed = battleSettings.useTechniques;
        battleData.battleStartWeaknessReduction = battleSettings.useStartToughness;

        battleData.wavesToRun = battleSettings.totalWaves;
        battleData.wavesCompleted = 0;
        
        // battleSettings.totalWaves

        // battleSettings
        const summaryTurns = battleData.battleTotal.Turns;
        const enemiesToMake = battleSettings.waveArray1;
        const startingEnergyPercent = battleSettings.cyclesStartingEnergyCustom;

        if (isLoggyLogger) {logToBattle(battleData,{logType: "PassiveCalls"});}
        poke("EntityConstruction",battleData,null,null);
        poke("PassiveCalls",battleData,null,null);

        
        
        poke("ElationInitialize",battleData,null,null);
        const updateEnergy = battleActions.updateEnergy;
        for (let targetTurn of battleData.allyPositions) {

            const specialEnergy = targetTurn.specialEnergy;
            if (!specialEnergy) {
                const amount = targetTurn.maxEnergy * startingEnergyPercent;
                updateEnergy(battleData,amount,targetTurn,true,"Set Battlestart Energy");
            }
        }
        poke("ElationFinalizePre",battleData,null,null);
        poke("BattlePrep",battleData,null,null);//this DOES need to go here before prebattle settings
        sim.createEnemyTargets(battleData,enemiesToMake);

        if (isLoggyLogger) {logToBattle(battleData,{logType: "BattleSettings"});}
        poke("PreBattleSettings",battleData,null,null);//trigger shit like skill point max benefits, if any. Things that need to take place before combat starts.
        if (isLoggyLogger) {logToBattle(battleData,{logType: "EnterCombat"});}
        for (let targetTurn of battleData.allyPositions) {
            poke("AllyCreated",battleData,{targetTurn},targetTurn);
        }
        // console.log(battleData.nameBasedTurns.char1.statTable)
        poke("PreBattleEntersCombat",battleData,null,null);//things that happen once the character creation is done and characters are inserted into the turn order, but battle hasn't technically started yet
        // console.log(battleData.nameBasedTurns.char1.statTable)

        poke("PreBattleStartTechniquesNormal",battleData,null,null);
        if (isLoggyLogger) {logToBattle(battleData,{logType: "StartBattle"});}
        poke("StartBattle",battleData,null,null);
        poke("StartBattleEnterCombat",battleData,null,null);

        logToBattle(battleData,{logType: "WaveStart",AV:battleData.sumAV,waveID: 1});
        poke("WaveStart",battleData,{currentWave: battleData.wavesCompleted + 1},null);
        if (!battleData.attackTechniqueUsed && battleData.battleStartWeaknessReduction) {
            turnLogic.Universal.skillFunctions.battleStartMatchingWeakness(battleData);
            // poke("StartBattle",battleData,{});
        }
        if (battleData.followUpQueue.length) {sim.clearFollowUpAttackQueue(battleData);}//some techniques can trigger stack-based FUA's like archer's charges, so gotta call that here
        const turnWrapper = sim.turnWrapper;
        const turnWrapperEnemy = sim.turnWrapperEnemy;
        const clearULT = sim.clearUltimateQueue;
        const getNext = sim.getNextQueuedTurn;
        const adjustAllAV = sim.pullToCurrentAV;
        const expireControl = battleActions.buffExpireController;
        const triggerTurnDots = battleActions.dotDetonateWrapper
        

        // if (targetTurn.DOTCounter) {
        //     let addedHit = battleActions.dotDetonateWrapper(battleData,sourceTurn,detonateMulti,targetTurn,"Kafka Talent Detonate");
        // }


        // const extraTurnObject = {
        //     turnRef: icaTurn,
        //     AV:0,
        //     AVBase:0,
        //     SPD:1,
        //     actionCounter: battleData.actionCounter,
        //     isExtraTurn: true,
        // }

        const maxCycles = battleData.cyclesMax;
        const nextTurnAV = battleData.nextTurnAV;
        const enemyPositions = battleData.enemyPositions;

        
        while (battleData.currentCycle < maxCycles && !battleData.battleIsOver) {
            
            clearULT(battleData);//last ditch call to proc ults that happen to be ready, just before we move on to the next turn and advance action value
            //important to have this one HERE lest it get called later when the next turn has already started. Something like aggy's action advance will be fucked otherwise

            let sourceTurn = getNext(battleData,false,battleSettings);

            const exoTurnRef = {sourceTurn};

            if (!sourceTurn || battleData.battleIsOver) {continue;}//next turn will only fail when a turn's AV is greater than a cycle's AV

            sourceTurn.turnShouldEnd = false;//to clear the shouldEnd trigger if a wave reset happens and everyone was marked as true

            const isExtraTurn = sourceTurn.isExtraTurn;
            let canLoseBuffsThisTurn = true;
            if (isExtraTurn) {
                canLoseBuffsThisTurn = !sourceTurn.extraTurnKeepsBuffs;
                const extraTurnRef = sourceTurn;//we need to save the actual ref to the extra turn object in the nextTurnAV array so we can remove it after
                sourceTurn = sourceTurn.turnRef;//but we also need to make sure the correct turn ref is assigned after this point, so we redo sourceturn;
                battleData.extraTurnIsActive = true;
                
                nextTurnAV.splice(nextTurnAV.indexOf(extraTurnRef),1);
            }
            let turnName = sourceTurn.properName;
            sourceTurn.turnState = true;
            if (!isExtraTurn) {adjustAllAV(battleData,sourceTurn);}
            
            if (isLoggyLogger) {logToBattle(battleData,{logType: "StartTurn", name:turnName, isEnemy: sourceTurn.isEnemy, position:sourceTurn.isEnemy ? enemyPositions.indexOf(sourceTurn) : null,positionCount:sourceTurn.isEnemy ? enemyPositions.length : null, isCharacter:true, AV: battleData.sumAV, turnRef: JSON.stringify(sourceTurn)});}
            // poke("StartTurn", battleData, {sourceTurn});
            
            const isMemo = sourceTurn.isMemosprite;
            if (sourceTurn.isUniqueEvent && !isMemo) {
                let isActualTurn = sourceTurn.isSummon;
                if (isActualTurn) {//things like firefly countdown or robin/aggy countdowns, don't function as actual turns, so we need to make sure they don't actually trigger turn-based events.
                    poke("StartTurn", battleData, exoTurnRef,sourceTurn);
                    summaryTurns[turnName] += 1;
                    sourceTurn.actionAssigned = true;


                    // poke("StartTurnEnd", battleData, exoTurnRef);
                }
                
                sourceTurn.uniqueEventFunction(battleData,sourceTurn);

                if (isActualTurn) {
                    poke("EndTurn", battleData, exoTurnRef,sourceTurn);
                    // clearULT(battleData);
                    sourceTurn.actionAssigned = false;
                }
                
                sourceTurn.turnState = false;
                continue;
            }
            poke("StartTurn", battleData, exoTurnRef,sourceTurn);
            
            const startTurnBuffs = sourceTurn.buffsStartTurn;
            if (canLoseBuffsThisTurn && startTurnBuffs.length) {expireControl(battleData,sourceTurn,startTurnBuffs);}
            summaryTurns[turnName] += 1;
            poke("StartTurnEnd", battleData, exoTurnRef,sourceTurn);

            clearULT(battleData);//need to be able to account for ulty cast within a turn, like gallagher won't give himself an extra turn if cast DURING his own turn, no advance can happen there.

            if (sourceTurn.isEnemy) {
                if (sourceTurn.DOTCounter) {
                    triggerTurnDots(battleData,null,null,sourceTurn,"Turn-Start DOTs");
                    poke("TurnStartDotEnd", battleData, exoTurnRef,sourceTurn);
                }
                if (!sourceTurn.isDead) {
                    let turnShouldEnd = false;
                    if (sourceTurn.currentToughness === 0) {
                        // currentToughness: finalStats.Toughness,
                        // maxToughness: finalStats.Toughness,

                        poke("RecoveringFromBreak", battleData, exoTurnRef,sourceTurn);
                        if (sourceTurn.turnShouldEnd) {
                            turnShouldEnd = true;
                            sourceTurn.turnShouldEnd = false;
                        }

                        if (!turnShouldEnd) {
                            sourceTurn.currentToughness = sourceTurn.maxToughness;//restore enemy toughness on their turn starts
                            sourceTurn.isBroken = false;
                            if (isLoggyLogger) {logToBattle(battleData,{logType: "RecoveredFromBreak", name:turnName, isEnemy: sourceTurn.isEnemy, isCharacter:true, AV: battleData.sumAV, turnRef: null});}
                            poke("RecoveredFromBreak", battleData, exoTurnRef,sourceTurn);
                        }
                    }
                    if (!turnShouldEnd) {
                        // poke("StartTurnEnd", battleData, exoTurnRef);
                        turnWrapperEnemy(turnName,sourceTurn.enemyTypeAttack,sourceTurn,battleData);
                    }
                }
            }
            else if (turnLogic[turnName] && !sourceTurn.notPresentInActionOrder && !sourceTurn.turnShouldEnd) {
                // poke("StartTurnEnd", battleData, exoTurnRef);
                turnWrapper(turnName,sourceTurn,battleData);
            }

            poke("EndTurn", battleData, exoTurnRef,sourceTurn);
            

            const endTurnBuffs = sourceTurn.buffsEndTurn;
            if (canLoseBuffsThisTurn && endTurnBuffs.length) {expireControl(battleData,sourceTurn,endTurnBuffs);}
            
            poke("EndTurnEnd", battleData, exoTurnRef,sourceTurn);
            sourceTurn.actionAssigned = false;
            sourceTurn.turnState = false;
            sourceTurn.turnShouldEnd = false
        }
        return battleData;
    },
    turnWrapper(charName,sourceTurn,battleData) {
        let turnEnded = false;

        let clearFUA = sim.clearFollowUpAttackQueue;
        let clearULT = sim.clearUltimateQueue;
        let isLog = battleData.isLoggyLogger;
        const queueRef = battleData.followUpQueue;

        const charLogic = turnLogic[charName];
        let isContinuousTurn = false;
        while (!turnEnded && !battleData.battleIsOver) {
            if (!isContinuousTurn) {clearFUA(battleData);}

            let designatedAction = charLogic.logic(sourceTurn,battleData);//gotta be .logic here to use "this" later in logic itself, and I do use it there
            const currentAction = designatedAction.action;
            const actionCall = designatedAction.actionCall;
            if (currentAction === "EndTurn") {
                if (battleData.extraTurnIsActive) {battleData.extraTurnIsActive = false;}
                break;
            }//might seem pointless here but we need a separate break from reg turn ends, for shit like archer if he runs out of skill points and can't keep casting
            let cost = designatedAction.points;

            //I really wish I didn't need to fuckin do this but with Cerydra coming up and her skill action duplication, I need to separate and designate skill functions
            //and presently this is the best way I can think of to do it. Isolate skill functions, and before they are called, poke listeners to say a skill was chosen as the next function
            //so that way cerydra can call the skill function BEFORE the character using it does it themselves. Some horse shit if I've ever seen it, but should be ok in the long-run prayge.
            poke("ActionChosen", battleData, designatedAction, sourceTurn);
            // poke("ActionChosen", battleData, {actionType: currentAction, actionCall: actionCall, sourceTurn});


            const poolKey = designatedAction.poolKey;
            const target = designatedAction.target;
            if (isLog) {

                logToBattle(battleData,{
                    logType: "ActionChosen",
                    actionType: currentAction,
                    on: Array.isArray(target) && target.length === 1 ? target[0].properName : poolKey,
                    actionCall: actionCall.name,
                    source: charName
                });

                const displayTypeStart = designatedAction.eventTypeStartLOG;
                battleActions.actionLogWrapper(battleData,designatedAction.action,designatedAction.sourceTurn.properName);
                if (displayTypeStart) {
                    // logToBattle(battleData,{logType: displayTypeStart, name:characterName, target: currentFUA.target?.properName ?? currentFUA.target, AV: battleData.sumAV, fuaName: currentFUA.actionCall.name, eventOverrideImage: currentFUA.eventOverrideImage});
                    logToBattle(battleData,{
                        logType: displayTypeStart,
                        name:designatedAction.properName,
                        target: Array.isArray(target) && target.length === 1 ? target[0].properName : poolKey,
                        isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:designatedAction.action, isEnhanced: designatedAction.isEnhanced});
                }
            }

            if (cost) {updateSkillPoints(battleData,cost,sourceTurn,false,currentAction);}//costs are applied as the action is launched
            //aight so I always thought costs were applied before the action(skill usage) and gains were applied AFTER but nope
            //just confirmed with solo archer in a calyx, if he starts with a basic attack that would put him to 4SP total, even before the attack lands he gets that crit dmg buff from guardian. Fuck me man. At least this simplifies the code.
            sourceTurn.actionAssigned = true;



            // const typeStart = designatedAction.eventTypeStart;
            // const typeEnd = designatedAction.eventTypeEnd;

            const isAbility = designatedAction.isAbility;
            if (isAbility) {poke("AbilityStart",battleData,designatedAction,sourceTurn);}
            actionCall(battleData,designatedAction.target,sourceTurn);//call the actual function now that we gave cerydra-type bullshit a chance.
            if (isAbility) {poke("AbilityEnd",battleData,designatedAction,sourceTurn);}


            const preCheckContinue = designatedAction.isContinuousTurn;
            isContinuousTurn = preCheckContinue;


            if (!preCheckContinue) {

                // if (designatedAction.endTurn || sourceTurn.turnShouldEnd) {
                //     turnEnded = true;
                //     if (battleData.extraTurnIsActive) {battleData.extraTurnIsActive = false;}
                //     if (sourceTurn.turnShouldEnd) {return;}
                // }//return turn ending for everyone else
                turnEnded = true;
                if (battleData.extraTurnIsActive) {battleData.extraTurnIsActive = false;}

                if (queueRef.length) {clearFUA(battleData);}
                clearULT(battleData);//readiness poke is inside the function on this one
                sourceTurn.actionAssigned = false;
                isContinuousTurn = false;
            }
        }
    },
    turnWrapperEnemy(charName,enemyTypeAttack,sourceTurn,battleData) {
        let turnEnded = false;
        let isLog = battleData.isLoggyLogger;

        while (!turnEnded && !battleData.battleIsOver) {
            sim.clearFollowUpAttackQueue(battleData);

            let designatedAction = turnLogic[enemyTypeAttack].logic(sourceTurn,battleData);
            if (designatedAction.action === "EndTurn") {break;}//might seem pointless here but we need a separate break from reg turn ends, for shit like archer if he runs out of skill points and can't keep casting
            // let cost = designatedAction.points;

            //not sure we need to bother designating enemy actions, but we'll leave it here for now just to be safe. Was only added for duping skills for cerydra on the ally side
            poke("ActionChosen", battleData, {actionType: designatedAction.action, actionCall: designatedAction.actionCall, sourceTurn},sourceTurn);
            if (isLog) {
                logToBattle(battleData,{logType: "ActionChosen", actionType: designatedAction.action, on: designatedAction.target, actionCall: designatedAction.actionCall.name, source: charName});
                battleActions.actionLogWrapper(battleData,designatedAction.action,designatedAction.sourceTurn.properName);

                // logToBattle(battleData,{logType: "EnemyAttackStart", actionType: designatedAction.action, on: designatedAction.target, actionCall: designatedAction.actionCall.name, source: charName});
                logToBattle(battleData,{logType: "EnemyAttackStart", name:designatedAction.properName, target:"N/A", isEnemy: true, isCharacter: false, AV: battleData.sumAV, actionSlot:designatedAction.action});
            }

            

            poke("AbilityStart",battleData,designatedAction,sourceTurn);
            designatedAction.actionCall(battleData,designatedAction.target,sourceTurn);
            poke("AbilityEnd",battleData,designatedAction,sourceTurn);

            // if (designatedAction.endTurn || sourceTurn.turnShouldEnd) {
            //     turnEnded = true;
            //     if (sourceTurn.turnShouldEnd) {return;}
            // }//return turn ending for everyone else
            turnEnded = true;
            
            if (battleData.followUpQueue.length) {sim.clearFollowUpAttackQueue(battleData);}
            sim.clearUltimateQueue(battleData);//readiness poke is inside the function on this one
            //ok but I DO want ulty readiness checks inside enemy actions for later. Rn I'm only bothering with generic enemy actions
            //but later I might actually repro enemy logic so their double-turn chained turn state might be a thing and this will be useful there
        }
    },
    pokeListenersOwnership(triggerName,battleData,generalInfo,personalOwner) {
        if (personalOwner) {
            // const triggerRef = battleData.battleListenersPersonal[personalOwner.properName] ??= {};
            // const triggerRef = battleData.battleListenersPersonal[personalOwner.properName];


            const listenerRef = battleData.battleListenersPersonal[personalOwner.properName]?.[triggerName];
            if (listenerRef) {
                for (let i = listenerRef.length-1; i>=0; i--) {
                    listenerRef[i].condition(battleData,generalInfo);//TODO: later look into passing the sourceTurn object as a 3rd param, just not rn
                }
            }
            // const listenerRef = triggerRef[triggerName] ??= [];

            // for (let i = listenerRef.length-1; i>=0; i--) {
            //     listenerRef[i].condition(battleData,generalInfo);//TODO: later look into passing the sourceTurn object as a 3rd param, just not rn
            // }
        }

        const triggerRef = battleData.battleListeners[triggerName] ??= [];
        // console.count()
        for (let i = triggerRef.length-1; i>=0; i--) {
            triggerRef[i].condition(battleData,generalInfo);
        }
    },
    pokeListeners(triggerName,battleData,generalInfo) {
        const triggerRef = battleData.battleListeners[triggerName] ??= [];
        // console.count()
        for (let i = triggerRef.length-1; i>=0; i--) {
            triggerRef[i].condition(battleData,generalInfo);
        }
    },
    pokeListenersArray (triggerNameArray,battleData,generalInfo) {
        const arrayLength = triggerNameArray.length;
        for (let ii=0;ii<arrayLength;ii++) {
            const triggerName = triggerNameArray[ii];
            const triggerRef = battleData.battleListeners[triggerName] ??= [];
            for (let i = triggerRef.length-1; i>=0; i--) {
                triggerRef[i].condition(battleData,generalInfo);
            }
        }
    },
    pokeListenersSet(triggerNameArray,battleData,generalInfo,personalOwner) {
        if (personalOwner) {
            const triggerRef = battleData.battleListenersPersonal[personalOwner.properName] ??= {};
            // const listenerRef = triggerRef[triggerName] ??= [];

            for (let triggerName of triggerNameArray) {
                const listenerRef = triggerRef[triggerName] ??= [];
                // console.log(triggerName,triggerNameArray)
                for (let i = listenerRef.length-1; i>=0; i--) {
                    listenerRef[i].condition(battleData,generalInfo);
                }
            }
        }

        for (let triggerName of triggerNameArray) {
            const triggerRef = battleData.battleListeners[triggerName] ??= [];
            // console.log(triggerName,triggerNameArray)
            for (let i = triggerRef.length-1; i>=0; i--) {
                triggerRef[i].condition(battleData,generalInfo);
            }
        }
    },
    // // if (triggerRef && triggerRef.length) {
    //     for (let triggerEntry of triggerRef) {triggerEntry.condition(battleData,generalInfo);}
    //     // }
    clearFollowUpAttackQueue(battleData) {
        let queue = battleData.followUpQueue;
        if (battleData.battleIsOver) {return;}
        if (queue.length) {
            let isLog = battleData.isLoggyLogger;
            
            while (queue.length > 0 && !battleData.battleIsOver) {

                const enemyChecker = battleData.enemyPositions.length;
                if (!enemyChecker) {
                    battleActions.waveStartQueueHandling(battleData);
                    return;
                }

                let currentFUA = queue.shift();
                let characterName = currentFUA.properName;
                let sourceTurn = currentFUA.sourceTurn;
                // let actionName = currentFUA.name;
                // let generalInfo = {sourceTurn,actionName};
                const targetTurn = currentFUA.target;

                const useAnyTrigger = currentFUA.useAnyTriggers;


                const shouldAbort = currentFUA.abortCheck?.(battleData,currentFUA,sourceTurn);
                if (shouldAbort) {
                    if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "GenericAction", source:"Inserted Ability Queue", bodyText: `Abort Check passed, canceled queued insert ${currentFUA.action} from ${characterName}`});}
                    continue;
                }

                // totalUltsQueued: 0,
                // totalExTurnsQueued: 0,


                // if (isAbility) {poke("AbilityStart",battleData,currentUltimate,sourceTurn);}
                // currentUltyFunction(battleData,target,sourceTurn);
                // if (isAbility) {poke("AbilityEnd",battleData,currentUltimate,sourceTurn);}


                const poolKey = currentFUA.poolKey;
                const target = currentFUA.target;

                if (isLog) {
                    const displayTypeStart = currentFUA.eventTypeStartLOG;
                    logToBattle(battleData,{
                        logType: displayTypeStart,
                        isInsertedAbility: true,
                        name:characterName,
                        target: Array.isArray(target) && target.length === 1 ? target[0].properName : poolKey,
                        AV: battleData.sumAV, fuaName: currentFUA.actionCall.name, eventOverrideImage: currentFUA.eventOverrideImage, isEnhanced: currentFUA.isEnhanced});
                    battleActions.actionLogWrapper(battleData,currentFUA.action,currentFUA.sourceTurn.properName);
                }

                // if (useAnyTrigger) {
                    // const typeStart = currentFUA.eventTypeStart;
                    // const typeEnd = currentFUA.eventTypeEnd;
                    
                    const isAbility = currentFUA.isAbility;
                    if (isAbility) {poke("AbilityStart",battleData,currentFUA,sourceTurn);}
                    // poke(typeStart,battleData,generalInfo);
                    
                    currentFUA.actionCall(battleData,targetTurn,sourceTurn);
                    if (isAbility) {poke("AbilityEnd",battleData,currentFUA,sourceTurn);}
                    // poke(typeEnd,battleData,generalInfo);
                // }
                // else {
                //     currentFUA.actionCall(battleData,targetTurn,sourceTurn);
                // }
            }
        }
    },
    clearUltimateQueue(battleData) {
        if (battleData.extraTurnIsActive) {
            return;
        }
        let queue = battleData.ultimateQueue;
        if (battleData.battleIsOver) {return;}

        const clearFUA = sim.clearFollowUpAttackQueue;
        const clearULT = sim.clearUltimateQueue;
        const FUAQueue = battleData.followUpQueue;
        if (FUAQueue.length) {clearFUA(battleData);}
        
        poke("UltimateReady",battleData);
        poke("UltimateReady",battleData);
        //THIS DUPLICATE POKE IS NOT AN ACCIDENT
        //In the event of a user reading a queue state on an ult, say saber only wants to put her ult in queue while sunday's ult is also in queue
        //but say saber was checked first at the same moment sunday would also be ready to ult
        //in such a case saber would check first, fail to see sunday's ult in the queue because it wasn't there yet, and not queue her ult but sunday would right after
        //so we double poke to make sure that dependencies in these cases are not fucked.

        if (!battleData.totalUltsQueued && !battleData.followUpQueue.length) {
            poke("UltimateQueueEmpty",battleData);
        }
        //NOTE: this is for shit like archer's extra turn, where it relies on the queue being empty at a given moment in order to determine if it should queue itself or not


        if (queue.length) {

            
            

            let isLog = battleData.isLoggyLogger;
            const currentAV = battleData.sumAV;

            while (queue.length > 0 && !battleData.battleIsOver) {

                if (battleData.isInExtraTurn) {
                    const preCheck = queue[0];
                    const preCheckExtraTurn = preCheck.isExtraTurn;
    
                    if (preCheckExtraTurn) {return;}
                    else if (!battleData.inExtraTurnUseUlts) {
                        poke("UltimateQueueBlockedOrDone",battleData);
                        return;
                    }
                    //if we're already in an extra turn, and the next queued ult instance is ALSO an extra turn, then abort the ult queue empty
                }
                
                const enemyChecker = battleData.enemyPositions.length;
                if (!enemyChecker) {
                    battleActions.waveStartQueueHandling(battleData);
                    return;
                }

                let currentUltimate = queue.shift();
                let characterName = currentUltimate.properName;
                let sourceTurn = currentUltimate.sourceTurn;
                // let actionName = currentUltimate.name;
                // let target = currentUltimate.target;
                const isAttack = currentUltimate.isAttack;
                const queueTag = currentUltimate.queueTag;
                // let generalInfo = {sourceTurn,target,isAttack,queueTag};
                let skipEXDisplay = currentUltimate.skipEXDisplay;
                

                const isExtraTurn = currentUltimate.isExtraTurn;

                const currentUltyFunction = currentUltimate.actionCall;
                const poolKey = currentUltimate.poolKey;
                const target = currentUltimate.target;

                const shouldAbort = currentUltimate.abortCheck?.(battleData,currentUltimate,sourceTurn);
                if (shouldAbort) {
                    if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "GenericAction", source:"Extra-Turn Queue", bodyText: `Abort Check passed, canceled queued Ex-Turn ${currentUltimate.action} from ${characterName}`});}
                    continue;
                }

                if (!isExtraTurn) {
                    // totalUltsQueued: 0,
                    // totalExTurnsQueued: 0,
                    battleData.totalUltsQueued -= 1;
                    
                    // const enemyChecker = battleData.enemyPositions.length;
                    // if (!enemyChecker) {
                    //     sourceTurn.ultyQueued = false;
                    //     logToBattle(battleData,{logType: "GenericAction", source:"Failed Ult", bodyText: `No enemies remaining, ult queue aborted for ${sourceTurn.properName}`});
                    //     continue;
                    // }

                    const energyCost = currentUltimate.energyCostFunction?.(battleData,sourceTurn,currentUltimate) ?? currentUltimate.energyCost;
                    //cost function rn is only used for argenti to determine full or half drain, but later for castorice overflow it'll get used too.

                    if (isLog) {
                        logToBattle(battleData,{
                            logType: "UltimateStart",
                            name:characterName,
                            isEnhanced: currentUltimate.isEnhanced,
                            eventOverrideImage: currentUltimate.eventOverrideImage,
                            target: Array.isArray(target) && target.length === 1 ? target[0].properName : poolKey,
                            AV: currentAV, ultName: currentUltyFunction.name});
                        battleActions.actionLogWrapper(battleData,currentUltimate.action,currentUltimate.sourceTurn.properName);
                    }
                    // alliedPoolKeys

                    const checkSpecial = currentUltimate.specialEnergyPoke;
                            // specialEnergyPoke: "SW999GainMMR",
                    if (checkSpecial) {
                        poke(checkSpecial,battleData,{pointsGained: -energyCost,sourceString:"Ultimate Cost [SPECIAL]"},sourceTurn);
                    }
                    else {
                        updateEnergy(battleData,-energyCost,sourceTurn,true,"Ultimate Cost");
                    }

                    poke("AbilityStart",battleData,currentUltimate,sourceTurn);
                    sourceTurn.ultsUsed++;
                    currentUltyFunction(battleData,sourceTurn,target);
                    poke("AbilityEnd",battleData,currentUltimate,sourceTurn);
                }
                else {
                    const allowUlts = currentUltimate.allowUlts;
                    battleData.inExtraTurnUseUlts = allowUlts;

                    if (isLog && !skipEXDisplay) {logToBattle(battleData,{logType: "ImmediateExtraTurn", name:characterName, target: typeof target === "object" ? target.name: target, AV: currentAV, ultName: currentUltyFunction.name});}
                    

                    battleData.isInExtraTurn = true;
                    poke("ExtraTurnStart",battleData,currentUltimate,sourceTurn);
                    if (battleData.inExtraTurnUseUlts) {clearULT(battleData);}
                    
                    const extraTurnHasChoice = currentUltimate.extraTurnHasChoice;

                    if (extraTurnHasChoice) {
                        currentUltyFunction(sourceTurn.properName,sourceTurn,battleData);
                        // turnWrapper(charName,sourceTurn,battleData)
                    }
                    else {
                        if (isLog) {
                            logToBattle(battleData,{logType: currentUltimate.eventTypeStartLOG, isExTurnQueue:true, name:currentUltimate.properName,
                                eventOverrideImage: currentUltimate.eventOverrideImage,
                                target: Array.isArray(target) && target.length === 1 ? target[0].properName : poolKey,
                                isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:currentUltimate.action, isEnhanced: currentUltimate.isEnhanced});
                            battleActions.actionLogWrapper(battleData,currentUltimate.action,currentUltimate.sourceTurn.properName);
                            // eventTypeStartLOG
                        }
                        const actionHasForcedPL = currentUltimate.elationForcedPunchline;
                        const isAbility = currentUltimate.isAbility;
                        if (actionHasForcedPL) {
                            battleData.punchlineForced += actionHasForcedPL;
                            battleData.punchlineConsume = false;
                        }

                        if (isAbility) {poke("AbilityStart",battleData,currentUltimate,sourceTurn);}
                        currentUltyFunction(battleData,target,sourceTurn);
                        if (isAbility) {poke("AbilityEnd",battleData,currentUltimate,sourceTurn);}

                        if (actionHasForcedPL) {
                            battleData.punchlineForced -= actionHasForcedPL;
                            battleData.punchlineConsume = true;
                        }
                    }
                    
                    battleData.totalExTurnsQueued -= 1;
                    battleData.inExtraTurnUseUlts = false;
                    battleData.isInExtraTurn = false;

                    poke("ExtraTurnEnd",battleData,currentUltimate,sourceTurn);
                    
                }

                poke("UltimateReady",battleData);
                if (FUAQueue.length) {
                    //yes, I want to check ulty readiness before AND after the followup queue gets dumped, there could be various reasons for this honestly, fuckin hate this game lmao
                    //followups also HAVE to have priority over any further actions, they will take place before another ultimate would even if the ulty was queued before the FUA was activated
                    clearFUA(battleData);
                    poke("UltimateReady",battleData);
                }

                const allQueuesEmpty = !battleData.followUpQueue.length && (!battleData.totalUltsQueued || (battleData.totalExTurnsQueued && queue[0].isExtraTurn))
                if (allQueuesEmpty) {
                    poke("UltimateQueueBlockedOrDone",battleData);
                }
            }
        }


        const allQueuesEmpty = !battleData.followUpQueue.length && (!battleData.totalUltsQueued || (battleData.totalExTurnsQueued && queue[0].isExtraTurn))
        if (allQueuesEmpty) {
            poke("UltimateQueueBlockedOrDone",battleData);

            if (queue.length) {
                clearULT(battleData);
            }
            
        }
    },
}
// const poke = sim.pokeListeners;
const poke = sim.pokeListenersOwnership;
const pokeArray = sim.pokeListenersArray;
const pokeSet = sim.pokeListenersSet;