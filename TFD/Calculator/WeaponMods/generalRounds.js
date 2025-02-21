const generalRounds =  {
   "": {
      "rarity": "Empty",
      "polarity": "Empty",
      "type": "General Rounds",
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
   //gold
   //---------------------------------------------------------------
   //---------------------------------------------------------------
   "Sharp Precision Shot": {
      "rarity": "Ultimate",
      "polarity": "Xantic",
      "type": "General Rounds",
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
      "desc": "Base Fire Rate -20%. While Pulling the trigger, Fire Rate +4%, Recoil -5%, and Firearm ATK +6% every 0.5s (up to 10 stacks)."
   },
   "Lethal Finish": {//done
      "rarity": "Ultimate",
      "polarity": "Almandine",
      "type": "General Rounds",
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
   "Mental Focus": {
      "rarity": "Ultimate",
      "polarity": "Malachite",
      "type": "General Rounds",
      "cost": 16,
      "category": "Special Mod",
      "stats": {
         "FireRate": 0.10,
      },
      "complexBonus": [
         {
            "stats": [
               {"name": "FirearmATK%","value": 0.01,"subStackValue": null},
            ],
            "bonusName": "Mental Focus (General)",
            "oneTimeOrStack": "stack",
            "duration": 2,
            "cooldown": 0,
            "isDurationActive": true,
            "isCooldownActive": false,
            "clearOnReload": true,
            "limit": 150,
            "currentStacks": 0,
            "timePassedEntry": 0,
            "cooldown": 0,
         }
      ],
      "tags": ["FirearmATK%"],
      "inclusion": [],
      "exclusion": [],
      "desc": "Base Fire Rate -10%. When firing a firearm, Firearm ATK +1% for 2s (up to 150 stacks) Removes effect when reloading or changing firearm.<br>Max stacks assumed when selected."
   },
   "Real-life Fighter": {
      "rarity": "Ultimate",
      "polarity": "Malachite",
      "type": "General Rounds",
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
            "bonusName": "Real-life Fighter (General)",
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
      "desc": "Base Accuracy -20%. On dealing Weak Point DMG, Firearm ATK +10% for 5s (up to 10 stacks) But loses 2 stacks per failed Weak Point Attack.<br>Max stacks assumed when selected."
   },
   // "Defense Master": {
   //    "rarity": "Ultimate",
   //    "polarity": "Rutile",
   //    "type": "General Rounds",
   //    "cost": 6,
   //    "category": "Special Mod",
   //    "stats": {},
   //    "tags": [],
   //    "desc": "When defeating an enemy, DEF +128.3% for 10s (Cooldown 25s)"
   // },
   "Firing Fiesta": {
      "rarity": "Ultimate",
      "polarity": "Xantic",
      "type": "General Rounds",
      "cost": 15,
      "category": "Special Mod",
      "stats": {
         // "BulletCost": 1,
      },
      "complexBonus": [
         {
            "stats": [
               {"name": "BulletCostWeapon","value": -1,"subStackValue": null},
            ],
            "bonusName": "Firing Fiesta",
            "oneTimeOrStack": "duration",
            "limit": 1,
            "cooldown": 15,
            "duration": 3,
            "currentStacks": 0,
            "timePassedEntry": 0,
            "isDurationActive": true,
            "isCooldownActive": false,
            "bonusWasApplied": false,
            "conditions": ["isReloaded"],
         }
      ],
      "tags": ["BulletCostWeapon","MagazineSize"],
      "inclusion": [],
      "exclusion": [],
      "desc": "When Reloading, rounds are not consumed for 3s (Cooldown 15s)"
   },
   // "Brisk Walk": {
   //    "rarity": "Ultimate",
   //    "polarity": "Malachite",
   //    "type": "General Rounds",
   //    "cost": 6,
   //    "category": "Special Mod",
   //    "stats": {},
   //    "tags": [],
   //    "desc": "On hit, Movement Speed +10% for 5s (Cooldown 25s)."
   // },
   "Sweeping Squad": {
      "rarity": "Ultimate",
      "polarity": "Malachite",
      "type": "General Rounds",
      "cost": 16,
      "category": "Special Mod",
      "stats": {
         "FirearmATK%": 0.38
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "When defeating an enemy, Firearm ATK +10.6% for 5s at a 100% chance (up to 3 stacks)<br>Max stacks assumed when selected"
   },
   // "Better Weapon Weight": {
   //    "rarity": "Ultimate",
   //    "polarity": "Rutile",
   //    "type": "General Rounds",
   //    "cost": 6,
   //    "category": "Special Mod",
   //    "stats": {},
   //    "tags": [],
   //    "desc": "Weapon Change Speed +25% When changing weapons, DEF +32% for 5s (cooldown 15s)"
   // },
   "Electric Conductor": {
      "rarity": "Ultimate",
      "polarity": "Xantic",
      "type": "General Rounds",
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
   "Toxic Conductor": {
      "rarity": "Ultimate",
      "polarity": "Rutile",
      "type": "General Rounds",
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
   // "Venom Injector": {
   //    "rarity": "Ultimate",
   //    "polarity": "Rutile",
   //    "type": "General Rounds",
   //    "cost": 5,
   //    "category": "Special Mod",
   //    "stats": {},
   //    "tags": [],
   //    "desc": "When defeating an enemy inflicted with Poison, inflicts Poison on other enemies within 3m of the target for 5s (Cooldown 20s)."
   // },
   // "Remote Generator": {
   //    "rarity": "Ultimate",
   //    "polarity": "Xantic",
   //    "type": "General Rounds",
   //    "cost": 5,
   //    "category": "Special Mod",
   //    "stats": {},
   //    "tags": [],
   //    "desc": "When defeating an enemy inflicted with Electrocution, inflicts Electrocution on other enemies within 3 m of the target for 3s (Cooldown 20s)"
   // },
   // "Heat Incinerator": {
   //    "rarity": "Ultimate",
   //    "polarity": "Almandine",
   //    "type": "General Rounds",
   //    "cost": 5,
   //    "category": "Special Mod",
   //    "stats": {},
   //    "tags": [],
   //    "desc": "When defeating an enemy inflicted with Burn, inflicts Burn on other enemies within 3m of the target for 5s (Cooldown 20s)."
   // },
   // "Quick Freezer": {
   //    "rarity": "Ultimate",
   //    "polarity": "Cerulean",
   //    "type": "General Rounds",
   //    "cost": 5,
   //    "category": "Special Mod",
   //    "stats": {},
   //    "tags": [],
   //    "desc": "When defeating an enemy inflicted with Frostbite, inflicts Frostbite on other enemies within 3 m of the target for 0.8s (Cooldown 5s)"
   // },
   "Snowflake Conductor": {
      "rarity": "Ultimate",
      "polarity": "Cerulean",
      "type": "General Rounds",
      "cost": 15,
      "category": "Special Mod",
      "stats": {
         "FirearmATK%OnHit": 0.26
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "When attacking enemies inflicted with Chill, Firearm ATK +26%"
   },
   "Fire Conductor": {
      "rarity": "Ultimate",
      "polarity": "Almandine",
      "type": "General Rounds",
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
   "Overwhelm": {
      "rarity": "Ultimate",
      "polarity": "Malachite",
      "type": "General Rounds",
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
            "currentStacks": -1,
            "timePassedEntry": 0,
            "isDurationActive": true,
            "isCooldownActive": false,
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
      "type": "General Rounds",
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
            "currentStacks": -1,
            "timePassedEntry": 0,
            "isDurationActive": true,
            "isCooldownActive": false,
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
      "type": "General Rounds",
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
            "currentStacks": -1,
            "timePassedEntry": 0,
            "conditions": [],//TODO: add checks to locate sources of burn within the player loadout and make it a condition
            "skipFirstShot": true,
         }
      ],
      "tags": ["ChillATK%BonusCORE"],
      "inclusion": [],
      "exclusion": [],
      "desc": "Upon inflicting the Burn effect, increase Fire ATK by 89.6% for 5 seconds (cooldown 20 seconds)."
   },
   "Electric Circulation": {
      "rarity": "Ultimate",
      "polarity": "Xantic",
      "type": "General Rounds",
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
            "currentStacks": -1,
            "timePassedEntry": 0,
            "isDurationActive": true,
            "isCooldownActive": false,
            "conditions": [],//TODO: add checks to locate sources of burn within the player loadout and make it a condition
            "skipFirstShot": true,
         }
      ],
      "tags": ["ElectricATK%BonusCORE"],
      "inclusion": [],
      "exclusion": [],
      "desc": "Upon inflicting the Burn effect, increase Fire ATK by 89.6% for 5 seconds (cooldown 20 seconds)."
   },
   "Toxic Circulation": {
      "rarity": "Ultimate",
      "polarity": "Rutile",
      "type": "General Rounds",
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
            "currentStacks": -1,
            "timePassedEntry": 0,
            "isDurationActive": true,
            "isCooldownActive": false,
            "conditions": [],//TODO: add checks to locate sources of burn within the player loadout and make it a condition
            "skipFirstShot": true,
         }
      ],
      "tags": ["ToxicATK%BonusCORE"],
      "inclusion": [],
      "exclusion": [],
      "desc": "Upon inflicting the Burn effect, increase Fire ATK by 89.6% for 5 seconds (cooldown 20 seconds)."
   },
   "Ultra-Precision Strike": {
      "rarity": "Ultimate",
      "polarity": "Malachite",
      "type": "General Rounds",
      "cost": 16,
      "category": "Battle Proficiency",
      "stats": {
      },
      "complexBonus": [
         {
            "stats": [
               {"name": "WeakPointDamage%","value": 0.045,"subStackValue": null},
            ],
            "bonusName": "Ultra-Precision Strike",
            "oneTimeOrStack": "duration",
            "limit": 20,
            "cooldown": 15,
            "duration": 5,
            "currentStacks": -1,
            "timePassedEntry": 0,
            "isDurationActive": true,
            "isCooldownActive": false,
            "conditions": ["isWeakpoint"],
            "skipFirstShot": true,
         }
      ],
      "tags": ["WeakPointDamage%CORE"],
      "inclusion": [],
      "exclusion": [],
      "desc": "Successful Advantage Affinity: Weak Point Damage +4.5% for 5s (up to 20 stacks, cooldown 15s). Failed Weak Point Attack during the effect: Firearm ATK -1.95% (up to 20 stacks)."
   },





   //---------------------------------------------------------------
   //---------------------------------------------------------------
   //PURPLES
   //---------------------------------------------------------------
   //---------------------------------------------------------------
   "Bullet Integration": {
      "rarity": "Rare",
      "polarity": "Malachite",
      "type": "Impact Rounds",
      "cost": 16,
      "category": "Firearm Critical Hit Damage",
      "stats": {
         "FirearmATK%": 0.36,
         "FirearmCritDamage": 0.20
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Firearm ATK +36%, Firearm Critical Hit Damage +20%"
   }, 
   "Charge Amplification": {
      "rarity": "Rare",
      "polarity": "Malachite",
      "type": "Impact Rounds",
      "cost": 0,
      "category": "Firearm Critical Hit Damage",
      "stats": {
         "FirearmATK%": 0.67,
         "FirearmCritDamage": -0.40
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Firearm ATK +67%, Firearm Critical Hit Damage -40%"
   }, 
   "Toxic Gunbarrel": {
      "rarity": "Rare",
      "polarity": "Rutile",
      "type": "General Rounds",
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
   "Electric Gunbarrel": {
      "rarity": "Rare",
      "polarity": "Xantic",
      "type": "General Rounds",
      "cost": 16,
      "category": "Attribute ATK",
      "stats": {
         "ElectricATK%Bonus": 0.80,
         "FireRate": 0.25
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Electric ATK +80%, Fire Rate -25%"
   },
   "Refrigerate Gunbarrel": {
      "rarity": "Rare",
      "polarity": "Cerulean",
      "type": "General Rounds",
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
   "Superheated Gunbarrel": {
      "rarity": "Rare",
      "polarity": "Almandine",
      "type": "General Rounds",
      "cost": 16,
      "category": "Attribute ATK",
      "stats": {
         "FireATK%Bonus": 0.80,
         "FireRate": 0.25
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Fire ATK +80%. Fire Rate-25%"
   },
   "Hit Rate Insight": {
      "rarity": "Rare",
      "polarity": "Rutile",
      "type": "General Rounds",
      "cost": 13,
      "category": "Accuracy",
      "stats": {
         "Accuracy": 0.30,
         "FirearmCritRate": 0.015
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Accuracy +30%, Firearm Critical Hit Rate +1.5%"
   },
   "Aiming Compensation": {
      "rarity": "Rare",
      "polarity": "Rutile",
      "type": "General Rounds",
      "cost": 13,
      "category": "Accuracy",
      "stats": {
         "Accuracy": 0.30,
         "FirearmCritDamage": 0.065
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Accuracy +30%, Firearm Critical Hit Damage +6.5%"
   },
   "Weak Point Aiming": {
      "rarity": "Rare",
      "polarity": "Rutile",
      "type": "General Rounds",
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
   "Deadeye": {
      "rarity": "Rare",
      "polarity": "Rutile",
      "type": "General Rounds",
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
   "Reload Insight": {
      "rarity": "Rare",
      "polarity": "Cerulean",
      "type": "General Rounds",
      "cost": 12,
      "category": "Reload Time Modifier",
      "stats": {
         "ReloadSpeed": 0.25,
         "FirearmCritRate": 0.03
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Reload Time Modifier +25%, Firearm Critical Hit Rate +3%"
   },
   "Reload Focus": {
      "rarity": "Rare",
      "polarity": "Cerulean",
      "type": "General Rounds",
      "cost": 12,
      "category": "Reload Time Modifier",
      "stats": {
         "ReloadSpeed": 0.25,
         "FirearmCritDamage": 0.065
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Reload Time Modifier 25%, Firearm Critical Hit Damage +6.5%"
   },
   "Consume Magazines": {
      "rarity": "Rare",
      "polarity": "Cerulean",
      "type": "General Rounds",
      "cost": 12,
      "category": "Reload Time Modifier",
      "stats": {
         "ReloadSpeed": 0.25,
         "WeakPointDamage%": 0.02
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Reload Time Modifier +25%. Weak Point Damage +2%"
   },
   "Reload Expert": {
      "rarity": "Rare",
      "polarity": "Cerulean",
      "type": "General Rounds",
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
   "Insight Stabilizer": {
      "rarity": "Rare",
      "polarity": "Rutile",
      "type": "General Rounds",
      "cost": 13,
      "category": "Recoil",
      "stats": {
         "Recoil": -0.30,
         "FirearmCritRate": 0.015
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Recoil -30%, Firearm Critical hit Rate +1.5%"
   },
   "Concentration Stabilizer": {
      "rarity": "Rare",
      "polarity": "Rutile",
      "type": "General Rounds",
      "cost": 13,
      "category": "Recoil",
      "stats": {
         "Recoil": -0.30,
         "FirearmCritDamage": 0.065
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Recoil -30%, Firearm Critical Hit Damage +6.5%"
   },
   "Fixed Shot": {
      "rarity": "Rare",
      "polarity": "Rutile",
      "type": "General Rounds",
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
   "Stance Stabilizer": {
      "rarity": "Rare",
      "polarity": "Rutile",
      "type": "General Rounds",
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
   "Rapid Fire Insight": {
      "rarity": "Rare",
      "polarity": "Xantic",
      "type": "General Rounds",
      "cost": 12,
      "category": "Fire Rate",
      "stats": {
         "FireRate": -0.20,
         "FirearmCritRate": 0.015
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Fire Rate +20%, Firearm Critical Hit Rate +1.5%"
   },
   "Fire Rate Concentration": {
      "rarity": "Rare",
      "polarity": "Xantic",
      "type": "General Rounds",
      "cost": 12,
      "category": "Fire Rate",
      "stats": {
         "FireRate": -0.20,
         "FirearmCritDamage": 0.065
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Fire Rate +20%, Firearm Critical Hit Damage +6.5%"
   },
   "Weak Point Quick Fire": {
      "rarity": "Rare",
      "polarity": "Xantic",
      "type": "General Rounds",
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
   "Bullet Rain": {
      "rarity": "Rare",
      "polarity": "Xantic",
      "type": "General Rounds",
      "cost": 12,
      "category": "Fire Rate",
      "stats": {
         "FireRate": -0.20,
         "FirearmATK%": 0.01
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Fire Rate +20%. Firearm ATK +1%"
   },
   "Insight Support Ammo": {
      "rarity": "Rare",
      "polarity": "Cerulean",
      "type": "General Rounds",
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
   "Concentrate Support Ammo": {
      "rarity": "Rare",
      "polarity": "Cerulean",
      "type": "General Rounds",
      "cost": 14,
      "category": "Rounds per Magazine",
      "stats": {
         "MagazineSize": 0.30,
         "FirearmCritDamage": 0.065
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Rounds per Magazine +30%, Firearm Critical Hit Damage +6.5%"
   },
   "Maximize Weight Balance": {
      "rarity": "Rare",
      "polarity": "Cerulean",
      "type": "General Rounds",
      "cost": 14,
      "category": "Rounds per Magazine",
      "stats": {
         "MagazineSize": 0.30,
         "WeakPointDamage%": 0.02
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Rounds Per Magazine +30%, Weak Point Damage +2%"
   },
   "Weapon Tuning": {
      "rarity": "Rare",
      "polarity": "Cerulean",
      "type": "General Rounds",
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
   "Insight Focus": {
      "rarity": "Rare",
      "polarity": "Almandine",
      "type": "General Rounds",
      "cost": 11,
      "category": "Firearm Critical Hit Rate",
      "stats": {
         "FirearmCritRate": 0.145,
         "FirearmCritDamage": 0.065
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Firearm Critical Hit Rate +14.5%, Firearm Critical Hit Damage +6.5%"
   },
   "Adventurer": {
      "rarity": "Rare",
      "polarity": "Almandine",
      "type": "General Rounds",
      "cost": 11,
      "category": "Firearm Critical Hit Rate",
      "stats": {
         "FirearmCritRate": 0.0145,
         "WeakPointDamage%": 0.02
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Firearm Critical Hit Rate +14.5%, Weak Point Damage +2%"
   },
   "Marksman": {
      "rarity": "Rare",
      "polarity": "Almandine",
      "type": "General Rounds",
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
   "Target Detection": {
      "rarity": "Rare",
      "polarity": "Almandine",
      "type": "General Rounds",
      "cost": 11,
      "category": "Firearm Critical Hit Damage",
      "stats": {
         "FirearmCritDamage": 0.34,
         "WeakPointDamage%": 0.02
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Firearm Critical Hit Damage +34%, Weak Point Damage +2%"
   },
   "Commando Marksmanship": {
      "rarity": "Rare",
      "polarity": "Almandine",
      "type": "General Rounds",
      "cost": 11,
      "category": "Firearm Critical Hit Damage",
      "stats": {
         "FirearmCritDamage": 0.34,
         "FirearmATK%": 0.01
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Firearm Critical Hit Damage +34%, Firearm ATK +1%"
   },
   "Fatal Critical": {
      "rarity": "Rare",
      "polarity": "Almandine",
      "type": "General Rounds",
      "cost": 11,
      "category": "Firearm Critical Hit Damage",
      "stats": {
         "FirearmCritDamage": 0.34,
         "FirearmCritRate": 0.01
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Firearm Critical Hit Damage +34%, Firearm Critical Hit Rate +1%"
   },
   "Weak Point Detection": {
      "rarity": "Rare",
      "polarity": "Malachite",
      "type": "General Rounds",
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
   "Focus Fire": {
      "rarity": "Rare",
      "polarity": "Malachite",
      "type": "General Rounds",
      "cost": 11,
      "category": "Weak Point Strike",
      "stats": {
         "WeakPointDamage%": 0.20,
         "FirearmCritDamage": 0.065
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Weak Point Damage +20%, Firearm Critical Hit Damage +6.5%"
   },
   "Weak Point Insight": {
      "rarity": "Rare",
      "polarity": "Malachite",
      "type": "General Rounds",
      "cost": 11,
      "category": "Weak Point Strike",
      "stats": {
         "WeakPointDamage%": 0.20,
         "FirearmCritRate": 0.015
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Weak Point Damage +20%, Firearm Critical Hit Rate +1.5%"
   },
   "Anti-matter Round": {
      "rarity": "Rare",
      "polarity": "Malachite",
      "type": "General Rounds",
      "cost": 15,
      "category": "ATK",
      "stats": {
         "FirearmATK%": 0.26,
         "FirearmCritDamage": 0.065
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Firearm ATK +26%, Firearm Critical Hit Damage +6.5%"
   },
   "Pinpoint Shot": {
      "rarity": "Rare",
      "polarity": "Malachite",
      "type": "General Rounds",
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
   "Sharpshooter": {
      "rarity": "Rare",
      "polarity": "Malachite",
      "type": "General Rounds",
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
   "Have Aiming": {
      "rarity": "Rare",
      "polarity": "Malachite",
      "type": "General Rounds",
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
   // "General Rounds Compulsive": {
   //    "rarity": "Rare",
   //    "polarity": "Xantic",
   //    "type": "General Rounds",
   //    "cost": 4,
   //    "category": "",
   //    "stats": {},
   //    "tags": [],
   //    "desc": "Max General Rounds +15%, Movement Speed -5%"
   // },
   "Compulsive Magazine": {
      "rarity": "Rare",
      "polarity": "Cerulean",
      "type": "General Rounds",
      "cost": 15,
      "category": "Rounds per Magazine",
      "stats": {
         "MagazineSize": 0.39,
         "WeakPointDamage%": -0.10
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Rounds per Magazine +39%, Weak Point Damage -10%"
   },
   "Edging Shot": {
      "rarity": "Rare",
      "polarity": "Almandine",
      "type": "General Rounds",
      "cost": 15,
      "category": "Firearm Critical Hit Rate",
      "stats": {
         "FirearmCritRate": 0.43,
         "FirearmATK%": -0.15,
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Firearm Critical Hit Rate +43%, Firearm ATK -15%"
   },
   "Poison Priority": {
      "rarity": "Rare",
      "polarity": "Rutile",
      "type": "General Rounds",
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
   "Electric Priority": {
      "rarity": "Rare",
      "polarity": "Xantic",
      "type": "General Rounds",
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
   "Chill Priority": {
      "rarity": "Rare",
      "polarity": "Cerulean",
      "type": "General Rounds",
      "cost": 16,
      "category": "Attribute ATK ",
      "stats": {
         "ChillATK%Bonus": 0.50,
         "ReloadSpeed": -0.30
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Chill ATK +50%, Reload Time Modifier -30%"
   },
   "Fire Priority": {
      "rarity": "Rare",
      "polarity": "Almandine",
      "type": "General Rounds",
      "cost": 16,
      "category": "Attribute ATK",
      "stats": {
         "FireATK%Bonus": 0.50,
         "ReloadSpeed": -0.30
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Fire ATK +50%, Reload Time Modifier -30%"
   },
   "Concentration Priority": {
      "rarity": "Rare",
      "polarity": "Almandine",
      "type": "General Rounds",
      "cost": 16,
      "category": "Firearm Critical Hit Damage",
      "stats": {
         "FirearmCritDamage": 1.2,
         "ReloadSpeed": -0.30
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Firearm Critical Hit Damage +120%, Reload Time Modifier -30%"
   },
   "Action and Reaction": {
      "rarity": "Rare",
      "polarity": "Malachite",
      "type": "General Rounds",
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
      "type": "General Rounds",
      "cost": 16,
      "category": "ATK",
      "stats": {
         "FirearmATK%": 0.62,
         "FireRate": 0.25
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Firearm ATK +62%, Fire Rate -25%"
   },








   //---------------------------------------------------------------
   //---------------------------------------------------------------  
   //BLUES
   //---------------------------------------------------------------
   //---------------------------------------------------------------

   // "Colon Special Forces": {
   //    "rarity": "Normal",
   //    "polarity": "Malachite",
   //    "type": "General Rounds",
   //    "cost": 6,
   //    "category": "",
   //    "stats": {},
   //    "tags": [],
   //    "desc": "8% Movement Speed When Aiming"
   // },
   // "Normal Impact Rounds Refining": {
   //    "rarity": "Normal",
   //    "polarity": "Xantic",
   //    "type": "General Rounds",
   //    "cost": 5,
   //    "category": "Rounds Conversion",
   //    "stats": {},
   //    "tags": [],
   //    "desc": "When acquiring dropped Impact Rounds, change to 1 General Round for every 1.3 Rounds"
   // },
   // "Normal Special Rounds Refining": {
   //    "rarity": "Normal",
   //    "polarity": "Xantic",
   //    "type": "General Rounds",
   //    "cost": 5,
   //    "category": "Rounds Conversion",
   //    "stats": {},
   //    "tags": [],
   //    "desc": "When acquiring dropped Special Rounds, change to 1 General Round for every 6 Rounds"
   // },
   "Weak Point Sight": {
      "rarity": "Normal",
      "polarity": "Malachite",
      "type": "General Rounds",
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
   "Better Concentration": {
      "rarity": "Normal",
      "polarity": "Almandine",
      "type": "General Rounds",
      "cost": 16,
      "category": "",
      "stats": {
         "FirearmCritDamage": 0.748,


         // "FirearmCritRateBase": 0.29,
         // "FirearmCritRate": 0.20,

         // "FirearmATK%": 0.20,
         // "BaseWeakPointBonus": 0.15,
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Firearm Critical Hit Damage +74.8%"
   },
   "Expand Weapon Charge": {
      "rarity": "Normal",
      "polarity": "Cerulean",
      "type": "General Rounds",
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
   "Recycling Genius": {
      "rarity": "Normal",
      "polarity": "Cerulean",
      "type": "General Rounds",
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
   // "Better Weapon Weight": {
   //    "rarity": "Normal",
   //    "polarity": "Almandine",
   //    "type": "General Rounds",
   //    "cost": 4,
   //    "category": "",
   //    "stats": {},
   //    "tags": [],
   //    "desc": "Weapon Change Speed +8%"
   // },
   // "Expand General Magazine": {
   //    "rarity": "Normal",
   //    "polarity": "Xantic",
   //    "type": "General Rounds",
   //    "cost": 4,
   //    "category": "",
   //    "stats": {},
   //    "tags": [],
   //    "desc": "Max General Rounds +13%"
   // },
   "Chill Enhancement": {
      "rarity": "Normal",
      "polarity": "Cerulean",
      "type": "General Rounds",
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
   //    "rarity": "Normal",
   //    "polarity": "Rutile",
   //    "type": "General Rounds",
   //    "cost": 4,
   //    "category": "",
   //    "stats": {},
   //    "tags": [],
   //    "desc": "Accuracy +11%"
   // },
   "Better Insight": {
      "rarity": "Normal",
      "polarity": "Almandine",
      "type": "General Rounds",
      "cost": 16,
      "category": "",
      "stats": {
         "FirearmCritRate": 0.39
      },
      "tags": [],
      "inclusion": [],
      "exclusion": [],
      "desc": "Firearm Critical Hit Rate +39%"
   },
   "Electric Enhancement": {
      "rarity": "Normal",
      "polarity": "Xantic",
      "type": "General Rounds",
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
   "Toxic Enhancement": {
      "rarity": "Normal",
      "polarity": "Rutile",
      "type": "General Rounds",
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
   "Fire Enhancement": {
      "rarity": "Normal",
      "polarity": "Almandine",
      "type": "General Rounds",
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
   //    "rarity": "Normal",
   //    "polarity": "Rutile",
   //    "type": "General Rounds",
   //    "cost": 4,
   //    "category": "",
   //    "stats": {},
   //    "tags": [],
   //    "desc": "Recoil -11%"
   // },
   "Fire Rate UP": {
      "rarity": "Normal",
      "polarity": "Xantic",
      "type": "General Rounds",
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
      "type": "General Rounds",
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




   //---------------------------------------------------------------
   //---------------------------------------------------------------
   //MODS ADDED LATER
   //---------------------------------------------------------------
   //---------------------------------------------------------------




   // "Core Testing Mod (Throwaway later)": {
   //    "rarity": "Normal",
   //    "polarity": "Malachite",
   //    "type": "General Rounds",
   //    "cost": 16,
   //    "category": "",
   //    "stats": {
   //       // "FireRate": -0.12-.12-.12-.12,

   //       // "ElectricATK": 9560,
   //       "FireATK%Bonus": 0.12,
   //       // "MagazineSize": 0.26,
   //       // "ColossusATK%": 1.5,
   //       // "FirearmATK%": 0.17,
   //       // "FirearmCritDamage": 0.11,
   //       // "WeakPointDamage%": 0.11,
   //    },
   //    "tags": [],
   //    "inclusion": [],
   //    "exclusion": [],
   //    "desc": "If you see this mod on the live site, ping vash in discord to delete it bc he is dumb and forgot to remove it."
   // },
}