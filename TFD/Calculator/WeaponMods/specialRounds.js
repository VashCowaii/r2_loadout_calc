const specialRounds =  {
    "": {
        "rarity": "Empty",
        "polarity": "Empty",
        "type": "Special Rounds",
        "cost": 16,
        "category": "",
        "desc": "Select a mod above.",
        "stats": {},
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        },
        "complexBonus": [
         {
            "stats": [
               {"name": "FireRate","value": -0.04,"subStackValue": null},
               {"name": "Recoil","value": -0.05,"subStackValue": null},
               {"name": "FirearmATK%","value": 0.06,"subStackValue": null},
            ],
            "oneTimeOrStack": "stack",
            "bonusName": "Sharp Precision Shot (General)",
            "clearOnReload": true,
            "limit": 10,
            "currentStacks": 0,
            "timePassedEntry": 0,
            "cooldown": 0.5,
         }
      ],
        "tags": ["Recoil","FirearmATK%"],
        "inclusion": [],
        "exclusion": [],
        "desc": "Base Fire Rate -20%. While pulling the trigger, Fire Rate +4%, Recoil -5%, and Firearm ATK +6% every 0.5s (up to 10 stacks)."
    },
    "Mental Focus": {//done
      "rarity": "Ultimate",
      "polarity": "Malachite",
      "type": "Special Rounds",
      "cost": 16,
      "category": "Special Mod",
      "stats": {
         "FireRate": 0.10,
      },
      "complexBonus": [
         {
            "stats": [
               {"name": "FirearmATK%","value": 0.015,"subStackValue": null},
            ],
            "bonusName": "Mental Focus (Special)",
            "oneTimeOrStack": "stack",
            "duration": 2,
            "cooldown": 0,
            "isDurationActive": true,
            "isCooldownActive": false,
            "clearOnReload": true,
            "limit": 60,
            "currentStacks": 0,
            "timePassedEntry": 0,
            "cooldown": 0,
         }
      ],
      "tags": ["FirearmATK%"],
      "inclusion": [],
      "exclusion": [],
      "desc": "Base Fire Rate -10%. When firing a firearm, Firearm ATK +1.5% for 2s (up to 60 stacks). Removes effect when reloading or changing firearm.<br>Max stacks assumed when selected."
   },
    "Real-life Fighter": {
      "rarity": "Ultimate",
      "polarity": "Malachite",
      "type": "Special Rounds",
      "cost": 16,
      "category": "Special Mod",
      "stats": {
         "Accuracy": -0.20,
      },
      "complexBonus": [
         {
            "stats": [
               {"name": "FirearmATK%","value": 0.10,"subStackValue": null},
            ],
            "bonusName": "Real-life Fighter (Special)",
            "oneTimeOrStack": "stack",
            "decayDuration": 5,
            "limit": 10,
            "cooldown": 0,
            "currentStacks": 0,
            "timePassedEntry": 0,
            "conditions": ["isWeakpoint"],
         }
      ],
      "tags": ["FirearmATK%"],
      "inclusion": [],
      "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
        "desc": "On hit, enemy's Firearm Critical Hit Resistance -25% for 10s. (Cooldown 10s)."
    },
    "Spray and Pray": {//
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Special Rounds",
        "cost": 15,
        "category": "Special Mod",
        "stats": {
        },
        "complexBonus": [
         {
            "stats": [
               {"name": "BulletCostWeapon","value": -1,"subStackValue": null},
            ],
            "bonusName": "Spray and Pray",
            "oneTimeOrStack": "duration",
            "limit": 1,
            "cooldown": 15,
            "duration": 3,
            "currentStacks": 0,
            "timePassedEntry": 0,
            "isDurationActive": true,
            "isCooldownActive": false,
            "bonusWasApplied": false,
            // "conditions": ["isReloaded"],
         }
      ],
        "tags": ["BulletCostWeapon","MagazineSize"],
        "inclusion": [],
        "exclusion": [],
        "desc": "When landing a Firearm Critical Hit, rounds are not consumed for 3s (Cooldown 15s)."
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
            "FirearmATK%OnHit": 0.26
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
        "desc": "When attacking enemies inflicted with Frostbite, Firearm ATK +26%"
    },
    "Fire Conductor": {//
        "rarity": "Ultimate",
        "polarity": "Almandine",
        "type": "Special Rounds",
        "cost": 15,
        "category": "Special Mod",
        "stats": {
            "FirearmATK%OnHit": 0.26
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
        "desc": "When attacking enemies inflicted with Burn, Firearm ATK +26%"
    },
    "Electric Conductor": {//
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Special Rounds",
        "cost": 15,
        "category": "Special Mod",
        "stats": {
            "FirearmATK%OnHit": 0.26
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
        "desc": "When attacking enemies inflicted with Electrocution, Firearm ATK +26%"
    },
    "Toxic Conductor": {//
        "rarity": "Ultimate",
        "polarity": "Rutile",
        "type": "Special Rounds",
        "cost": 15,
        "category": "Special Mod",
        "stats": {
            "FirearmATK%OnHit": 0.26
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
        "desc": "Firearm ATK +62, Fire Rate -25%"
    },




    //BLUES
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "tags": [],
        "inclusion": [],
        "exclusion": [],
        "desc": "Firearm ATK +67%, Firearm Critical Hit Damage -34%"
    }, 
    "Bullet Integration": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Special Rounds",
        "cost": 0,
        "category": "Firearm Critical Hit Damage",
        "stats": {
            "FirearmATK%": 0.27,
            "FirearmCritDamage": 0.10
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
        "desc": "Firearm ATK +27%, Firearm Critical Hit Damage +10%"
    }, 


   "Lethal Finish": {//done
      "rarity": "Ultimate",
      "polarity": "Almandine",
      "type": "Special Rounds",
      "cost": 16,
      "category": "Special Mod",
      "desc": "When firing a firearm, ammo with an additional 60% Critical Hit Rate are fired (Cooldown 15s). When defeating an enemy with the additional attack, module cooldown is -12.4s However, the firearm's base Weak Point Damage is Fixed at 100%",
      "stats": {
         "WeakPointOverride": 1,
      },
      "complexBonus": [
         {
               "stats": [
                  {"name": "FirearmCritRateBase","value": 0.60,"subStackValue": null},
               ],
               "bonusName": "Lethal Finish (High-Powered)",
               "oneTimeOrStack": "cooldown",
               "limit": 1,
               "isDurationActive": true,
               "isCooldownActive": false,
               "currentStacks": 0,
               "timePassedEntry": 0,
               "cooldown": 15,
         }
      ],
      "tags": ["FirearmCritRateBase","WeakPointOverride"],
      "inclusion": [],
      "exclusion": [],
   },



   "Superconductivity Charge": {
        "rarity": "Normal",
        "polarity": "Xantic",
        "type": "Special Rounds",
        "cost": 16,
        "category": "",
        "stats": {
            "BeamChargeSpeed": 0.40,
        },
        "tags": [],
        "inclusion": ["Beam Rifle"],
        "exclusion": [],
        "desc": "Beam Rifle Charging Speed 40%"
    },



    "High Voltage Plasma": {
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Special Rounds",
        "cost": 13,
        "category": "Battle Proficiency",
        "stats": {},
        "complexBonus": [
            {
                "stats": [
                    {"name": "enemyDEFResistanceReductionCORE","value": -0.015,"subStackValue": null},
                    {"name": "ElectricATK%BonusCORE","value": 0.016,"subStackValue": null},
                ],
                "bonusName": "High Voltage Plasma",
                "oneTimeOrStack": "stack",
                "duration": 2,
                "cooldown": 0,
                "isDurationActive": true,
                "isCooldownActive": false,
                "clearOnReload": true,
                "skipFirstShot": true,
                "limit": 20,
                "currentStacks": -1,
                "timePassedEntry": 0,
                "cooldown": 0,
            }
        ],
        "tags": ["enemyDEFResistanceReductionCORE%","ElectricATK%BonusCORE%"],
        "inclusion": ["Beam Rifle"],
        "exclusion": [],
        "desc": "When hitting the same target consecutively, increases your Electric ATK by +1.6% and reduces the target's DEF by -1.5% (up to 20 stacks; stacks reset upon failing to hit the same target, reloading, or ending your firing)."
    },
    "Corrosive Plasma": {
        "rarity": "Ultimate",
        "polarity": "Rutile",
        "type": "Special Rounds",
        "cost": 13,
        "category": "Battle Proficiency",
        "stats": {},
        "complexBonus": [
            {
                "stats": [
                    {"name": "enemyDEFResistanceReductionCORE","value": -0.015,"subStackValue": null},
                    {"name": "ToxicATK%BonusCORE","value": 0.016,"subStackValue": null},
                ],
                "bonusName": "Corrosive Plasma",
                "oneTimeOrStack": "stack",
                "duration": 2,
                "cooldown": 0,
                "isDurationActive": true,
                "isCooldownActive": false,
                "clearOnReload": true,
                "skipFirstShot": true,
                "limit": 20,
                "currentStacks": -1,
                "timePassedEntry": 0,
                "cooldown": 0,
            }
        ],
        "tags": ["enemyDEFResistanceReductionCORE%","ToxicATK%BonusCORE%"],
        "inclusion": ["Beam Rifle"],
        "exclusion": [],
        "desc": "When hitting the same target consecutively, increases your Electric ATK by +1.6% and reduces the target's DEF by -1.5% (up to 20 stacks; stacks reset upon failing to hit the same target, reloading, or ending your firing)."
    },
    "Supercooled Plasma": {
        "rarity": "Ultimate",
        "polarity": "Cerulean",
        "type": "Special Rounds",
        "cost": 13,
        "category": "Battle Proficiency",
        "stats": {},
        "complexBonus": [
            {
                "stats": [
                    {"name": "enemyDEFResistanceReductionCORE","value": -0.015,"subStackValue": null},
                    {"name": "ChillATK%BonusCORE","value": 0.016,"subStackValue": null},
                ],
                "bonusName": "Supercooled Plasma",
                "oneTimeOrStack": "stack",
                "duration": 2,
                "cooldown": 0,
                "isDurationActive": true,
                "isCooldownActive": false,
                "clearOnReload": true,
                "skipFirstShot": true,
                "limit": 20,
                "currentStacks": -1,
                "timePassedEntry": 0,
                "cooldown": 0,
            }
        ],
        "tags": ["enemyDEFResistanceReductionCORE%","ChillATK%BonusCORE%"],
        "inclusion": ["Beam Rifle"],
        "exclusion": [],
        "desc": "When hitting the same target consecutively, increases your Electric ATK by +1.6% and reduces the target's DEF by -1.5% (up to 20 stacks; stacks reset upon failing to hit the same target, reloading, or ending your firing)."
    },
    "Superheated Plasma": {
        "rarity": "Ultimate",
        "polarity": "Almandine",
        "type": "Special Rounds",
        "cost": 13,
        "category": "Battle Proficiency",
        "stats": {},
        "complexBonus": [
            {
                "stats": [
                    {"name": "enemyDEFResistanceReductionCORE","value": -0.015,"subStackValue": null},
                    {"name": "FireATK%BonusCORE","value": 0.016,"subStackValue": null},
                ],
                "bonusName": "Superheated Plasma",
                "oneTimeOrStack": "stack",
                "duration": 2,
                "cooldown": 0,
                "isDurationActive": true,
                "isCooldownActive": false,
                "clearOnReload": true,
                "skipFirstShot": true,
                "limit": 20,
                "currentStacks": -1,
                "timePassedEntry": 0,
                "cooldown": 0,
            }
        ],
        "tags": ["enemyDEFResistanceReductionCORE%","FireATK%BonusCORE%"],
        "inclusion": ["Beam Rifle"],
        "exclusion": [],
        "desc": "When hitting the same target consecutively, increases your Electric ATK by +1.6% and reduces the target's DEF by -1.5% (up to 20 stacks; stacks reset upon failing to hit the same target, reloading, or ending your firing)."
    },
}