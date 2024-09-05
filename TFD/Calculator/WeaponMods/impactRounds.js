const impactRounds = {
    "Defense Master": {
        "rarity": "Ultimate",
        "polarity": "Rutile",
        "type": "Impact Rounds",
        "cost": 6,
        "exclusive": "Special Mod",
        "desc": "When defeating an enemy, DEF +128.3% for 10s (Cooldown 25s)"
    },
    "Lethal Finish": {
        "rarity": "Ultimate",
        "polarity": "Almandine",
        "type": "Impact Rounds",
        "cost": 6,
        "exclusive": "Special Mod",
        "desc": "When firing a firearm, ammo with an additional 30% Critical Hit Rate are fired (Cooldown 15s). When defeating an enemy with the additional attack, module cooldown is -10s However, the firearm's base Weak Point Damage is fixed at 100%"
    },
    "Special Sight": {
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "Impact Rounds",
        "cost": 6,
        "exclusive": "Special Mod",
        "desc": "Movement Speed When Aiming -8%, Weak Point Damage When Aiming 8%"
    },
    "Weak Point Expansion": {
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "Impact Rounds",
        "cost": 6,
        "exclusive": "Special Mod",
        "desc": "On Weak Point Damage +35% (cooldown 15s)"
    },
    "Dopaminergic Activate": {
        "rarity": "Ultimate",
        "polarity": "Almandine",
        "type": "Impact Rounds",
        "cost": 6,
        "exclusive": "Special Mod",
        "desc": "On Weak Point hit, Firearm Critical Hit Rate +8%, Firearm Critical Hit Damage +12% (Cooldown 15s)"
    },
    "Electric Conductor": {
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Impact Rounds",
        "cost": 6,
        "exclusive": "Special Mod",
        "desc": "When attacking enemies inflicted with Electrocution, Firearm ATK +8%"
    },
    "Snowflake Conductor": {
        "rarity": "Ultimate",
        "polarity": "Cerulean",
        "type": "Impact Rounds",
        "cost": 6,
        "exclusive": "Special Mod",
        "desc": "When attacking enemies inflicted with Frostbite, Firearm ATK +8%"
    },
    "Impact Rounds Compulsive": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Impact Rounds",
        "cost": 4,
        "exclusive": "Rounds per Magazine",
        "desc": "Max Impact Rounds +15%, Movement Speed -5%"
    },
    "Special Round Projectile Modification": {
        "rarity": "Normal",
        "polarity": "Xantic",
        "type": "Impact Rounds",
        "cost": 6,
        "exclusive": "Rounds Conversion",
        "desc": "When acquiring dropped Special Rounds, change to 1 Impact Round for every 60 Rounds."
    },
    "General Round Projectile Modification": {
        "rarity": "Normal",
        "polarity": "Xantic",
        "type": "Impact Rounds",
        "cost": 5,
        "exclusive": "Rounds Conversion",
        "desc": "When acquiring dropped General Rounds, change to 1 Impact Round for every 100 Rounds."
    },
    "Expand Impact Magazine": {
        "rarity": "Normal",
        "polarity": "Xantic",
        "type": "Impact Rounds",
        "cost": 4,
        "exclusive": "",
        "desc": "Max Impact Rounds +13%"
    },
    "Quick Freezer ": {
        "rarity": "Ultimate",
        "polarity": "Cerulean",
        "type": "Impact Rounds",
        "cost": 5,
        "exclusive": "Special Mod",
        "desc": "When defeating an enemy inflicted with Frostbite, inflicts Frostbite on other enemies within 3m of the target for 0.8s (Cooldown 5s)"
    },
    "Toxic Conductor ": {
        "rarity": "Ultimate",
        "polarity": "Rutile",
        "type": "Impact Rounds",
        "cost": 6,
        "exclusive": "Special Mod",
        "desc": "When attacking enemies inflicted with Poison, Firearm ATK +8%"
    },
    "Payout": {
        "rarity": "Ultimate",
        "polarity": "Rutile",
        "type": "Impact Rounds",
        "cost": 5,
        "exclusive": "Special Mod",
        "desc": "When landing a Firearm Weak Point Attack rounds are not consumed for 3s (Cooldown 25s)"
    },
    "Real-life Fighter": {
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "Impact Rounds",
        "cost": 6,
        "exclusive": "Special Mod",
        "desc": "Base Accuracy -20%. On dealing Weak Point DMG, Firearm ATK +3% for 5s (up to 10 stacks) But loses 2 stacks per failed Weak Point Attack"
    },
    "Venom Injector": {
        "rarity": "Ultimate",
        "polarity": "Rutile",
        "type": "Impact Rounds",
        "cost": 5,
        "exclusive": "Special Mod",
        "desc": "When defeating an enemy inflicted with Poison, inflicts Poison on other enemies within 3 m of the target for 5s (Cooldown 20s)"
    },
    "Remote Generator": {
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Impact Rounds",
        "cost": 5,
        "exclusive": "Special Mod",
        "desc": "When defeating an enemy inflicted with Electrocution, inflicts Electrocution on other enemies within 3 m of the target for 3s (Cooldown 20s)"
    },
    "Heat Incinerator": {
        "rarity": "Ultimate",
        "polarity": "Almandine",
        "type": "Impact Rounds",
        "cost": 5,
        "exclusive": "Special Mod",
        "desc": "When defeating an enemy inflicted wtih Burn, inflicts Burn on other enemies within 3 m of the target for 5s (Cooldown 20s)"
    },
    "Toxic Gunbarrel": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Impact Rounds",
        "cost": 6,
        "exclusive": "Attribute ATK",
        "desc": "Toxic ATK +28%, Fire Rate -6%"
    },
    "Electric Gunbarrel": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Impact Rounds",
        "cost": 6,
        "exclusive": "Attribute ATK ",
        "desc": "Electric ATK +28%, Fire Rate -6%"
    },
    "Refrigerate Gunbarrel": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Impact Rounds",
        "cost": 6,
        "exclusive": "Attribute ATK",
        "desc": "Chill ATK +28%, Fire Rate -6%"
    },
    "Superheated Gunbarrel": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Impact Rounds",
        "cost": 6,
        "exclusive": "Attribute ATK",
        "desc": "Fire ATK +28%. Fire Rate-6%"
    },
    "Poison Priority": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Impact Rounds",
        "cost": 6,
        "exclusive": "Attribute ATK",
        "desc": "Toxic ATK +13%, Reload Time Modifier -8%"
    },
    "Electric Priority": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Impact Rounds",
        "cost": 6,
        "exclusive": "Attribute ATK",
        "desc": "Electric ATK +13%, Reload Time Modifier -8%"
    },
    "Chill Priority": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Impact Rounds",
        "cost": 6,
        "exclusive": "Attribute ATK ",
        "desc": "Chill ATK +13%, Reload Time Modifier -8%"
    },
    "Fire Priority": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Impact Rounds",
        "cost": 6,
        "exclusive": "Attribute ATK",
        "desc": "Fire ATK +13%, Reload Time Modifire -8%"
    },
    "Weak Point Aiming": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Impact Rounds",
        "cost": 4,
        "exclusive": "Accuracy",
        "desc": "Accuracy +8%, Weak Point Damage +2%"
    },
    "Deadeye": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Impact Rounds",
        "cost": 4,
        "exclusive": "Accuracy",
        "desc": "Accuracy +8%, Firearm ATK +1%"
    },
    "Reload Concentration": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Impact Rounds",
        "cost": 5,
        "exclusive": "Reload Time Modifier",
        "desc": "Reload Time Modifier +6%, Firearm Critical Hit Damage +4%"
    },
    "Consume Magazines": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Impact Rounds",
        "cost": 5,
        "exclusive": "Reload Time Modifier",
        "desc": "Reload Time Modifier +6%. Weak Point Damage +2%"
    },
    "Reload Expert": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Impact Rounds",
        "cost": 5,
        "exclusive": "Reload Time Modifier",
        "desc": "Reload Time Modifier +6%, Firearm ATK +1%"
    },
    "Insight Stabilizer": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Impact Rounds",
        "cost": 4,
        "exclusive": "Recoil",
        "desc": "Recoil -8%, Firearm Critical hit Rate +1.5%"
    },
    "Fixed Shot": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Impact Rounds",
        "cost": 4,
        "exclusive": "Recoil",
        "desc": "Recoil -8%, Weak Point Damage +2%"
    },
    "Stance Stabilizer": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Impact Rounds",
        "cost": 4,
        "exclusive": "Recoil",
        "desc": "Recoil -8%, Firearm ATK +1%"
    },
    "Fire Rate Insight": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Impact Rounds",
        "cost": 5,
        "exclusive": "Fire Rate",
        "desc": "Fire Rate +8%, Firearm Critical Hit Rate +1.5%"
    },
    "Fire Rate Concentration": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Impact Rounds",
        "cost": 5,
        "exclusive": "Fire Rate",
        "desc": "Fire Rate +8%, Firearm Critical Hit Damage +4%"
    },
    "Weak Point Quick Fire": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Impact Rounds",
        "cost": 5,
        "exclusive": "Fire Rate",
        "desc": "Fire Rate +8%, Weak Point Damage =2%"
    },
    "Bullet Rain": {
          "rarity": "Rare",
          "polarity": "Xantic",
          "type": "Impact Rounds",
          "cost": 5,
          "exclusive": "Fire Rate",
          "desc": "Fire Rate +8%. Firearm ATK +1%"
       },
       "Magazine Compulsive": {
          "rarity": "Rare",
          "polarity": "Cerulean",
          "type": "Impact Rounds",
          "cost": 5,
          "exclusive": "Firearm Critical Hit Rate",
          "desc": "Rounds per Magazine +10%, Weak Point Damage -3%"
       },
       "Insight Support Ammo": {
          "rarity": "Rare",
          "polarity": "Cerulean",
          "type": "Impact Rounds",
          "cost": 5,
          "exclusive": "Rounds per Magazine",
          "desc": "Rounds per Magazine +8%, Firearm Critical Hit Rate +1.5%"
       },
       "Concentrate Support Ammo": {
          "rarity": "Rare",
          "polarity": "Cerulean",
          "type": "Impact Rounds",
          "cost": 5,
          "exclusive": "Rounds per Magazine",
          "desc": "Rounds per Magazine +8%, Firearm Critical Hit Damage +4%"
       },
       "Maximize Weight Balance": {
          "rarity": "Rare",
          "polarity": "Cerulean",
          "type": "Impact Rounds",
          "cost": 5,
          "exclusive": "Rounds per Magazine",
          "desc": "Rounds Per Magazine +8%, Weak Point Damage +2%"
       },
       "Weapon Tuning": {
          "rarity": "Rare",
          "polarity": "Cerulean",
          "type": "Impact Rounds",
          "cost": 5,
          "exclusive": "Rounds per Magazine",
          "desc": "Rounds per Magazine +8%, Firearm ATK +1%"
       },
       "Edging Shot": {
          "rarity": "Rare",
          "polarity": "Almandine",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Attribute ATK",
          "desc": "Firearm Critical Hit Rate +8%, Firearm ATK -4%"
       },
       "Insight Concentration": {
          "rarity": "Rare",
          "polarity": "Almandine",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Firearm Critical Hit Rate",
          "desc": "Firearm Critical Hit Rate +5%, Firearm Critical Hit Damage +4%"
       },
       "Adventurer": {
          "rarity": "Rare",
          "polarity": "Almandine",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Firearm Critical Hit Rate",
          "desc": "Firearm Critical Hit Rate +5%, Weak Point Damage +2%"
       },
       "Marksman": {
          "rarity": "Rare",
          "polarity": "Almandine",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Firearm Critical Hit Rate",
          "desc": "Firearm Critical Hit Rate +5%, Firearm ATK +1%"
       },
       "Concentration Priority": {
          "rarity": "Rare",
          "polarity": "Almandine",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Firearm Critical Hit Damage",
          "desc": "Firearm Critical Hit Damage +8%, Reload Time Modifier -8%"
       },
       "Target Detection": {
          "rarity": "Rare",
          "polarity": "Almandine",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Firearm Critical Hit Damage",
          "desc": "Firearm Critical Hit Damage +5%, Weak Point Damage +2%"
       },
       "Commando Marksmanship": {
          "rarity": "Rare",
          "polarity": "Almandine",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Firearm Critical Hit Damage",
          "desc": "Firearm Critical Hit Damage +5%, Firearm ATK +1%"
       },
       "Fatal Critical": {
          "rarity": "Rare",
          "polarity": "Almandine",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Firearm Critical Hit Damage",
          "desc": "Firearm Critical Hit Damage +5%, Firearm Critical Hit Rate +1.5%"
       },
       "Weak Point Sight": {
          "rarity": "Normal",
          "polarity": "Malachite",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "",
          "desc": "Weak Point Damage +9%"
       },
       "Weak Point Detection": {
          "rarity": "Rare",
          "polarity": "Malachite",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Weak Point Strike",
          "desc": "Weak Point Damage +5%, Firearm ATK +1%"
       },
       "Concentrated Fire": {
          "rarity": "Rare",
          "polarity": "Malachite",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Weak Point Strike",
          "desc": "Weak Point Damage +5%, Firearm Critical Hit Damage +4%"
       },
       "Weak Point Insight": {
          "rarity": "Rare",
          "polarity": "Malachite",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Weak Point Strike",
          "desc": "Weak Point Damage +5%, Firearm Critical Hit Rate +1.5%"
       },
       "Action and Reaction": {
          "rarity": "Rare",
          "polarity": "Malachite",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "ATK",
          "desc": "Firearm ATK +x%, Recoil +x%"
       },
       "Slow Art": {
          "rarity": "Rare",
          "polarity": "Malachite",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "ATK",
          "desc": "Firearm ATK +16, Fire Rate -6%"
       },
       "Anti-Matter Round": {
          "rarity": "Rare",
          "polarity": "Malachite",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "ATK",
          "desc": "Firearm ATK +8%, Firearm Critical Hit Damage +4%"
       },
       "Pinpoint Shot": {
          "rarity": "Rare",
          "polarity": "Malachite",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "ATK",
          "desc": "Firearm ATK +8%, Weak Point Damage +2%"
       },
       "Sharpshooter": {
          "rarity": "Rare",
          "polarity": "Malachite",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "ATK",
          "desc": "Firearm ATK +8%, Firearm Critical Hit Rate +1.5%"
       },
       "Colon Special Forces": {
          "rarity": "Normal",
          "polarity": "Malachite",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "",
          "desc": "5% Movement Speed When Aiming"
       },
       "Better Concentration": {
          "rarity": "Normal",
          "polarity": "Almandine",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "",
          "desc": "Firearm Critical Hit Damage +8%"
       },
       "Expand Weapon Charge": {
          "rarity": "Normal",
          "polarity": "Malachite",
          "type": "Impact Rounds",
          "cost": 5,
          "exclusive": "",
          "desc": "Rounds per Magazine +12%"
       },
       "Recycling Genius": {
          "rarity": "Normal",
          "polarity": "Cerulean",
          "type": "Impact Rounds",
          "cost": 5,
          "exclusive": "",
          "desc": "Reload Time Modifier +8%"
       },
       "Better Weapon Weight": {
          "rarity": "Ultimate",
          "polarity": "Rutile",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Special Mod",
          "desc": "Weapon Change Speed +25% When changing weapons, DEF +32% for 5s (cooldown 15s)"
       },
       "Better Weapon Weight": {
          "rarity": "Normal",
          "polarity": "Almandine",
          "type": "Impact Rounds",
          "cost": 4,
          "exclusive": "",
          "desc": "Weapon Change Speed +6%"
       },
       "Chill Enhancement": {
          "rarity": "Normal",
          "polarity": "Cerulean",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Bullet Improvement",
          "desc": "Adds Chill ATK equal to 8% of Firearm ATK"
       },
       "Hawk-Eye": {
          "rarity": "Normal",
          "polarity": "Rutile",
          "type": "Impact Rounds",
          "cost": 4,
          "exclusive": "",
          "desc": "Accuracy +11%"
       },
       "Better Insight": {
          "rarity": "Normal",
          "polarity": "Almandine",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "",
          "desc": "Firearm Critical Hit Rate +9%"
       },
       "Electric Enhancement": {
          "rarity": "Normal",
          "polarity": "Xantic",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Bullet Improvement",
          "desc": "Adds Electric ATK equal to 8% of Firearm ATK"
       },
       "Toxic Enhancement": {
          "rarity": "Normal",
          "polarity": "Rutile",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Bullet Improvement",
          "desc": "Adds Toxic ATK equal to 8% of Firearm ATK"
       },
       "Fire Enhancement": {
          "rarity": "Normal",
          "polarity": "Almandine",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Bullet Improvement",
          "desc": "Adds Fire ATK equal to 8% of Firearm ATK"
       },
       "Vibration Absorption": {
          "rarity": "Normal",
          "polarity": "Rutile",
          "type": "Impact Rounds",
          "cost": 4,
          "exclusive": "",
          "desc": "Recoil -11%"
       },
       "Fire Rate UP": {
          "rarity": "Normal",
          "polarity": "Xantic",
          "type": "Impact Rounds",
          "cost": 5,
          "exclusive": "Fire Rate",
          "desc": "Fire Rate +6%"
       },
       "Rifling Reinforcement": {
          "rarity": "Normal",
          "polarity": "Malachite",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "",
          "desc": "Firearm ATK +12%"
       },
       "Mental Focus": {
          "rarity": "Ultimate",
          "polarity": "Malachite",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Special Mod",
          "desc": "Base Fire Rate -10%. When firing a firearm, Firearm ATK +0.8% for 2s (up to 30 stacks) Removes effect when reloading or changing firearm"
       },
       "Sharp Precision Shot": {
          "rarity": "Ultimate",
          "polarity": "Xantic",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Special Mod",
          "desc": "Base Fire Rate -20%. While Pulling the trigger, Fire Rate +4%, Recoil -5%, and Firearm ATK "
       },
       "Hardline Suppression": {
          "rarity": "Ultimate",
          "polarity": "Rutile",
          "type": "Impact Rounds",
          "cost": 11,
          "exclusive": "Special Mod",
          "desc": "On Weak Point hit, 18% Chance to Knockdown target"
       },
       "Fire Conductor": {
          "rarity": "Ultimate",
          "polarity": "Almandine",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Special Mod",
          "desc": "When attacking enemies inflicted with Burn, Firearm ATK +8%"
       },
       "Hit Rate Insight": {
          "rarity": "Rare",
          "polarity": "Rutile",
          "type": "Impact Rounds",
          "cost": 4,
          "exclusive": "Accuracy",
          "desc": "Accuracy +8%, Firearm Critical Hit Rate +1.5%"
       },
       "Aiming Compensation": {
          "rarity": "Rare",
          "polarity": "Rutile",
          "type": "Impact Rounds",
          "cost": 4,
          "exclusive": "Accuracy",
          "desc": "Accuracy +8%, Firearm Critical Hit Damage +4%"
       },
       "Reload Insight": {
          "rarity": "Rare",
          "polarity": "Cerulean",
          "type": "Impact Rounds",
          "cost": 5,
          "exclusive": "Reload Time Modifier",
          "desc": "Reload Time Modifier +6%, Firearm Critical Hit Rate +1.5%"
       },
       "Concentration Stabilizer": {
          "rarity": "Rare",
          "polarity": "Rutile",
          "type": "Impact Rounds",
          "cost": 4,
          "exclusive": "Recoil",
          "desc": "Recoil -8%, Firearm Critical Hit Damage +4%"
       },
       "Have Aiming": {
          "rarity": "Rare",
          "polarity": "Malachite",
          "type": "Impact Rounds",
          "cost": 6,
          "exclusive": "Weak Point Strike",
          "desc": "Unknown--- Devs have not completed this one"
       },
}