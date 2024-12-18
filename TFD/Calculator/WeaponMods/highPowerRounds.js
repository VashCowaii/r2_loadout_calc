const highPowerRounds = {
    "": {
        "rarity": "Empty",
        "polarity": "Empty",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "",
        "desc": "Select a mod above.",
        "stats": {},
        "tags": [],
    },

    //GOLDS
    // "Defense Master": {//NA
    //     "rarity": "Ultimate",
    //     "polarity": "Rutile",
    //     "type": "High-Power Rounds",
    //     "cost": 16,
    //     "category": "Special Mod",
    //     "desc": "When defeating an enemy, DEF +120% for 10s (Cooldown 15s)",
    //     "stats": {
    //         "DEF%": 1.2//this is also the regular atk% bucket, not too amazing.
    //     }
    // },
    "Real-Life Fighter": {
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Special Mod",
        "desc": "Accuracy -20%. On dealing Weak Point DMG, Firearm ATK +10% for 5s (up to 10 stacks) But loses 2 stacks per failed Weak Point Attack.",
        "stats": {
            "FirearmATK%": 0.30//this is also the regular atk% bucket, not too amazing.
        },
        "tags": [],
    },
    // "Lethal Finish": {
    //     "rarity": "Ultimate",
    //     "polarity": "Almandine",
    //     "type": "High-Power Rounds",
    //     "cost": 16,
    //     "category": "Special Mod",
    //     "desc": "When firing a firearm, ammo with an additional 45% Ctitical Hit Rate are fired (Cooldown 15s). When defeating an enemy with the additional attack, module cooldown is -12.4s However, the firearm's base Weak Point Damage is Fixed at 100%",
    //     "stats": {}//NA for now
    // },
    // "Unstoppable Smasher (Shotty)": {
    //     "rarity": "Ultimate",
    //     "polarity": "Rutile",
    //     "type": "High-Power Rounds",
    //     "cost": 11,
    //     "category": "Special Mod, ShotGun",
    //     "desc": "When defeating an enemy, Shell Capacity +30% for 5s at a 33% chance."
    // },
    "Strengthen First Shot": {
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Special Mod",
        "desc": "After Reload, first shot's Firearm ATK +200% (Cooldown 10s)",
        "stats": {
            "FirearmATK%": 2//this is actually the regular ATK% bucket, so good but not quite as good as you'd hope it is.
        },
        "tags": [],
    },
    "Special Sight": {
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "Special Mod",
        "desc": "Movement Speed When Aiming -30%, Weak Point Damage When Aiming +30%",
        "stats": {
            "WeakPointDamage%": 0.30
        },
        "tags": [],
    },
    // "Descendant Roll": {
    //     "rarity": "Ultimate",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 10,
    //     "category": "Special Mod",
    //     "desc": "When rolling, auto-reloads the active wepon at a 100% chance (Cooldown 15s)",
    //     "stats": {}//NA for now
    // },
    "Weak Point Expansion": {
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Special Mod",
        "desc": "On Weak Point hit, Weak Point Damage +140% (Cooldown 10s)",
        "stats": {},
        "tags": [],
    },
    "Dopaminergic Activate": {
        "rarity": "Ultimate",
        "polarity": "Almandine",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Special Mod",
        "desc": "On Weak Point hit, Firearm Critical Hit Rate +45.5%, Firearm Critical Hit Damage +59.3% (Cooldown 10s)",
        "stats": {},
        "tags": [],
    },
    // "Auto-Reload (Shotty)": {
    //     "rarity": "Ultimate",
    //     "polarity": "Cerulean",
    //     "type": "High-Power Rounds",
    //     "cost": 10,
    //     "category": "Special Mod, ShotGun",
    //     "desc": "When changing weapons, auto-reloads stored weapon (Cooldown 10s)"
    // },
    "Electric Conductor": {
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "Special Mod",
        "desc": "When attacking enemies inflicted with Electrocution, Firearm ATK +26%",
        "stats": {
            "FireATK%": 0.26,
        },
        "tags": [],
    },
    "Toxic Conductor": {
        "rarity": "Ultimate",
        "polarity": "Rutile",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "Special Mod",
        "desc": "When attacking enemies inflicted with Poison, Firearm ATK +26%",
        "stats": {
            "FireATK%": 0.26,
        },
        "tags": [],
    },
    "Snowflake Conductor": {
        "rarity": "Ultimate",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "Special Mod",
        "desc": "When attacking enemies inflicted with Frostbite, Firearm ATK +26%",
        "stats": {
            "FireATK%": 0.26,
        },
        "tags": [],
    },
    "Fire Conductor": {
        "rarity": "Ultimate",
        "polarity": "Almandine",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "Special Mod",
        "desc": "When attacking enemies inflicted with Burn, Firearm ATK +26%",
        "stats": {
            "FireATK%": 0.26,
        },
        "tags": [],
    },
    // "Quick Freezer": {
    //     "rarity": "Ultimate",
    //     "polarity": "Cerulean",
    //     "type": "High-Power Rounds",
    //     "cost": 10,
    //     "category": "Special Mod",
    //     "desc": "When defeating an enemy inflicted wtih Frostbite, inflicts Frostbite on other enemies within 8m of the target for 0.8s (Cooldown 20s)",
    //     "stats": {}
    // },
    // "Venom Injector": {
    //     "rarity": "Ultimate",
    //     "polarity": "Rutile",
    //     "type": "High-Power Rounds",
    //     "cost": 10,
    //     "category": "Special Mod",
    //     "desc": "When defeating an enemy inflicted with Poison, inflicts Poison on other enemies within 8m of the target for 5s (Cooldown 20s)",
    //     "stats": {}
    // },
    // "Remote Generator": {
    //     "rarity": "Ultimate",
    //     "polarity": "Xantic",
    //     "type": "High-Power Rounds",
    //     "cost": 10,
    //     "category": "Special Mod",
    //     "desc": "When defeating an enemy inficted with Electrocution, inflicts Electrocution on other enemies within 8m of the target for 3s (Cooldown 20s)",
    //     "stats": {}
    // },
    // "Heat Incinerator": {
    //     "rarity": "Ultimate",
    //     "polarity": "Almandine",
    //     "type": "High-Power Rounds",
    //     "cost": 10,
    //     "category": "Special Mod",
    //     "desc": "When defeating an enemy inflicted with Burn, inflicts Burn on other enemies within 8m of the target for 5s (Cooldown 20s)",
    //     "stats": {}
    // },

    //PURPLES
    "Toxic Gunbarrel": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Attribute ATK",
        "desc": "Toxic ATK +90%, Fire Rate -25%",
        "stats": {
            "ToxicATK%Bonus": 0.90,
            "FireRate": 0.25
        },
        "tags": [],
    },
    "Electric Gunbarrel": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Attribute ATK",
        "desc": "Electric ATK +90%, Fire Rate -25%",
        "stats": {
            "ElectricATK%Bonus": 0.90,
            "FireRate": 0.25
        },
        "tags": [],
    },
    "Refrigerate Gunbarrel": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Attribute ATK",
        "desc": "Chill ATK +90%, Fire Rate -25%",
        "stats": {
            "ChillATK%Bonus": 0.90,
            "FireRate": 0.25
        },
        "tags": [],
    },
    "Superheated Gunbarrel": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Attribute ATK",
        "desc": "Fire ATK +90%. Fire Rate -25%",
        "stats": {
            "FireATK%Bonus": 0.90,
            "FireRate": 0.25
        },
        "tags": [],
    },
    "Poison Priority": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Attribute ATK",
        "desc": "Toxic ATK +50%, Reload Time Modifier -30%",
        "stats": {
            "ToxicATK%Bonus": 0.50,
            "Reload": -0.30
        },
        "tags": [],
    },
    "Electric Priority": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Attribute ATK",
        "desc": "Electric ATK +50%, Reload Time Modifier -30%",
        "stats": {
            "ElectricATK%Bonus": 0.50,
            "Reload": -0.30
        },
        "tags": [],
    },
    "Chill Priority": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Attribute ATK",
        "desc": "Chill ATK +50%, Reload Time Modifier -30%",
        "stats": {
            "ChillATK%Bonus": 0.50,
            "Reload": -0.30
        },
        "tags": [],
    },
    "Fire Priority": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Attribute ATK",
        "desc": "Fire ATK +50%, Reload Time Modifier -30%",
        "stats": {
            "FireATK%Bonus": 0.50,
            "Reload": -0.30
        },
        "tags": [],
    },
    // "Hit Rate Insight (Shotty)": {
    //     "rarity": "Rare",
    //     "polarity": "Rutile",
    //     "type": "High-Power Rounds",
    //     "cost": 13,
    //     "category": "Accuracy, ShotGun",
    //     "desc": "Accuracy +30%, Firearm Critical Hit Rate +3%"
    // },
    // "Hit Rate Focus (Shotty)": {
    //     "rarity": "Rare",
    //     "polarity": "Rutile",
    //     "type": "High-Power Rounds",
    //     "cost": 13,
    //     "category": "Accuracy, ShotGun",
    //     "desc": "Accuracy +30%, Firearm Critical Hit Damage +3%"
    // },
    // "Weak Point Aiming (Shotty)": {
    //     "rarity": "Rare",
    //     "polarity": "Rutile",
    //     "type": "High-Power Rounds",
    //     "cost": 13,
    //     "category": "Accuracy, ShotGun",
    //     "desc": "Accuracy +30%, Weak Point Damage +2%"
    // },
    // "Deadeye (Shotty)": {
    //     "rarity": "Rare",
    //     "polarity": "Rutile",
    //     "type": "High-Power Rounds",
    //     "cost": 13,
    //     "category": "Accuracy, ShotGun",
    //     "desc": "Accuracy +30%, Firearm ATK +1%"
    // },
    "Reload insight": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 12,
        "category": "Reload Time Modifier",
        "desc": "Reload Time Modifier +25%, Firearm Critical Hit Rate +1%",
        "stats": {
            "Reload": 0.25,
            "FirearmCritDamage": 0.01
        },
        "tags": [],
    },
    "Reload Focus": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 12,
        "category": "Reload Time Modifier",
        "desc": "Reload Time Modifier +25%, Firearm Critical Hit Damage +3.5%",
        "stats": {
            "Reload": 0.25,
            "FirearmCritDamage": 0.035
        },
        "tags": [],
    },
    "Consume Magazines": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 12,
        "category": "Reload Time Modifier",
        "desc": "Reload Time Modifier +25%, Weak Point Damage +2%",
        "stats": {
            "Reload": 0.25,
            "WeakPointDamage%": 0.02
        },
        "tags": [],
    },
    "Reload Expert": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 12,
        "category": "Reload Time Modifier",
        "desc": "Reload Time Modifier +25%, Firearm ATK +1%",
        "stats": {
            "Reload": 0.25,
            "FirearmATK%": 0.01
        },
        "tags": [],
    },
    "Insight Stabilizer": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "High-Power Rounds",
        "cost": 13,
        "category": "Recoil",
        "desc": "Recoil -30%, Firearm Critical Hit Rate +1%",
        "stats": {
            "Recoil": -0.30,
            "FirearmCritRate": 0.01
        },
        "tags": [],
    },
    "Concentration Stabilizer": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "High-Power Rounds",
        "cost": 13,
        "category": "Recoil",
        "desc": "Recoil -30%, Firearm Critical Hit Damage +3.5%",
        "stats": {
            "Recoil": -0.30,
            "FirearmCritDamage": 0.035
        },
        "tags": [],
    },
    "Fixed Shot": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "High-Power Rounds",
        "cost": 13,
        "category": "Recoil",
        "desc": "Recoil -30%, Weak Point Damage +2%",
        "stats": {
            "Recoil": -0.30,
            "WeakPointDamage%": 0.02
        },
        "tags": [],
    },
    "Stance Stabilizer": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "High-Power Rounds",
        "cost": 13,
        "category": "Recoil",
        "desc": "Recoil -30%, Firearm ATK +1%",
        "stats": {
            "Recoil": -0.30,
            "FirearmATK%": 0.01
        },
        "tags": [],
    },
    "Rapid Fire Insight": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "High-Power Rounds",
        "cost": 12,
        "category": "Fire Rate",
        "desc": "Fire Rate +20%, Firearm Critical Hit Rate +1%",
        "stats": {
            "FireRate": -0.20,
            "FirearmCritRate": 0.01
        },
        "tags": [],
    },
    "Fire Rate Concentration": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "High-Power Rounds",
        "cost": 12,
        "category": "Fire Rate",
        "desc": "Fire Rate +20%, Firearm Critical Hit Damage +3.5%",
        "stats": {
            "FireRate": -0.20,
            "FirearmCritDamage": 0.035
        },
        "tags": [],
    },
    "Weak Point Quick Fire": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "High-Power Rounds",
        "cost": 12,
        "category": "Fire Rate",
        "desc": "Fire Rate +20%, Weak Point Damage +2%",
        "stats": {
            "FireRate": -0.20,
            "WeakPointDamage%": 0.02
        },
        "tags": [],
    },
    "Bullet Rain": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "High-Power Rounds",
        "cost": 12,
        "category": "Fire Rate",
        "desc": "Fire Rate +20%, Firearm ATK +1%",
        "stats": {
            "FireRate": -0.20,
            "FirearmATK%": 0.01
        },
        "tags": [],
    },
    "Compulsive Magazine": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "Rounds per Magazine",
        "desc": "Rounds per Magazine +39%, Weak Point Damage -10%",
        "stats": {
            "MagazineSize": 0.39,
            "WeakPointDamage%": -0.10
        },
        "tags": [],
    },
    "Insight Support Ammo": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 14,
        "category": "Rounds per Magazine",
        "desc": "Rounds per Magazine +30%, Firearm Critical Hit Rate +1%",
        "stats": {
            "MagazineSize": 0.30,
            "FirearmCritRate": 0.01
        },
        "tags": [],
    },
    "Concentrate Support Ammo": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 14,
        "category": "Rounds per Magazine",
        "desc": "Rounds Per Magazine +30%, Firearm Critical Hit Damage +3.5%",
        "stats": {
            "MagazineSize": 0.30,
            "FirearmCritDamage": 0.035
        },
        "tags": [],
    },
    "Maximize Weight Balance": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 14,
        "category": "Rounds per Magazine",
        "desc": "Rounds Per Magazine +30%, Weak Point Damage +2%",
        "stats": {
            "MagazineSize": 0.30,
            "WeakPointDamage%": 0.02
        },
        "tags": [],
    },
    "Weapon Tuning": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 14,
        "category": "Rounds per Magazine",
        "desc": "Rounds Per Magazine +30%, Firearm ATK +1%",
        "stats": {
            "MagazineSize": 0.30,
            "FirearmATK%": 0.01
        },
        "tags": [],
    },
    "Edging Shot": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Firearm Critical Hit Rate",
        "desc": "Firearm Critical Hit Rate +36%, Firearm ATK -15%",
        "stats": {
            "FirearmCritRate": 0.36,
            "FirearmATK%": -0.15
        },
        "tags": [],
    },
    "Insight Focus": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "High-Power Rounds",
        "cost": 11,
        "category": "Firearm Critical Hit Rate",
        "desc": "Firearm Critical Hit Rate +13%, Firearm Critical Hit Damage 3.5%",
        "stats": {
            "FirearmCritRate": 0.13,
            "FirearmCritDamage": 0.035
        },
        "tags": [],
    },
    "Adventurer": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "High-Power Rounds",
        "cost": 11,
        "category": "Firearm Critical Hit Rate",
        "desc": "Firearm Critical Hit Rate +13%, Weak Point Damage +2%",
        "stats": {
            "FirearmCritRate": 0.13,
            "WeakPointDamage%": 0.02
        },
        "tags": [],
    },
    "Marksman": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "High-Power Rounds",
        "cost": 11,
        "category": "Firearm Critical Hit Rate",
        "desc": "Firearm Critical Hit Rate +13%, Firearm ATK +1%",
        "stats": {
            "FirearmCritRate": 0.13,
            "FirearmATK%": 0.01
        },
        "tags": [],
    },
    "Concentration Priority": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Firearm Critical Hit Damage",
        "desc": "Firearm Critical Hit Damage +33.9%, Reload Time Modifier -30%",
        "stats": {
            "FirearmCritDamage": 0.339,
            "Reload": -0.30
        },
        "tags": [],
    },
    "Target Detection": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "High-Power Rounds",
        "cost": 11,
        "category": "Firearm Critical Hit Damage",
        "desc": "Firearm Critical Hit Damage +17%, Weak Point Damage +2%",
        "stats": {
            "FirearmCritDamage": 0.17,
            "WeakPointDamage%": 0.02
        },
        "tags": [],
    },
    "Commando Marksmanship": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "High-Power Rounds",
        "cost": 11,
        "category": "Firearm Critical Hit Damage",
        "desc": "Firearm Critical Hit Damage +17%, Firearm ATK +1%",
        "stats": {
            "FirearmCritDamage": 0.17,
            "FirearmATK%": 0.01
        },
        "tags": [],
    },
    "Fatal Critical": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "High-Power Rounds",
        "cost": 11,
        "category": "Firearm Critical Hit Damage",
        "desc": "Firearm Critical Hit Damage +17%, Firearm Critical Hit Rate +1%",
        "stats": {
            "FirearmCritDamage": 0.17,
            "FirearmCritRate": 0.01
        },
        "tags": [],
    }, 
    // "Targeted Vulnerability (Shotty)": {
    //     "rarity": "Rare",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 16,
    //     "category": "Firearm Critical Hit Damage, Shotgun",
    //     "desc": "Weak Point Damge +40%, Accuracy -20%"
    // }, 
    "Weak Point Detection": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 11,
        "category": "Weak Point Strike",
        "desc": "Weak Point Damage +20%, Firearm ATK +1%",
        "stats": {
            "WeakPointDamage%": 0.20,
            "FirearmATK%": 0.01
        },
        "tags": [],
    },
    "Focus Fire": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 11,
        "category": "Weak Point Strike",
        "desc": "Weak Point Damage +20%, Firearm Critical Hit Damage +3.5%",
        "stats": {
            "WeakPointDamage%": 0.20,
            "FirearmCritDamage": 0.035
        },
        "tags": [],
    },
    "Weak Point Insight": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 11,
        "category": "Weak Point Strike",
        "desc": "Weak Point Damage +20%, Firearm Critical Hit Rate +1%",
        "stats": {
            "WeakPointDamage%": 0.20,
            "FirearmCritRate": 0.01
        },
        "tags": [],
    },
    // "Action and Reaction (Launcher)": {
    //     "rarity": "Rare",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 16,
    //     "category": "ATK, Launcher",
    //     "desc": "Explosive ATK +61%, Recoil 20%"
    // },
    // "Slow Art (Launcher)": {
    //     "rarity": "Rare",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 16,
    //     "category": "ATK, Launcher",
    //     "desc": "Explosive ATK +44%, Fire Rate -25%"
    // },
    // "Anti-Matter Round (Launcher)": {
    //     "rarity": "Rare",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 15,
    //     "category": "ATK, Launcher",
    //     "desc": "Explosive ATK +26%, Firearm Critical Hit Damage +3.5%"
    // },
    // "Pinpoint Shot (Launcher)": {
    //     "rarity": "Rare",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 15,
    //     "category": "ATK, Launcher",
    //     "desc": "Explosive ATK +26%, Weak Point Damage +2%"
    // },
    // "Sharp Shooter (Launcher)": {
    //     "rarity": "Rare",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 15,
    //     "category": "ATK, Launcher",
    //     "desc": "Explosive ATK +26%, Firearm Critical Hit Rate +1%"
    // },
    // "Action and Reaction (Shotty)": {
    //     "rarity": "Rare",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 16,
    //     "category": "ATK, Shotgun",
    //     "desc": "Firearm ATK +61%, Recoil +20%"
    // },
    // "Slow Art (Shotty)": {
    //     "rarity": "Rare",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 16,
    //     "category": "ATK, Shotgun",
    //     "desc": "Firearm ATK +48%, Fire Rate -25%"
    // },
    // "Anti-matter Round (Shotty)": {
    //     "rarity": "Rare",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 15,
    //     "category": "ATK, Shotgun",
    //     "desc": "Firearm ATK +26%, Firearm Critical Hit Damage +13%"
    // },
    // "Pinpoint Shot (Shotty)": {
    //     "rarity": "Rare",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 15,
    //     "category": "ATK, Shotgun",
    //     "desc": "Firearm ATK +26%, Weak Point Damage +2%"
    // },
    // "Sharpshooter (Shotty)": {
    //     "rarity": "Rare",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 15,
    //     "category": "ATK, Shotgun",
    //     "desc": "Firearm ATK +26%, Firearm Critical Hit Rate +3%"
    // },
    "Action and Reaction (Sniper)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "ATK, Sniper",
        "desc": "Firearm ATK +61%, Recoil +20%",
        "stats": {
            "FirearmATK%": 0.61,
            "Recoil": 0.20
        },
        "tags": [],
    },
    "Slow Art (Sniper)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "ATK, Sniper",
        "desc": "Firearm ATK 44%, Fire Rate -25%",
        "stats": {
            "FirearmATK%": 0.44,
            "FireRate": 0.25
        },
        "tags": [],
    },
    "Anti-matter Round (Sniper)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "ATK, Sniper",
        "desc": "Firearm ATK +26%, Firearm Critical Hit Damage +3.5%",
        "stats": {
            "FirearmATK%": 0.26,
            "FirearmCritDamage": 0.035
        },
        "tags": [],
    },
    "Pinpoint Shot (Sniper)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "ATK, Sniper",
        "desc": "Firearm ATK +26%, Weak Point Damage +2%",
        "stats": {
            "FirearmATK%": 0.26,
            "WeakPointDamage%": 0.01
        },
        "tags": [],
    },
    "Sharpshooter (Sniper)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "ATK, Sniper",
        "desc": "Firearm ATK +26%, Firearm Critical Hit Rate +1%",
        "stats": {
            "FirearmATK%": 0.26,
            "FirearmCritRate": 0.01
        },
        "tags": [],
    },
    // "High-Power Rounds Compulsive": {
    //     "rarity": "Rare",
    //     "polarity": "Xantic",
    //     "type": "High-Power Rounds",
    //     "cost": 14,
    //     "category": "",
    //     "desc": "Max High-Power Rounds +60%, Movement Speed -20%",
    //     "stats": {}
    // },


    //BLUES
    // "Impact Round Charge Improvement": {
    //     "rarity": "Normal",
    //     "polarity": "Xantic",
    //     "type": "High-Power Rounds",
    //     "cost": 6,
    //     "category": "Rounds Conversion",
    //     "desc": "When acquiring dropped Impact Rounds, change to 1 High-Power Round for every 25 Rounds.",
    //     "stats": {}
    // },
    // "Special Round Charge Improvement": {
    //     "rarity": "Normal",
    //     "polarity": "Xantic",
    //     "type": "High-Power Rounds",
    //     "cost": 6,
    //     "category": "Rounds Conversion",
    //     "desc": "When acquiring dropped Special Rounds, change to 1 High-Power Round for every 120 Rounds.",
    //     "stats": {}
    // },
    // "General Round Charge Improvement": {
    //     "rarity": "Normal",
    //     "polarity": "Xantic",
    //     "type": "High-Power Rounds",
    //     "cost": 6,
    //     "category": "Rounds Conversion",
    //     "desc": "When acquiring dropped General Rounds, change to 1 High-Power Round for every 200 Rounds.",
    //     "stats": {}
    // },
    "Weak Point Sight": {
        "rarity": "Normal",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "",
        "desc": "Weak Point Damage +35%",
        "stats": {
            "WeakPointDamage%": 0.35
        },
        "tags": [],
    },
    // "Colon Special Forces": {
    //     "rarity": "Normal",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 11,
    //     "category": "",
    //     "desc": "+20% Movement Speed When Aiming",
    //     "stats": {}//NA for now
    // },
    "Better Concentration": {
        "rarity": "Normal",
        "polarity": "Almandine",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "",
        "desc": "Firearm Critical Hit Damage +37.2%",
        "stats": {
            "FirearmCritDamage": 0.372
        },
        "tags": [],
    },
    "Expand Weapon Charge": {
        "rarity": "Normal",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "",
        "desc": "Rounds per Magazine +49%",
        "stats": {
            "MagazineSize": 0.49,
        },
        "tags": [],
    },
    // "Shell UP (Shotty)": {
    //     "rarity": "Normal",
    //     "polarity": "Rutile",
    //     "type": "High-Power Rounds",
    //     "cost": 6,
    //     "category": "Shotgun",
    //     "desc": "Shell Capacity +33%"
    // },
    // "Recycling Genius": {
    //     "rarity": "Normal",
    //     "polarity": "Cerulean",
    //     "type": "High-Power Rounds",
    //     "cost": 14,
    //     "category": "",
    //     "desc": "Reload Time Modifier +30%",
    //     "stats": {
    //         "ReloadSpeed": 0.30
    //     }
    // },
    // "Better Weapon Weight": {
    //     "rarity": "Normal",
    //     "polarity": "Almandine",
    //     "type": "High-Power Rounds",
    //     "cost": 11,
    //     "category": "",
    //     "desc": "Weapon Change Speed +25%",
    //     "stats": {}//NA for now
    // },
    "Chill Enhancement": {
        "rarity": "Normal",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Bullet Improvement",
        "desc": "Adds Chill ATK equal to 30% of Firearm ATK",
        "stats": {
            "ChillATK%": 0.30
        },
        "tags": [],
    },
    // "Hawk-Eye": {
    //     "rarity": "Normal",
    //     "polarity": "Rutile",
    //     "type": "High-Power Rounds",
    //     "cost": 14,
    //     "category": "",
    //     "desc": "Accuracy +45%",
    //     "stats": {
    //         "Accuracy": 0.45
    //     }
    // },
    "Better Insight": {
        "rarity": "Normal",
        "polarity": "Almandine",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "",
        "desc": "Firearm Critical Hit Rate +33%",
        "stats": {
            "FirearmCritRate": 0.33
        },
        "tags": [],
    },
    // "Expand High-Power Magazine": {
    //     "rarity": "Normal",
    //     "polarity": "Xantic",
    //     "type": "High-Power Rounds",
    //     "cost": 14,
    //     "category": "",
    //     "desc": "Max High-Power Rounds +50%",
    //     "stats": {}//NA for now
    // },
    "Electric Enhancement": {
        "rarity": "Normal",
        "polarity": "Xantic",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Bullet Improvement",
        "desc": "Adds Electric ATK equal to 30% of Firearm ATK",
        "stats": {
            "ElectricATK%": 0.30
        },
        "tags": [],
    },
    "Toxic Enhancement": {
        "rarity": "Normal",
        "polarity": "Rutile",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Bullet Improvement",
        "desc": "Adds Toxic ATK equal to 30% of Firearm ATK",
        "stats": {
            "ToxicATK%": 0.30
        },
        "tags": [],
    },
    "Fire Enhancement": {
        "rarity": "Normal",
        "polarity": "Almandine",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Bullet Improvement",
        "desc": "Adds Fire ATK equal to 30% of Firearm ATK",
        "stats": {
            "FireATK%": 0.30
        },
        "tags": [],
    },
    // "Vibration Absorption": {
    //     "rarity": "Normal",
    //     "polarity": "Rutile",
    //     "type": "High-Power Rounds",
    //     "cost": 14,
    //     "category": "",
    //     "desc": "Recoil -45%",
    //     "stats": {
    //         "Recoil": -0.45
    //     }
    // },
    // "Fire Rate UP": {
    //     "rarity": "Normal",
    //     "polarity": "Xantic",
    //     "type": "High-Power Rounds",
    //     "cost": 12,
    //     "category": "Fire Rate",
    //     "desc": "Fire Rate +25%",
    //     "stats": {
    //         "FireRate": -0.25
    //     }
    // },
    // "Rifling Reinforcement (Launcher)": {
    //     "rarity": "Normal",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 16,
    //     "category": "Launcher",
    //     "desc": "Explosive ATK +32%"
    // },
    // "Rifling Reinforcement (Shotty)": {
    //     "rarity": "Normal",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 16,
    //     "category": "Shotgun",
    //     "desc": "Firearm ATK +32%"
    // },
    "Rifling Reinforcement (Sniper)": {
        "rarity": "Normal",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Sniper",
        "desc": "Firearm ATK +32%",
        "stats": {
            "FirearmATK%": 0.32
        },
        "tags": [],
    },


































    "Charge Amplification (Sniper)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 0,
        "category": "Firearm Critical Hit Damage",
        "desc": "Firearm ATK +67%, Firearm Critical Hit Damage -20%",
        "stats": {
            "FirearmATK%": 0.67,
            "FirearmCritDamage": -0.20
        },
        "tags": [],
    },
    // "Charge Amplification (Shotgun)": {
    //     "rarity": "Rare",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 0,
    //     "category": "Firearm Critical Hit Damage",
    //     "desc": "Firearm ATK +40%, Firearm Critical Hit Damage -30%",
    //     "stats": {
    //         "FirearmATK%": 0.40,
    //         "FirearmCritDamage": -0.30
    //     }
    // },
    // "Charge Amplification (Launcher)": {
    //     "rarity": "Rare",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 0,
    //     "category": "Firearm Critical Hit Damage",
    //     "desc": "Firearm ATK +40%, Firearm Critical Hit Damage -30%",
    //     "stats": {
    //         "FirearmATK%": 0.40,
    //         "FirearmCritDamage": -0.30
    //     }
    // },
    "Bullet Integration (Sniper)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 0,
        "category": "Firearm Critical Hit Damage",
        "desc": "Firearm ATK +16%, Firearm Critical Hit Damage +20%",
        "stats": {
            "FirearmATK%": 0.16,
            "FirearmCritDamage": 0.20
        },
        "tags": [],
    },
    // "Bullet Integration (Shotgun)": {
    //     "rarity": "Rare",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 0,
    //     "category": "Firearm Critical Hit Damage",
    //     "desc": "Firearm ATK +10%, Firearm Critical Hit Damage +10%",
    //     "stats": {
    //         "FirearmATK%": 0.10,
    //         "FirearmCritDamage": 0.10
    //     }
    // },
    // "Bullet Integration (Launcher)": {
    //     "rarity": "Rare",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 0,
    //     "category": "Firearm Critical Hit Damage",
    //     "desc": "Firearm Explosive ATK +13%, Firearm Critical Hit Damage +10%",
    //     "stats": {
    //         "FirearmATK%": 0.13,
    //         "FirearmCritDamage": 0.10
    //     }
    // },
}