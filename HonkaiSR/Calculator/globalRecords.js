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
        statNameTYPE: "Regular",

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
    "character": 
    {
        "char1": {
            "name": "Silver Wolf LV.999",
            "rank": 0,
            "lineup": 1,
            "lcName": "Welcome to the Cosmic City",
            "lcRank": 1,
            "2pc": "Ever-Glorious Magical Girl",
            "4pc": "Ever-Glorious Magical Girl",
            "planar": "Punklorde Stage Zero",
            "HeadMain": "HPFlat",
            "Head1Stat": "DEFFlat",
            "Head1Value": 40.220669,
            "Head2Stat": "SPDFlat",
            "Head2Value": 6.9,
            "Head3Stat": "CritRateBase",
            "Head3Value": 0.02916,
            "Head4Stat": "DamageBreak",
            "Head4Value": 0.12312,
            "HandsMain": "ATKFlat",
            "Hands1Stat": "SPDFlat",
            "Hands1Value": 6.9,
            "Hands2Stat": "CritDamageBase",
            "Hands2Value": 0.24624,
            "Hands3Stat": "EffectHitRate",
            "Hands3Value": 0.03888,
            "Hands4Stat": "EffectRES",
            "Hands4Value": 0.03456,
            "BodyMain": "CritRateBase",
            "Body1Stat": "DEFFlat",
            "Body1Value": 57.155688000000005,
            "Body2Stat": "SPDFlat",
            "Body2Value": 4,
            "Body3Stat": "CritDamageBase",
            "Body3Value": 0.12312,
            "Body4Stat": "DamageBreak",
            "Body4Value": 0.12312,
            "FeetMain": "SPDFlat",
            "Feet1Stat": "ATKFlat",
            "Feet1Value": 21.168773,
            "Feet2Stat": "HP%",
            "Feet2Value": 0.03456,
            "Feet3Stat": "CritRateBase",
            "Feet3Value": 0.11664,
            "Feet4Stat": "CritDamageBase",
            "Feet4Value": 0.1296,
            "SphereMain": "HP%",
            "Sphere1Stat": "DEF%",
            "Sphere1Value": 0.0432,
            "Sphere2Stat": "SPDFlat",
            "Sphere2Value": 9.5,
            "Sphere3Stat": "CritDamageBase",
            "Sphere3Value": 0.05832,
            "Sphere4Stat": "EffectRES",
            "Sphere4Value": 0.08208,
            "RopeMain": "HP%",
            "Rope1Stat": "HPFlat",
            "Rope1Value": 33.87004,
            "Rope2Stat": "DEF%",
            "Rope2Value": 0.048600000000000004,
            "Rope3Stat": "SPDFlat",
            "Rope3Value": 6.6,
            "Rope4Stat": "CritRateBase",
            "Rope4Value": 0.08748,
            "disabled": false,
            "stats": {},
            "order": [],
            "conditions": {
                "hasEnhancedState": true,
                "Skill": {
                    "type": "AND",
                    "array": []
                },
                "Ultimate": {
                    "type": "AND",
                    "array": []
                }
            }
        },
        "char2": {
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
            "Head1Value": 16.935019,
            "Head2Stat": "HP%",
            "Head2Value": 0.07344,
            "Head3Stat": "ATK%",
            "Head3Value": 0.03456,
            "Head4Stat": "SPDFlat",
            "Head4Value": 9.5,
            "HandsMain": "ATKFlat",
            "Hands1Stat": "DEF%",
            "Hands1Value": 0.048600000000000004,
            "Hands2Stat": "SPDFlat",
            "Hands2Value": 11.2,
            "Hands3Stat": "CritRateBase",
            "Hands3Value": 0.06156,
            "Hands4Stat": "DamageBreak",
            "Hands4Value": 0.05184,
            "BodyMain": "CritRateBase",
            "Body1Stat": "HPFlat",
            "Body1Value": 38.103795000000005,
            "Body2Stat": "DEFFlat",
            "Body2Value": 40.220669,
            "Body3Stat": "SPDFlat",
            "Body3Value": 6.9,
            "Body4Stat": "DamageBreak",
            "Body4Value": 0.12312,
            "FeetMain": "SPDFlat",
            "Feet1Stat": "DEFFlat",
            "Feet1Value": 50.805057000000005,
            "Feet2Stat": "CritRateBase",
            "Feet2Value": 0.02592,
            "Feet3Stat": "CritDamageBase",
            "Feet3Value": 0.11016,
            "Feet4Stat": "DamageBreak",
            "Feet4Value": 0.12312,
            "SphereMain": "HP%",
            "Sphere1Stat": "ATK%",
            "Sphere1Value": 0.03456,
            "Sphere2Stat": "SPDFlat",
            "Sphere2Value": 7.2,
            "Sphere3Stat": "CritRateBase",
            "Sphere3Value": 0.08748,
            "Sphere4Stat": "CritDamageBase",
            "Sphere4Value": 0.0648,
            "RopeMain": "EnergyRegenRate",
            "Rope1Stat": "ATK%",
            "Rope1Value": 0.08208,
            "Rope2Stat": "SPDFlat",
            "Rope2Value": 6.9,
            "Rope3Stat": "CritRateBase",
            "Rope3Value": 0.02592,
            "Rope4Stat": "CritDamageBase",
            "Rope4Value": 0.11664,
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
        "char3": {
            "name": "Sparxie",
            "rank": 0,
            "lineup": 1,
            "lcName": "Dazzled by a Flowery World",
            "lcRank": 1,
            "2pc": "Ever-Glorious Magical Girl",
            "4pc": "Ever-Glorious Magical Girl",
            "planar": "Tengoku@Livestream",
            "HeadMain": "HPFlat",
            "Head1Stat": "ATKFlat",
            "Head1Value": 38.103792,
            "Head2Stat": "ATK%",
            "Head2Value": 0.03888,
            "Head3Stat": "CritRateBase",
            "Head3Value": 0.08424,
            "Head4Stat": "CritDamageBase",
            "Head4Value": 0.12312,
            "HandsMain": "ATKFlat",
            "Hands1Stat": "DEFFlat",
            "Hands1Value": 21.168773,
            "Hands2Stat": "SPDFlat",
            "Hands2Value": 2.3,
            "Hands3Stat": "CritRateBase",
            "Hands3Value": 0.09072,
            "Hands4Stat": "CritDamageBase",
            "Hands4Value": 0.16848,
            "BodyMain": "CritRateBase",
            "Body1Stat": "ATK%",
            "Body1Value": 0.07776,
            "Body2Stat": "CritDamageBase",
            "Body2Value": 0.05832,
            "Body3Stat": "EffectHitRate",
            "Body3Value": 0.07776,
            "Body4Stat": "EffectRES",
            "Body4Value": 0.12528,
            "FeetMain": "ATK%",
            "Feet1Stat": "ATKFlat",
            "Feet1Value": 40.220669,
            "Feet2Stat": "CritRateBase",
            "Feet2Value": 0.12312,
            "Feet3Stat": "CritDamageBase",
            "Feet3Value": 0.11016,
            "Feet4Stat": "EffectHitRate",
            "Feet4Value": 0.03456,
            "SphereMain": "ATK%",
            "Sphere1Stat": "HPFlat",
            "Sphere1Value": 67.74008,
            "Sphere2Stat": "CritRateBase",
            "Sphere2Value": 0.08424,
            "Sphere3Stat": "CritDamageBase",
            "Sphere3Value": 0.05184,
            "Sphere4Stat": "EffectHitRate",
            "Sphere4Value": 0.06912,
            "RopeMain": "ATK%",
            "Rope1Stat": "DEFFlat",
            "Rope1Value": 21.168773,
            "Rope2Stat": "CritDamageBase",
            "Rope2Value": 0.18791999999999998,
            "Rope3Stat": "EffectHitRate",
            "Rope3Value": 0.03456,
            "Rope4Stat": "DamageBreak",
            "Rope4Value": 0.17496,
            "conditions": {
                "hasEnhancedState": false,
                "Skill": {
                    "type": "AND",
                    "array": []
                },
                "Ultimate": {
                    "type": "AND",
                    "array": []
                }
            },
            "stats": {},
            "order": [],
            "disabled": false
        },
        "char4": {
            "name": "Huohuo",
            "rank": 1,
            "lineup": 1,
            "lcName": "Night of Fright",
            "lcRank": 1,
            "2pc": "Messenger Traversing Hackerspace",
            "4pc": "Sacerdos' Relived Ordeal",
            "planar": "Broken Keel",
            "HeadMain": "HPFlat",
            "Head1Stat": "DEFFlat",
            "Head1Value": 19.051896,
            "Head2Stat": "HP%",
            "Head2Value": 0.08208,
            "Head3Stat": "SPDFlat",
            "Head3Value": 6.6,
            "Head4Stat": "EffectRES",
            "Head4Value": 0.07344,
            "HandsMain": "ATKFlat",
            "Hands1Stat": "HPFlat",
            "Hands1Value": 33.87004,
            "Hands2Stat": "HP%",
            "Hands2Value": 0.0432,
            "Hands3Stat": "DEF%",
            "Hands3Value": 0.189,
            "Hands4Stat": "SPDFlat",
            "Hands4Value": 6.3,
            "BodyMain": "HP%",
            "Body1Stat": "ATKFlat",
            "Body1Value": 35.986915,
            "Body2Stat": "SPDFlat",
            "Body2Value": 4.3,
            "Body3Stat": "CritDamageBase",
            "Body3Value": 0.05184,
            "Body4Stat": "EffectHitRate",
            "Body4Value": 0.11231999999999999,
            "FeetMain": "SPDFlat",
            "Feet1Stat": "ATK%",
            "Feet1Value": 0.03888,
            "Feet2Stat": "EffectHitRate",
            "Feet2Value": 0.07776,
            "Feet3Stat": "EffectRES",
            "Feet3Value": 0.11231999999999999,
            "Feet4Stat": "DamageBreak",
            "Feet4Value": 0.11664,
            "SphereMain": "HP%",
            "Sphere1Stat": "HPFlat",
            "Sphere1Value": 42.33755000000001,
            "Sphere2Stat": "ATKFlat",
            "Sphere2Value": 40.220669,
            "Sphere3Stat": "ATK%",
            "Sphere3Value": 0.108,
            "Sphere4Stat": "EffectRES",
            "Sphere4Value": 0.07776,
            "RopeMain": "EnergyRegenRate",
            "Rope1Stat": "HPFlat",
            "Rope1Value": 42.33755000000001,
            "Rope2Stat": "DEFFlat",
            "Rope2Value": 52.92193400000001,
            "Rope3Stat": "HP%",
            "Rope3Value": 0.08208,
            "Rope4Stat": "EffectRES",
            "Rope4Value": 0.07776,
            "conditions": {
                "hasEnhancedState": false,
                "Skill": {
                    "type": "OR",
                    "array": [
                        {
                            "type": "Character: State",
                            "target": "Self",
                            "stateName": "talentProvisionIsActive",
                            "state": false
                        },
                        {
                            "type": "Sustain Checks",
                            "sustainValue": "Any Ally: HP <= 50%"
                        }
                    ]
                },
                "validTargetChecks": [
                    "Skill"
                ],
                "Ultimate": {
                    "type": "AND",
                    "array": [
                        {
                            "type": "OR",
                            "array": [
                                {
                                    "type": "COMPARE",
                                    "comparison": "=",
                                    "array": [
                                        {
                                            "type": "Character: Value",
                                            "target": "char1",
                                            "targetType": "Character",
                                            "characterValue": "properName"
                                        },
                                        {
                                            "type": "Character: Value",
                                            "target": "Self",
                                            "targetType": "Character",
                                            "characterValue": "properName"
                                        }
                                    ]
                                },
                                {
                                    "type": "COMPARE",
                                    "comparison": "=",
                                    "array": [
                                        {
                                            "type": "Character: Value",
                                            "target": "char1",
                                            "targetType": "Character",
                                            "characterValue": "maxEnergy"
                                        },
                                        {
                                            "type": "User Value: Number",
                                            "inputValue": 0
                                        }
                                    ]
                                },
                                {
                                    "type": "COMPARE",
                                    "comparison": "!=",
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
                        },
                        {
                            "type": "OR",
                            "array": [
                                {
                                    "type": "COMPARE",
                                    "comparison": "=",
                                    "array": [
                                        {
                                            "type": "Character: Value",
                                            "target": "char2",
                                            "targetType": "Character",
                                            "characterValue": "properName"
                                        },
                                        {
                                            "type": "Character: Value",
                                            "target": "Self",
                                            "targetType": "Character",
                                            "characterValue": "properName"
                                        }
                                    ]
                                },
                                {
                                    "type": "COMPARE",
                                    "comparison": "=",
                                    "array": [
                                        {
                                            "type": "Character: Value",
                                            "target": "char2",
                                            "targetType": "Character",
                                            "characterValue": "maxEnergy"
                                        },
                                        {
                                            "type": "User Value: Number",
                                            "inputValue": 0
                                        }
                                    ]
                                },
                                {
                                    "type": "COMPARE",
                                    "comparison": "!=",
                                    "array": [
                                        {
                                            "type": "Character: Value",
                                            "target": "char2",
                                            "targetType": "Character",
                                            "characterValue": "currentEnergy"
                                        },
                                        {
                                            "type": "Character: Value",
                                            "target": "char2",
                                            "targetType": "Character",
                                            "characterValue": "maxEnergy"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "OR",
                            "array": [
                                {
                                    "type": "COMPARE",
                                    "comparison": "=",
                                    "array": [
                                        {
                                            "type": "Character: Value",
                                            "target": "char3",
                                            "targetType": "Character",
                                            "characterValue": "properName"
                                        },
                                        {
                                            "type": "Character: Value",
                                            "target": "Self",
                                            "targetType": "Character",
                                            "characterValue": "properName"
                                        }
                                    ]
                                },
                                {
                                    "type": "COMPARE",
                                    "comparison": "=",
                                    "array": [
                                        {
                                            "type": "Character: Value",
                                            "target": "char3",
                                            "targetType": "Character",
                                            "characterValue": "maxEnergy"
                                        },
                                        {
                                            "type": "User Value: Number",
                                            "inputValue": 0
                                        }
                                    ]
                                },
                                {
                                    "type": "COMPARE",
                                    "comparison": "!=",
                                    "array": [
                                        {
                                            "type": "Character: Value",
                                            "target": "char3",
                                            "targetType": "Character",
                                            "characterValue": "currentEnergy"
                                        },
                                        {
                                            "type": "Character: Value",
                                            "target": "char3",
                                            "targetType": "Character",
                                            "characterValue": "maxEnergy"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "OR",
                            "array": [
                                {
                                    "type": "COMPARE",
                                    "comparison": "=",
                                    "array": [
                                        {
                                            "type": "Character: Value",
                                            "target": "char4",
                                            "targetType": "Character",
                                            "characterValue": "properName"
                                        },
                                        {
                                            "type": "Character: Value",
                                            "target": "Self",
                                            "targetType": "Character",
                                            "characterValue": "properName"
                                        }
                                    ]
                                },
                                {
                                    "type": "COMPARE",
                                    "comparison": "=",
                                    "array": [
                                        {
                                            "type": "Character: Value",
                                            "target": "char4",
                                            "targetType": "Character",
                                            "characterValue": "maxEnergy"
                                        },
                                        {
                                            "type": "User Value: Number",
                                            "inputValue": 0
                                        }
                                    ]
                                },
                                {
                                    "type": "COMPARE",
                                    "comparison": "!=",
                                    "array": [
                                        {
                                            "type": "Character: Value",
                                            "target": "char4",
                                            "targetType": "Character",
                                            "characterValue": "currentEnergy"
                                        },
                                        {
                                            "type": "Character: Value",
                                            "target": "char4",
                                            "targetType": "Character",
                                            "characterValue": "maxEnergy"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "SkillTarget": {
                    "type": "Target Priority",
                    "array": [
                        {
                            "type": "TARGET CHECK",
                            "array": [
                                {
                                    "type": "TARGET",
                                    "array": [
                                        {
                                            "type": "Healing Presets",
                                            "statName": "Maximize Blast Healing"
                                        }
                                    ]
                                },
                                {
                                    "type": "AND",
                                    "array": []
                                }
                            ]
                        }
                    ]
                }
            },
            "disabled": false,
            "stats": {},
            "order": []
        }
    }
    // {
    //     "char1": {
    //         "name": "Silver Wolf LV.999",
    //         "rank": 1,
    //         "lineup": 1,
    //         "lcName": "Welcome to the Cosmic City",
    //         "lcRank": 1,
    //         "2pc": "Ever-Glorious Magical Girl",
    //         "4pc": "Ever-Glorious Magical Girl",
    //         "planar": "Punklorde Stage Zero",
    //         "HeadMain": "HPFlat",
    //         "Head1Stat": "DEFFlat",
    //         "Head1Value": 40.220669,
    //         "Head2Stat": "SPDFlat",
    //         "Head2Value": 6.9,
    //         "Head3Stat": "CritRateBase",
    //         "Head3Value": 0.02916,
    //         "Head4Stat": "DamageBreak",
    //         "Head4Value": 0.12312,
    //         "HandsMain": "ATKFlat",
    //         "Hands1Stat": "SPDFlat",
    //         "Hands1Value": 6.9,
    //         "Hands2Stat": "CritDamageBase",
    //         "Hands2Value": 0.24624,
    //         "Hands3Stat": "EffectHitRate",
    //         "Hands3Value": 0.03888,
    //         "Hands4Stat": "EffectRES",
    //         "Hands4Value": 0.03456,
    //         "BodyMain": "CritRateBase",
    //         "Body1Stat": "DEFFlat",
    //         "Body1Value": 57.155688000000005,
    //         "Body2Stat": "SPDFlat",
    //         "Body2Value": 4,
    //         "Body3Stat": "CritDamageBase",
    //         "Body3Value": 0.12312,
    //         "Body4Stat": "DamageBreak",
    //         "Body4Value": 0.12312,
    //         "FeetMain": "SPDFlat",
    //         "Feet1Stat": "ATKFlat",
    //         "Feet1Value": 21.168773,
    //         "Feet2Stat": "HP%",
    //         "Feet2Value": 0.03456,
    //         "Feet3Stat": "CritRateBase",
    //         "Feet3Value": 0.11664,
    //         "Feet4Stat": "CritDamageBase",
    //         "Feet4Value": 0.1296,
    //         "SphereMain": "HP%",
    //         "Sphere1Stat": "DEF%",
    //         "Sphere1Value": 0.0432,
    //         "Sphere2Stat": "SPDFlat",
    //         "Sphere2Value": 9.5,
    //         "Sphere3Stat": "CritDamageBase",
    //         "Sphere3Value": 0.05832,
    //         "Sphere4Stat": "EffectRES",
    //         "Sphere4Value": 0.08208,
    //         "RopeMain": "HP%",
    //         "Rope1Stat": "HPFlat",
    //         "Rope1Value": 33.87004,
    //         "Rope2Stat": "DEF%",
    //         "Rope2Value": 0.048600000000000004,
    //         "Rope3Stat": "SPDFlat",
    //         "Rope3Value": 6.6,
    //         "Rope4Stat": "CritRateBase",
    //         "Rope4Value": 0.08748,
    //         "disabled": false,
    //         "stats": {},
    //         "order": [],
    //         "conditions": {
    //             "hasEnhancedState": true,
    //             "Skill": {
    //                 "type": "AND",
    //                 "array": []
    //             },
    //             "Ultimate": {
    //                 "type": "AND",
    //                 "array": []
    //             }
    //         }
    //     },
    //     "char2": {
    //         "name": "Yao Guang",
    //         "rank": 0,
    //         "lineup": 1,
    //         "lcName": "When She Decided to See",
    //         "lcRank": 1,
    //         "2pc": "Diviner of Distant Reach",
    //         "4pc": "Diviner of Distant Reach",
    //         "planar": "Lushaka, the Sunken Seas",
    //         "HeadMain": "HPFlat",
    //         "Head1Stat": "ATKFlat",
    //         "Head1Value": 16.935019,
    //         "Head2Stat": "HP%",
    //         "Head2Value": 0.07344,
    //         "Head3Stat": "ATK%",
    //         "Head3Value": 0.03456,
    //         "Head4Stat": "SPDFlat",
    //         "Head4Value": 9.5,
    //         "HandsMain": "ATKFlat",
    //         "Hands1Stat": "DEF%",
    //         "Hands1Value": 0.048600000000000004,
    //         "Hands2Stat": "SPDFlat",
    //         "Hands2Value": 11.2,
    //         "Hands3Stat": "CritRateBase",
    //         "Hands3Value": 0.06156,
    //         "Hands4Stat": "DamageBreak",
    //         "Hands4Value": 0.05184,
    //         "BodyMain": "CritRateBase",
    //         "Body1Stat": "HPFlat",
    //         "Body1Value": 38.103795000000005,
    //         "Body2Stat": "DEFFlat",
    //         "Body2Value": 40.220669,
    //         "Body3Stat": "SPDFlat",
    //         "Body3Value": 6.9,
    //         "Body4Stat": "DamageBreak",
    //         "Body4Value": 0.12312,
    //         "FeetMain": "SPDFlat",
    //         "Feet1Stat": "DEFFlat",
    //         "Feet1Value": 50.805057000000005,
    //         "Feet2Stat": "CritRateBase",
    //         "Feet2Value": 0.02592,
    //         "Feet3Stat": "CritDamageBase",
    //         "Feet3Value": 0.11016,
    //         "Feet4Stat": "DamageBreak",
    //         "Feet4Value": 0.12312,
    //         "SphereMain": "HP%",
    //         "Sphere1Stat": "ATK%",
    //         "Sphere1Value": 0.03456,
    //         "Sphere2Stat": "SPDFlat",
    //         "Sphere2Value": 7.2,
    //         "Sphere3Stat": "CritRateBase",
    //         "Sphere3Value": 0.08748,
    //         "Sphere4Stat": "CritDamageBase",
    //         "Sphere4Value": 0.0648,
    //         "RopeMain": "EnergyRegenRate",
    //         "Rope1Stat": "ATK%",
    //         "Rope1Value": 0.08208,
    //         "Rope2Stat": "SPDFlat",
    //         "Rope2Value": 6.9,
    //         "Rope3Stat": "CritRateBase",
    //         "Rope3Value": 0.02592,
    //         "Rope4Stat": "CritDamageBase",
    //         "Rope4Value": 0.11664,
    //         "disabled": true,
    //         "stats": {},
    //         "order": [],
    //         "conditions": {
    //             "hasEnhancedState": false,
    //             "Skill": {
    //                 "type": "AND",
    //                 "array": [
    //                     {
    //                         "type": "Character: State",
    //                         "target": "Self",
    //                         "stateName": "skillZoneActive",
    //                         "state": false,
    //                         "isBattleValue": true
    //                     }
    //                 ]
    //             },
    //             "Ultimate": {
    //                 "type": "AND",
    //                 "array": []
    //             }
    //         }
    //     },
    //     "char3": {
    //         "name": "Ruan Mei",
    //         "rank": 0,
    //         "lineup": 1,
    //         "lcName": "Night of Fright",
    //         "lcRank": 1,
    //         "2pc": "Messenger Traversing Hackerspace",
    //         "4pc": "Sacerdos' Relived Ordeal",
    //         "planar": "Broken Keel",
    //         "HeadMain": "HPFlat",
    //         "Head1Stat": "DEFFlat",
    //         "Head1Value": 19.051896,
    //         "Head2Stat": "HP%",
    //         "Head2Value": 0.08208,
    //         "Head3Stat": "SPDFlat",
    //         "Head3Value": 6.6,
    //         "Head4Stat": "EffectRES",
    //         "Head4Value": 0.07344,
    //         "HandsMain": "ATKFlat",
    //         "Hands1Stat": "HPFlat",
    //         "Hands1Value": 33.87004,
    //         "Hands2Stat": "HP%",
    //         "Hands2Value": 0.0432,
    //         "Hands3Stat": "DEF%",
    //         "Hands3Value": 0.189,
    //         "Hands4Stat": "SPDFlat",
    //         "Hands4Value": 6.3,
    //         "BodyMain": "HP%",
    //         "Body1Stat": "ATKFlat",
    //         "Body1Value": 35.986915,
    //         "Body2Stat": "SPDFlat",
    //         "Body2Value": 4.3,
    //         "Body3Stat": "CritDamageBase",
    //         "Body3Value": 0.05184,
    //         "Body4Stat": "EffectHitRate",
    //         "Body4Value": 0.11231999999999999,
    //         "FeetMain": "SPDFlat",
    //         "Feet1Stat": "ATK%",
    //         "Feet1Value": 0.03888,
    //         "Feet2Stat": "EffectHitRate",
    //         "Feet2Value": 0.07776,
    //         "Feet3Stat": "EffectRES",
    //         "Feet3Value": 0.11231999999999999,
    //         "Feet4Stat": "DamageBreak",
    //         "Feet4Value": 0.11664,
    //         "SphereMain": "HP%",
    //         "Sphere1Stat": "HPFlat",
    //         "Sphere1Value": 42.33755000000001,
    //         "Sphere2Stat": "ATKFlat",
    //         "Sphere2Value": 40.220669,
    //         "Sphere3Stat": "ATK%",
    //         "Sphere3Value": 0.108,
    //         "Sphere4Stat": "EffectRES",
    //         "Sphere4Value": 0.07776,
    //         "RopeMain": "EnergyRegenRate",
    //         "Rope1Stat": "HPFlat",
    //         "Rope1Value": 42.33755000000001,
    //         "Rope2Stat": "DEFFlat",
    //         "Rope2Value": 52.92193400000001,
    //         "Rope3Stat": "HP%",
    //         "Rope3Value": 0.08208,
    //         "Rope4Stat": "EffectRES",
    //         "Rope4Value": 0.07776,
    //         "conditions": {
    //             "hasEnhancedState": false,
    //             "Skill": {
    //                 "type": "AND",
    //                 "array": [
    //                     {
    //                         "type": "Buff",
    //                         "target": "Self",
    //                         "targetType": "Character",
    //                         "buffName": "Overtone (Countdown)",
    //                         "state": false
    //                     }
    //                 ]
    //             },
    //             "Ultimate": {
    //                 "type": "AND",
    //                 "array": []
    //             }
    //         },
    //         "stats": {},
    //         "order": [],
    //         "disabled": true
    //     },
    //     "char4": {
    //         "name": "Dan Heng • Permansor Terrae",
    //         "rank": 0,
    //         "lineup": 1,
    //         "lcName": "Elation Brimming With Blessings",
    //         "lcRank": 5,
    //         "2pc": "Diviner of Distant Reach",
    //         "4pc": "Diviner of Distant Reach",
    //         "planar": "Lushaka, the Sunken Seas",
    //         "HeadMain": "HPFlat",
    //         "Head1Stat": "HP%",
    //         "Head1Value": 0.07344,
    //         "Head2Stat": "ATK%",
    //         "Head2Value": 0.07776,
    //         "Head3Stat": "SPDFlat",
    //         "Head3Value": 5.2,
    //         "Head4Stat": "CritRateBase",
    //         "Head4Value": 0.09072,
    //         "HandsMain": "ATKFlat",
    //         "Hands1Stat": "SPDFlat",
    //         "Hands1Value": 2,
    //         "Hands2Stat": "CritRateBase",
    //         "Hands2Value": 0.09395999999999999,
    //         "Hands3Stat": "CritDamageBase",
    //         "Hands3Value": 0.1296,
    //         "Hands4Stat": "DamageBreak",
    //         "Hands4Value": 0.11664,
    //         "BodyMain": "CritDamageBase",
    //         "Body1Stat": "DEF%",
    //         "Body1Value": 0.1512,
    //         "Body2Stat": "SPDFlat",
    //         "Body2Value": 7.2,
    //         "Body3Stat": "CritRateBase",
    //         "Body3Value": 0.0324,
    //         "Body4Stat": "DamageBreak",
    //         "Body4Value": 0.0648,
    //         "FeetMain": "SPDFlat",
    //         "Feet1Stat": "HPFlat",
    //         "Feet1Value": 84.67510000000001,
    //         "Feet2Stat": "DEF%",
    //         "Feet2Value": 0.14579999999999999,
    //         "Feet3Stat": "CritRateBase",
    //         "Feet3Value": 0.05184,
    //         "Feet4Stat": "DamageBreak",
    //         "Feet4Value": 0.11016,
    //         "SphereMain": "DamageLightning",
    //         "Sphere1Stat": "HP%",
    //         "Sphere1Value": 0.08208,
    //         "Sphere2Stat": "ATK%",
    //         "Sphere2Value": 0.03888,
    //         "Sphere3Stat": "SPDFlat",
    //         "Sphere3Value": 4.3,
    //         "Sphere4Stat": "CritDamageBase",
    //         "Sphere4Value": 0.16199999999999998,
    //         "RopeMain": "EnergyRegenRate",
    //         "Rope1Stat": "DEFFlat",
    //         "Rope1Value": 35.986915,
    //         "Rope2Stat": "CritRateBase",
    //         "Rope2Value": 0.05832,
    //         "Rope3Stat": "CritDamageBase",
    //         "Rope3Value": 0.15552,
    //         "Rope4Stat": "EffectHitRate",
    //         "Rope4Value": 0.0432,
    //         "conditions": {
    //             "hasEnhancedState": false,
    //             "Skill": {
    //                 "type": "OR",
    //                 "array": [
    //                     {
    //                         "type": "Buff",
    //                         "target": "char1",
    //                         "targetType": "Character",
    //                         "buffName": "Bondmate [Empyreanity]",
    //                         "state": false
    //                     },
    //                     {
    //                         "type": "Sustain Checks",
    //                         "sustainValue": "Any Ally: Has no Shield"
    //                     }
    //                 ]
    //             },
    //             "validTargetChecks": [
    //                 "Skill"
    //             ],
    //             "SkillTarget": {
    //                 "type": "Target Priority",
    //                 "array": [
    //                     {
    //                         "type": "TARGET CHECK",
    //                         "array": [
    //                             {
    //                                 "type": "TARGET",
    //                                 "array": [
    //                                     {
    //                                         "type": "Filter Ally",
    //                                         "target": "char1",
    //                                         "targetType": "Character"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "!=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char1",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "Self",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "type": "TARGET CHECK",
    //                         "array": [
    //                             {
    //                                 "type": "TARGET",
    //                                 "array": [
    //                                     {
    //                                         "type": "Filter Ally",
    //                                         "target": "char2",
    //                                         "targetType": "Character"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "AND",
    //                                 "array": []
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             },
    //             "Ultimate": {
    //                 "type": "AND",
    //                 "array": []
    //             }
    //         },
    //         "disabled": true,
    //         "stats": {},
    //         "order": []
    //     }
    // }


    // {
    //     "char1": {
    //         "name": "Black Swan",
    //         "rank": 0,
    //         "lineup": 1,
    //         "lcName": "Reforged Remembrance",
    //         "lcRank": 1,
    //         "2pc": "Prisoner in Deep Confinement",
    //         "4pc": "Prisoner in Deep Confinement",
    //         "planar": "Pan-Cosmic Commercial Enterprise",
    //         "HeadMain": "HPFlat",
    //         "Head1Stat": "ATKFlat",
    //         "Head1Value": 16.935019,
    //         "Head2Stat": "SPDFlat",
    //         "Head2Value": 7,
    //         "Head3Stat": "EffectHitRate",
    //         "Head3Value": 0.07344,
    //         "Head4Stat": "EffectRES",
    //         "Head4Value": 0.12096,
    //         "HandsMain": "ATKFlat",
    //         "Hands1Stat": "ATK%",
    //         "Hands1Value": 0.0432,
    //         "Hands2Stat": "SPDFlat",
    //         "Hands2Value": 4,
    //         "Hands3Stat": "EffectHitRate",
    //         "Hands3Value": 0.12096,
    //         "Hands4Stat": "DamageBreak",
    //         "Hands4Value": 0.11016,
    //         "BodyMain": "ATK%",
    //         "Body1Stat": "DEFFlat",
    //         "Body1Value": 35.986912,
    //         "Body2Stat": "HP%",
    //         "Body2Value": 0.03888,
    //         "Body3Stat": "DEF%",
    //         "Body3Value": 0.054,
    //         "Body4Stat": "EffectHitRate",
    //         "Body4Value": 0.15984,
    //         "FeetMain": "SPDFlat",
    //         "Feet1Stat": "DEFFlat",
    //         "Feet1Value": 21.168773,
    //         "Feet2Stat": "ATK%",
    //         "Feet2Value": 0.03888,
    //         "Feet3Stat": "EffectHitRate",
    //         "Feet3Value": 0.11664,
    //         "Feet4Stat": "DamageBreak",
    //         "Feet4Value": 0.16848,
    //         "SphereMain": "DamageWind",
    //         "Sphere1Stat": "DEFFlat",
    //         "Sphere1Value": 59.272559,
    //         "Sphere2Stat": "CritRateBase",
    //         "Sphere2Value": 0.0324,
    //         "Sphere3Stat": "EffectHitRate",
    //         "Sphere3Value": 0.07344,
    //         "Sphere4Stat": "EffectRES",
    //         "Sphere4Value": 0.07776,
    //         "RopeMain": "ATK%",
    //         "Rope1Stat": "HPFlat",
    //         "Rope1Value": 110.07763,
    //         "Rope2Stat": "DEF%",
    //         "Rope2Value": 0.0972,
    //         "Rope3Stat": "CritDamageBase",
    //         "Rope3Value": 0.11664,
    //         "Rope4Stat": "EffectHitRate",
    //         "Rope4Value": 0.0864,
    //         "disabled": false,
    //         "stats": {},
    //         "order": [],
    //         "conditions": {
    //             "hasEnhancedState": false,
    //             "Skill": {
    //                 "type": "AND",
    //                 "array": [
    //                     {
    //                         "type": "Turn",
    //                         "target": "Self",
    //                         "targetType": "Character",
    //                         "phase": "Any Part",
    //                         "state": true
    //                     }
    //                 ]
    //             },
    //             "Ultimate": {
    //                 "type": "AND",
    //                 "array": [
    //                     {
    //                         "type": "Turn",
    //                         "target": "Self",
    //                         "targetType": "Character",
    //                         "phase": "Any Part",
    //                         "state": true
    //                     }
    //                 ]
    //             }
    //         }
    //     },
    //     "char2": {
    //         "name": "Kafka",
    //         "rank": 0,
    //         "lineup": 1,
    //         "lcName": "Before the Tutorial Mission Starts",
    //         "lcRank": 5,
    //         "2pc": "Eagle of Twilight Line",
    //         "4pc": "Eagle of Twilight Line",
    //         "planar": "Lushaka, the Sunken Seas",
    //         "HeadMain": "HPFlat",
    //         "Head1Stat": "ATKFlat",
    //         "Head1Value": 21.168773,
    //         "Head2Stat": "HP%",
    //         "Head2Value": 0.11232,
    //         "Head3Stat": "SPDFlat",
    //         "Head3Value": 7,
    //         "Head4Stat": "CritRateBase",
    //         "Head4Value": 0.06156,
    //         "HandsMain": "ATKFlat",
    //         "Hands1Stat": "HPFlat",
    //         "Hands1Value": 80.441345,
    //         "Hands2Stat": "SPDFlat",
    //         "Hands2Value": 7,
    //         "Hands3Stat": "CritDamageBase",
    //         "Hands3Value": 0.1296,
    //         "Hands4Stat": "EffectRES",
    //         "Hands4Value": 0.07776,
    //         "BodyMain": "ATK%",
    //         "Body1Stat": "HP%",
    //         "Body1Value": 0.07776,
    //         "Body2Stat": "DEF%",
    //         "Body2Value": 0.0918,
    //         "Body3Stat": "SPDFlat",
    //         "Body3Value": 8,
    //         "Body4Stat": "EffectRES",
    //         "Body4Value": 0.0432,
    //         "FeetMain": "SPDFlat",
    //         "Feet1Stat": "ATKFlat",
    //         "Feet1Value": 40.220666,
    //         "Feet2Stat": "CritRateBase",
    //         "Feet2Value": 0.081,
    //         "Feet3Stat": "EffectHitRate",
    //         "Feet3Value": 0.0864,
    //         "Feet4Stat": "DamageBreak",
    //         "Feet4Value": 0.0648,
    //         "SphereMain": "DamageLightning",
    //         "Sphere1Stat": "HPFlat",
    //         "Sphere1Value": 71.973835,
    //         "Sphere2Stat": "HP%",
    //         "Sphere2Value": 0.12096,
    //         "Sphere3Stat": "SPDFlat",
    //         "Sphere3Value": 4,
    //         "Sphere4Stat": "EffectHitRate",
    //         "Sphere4Value": 0.06912,
    //         "RopeMain": "EnergyRegenRate",
    //         "Rope1Stat": "ATK%",
    //         "Rope1Value": 0.03888,
    //         "Rope2Stat": "SPDFlat",
    //         "Rope2Value": 9,
    //         "Rope3Stat": "EffectHitRate",
    //         "Rope3Value": 0.07344,
    //         "Rope4Stat": "DamageBreak",
    //         "Rope4Value": 0.05184,
    //         "disabled": false,
    //         "stats": {},
    //         "order": [],
    //         "conditions": {
    //             "hasEnhancedState": false,
    //             "Skill": {
    //                 "type": "AND",
    //                 "array": []
    //             },
    //             "Ultimate": {
    //                 "type": "COMPARE",
    //                 "comparison": "<",
    //                 "array": [
    //                     {
    //                         "type": "Character: Special Value",
    //                         "target": "Self",
    //                         "specialValue": "fuaStacks",
    //                         "isBattleValue": true
    //                     },
    //                     {
    //                         "type": "User Value: Number",
    //                         "inputValue": 2
    //                     }
    //                 ]
    //             }
    //         }
    //     },
    //     "char3": {
    //         "name": "Dan Heng • Permansor Terrae",
    //         "rank": 0,
    //         "lineup": 1,
    //         "lcName": "Though Worlds Apart",
    //         "lcRank": 1,
    //         "2pc": "Self-Enshrouded Recluse",
    //         "4pc": "Self-Enshrouded Recluse",
    //         "planar": "Lushaka, the Sunken Seas",
    //         "HeadMain": "HPFlat",
    //         "Head1Stat": "ATKFlat",
    //         "Head1Value": 52.921928,
    //         "Head2Stat": "DEFFlat",
    //         "Head2Value": 19.051896,
    //         "Head3Stat": "HP%",
    //         "Head3Value": 0.03888,
    //         "Head4Stat": "SPDFlat",
    //         "Head4Value": 6,
    //         "HandsMain": "ATKFlat",
    //         "Hands1Stat": "HP%",
    //         "Hands1Value": 0.08208,
    //         "Hands2Stat": "SPDFlat",
    //         "Hands2Value": 9,
    //         "Hands3Stat": "EffectHitRate",
    //         "Hands3Value": 0.0432,
    //         "Hands4Stat": "DamageBreak",
    //         "Hands4Value": 0.05184,
    //         "BodyMain": "ATK%",
    //         "Body1Stat": "ATKFlat",
    //         "Body1Value": 38.103789,
    //         "Body2Stat": "DEF%",
    //         "Body2Value": 0.1026,
    //         "Body3Stat": "SPDFlat",
    //         "Body3Value": 9,
    //         "Body4Stat": "EffectRES",
    //         "Body4Value": 0.03456,
    //         "FeetMain": "ATK%",
    //         "Feet1Stat": "DEF%",
    //         "Feet1Value": 0.1512,
    //         "Feet2Stat": "SPDFlat",
    //         "Feet2Value": 4,
    //         "Feet3Stat": "EffectRES",
    //         "Feet3Value": 0.07344,
    //         "Feet4Stat": "DamageBreak",
    //         "Feet4Value": 0.05832,
    //         "SphereMain": "ATK%",
    //         "Sphere1Stat": "DEF%",
    //         "Sphere1Value": 0.054,
    //         "Sphere2Stat": "SPDFlat",
    //         "Sphere2Value": 6,
    //         "Sphere3Stat": "EffectRES",
    //         "Sphere3Value": 0.07776,
    //         "Sphere4Stat": "HP%",
    //         "Sphere4Value": 0.07344,
    //         "RopeMain": "ATK%",
    //         "Rope1Stat": "ATKFlat",
    //         "Rope1Value": 57.155682,
    //         "Rope2Stat": "CritRateBase",
    //         "Rope2Value": 0.07776,
    //         "Rope3Stat": "CritDamageBase",
    //         "Rope3Value": 0.05184,
    //         "Rope4Stat": "DamageBreak",
    //         "Rope4Value": 0.05184,
    //         "conditions": {
    //             "hasEnhancedState": false,
    //             "Skill": {
    //                 "type": "OR",
    //                 "array": [
    //                     {
    //                         "type": "Buff",
    //                         "target": "char1",
    //                         "targetType": "Character",
    //                         "buffName": "Bondmate [Empyreanity]",
    //                         "state": false
    //                     },
    //                     {
    //                         "type": "Sustain Checks",
    //                         "sustainValue": "Any Ally: Has no Shield"
    //                     }
    //                 ]
    //             },
    //             "validTargetChecks": [
    //                 "Skill"
    //             ],
    //             "SkillTarget": {
    //                 "type": "Target Priority",
    //                 "array": [
    //                     {
    //                         "type": "TARGET CHECK",
    //                         "array": [
    //                             {
    //                                 "type": "TARGET",
    //                                 "array": [
    //                                     {
    //                                         "type": "Filter Ally",
    //                                         "target": "char1",
    //                                         "targetType": "Character"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "!=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char1",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "Self",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "type": "TARGET CHECK",
    //                         "array": [
    //                             {
    //                                 "type": "TARGET",
    //                                 "array": [
    //                                     {
    //                                         "type": "Filter Ally",
    //                                         "target": "char2",
    //                                         "targetType": "Character"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "AND",
    //                                 "array": []
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             },
    //             "Ultimate": {
    //                 "type": "AND",
    //                 "array": []
    //             }
    //         },
    //         "stats": {},
    //         "order": [],
    //         "disabled": false
    //     },
    //     "char4": {
    //         "name": "Hysilens",
    //         "rank": 0,
    //         "lineup": 1,
    //         "lcName": "Why Does the Ocean Sing",
    //         "lcRank": 1,
    //         "2pc": "Prisoner in Deep Confinement",
    //         "4pc": "Prisoner in Deep Confinement",
    //         "planar": "Revelry by the Sea",
    //         "HeadMain": "HPFlat",
    //         "Head1Stat": "ATK%",
    //         "Head1Value": 0.0864,
    //         "Head2Stat": "DEF%",
    //         "Head2Value": 0.0432,
    //         "Head3Stat": "SPDFlat",
    //         "Head3Value": 7,
    //         "Head4Stat": "EffectHitRate",
    //         "Head4Value": 0.0864,
    //         "HandsMain": "ATKFlat",
    //         "Hands1Stat": "ATK%",
    //         "Hands1Value": 0.07344,
    //         "Hands2Stat": "SPDFlat",
    //         "Hands2Value": 2,
    //         "Hands3Stat": "EffectHitRate",
    //         "Hands3Value": 0.11664,
    //         "Hands4Stat": "DamageBreak",
    //         "Hands4Value": 0.11664,
    //         "BodyMain": "EffectHitRate",
    //         "Body1Stat": "ATKFlat",
    //         "Body1Value": 38.103789,
    //         "Body2Stat": "DEFFlat",
    //         "Body2Value": 16.935019,
    //         "Body3Stat": "SPDFlat",
    //         "Body3Value": 6,
    //         "Body4Stat": "DamageBreak",
    //         "Body4Value": 0.18144,
    //         "FeetMain": "ATK%",
    //         "Feet1Stat": "ATKFlat",
    //         "Feet1Value": 38.103789,
    //         "Feet2Stat": "HP%",
    //         "Feet2Value": 0.0432,
    //         "Feet3Stat": "DEF%",
    //         "Feet3Value": 0.0432,
    //         "Feet4Stat": "SPDFlat",
    //         "Feet4Value": 9,
    //         "SphereMain": "DamagePhysical",
    //         "Sphere1Stat": "HPFlat",
    //         "Sphere1Value": 33.87004,
    //         "Sphere2Stat": "ATK%",
    //         "Sphere2Value": 0.11664,
    //         "Sphere3Stat": "SPDFlat",
    //         "Sphere3Value": 6,
    //         "Sphere4Stat": "DamageBreak",
    //         "Sphere4Value": 0.05832,
    //         "RopeMain": "EnergyRegenRate",
    //         "Rope1Stat": "HP%",
    //         "Rope1Value": 0.07776,
    //         "Rope2Stat": "SPDFlat",
    //         "Rope2Value": 6,
    //         "Rope3Stat": "CritDamageBase",
    //         "Rope3Value": 0.05184,
    //         "Rope4Stat": "EffectHitRate",
    //         "Rope4Value": 0.06912,
    //         "conditions": {
    //             "hasEnhancedState": false,
    //             "Skill": {
    //                 "type": "AND",
    //                 "array": [
    //                     {
    //                         "type": "Turn",
    //                         "target": "Self",
    //                         "targetType": "Character",
    //                         "phase": "Any Part",
    //                         "state": true
    //                     }
    //                 ]
    //             },
    //             "Ultimate": {
    //                 "type": "AND",
    //                 "array": [
    //                     {
    //                         "type": "Turn",
    //                         "target": "Self",
    //                         "targetType": "Character",
    //                         "phase": "Any Part",
    //                         "state": true
    //                     }
    //                 ]
    //             }
    //         },
    //         "disabled": false,
    //         "stats": {},
    //         "order": []
    //     }
    // },
    

    // {
    //     "char1": {
    //         "name": "Evanescia",
    //         "rank": 0,
    //         "lineup": 1,
    //         "lcName": "Until the Flowers Bloom Again",
    //         "lcRank": 1,
    //         "2pc": "Ever-Glorious Magical Girl",
    //         "4pc": "Ever-Glorious Magical Girl",
    //         "planar": "Punklorde Stage Zero",
    //         "HeadMain": "HPFlat",
    //         "Head1Stat": "ATK%",
    //         "Head1Value": 0.03888,
    //         "Head2Stat": "SPDFlat",
    //         "Head2Value": 2.6,
    //         "Head3Stat": "CritDamageBase",
    //         "Head3Value": 0.16199999999999998,
    //         "Head4Stat": "EffectHitRate",
    //         "Head4Value": 0.11231999999999999,
    //         "HandsMain": "ATKFlat",
    //         "Hands1Stat": "HP%",
    //         "Hands1Value": 0.07344,
    //         "Hands2Stat": "SPDFlat",
    //         "Hands2Value": 2.3,
    //         "Hands3Stat": "CritRateBase",
    //         "Hands3Value": 0.10368,
    //         "Hands4Stat": "CritDamageBase",
    //         "Hands4Value": 0.05832,
    //         "BodyMain": "CritDamageBase",
    //         "Body1Stat": "ATK%",
    //         "Body1Value": 0.12096,
    //         "Body2Stat": "DEF%",
    //         "Body2Value": 0.09720000000000001,
    //         "Body3Stat": "SPDFlat",
    //         "Body3Value": 2.6,
    //         "Body4Stat": "CritRateBase",
    //         "Body4Value": 0.05832,
    //         "FeetMain": "ATK%",
    //         "Feet1Stat": "ATKFlat",
    //         "Feet1Value": 38.103792,
    //         "Feet2Stat": "HP%",
    //         "Feet2Value": 0.07776,
    //         "Feet3Stat": "CritRateBase",
    //         "Feet3Value": 0.09072,
    //         "Feet4Stat": "EffectRES",
    //         "Feet4Value": 0.0432,
    //         "SphereMain": "ATK%",
    //         "Sphere1Stat": "SPDFlat",
    //         "Sphere1Value": 2.6,
    //         "Sphere2Stat": "CritRateBase",
    //         "Sphere2Value": 0.08424,
    //         "Sphere3Stat": "EffectHitRate",
    //         "Sphere3Value": 0.07776,
    //         "Sphere4Stat": "EffectRES",
    //         "Sphere4Value": 0.08208,
    //         "RopeMain": "EnergyRegenRate",
    //         "Rope1Stat": "ATK%",
    //         "Rope1Value": 0.0864,
    //         "Rope2Stat": "CritDamageBase",
    //         "Rope2Value": 0.11664,
    //         "Rope3Stat": "EffectHitRate",
    //         "Rope3Value": 0.07344,
    //         "Rope4Stat": "EffectRES",
    //         "Rope4Value": 0.11231999999999999,
    //         "disabled": false,
    //         "stats": {},
    //         "order": [],
    //         "conditions": {
    //             "hasEnhancedState": true,
    //             "Skill": {
    //                 "type": "AND",
    //                 "array": []
    //             },
    //             "Ultimate": {
    //                 "type": "AND",
    //                 "array": []
    //             }
    //         }
    //     },
    //     "char2": {
    //         "name": "Yao Guang",
    //         "rank": 0,
    //         "lineup": 1,
    //         "lcName": "When She Decided to See",
    //         "lcRank": 1,
    //         "2pc": "Diviner of Distant Reach",
    //         "4pc": "Diviner of Distant Reach",
    //         "planar": "Lushaka, the Sunken Seas",
    //         "HeadMain": "HPFlat",
    //         "Head1Stat": "ATKFlat",
    //         "Head1Value": 16.935019,
    //         "Head2Stat": "HP%",
    //         "Head2Value": 0.07344,
    //         "Head3Stat": "ATK%",
    //         "Head3Value": 0.03456,
    //         "Head4Stat": "SPDFlat",
    //         "Head4Value": 9.5,
    //         "HandsMain": "ATKFlat",
    //         "Hands1Stat": "DEF%",
    //         "Hands1Value": 0.048600000000000004,
    //         "Hands2Stat": "SPDFlat",
    //         "Hands2Value": 11.2,
    //         "Hands3Stat": "CritRateBase",
    //         "Hands3Value": 0.06156,
    //         "Hands4Stat": "DamageBreak",
    //         "Hands4Value": 0.05184,
    //         "BodyMain": "CritRateBase",
    //         "Body1Stat": "HPFlat",
    //         "Body1Value": 38.103795000000005,
    //         "Body2Stat": "DEFFlat",
    //         "Body2Value": 40.220669,
    //         "Body3Stat": "SPDFlat",
    //         "Body3Value": 6.9,
    //         "Body4Stat": "DamageBreak",
    //         "Body4Value": 0.12312,
    //         "FeetMain": "SPDFlat",
    //         "Feet1Stat": "DEFFlat",
    //         "Feet1Value": 50.805057000000005,
    //         "Feet2Stat": "CritRateBase",
    //         "Feet2Value": 0.02592,
    //         "Feet3Stat": "CritDamageBase",
    //         "Feet3Value": 0.11016,
    //         "Feet4Stat": "DamageBreak",
    //         "Feet4Value": 0.12312,
    //         "SphereMain": "HP%",
    //         "Sphere1Stat": "ATK%",
    //         "Sphere1Value": 0.03456,
    //         "Sphere2Stat": "SPDFlat",
    //         "Sphere2Value": 7.2,
    //         "Sphere3Stat": "CritRateBase",
    //         "Sphere3Value": 0.08748,
    //         "Sphere4Stat": "CritDamageBase",
    //         "Sphere4Value": 0.0648,
    //         "RopeMain": "EnergyRegenRate",
    //         "Rope1Stat": "ATK%",
    //         "Rope1Value": 0.08208,
    //         "Rope2Stat": "SPDFlat",
    //         "Rope2Value": 6.9,
    //         "Rope3Stat": "CritRateBase",
    //         "Rope3Value": 0.02592,
    //         "Rope4Stat": "CritDamageBase",
    //         "Rope4Value": 0.11664,
    //         "disabled": false,
    //         "stats": {},
    //         "order": [],
    //         "conditions": {
    //             "hasEnhancedState": false,
    //             "Skill": {
    //                 "type": "AND",
    //                 "array": [
    //                     {
    //                         "type": "Character: State",
    //                         "target": "Self",
    //                         "stateName": "skillZoneActive",
    //                         "state": false,
    //                         "isBattleValue": true
    //                     }
    //                 ]
    //             },
    //             "Ultimate": {
    //                 "type": "AND",
    //                 "array": []
    //             }
    //         }
    //     },
    //     "char3": {
    //         "name": "Huohuo",
    //         "rank": 1,
    //         "lineup": 1,
    //         "lcName": "Night of Fright",
    //         "lcRank": 1,
    //         "2pc": "Messenger Traversing Hackerspace",
    //         "4pc": "Sacerdos' Relived Ordeal",
    //         "planar": "Broken Keel",
    //         "HeadMain": "HPFlat",
    //         "Head1Stat": "DEFFlat",
    //         "Head1Value": 19.051896,
    //         "Head2Stat": "HP%",
    //         "Head2Value": 0.08208,
    //         "Head3Stat": "SPDFlat",
    //         "Head3Value": 6.6,
    //         "Head4Stat": "EffectRES",
    //         "Head4Value": 0.07344,
    //         "HandsMain": "ATKFlat",
    //         "Hands1Stat": "HPFlat",
    //         "Hands1Value": 33.87004,
    //         "Hands2Stat": "HP%",
    //         "Hands2Value": 0.0432,
    //         "Hands3Stat": "DEF%",
    //         "Hands3Value": 0.189,
    //         "Hands4Stat": "SPDFlat",
    //         "Hands4Value": 6.3,
    //         "BodyMain": "HP%",
    //         "Body1Stat": "ATKFlat",
    //         "Body1Value": 35.986915,
    //         "Body2Stat": "SPDFlat",
    //         "Body2Value": 4.3,
    //         "Body3Stat": "CritDamageBase",
    //         "Body3Value": 0.05184,
    //         "Body4Stat": "EffectHitRate",
    //         "Body4Value": 0.11231999999999999,
    //         "FeetMain": "SPDFlat",
    //         "Feet1Stat": "ATK%",
    //         "Feet1Value": 0.03888,
    //         "Feet2Stat": "EffectHitRate",
    //         "Feet2Value": 0.07776,
    //         "Feet3Stat": "EffectRES",
    //         "Feet3Value": 0.11231999999999999,
    //         "Feet4Stat": "DamageBreak",
    //         "Feet4Value": 0.11664,
    //         "SphereMain": "HP%",
    //         "Sphere1Stat": "HPFlat",
    //         "Sphere1Value": 42.33755000000001,
    //         "Sphere2Stat": "ATKFlat",
    //         "Sphere2Value": 40.220669,
    //         "Sphere3Stat": "ATK%",
    //         "Sphere3Value": 0.108,
    //         "Sphere4Stat": "EffectRES",
    //         "Sphere4Value": 0.07776,
    //         "RopeMain": "EnergyRegenRate",
    //         "Rope1Stat": "HPFlat",
    //         "Rope1Value": 42.33755000000001,
    //         "Rope2Stat": "DEFFlat",
    //         "Rope2Value": 52.92193400000001,
    //         "Rope3Stat": "HP%",
    //         "Rope3Value": 0.08208,
    //         "Rope4Stat": "EffectRES",
    //         "Rope4Value": 0.07776,
    //         "conditions": {
    //             "hasEnhancedState": false,
    //             "Skill": {
    //                 "type": "OR",
    //                 "array": [
    //                     {
    //                         "type": "Character: State",
    //                         "target": "Self",
    //                         "stateName": "talentProvisionIsActive",
    //                         "state": false
    //                     },
    //                     {
    //                         "type": "Sustain Checks",
    //                         "sustainValue": "Any Ally: HP <= 50%"
    //                     }
    //                 ]
    //             },
    //             "validTargetChecks": [
    //                 "Skill"
    //             ],
    //             "Ultimate": {
    //                 "type": "AND",
    //                 "array": [
    //                     {
    //                         "type": "OR",
    //                         "array": [
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char1",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "Self",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char1",
    //                                         "targetType": "Character",
    //                                         "characterValue": "maxEnergy"
    //                                     },
    //                                     {
    //                                         "type": "User Value: Number",
    //                                         "inputValue": 0
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char1",
    //                                         "targetType": "Character",
    //                                         "characterValue": "currentEnergy"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char1",
    //                                         "targetType": "Character",
    //                                         "characterValue": "maxEnergy"
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "type": "OR",
    //                         "array": [
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char2",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "Self",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char2",
    //                                         "targetType": "Character",
    //                                         "characterValue": "maxEnergy"
    //                                     },
    //                                     {
    //                                         "type": "User Value: Number",
    //                                         "inputValue": 0
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char2",
    //                                         "targetType": "Character",
    //                                         "characterValue": "currentEnergy"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char2",
    //                                         "targetType": "Character",
    //                                         "characterValue": "maxEnergy"
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "type": "OR",
    //                         "array": [
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char3",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "Self",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char3",
    //                                         "targetType": "Character",
    //                                         "characterValue": "maxEnergy"
    //                                     },
    //                                     {
    //                                         "type": "User Value: Number",
    //                                         "inputValue": 0
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char3",
    //                                         "targetType": "Character",
    //                                         "characterValue": "currentEnergy"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char3",
    //                                         "targetType": "Character",
    //                                         "characterValue": "maxEnergy"
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "type": "OR",
    //                         "array": [
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char4",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "Self",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char4",
    //                                         "targetType": "Character",
    //                                         "characterValue": "maxEnergy"
    //                                     },
    //                                     {
    //                                         "type": "User Value: Number",
    //                                         "inputValue": 0
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char4",
    //                                         "targetType": "Character",
    //                                         "characterValue": "currentEnergy"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char4",
    //                                         "targetType": "Character",
    //                                         "characterValue": "maxEnergy"
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             },
    //             "SkillTarget": {
    //                 "type": "Target Priority",
    //                 "array": [
    //                     {
    //                         "type": "TARGET CHECK",
    //                         "array": [
    //                             {
    //                                 "type": "TARGET",
    //                                 "array": [
    //                                     {
    //                                         "type": "Healing Presets",
    //                                         "statName": "Maximize Blast Healing"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "AND",
    //                                 "array": []
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         },
    //         "stats": {},
    //         "order": [],
    //         "disabled": false
    //     },
    //     "char4": {
    //         "name": "Trailblazer - Elation",
    //         "rank": 6,
    //         "lineup": 1,
    //         "lcName": "Elation Brimming With Blessings",
    //         "lcRank": 5,
    //         "2pc": "Diviner of Distant Reach",
    //         "4pc": "Diviner of Distant Reach",
    //         "planar": "Lushaka, the Sunken Seas",
    //         "HeadMain": "HPFlat",
    //         "Head1Stat": "HP%",
    //         "Head1Value": 0.07344,
    //         "Head2Stat": "ATK%",
    //         "Head2Value": 0.07776,
    //         "Head3Stat": "SPDFlat",
    //         "Head3Value": 5.2,
    //         "Head4Stat": "CritRateBase",
    //         "Head4Value": 0.09072,
    //         "HandsMain": "ATKFlat",
    //         "Hands1Stat": "SPDFlat",
    //         "Hands1Value": 2,
    //         "Hands2Stat": "CritRateBase",
    //         "Hands2Value": 0.09395999999999999,
    //         "Hands3Stat": "CritDamageBase",
    //         "Hands3Value": 0.1296,
    //         "Hands4Stat": "DamageBreak",
    //         "Hands4Value": 0.11664,
    //         "BodyMain": "CritDamageBase",
    //         "Body1Stat": "DEF%",
    //         "Body1Value": 0.1512,
    //         "Body2Stat": "SPDFlat",
    //         "Body2Value": 7.2,
    //         "Body3Stat": "CritRateBase",
    //         "Body3Value": 0.0324,
    //         "Body4Stat": "DamageBreak",
    //         "Body4Value": 0.0648,
    //         "FeetMain": "SPDFlat",
    //         "Feet1Stat": "HPFlat",
    //         "Feet1Value": 84.67510000000001,
    //         "Feet2Stat": "DEF%",
    //         "Feet2Value": 0.14579999999999999,
    //         "Feet3Stat": "CritRateBase",
    //         "Feet3Value": 0.05184,
    //         "Feet4Stat": "DamageBreak",
    //         "Feet4Value": 0.11016,
    //         "SphereMain": "DamageLightning",
    //         "Sphere1Stat": "HP%",
    //         "Sphere1Value": 0.08208,
    //         "Sphere2Stat": "ATK%",
    //         "Sphere2Value": 0.03888,
    //         "Sphere3Stat": "SPDFlat",
    //         "Sphere3Value": 4.3,
    //         "Sphere4Stat": "CritDamageBase",
    //         "Sphere4Value": 0.16199999999999998,
    //         "RopeMain": "EnergyRegenRate",
    //         "Rope1Stat": "DEFFlat",
    //         "Rope1Value": 35.986915,
    //         "Rope2Stat": "CritRateBase",
    //         "Rope2Value": 0.05832,
    //         "Rope3Stat": "CritDamageBase",
    //         "Rope3Value": 0.15552,
    //         "Rope4Stat": "EffectHitRate",
    //         "Rope4Value": 0.0432,
    //         "conditions": {
    //             "hasEnhancedState": false,
    //             "validTargetChecks": [
    //                 "Ultimate"
    //             ],
    //             "Skill": {
    //                 "type": "AND",
    //                 "array": []
    //             },
    //             "Ultimate": {
    //                 "type": "AND",
    //                 "array": []
    //             },
    //             "UltimateTarget": {
    //                 "type": "Target Priority",
    //                 "array": [
    //                     {
    //                         "type": "TARGET CHECK",
    //                         "array": [
    //                             {
    //                                 "type": "TARGET",
    //                                 "array": [
    //                                     {
    //                                         "type": "Filter Ally",
    //                                         "target": "char1",
    //                                         "targetType": "Character"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "!=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char1",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "Self",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "type": "TARGET CHECK",
    //                         "array": [
    //                             {
    //                                 "type": "TARGET",
    //                                 "array": [
    //                                     {
    //                                         "type": "Filter Ally",
    //                                         "target": "char2",
    //                                         "targetType": "Character"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "AND",
    //                                 "array": []
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         },
    //         "disabled": false,
    //         "stats": {},
    //         "order": []
    //     }
    // },

}

// {
    //     "char1": {
    //         "name": "Silver Wolf LV.999",
    //         "rank": 0,
    //         "lineup": 1,
    //         "lcName": "Welcome to the Cosmic City",
    //         "lcRank": 1,
    //         "2pc": "Ever-Glorious Magical Girl",
    //         "4pc": "Ever-Glorious Magical Girl",
    //         "planar": "Punklorde Stage Zero",
    //         "HeadMain": "HPFlat",
    //         "Head1Stat": "DEFFlat",
    //         "Head1Value": 40.220669,
    //         "Head2Stat": "SPDFlat",
    //         "Head2Value": 6.9,
    //         "Head3Stat": "CritRateBase",
    //         "Head3Value": 0.02916,
    //         "Head4Stat": "DamageBreak",
    //         "Head4Value": 0.12312,
    //         "HandsMain": "ATKFlat",
    //         "Hands1Stat": "SPDFlat",
    //         "Hands1Value": 6.9,
    //         "Hands2Stat": "CritDamageBase",
    //         "Hands2Value": 0.24624,
    //         "Hands3Stat": "EffectHitRate",
    //         "Hands3Value": 0.03888,
    //         "Hands4Stat": "EffectRES",
    //         "Hands4Value": 0.03456,
    //         "BodyMain": "CritRateBase",
    //         "Body1Stat": "DEFFlat",
    //         "Body1Value": 57.155688000000005,
    //         "Body2Stat": "SPDFlat",
    //         "Body2Value": 4,
    //         "Body3Stat": "CritDamageBase",
    //         "Body3Value": 0.12312,
    //         "Body4Stat": "DamageBreak",
    //         "Body4Value": 0.12312,
    //         "FeetMain": "SPDFlat",
    //         "Feet1Stat": "ATKFlat",
    //         "Feet1Value": 21.168773,
    //         "Feet2Stat": "HP%",
    //         "Feet2Value": 0.03456,
    //         "Feet3Stat": "CritRateBase",
    //         "Feet3Value": 0.11664,
    //         "Feet4Stat": "CritDamageBase",
    //         "Feet4Value": 0.1296,
    //         "SphereMain": "HP%",
    //         "Sphere1Stat": "HPFlat",
    //         "Sphere1Value": 38.103795000000005,
    //         "Sphere2Stat": "ATKFlat",
    //         "Sphere2Value": 57.155688000000005,
    //         "Sphere3Stat": "SPDFlat",
    //         "Sphere3Value": 7.2,
    //         "Sphere4Stat": "CritRateBase",
    //         "Sphere4Value": 0.02592,
    //         "RopeMain": "HP%",
    //         "Rope1Stat": "HPFlat",
    //         "Rope1Value": 33.87004,
    //         "Rope2Stat": "DEF%",
    //         "Rope2Value": 0.048600000000000004,
    //         "Rope3Stat": "SPDFlat",
    //         "Rope3Value": 6.6,
    //         "Rope4Stat": "CritRateBase",
    //         "Rope4Value": 0.08748,
    //         "disabled": false,
    //         "stats": {},
    //         "order": [],
    //         "conditions": {
    //             "hasEnhancedState": true,
    //             "Skill": {
    //                 "type": "AND",
    //                 "array": []
    //             },
    //             "Ultimate": {
    //                 "type": "AND",
    //                 "array": []
    //             }
    //         }
    //     },
    //     "char2": {
    //         "name": "Yao Guang",
    //         "rank": 0,
    //         "lineup": 1,
    //         "lcName": "When She Decided to See",
    //         "lcRank": 1,
    //         "2pc": "Diviner of Distant Reach",
    //         "4pc": "Diviner of Distant Reach",
    //         "planar": "Lushaka, the Sunken Seas",
    //         "HeadMain": "HPFlat",
    //         "Head1Stat": "ATKFlat",
    //         "Head1Value": 16.935019,
    //         "Head2Stat": "HP%",
    //         "Head2Value": 0.07344,
    //         "Head3Stat": "ATK%",
    //         "Head3Value": 0.03456,
    //         "Head4Stat": "SPDFlat",
    //         "Head4Value": 9.5,
    //         "HandsMain": "ATKFlat",
    //         "Hands1Stat": "DEF%",
    //         "Hands1Value": 0.048600000000000004,
    //         "Hands2Stat": "SPDFlat",
    //         "Hands2Value": 11.2,
    //         "Hands3Stat": "CritRateBase",
    //         "Hands3Value": 0.06156,
    //         "Hands4Stat": "DamageBreak",
    //         "Hands4Value": 0.05184,
    //         "BodyMain": "CritRateBase",
    //         "Body1Stat": "HPFlat",
    //         "Body1Value": 38.103795000000005,
    //         "Body2Stat": "DEFFlat",
    //         "Body2Value": 40.220669,
    //         "Body3Stat": "SPDFlat",
    //         "Body3Value": 6.9,
    //         "Body4Stat": "DamageBreak",
    //         "Body4Value": 0.12312,
    //         "FeetMain": "SPDFlat",
    //         "Feet1Stat": "DEFFlat",
    //         "Feet1Value": 50.805057000000005,
    //         "Feet2Stat": "CritRateBase",
    //         "Feet2Value": 0.02592,
    //         "Feet3Stat": "CritDamageBase",
    //         "Feet3Value": 0.11016,
    //         "Feet4Stat": "DamageBreak",
    //         "Feet4Value": 0.12312,
    //         "SphereMain": "HP%",
    //         "Sphere1Stat": "ATK%",
    //         "Sphere1Value": 0.03456,
    //         "Sphere2Stat": "SPDFlat",
    //         "Sphere2Value": 7.2,
    //         "Sphere3Stat": "CritRateBase",
    //         "Sphere3Value": 0.08748,
    //         "Sphere4Stat": "CritDamageBase",
    //         "Sphere4Value": 0.0648,
    //         "RopeMain": "EnergyRegenRate",
    //         "Rope1Stat": "ATK%",
    //         "Rope1Value": 0.08208,
    //         "Rope2Stat": "SPDFlat",
    //         "Rope2Value": 6.9,
    //         "Rope3Stat": "CritRateBase",
    //         "Rope3Value": 0.02592,
    //         "Rope4Stat": "CritDamageBase",
    //         "Rope4Value": 0.11664,
    //         "disabled": true,
    //         "stats": {},
    //         "order": [],
    //         "conditions": {
    //             "hasEnhancedState": false,
    //             "Skill": {
    //                 "type": "AND",
    //                 "array": [
    //                     {
    //                         "type": "Character: State",
    //                         "target": "Self",
    //                         "stateName": "skillZoneActive",
    //                         "state": false,
    //                         "isBattleValue": true
    //                     }
    //                 ]
    //             },
    //             "Ultimate": {
    //                 "type": "AND",
    //                 "array": []
    //             }
    //         }
    //     },
    //     "char3": {
    //         "name": "Huohuo",
    //         "rank": 1,
    //         "lineup": 1,
    //         "lcName": "Night of Fright",
    //         "lcRank": 1,
    //         "2pc": "Messenger Traversing Hackerspace",
    //         "4pc": "Sacerdos' Relived Ordeal",
    //         "planar": "Broken Keel",
    //         "HeadMain": "HPFlat",
    //         "Head1Stat": "DEFFlat",
    //         "Head1Value": 19.051896,
    //         "Head2Stat": "HP%",
    //         "Head2Value": 0.08208,
    //         "Head3Stat": "SPDFlat",
    //         "Head3Value": 6.6,
    //         "Head4Stat": "EffectRES",
    //         "Head4Value": 0.07344,
    //         "HandsMain": "ATKFlat",
    //         "Hands1Stat": "HPFlat",
    //         "Hands1Value": 33.87004,
    //         "Hands2Stat": "HP%",
    //         "Hands2Value": 0.0432,
    //         "Hands3Stat": "DEF%",
    //         "Hands3Value": 0.189,
    //         "Hands4Stat": "SPDFlat",
    //         "Hands4Value": 6.3,
    //         "BodyMain": "HP%",
    //         "Body1Stat": "ATKFlat",
    //         "Body1Value": 35.986915,
    //         "Body2Stat": "SPDFlat",
    //         "Body2Value": 4.3,
    //         "Body3Stat": "CritDamageBase",
    //         "Body3Value": 0.05184,
    //         "Body4Stat": "EffectHitRate",
    //         "Body4Value": 0.11231999999999999,
    //         "FeetMain": "SPDFlat",
    //         "Feet1Stat": "ATK%",
    //         "Feet1Value": 0.03888,
    //         "Feet2Stat": "EffectHitRate",
    //         "Feet2Value": 0.07776,
    //         "Feet3Stat": "EffectRES",
    //         "Feet3Value": 0.11231999999999999,
    //         "Feet4Stat": "DamageBreak",
    //         "Feet4Value": 0.11664,
    //         "SphereMain": "HP%",
    //         "Sphere1Stat": "HPFlat",
    //         "Sphere1Value": 42.33755000000001,
    //         "Sphere2Stat": "ATKFlat",
    //         "Sphere2Value": 40.220669,
    //         "Sphere3Stat": "ATK%",
    //         "Sphere3Value": 0.108,
    //         "Sphere4Stat": "EffectRES",
    //         "Sphere4Value": 0.07776,
    //         "RopeMain": "EnergyRegenRate",
    //         "Rope1Stat": "HPFlat",
    //         "Rope1Value": 42.33755000000001,
    //         "Rope2Stat": "DEFFlat",
    //         "Rope2Value": 52.92193400000001,
    //         "Rope3Stat": "HP%",
    //         "Rope3Value": 0.08208,
    //         "Rope4Stat": "EffectRES",
    //         "Rope4Value": 0.07776,
    //         "conditions": {
    //             "hasEnhancedState": false,
    //             "Skill": {
    //                 "type": "OR",
    //                 "array": [
    //                     {
    //                         "type": "Character: State",
    //                         "target": "Self",
    //                         "stateName": "talentProvisionIsActive",
    //                         "state": false
    //                     },
    //                     {
    //                         "type": "Sustain Checks",
    //                         "sustainValue": "Any Ally: HP <= 50%"
    //                     }
    //                 ]
    //             },
    //             "validTargetChecks": [
    //                 "Skill"
    //             ],
    //             "Ultimate": {
    //                 "type": "AND",
    //                 "array": [
    //                     {
    //                         "type": "OR",
    //                         "array": [
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char1",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "Self",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char1",
    //                                         "targetType": "Character",
    //                                         "characterValue": "maxEnergy"
    //                                     },
    //                                     {
    //                                         "type": "User Value: Number",
    //                                         "inputValue": 0
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "!=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char1",
    //                                         "targetType": "Character",
    //                                         "characterValue": "currentEnergy"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char1",
    //                                         "targetType": "Character",
    //                                         "characterValue": "maxEnergy"
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "type": "OR",
    //                         "array": [
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char2",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "Self",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char2",
    //                                         "targetType": "Character",
    //                                         "characterValue": "maxEnergy"
    //                                     },
    //                                     {
    //                                         "type": "User Value: Number",
    //                                         "inputValue": 0
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "!=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char2",
    //                                         "targetType": "Character",
    //                                         "characterValue": "currentEnergy"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char2",
    //                                         "targetType": "Character",
    //                                         "characterValue": "maxEnergy"
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "type": "OR",
    //                         "array": [
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char3",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "Self",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char3",
    //                                         "targetType": "Character",
    //                                         "characterValue": "maxEnergy"
    //                                     },
    //                                     {
    //                                         "type": "User Value: Number",
    //                                         "inputValue": 0
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "!=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char3",
    //                                         "targetType": "Character",
    //                                         "characterValue": "currentEnergy"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char3",
    //                                         "targetType": "Character",
    //                                         "characterValue": "maxEnergy"
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "type": "OR",
    //                         "array": [
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char4",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "Self",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char4",
    //                                         "targetType": "Character",
    //                                         "characterValue": "maxEnergy"
    //                                     },
    //                                     {
    //                                         "type": "User Value: Number",
    //                                         "inputValue": 0
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "!=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char4",
    //                                         "targetType": "Character",
    //                                         "characterValue": "currentEnergy"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char4",
    //                                         "targetType": "Character",
    //                                         "characterValue": "maxEnergy"
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             },
    //             "SkillTarget": {
    //                 "type": "Target Priority",
    //                 "array": [
    //                     {
    //                         "type": "TARGET CHECK",
    //                         "array": [
    //                             {
    //                                 "type": "TARGET",
    //                                 "array": [
    //                                     {
    //                                         "type": "Healing Presets",
    //                                         "statName": "Maximize Blast Healing"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "AND",
    //                                 "array": []
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         },
    //         "stats": {},
    //         "order": [],
    //         "disabled": true
    //     },
    //     "char4": {
    //         "name": "Trailblazer - Elation",
    //         "rank": 6,
    //         "lineup": 1,
    //         "lcName": "Elation Brimming With Blessings",
    //         "lcRank": 5,
    //         "2pc": "Diviner of Distant Reach",
    //         "4pc": "Diviner of Distant Reach",
    //         "planar": "Lushaka, the Sunken Seas",
    //         "HeadMain": "HPFlat",
    //         "Head1Stat": "HP%",
    //         "Head1Value": 0.07344,
    //         "Head2Stat": "ATK%",
    //         "Head2Value": 0.07776,
    //         "Head3Stat": "SPDFlat",
    //         "Head3Value": 5.2,
    //         "Head4Stat": "CritRateBase",
    //         "Head4Value": 0.09072,
    //         "HandsMain": "ATKFlat",
    //         "Hands1Stat": "SPDFlat",
    //         "Hands1Value": 2,
    //         "Hands2Stat": "CritRateBase",
    //         "Hands2Value": 0.09395999999999999,
    //         "Hands3Stat": "CritDamageBase",
    //         "Hands3Value": 0.1296,
    //         "Hands4Stat": "DamageBreak",
    //         "Hands4Value": 0.11664,
    //         "BodyMain": "CritDamageBase",
    //         "Body1Stat": "DEF%",
    //         "Body1Value": 0.1512,
    //         "Body2Stat": "SPDFlat",
    //         "Body2Value": 7.2,
    //         "Body3Stat": "CritRateBase",
    //         "Body3Value": 0.0324,
    //         "Body4Stat": "DamageBreak",
    //         "Body4Value": 0.0648,
    //         "FeetMain": "SPDFlat",
    //         "Feet1Stat": "HPFlat",
    //         "Feet1Value": 84.67510000000001,
    //         "Feet2Stat": "DEF%",
    //         "Feet2Value": 0.14579999999999999,
    //         "Feet3Stat": "CritRateBase",
    //         "Feet3Value": 0.05184,
    //         "Feet4Stat": "DamageBreak",
    //         "Feet4Value": 0.11016,
    //         "SphereMain": "DamageLightning",
    //         "Sphere1Stat": "HP%",
    //         "Sphere1Value": 0.08208,
    //         "Sphere2Stat": "ATK%",
    //         "Sphere2Value": 0.03888,
    //         "Sphere3Stat": "SPDFlat",
    //         "Sphere3Value": 4.3,
    //         "Sphere4Stat": "CritDamageBase",
    //         "Sphere4Value": 0.16199999999999998,
    //         "RopeMain": "EnergyRegenRate",
    //         "Rope1Stat": "DEFFlat",
    //         "Rope1Value": 35.986915,
    //         "Rope2Stat": "CritRateBase",
    //         "Rope2Value": 0.05832,
    //         "Rope3Stat": "CritDamageBase",
    //         "Rope3Value": 0.15552,
    //         "Rope4Stat": "EffectHitRate",
    //         "Rope4Value": 0.0432,
    //         "conditions": {
    //             "hasEnhancedState": false,
    //             "validTargetChecks": [
    //                 "Ultimate"
    //             ],
    //             "Skill": {
    //                 "type": "AND",
    //                 "array": []
    //             },
    //             "Ultimate": {
    //                 "type": "AND",
    //                 "array": []
    //             },
    //             "UltimateTarget": {
    //                 "type": "Target Priority",
    //                 "array": [
    //                     {
    //                         "type": "TARGET CHECK",
    //                         "array": [
    //                             {
    //                                 "type": "TARGET",
    //                                 "array": [
    //                                     {
    //                                         "type": "Filter Ally",
    //                                         "target": "char1",
    //                                         "targetType": "Character"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "COMPARE",
    //                                 "comparison": "!=",
    //                                 "array": [
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "char1",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     },
    //                                     {
    //                                         "type": "Character: Value",
    //                                         "target": "Self",
    //                                         "targetType": "Character",
    //                                         "characterValue": "properName"
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "type": "TARGET CHECK",
    //                         "array": [
    //                             {
    //                                 "type": "TARGET",
    //                                 "array": [
    //                                     {
    //                                         "type": "Filter Ally",
    //                                         "target": "char2",
    //                                         "targetType": "Character"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "type": "AND",
    //                                 "array": []
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         },
    //         "disabled": true,
    //         "stats": {},
    //         "order": []
    //     }
    // },