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
        "characterSettings": {
            "stackCount": 16,
            "distance": 25,
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
                    "customDPS": "haileyCryoRoundCalcs"
                },
            },
            "ability2": {
                "base": {
                    "name": "Storm Snare",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_016_A01_02.png",
                    "type": ["Chill","Singular"],
                    "stats": {},
                    "desc": "Unleashes a Chill Vortex around her, knocking back hit targets and firing a massive Freezing Beam in the direction of the crosshairs. Inflicts Cry on targets hit based on Enemy AOE.",
                    "customDPS": "haileyStormCalcs",//haileyBigFuckinGunCalcs
                },
            },
            "ability3": {
                "base": {
                    "name": "Cold Fury",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_016_A01_03.png",
                    "type": ["Chill","Dimension"],
                    "desc": "Grants Hailey Cold Fury every second. The Cold Fury effect gradually decreases her movement speed, but greatly increases the base Firearm and Skill Critical Hit Rate and Firearm Penetration.<br>When Cold Fury reaches maximum stacks, Hailey becomes immune to Knockdown and gains an increase to her Firearm and Skill Critical Hit Damage. However, rolling or grappling removes 3 stacks.",
                    "customDPSBase": "haileyFuryCalcs",
                    "customDPS": ""
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
                    "desc": "Equips her Unique Weapon. When hitting an enemy with the Unique Weapon, greatly increases Penetration and Firearm ATK and deals additional Chill skill damage. Recovers a portion of MP upon successfully attacking Weak Points. Partially decreases the Cooldown of the Unique Weapon skill when the skill ends depending on the number of bullets fired."
                },
            },
            "ability5": {
                "base": {
                    "name": "Safe Strategic Retreat",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_016_A01_00.png",
                    "type": ["Chill"],
                    "desc": "Proportional to the distance between the target and Hailey, the Weak Point Damage decreases the closer you are to your target and increases the farther you are.",
                    "customDPSBase": "haileyRetreatCalcs",
                    "customDPS": ""
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
                    "customDPS": "esiemoTimeBombCalcs"
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
                    "customDPS": "",//haileyBigFuckinGunCalcs
                },
                "Cluster Bomb": {
                    "name": "Cluster Bomb",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_R02_Rune.png",
                    "type": ["Fire","Tech"],
                    "desc": "Detonates the attached bomb immediately. The detonated bomb spawns an explosive.",
                    // "customDPSBase": "esiemoClusterCalcsTier0",
                    // "customDPS": "esiemoClusterCalcs"
                    "customDPSBase": "",
                    "customDPS": ""
                },
                "Creative Explosion": {
                    "name": "Blast",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_A01_02.png",
                    "type": ["Fire","Fusion"],
                    "customDPSBase": "esiemoBlastCalcs2",
                    "desc": "Detonate the attached bombs. Damage dealt increases with the number of attached bombs."
                },
            },
            "ability3": {
                "base": {
                    "name": "Guided Landmine",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_A01_03.png",
                    "type": ["Fire","Tech"],
                    "desc": "Places a Guided Landmine. Once placed, the Guided Landmine flies to an enemy within its detection range and attaches to it. If there are obstacles in its path, it attaches to the terrain.",
                    "customDPSBase": "",
                    "customDPS": "esiemoGuidedCalcs"
                },
                "Explosive Propaganda": {
                    "name": "Explosive Propaganda",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_R03_Rune.png",
                    "type": ["Fire","Tech"],
                    "desc": "Summons an Explosive Propaganda that taunts nearby enemies. The summoned Explosive Propaganda explodes on expiration.",
                    "customDPS": "esiemoPropagandaCalcs"
                },
            },
            "ability4": {
                "base": {
                    "name": "Arche Explosion",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_A01_04.png",
                    "type": ["Fire","Fusion"],
                    "customDPSBase": "esiemoArcheCalcsMadnessTier0",
                    "customDPS": "esiemoArcheCalcs",//
                    "desc": "Dashes forward to deal damage and inflict Knockback on colliding targets during movement. Interacting with the skill button again or ending movement deals Burst damage to nearby enemies. Enemies hit by the explosion lose their buffs. When the skill ends, grants self Madness."
                },
                "Creative Explosion": {
                    "name": "Creative Explosion",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_R04_Rune.png",
                    "type": ["Fire","Fusion"],
                    "customDPSBase": "esiemoCreativeCalcsNarcissimTier0",
                    "customDPS": "esiemoCreativeCalcs",//
                    "desc": "Dashes forward, dealing damage and inflict Knockback on colliding targets with during movement[that's the genuine description, what the fuck]. Interacting with the skill button or ending the movement deals Burst damage to nearby enemies. Enemies hit by the explosion lose their buffs. When the skill ends, grants self Narcissism.<br>Currently bugged, see Esiemo build video for more details."
                },
            },
            "ability5": {
                "base": {
                    "name": "Adventitious Habit",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_A01_00.png",
                    "type": ["Fire","Tech"],
                    "desc": "Drops a bomb on the ground when the shield is completely depleted.",
                    "customDPSBase": "",
                    "customDPS": "esiemoHabitCalcs"
                },
                "Explosive Evade": {
                    "name": "Explosive Evade",
                    "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_012_R01_Rune.png",
                    "type": ["Fire","Tech"],
                    "desc": "Places a Guided Landmine when rolling.",
                    "customDPSBase": "",
                    "customDPS": "esiemoEvadeCalcs"
                },
            }
        }
    },

    // "Freyna": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_006_A01.png",
    //     "baseStats": {},
    //     "characterSettings": {},
    //     "abilities": {
    //         "ability1": {
    //             "base": {
    //                 "name": "Placeholder",
    //                 "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_016_A01_01.png",
    //                 "type": ["Placeholder","Placeholder"],
    //                 "desc": "Placeholder.",
    //                 "customDPS": ""
    //             },
    //         },
    //         "ability2": {
    //             "base": {
    //                 "name": "Placeholder",
    //                 "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_016_A01_02.png",
    //                 "type": ["Placeholder","Placeholder"],
    //                 "stats": {},
    //                 "desc": "Placeholder.",
    //                 "customDPS": "",//haileyBigFuckinGunCalcs
    //             },
    //         },
    //         "ability3": {
    //             "base": {
    //                 "name": "Placeholder",
    //                 "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_016_A01_03.png",
    //                 "type": ["Placeholder","Placeholder"],
    //                 "desc": "Placeholder.",
    //                 "customDPSBase": "",
    //                 "customDPS": ""
    //             },
    //             "augNameHere": {},
    //         },
    //         "ability4": {
    //             "base": {
    //                 "name": "Placeholder",
    //                 "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_016_A01_04.png",
    //                 "type": ["Toxic","Tech"],
    //                 "customDPSBase": "",
    //                 "customDPS": "freynaResistTesting",//haileyZenithCalcs
    //                 "desc": "If you're seeing this then I'm an idiot and forgot to remove it before pushing the update. This was only used to help me test out boss resistances and confirm values, and if you see it, ping me in my discord to remind me to remove it."
    //             },
    //         },
    //         "ability5": {
    //             "base": {
    //                 "name": "Placeholder",
    //                 "image": "/TFD/TFDImages/SkillIcons/Icon_Skill_016_A01_00.png",
    //                 "type": ["Placeholder"],
    //                 "desc": "Placeholder.",
    //                 "customDPSBase": "",
    //                 "customDPS": ""
    //             },
    //         }
    //     }
    // },


    // "Ajax": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_002_U01.png"
    // },
    // "Viessa": {
    //     "image": "/TFD/TFDImages/CharacterIcons/Icon_PC_List_003_U01.png"
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