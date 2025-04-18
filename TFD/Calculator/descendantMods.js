const rarityColors = {
    "Transcendant": "#99483c",
    "Ultimate": "#938557",
    "Rare": "#845f93",
    "Normal": "#467592",
    "Empty": "#434343",
}
const polarityImages = {
    "Malachite": "/TFD/TFDImages/Polarities/Icon_RunesCapacity_Mini_003.png",
    "Cerulean": "/TFD/TFDImages/Polarities/Icon_RunesCapacity_Mini_001.png",
    "Xantic": "/TFD/TFDImages/Polarities/Icon_RunesCapacity_Mini_004.png",
    "Almandine": "/TFD/TFDImages/Polarities/Icon_RunesCapacity_Mini_002.png",
    "Rutile": "/TFD/TFDImages/Polarities/Icon_RunesCapacity_Mini_005.png",
    "Empty": "/TFD/TFDImages/Polarities/Icon_RunesCapacity_Mini_000_Picto.png",
}

const modData = {
    "": {
        "rarity": "Empty",
        "polarity": "Empty",
        "type": "Descendant",
        "cost": 0,
        "category": "",
        "desc": "Select a mod in the dropdown above.",
        "stats": {},
        "tags": [],
        "inclusion": [],
        "exclusion": [],
        "usesConditional": {},
    },
    "Shield Collector": {
        "rarity": "Ultimate",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 15,
        "category": "Support Tech",
        "desc": "When defeating an enemy, instantly recovers 6.3% of Max Shield. (Cooldown 2s)",
        "stats": {},
        "tags": [],
        "inclusion": [],
        "exclusion": [],
        "usesConditional": {},
    },
    "Arche Concretion": {
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 12,
        "category": "Support Tech",
        "desc": "When using skill, grants 1 stack of Arche Concretion for 20s, when using Enhanced Skill, grants 10 stacks (up to 30 stacks). Arche concreation reduces all Attribute power by -22% excluding Non-Attribute ATK, Movement Speed, and Firearm ATK, regardless of the number of stacks. Per stack granted, DEF +2.1% and MP +1.3%. However, when using Roll or Grappling Hook, all stacks will be removed.",
        "stats": {
            "PowerRatioChill": -0.22,
            "PowerRatioElectric": -0.22,
            "PowerRatioFire": -0.22,
            "PowerRatioToxic": -0.22,
            "FirearmATK%": -0.22,
            "MovementSpeedMod": -0.22,
            "DEF%": 0.63,
            "MP%": 0.39
            //this one is kinda dumb. It means it reduces all power ratios excluding NA, and then it DOES reduce everything that comes after in the description, but only once even if max stacks or 1 stack.
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
        "usesConditional": {},
    },
    "Final Wish": {
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 12,
        "category": "Arche Tech",
        "desc": "When attacking enemies with 4th skill, Skill Cost -37%, Skill Power -40% for 10s.",
        "stats": {
            "SkillCost": -0.37,
            "PowerRatioBase": -0.40
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
        "usesConditional": {},
    },
    "Narcissism": {
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 12,
        "category": "Support Tech",
        "desc": "While Sprinting, Skill Cost -3.3% and Skill Cooldown +3.3% every second (up to 10 stacks).",
        "stats": {
            "SkillCost": -0.33,
            "SkillCooldown": 0.33,
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
        "usesConditional": {},
    },
    "Continuous Exaltation": {//It says +- for w/e reason but it's a negative power ratio base
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 12,
        "category": "Arche Tech",
        "desc": "On Charged Sub Attack, grants the Exalt effect for 20s. At 5 stacks of the Exalt effect, changes to the Passion effect. Active Skill Cooldown -85% and Skill Power -25% once for 10s.",
        "stats": {
            "PowerRatioBase": -0.25
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
        "usesConditional": {},
    },
    "Lethal Infection": {
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 13,
        "category": "Arche Tech",
        "desc": "When landing a Firearm Critical Hit on an enemy inflicted with a debuff, Skill Power Modifier +2.5% for 5s (up to 10 stacks).",
        "stats": {
            "PowerModifierBase": 0.25
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
        "usesConditional": {},
    },
    "Dangerous Ambush (No Target)": {//this is a ratio base bonus, not a reactor bonus
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 13,
        "category": "Arche Tech",
        "desc": "When landing a Skill Attack while the enemy is not targeting you, Skill Power +24.9%. On Skill Attack against an immobilized enemy, Skill Power +49.8%.",
        "stats": {
            "PowerRatioBase": 0.249//initially added together accidentally to 0.747, but it is 24.9 OR 49.8
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Dangerous Ambush (Immobile)": {//this is a ratio base bonus, not a reactor bonus
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 13,
        "category": "Arche Tech",
        "desc": "When landing a Skill Attack while the enemy is not targeting you, Skill Power +24.9%. On Skill Attack against an immobilized enemy, Skill Power +49.8%.",
        "stats": {
            "PowerRatioBase": 0.498//this gets modified by the immobile uptime slider under the enemy tab
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Weaken Recovery": {
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 9,
        "category": "",
        "desc": "On Sub Attack, HP Recovery -50% for 10s at a 100% chance (Cooldown 10s).",
        "stats": {
            "EnemyRecovery": -0.50
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Multitalented (Dimension)": {
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 11,
        "category": "Arche Tech",
        "desc": "When using the Dimension Active Skill, Skill Cooldown -20.5% for 5s.",
        "stats": {
            "SkillCooldown": -0.205,
        },
        "tags": [],
        "inclusion": ["Dimension"],
        "exclusion": [],
    },
    "Multitalented (Fusion)": {
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 11,
        "category": "Arche Tech",
        "desc": "When using the Fusion Active Skill, Skill Cost -6.1% and Duration +6.1% for 5s.",
        "stats": {
            "SkillCost": -0.061,
            "SkillDuration": 0.061,
        },
        "tags": [],
        "inclusion": ["Fusion"],
        "exclusion": [],
    },
    "Multitalented (Tech)": {
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 11,
        "category": "Arche Tech",
        "desc": "When using the Tech Active Skill, Skill Range and Power Modifier +15% for 5s.",
        "stats": {
            "SkillRange": 0.15,
            "PowerModifierBase": 0.15,
        },
        "tags": [],
        "inclusion": ["Tech"],
        "exclusion": [],
    },
    "Multitalented (Singular)": {
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 11,
        "category": "Arche Tech",
        "desc": "When using the Singular Active Skill, All Attribute Power Modifiers +30% for 5s.",
        "stats": {
            "PowerModifierElectric": 0.30,
            "PowerModifierToxic": 0.30,
            "PowerModifierFire": 0.30,
            "PowerModifierChill": 0.30,
            "PowerModifierNonAttribute": 0.30
        },
        "tags": [],
        "inclusion": ["Singular"],
        "exclusion": [],
    },
    "Passionate Sponsor": {
        "rarity": "Ultimate",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 11,
        "category": "Arche Tech",
        "desc": "When buffing or recovering an ally, Firearm ATK and Skil Power Modifier +7.5% each time for 10s (up to 10 stacks).",
        "stats": {
            "PowerModifierBase": 0.75,
            "FirearmATK%": 0.75
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Gladiator": {
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 10,
        "category": "Support Tech",
        "desc": "When defeating enemies with a Charged Sub Attack, -100% remaining Cooldown of the Sub Attack.",
        "stats": {},
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Technique Manual": {//seems to ignore DR, not boosted by any boosts, just a plain %HP as a separate instance of dmg
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "Arche Tech",
        "desc": "Landing a skill attack deals 46% of own Max HP as additional damage to the target (Cooldown 8s against the same target).",
        "stats": {},//could be pretty spicy on ajax but probably not. Bad mod
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Decimator": {
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 11,
        "category": "Arche Tech",
        "desc": "When defeating enemies inflicted with debuffs, Skill Power Modifier +5% per defeated enemy for 10s (up to 10 stacks).",
        "stats": {
            "PowerModifierBase": 0.50
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Conditional Recharge": {
        "rarity": "Ultimate",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 11,
        "category": "Support Tech",
        "desc": "When using skill, consumes 17.5% of Max HP and recovers 12.2% of Max Shield (However, neither happens when HP is 1 or lower).",
        "stats": {},
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Preemptive Strike": {//doesn't do anything...? at least not in the lab, maybe bc they can't take dmg so it doesn't count
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 6,
        "category": "Arche Tech",
        "desc": "On Skill Attack upon enemies with max HP, deals 8.5% of the skill damage incurred as additional damage on the target.",
        "stats": {},
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Overwhelming HP": {//not using a custom function, but it might be prudent to add one later. Rn it is just using these flags to tell the calcs.getXYZ how to do the math
        "rarity": "Ultimate",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 6,
        "category": "Final Hand",
        "desc": "Fixes Max Shield at 1, and increases Max HP by 19.8% of Max Shield. The increased HP can be further increased by other buffs.",
        "stats": {
            "isShieldSetTo1": 1,
            "boostHPFromShield": 1
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
        "conversionRate": 0.198
    },
    "Overwhelming DEF": {//not using a custom function, but it might be prudent to add one later. Rn it is just using these flags to tell the calcs.getXYZ how to do the math
        "rarity": "Ultimate",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 6,
        "category": "Final Hand",
        "desc": "Fixes Max HP at 1, and increases Max DEF by 24.7% of Max HP. The increased DEF can be further increased by other buffs.",
        "stats": {
            "isHPSetTo1": 1,
            "boostDEFFromHP": 1
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
        "conversionRate": 0.247
    },
    "Overwhelming Shield": {//not using a custom function, but it might be prudent to add one later. Rn it is just using these flags to tell the calcs.getXYZ how to do the math
        "rarity": "Ultimate",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 6,
        "category": "Final Hand",
        "desc": "Fixes Max HP at 1, and increases Max Shield by 26.8% of Max HP. The increased Shield can be further increased by other buffs.",
        "stats": {
            "isHPSetTo1": 1,
            "boostShieldFromHP": 1
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
        "conversionRate": 0.268
    },
    "Heat Release": {
        "rarity": "Ultimate",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "",
        "desc": "Burn Immunity. Fire Resistance +29%.",
        "stats": {
            "ResistanceFire%": 0.29,
            "ImmunityBurn": 1,
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Perfect Antivenom": {
        "rarity": "Ultimate",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "",
        "desc": "Poison Immunity. Toxin Resistance +29%.",
        "stats": {
            "ResistanceToxin%": 0.29,
            "ImmunityPoison": 1,
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Veteran's Tactics": {
        "rarity": "Ultimate",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 5,
        "category": "Support Tech",
        "desc": "When defeating an enemy, resets the cooldown of a random skill at a 2.1% chance.",
        "stats": {},
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Antifreeze Solution": {
        "rarity": "Ultimate",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "",
        "desc": "Frostbite Immunity. Chill Resistance +29%.",
        "stats": {
            "ResistanceChill%": 0.29,
            "ImmunityFrostbite": 1,
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Insulated Conductor": {
        "rarity": "Ultimate",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "",
        "desc": "Electrocution Immunity. Electric Resistance +19%.",
        "stats": {
            "ResistanceElectricity%": 0.29,
            "ImmunityElectrocution": 1,
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "MP Collector": {
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 11,
        "category": "Support Tech",
        "desc": "When defeating an enemy, instantly recovers 12.2% of Max MP at 17% chance.",
        "stats": {},
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Potent Collector": {
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 11,
        "category": "Support Tech",
        "desc": "When defeating an enemy, instantly recovers 12.2% of Custom Resources at a 17% chance. Characters with Custom Resources: -Ajax -Bunny -Gley -Kyle",
        "stats": {},
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "An Iron Will": {
        "rarity": "Ultimate",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 16,
        "category": "Support Tech",
        "desc": "When Shield is at 0%, DEF +128.3%.",
        "stats": {
            "DEF%": 1.283
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Accelerated Driveshaft": {
        "rarity": "Ultimate",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 10,
        "category": "Arche Tech",
        "desc": "When Rolling, Fire Rate +20% for 5s at a 15% chance.<br><br>The chance is not calculated, whenever used it assumes the full bonus for the 5s duration.",
        "stats": {
        },
        "complexBonus": [
            {
                "stats": [
                    {"name": "FireRate","value": -0.20,"subStackValue": null},
                ],
                "bonusName": "Accelerated Driveshaft",
                "oneTimeOrStack": "duration",
                "limit": 1,
                "cooldown": 999,
                "duration": 5,
                "currentStacks": 0,
                "timePassedEntry": 0,
                "isDurationActive": true,
                "isCooldownActive": false,
                "conditions": [],
                "skipFirstShot": false,
            }
        ],
        "tags": ["FireRate"],
        "inclusion": [],
        "exclusion": [],
    },
    "Improve Driveshaft": {
        "rarity": "Ultimate",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 13,
        "category": "Arche Tech",
        "desc": "When Rolling, Firearm ATK +26% for 5s at a 15% chance.<br><br>The chance is not calculated, whenever used it assumes the full bonus for the 5s duration.",
        "stats": {
        },
        "complexBonus": [
            {
                "stats": [
                    {"name": "FirearmATK%","value": 0.26,"subStackValue": null},
                ],
                "bonusName": "Improve Driveshaft",
                "oneTimeOrStack": "duration",
                "limit": 1,
                "cooldown": 999,
                "duration": 5,
                "currentStacks": 0,
                "timePassedEntry": 0,
                "isDurationActive": true,
                "isCooldownActive": false,
                "conditions": [],
                "skipFirstShot": false,
            }
        ],
        "tags": ["FirearmATK%"],
        "inclusion": [],
        "exclusion": [],
    },
    "Midair Fire": {
        "rarity": "Ultimate",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 7,
        "category": "",
        "desc": "While Jumping, Accuracy +32.1%, DEF -32.1%.",
        "stats": {
            "DEF%": -0.321,
            "Accuracy": 0.321
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "MP Plunder": {
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 11,
        "category": "",
        "desc": "When defeating an enemy with a Charged Sub Attack, recovers 12.2% MP at a 34% chance.",
        "stats": {},
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "HP Plunder": {
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 11,
        "category": "",
        "desc": "When defeating an enemy with a Charged Sub Attack, recovers 9% HP at a 34% chance.",
        "stats": {},
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Iron Knuckle": {
        "rarity": "Ultimate",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 9,
        "category": "",
        "desc": "On Charged Sub Attack, Knockdown enemies (Cooldown 2.2s).",
        "stats": {},
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Burst Absorption": {
        "rarity": "Ultimate",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 16,
        "category": "",
        "desc": "On Charged Sub Attack, DEF +128.3% buff for 5s.",
        "stats": {
            "DEF%": 1.283
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Absolute Curse": {
        "rarity": "Ultimate",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 4,
        "category": "",
        "desc": "Upon Colossus Part removal, inflicts Dispel which removes buffs on Colossi.",
        "stats": {},
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Mass Purification": {
        "rarity": "Ultimate",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 4,
        "category": "",
        "desc": "Upon Colossus Part destruction, grants Purification which removes debuffs to players within a 70m radius. (Cooldown 30s)",
        "stats": {},
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Walk a Tightrope": {
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 15,
        "category": "Arche Tech",
        "desc": "When HP is 50% or lower, Skill Power Modifier +30%, Firearm ATK +30%.",
        "stats": {
            "PowerModifierBase": 0.30,
            "FirearmATK%": 0.30
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "HP Collector": {
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 15,
        "category": "Support Tech",
        "desc": "When defeating an enemy, instantly recovers 9% of Max HP (Cooldown 2s).",
        "stats": {},
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Non-Attribute Syncytium": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 11,
        "category": "Fortitude",
        "desc": "Critical Hit Resistance +15.1%, Non-Attribute Skill Power +10.2%.",
        "stats": {
            "CritResist": 0.151,
            "PowerRatioNonAttribute": 0.102
        },
        "tags": [],
        "inclusion": ["Non-Attribute"],
        "exclusion": [],
    },
    "Electronic Syncytium": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 11,
        "category": "Fortitude",
        "desc": "Critical Hit Resistance +15.1%, Electric Skill Power +10.2%.",
        "stats": {
            "CritResist": 0.151,
            "PowerRatioElectric": 0.102
        },
        "tags": [],
        "inclusion": ["Electric"],
        "exclusion": [],
    },
    "Venom Syncytium": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 11,
        "category": "Fortitude",
        "desc": "Critical Hit Resistance +15.1%, Toxic Skill Power +10.2%.",
        "stats": {
            "CritResist": 0.151,
            "PowerRatioToxic": 0.102
        },
        "tags": [],
        "inclusion": ["Toxic"],
        "exclusion": [],
    },
    "Glacial Syncytium": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 11,
        "category": "Fortitude",
        "desc": "Critical Hit Resistance +15.1%, Chill Skill Power +10.2%.",
        "stats": {
            "CritResist": 0.151,
            "PowerRatioChill": 0.102
        },
        "tags": [],
        "inclusion": ["Chill"],
        "exclusion": [],
    },
    "Fire Syncytium": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 11,
        "category": "Fortitude",
        "desc": "Critical Hit Resistance +15.1%, Fire Skill Power +10.2%.",
        "stats": {
            "CritResist": 0.151,
            "PowerRatioFire": 0.102
        },
        "tags": [],
        "inclusion": ["Fire"],
        "exclusion": [],
    },
    "Safe Recovery": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 9,
        "category": "Medical",
        "desc": "HP Heal +17.2%, Incoming Final DMG -4.5%.",
        "stats": {
            "HPHeal": 0.172,
            "IncomingDamage": -0.045
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Amplification Control": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 15,
        "category": "Range",
        "desc": "Skill Effect Range +51.7%, Max Shield +36.5%.",
        "stats": {
            "SkillRange": 0.517,
            "Shield%": 0.365
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Autoimmunity": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 11,
        "category": "Guard",
        "desc": "Incoming DMG Modifier -10.5%, HP Recovery +7.4%.",
        "stats": {
            "IncomingDamage": -0.105,
            "HPRecovery": 0.074
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Psychological Victory": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 11,
        "category": "Guard",
        "desc": "Incoming DMG Modifier -10.5%, MP Recovery +13.8%.",
        "stats": {
            "IncomingDamage": -0.105,
            "MPRecovery": 0.074
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Weighing the Scales": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 16,
        "category": "Shield",
        "desc": "Max Shield +85.1%, Skill Cost -3.7%.",
        "stats": {
            "Shield%": 0.851,
            "SkillCost": -0.037
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Battle of Stamina": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 16,
        "category": "HP",
        "desc": "Max HP +122.3%, Skill Duration +8.8%.",
        "stats": {
            "HP%": 1.223,
            "SkillDuration": 0.088
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Iron Defense": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 16,
        "category": "Defense",
        "desc": "DEF +89.8%, Skill Power Modifier +12.7%.",
        "stats": {
            "DEF%": 0.898,
            "PowerModifierBase": 0.127
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Spear and Shield": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 6,
        "category": "Defense",
        "desc": "DEF +89.8%, Skill Power +8.1%.",
        "stats": {
            "DEF%": 0.898,
            "PowerRatioBase": 0.081
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Agony": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 10,
        "category": "MP",
        "desc": "Max MP +8.5%, DEF +38.5%.",
        "stats": {
            "MP%": 0.085,
            "DEF%": 0.385
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Second Wind": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 11,
        "category": "Medical",
        "desc": "HP Heal +21.5%, Skill Power -20.3%.",
        "stats": {
            "HPHeal": 0.215,
            "PowerRatioBase": -0.203
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Front Lines": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "Strike",
        "desc": "Skill Critical Hit Damage +64.6%, Skill Critical Hit Rate +27.7%.",
        "stats": {
            "SkillCritDamage": 0.646,
            "SkillCritRate": 0.277
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Emergency Measures": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "Luck",
        "desc": "Skill Critical Hit Rate +64.6%, Skill Critical Hit Damage +27.7%.",
        "stats": {
            "SkillCritRate": 0.646,
            "SkillCritDamage": 0.277
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Frugal Mindset": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 10,
        "category": "Resource",
        "desc": "Skill Cost -8.5%, Skill Effect Range +22.2%.",
        "stats": {
            "SkillRange": 0.225,
            "SkillCost": -0.085
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "An Outstanding Investment": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 12,
        "category": "Cooldown",
        "desc": "Skill Duration +20.5%, HP Heal +7.4%.",
        "stats": {
            "HPHeal": 0.074,
            "SkillDuration": 0.205
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "MP Accelerant": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 12,
        "category": "Cooldown",
        "desc": "Skill Duration +20.5%, Max MP +3.7%.",
        "stats": {
            "SkillDuration": 0.205,
            "MP%": 0.037
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Time Distribution": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 10,
        "category": "Control",
        "desc": "Skill Cooldown -14.3%, Max HP +52.4%.",
        "stats": {
            "SkillCooldown": -0.143,
            "HP%": 0.524
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Focus on Non-Attribute": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 16,
        "category": "Battle",
        "desc": "Non-Attribute Skill Power +77.2%, Skill Cooldown -6.1%",
        "stats": {
            "SkillCooldown": -0.061,
            "PowerRatioNonAttribute": 0.772
        },
        "tags": [],
        "inclusion": ["Non-Attribute"],
        "exclusion": [],
    },
    "Focus on Toxic": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 16,
        "category": "Battle",
        "desc": "Toxic Skill Power +77.2%, Skill Cooldown -6.1%",
        "stats": {
            "SkillCooldown": -0.061,
            "PowerRatioToxic": 0.772
        },
        "tags": [],
        "inclusion": ["Toxic"],
        "exclusion": [],
    },
    "Focus on Electric": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "Battle",
        "desc": "Electric Skill Power +77.2%, Skill Cooldown -6.1%",
        "stats": {
            "SkillCooldown": -0.061,
            "PowerRatioElectric": 0.772
        },
        "tags": [],
        "inclusion": ["Electric"],
        "exclusion": [],
    },
    "Focus on Chill": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 16,
        "category": "Battle",
        "desc": "Chill Skill Power +77.2%, Skill Cooldown -6.1%",
        "stats": {
            "SkillCooldown": -0.061,
            "PowerRatioChill": 0.772
        },
        "tags": [],
        "inclusion": ["Chill"],
        "exclusion": [],
    },
    "Focus on Fire": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "Battle",
        "desc": "Fire Skill Power +77.2%, Skill Cooldown -6.1%",
        "stats": {
            "SkillCooldown": -0.061,
            "PowerRatioFire": 0.772
        },
        "tags": [],
        "inclusion": ["Fire"],
        "exclusion": [],
    },
    "Focus on Tech": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "Attack",
        "desc": "Skill Tech Power Modifier +68.2%, Skill Cooldown -6.1%",
        "stats": {
            "SkillCooldown": -0.061,
            "PowerModifierTech": 0.682
        },
        "tags": [],
        "inclusion": ["Tech"],
        "exclusion": [],
    },
    "Focus on Dimension": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 16,
        "category": "Attack",
        "desc": "Skill Dimension Power Modifier +68.2%, Skill Cooldown -6.1%",
        "stats": {
            "SkillCooldown": -0.061,
            "PowerModifierDimension": 0.682
        },
        "tags": [],
        "inclusion": ["Dimension"],
        "exclusion": [],
    },
    "Focus on Singular": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 16,
        "category": "Attack",
        "desc": "Skill Singular Power Modifier +68.2%, Skill Cooldown -6.1%",
        "stats": {
            "SkillCooldown": -0.061,
            "PowerModifierSingular": 0.682
        },
        "tags": [],
        "inclusion": ["Singular"],
        "exclusion": [],
    },
    "Focus on Fusion": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "Attack",
        "desc": "Skill Fusion Power Modifier +68.2%, Skill Cooldown -6.1%",
        "stats": {
            "SkillCooldown": -0.061,
            "PowerModifierFusion": 0.682
        },
        "tags": [],
        "inclusion": ["Fusion"],
        "exclusion": [],
    },
    "Non-Attribute Master": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 6,
        "category": "Battle",
        "desc": "Skill Power +44.4%, Non-Attribute Skill Power +19%",
        "stats": {
            "PowerRatioBase": 0.444,
            "PowerRatioNonAttribute": 0.19
        },
        "tags": [],
        "inclusion": ["Non-Attribute"],
        "exclusion": [],
    },
    "Toxic Master": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 6,
        "category": "Battle",
        "desc": "Skill Power +44.4%, Toxic Skill Power +19%",
        "stats": {
            "PowerRatioBase": 0.444,
            "PowerRatioToxic": 0.19
        },
        "tags": [],
        "inclusion": ["Toxic"],
        "exclusion": [],
    },
    "Electric Master": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 6,
        "category": "Battle",
        "desc": "Skill Power +44.4%, Electric Skill Power +19%",
        "stats": {
            "PowerRatioBase": 0.444,
            "PowerRatioElectric": 0.19
        },
        "tags": [],
        "inclusion": ["Electric"],
        "exclusion": [],
    },
    "Chill Master": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 6,
        "category": "Battle",
        "desc": "Skill Power +44.4%, Chill Skill Power +19%",
        "stats": {
            "PowerRatioBase": 0.444,
            "PowerRatioChill": 0.19
        },
        "tags": [],
        "inclusion": ["Chill"],
        "exclusion": [],
    },
    "Fire Master": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "Battle",
        "desc": "Skill Power +44.4%, Fire Skill Power +19%",
        "stats": {
            "PowerRatioBase": 0.444,
            "PowerRatioFire": 0.19
        },
        "tags": [],
        "inclusion": ["Fire"],
        "exclusion": [],
    },
    "Tech Master": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "Battle",
        "desc": "Skill Power +49.6%, Tech Skill Power Modifier +25.5%",
        "stats": {
            "PowerRatioBase": 0.496,
            "PowerModifierTech": 0.255
        },
        "tags": [],
        "inclusion": ["Tech"],
        "exclusion": [],
    },
    "Dimension Master": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 16,
        "category": "Battle",
        "desc": "Skill Power +49.6%, Dimension Skill Power Modifier +25.5%",
        "stats": {
            "PowerRatioBase": 0.496,
            "PowerModifierDimension": 0.255
        },
        "tags": [],
        "inclusion": ["Dimension"],
        "exclusion": [],
    },
    "Singular Master": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 16,
        "category": "Battle",
        "desc": "Skill Power +49.6%, Singular Skill Power Modifier +25.5%",
        "stats": {
            "PowerRatioBase": 0.496,
            "PowerModifierSingular": 0.255
        },
        "tags": [],
        "inclusion": ["Singular"],
        "exclusion": [],
    },
    "Fusion Master": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "Battle",
        "desc": "Skill Power +49.6%, Fusion Skill Power Modifier +25.5%",
        "stats": {
            "PowerRatioBase": 0.496,
            "PowerModifierFusion": 0.255
        },
        "tags": [],
        "inclusion": ["Fusion"],
        "exclusion": [],
    },
    "Strengthen Recovery": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 11,
        "category": "",
        "desc": "HP Recovery Modifier +23.6%, Outgoing DMG Modifier -7%",
        "stats": {
            "HPRecovery": 0.236,
            "OutgoingDamageMod": -0.07
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Pain Reliever": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 11,
        "category": "Guard",
        "desc": "Incoming DMG Modifier -13.5%, Outgoing DMG Modifier -10%",
        "stats": {
            "IncomingDamage": -0.135,
            "OutgoingDamageMod": -0.10
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Defense Stance": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 16,
        "category": "Defense",
        "desc": "DEF +164%, Outgoing DMG Modifier -7%",
        "stats": {
            "DEF%": 1.64,
            "OutgoingDamageMod": -0.07
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Shot Focus": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 11,
        "category": "",
        "desc": "Firearm ATK +15%, Skill Power Modifier -15%",
        "stats": {
            "PowerModifierBase": -0.15,
            "FirearmATK%": 0.15
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Selective Recovery (HP)": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 11,
        "category": "",
        "desc": "HP Recovery Modifier +24%, MP Recovery Modifier -13.8%",
        "stats": {
            "HPRecovery": 0.24,
            "MPRecovery": -0.138
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Selective Recovery (MP)": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 11,
        "category": "",
        "desc": "MP Recovery Modifier +60%, HP Recovery Modifier -5.5%",
        "stats": {
            "MPRecovery": 0.60,
            "HPRecovery": -0.055
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Maximize Skill": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "Battle",
        "desc": "Skill Power +87.6%, Skill Cooldown +50%",
        "stats": {
            "PowerRatioBase": 0.876,
            "SkillCooldown": 0.50
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Maximize Power": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "Attack",
        "desc": "Skill Power Modifier +96.1%, Skill Cooldown +50%",
        "stats": {
            "PowerModifierBase": 0.961,
            "SkillCooldown": 0.50
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Maximize Range": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 15,
        "category": "Range",
        "desc": "Skill Range +94.4%, Skill Power Modifier -20%.",
        "stats": {
            "PowerModifierBase": -0.20,
            "SkillRange": 0.944
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Maximize Duration": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 15,
        "category": "Cooldown",
        "desc": "Skill Duration +40%, Skill Power Modifier -21.1%",
        "stats": {
            "SkillDuration": 0.40,
            "PowerModifierBase": -0.211
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Maximize Conservation": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 15,
        "category": "Resource",
        "desc": "Skill Cost -35.4%, Skill Power Modifier -20%",
        "stats": {
            "SkillCost": -0.354,
            "PowerModifierBase": -0.20
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Sensory Dep (MP)": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 11,
        "category": "Guard",
        "desc": "Incoming DMG Modifier -13.5%, Max MP -6%",
        "stats": {
            "IncomingDamage": -0.135,
            "MP%": -0.06
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Sensory Dep (HP)": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 11,
        "category": "Guard",
        "desc": "Incoming DMG Modifier -13.5%, Max HP -5%",
        "stats": {
            "IncomingDamage": -0.135,
            "HP%": -0.05
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Maximize Toxic Resist": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 16,
        "category": "",
        "desc": "Toxin Resistance +180%, Max HP -5.3%",
        "stats": {
            "HP%": -0.053,
            "ResistanceToxin%": 1.80
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Maximize Electric Resist": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "",
        "desc": "Electric Resistance +180%, Max HP -5.3%",
        "stats": {
            "HP%": -0.053,
            "ResistanceElectricity%": 1.80
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Maximize Chill Resist": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 16,
        "category": "",
        "desc": "Chill Resistance +180%, Max HP -5.3%",
        "stats": {
            "HP%": -0.053,
            "ResistanceChill%": 1.80
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Maximize Fire Resist": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "",
        "desc": "Fire Resistance +180%, Max HP -5.3%",
        "stats": {
            "HP%": -0.053,
            "ResistanceFire%": 1.80
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Stim Accelerant": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 16,
        "category": "HP",
        "desc": "Max HP +234%, Max MP -15%",
        "stats": {
            "HP%": 2.34,
            "MP%": -0.15
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Maximize Efficiency": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 10,
        "category": "Resource",
        "desc": "Skill Cost -15.8%, Max MP -3.7%",
        "stats": {
            "SkillCost": -0.158,
            "MP%": -0.037
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "MP Conversion": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 15,
        "category": "Control",
        "desc": "Skill Cooldown -36.5%, Max MP -15%",
        "stats": {
            "SkillCooldown": -0.365,
            "MP%": -0.15
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Skill Simplification": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "Attack",
        "desc": "Skill Power Modifier +84.5%, Max MP -25%",
        "stats": {
            "PowerModifierBase": 0.845,
            "MP%": -0.25
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Shield Conversion (MP)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 10,
        "category": "MP",
        "desc": "Max MP +15%, Max Shield -73%",
        "stats": {
            "MP%": 0.15,
            "Shield%": -0.73
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Shield Conversion (DEF)": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 16,
        "category": "Defense",
        "desc": "DEF +166.8%, Max Shield -36.5%",
        "stats": {
            "DEF%": 1.668,
            "Shield%": -0.365
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "HP Conversion (MP)": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 12,
        "category": "MP",
        "desc": "Max MP +20%, Max HP -50%",
        "stats": {
            "MP%": 0.20,
            "HP%": -0.50
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "HP Conversion (DEF)": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 16,
        "category": "Defense",
        "desc": "DEF +166.8%, Max HP -52.4%",
        "stats": {
            "DEF%": 1.668,
            "HP%": -0.524
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "HP Conversion (Shield)": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 16,
        "category": "Shield",
        "desc": "Max Shield +158%, Max HP -52.4%",
        "stats": {
            "Shield%": 1.58,
            "HP%": -0.524
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "HP Amplification": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 16,
        "category": "HP",
        "desc": "Max HP +227.2%, Max Shield -36.5%",
        "stats": {
            "HP%": 2.272,
            "Shield%": -0.365
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Polygenic Antibody": {
        "rarity": "Normal",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 11,
        "category": "",
        "desc": "All Attribute Resistances +640.8",
        "stats": {
            "ResistanceFire": 640.8,
            "ResistanceElectricity": 640.8,
            "ResistanceToxin": 640.8,
            "ResistanceChill": 640.8,
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Power Increase": {
        "rarity": "Normal",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 16,
        "category": "Battle",
        "desc": "Skill Power +65%",
        "stats": {
            "PowerRatioBase": 0.65
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Arche Acceleration": {//this is projectile speed and falloff range, not effect range
        "rarity": "Normal",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 12,
        "category": "",
        "desc": "Skill Projectile Speed & Projectile Range Increase Modifier +19.2%",
        "stats": {},
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Enlightenment": {
        "rarity": "Normal",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 10,
        "category": "",
        "desc": "Max MP +15.2%",
        "stats": {
            "MP%": 0.152
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Medical Support": {
        "rarity": "Normal",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 14,
        "category": "",
        "desc": "HP Heal +30.8%",
        "stats": {
            "HPHeal": 0.308
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Energy Collection": {
        "rarity": "Normal",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 14,
        "category": "",
        "desc": "MP Recovery +57.7%",
        "stats": {
            "MPRecovery": 0.577
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Skill Concentration": {
        "rarity": "Normal",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "",
        "desc": "Skill Critical Hit Damage +115.4%",
        "stats": {
            "SkillCritDamage": 1.154
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Skill Insight": {
        "rarity": "Normal",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "",
        "desc": "Skill Critical Hit Rate +115.4%",
        "stats": {
            "SkillCritRate": 1.154
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Tech Specialist": {
        "rarity": "Normal",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "Attack",
        "desc": "Tech Skill Power Modifier +76.1%",
        "stats": {
            "PowerModifierTech": 0.761
        },
        "tags": [],
        "inclusion": ["Tech"],
        "exclusion": [],
    },
    "Dimension Specialist": {
        "rarity": "Normal",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 16,
        "category": "Attack",
        "desc": "Dimension Skill Power Modifier +76.1%",
        "stats": {
            "PowerModifierDimension": 0.761
        },
        "tags": [],
        "inclusion": ["Dimension"],
        "exclusion": [],
    },
    "Singular Specialist": {
        "rarity": "Normal",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 16,
        "category": "Attack",
        "desc": "Singular Skill Power Modifier +76.1%",
        "stats": {
            "PowerModifierSingular": 0.761
        },
        "tags": [],
        "inclusion": ["Singular"],
        "exclusion": [],
    },
    "Fusion Specialist": {
        "rarity": "Normal",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "Attack",
        "desc": "Fusion Skill Power Modifier +76.1%",
        "stats": {
            "PowerModifierFusion": 0.761
        },
        "tags": [],
        "inclusion": ["Fusion"],
        "exclusion": [],
    },
    "Toxic Specialist": {
        "rarity": "Normal",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 16,
        "category": "Battle",
        "desc": "Toxic Skill Power +81.2%",
        "stats": {
            "PowerRatioToxic": 0.812
        },
        "tags": [],
        "inclusion": ["Toxic"],
        "exclusion": [],
    },
    "Electric Specialist": {
        "rarity": "Normal",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "Battle",
        "desc": "Electric Skill Power +81.2%",
        "stats": {
            "PowerRatioElectric": 0.812
        },
        "tags": [],
        "inclusion": ["Electric"],
        "exclusion": [],
    },
    "Chill Specialist": {
        "rarity": "Normal",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 16,
        "category": "Battle",
        "desc": "Chill Skill Power +81.2%",
        "stats": {
            "PowerRatioChill": 0.812
        },
        "tags": [],
        "inclusion": ["Chill"],
        "exclusion": [],
    },
    "Fire Specialist": {
        "rarity": "Normal",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "Battle",
        "desc": "Fire Skill Power +81.2%",
        "stats": {
            "PowerRatioFire": 0.812
        },
        "tags": [],
        "inclusion": ["Fire"],
        "exclusion": [],
    },
    "Non-Attribute Specialist": {
        "rarity": "Normal",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 16,
        "category": "Battle",
        "desc": "Non-Attribute Skill Power +81.2%",
        "stats": {
            "PowerRatioNonAttribute": 0.812
        },
        "tags": [],
        "inclusion": ["Non-Attribute"],
        "exclusion": [],
    },
    "Toxic Antibody": {
        "rarity": "Normal",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 16,
        "category": "",
        "desc": "Toxin Resistance +4,614",
        "stats": {
            "ResistanceToxin": 4614
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Skill Extension": {
        "rarity": "Normal",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 15,
        "category": "",
        "desc": "Skill Duration +36.5%.",
        "stats": {
            "SkillDuration": 0.365
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Skill Expansion": {
        "rarity": "Normal",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 15,
        "category": "",
        "desc": "Skill Effect Range +92.3%.",
        "stats": {
            "SkillRange": 0.923
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Increased DEF": {
        "rarity": "Normal",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 16,
        "category": "",
        "desc": "DEF +160.4%",
        "stats": {
            "DEF%": 1.604
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Increased Shield": {
        "rarity": "Normal",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 16,
        "category": "",
        "desc": "Max Shield +151.9%",
        "stats": {
            "Shield%": 1.519
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Increased HP": {
        "rarity": "Normal",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 16,
        "category": "",
        "desc": "Max HP +218.5%",
        "stats": {
            "HP%": 2.185
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Regeneration Boost": {
        "rarity": "Normal",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 11,
        "category": "",
        "desc": "HP Recovery Modifier +23.1%",
        "stats": {
            "HPRecovery": 0.231
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Electric Antibody": {
        "rarity": "Normal",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "",
        "desc": "Electric Resistance +4,614",
        "stats": {
            "ResistanceElectricity": 4614
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Cold Antibody": {
        "rarity": "Normal",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 16,
        "category": "",
        "desc": "Chill Resistance +4,614",
        "stats": {
            "ResistanceChill": 4614
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Heat Antibody": {
        "rarity": "Normal",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "",
        "desc": "Fire Resistance +4,614",
        "stats": {
            "ResistanceFire": 4614
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Technician": {
        "rarity": "Normal",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 16,
        "category": "Attack",
        "desc": "Skill Power Modifier +50.8%",
        "stats": {
            "PowerModifierBase": 0.508
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Strong Mentality": {
        "rarity": "Normal",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 10,
        "category": "",
        "desc": "Skill Cost -15.2%",
        "stats": {
            "SkillCost": -0.152
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Nimble Fingers": {
        "rarity": "Normal",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 12,
        "category": "",
        "desc": "Skill Cooldown -25.6%",
        "stats": {
            "SkillCooldown": -0.256
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
    "Ironclad Defense": {
        "rarity": "Normal",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 13,
        "category": "",
        "desc": "Critical Hit Resistance +26.9%",
        "stats": {
            "CritResist": 0.269
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },







    "Hyperfocus": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 13,
        "category": "Arche Tech",
        "desc": "Firearm Critical Hit damage on Skill Critical Hit +12.4%, Skill Critical Hit damage on Firearm Critical Hit +10.1%. These effects do not stack with each other.<br>Calculator assumes both bonuses active at all times when selected. This is not realistic, but there aren't many options here on how to calculate it.",
        "stats": {
            "SkillCritDamage": 0.101,
            "FirearmCritDamage": 0.124,
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },

    "Non-Attribute Amplification": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 16,
        "category": "Strike",
        "desc": "Non-Attribute Skill Power +65.4%, Critical Hit Damage -140%",
        "stats": {
            "SkillCritDamage": -1.4,
            "PowerRatioNonAttribute": 0.654
        },
        "tags": [],
        "inclusion": ["Non-Attribute"],
        "exclusion": [],
    },
    "Fire Amplification": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "Strike",
        "desc": "Fire Skill Power +65.4%, Critical Hit Damage -140%",
        "stats": {
            "SkillCritDamage": -1.4,
            "PowerRatioFire": 0.654
        },
        "tags": [],
        "inclusion": ["Fire"],
        "exclusion": [],
    },
    "Chill Amplification": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 16,
        "category": "Strike",
        "desc": "Chill Skill Power +65.4%, Critical Hit Damage -140%",
        "stats": {
            "SkillCritDamage": -1.4,
            "PowerRatioChill": 0.654
        },
        "tags": [],
        "inclusion": ["Chill"],
        "exclusion": [],
    },
    "Electric Amplification": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "Strike",
        "desc": "Electric Skill Power +65.4%, Critical Hit Damage -140%",
        "stats": {
            "SkillCritDamage": -1.4,
            "PowerRatioElectric": 0.654
        },
        "tags": [],
        "inclusion": ["Electric"],
        "exclusion": [],
    },
    "Toxic Amplification": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 16,
        "category": "Strike",
        "desc": "Toxic Skill Power +65.4%, Critical Hit Damage -140%",
        "stats": {
            "SkillCritDamage": -1.4,
            "PowerRatioToxic": 0.654
        },
        "tags": [],
        "inclusion": ["Toxic"],
        "exclusion": [],
    },

    "Tech Amplification": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "Luck",
        "desc": "Tech Skill Power Modifier +61.3%, Critical Hit Rate -140%",
        "stats": {
            "SkillCritRate": -1.4,
            "PowerModifierTech": 0.613
        },
        "tags": [],
        "inclusion": ["Tech"],
        "exclusion": [],
    },
    "Fusion Amplification": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "Luck",
        "desc": "Fusion Skill Power Modifier +61.3%, Critical Hit Rate -140%",
        "stats": {
            "SkillCritRate": -1.4,
            "PowerModifierFusion": 0.613
        },
        "tags": [],
        "inclusion": ["Fusion"],
        "exclusion": [],
    },
    "Singular Amplification": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 16,
        "category": "Luck",
        "desc": "Singular Skill Power Modifier +61.3%, Critical Hit Rate -140%",
        "stats": {
            "SkillCritRate": -1.4,
            "PowerModifierSingular": 0.613
        },
        "tags": [],
        "inclusion": ["Singular"],
        "exclusion": [],
    },
    "Dimension Amplification": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 16,
        "category": "Luck",
        "desc": "Dimension Skill Power Modifier +61.3%, Critical Hit Rate -140%",
        "stats": {
            "SkillCritRate": -1.4,
            "PowerModifierDimension": 0.613
        },
        "tags": [],
        "inclusion": ["Dimension"],
        "exclusion": [],
    },


    "Non-Attribute Integration": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 16,
        "category": "Strike",
        "desc": "Non-Attribute Skill Power +28.7%, Critical Hit Damage +10%",
        "stats": {
            "SkillCritDamage": 0.10,
            "PowerRatioNonAttribute": 0.287
        },
        "tags": [],
        "inclusion": ["Non-Attribute"],
        "exclusion": [],
    },
    "Fire Integration": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "Strike",
        "desc": "Fire Skill Power +28.7%, Critical Hit Damage +10%",
        "stats": {
            "SkillCritDamage": 0.10,
            "PowerRatioFire": 0.287
        },
        "tags": [],
        "inclusion": ["Fire"],
        "exclusion": [],
    },
    "Chill Integration": {
        "rarity": "Rare",
        "polarity": "Cerulean",
        "type": "Descendant",
        "cost": 16,
        "category": "Strike",
        "desc": "Chill Skill Power +28.7%, Critical Hit Damage +10%",
        "stats": {
            "SkillCritDamage": 0.10,
            "PowerRatioChill": 0.287
        },
        "tags": [],
        "inclusion": ["Chill"],
        "exclusion": [],
    },
    "Electric Integration": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "Strike",
        "desc": "Electric Skill Power +28.7%, Critical Hit Damage +10%",
        "stats": {
            "SkillCritDamage": 0.10,
            "PowerRatioElectric": 0.287
        },
        "tags": [],
        "inclusion": ["Electric"],
        "exclusion": [],
    },
    "Toxic Integration": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 16,
        "category": "Strike",
        "desc": "Toxic Skill Power +28.7%, Critical Hit Damage +10%",
        "stats": {
            "SkillCritDamage": 0.10,
            "PowerRatioToxic": 0.287
        },
        "tags": [],
        "inclusion": ["Toxic"],
        "exclusion": [],
    },

    "Tech Integration": {
        "rarity": "Rare",
        "polarity": "Almandine",
        "type": "Descendant",
        "cost": 16,
        "category": "Luck",
        "desc": "Tech Skill Power Modifier +26.9%, Critical Hit Rate +10%",
        "stats": {
            "SkillCritRate": 0.10,
            "PowerModifierTech": 0.269
        },
        "tags": [],
        "inclusion": ["Tech"],
        "exclusion": [],
    },
    "Fusion Integration": {
        "rarity": "Rare",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 16,
        "category": "Luck",
        "desc": "Fusion Skill Power Modifier +26.9%, Critical Hit Rate +10%",
        "stats": {
            "SkillCritRate": 0.10,
            "PowerModifierFusion": 0.269
        },
        "tags": [],
        "inclusion": ["Fusion"],
        "exclusion": [],
    },
    "Singular Integration": {
        "rarity": "Rare",
        "polarity": "Rutile",
        "type": "Descendant",
        "cost": 16,
        "category": "Luck",
        "desc": "Singular Skill Power Modifier +26.9%, Critical Hit Rate +10%",
        "stats": {
            "SkillCritRate": 0.10,
            "PowerModifierSingular": 0.269
        },
        "tags": [],
        "inclusion": ["Singular"],
        "exclusion": [],
    },
    "Dimension Integration": {
        "rarity": "Rare",
        "polarity": "Malachite",
        "type": "Descendant",
        "cost": 16,
        "category": "Luck",
        "desc": "Dimension Skill Power Modifier +26.9%, Critical Hit Rate +10%",
        "stats": {
            "SkillCritRate": 0.10,
            "PowerModifierDimension": 0.269
        },
        "tags": [],
        "inclusion": ["Dimension"],
        "exclusion": [],
    },



















    "Last Stand": {
        "rarity": "Ultimate",
        "polarity": "Xantic",
        "type": "Descendant",
        "cost": 11,
        "category": "Arche Tech",
        "desc": "ONLY FACTORS ON KYLE THRUSTERS<br>On Skill Attack, consumes all Shield to deal additional damage on top of damage dealt. Deals 8.5% additional damage, which can increase up to 17% based on the amount of Shield consumed (max 10,000)<br>Once triggered, recovers Shield by 1.5% of Max Shield every second for 30s.",
        "stats": {
            "LastStandActive": 1,
            // "SkillCritRate": 0.10,
            // "PowerModifierDimension": 0.269
        },
        "tags": [],
        "inclusion": [],
        "exclusion": [],
    },
}