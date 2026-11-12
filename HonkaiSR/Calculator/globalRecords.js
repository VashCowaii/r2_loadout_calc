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

const localCheckGlobalTeam = typeof document === "undefined" || document.location.href.includes("cowaii");//type doc bc workers won't have doc to ref //TODO: have a single check later, low fuckin priority though
let localInsertionTeam = localCheckGlobalTeam ? null : globalTeamLocal;
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

        enemyFullWaveArray: JSON.parse(JSON.stringify(vashWavePresets["Glorp-ard"])),
        // "waveArray1": [...vashWavePresets["Glorp-ard"][0]],//vashWavePresets.quantumDoggo[0]
        // "waveArray2": [],//vashWavePresets.quantumDoggo[1]
        // "waveArray3": [],
        // "waveArray4": [],
        // "waveArray5": [],
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
    "character": localInsertionTeam ?? {
        "char1": {
            "name": "Saber",
            "rank": 0,
            "lineup": 1,
            "lcName": "A Thankless Coronation",
            "lcRank": 1,
            "2pc": "Scholar Lost in Erudition",
            "4pc": "Scholar Lost in Erudition",
            "planar": "Cosmic Life Sciences Institute",
            "HeadMain": "HPFlat",
            "Head1Stat": "ATKFlat",
            "Head1Value": 16.935019,
            "Head2Stat": "CritRateBase",
            "Head2Value": 0.14904,
            "Head3Stat": "CritDamageBase",
            "Head3Value": 0.05184,
            "Head4Stat": "EffectRES",
            "Head4Value": 0.07776,
            "HandsMain": "ATKFlat",
            "Hands1Stat": "ATK%",
            "Hands1Value": 0.0432,
            "Hands2Stat": "CritRateBase",
            "Hands2Value": 0.09072,
            "Hands3Stat": "CritDamageBase",
            "Hands3Value": 0.23975999999999997,
            "Hands4Stat": "DamageBreak",
            "Hands4Value": 0.05184,
            "BodyMain": "CritDamageBase",
            "Body1Stat": "HPFlat",
            "Body1Value": 114.31138500000002,
            "Body2Stat": "ATKFlat",
            "Body2Value": 16.935019,
            "Body3Stat": "SPDFlat",
            "Body3Value": 5.2,
            "Body4Stat": "CritRateBase",
            "Body4Value": 0.08748,
            "FeetMain": "ATK%",
            "Feet1Stat": "ATKFlat",
            "Feet1Value": 19.051896,
            "Feet2Stat": "SPDFlat",
            "Feet2Value": 2,
            "Feet3Stat": "CritRateBase",
            "Feet3Value": 0.0648,
            "Feet4Stat": "CritDamageBase",
            "Feet4Value": 0.23328,
            "SphereMain": "DamageWind",
            "Sphere1Stat": "HPFlat",
            "Sphere1Value": 38.103795000000005,
            "Sphere2Stat": "DEF%",
            "Sphere2Value": 0.14579999999999999,
            "Sphere3Stat": "CritRateBase",
            "Sphere3Value": 0.05832,
            "Sphere4Stat": "CritDamageBase",
            "Sphere4Value": 0.1296,
            "RopeMain": "ATK%",
            "Rope1Stat": "HPFlat",
            "Rope1Value": 38.103795000000005,
            "Rope2Stat": "DEF%",
            "Rope2Value": 0.1404,
            "Rope3Stat": "CritRateBase",
            "Rope3Value": 0.08748,
            "Rope4Stat": "CritDamageBase",
            "Rope4Value": 0.10368,
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
                    "array": [
                        {
                            "type": "Turn",
                            "target": "Self",
                            "targetType": "Character",
                            "phase": "Any Part",
                            "state": true
                        },
                        {
                            "type": "Character: State",
                            "target": "Self",
                            "stateName": "isEnhanced",
                            "state": false,
                            "isBattleValue": true
                        }
                    ]
                },
                "MemoSkillEnh": {
                    "type": "AND",
                    "array": []
                }
            }
        },
        "char2": {
            "name": "Gilgamesh",
            "rank": 0,
            "lineup": 1,
            "lcName": "I Am As You Behold",
            "lcRank": 1,
            "2pc": "Genius of Brilliant Stars",
            "4pc": "Genius of Brilliant Stars",
            "planar": "Cosmic Life Sciences Institute",
            "HeadMain": "HPFlat",
            "Head1Stat": "ATKFlat",
            "Head1Value": 19.051896,
            "Head2Stat": "DEFFlat",
            "Head2Value": 38.103792,
            "Head3Stat": "CritRateBase",
            "Head3Value": 0.1134,
            "Head4Stat": "CritDamageBase",
            "Head4Value": 0.0648,
            "HandsMain": "ATKFlat",
            "Hands1Stat": "HP%",
            "Hands1Value": 0.07776,
            "Hands2Stat": "ATK%",
            "Hands2Value": 0.03888,
            "Hands3Stat": "CritRateBase",
            "Hands3Value": 0.1134,
            "Hands4Stat": "CritDamageBase",
            "Hands4Value": 0.10368,
            "BodyMain": "CritRateBase",
            "Body1Stat": "ATK%",
            "Body1Value": 0.03888,
            "Body2Stat": "SPDFlat",
            "Body2Value": 2.3,
            "Body3Stat": "CritDamageBase",
            "Body3Value": 0.28512,
            "Body4Stat": "EffectHitRate",
            "Body4Value": 0.03456,
            "FeetMain": "ATK%",
            "Feet1Stat": "HPFlat",
            "Feet1Value": 76.20759000000001,
            "Feet2Stat": "HP%",
            "Feet2Value": 0.07344,
            "Feet3Stat": "CritRateBase",
            "Feet3Value": 0.08748,
            "Feet4Stat": "CritDamageBase",
            "Feet4Value": 0.0648,
            "SphereMain": "DamageLightning",
            "Sphere1Stat": "ATKFlat",
            "Sphere1Value": 21.168773,
            "Sphere2Stat": "CritRateBase",
            "Sphere2Value": 0.08748,
            "Sphere3Stat": "CritDamageBase",
            "Sphere3Value": 0.1296,
            "Sphere4Stat": "DamageBreak",
            "Sphere4Value": 0.12312,
            "RopeMain": "ATK%",
            "Rope1Stat": "ATKFlat",
            "Rope1Value": 38.103792,
            "Rope2Stat": "SPDFlat",
            "Rope2Value": 4.6,
            "Rope3Stat": "CritRateBase",
            "Rope3Value": 0.02916,
            "Rope4Stat": "CritDamageBase",
            "Rope4Value": 0.16848,
            "disabled": false,
            "stats": {},
            "order": [],
            "conditions": {
                "hasEnhancedState": true,
                "Ultimate": {
                    "type": "AND",
                    "array": []
                },
                "Skill": {
                    "type": "AND",
                    "array": []
                },
                "MemoSkillEnh": {
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
                            "type": "Team Energy Checks",
                            "sustainValue": "No Energy Full [NORMAL]"
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
                },
                "MemoSkillEnh": {
                    "type": "AND",
                    "array": []
                }
            },
            "disabled": false,
            "stats": {},
            "order": []
        },
        "char4": {
            "name": "Mortenax Blade",
            "rank": 0,
            "lineup": 1,
            "lcName": "Lies Dance on the Breeze",
            "lcRank": 1,
            "2pc": "Divine-Querying Master Smith",
            "4pc": "Divine-Querying Master Smith",
            "planar": "Bone Collection's Serene Demesne",
            "HeadMain": "HPFlat",
            "Head1Stat": "HP%",
            "Head1Value": 0.03456,
            "Head2Stat": "SPDFlat",
            "Head2Value": 6.9,
            "Head3Stat": "EffectRES",
            "Head3Value": 0.0432,
            "Head4Stat": "DamageBreak",
            "Head4Value": 0.16848,
            "HandsMain": "ATKFlat",
            "Hands1Stat": "ATK%",
            "Hands1Value": 0.03456,
            "Hands2Stat": "SPDFlat",
            "Hands2Value": 4.3,
            "Hands3Stat": "CritRateBase",
            "Hands3Value": 0.08748,
            "Hands4Stat": "CritDamageBase",
            "Hands4Value": 0.12312,
            "BodyMain": "CritRateBase",
            "Body1Stat": "HP%",
            "Body1Value": 0.0864,
            "Body2Stat": "SPDFlat",
            "Body2Value": 8.9,
            "Body3Stat": "EffectHitRate",
            "Body3Value": 0.0432,
            "Body4Stat": "EffectRES",
            "Body4Value": 0.03456,
            "FeetMain": "SPDFlat",
            "Feet1Stat": "HPFlat",
            "Feet1Value": 76.20759000000001,
            "Feet2Stat": "HP%",
            "Feet2Value": 0.0432,
            "Feet3Stat": "CritRateBase",
            "Feet3Value": 0.05184,
            "Feet4Stat": "EffectHitRate",
            "Feet4Value": 0.108,
            "SphereMain": "HP%",
            "Sphere1Stat": "DEFFlat",
            "Sphere1Value": 16.935019,
            "Sphere2Stat": "ATK%",
            "Sphere2Value": 0.07776,
            "Sphere3Stat": "SPDFlat",
            "Sphere3Value": 9.5,
            "Sphere4Stat": "EffectRES",
            "Sphere4Value": 0.03456,
            "RopeMain": "EnergyRegenRate",
            "Rope1Stat": "HP%",
            "Rope1Value": 0.12528,
            "Rope2Stat": "DEF%",
            "Rope2Value": 0.0918,
            "Rope3Stat": "CritRateBase",
            "Rope3Value": 0.08748,
            "Rope4Stat": "EffectHitRate",
            "Rope4Value": 0.03456,
            "conditions": {
                "hasEnhancedState": true,
                "Skill": {
                    "type": "AND",
                    "array": []
                },
                "Ultimate": {
                    "type": "AND",
                    "array": []
                },
                "MemoSkillEnh": {
                    "type": "AND",
                    "array": []
                }
            },
            "stats": {},
            "order": [],
            "disabled": false
        }
    },
}