let enemyTemplate = {
    "ATKBase": 718,
    "DEFBase": 1150,
    "SPD": 158,
    "ToughnessBase": 120,
    "EffectRES": 0.30,
    "DMGRes": 0.20,
    // "ATKBase": 718,
    // "ATKBase": 718,
}

let globalUI = {
    "currentMainMenuDisplayed": 1,
    "defaultTeam": ["Saber","Sunday","Dan Heng • Permansor Terrae","Robin"],

    "currentBattleViewDisplayType": "ActionExpand",
    "currentGraphViewDisplayType": "Summary",
    "defaultActionIndex": 0,
    "currentActionIndex": 0,

    "volumeIsOcclusion": false,
    "volumeIsLock": false,

    "buffGraphs": {
        graphBy: "AV",
        buffEntity: "Character",
        entityName: "Hysilens",
        buffName: "",

        graphByStat: "AV",
        buffEntityStat: "Character",
        entityNameStat: "Hysilens",
        statName: null,
    },
    
    "currentCharacterDisplayed": 1,
    "currentCharacterMenuDisplayed": 1,

    "currentSearchOpen": null,
    "currentSearchVolume": null,

    "actionOrderFilters": {},
    "actionOrderFiltersChars": {
        "char1": true,
        "char2": true,
        "char3": true,
        "char4": true,
        "summons": true,
        "enemies": true,
    },




    "filters": {
        char1: {
            tagFilters: [],

            lightconeOcclusions: [],
            armorSetOcclusions: [],
            planarSetOcclusions: [],

            mainstatBodyOcclusions: [],
            mainstatFeetOcclusions: [],
            mainstatOrbOcclusions: [],
            mainstatRopeOcclusions: [],
            substatOcclusions: [],

            lightconeLocks: [],
            armorSetLocks2pc: [],
            armorSetLocks4pc: [],
            planarSetLocks: [],
            mainstatBodyLocks: [],
            mainstatFeetLocks: [],
            mainstatOrbLocks: [],
            mainstatRopeLocks: [],

            trashStatFilters: null,

            lightcone: false,
            armorSet: false,
            armorSetAllow2pc: false,
            planarSet: false,
            mainstatBody: false,
            mainstatFeet: false,
            mainstatOrb: false,
            mainstatRope: false,
            substat: false,

            desired1: null,
            desired2: null,
            desired3: null,
            desired4: null,

            substat1: [1,30],
            substat2: [1,30],
            substat3: [1,30],
            substat4: [1,30],
        },
        char2: {
            tagFilters: [],

            lightconeOcclusions: [],
            armorSetOcclusions: [],
            planarSetOcclusions: [],

            mainstatBodyOcclusions: [],
            mainstatFeetOcclusions: [],
            mainstatOrbOcclusions: [],
            mainstatRopeOcclusions: [],
            substatOcclusions: [],

            lightconeLocks: [],
            armorSetLocks2pc: [],
            armorSetLocks4pc: [],
            planarSetLocks: [],
            mainstatBodyLocks: [],
            mainstatFeetLocks: [],
            mainstatOrbLocks: [],
            mainstatRopeLocks: [],

            trashStatFilters: null,

            lightcone: false,
            armorSet: false,
            armorSetAllow2pc: false,
            planarSet: false,
            mainstatBody: false,
            mainstatFeet: false,
            mainstatOrb: false,
            mainstatRope: false,
            substat: false,

            desired1: null,
            desired2: null,
            desired3: null,
            desired4: null,

            substat1: [1,30],
            substat2: [1,30],
            substat3: [1,30],
            substat4: [1,30],
        },
        char3: {
            tagFilters: [],

            lightconeOcclusions: [],
            armorSetOcclusions: [],
            planarSetOcclusions: [],

            mainstatBodyOcclusions: [],
            mainstatFeetOcclusions: [],
            mainstatOrbOcclusions: [],
            mainstatRopeOcclusions: [],
            substatOcclusions: [],

            lightconeLocks: [],
            armorSetLocks2pc: [],
            armorSetLocks4pc: [],
            planarSetLocks: [],
            mainstatBodyLocks: [],
            mainstatFeetLocks: [],
            mainstatOrbLocks: [],
            mainstatRopeLocks: [],

            trashStatFilters: null,

            lightcone: false,
            armorSet: false,
            armorSetAllow2pc: false,
            planarSet: false,
            mainstatBody: false,
            mainstatFeet: false,
            mainstatOrb: false,
            mainstatRope: false,
            substat: false,

            desired1: null,
            desired2: null,
            desired3: null,
            desired4: null,

            substat1: [1,30],
            substat2: [1,30],
            substat3: [1,30],
            substat4: [1,30],
        },
        char4: {
            tagFilters: [],

            lightconeOcclusions: [],
            armorSetOcclusions: [],
            planarSetOcclusions: [],

            mainstatBodyOcclusions: [],
            mainstatFeetOcclusions: [],
            mainstatOrbOcclusions: [],
            mainstatRopeOcclusions: [],
            substatOcclusions: [],

            lightconeLocks: [],
            armorSetLocks2pc: [],
            armorSetLocks4pc: [],
            planarSetLocks: [],
            mainstatBodyLocks: [],
            mainstatFeetLocks: [],
            mainstatOrbLocks: [],
            mainstatRopeLocks: [],

            trashStatFilters: null,

            lightcone: false,
            armorSet: false,
            armorSetAllow2pc: false,
            planarSet: false,
            mainstatBody: false,
            mainstatFeet: false,
            mainstatOrb: false,
            mainstatRope: false,
            substat: false,

            desired1: null,
            desired2: null,
            desired3: null,
            desired4: null,

            substat1: [1,30],
            substat2: [1,30],
            substat3: [1,30],
            substat4: [1,30],
        },
    }
}
let globalRecords = {
    queueStorage: [],
    resultsStorage: [],
    currentWorstResult: null,
    workersRunning: 0,
    counterInt: 0,
    globalSkipCount: 0,
    "URLImportCompleted": false,

    // "cyclesToRun": 5,

    "battleSettings": {
        "enemiesArray": [
            // {entry:"GenericBoss", weaknesses: "All"},
            // {entry:"GenericBoss", weaknesses: "None"},
            // {entry:"GenericElite", weaknesses: "None"},
            // {entry:"GenericElite", weaknesses: "All"},

            //CALYX CRIMSON
            {entry:"GenericMinion", weaknesses: null,weaknessOverrides: {"Lightning": true,"Ice":true,"Quantum":true},resistantTo: {}},
            // {entry:"GenericMinion", weaknesses: null,weaknessOverrides: {"Lightning": true,"Wind":false,"Quantum":false}, resistantTo: {"Wind":true}},
            {entry:"GenericMinion2", weaknesses: null,weaknessOverrides: {"Physical": true,"Wind":true,"Ice":true,},resistantTo: {}},
            {entry:"GenericMinion2", weaknesses: null,weaknessOverrides: {"Physical": true,"Wind":true,"Ice":true,},resistantTo: {}},

            //STAGNANT SHADOW - ICE - SHAPE OF RHIME
            // {entry:"Everwinter Shadewalker", weaknesses: null,weaknessOverrides: {"Physical": true,"Fire":true,"Quantum":true,},resistantTo: {"Ice":true,}},
            // {entry:"Frigid Prowler", weaknesses: null,weaknessOverrides: {"Lightning": true,"Fire":true,"Quantum":true},resistantTo: {"Ice":true,}},
            // {entry:"Everwinter Shadewalker", weaknesses: null,weaknessOverrides: {"Physical": true,"Fire":true,"Quantum":true,},resistantTo: {"Ice":true,}},


            // //MOC6
            // {entry:"MOC6SwordBoi", weaknesses: null,weaknessOverrides: {"Ice": true,"Fire":true,"Quantum":true}, resistantTo: {"Wind":true}},
            // {entry:"MOC6SwordBoi", weaknesses: null,weaknessOverrides: {"Ice": true,"Fire":true,"Quantum":true}, resistantTo: {"Wind":true}},
            // {entry:"MOC6Fish", weaknesses: null,weaknessOverrides: {"Physical": true,"Lightning":true,"Imaginary":true},resistantTo: {}},
            // {entry:"MOC6Fish", weaknesses: null,weaknessOverrides: {"Physical": true,"Lightning":true,"Imaginary":true},resistantTo: {}},
            
        ],
        "cyclesToRun": 3,
        "cycleMode": "MOC",

        "useTechniques": true,
        "useTechniquesChar1": true,
        "useTechniquesChar2": true,
        "useTechniquesChar3": true,
        "useTechniquesChar4": true,

        "useStartToughness": true,

        "cyclesStartingEnergyCustom": 0.50,

        "totalWaves": 1,

        "waveArray1": [...vashWavePresets["Glorp-ard"][0]],//vashWavePresets.quantumDoggo[0]
        "waveArray2": [],//vashWavePresets.quantumDoggo[1]
        "waveArray3": [],
        "waveArray4": [],
        "waveArray5": [],
    },
    "querySettings": {
        "enforceBattlesWon": false,
        "searchTarget": "",
        // "allow2pcSearch": false,

        "substatRollValue": "High",
        "rollsPerRelic": 4,
        "rollsPerBundle": 2,
        "usableBaseRolls": 20,
        "failedAddedRolls": 1,
        "minimumAddedRoll": 1,

        "ignoreQueryLimit": false,


        "queries5starSuperValue": 1,
        "queries5starHertaValue": 5,
        "queries4starSuperValue": 5,
        "keepLightconeRank": false,
    },

    "character": {
      "char1": {
          "name": "Yao Guang",
          "rank": 0,
          "lineup": 1,
          "lcName": "When She Decided to See",
          "lcRank": 1,
          "2pc": "Diviner of Distant Reach",
          "4pc": "Diviner of Distant Reach",
          "planar": "Lushaka, the Sunken Seas",
          "HeadMain": "HPFlat",
          "Head1Stat": "ATKFlat",
          "Head1Value": 35.986912,
          "Head2Stat": "HP%",
          "Head2Value": 0.07344,
          "Head3Stat": "CritRateBase",
          "Head3Value": 0.02592,
          "Head4Stat": "SPDFlat",
          "Head4Value": 7,
          "HandsMain": "ATKFlat",
          "Hands1Stat": "DEF%",
          "Hands1Value": 0.0486,
          "Hands2Stat": "SPDFlat",
          "Hands2Value": 11,
          "Hands3Stat": "CritRateBase",
          "Hands3Value": 0.06156,
          "Hands4Stat": "DamageBreak",
          "Hands4Value": 0.05184,
          "BodyMain": "CritDamageBase",
          "Body1Stat": "SPDFlat",
          "Body1Value": 9,
          "Body2Stat": "CritRateBase",
          "Body2Value": 0.0324,
          "Body3Stat": "DamageBreak",
          "Body3Value": 0.0648,
          "Body4Stat": "DEF%",
          "Body4Value": 0.1512,
          "FeetMain": "SPDFlat",
          "Feet1Stat": "CritRateBase",
          "Feet1Value": 0.02592,
          "Feet2Stat": "CritDamageBase",
          "Feet2Value": 0.11016,
          "Feet3Stat": "DamageBreak",
          "Feet3Value": 0.12312,
          "Feet4Stat": "DEFFlat",
          "Feet4Value": 50.805051,
          "SphereMain": "HP%",
          "Sphere1Stat": "SPDFlat",
          "Sphere1Value": 7,
          "Sphere2Stat": "CritRateBase",
          "Sphere2Value": 0.08748,
          "Sphere3Stat": "CritDamageBase",
          "Sphere3Value": 0.0648,
          "Sphere4Stat": "ATK%",
          "Sphere4Value": 0.03456,
          "RopeMain": "EnergyRegenRate",
          "Rope1Stat": "SPDFlat",
          "Rope1Value": 6,
          "Rope2Stat": "CritRateBase",
          "Rope2Value": 0.02592,
          "Rope3Stat": "CritDamageBase",
          "Rope3Value": 0.11664,
          "Rope4Stat": "ATK%",
          "Rope4Value": 0.08208,
          "disabled": false,
          "stats": {},
          "order": [],
          "conditions": {
              "hasEnhancedState": false,
              "Skill": {
                  "type": "AND",
                  "array": [
                      {
                          "type": "Character: State",
                          "target": "Self",
                          "stateName": "skillZoneActive",
                          "state": false,
                          "isBattleValue": true
                      }
                  ]
              },
              "Ultimate": {
                  "type": "AND",
                  "array": []
              }
          }
      },
      "char2": {
          "name": "Sunday",
          "rank": 0,
          "lineup": 1,
          "lcName": "A Grounded Ascent",
          "lcRank": 1,
          "2pc": "Sacerdos' Relived Ordeal",
          "4pc": "Sacerdos' Relived Ordeal",
          "planar": "Lushaka, the Sunken Seas",
          "HeadMain": "HPFlat",
          "Head1Stat": "DEFFlat",
          "Head1Value": 38.103789,
          "Head2Stat": "SPDFlat",
          "Head2Value": 6,
          "Head3Stat": "CritDamageBase",
          "Head3Value": 0.11664,
          "Head4Stat": "DamageBreak",
          "Head4Value": 0.11016,
          "HandsMain": "ATKFlat",
          "Hands1Stat": "HPFlat",
          "Hands1Value": 38.103795,
          "Hands2Stat": "ATK%",
          "Hands2Value": 0.03888,
          "Hands3Stat": "SPDFlat",
          "Hands3Value": 7,
          "Hands4Stat": "CritDamageBase",
          "Hands4Value": 0.18792,
          "BodyMain": "CritDamageBase",
          "Body1Stat": "ATKFlat",
          "Body1Value": 42.337543,
          "Body2Stat": "SPDFlat",
          "Body2Value": 7,
          "Body3Stat": "CritRateBase",
          "Body3Value": 0.06156,
          "Body4Stat": "EffectRES",
          "Body4Value": 0.03888,
          "FeetMain": "SPDFlat",
          "Feet1Stat": "HP%",
          "Feet1Value": 0.03456,
          "Feet2Stat": "ATK%",
          "Feet2Value": 0.07344,
          "Feet3Stat": "EffectHitRate",
          "Feet3Value": 0.108,
          "Feet4Stat": "DamageBreak",
          "Feet4Value": 0.12312,
          "SphereMain": "HP%",
          "Sphere1Stat": "HPFlat",
          "Sphere1Value": 71.973835,
          "Sphere2Stat": "DEFFlat",
          "Sphere2Value": 19.051896,
          "Sphere3Stat": "SPDFlat",
          "Sphere3Value": 6,
          "Sphere4Stat": "EffectHitRate",
          "Sphere4Value": 0.0864,
          "RopeMain": "EnergyRegenRate",
          "Rope1Stat": "HP%",
          "Rope1Value": 0.11664,
          "Rope2Stat": "DEF%",
          "Rope2Value": 0.0486,
          "Rope3Stat": "SPDFlat",
          "Rope3Value": 9,
          "Rope4Stat": "EffectRES",
          "Rope4Value": 0.03888,
          "conditions": {
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
          "disabled": false
      },
      "char3": {
          "name": "Dan Heng • Permansor Terrae",
          "rank": 0,
          "lineup": 1,
          "lcName": "Though Worlds Apart",
          "lcRank": 1,
          "2pc": "Self-Enshrouded Recluse",
          "4pc": "Self-Enshrouded Recluse",
          "planar": "Lushaka, the Sunken Seas",
          "HeadMain": "HPFlat",
          "Head1Stat": "ATKFlat",
          "Head1Value": 52.921928,
          "Head2Stat": "DEFFlat",
          "Head2Value": 19.051896,
          "Head3Stat": "HP%",
          "Head3Value": 0.03888,
          "Head4Stat": "SPDFlat",
          "Head4Value": 6,
          "HandsMain": "ATKFlat",
          "Hands1Stat": "HP%",
          "Hands1Value": 0.08208,
          "Hands2Stat": "SPDFlat",
          "Hands2Value": 9,
          "Hands3Stat": "EffectHitRate",
          "Hands3Value": 0.0432,
          "Hands4Stat": "DamageBreak",
          "Hands4Value": 0.05184,
          "BodyMain": "ATK%",
          "Body1Stat": "ATKFlat",
          "Body1Value": 38.103789,
          "Body2Stat": "DEF%",
          "Body2Value": 0.1026,
          "Body3Stat": "SPDFlat",
          "Body3Value": 9,
          "Body4Stat": "EffectRES",
          "Body4Value": 0.03456,
          "FeetMain": "ATK%",
          "Feet1Stat": "DEF%",
          "Feet1Value": 0.1512,
          "Feet2Stat": "SPDFlat",
          "Feet2Value": 4,
          "Feet3Stat": "EffectRES",
          "Feet3Value": 0.07344,
          "Feet4Stat": "DamageBreak",
          "Feet4Value": 0.05832,
          "SphereMain": "ATK%",
          "Sphere1Stat": "DEF%",
          "Sphere1Value": 0.054,
          "Sphere2Stat": "SPDFlat",
          "Sphere2Value": 6,
          "Sphere3Stat": "EffectRES",
          "Sphere3Value": 0.07776,
          "Sphere4Stat": "HP%",
          "Sphere4Value": 0.07344,
          "RopeMain": "ATK%",
          "Rope1Stat": "ATKFlat",
          "Rope1Value": 57.155682,
          "Rope2Stat": "CritRateBase",
          "Rope2Value": 0.07776,
          "Rope3Stat": "CritDamageBase",
          "Rope3Value": 0.05184,
          "Rope4Stat": "DamageBreak",
          "Rope4Value": 0.05184,
          "conditions": {
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
          "stats": {},
          "order": []
      },
      "char4": {
          "name": "Robin",
          "rank": 0,
          "lineup": 1,
          "lcName": "Flowing Nightglow",
          "lcRank": 1,
          "2pc": "Prisoner in Deep Confinement",
          "4pc": "Musketeer of Wild Wheat",
          "planar": "Fleet of the Ageless",
          "HeadMain": "HPFlat",
          "Head1Stat": "SPDFlat",
          "Head1Value": 5,
          "Head2Stat": "CritDamageBase",
          "Head2Value": 0.05832,
          "Head3Stat": "EffectHitRate",
          "Head3Value": 0.08208,
          "Head4Stat": "DamageBreak",
          "Head4Value": 0.162,
          "HandsMain": "ATKFlat",
          "Hands1Stat": "HPFlat",
          "Hands1Value": 118.54514,
          "Hands2Stat": "SPDFlat",
          "Hands2Value": 6,
          "Hands3Stat": "CritRateBase",
          "Hands3Value": 0.02592,
          "Hands4Stat": "DamageBreak",
          "Hands4Value": 0.05832,
          "BodyMain": "ATK%",
          "Body1Stat": "ATKFlat",
          "Body1Value": 33.870035,
          "Body2Stat": "DEFFlat",
          "Body2Value": 16.935019,
          "Body3Stat": "CritRateBase",
          "Body3Value": 0.02916,
          "Body4Stat": "EffectRES",
          "Body4Value": 0.1512,
          "FeetMain": "ATK%",
          "Feet1Stat": "HPFlat",
          "Feet1Value": 110.07763,
          "Feet2Stat": "HP%",
          "Feet2Value": 0.07344,
          "Feet3Stat": "SPDFlat",
          "Feet3Value": 4,
          "Feet4Stat": "EffectRES",
          "Feet4Value": 0.07776,
          "SphereMain": "ATK%",
          "Sphere1Stat": "ATKFlat",
          "Sphere1Value": 35.986912,
          "Sphere2Stat": "DEF%",
          "Sphere2Value": 0.1512,
          "Sphere3Stat": "EffectRES",
          "Sphere3Value": 0.06912,
          "Sphere4Stat": "DamageBreak",
          "Sphere4Value": 0.0648,
          "RopeMain": "EnergyRegenRate",
          "Rope1Stat": "ATKFlat",
          "Rope1Value": 35.986912,
          "Rope2Stat": "DEFFlat",
          "Rope2Value": 19.051896,
          "Rope3Stat": "EffectHitRate",
          "Rope3Value": 0.11232,
          "Rope4Stat": "DamageBreak",
          "Rope4Value": 0.17496,
          "conditions": {
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
          "disabled": false
      }
  },
    // "boss": {
    //     "currentBoss": "VoidBattle_Devourer_Hard",
    //     "enemyType": "Colossus",
    //     "currentBossPart": "",
    //     "currentBossPartType": "",
    //     "currentBossPartWP": 0,
    // },
    // "teamBuffs": {
    //     "stats": {},
    //     "tags": [],
    //     "complexBonus": [],
    // },
    // "enemyBuffs": {
    //     "stats": {},
    //     "tags": [],
    // },
    // "currentDisplayMode": 1,
    // "weaponCritCeiling": 0,
    // "skillCritCeiling": 0,
    // "ambushImmobileSlider": 100,
    // "weakPointHitRate": 100,
    // "useWeakspots": true,
    // "useCrits": true,
    // "useFirearmPhysical": true,
    // "playerCount": 1,

}