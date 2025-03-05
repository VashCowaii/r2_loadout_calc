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
        "inclusion": [],
        "exclusion": [],
    },

    //---------------------------------------------------------------
    //---------------------------------------------------------------
    //GOLDS
    //---------------------------------------------------------------
    //---------------------------------------------------------------
    "Real-Life Fighter": {//done for reloads
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Special Mod",
        "desc": "Accuracy -20%. On dealing Weak Point DMG, Firearm ATK +10% for 5s (up to 10 stacks) But loses 2 stacks per failed Weak Point Attack.",
        "stats": {
            "Accuracy": -0.20,
        },
        "complexBonus": [
            {
                "stats": [
                    {"name": "FirearmATK%","value": 0.10,"subStackValue": null},
                ],
                "bonusName": "Real-life Fighter (High-Powered)",
                "oneTimeOrStack": "stack",
                "limit": 10,
                "cooldown": 0,
                "duration": 5,
                "currentStacks": 0,
                "timePassedEntry": 0,
                "conditions": ["isWeakpoint"],
            }
        ],
        "tags": ["FirearmATK%"],
        "inclusion": [],
        "exclusion": [],
    },
    "Strengthen First Shot": {//done for reloads
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Special Mod",
        "desc": "After Reload, first shot's Firearm ATK +200% (Cooldown 10s)",
        "stats": {
        },
        "complexBonus": [
            {
                "stats": [
                    {"name": "FirearmATK%","value": 2,"subStackValue": null},
                ],
                "bonusName": "Strengthen First Shot",
                "oneTimeOrStack": "cooldown",
                "limit": 1,
                "currentStacks": 0,
                "timePassedEntry": 0,
                "conditions": ["isReloaded"],
                "cooldown": 10,
            }
        ],
        "tags": ["FirearmATK%"],
        "inclusion": [],
        "exclusion": [],
    },
    "Special Sight": {
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "Special Mod",
        "desc": "Movement Speed When Aiming -30%, Weak Point Damage When Aiming +30%",
        "stats": {
            "WeakPointDamage%": 0.30,
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Weak Point Expansion": {//done for reloads
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Special Mod",
        "desc": "On Weak Point hit, Weak Point Damage +140% (Cooldown 10s)",
        "stats": {},
        "complexBonus": [
            {
                "stats": [
                    {"name": "WeakPointDamage%","value": 1.40,"subStackValue": null},
                ],
                "bonusName": "Weak Point Expansion (High-Powered)",
                "oneTimeOrStack": "cooldown",
                "limit": 1,
                "isDurationActive": true,
                "isCooldownActive": false,
                "currentStacks": 0,
                "timePassedEntry": 0,
                "cooldown": 10,
                "conditions": ["isWeakpoint"],
            }
        ],
        "tags": ["WeakPointDamage%"],
        "inclusion": [],
        "exclusion": [],
    },
    "Dopaminergic Activate": {//done for reloads
        "rarity": "Ultimate",
        "polarity": "Almandine",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Special Mod",
        "desc": "On Weak Point hit, Firearm Critical Hit Rate +45.5%, Firearm Critical Hit Damage +59.3% (Cooldown 10s)",
        "stats": {},
        "complexBonus": [
            {
                "stats": [
                    {"name": "FirearmCritRate","value": 0.455,"subStackValue": null},
                    {"name": "FirearmCritDamage","value": 0.593,"subStackValue": null},
                ],
                "bonusName": "Dopaminergic Activate (High-Powered)",
                "oneTimeOrStack": "cooldown",
                "limit": 1,
                "isDurationActive": true,
                "isCooldownActive": false,
                "currentStacks": 0,
                "timePassedEntry": 0,
                "cooldown": 10,
                "conditions": ["isWeakpoint"],
            }
        ],
        "tags": ["FirearmCritRate","FirearmCritDamage"],
        "inclusion": [],
        "exclusion": [],
    },
    "Electric Conductor": {
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "Special Mod",
        "desc": "When attacking enemies inflicted with Electrocution, Firearm ATK +26%",
        "stats": {
            "FirearmATK%OnHit": 0.26,
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Toxic Conductor": {
        "rarity": "Ultimate",
        "polarity": "Rutile",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "Special Mod",
        "desc": "When attacking enemies inflicted with Poison, Firearm ATK +26%",
        "stats": {
            "FirearmATK%OnHit": 0.26,
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Snowflake Conductor": {
        "rarity": "Ultimate",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "Special Mod",
        "desc": "When attacking enemies inflicted with Frostbite, Firearm ATK +26%",
        "stats": {
            "FirearmATK%OnHit": 0.26,
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Fire Conductor": {
        "rarity": "Ultimate",
        "polarity": "Almandine",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "Special Mod",
        "desc": "When attacking enemies inflicted with Burn, Firearm ATK +26%",
        "stats": {
            "FirearmATK%OnHit": 0.26,
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },








    //---------------------------------------------------------------
    //---------------------------------------------------------------
    //PURPLES
    //---------------------------------------------------------------
    //---------------------------------------------------------------
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
            "ReloadSpeed": -0.30
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
            "ReloadSpeed": -0.30
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
            "ReloadSpeed": -0.30
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
            "ReloadSpeed": -0.30
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Reload insight": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 12,
        "category": "Reload Time Modifier",
        "desc": "Reload Time Modifier +25%, Firearm Critical Hit Rate +1%",
        "stats": {
            "ReloadSpeed": 0.25,
            "FirearmCritDamage": 0.01
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Reload Focus": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 12,
        "category": "Reload Time Modifier",
        "desc": "Reload Time Modifier +25%, Firearm Critical Hit Damage +3.5%",
        "stats": {
            "ReloadSpeed": 0.25,
            "FirearmCritDamage": 0.035
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Consume Magazines": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 12,
        "category": "Reload Time Modifier",
        "desc": "Reload Time Modifier +25%, Weak Point Damage +2%",
        "stats": {
            "ReloadSpeed": 0.25,
            "WeakPointDamage%": 0.02
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Reload Expert": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 12,
        "category": "Reload Time Modifier",
        "desc": "Reload Time Modifier +25%, Firearm ATK +1%",
        "stats": {
            "ReloadSpeed": 0.25,
            "FirearmATK%": 0.01
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
            "ReloadSpeed": -0.30
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
    }, 
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
    },
    "Action and Reaction (Sniper)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "ATK",
        "desc": "Firearm ATK +61%, Recoil +20%",
        "stats": {
            "FirearmATK%": 0.61,
            "Recoil": 0.20
        },
        "tags": [],
        "inclusion": ["Sniper Rifle"],
        "exclusion": [],
    },
    "Slow Art (Sniper)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "ATK",
        "desc": "Firearm ATK 44%, Fire Rate -25%",
        "stats": {
            "FirearmATK%": 0.44,
            "FireRate": 0.25
        },
        "tags": [],
        "inclusion": ["Sniper Rifle"],
        "exclusion": [],
    },
    "Anti-matter Round (Sniper)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "ATK",
        "desc": "Firearm ATK +26%, Firearm Critical Hit Damage +3.5%",
        "stats": {
            "FirearmATK%": 0.26,
            "FirearmCritDamage": 0.035
        },
        "tags": [],
        "inclusion": ["Sniper Rifle"],
        "exclusion": [],
    },
    "Pinpoint Shot (Sniper)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "ATK",
        "desc": "Firearm ATK +26%, Weak Point Damage +2%",
        "stats": {
            "FirearmATK%": 0.26,
            "WeakPointDamage%": 0.01
        },
        "tags": [],
        "inclusion": ["Sniper Rifle"],
        "exclusion": [],
    },
    "Sharpshooter (Sniper)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "ATK",
        "desc": "Firearm ATK +26%, Firearm Critical Hit Rate +1%",
        "stats": {
            "FirearmATK%": 0.26,
            "FirearmCritRate": 0.01
        },
        "tags": [],
        "inclusion": ["Sniper Rifle"],
        "exclusion": [],
    },

    //---------------------------------------------------------------
    //---------------------------------------------------------------
    //BLUES
    //---------------------------------------------------------------
    //---------------------------------------------------------------
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
        "inclusion": [],
        "exclusion": [],
    },
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
    },
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
        "inclusion": [],
        "exclusion": [],
    },
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
        "inclusion": [],
        "exclusion": [],
    },
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
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
        "inclusion": [],
        "exclusion": [],
    },
    "Rifling Reinforcement (Sniper)": {
        "rarity": "Normal",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "",
        "desc": "Firearm ATK +32%",
        "stats": {
            "FirearmATK%": 0.32
        },
        "tags": [],
        "inclusion": ["Sniper Rifle"],
        "exclusion": [],
    },





























    //---------------------------------------------------------------
    //---------------------------------------------------------------
    //MODS ADDED LATER
    //The order here does actually matter for the sake of URL parameters,
    //so mods added later get added AFTER in the topdown order
    //---------------------------------------------------------------
    //---------------------------------------------------------------
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
        "inclusion": ["Sniper Rifle"],
        "exclusion": [],
    },
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
        "inclusion": ["Sniper Rifle"],
        "exclusion": [],
    },
    "Unstoppable Smasher (Shotgun)": {//TODO: complexBonus key later
        "rarity": "Ultimate",
        "polarity": "Rutile",
        "type": "High-Power Rounds",
        "cost": 11,
        "category": "Special Mod",
        "desc": "When defeating an enemy, Shell Capacity +30% for 5s at a 33% chance.",
        "stats": {},
        "tags": ["ShellCapacity"],
        "inclusion": ["Shotgun"],
        "exclusion": [],
    },
    "Hit Rate Insight (Shotgun)": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "High-Power Rounds",
        "cost": 13,
        "category": "Accuracy",
        "desc": "Accuracy +30%, Firearm Critical Hit Rate +3%",
        "stats": {
            "Accuracy": 0.30,
            "FirearmCritRate": 0.03,
        },
        "tags": [],
        "inclusion": ["Shotgun"],
        "exclusion": [],
    },
    "Hit Rate Focus (Shotgun)": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "High-Power Rounds",
        "cost": 13,
        "category": "Accuracy",
        "desc": "Accuracy +30%, Firearm Critical Hit Damage +13%",
        "stats": {
            "Accuracy": 0.30,
            "FirearmCritDamage": 0.13,
        },
        "tags": [],
        "inclusion": ["Shotgun"],
        "exclusion": [],
    },
    "Weak Point Aiming (Shotgun)": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "High-Power Rounds",
        "cost": 13,
        "category": "Accuracy",
        "desc": "Accuracy +30%, Weak Point Damage +2%",
        "stats": {
            "Accuracy": 0.30,
            "WeakPointDamage%": 0.02,
        },
        "tags": [],
        "inclusion": ["Shotgun"],
        "exclusion": [],
    },
    "Deadeye (Shotgun)": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "High-Power Rounds",
        "cost": 13,
        "category": "Accuracy",
        "desc": "Accuracy +30%, Firearm ATK +1%",
        "stats": {
            "Accuracy": 0.30,
            "FirearmATK%": 0.01,
        },
        "tags": [],
        "inclusion": ["Shotgun"],
        "exclusion": [],
    },
    "Targeted Vulnerability (Shotgun)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Weak Point Strike",
        "desc": "Weak Point Damage +40%, Accuracy -20%",
        "stats": {
            "Accuracy": -0.20,
            "WeakPointDamage%": 0.4,
        },
        "tags": [],
        "inclusion": ["Shotgun"],
        "exclusion": [],
    }, 
    "Action and Reaction (Shotgun)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "ATK",
        "desc": "Firearm ATK +61%, Recoil +20%",
        "stats": {
            "Recoil": 0.20,
            "FirearmATK%": 0.61,
        },
        "tags": [],
        "inclusion": ["Shotgun"],
        "exclusion": [],
    },
    "Slow Art (Shotgun)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "ATK",
        "desc": "Firearm ATK +48%, Fire Rate -25%",
        "stats": {
            "FireRate": 0.25,
            "FirearmATK%": 0.48,
        },
        "tags": [],
        "inclusion": ["Shotgun"],
        "exclusion": [],
    },
    "Anti-Matter Round (Shotgun)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "ATK",
        "desc": "Firearm ATK +26%, Firearm Critical Hit Damage +13%",
        "stats": {
            "FirearmCritDamage": 0.13,
            "FirearmATK%": 0.26,
        },
        "tags": [],
        "inclusion": ["Shotgun"],
        "exclusion": [],
    },
    "Pinpoint Shot (Shotgun)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "ATK",
        "desc": "Firearm ATK +26%, Weak Point Damage +2%",
        "stats": {
            "WeakPointDamage%": 0.02,
            "FirearmATK%": 0.26,
        },
        "tags": [],
        "inclusion": ["Shotgun"],
        "exclusion": [],
    },
    "Sharpshooter (Shotgun)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "ATK",
        "desc": "Firearm ATK +26%, Firearm Critical Hit Rate +3%",
        "stats": {
            "FirearmCritRate": 0.03,
            "FirearmATK%": 0.26,
        },
        "tags": [],
        "inclusion": ["Shotgun"],
        "exclusion": [],
    },
    "Shell UP": {
        "rarity": "Normal",
        "polarity": "Rutile",
        "type": "High-Power Rounds",
        "cost": 6,
        "category": "",
        "desc": "Shell Capacity +33%",
        "stats": {
            "ShellCapacity": 0.33,
        },
        "tags": [],
        "inclusion": ["Shotgun"],
        "exclusion": [],
    },
    "Rifling Reinforcement (Shotgun)": {
        "rarity": "Normal",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "",
        "desc": "Firearm ATK +32%",
        "stats": {
            "FirearmATK%": 0.32,
        },
        "tags": [],
        "inclusion": ["Shotgun"],
        "exclusion": [],
    },
    "Charge Amplification (Shotgun)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Firearm Critical Hit Damage",
        "desc": "Firearm ATK +40%, Firearm Critical Hit Damage -30%",
        "stats": {
            "FirearmATK%": 0.40,
            "FirearmCritDamage": -0.30
        },
        "tags": [],
        "inclusion": ["Shotgun"],
        "exclusion": [],
    },
    "Bullet Integration (Shotgun)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Firearm Critical Hit Damage",
        "desc": "Firearm ATK +10%, Firearm Critical Hit Damage +10%",
        "stats": {
            "FirearmATK%": 0.10,
            "FirearmCritDamage": 0.10
        },
        "tags": [],
        "inclusion": ["Shotgun"],
        "exclusion": [],
    },






    "Fire Rate UP": {
        "rarity": "Normal",
        "polarity": "Xantic",
        "type": "High-Power Rounds",
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
    "Recycling Genius": {
        "rarity": "Normal",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 14,
        "category": "",
        "desc": "Reload Time Modifier +30%",
        "stats": {
            "ReloadSpeed": 0.30,
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Descendant Roll": {
        "rarity": "Ultimate",
        "polarity": "Cerulean",
        "type": "High-Power Rounds",
        "cost": 10,
        "category": "Special Mod",
        "desc": "When rolling, auto-reloads the active weapon at a 100% chance (Cooldown 15s)<br><br>Right now this mod, in the calc, functions to just skip a reload on a cooldown.",
        "stats": {
        },
        "complexBonus": [
            {
                "stats": [
                    {"name": "SkipReload","value": 1,"subStackValue": null},
                ],
                "bonusName": "Descendant Roll",
                "oneTimeOrStack": "cooldown",
                "limit": 1,
                "currentStacks": 0,
                "timePassedEntry": 0,
                "conditions": ["isEndOfMagazine"],
                "cooldown": 15,
            }
        ],
        "tags": ["SkipReload"],
        "inclusion": [],
        "exclusion": [],
    },
    "Lethal Finish": {
        "rarity": "Ultimate",
        "polarity": "Almandine",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Special Mod",
        "desc": "When firing a firearm, ammo with an additional 45% Critical Hit Rate are fired (Cooldown 15s). When defeating an enemy with the additional attack, module cooldown is -12.4s However, the firearm's base Weak Point Damage is Fixed at 100%",
        "stats": {
            "WeakPointOverride": 1,
        },
        "complexBonus": [
            {
                "stats": [
                    {"name": "FirearmCritRateBase","value": 0.45,"subStackValue": null},
                ],
                "bonusName": "Lethal Finish (High-Powered)",
                "oneTimeOrStack": "cooldown",
                "limit": 1,
                "isDurationActive": true,
                "isCooldownActive": false,
                "currentStacks": 0,
                "timePassedEntry": 0,
                "cooldown": 15,
                // "conditions": ["isWeakpoint"],
            }
        ],
        "tags": ["FirearmCritRateBase","WeakPointOverride"],
        "inclusion": [],
        "exclusion": [],
    },





    "Overwhelm": {
      "rarity": "Ultimate",
      "polarity": "Malachite",
      "type": "High-Power Rounds",
      "cost": 16,
      "category": "Battle Proficiency",
      "stats": {
      },
      "complexBonus": [
         {
            "stats": [
               {"name": "TypeBonusCORE","value": 0.0581,"subStackValue": null},
               {"name": "WeakPointDamage%CORE","value": 0.04,"subStackValue": null},
            ],
            "bonusName": "Overwhelm",
            "oneTimeOrStack": "duration",
            "limit": 10,
            "cooldown": 20,
            "duration": 5,
            "isDurationActive": true,
            "isCooldownActive": false,
            "currentStacks": -1,
            "timePassedEntry": 0,
            "conditions": ["isAdvantage"],
            "skipFirstShot": true,
         }
      ],
      "tags": ["TypeBonusCORE","WeakPointDamage%CORE"],
      "inclusion": [],
      "exclusion": [],
      "desc": "Upon hitting with Advantage Affinity, increases Weak Point Damage by 4% and Advantage Affinity Dammage Coefficient by 5.81% for 5 seconds (max 10 stacks, loses 2 stacks on failure, cooldown 20s)."
   },
   "Heat Circulation": {
      "rarity": "Ultimate",
      "polarity": "Almandine",
      "type": "High-Power Rounds",
      "cost": 16,
      "category": "Battle Proficiency",
      "stats": {
      },
      "complexBonus": [
         {
            "stats": [
               {"name": "FireATK%BonusCORE","value": 0.896,"subStackValue": null},
            ],
            "bonusName": "Heat Circulation",
            "oneTimeOrStack": "duration",
            "limit": 1,
            "cooldown": 20,
            "duration": 5,
            "isDurationActive": true,
            "isCooldownActive": false,
            "currentStacks": 0,
            "timePassedEntry": 0,
            "conditions": [],//TODO: add checks to locate sources of burn within the player loadout and make it a condition
            "skipFirstShot": true,
         }
      ],
      "tags": ["FireATK%BonusCORE"],
      "inclusion": [],
      "exclusion": [],
      "desc": "Upon inflicting the Burn effect, increase Fire ATK by 89.6% for 5 seconds (cooldown 20 seconds)."
   },
   "Chill Circulation": {
      "rarity": "Ultimate",
      "polarity": "Cerulean",
      "type": "High-Power Rounds",
      "cost": 16,
      "category": "Battle Proficiency",
      "stats": {
      },
      "complexBonus": [
         {
            "stats": [
               {"name": "ChillATK%BonusCORE","value": 0.896,"subStackValue": null},
            ],
            "bonusName": "Chill Circulation",
            "oneTimeOrStack": "duration",
            "limit": 1,
            "cooldown": 20,
            "duration": 5,
            "isDurationActive": true,
            "isCooldownActive": false,
            "currentStacks": 0,
            "timePassedEntry": 0,
            "conditions": [],//TODO: add checks to locate sources of burn within the player loadout and make it a condition
            "skipFirstShot": true,
         }
      ],
      "tags": ["ChillATK%BonusCORE"],
      "inclusion": [],
      "exclusion": [],
      "desc": "Upon inflicting the Frostbite effect, increase Chill ATK by 89.6% for 5 seconds (cooldown 20 seconds)."
   },
   "Electric Circulation": {
      "rarity": "Ultimate",
      "polarity": "Xantic",
      "type": "High-Power Rounds",
      "cost": 16,
      "category": "Battle Proficiency",
      "stats": {
      },
      "complexBonus": [
         {
            "stats": [
               {"name": "ElectricATK%BonusCORE","value": 0.896,"subStackValue": null},
            ],
            "bonusName": "Electric Circulation",
            "oneTimeOrStack": "duration",
            "limit": 1,
            "cooldown": 20,
            "duration": 5,
            "isDurationActive": true,
            "isCooldownActive": false,
            "currentStacks": 0,
            "timePassedEntry": 0,
            "conditions": [],//TODO: add checks to locate sources of burn within the player loadout and make it a condition
            "skipFirstShot": true,
         }
      ],
      "tags": ["ElectricATK%BonusCORE"],
      "inclusion": [],
      "exclusion": [],
      "desc": "Upon inflicting the Shock effect, increase Electric ATK by 89.6% for 5 seconds (cooldown 20 seconds)."
   },
   "Toxic Circulation": {
      "rarity": "Ultimate",
      "polarity": "Rutile",
      "type": "High-Power Rounds",
      "cost": 16,
      "category": "Battle Proficiency",
      "stats": {
      },
      "complexBonus": [
         {
            "stats": [
               {"name": "ToxicATK%BonusCORE","value": 0.896,"subStackValue": null},
            ],
            "bonusName": "Toxic Circulation",
            "oneTimeOrStack": "duration",
            "limit": 1,
            "cooldown": 20,
            "duration": 5,
            "isDurationActive": true,
            "isCooldownActive": false,
            "currentStacks": 0,
            "timePassedEntry": 0,
            "conditions": [],//TODO: add checks to locate sources of burn within the player loadout and make it a condition
            "skipFirstShot": true,
         }
      ],
      "tags": ["ToxicATK%BonusCORE"],
      "inclusion": [],
      "exclusion": [],
      "desc": "Upon inflicting the Poison effect, increase Toxic ATK by 89.6% for 5 seconds (cooldown 20 seconds)."
   },














    "Charge Amplification (Launcher)": {//done
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Firearm Critical Hit Damage",
        "desc": "Explosive ATK +40%, Firearm Critical Hit Damage -30%",
        "stats": {
            // "ExplosiveATK%": 0.40,
            "FirearmATK%": 0.40,
            "FirearmCritDamage": -0.30
        },
        "tags": [],
        "inclusion": ["Launcher"],
        "exclusion": [],
    },
    "Bullet Integration (Launcher)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "Firearm Critical Hit Damage",
        "desc": "Firearm Explosive ATK +13%, Firearm Critical Hit Damage +10%",
        "stats": {
            // "ExplosiveATK%": 0.13,
            "FirearmATK%": 0.13,
            "FirearmCritDamage": 0.10
        },
        "tags": [],
        "inclusion": ["Launcher"],
        "exclusion": [],
    },
    "Action and Reaction (Launcher)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "ATK",
        "desc": "Explosive ATK +61%, Recoil 20%",
        "stats": {
            // "ExplosiveATK%": 0.61,
            "FirearmATK%": 0.61,
            "Recoil": -0.20,
        },
        "tags": [],
        "inclusion": ["Launcher"],
        "exclusion": [],
    },
    "Slow Art (Launcher)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "ATK",
        "desc": "Explosive ATK +44%, Fire Rate -25%",
        "stats": {
            // "ExplosiveATK%": 0.44,
            "FirearmATK%": 0.44,
            "FireRate": 0.25
        },
        "tags": [],
        "inclusion": ["Launcher"],
        "exclusion": [],
    },
    "Anti-Matter Round (Launcher)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "ATK",
        "desc": "Explosive ATK +26%, Firearm Critical Hit Damage +3.5%",
        "stats": {
            // "ExplosiveATK%": 0.26,
            "FirearmATK%": 0.26,
            "FirearmCritDamage": 0.035
        },
        "tags": [],
        "inclusion": ["Launcher"],
        "exclusion": [],
    },
    "Pinpoint Shot (Launcher)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "ATK",
        "desc": "Explosive ATK +26%, Weak Point Damage +2%",
        "stats": {
            // "ExplosiveATK%": 0.26,
            "FirearmATK%": 0.26,
            "WeakPointDamage%": 0.02
        },
        "tags": [],
        "inclusion": ["Launcher"],
        "exclusion": [],
    },
    "Sharp Shooter (Launcher)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 15,
        "category": "ATK",
        "desc": "Explosive ATK +26%, Firearm Critical Hit Rate +1%",
        "stats": {
            // "ExplosiveATK%": 0.26,
            "FirearmATK%": 0.26,
            "FirearmCritRate": 0.01
        },
        "tags": [],
        "inclusion": ["Launcher"],
        "exclusion": [],
    },


    "Rifling Reinforcement (Launcher)": {
        "rarity": "Normal",
        "polarity": "Malachite",
        "type": "High-Power Rounds",
        "cost": 16,
        "category": "",
        "desc": "Explosive ATK +32%",
        "stats": {
            // "ExplosiveATK%": 0.32,
            "FirearmATK%": 0.32,
        },
        "tags": [],
        "inclusion": ["Launcher"],
        "exclusion": [],
    },
    "Increased Radius": {
        "rarity": "Normal",
        "polarity": "Xantic",
        "type": "High-Power Rounds",
        "cost": 9,
        "category": "",
        "desc": "Explosion Radius +32%",
        "stats": {
            "ExplosionRadius%": 0.32
        },
        "tags": [],
        "inclusion": ["Launcher"],
        "exclusion": [],
    },
    "Ammo Optimization": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "High-Power Rounds",
        "cost": 9,
        "category": "Expand Amplification",
        "desc": "Explosion Radius +25.6%, Rounds per Magazine +10%",
        "stats": {
            "ExplosionRadius%": 0.256,
            "MagazineSize": 0.10
        },
        "tags": [],
        "inclusion": ["Launcher"],
        "exclusion": [],
    },




    // "TestMod HighPowered": {
    //     "rarity": "Normal",
    //     "polarity": "Cerulean",
    //     "type": "High-Power Rounds",
    //     "cost": 14,
    //     "category": "",
    //     "desc": "ladeedadeeda remove this later",
    //     "stats": {
    //         // "ReloadSpeed": -0.50,
    //         "FireRate": -0.25
    //     },
    //     "tags": [],
    //     "inclusion": [],
    //     "exclusion": [],
    // },






























    //GOLDS
    // "Defense Master": {//NA
    //     "rarity": "Ultimate",
    //     "polarity": "Rutile",
    //     "type": "High-Power Rounds",
    //     "cost": 16,
    //     "category": "Special Mod",
    //     "desc": "When defeating an enemy, DEF +120% for 10s (Cooldown 15s)",
    //     "stats": {
    //         "DEF%": 1.2
    //     },
    //      "inclusion": [],
    //      "exclusion": [],
    // },
    // "Auto-Reload (Shotgun)": {
    //     "rarity": "Ultimate",
    //     "polarity": "Cerulean",
    //     "type": "High-Power Rounds",
    //     "cost": 10,
    //     "category": "Special Mod",
    //     "desc": "When changing weapons, auto-reloads stored weapon (Cooldown 10s)",
    //     "stats": {},
    //     "tags": [],
    //     "inclusion": ["Shotgun"],
    //     "exclusion": [],
    // },
    // "Quick Freezer": {
    //     "rarity": "Ultimate",
    //     "polarity": "Cerulean",
    //     "type": "High-Power Rounds",
    //     "cost": 10,
    //     "category": "Special Mod",
    //     "desc": "When defeating an enemy inflicted wtih Frostbite, inflicts Frostbite on other enemies within 8m of the target for 0.8s (Cooldown 20s)",
    //     "stats": {},
    // "inclusion": [],
        // "exclusion": [],
    // },
    // "Venom Injector": {
    //     "rarity": "Ultimate",
    //     "polarity": "Rutile",
    //     "type": "High-Power Rounds",
    //     "cost": 10,
    //     "category": "Special Mod",
    //     "desc": "When defeating an enemy inflicted with Poison, inflicts Poison on other enemies within 8m of the target for 5s (Cooldown 20s)",
    //     "stats": {},
    // "inclusion": [],
        // "exclusion": [],
    // },
    // "Remote Generator": {
    //     "rarity": "Ultimate",
    //     "polarity": "Xantic",
    //     "type": "High-Power Rounds",
    //     "cost": 10,
    //     "category": "Special Mod",
    //     "desc": "When defeating an enemy inficted with Electrocution, inflicts Electrocution on other enemies within 8m of the target for 3s (Cooldown 20s)",
    //     "stats": {},
    // "inclusion": [],
        // "exclusion": [],
    // },
    // "Heat Incinerator": {
    //     "rarity": "Ultimate",
    //     "polarity": "Almandine",
    //     "type": "High-Power Rounds",
    //     "cost": 10,
    //     "category": "Special Mod",
    //     "desc": "When defeating an enemy inflicted with Burn, inflicts Burn on other enemies within 8m of the target for 5s (Cooldown 20s)",
    //     "stats": {},
    // "inclusion": [],
        // "exclusion": [],
    // },




    //PURPLES
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
    // "Colon Special Forces": {
    //     "rarity": "Normal",
    //     "polarity": "Malachite",
    //     "type": "High-Power Rounds",
    //     "cost": 11,
    //     "category": "",
    //     "desc": "+20% Movement Speed When Aiming",
    //     "stats": {}//NA for now
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
    // "Expand High-Power Magazine": {
    //     "rarity": "Normal",
    //     "polarity": "Xantic",
    //     "type": "High-Power Rounds",
    //     "cost": 14,
    //     "category": "",
    //     "desc": "Max High-Power Rounds +50%",
    //     "stats": {}//NA for now
    // },
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
}