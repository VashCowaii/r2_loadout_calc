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
            "CritRate": 0.,
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
                    "desc": ""
                },
            },
            "ability2": {
                "base": {
                    "name": "No Character Selected",
                    "image": "/images/Remnant/clear.png",
                    "type": [""],
                    "customDPS": "",
                    "desc": ""
                },
            },
            "ability3": {
                "base": {
                    "name": "No Character Selected",
                    "image": "/images/Remnant/clear.png",
                    "type": [""],
                    "customDPS": "",
                    "desc": ""
                },
            },
            "ability4": {
                "base": {
                    "name": "No Character Selected",
                    "image": "/images/Remnant/clear.png",
                    "type": [""],
                    "customDPS": "",
                    "desc": ""
                },
            },
            "ability5": {
                "base": {
                    "name": "No Character Selected",
                    "image": "/images/Remnant/clear.png",
                    "type": [""],
                    "customDPS": "",
                    "desc": ""
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
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 8,"limit": null,"isModified": true},
                            {"statType": "cost","statName": "MP Cost","value": 2,"limit": null,"isModified": true},
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
                "augNameHere": {},
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
                    },
                    "displayStats": [],
                    "displayStatsALT": {
                        "BASIC": [
                            {"statType": "cooldown","statName": "Cooldown","value": 30,"limit": null,"isModified": true},
                            {"statType": "","statName": "Max CDR when finished","value": -0.90,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        ],
                        "UNIQUE WEAPON - SKILL SPLIT": [],
                        "UNIQUE WEAPON - FIREARM SPLIT": [
                            {"statType": "","statName": "+Firearm ATK Multi","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                            {"statType": "magazine","statName": "Magazine","value": 4,"limit": null,"isModified": true},
                            {"statType": "","statName": "MP Recovery/Weak Point Shot","value": 0.15,"limit": null,"isModified": false,"isUnlabeledPercent": true},
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
        "characterSettings": {
            "magForceBarState": 100,
        },
        "abilities": {
            "ability1": {
                "base": {
                    "name": "Repulsion Dash",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_A01_01.png",
                    "type": ["Non-Attribute","Tech"],
                    "customDPS": ""
                },
                "Collision Instinct": {
                    "name": "Collision Instinct",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_R01_Rune.png",
                    "type": ["Non-Attribute","Tech"],
                    "customDPS": ""
                },
            },
            "ability2": {
                "base": {
                    "name": "Magnetic Bulwark",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_A01_02.png",
                    "type": ["Non-Attribute","Dimension"],
                    "stats": {},
                    "customDPS": ""
                },
                "Diamagnetic Bulwark": {
                    "name": "Diamagnetic Bulwark",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_R03_Rune.png",
                    "type": ["Non-Attribute","Dimension"],
                    "stats": {},
                    // "customDPS": "kyleBulwarkTicks",//kyleThrustersCalcs
                    "customDPS": "",
                    "desc": "Creates a Barrier that inflicts Knockback on all enemies in contact. Recovers Magnetic Force based on the number of times the Barrier inflicted Knockback on enemies."
                },
            },
            "ability3": {
                "base": {
                    "name": "Magnetism Spurt",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_A01_03.png",
                    "type": ["Non-Attribute","Dimension"],
                    "customDPS": ""
                },
                "Self-Directed Eruption": {
                    "name": "Self-Directed Eruption",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_R02_Rune.png",
                    "type": ["Non-Attribute","Dimension"],
                    "customDPS": ""
                },
            },
            "ability4": {
                "base": {
                    "name": "Superconductivity Thrusters",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_A01_04.png",
                    "type": ["Non-Attribute","Tech"],
                    "customDPS": "kyleThrustersCalcs",//kyleThrustersCalcs
                    "desc": "Uses Superconductivity Thrusters to soar into the air. Descends, colliding with enemies and dealing damage upon impact. Damage increases proportionally to the amount of Magnetic Force consumed. When the skill ends, Magnetic Force is fully consumed.<br><br>Maybe not specified the best here is that the dmg is scaled off of your owned mag force on impact, not necessarily how much mag force you lose or consume between casting and impact."
                },
                "Superconductive Bombing": {
                    "name": "Superconductive Bombing",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_R04_Rune.png",
                    "type": ["Non-Attribute","Tech"],
                    "customDPS": "kyleBomberCalcs",
                    "desc": "Uses Superconductive Bombing to fly in the air and drop bombs. Each bomb consumes Magnetic Force to drop and the bombing stops when Magnetic Force is completely depleted.<br>On collision with an enemy, deals damage to the enemy, but additional damage from Magnetic Force on collision is not triggered. Additionally, the flying duration is now affected by the Skill Duration UP effect. While using the skill, you are immune to Knockdown and Knockback effects."
                },
            },
            "ability5": {
                "base": {
                    "name": "Experienced Technician",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_A01_00.png",
                    "type": ["Non-Attribute"],
                    "desc": "Max amount of Magnetic Force increases proportionally to Max Shield. When the Shield is fully consumed, gains Magnetic Care. This effect has a cooldown.<br>Magnetic Force gradually decreases while Out of Combat.",
                    "customDPSBase": "kyleBarCalcs",
                    "customDPS": "",
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
        "characterSettings": {
            "USEFireRateUP": true,
            "USESharpPrecisionShot": true,
            "lepicOverclockBonus": true,
            "lepicNerveBonus": true,
            "lepicPowerUnitBonus": true,
            "lepicFirearmMasterBonus": true,
        },
        "abilities": {
            "ability1": {
                "base": {
                    "name": "Grenade Throw",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_A01_01.png",
                    "type": ["Fire","Tech"],
                    "customDPS": ""
                },
                "Explosive Stacks": {
                    "name": "Explosive Stacks",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_R03_Rune.png",
                    "type": ["Fire","Tech"],
                    "customDPS": ""
                },
            },
            "ability2": {
                "base": {
                    "name": "Overclock",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_A01_02.png",
                    "type": ["Fire","Singular"],
                    "stats": {},
                    "desc": "Gains Overclock. Inflicts Burn on enemies damaged by Grenade Throw or Overkill. Burn deals continuous damage for a certain period of time.<br><br>BUG: If you throw grenades or shoot Overkill faster than one shot per second, the burn refreshes and cannot do its damage until you stop shooting.",
                    "customDPSBase": "lepicOverclockCalcs"
                },
                "Power Unit Change": {
                    "name": "Power Unit Change",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_R02_Rune.png",
                    "type": ["Fire","Singular"],
                    "desc": "Gains Power Unit Charge. Inflicts Burn on enemies damaged by Grenade Throw or Overkill.",
                    "customDPSBase": "lepicPowerUnitCalcs"
                },
                "Nerve Infiltration": {
                    "name": "Nerve Infiltration",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_R04_Rune.png",
                    "type": ["Fire","Singular"],
                    "desc": "Gains Overclock. Inflicts Weaken Regeneration on enemies damaged by Grenade Throw or Overkill.",
                    "customDPSBase": "lepicNerveCalcs"
                },
            },
            "ability3": {
                "base": {
                    "name": "Traction Grenade",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_A01_03.png",
                    "type": ["Fire","Singular"],
                    "desc": "Throws a Traction Grenade forward to inflict Towed on enemies within range.",
                    "customDPS": "lepicTractionCalcs",
                    "displayStats": [
                        {"isHeader": true,"statName": "Basic Info"},
                        {"statType": "cooldown","statName": "Cooldown","value": 25,"limit": null,"isModified": true},
                        {"statType": "cost","statName": "MP Cost","value": 45,"limit": null,"isModified": true},
                        {"isHeader": true,"statName": "Traction Grenade"},
                        {"statType": "range","statName": "Range","value": 9,"limit": 3,"isModified": true},
                        {"statType": "duration","statName": "Duration","value": 2,"limit": null,"isModified": true},
                    ],
                },
                "augNameHere": {},
            },
            "ability4": {
                "base": {
                    "name": "Overkill",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_A01_04.png",
                    "type": ["Fire","Tech"],
                    "customDPS": "lepicOverkillCalcs",
                    "desc": "Equips a Unique Weapon. While the Unique Weapon is equipped, MP is continuously consumed. When MP runs out, the weapon is unequipped. Enemies hit by the Unique Weapon bullets take Burst DMG. The impact point creates a Damage Zone, dealing continuous damage.<br><br>Also if you watched my lepic vid, see the pinned comment for a mod swap."
                },
                "Increased Efficiency": {
                    "name": "Increased Efficiency",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_R01_Rune.png",
                    "type": ["Fire","Tech"],
                    "customDPS": "",
                    "desc": "Equip a Unique Weapon. Attacking with the Unique Weapon consumes MP, and is unequipped when MP is depleted. Enemies hit by Unique Weapon bullets take Burst DMG. Critical Hits have a chance to recover MP. MP Recovery has a cooldown."
                },
            },
            "ability5": {
                "base": {
                    "name": "Close Call",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_A01_00.png",
                    "type": ["Fire"],
                    "desc": "Upon receiving Fatal Damage, gains Close Call. While active, grants damage Immunity and Immobilization. When Close Call ends, recovers HP Proportional to Max HP.",
                    "customDPS": "lepicCloseCallCalcs",
                    "displayStats": [
                        {"isHeader": true,"statName": "Basic Info"},
                        {"statType": "cooldown","statName": "Cooldown","value": 600,"limit": null,"isModified": true},
                        {"isHeader": true,"statName": "Close Call"},
                        {"statType": "duration","statName": "Duration","value": 5,"limit": null,"isModified": true},
                        {"statType": "","statName": "Health Recovery","value": 0.50,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                    ],
                },
                "Firearm Master": {
                    "name": "Firearm Master",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_R06_Rune.png",
                    "type": ["Fire"],
                    "stats": {},
                    "desc": "When reloading weapons, gain Load Mastery and increase Skill Effect Range. When changing weapons, gain Change Mastery and increase Skill Power Modifier.",
                    "customDPSBase": "lepicFirearmMasterCalcs",
                    "displayStats": [
                        {"isHeader": true,"statName": "Load Mastery"},
                        {"statType": "duration","statName": "Duration","value": 5,"limit": null,"isModified": true},
                        {"statType": "","statName": "Range Increase","value": 0.45,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"isHeader": true,"statName": "Change Mastery"},
                        {"statType": "duration","statName": "Duration","value": 5,"limit": null,"isModified": true},
                        {"statType": "","statName": "+Power Modifier%","value": 0.39,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                    ],
                },
                "Regenerative Braking": {
                    "name": "Regenerative Braking",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_R05_Rune.png",
                    "type": ["Fire"],
                    "desc": "When using a skill, you gain a chance to recover MP on a cooldown.",
                    "customDPSBase": "lepicBrakingCalcs",
                    "displayStats": [
                        {"isHeader": true,"statName": "Basic Info"},
                        {"statType": "cooldown","statName": "Cooldown","value": 10,"limit": null,"isModified": true},
                        {"isHeader": true,"statName": "Skill Effect"},
                        {"statType": "","statName": "Recovery Chance","value": 0.17,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "","statName": "Recovery Amount","value": 0.12,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                    ],
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
        "characterSettings": {
            "barPercentState": 90,
        },
        "abilities": {
            "ability1": {
                "base": {
                    "name": "Thrill Bomb",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_A01_01.png",
                    "type": ["Electric","Fusion"],
                    "desc": "Creates a Thrill Bomb that targets the nearest enemy within range, dealing damage. This damage increases proportionally to the amount of Electricity retained. Inflicts Electrocution on enemies hit.",
                    "customDPS": "bunnyThrillCalcs"
                },
                "High-Voltage": {
                    "name": "Thrill Bomb",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_R06_01.png",
                    "type": ["Electric","Fusion"],
                    "customDPS": ""
                },
                "Superconductor": {
                    "name": "Thrill Bomb",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_R03_01.png",
                    "type": ["Electric","Fusion"],
                    "customDPS": ""
                },
            },
            "ability2": {
                "base": {
                    "name": "Speed of Light",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_A01_02.png",
                    "type": ["Electric","Singular"],
                    "stats": {},
                    "desc": "Always moves by Sprinting, and increases Sprint Speed.<br>Gaints Speed of Light. Speed of Light additionally gains electricity while moving.",
                    "customDPSBase": "bunnySpeedCalcs"
                },
                "Electric Transition": {
                    "name": "Electric Transition",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_R02_Rune.png",
                    "type": ["Electric","Singular"],
                    "stats": {},
                    "customDPS": ""
                },
                "Bionic Fuel": {
                    "name": "Bionic Fuel",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_R04_Rune.png",
                    "type": ["Electric","Singular"],
                    "stats": {},
                    "customDPS": ""
                },
            },
            "ability3": {
                "base": {
                    "name": "Lightning Emission",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_A01_03.png",
                    "type": ["Electric","Singular"],
                    "customDPS": "bunnyEmissionCalcs",
                    "desc": "Activates the Lightning Emission state. Deals damage to nearby enemies when moving a certain distance, increases damage proportional to the amount of Electricity retained. Inflicts Electrocution on enemies hit."
                },
                "High-Voltage": {
                    "name": "Lightning Emission",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_R06_03.png",
                    "type": ["Electric","Singular"],
                    "customDPS": "bunnyEmissionCalcsHVStarter",
                    "desc": "Activates the Lightning Emission state. Deals damage to nearby enemies when moving a certain distance, increases damage proportional to the amount of Electricity retained. Inflicts Electrocution on enemies hit."
                },
                "Superconductor": {
                    "name": "Lightning Emission",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_R03_03.png",
                    "type": ["Electric","Singular"],
                    "customDPS": "bunnyEmissionCalcs",
                    "desc": ""
                },
            },
            "ability4": {
                "base": {
                    "name": "Maximum Power",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_A01_04.png",
                    "type": ["Electric","Fusion"],
                    "customDPS": "",
                    "desc": ""
                },
                "Electric Condense": {
                    "name": "Maximum Power",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_R01_Rune.png",
                    "type": ["Electric","Fusion"],
                    "customDPS": "bunnyCondenseCalcs",
                    "desc": "Activates Electric Condense. While Electric Condense is active, allows for the acquisition of more Electricity. Deals damage to enemies within range when it ends and this damage increases proportionally to the amount of Electricity retained. Pressing the skill button again before the duration ends, ends the skill immediately. The range increases based on the activation time."
                },
            },
            "ability5": {
                "base": {
                    "name": "Rabbit Foot",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_A01_00.png",
                    "type": ["Electric","Fusion"],
                    "desc": "Deals damage to nearby enemies upon landing after a Double Jump.<br>Gains Electricity proportional to distance traveled. If there is no movement for a period, Electricity is gradually consumed.",
                    "customDPSBase": "bunnyFootCalcs",
                    "customDPS": ""
                },
                "Electric Charge": {
                    "name": "Electric Charge",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_R05_Rune.png",
                    "type": ["Fire"],
                    "stats": {},
                    "customDPS": ""
                },
            }
        }
    },

    "Esiemo": {
        "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_012_A01.png",
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
            "blastStacksPowerBonus": 2.25,
            "guidedBombStacks": 3,
            "propagandaBombStacks": 1,
            "isMadnessActive": false,
            "isNarcissimActive": false,
            //asdf settings go here
        },
        "abilities": {
            "ability1": {
                "base": {
                    "name": "Time Bomb",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_A01_01.png",
                    "type": ["Fire","Tech"],
                    "desc": "Fires a Sticky Bomb forward. The Sticky Bomb attaches to an enemy or terrain on contact.",
                    "customDPS": "esiemoTimeBombCalcs",
                    "displayStats": [
                        {"isHeader": true,"statName": "Basic Info"},
                        {"statType": "","statName": "Max Stacks","value": 5,"limit": null,"isModified": false},
                        {"statType": "cooldown","statName": "Stack Cooldown","value": 12,"limit": null,"isModified": true},
                        {"statType": "cost","statName": "MP Cost","value": 12,"limit": null,"isModified": true},
                        {"isHeader": true,"statName": "Skill Effect"},
                        {"statType": "powerMod","statName": "Base Power Mod.","value": 439.1/100,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "range","statName": "Explosion Range","value": 3,"limit": 2,"isModified": true},
                        {"statType": "","statName": "Projectile Speed","value": 0,"limit": null,"isModified": false,"isUnlabeledPercent": true}
                    ],
                },
            },
            "ability2": {
                "base": {
                    "name": "Blast",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_A01_02.png",
                    "type": ["Fire","Fusion"],
                    "stats": {},
                    "desc": "Detonate the attached bombs. Damage dealt increases with the number of attached bombs.",
                    "customDPSBase": "esiemoBlastCalcs",
                    "customDPS": "",
                    "displayStats": [
                        {"isHeader": true,"statName": "Basic Info"},
                        {"statType": "cooldown","statName": "Cooldown","value": 2.7,"limit": null,"isModified": true},
                        {"isHeader": true,"statName": "Detonate"},
                        {"statType": "","statName": "+DMG% per Bomb","value": 0.35,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "","statName": "Max Increases","value": 8,"limit": null,"isModified": false},
                    ],
                },
                "Cluster Bomb": {
                    "name": "Cluster Bomb",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_R02_Rune.png",
                    "type": ["Fire","Tech"],
                    "desc": "Detonates the attached bomb immediately. The detonated bomb spawns an explosive.",
                    // "customDPSBase": "esiemoClusterCalcsTier0",
                    // "customDPS": "esiemoClusterCalcs"
                    "customDPSBase": "esiemoClusterCalcs",
                    "customDPS": "",
                    "displayStats": [
                        {"isHeader": true,"statName": "Basic Info"},
                        {"statType": "cooldown","statName": "Cooldown","value": 2.7,"limit": null,"isModified": true},
                        {"isHeader": true,"statName": "Detonate"},
                        {"statType": "","statName": "+DMG% per Bomb","value": 0.15,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "","statName": "Max Increases","value": 8,"limit": null,"isModified": false},
                        {"isHeader": true,"statName": "Explosive"},
                        {"statType": "","statName": "Amount","value": 3,"limit": null,"isModified": false},
                        {"statType": "powerMod","statName": "Base Power Mod.","value": 143.9/100,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "range","statName": "Range","value": 2.5,"limit": 2,"isModified": true},
                        {"isHeader": true,"statName": "Burn"},
                        {"statType": "powerMod","statName": "Base Power Mod.","value": 15.5/100,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "","statName": "Interval","value": 1,"limit": null,"isModified": false},
                        {"statType": "duration","statName": "Duration","value": 5,"limit": null,"isModified": true},
                    ],
                },
                "Creative Explosion": {
                    "name": "Blast",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_A01_02.png",
                    "type": ["Fire","Fusion"],
                    "customDPSBase": "esiemoBlastCalcs2",
                    "desc": "Detonate the attached bombs. Damage dealt increases with the number of attached bombs.",
                    "displayStats": [
                        {"isHeader": true,"statName": "Basic Info"},
                        {"statType": "cooldown","statName": "Cooldown","value": 2.7,"limit": null,"isModified": true},
                        {"isHeader": true,"statName": "Detonate"},
                        {"statType": "","statName": "+DMG% per Bomb","value": 0.35,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "","statName": "Max Increases","value": 10,"limit": null,"isModified": false},
                    ],
                },
            },
            "ability3": {
                "base": {
                    "name": "Guided Landmine",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_A01_03.png",
                    "type": ["Fire","Tech"],
                    "desc": "Places a Guided Landmine. Once placed, the Guided Landmine flies to an enemy within its detection range and attaches to it. If there are obstacles in its path, it attaches to the terrain.",
                    "customDPSBase": "",
                    "customDPS": "esiemoGuidedCalcs",
                    "displayStats": [
                        {"isHeader": true,"statName": "Basic Info"},
                        {"statType": "","statName": "Max Stacks","value": 3,"limit": null,"isModified": false},
                        {"statType": "cooldown","statName": "Stack Cooldown","value": 14,"limit": null,"isModified": true},
                        {"statType": "cost","statName": "MP Cost","value": 18,"limit": null,"isModified": true},
                        {"isHeader": true,"statName": "Guided Landmine"},
                        {"statType": "range","statName": "Detection Range","value": 10,"limit": 2,"isModified": true},
                        {"statType": "duration","statName": "Detection Duration","value": 40,"limit": null,"isModified": true},
                        {"statType": "powerMod","statName": "Base Power Mod.","value": 1061.9/100,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "range","statName": "Explosion Range","value": 3,"limit": 2,"isModified": true},
                        {"statType": "","statName": "Projectile Speed","value": 0,"limit": null,"isModified": false,"isUnlabeledPercent": true}
                    ],
                },
                "Explosive Propaganda": {
                    "name": "Explosive Propaganda",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_R03_Rune.png",
                    "type": ["Fire","Tech"],
                    "desc": "Summons an Explosive Propaganda that taunts nearby enemies. The summoned Explosive Propaganda explodes on expiration.",
                    "customDPS": "esiemoPropagandaCalcs",
                    "displayStats": [
                        {"isHeader": true,"statName": "Basic Info"},
                        {"statType": "","statName": "Max Stacks","value": 2,"limit": null,"isModified": false},
                        {"statType": "cooldown","statName": "Stack Cooldown","value": 38,"limit": null,"isModified": true},
                        {"statType": "cost","statName": "MP Cost","value": 25,"limit": null,"isModified": true},
                        {"isHeader": true,"statName": "Explosive Propaganda"},
                        {"statType": "","statName": "HP","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "","statName": "DEF","value": 1,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "duration","statName": "Duration","value": 8,"limit": null,"isModified": true},
                        {"statType": "range","statName": "Taunt Range","value": 6,"limit": 2.5,"isModified": true},
                        {"statType": "powerMod","statName": "Base Power Mod.","value": 1493.3/100,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "range","statName": "Explosion Range","value": 7,"limit": 2,"isModified": true},
                        {"statType": "","statName": "Max Active","value": 2,"limit": null,"isModified": false}
                    ],
                },
            },
            "ability4": {
                "base": {
                    "name": "Arche Explosion",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_A01_04.png",
                    "type": ["Fire","Fusion"],
                    "customDPSBase": "esiemoArcheCalcsMadnessTier0",
                    "customDPS": "esiemoArcheCalcs",//
                    "desc": "Dashes forward to deal damage and inflict Knockback on colliding targets during movement. Interacting with the skill button again or ending movement deals Burst damage to nearby enemies. Enemies hit by the explosion lose their buffs. When the skill ends, grants self Madness. While using the skill, you are immune to Stagger effects.",
                    "displayStats": [
                        {"isHeader": true,"statName": "Basic Info"},
                        {"statType": "cooldown","statName": "Cooldown","value": 80,"limit": null,"isModified": true},
                        {"statType": "cost","statName": "MP Cost","value": 65,"limit": null,"isModified": true},
                        {"isHeader": true,"statName": "Skill Effect"},
                        {"statType": "","statName": "+Movement Speed","value": 1.2,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "powerMod","statName": "Impact Power Mod.","value": 85.8/100,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "powerMod","statName": "Base Power Mod.","value": 7414.4/100,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "range","statName": "Explosion Range","value": 6,"limit": 2,"isModified": true},
                        {"isHeader": true,"statName": "Madness"},
                        {"statType": "duration","statName": "Duration","value": 14,"limit": null,"isModified": true},
                        {"statType": "","statName": "+Skill Power","value": 0.25,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "","statName": "+Firearm ATK","value": 0.25,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "","statName": "+Movement Speed","value": 0.30,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "","statName": "-DEF","value": -0.30,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                    ],
                },
                "Creative Explosion": {
                    "name": "Creative Explosion",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_R04_Rune.png",
                    "type": ["Fire","Fusion"],
                    "customDPSBase": "esiemoCreativeCalcsNarcissimTier0",
                    "customDPS": "esiemoCreativeCalcs",//
                    "desc": "Rushes forward. Deals damage to targets collided with during movement and grants Knockback. Upon reactivating the skill or ending movement, deals explosive damage to nearby enemies. Enemies hit by the explosion have their buffs removed. At the end of skill, grants the Narcissism effect. While using the skill, you are immune to Stagger effects<br>Currently BUGGED, should do more dmg per bomb unused, see Esiemo build video for more details.",
                    "displayStats": [
                        {"isHeader": true,"statName": "Basic Info"},
                        {"statType": "cooldown","statName": "Cooldown","value": 40,"limit": null,"isModified": true},
                        {"statType": "cost","statName": "MP Cost","value": 80,"limit": null,"isModified": true},
                        {"isHeader": true,"statName": "Skill Effect"},
                        {"statType": "powerMod","statName": "Impact Power Mod.","value": 101.8/100,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "powerMod","statName": "Base Power Mod.","value": 4948.7/100,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "range","statName": "Explosion Range","value": 8,"limit": 2,"isModified": true},
                        {"statType": "","statName": "+DMG/Bomb [Doesn't work]","value": 0.044,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"isHeader": true,"statName": "Narcissism"},
                        {"statType": "duration","statName": "Duration","value": 14,"limit": null,"isModified": true},
                        {"statType": "","statName": "Cooldown Decrease","value": -0.40,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "","statName": "+Movement Speed","value": 0.30,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "","statName": "-DEF","value": -0.30,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                    ],
                },
            },
            "ability5": {
                "base": {
                    "name": "Adventitious Habit",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_A01_00.png",
                    "type": ["Fire","Tech"],
                    "desc": "Drops a bomb on the ground when hit.",
                    "customDPSBase": "",
                    "customDPS": "esiemoHabitCalcs",
                    "displayStats": [
                        {"isHeader": true,"statName": "Basic Info"},
                        {"statType": "cooldown","statName": "Cooldown","value": 60,"limit": null,"isModified": true},
                        {"isHeader": true,"statName": "Upon Skill Use"},
                        {"statType": "","statName": "Cooldown Decrease","value": 2,"limit": null,"isModified": false},
                        {"isHeader": true,"statName": "Skill Effect"},
                        {"statType": "powerMod","statName": "Base Power Mod.","value": 1617.3/100,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "range","statName": "Explosion Range","value": 4,"limit": 2,"isModified": true}
                    ],
                },
                "Explosive Evade": {
                    "name": "Explosive Evade",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_R01_Rune.png",
                    "type": ["Fire","Tech"],
                    "desc": "Places a Guided Landmine when rolling.",
                    "customDPSBase": "",
                    "customDPS": "esiemoEvadeCalcs",
                    "displayStats": [
                        {"isHeader": true,"statName": "Basic Info"},
                        {"statType": "cooldown","statName": "Cooldown","value": 20,"limit": null,"isModified": true},
                        {"isHeader": true,"statName": "Guided Landmine"},
                        {"statType": "range","statName": "Detection Range","value": 10,"limit": 2,"isModified": true},
                        {"statType": "duration","statName": "Detection Duration","value": 40,"limit": null,"isModified": true},
                        {"statType": "powerMod","statName": "Base Power Mod.","value": 1276.7/100,"limit": null,"isModified": false,"isUnlabeledPercent": true},
                        {"statType": "range","statName": "Explosion Range","value": 4,"limit": 2,"isModified": true},
                        {"statType": "","statName": "Max Active","value": 3,"limit": null,"isModified": false},
                    ],
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
                    "customDPSBase": "freynaMechanismCalcsInjection",
                    "customDPS": "",
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
                    },
                    "customDPSBase": "",
                    "customDPS": "freynaBaptismCalcs",
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
                    },
                    "customDPSBase": "",
                    "customDPS": "freynaBaptismCalcsNeuroStarter",
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
                    },
                    "customDPSBase": "",
                    "customDPS": "freynaBaptismCalcsContagionStarter",
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


    // "Viessa": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_003_U01.png",
    // },
    // "Ajax": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_002_U01.png"
    // },

    // "Jayber": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_005_A01.png"
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