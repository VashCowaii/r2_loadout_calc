const characters = {
    "": {
        "baseStats": {
            "HP": 0,
            "Shield": 0,
            "ShieldInCombat": 0,
            "ShieldOutCombat": 0,
            "DEF": 0,
            "ResistanceFire": 0,
            "ResistanceChill": 0,
            "ResistanceElectric": 0,
            "ResistanceToxin": 0,
            "MP": 0,
            "MPInCombat": 0,
            "MPOutCombat": 0,
            "CritRate": 0,
            "CritDamage": 1,
        },
        "image": "/images/Remnant/clear.png",
        "abilities": {
            "ability1": {
                "base": {
                    "name": "No Character Selected",
                    "image": "/images/Remnant/clear.png",
                    "type": [""],
                    "customDPS": "",
                    "desc": "",
                    "returnStatOptions": {},
                    "displayStatsALT": {
                        "BASIC": [],
                    },
                },
            },
            "ability2": {
                "base": {
                    "name": "No Character Selected",
                    "image": "/images/Remnant/clear.png",
                    "type": [""],
                    "customDPS": "",
                    "desc": "",
                    "returnStatOptions": {},
                    "displayStatsALT": {
                        "BASIC": [],
                    },
                },
            },
            "ability3": {
                "base": {
                    "name": "No Character Selected",
                    "image": "/images/Remnant/clear.png",
                    "type": [""],
                    "customDPS": "",
                    "desc": "",
                    "returnStatOptions": {},
                    "displayStatsALT": {
                        "BASIC": [],
                    },
                },
            },
            "ability4": {
                "base": {
                    "name": "No Character Selected",
                    "image": "/images/Remnant/clear.png",
                    "type": [""],
                    "customDPS": "",
                    "desc": "",
                    "returnStatOptions": {},
                    "displayStatsALT": {
                        "BASIC": [],
                    },
                },
            },
            "ability5": {
                "base": {
                    "name": "No Character Selected",
                    "image": "/images/Remnant/clear.png",
                    "type": [""],
                    "customDPS": "",
                    "desc": "",
                    "returnStatOptions": {},
                    "displayStatsALT": {
                        "BASIC": [],
                    },
                },
            }
        }
    },

    "Hailey": {
        "baseStats": {
            "HP": 935,
            "Shield": 537,
            "ShieldInCombat": 4.08,
            "ShieldOutCombat": 4.88,
            "DEF": 2441,
            "ResistanceFire": 11,
            "ResistanceChill": 13,
            "ResistanceElectric": 11,
            "ResistanceToxin": 11,
            "MP": 300,
            "MPInCombat": 0,
            "MPOutCombat": 0.3,
            "CritRate": 0.05,
            "CritDamage": 1.4,
        },
        "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_016_A01.png",
        "name": "Hailey",
        "characterSettings": {
            "haileyColdFuryBar4": 16,
            "haileyDistanceBar4": 25,
            "haileyUseWeakspots": true,
            "haileyUsePhysBonus": false,
            "haileyUseCryoDamage": true,
            "haileySupercooledStacks": 5,
        },
        "abilities": {
            "ability1": {
                "base": {
                    "name": "Cryo Round",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_016_A01_01.png",
                    "type": ["Chill","Dimension"],
                    "desc": "Fires a Cryo Round at enemies in front to deal damage and inflict Cryo. Targets with Cryo stacks receive additional damage and lose 1 stack when hit by any firearm damage, not skill damage.",
                    "powerMods": {
                        "base": 93.8/100,
                    },
                    "customDPS": "haileyCryoRoundCalcs",
                    "returnStatOptions": {
                        "Skill - AVG/Hit" : "avgPerHit",
                        "SUM Total AVG" : "totalAVG",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 8,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 22,"limit": null,"isModified": true},
                        ],
                        "CRYO ROUNDS": [
                            {"statType": "","statName": "Max Fire Count","value": 9,"limit": null,"isModified": false},
                            {"statType": "","statName": "Max Targets Hit","value": 9,"limit": null,"isModified": false},
                        ],
                        "CRYO": [
                            {"statType": "duration","statName": "Duration","value": 12,"limit": null,"isModified": true},
                            {"statType": "","statName": "Additional DMG%","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Max Stacks","value": 9,"limit": null,"isModified": false},
                        ],
                        "FLASH FREEZE": [
                            {"statType": "duration","statName": "Duration","value": 12,"limit": null,"isModified": true},
                            {"statType": "","statName": "-Speed%/Stack","value": -0.05,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "-Speed%/Stack (Boss)","value": -0.01,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Max Stacks","value": 9,"limit": null,"isModified": false},
                        ],
                    },
                },
                "Cryogenic Cluster Shot": {
                    "name": "Cryogenic Cluster Shot",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_016_R01_Rune.png",
                    "type": ["Chill","Dimension"],
                    "desc": "Fires a Cryogenic Cluster Shot at enemies in front to deal damage and inflict Cryogenic. Targets with Cryogenic stacks receive additional damage and lose 1 stack when hit by Hailey's Firearm Attacks. Additionally, each stack reduction deals Burst damage to nearby enemies.",
                    "powerMods": {
                        "base": 119.7/100,
                        "baseCryogenic": 178.8/100,
                    },
                    "customDPS": "haileyCryoRoundCalcsCluster",
                    "returnStatOptions": {
                        "Skill - AVG/Hit" : "avgPerHit",
                        "Cryogenic - AVG/Hit" : "avgPerHitCryogenic",
                        "Total Hit Damage" : "totalAVGHits",
                        "Total Cryo Damage" : "totalAVGHitsCryo",
                        "SUM Total AVG" : "sumTotalAVG",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 8,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 22,"limit": null,"isModified": true},
                        ],
                        "CRYOGENIC CLUSTER SHOT": [
                            {"statType": "","statName": "Max Fire Count","value": 9,"limit": null,"isModified": false},
                            {"statType": "","statName": "Max Targets Hit","value": 9,"limit": null,"isModified": false},
                        ],
                        "CRYOGENIC": [
                            {"statType": "duration","statName": "Duration","value": 15,"limit": null,"isModified": true},
                            {"statType": "","statName": "Additional DMG%","value": 0.25,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Max Stacks","value": 9,"limit": null,"isModified": false},
                        ],
                        "FLASH FREEZE": [
                            {"statType": "duration","statName": "Duration","value": 12,"limit": null,"isModified": true},
                            {"statType": "","statName": "-Speed%/Stack","value": -0.05,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "-Speed%/Stack (Boss)","value": -0.01,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Max Stacks","value": 9,"limit": null,"isModified": false},
                        ],
                    },
                },
            },
            "ability2": {
                "base": {
                    "name": "Storm Snare",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_016_A01_02.png",
                    "type": ["Chill","Singular"],
                    "stats": {},
                    "desc": "Unleashes a Chill Vortex around her, knocking back hit targets and firing a massive Freezing Beam in the direction of the crosshairs. Inflicts Cryo on targets hit based on Enemy AOE.",
                    "powerMods": {
                        "base": 8902.2/100,
                        "AOE": 4533.9/100,
                    },
                    "customDPS": "haileyStormCalcs",//haileyBigFuckinGunCalcs
                    "returnStatOptions": {
                        "AVG AOE DMG" : "avgPerAOE",
                        "AVG Impact DMG" : "avgPerHit",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 50,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 60,"limit": null,"isModified": true},
                        ],
                        "IMPACT": [
                            {"statType": "","statName": "Applied Cryo (Impact)","value": 5,"limit": null,"isModified": false},
                            {"statType": "","statName": "Knockback Range","value": 5,"limit": 2,"isModified": true},
                            {"statType": "","statName": "Applied Cryo (Knockback)","value": 5,"limit": null,"isModified": false},
                        ],
                        "IMPACT AOE": [
                            {"statType": "","statName": "Applied Cryo (Impact)","value": 2,"limit": null,"isModified": false},
                        ],
                        "CRYO": [
                            {"statType": "duration","statName": "Duration","value": 12,"limit": null,"isModified": true},
                            {"statType": "","statName": "Additional DMG%","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Max Stacks","value": 9,"limit": null,"isModified": false},
                        ],
                        "FLASH FREEZE": [
                            {"statType": "duration","statName": "Duration","value": 12,"limit": null,"isModified": true},
                            {"statType": "","statName": "-Speed%/Stack","value": -0.05,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "-Speed%/Stack (Boss)","value": -0.01,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Max Stacks","value": 9,"limit": null,"isModified": false},
                        ],
                    },
                },
            },
            "ability3": {
                "base": {
                    "name": "Cold Fury",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_016_A01_03.png",
                    "type": ["Chill","Dimension"],
                    "desc": "Grants Hailey Cold Fury every second. The Cold Fury effect gradually decreases her movement speed, but greatly increases the base Firearm and Skill Critical Hit Rate and Firearm Penetration.<br>When Cold Fury reaches maximum stacks, Hailey becomes immune to Knockdown and gains an increase to her Firearm and Skill Critical Hit Damage. However, rolling or grappling removes 3 stacks.",
                    "customDPSBase": "haileyFuryCalcsTier0",
                    "customDPS": "",
                    "returnStatOptions": {
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 5,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 12,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "Continuous Cost","value": 10,"limit": null,"isModified": true},
                            {"statType": "","statName": "Cost Interval (s)","value": 1,"limit": null,"isModified": false},
                        ],
                        "COLD FURY": [
                            {"statType": "","statName": "Skill & Firearm Crit Rate/Stack","value": 0.025,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "+Firearm Pen.","value": 20,"limit": null,"isModified": false},
                            {"statType": "","statName": "+Firearm Pen./Stack","value": 6,"limit": null,"isModified": false},
                            {"statType": "","statName": "Max Stacks","value": 16,"limit": null,"isModified": false},
                            {"statType": "","statName": "-Movement Speed%/Stack","value": -0.025,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Stack Loss/Movement Skill","value": -3,"limit": null,"isModified": false},
                        ],
                        "MAX STACKS BONUS": [
                            {"statType": "","statName": "Skill & Firearm Crit DMG","value": 0.20,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
            },
            "ability4": {
                "base": {
                    "name": "Zenith",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_016_A01_04.png",
                    "type": ["Chill","Singular"],
                    "customDPSBase": "",
                    "customDPS": "haileyZenithCalcs",//haileyZenithCalcs
                    "desc": "Equips her Unique Weapon. When hitting an enemy with the Unique Weapon, greatly increases Penetration and Firearm ATK and deals additional Chill skill damage. Recovers a portion of MP upon successfully attacking Weak Points. Partially decreases the Cooldown of the Unique Weapon skill when the skill ends depending on the number of bullets fired.",
                    "powerMods": {
                        "base": 3627.4/100,
                        "firearmATKMulti": 0.50,
                        "magazine": 4,
                    },
                    "returnStatOptions": {
                        "Skill - AVG/Hit" : "avgSkillHit",
                        "Skill - Total AVG" : "totalAVGSKill",
                        "Gun - AVG/Hit" : "avgGunPerHit",
                        "Gun - Total AVG" : "totalAVGGun",
                        "SUM Total AVG" : "totalAVGSum",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 30,"limit": null,"isModified": true},
                            {"statType": "","statName": "Max CDR when finished","value": -0.90,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "SUPERCOOLED": [],
                        "UNIQUE WEAPON - SKILL SPLIT": [],
                        "UNIQUE WEAPON - FIREARM SPLIT": [
                            {"statType": "","statName": "+Firearm ATK Multi","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "magazine","statName": "Magazine","value": 4,"limit": null,"isModified": true},
                            {"statType": "","statName": "MP Recovery/Weak Point Shot","value": 0.15,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "UNIQUE WEAPON - SUM": [],
                    },
                },
                "Supercooled Kuiper Round": {
                    "name": "Supercooled Kuiper Round",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_016_R02_Rune.png",
                    "type": ["Chill","Singular"],
                    "customDPSBase": "haileyZenithCalcsSuperStarterTier0",
                    "customDPS": "haileyZenithCalcsSuperStarter",//haileyZenithCalcs
                    "desc": "Equips a Unique Weapon. Grants self Supercooled, which increases Weak Point Damage. When hitting an enemy with a Unique Weapon, slightly increases ATK and inflicts additional Chill skill damage.<br>Reduces Supercooled stacks upon firing, but gains stacks upon successful Weak Point Attacks.",
                    "powerMods": {
                        "base": 3627.4/100,
                        "firearmATKMulti": 0.25,
                        "magazine": 4,
                        "weakpointStackBonus": 0.097
                    },
                    "returnStatOptions": {
                        "Skill - AVG/Hit" : "avgSkillHit",
                        "Skill - Total AVG" : "totalAVGSKill",
                        "Gun - AVG/Hit" : "avgGunPerHit",
                        "Gun - Total AVG" : "totalAVGGun",
                        "SUM Total AVG" : "totalAVGSum",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 30,"limit": null,"isModified": true},
                            {"statType": "","statName": "Max CDR when finished","value": -0.90,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "SUPERCOOLED": [
                            {"statType": "","statName": "+Weak Point%/Stack","value": 0.097,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Base Stacks","value": 5,"limit": null,"isModified": false},
                            {"statType": "","statName": "Max Stacks","value": 12,"limit": null,"isModified": false},
                            {"statType": "","statName": "Stack Loss on Firing","value": -1,"limit": null,"isModified": false},
                            {"statType": "","statName": "Stack Gain on WP Hit","value": 2,"limit": null,"isModified": false},
                        ],
                        "UNIQUE WEAPON - SKILL SPLIT": [],
                        "UNIQUE WEAPON - FIREARM SPLIT": [
                            {"statType": "","statName": "+Firearm ATK Multi","value": 0.25,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "magazine","statName": "Magazine","value": 4,"limit": null,"isModified": true},
                            {"statType": "","statName": "Shield Recovery/WP Shot","value": 0.15,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "UNIQUE WEAPON - SUM": [],
                    },
                },
            },
            "ability5": {
                "base": {
                    "name": "Safe Strategic Retreat",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_016_A01_00.png",
                    "type": ["Chill"],
                    "desc": "Proportional to the distance between the target and Hailey, the Weak Point Damage decreases the closer you are to your target and increases the farther you are.",
                    "customDPSBase": "haileyRetreatCalcsTier0",
                    "customDPS": "",
                    "returnStatOptions": {
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [],
                        "SAFE STRATEGIC RETREAT": [
                            {"statType": "","statName": "Reference Distance (m)","value": 12.5,"limit": null,"isModified": false},
                            {"statType": "","statName": "Max Distance (m)","value": 25,"limit": null,"isModified": false},
                            {"statType": "","statName": "Min Distance (m)","value": 0,"limit": null,"isModified": false},
                            {"statType": "","statName": "Max Bonus","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Min Bonus","value": -0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
            }
        }
    },
    "Kyle": {
        "baseStats": {
            "HP": 1309,
            "Shield": 1006,
            "ShieldInCombat": 2.68,
            "ShieldOutCombat": 3.22,
            "DEF": 2441,
            "ResistanceFire": 11,
            "ResistanceChill": 13,
            "ResistanceElectric": 11,
            "ResistanceToxin": 11,
            "MP": 0,
            "MagneticForce": 1,//1 simply means to calculate MF's amount, it doesn't mean you only have 1
            "MPInCombat": 0,
            "MPOutCombat": 0,
            "CritRate": 0.05,
            "CritDamage": 1.3,
        },
        "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_011_A01.png",
        "name": "Kyle",
        "characterSettings": {
            "repulsionDEFBonus": true,
            "magForceBarState": 100,
        },
        "abilities": {
            "ability1": {
                "base": {
                    "name": "Repulsion Dash",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_A01_01.png",
                    "type": ["Non-Attribute","Tech"],
                    "desc": "Charges forward to deal damage and inflict Knockback on targets. After using skill, recovers Magnetic Force proportional to Max Shield and recovers additional Magnetic Force based on the number of enemies hit. When the skill ends, grants DEF Increase to self.",
                    "powerMods": {
                        "base": 608.9/100,
                        "cooldown": 12,
                        "DEF": 1.5
                    },
                    "customDPSBase": "kyleRepulsionCalcsTier0",
                    "customDPS": "kyleRepulsionCalcs",
                    "returnStatOptions": {
                        "Impact - AVG/Hit" : "avgDmgPerImpact1",
                        "Impact - AVG/DPS" : "avgDPSImpact1",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "","statName": "Max Stacks","value": 3,"limit": null,"isModified": false},
                            {"statType": "cooldown","statName": "Cooldown","value": 12,"limit": null,"isModified": true},
                        ],
                        "SKILL EFFECT": [
                            {"statType": "range","statName": "Max Move Distance","value": 10,"limit": 2.5,"isModified": false},
                            {"statType": "range","statName": "Range","value": 1.5,"limit": 2.5,"isModified": true},
                            {"statType": "","statName": "Mag Force/Cast (%Shield)","value": 0.25,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Mag Force/Hit (%Shield)","value": 0.10,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "DEF +": [
                            {"statType": "","statName": "+DEF %","value": 1.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "duration","statName": "Duration","value": 5,"limit": null,"isModified": true},
                        ],
                        "STUN": [],
                    },
                },
                "Collision Instinct": {
                    "name": "Collision Instinct",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_R01_Rune.png",
                    "type": ["Non-Attribute","Tech"],
                    "desc": "Inflicts damage and Knockback to enemies on impact, then inflicts Stun afterwards. After using skill, recovers Magnetic Force proportional to Max Shield and recovers additional Magnetic Force based on the number of enemies hit..",
                    "powerMods": {
                        "base": 608.9/100,
                        "cooldown": 12,
                        "DEF": 1.5
                    },
                    "customDPSBase": "",
                    "customDPS": "kyleRepulsionCalcsInstinctStarter",
                    "returnStatOptions": {
                        "Impact - AVG/Hit" : "avgDmgPerImpact1",
                        "Impact - AVG/DPS" : "avgDPSImpact1",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "","statName": "Max Stacks","value": 3,"limit": null,"isModified": false},
                            {"statType": "cooldown","statName": "Cooldown","value": 12,"limit": null,"isModified": true},
                        ],
                        "SKILL EFFECT": [
                            {"statType": "range","statName": "Max Move Distance","value": 10,"limit": 2.5,"isModified": false},
                            {"statType": "range","statName": "Range","value": 1.5,"limit": 2.5,"isModified": true},
                            {"statType": "","statName": "Mag Force/Cast (%Shield)","value": 0.25,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Mag Force/Hit (%Shield)","value": 0.10,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "STUN": [
                            {"statType": "duration","statName": "Duration","value": 3,"limit": null,"isModified": true},
                        ],
                        "DEF +": [],
                    },
                },
            },
            "ability2": {
                "base": {
                    "name": "Magnetic Bulwark",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_A01_02.png",
                    "type": ["Non-Attribute","Dimension"],
                    "desc": "Extends both hands to create a Barrier in front that blocks enemy ranged attacks.<br>Using the Barrier continuously recovers Magnetic Force. Every attack blocked by the Barrier recovers additional Magnetic Force proportional to the damage blocked.",
                    "powerMods": {},
                    "customDPSBase": "",
                    "customDPS": "kyleBulwarkCalcs",
                    "returnStatOptions": {
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 15,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "Shield Cost","value": 0.07,"limit": null,"isModified": true,"isUnlabeledPercent": true},
                            {"statType": "duration","statName": "Shield Cost Interval","value": 1,"limit": null,"isModified": false},
                        ],
                        "BARRIER": [
                            {"statType": "range","statName": "Range","value": 3,"limit": 1,"isModified": false},
                            {"statType": "","statName": "HP (%Caster Shield)","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "% Caster DEF","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "% Caster Fire Res","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "% Caster Chill Res","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "% Caster Elec Res","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "% Caster Toxin Res","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "DMG Taken Conversion","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Mag Force/Interval (%Shield)","value": 0.10,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
                "Diamagnetic Bulwark": {
                    "name": "Diamagnetic Bulwark",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_R03_Rune.png",
                    "type": ["Non-Attribute","Dimension"],
                    "desc": "Creates a Barrier that inflicts Knockback on all enemies in contact. Continuously recovers Magnetic Force while using the Barrier and recovers Magnetic Force based on the number of times the Barrier inflicted Knockback on enemies.",
                    "powerMods": {
                        "base": 109.7/100,
                        "cooldown": 20,
                        "MaxHits": 50
                    },
                    "customDPSBase": "",
                    "customDPS": "kyleDiamagneticCalcs",
                    "returnStatOptions": {
                        "Barrier Hits - AVG/Hit" : "avgDmgPerTick2",
                        "AVG DPS" : "avgDPSTicks2",
                        "SUM Total AVG DMG" : "sumTotalAVGTicks2",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 20,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "Shield Cost","value": 0.07,"limit": null,"isModified": true,"isUnlabeledPercent": true},
                            {"statType": "duration","statName": "Shield Cost Interval","value": 1,"limit": null,"isModified": false},
                        ],
                        "BARRIER": [
                            {"statType": "range","statName": "Range","value": 3,"limit": 1,"isModified": false},
                            {"statType": "","statName": "Max Hits","value": 50,"limit": null,"isModified": false,"isUnlabeledPercent": false},
                            {"statType": "duration","statName": "Duration","value": 6,"limit": null,"isModified": true},
                            {"statType": "","statName": "Mag Force/Hit","value": 0.02,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Mag Force/Interval (%Shield)","value": 0.05,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
            },
            "ability3": {
                "base": {
                    "name": "Magnetism Spurt",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_A01_03.png",
                    "type": ["Non-Attribute","Dimension"],
                    "desc": "When hit by enemies in the Magnetism Spurt state, Magnetic force is consumed instead of Shield and HP.<br>When all Magnetic Force is consumed or when the skill is deactivated, discharges Magnetic Force to deal damage. When the skill ends, restores Shields to nearby allies and self proportional to max shield.",
                    "powerMods": {
                        "base": 707.6/100,
                        "baseMagForce": 274.8/100,
                    },
                    "customDPSBase": "",
                    "customDPS": "kyleSpurtCalcs",
                    "returnStatOptions": {
                        "Explosion - AVG/Hit" : "avgDmgPerExplosion",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 30,"limit": null,"isModified": true},
                            {"statType": "duration","statName": "Mag Force Cost Interval","value": 1,"limit": null,"isModified": false},
                            {"statType": "cost","statName": "Mag Force Cost","value": 0.08,"limit": null,"isModified": true,"isUnlabeledPercent": true},
                            {"statType": "duration","statName": "Duration","value": 20,"limit": null,"isModified": true},
                        ],
                        "SKILL EFFECT": [
                            {"statType": "range","statName": "Range","value": 8,"limit": 2.5,"isModified": true},
                            {"statType": "","statName": "Shield Recovery","value": 0.30,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Ally Shield Recovery","value": 0.30,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Damage Reduction","value": 0.25,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "TRACTION BEAM": [],
                    },
                },
                "Self-Directed Eruption": {
                    "name": "Self-Directed Eruption",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_R02_Rune.png",
                    "type": ["Non-Attribute","Dimension"],
                    "desc": "When hit by enemies in the Magnetism Spurt state, Magnetic force is consumed instead of Shield and HP.<br>Consumes Magnetic Force every second to pull enemies in front of you closer. When all Magnetic Force is consumed or when the skill is deactivated, deals damage to nearby enemies within the radius. When the skill ends, restores Shield proportionally to Max Shield.",
                    "powerMods": {
                        "base": 784.3/100,
                        "baseMagForce": 446.5/100,
                    },
                    "customDPSBase": "",
                    "customDPS": "kyleSpurtCalcsEruptionStarter",
                    "returnStatOptions": {
                        "Explosion - AVG/Hit" : "avgDmgPerExplosion",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 30,"limit": null,"isModified": true},
                            {"statType": "duration","statName": "Mag Force Cost Interval","value": 1,"limit": null,"isModified": false},
                            {"statType": "cost","statName": "Mag Force Cost","value": 0.10,"limit": null,"isModified": true,"isUnlabeledPercent": true},
                            {"statType": "duration","statName": "Duration","value": 8,"limit": null,"isModified": true},
                        ],
                        "SKILL EFFECT": [
                            {"statType": "range","statName": "Range","value": 8,"limit": 2.5,"isModified": true},
                            {"statType": "","statName": "Shield Recovery","value": 0.30,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "TRACTION BEAM": [
                            {"statType": "range","statName": "Range","value": 15,"limit": 2.5,"isModified": true},
                        ],
                    },
                },
            },
            "ability4": {
                "base": {
                    "name": "Superconductivity Thrusters",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_A01_04.png",
                    "type": ["Non-Attribute","Tech"],
                    "desc": "Uses Superconductivity Thrusters to soar into the air. Descends, colliding with enemies and dealing damage upon impact. Damage increases proportionally to the amount of Magnetic Force held on impact. When the skill ends, Magnetic Force is fully consumed.",
                    "powerMods": {
                        "base": 26980.6/100,
                        "baseMagForce": 12861.8/100,
                        "cooldown": 120,
                    },
                    "customDPSBase": "",
                    "customDPS": "kyleThrustersCalcs",
                    "returnStatOptions": {
                        "Impact - AVG/Hit" : "avgDmgPerImpact4",
                        "Impact - AVG/DPS" : "avgDPSImpact1",
                        "SUM Total DMG (All bonuses)" : "totalImpactDamage4",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 120,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "Minimum Force Required","value": 0.30,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "SKILL EFFECT": [
                            {"statType": "range","statName": "Range","value": 5,"limit": 2.5,"isModified": true},
                            {"statType": "duration","statName": "Flight Duration","value": 7.4,"limit": null,"isModified": false},
                        ],
                        "SUM": [],
                    },
                },
                "Superconductive Bombing": {
                    "name": "Superconductive Bombing",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_R04_Rune.png",
                    "type": ["Non-Attribute","Tech"],
                    "desc": "Uses Superconductive Bombing to fly in the air and drop bombs. Each bomb consumes Magnetic Force to drop and the bombing stops when Magnetic Force is completely depleted.<br>On collision with an enemy, deals damage to the enemy, but additional damage from Magnetic Force on collision is not triggered. Additionally, the flying duration is now affected by the Skill Duration UP effect. While using the skill, you are immune to Knockdown and Knockback effects.",
                    "powerMods": {
                        "base": 1895.7/100,
                        "baseBombs": 835.6/100,
                        "bombsPerSet": 6,
                        "bombCost": 1080,
                        "cooldown": 60,
                        "duration": 7.4,
                        "dropInterval": 0.5
                    },
                    "customDPSBase": "",
                    "customDPS": "kyleBomberCalcs",
                    "returnStatOptions": {
                        "Impact - AVG/Hit" : "avgDmgPerImpact4",
                        "Bombs - AVG/Hit" : "avgDmgPerBomb4",
                        "Bombs - SUM AVG" : "avgDmgPerBomb4",
                        "DPS per Interval" : "avgTotalDPS4",
                        "DPS per Cast" : "avgActiveDPS",
                        "SUM Total AVG DMG" : "sumTotalAVGSkill",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 120,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "Minimum Force Required","value": 0.30,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "cost","statName": "Cost per Bomb Set","value": 1080.0,"limit": null,"isModified": true},
                        ],
                        "IMPACT": [
                            {"statType": "range","statName": "Impact Range","value": 5,"limit": 2,"isModified": true},
                            {"statType": "duration","statName": "Flight Duration","value": 7.4,"limit": null,"isModified": true},
                        ],
                        "BOMBS": [
                            {"statType": "range","statName": "Bomb Range","value": 3,"limit": 2,"isModified": true},
                        ],
                        "SUM": [],
                    },
                },
            },
            "ability5": {
                "base": {
                    "name": "Experienced Technician",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_A01_00.png",
                    "type": ["Non-Attribute"],
                    "desc": "Max amount of Magnetic Force increases proportionally to Max Shield. When the Shield is fully consumed, gains Magnetic Care. This effect has a cooldown.<br>Magnetic Force gradually decreases while Out of Combat",
                    "powerMods": {
                    },
                    "customDPSBase": "kyleBarCalcsTier0",
                    "customDPS": "",
                    "returnStatOptions": {
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 150,"limit": null,"isModified": true},
                        ],
                        "MAGNETIC FORCE": [
                            {"statType": "","statName": "Amount from Shield","value": 2.0,"limit": null,"isModified": true,"isUnlabeledPercent": true},
                            {"statType": "duration","statName": "Cost Interval","value": 1,"limit": null,"isModified": false},
                            {"statType": "cost","statName": "Cost/Interval","value": 0.01,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "MAGNETIC CARE": [
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                            {"statType": "duration","statName": "Recovery Interval","value": 1,"limit": null,"isModified": false},
                            {"statType": "","statName": "Shield Recovery","value": 0.04,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Mag Force Recovery","value": 0.04,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
            }
        }
    },
    "Lepic": {
        "baseStats": {
            "HP": 1402,
            "Shield": 491,
            "ShieldInCombat": 3.3,
            "ShieldOutCombat": 3.96,
            "DEF": 3953,
            "ResistanceFire": 13,
            "ResistanceChill": 11,
            "ResistanceElectric": 11,
            "ResistanceToxin": 11,
            "MP": 243,
            "MPInCombat": 0,
            "MPOutCombat": 0.5,
            "CritRate": 0.15,
            "CritDamage": 1.3,
        },
        "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_001_U01.png",
        "name": "Lepic",
        "characterSettings": {
            "lepicOverclockBonus": true,
            "lepicFirearmMasterBonus": true,
            "lepicOverclockMPRestrictions": true,
        },
        "abilities": {
            "ability1": {
                "base": {
                    "name": "Grenade Throw",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_A01_01.png",
                    "type": ["Fire","Tech"],
                    "desc": "Throw a grenade forward, dealing damage in an AOE.",
                    "powerMods": {
                        "base": 585.4/100,
                        "cooldown": 6
                    },
                    "customDPSBase": "",
                    "customDPS": "lepicGrenadeCalcs",
                    "returnStatOptions": {
                        "Grenade - AVG/Hit" : "avgDmgPerGrenade1",
                        "Grenade - AVG/DPS" : "avgDPSGrenade1",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 6,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 35,"limit": null,"isModified": true},
                        ],
                        "GRENADE": [
                            {"statType": "range","statName": "Range","value": 5,"limit": 2,"isModified": true},
                        ],
                    },
                },
                "Explosive Stacks": {
                    "name": "Explosive Stacks",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_R03_Rune.png",
                    "type": ["Fire","Tech"],
                    "desc": "Throw a grenade forward, dealing damage in an AOE. Grenades are replenished over time or after a certain amount of bullets are fired.",
                    "powerMods": {
                        "base": 290.4/100,
                        "cooldown": 40
                    },
                    "customDPSBase": "",
                    "customDPS": "lepicGrenadeCalcsStacksStarter",
                    "returnStatOptions": {
                        "Grenade - AVG/Hit" : "avgDmgPerGrenade1",
                        "Grenade - AVG/DPS" : "avgDPSGrenade1",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "","statName": "Max Stacks","value": 3,"limit": null,"isModified": false},
                            {"statType": "cooldown","statName": "Cooldown","value": 40,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 20,"limit": null,"isModified": true},
                        ],
                        "GRENADE": [
                            {"statType": "range","statName": "Range","value": 5,"limit": 2,"isModified": true},
                            {"statType": "","statName": "Shots per Charge","value": 25,"limit": null,"isModified": false},
                        ],
                    },
                },
            },
            "ability2": {
                "base": {
                    "name": "Overclock",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_A01_02.png",
                    "type": ["Fire","Singular"],
                    "desc": "Gains Overclock. Inflicts Burn on enemies damaged by Grenade Throw or Overkill. Burn deals continuous damage for a certain period of time.",
                    "powerMods": {
                        "base": 115.7/100,
                        "PowerModifierBase": 0.20,
                        "duration": 7,
                        "interval": 1
                    },
                    "customDPSBase": "lepicOverclockCalcsTier0",
                    "customDPS": "lepicOverclockCalcs",
                    "returnStatOptions": {
                        "Burn - AVG/Tick" : "avgDmgPerTick2",
                        "Burn - Total Damage" : "totalTickDamage2",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 20,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 24,"limit": null,"isModified": true},
                        ],
                        "OVERCLOCK": [
                            {"statType": "duration","statName": "Duration","value": 20,"limit": null,"isModified": true},
                            {"statType": "","statName": "+Power Modifier","value": 0.20,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "BURN": [
                            {"statType": "duration","statName": "Duration","value": 7,"limit": null,"isModified": true},
                            {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
                        ],
                    },
                },
                "Power Unit Change": {
                    "name": "Power Unit Change",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_R02_Rune.png",
                    "type": ["Fire","Singular"],
                    "desc": "Gains Power Unit Charge. Inflicts Burn on enemies damaged by Grenade Throw or Overkill.",
                    "powerMods": {
                        "base": 84.3/100,
                        "FirearmATK%": 0.52,
                        "duration": 7,
                        "interval": 1
                    },
                    "customDPSBase": "lepicPowerUnitCalcsTier0",
                    "customDPS": "lepicPowerUnitCalcs",
                    "returnStatOptions": {
                        "Burn - AVG/Tick" : "avgDmgPerTick2",
                        "Burn - Total Damage" : "totalTickDamage2",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 20,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 24,"limit": null,"isModified": true},
                        ],
                        "POWER UNIT CHANGE": [
                            {"statType": "duration","statName": "Duration","value": 5,"limit": null,"isModified": true},
                            {"statType": "","statName": "+Firearm ATK%","value": 0.52,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "BURN": [
                            {"statType": "duration","statName": "Duration","value": 7,"limit": null,"isModified": true},
                            {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
                        ],
                    },
                },
                "Nerve Infiltration": {
                    "name": "Nerve Infiltration",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_R04_Rune.png",
                    "type": ["Fire","Singular"],
                    "desc": "Gains Overclock. Inflicts Weaken Regeneration on enemies damaged by Grenade Throw or Overkill.",
                    "powerMods": {
                        "PowerModifierBase": 0.30,
                    },
                    "customDPSBase": "lepicOverclockCalcsTier0NerveStarter",
                    "customDPS": "lepicNerveCalcs",
                    "returnStatOptions": {
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 20,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 24,"limit": null,"isModified": true},
                        ],
                        "OVERCLOCK": [
                            {"statType": "duration","statName": "Duration","value": 12,"limit": null,"isModified": true},
                            {"statType": "","statName": "+Power Modifier","value": 0.30,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "WEAKEN REGENERATION": [
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                            {"statType": "","statName": "Enemy HP Recov","value": -0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Enemy Shield Recov","value": -0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
            },
            "ability3": {
                "base": {
                    "name": "Traction Grenade",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_A01_03.png",
                    "type": ["Fire","Singular"],
                    "desc": "Throws a Traction Grenade forward to pull in and inflict Towed on enemies within range.",
                    "powerMods": {},
                    "customDPSBase": "",
                    "customDPS": "lepicTractionCalcs",
                    "returnStatOptions": {
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 25,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 45,"limit": null,"isModified": true},
                        ],
                        "TRACTION GRENADE": [
                            {"statType": "range","statName": "Range","value": 9,"limit": 3,"isModified": true},
                            {"statType": "duration","statName": "Duration","value": 2,"limit": null,"isModified": true},
                        ],
                    },
                },
            },
            "ability4": {
                "base": {
                    "name": "Overkill",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_A01_04.png",
                    "type": ["Fire","Tech"],
                    "desc": "Equips a Unique Weapon. While the Unique Weapon is equipped, MP is continuously consumed. When MP runs out, the weapon is unequipped. Enemies hit by the Unique Weapon bullets take Burst DMG. The impact point creates a Damage Zone, dealing continuous damage.",
                    "powerMods": {
                        "base": 2760.3/100,
                        "baseDOT": 43.8/100,
                        "skillDuration": 8,
                        "duration": 4,
                        "interval": 0.5,
                        "continuousCost": 30
                    },
                    "customDPSBase": "",
                    "customDPS": "lepicOverkillCalcs",
                    "returnStatOptions": {
                        "Overkill - AVG/Hit" : "overkillAVGperHit4",
                        "Overkill - Total Burst Damage" : "overkillTotalShotDamage4",
                        "Overkill - Shot Count" : "overkillTotalShotDamage4",
                        "Continuous - AVG/Tick" : "continuousAVGperTick4",
                        "Continuous - Total Tick Damage" : "continuousTotalDamage4",
                        "DPS per Shot" : "dpsPerShot4",
                        "DPS per Cast" : "dpsPerCast4",
                        "SUM Total AVG" : "sumTotalDamage4",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 80,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 40,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "Cost/s","value": 30,"limit": null,"isModified": true},
                        ],
                        "OVERKILL": [
                            {"statType": "duration","statName": "Duration","value": 8,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 5,"limit": 2,"isModified": true},
                        ],
                        "CONTINUOUS DAMAGE": [
                            {"statType": "duration","statName": "Duration","value": 4,"limit": null,"isModified": true},
                            {"statType": "duration","statName": "Interval","value": 0.5,"limit": null,"isModified": false},
                            {"statType": "range","statName": "Range","value": 5,"limit": 2,"isModified": true},
                        ],
                        "SUM": [],
                    },
                },
                "Increased Efficiency": {
                    "name": "Increased Efficiency",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_R01_Rune.png",
                    "type": ["Fire","Tech"],
                    "desc": "Equip a Unique Weapon. Attacking with the Unique Weapon consumes MP, and is unequipped when MP is depleted. Enemies hit by Unique Weapon bullets take Burst DMG. Critical Hits have a chance to recover MP. MP Recovery has a cooldown, albeit a short one.",
                    "powerMods": {
                        "base": 370.9/100,
                    },
                    "customDPSBase": "",
                    "customDPS": "lepicOverkillCalcsEfficiency",
                    "returnStatOptions": {
                        "Overkill - AVG/Hit" : "avgDmgPerShot4",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 80,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost/Shot","value": 30,"limit": null,"isModified": true},
                        ],
                        "SKILL EFFECT": [
                            {"statType": "cooldown","statName": "Cooldown","value": 0.1,"limit": null,"isModified": false},
                            {"statType": "","statName": "MP Recov/Crit","value": 0.15,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Recov Chance","value": 0.30,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "UNIQUE WEAPON": [
                            {"statType": "range","statName": "Range","value": 5,"limit": 2,"isModified": true},
                        ],
                    },
                },
            },
            "ability5": {
                "base": {
                    "name": "Close Call",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_A01_00.png",
                    "type": ["Fire"],
                    "desc": "Upon receiving Fatal Damage, gains Close Call. While active, grants damage Immunity and Immobilization. When Close Call ends, recovers HP Proportional to Max HP.",
                    "powerMods": {},
                    "customDPSBase": "",
                    "customDPS": "lepicCloseCallCalcs",
                    "returnStatOptions": {
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 600,"limit": null,"isModified": true},
                        ],
                        "CLOSE CALL": [
                            {"statType": "duration","statName": "Duration","value": 5,"limit": null,"isModified": true},
                            {"statType": "","statName": "Health Recovery","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
                "Firearm Master": {
                    "name": "Firearm Master",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_R06_Rune.png",
                    "type": ["Fire"],
                    "desc": "When reloading weapons, gain Load Mastery and increase Skill Effect Range. When changing weapons, gain Change Mastery and increase Skill Power Modifier.",
                    "powerMods": {
                        "PowerModifierBase": 0.39,
                        "SkillRange": 0.45
                    },
                    "customDPSBase": "lepicFirearmMasterCalcsTier0",
                    "customDPS": "lepicFirearmMasterCalcs",
                    "returnStatOptions": {
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [],
                        "LOAD MASTERY": [
                            {"statType": "duration","statName": "Duration","value": 5,"limit": null,"isModified": true},
                            {"statType": "","statName": "Range Increase","value": 0.45,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "CHANGE MASTERY": [
                            {"statType": "duration","statName": "Duration","value": 5,"limit": null,"isModified": true},
                            {"statType": "","statName": "+Power Modifier%","value": 0.39,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "BONUS USAGE": [],
                    },
                },
                "Regenerative Braking": {
                    "name": "Regenerative Braking",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_R05_Rune.png",
                    "type": ["Fire"],
                    "desc": "When using a skill, you gain a chance to recover MP on a cooldown.",
                    "powerMods": {},
                    "customDPSBase": "",
                    "customDPS": "lepicBrakingCalcs",
                    "returnStatOptions": {
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 10,"limit": null,"isModified": true},
                        ],
                        "SKILL EFFECT": [
                            {"statType": "","statName": "Recovery Chance","value": 0.17,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Recovery Amount","value": 0.12,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
            }
        }
    },
    "Bunny" : {
        "baseStats": {
            "HP": 810,
            "Shield": 404,
            "ShieldInCombat": 3.3,
            "ShieldOutCombat": 3.96,
            "DEF": 1767,
            "ResistanceFire": 11,
            "ResistanceChill": 11,
            "ResistanceElectric": 13,
            "ResistanceToxin": 11,
            "MP": 300,
            "MPInCombat": 0,
            "MPOutCombat": 0.3,
            "CritRate": 0.10,
            "CritDamage": 1.3,
            "MaxElectricity": 1000
        },
        "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_004_U01.png",
        "name": "Bunny",
        "characterSettings": {
            "bunnyCostRestrictions": false,
            "bunnySoLSpeed": true,
            "CostType": "MP",
            "bunnyCondenseSpeed": true,
            "barPercentState": 90,
        },
        "abilities": {
            "ability1": {
                "base": {
                    "name": "Thrill Bomb",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_A01_01.png",
                    "type": ["Electric","Fusion"],
                    "desc": "Creates a Thrill Bomb that targets the nearest enemy within range, dealing damage. This damage increases proportionally to the amount of Electricity retained. Inflicts Electrocution on enemies hit.",
                    "powerMods": {
                        "base": 93.8/100,
                        "baseElec": 55.9/100,
                    },
                    "customDPS": "bunnyThrillCalcs",
                    "returnStatOptions": {
                        "Skill - AVG/Elec" : "avgDmgPerElec",
                        "Skill - AVG/Hit" : "avgDmgPerHit",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 10,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "Elec Cost","value": 100,"limit": null,"isModified": true},
                        ],
                        "SKILL EFFECT": [
                            {"statType": "","statName": "+Power/10% Elec","value": 0.15,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "range","statName": "Range","value": 7,"limit": 3,"isModified": true},
                            {"statType": "","statName": "Max Hits","value": 6,"limit": null,"isModified": false},
                        ],
                        "ELECTROCUTION": [
                            {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 3,"limit": null,"isModified": true},
                        ],
                    },
                },
                "High-Voltage": {
                    "name": "Thrill Bomb",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_R06_01.png",
                    "type": ["Electric","Fusion"],
                    "desc": "Creates a Thrill Bomb that targets the nearest enemy within range, dealing damage. This damage increases proportionally to the amount of Electricity retained. Inflicts Electrocution on enemies hit.",
                    "customDPS": "bunnyThrillCalcsHVStarter",
                    "powerMods": {
                        "base": 215.9/100,
                        "baseElec": 77.1/100,
                    },
                    "returnStatOptions": {
                        "Skill - AVG/Elec" : "avgDmgPerElec",
                        "Skill - AVG/Hit" : "avgDmgPerHit",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 10,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "Elec Cost","value": 100,"limit": null,"isModified": true},
                        ],
                        "SKILL EFFECT": [
                            {"statType": "","statName": "+Power/10% Elec","value": 0.15,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "range","statName": "Range","value": 9,"limit": 3,"isModified": true},
                            {"statType": "","statName": "Max Hits","value": 3,"limit": null,"isModified": false},
                        ],
                        "ELECTROCUTION": [
                            {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 3,"limit": null,"isModified": true},
                        ],
                    },
                },
                "Superconductor": {
                    "name": "Thrill Bomb",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_R03_01.png",
                    "type": ["Electric","Fusion"],
                    "desc": "Creates a Thrill Bomb that targets the nearest enemy within range, dealing damage. This damage increases proportionally to the amount of Electricity retained. Inflicts Electrocution on enemies hit.",
                    "customDPS": "bunnyThrillCalcsSuperStarter",
                    "powerMods": {
                        "base": 156.6/100,
                        "baseElec": 55.9/100,
                    },
                    "returnStatOptions": {
                        "Skill - AVG/Elec" : "avgDmgPerElec",
                        "Skill - AVG/Hit" : "avgDmgPerHit",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 10,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "Elec Cost","value": 100,"limit": null,"isModified": true},
                        ],
                        "SKILL EFFECT": [
                            {"statType": "","statName": "+Power/10% Elec","value": 0.15,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "range","statName": "Range","value": 7,"limit": 3,"isModified": true},
                            {"statType": "","statName": "Max Hits","value": 6,"limit": null,"isModified": false},
                        ],
                        "ELECTROCUTION": [
                            {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 3,"limit": null,"isModified": true},
                            {"statType": "","statName": "-Enemy Attack","value": -0.20,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
            },
            "ability2": {
                "base": {
                    "name": "Speed of Light",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_A01_02.png",
                    "type": ["Electric","Singular"],
                    "stats": {},
                    "desc": "Always moves by Sprinting, and increases Sprint Speed.<br>Gains Speed of Light. Speed of Light additionally gains electricity while moving.",
                    "customDPSBase": "bunnySpeedCalcsTier0Speed",
                    "customDPS": "bunnySpeedCalcs",
                    "powerMods": {
                        "cost": 25,
                        "SprintSpeedBonus": 0.50,
                        "CostType": "MP",
                    },
                    "returnStatOptions": {
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 2,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 12,"limit": null,"isModified": true},
                            {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
                            {"statType": "cost","statName": "Continuous Cost","value": 25,"limit": null,"isModified": true},
                        ],
                        "SKILL EFFECT": [
                            {"statType": "","statName": "Speed Increase","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "ELECTRICITY": [
                            {"statType": "","statName": "Distance Interval (m)","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Elec Gain","value": 0.006,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
                "Electric Transition": {
                    "name": "Electric Transition",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_R02_Rune.png",
                    "type": ["Electric","Singular"],
                    "stats": {},
                    "desc": "Always moves by Sprinting, and gains Speed of Light.<br>Speed of Light additionally gains electricity while moving. Recovers Shield continuously proportionally to the distance traveled.",
                    "customDPSBase": "bunnySpeedCalcsTier0SpeedTransitionStarter",
                    "customDPS": "bunnySpeedCalcsTransitionStarter",
                    "powerMods": {
                        "cost": 25,
                        "SprintSpeedBonus": 0.50,
                        "CostType": "MP",
                    },
                    "returnStatOptions": {
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 2,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 12,"limit": null,"isModified": true},
                            {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
                            {"statType": "cost","statName": "Continuous Cost","value": 25,"limit": null,"isModified": true},
                        ],
                        "SKILL EFFECT": [
                            {"statType": "","statName": "Speed Increase","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Shield Recovery/m","value": 0.005,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "ELECTRICITY": [
                            {"statType": "","statName": "Distance Interval (m)","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Elec Gain","value": 0.001,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
                "Bionic Fuel": {
                    "name": "Bionic Fuel",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_R04_Rune.png",
                    "type": ["Electric","Singular"],
                    "stats": {},
                    "desc": "Always moves by Sprinting, and gains Speed of Light.<br>Speed of Light additionally gains electricity while moving. Recovers Shield continuously proportionally to the distance traveled.<br><br>Also just no. There are better options for bunny.",
                    "customDPSBase": "bunnySpeedCalcsTier0SpeedBionicStarter",
                    "customDPS": "bunnySpeedCalcsBionicStarter",
                    "powerMods": {
                        "cost": 15/100,
                        "SprintSpeedBonus": 0.30,
                        "CostType": "HP",
                    },
                    "returnStatOptions": {
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 2,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "HP Cost","value": 0.08,"limit": null,"isModified": true,"isUnlabeledPercent": true},
                            {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
                            {"statType": "cost","statName": "Continuous Cost","value": 0.15,"limit": null,"isModified": true,"isUnlabeledPercent": true},
                        ],
                        "SKILL EFFECT": [
                            {"statType": "","statName": "Speed Increase","value": 0.30,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "ELECTRICITY": [
                            {"statType": "","statName": "Distance Interval (m)","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Elec Gain","value": 0.006,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
            },
            "ability3": {
                "base": {
                    "name": "Lightning Emission",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_A01_03.png",
                    "type": ["Electric","Singular"],
                    "desc": "Activates the Lightning Emission state. Deals damage to nearby enemies when moving a certain distance, increases damage proportional to the amount of Electricity retained. Inflicts Electrocution on enemies hit.",
                    "powerMods": {
                        "base": 148.7/100,
                        "baseElec": 53.1/100,
                    },
                    "customDPS": "bunnyEmissionCalcs",
                    "returnStatOptions": {
                        "Skill - AVG/Hit" : "avgDmgPerHit",
                        "Skill - AVG/Elec" : "avgDmgPerElec",
                        "DPS - Hits" : "avgDPSHits",
                        "DPS - Elec" : "avgDPSElec",
                        "Total AVG DPS" : "totalAVGDPS",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 30,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "Elec Cost","value": 266,"limit": null,"isModified": true},
                        ],
                        "LIGHTNING EMISSION": [
                            {"statType": "","statName": "Distance Interval (m)","value": 7,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "+Power/10% Elec","value": 0.15,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "range","statName": "Range","value": 7,"limit": 3,"isModified": true},
                            // {"statType": "","statName": "Max Hits","value": 6,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 20,"limit": null,"isModified": true},
                        ],
                        "ELECTROCUTION": [
                            {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 3,"limit": null,"isModified": true},
                        ],
                        "SUM": [],
                    },
                },
                "High-Voltage": {
                    "name": "Lightning Emission",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_R06_03.png",
                    "type": ["Electric","Singular"],
                    "desc": "Activates the Lightning Emission state. Deals damage to nearby enemies when moving a certain distance, increases damage proportional to the amount of Electricity retained. Inflicts Electrocution on enemies hit.",
                    "powerMods": {
                        "base": 250.5/100,
                        "baseElec": 89.5/100,
                    },
                    "customDPS": "bunnyEmissionCalcsHVStarter",
                    "returnStatOptions": {
                        "Skill - AVG/Hit" : "avgDmgPerHit",
                        "Skill - AVG/Elec" : "avgDmgPerElec",
                        "DPS - Hits" : "avgDPSHits",
                        "DPS - Elec" : "avgDPSElec",
                        "Total AVG DPS" : "totalAVGDPS",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 22,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "Elec Cost","value": 266,"limit": null,"isModified": true},
                        ],
                        "LIGHTNING EMISSION": [
                            {"statType": "","statName": "Distance Interval (m)","value": 7,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "+Power/10% Elec","value": 0.15,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "range","statName": "Range","value": 9,"limit": 3,"isModified": true},
                            {"statType": "","statName": "Max Hits","value": 3,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 20,"limit": null,"isModified": true},
                        ],
                        "ELECTROCUTION": [
                            {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 3,"limit": null,"isModified": true},
                        ],
                        "SUM": [],
                    },
                },
                "Superconductor": {
                    "name": "Lightning Emission",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_R03_03.png",
                    "type": ["Electric","Singular"],
                    "desc": "Activates the Lightning Emission state. Deals damage to nearby enemies when moving a certain distance, increases damage proportional to the amount of Electricity retained. Inflicts Electrocution on enemies hit.",
                    "powerMods": {
                        "base": 148.7/100,
                        "baseElec": 53.1/100,
                    },
                    "customDPS": "bunnyEmissionCalcsSuperStarter",
                    "returnStatOptions": {
                        "Skill - AVG/Hit" : "avgDmgPerHit",
                        "Skill - AVG/Elec" : "avgDmgPerElec",
                        "DPS - Hits" : "avgDPSHits",
                        "DPS - Elec" : "avgDPSElec",
                        "Total AVG DPS" : "totalAVGDPS",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 30,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "Elec Cost","value": 266,"limit": null,"isModified": true},
                        ],
                        "LIGHTNING EMISSION": [
                            {"statType": "","statName": "Distance Interval (m)","value": 7,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "+Power/10% Elec","value": 0.15,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "range","statName": "Range","value": 7,"limit": 3,"isModified": true},
                            {"statType": "duration","statName": "Duration","value": 20,"limit": null,"isModified": true},
                            // {"statType": "","statName": "Max Hits","value": 6,"limit": null,"isModified": false},
                        ],
                        "ELECTROCUTION": [
                            {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 3,"limit": null,"isModified": true},
                            {"statType": "","statName": "-Enemy ATK%","value": -0.20,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "SUM": [],
                    },
                },
            },
            "ability4": {
                "base": {
                    "name": "Maximum Power",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_A01_04.png",
                    "type": ["Electric","Fusion"],
                    "customDPS": "",
                    "desc": "",
                    "returnStatOptions": {
                    },
                    "displayStatsALT": {
                        "BASIC": [],
                    },
                },
                "Electric Condense": {
                    "name": "Electric Condense",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_R01_Rune.png",
                    "type": ["Electric","Fusion"],
                    "desc": "Activates Electric Condense. While Electric Condense is active, allows for the acquisition of more Electricity. Deals damage to enemies within range when it ends and this damage increases proportionally to the amount of Electricity retained. Pressing the skill button again before the duration ends, ends the skill immediately. The range increases based on the activation time.",
                    "powerMods": {
                        "base": 1946.0/100,
                        "SprintSpeedBonus": 0.20,
                    },
                    "customDPSBase": "bunnyCondenseCalcsTier0Speed",
                    "customDPS": "bunnyCondenseCalcs",
                    "returnStatOptions": {
                        "Skill - AVG/Hit" : "avgDmgPerHit",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 38,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "Elec Cost","value": 400,"limit": null,"isModified": true},
                        ],
                        "SKILL EFFECT": [
                            {"statType": "","statName": "+Power/10% Elec","value": 0.15,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "range","statName": "Range","value": 5,"limit": 3,"isModified": true},
                            {"statType": "duration","statName": "Charge Time","value": 5,"limit": null,"isModified": false},
                            {"statType": "","statName": "Max Range Multiplier","value": 1.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Speed Increase","value": 0.20,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "ELECTRICITY": [
                            {"statType": "","statName": "Distance Interval (m)","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Elec Gain","value": 0.002,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
            },
            "ability5": {
                "base": {
                    "name": "Rabbit Foot",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_A01_00.png",
                    "type": ["Electric","Fusion"],
                    "desc": "Deals damage to nearby enemies upon landing after a Double Jump.<br>Gains Electricity proportional to distance traveled. If there is no movement for a period, Electricity is gradually consumed.",
                    "powerMods": {
                        "base": 128.8/100,
                    },
                    "customDPSBase": "",
                    "customDPS": "bunnyFootCalcs",
                    "returnStatOptions": {
                        "Jump - AVG/Hit" : "avgDmgPerHit",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [],
                        "MOVEMENT": [
                            {"statType": "","statName": "Distance Interval (m)","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Elec Gain","value": 0.002,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "STOPPED": [
                            {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
                            {"statType": "","statName": "%Elec Loss","value": 0.15,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "DOUBLE JUMP": [
                            {"statType": "range","statName": "Range","value": 4,"limit": 3,"isModified": true},
                        ],
                    },
                },
                "Electric Charge": {
                    "name": "Electric Charge",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_R05_Rune.png",
                    "type": ["Electric","Fusion"],
                    "desc": "Deals damage to nearby enemies upon landing after a Double Jump. Additionally, gains a stack of Charge each time hitting an enemy. When Charge is at max stacks, deals damage upon landing after a Double Jump.<br>Acquires Electricity proportional to the distance traveled. When movement stops, Electricity will gradually be consumed.",
                    "powerMods": {
                        "base": 228.1/100,
                        "baseCharge": 273.9/100,
                    },
                    "customDPSBase": "",
                    "customDPS": "bunnyFootCalcsCharge",
                    "returnStatOptions": {
                        "Charge - AVG/Hit" : "avgDmgPerHitCharge",
                        "Jump - AVG/Hit" : "avgDmgPerHit",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [],
                        "MOVEMENT": [
                            {"statType": "","statName": "Distance Interval (m)","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Elec Gain","value": 0.002,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "STOPPED": [
                            {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
                            {"statType": "","statName": "%Elec Loss","value": 0.15,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "DOUBLE JUMP": [
                            {"statType": "range","statName": "Range","value": 4,"limit": 3,"isModified": true},
                        ],
                        "CHARGE": [
                            {"statType": "","statName": "Max Stacks","value": 100,"limit": null,"isModified": false},
                        ],
                    },
                },
            }
        }
    },
    "Esiemo": {
        "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_012_A01.png",
        "name": "Esiemo",
        "baseStats": {
            "HP": 1373,
            "Shield": 413,
            "ShieldInCombat": 4.08,
            "ShieldOutCombat": 4.88,
            "DEF": 2441,
            "ResistanceFire": 13,
            "ResistanceChill": 11,
            "ResistanceElectric": 11,
            "ResistanceToxin": 11,
            "MP": 187,
            "MPInCombat": 0,
            "MPOutCombat": 0.3,
            "CritRate": 0.05,
            "CritDamage": 1.4,
        },
        "characterSettings": {
            "timeBombStacks": 5,
            "blastStacksPowerBonus": 2.8,
            "guidedBombStacks": 3,
            "propagandaBombStacks": 1,
            "isMadnessActive": false,
            "evadeBombStacks": 3,
            "totalActiveBombs": 0,
            //asdf settings go here
        },
        "abilities": {
            "ability1": {
                "base": {
                    "name": "Time Bomb",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_A01_01.png",
                    "type": ["Fire","Tech"],
                    "desc": "Fires a Sticky Bomb forward. The Sticky Bomb attaches to an enemy or terrain on contact.",
                    "powerMods": {
                        "base": 439.1/100,
                    },
                    "customDPS": "esiemoTimeBombCalcs",
                    "returnStatOptions": {
                        "Bomb - AVG/Hit" : "avgDmgPerHit",
                        "SUM Total AVG" : "sumTotalAVG",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "","statName": "Max Stacks","value": 5,"limit": null,"isModified": false},
                            {"statType": "cooldown","statName": "Stack Cooldown","value": 12,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 12,"limit": null,"isModified": true},
                        ],
                        "SKILL EFFECT": [
                            {"statType": "range","statName": "Explosion Range","value": 3,"limit": 2,"isModified": true},
                            {"statType": "","statName": "Projectile Speed","value": 0,"limit": null,"isModified": false,"isUnlabeledPercent": true}
                        ],
                    },
                },
            },
            "ability2": {
                "base": {
                    "name": "Blast",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_A01_02.png",
                    "type": ["Fire","Fusion"],
                    "desc": "Detonate the attached bombs. Damage dealt increases with the number of attached bombs.",
                    "powerMods": {
                        "bombMulti": 0.35,
                        "bombMultiCap": 8,
                    },
                    "customDPSBase": "esiemoBlastCalcsTier0",
                    "customDPS": "esiemoBlastCalcs",
                    "returnStatOptions": {
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 2.7,"limit": null,"isModified": true},
                        ],
                        "DETONATE": [
                            {"statType": "","statName": "+DMG% per Bomb","value": 0.35,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Max Increases","value": 8,"limit": null,"isModified": false},
                        ],
                    },
                },
                "Cluster Bomb": {
                    "name": "Cluster Bomb",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_R02_Rune.png",
                    "type": ["Fire","Tech"],
                    "desc": "Detonates the attached bomb immediately. The detonated bomb spawns an explosive.<br><br>Generally a damage loss over other options.",
                    "powerMods": {
                        "bombMulti": 0.15,
                        "bombMultiCap": 8,
                        "base": 143.9/100,
                        "baseBurn": 15.5/100,
                    },
                    "customDPSBase": "esiemoBlastCalcsTier0ClusterStarter",
                    "customDPS": "esiemoBlastCalcsCluster",
                    "returnStatOptions": {
                        "Clusters - AVG/Hit" : "avgDmgPerHit",
                        "Burn - AVG/Hit" : "avgDmgPerHitBurn",
                        "SUM Total AVG" : "sumTotalAVG",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 2.7,"limit": null,"isModified": true},
                        ],
                        "DETONATE": [
                            {"statType": "","statName": "+DMG% per Bomb","value": 0.35,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Max Increases","value": 10,"limit": null,"isModified": false},
                        ],
                        "EXPLOSIVE": [
                            {"statType": "","statName": "Amount","value": 3,"limit": null,"isModified": false},
                            {"statType": "range","statName": "Explosion Range","value": 2.5,"limit": 2,"isModified": true},
                        ],
                        "BURN": [
                            {"statType": "duration","statName": "Interval","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 5,"limit": null,"isModified": true},
                        ],
                    },
                },
                "Creative Explosion": {
                    "name": "Blast",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_A01_02.png",
                    "type": ["Fire","Fusion"],
                    "desc": "Detonate the attached bombs. Damage dealt increases with the number of attached bombs.",
                    "powerMods": {
                        "bombMulti": 0.35,
                        "bombMultiCap": 10,
                    },
                    "customDPSBase": "esiemoBlastCalcsTier0CreativeStarter",
                    "customDPS": "esiemoBlastCalcsCreativeStarter",
                    "returnStatOptions": {
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 2.7,"limit": null,"isModified": true},
                        ],
                        "DETONATE": [
                            {"statType": "","statName": "+DMG% per Bomb","value": 0.35,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Max Increases","value": 10,"limit": null,"isModified": false},
                        ],
                    },
                },
            },
            "ability3": {
                "base": {
                    "name": "Guided Landmine",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_A01_03.png",
                    "type": ["Fire","Tech"],
                    "desc": "Places a Guided Landmine. Once placed, the Guided Landmine flies to an enemy within its detection range and attaches to it. If there are obstacles in its path, it attaches to the terrain.",
                    "powerMods": {
                        "base": 1061.9/100,
                    },
                    "customDPS": "esiemoGuidedCalcs",
                    "returnStatOptions": {
                        "Bomb - AVG/Hit" : "avgDmgPerHit",
                        "SUM Total AVG" : "sumTotalAVG",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "","statName": "Max Stacks","value": 3,"limit": null,"isModified": false},
                            {"statType": "cooldown","statName": "Stack Cooldown","value": 14,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 18,"limit": null,"isModified": true},
                        ],
                        "GUIDED LANDMINE": [
                            {"statType": "range","statName": "Detection Range","value": 10,"limit": 2,"isModified": true},
                            {"statType": "duration","statName": "Detection Duration","value": 40,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Explosion Range","value": 4,"limit": 2,"isModified": true},
                            {"statType": "","statName": "Max Active","value": 3,"limit": null,"isModified": false},
                        ],
                    },
                },
                "Explosive Propaganda": {
                    "name": "Explosive Propaganda",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_R03_Rune.png",
                    "type": ["Fire","Tech"],
                    "desc": "Summons an Explosive Propaganda that taunts nearby enemies. The summoned Explosive Propaganda explodes on expiration.",
                    "powerMods": {
                        "base": 1493.3/100,
                    },
                    "customDPS": "esiemoPropagandaCalcs",
                    "returnStatOptions": {
                        "Bomb - AVG/Hit" : "avgDmgPerHit",
                        "SUM Total AVG" : "sumTotalAVG",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "","statName": "Max Stacks","value": 2,"limit": null,"isModified": false},
                            {"statType": "cooldown","statName": "Stack Cooldown","value": 38,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 25,"limit": null,"isModified": true},
                        ],
                        "EXPLOSIVE PROPAGANDA": [
                            {"statType": "","statName": "HP","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "DEF","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "duration","statName": "Duration","value": 8,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Taunt Range","value": 6,"limit": 2.5,"isModified": true},
                            {"statType": "range","statName": "Explosion Range","value": 7,"limit": 2,"isModified": true},
                            {"statType": "","statName": "Max Active","value": 2,"limit": null,"isModified": false}
                        ],
                    },
                },
            },
            "ability4": {
                "base": {
                    "name": "Arche Explosion",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_A01_04.png",
                    "type": ["Fire","Fusion"],
                    "desc": "Dashes forward to deal damage and inflict Knockback on colliding targets during movement. Interacting with the skill button again or ending movement deals Burst damage to nearby enemies. Enemies hit by the explosion lose their buffs. When the skill ends, grants self Madness. While using the skill, you are immune to Stagger effects.",
                    "powerMods": {
                        "base": 7414.4/100,
                        "baseRun": 85.8/100,
                    },
                    "customDPSBase": "esiemoArcheCalcsMadnessTier0",
                    "customDPS": "esiemoArcheCalcs",//
                    "returnStatOptions": {
                        "Running - AVG/Hit" : "avgDmgPerHitRun",
                        "Explosion - AVG/Hit" : "avgDmgPerHit",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 80,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 65,"limit": null,"isModified": true},
                        ],
                        "EXPLOSION": [
                            {"statType": "","statName": "+Movement Speed","value": 1.2,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "range","statName": "Explosion Range","value": 6,"limit": 2,"isModified": true},
                        ],
                        "RUNNING": [],
                        "MADNESS": [
                            {"statType": "duration","statName": "Duration","value": 14,"limit": null,"isModified": true},
                            {"statType": "","statName": "+Skill Power","value": 0.25,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "+Firearm ATK","value": 0.25,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "+Movement Speed","value": 0.30,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "-DEF","value": -0.30,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
                "Creative Explosion": {
                    "name": "Creative Explosion",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_R04_Rune.png",
                    "type": ["Fire","Fusion"],
                    "desc": "Dashes forward to deal DMG and inflict Knockback on enemies hit. Deactivating the skill or ending movement deals Burst damage to nearby enemies. Enemies hit by the explosion lose all buffs. When the skill ends, grants self Narcissism. While using skill, become immune to Knockdown and Knockback.",
                    "powerMods": {
                        "base": 4948.7/100,
                        "baseRun": 101.8/100,
                        "increasePerUnsued": 0.044,
                    },
                    "customDPSBase": "esiemoCreativeCalcsNarcissimTier0",
                    "customDPS": "esiemoCreativeCalcs",//
                    "returnStatOptions": {
                        "Running - AVG/Hit" : "avgDmgPerHitRun",
                        "Explosion - AVG/Hit" : "avgDmgPerHit",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 40,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 80,"limit": null,"isModified": true},
                        ],
                        "EXPLOSION": [
                            {"statType": "","statName": "+Movement Speed","value": 1.2,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "range","statName": "Explosion Range","value": 8,"limit": 2,"isModified": true},
                            {"statType": "","statName": "+DMG/Unused Bombs","value": 0.044,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "RUNNING": [],
                        "NARCISSISM": [
                            {"statType": "duration","statName": "Duration","value": 14,"limit": null,"isModified": true},
                            {"statType": "","statName": "Cooldown Decrease","value": -0.40,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "+Movement Speed","value": 0.30,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "-DEF","value": -0.30,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
            },
            "ability5": {
                "base": {
                    "name": "Adventitious Habit",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_A01_00.png",
                    "type": ["Fire","Tech"],
                    "desc": "Drops a bomb on the ground when hit.",
                    "powerMods": {
                        "base": 1617.3/100,
                    },
                    "customDPS": "esiemoHabitCalcs",
                    "returnStatOptions": {
                        "Bomb - AVG/Hit" : "avgDmgPerHit",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 60,"limit": null,"isModified": true},
                        ],
                        "SKILL USE": [
                            {"statType": "cooldown","statName": "Cooldown Decrease","value": -2,"limit": null,"isModified": false},
                        ],
                        "SKILL EFFECT": [
                            {"statType": "range","statName": "Explosion Range","value": 4,"limit": 2,"isModified": true}
                        ],
                    },
                },
                "Explosive Evade": {
                    "name": "Explosive Evade",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_R01_Rune.png",
                    "type": ["Fire","Tech"],
                    "desc": "Places a Guided Landmine when rolling.",
                    "powerMods": {
                        "base": 1276.7/100,
                    },
                    "customDPS": "esiemoEvadeCalcs",
                    "returnStatOptions": {
                        "Bomb - AVG/Hit" : "avgDmgPerHit",
                        "SUM Total AVG" : "sumTotalAVG",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 20,"limit": null,"isModified": true},
                        ],
                        "GUIDED LANDMINE": [
                            {"statType": "range","statName": "Detection Range","value": 10,"limit": 2,"isModified": true},
                            {"statType": "duration","statName": "Detection Duration","value": 40,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Explosion Range","value": 4,"limit": 2,"isModified": true},
                            {"statType": "","statName": "Max Active","value": 3,"limit": null,"isModified": false},
                        ],
                    },
                },
            }
        }
    },
    "Freyna": {
        "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_006_U01.png",
        "name": "Freyna",
        "baseStats": {
            "HP": 916,
            "Shield": 537,
            "ShieldInCombat": 3.3,
            "ShieldOutCombat": 3.96,
            "DEF": 2083,
            "ResistanceFire": 11,
            "ResistanceChill": 11,
            "ResistanceElectric": 11,
            "ResistanceToxin": 13,
            "MP": 187,
            "MPInCombat": 0,
            "MPOutCombat": 0.3,
            "CritRate": 0.05,
            "CritDamage": 1.3,
        },
        "characterSettings": {
            "freynaBodyarmorBonus": true,
            "freynaInjectionBonuses": 15,
            // "freynaCorrosionBonuses": true,
        },
        "abilities": {
            "ability1": {
                "base": {
                    "name": "Venom Trauma",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_006_A01_01.png",
                    "type": ["Toxic","Tech"],
                    "desc": "Shoots a toxic bullet that deals damage to enemies hit. The toxic bullet explodes, creating a Toxic Puddle and granting the Room 0 Trauma effect to affected enemies. Room 0 Trauma inflicts damage over time and grants the Panic effect to nearby enemies.",
                    "powerMods": {
                        "base": 718.6/100,
                        "puddle": 160.4/100,
                        "trauma": 188.2/100,
                        "panic": 174.6/100,
                    },
                    "customDPSBase": "",
                    "customDPS": "freynaVenomTraumaCalcs",
                    "returnStatOptions": {
                        "Puddle - AVG/Hit" : "avgPerPuddleTick",
                        "Trauma - AVG/Hit" : "avgPerTraumaTick",
                        "Projectile - AVG/Hit" : "avgPerImpact",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 11,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 30,"limit": null,"isModified": true},
                        ],
                        "IMPACT": [
                            {"statType": "","statName": "Projectile Speed","value": 0,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "PUDDLE": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 5,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 4,"limit": 3,"isModified": true},
                        ],
                        "TRAUMA": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 7,"limit": 3,"isModified": true},
                        ],
                        "PANIC": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 5,"limit": null,"isModified": true},
                        ],
                    },
                },
                "Neurotoxin Synthesis": {
                    "name": "Venom Trauma",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_006_R04_01.png",
                    "type": ["Toxic","Tech"],
                    "desc": "Shoots a toxic bullet that deals damage to enemies hit. The toxic bullet explodes, creating a Toxic Puddle and granting the Room 0 Trauma effect to affected enemies. Room 0 Trauma inflicts damage over time, decreases ATK, and prevents healing.",
                    "powerMods": {
                        "base": 718.6/100,
                        "puddle": 160.4/100,
                        "trauma": 188.2/100,
                        "panic": 174.6/100,//not used
                    },
                    "customDPSBase": "",
                    "customDPS": "freynaVenomTraumaCalcsNeuroStarter",
                    "returnStatOptions": {
                        "Puddle - AVG/Hit" : "avgPerPuddleTick",
                        "Trauma - AVG/Hit" : "avgPerTraumaTick",
                        "Projectile - AVG/Hit" : "avgPerImpact",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 11,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 30,"limit": null,"isModified": true},
                        ],
                        "IMPACT": [
                            {"statType": "","statName": "Projectile Speed","value": 0,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "PUDDLE": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 5,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 4,"limit": 3,"isModified": true},
                        ],
                        "TRAUMA": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                            {"statType": "","statName": "ATK Decrease","value": 0.10,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Recovery Decrease","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
                "Contagion": {
                    "name": "Venom Trauma",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_006_R01_01.png",
                    "type": ["Toxic","Tech"],
                    "desc": "Shoots a toxic bullet that deals damage to enemies hit. The toxic bullet explodes, creating a Toxic Puddle and granting the Room 0 Trauma effect to affected enemies. Room 0 Trauma inflicts damage over time. When an enemy with Room 0 Trauma dies, it grants the Room 0 Trauma effect to nearby enemies.",
                    "powerMods": {
                        "base": 718.6/100,
                        "puddle": 160.4/100,
                        "trauma": 188.2/100,
                        "panic": 0/100,//not used
                    },
                    "customDPSBase": "",
                    "customDPS": "freynaVenomTraumaCalcsContagionStarter",
                    "returnStatOptions": {
                        "Puddle - AVG/Hit" : "avgPerPuddleTick",
                        "Trauma - AVG/Hit" : "avgPerTraumaTick",
                        "Projectile - AVG/Hit" : "avgPerImpact",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 11,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 30,"limit": null,"isModified": true},
                        ],
                        "IMPACT": [
                            {"statType": "","statName": "Projectile Speed","value": 0,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "PUDDLE": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 4,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 4,"limit": 3,"isModified": true},
                        ],
                        "TRAUMA": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 6,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 6,"limit": 3,"isModified": true},
                        ],
                    },
                },
            },
            "ability2": {
                "base": {
                    "name": "Defense Mechanism",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_006_A01_02.png",
                    "type": ["Toxic","Dimension"],
                    "desc": "Grants the effect of Plague Bodyarmor. Grants the Room 0 Trauma effect to enemies that attack you. Room 0 Trauma inflicts damage over time and grants the Despair effect to nearby enemies.",
                    "powerMods": {
                        "trauma": 188.2/100,
                        "panic": 174.6/100,
                        "DEF": 0.25
                    },
                    "customDPSBase": "freynaMechanismCalcsTier0",
                    "customDPS": "freynaMechanismCalcs",
                    "returnStatOptions": {
                        "Trauma - AVG/Hit" : "avgPerTraumaTick",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 20,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 40,"limit": null,"isModified": true},
                        ],
                        "BODYARMOR": [
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                            {"statType": "","statName": "+DEF","value": 0.25,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Imbue Rate","value": 0.45,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "TRAUMA": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 7,"limit": 3,"isModified": true},
                        ],
                        "DESPAIR": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 5,"limit": null,"isModified": true},
                        ],
                    },
                },
                "Neurotoxin Synthesis": {
                    "name": "Defense Mechanism",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_006_R04_02.png",
                    "type": ["Toxic","Dimension"],
                    "desc": "Grants the effect of Plague Bodyarmor. Grants the Room 0 Trauma effect to enemies that attack you. Room 0 Trauma inflicts damage over time, decreases ATK, and prevents recovery.",
                    "powerMods": {
                        "trauma": 188.2/100,
                        "panic": 174.6/100,//not used
                        "DEF": 0.50
                    },
                    "customDPSBase": "freynaMechanismCalcsTier0NeuroStarter",
                    "customDPS": "freynaMechanismCalcsNeuroStarter",
                    "returnStatOptions": {
                        "Trauma - AVG/Hit" : "avgPerTraumaTick",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 25,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 40,"limit": null,"isModified": true},
                        ],
                        "BODYARMOR": [
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                            {"statType": "","statName": "+DEF","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Imbue Rate","value": 0.45,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "TRAUMA": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 6,"limit": null,"isModified": true},
                            {"statType": "","statName": "ATK Decrease","value": 0.10,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Recovery Decrease","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
                "Contagion": {
                    "name": "Defense Mechanism",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_006_R01_02.png",
                    "type": ["Toxic","Dimension"],
                    "desc": "Grants the effect of Plague Bodyarmor. Grants the Room 0 Trauma effect to enemies that attack you. Room 0 Trauma inflicts damage over time. When an enemy with Room 0 Trauma dies, it grants the Room 0 Trauma effect to nearby enemies.",
                    "powerMods": {
                        "trauma": 188.2/100,
                        "panic": 0/100,//not used
                        "DEF": 0.50
                    },
                    "customDPSBase": "freynaMechanismCalcsTier0ContagionStarter",
                    "customDPS": "freynaMechanismCalcsContagionStarter",
                    "returnStatOptions": {
                        "Trauma - AVG/Hit" : "avgPerTraumaTick",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 20,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 40,"limit": null,"isModified": true},
                        ],
                        "BODYARMOR": [
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                            {"statType": "","statName": "+DEF","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Imbue Rate","value": 0.45,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "TRAUMA": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 6,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 6,"limit": 3,"isModified": true},
                        ],
                    },
                },
                "Toxic Stimulation": {
                    "name": "Toxic Stimulation",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_006_R02_Rune.png",
                    "type": ["Toxic","Dimension"],
                    "desc": "Grants the effect of Plague Bodyarmor to yourself and nearby allies. Grants the Room 0 Trauma effect to enemies that attack you. Room 0 Trauma inflicts damage over time and grants the Despair effect to nearby enemies.",
                    "powerMods": {
                        "trauma": 188.2/100,
                        "panic": 174.6/100,
                        "DEF": 0.25
                    },
                    "customDPSBase": "freynaMechanismCalcsTier0ToxicStarter",
                    "customDPS": "freynaMechanismCalcsStimulationStarter",
                    "returnStatOptions": {
                        "Trauma - AVG/Hit" : "avgPerTraumaTick",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 20,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 40,"limit": null,"isModified": true},
                        ],
                        "BODYARMOR": [
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                            {"statType": "","statName": "+DEF","value": 0.25,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Imbue Rate","value": 0.45,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "TRAUMA": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 7,"limit": 3,"isModified": true},
                        ],
                        "DESPAIR": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 5,"limit": null,"isModified": true},
                        ],
                    },
                },
                "Venom Injection": {
                    "name": "Toxic Stimulation",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_006_R05_Rune.png",
                    "type": ["Toxic","Dimension"],
                    "desc": "Grants Toxic Sense. Consumes HP for the duration of the effect, and MP when HP is at 15%.<br>Toxic Sense increases inversely proportional to the amount of HP lost, and has a chance to grant self Purification when using skills. While toxic sense is active, attacking an enemy inflicts Corrosion on the enemy.<br><br>[BUG] The bonuses related to missing HP can't reach their maximum unless you are using something that will force your HP down to 1, in which case they grant slightly more than the bonus listed in game.",
                    "powerMods": {},
                    "customDPSBase": "freynaMechanismCalcsInjectionTier0",
                    "customDPS": "",
                    "returnStatOptions": {
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 20,"limit": null,"isModified": true},
                            {"statType": "","statName": "%HP Cost/s","value": 0.15,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "cost","statName": "MP Cost/s","value": 6,"limit": null,"isModified": true},
                        ],
                        "TOXIC SENSE": [
                            {"statType": "","statName": "Max +Power Modifier","value": 0.663,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Max +Toxin Resistance","value": 2.5,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Max +Shield%/s","value": 0.05,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Purification Chance","value": 0.30,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "CORROSION": [
                            {"statType": "","statName": "-Enemy Toxin Resistance","value": -0.25,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Corrosion Chance","value": 0.45,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "duration","statName": "Duration","value": 3,"limit": null,"isModified": true},
                        ],
                    },
                },
            },
            "ability3": {
                "base": {
                    "name": "Putrid Venom",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_006_A01_03.png",
                    "type": ["Toxic","Tech"],
                    "desc": "Throws a toxin to create a Toxic Swamp. Enemies affected by the Toxic Swamp receive the Room 0 Trauma and Venom-Injected effects. Enemies with the Venom-Injected effect leave Toxic Footprints in their path which grant the Room 0 Trauma effect to enemies. Room 0 Trauma inflicts damage over time and grants the Putrid effect to nearby enemies.",
                    "powerMods": {
                        "puddle": 202.4/100,
                        "trauma": 188.2/100,
                        "panic": 174.6/100,
                    },
                    "customDPSBase": "",
                    "customDPS": "freynaPutridVenomCalcs",
                    "returnStatOptions": {
                        "Puddle - AVG/Hit" : "avgPerPuddleTick",
                        "Trauma - AVG/Hit" : "avgPerTraumaTick",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 25,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 35,"limit": null,"isModified": true},
                            
                        ],
                        "SWAMP": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 12,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 4,"limit": 3,"isModified": true},
                            {"statType": "","statName": "Projectile Speed","value": 0,"limit": null,"isModified": false,"isUnlabeledPercent": true},

                            {"isHeader": true,"statName": "Toxic Footprint"},
                            {"statType": "duration","statName": "Duration","value": 8,"limit": null,"isModified": true},
                            {"isHeader": true,"statName": "Venom-Injected"},
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                        ],
                        "TRAUMA": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 7,"limit": 3,"isModified": true},
                        ],
                        "PUTRID": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 5,"limit": null,"isModified": true},
                        ],
                    },
                },
                "Neurotoxin Synthesis": {
                    "name": "Putrid Venom",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_006_A01_03.png",
                    "type": ["Toxic","Tech"],
                    "desc": "Throws a toxin to create a Toxic Swamp. Enemies affected by the Toxic Swamp receive the Room 0 Trauma and Venom-Injected effects. Enemies with the Venom-Injected effect leave Toxic Footprints in their path which grant the Room 0 Trauma effect to enemies. Room 0 Trauma inflicts damage over time, reduces ATK, and prevents recovery.",
                    "powerMods": {
                        "puddle": 202.4/100,
                        "trauma": 188.2/100,
                        "panic": 0/100,//not used
                    },
                    "customDPSBase": "",
                    "customDPS": "freynaPutridVenomCalcsNeuroStarter",
                    "returnStatOptions": {
                        "Puddle - AVG/Hit" : "avgPerPuddleTick",
                        "Trauma - AVG/Hit" : "avgPerTraumaTick",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 20,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 40,"limit": null,"isModified": true},
                        ],
                        "SWAMP": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 12,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 4,"limit": 3,"isModified": true},
                            {"statType": "","statName": "Projectile Speed","value": 0,"limit": null,"isModified": false,"isUnlabeledPercent": true},

                            {"isHeader": true,"statName": "Toxic Footprint"},
                            {"statType": "duration","statName": "Duration","value": 8,"limit": null,"isModified": true},
                            {"isHeader": true,"statName": "Venom-Injected"},
                            {"statType": "duration","statName": "Duration","value": 16,"limit": null,"isModified": true},
                        ],
                        "TRAUMA": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 6,"limit": null,"isModified": true},
                            {"statType": "","statName": "ATK Decrease","value": 0.10,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Recovery Decrease","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
                "Contagion": {
                    "name": "Putrid Venom",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_006_A01_03.png",
                    "type": ["Toxic","Tech"],
                    "desc": "Throws a toxin to create a Toxic Swamp. Enemies affected by the Toxic Swamp receive the Room 0 Trauma and Venom-Injected effects. Enemies with the Venom-Injected effect leave Toxic Footprints in their path which grant the Room 0 Trauma effect to enemies. Room 0 Trauma inflicts damage over time. When an enemy with Room 0 Trauma dies, it grants the Room 0 Trauma effect to nearby enemies.",
                    "powerMods": {
                        "puddle": 202.4/100,
                        "trauma": 188.2/100,
                        "panic": 0/100,//not used
                    },
                    "customDPSBase": "",
                    "customDPS": "freynaPutridVenomCalcsContagionStarter",
                    "returnStatOptions": {
                        "Puddle - AVG/Hit" : "avgPerPuddleTick",
                        "Trauma - AVG/Hit" : "avgPerTraumaTick",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 25,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 40,"limit": null,"isModified": true},
                            
                        ],
                        "SWAMP": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 12,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 4,"limit": 3,"isModified": true},
                            {"statType": "","statName": "Projectile Speed","value": 0,"limit": null,"isModified": false,"isUnlabeledPercent": true},

                            {"isHeader": true,"statName": "Toxic Footprint"},
                            {"statType": "duration","statName": "Duration","value": 8,"limit": null,"isModified": true},
                            {"isHeader": true,"statName": "Venom-Injected"},
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                        ],
                        "TRAUMA": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 6,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 6,"limit": 3,"isModified": true},
                        ],
                    },
                },
                "Venom Synthesis": {
                    "name": "Venom Synthesis",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_006_R03_Rune.png",
                    "type": ["Toxic","Tech"],
                    "desc": "Enters the Venom-Injected state. While in the Venom-Injected state, each time you move, you create Toxic Footprints. Enemies that come into contact with Toxic Footprints receive the Room 0 Trauma effect. Room 0 Trauma inflicts damage over time and grants the Putrid effect to nearby enemies.",
                    "powerMods": {
                        "trauma": 188.2/100,
                        "panic": 174.6/100,
                    },
                    "customDPSBase": "",
                    "customDPS": "freynaPutridVenomCalcsSynthesis",
                    "returnStatOptions": {
                        "Trauma - AVG/Hit" : "avgPerTraumaTick",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 25,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 35,"limit": null,"isModified": true},
                            {"statType": "duration","statName": "Toxic Duration","value": 10,"limit": null,"isModified": true},
                            {"statType": "","statName": "+Movement Speed","value": 0.30,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "duration","statName": "Footprint Duration","value": 8,"limit": null,"isModified": true},
                        ],
                        "TRAUMA": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 7,"limit": 3,"isModified": true},
                        ],
                        "PUTRID": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 5,"limit": null,"isModified": true},
                        ],
                    },
                },
            },
            "ability4": {
                "base": {
                    "name": "Venom Baptism",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_006_A01_04.png",
                    "type": ["Toxic","Tech"],
                    "desc": "Equips a Unique Weapon, which is released when all bullets are consumed or after the duration expires. Enemies hit by the bullets of the Unique Weapon receive the Room 0 Trauma effect. Room 0 Trauma inflicts damage over time and grants the Nightmare effect to nearby enemies.",
                    "powerMods": {
                        "base": 768.9/100,
                        "trauma": 188.2/100,
                        "panic": 174.6/100,
                        "magazine": 45,
                        "duration": 10,
                    },
                    "customDPSBase": "",
                    "customDPS": "freynaBaptismCalcs",
                    "returnStatOptions": {
                        "Trauma - AVG/Tick" : "avgPerTraumaTick",
                        "Trauma - Total AVG" : "totalAVGTrauma",
                        "Baptism - AVG/Shot" : "avgPerShot",
                        "Baptism - Total AVG" : "totalAVGGun",
                        "Baptism - AVG DPS" : "avgGunDPS",
                        "Total AVG DPS" : "avgTotalDPS",
                        "SUM Total AVG" : "SUMTotalAVG",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 110,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 55,"limit": null,"isModified": true},
                        ],
                        "UNIQUE WEAPON": [
                            {"statType": "magazine","statName": "Magazine","value": 45,"limit": null,"isModified": true},
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                        ],
                        "TRAUMA": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 7,"limit": 3,"isModified": true},
                        ],
                        "NIGHTMARE": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 5,"limit": null,"isModified": true},
                        ],
                        "SUM": [],
                    },
                },
                "Neurotoxin Synthesis": {
                    "name": "Venom Baptism",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_006_R04_04.png",
                    "type": ["Toxic","Tech"],
                    "desc": "Equips a Unique Weapon, which is released when all bullets are consumed or after the duration expires. Enemies hit by the bullets of the Unique Weapon receive the Room 0 Trauma effect. Room 0 Trauma inflicts damage over time, reduces ATK, and prevents recovery.",
                    "powerMods": {
                        "base": 768.9/100,
                        "trauma": 188.2/100,
                        "panic": 0/100,///not used
                        "magazine": 45,
                        "duration": 10,
                    },
                    "customDPSBase": "",
                    "customDPS": "freynaBaptismCalcsNeuroStarter",
                    "returnStatOptions": {
                        "Trauma - AVG/Tick" : "avgPerTraumaTick",
                        "Trauma - Total AVG" : "totalAVGTrauma",
                        "Baptism - AVG/Shot" : "avgPerShot",
                        "Baptism - Total AVG" : "totalAVGGun",
                        "Baptism - AVG DPS" : "avgGunDPS",
                        "Total AVG DPS" : "avgTotalDPS",
                        "SUM Total AVG" : "SUMTotalAVG",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 110,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 55,"limit": null,"isModified": true},
                        ],
                        "UNIQUE WEAPON": [
                            {"statType": "magazine","statName": "Magazine","value": 45,"limit": null,"isModified": true},
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                        ],
                        "TRAUMA": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 6,"limit": null,"isModified": true},
                            {"statType": "","statName": "ATK Decrease","value": 0.10,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Recovery Decrease","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "SUM": [],
                    },
                },
                "Contagion": {
                    "name": "Venom Baptism",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_006_R01_04.png",
                    "type": ["Toxic","Tech"],
                    "desc": "Equips a Unique Weapon, which is released when all bullets are consumed or after the duration expires. Enemies hit by the bullets of the Unique Weapon receive the Room 0 Trauma effect. Room 0 Trauma inflicts damage over time, reduces ATK, and prevents recovery.",
                    "powerMods": {
                        "base": 768.9/100,
                        "trauma": 188.2/100,
                        "panic": 0/100,///not used
                        "magazine": 45,
                        "duration": 10,
                    },
                    "customDPSBase": "",
                    "customDPS": "freynaBaptismCalcsContagionStarter",
                    "returnStatOptions": {
                        "Trauma - AVG/Tick" : "avgPerTraumaTick",
                        "Trauma - Total AVG" : "totalAVGTrauma",
                        "Baptism - AVG/Shot" : "avgPerShot",
                        "Baptism - Total AVG" : "totalAVGGun",
                        "Baptism - AVG DPS" : "avgGunDPS",
                        "Total AVG DPS" : "avgTotalDPS",
                        "SUM Total AVG" : "SUMTotalAVG",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 110,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 55,"limit": null,"isModified": true},
                        ],
                        "UNIQUE WEAPON": [
                            {"statType": "magazine","statName": "Magazine","value": 45,"limit": null,"isModified": true},
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                        ],
                        "TRAUMA": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Duration","value": 6,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 6,"limit": 3,"isModified": true},
                        ],
                        "SUM": [],
                    },
                },
            },
            "ability5": {
                "base": {
                    "name": "Contagion Links",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_006_A01_00.png",
                    "type": ["Toxic","Tech"],
                    "desc": "When an enemy with Room 0 Trauma dies, it generates a Toxic Puddle. Enemies standing on the Toxic Puddle receive Room 0 Trauma. Room 0 Trauma inflicts damage over time and grants the Toxic Reaction effect to nearby enemies.",
                    "powerMods": {
                        "trauma": 188.2/100,
                        "base": 200.5/100,
                        "toxic": 133.5/100,
                    },
                    "customDPSBase": "",
                    "customDPS": "freynaContagionCalcs",
                    "returnStatOptions": {
                        "Puddle - AVG/Hit" : "avgPerPuddleTick",
                        "Trauma - AVG/Hit" : "avgPerTraumaTick",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [],
                        "PUDDLE": [
                            {"statType": "","statName": "Spawn Rate","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Base","value": 5,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 3,"limit": 3,"isModified": true},
                        ],
                        "TRAUMA": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Base","value": 10,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 7,"limit": 3,"isModified": true},
                        ],
                        "TOXIC REACTION": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Base","value": 5,"limit": null,"isModified": true},
                        ],
                    },
                },
                "Neurotoxin Synthesis": {
                    "name": "Contagion Links",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_006_A01_00.png",
                    "type": ["Toxic","Tech"],
                    "desc": "When an enemy with Room 0 Trauma dies, it generates a Toxic Puddle. Enemies standing on the Toxic Puddle receive Room 0 Trauma. Room 0 Trauma inflicts damage over time, reduces attack power, and prevents healing.",
                    "powerMods": {
                        "trauma": 188.2/100,
                        "base": 178.0/100,
                        "toxic": 0/100,//not used
                    },
                    "customDPSBase": "",
                    "customDPS": "freynaContagionCalcsNeuroStarter",
                    "returnStatOptions": {
                        "Puddle - AVG/Hit" : "avgPerPuddleTick",
                        "Trauma - AVG/Hit" : "avgPerTraumaTick",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [],
                        "PUDDLE": [
                            {"statType": "","statName": "Spawn Rate","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Base","value": 5,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 3,"limit": 3,"isModified": true},
                        ],
                        "TRAUMA": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Base","value": 6,"limit": null,"isModified": true},
                            {"statType": "","statName": "ATK Decrease","value": 0.10,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Recovery Decrease","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
                "Contagion": {
                    "name": "Contagion Links",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_006_A01_00.png",
                    "type": ["Toxic","Tech"],
                    "desc": "When an enemy with Room 0 Trauma dies, it generates a Toxic Puddle. Enemies standing on the Toxic Puddle receive Room 0 Trauma. Room 0 Trauma inflicts damage over time. When an enemy with Room 0 Trauma dies, it grants the Room 0 Trauma effect to nearby enemies.",
                    "powerMods": {
                        "trauma": 188.2/100,
                        "base": 200.5/100,
                        "toxic": 0/100,//not used
                    },
                    "customDPSBase": "",
                    "customDPS": "freynaContagionCalcsContagionStarter",
                    "returnStatOptions": {
                        "Puddle - AVG/Hit" : "avgPerPuddleTick",
                        "Trauma - AVG/Hit" : "avgPerTraumaTick",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [],
                        "PUDDLE": [
                            {"statType": "","statName": "Spawn Rate","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Base","value": 4,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 3,"limit": 3,"isModified": true},
                        ],
                        "TRAUMA": [
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "duration","statName": "Base","value": 6,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Range","value": 6,"limit": 3,"isModified": true},
                        ],
                    },
                },
            }
        }
    },
    "Jayber": {
        "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_005_A01.png",
        "name": "Jayber",
        "baseStats": {
            "HP": 1009,
            "Shield": 238,
            "ShieldInCombat": 3.3,
            "ShieldOutCombat": 3.96,
            "DEF": 2083,
            "ResistanceFire": 12,
            "ResistanceChill": 12,
            "ResistanceElectric": 12,
            "ResistanceToxin": 12,
            "MP": 187,
            "MPInCombat": 0,
            "MPOutCombat": 0.3,
            "CritRate": 0.05,
            "CritDamage": 1.3,
        },
        "characterSettings": {
            "jayberTurretSyncActive": true,
        },
        "abilities": {
            "ability1": {
                "base": {
                    "name": "Assault Turret",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_005_A01_01.png",
                    "type": ["Non-Attribute","Dimension"],
                    "desc": "Summons an Assault Turret. The Assault Turret remains on the battlefield to attack enemies. When hit by a Unique Weapon, it creates a Damage Zone dealing continuous damage to nearby enemies.",
                    "powerMods": {
                        "base": 100/100,
                        "zone": 104.9/100,
                    },
                    "customDPSBase": "",
                    "customDPS": "jayberAssaultCalcs",
                    "returnStatOptions": {
                        "Assault - AVG/Tick" : "avgAssaultTick1",
                        "Zone - AVG/Tick" : "avgZoneTick1",
                        "Total Assault AVG" : "totalTurretAVG1",
                        "Total Zone AVG" : "totalZoneAVG1",
                        "SUM Total AVG" : "sumTotalAVG1",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 20,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 30,"limit": null,"isModified": true},
                        ],
                        "ASSAULT TURRET": [
                            {"statType": "duration","statName": "Duration","value": 15,"limit": null,"isModified": true},
                            {"statType": "","statName": "HP from Summoner","value": 0.75,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Shield from Summoner","value": 0.75,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Power Mod from Summoner","value": 0.75,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "DEF from Summoner","value": 0.80,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "TURRET ZONE": [
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                            {"statType": "","statName": "Interval (s)","value": 0.3,"limit": null,"isModified": false},
                            {"statType": "range","statName": "Range","value": 6,"limit": 2,"isModified": true},
                        ],
                        "SUM": [],
                    },
                },
                "Attacking Compulsion": {
                    "name": "Assault Turret",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_005_R04_Rune.png",
                    "type": ["Non-Attribute","Dimension"],
                    "desc": "Summons an Assault Turret. The Assault Turret remains on the battlefield to attack enemies. When hit by a Unique Weapon, it creates a Damage Zone dealing continuous damage to nearby enemies.<br><br>This version of Assault Turret accounts for 2 active turrets and includes that in the damage, considering you have Attacking Compulsion equipped.",
                    "powerMods": {
                        "base": 100/100,
                        "zone": 104.9/100,
                    },
                    "customDPSBase": "",
                    "customDPS": "jayberAssaultCalcsAttackCompulsionStarter",
                    "returnStatOptions": {
                        "Assault - AVG/Tick" : "avgAssaultTick1",
                        "Zone - AVG/Tick" : "avgZoneTick1",
                        "Total Assault AVG" : "totalTurretAVG1",
                        "Total Zone AVG" : "totalZoneAVG1",
                        "SUM Total AVG" : "sumTotalAVG1",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 20,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 30,"limit": null,"isModified": true},
                        ],
                        "ASSAULT TURRET": [
                            {"statType": "duration","statName": "Duration","value": 15,"limit": null,"isModified": true},
                            {"statType": "","statName": "HP from Summoner","value": 0.75,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Shield from Summoner","value": 0.75,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Power Mod from Summoner","value": 0.75,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "DEF from Summoner","value": 0.80,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "TURRET ZONE": [
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                            {"statType": "","statName": "Interval (s)","value": 0.3,"limit": null,"isModified": false},
                            {"statType": "range","statName": "Range","value": 6,"limit": 2,"isModified": true},
                        ],
                        "SUM": [],
                    },
                },
                "Medical Compulsion": {
                    "name": "Medical Turret",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_005_R03_Rune.png",
                    "type": ["Non-Attribute","Dimension"],
                    "desc": "Since this functions identically to your medical turret, rather than show anything here, just go look at Medical Turret's calculations to see what this mod is doing for you.",
                    "powerMods": {
                    },
                    "returnStatOptions": {},
                    "customDPSBase": "",
                    "customDPS": "jayberAssaultCalcsMedicalCompulsion",
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [],
                    },
                },
            },
            "ability2": {
                "base": {
                    "name": "Medical Turret",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_005_A01_02.png",
                    "type": ["Non-Attribute","Dimension"],
                    "desc": "Summons a Medical Turret. The Medical Turret recovers the HP of allies within the Recovery Zone. When hit by a Unique Weapon, it creates a Taunt Zone, tauning nearby enemies within the area.",
                    "powerMods": {
                    },
                    "returnStatOptions": {},
                    "customDPSBase": "",
                    "customDPS": "jayberMedicalCalcs",
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 45,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 40,"limit": null,"isModified": true},
                        ],
                        "MEDICAL TURRET": [
                            {"statType": "","statName": "HP Recovery","value": 0.021,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Recov Interval (s)","value": 1.5,"limit": null,"isModified": false},
                            {"statType": "range","statName": "Recov Range","value": 6,"limit": 2,"isModified": true},
                            {"statType": "duration","statName": "Duration","value": 12,"limit": null,"isModified": true},
                            {"statType": "","statName": "HP from Summoner","value": 1.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Shield from Summoner","value": 1.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Power Mod from Summoner","value": 0.755,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "DEF from Summoner","value": 0.90,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "TURRET ZONE": [
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Taunt Range","value": 5.5,"limit": 2,"isModified": true},
                        ],
                    },
                },
                "Attacking Compulsion": {
                    "name": "Attacking Compulsion",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_005_R04_Rune.png",
                    "type": ["Non-Attribute","Dimension"],
                    "desc": "Since this functions identically to your assault turret, rather than show anything here, I've made it so Assault Turret will just show the damage numbers for 2 turrets when this mod is equipped.<br>As such, just go look at Assault Turret's calculations to see what this mod is doing for you.",
                    "powerMods": {},
                    "customDPSBase": "",
                    "customDPS": "jayberMedicalCalcsAttackCompulsion",
                    "returnStatOptions": {},
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [],
                    },
                },
                "Medical Compulsion": {
                    "name": "Medical Compulsion",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_005_R03_Rune.png",
                    "type": ["Non-Attribute","Dimension"],
                    "desc": "Summons a Medical Turret. The Medical Turret recovers the HP of allies within the Recovery Zone. When hit by a Unique Weapon, it creates a Taunt Zone, tauning nearby enemies within the area.",
                    "powerMods": {
                    },
                    "returnStatOptions": {},
                    "customDPSBase": "",
                    "customDPS": "jayberAssaultCalcsMedicalCompulsionStarter",
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 45,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 40,"limit": null,"isModified": true},
                        ],
                        "MEDICAL TURRET": [
                            {"statType": "","statName": "HP Recovery","value": 0.021,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Recov Interval (s)","value": 1.5,"limit": null,"isModified": false},
                            {"statType": "range","statName": "Recov Range","value": 6,"limit": 2,"isModified": true},
                            {"statType": "duration","statName": "Duration","value": 12,"limit": null,"isModified": true},
                            {"statType": "","statName": "HP from Summoner","value": 1.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Shield from Summoner","value": 1.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "Power Mod from Summoner","value": 0.755,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "DEF from Summoner","value": 0.90,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "TURRET ZONE": [
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                            {"statType": "range","statName": "Taunt Range","value": 5.5,"limit": 2,"isModified": true},
                        ],
                    },
                },
            },
            "ability3": {
                "base": {
                    "name": "Multi-Purpose Gun",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_005_A01_03.png",
                    "type": ["Non-Attribute","Singular"],
                    "desc": "Equip a Unique Weapon. Hitting a turret with the Unique Weapon creates a Turret Zone. Additional hits to the turret while a zone is active, recover the turret's HP and increase its duration. When hitting enemies, inflict damage.<br>The cooldown is adjusted based on the number of bullets fired.",
                    "powerMods": {
                        "base": 554.2/100,
                    },
                    "customDPSBase": "",
                    "customDPS": "jayberMultipurposeCalcs",
                    "returnStatOptions": {
                        "Unique Weapon - AVG/Hit" : "avgDmgPerShot3",
                        "Unique Weapon - Mag Size" : "totalMagazineSize3",
                        "Unique Weapon - Total AVG" : "totalUniqueWeaponDamage3",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 15,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 30,"limit": null,"isModified": true},
                        ],
                        "UNIQUE WEAPON": [
                            {"statType": "magazine","statName": "Magazine","value": 3,"limit": null,"isModified": true},
                        ],
                        "ON TURRET HIT": [
                            {"statType": "","statName": "HP Recovery","value": 0.60,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "duration","statName": "Duration Increase","value": 15,"limit": null,"isModified": true},
                        ],
                    },
                },
                "Turret Engineering": {
                    "name": "Turret Engineering",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_005_R01_Rune.png",
                    "type": ["Non-Attribute","Singular"],
                    "desc": "Recovers HP and increases duration for all active turrets.",
                    "powerMods": {},
                    "customDPSBase": "",
                    "customDPS": "jayberMultipurposeCalcsEngineering",
                    "returnStatOptions": {},
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 60,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 30,"limit": null,"isModified": true},
                        ],
                        "SKILL EFFECT": [
                            {"statType": "","statName": "HP Recovery","value": 0.20,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "duration","statName": "Duration Increase","value": 15,"limit": null,"isModified": true},
                        ],
                    },
                },
            },
            "ability4": {
                "base": {
                    "name": "Reactivate",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_005_A01_04.png",
                    "type": ["Non-Attribute","Singular"],
                    "desc": "Detonates a summonded Turret, granting Overhaul. The self-destruction releases multiple fragments nearby, dealing Explosion DMG.<br>While Overhaul is active, new turrets are summoned with their respective Turret Zones activated.",
                    "powerMods": {
                        "base": 501.1/100,
                    },
                    "customDPSBase": "",
                    "customDPS": "jayberReactivateCalcs",
                    "returnStatOptions": {
                        "Explosion - AVG/Hit" : "avgDmgPerShot4",
                        "Explosion - Shot Count" : "totalMagazineSize4",
                        "Explosion - Total AVG" : "totalExplosionDamage4",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 80,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 30,"limit": null,"isModified": true},
                        ],
                        "PROJECTILES": [
                            {"statType": "magazine","statName": "Shots","value": 3,"limit": null,"isModified": false},
                            {"statType": "range","statName": "Explosion Range","value": 6,"limit": 2,"isModified": true},
                        ],
                        "OVERHAUL": [
                            {"statType": "duration","statName": "Duration","value": 30,"limit": null,"isModified": true},
                        ],
                    },
                },
                "Immediate Purge Code": {
                    "name": "Immediate Purge Code",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_005_R02_Rune.png",
                    "type": ["Non-Attribute","Singular"],
                    "desc": "Detonates a summonded Turret, granting Overhaul. The self-destruction deals explosive damage to nearby enemies and creates a Lightning AOE.<br>While Overhaul is active, new turrets are summoned with their respective Turret Zones activated.",
                    "powerMods": {
                        "base": 140.5/100,
                        "continuous": 262.0/100,
                    },
                    "customDPSBase": "",
                    "customDPS": "jayberReactivateCalcsPurge",
                    "returnStatOptions": {
                        "Explosion - AVG/Hit" : "avgDmgPerExplosion4",
                        "Lightning - AVG/Hit" : "avgDmgPerTick4",
                        "Lightning - Total AVG" : "totalAvgTickDMG4",
                        "SUM Total AVG" : "sumTotalAVG4",
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 80,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 30,"limit": null,"isModified": true},
                        ],
                        "EXPLOSION": [
                            {"statType": "range","statName": "Explosion Range","value": 6,"limit": 2,"isModified": true},
                        ],
                        "LIGHTNING AOE": [
                            {"statType": "duration","statName": "Duration","value": 10,"limit": null,"isModified": true},
                            {"statType": "","statName": "Interval (s)","value": 1,"limit": null,"isModified": false},
                            {"statType": "range","statName": "Explosion Range","value": 6,"limit": 2,"isModified": true},
                        ],
                        "OVERHAUL": [
                            {"statType": "duration","statName": "Duration","value": 30,"limit": null,"isModified": true},
                        ],
                    },
                },
            },
            "ability5": {
                "base": {
                    "name": "Turret Sync",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_005_A01_00.png",
                    "type": ["Non-Attribute"],
                    "desc": "When both turrets are summoned, gain Turret Sync.",
                    "powerMods": {
                        "FirearmATK%": 0.20,
                        "SkillPower": 0.20
                    },
                    "returnStatOptions": {},
                    "customDPSBase": "jayberSyncCalcsTier0",
                    "customDPS": "jayberSyncCalcs",
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [],
                        "TURRET SYNC": [
                            {"statType": "","statName": "+Firearm ATK%","value": 0.20,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "","statName": "+Skill Power (Opt.)","value": 0.20,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                    },
                },
            }
        }
    },


    // "Viessa": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_003_U01.png",
    // },
    // "Ajax": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_002_U01.png"
    // },
    
    // "Gley": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_007_U01.png"
    // },
    // "Sharen": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_008_A01.png"
    // },
    // "Blair": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_009_A01.png"
    // },
    // "Valby": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_010_U01.png"
    // },
    
    // "Enzo": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_013_A01.png"
    // },
    // "Yujin": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_014_A01.png"
    // },
    // "Luna": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_015_A01.png"
    // },
}