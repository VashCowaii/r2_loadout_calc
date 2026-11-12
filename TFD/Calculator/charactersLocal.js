// const weaponsLocal = {
//     "Albion Cavalry Gun": {
//         "name": "Albion Cavalry Gun",
//         "baseATK": 13469,
//         "baseCritRate": 0.37,//0.07,
//         "baseCritDamage": 1.25,
//         "baseWeakPoint": 1.0,
//         "physicalType": "Crush",
//         "physicalTypeBonus": 0.10,

//         "baseFireRate": 451.0,
//         "baseReloadTime": 2.5,
//         "magazine": 75,
//         "shellCount": 1,
//         "coreArray": ["Rainbow","Rainbow","Blue","Red","Green"],

//         "RangedInTime": 0.185,
//         "ZoomInHoldDelayTime": 0.385,


//         "ammoType": "General",
//         "weaponType": "Machine Gun",
//         "image": "/TFD/TFDImages/Weapons/Icon_RW_MG_1006_A001.png",
//         "weaponSettings": {},
//         "customDPSBase": "",
//         "customDPS": "",
//         "desc": "",
//         "displayStatsALT": {
//             "BASIC": [],
//          },
//         "stats": {
//             "ChillATK": 5119,
//         },
//         "tags": [],
//     },

//     "Restored Relic": {
//         "name": "Restored Relic",
//         "rarity": "Ultimate",
//         "baseATK": 109813,
//         "baseCritRate": 0.20,
//         "baseCritDamage": 1.20,
//         "baseWeakPoint": 1,
//         "physicalType": "Pierce",
//         "physicalTypeBonus": 0.10,

//         "baseFireRate": 60,
//         "baseReloadTime": 2.50,
//         "magazine": 12,
//         "shellCount": 1,
//         "coreArray": ["Rainbow","Rainbow","Blue","Blue","Green"],
//         "RangedInTime": 0.3,
//         "ZoomInHoldDelayTime": 0.5,

//         "ammoType": "HighPowered",
//         "weaponType": "Launcher",
//         "image": "/TFD/TFDImages/Weapons/Icon_RW_LNC_1006_A001.png",
//         "customDPSBase": "",
//         "customDPS": "relicShootyPewPewMath",
//         "desc": "Fires a Guided Round. On hitting an enemy with a Guided Round, inflicts Ancient Fire to the target enemy with a set chance.",
//         "stats": {
//             "FireATK": 87851,
//         },
//         "tags": [],
//         "weaponSettings": {
//             "relicUseAncientFire": true,
//         },
//         "displayStatsALT": {
//             "BASIC": [],
//             "GUIDED ROUND": [
//                 {"statType": "","statName": "Trigger Rate","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             ],
//             "ANCIENT FIRE": [
//                 {"statType": "","statName": "Trigger Rate","value": 0.25,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                 {"statType": "duration","statName": "Duration","value": 3,"limit": null,"isModified": false},
//                 {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
//                 {"statType": "","statName": "%Firearm DMG","value": 0.40,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             ],
//             "FIREARM SUM": [],
//         },
//     },


//     "King's Guard Lance": {
//         "name": "King's Guard Lance",
//         "rarity": "Ultimate",
//         "baseATK": 7839,

//         "baseCritRate": 0.11,
//         "baseCritDamage": 1.70,
//         "baseWeakPoint": 1,
//         "physicalType": "Pierce",
//         "physicalTypeBonus": 0.10,

//         "baseFireRate": 645,
//         "baseReloadTime": 2.10,
//         "magazine": 45,
//         "shellCount": 1,
//         "coreArray": ["Rainbow","Rainbow","Orange","Blue","Purple"],
//         "RangedInTime": 0.25,
//         "ZoomInHoldDelayTime": 0.45,

//         "ammoType": "Special",
//         "weaponType": "Beam Rifle",
//         "image": "/TFD/TFDImages/Weapons/Icon_RW_BR_1005_A001.png",
//         "customDPSBase": "lanceTier0Calcs",
//         "customDPS": "",//lanceTier0Calcs
//         "desc": "asdfasdf asdf asdf.",
//         "stats": {
//             "ChillATK": 2587,
//         },
//         "tags": [],
//         "weaponSettings": {
//             "relicUseAncientFire": true,
//         },
//         "displayStatsALT": {
//             "BASIC": [
//                 {"statType": "","statName": "Test","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             ],
//             // "GUIDED ROUND": [
//             //     {"statType": "","statName": "Trigger Rate","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             // ],
//             // "ANCIENT FIRE": [
//             //     {"statType": "","statName": "Trigger Rate","value": 0.25,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             //     {"statType": "duration","statName": "Duration","value": 3,"limit": null,"isModified": false},
//             //     {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
//             //     {"statType": "","statName": "%Firearm DMG","value": 0.40,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             // ],
//             // "FIREARM SUM": [],
//         },
//     },
//     "Voltia": {
//         "name": "Voltia",
//         "rarity": "Ultimate",
//         "baseATK": 8499,

//         "baseCritRate": 0.15,
//         "baseCritDamage": 1.50,
//         "baseWeakPoint": 1,
//         "physicalType": "Pierce",
//         "physicalTypeBonus": 0.10,

//         "baseFireRate": 666,
//         "baseReloadTime": 2.50,
//         "magazine": 45,
//         "shellCount": 1,
//         "coreArray": ["Rainbow","Orange","Blue","Green","Purple"],
//         "RangedInTime": 0.25,
//         "ZoomInHoldDelayTime": 0.45,

//         "ammoType": "Special",
//         "weaponType": "Beam Rifle",
//         "image": "/TFD/TFDImages/Weapons/Icon_RW_BR_1008_A001.png",
//         "customDPSBase": "voltiaTier0Calcs",
//         "customDPS": "",//lanceTier0Calcs
//         "desc": "When attacking, emits a Chain Current on nearby targets.\nChain Current deals Additional Damage to Anti-Void and Anti-Arche Shields.\nAll of Voltia's attacks can damage Anti-Void Shields.",
//         "stats": {
//             "ElectricATK": 2635,
//         },
//         "tags": [],
//         "weaponSettings": {
//             "voltiaUseChainCurrent": true,
//         },
//         "displayStatsALT": {
//             "BASIC": [
//                 {"statType": "","statName": "Test","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             ],
//             // "GUIDED ROUND": [
//             //     {"statType": "","statName": "Trigger Rate","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             // ],
//             // "ANCIENT FIRE": [
//             //     {"statType": "","statName": "Trigger Rate","value": 0.25,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             //     {"statType": "duration","statName": "Duration","value": 3,"limit": null,"isModified": false},
//             //     {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
//             //     {"statType": "","statName": "%Firearm DMG","value": 0.40,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             // ],
//             // "FIREARM SUM": [],
//         },
//     },


//     "Sigvore's Proof": {
//         "name": "Sigvore's Proof",
//         "rarity": "Ultimate",
//         "baseATK": 87476,
//         "baseCritRate": 0.35,
//         "baseCritDamage": 1.5,
//         "baseWeakPoint": 1,
//         "physicalType": "Pierce",
//         "physicalTypeBonus": 0.10,

//         "baseFireRate": 80,
//         "baseReloadTime": 2.80,
//         "magazine": 8,
//         "shellCount": 1,
//         "coreArray": ["Rainbow","Rainbow","Orange","Blue","Yellow"],
//         "RangedInTime": 0.3,
//         "ZoomInHoldDelayTime": 0.5,

//         "ammoType": "HighPowered",
//         "weaponType": "Launcher",
//         "image": "/TFD/TFDImages/Weapons/Icon_RW_LNC_1005_A001.png",
//         "customDPSBase": "",
//         "customDPS": "",//relicShootyPewPewMath
//         "desc": "Fires a Sticky Bomb when shooting while aiming.\nThe launched bomb will automatically detonate after a certain period of time after sticking to an enemy. When aim is canceled, all attached bombs will detonate at the same time, regardless of whether the countdown has been completed.\nUpon detonation, Sticky Bombs will inflict Burn on damaged enemies.",
//         "stats": {
//             "ToxicATK": 27993,
//         },
//         "tags": [],
//         "weaponSettings": {
//             // "relicUseAncientFire": true,
//         },
//         "displayStatsALT": {
//             "BASIC": [],
//             // "GUIDED ROUND": [
//             //     {"statType": "","statName": "Trigger Rate","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             // ],
//             // "ANCIENT FIRE": [
//             //     {"statType": "","statName": "Trigger Rate","value": 0.25,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             //     {"statType": "duration","statName": "Duration","value": 3,"limit": null,"isModified": false},
//             //     {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
//             //     {"statType": "","statName": "%Firearm DMG","value": 0.40,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             // ],
//             // "FIREARM SUM": [],
//         },
//     },

//     "The Final Masterpiece": {
//         "name": "The Final Masterpiece",
//         "rarity": "Ultimate",
//         "baseATK": 11164,

//         "baseCritRate": 0.20,
//         "baseCritDamage": 2.0,
//         "baseWeakPoint": 1.5,
//         "physicalType": "Pierce",
//         "physicalTypeBonus": 0.10,

//         "baseFireRate": 500,
//         "baseReloadTime": 1.1,
//         "magazine": 20,
//         "shellCount": 1,
//         "coreArray": ["Rainbow","Orange","Blue","Green","Purple"],
//         "RangedInTime": 0.25,
//         "ZoomInHoldDelayTime": 0.45,

//         "ammoType": "General",
//         "weaponType": "Handgun",
//         "image": "/TFD/TFDImages/Weapons/Icon_RW_HG_1006_A001.png",
//         "customDPSBase": "",//lastDaggerTier0Calcs
//         "customDPS": "masterpieceCalcs",//
//         "desc": "Reloading randomly grants one of four Unique Ability effects, which changes in the following order while the effect is active.\nExploding Ecstasy causes a Fire Burst at the hit location.\nRestrained Dispassion causes a Frosty Burst at the hit location and inflicts Frostbite.\nPulsing Shock inflicts an Electric shock on nearby targets.\nEndless Indulgence spawns a Puddle of Indulgence at the hit location and inflicts Poison.",
//         "stats": {
//             "ChillATK": 1005,
//         },
//         "tags": [],
//         "weaponSettings": {
//             "usePoisonGrenade": true,
//             // "useDaggerStrike": false,
//         },
//         "displayStatsALT": {
//             "BASIC": [],
//             "INDULGENCE": [
//                 // {"statType": "duration","statName": "Duration","value": 15,"limit": null,"isModified": false},
//                 // {"statType": "","statName": "Max Stacks","value": 30,"limit": null,"isModified": false},
//                 // {"statType": "","statName": "+Firearm Crit Rate Base","value": 0.022,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                 // {"statType": "","statName": "+Crit Rate/Stack","value": 0.022,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             ],
//             // // "PATIENCE": [
//             // //     {"statType": "duration","statName": "Duration","value": 15,"limit": null,"isModified": false},
//             // //     {"statType": "","statName": "Max Stacks","value": 30,"limit": null,"isModified": false},
//             // //     {"statType": "","statName": "+Firearm Crit Rate Base","value": 0.022,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             // //     {"statType": "","statName": "+Crit Rate/Stack","value": 0.022,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             // // ],
//             // "STRIKE": [
//             //     // {"statType": "duration","statName": "Duration","value": 15,"limit": null,"isModified": false},
//             //     // {"statType": "","statName": "Max Stacks","value": 30,"limit": null,"isModified": false},
//             //     // {"statType": "","statName": "+Firearm Crit Rate Base","value": 0.022,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             //     // {"statType": "","statName": "+Crit Rate/Stack","value": 0.022,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             // ],
//             // // "ANCIENT FIRE": [
//             // //     {"statType": "","statName": "Trigger Rate","value": 0.25,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             // //     {"statType": "duration","statName": "Duration","value": 3,"limit": null,"isModified": false},
//             // //     {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
//             // //     {"statType": "","statName": "%Firearm DMG","value": 0.40,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//             // // ],
//             "FIREARM SUM": [],
//         },
//     },
// }

// const charactersLocal = {

//     "Keelan": {
//         "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_017_A01.png",
//         "baseStats": {
//             "HP": 0,
//             "Shield": 0,//491
//             "ShieldInCombat": 0,
//             "ShieldOutCombat": 0,
//             "DEF": 0,
//             "ResistanceFire": 0,
//             "ResistanceChill": 0,
//             "ResistanceElectric": 0,
//             "ResistanceToxin": 0,
//             "MP": 0,
//             "MPInCombat": 0,
//             "MPOutCombat": 0,
//             "CritRate": 0.20,
//             "CritDamage": 1.4,
//         },
//         "name": "Keelan",
//         "characterSettings": {
//             // "sharenAmbushActive": true,
//             // "sharenMeltingActive": true,
//             // "sharenTargetBonus": true,

//             "keelanErosionStacks": 5,
//             "keelanAgilityStacks": 4,
//         },
//         "abilities": {
//             "ability1": {
//                 "base": {
//                     "name": "Void Corrosion",
//                     "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_017_A01_01.png",
//                     "type": ["Toxic","Fusion"],
//                     "desc": "Targets an enemy and fires Void Corrosion. The hit enemy receives Acidic Erosion. Additional damage is dealt if the target already has Acidic Erosion. The number of targets for Void Corrosion increases based on certain stats.",
//                     "powerMods": {
//                         "base": 245.7/100,
//                         "baseBonus": 120.7/100,
//                         "baseDOT": 4.6/100,
//                         "intervalDOT": 1,
//                         "durationDOT": 10,
//                     },
//                     "customDPSBase": "",
//                     "customDPS": "keelanCorrosionCalcs",
//                     "stats": {},
//                     "tags": [],
//                     "returnStatOptions": {
//                         "Erosion - AVG/Tick" : "avgDmgPerTick",
//                         "Erosion - Total" : "totalTickDamageErosion",
//                         "Projectile - AVG/Hit" : "avgDmgPerHit",
//                         "Projectile - Bonus/Hit" : "avgDmgPerBonus",
//                         "Projectile - SUM/Hit" : "SUMDmgPerHit",
//                         "SUM Total AVG" : "SUMTotalAVG",
//                     },
//                     "displayStats": [],
//                     "displayStatsALT": {
//                         "BASIC": [
//                             {"statType": "cooldown","statName": "Cooldown","value": 12,"limit": null,"isModified": true},
//                         ],
//                         "PROJECTILE": [
//                             {"statType": "","statName": "Target Count","value": 4,"limit": null,"isModified": false},
//                             {"statType": "","statName": "Count Increase/Stack","value": 0.30,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                             {"statType": "","statName": "Max Count","value": 10,"limit": null,"isModified": false},
//                         ],
//                         "ADDITONAL DMG": [],
//                         "ACIDIC EROSION": [
//                             {"statType": "","statName": "Max Stacks","value": 5,"limit": null,"isModified": false},
//                             {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
//                             {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
//                         ],
//                     },
//                 },
//             },
//             "ability2": {
//                 "base": {
//                     "name": "Onslaught",
//                     "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_017_A01_02.png",
//                     "type": ["Toxic","Singular"],
//                     "desc": "Dashes forward, dealing damage to pierced targets. Grants the Knockback effect and explosive damage to enemies at the endpoint of the dash. Applies Acidic Erosion to enemies hit. Additional damage is dealt if the target has Acidic Erosion. Each pierced enemy reduces the current stack cooldown of Onslaught by a certain amount.",
//                     "powerMods": {
//                         "base": 797.7/100,
//                         "baseBurst": 876.6/100,
//                         "baseBonus": 146.1/100,
//                         "baseDOT": 4.6/100,
//                         "intervalDOT": 1,
//                         "durationDOT": 10,
//                     },
//                     // "customDPSBase": "keelanOnslaughtCalcsTier0",
//                     "customDPS": "keelanOnslaughtCalcs",
//                     "stats": {},
//                     "tags": [],
//                     "returnStatOptions": {
//                         "Erosion - AVG/Tick" : "avgDmgPerTick",
//                         "Erosion - Total" : "totalTickDamageErosion",
//                         "Impact - AVG/Hit" : "avgDmgPerHit",
//                         "Impact - AOE" : "avgDmgPerAOE",
//                         "Impact - Bonus/Hit" : "avgDmgPerBonus",
//                         "Impact - SUM/Hit" : "SUMDmgPerHit",
//                         "SUM Total AVG" : "SUMTotalAVG",
//                     },
//                     "displayStats": [],
//                     "displayStatsALT": {
//                         "BASIC": [
//                             {"statType": "cooldown","statName": "Cooldown","value": 20,"limit": null,"isModified": true},
//                             {"statType": "cost","statName": "MP Cost","value": 15,"limit": null,"isModified": true},
//                         ],
//                         "SKILL EFFECT": [
//                             {"statType": "ranger","statName": "Max Move Distance","value": 12,"limit": null,"isModified": false},
//                             {"statType": "duration","statName": "Cooldown Reduction/Pierce","value": 5,"limit": null,"isModified": false},
//                             {"statType": "","statName": "Max Reductions","value": 3,"limit": null,"isModified": false},
//                             {"statType": "range","statName": "Pierce Range","value": 2,"limit": 2.5,"isModified": true},
//                             {"statType": "range","statName": "Burst Range","value": 5,"limit": 2.5,"isModified": true},
//                         ],
//                         "ADDITONAL DMG": [],
//                         "ACIDIC EROSION": [
//                             {"statType": "","statName": "Max Stacks","value": 5,"limit": null,"isModified": false},
//                             {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
//                             {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
//                         ],
//                     },
//                 },
//             },
//             "ability3": {
//                 "base": {
//                     "name": "Septic Gust",
//                     "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_017_A01_03.png",
//                     "type": ["Toxic","Singular"],
//                     "desc": "Deals damage to enemies within range and inflicts Acidic Decay. If enemies within range are inflicted with Acidic Decay, inflicts Blood Rot. Blood Rot explodes dealing damage to the target and enemies within range.",
//                     "powerMods": {
//                         "base": 541.3/100,
//                         "baseRot": 422.9/100,
//                         "baseDOT": 4.6/100,
//                         "intervalDOT": 1,
//                         "durationDOT": 10,
//                     },
//                     "customDPSBase": "",
//                     "customDPS": "keelanGustCalcs",
//                     "stats": {},
//                     "tags": [],
//                     "returnStatOptions": {
//                         "Erosion - AVG/Tick" : "avgDmgPerTick",
//                         "Erosion - Total" : "totalTickDamageErosion",
//                         "Impact - AVG/Hit" : "avgDmgPerHit",
//                         "Impact - Rot/Hit" : "avgDmgPerRot",
//                         "Impact - SUM/Hit" : "SUMDmgPerHit",
//                         "SUM Total AVG" : "SUMTotalAVG",
//                     },
//                     "displayStats": [],
//                     "displayStatsALT": {
//                         "BASIC": [
//                             {"statType": "cooldown","statName": "Cooldown","value": 60,"limit": null,"isModified": true},
//                             {"statType": "cost","statName": "Acidic Cost","value": 250,"limit": null,"isModified": true},
//                         ],
//                         "SKILL EFFECT": [
//                             {"statType": "range","statName": "Range","value": 7,"limit": 2.5,"isModified": true},
//                         ],
//                         "ACIDIC EROSION": [
//                             {"statType": "","statName": "Max Stacks","value": 5,"limit": null,"isModified": false},
//                             {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
//                             {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
//                         ],
//                         "SEPTICEMIA": [
//                             {"statType": "duration","statName": "Countdown","value": 2,"limit": null,"isModified": true},
//                             {"statType": "range","statName": "Range","value": 4,"limit": 2.5,"isModified": true},
//                         ],
//                     },
//                 },
//             },
//             "ability4": {
//                 "base": {
//                     "name": "Tremor",
//                     "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_017_A01_04.png",
//                     "type": ["Toxic","Fusion"],
//                     "desc": "If enemies within range have Acidic Decay, deals damage proportional to the amount of Acidic Decay stacks.<br>If there are no enemies within range or they don't have Acidic Decay, increases the amount of Onslaught stacks instead.",
//                     "powerMods": {
//                         "base": 1703.3/100,
//                     },
//                     "customDPSBase": "",
//                     "customDPS": "keelanTremorCalcs",
//                     "stats": {},
//                     "tags": [],
//                     "returnStatOptions": {
//                         "Stack - AVG/Hit" : "avgDmgPerHit",
//                         "SUM Total AVG" : "SUMTotalAVG",
//                     },
//                     "displayStats": [],
//                     "displayStatsALT": {
//                         "BASIC": [
//                             {"statType": "cooldown","statName": "Cooldown","value": 80,"limit": null,"isModified": true},
//                             {"statType": "cost","statName": "Acidic Cost","value": 500,"limit": null,"isModified": true},
//                             {"statType": "range","statName": "Detection Range","value": 6,"limit": 3,"isModified": true},
//                         ],
//                         "EROSION FOUND": [],
//                         "NO EROSION": [
//                             {"statType": "","statName": "+Onslaught Stacks","value": 3,"limit": null,"isModified": false},
//                         ],
//                     },
//                 },
//             },
//             "ability5": {
//                 "base": {
//                     "name": "Erosion",
//                     "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_017_A01_00.png",
//                     "type": ["Toxic"],
//                     "desc": "Increases the Acidification Value when using a skill and grants Deception effect to self after a certain number of uses. If non-combat state is maintained, Acidification Value and the Deception effect are removed.",
//                     "powerMods": {
//                         "powerModBonus": 0.28,
//                         "speedBonus": 0.125
//                     },
//                     "customDPSBase": "keelanErosionCalcsTier0",
//                     "customDPS": "",
//                     "stats": {},
//                     "tags": ["PowerModifierBase"],
//                     "returnStatOptions": {
//                     },
//                     "displayStats": [],
//                     "displayStatsALT": {
//                         "BASIC": [
//                             {"statType": "","statName": "Application Count","value": 5,"limit": null,"isModified": false},
//                             {"statType": "duration","statName": "Effect Removal","value": 10,"limit": null,"isModified": false},
//                         ],
//                         "EROSION": [],
//                         "AGILITY": [
//                             {"statType": "","statName": "Max Stacks","value": 4,"limit": null,"isModified": false},
//                             {"statType": "","statName": "+Power Mod/Stack","value": 0.28,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                             {"statType": "","statName": "+Movespeed/Stack","value": 0.125,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                         ],
//                     },
//                 },
//             }
//         }
//     },


//     "Valby": {
//         "baseStats": {
//             "HP": 1402,
//             "Shield": 671,
//             "ShieldInCombat": 3.3,
//             "ShieldOutCombat": 3.96,
//             "DEF": 2120,
//             "ResistanceFire": 11,
//             "ResistanceChill": 13,
//             "ResistanceElectric": 11,
//             "ResistanceToxin": 11,
//             "MP": 243,
//             "MPInCombat": 0,
//             "MPOutCombat": 0.3,
//             "CritRate": 0.05,
//             "CritDamage": 1.3,
//         },
//         "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_010_U01.png",
//         "name": "Valby",
//         "characterSettings": {
//             "valbyBounces": 7,//TODO: verify the max number of bounces
//             "valbyEnemiesLaundry": 1,
//             "valbyEnemiesPassed": 1,
//             "valbyLaundryActive": true,
//             "valbyMoistureActive": true,
//         },
//         "abilities": {
//             "ability1": {
//                 "base": {
//                     "name": "Bubble Bullet",
//                     "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_010_A01_01.png",
//                     "type": ["Non-Attribute","Fusion"],
//                     "desc": "Fires a bouncing Bubble Bullet. Where the Bubble Bullet impacts, it creates a Small Puddle. Enemies who touch the Small Puddle take continuous DMG and are inflicted with Laundry. The Bubble Bullet explodes upon hitting an enemy or after bouncing a maximum number of times, dealing Explosion Damage on nearby enemies. Explosion Damage and Explosion Range increases with the number of times bounced.",
//                     "powerMods": {
//                         "base": 469.5/100,
//                         "basePuddle": 139.5/100,
//                         "cooldown": 10,
//                         "durationPuddle": 10,
//                         "intervalPuddle": 1,

//                         "bouncingScalar": 0.25,
//                     },
//                     "customDPSBase": "",
//                     "customDPS": "valbyBubbleCalcs",
//                     "stats": {},
//                     "tags": [],
//                     "returnStatOptions": {
//                         "Bullet - AVG/Hit" : "avgBulletDMG",
//                         "Bullet - AVG/DPS" : "avgBulletDPS",
//                         "Puddle - AVG/Hit" : "avgPuddleDMG",
//                         "Puddle - SUM AVG" : "totalPuddleAVG",
//                         "SUM Total AVG" : "SUMTotalAVG",
//                     },
//                     "displayStats": [],
//                     "displayStatsALT": {
//                         "BASIC": [
//                             {"statType": "cooldown","statName": "Cooldown","value": 10,"limit": null,"isModified": true},
//                             {"statType": "cost","statName": "MP Cost","value": 36,"limit": null,"isModified": true},
//                         ],
//                         "SPIRAL TIDAL WAVE": [],
//                         "BUBBLE BULLET": [
//                             {"statType": "range","statName": "Range","value": 3,"limit": 3,"isModified": true},
//                             {"statType": "","statName": "Projectile Speed","value": 0,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                             {"statType": "","statName": "+DMG/Bounce","value": 0.25,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                             {"statType": "","statName": "+Range/Bounce","value": 0.15,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                         ],
//                         "SMALL PUDDLE": [
//                             {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
//                             {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
//                             {"statType": "range","statName": "Range","value": 3,"limit": 2.5,"isModified": true},
//                         ],
//                     },
//                 },
//                 "Spiral Tidal Wave": {
//                     "name": "Spiral Tidal Wave",
//                     "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_010_R06_Rune.png",
//                     "type": ["Non-Attribute","Dimension"],
//                     "desc": "Launches a Spiral Tidal Wave, dealing DMG to hit enemies. The Spiral Tidal Wave explodes, creating a Small Puddle. Enemies touching the Small Puddle receive continuous damage and are inflicted with Laundry. The Spiral Tidal Wave attracts Gluttony's Impurities.",
//                     "powerMods": {
//                         "base": 1276.7/100,
//                         "basePuddle": 262.6/100,
//                         "cooldown": 12,
//                         "durationPuddle": 10,
//                         "intervalPuddle": 1,

//                         // "bouncingScalar": 0.25,
//                     },
//                     "customDPSBase": "",
//                     "customDPS": "valbyBubbleCalcsSpiralStarter",
//                     "stats": {},
//                     "tags": [],
//                     "returnStatOptions": {
//                         "Bullet - AVG/Hit" : "avgBulletDMG",
//                         "Bullet - AVG/DPS" : "avgBulletDPS",
//                         "Puddle - AVG/Hit" : "avgPuddleDMG",
//                         "Puddle - SUM AVG" : "totalPuddleAVG",
//                         "SUM Total AVG" : "SUMTotalAVG",
//                     },
//                     "displayStats": [],
//                     "displayStatsALT": {
//                         "BASIC": [
//                             {"statType": "","statName": "Max Stacks","value": 3,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                             {"statType": "cooldown","statName": "Stack Cooldown","value": 12,"limit": null,"isModified": true},
//                             {"statType": "cost","statName": "MP Cost","value": 32,"limit": null,"isModified": true},
//                         ],
//                         "BUBBLE BULLET": [],
//                         "SPIRAL TIDAL WAVE": [
//                             {"statType": "range","statName": "Explosion Range","value": 3,"limit": 2.5,"isModified": true},
//                             {"statType": "","statName": "Projectile Speed","value": 0,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                         ],
//                         "SMALL PUDDLE": [
//                             {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
//                             {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
//                             {"statType": "range","statName": "Range","value": 3,"limit": 2.5,"isModified": true},
//                         ],
//                     },
//                 },
//                 "Water Play": {
//                     "name": "Water Play",
//                     "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_010_R01_Rune.png",
//                     "type": ["Non-Attribute","Fusion"],
//                     "desc": "Creates a Small Puddle in front. Enemies who touch the Small Puddle take continuous DMG and are inflicted with Laundry.",
//                     "powerMods": {
//                         "base": 0/100,
//                         "basePuddle": 511.2/100,
//                         "cooldown": 8,
//                         "durationPuddle": 10,
//                         "intervalPuddle": 1,

//                         // "bouncingScalar": 0.25,
//                     },
//                     "customDPSBase": "",
//                     "customDPS": "valbyBubbleCalcsWaterStarter",
//                     "stats": {},
//                     "tags": [],
//                     "returnStatOptions": {
//                         // "Bullet - AVG/Hit" : "avgBulletDMG",
//                         // "Bullet - AVG/DPS" : "avgBulletDPS",
//                         "Puddle - AVG/Hit" : "avgPuddleDMG",
//                         "Puddle - SUM AVG" : "totalPuddleAVG",
//                         "SUM Total AVG" : "SUMTotalAVG",
//                     },
//                     "displayStats": [],
//                     "displayStatsALT": {
//                         "BASIC": [
//                             {"statType": "cooldown","statName": "Cooldown","value": 8,"limit": null,"isModified": true},
//                             {"statType": "cost","statName": "MP Cost","value": 36,"limit": null,"isModified": true},
//                         ],
//                         "SPIRAL TIDAL WAVE": [],
//                         "BUBBLE BULLET": [],
//                         "SMALL PUDDLE": [
//                             {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
//                             {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
//                             {"statType": "range","statName": "Range","value": 7,"limit": 3,"isModified": true},
//                         ],
//                     },
//                 },
//             },
//             "ability2": {
//                 "base": {
//                     "name": "Plop Plop",
//                     "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_010_A01_02.png",
//                     "type": ["Non-Attribute","Dimension"],
//                     "desc": "Forms a Big Puddle at a designated location. Emerges from the Big Puddle and inflicts Knockdown on nearby enemies. Enemies standing in the Big Puddle receive continuous DMG and are inflicted with Laundry. The skill's cooldown decreases proportionally to the number of enemies inflicted with Knockdown.",
//                     "powerMods": {
//                         "base": 182/100,
//                         "duration": 15,
//                         "interval": 1
//                     },
//                     "customDPSBase": "",
//                     "customDPS": "valbyPlopCalcs",
//                     "stats": {},
//                     "tags": [],
//                     "returnStatOptions": {
//                         "Puddle - AVG/Hit" : "avgPuddleDMG",
//                         "Puddle - SUM AVG" : "totalPuddleAVG",
//                     },
//                     "displayStats": [],
//                     "displayStatsALT": {
//                         "BASIC": [
//                             {"statType": "cooldown","statName": "Cooldown","value": 25,"limit": null,"isModified": true},
//                             {"statType": "cost","statName": "MP Cost","value": 48,"limit": null,"isModified": true},
//                         ],
//                         "ON HIT": [
//                             {"statType": "duration","statName": "-Cooldown","value": 2,"limit": null,"isModified": false},
//                             {"statType": "","statName": "Max Hits","value": 10,"limit": null,"isModified": false},
//                         ],
//                         "BIG PUDDLE": [
//                             {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
//                             {"statType": "duration","statName": "Duration","value": 15,"limit": null,"isModified": true},
//                             {"statType": "range","statName": "Range","value": 6,"limit": 2.5,"isModified": true},
//                         ],
//                     },
//                 },
//                 "Hydro Pressure Bomb": {
//                     "name": "Hydro Pressure Bomb",
//                     "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_010_R05_Rune.png",
//                     "type": ["Non-Attribute","Fusion"],
//                     "desc": "Jumps forward and deals damage upon landing. Damage increases proportional to the number of enemies infliced with Laundry effect.",
//                     "powerMods": {
//                         "base": 1531/100,
//                         "cooldown": 10,

//                         "bouncingScalar": 0.15,
//                     },
//                     "customDPSBase": "",
//                     "customDPS": "valbyPlopCalcsBombStarter",
//                     "stats": {},
//                     "tags": [],
//                     "returnStatOptions": {
//                         "Bomb - AVG/DPS" : "avgBulletDPS",
//                         "Bomb - AVG/Hit" : "avgBulletDMG",
//                     },
//                     "displayStats": [],
//                     "displayStatsALT": {
//                         "BASIC": [
//                             {"statType": "cooldown","statName": "Cooldown","value": 16,"limit": null,"isModified": true},
//                             {"statType": "cost","statName": "MP Cost","value": 42,"limit": null,"isModified": true},
//                         ],
//                         "SKILL EFFECT": [
//                             {"statType": "range","statName": "Range","value": 5.5,"limit": 2.5,"isModified": true},
//                             {"statType": "","statName": "+DMG% per Laundry","value": 0.15,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                             {"statType": "","statName": "Max Stacks","value": 10,"limit": null,"isModified": false},
//                         ],
//                     },
//                 },
//             },
//             "ability3": {
//                 "base": {
//                     "name": "Clean Up",
//                     "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_010_A01_03.png",
//                     "type": ["Non-Attribute","Dimension"],
//                     "desc": "Activates Liquefied state. While Liquefied, does not collied with enemies and creates a Waterway on the ground. Enemies standing in the Waterway take continous damage and are inflicted with Laundry. In the Liquefied state, cannot use skills.",
//                     "powerMods": {
//                         "base": 277/100,
//                         "duration": 15,
//                         "interval": 1
//                     },
//                     "customDPSBase": "",
//                     "customDPS": "valbyCleanCalcs",
//                     "stats": {},
//                     "tags": [],
//                     "returnStatOptions": {
//                         "Waterway - AVG/Hit" : "avgPuddleDMG",
//                         "Waterway - SUM AVG" : "totalPuddleAVG",
//                     },
//                     "displayStats": [],
//                     "displayStatsALT": {
//                         "BASIC": [
//                             {"statType": "","statName": "Stacks","value": 2,"limit": null,"isModified": false},
//                             {"statType": "cooldown","statName": "Cooldown","value": 22,"limit": null,"isModified": true},
//                             {"statType": "cost","statName": "MP Cost","value": 50,"limit": null,"isModified": true},
//                         ],
//                         "LIQUEFIED": [
//                             {"statType": "duration","statName": "Duration","value": 5,"limit": null,"isModified": true},
//                             {"statType": "","statName": "Movespeed","value": 1000,"limit": null,"isModified": false},
//                             {"statType": "","statName": "+Damage Reduction","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                         ],
//                         "WATERWAY": [
//                             {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
//                             {"statType": "duration","statName": "Duration","value": 15,"limit": null,"isModified": true},
//                             {"statType": "range","statName": "Range","value": 2,"limit": 2.5,"isModified": true},
                            
//                         ],
//                     },
//                 },
//                 "Tidal Wave": {
//                     "name": "Tidal Wave",
//                     "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_010_R03_Rune.png",
//                     "type": ["Non-Attribute","Dimension"],
//                     "desc": "Activates Liquefied state. While Liquefied, does not collied with enemies. When passing through an enemy while Liquefied, deals damage and simulataneously inflicts Laundry on them. When Liquefied ends, deals Burst damage nearby based on the number of enemies she passed through.",
//                     "powerMods": {
//                         "base": 1160/100,
//                         "baseBurst": 656/100,
//                         "bouncingScalar": 0.15,
//                     },
//                     "customDPSBase": "",
//                     "customDPS": "valbyCleanCalcsTidalStarter",
//                     "stats": {},
//                     "tags": [],
//                     "returnStatOptions": {
//                         "Liquefied - AVG/Hit" : "avgBulletDMG",
//                         "Burst - AVG/Hit" : "avgBulletDMGBurst",
//                     },
//                     "displayStats": [],
//                     "displayStatsALT": {
//                         "BASIC": [
//                             {"statType": "","statName": "Stacks","value": 2,"limit": null,"isModified": false},
//                             {"statType": "cooldown","statName": "Stack Cooldown","value": 22,"limit": null,"isModified": true},
//                             {"statType": "cost","statName": "MP Cost","value": 46,"limit": null,"isModified": true},
//                         ],
//                         "LIQUEFIED": [
//                             {"statType": "range","statName": "Collision Range","value": 2,"limit": 2.5,"isModified": true},
//                             {"statType": "duration","statName": "Duration","value": 8,"limit": null,"isModified": true},
//                             {"statType": "","statName": "Movespeed","value": 1000,"limit": null,"isModified": false},
//                             {"statType": "","statName": "+Damage Reduction","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                         ],
//                         "BURST": [
//                             {"statType": "","statName": "+DMG% per Collision","value": 0.15,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                             {"statType": "","statName": "Max Stacks","value": 10,"limit": null,"isModified": false},
//                         ],
//                     },
//                 },
//             },
//             "ability4": {
//                 "base": {
//                     "name": "Laundry Bomb",
//                     "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_010_A01_04.png",
//                     "type": ["Non-Attribute","Fusion"],
//                     "desc": "Equip a Unique Weapon. The projectile impact of the Unique Weapon creates a Laundry Bomb, dealing continuous damage. If another Laundry Bomb is created where one already exists, the two will merge.",
//                     "powerMods": {
//                         "base": 52/100,
//                         "skillDuration": 20,
//                         "duration": 8,
//                         "interval": 0.5,
//                         "fireRate": 300,
//                         "magazine": 15,
//                     },
//                     "customDPSBase": "",
//                     "customDPS": "valbyBombCalcs",//valbyBombCalcs
//                     "stats": {},
//                     "tags": [],
//                     "returnStatOptions": {
//                         // "Overkill - AVG/Hit" : "overkillAVGperHit4",
//                         // "Overkill - Total Burst Damage" : "overkillTotalShotDamage4",
//                         // "Overkill - Shot Count" : "overkillTotalShotDamage4",
//                         // "Continuous - AVG/Tick" : "continuousAVGperTick4",
//                         // "Continuous - Total Tick Damage" : "continuousTotalDamage4",
//                         // "DPS per Shot" : "dpsPerShot4",
//                         // "DPS per Cast" : "dpsPerCast4",
//                         // "SUM Total AVG" : "sumTotalDamage4",
//                     },
//                     "displayStats": [],
//                     "displayStatsALT": {
//                         "BASIC": [
//                             {"statType": "cooldown","statName": "Cooldown","value": 110,"limit": null,"isModified": true},
//                             {"statType": "cost","statName": "MP Cost","value": 65,"limit": null,"isModified": true},
//                             {"statType": "magazine","statName": "Base Magazine","value": 15,"limit": null,"isModified": true},
//                         ],
//                         // "OVERKILL": [
//                         //     {"statType": "duration","statName": "Duration","value": 8,"limit": null,"isModified": true},
//                         //     {"statType": "range","statName": "Range","value": 5,"limit": 2,"isModified": true},
//                         // ],
//                         // "CONTINUOUS DAMAGE": [
//                         //     {"statType": "duration","statName": "Duration","value": 4,"limit": null,"isModified": true},
//                         //     {"statType": "duration","statName": "Interval","value": 0.5,"limit": null,"isModified": false},
//                         //     {"statType": "range","statName": "Range","value": 5,"limit": 2,"isModified": true},
//                         // ],
//                         "SUM": [],
//                     },
//                 },
//                 "Singing Water": {
//                     "name": "Singing Water",
//                     "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_010_R04_Rune.png",
//                     "type": ["Non-Attribute","Fusion"],
//                     "desc": "Equip a Unique Weapon. The projectile impact of the Unique Weapon creates a Seduction of Water, taunting nearby enemies and inflicting Laundry. The summoned Seduction of Water explodes on expiration.",
//                     "powerMods": {
//                         "base": 952/100,
//                     },
//                     "customDPSBase": "",
//                     "customDPS": "valbyBombCalcsSingingStarter",//valbyBombCalcs
//                     "stats": {},
//                     "tags": [],
//                     "returnStatOptions": {
//                         // "Overkill - AVG/Hit" : "overkillAVGperHit4",
//                     },
//                     "displayStats": [],
//                     "displayStatsALT": {
//                         "BASIC": [
//                             {"statType": "cooldown","statName": "Cooldown","value": 70,"limit": null,"isModified": true},
//                             {"statType": "cost","statName": "MP Cost","value": 40,"limit": null,"isModified": true},
//                         ],
//                         "EXCLUSIVE WEAPON": [
//                             {"statType": "magazine","statName": "Max Bullets","value": 5,"limit": null,"isModified": true},
//                             {"statType": "duration","statName": "Duration","value": 20,"limit": null,"isModified": true},
//                         ],
//                         "SEDUCTION OF WATER": [
//                             {"statType": "duration","statName": "Duration","value": 8,"limit": null,"isModified": true},
//                             {"statType": "","statName": "%HP Inherited","value": 0.70,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                             {"statType": "range","statName": "Range","value": 4,"limit": 2.5,"isModified": true},
//                         ],
//                     },
//                 },
//             },
//             "ability5": {
//                 "base": {
//                     "name": "Water Intake",
//                     "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_010_A01_00.png",
//                     "type": ["Non-Attribute"],
//                     "desc": "MP recovers while on water. Puddles created by skills are also considered water.",
//                     "powerMods": {
//                         "elecResShred": -0.20,
//                         "naResShred": -0.20,
//                     },
//                     "customDPSBase": "valbyIntakeCalcsTier0",
//                     "customDPS": "",//lepicCloseCallCalcs
//                     "stats": {},
//                     "tags": [],
//                     "returnStatOptions": {
//                     },
//                     "displayStats": [],
//                     "displayStatsALT": {
//                         "BASIC": [
//                             {"statType": "","statName": "MP%/s","value": 5,"limit": null,"isModified": false},
//                         ],
//                         "LAUNDRY": [
//                             {"statType": "duration","statName": "Duration","value": 20,"limit": null,"isModified": true},
//                             {"statType": "","statName": "-Enemy Elec RES","value": -0.20,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                             {"statType": "","statName": "-Enemy N-Attr RES","value": -0.20,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                         ],
//                     },
//                 },
//                 "Supply Moisture": {
//                     "name": "Supply Moisture",
//                     "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_010_R02_Rune.png",
//                     "type": ["Non-Attribute"],
//                     "desc": "When using skills while standing on water, increases Firearm ATK, Firearm Critical Hit Rate, Skill Critical Hit Rate, and Skill Duration, which also increases the Attribute Trigger Rate of Firearms. Puddles created by skills are also considered water.",
//                     "powerMods": {
//                         "elecResShred": -0.20,
//                         "naResShred": -0.20,
//                         "firearmCritBonus": 0.20,
//                         "skillCritBonus": 0.20,
//                         "firearmATKBonus": 0.10,
//                         "firearmTriggerBonus": 0.02,
//                         "skillDurationBonus": 0.10,
//                     },
//                     "customDPSBase": "valbyIntakeCalcsTier0SupplyStarter",
//                     "customDPS": "",
//                     "stats": {},
//                     "tags": ["FirearmCritRateBase","SkillCritRateBaseBonus","SkillDuration","FirearmATK%","StatusTriggerRateBase"],
//                     "returnStatOptions": {
//                     },
//                     "displayStats": [],
//                     "displayStatsALT": {
//                         "BASIC": [],
//                         "SUPPLY MOISTURE": [
//                             {"statType": "","statName": "+Trigger Rate Base","value": 0.02,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                             {"statType": "","statName": "+Firearm Crit Rate Base","value": 0.20,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                             {"statType": "","statName": "+Skill Crit Rate Base","value": 0.20,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                             {"statType": "","statName": "+Firearm ATK%","value": 0.10,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                             {"statType": "","statName": "+Skill Duration","value": 0.10,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                         ],
//                         "LAUNDRY": [
//                             {"statType": "duration","statName": "Duration","value": 20,"limit": null,"isModified": true},
//                             {"statType": "","statName": "-Enemy Elec RES","value": -0.20,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                             {"statType": "","statName": "-Enemy N-Attr RES","value": -0.20,"limit": null,"isModified": false,"isUnlabeledPercent": true},
//                         ],
//                     },
//                 },
//             }
//         }
//     },
    
//     // "Ajax": {
//     //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_002_U01.png"
//     // },
//     // "Enzo": {
//     //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_013_A01.png"
//     // },
//     // "Yujin": {
//     //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_014_A01.png"
//     // },
// }






// const customDamageLocal = {
//     //VALBY
//     //Ability 1
//     valbyBubbleCalcs(index,returnObject,isCycleCalcs,nameOverride) {
//         const characterRef = characters.Valby;
//         const settingsRef = characterRef.characterSettings;
//         const skillPlacement = 1;
//         const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
//         const abilityTypeArray = abilityMap.type;
//         const abilityMods = abilityMap.powerMods;

//         const bouncingBonus = 1 + (nameOverride ? 0 : (settingsRef.valbyBounces * abilityMods.bouncingScalar));

//         const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);

//         const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray,bouncingBonus);
//         const baseSkillPowerPuddle = calcs.getTotalSkillPower(index,abilityTypeArray);

//         const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
//         const crit = calcs.getCritComposites(returnObject);

//         const basicInfo = {baseSkillPower,abilityDR,crit};

//         const skillPowerModifier = abilityMods.base + sumModifierBonus;
//         const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

//         const skillPowerModifierPuddle = abilityMods.basePuddle + sumModifierBonus;
//         const baseCooldown = abilityMods.cooldown;

//         const damagePuddle = calcs.getCompositeDamageSpread({"baseSkillPower":baseSkillPowerPuddle,abilityDR,crit},skillPowerModifierPuddle);

//         const avgBulletDMG = damage.AVG;
//         const {cooldown,interval,DPS} = calcs.getDPSPerSkillInterval(index,damage.AVG,baseCooldown,null);
//         const avgBulletDPS = DPS;

//         const puddleDuration = abilityMods.durationPuddle * (1 + index.SkillDuration);
//         const puddleTicksCount = Math.floor(puddleDuration/abilityMods.intervalPuddle);
//         const avgPuddleDMG = damagePuddle.AVG;
//         const totalPuddleAVG = puddleTicksCount * avgPuddleDMG;

//         const SUMTotalAVG = avgBulletDMG + totalPuddleAVG;

//         if (!isCycleCalcs) {
//             let rowInjection = [
//                 {"name": "Cooldown","value": cooldown,"unit": ""},
//                 {"name": "Interval Length (s)","value": interval,"unit": ""},
//                 {"name": "DPS","value": DPS,"unit": ""},
//             ]
//             if (nameOverride != "Spiral Tidal Wave") {
//                 rowInjection.push({"name": "Bounce Multi","value": bouncingBonus,"unit": ""})
//             }
//             let rowInjection2 = [
//                 {"name": "Total Ticks","value": puddleTicksCount,"unit": ""},
//             ]

//             const breakdownArray = [
//                 {"header": "BUBBLE BULLET","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
//                     "sliderElemID": ["valbyBounces",0,7,1,"Bounces Before Impact"],
//                     "rowInjection": [rowInjection,""],
//                     "condition": nameOverride,"desc": "Bubble Bullet's damage scales by each bounce it takes before impact with the target."},
//                 {"header": "SPIRAL TIDAL WAVE","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
//                     "rowInjection": [rowInjection,""],
//                     "condition": nameOverride != "Spiral Tidal Wave","desc": ""},
//                 {"header": "SMALL PUDDLE","value": damagePuddle,"modifier": skillPowerModifierPuddle,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [puddleTicksCount,totalPuddleAVG],
//                     "rowInjection": [rowInjection2,""],
//                     "condition": false,"desc": ""},
//             ];
//             const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
//             const addRow = calcsUIHelper.addHealingBoxCluster;
//             readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
//             ${addRow("Power",baseSkillPower,"")}
//             <div class="basicsSummaryBox" id="lepicResultsBox">
//                 ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
//             </div>
//             <div class="abilityBreakdownHeader">DESCRIPTION</div>
//             <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
//             `;
//         }
//         else {
//             return {avgBulletDMG,avgBulletDPS,avgPuddleDMG,totalPuddleAVG,SUMTotalAVG}
//         }
//         // <div class="abilityBreakdownGeneralMessage">asdf.</div>
//     },
//     valbyBubbleCalcsSpiralStarter(index,returnObject,isCycleCalcs,nameOverride) {
//         return customDamage.valbyBubbleCalcs(index,returnObject,isCycleCalcs,"Spiral Tidal Wave");
//     },
//     valbyBubbleCalcsWaterStarter(index,returnObject,isCycleCalcs,nameOverride) {
//         return customDamage.valbyBubbleCalcs(index,returnObject,isCycleCalcs,"Water Play");
//     },
//     //ability 2
//     valbyPlopCalcs(index,returnObject,isCycleCalcs,nameOverride) {
//         const characterRef = characters.Valby;
//         const settingsRef = characterRef.characterSettings;
//         const skillPlacement = 2;
//         const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
//         const abilityTypeArray = abilityMap.type;
//         const abilityMods = abilityMap.powerMods;

//         const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
//         const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
//         const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
//         const crit = calcs.getCritComposites(returnObject);

//         const basicInfo = {baseSkillPower,abilityDR,crit};

//         const skillPowerModifier = abilityMods.base + sumModifierBonus;

//         const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

//         const puddleDuration = abilityMods.duration * (1 + index.SkillDuration);
//         const puddleTicksCount = Math.floor(puddleDuration/abilityMods.interval);
//         const avgPuddleDMG = damage.AVG;
//         const totalPuddleAVG = puddleTicksCount * avgPuddleDMG;
        
//         if (!isCycleCalcs) {
//             let rowInjection = [
//                 {"name": "Total Ticks","value": puddleTicksCount,"unit": ""},
//             ]

//             const breakdownArray = [
//                 {"header": "ON HIT","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
//                     "condition": false,"desc": ""},
//                 {"header": "BIG PUDDLE","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [puddleTicksCount,totalPuddleAVG],
//                     "rowInjection": [rowInjection,""],
//                     "condition": false,"desc": ""},
//             ];
//             const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
//             const addRow = calcsUIHelper.addHealingBoxCluster;
//             readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
//             ${addRow("Power",baseSkillPower,"")}
//             <div class="basicsSummaryBox" id="lepicResultsBox">
//                 ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
//             </div>
//             <div class="abilityBreakdownHeader">DESCRIPTION</div>
//             <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
//             `;
//         }
//         else {
//             return {avgPuddleDMG,totalPuddleAVG}
//         }
//         // <div class="abilityBreakdownGeneralMessage">asdf.</div>
//     },
//     valbyPlopCalcsBombStarter(index,returnObject,isCycleCalcs,nameOverride) {
//         const characterRef = characters.Valby;
//         const settingsRef = characterRef.characterSettings;
//         const skillPlacement = 2;
//         const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Hydro Pressure Bomb"];
//         const abilityTypeArray = abilityMap.type;
//         const abilityMods = abilityMap.powerMods;

//         const bouncingBonus = 1 + (nameOverride ? 0 : (settingsRef.valbyEnemiesLaundry * abilityMods.bouncingScalar));

//         const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
//         const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray,bouncingBonus);
//         const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
//         const crit = calcs.getCritComposites(returnObject);

//         const basicInfo = {baseSkillPower,abilityDR,crit};

//         const skillPowerModifier = abilityMods.base + sumModifierBonus;
//         const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

//         const baseCooldown = abilityMods.cooldown;

//         const avgBulletDMG = damage.AVG;
//         const {cooldown,interval,DPS} = calcs.getDPSPerSkillInterval(index,damage.AVG,baseCooldown,null);
//         const avgBulletDPS = DPS;



//         if (!isCycleCalcs) {
//             let rowInjection = [
//                 {"name": "Cooldown","value": cooldown,"unit": ""},
//                 {"name": "Interval Length (s)","value": interval,"unit": ""},
//                 {"name": "DPS","value": DPS,"unit": ""},
//                 {"name": "Target Multi","value": bouncingBonus,"unit": ""}
//             ]

//             const breakdownArray = [
//                 {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
//                     "sliderElemID": ["valbyEnemiesLaundry",0,10,1,"Enemies with Laundry"],
//                     "rowInjection": [rowInjection,""],
//                     "condition": false,"desc": "The skill's damage scales by each enemy hit with the Laundry effct."},
//             ];
//             const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
//             const addRow = calcsUIHelper.addHealingBoxCluster;
//             readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
//             ${addRow("Power",baseSkillPower,"")}
//             <div class="basicsSummaryBox" id="lepicResultsBox">
//                 ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
//             </div>
//             <div class="abilityBreakdownHeader">DESCRIPTION</div>
//             <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
//             `;
//         }
//         else {
//             return {avgBulletDPS,avgBulletDMG}
//         }
//         // <div class="abilityBreakdownGeneralMessage">asdf.</div>
//     },
//     //ability 3
//     valbyCleanCalcs(index,returnObject,isCycleCalcs,nameOverride) {
//         const characterRef = characters.Valby;
//         const settingsRef = characterRef.characterSettings;
//         const skillPlacement = 3;
//         const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
//         const abilityTypeArray = abilityMap.type;
//         const abilityMods = abilityMap.powerMods;

//         const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
//         const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
//         const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
//         const crit = calcs.getCritComposites(returnObject);

//         const basicInfo = {baseSkillPower,abilityDR,crit};

//         const skillPowerModifier = abilityMods.base + sumModifierBonus;

//         const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

//         const puddleDuration = abilityMods.duration * (1 + index.SkillDuration);
//         const puddleTicksCount = Math.floor(puddleDuration/abilityMods.interval);
//         const avgPuddleDMG = damage.AVG;
//         const totalPuddleAVG = puddleTicksCount * avgPuddleDMG;
        
//         if (!isCycleCalcs) {
//             let rowInjection = [
//                 {"name": "Total Ticks","value": puddleTicksCount,"unit": ""},
//             ]

//             const breakdownArray = [
//                 {"header": "LIQUEFIED","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
//                     "condition": false,"desc": ""},
//                 {"header": "WATERWAY","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [puddleTicksCount,totalPuddleAVG],
//                     "rowInjection": [rowInjection,""],
//                     "condition": false,"desc": ""},
//             ];
//             const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
//             const addRow = calcsUIHelper.addHealingBoxCluster;
//             readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
//             ${addRow("Power",baseSkillPower,"")}
//             <div class="basicsSummaryBox" id="lepicResultsBox">
//                 ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
//             </div>
//             <div class="abilityBreakdownHeader">DESCRIPTION</div>
//             <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
//             `;
//         }
//         else {
//             return {avgPuddleDMG,totalPuddleAVG}
//         }
//         // <div class="abilityBreakdownGeneralMessage">asdf.</div>
//     },
//     valbyCleanCalcsTidalStarter(index,returnObject,isCycleCalcs,nameOverride) {
//         const characterRef = characters.Valby;
//         const settingsRef = characterRef.characterSettings;
//         const skillPlacement = 3;
//         const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Tidal Wave"];
//         const abilityTypeArray = abilityMap.type;
//         const abilityMods = abilityMap.powerMods;

//         const enemiesPassed = settingsRef.valbyEnemiesPassed;
//         const bouncingBonus = 1 + (nameOverride ? 0 : (enemiesPassed * abilityMods.bouncingScalar));

//         const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);

//         const baseSkillPowerBurst = calcs.getTotalSkillPower(index,abilityTypeArray,bouncingBonus);
//         const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);

//         const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
//         const crit = calcs.getCritComposites(returnObject);

//         const basicInfo = {baseSkillPower,abilityDR,crit};

//         const skillPowerModifier = abilityMods.base + sumModifierBonus;
//         const skillPowerModifierBurst = abilityMods.baseBurst + sumModifierBonus;
//         const damageImpact = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
//         const damageBurst = calcs.getCompositeDamageSpread({"baseSkillPower":baseSkillPowerBurst,abilityDR,crit},skillPowerModifierBurst);



//         const avgBulletDMG = damageImpact.AVG;
//         const avgBulletDMGBurst = damageBurst.AVG;

//         // const SUMTotalAVG = avgBulletDMG + totalPuddleAVG;

//         if (!isCycleCalcs) {
//             let rowInjection = [
//                 {"name": "Bounce Multi","value": bouncingBonus,"unit": ""}
//             ]

//             const breakdownArray = [
//                 {"header": "LIQUEFIED","value": damageImpact,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
//                     "condition": false,"desc": ""},
//                 {"header": "BURST","value": damageBurst,"modifier": skillPowerModifierBurst,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
//                     "sliderElemID": ["valbyEnemiesPassed",0,10,1,"Enemies Passed Through"],
//                     "rowInjection": [rowInjection,""],
//                     "condition": false,"desc": "Tidal Wave's burst damage scales by each enemy passed through.<br><br>The burst damage will only trigger when the ability expires. Manually ending early will not trigger the burst."},
//             ];
//             const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
//             const addRow = calcsUIHelper.addHealingBoxCluster;
//             readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
//             ${addRow("Power",baseSkillPower,"")}
//             <div class="basicsSummaryBox" id="lepicResultsBox">
//                 ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
//             </div>
//             <div class="abilityBreakdownHeader">DESCRIPTION</div>
//             <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
//             `;
//         }
//         else {
//             return {avgBulletDMG,avgBulletDMGBurst}
//         }
//         // <div class="abilityBreakdownGeneralMessage">asdf.</div>
//     },
//     //ability 4
//     valbyBombCalcs(index,returnObject,isCycleCalcs,nameOverride) {
//         const characterRef = characters.Valby;
//         const settingsRef = characterRef.characterSettings;
//         const skillPlacement = 4;
//         const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
//         const abilityTypeArray = abilityMap.type;
//         const abilityMods = abilityMap.powerMods;

//         const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
//         const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
//         const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
//         const crit = calcs.getCritComposites(returnObject);

//         // const basicInfo = {baseSkillPower,abilityDR,crit};

//         const damage = [];//60% increases per bomb added
//         const skillPowerModifier = abilityMods.base + sumModifierBonus;

//         let powerReference = calcs.getTotalSkillPower;
//         let damageReference = calcs.getCompositeDamageSpread;
//         for (let i=0;i<=10;i++) {
//             let powerModBonus = 1 + (i * 0.60);
//             damage.push(
//                 damageReference(
//                 {
//                     baseSkillPower: powerReference(index,abilityTypeArray,powerModBonus),
//                     abilityDR,
//                     crit
//                 },
//                 skillPowerModifier
//                 )
//             )
//         }
//         // const puddleDuration = abilityMods.duration * (1 + index.SkillDuration);
//         // const puddleTicksCount = Math.floor(puddleDuration/abilityMods.interval);
//         // const avgPuddleDMG = damage.AVG;
//         // const totalPuddleAVG = puddleTicksCount * avgPuddleDMG;

//         // console.log(damage)


//         const rollDuration = 1.35;
//         const baseDuration = abilityMods.duration * (1 + index.SkillDuration);
//         const normalDuration = baseDuration - rollDuration;

//         const settingsObject = {
//             limitedWeaponAbilityBonuses,
//             "isStaticRate": false,

//             "referenceFunction": customDamage.valbyBombSkillBase,

//             "wastedTimeSkill": rollDuration,//roll duration for cancel
//             "skillOnly": true,
//             "shellCountOverride": 1,
//             "skipCoreValues": true,
//             "noReloads": true,
//             "durationRestriction": baseDuration,
//         }
//         const baseFireRate = 300;
//         const magazine = abilityMods.magazine * (1 + index.MagazineSize);
//         const actualMagSize = Math.floor(magazine);
//         //this is purely to fake out the bulletsArray returned so we can still see the total upper value on shots possible
//         //and then trim it by duration array slice, and then math.min with the actual mag size, so the fake value is never truly used
//         // const fakeMagSize = 150;

//         const currentWeaponRef = sniperList[globalRecords.weapon.currentWeapon];
//         let bulletsArray = bullets.getActiveBulletArray(index,returnObject,isCycleCalcs,nameOverride,baseFireRate,actualMagSize,currentWeaponRef,settingsObject).bulletsArray;

//         //trim the bullets array by the allowed duration specified above
//         for (let i=0;i<bulletsArray.length;i++) {
//             if (bulletsArray[i].timePassed > normalDuration) {
//                 bulletsArray = bulletsArray.slice(0,i);
//             }
//         }
//         //save the length of the bullet array to remember how many shots you actually have time for
//         const timeFor = bulletsArray.length;
//         //and then if the possible exceeds the mag size, trim the array AGAIN to cut off the extra bullets
//         if (bulletsArray.length > actualMagSize) {
//             bulletsArray = bulletsArray.slice(0,actualMagSize);
//         }
//         const possibleShots = timeFor;
//         const actualShots = Math.min(possibleShots,actualMagSize);
//         let sumBulletDamage = 0;
//         for (let entry of bulletsArray) {sumBulletDamage += entry.SkillDamage.AVG;}

//         //TODO: ain't no way I need all these fuckin variables, I'm likely just dumb as fuck, if I get bored come back here and clean this up.
//         let bubbleIncrement = 0.5;
//         let blankArrayRef = [0,0,0,0,0,0,0,0,0,0,0];
//         let stageCounterArray = [...blankArrayRef];
//         let bubbleTrackerObject = {};
//         let timeMagStarted = 0;
//         let magsDumped = 1;
//         let bulletCounter = 0;
//         let totalShotCounter = 0;
//         let stageCounter = 0;
//         for (let entry of bulletsArray) {
//             let currentShotTime = entry.timePassed;
//             bulletCounter++;
//             totalShotCounter++;

//             if (bulletCounter===1) {
//                 timeMagStarted = currentShotTime;
//             }

//             let timeReference = calcs.customTruncate(currentShotTime-timeMagStarted,4);

//             //if the current time is within a dmg interval of .5s, then assign that shot to that interval
//             if (timeReference<bubbleIncrement) {
//                 stageCounterArray[stageCounter]++;
//             }
//             //otherwise if the shot exceeds the interval, increment the interval assigned, and assign it all the same
//             else if (timeReference>=bubbleIncrement) {
//                 bubbleIncrement += 0.5;
//                 stageCounter++;
//                 stageCounterArray[stageCounter]++;
//             }
//             //if we reach the 11 shot limit for a bubble, or if we are out of shots, then buddle that bubble shot info into the records object for later
//             if (bulletCounter===11 || totalShotCounter===bulletsArray.length) {
//                 bubbleTrackerObject[magsDumped] = {
//                     "shotsArray": [...stageCounterArray],
//                     "magDuration": currentShotTime-timeMagStarted
//                 }
                
//                 bubbleIncrement = 0.5;
//                 magsDumped++;
//                 stageCounterArray = [...blankArrayRef];
//                 stageCounter=0;
//                 bulletCounter=0;
//             }
//         }



//         const totalBubbles = Object.keys(bubbleTrackerObject).length;
//         let bubble1DMG = 0;
//         for (let entry in bubbleTrackerObject) {
//             let currentEntry = bubbleTrackerObject[entry];
//             // console.log(entry)
//             if (+entry===1) {
//                 // damage

//                 let shotsSoFar = 0;
//                 for (arrayEntry of currentEntry.shotsArray) {
//                     shotsSoFar += arrayEntry;
//                     // console.log(shotsSoFar)
//                     bubble1DMG += arrayEntry != 0 ? damage[shotsSoFar-1].AVG : 0;

//                 }

//             }

//         }

//         //we already have the ability to assign dmg based on which shots happened when
//         //but the next thing I need now is to find the last shot point and assign the DOT duration afterwards and then get the dmg of the last stack gained so if a bubble only had 3 shots
//         //then find the dmg of the third stack and apply it to every interval before that bubble expires.

//         // console.log(bubbleTrackerObject);
        
//         if (!isCycleCalcs) {
//             let {bulletArrayString,graphString} = bullets.getActiveBulletGraph(bulletsArray,true);
//             // let rowInjection = [
//             //     {"name": "Total Ticks","value": puddleTicksCount,"unit": ""},
//             // ]

//             const breakdownArray = [
//                 {"header": "SUM","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
//                     "condition": false,"desc": ""},
//                 // {"header": "WATERWAY","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [puddleTicksCount,totalPuddleAVG],
//                 //     "rowInjection": [rowInjection,""],
//                 //     "condition": false,"desc": ""},
//             ];
//             const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
//             const addRow = calcsUIHelper.addHealingBoxCluster;
//             // readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
//             // ${addRow("Power",baseSkillPower,"")}
//             // <div class="basicsSummaryBox" id="lepicResultsBox">
//             //     ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
//             // </div>
//             // <div class="abilityBreakdownHeader">DESCRIPTION</div>
//             // <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
//             // `;
//             readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
//             ${addRow("Power",baseSkillPower,"")}
//             <div class="basicsSummaryBox">
//                 ${graphString}
//             </div>
//             <div class="basicsSummaryBox">
//             <div class='weaponBreakdownSplitterHeader'>BULLET INFO</div>
                
//                 <div class="tooltipHeader">Selection</div>
//                 <div class="bulletSelectorIDRowBox">

//                     <div class="toggleArrowBox" onclick="bullets.updateExpandedBullet(-1,null,null,true)">&#9664;</div>
//                     <div class="traitLevelDisplay">
//                         <input type="number" class="bulletSelectorInputWeapons" id="bulletSelectorInputWeaponsSkill" min="1" max="${actualShots}" step="1" value="1" onchange="bullets.updateExpandedBullet(null,null,null,true)">
//                     </div> 
//                     <div class="toggleArrowBox" onclick="bullets.updateExpandedBullet(1,null,null,true)">&#9654;</div>
//                 </div>
//                 ${bulletArrayString}
//             </div>
//             <div class="basicsSummaryBox">
//                 ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
//             </div>
//             <div class="abilityBreakdownHeader">DESCRIPTION</div>
//             <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
//             `;
//         }
//         else {
//             return {
//                 // avgPuddleDMG,totalPuddleAVG
//             }
//         }
//         // <div class="abilityBreakdownGeneralMessage">asdf.</div>
//     },
//     valbyBombSkillBase(index,returnObject,isCycleCalcs,nameOverride) {
//         //this needs to return SOMETHING for the sake of the reference function when skillOnly is active
//         //and we need skillOnly to be active.

//         //On top of that, we need to return a value that isn't 0 on the damage object so the chart will place it properly
//         //TODO: add handling for absent damage in cases like this(never thought we'd need it) to still chart properly on cases of 0 dmg but still shots over time

//         return {damageSkill:{perHit:1,perCrit:1,AVG:1},skillPowerModifier:0};
//     },
//     valbyBombCalcsSingingStarter(index,returnObject,isCycleCalcs,nameOverride) {
//         const characterRef = characters.Valby;
//         const settingsRef = characterRef.characterSettings;
//         const skillPlacement = 4;
//         const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Singing Water"];
//         const abilityTypeArray = abilityMap.type;
//         const abilityMods = abilityMap.powerMods;

//         const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
//         const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
//         const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
//         const crit = calcs.getCritComposites(returnObject);

//         const basicInfo = {baseSkillPower,abilityDR,crit};

//         const skillPowerModifier = abilityMods.base + sumModifierBonus;
//         const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
//         const avgBulletDMG = damage.AVG;

//         if (!isCycleCalcs) {
//             const breakdownArray = [
//                 {"header": "EXCLUSIVE WEAPON","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
//                     // "rowInjection": [rowInjection,""],
//                     "condition": false,"desc": ""},
//                 {"header": "SEDUCTION OF WATER","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
//                     "condition": false,"desc": ""},
//             ];
//             const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
//             const addRow = calcsUIHelper.addHealingBoxCluster;
//             readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
//             ${addRow("Power",baseSkillPower,"")}
//             <div class="basicsSummaryBox" id="lepicResultsBox">
//                 ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
//             </div>
//             <div class="abilityBreakdownHeader">DESCRIPTION</div>
//             <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
//             `;
//         }
//         else {
//             return {avgBulletDMG}
//         }
//         // <div class="abilityBreakdownGeneralMessage">asdf.</div>
//     },
//     //Passive
//     valbyIntakeCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) { 
//         const characterRef = characters.Valby;
//         const settingsRef = characterRef.characterSettings;
//         const skillPlacement = 5;
//         const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
//         const abilityTypeArray = abilityMap.type;
//         const abilityMods = abilityMap.powerMods;


//         if (settingsRef.valbyLaundryActive) {
//             index.enemyNonAttributeResistanceReduction += abilityMods.elecResShred;
//             index.enemyElectricResistanceReduction += abilityMods.naResShred;
//         }
//         if (settingsRef.valbyMoistureActive && nameOverride === "Supply Moisture") {
//             index.FirearmCritRateBase += abilityMods.firearmCritBonus;
//             index.SkillCritRateBaseBonus += abilityMods.skillCritBonus;
//             index.SkillDuration += abilityMods.skillDurationBonus;
//             index["FirearmATK%"] += abilityMods.firearmATKBonus;
//             index.StatusTriggerRateBase += abilityMods.firearmTriggerBonus;
//         }

//         if (!isCycleCalcs) {
//             const breakdownArray = [
//                 {"header": "SUPPLY MOISTURE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
//                     "toggleElemID": ["valbyMoistureActive","Use Moisture Bonus?"],
//                     "condition": nameOverride != "Supply Moisture","desc": ""},
//                 {"header": "LAUNDRY","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
//                     "toggleElemID": ["valbyLaundryActive","Use Laundry Bonus?"],
//                     "condition": false,"desc": ""},
//             ];
//             const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
//             const addRow = calcsUIHelper.addHealingBoxCluster;
//             readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
//             <div class="basicsSummaryBox" id="lepicResultsBox">
//                 ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
//             </div>
//             <div class="abilityBreakdownHeader">DESCRIPTION</div>
//             <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
//             `;
//         }
//         else {
//             return {}
//         }
//         // <div class="abilityBreakdownGeneralMessage">asdf.</div>
//     },
//     valbyIntakeCalcsTier0SupplyStarter(index,returnObject,isCycleCalcs,nameOverride) {
//         return customDamage.valbyIntakeCalcsTier0(index,returnObject,isCycleCalcs,"Supply Moisture")
//     },





//     //KEELAN
//     //ability 1
//     keelanCorrosionCalcs(index,returnObject,isCycleCalcs,nameOverride) {
//         const characterRef = characters.Keelan;
//         const settingsRef = characterRef.characterSettings;
//         const skillPlacement = 1;
//         const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
//         const abilityTypeArray = abilityMap.type;
//         const abilityMods = abilityMap.powerMods;

//         const stackCount = settingsRef.keelanErosionStacks;

//         const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
//         const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
//         const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
//         const crit = calcs.getCritComposites(returnObject);

//         const basicInfo = {baseSkillPower,abilityDR,crit};

//         const skillPowerModifier = abilityMods.base + sumModifierBonus;
//         const skillPowerModifierBonus = abilityMods.baseBonus + sumModifierBonus;
//         const skillPowerModifierDOT = abilityMods.baseDOT + sumModifierBonus;

//         const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
//         const damageBonus = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierBonus);
//         const damageDOT = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierDOT);

//         const damageDOTBreakdown = calcs.getDoTTotalBreakdown(index,damageDOT.AVG,abilityMods.intervalDOT,abilityMods.durationDOT);
//         // {durationDOT,totalTicks,intervalDOT,totalTickDamage}

//         //TODO: check if the bonus damage is a separate entity or bundled into the same number
//         const avgDmgPerHit = damage.AVG;
//         const avgDmgPerBonus = damageBonus.AVG;
//         const SUMDmgPerHit = damage.AVG + damageBonus.AVG;

//         const avgDmgPerTick = damageDOT.AVG;
//         const totalTickDamageErosion = damageDOTBreakdown.totalTickDamage * stackCount;

//         const SUMTotalAVG = SUMDmgPerHit + totalTickDamageErosion;

//         if (!isCycleCalcs) {
//             let rowInjection = [
//                 {"name": "DOT Duration","value": damageDOTBreakdown.durationDOT,"unit": ""},
//                 {"name": "Interval (s)","value": damageDOTBreakdown.intervalDOT,"unit": ""},
//                 {"name": "Total Ticks","value": damageDOTBreakdown.totalTicks,"unit": ""},
//             ]

//             const breakdownArray = [
//                 {"header": "PROJECTILE","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
//                     // "rowInjection": [rowInjectionBonus,"Bonus Damage"],
//                     "condition": false,"desc": ""},
//                     {"header": "ADDITONAL DMG","value": damageBonus,"modifier": skillPowerModifierBonus,"hasCritAVG": true,"unit": "",
//                         "condition": false,"desc": ""},
//                 {"header": "ACIDIC EROSION","value": damageDOT,"modifier": skillPowerModifierDOT,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [damageDOTBreakdown.totalTicks,totalTickDamageErosion],
//                     "rowInjection": [rowInjection,""],
//                     "condition": false,"desc": ""},
//             ];
//             const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
//             const addRow = calcsUIHelper.addHealingBoxCluster;
//             readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
//             <div class="basicsSummaryBox" id="lepicResultsBox">
//                 ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
//             </div>
//             <div class="abilityBreakdownHeader">DESCRIPTION</div>
//             <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
//             `;
//         }
//         else {
//             return {avgDmgPerTick,totalTickDamageErosion,avgDmgPerHit,avgDmgPerBonus,SUMDmgPerHit,SUMTotalAVG}
//         }
//         // <div class="abilityBreakdownGeneralMessage">asdf.</div>
//     },
//     //ability 2
//     keelanOnslaughtCalcs(index,returnObject,isCycleCalcs,nameOverride) {
//         const characterRef = characters.Keelan;
//         const settingsRef = characterRef.characterSettings;
//         const skillPlacement = 2;
//         const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
//         const abilityTypeArray = abilityMap.type;
//         const abilityMods = abilityMap.powerMods;

//         const stackCount = settingsRef.keelanErosionStacks;

//         const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
//         const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
//         const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
//         const crit = calcs.getCritComposites(returnObject);

//         const basicInfo = {baseSkillPower,abilityDR,crit};

//         const skillPowerModifier = abilityMods.base + sumModifierBonus;
//         const skillPowerModifierBurst = abilityMods.baseBurst + sumModifierBonus;
//         const skillPowerModifierBonus = abilityMods.baseBonus + sumModifierBonus;
//         const skillPowerModifierDOT = abilityMods.baseDOT + sumModifierBonus;

//         const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
//         const damageBurst = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierBurst);
//         const damageBonus = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierBonus);
//         const damageDOT = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierDOT);

//         const damageDOTBreakdown = calcs.getDoTTotalBreakdown(index,damageDOT.AVG,abilityMods.intervalDOT,abilityMods.durationDOT);
//         // {durationDOT,totalTicks,intervalDOT,totalTickDamage}

//         //TODO: check if the bonus damage is a separate entity or bundled into the same number
//         const avgDmgPerHit = damage.AVG;
//         const avgDmgPerAOE = damageBurst.AVG;
//         const avgDmgPerBonus = damageBonus.AVG;
//         const SUMDmgPerHit = damage.AVG + damageBonus.AVG + damageBurst.AVG;

//         const avgDmgPerTick = damageDOT.AVG;
//         const totalTickDamageErosion = damageDOTBreakdown.totalTickDamage * stackCount;

//         const SUMTotalAVG = SUMDmgPerHit + totalTickDamageErosion;

//         if (!isCycleCalcs) {
//             let rowInjection = [
//                 {"name": "DOT Duration","value": damageDOTBreakdown.durationDOT,"unit": ""},
//                 {"name": "Interval (s)","value": damageDOTBreakdown.intervalDOT,"unit": ""},
//                 {"name": "Total Ticks","value": damageDOTBreakdown.totalTicks,"unit": ""},
//             ]
//             let rowInjectionBurst = [
//                 {"name": "Burst/Hit","value": damageBurst.perHit,"unit": ""},
//                 {"name": "Burst/Crit","value": damageBurst.perCrit,"unit": ""},
//                 {"name": "Burst/AVG","value": damageBurst.AVG,"unit": ""},
//             ]

//             const breakdownArray = [
//                 {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
//                     // "rowInjection2": [rowInjectionBonus,"Bonus Damage"],
//                     "rowInjection": [rowInjectionBurst,"Burst Damage"],
//                     "condition": false,"desc": ""},
//                 {"header": "ADDITONAL DMG","value": damageBonus,"modifier": skillPowerModifierBonus,"hasCritAVG": true,"unit": "",
//                     "condition": false,"desc": ""},
//                 {"header": "ACIDIC EROSION","value": damageDOT,"modifier": skillPowerModifierDOT,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [damageDOTBreakdown.totalTicks,totalTickDamageErosion],
//                     "rowInjection": [rowInjection,""],
//                     "condition": false,"desc": ""},
//             ];
//             const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
//             const addRow = calcsUIHelper.addHealingBoxCluster;
//             readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
//             <div class="basicsSummaryBox" id="lepicResultsBox">
//                 ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
//             </div>
//             <div class="abilityBreakdownHeader">DESCRIPTION</div>
//             <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
//             `;
//         }
//         else {
//             return {avgDmgPerTick,totalTickDamageErosion,avgDmgPerHit,avgDmgPerAOE,avgDmgPerBonus,SUMDmgPerHit,SUMTotalAVG}
//         }
//         // <div class="abilityBreakdownGeneralMessage">asdf.</div>
//     },
//     //ability 3
//     keelanGustCalcs(index,returnObject,isCycleCalcs,nameOverride) {
//         const characterRef = characters.Keelan;
//         const settingsRef = characterRef.characterSettings;
//         const skillPlacement = 3;
//         const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
//         const abilityTypeArray = abilityMap.type;
//         const abilityMods = abilityMap.powerMods;

//         const stackCount = settingsRef.keelanErosionStacks;

//         const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
//         const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
//         const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
//         const crit = calcs.getCritComposites(returnObject);

//         const basicInfo = {baseSkillPower,abilityDR,crit};

//         const skillPowerModifier = abilityMods.base + sumModifierBonus;
//         const skillPowerModifierRot = abilityMods.baseRot + sumModifierBonus;
//         const skillPowerModifierDOT = abilityMods.baseDOT + sumModifierBonus;

//         const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
//         const damageRot = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierRot);
//         const damageDOT = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierDOT);

//         const damageDOTBreakdown = calcs.getDoTTotalBreakdown(index,damageDOT.AVG,abilityMods.intervalDOT,abilityMods.durationDOT);
//         // {durationDOT,totalTicks,intervalDOT,totalTickDamage}

//         //TODO: check if the bonus damage is a separate entity or bundled into the same number
//         const avgDmgPerHit = damage.AVG;
//         const avgDmgPerRot = damageRot.AVG;
//         const SUMDmgPerHit = damage.AVG + damageRot.AVG;

//         const avgDmgPerTick = damageDOT.AVG;
//         const totalTickDamageErosion = damageDOTBreakdown.totalTickDamage * stackCount;

//         const SUMTotalAVG = SUMDmgPerHit + totalTickDamageErosion;

//         if (!isCycleCalcs) {
//             let rowInjection = [
//                 {"name": "DOT Duration","value": damageDOTBreakdown.durationDOT,"unit": ""},
//                 {"name": "Interval (s)","value": damageDOTBreakdown.intervalDOT,"unit": ""},
//                 {"name": "Total Ticks","value": damageDOTBreakdown.totalTicks,"unit": ""},
//             ]

//             const breakdownArray = [
//                 {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
//                     // "rowInjection": [rowInjectionBonus,"Bonus Damage"],
//                     "condition": false,"desc": ""},
//                 {"header": "ACIDIC EROSION","value": damageDOT,"modifier": skillPowerModifierDOT,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [damageDOTBreakdown.totalTicks,totalTickDamageErosion],
//                     "rowInjection": [rowInjection,""],
//                     "condition": false,"desc": ""},
//                 {"header": "SEPTICEMIA","value": damageRot,"modifier": skillPowerModifierRot,"hasCritAVG": true,"unit": "",
//                     "condition": false,"desc": ""},
//             ];
//             const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
//             const addRow = calcsUIHelper.addHealingBoxCluster;
//             readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
//             <div class="basicsSummaryBox" id="lepicResultsBox">
//                 ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
//             </div>
//             <div class="abilityBreakdownHeader">DESCRIPTION</div>
//             <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
//             `;
//         }
//         else {
//             return {avgDmgPerTick,totalTickDamageErosion,avgDmgPerHit,avgDmgPerRot,SUMDmgPerHit,SUMTotalAVG}
//         }
//         // <div class="abilityBreakdownGeneralMessage">asdf.</div>
//     },
//     //ability 4
//     keelanTremorCalcs(index,returnObject,isCycleCalcs,nameOverride) {
//         const characterRef = characters.Keelan;
//         const settingsRef = characterRef.characterSettings;
//         const skillPlacement = 4;
//         const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
//         const abilityTypeArray = abilityMap.type;
//         const abilityMods = abilityMap.powerMods;

//         const stackCount = settingsRef.keelanErosionStacks;

//         const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
//         const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
//         const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
//         const crit = calcs.getCritComposites(returnObject);

//         const basicInfo = {baseSkillPower,abilityDR,crit};

//         const skillPowerModifier = abilityMods.base + sumModifierBonus;

//         const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);


//         const avgDmgPerHit = damage.AVG;

//         const SUMTotalAVG = damage.AVG * stackCount;

//         if (!isCycleCalcs) {
//             let rowInjection = [
//                 {"name": "Current Stacks","value": stackCount,"unit": ""},
//             ]

//             const breakdownArray = [
//                 {"header": "EROSION FOUND","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [stackCount,SUMTotalAVG],
//                     "rowInjection": [rowInjection,""],
//                     "condition": false,"desc": "Damage is modified by the stack count setting under Keelan's passive."},
//                 {"header": "NO EROSION","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
//                     "condition": false,"desc": ""},
//             ];
//             const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
//             const addRow = calcsUIHelper.addHealingBoxCluster;
//             readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
//             <div class="basicsSummaryBox" id="lepicResultsBox">
//                 ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
//             </div>
//             <div class="abilityBreakdownHeader">DESCRIPTION</div>
//             <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
//             `;
//         }
//         else {
//             return {avgDmgPerHit,SUMTotalAVG}
//         }
//         // <div class="abilityBreakdownGeneralMessage">asdf.</div>
//     },
//     //passive
//     keelanErosionCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
//         const characterRef = characters.Keelan;
//         const settingsRef = characterRef.characterSettings;
//         const skillPlacement = 5;
//         const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
//         const abilityTypeArray = abilityMap.type;
//         const abilityMods = abilityMap.powerMods;

//         // const stacks = Math.min(abilityMods.stackLimit,settingsRef.blairActiveZones);
//         // const totalModBonus = abilityMods.powerModBonus * stacks;
//         // index.PowerModifierBase += settingsRef.blairUseExtinguish ? totalModBonus : 0;

//         const agilityStacks = settingsRef.keelanAgilityStacks;
//         index.PowerModifierBase += abilityMods.powerModBonus * agilityStacks;
//         index.SprintSpeedBonus += abilityMods.speedBonus * agilityStacks;


//         if (!isCycleCalcs) {
//             // let rowInjection = [
//             //     {"name": "Valid Zones","value": stacks,"unit": ""},
//             //     {"name": "Max MP Recovered","value": 0.08 * stacks,"unit": "%"},
//             //     {"name": "+Power Modifier%","value": totalModBonus,"unit": "%"},
//             // ]

//             const breakdownArray = [
//                 {"header": "EROSION","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
//                     "sliderElemID": ["keelanErosionStacks",0,5,1,"Stacks Count"],
//                     // "rowInjection": [rowInjection,"Bonuses are modified by the flame zone count setting on the first ability."],
//                     "condition": false,"desc": ""},
//                 {"header": "AGILITY","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
//                     "sliderElemID": ["keelanAgilityStacks",0,4,1,"Stacks Count"],
//                     // "rowInjection": [rowInjection,"Bonuses are modified by the flame zone count setting on the first ability."],
//                     "condition": false,"desc": ""},
//             ];
//             const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
//             const addRow = calcsUIHelper.addHealingBoxCluster;
//             readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
//             <div class="basicsSummaryBox" id="lepicResultsBox">
//                 ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
//             </div>
//             <div class="abilityBreakdownHeader">DESCRIPTION</div>
//             <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
//             `;
//         }
//         else {
//             return {}
//         }
//     },



//     relicShootyPewPewMath(index,returnObject,isCycleCalcs,weaponRef,limitedWeaponBonuses) {
//         const settingsRef = weaponRef.weaponSettings;

//         let {avgPerShot,totalAVGDPS,totalAVGGun,totalShots,reloadEntries,magazineSize,totalTimePassed,graphParams} = customDamage.generalizedWeaponBreakdown(index,returnObject,isCycleCalcs,weaponRef,limitedWeaponBonuses,true);


//         if (settingsRef.relicUseAncientFire) {
//             const avgDmgAncient = avgPerShot * 0.40;
//             const shotsProcced = Math.floor(totalShots/4);
//             totalAVGGun += avgDmgAncient * shotsProcced;
//             totalAVGDPS = totalAVGGun/totalTimePassed;
//         }


//         if (!isCycleCalcs) {
//             let {bulletArrayString,graphString} = graphParams;

//             const rowInjectionSums = [
//                 {"name": "Magazine","value": magazineSize,"unit": "","id": "totalMagazineWeapons"},
//                 {"name": "Total Fired","value": totalShots,"unit": "","id": "totalShotsFiredWeapons"},
//                 {"name": "AVG/Shot","value": avgPerShot,"unit": "","id": "avgPerShotWeapons"},
//                 {"name": "SUM AVG","value": totalAVGGun,"unit": "","id": "totalAVGWeapons"},
//                 {"name": "AVG DPS","value": totalAVGDPS,"unit": "","id": "totalAVGWeaponsDPS"},
//             ]

//             const breakdownArray = [
//                 {"header": "GUIDED ROUND","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
//                     "condition": false,"desc": ""},
//                 {"header": "ANCIENT FIRE","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
//                     "toggleElemID": ["relicUseAncientFire","Use Unique Effect?"],
//                     // "rowInjection": [rowInjection,""],
//                     "condition": false,"desc": "The 40% effect takes the end total of all damage dealt to a target, takes 40% of that, and then deals it 3 times over the next 3 seconds.<br>This damage is not modified by any resistances, only the actual damage the enemy receives."},
//                 {"header": "FIREARM SUM","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
//                     "rowInjection": [rowInjectionSums,""],
//                     "condition": false,"desc": ""},
//             ];
//             const bodyString = `weaponBreakdownBody1`;
            
//             const addRow = calcsUIHelper.addHealingBoxCluster;
//             readSelection(`weaponBreakdownBody1`).innerHTML = `
//             <div class="basicsSummaryBox" id="lepicResultsBox">
//             <div class="traitMegaTitleHeader">UNIQUE ABILITY</div>
//                 ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,weaponRef.displayStatsALT,index,returnObject,"Restored Relic",true)}
//             </div>
//             <div class="abilityBreakdownHeader">DESCRIPTION</div>
//             <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(weaponRef.desc)}</div>


//             ${weaponRef.magazine===0 ? `<div class="missingWeaponDisplayBox" style="color:lightcoral">SELECT A WEAPON TO SEE BULLET SIMULATION INFO.</div>` :
//                 `<br>
//                 <div class="basicsSummaryBox">
//                     ${graphString}
//                 </div>
//                 <div class="basicsSummaryBox">
//                 <div class='weaponBreakdownSplitterHeader'>BULLET INFO</div>
//                     <div class="tooltipHeader">Selection</div>
//                     <div class="bulletSelectorIDRowBox">
    
//                         <div class="toggleArrowBox" onclick="bullets.updateExpandedBullet(-1)">&#9664;</div>
//                         <div class="traitLevelDisplay">
//                             <input type="number" class="bulletSelectorInputWeapons" id="bulletSelectorInputWeapons" min="1" max="${totalShots+reloadEntries}" step="1" value="1" onchange="bullets.updateExpandedBullet()">
//                         </div> 
//                         <div class="toggleArrowBox" onclick="bullets.updateExpandedBullet(1)">&#9654;</div>
//                     </div>
//                     ${bulletArrayString}
//                 </div>
//                 `}
//             `;
//         }
//         else {
//             return {avgPerShot,totalAVGDPS,totalAVGGun}
//         }
//     },


//     lanceTier0Calcs(index,returnObject,isCycleCalcs,nameOverride) {
//         const weaponRef = sniperList["King's Guard Lance"];
//         const settingsRef = weaponRef.weaponSettings;

//         if (true) {
//             stackCooldown = 0.70;
//             weaponRef.complexBonus = [
//                 {
//                     "stats": [
//                        {"name": "WeaponUniqueMultiplierCORE","value": 0.30,"subStackValue": 0.50},
//                     //    {"name": "Recoil","value": -0.05,"subStackValue": null},
//                     //    {"name": "FirearmATK%","value": 0.06,"subStackValue": null},
//                     ],
//                     "bonusName": "Beam Rifle Charge Bonus",
//                     "oneTimeOrStack": "stack",
//                     "clearOnReload": true,
//                     "limit": 2,
//                     "currentStacks": 0,
//                     "timePassedEntry": 0,
//                     "cooldown": calcs.getBeamChargeTime(index,stackCooldown,weaponRef),
//                 }
//             ]
//         }
//         else {
//             weaponRef.complexBonus = [];
//         }


//         if (!isCycleCalcs) {
//             // const rowInjection = [
//             //     {"name": "+Skill Crit Rate","value": settingsRef.arcaneWaveActive ? critBonus : 0,"unit": "%"},
//             // ]
//             const breakdownArray = [
//                 // {"header": "LANDED ALL BULLETS","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
//                 //     "toggleElemID": ["allHitsBonus","Use All Bonuses?"],
//                 //     // "rowInjection": [rowInjection,""],
//                 //     "condition": false,"desc": ""},
//                 // {"header": "AMPLIFICATION","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
//                 //     "condition": false,"desc": ""},
//             ];
//             const bodyString = `weaponBreakdownBody1`;
            
//             const addRow = calcsUIHelper.addHealingBoxCluster;
//             readSelection(`weaponBreakdownBody1`).innerHTML = `
//             <div class="basicsSummaryBox">
//             <div class="traitMegaTitleHeader">UNIQUE ABILITY</div>
//                 ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,weaponRef.displayStatsALT,index,returnObject,"King's Guard Lance",true)}
//             </div>
//             <div class="abilityBreakdownHeader">DESCRIPTION</div>
//             <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(weaponRef.desc)}</div>
//             `;
//         }
//     },
//     voltiaTier0Calcs(index,returnObject,isCycleCalcs,nameOverride) {
//         const weaponRef = sniperList["Voltia"];
//         const settingsRef = weaponRef.weaponSettings;

//         if (true) {//settingsRef.allHitsBonus
//             // console.log("reached beam logic")
//             let stackCooldown = 0.80;
//             weaponRef.complexBonus = [
//                 {
//                     "stats": [
//                        {"name": "WeaponUniqueMultiplierCORE","value": 0.25,"subStackValue": 0.50},
//                     //    {"name": "Recoil","value": -0.05,"subStackValue": null},
//                     //    {"name": "FirearmATK%","value": 0.06,"subStackValue": null},
//                     ],
//                     "bonusName": "Beam Rifle Charge Bonus",
//                     "oneTimeOrStack": "stack",
//                     "clearOnReload": true,
//                     "limit": 2,
//                     "currentStacks": 0,
//                     "timePassedEntry": 0,
//                     "cooldown": calcs.getBeamChargeTime(index,stackCooldown,weaponRef),
//                 }
//             ]
//         }
//         else {
//             weaponRef.complexBonus = [];
//         }


//         if (!isCycleCalcs) {
//             // const rowInjection = [
//             //     {"name": "+Skill Crit Rate","value": settingsRef.arcaneWaveActive ? critBonus : 0,"unit": "%"},
//             // ]
//             const breakdownArray = [
//                 // {"header": "LANDED ALL BULLETS","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
//                 //     "toggleElemID": ["allHitsBonus","Use All Bonuses?"],
//                 //     // "rowInjection": [rowInjection,""],
//                 //     "condition": false,"desc": ""},
//                 // {"header": "AMPLIFICATION","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
//                 //     "condition": false,"desc": ""},
//             ];
//             const bodyString = `weaponBreakdownBody1`;
            
//             const addRow = calcsUIHelper.addHealingBoxCluster;
//             readSelection(`weaponBreakdownBody1`).innerHTML = `
//             <div class="basicsSummaryBox">
//             <div class="traitMegaTitleHeader">UNIQUE ABILITY</div>
//                 ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,weaponRef.displayStatsALT,index,returnObject,"Voltia",true)}
//             </div>
//             <div class="abilityBreakdownHeader">DESCRIPTION</div>
//             <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(weaponRef.desc)}</div>
//             `;
//         }
//     },


//     //this function is used as the specialGunFunction in bullet sims for the sake of the grenade every 15th shot.
//     masterpiecePuddleCalcsBase(constructorObject,shotCount) {
//         // const characterRef = characters.Lepic;
//         // const settingsRef = characterRef.characterSettings;
//         // const skillPlacement = 4;
//         // const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
//         // const abilityTypeArray = abilityMap.type;
//         // const abilityMods = abilityMap.powerMods;

//         // const {totalSkillCritRate,totalSkillCritDamage} = calcs.getSkillCrit(index,characterRef.baseStats);

//         // const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
//         // const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
//         // const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
//         // const crit = calcs.getCritComposites({totalSkillCritRate,totalSkillCritDamage});

//         // const basicInfo = {baseSkillPower,abilityDR,crit};

//         // const skillPowerModifierDOT = abilityMods.baseDOT + sumModifierBonus;

//         // const damageDOT = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierDOT);

//         // const continuousDuration = abilityMods.duration * (1 + index.SkillDuration);
//         // const continuousInterval = abilityMods.interval;
//         // const ticks = Math.floor(continuousDuration/continuousInterval);

//         // const totalTickDamage = damageDOT.AVG * ticks;

//         // let perHit = damageDOT.perHit;
//         // let perCrit = damageDOT.perCrit;
//         // let AVG = damageDOT.AVG;

//         // constructorObject.damageAVGTotal += totalTickDamage;
//         // let cryoDescriptionString = "Overkill leaves AOE fields behind that deal continuous damage for a duration.";

//         // return {"name": "Overkill&nbsp;TICKS","desc": cryoDescriptionString,perHit,perCrit,AVG,ticks,totalTickDamage}

//         let perHit = 0;
//         let perCrit = 0;
//         let AVG = 0;

//         let ticks = 10;
//         let totalTickDamage = 0;

//         const is15shots = shotCount % 2 === 0;
//         if (is15shots) {
//             const shotMultiplier = 0.03;

//             perHit = constructorObject.damage * shotMultiplier;
//             perCrit = constructorObject.damageCrit * shotMultiplier;
//             AVG = constructorObject.damageAVG * shotMultiplier;

//             totalTickDamage = AVG * ticks;

//             constructorObject.damageAVGTotal += totalTickDamage;
//         }

//         let cryoDescriptionString = "While the toxin effect is active from reload, every other shot has a chance to drop a poison puddle."
//         return {"name": "Puddle of Indulgence","desc": cryoDescriptionString,perHit,perCrit,AVG,ticks,totalTickDamage}
//     },
//     masterpieceCalcs(index,returnObject,isCycleCalcs,weaponRef,limitedWeaponBonuses) {
//         const settingsRef = weaponRef.weaponSettings;

//         let settingsToSpread = settingsRef.usePoisonGrenade ? {
//             "specialGunFunction": customDamage.masterpiecePuddleCalcsBase,
//         } : null;

//         let {avgPerShot,totalAVGDPS,totalAVGGun,totalShots,reloadEntries,magazineSize,totalTimePassed,graphParams} = customDamage.generalizedWeaponBreakdown(index,returnObject,isCycleCalcs,weaponRef,limitedWeaponBonuses,true,settingsToSpread);

//         if (!isCycleCalcs) {
//             let {bulletArrayString,graphString} = graphParams;

//             const rowInjectionSums = [
//                 {"name": "Magazine","value": magazineSize,"unit": "","id": "totalMagazineWeapons"},
//                 {"name": "Total Fired","value": totalShots,"unit": "","id": "totalShotsFiredWeapons"},
//                 {"name": "AVG/Shot","value": avgPerShot,"unit": "","id": "avgPerShotWeapons"},
//                 {"name": "SUM AVG","value": totalAVGGun,"unit": "","id": "totalAVGWeapons"},
//                 {"name": "AVG DPS","value": totalAVGDPS,"unit": "","id": "totalAVGWeaponsDPS"},
//             ]

//             const breakdownArray = [
//                 {"header": "INDULGENCE","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
//                     "toggleElemID": ["usePoisonGrenade","Use Puddles?"],
//                     // "rowInjection": [rowInjection,""],
//                     "condition": false,"desc": ""},
//                 // {"header": "VOLTAGE ACCUMULATION","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
//                 //     "condition": false,"desc": ""},
//                 // {"header": "WHILE AIMING","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
//                 //     "toggleElemID": ["useAimingLauncher","Use Aiming Launcher?"],
//                 //     "condition": false,"desc": ""},
//                 {"header": "FIREARM SUM","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
//                     "rowInjection": [rowInjectionSums,""],
//                     "condition": false,"desc": ""},
//             ];
//             const bodyString = `weaponBreakdownBody1`;
            
//             const addRow = calcsUIHelper.addHealingBoxCluster;
//             readSelection(`weaponBreakdownBody1`).innerHTML = `
//             <div class="basicsSummaryBox" id="lepicResultsBox">
//             <div class="traitMegaTitleHeader">UNIQUE ABILITY</div>
//                 ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,weaponRef.displayStatsALT,index,returnObject,"The Final Masterpiece",true)}
//             </div>


//             ${weaponRef.magazine===0 ? `<div class="missingWeaponDisplayBox" style="color:lightcoral">SELECT A WEAPON TO SEE BULLET SIMULATION INFO.</div>` :
//                 `<br>
//                 <div class="basicsSummaryBox">
//                     ${graphString}
//                 </div>
//                 <div class="basicsSummaryBox">
//                 <div class='weaponBreakdownSplitterHeader'>BULLET INFO</div>
//                     <div class="tooltipHeader">Selection</div>
//                     <div class="bulletSelectorIDRowBox">
    
//                         <div class="toggleArrowBox" onclick="bullets.updateExpandedBullet(-1)">&#9664;</div>
//                         <div class="traitLevelDisplay">
//                             <input type="number" class="bulletSelectorInputWeapons" id="bulletSelectorInputWeapons" min="1" max="${totalShots+reloadEntries}" step="1" value="1" onchange="bullets.updateExpandedBullet()">
//                         </div> 
//                         <div class="toggleArrowBox" onclick="bullets.updateExpandedBullet(1)">&#9654;</div>
//                     </div>
//                     ${bulletArrayString}
//                 </div>
//                 `}
//             `;
//         }
//         else {
//             return {avgPerShot,totalAVGDPS,totalAVGGun}
//         }
//     },
    
// }

// const customSettingsLocal = {
//     // characterName(settingsRef,arrayRef) {
//     //     if (arrayRef[0] === 0) {}//1
//     //     if (arrayRef[1] === 0) {}//2
//     //     if (arrayRef[2] === 0) {}//3
//     //     if (arrayRef[3] === 0) {}//4
//     //     if (arrayRef[4] === 0) {}//passive
//     // },
    
//     Valby(settingsRef,arrayRef) {
//         if (arrayRef[0] === 0) {
//             settingsRef.valbyBounces = +readSelection("valbyBounces").value;
//         }//1
//         if (arrayRef[1] === 0) {}//2
//         else if (arrayRef[1] === "Hydro Pressure Bomb") {
//             settingsRef.valbyEnemiesLaundry = +readSelection("valbyEnemiesLaundry").value;
//         }
//         if (arrayRef[2] === 0) {}//3
//         else if (arrayRef[2] === "Tidal Wave") {
//             settingsRef.valbyEnemiesPassed = +readSelection("valbyEnemiesPassed").value;
//         }
//         if (arrayRef[3] === 0) {}//4
//         settingsRef.valbyLaundryActive = readSelection("valbyLaundryActive").checked;
//         if (arrayRef[4] === 0) {}//passive
//         else if (arrayRef[4] === "Supply Moisture") {
//             settingsRef.valbyMoistureActive = readSelection("valbyMoistureActive").checked;
//         }
//     },

//     Keelan(settingsRef,arrayRef) {
//         if (arrayRef[0] === 0) {}//1
//         if (arrayRef[1] === 0) {}//2
//         if (arrayRef[2] === 0) {}//3
//         if (arrayRef[3] === 0) {}//4

//         settingsRef.keelanErosionStacks = +readSelection("keelanErosionStacks").value;
//         settingsRef.keelanAgilityStacks = +readSelection("keelanAgilityStacks").value;
//         if (arrayRef[4] === 0) {}//passive
//     },
//     "Restored Relic"(settingsRef,arrayRef) {
//         settingsRef.relicUseAncientFire = readSelection("relicUseAncientFire").checked;
//     },
    
// }


// const customAugmentsLocal = {
//     //example augment
//     // "Predator Instinct": {
//     //     "rarity": "Transcendant",
//     //     "polarity": "Malachite",
//     //     "type": "Descendant",
//     //     "cost": 6,
//     //     "category": "Gley",
//     //     "desc": "Using a firearm while Frenzied gradually increases Firearm ATK.",
//     //     "skillOverrides": ["Predator Instinct",0,0,0,0]
//     // },

//     "Supply Moisture": {
//         "rarity": "Transcendant",
//         "polarity": "Malachite",
//         "type": "Descendant",
//         "cost": 4,
//         "category": "Valby",
//         "desc": "While on water, increases Firearm Critical Hit Rate, Skill Critical Hit Rate, Skill Duration, and Firearm Attribute Trigger Rate. MP recovery is not applied.",
//         "skillOverrides": [0,0,0,0,"Supply Moisture"]
//     },
//     "Spiral Tidal Wave": {
//         "rarity": "Transcendant",
//         "polarity": "Malachite",
//         "type": "Descendant",
//         "cost": 4,
//         "category": "Valby",
//         "desc": "Bubbles no longer bounce off the ground but are now projectiles fired forward. Attracts Gluttony's Impurities.",
//         "skillOverrides": ["Spiral Tidal Wave",0,0,0,0]
//     },
//     "Water Play": {
//         "rarity": "Transcendant",
//         "polarity": "Malachite",
//         "type": "Descendant",
//         "cost": 4,
//         "category": "Valby",
//         "desc": "Creates a rectangular-shaped Puddle of water in front of Valby.",
//         "skillOverrides": ["Water Play",0,0,0,0]
//     },
//     "Hydro Pressure Bomb": {
//         "rarity": "Transcendant",
//         "polarity": "Malachite",
//         "type": "Descendant",
//         "cost": 5,
//         "category": "Valby",
//         "desc": "Leaps forward without creating a puddle and deals damage to the surrounding enemies upon landing. The more enemies with Laundry, the more damage inflicted.",
//         "skillOverrides": [0,"Hydro Pressure Bomb",0,0,0]
//     },
//     "Tidal Wave": {
//         "rarity": "Transcendant",
//         "polarity": "Cerulean",
//         "type": "Descendant",
//         "cost": 4,
//         "category": "Valby",
//         "desc": "Does not leave watery trails when moving. When moving through a monster, inflicts skill damage on them. When the skill ends, deals Burst Damage to nearby enemies.",
//         "skillOverrides": [0,0,"Tidal Wave",0,0]
//     },
//     "Singing Water": {
//         "rarity": "Transcendant",
//         "polarity": "Rutile",
//         "type": "Descendant",
//         "cost": 5,
//         "category": "Valby",
//         "desc": "Spawns a Seduction of Water where the Unique Weapon's bullet explodes. Until it is destroyed, the spawned Seduction of Water taunts surrounding monsters and inflicts Laundry on them. When destroyed, it explodes and deals damage to nearby enemies.",
//         "skillOverrides": [0,0,0,"Singing Water",0]
//     },
    
//     // "Void Barrier": {
//     //     "rarity": "Transcendant",
//     //     "polarity": "Malachite",
//     //     "type": "Descendant",
//     //     "cost": 15,
//     //     "category": "Ultimate Ajax",
//     //     "desc": "Modifies Orbit Barrier to be portable. Changes barrier to be affected only by the caster's Skill Power."
//     // },
//     // "Life Barrier": {
//     //     "rarity": "Transcendant",
//     //     "polarity": "Malachite",
//     //     "type": "Descendant",
//     //     "cost": 15,
//     //     "category": "Ultimate Ajax",
//     //     "desc": "Modifies the Orbit Barrier and Hyper Cube barrier to only be affected by the caster's HP."
//     // },
//     // "Body Enhancement": {
//     //     "rarity": "Transcendant",
//     //     "polarity": "Almandine",
//     //     "type": "Descendant",
//     //     "cost": 17,
//     //     "category": "Ajax",
//     //     "desc": "Void Energy is no longer available through Event Horizon. Increases DEF and Energy Shield proportionally to Max HP."
//     // },
//     // "Matrix Recomputation": {
//     //     "rarity": "Transcendant",
//     //     "polarity": "Cerulean",
//     //     "type": "Descendant",
//     //     "cost": 16,
//     //     "category": "Ajax",
//     //     "desc": "Modifies Expulsion to cast a buff that helps allies survive."
//     // },
//     // "Void Charge": {
//     //     "rarity": "Transcendant",
//     //     "polarity": "Almandine",
//     //     "type": "Descendant",
//     //     "cost": 15,
//     //     "category": "Ajax",
//     //     "desc": "Modifies Void Walk and Expulsion damage to increase proportionally to DEF."
//     // },
//     // "Void Explosion": {
//     //     "rarity": "Transcendant",
//     //     "polarity": "Cerulean",
//     //     "type": "Descendant",
//     //     "cost": 14,
//     //     "category": "Ajax",
//     //     "desc": "On using Expulsion, decreases Sub Attack Cooldown and increases its Damage."
//     // },
    


//     // "Increased Efficiency": {
//     //     "rarity": "Transcendant",
//     //     "polarity": "Xantic",
//     //     "type": "Descendant",
//     //     "cost": 16,
//     //     "category": "Yujin",
//     //     "desc": "Heals himself after using skill to heal allies a certain number of times."
//     // },
//     // "Duty and Sacrifice": {
//     //     "rarity": "Transcendant",
//     //     "polarity": "Malachite",
//     //     "type": "Descendant",
//     //     "cost": 14,
//     //     "category": "Yujin",
//     //     "desc": "Grants Recovery and Recovery per Second to allies in the Squad and Party participating in the same mission."
//     // },
//     // "Increased Efficiency": {
//     //     "rarity": "Transcendant",
//     //     "polarity": "Malachite",
//     //     "type": "Descendant",
//     //     "cost": 14,
//     //     "category": "Yujin",
//     //     "desc": "Inflicts Explosive Reaction. Deals damage to nearby enemies when the effect ends or the enemy dies. Inflicts the same effect to nearby enemies when the enemy dies."
//     // },
//     // "First Aid Kit": {
//     //     "rarity": "Transcendant",
//     //     "polarity": "Malachite",
//     //     "type": "Descendant",
//     //     "cost": 14,
//     //     "category": "Yujin",
//     //     "desc": "Set up a First Aid Kit and grants First Aid to allies."
//     // },




//     // "First Aid Kit": {
//     //     "rarity": "Transcendant",
//     //     "polarity": "Xantic",
//     //     "type": "Descendant",
//     //     "cost": 16,
//     //     "category": "Enzo",
//     //     "desc": "Attaches a Combat Drone to himself. On Firearm Critical Hit attack, increases the drone's duration. Increases the Max Stacks of Explosive Drone."
//     // },
//     // "Reinforce Front Line": {
//     //     "rarity": "Transcendant",
//     //     "polarity": "Malachite",
//     //     "type": "Descendant",
//     //     "cost": 14,
//     //     "category": "Enzo",
//     //     "desc": "Spawns a Front Line Reinforcement Device that grants a Firearm ATK Up to allies in range."
//     // },
//     // "Supply Firearm Enhancer": {
//     //     "rarity": "Transcendant",
//     //     "polarity": "Malachite",
//     //     "type": "Descendant",
//     //     "cost": 14,
//     //     "category": "Enzo",
//     //     "desc": "Summons a Firearm Enhancement Device. Touching grants Weak Point Damage and Firearm Critical Hit Rate Up."
//     // },
//     // "Supply Tactical Armor": {
//     //     "rarity": "Transcendant",
//     //     "polarity": "Malachite",
//     //     "type": "Descendant",
//     //     "cost": 14,
//     //     "category": "Enzo",
//     //     "desc": "Whenever Enzo buffs an ally, he grants himself and all allies Incoming Damage DOWN and Movement Speed UP."
//     // },
// }