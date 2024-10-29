const specialRounds =  {
    "": {
        "rarity": "Empty",
        "polarity": "Empty",
        "type": "Special Rounds",
        "cost": 16,
        "category": "",
        "desc": "Select a mod above.",
        "stats": {}
    },

    //GOLD
    // "Frigid Burn": {//done
    //     "rarity": "Ultimate",
    //     "polarity": "Cerulean",
    //     "type": "Special Rounds",
    //     "cost": 15,
    //     "category": "Special Mod",
    //     "stats": {},
    //     "desc": "Hitting an enemy 3 times in a row with a firearm attack from a distance of 25m or more deals 78% Chill ATK as additional damage."
    // },
    "Sharp Precision Shot": {//done
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Special Rounds",
        "cost": 16,
        "category": "Special Mod",
        "stats": {
            "FireRate": 0.20,
            // "FireRate": -0.40, //this will be added in with functions, not via a flat value
            "Recoil": -0.50,
            "FirearmATK%": 0.60
        },
        "desc": "Base Fire Rate -20%. While pulling the trigger, Fire Rate +4%, Recoil -5%, and Firearm ATK +6% every 0.5s (up to 10 stacks)."
    },
    // "Lethal Finish": {//
    //     "rarity": "Ultimate",
    //     "polarity": "Almandine",
    //     "type": "Special Rounds",
    //     "cost": 16,
    //     "category": "Special Mod",
    //     "stats": {},
    //     "desc": "When firing a firearm, ammo with an additional 60% Critical Hit Rate is fired (Cooldown 15s). When defeating an enemy with the enhanced bullet, module cooldown -12.4s. However, the firearm's base Weak Point Damage is fixed at 100%."
    // },
    "Mental Focus": {//
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "Special Rounds",
        "cost": 16,
        "category": "Special Mod",
        "stats": {
            "FireRate": 0.10,
            "FirearmATK%": 0.90
        },
        "desc": "Base Fire Rate -10%. When firing a firearm, Firearm ATK +1.5% for 2s (up to 60 stacks). Removes effect when reloading or changing firearm.<br>Max stacks assumed when selected."
    },
    "Real-Life Fighter": {//
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "Special Rounds",
        "cost": 16,
        "category": "Special Mod",
        "stats": {
            "Accuracy": -0.20,
            "FirearmATK%": 1
        },
        "desc": "Accuracy -20%. On dealing Weak Point DMG, Firearm ATK +10% for 5s (up to 10 stacks). But loses 2 stacks per failed Weak Point Attack.<br>Max stacks assumed when selected."
    },
    "Analysis Master": {//
        "rarity": "Ultimate",
        "polarity": "Rutile",
        "type": "Special Rounds",
        "cost": 1,
        "category": "Special Mod",
        "stats": {
            "enemyCritResistReductionFirearm": -0.25
        },
        "desc": "On hit, enemy's Firearm Critical Hit Resistance -25% for 10s. (Cooldown 10s)."
    },
    "Spray and Pray": {//
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Special Rounds",
        "cost": 15,
        "category": "Special Mod",
        "stats": {
            "haileyExtraShots": 3,
        },
        "desc": "When landing a Firearm Critical Hit, rounds are not consumed for 3s (Cooldown 25s)."
    },
    // "Brisk Walk": {//
    //     "rarity": "Ultimate",
    //     "polarity": "Malachite",
    //     "type": "Special Rounds",
    //     "cost": 16,
    //     "category": "Special Mod",
    //     "stats": {},
    //     "desc": "On hit, Movement Speed +10% for 5s (Cooldown 15s)."
    // },
    "Sweeping Squad": {//
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "Special Rounds",
        "cost": 16,
        "category": "Special Mod",
        "stats": {
            "FirearmATK%": 0.318
        },
        "desc": "When defeating an enemy, Firearm ATK +10.6% for 5s at a 100% chance (up to 3 stacks).<br>Max stacks assumed when selected."
    },
    // "Hardline Suppression": {//
    //     "rarity": "Ultimate",
    //     "polarity": "Rutile",
    //     "type": "Special Rounds",
    //     "cost": 6,
    //     "category": "Special Mod",
    //     "stats": {},
    //     "desc": "On Weak Point hit, 5% chance to Knockdown target."
    // },
    "Snowflake Conductor": {//
        "rarity": "Ultimate",
        "polarity": "Cerulean",
        "type": "Special Rounds",
        "cost": 15,
        "category": "Special Mod",
        "stats": {
            "FirearmATK%": 0.26
        },
        "desc": "When attacking enemies inflicted with Frostbite, Firearm ATK +26%"
    },
    "Fire Conductor": {//
        "rarity": "Ultimate",
        "polarity": "Almandine",
        "type": "Special Rounds",
        "cost": 15,
        "category": "Special Mod",
        "stats": {
            "FirearmATK%": 0.26
        },
        "desc": "When attacking enemies inflicted with Burn, Firearm ATK +26%"
    },
    "Electric Conductor": {//
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Special Rounds",
        "cost": 15,
        "category": "Special Mod",
        "stats": {
            "FirearmATK%": 0.26
        },
        "desc": "When attacking enemies inflicted with Electrocution, Firearm ATK +26%"
    },
    "Toxic Conductor": {//
        "rarity": "Ultimate",
        "polarity": "Rutile",
        "type": "Special Rounds",
        "cost": 15,
        "category": "Special Mod",
        "stats": {
            "FirearmATK%": 0.26
        },
        "desc": "When attacking enemies inflicted with Poison, Firearm ATK +26%"
    },
    // "Quick Freezer": {//
    //     "rarity": "Ultimate",
    //     "polarity": "Cerulean",
    //     "type": "Special Rounds",
    //     "cost": 10,
    //     "category": "Special Mod",
    //     "stats": {},
    //     "desc": "When defeating an enemy inflicted with Frostbite, inflicts Frostbite on other enemies within 8m of the target for .8s (Cooldown 20s)."
    // },
    // "Venom Injector": {//
    //     "rarity": "Ultimate",
    //     "polarity": "Rutile",
    //     "type": "Special Rounds",
    //     "cost": 10,
    //     "category": "Special Mod",
    //     "stats": {},
    //     "desc": "When defeating an enemy inflicted with Poison, inflicts Poison on other enemies within 8m of the target for 5s (Cooldown 20s)."
    // },
    // "Remote Generator": {//
    //     "rarity": "Ultimate",
    //     "polarity": "Xantic",
    //     "type": "Special Rounds",
    //     "cost": 10,
    //     "category": "Special Mod",
    //     "stats": {},
    //     "desc": "When defeating an enemy inflicted with Electrocution, inflicts Electrocution on other enemies within 8m of the target for 3s (Cooldown 20s)."
    // },
    // "Heat Incinerator": {//
    //     "rarity": "Ultimate",
    //     "polarity": "Almandine",
    //     "type": "Special Rounds",
    //     "cost": 10,
    //     "category": "Special Mod",
    //     "stats": {},
    //     "desc": "When defeating an enemy inflicted with Burn, inflicts Burn on other enemies within 8m of the target for 5s (Cooldown 20s)."
    // },




    //PURPLES
    "Toxic Gunbarrel": {//
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Special Rounds",
        "cost": 16,
        "category": "Attribute ATK",
        "stats": {
            "ToxicATK%Bonus": 0.80,
            "FireRate": 0.25
        },
        "desc": "Toxic ATK +80%, Fire Rate -25%"
    },
    "Electric Gunbarrel": {//
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Special Rounds",
        "cost": 16,
        "category": "Attribute ATK",
        "stats": {
            "ElectricATK%Bonus": 0.80,
            "FireRate": 0.25
        },
        "desc": "Electric ATK +80, Fire Rate -25%"
    },
    "Refrigerate Gunbarrel": {//
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Special Rounds",
        "cost": 16,
        "category": "Attribute ATK",
        "stats": {
            "ChillATK%Bonus": 0.80,
            "FireRate": 0.25
        },
        "desc": "Chill ATK +80%, Fire Rate -25%"
    },
    "Superheated Gunbarrel": {//
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Special Rounds",
        "cost": 16,
        "category": "Attribute ATK",
        "stats": {
            "FireATK%Bonus": 0.80,
            "FireRate": 0.25
        },
        "desc": "Fire ATK +80%, Fire Rate -25%"
    },
    "Hit Rate Insight": {//
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Special Rounds",
        "cost": 13,
        "category": "Accuracy",
        "stats": {
            "Accuracy": 0.30,
            "FirearmCritRate": 0.015
        },
        "desc": "Accuracy +30%, Firearm Critical Hit rate +1.5%"
    },
    "Aiming Compensation": {//
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Special Rounds",
        "cost": 13,
        "category": "Accuracy",
        "stats": {
            "Accuracy": 0.30,
            "FirearmCritDamage": 0.05
        },
        "desc": "Accuracy +30%, Firearm Critical Hit Damage +5%"
    },
    "Weak Point Aiming": {//
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Special Rounds",
        "cost": 13,
        "category": "Accuracy",
        "stats": {
            "Accuracy": 0.30,
            "WeakPointDamage%": 0.02
        },
        "desc": "Accuracy +30%, Weak Point Damage +2%"
    },
    "Deadeye": {//
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Special Rounds",
        "cost": 13,
        "category": "Accuracy",
        "stats": {
            "Accuracy": 0.30,
            "FirearmATK%": 0.01
        },
        "desc": "Accuracy +30%, Firearm ATK +1%"
    },
    "Reload Insight": {//
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Special Rounds",
        "cost": 12,
        "category": "Reload Time Modifier",
        "stats": {
            "ReloadSpeed": 0.25,
            "FirearmCritRate": 0.015
        },
        "desc": "Reload Time Modifier +25%, Firearm Critical Hit Rate +1.5%"
    },
    "Reload Focus": {//
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Special Rounds",
        "cost": 12,
        "category": "Reload Time Modifier",
        "stats": {
            "ReloadSpeed": 0.25,
            "FirearmCritDamage": 0.05
        },
        "desc": "Reload Time Modifier +25%, Firearm Critical Hit Damage 5%"
    },
    "Consume Magazines": {//
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Special Rounds",
        "cost": 12,
        "category": "Reload Time Modifier",
        "stats": {
            "ReloadSpeed": 0.25,
            "WeakPointDamage%": 0.02
        },
        "desc": "Reload Time Modifier +25%, Weak Point Damage +2%"
    },
    "Reload Expert": {//
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Special Rounds",
        "cost": 12,
        "category": "Reload Time Modifier",
        "stats": {
            "ReloadSpeed": 0.25,
            "FirearmATK%": 0.01
        },
        "desc": "Reload Time Modifier +25%, Firearm ATK +1%"
    },
    "Insight Stabilizer": {//
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Special Rounds",
        "cost": 13,
        "category": "Recoil",
        "stats": {
            "Recoil": -0.30,
            "FirearmCritRate": 0.015
        },
        "desc": "Recoil -30% Firearm Critical Hit Rate +1.5%"
    },
    "Concentration Stabilizer": {//
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Special Rounds",
        "cost": 13,
        "category": "Recoil",
        "stats": {
            "Recoil": -0.30,
            "FirearmCritDamage": 0.05
        },
        "desc": "Recoil -30%, Firearm Critical Hit Damage +5%"
    },
    "Fixed Shot": {//
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Special Rounds",
        "cost": 13,
        "category": "Recoil",
        "stats": {
            "Recoil": -0.30,
            "WeakPointDamage%": 0.02
        },
        "desc": "Recoil -30%, Weak Point Damage +2%"
    },
    "Stance Stabilizer": {//
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Special Rounds",
        "cost": 13,
        "category": "Recoil",
        "stats": {
            "Recoil": -0.30,
            "FirearmATK%": 0.01
        },
        "desc": "Recoil -30%, Firearm ATK +1%"
    },
    "Rapid Fire Insight": {//
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Special Rounds",
        "cost": 12,
        "category": "Fire Rate",
        "stats": {
            "FireRate": -0.20,
            "FirearmCritRate": 0.015
        },
        "desc": "Fire Rate +20% Firearm Critical Hit Rate +1.5%"
    },
    "Fire Rate Concentration": {//
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Special Rounds",
        "cost": 12,
        "category": "Fire Rate",
        "stats": {
            "FireRate": -0.20,
            "FirearmCritDamage": 0.05
        },
        "desc": "Fire Rate +20%, Firearm Critical Hit Damage +5%"
    },
    "Weak Point Quick Fire": {//
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Special Rounds",
        "cost": 12,
        "category": "Fire Rate",
        "stats": {
            "FireRate": -0.20,
            "WeakPointDamage%": 0.02
        },
        "desc": "Fire Rate +20%, Weak Point Damage +2%"
    },
    "Bullet Rain": {//
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Special Rounds",
        "cost": 12,
        "category": "Fire Rate",
        "stats": {
            "FireRate": -0.20,
            "FirearmATK%": 0.01
        },
        "desc": "Fire Rate +20%, Firearm ATK +1%"
    },
    "Insight Support Ammo": {//
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Special Rounds",
        "cost": 14,
        "category": "Rounds per Magazine",
        "stats": {
            "MagazineSize": 0.30,
            "FirearmCritRate": 0.015
        },
        "desc": "Rounds per Magazine +30%, Firearm Critical Hit Rate +1.5%"
    },
    "Concentrate Support Ammo": {//
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Special Rounds",
        "cost": 14,
        "category": "Rounds per Magazine",
        "stats": {
            "MagazineSize": 0.30,
            "FirearmCritDamage": 0.05
        },
        "desc": "Rounds per Magazine +30%, Firearm Critical Hit Damage +5%"
    },
    "Maximize Weight Balance": {//
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Special Rounds",
        "cost": 14,
        "category": "Rounds per Magazine",
        "stats": {
            "MagazineSize": 0.30,
            "WeakPointDamage%": 0.02
        },
        "desc": "Rounds per Magazine +30%, Weak Point Damage +2%"
    },
    "Weapon Tuning": {//
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Special Rounds",
        "cost": 14,
        "category": "Rounds per Magazine",
        "stats": {
            "MagazineSize": 0.30,
            "FirearmATK%": 0.01
        },
        "desc": "Rounds per Magazine +30%, Firearm ATK +1%"
    },
    "Insight Focus": {//
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Special Rounds",
        "cost": 11,
        "category": "Firearm Critical Hit Rate",
        "stats": {
            "FirearmCritRate": 0.145,
            "FirearmCritDamage": 0.05
        },
        "desc": "Firearm Critical Hit Rate +14.5%, Firearm Critical Hit Damage +5%"
    },
    "Adventurer": {//
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Special Rounds",
        "cost": 11,
        "category": "Firearm Critical Hit Rate",
        "stats": {
            "FirearmCritRate": 0.0145,
            "WeakPointDamage%": 0.02
        },
        "desc": "Firearm Critical Hit Rate +14.5%, Weak Point Damage +1%"
    },
    "Marksman": {//
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Special Rounds",
        "cost": 11,
        "category": "Firearm Critical Hit Rate",
        "stats": {
            "FirearmCritRate": 0.0145,
            "FirearmATK%": 0.01
        },
        "desc": "Firearm Critical Hit Rate +14.5%, Firearm ATK +1%"
    },
    "Target Detection": {//
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Special Rounds",
        "cost": 11,
        "category": "Firearm Critical Hit Damage",
        "stats": {
            "FirearmCritDamage": 0.226,
            "WeakPointDamage%": 0.02
        },
        "desc": "Firearm Critical Hit Damage +22.6%, Weak Point Damage +2%"
    },
    "Commando Marksmanship": {//
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Special Rounds",
        "cost": 11,
        "category": "Firearm Critical Hit Damage",
        "stats": {
            "FirearmCritDamage": 0.226,
            "FirearmATK%": 0.01
        },
        "desc": "Firearm Critical Hit Damage +22.6%, Firearm ATK +1%"
    },
    "Fatal Critical": {//
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Special Rounds",
        "cost": 11,
        "category": "Firearm Critical Hit Damage",
        "stats": {
            "FirearmCritDamage": 0.226,
            "FirearmCritRate": 0.015
        },
        "desc": "Firearm Critical Hit Damage +22.6%, Firearm Critical Hit Rate +1.5%"
    },
    "Weak Point Detection": {//
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Special Rounds",
        "cost": 11,
        "category": "Weak Point Strike",
        "stats": {
            "WeakPointDamage%": 0.20,
            "FirearmATK%": 0.01
        },
        "desc": "Weak Point Damage +20%, Firearm ATK +1%"
    },
    "Focus Fire": {//
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Special Rounds",
        "cost": 11,
        "category": "Weak Point Strike",
        "stats": {
            "WeakPointDamage%": 0.20,
            "FirearmCritDamage": 0.05
        },
        "desc": "Weak Point Damage +20%, Firearm Critical Hit Damage +5%"
    },
    "Weak Point Insight": {//
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Special Rounds",
        "cost": 11,
        "category": "Weak Point Strike",
        "stats": {
            "WeakPointDamage%": 0.20,
            "FirearmCritRate": 0.015
        },
        "desc": "Weak Point Damage +20%, Firearm  Critical Hit Rate +1.5%"
    },
    "Anti-Matter Round": {//
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Special Rounds",
        "cost": 15,
        "category": "ATK",
        "stats": {
            "FirearmATK%": 0.26,
            "FirearmCritDamage": 0.05
        },
        "desc": "Firearm ATK +26%, Firearm Critical Hit Damage +5%"
    },
    "Pinpoint Shot": {//
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Special Rounds",
        "cost": 15,
        "category": "ATK",
        "stats": {
            "FirearmATK%": 0.26,
            "WeakPointDamage%": 0.02
        },
        "desc": "Firearm ATK +26%, Weak Point Damage +2%"
    },
    "Sharpshooter": {//
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Special Rounds",
        "cost": 15,
        "category": "ATK",
        "stats": {
            "FirearmATK%": 0.26,
            "FirearmCritRate": 0.015
        },
        "desc": "Firearm ATK +26%, Firearm Critical Hit Rate +1.5%"
    },
    "Have Aiming": {//
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Special Rounds",
        "cost": 16,
        "category": "Weak Point Strike",
        "stats": {
            "WeakPointDamage%": 0.40,
            "Accuracy": -0.20
        },
        "desc": "Weak Point Damage +40%, Accuracy -20%"
    },
    // "Special Rounds Compulsive": {//
    //     "rarity": "Rare",
    //     "polarity": "Xantic",
    //     "type": "Special Rounds",
    //     "cost": 14,
    //     "category": "",
    //     "stats": {},
    //     "desc": "Max Special Rounds +60%, Movement Speed -20%"
    // },
    "Compulsive Magazine": {//
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Special Rounds",
        "cost": 15,
        "category": "Rounds Per Magazine",
        "stats": {
            "MagazineSize": 0.39,
            "WeakPointDamage%": -0.10
        },
        "desc": "Rounds Per Magazine +39%, Weak Point Damage -10%"
    },
    "Edging Shot": {//
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Special Rounds",
        "cost": 16,
        "category": "Firearm Critical Hit Rate",
        "stats": {
            "FirearmCritRate": 0.32,
            "FirearmATK%": -0.15,
        },
        "desc": "Firearm Critical Hit Rate +32%, Firearm ATK -15%"
    },
    "Poison Priority": {//
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Special Rounds",
        "cost": 16,
        "category": "Attribute ATK",
        "stats": {
            "ToxicATK%Bonus": 0.50,
            "ReloadSpeed": -0.30
        },
        "desc": "Toxic ATK +50%, Reload Time Modifier -30%"
    },
    "Electric Priority": {//
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Special Rounds",
        "cost": 16,
        "category": "Attribute ATK",
        "stats": {
            "ElectricATK%Bonus": 0.50,
            "ReloadSpeed": -0.30
        },
        "desc": "Electric ATK +50%, Reload Time Modifier -30%"
    },
    "Chill Priority": {//
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Special Rounds",
        "cost": 16,
        "category": "Attribute ATK",
        "stats": {
            "ChillATK%Bonus": 0.50,
            "ReloadSpeed": -0.30
        },
        "desc": "Chill ATK +50%, Reload Time Modifier -30%"
    },
    "Fire Priority": {//
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Special Rounds",
        "cost": 16,
        "category": "Attribute ATK",
        "stats": {
            "FireATK%Bonus": 0.50,
            "ReloadSpeed": -0.30
        },
        "desc": "Fire ATK +50%, Reload Time Modifire -30%"
    },
    "Concentration Priority": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Special Rounds",
        "cost": 16,
        "category": "Firearm Critical Hit Damage",
        "stats": {
            "FirearmCritDamage": 0.47,
            "ReloadSpeed": -0.30
        },
        "desc": "Firearm Critical Hit Damage +47%, Reload Time Modifier -30%"
    },
    "Action and Reaction": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Special Rounds",
        "cost": 16,
        "category": "ATK",
        "stats": {
            "FirearmATK%": 0.61,
            "Recoil": 0.20
        },
        "desc": "Firearm ATK +61%, Recoil +20%"
    },
    "Slow Art": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Special Rounds",
        "cost": 16,
        "category": "ATK",
        "stats": {
            "FirearmATK%": 0.62,
            "FireRate": 0.25
        },
        "desc": "Firearm ATK +62, Fire Rate -25%"
    },




    //BLUES
    // "Superconductivity Charge": {//done
    //     "rarity": "Normal",
    //     "polarity": "Xantic",
    //     "type": "Special Rounds",
    //     "cost": 16,
    //     "category": "Beam Rifle",
    //     "stats": {},
    //     "desc": "Beam Rifle Charging Speed 40%"
    // },
    // "Impact Round Magazine Replacement": {//
    //     "rarity": "Normal",
    //     "polarity": "Xantic",
    //     "type": "Special Rounds",
    //     "cost": 7,
    //     "category": "Rounds Conversion",
    //     "stats": {},
    //     "desc": "When acquiring dropped Impact Rounds, change to 1 Special Round for every 2.08 Rounds"
    // },
    // "General Round Magazine Replacement": {//
    //     "rarity": "Normal",
    //     "polarity": "Xantic",
    //     "type": "Special Rounds",
    //     "cost": 7,
    //     "category": "Rounds Conversion",
    //     "stats": {},
    //     "desc": "When acquiring dropped General Rounds, change to 1 Special Round for every 3.3 Rounds"
    // },
    "Weak Point Sight": {//
        "rarity": "Normal",
        "polarity": "Malachite",
        "type": "Special Rounds",
        "cost": 16,
        "category": "",
        "stats": {
            "WeakPointDamage%": 0.35
        },
        "desc": "Weak Point Damage +35%"
    },
    // "Colon Special Forces": {//
    //     "rarity": "Normal",
    //     "polarity": "Malachite",
    //     "type": "Special Rounds",
    //     "cost": 16,
    //     "category": "",
    //     "stats": {},
    //     "desc": "+20% Movement Speed When Aiming"
    // },
    "Better Concentration": {//
        "rarity": "Normal",
        "polarity": "Almandine",
        "type": "Special Rounds",
        "cost": 16,
        "category": "",
        "stats": {
            "FirearmCritDamage": 0.488
        },
        "desc": "Firearm Critical Hit Damage +48.8%"
    },
    "Expand Weapon Charge": {//
        "rarity": "Normal",
        "polarity": "Cerulean",
        "type": "Special Rounds",
        "cost": 15,
        "category": "",
        "stats": {
            "MagazineSize": 0.49
        },
        "desc": "Rounds per Magazine +49%"
    },
    "Recycling Genius": {//
        "rarity": "Normal",
        "polarity": "Cerulean",
        "type": "Special Rounds",
        "cost": 14,
        "category": "",
        "stats": {
            "ReloadSpeed": 0.30
        },
        "desc": "Reload Time Modifier +30%"
    },
    // "Better Weapon Weight": {//
    //     "rarity": "Normal",
    //     "polarity": "Almandine",
    //     "type": "Special Rounds",
    //     "cost": 11,
    //     "category": "",
    //     "stats": {},
    //     "desc": "Weapon Change Speed +25%"
    // },
    // "Special Rounds Storage": {//
    //     "rarity": "Normal",
    //     "polarity": "Xantic",
    //     "type": "Special Rounds",
    //     "cost": 14,
    //     "category": "",
    //     "stats": {},
    //     "desc": "Max Special Rounds +50%"
    // },
    "Chill Enhancement": {//
        "rarity": "Normal",
        "polarity": "Cerulean",
        "type": "Special Rounds",
        "cost": 16,
        "category": "Bullet Improvement",
        "stats": {
            "ChillATK%": 0.30
        },
        "desc": "Adds Chill ATK equal to 30% of Firearm ATK"
    },
    // "Hawk-Eye": {
    //     "rarity": "Normal",
    //     "polarity": "Rutile",
    //     "type": "Special Rounds",
    //     "cost": 4,
    //     "category": "",
    //     "stats": {},
    //     "desc": "Accuracy +11%"
    // },
    "Better Insight": {
        "rarity": "Normal",
        "polarity": "Almandine",
        "type": "Special Rounds",
        "cost": 16,
        "category": "",
        "stats": {
            "FirearmCritRate": 0.37
        },
        "desc": "Firearm Critical Hit Rate +37%"
    },
    "Electric Enhancement": {//
        "rarity": "Normal",
        "polarity": "Xantic",
        "type": "Special Rounds",
        "cost": 16,
        "category": "Bullet Improvement",
        "stats": {
            "ElectricATK%": 0.30
        },
        "desc": "Adds Electric ATK equal to 30% of Firearm ATK"
    },
    "Toxic Enhancement": {//
        "rarity": "Normal",
        "polarity": "Rutile",
        "type": "Special Rounds",
        "cost": 16,
        "category": "Bullet Improvement",
        "stats": {
            "ToxicATK%": 0.30
        },
        "desc": "Adds Toxic ATK equal to 30% of Firearm ATK"
    },
    "Fire Enhancement": {//
        "rarity": "Normal",
        "polarity": "Almandine",
        "type": "Special Rounds",
        "cost": 16,
        "category": "Bullet Improvement",
        "stats": {
            "FireATK%": 0.30
        },
        "desc": "Adds Fire ATK equal to 30% of Firearm ATK"
    },
    // "Vibration Absorption": {
    //     "rarity": "Normal",
    //     "polarity": "Rutile",
    //     "type": "Special Rounds",
    //     "cost": 14,
    //     "category": "",
    //     "stats": {},
    //     "desc": "Recoil -45%"
    // },
    "Fire Rate UP": {
        "rarity": "Normal",
        "polarity": "Xantic",
        "type": "Special Rounds",
        "cost": 12,
        "category": "Fire Rate",
        "stats": {
            "FireRate": -0.25,
        },
        "desc": "Fire Rate +25%"
    },
    "Rifling Reinforcement": {
        "rarity": "Normal",
        "polarity": "Malachite",
        "type": "Special Rounds",
        "cost": 16,
        "category": "",
        "stats": {
            "FirearmATK%": 0.32,
        },
        "desc": "Firearm ATK +32%"
    },  

















    "Charge Amplification": {
      "rarity": "Rare",
      "polarity": "Malachite",
      "type": "Special Rounds",
      "cost": 0,
      "category": "Firearm Critical Hit Damage",
      "stats": {
         "FirearmATK%": 0.67,
         "FirearmCritDamage": -0.34
      },
      "desc": "Firearm ATK +67%, Firearm Critical Hit Damage -34%"
   }, 
   "Charge Integration": {
      "rarity": "Rare",
      "polarity": "Malachite",
      "type": "Special Rounds",
      "cost": 0,
      "category": "Firearm Critical Hit Damage",
      "stats": {
         "FirearmATK%": 0.27,
        "FirearmCritDamage": 0.10
      },
      "desc": "Firearm ATK +27%, Firearm Critical Hit Damage +10%"
   }, 
}