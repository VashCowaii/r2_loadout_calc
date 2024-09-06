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
            "MagneticForce": {
                "magForceBarState": 100,
            }
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
                    "customDPS": "kyleBulwarkTicks",//kyleThrustersCalcs
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
                    "desc": "Uses Superconductivity Thrusters to soar into the air. Descends, colliding with enemies and dealingg damage upon impact. Damage increases proportionally to the amount of Magnetic Force consumed. When the skill ends, Magnetic Force is fully consumed.<br><br>Maybe not specified the best here is that the dmg is scaled off of your owned mag force on impact, not necessarily how much mag force you lose or consume between casting and impact."
                },
                "Superconductive Bombing": {
                    "name": "Superconductive Bombing",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_R04_Rune.png",
                    "type": ["Non-Attribute","Tech"],
                    "customDPS": "kyleBomberCalcs",
                    "desc": "[BUGGED, SEE SECOND PARAGRAPH]<br>Uses Superconductive Bombing to fly in the air and drop bombs. Each bomb consumes Magnetic Force to drop and the bombing stops when Magnetic Force is completely depleted. On collision with an enemy, deals damage to the enemy, but additional damage from Magnetic Force on collision is not triggered.<br><br>Hella fuckin bugged right now, the bombs individually just do 100% of skill power + modifiers, and only 5-6 bombs drop per cost interval. This means that either we're missing 2.5 bombs per drop, or each bomb is only doing 1/8th the damage that they should be.<br>If ever fixed, Kyle will easily solo one-phase bosses. "
                },
            },
            "ability5": {
                "base": {
                    "name": "Experienced Technician",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_011_A01_00.png",
                    "type": ["Non-Attribute"],
                    "customDPS": ""
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
            "Overkill": {
                "USEFireRateUP": true,
                "USESharpPrecisionShot": true,
            }
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
                    "stats": {
                        "PowerModifierBase": 0.20
                    },
                    "customDPS": ""
                },
                "Power Unit Change": {
                    "name": "Power Unit Change",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_R02_Rune.png",
                    "type": ["Fire","Singular"],
                    "customDPS": ""
                },
                "Nerve Infiltration": {
                    "name": "Nerve Infiltration",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_R04_Rune.png",
                    "type": ["Fire","Singular"],
                    "customDPS": ""
                },
            },
            "ability3": {
                "base": {
                    "name": "Traction Grenade",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_A01_03.png",
                    "type": ["Fire","Singular"],
                    "customDPS": ""
                },
                "augNameHere": {},
            },
            "ability4": {
                "base": {
                    "name": "Overkill",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_A01_04.png",
                    "type": ["Fire","Tech"],
                    "customDPS": "lepicOverkillCalcs",
                    "desc": "Equips a Unique Weapon. While the Unique Weapon is equipped, MP is continuously consumed. When MP runs out, the weapon is unequipped. Enemies hit by the Unique Weapon bullets take Burst DMG. The impact point creates a Damage Zone, dealing continuous damage.<br><br>I'll try to make better indicators in the future, but just be aware that right now it does factor in Overclock's 20% power modifier assuming it hasn't been swapped out due to a transcendant mod, and then if you have firearm master on it will account for the 39% power modifier there.<br><br>Also if you watched my lepic vid, see the pinned comment for a mod swap."
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
                    "customDPS": ""
                },
                "Firearm Master": {
                    "name": "Firearm Master",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_R06_Rune.png",
                    "type": ["Fire"],
                    "stats": {
                        "PowerModifierBase": 0.39
                    },
                    "customDPS": ""
                },
                "Regenerative Braking": {
                    "name": "Regenerative Braking",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_001_R05_Rune.png",
                    "type": ["Fire"],
                    "customDPS": ""
                },
            }
        }
    },
    // "Ajax": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_002_U01.png"
    // },
    // "Viessa": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_003_U01.png"
    // },





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
            "LightningEmission": {
                "barPercentState": 90,
            }
        },
        "abilities": {
            "ability1": {
                "base": {
                    "name": "Thrill Bomb",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_A01_01.png",
                    "type": ["Electric","Fusion"],
                    "customDPS": ""
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
                    "customDPS": ""
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
                    "customDPS": "",
                    "desc": ""
                },
            },
            "ability5": {
                "base": {
                    "name": "Rabbit Foot",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_004_A01_00.png",
                    "type": ["Electric","Fusion"],
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





    // "Jayber": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_005_A01.png"
    // },
    // "Freyna": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_006_A01.png"
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
    
    // "Esiemo": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_012_A01.png"
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
    // "Hailey": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_016_A01.png"
    // },
}