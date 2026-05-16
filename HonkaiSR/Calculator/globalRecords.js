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
    "character": {
        "char1": {
            "name": "Evanescia",
            "rank": 0,
            "lineup": 1,
            "lcName": "Until the Flowers Bloom Again",
            "lcRank": 1,
            "2pc": "Ever-Glorious Magical Girl",
            "4pc": "Ever-Glorious Magical Girl",
            "planar": "Punklorde Stage Zero",
            "HeadMain": "HPFlat",
            "Head1Stat": "ATK%",
            "Head1Value": 0.03888,
            "Head2Stat": "SPDFlat",
            "Head2Value": 2.6,
            "Head3Stat": "CritDamageBase",
            "Head3Value": 0.16199999999999998,
            "Head4Stat": "EffectHitRate",
            "Head4Value": 0.11231999999999999,
            "HandsMain": "ATKFlat",
            "Hands1Stat": "HP%",
            "Hands1Value": 0.07344,
            "Hands2Stat": "SPDFlat",
            "Hands2Value": 2.3,
            "Hands3Stat": "CritRateBase",
            "Hands3Value": 0.10368,
            "Hands4Stat": "CritDamageBase",
            "Hands4Value": 0.05832,
            "BodyMain": "CritDamageBase",
            "Body1Stat": "ATK%",
            "Body1Value": 0.12096,
            "Body2Stat": "DEF%",
            "Body2Value": 0.09720000000000001,
            "Body3Stat": "SPDFlat",
            "Body3Value": 2.6,
            "Body4Stat": "CritRateBase",
            "Body4Value": 0.05832,
            "FeetMain": "ATK%",
            "Feet1Stat": "ATKFlat",
            "Feet1Value": 38.103792,
            "Feet2Stat": "HP%",
            "Feet2Value": 0.07776,
            "Feet3Stat": "CritRateBase",
            "Feet3Value": 0.09072,
            "Feet4Stat": "EffectRES",
            "Feet4Value": 0.0432,
            "SphereMain": "ATK%",
            "Sphere1Stat": "SPDFlat",
            "Sphere1Value": 2.6,
            "Sphere2Stat": "CritRateBase",
            "Sphere2Value": 0.08424,
            "Sphere3Stat": "EffectHitRate",
            "Sphere3Value": 0.07776,
            "Sphere4Stat": "EffectRES",
            "Sphere4Value": 0.08208,
            "RopeMain": "EnergyRegenRate",
            "Rope1Stat": "ATK%",
            "Rope1Value": 0.0864,
            "Rope2Stat": "CritDamageBase",
            "Rope2Value": 0.11664,
            "Rope3Stat": "EffectHitRate",
            "Rope3Value": 0.07344,
            "Rope4Stat": "EffectRES",
            "Rope4Value": 0.11231999999999999,
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
                                    "comparison": "=",
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
                                    "comparison": "=",
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
                                    "comparison": "=",
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
                                    "comparison": "=",
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
            "stats": {},
            "order": [],
            "disabled": false
        },
        "char4": {
            "name": "Trailblazer - Elation",
            "rank": 6,
            "lineup": 1,
            "lcName": "Elation Brimming With Blessings",
            "lcRank": 5,
            "2pc": "Diviner of Distant Reach",
            "4pc": "Diviner of Distant Reach",
            "planar": "Lushaka, the Sunken Seas",
            "HeadMain": "HPFlat",
            "Head1Stat": "HP%",
            "Head1Value": 0.07344,
            "Head2Stat": "ATK%",
            "Head2Value": 0.07776,
            "Head3Stat": "SPDFlat",
            "Head3Value": 5.2,
            "Head4Stat": "CritRateBase",
            "Head4Value": 0.09072,
            "HandsMain": "ATKFlat",
            "Hands1Stat": "SPDFlat",
            "Hands1Value": 2,
            "Hands2Stat": "CritRateBase",
            "Hands2Value": 0.09395999999999999,
            "Hands3Stat": "CritDamageBase",
            "Hands3Value": 0.1296,
            "Hands4Stat": "DamageBreak",
            "Hands4Value": 0.11664,
            "BodyMain": "CritDamageBase",
            "Body1Stat": "DEF%",
            "Body1Value": 0.1512,
            "Body2Stat": "SPDFlat",
            "Body2Value": 7.2,
            "Body3Stat": "CritRateBase",
            "Body3Value": 0.0324,
            "Body4Stat": "DamageBreak",
            "Body4Value": 0.0648,
            "FeetMain": "SPDFlat",
            "Feet1Stat": "HPFlat",
            "Feet1Value": 84.67510000000001,
            "Feet2Stat": "DEF%",
            "Feet2Value": 0.14579999999999999,
            "Feet3Stat": "CritRateBase",
            "Feet3Value": 0.05184,
            "Feet4Stat": "DamageBreak",
            "Feet4Value": 0.11016,
            "SphereMain": "DamageLightning",
            "Sphere1Stat": "HP%",
            "Sphere1Value": 0.08208,
            "Sphere2Stat": "ATK%",
            "Sphere2Value": 0.03888,
            "Sphere3Stat": "SPDFlat",
            "Sphere3Value": 4.3,
            "Sphere4Stat": "CritDamageBase",
            "Sphere4Value": 0.16199999999999998,
            "RopeMain": "EnergyRegenRate",
            "Rope1Stat": "DEFFlat",
            "Rope1Value": 35.986915,
            "Rope2Stat": "CritRateBase",
            "Rope2Value": 0.05832,
            "Rope3Stat": "CritDamageBase",
            "Rope3Value": 0.15552,
            "Rope4Stat": "EffectHitRate",
            "Rope4Value": 0.0432,
            "conditions": {
                "hasEnhancedState": false,
                "validTargetChecks": [
                    "Ultimate"
                ],
                "Skill": {
                    "type": "AND",
                    "array": []
                },
                "Ultimate": {
                    "type": "AND",
                    "array": []
                },
                "UltimateTarget": {
                    "type": "Target Priority",
                    "array": [
                        {
                            "type": "TARGET CHECK",
                            "array": [
                                {
                                    "type": "TARGET",
                                    "array": [
                                        {
                                            "type": "Filter Ally",
                                            "target": "char1",
                                            "targetType": "Character"
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
                                            "characterValue": "properName"
                                        },
                                        {
                                            "type": "Character: Value",
                                            "target": "Self",
                                            "targetType": "Character",
                                            "characterValue": "properName"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "TARGET CHECK",
                            "array": [
                                {
                                    "type": "TARGET",
                                    "array": [
                                        {
                                            "type": "Filter Ally",
                                            "target": "char2",
                                            "targetType": "Character"
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