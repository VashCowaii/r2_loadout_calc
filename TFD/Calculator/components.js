const componentImagePrefixes = {
    "": "Icon_Item_Acc_Default_",
    "Hungry Sonic": "Icon_Item_Acc_Gluttony_T3_",
    "Volcanic": "Icon_Item_Acc_Moltenfortress_T3_",
    "Frozen Heart": "Icon_Item_Acc_FrostWalker_T3_",
    "Bravery": "Icon_Item_Acc_Obstructer_T3_",
    "Venom Essence": "Icon_Item_Acc_SwampWalker_T3_",
    "Polar Night": "Icon_Item_Acc_DeadBride_T3_",
    "Slayer": "Icon_Item_Acc_Pyromaniac_T3_",
    "Annihilation": "Icon_Item_Acc_Devourer_T3_",
    "Supernova": "Icon_Item_Acc_Executioner_T3_",
    "DEF Support": "Icon_Item_Acc_Default_",
    "Shield Support": "Icon_Item_Acc_Default_",
    "HP Support": "Icon_Item_Acc_Default_",
    "Acrobat": "Icon_Item_Acc_HangedMan_T2_",
    "Swamp Recon": "Icon_Item_Acc_SwampWalker_T2_",
    "Veteran Marksman": "Icon_Item_Acc_Pyromaniac_T2_",
    "Predator": "Icon_Item_Acc_Devourer_T2_",
    "Glacial": "Icon_Item_Acc_DeadBride_T2_",
    "Decimator": "Icon_Item_Acc_Executioner_T2_",
    "Battle Aesthetics": "Icon_Item_Acc_StunningBeauty_T2_",
    "Tomb Vanguard": "Icon_Item_Acc_Gravewalker_T2_",
}


const auxiliary = {
    "": {
        "headerStat": "DEF",
        "value": 0,
        "rarity": "Empty",
        "imageSuffix": "01"
    },
    "Hungry Sonic": {
        "headerStat": "DEF",
        "value": 3512,
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "Volcanic": {
        "headerStat": "DEF",
        "value": 4683,
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "Frozen Heart": {
        "headerStat": "Shield",
        "value": 275,
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "Bravery": {
        "headerStat": "Shield",
        "value": 275,
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "Venom Essence": {
        "headerStat": "Shield",
        "value": 275,
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "Polar Night": {
        "headerStat": "HP",
        "value": 484,
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "Slayer": {
        "headerStat": "DEF",
        "value": 3512,
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "Annihilation": {
        "headerStat": "DEF",
        "value": 3512,
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "Supernova": {
        "headerStat": "Shield",
        "value": 275,
        "rarity": "Ultimate",
        "imageSuffix": "01"
    },
    "DEF Support": {
        "headerStat": "DEF",
        "value": 4683,
        "rarity": "Ultimate",
        "imageSuffix": "01_Def"
    },
    "Shield Support": {
        "headerStat": "Shield",
        "value": 206,
        "rarity": "Ultimate",
        "imageSuffix": "01_Shield"
    },
    "HP Support": {
        "headerStat": "HP",
        "value": 646,
        "rarity": "Ultimate",
        "imageSuffix": "01_HP"
    },
    "Acrobat": {
        "headerStat": "Shield",
        "value": 275,
        "rarity": "Rare",
        "imageSuffix": "01"
    },
    "Swamp Recon": {
        "headerStat": "Shield",
        "value": 275,
        "rarity": "Rare",
        "imageSuffix": "01"
    },
    "Veteran Marksman": {
        "headerStat": "DEF",
        "value": 4683,
        "rarity": "Rare",
        "imageSuffix": "01"
    },
    "Predator": {
        "headerStat": "DEF",
        "value": 4683,
        "rarity": "Rare",
        "imageSuffix": "01"
    },
    "Glacial": {
        "headerStat": "Shield",
        "value": 275,
        "rarity": "Rare",
        "imageSuffix": "01"
    },
    "Decimator": {
        "headerStat": "HP",
        "value": 646,
        "rarity": "Rare",
        "imageSuffix": "01"
    },
    "Battle Aesthetics": {
        "headerStat": "DEF",
        "value": 4683,
        "rarity": "Rare",
        "imageSuffix": "01"
    },
    "Tomb Vanguard": {
        "headerStat": "DEF",
        "value": 4683,
        "rarity": "Rare",
        "imageSuffix": "01"
    },
}
const auxiliaryRolls = {
    "": {
        "stats": {},
        "value": 0,
        "minimum": 0,
        "maximum": 0,
    },
    "HP": {
        "stats": {
            "HP": 914,
        },
        "value": 914,
        "minimum": 411,
        "maximum": 914,
    },
    "Fire Resistance": {
        "stats": {
            "ResistanceFire": 3860,
        },
        "value": 3860,
        "minimum": 1608,
        "maximum": 3860,
    },
    "MP Out of Combat": {
        "stats": {
            "MPOutCombat": 2.454,
        },
        "value": 2.454,
        "minimum": 1.791,
        "maximum": 2.454,
    },
    // module drop rate 0.191
    // kuiper drop rate 0.168
    // DBNO duration 0.318
}

const sensor = {
    "": {
        "headerStat": "DEF",
        "value": 0,
        "rarity": "Empty",
        "imageSuffix": "02"
    },
    "Hungry Sonic": {
        "headerStat": "Shield",
        "value": 275,
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "Volcanic": {
        "headerStat": "HP",
        "value": 646,
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "Frozen Heart": {
        "headerStat": "HP",
        "value": 646,
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "Bravery": {
        "headerStat": "DEF",
        "value": 4683,
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "Venom Essence": {
        "headerStat": "DEF",
        "value": 4683,
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "Polar Night": {
        "headerStat": "HP",
        "value": 484,
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "Slayer": {
        "headerStat": "Shield",
        "value": 206,
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "Annihilation": {
        "headerStat": "DEF",
        "value": 4683,
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "Supernova": {
        "headerStat": "Shield",
        "value": 206,
        "rarity": "Ultimate",
        "imageSuffix": "02"
    },
    "DEF Support": {
        "headerStat": "DEF",
        "value": 2385,
        "rarity": "Ultimate",
        "imageSuffix": "02_Def"
    },
    "Shield Support": {
        "headerStat": "Shield",
        "value": 275,
        "rarity": "Ultimate",
        "imageSuffix": "02_Shield"
    },
    "HP Support": {
        "headerStat": "HP",
        "value": 646,
        "rarity": "Ultimate",
        "imageSuffix": "02_HP"
    },
    "Acrobat": {
        "headerStat": "HP",
        "value": 323,
        "rarity": "Rare",
        "imageSuffix": "02"
    },
    "Swamp Recon": {
        "headerStat": "DEF",
        "value": 3512,
        "rarity": "Rare",
        "imageSuffix": "02"
    },
    "Veteran Marksman": {
        "headerStat": "HP",
        "value": 484,
        "rarity": "Rare",
        "imageSuffix": "02"
    },
    "Predator": {
        "headerStat": "Shield",
        "value": 206,
        "rarity": "Rare",
        "imageSuffix": "02"
    },
    "Glacial": {
        "headerStat": "Shield",
        "value": 206,
        "rarity": "Rare",
        "imageSuffix": "02"
    },
    "Decimator": {
        "headerStat": "Shield",
        "value": 137,
        "rarity": "Rare",
        "imageSuffix": "02"
    },
    "Battle Aesthetics": {
        "headerStat": "Shield",
        "value": 137,
        "rarity": "Rare",
        "imageSuffix": "02"
    },
    "Tomb Vanguard": {
        "headerStat": "DEF",
        "value": 2341,
        "rarity": "Rare",
        "imageSuffix": "02"
    },
}
const sensorRolls = {
    "": {
        "stats": {},
        "value": 0,
        "minimum": 0,
        "maximum": 0,
    },
    "MP": {
        "stats": {
            "MP": 159
        },
        "value": 159,
        "minimum": 110,
        "maximum": 159,
    },
    "MP in Combat": {
        "stats": {
            "MPInCombat": 0.287
        },
        "value": 0.287,
        "minimum": 0.208,
        "maximum": 0.287,
    },
    "Chill Resistance": {
        "stats": {
            "ResistanceChill": 3860
        },
        "value": 3860,
        "minimum": 1608,
        "maximum": 3860,
    },
    "HP Recovery Mod": {
        "stats": {//TODO: see what exactly this populates as, I'm assuming hp recovery mod bc iirc it says hp heal, but hp heal means 3 diff things in this game
            "HPRecovery": 0.085
        },
        "value": 0.085,
        "minimum": 0.057,
        "maximum": 0.085,
    },
    "Shield Out of Combat": {
        "stats": {
            "ShieldOutCombat": 16.630
        },
        "value": 16.630,
        "minimum": 11.311,
        "maximum": 16.630,
    },
    // consumable drop rate 0.191
    // character xp 0.191
}

const memory = {
    "": {
        "headerStat": "DEF",
        "value": 0,
        "rarity": "Empty",
        "imageSuffix": "03"
    },
    "Hungry Sonic": {
        "headerStat": "Shield",
        "value": 275,
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "Volcanic": {
        "headerStat": "HP",
        "value": 484,
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "Frozen Heart": {
        "headerStat": "Shield",
        "value": 206,
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "Bravery": {
        "headerStat": "DEF",
        "value": 3512,
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "Venom Essence": {
        "headerStat": "DEF",
        "value": 3512,
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "Polar Night": {
        "headerStat": "Shield",
        "value": 275,
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "Slayer": {
        "headerStat": "Shield",
        "value": 275,
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "Annihilation": {
        "headerStat": "HP",
        "value": 646,
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "Supernova": {
        "headerStat": "DEF",
        "value": 3512,
        "rarity": "Ultimate",
        "imageSuffix": "03"
    },
    "DEF Support": {
        "headerStat": "DEF",
        "value": 4683,
        "rarity": "Ultimate",
        "imageSuffix": "03_Def"
    },
    "Shield Support": {
        "headerStat": "Shield",
        "value": 275,
        "rarity": "Ultimate",
        "imageSuffix": "03_Shield"
    },
    "HP Support": {
        "headerStat": "HP",
        "value": 484,
        "rarity": "Ultimate",
        "imageSuffix": "03_HP"
    },
    "Acrobat": {
        "headerStat": "HP",
        "value": 484,
        "rarity": "Rare",
        "imageSuffix": "03"
    },
    "Swamp Recon": {
        "headerStat": "DEF",
        "value": 2341,
        "rarity": "Rare",
        "imageSuffix": "03"
    },
    "Veteran Marksman": {
        "headerStat": "DEF",
        "value": 1171,
        "rarity": "Rare",
        "imageSuffix": "03"
    },
    "Predator": {
        "headerStat": "Shield",
        "value": 137,
        "rarity": "Rare",
        "imageSuffix": "03"
    },
    "Glacial": {
        "headerStat": "HP",
        "value": 323,
        "rarity": "Rare",
        "imageSuffix": "03"
    },
    "Decimator": {
        "headerStat": "Shield",
        "value": 206,
        "rarity": "Rare",
        "imageSuffix": "03"
    },
    "Battle Aesthetics": {
        "headerStat": "Shield",
        "value": 206,
        "rarity": "Rare",
        "imageSuffix": "03"
    },
    "Tomb Vanguard": {
        "headerStat": "Shield",
        "value": 275,
        "rarity": "Rare",
        "imageSuffix": "03"
    },
}
const memoryRolls = {
    "": {
        "stats": {},
        "value": 0,
        "minimum": 0,
        "maximum": 0,
    },
    "DEF": {
        "stats": {
            "DEF": 4249
        },
        "value": 4249,
        "minimum": 1724,
        "maximum": 4249,
    },
    "Shield in Combat": {
        "stats": {
            "ShieldInCombat": 5.033
        },
        "value": 5.033,
        "minimum": 3.271,
        "maximum": 5.033,
    },
    "Electric Resistance": {
        "stats": {
            "ResistanceElectricity": 3860
        },
        "value": 3860,
        "minimum": 1608,
        "maximum": 3860,
    },
    "MP Recovery Mod": {
        "stats": {
            "MPRecovery": 0.160
        },
        "value": 0.160,
        "minimum": 0.108,
        "maximum": 0.160,
    },
    // gold drop rate 0.191
    // firearm xp 0.191
    // ecive search radius 0.7660
}

const processor = {
    "": {
        "headerStat": "DEF",
        "value": 0,
        "rarity": "Empty",
        "imageSuffix": "04"
    },
    "Hungry Sonic": {
        "headerStat": "HP",
        "value": 484,
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "Volcanic": {
        "headerStat": "DEF",
        "value": 3512,
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "Frozen Heart": {
        "headerStat": "Shield",
        "value": 206,
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "Bravery": {
        "headerStat": "Shield",
        "value": 206,
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "Venom Essence": {
        "headerStat": "HP",
        "value": 484,
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "Polar Night": {
        "headerStat": "HP",
        "value": 646,
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "Slayer": {
        "headerStat": "HP",
        "value": 646,
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "Annihilation": {
        "headerStat": "HP",
        "value": 484,
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "Supernova": {
        "headerStat": "DEF",
        "value": 4683,
        "rarity": "Ultimate",
        "imageSuffix": "04"
    },
    "DEF Support": {
        "headerStat": "DEF",
        "value": 4683,
        "rarity": "Ultimate",
        "imageSuffix": "04_Def"
    },
    "Shield Support": {
        "headerStat": "Shield",
        "value": 275,
        "rarity": "Ultimate",
        "imageSuffix": "04_Shield"
    },
    "HP Support": {
        "headerStat": "HP",
        "value": 646,
        "rarity": "Ultimate",
        "imageSuffix": "04_HP"
    },
    "Acrobat": {
        "headerStat": "DEF",
        "value": 2341,
        "rarity": "Rare",
        "imageSuffix": "04"
    },
    "Swamp Recon": {
        "headerStat": "HP",
        "value": 323,
        "rarity": "Rare",
        "imageSuffix": "04"
    },
    "Veteran Marksman": {
        "headerStat": "HP",
        "value": 323,
        "rarity": "Rare",
        "imageSuffix": "04"
    },
    "Predator": {
        "headerStat": "HP",
        "value": 323,
        "rarity": "Rare",
        "imageSuffix": "04"
    },
    "Glacial": {
        "headerStat": "DEF",
        "value": 1171,
        "rarity": "Rare",
        "imageSuffix": "04"
    },
    "Decimator": {
        "headerStat": "DEF",
        "value": 2341,
        "rarity": "Rare",
        "imageSuffix": "04"
    },
    "Battle Aesthetics": {
        "headerStat": "DEF",
        "value": 1171,
        "rarity": "Rare",
        "imageSuffix": "04"
    },
    "Tomb Vanguard": {
        "headerStat": "DEF",
        "value": 1171,
        "rarity": "Rare",
        "imageSuffix": "04"
    },
}
const processorRolls = {
    "": {
        "stats": {},
        "value": 0,
        "minimum": 0,
        "maximum": 0,
    },
    "Shield": {
        "stats": {
            "Shield": 283
        },
        "value": 283,
        "minimum": 124,
        "maximum": 283,
    },
    "Toxin Resistance": {
        "stats": {
            "ResistanceToxin": 3860
        },
        "value": 3860,
        "minimum": 1608,
        "maximum": 3860,
    },
    "Shield Recovery Mod": {
        "stats": {
            "ShieldRecovery": 0.085
        },
        "value": 0.085,
        "minimum": 0.057,
        "maximum": 0.085,
    },
    // equipment drop rate 0.191
    // item acquisition distance 0.253
    // ecive display time 0.9720
}


const componentSetBonuses = {
    "": {
        "2pc": {
            "desc": "N/A",
            "stats": {}
        },
        "4pc": {
            "desc": "N/A",
            "stats": {}
        },
    },
    "Supernova": {
        "2pc": {
            "desc": "Electric Skill Power Modifier +8.6%",
            "stats": {
                "PowerModifierElectric": 0.086
            }
        },
        "4pc": {
            "desc": "Fusion Skill Power Modifier +12%.<br>On Electric Skill Attack upon an enemy inflicted with Electrocution, activates Executioner's Thunderbolt at the target's location, dealing additional Electric damage equivalent to 100% of Skill Power Modifier (cooldown 2s) at a 50% chance.<br>Note: The damage per bolt is your skill power * 1 + skill and electric power modifier. It's pretty fuckin awful.",
            "stats": {
                "SkillCost": 0.15,
                "PowerRatioBase": 0.261
            }
        },
    },
    "Annihilation": {
        "2pc": {
            "desc": "Skill Duration +5.7%",
            "stats": {
                "SkillDuration": 0.057
            }
        },
        "4pc": {
            "desc": "Firearm ATK increases proportionally to the ratio of Max HP to HP lost, up to 26%. When HP is 50% or lower, MP Recovery -22%, HP Recovery +16.4% for 10s (Cooldown 30s)",
            "stats": {
                "FirearmATK%": 0.26,
                "MPRecovery": -0.22,
                "HPRecovery": 0.164
            }
        },
    },
    "Slayer": {
        "2pc": {
            "desc": "General Rounds Capacity +8%",
            "stats": {
                //TODO: ammo reserves
            }
        },
        "4pc": {
            "desc": "Rounds per Magazine +9%.<br>Skill Cost +15%.<br>Skill Power +26.1%.<br>When defeating enemies inflicted with Towed, recovers 12.2% MP and Specialized Resource at a 17% chance",
            "stats": {
                "MagazineSize": 0.09,
                "SkillCost": 0.15,
                "PowerRatioBase": 0.261
            }
        },
    },
    "Polar Night": {
        "2pc": {
            "desc": "Chill Skill Power +6.2%",
            "stats": {
                "PowerRatioChill": 0.062
            }
        },
        "4pc": {
            "desc": "For each Frostbite stack inflicted upon enemies, Firearm Critical Hit Damage +1.7%, Skill Critical Hit Damage +6% (up to 10 stacks, 5s duration) at a 30% chance. When defeating enemies inflicted with Frostbite, inflicts additional damage equivalent to 12.2% of the enemy's Max HP on enemies within a 2.5m radius at a 30% chance.",
            "stats": {
                //TODO: weapon crit dmg
                "SkillCritDamage": 0.60,
            }
        },
    },
    "Venom Essence": {
        "2pc": {
            "desc": "Toxic Skill Power +6.2%",
            "stats": {
                "PowerRatioToxic": 0.062
            }
        },
        "4pc": {
            "desc": "Tactical Rifle, Assault Rifle Firearm Attribute Effect Trigger Rate +12%. For each Poison stack inflicted upon enemies, Firearm ATK +2%, Skill Power Modifier +0.7% for 5s at a 30% chance (up to 10 stacks, 5s duration).",
            "stats": {
                //TODO: effect trigger rate stats
                "PowerModifierBase": 0.07,//assuming max stacks
            }
        },
    },
    "Bravery": {
        "2pc": {
            "desc": "HP Recovery +1.8%<br>Max Shield +11.9%",
            "stats": {
                "HPRecovery": 0.018,
                "Shield%": 0.119
            }
        },
        "4pc": {
            "desc": "Skill Duration +6.6%<br>35% chance to reduce a random skill's cooldown by -1.63s each time an enemy inflicted with Stun is defeated.",
            "stats": {
                "SkillDuration": 0.066
            }
        },
    },
    "Frozen Heart": {
        "2pc": {
            "desc": "Sniper Rifle, Scout Rifle Critical Hit Rate 5%",
            "stats": {
                //TODO: weapon type specific crit bonuses
            }
        },
        "4pc": {
            "desc": "Skill Cooldown -4.7%. Granting a buff to allies adds a stack of Frozen Heart Energy effect to self (Cooldown 1s). At 4 effect stacks, Frozen Heart Energy converts to Frozen Heart Essence effect. Frozen Heart Essence: Firearm Weak Point DMG +7.7%, Skill Critical Hit Rate +28%, Firearm Critical Hit Rate +7.9% for 10s.",
            "stats": {//TODO: weapon type specific weakpoint bonuses, can bother with it later
                "SkillCritRate": 0.28
            }
        },
    },
    "Volcanic": {
        "2pc": {
            "desc": "Fire Skill Power +6.2%",
            "stats": {
                "PowerRatioFire": 0.062,
            }
        },
        "4pc": {
            "desc": "Handgun, Hand Cannon, Shotgun ATK +6.6%. Charged Sub Attack Damage +6.6%. After Reload, Skill Power +3.5% for 5s (up to 3 stacks), this effect is removed when using a skill.",
            "stats": {//TODO: weapon type specific ATK bonuses, can bother with it later, same with sub attack stuff
                "PowerRatioBase": 0.105,
            }
        },
    },
    "Hungry Sonic": {
        "2pc": {
            "desc": "Toxin Resistance +2.8%",
            "stats": {
                "ResistanceToxin%": 0.028
            }
        },
        "4pc": {
            "desc": "When using Skill, grants 1 stack of Efflux(up to 50 stacks, lasts for 20s). When using Enhanced Skill, grants self 1 stack of Wave (up to 10 stacks, lasts for 120s) and 10 stacks of Efflux. Wave recovers MP by 0.2% per stack when hitting an enemy with a unique weapon. At 50 stacks of Efflux, converts to Tuning (lasts for 200s). Tuning: Skill Duration +1.79% proportional to Max MP, MP Heal Modifier by +2.83%.",
            "stats": {
                "SkillDuration": 0.0179,
                "MPRecovery": 0.0283
            }
        },
    },
    "Acrobat": {
        "2pc": {
            "desc": "Skill Power +1.7%<br>Firearm ATK +2.8%",
            "stats": {
                "PowerRatioBase": 0.017,
                "FirearmATK%": 0.028
            }
        },
        "4pc": {
            "desc": "Firearm Critical Hit Rate +21%<br>Skill Critical Hit Rate +5.9%",
            "stats": {
                "SkillCritRate": 0.059
                //TODO: firearm crit stuff
            }
        },
    },
    "Swamp Recon": {
        "2pc": {
            "desc": "Toxic Skill Power +6.2%",
            "stats": {
                "PowerRatioToxic": 0.062
            }
        },
        "4pc": {
            "desc": "Firearm Status Effect Trigger Rate +12%<br>Skill Duration +6.6%",
            "stats": {
                "SkillDuration": 0.066
                //TODO: status trigger rate stuff
            }
        },
    },
    "Veteran Marksman": {
        "2pc": {
            "desc": "Firearm Critical Hit Rate +5.1%",
            "stats": {
                //TODO: firearm crit stuff
            }
        },
        "4pc": {
            "desc": "Firearm ATK +6.6%<br>Weak Point DMG +5.8%",
            "stats": {
                "FirearmATK%": 0.066
                //TODO: weakpoint dmg stuff
            }
        },
    },
    "Predator": {
        "2pc": {
            "desc": "HP Recovery +4.8%",
            "stats": {
                "HPRecovery": 0.048,
            }
        },
        "4pc": {
            "desc": "Toxic Skill Power Modifier +7.2%<br>Fire Resistance +6.6%",
            "stats": {
                "PowerModifierToxic": 0.072,
                "ResistanceFire%": 0.066
            }
        },
    },
    "Glacial": {
        "2pc": {
            "desc": "Chill Skill Power Modifier +8.6%",
            "stats": {
                "PowerModifierChill": 0.086
            }
        },
        "4pc": {
            "desc": "Skill Cost -2.8%<br>Firearm Critical Hit Rate +5.9%",
            "stats": {
                "SkillCost": -0.028,
                //TODO: firearm crit stuff
            }
        },
    },
    "Decimator": {
        "2pc": {
            "desc": "Firearm Critical Hit Rate +5.1%",
            "stats": {
                //TODO: firearm crit stuff
            }
        },
        "4pc": {
            "desc": "Weak Point DMG +5.8%<br>Toxin Resistance +6.6%",
            "stats": {
                "ResistanceToxin%": 0.066
                //TODO: weakpoint stuff
            }
        },
    },
    "Battle Aesthetics": {
        "2pc": {
            "desc": "Skill Critical Hit Rate +18%",
            "stats": {
                "SkillCritRate": 0.18
            }
        },
        "4pc": {
            "desc": "Skill Power +4%<br>Skill Cost -2.8%",
            "stats": {
                "PowerRatioBase": 0.04,
                "SkillCost": -0.028
            }
        },
    },
    "Tomb Vanguard": {
        "2pc": {
            "desc": "DEF +25%",
            "stats": {
                "DEF%": 0.25
            }
        },
        "4pc": {
            "desc": "Skill Power Modifier +8%<br>Electric Resistance +6.6%",
            "stats": {
                "PowerModifierBase": 0.08,
                "ResistanceElectricity%": 0.066
            }
        },
    },
    "DEF Support": {
        "2pc": {
            "desc": "N/A - No set bonuses",
            "stats": {}
        },
        "4pc": {
            "desc": "N/A - No set bonuses",
            "stats": {}
        },
    },
    "Shield Support": {
        "2pc": {
            "desc": "N/A - No set bonuses",
            "stats": {}
        },
        "4pc": {
            "desc": "N/A - No set bonuses",
            "stats": {}
        },
    },
    "HP Support": {
        "2pc": {
            "desc": "N/A - No set bonuses",
            "stats": {}
        },
        "4pc": {
            "desc": "N/A - No set bonuses",
            "stats": {}
        },
    },
}