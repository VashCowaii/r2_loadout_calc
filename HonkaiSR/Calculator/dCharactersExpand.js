let characters = {
  "Silver Wolf": {
    "internalID": 1006,
    "name": "Silver Wolf",
    "path": "Nihility",
    "element": "Quantum",
    "rarity": 5,
    "energyMax": 110,
    "baseStats": {
      "ATKBase": 640.332,
      "DEFBase": 460.845,
      "HPBase": 1047.816,
      "SPDBase": 107,
      "CritRateBase": 0.05,
      "CritDamageBase": 0.5,
      "CharacterAggroBase": 100
    },
    "eidolons": [
      {
        "id": "1100601",
        "name": "Social Engineering",
        "rank": 1,
        "desc": "After using Ultimate to attack an enemy target, Silver Wolf regenerates 7 Energy for every debuff on the target. This effect can trigger up to 5 time(s) in each use of Ultimate.",
        "icon": "icon/skill/1100_rank1.png",
        "paramsEido": [
          7,
          5
        ],
        "extraEffects": {
          "Debuff": {
            "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled."
          }
        }
      },
      {
        "id": "1100602",
        "name": "Zombie Network",
        "rank": 2,
        "desc": "When an enemy target enters combat, increases their DMG taken by 20%. When an enemy target gets attacked by ally targets, Silver Wolf has a 100% base chance to implant 1 random \"Bug\" on the attacked enemy target.",
        "icon": "icon/skill/1100_rank2.png",
        "paramsEido": [
          0.2,
          1
        ],
        "extraEffects": {
          "Base Chance": {
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
          }
        },
        "eidoAbility": "SilverWolf_Advanced_Silwolf_Eidolon2"
      },
      {
        "id": "1100603",
        "name": "Payload",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1100_skill.png"
      },
      {
        "id": "1100604",
        "name": "Bounce Attack",
        "rank": 4,
        "desc": "After using Ultimate to attack an enemy target, deals Quantum Additional DMG equal to 20% of Silver Wolf's ATK for every debuff on the target. This effect can trigger up to 5 time(s) per target during each use of Ultimate.",
        "icon": "icon/skill/1100_rank4.png",
        "paramsEido": [
          0.2,
          5
        ],
        "extraEffects": {
          "Debuff": {
            "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled."
          },
          "Additional DMG": {
            "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
          }
        }
      },
      {
        "id": "1100605",
        "name": "Brute Force Attack",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1100_ultimate.png"
      },
      {
        "id": "1100606",
        "name": "Overlay Network",
        "rank": 6,
        "desc": "For every debuff the enemy target has, the DMG dealt by Silver Wolf to it increases by 20%, up to a max increase of 100%.",
        "icon": "icon/skill/1100_rank6.png",
        "paramsEido": [
          0.2,
          1
        ],
        "extraEffects": {
          "Debuff": {
            "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled."
          }
        },
        "eidoAbility": "SilverWolf_Advanced_Silwolf_Eidolon6"
      }
    ],
    "eidlonLevelBonuses": {
      "3": {
        "Skill": 2,
        "Talent": 2
      },
      "5": {
        "Basic ATK": 1,
        "Ultimate": 2
      }
    },
    "skills": {
      "Basic ATK": {
        "System Warning": {
          "variant1": {
            "skillID": 1100601,
            "trigger": "Skill01",
            "name": "System Warning",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Quantum DMG equal to #1[i]% of Silver Wolf's ATK to one designated enemy.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "1": [
                0.5
              ],
              "2": [
                0.6
              ],
              "3": [
                0.7
              ],
              "4": [
                0.8
              ],
              "5": [
                0.9
              ],
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
              ],
              "9": [
                1.3
              ],
              "10": [
                1.4
              ]
            },
            "element": "Quantum",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Advanced_Silwolf_00_Skill01_Camera",
              "Avatar_Advanced_Silwolf_00_Skill01_Phase01",
              "Avatar_Advanced_Silwolf_00_Skill01_Phase02",
              "Avatar_Advanced_Silwolf_00_PassiveSkill_RandomBug"
            ],
            "toughnessList": [
              30,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "Allow Changes?": {
          "variant1": {
            "skillID": 1100602,
            "trigger": "Skill02",
            "name": "Allow Changes?",
            "type": "Single Target",
            "slot": "Skill",
            "desc": "There is a #2[i]% base chance to add 1 Weakness of an on-field ally target's Type to one designated enemy target (prioritizing the implant of a Weakness that matches the first character in the team lineup). This also reduces the enemy target's RES to that Weakness Type by #4[i]% for #3[i] turn(s). If the enemy target already has that Type of Weakness, the RES reduction effect to that Type will not be triggered.\\nEach enemy target can only have 1 Weakness implanted by Silver Wolf. When Silver Wolf implants another Weakness to the target, only the most recent implanted Weakness will be retained.\\nIn addition, there is a #5[i]% base chance to further reduce the target's All-Type RES by #6[f1]% for #7[i] turn(s).\\nDeals Quantum DMG equal to #1[i]% of Silver Wolf's ATK to this target.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.98,
                0.8,
                3,
                0.2,
                1,
                0.105,
                2
              ],
              "2": [
                1.078,
                0.84,
                3,
                0.2,
                1,
                0.1075,
                2
              ],
              "3": [
                1.176,
                0.88,
                3,
                0.2,
                1,
                0.11,
                2
              ],
              "4": [
                1.274,
                0.92,
                3,
                0.2,
                1,
                0.1125,
                2
              ],
              "5": [
                1.372,
                0.96,
                3,
                0.2,
                1,
                0.115,
                2
              ],
              "6": [
                1.47,
                1,
                3,
                0.2,
                1,
                0.1175,
                2
              ],
              "7": [
                1.5925,
                1.05,
                3,
                0.2,
                1,
                0.120625004,
                2
              ],
              "8": [
                1.715,
                1.1,
                3,
                0.2,
                1,
                0.12375,
                2
              ],
              "9": [
                1.8375,
                1.15,
                3,
                0.2,
                1,
                0.126875,
                2
              ],
              "10": [
                1.96,
                1.2,
                3,
                0.2,
                1,
                0.13,
                2
              ],
              "11": [
                2.058,
                1.24,
                3,
                0.2,
                1,
                0.1325,
                2
              ],
              "12": [
                2.156,
                1.28,
                3,
                0.2,
                1,
                0.135,
                2
              ],
              "13": [
                2.254,
                1.32,
                3,
                0.2,
                1,
                0.1375,
                2
              ],
              "14": [
                2.352,
                1.36,
                3,
                0.2,
                1,
                0.14,
                2
              ],
              "15": [
                2.45,
                1.4,
                3,
                0.2,
                1,
                0.1425,
                2
              ]
            },
            "element": "Quantum",
            "attackType": "BPSkill",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Advanced_Silwolf_00_Skill02_Camera",
              "Avatar_Advanced_Silwolf_00_Skill02_Phase01",
              "Avatar_Advanced_Silwolf_00_Skill02_Phase02",
              "Avatar_Advanced_Silwolf_00_Skill02_Success_Camera",
              "Avatar_Advanced_Silwolf_00_Skill02_Failed_Camera"
            ],
            "toughnessList": [
              60,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Base Chance": {
                "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
              }
            }
          }
        }
      },
      "Ultimate": {
        "User Banned": {
          "variant1": {
            "skillID": 1100603,
            "trigger": "Skill03",
            "name": "User Banned",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Has a #2[i]% base chance to reduce the DEF of all enemies by #3[f1]% for #4[i] turn(s). At the same time, deals Quantum DMG equal to #1[i]% of Silver Wolf's ATK to all enemies.",
            "energyCost": 110,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                2.28,
                0.8,
                0.36,
                3
              ],
              "2": [
                2.432,
                0.84,
                0.369,
                3
              ],
              "3": [
                2.584,
                0.88,
                0.378,
                3
              ],
              "4": [
                2.736,
                0.92,
                0.387,
                3
              ],
              "5": [
                2.888,
                0.96,
                0.396,
                3
              ],
              "6": [
                3.04,
                1,
                0.405,
                3
              ],
              "7": [
                3.23,
                1.05,
                0.41625,
                3
              ],
              "8": [
                3.42,
                1.1,
                0.4275,
                3
              ],
              "9": [
                3.61,
                1.15,
                0.43875,
                3
              ],
              "10": [
                3.8,
                1.2,
                0.45,
                3
              ],
              "11": [
                3.952,
                1.24,
                0.459,
                3
              ],
              "12": [
                4.104,
                1.28,
                0.468,
                3
              ],
              "13": [
                4.256,
                1.32,
                0.477,
                3
              ],
              "14": [
                4.408,
                1.36,
                0.486,
                3
              ],
              "15": [
                4.56,
                1.4,
                0.495,
                3
              ]
            },
            "element": "Quantum",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Advanced_Silwolf_00_Skill03_Camera",
              "Avatar_Advanced_Silwolf_00_Skill03_EnterReady",
              "Avatar_Advanced_Silwolf_00_Skill03_Phase01",
              "Avatar_Advanced_Silwolf_00_Skill03_Phase02"
            ],
            "toughnessList": [
              0,
              60,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Base Chance": {
                "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
              }
            }
          }
        }
      },
      "Talent": {
        "Awaiting System Response...": {
          "variant1": {
            "skillID": 1100604,
            "trigger": "SkillP01",
            "name": "Awaiting System Response...",
            "type": "Impair",
            "slot": "Talent",
            "desc": "Silver Wolf can create three types of \"Bugs\": Reduce ATK by #1[f1]%, reduce DEF by #2[f1]%, and reduce SPD by #3[f1]%.\\nAfter every attack launched by Silver Wolf, she has a #4[i]% base chance to implant 1 random \"Bug\" that lasts for #5[i] turn(s) in the attacked enemy target. \\nWhen the enemy target gets defeated, the Weakness Silver Wolf implanted on it will be transferred to another surviving enemy on the field that hasn't been implanted with Weakness by Silver Wolf, prioritizing targets at Elite-level and above.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.05,
                0.06,
                0.03,
                0.6,
                3
              ],
              "2": [
                0.055,
                0.066,
                0.033,
                0.64,
                3
              ],
              "3": [
                0.06,
                0.072,
                0.036,
                0.68,
                3
              ],
              "4": [
                0.065,
                0.078,
                0.039,
                0.72,
                3
              ],
              "5": [
                0.07,
                0.084,
                0.042,
                0.76,
                3
              ],
              "6": [
                0.075,
                0.09,
                0.044999998,
                0.8,
                3
              ],
              "7": [
                0.08125,
                0.0975,
                0.048750002,
                0.85,
                3
              ],
              "8": [
                0.0875,
                0.105,
                0.052500002,
                0.9,
                3
              ],
              "9": [
                0.09375,
                0.1125,
                0.05625,
                0.95,
                3
              ],
              "10": [
                0.1,
                0.12,
                0.06,
                1,
                3
              ],
              "11": [
                0.105,
                0.126,
                0.063,
                1.04,
                3
              ],
              "12": [
                0.11,
                0.132,
                0.066,
                1.08,
                3
              ],
              "13": [
                0.115,
                0.138,
                0.069,
                1.12,
                3
              ],
              "14": [
                0.12,
                0.144,
                0.072,
                1.16,
                3
              ],
              "15": [
                0.125,
                0.15,
                0.075,
                1.2,
                3
              ]
            },
            "skillEffect": "Impair",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Advanced_Silwolf_00_PassiveSkill01"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Base Chance": {
                "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
              }
            }
          }
        }
      },
      "Technique": {
        "Force Quit Program": {
          "variant1": {
            "skillID": 1100607,
            "trigger": "SkillMaze",
            "name": "Force Quit Program",
            "slot": "Technique",
            "desc": "Immediately attacks the enemy. After entering combat, deals Quantum DMG equal to #1[i]% of Silver Wolf's ATK to all enemies, and reduces Toughness of all enemies regardless of Weakness Types. Enemies with their Weakness Broken in this way will trigger the Quantum Weakness Break effect.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.8
              ]
            },
            "element": "Quantum",
            "attackType": "Maze",
            "skillEffect": "MazeAttack",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Advanced_Silwolf_00_SkillMazeInLevel"
            ],
            "toughnessList": [
              60,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1006_basic_atk.png",
        "skillRef": {
          "skillName": "System Warning",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1006_skill.png",
        "skillRef": {
          "skillName": "Allow Changes?",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1006_ultimate.png",
        "skillRef": {
          "skillName": "User Banned",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1006_talent.png",
        "skillRef": {
          "skillName": "Awaiting System Response...",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1006_technique.png",
        "skillRef": {
          "skillName": "Force Quit Program",
          "skillSlot": "Technique"
        }
      },
      "Point09": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.04
        }
      },
      "Point10": {
        "name": "Effect Hit Rate Boost",
        "icon": "icon/property/IconStatusProbability.png",
        "stats": {
          "EffectHitRate": 0.04
        }
      },
      "Point11": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.04
        }
      },
      "Point12": {
        "name": "DMG Boost: Quantum",
        "icon": "icon/property/IconQuantumAddedRatio.png",
        "stats": {
          "DamageQuantum": 0.032
        }
      },
      "Point13": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.06
        }
      },
      "Point14": {
        "name": "Effect Hit Rate Boost",
        "icon": "icon/property/IconStatusProbability.png",
        "stats": {
          "EffectHitRate": 0.06
        }
      },
      "Point15": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.06
        }
      },
      "Point16": {
        "name": "DMG Boost: Quantum",
        "icon": "icon/property/IconQuantumAddedRatio.png",
        "stats": {
          "DamageQuantum": 0.048
        }
      },
      "Point17": {
        "name": "Effect Hit Rate Boost",
        "icon": "icon/property/IconStatusProbability.png",
        "stats": {
          "EffectHitRate": 0.08
        }
      },
      "Point18": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.08
        }
      },
      "Point06": {
        "name": "Generate",
        "icon": "icon/skill/1006_skilltree1.png",
        "desc": "The duration of \"Bug\" is extended by #1[i] turn(s). Every time an enemy's Weakness gets broken, Silver Wolf has a #2[i]% base chance of implanting a random \"Bug\" on that target.",
        "params": [
          1,
          1
        ],
        "traceAbility": "SilverWolf_Advanced_Silwolf_Trace01",
        "extraEffects": {
          "Base Chance": {
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
          }
        }
      },
      "Point07": {
        "name": "Inject",
        "icon": "icon/skill/1006_skilltree2.png",
        "desc": "When the battle starts, immediately regenerates #1[i] Energy. When Silver Wolf's turn starts, she regenerates #2[i] Energy.",
        "params": [
          20,
          5
        ]
      },
      "Point08": {
        "name": "Side Note",
        "icon": "icon/skill/1006_skilltree3.png",
        "desc": "For every #1[i]% Effect Hit Rate that Silver Wolf has, additionally increases her ATK by #2[i]%, up to a max of #3[i]%.",
        "params": [
          0.1,
          0.1,
          0.5
        ]
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1006.png",
    "preview": "image/character_preview/1006.png",
    "portrait": "image/character_portrait/1006.png",
    "bannerOffsets": [
      -33,
      33,
      0.5,
      -33,
      33,
      0.5,
      -33,
      33,
      0.5
    ],
    "isBuffed": true
  },
  "Bronya": {
    "internalID": 1101,
    "name": "Bronya",
    "path": "Harmony",
    "element": "Wind",
    "rarity": 5,
    "energyMax": 120,
    "baseStats": {
      "ATKBase": 582.1199999999999,
      "DEFBase": 533.61,
      "HPBase": 1241.8560000000002,
      "SPDBase": 99,
      "CritRateBase": 0.05,
      "CritDamageBase": 0.5,
      "CharacterAggroBase": 100
    },
    "eidolons": [
      {
        "id": "110101",
        "name": "Hone Your Strength",
        "rank": 1,
        "desc": "When using Skill, there is a 50% fixed chance of recovering 1 Skill Point. This effect has a 1-turn cooldown.",
        "icon": "icon/skill/1101_rank1.png",
        "paramsEido": [
          0.5
        ],
        "extraEffects": {
          "Fixed Chance": {
            "desc": "Fixed chance will not be affected by any factor."
          }
        },
        "eidoAbility": "Bronya_Bronya_Eidolon1"
      },
      {
        "id": "110102",
        "name": "Quick March",
        "rank": 2,
        "desc": "When using Skill, the target ally's SPD increases by 30% after taking action, lasting for 1 turn.",
        "icon": "icon/skill/1101_rank2.png",
        "paramsEido": [
          0.3
        ]
      },
      {
        "id": "110103",
        "name": "Bombardment",
        "rank": 3,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1101_ultimate.png"
      },
      {
        "id": "110104",
        "name": "Take by Surprise",
        "rank": 4,
        "desc": "After any other ally character uses Basic ATK on an enemy target that has Wind Weakness, Bronya immediately launches 1 instance of Follow-Up ATK, dealing Wind DMG to this target equal to 80% of her Basic ATK DMG. This effect can only trigger once per turn.",
        "icon": "icon/skill/1101_rank4.png",
        "paramsEido": [
          0.8
        ],
        "extraEffects": {
          "Follow-Up ATK": {
            "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
          }
        },
        "eidoAbility": "Bronya_Bronya_Eidolon4"
      },
      {
        "id": "110105",
        "name": "Unstoppable",
        "rank": 5,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1101_skill.png"
      },
      {
        "id": "110106",
        "name": "Piercing Rainbow",
        "rank": 6,
        "desc": "The duration of the DMG Boost effect placed by the Skill on the target ally increases by 1 turn(s).",
        "icon": "icon/skill/1101_rank6.png",
        "paramsEido": [
          1
        ]
      }
    ],
    "eidlonLevelBonuses": {
      "3": {
        "Ultimate": 2,
        "Talent": 2
      },
      "5": {
        "Basic ATK": 1,
        "Skill": 2
      }
    },
    "skills": {
      "Basic ATK": {
        "Windrider Bullet": {
          "variant1": {
            "skillID": 110101,
            "trigger": "Skill01",
            "name": "Windrider Bullet",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Wind DMG equal to #1[i]% of Bronya's ATK to one designated enemy.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "1": [
                0.5
              ],
              "2": [
                0.6
              ],
              "3": [
                0.7
              ],
              "4": [
                0.8
              ],
              "5": [
                0.9
              ],
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
              ],
              "9": [
                1.3
              ],
              "10": [
                1.4
              ]
            },
            "element": "Wind",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Bronya_00_Skill01_Camera",
              "Bronya_00_Skill01_Phase01",
              "Bronya_00_Skill01_Phase02"
            ],
            "toughnessList": [
              30,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "Combat Redeployment": {
          "variant1": {
            "skillID": 110102,
            "trigger": "Skill02",
            "name": "Combat Redeployment",
            "type": "Support",
            "slot": "Skill",
            "desc": "Dispels a debuff from a single ally, allows them to immediately take action, and increases their DMG by #1[i]% for #3[i] turn(s).\\nWhen this Skill is used on Bronya herself, she cannot immediately take action again.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.33,
                0,
                1,
                1
              ],
              "2": [
                0.363,
                0,
                1,
                1
              ],
              "3": [
                0.396,
                0,
                1,
                1
              ],
              "4": [
                0.429,
                0,
                1,
                1
              ],
              "5": [
                0.462,
                0,
                1,
                1
              ],
              "6": [
                0.495,
                0,
                1,
                1
              ],
              "7": [
                0.53625,
                0,
                1,
                1
              ],
              "8": [
                0.5775,
                0,
                1,
                1
              ],
              "9": [
                0.61875,
                0,
                1,
                1
              ],
              "10": [
                0.66,
                0,
                1,
                1
              ],
              "11": [
                0.693,
                0,
                1,
                1
              ],
              "12": [
                0.726,
                0,
                1,
                1
              ],
              "13": [
                0.759,
                0,
                1,
                1
              ],
              "14": [
                0.792,
                0,
                1,
                1
              ],
              "15": [
                0.825,
                0,
                1,
                1
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Bronya_00_Skill02_Others_Camera",
              "Avatar_Bronya_00_Skill02_Self_Camera",
              "Bronya_00_Skill02_Phase01",
              "Bronya_00_Skill02_Others_Phase02",
              "Bronya_00_Skill02_Self_Phase02"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Debuff": {
                "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled."
              }
            }
          }
        }
      },
      "Ultimate": {
        "The Belobog March": {
          "variant1": {
            "skillID": 110103,
            "trigger": "Skill03",
            "name": "The Belobog March",
            "type": "Support",
            "slot": "Ultimate",
            "desc": "Increases the ATK of all allies by #1[i]%, and increases their CRIT DMG equal to #2[f1]% of Bronya's CRIT DMG plus #3[f1]% for #4[i] turn(s).",
            "energyCost": 120,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.33,
                0.12,
                0.12,
                2
              ],
              "2": [
                0.352,
                0.124,
                0.128,
                2
              ],
              "3": [
                0.374,
                0.128,
                0.13599999,
                2
              ],
              "4": [
                0.396,
                0.132,
                0.144,
                2
              ],
              "5": [
                0.418,
                0.13599999,
                0.152,
                2
              ],
              "6": [
                0.44,
                0.14,
                0.16,
                2
              ],
              "7": [
                0.4675,
                0.145,
                0.17,
                2
              ],
              "8": [
                0.495,
                0.15,
                0.18,
                2
              ],
              "9": [
                0.5225,
                0.155,
                0.19,
                2
              ],
              "10": [
                0.55,
                0.16,
                0.2,
                2
              ],
              "11": [
                0.572,
                0.164,
                0.208,
                2
              ],
              "12": [
                0.594,
                0.168,
                0.216,
                2
              ],
              "13": [
                0.616,
                0.172,
                0.224,
                2
              ],
              "14": [
                0.638,
                0.176,
                0.232,
                2
              ],
              "15": [
                0.66,
                0.18,
                0.24,
                2
              ]
            },
            "attackType": "Ultra",
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Bronya_00_Skill03_Camera",
              "Avatar_Bronya_00_Skill03_EnterReady",
              "Bronya_00_Skill03_Phase01",
              "Bronya_00_Skill03_Phase02"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Talent": {
        "Leading the Way": {
          "variant1": {
            "skillID": 110104,
            "trigger": "SkillP01",
            "name": "Leading the Way",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "After using her Basic ATK, Bronya's next action will be Advanced Forward by #1[i]%.",
            "energyCost": null,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.15
              ],
              "2": [
                0.165
              ],
              "3": [
                0.18
              ],
              "4": [
                0.195
              ],
              "5": [
                0.21
              ],
              "6": [
                0.225
              ],
              "7": [
                0.24375
              ],
              "8": [
                0.2625
              ],
              "9": [
                0.28125
              ],
              "10": [
                0.3
              ],
              "11": [
                0.315
              ],
              "12": [
                0.33
              ],
              "13": [
                0.345
              ],
              "14": [
                0.36
              ],
              "15": [
                0.375
              ]
            },
            "element": "Wind",
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Bronya_00_PassiveSkill_1",
              "Avatar_Bronya_00_Rank04_ATK",
              "Avatar_Bronya_00_Rank04_ATK_Camera"
            ],
            "toughnessList": [
              30,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Action Advanced": {
                "desc": "Reduces the target's waiting interval before the next action."
              }
            }
          }
        }
      },
      "Technique": {
        "Banner of Command": {
          "variant1": {
            "skillID": 110107,
            "trigger": "SkillMaze",
            "name": "Banner of Command",
            "type": "Support",
            "slot": "Technique",
            "desc": "After using Bronya's Technique, at the start of the next battle, all allies' ATK increases by #1[i]% for #2[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.15,
                2
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Support",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Bronya_00_SkillMazeInLevel"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1101_basic_atk.png",
        "skillRef": {
          "skillName": "Windrider Bullet",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1101_skill.png",
        "skillRef": {
          "skillName": "Combat Redeployment",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1101_ultimate.png",
        "skillRef": {
          "skillName": "The Belobog March",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1101_talent.png",
        "skillRef": {
          "skillName": "Leading the Way",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1101_technique.png",
        "skillRef": {
          "skillName": "Banner of Command",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Command",
        "icon": "icon/skill/1101_skilltree1.png",
        "desc": "The CRIT Rate for Basic ATK increases to 100%."
      },
      "Point07": {
        "name": "Battlefield",
        "icon": "icon/skill/1101_skilltree2.png",
        "desc": "At the start of the battle, all allies' DEF increases by #2[i]% for #1[i] turn(s).",
        "params": [
          2,
          0.2
        ],
        "traceAbility": "Bronya_Bronya_Trace02"
      },
      "Point08": {
        "name": "Military Might",
        "icon": "icon/skill/1101_skilltree3.png",
        "desc": "When Bronya is on the field, all allies deal #1[i]% more DMG.",
        "params": [
          0.1
        ],
        "traceAbility": "Bronya_Bronya_Trace03"
      },
      "Point09": {
        "name": "DMG Boost: Wind",
        "icon": "icon/property/IconWindAddedRatio.png",
        "stats": {
          "DamageWind": 0.032
        }
      },
      "Point10": {
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.053
        }
      },
      "Point11": {
        "name": "DMG Boost: Wind",
        "icon": "icon/property/IconWindAddedRatio.png",
        "stats": {
          "DamageWind": 0.032
        }
      },
      "Point12": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.04
        }
      },
      "Point13": {
        "name": "DMG Boost: Wind",
        "icon": "icon/property/IconWindAddedRatio.png",
        "stats": {
          "DamageWind": 0.048
        }
      },
      "Point14": {
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.08
        }
      },
      "Point15": {
        "name": "DMG Boost: Wind",
        "icon": "icon/property/IconWindAddedRatio.png",
        "stats": {
          "DamageWind": 0.048
        }
      },
      "Point16": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.06
        }
      },
      "Point17": {
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.107
        }
      },
      "Point18": {
        "name": "DMG Boost: Wind",
        "icon": "icon/property/IconWindAddedRatio.png",
        "stats": {
          "DamageWind": 0.064
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1101.png",
    "preview": "image/character_preview/1101.png",
    "portrait": "image/character_portrait/1101.png",
    "bannerOffsets": [
      59,
      194,
      0.77,
      59,
      194,
      0.77,
      59,
      194,
      0.77
    ],
    "isBuffed": false
  },
  "Natasha": {
    "internalID": 1105,
    "name": "Natasha",
    "path": "Abundance",
    "element": "Physical",
    "rarity": 4,
    "energyMax": 90,
    "baseStats": {
      "ATKBase": 476.28,
      "DEFBase": 507.15,
      "HPBase": 1164.2399999999998,
      "SPDBase": 98,
      "CritRateBase": 0.05,
      "CritDamageBase": 0.5,
      "CharacterAggroBase": 100
    },
    "eidolons": [
      {
        "id": "110501",
        "name": "Pharmacology Expertise",
        "rank": 1,
        "desc": "After being attacked, if the current HP percentage is 30% or lower, heals self for 1 time to restore HP by an amount equal to 15% of Max HP plus 400. This effect can only be triggered 1 time per battle.",
        "icon": "icon/skill/1105_rank1.png",
        "paramsEido": [
          0.3,
          0.15,
          400
        ],
        "eidoAbility": "Natasha_Natasha_Eidolon1"
      },
      {
        "id": "110502",
        "name": "Clinical Research",
        "rank": 2,
        "desc": "When Natasha uses her Ultimate, grant continuous healing for 1 turn(s) to allies whose HP percentage is at 30% or lower. And at the beginning of their turn, their HP is restored by an amount equal to 6% of Natasha's Max HP plus 160.",
        "icon": "icon/skill/1105_rank2.png",
        "paramsEido": [
          0.3,
          1,
          0.06,
          160
        ]
      },
      {
        "id": "110503",
        "name": "The Right Cure",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1105_skill.png"
      },
      {
        "id": "110504",
        "name": "Miracle Cure",
        "rank": 4,
        "desc": "After being attacked, regenerates 5 extra Energy.",
        "icon": "icon/skill/1105_rank4.png",
        "paramsEido": [
          5
        ],
        "eidoAbility": "Natasha_Natasha_Eidolon4"
      },
      {
        "id": "110505",
        "name": "Preventive Treatment",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1105_ultimate.png"
      },
      {
        "id": "110506",
        "name": "Doctor's Grace",
        "rank": 6,
        "desc": "Natasha's Basic ATK additionally deals Physical DMG equal to 40% of her Max HP.",
        "icon": "icon/skill/1105_rank6.png",
        "paramsEido": [
          0.4
        ]
      }
    ],
    "eidlonLevelBonuses": {
      "3": {
        "Basic ATK": 1,
        "Skill": 2
      },
      "5": {
        "Ultimate": 2,
        "Talent": 2
      }
    },
    "skills": {
      "Basic ATK": {
        "Behind the Kindness": {
          "variant1": {
            "skillID": 110501,
            "trigger": "Skill01",
            "name": "Behind the Kindness",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Physical DMG equal to #1[i]% of Natasha's ATK to one designated enemy.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "1": [
                0.5
              ],
              "2": [
                0.6
              ],
              "3": [
                0.7
              ],
              "4": [
                0.8
              ],
              "5": [
                0.9
              ],
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
              ],
              "9": [
                1.3
              ],
              "10": [
                1.4
              ]
            },
            "element": "Physical",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Natasha_00_Skill01_Camera",
              "Avatar_Natasha_00_Skill01_Phase01",
              "Avatar_Natasha_00_Skill01_Phase02"
            ],
            "toughnessList": [
              30,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "Love, Heal, and Choose": {
          "variant1": {
            "skillID": 110502,
            "trigger": "Skill02",
            "name": "Love, Heal, and Choose",
            "type": "Restore",
            "slot": "Skill",
            "desc": "Restores a single ally for #1[f1]% of Natasha's Max HP plus #4[i]. Restores the ally for another #2[f1]% of Natasha's Max HP plus #5[i] at the beginning of each turn for #3[i] turn(s).",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.07,
                0.048,
                2,
                70,
                48
              ],
              "2": [
                0.074375,
                0.051,
                2,
                112,
                76.8
              ],
              "3": [
                0.07875,
                0.054,
                2,
                143.5,
                98.4
              ],
              "4": [
                0.083125,
                0.057,
                2,
                175,
                120
              ],
              "5": [
                0.0875,
                0.06,
                2,
                196,
                134.4
              ],
              "6": [
                0.091,
                0.0624,
                2,
                217,
                148.8
              ],
              "7": [
                0.0945,
                0.0648,
                2,
                232.75,
                159.6
              ],
              "8": [
                0.098,
                0.0672,
                2,
                248.5,
                170.4
              ],
              "9": [
                0.1015,
                0.0696,
                2,
                264.25,
                181.2
              ],
              "10": [
                0.105,
                0.072,
                2,
                280,
                192
              ],
              "11": [
                0.1085,
                0.0744,
                2,
                295.75,
                202.8
              ],
              "12": [
                0.112,
                0.0768,
                2,
                311.5,
                213.6
              ],
              "13": [
                0.1155,
                0.0792,
                2,
                327.25,
                224.4
              ],
              "14": [
                0.119,
                0.0816,
                2,
                343,
                235.2
              ],
              "15": [
                0.1225,
                0.084,
                2,
                358.75,
                246
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Restore",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Natasha_00_Skill02_Camera_Self",
              "Avatar_Natasha_00_Skill02_Camera_Other",
              "Avatar_Natasha_00_Skill02_Phase01",
              "Avatar_Natasha_00_Skill02_Phase02"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Ultimate": {
        "Gift of Rebirth": {
          "variant1": {
            "skillID": 110503,
            "trigger": "Skill03",
            "name": "Gift of Rebirth",
            "type": "Restore",
            "slot": "Ultimate",
            "desc": "Heals all allies for #1[f1]% of Natasha's Max HP plus #2[i].",
            "energyCost": 90,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.092,
                92
              ],
              "2": [
                0.09775,
                147.2
              ],
              "3": [
                0.1035,
                188.6
              ],
              "4": [
                0.10925,
                230
              ],
              "5": [
                0.115,
                257.6
              ],
              "6": [
                0.1196,
                285.2
              ],
              "7": [
                0.1242,
                305.9
              ],
              "8": [
                0.1288,
                326.6
              ],
              "9": [
                0.1334,
                347.3
              ],
              "10": [
                0.138,
                368
              ],
              "11": [
                0.1426,
                388.7
              ],
              "12": [
                0.1472,
                409.4
              ],
              "13": [
                0.1518,
                430.1
              ],
              "14": [
                0.1564,
                450.8
              ],
              "15": [
                0.161,
                471.5
              ]
            },
            "attackType": "Ultra",
            "skillEffect": "Restore",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Natasha_00_Skill03_Camera",
              "Avatar_Natasha_00_Skill03_EnterReady",
              "Avatar_Natasha_00_Skill03_Phase01",
              "Avatar_Natasha_00_Skill03_Phase02"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Talent": {
        "Innervation": {
          "variant1": {
            "skillID": 110504,
            "trigger": "SkillP01",
            "name": "Innervation",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "When healing allies with HP percentage at #1[i]% or lower, increases Natasha's Outgoing Healing by #2[i]%. This effect also works on continuous healing.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.3,
                0.25
              ],
              "2": [
                0.3,
                0.275
              ],
              "3": [
                0.3,
                0.3
              ],
              "4": [
                0.3,
                0.325
              ],
              "5": [
                0.3,
                0.35
              ],
              "6": [
                0.3,
                0.375
              ],
              "7": [
                0.3,
                0.40625
              ],
              "8": [
                0.3,
                0.4375
              ],
              "9": [
                0.3,
                0.46875
              ],
              "10": [
                0.3,
                0.5
              ],
              "11": [
                0.3,
                0.525
              ],
              "12": [
                0.3,
                0.55
              ],
              "13": [
                0.3,
                0.575
              ],
              "14": [
                0.3,
                0.6
              ],
              "15": [
                0.3,
                0.625
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Natasha_00_PassiveSkill01"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Technique": {
        "Hypnosis Research": {
          "variant1": {
            "skillID": 110507,
            "trigger": "SkillMaze",
            "name": "Hypnosis Research",
            "slot": "Technique",
            "desc": "Immediately attacks the enemy. After entering battle, deals Physical DMG equal to #4[i]% of Natasha's ATK to a random enemy, with a #1[i]% base chance to Weaken all enemies.\\nWhile Weakened, enemies deal #2[i]% less DMG to allies for #3[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                1,
                0.3,
                1,
                0.8
              ]
            },
            "element": "Physical",
            "attackType": "Maze",
            "skillEffect": "MazeAttack",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Natasha_SkillMazeInLevel"
            ],
            "toughnessList": [
              60,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Base Chance": {
                "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
              }
            }
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1105_basic_atk.png",
        "skillRef": {
          "skillName": "Behind the Kindness",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1105_skill.png",
        "skillRef": {
          "skillName": "Love, Heal, and Choose",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1105_ultimate.png",
        "skillRef": {
          "skillName": "Gift of Rebirth",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1105_talent.png",
        "skillRef": {
          "skillName": "Innervation",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1105_technique.png",
        "skillRef": {
          "skillName": "Hypnosis Research",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Soothe",
        "icon": "icon/skill/1105_skilltree1.png",
        "desc": "When using Skill, dispels #1[i] debuff(s) from one designated ally.",
        "params": [
          1
        ],
        "extraEffects": {
          "Debuff": {
            "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled."
          }
        }
      },
      "Point07": {
        "name": "Healer",
        "icon": "icon/skill/1105_skilltree2.png",
        "desc": "Natasha's Outgoing Healing increases by #1[i]%.",
        "params": [
          0.1
        ],
        "traceAbility": "Natasha_Natasha_Trace02"
      },
      "Point08": {
        "name": "Recuperation",
        "icon": "icon/skill/1105_skilltree3.png",
        "desc": "Increases the duration of Skill's continuous healing effect for #1[i] turn(s).",
        "params": [
          1
        ]
      },
      "Point09": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.04
        }
      },
      "Point10": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.04
        }
      },
      "Point11": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.04
        }
      },
      "Point12": {
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.05
        }
      },
      "Point13": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.06
        }
      },
      "Point14": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.06
        }
      },
      "Point15": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.06
        }
      },
      "Point16": {
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.075
        }
      },
      "Point17": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.08
        }
      },
      "Point18": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.08
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1105.png",
    "preview": "image/character_preview/1105.png",
    "portrait": "image/character_portrait/1105.png",
    "bannerOffsets": [
      -11,
      -35,
      0.57,
      -11,
      -35,
      0.57,
      -11,
      -35,
      0.57
    ],
    "isBuffed": false
  },
  "Tingyun": {
    "internalID": 1202,
    "name": "Tingyun",
    "path": "Harmony",
    "element": "Lightning",
    "rarity": 4,
    "energyMax": 130,
    "baseStats": {
      "ATKBase": 529.2,
      "DEFBase": 396.9,
      "HPBase": 846.72,
      "SPDBase": 112,
      "CritRateBase": 0.05,
      "CritDamageBase": 0.5,
      "CharacterAggroBase": 100
    },
    "eidolons": [
      {
        "id": "120201",
        "name": "Windfall of Lucky Springs",
        "rank": 1,
        "desc": "After using their Ultimate, the ally with Benediction gains a 20% increase in SPD for 1 turn.",
        "icon": "icon/skill/1202_rank1.png",
        "paramsEido": [
          0.2
        ]
      },
      {
        "id": "120202",
        "name": "Gainfully Gives, Givingly Gains",
        "rank": 2,
        "desc": "The ally with Benediction regenerates 5 Energy after defeating an enemy. This effect can only be triggered once per turn.",
        "icon": "icon/skill/1202_rank2.png",
        "paramsEido": [
          5
        ]
      },
      {
        "id": "120203",
        "name": "Halcyon Bequest",
        "rank": 3,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1202_ultimate.png"
      },
      {
        "id": "120204",
        "name": "Jovial Versatility",
        "rank": 4,
        "desc": "The DMG multiplier provided by Benediction increases by 20%.",
        "icon": "icon/skill/1202_rank4.png",
        "paramsEido": [
          0.2
        ]
      },
      {
        "id": "120205",
        "name": "Sauntering Coquette",
        "rank": 5,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1202_skill.png"
      },
      {
        "id": "120206",
        "name": "Peace Brings Wealth to All",
        "rank": 6,
        "desc": "Ultimate regenerates 10 more Energy for the target ally.",
        "icon": "icon/skill/1202_rank6.png",
        "paramsEido": [
          10
        ]
      }
    ],
    "eidlonLevelBonuses": {
      "3": {
        "Basic ATK": 1,
        "Ultimate": 2
      },
      "5": {
        "Skill": 2,
        "Talent": 2
      }
    },
    "skills": {
      "Basic ATK": {
        "Dislodged": {
          "variant1": {
            "skillID": 120201,
            "trigger": "Skill01",
            "name": "Dislodged",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Tingyun deals Lightning DMG equal to #1[i]% of her ATK to one designated enemy.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "1": [
                0.5
              ],
              "2": [
                0.6
              ],
              "3": [
                0.7
              ],
              "4": [
                0.8
              ],
              "5": [
                0.9
              ],
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
              ],
              "9": [
                1.3
              ],
              "10": [
                1.4
              ]
            },
            "element": "Lightning",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Tingyun_Skill01_Camera",
              "Avatar_TingYun_Skill01_Phase01",
              "Avatar_TingYun_Skill01_Phase02"
            ],
            "toughnessList": [
              30,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "Soothing Melody": {
          "variant1": {
            "skillID": 120202,
            "trigger": "Skill02",
            "name": "Soothing Melody",
            "type": "Support",
            "slot": "Skill",
            "desc": "Grants a single ally with Benediction to increase their ATK by #2[i]%, up to #4[i]% of Tingyun's current ATK.\\nWhen the ally with Benediction attacks, they will deal Lightning Additional DMG equal to #1[i]% of that ally's ATK for 1 time.\\nBenediction lasts for #3[i] turn(s) and is only effective on the most recent receiver of Tingyun's Skill.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.2,
                0.25,
                3,
                0.15
              ],
              "2": [
                0.22,
                0.275,
                3,
                0.16
              ],
              "3": [
                0.24,
                0.3,
                3,
                0.17
              ],
              "4": [
                0.26,
                0.325,
                3,
                0.18
              ],
              "5": [
                0.28,
                0.35,
                3,
                0.19
              ],
              "6": [
                0.3,
                0.375,
                3,
                0.2
              ],
              "7": [
                0.325,
                0.40625,
                3,
                0.2125
              ],
              "8": [
                0.35,
                0.4375,
                3,
                0.225
              ],
              "9": [
                0.375,
                0.46875,
                3,
                0.2375
              ],
              "10": [
                0.4,
                0.5,
                3,
                0.25
              ],
              "11": [
                0.42,
                0.525,
                3,
                0.26
              ],
              "12": [
                0.44,
                0.55,
                3,
                0.27
              ],
              "13": [
                0.46,
                0.575,
                3,
                0.28
              ],
              "14": [
                0.48,
                0.6,
                3,
                0.29
              ],
              "15": [
                0.5,
                0.625,
                3,
                0.3
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Tingyun_Skill02_Camera_Self",
              "Avatar_TingYun_Skill02_Phase01",
              "Avatar_TingYun_Skill02_Phase02",
              "Avatar_Tingyun_Skill02_Camera_Others"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Additional DMG": {
                "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
              }
            }
          }
        }
      },
      "Ultimate": {
        "Amidst the Rejoicing Clouds": {
          "variant1": {
            "skillID": 120203,
            "trigger": "Skill03",
            "name": "Amidst the Rejoicing Clouds",
            "type": "Support",
            "slot": "Ultimate",
            "desc": "Regenerates #1[i] Energy for a single ally and increases the target's DMG by #3[i]% for #2[i] turn(s).",
            "energyCost": 130,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                50,
                2,
                0.2
              ],
              "2": [
                50,
                2,
                0.23
              ],
              "3": [
                50,
                2,
                0.26
              ],
              "4": [
                50,
                2,
                0.29
              ],
              "5": [
                50,
                2,
                0.32
              ],
              "6": [
                50,
                2,
                0.35
              ],
              "7": [
                50,
                2,
                0.3875
              ],
              "8": [
                50,
                2,
                0.425
              ],
              "9": [
                50,
                2,
                0.4625
              ],
              "10": [
                50,
                2,
                0.5
              ],
              "11": [
                50,
                2,
                0.53
              ],
              "12": [
                50,
                2,
                0.56
              ],
              "13": [
                50,
                2,
                0.59
              ],
              "14": [
                50,
                2,
                0.62
              ],
              "15": [
                50,
                2,
                0.65
              ]
            },
            "attackType": "Ultra",
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_TingYun_Skill03_EnterReady",
              "Avatar_Tingyun_00_Skill03_Camera",
              "Avatar_TingYun_Skill03_Phase01",
              "Avatar_TingYun_Skill03_Phase02"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Talent": {
        "Violet Sparknado": {
          "variant1": {
            "skillID": 120204,
            "trigger": "SkillP01",
            "name": "Violet Sparknado",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "When an enemy is attacked by Tingyun, the ally with Benediction immediately deals Lightning Additional DMG equal to #1[i]% of that ally's ATK to the same enemy.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.3
              ],
              "2": [
                0.33
              ],
              "3": [
                0.36
              ],
              "4": [
                0.39
              ],
              "5": [
                0.42
              ],
              "6": [
                0.45
              ],
              "7": [
                0.4875
              ],
              "8": [
                0.525
              ],
              "9": [
                0.5625
              ],
              "10": [
                0.6
              ],
              "11": [
                0.63
              ],
              "12": [
                0.66
              ],
              "13": [
                0.69
              ],
              "14": [
                0.72
              ],
              "15": [
                0.75
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_TingYun_PassiveSkill01"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Additional DMG": {
                "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
              }
            }
          }
        }
      },
      "Technique": {
        "Gentle Breeze": {
          "variant1": {
            "skillID": 120207,
            "trigger": "SkillMaze",
            "name": "Gentle Breeze",
            "type": "Support",
            "slot": "Technique",
            "desc": "Tingyun immediately regenerates #1[i] Energy upon using her Technique.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                50
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Support",
            "maxLevel": 1,
            "configAbilityList": null,
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1202_basic_atk.png",
        "skillRef": {
          "skillName": "Dislodged",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1202_skill.png",
        "skillRef": {
          "skillName": "Soothing Melody",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1202_ultimate.png",
        "skillRef": {
          "skillName": "Amidst the Rejoicing Clouds",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1202_talent.png",
        "skillRef": {
          "skillName": "Violet Sparknado",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1202_technique.png",
        "skillRef": {
          "skillName": "Gentle Breeze",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Nourished Joviality",
        "icon": "icon/skill/1202_skilltree1.png",
        "desc": "Tingyun's SPD increases by #1[i]% for 1 turn after using Skill.",
        "params": [
          0.2
        ]
      },
      "Point07": {
        "name": "Knell Subdual",
        "icon": "icon/skill/1202_skilltree2.png",
        "desc": "DMG dealt by Basic ATK increases by #1[i]%.",
        "params": [
          0.4
        ]
      },
      "Point08": {
        "name": "Jubilant Passage",
        "icon": "icon/skill/1202_skilltree3.png",
        "desc": "Tingyun immediately regenerates #1[i] Energy at the start of her turn.",
        "params": [
          5
        ],
        "traceAbility": "Tingyun_Tingyun_Trace03"
      },
      "Point09": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.04
        }
      },
      "Point10": {
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.05
        }
      },
      "Point11": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.04
        }
      },
      "Point12": {
        "name": "DMG Boost: Lightning",
        "icon": "icon/property/IconThunderAddedRatio.png",
        "stats": {
          "DamageLightning": 0.032
        }
      },
      "Point13": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.06
        }
      },
      "Point14": {
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.075
        }
      },
      "Point15": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.06
        }
      },
      "Point16": {
        "name": "DMG Boost: Lightning",
        "icon": "icon/property/IconThunderAddedRatio.png",
        "stats": {
          "DamageLightning": 0.048
        }
      },
      "Point17": {
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.1
        }
      },
      "Point18": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.08
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1202.png",
    "preview": "image/character_preview/1202.png",
    "portrait": "image/character_portrait/1202.png",
    "bannerOffsets": [
      -19,
      -32,
      0.58,
      -19,
      -32,
      0.58,
      -19,
      -32,
      0.58
    ],
    "isBuffed": false
  },
  "Blade": {
    "internalID": 1205,
    "name": "Blade",
    "path": "Destruction",
    "element": "Wind",
    "rarity": 5,
    "energyMax": 130,
    "baseStats": {
      "ATKBase": 543.312,
      "DEFBase": 485.1,
      "HPBase": 1358.2800000000002,
      "SPDBase": 97,
      "CritRateBase": 0.05,
      "CritDamageBase": 0.5,
      "CharacterAggroBase": 125
    },
    "eidolons": [
      {
        "id": "1120501",
        "name": "Blade Cuts the Deepest in Hell",
        "rank": 1,
        "desc": "Enhanced Basic ATK and Ultimate deal additionally increased DMG to one designated enemy, with the increased amount equal to 150% of the tally of HP loss from Ultimate.",
        "icon": "icon/skill/1120_rank1.png",
        "paramsEido": [
          1.5,
          0.9
        ]
      },
      {
        "id": "1120502",
        "name": "Ten Thousand Sorrows From One Broken Dream",
        "rank": 2,
        "desc": "When Blade is in the \"Hellscape\" state, his CRIT Rate increases by 15%.",
        "icon": "icon/skill/1120_rank2.png",
        "paramsEido": [
          0.15
        ]
      },
      {
        "id": "1120503",
        "name": "Hardened Blade Bleeds Coldest Shade",
        "rank": 3,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1120_ultimate.png"
      },
      {
        "id": "1120504",
        "name": "Rejected by Death, Infected With Life",
        "rank": 4,
        "desc": "When Blade's current HP percentage drops from above 50% to 50% of his Max HP or lower, increases his Max HP by 20%. Stacks up to 2 time(s).",
        "icon": "icon/skill/1120_rank4.png",
        "paramsEido": [
          0.2,
          2
        ]
      },
      {
        "id": "1120505",
        "name": "Death By Ten Lords' Gaze",
        "rank": 5,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1120_skill.png"
      },
      {
        "id": "1120506",
        "name": "Reborn Into an Empty Husk",
        "rank": 6,
        "desc": "The maximum number of Charge stacks is reduced to 4. The Follow-Up ATK triggered by Talent deals additionally increased DMG, with the increased amount equal to 50% of Blade's Max HP.",
        "icon": "icon/skill/1120_rank6.png",
        "paramsEido": [
          0.5
        ],
        "extraEffects": {
          "Follow-Up ATK": {
            "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
          }
        },
        "eidoAbility": "Blade_Ren_Eidolon6"
      }
    ],
    "eidlonLevelBonuses": {
      "3": {
        "Ultimate": 2,
        "Talent": 2
      },
      "5": {
        "Basic ATK": 1,
        "Skill": 2
      }
    },
    "skills": {
      "Basic ATK": {
        "Shard Sword": {
          "variant1": {
            "skillID": 1120501,
            "trigger": "Skill01",
            "name": "Shard Sword",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Wind DMG equal to #1[i]% of Blade's Max HP to one designated enemy.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "1": [
                0.25
              ],
              "2": [
                0.3
              ],
              "3": [
                0.35
              ],
              "4": [
                0.4
              ],
              "5": [
                0.45
              ],
              "6": [
                0.5
              ],
              "7": [
                0.55
              ],
              "8": [
                0.6
              ],
              "9": [
                0.65
              ],
              "10": [
                0.7
              ]
            },
            "element": "Wind",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Ren_00_Skill01_Camera",
              "Avatar_AdvancedRen_00_Skill01_Phase01",
              "Avatar_AdvancedRen_00_Skill01_Phase02"
            ],
            "toughnessList": [
              30,
              0,
              0
            ],
            "hitSplits": []
          }
        },
        "Forest of Swords": {
          "variant1": {
            "skillID": 1120508,
            "trigger": "Skill11",
            "name": "Forest of Swords",
            "type": "Blast",
            "slot": "Basic ATK",
            "desc": "Consumes HP equal to #1[i]% of Blade's Max HP and deals Wind DMG equal to #2[i]% of his Max HP to one designated enemy. In addition, deals Wind DMG equal to #3[i]% of Blade's Max HP to adjacent targets.\\nIf Blade's current HP is insufficient, his HP will be reduced to 1 when using \"Forest of Swords.\"\\n\"Forest of Swords\" cannot regenerate Skill Points.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.1,
                0.65,
                0.26,
                0.65,
                0.2
              ],
              "2": [
                0.1,
                0.78,
                0.312,
                0.78,
                0.24
              ],
              "3": [
                0.1,
                0.91,
                0.364,
                0.91,
                0.28
              ],
              "4": [
                0.1,
                1.04,
                0.416,
                1.04,
                0.32
              ],
              "5": [
                0.1,
                1.17,
                0.468,
                1.17,
                0.36
              ],
              "6": [
                0.1,
                1.3,
                0.52,
                1.3,
                0.4
              ],
              "7": [
                0.1,
                1.43,
                0.572,
                1.43,
                0.44
              ],
              "8": [
                0.1,
                1.56,
                0.624,
                1.56,
                0.48
              ],
              "9": [
                0.1,
                1.69,
                0.676,
                1.69,
                0.52
              ],
              "10": [
                0.1,
                1.82,
                0.728,
                1.82,
                0.56
              ]
            },
            "element": "Wind",
            "attackType": "Normal",
            "skillEffect": "Blast",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_AdvancedRen_00_Skill11_Phase01",
              "Avatar_AdvancedRen_00_Skill11_Phase02",
              "Avatar_Ren_00_Skill11_Camera"
            ],
            "toughnessList": [
              60,
              0,
              30
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "Hellscape": {
          "variant1": {
            "skillID": 1120502,
            "trigger": "Skill02",
            "name": "Hellscape",
            "type": "Enhance",
            "slot": "Skill",
            "desc": "Consumes HP equal to #1[i]% of Blade's Max HP to enter the \"Hellscape\" state.\\nWhile \"Hellscape\" is active, his Skill cannot be used, his DMG dealt increases by #4[i]%, his chance of getting attacked by enemy targets greatly increases, and his Basic ATK \"Shard Sword\" is enhanced to \"Forest of Swords\" for #2[i] turn(s).\\nIf Blade's current HP is insufficient, his HP will be reduced to 1 when he uses his Skill.\\nThis Skill does not regenerate Energy. Using this Skill does not end the current turn.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.3,
                3,
                1,
                0.12,
                10
              ],
              "2": [
                0.3,
                3,
                1,
                0.148,
                10
              ],
              "3": [
                0.3,
                3,
                1,
                0.176,
                10
              ],
              "4": [
                0.3,
                3,
                1,
                0.204,
                10
              ],
              "5": [
                0.3,
                3,
                1,
                0.232,
                10
              ],
              "6": [
                0.3,
                3,
                1,
                0.26,
                10
              ],
              "7": [
                0.3,
                3,
                1,
                0.295,
                10
              ],
              "8": [
                0.3,
                3,
                1,
                0.33,
                10
              ],
              "9": [
                0.3,
                3,
                1,
                0.365,
                10
              ],
              "10": [
                0.3,
                3,
                1,
                0.4,
                10
              ],
              "11": [
                0.3,
                3,
                1,
                0.428,
                10
              ],
              "12": [
                0.3,
                3,
                1,
                0.456,
                10
              ],
              "13": [
                0.3,
                3,
                1,
                0.484,
                10
              ],
              "14": [
                0.3,
                3,
                1,
                0.512,
                10
              ],
              "15": [
                0.3,
                3,
                1,
                0.54,
                10
              ]
            },
            "element": "Wind",
            "attackType": "BPSkill",
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Ren_00_Skill02_Camera",
              "Avatar_AdvancedRen_00_Skill02_Phase01",
              "Avatar_AdvancedRen_00_Skill02_Phase02",
              "Avatar_AdvancedRen_00_Bonus",
              "Avatar_Ren_00_Bonus_Camera"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Ultimate": {
        "Death Sentence": {
          "variant1": {
            "skillID": 1120503,
            "trigger": "Skill03",
            "name": "Death Sentence",
            "type": "Blast",
            "slot": "Ultimate",
            "desc": "Sets Blade's current HP to 50% of his Max HP and deals Wind DMG to one enemy equal to #1[i]% of his Max HP plus #5[i]% of the tally of Blade's HP loss in the current battle. At the same time, deals Wind DMG to adjacent targets equal to #3[f1]% of his Max HP plus #6[i]% of the tally of his HP loss in the current battle.\\nThe tally of Blade's HP loss in the current battle is capped at #7[i]% of his Max HP. This value will be reset and re-accumulated after his Ultimate has been used.",
            "energyCost": 130,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.9,
                0.6,
                0.36,
                0.3,
                0.72,
                0.36,
                0.9
              ],
              "2": [
                0.96,
                0.64,
                0.384,
                0.32,
                0.768,
                0.384,
                0.9
              ],
              "3": [
                1.02,
                0.68,
                0.408,
                0.34,
                0.816,
                0.408,
                0.9
              ],
              "4": [
                1.08,
                0.72,
                0.432,
                0.36,
                0.864,
                0.432,
                0.9
              ],
              "5": [
                1.14,
                0.76,
                0.456,
                0.38,
                0.912,
                0.456,
                0.9
              ],
              "6": [
                1.2,
                0.8,
                0.48,
                0.4,
                0.96,
                0.48,
                0.9
              ],
              "7": [
                1.275,
                0.85,
                0.51,
                0.425,
                1.02,
                0.51,
                0.9
              ],
              "8": [
                1.35,
                0.9,
                0.54,
                0.45,
                1.08,
                0.54,
                0.9
              ],
              "9": [
                1.425,
                0.95,
                0.57,
                0.475,
                1.14,
                0.57,
                0.9
              ],
              "10": [
                1.5,
                1,
                0.6,
                0.5,
                1.2,
                0.6,
                0.9
              ],
              "11": [
                1.56,
                1.04,
                0.624,
                0.52,
                1.248,
                0.624,
                0.9
              ],
              "12": [
                1.62,
                1.08,
                0.648,
                0.54,
                1.296,
                0.648,
                0.9
              ],
              "13": [
                1.68,
                1.12,
                0.672,
                0.56,
                1.344,
                0.672,
                0.9
              ],
              "14": [
                1.74,
                1.16,
                0.696,
                0.58,
                1.392,
                0.696,
                0.9
              ],
              "15": [
                1.8,
                1.2,
                0.72,
                0.6,
                1.44,
                0.72,
                0.9
              ]
            },
            "element": "Wind",
            "attackType": "Ultra",
            "skillEffect": "Blast",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Ren_00_Skill03_Camera",
              "Avatar_AdvancedRen_00_Skill03_EnterReady",
              "Avatar_AdvancedRen_00_Skill03_Phase01",
              "Avatar_AdvancedRen_00_Skill03_Phase02"
            ],
            "toughnessList": [
              60,
              0,
              60
            ],
            "hitSplits": []
          }
        }
      },
      "Talent": {
        "Shuhu's Gift": {
          "variant1": {
            "skillID": 1120504,
            "trigger": "SkillP01",
            "name": "Shuhu's Gift",
            "type": "AoE",
            "slot": "Talent",
            "desc": "When Blade sustains DMG or consumes his HP, he gains 1 stack of Charge, stacking up to 5 times. A max of 1 Charge stack can be gained every time he is attacked.\\nWhen Charge stack reaches maximum, immediately launches 1 instance of Follow-Up ATK on all enemies, dealing Wind DMG equal to #2[i]% of Blade's Max HP. At the same time, restores Blade's HP by #3[i]% of his Max HP. After the Follow-Up ATK, all Charges are consumed.",
            "energyCost": null,
            "energyRegen": 10,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                3,
                0.65,
                0.25,
                0.65
              ],
              "2": [
                3,
                0.715,
                0.25,
                0.715
              ],
              "3": [
                3,
                0.78,
                0.25,
                0.78
              ],
              "4": [
                3,
                0.845,
                0.25,
                0.845
              ],
              "5": [
                3,
                0.91,
                0.25,
                0.91
              ],
              "6": [
                3,
                0.975,
                0.25,
                0.975
              ],
              "7": [
                3,
                1.05625,
                0.25,
                1.05625
              ],
              "8": [
                3,
                1.1375,
                0.25,
                1.1375
              ],
              "9": [
                3,
                1.21875,
                0.25,
                1.21875
              ],
              "10": [
                3,
                1.3,
                0.25,
                1.3
              ],
              "11": [
                3,
                1.365,
                0.25,
                1.365
              ],
              "12": [
                3,
                1.43,
                0.25,
                1.43
              ],
              "13": [
                3,
                1.495,
                0.25,
                1.495
              ],
              "14": [
                3,
                1.56,
                0.25,
                1.56
              ],
              "15": [
                3,
                1.625,
                0.25,
                1.625
              ]
            },
            "element": "Wind",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Ren_Passive_Camera",
              "Avatar_AdvancedRen_00_PassiveSkill01",
              "Avatar_AdvancedRen_00_Passive1Atk_Ability",
              "Avatar_AdvancedRen_00_Passive1Atk02_Ability"
            ],
            "toughnessList": [
              0,
              30,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Follow-Up ATK": {
                "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
              }
            }
          }
        }
      },
      "Technique": {
        "Karma Wind": {
          "variant1": {
            "skillID": 1120507,
            "trigger": "SkillMaze",
            "name": "Karma Wind",
            "slot": "Technique",
            "desc": "Immediately attacks the enemy. After entering combat, consumes #2[i]% of Blade's Max HP while dealing Wind DMG equal to #1[i]% of his Max HP to all enemies.\\nIf Blade's current HP is insufficient, his HP will be reduced to 1 when this Technique is used.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.4,
                0.2
              ]
            },
            "element": "Wind",
            "attackType": "Maze",
            "skillEffect": "MazeAttack",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_AdvancedRen_SkillMazeInLevel"
            ],
            "toughnessList": [
              60,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1205_basic_atk.png",
        "skillRef": {
          "skillName": "Shard Sword",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1205_skill.png",
        "skillRef": {
          "skillName": "Hellscape",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1205_ultimate.png",
        "skillRef": {
          "skillName": "Death Sentence",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1205_talent.png",
        "skillRef": {
          "skillName": "Shuhu's Gift",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1205_technique.png",
        "skillRef": {
          "skillName": "Karma Wind",
          "skillSlot": "Technique"
        }
      },
      "Point09": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.04
        }
      },
      "Point10": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.026999999
        }
      },
      "Point11": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.04
        }
      },
      "Point12": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.04
        }
      },
      "Point13": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.06
        }
      },
      "Point14": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.04
        }
      },
      "Point15": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.06
        }
      },
      "Point16": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.06
        }
      },
      "Point17": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.053
        }
      },
      "Point18": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.08
        }
      },
      "Point06": {
        "name": "Vita Infinita",
        "icon": "icon/skill/1205_skilltree1.png",
        "desc": "When Blade uses Ultimate, the amount cleared from the tally of HP loss is changed to #1[i]%.",
        "params": [
          0.5
        ]
      },
      "Point07": {
        "name": "Neverending Deaths",
        "icon": "icon/skill/1205_skilltree2.png",
        "desc": "HP restored from healing increases by #2[i]%. After receiving healing, converts #1[i]% of the healed amount to Ultimate's tally of HP loss.",
        "params": [
          0.25,
          0.2
        ]
      },
      "Point08": {
        "name": "Cyclone of Destruction",
        "icon": "icon/skill/1205_skilltree3.png",
        "desc": "Increases Follow-Up ATK DMG from Talent by #1[i]% and additionally regenerates #2[i] Energy.",
        "params": [
          0.2,
          15
        ],
        "extraEffects": {
          "Follow-Up ATK": {
            "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
          }
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1205.png",
    "preview": "image/character_preview/1205.png",
    "portrait": "image/character_portrait/1205.png",
    "bannerOffsets": [
      0,
      -91,
      0.52,
      0,
      -91,
      0.52,
      0,
      -91,
      0.52
    ],
    "isBuffed": true
  },
  "Huohuo": {
    "internalID": 1217,
    "name": "Huohuo",
    "path": "Abundance",
    "element": "Wind",
    "rarity": 5,
    "energyMax": 140,
    "baseStats": {
      "ATKBase": 601.5239999999999,
      "DEFBase": 509.355,
      "HPBase": 1358.2800000000002,
      "SPDBase": 98,
      "CritRateBase": 0.05,
      "CritDamageBase": 0.5,
      "CharacterAggroBase": 100
    },
    "eidolons": [
      {
        "id": "121701",
        "name": "Anchored to Vessel, Specters Nestled",
        "rank": 1,
        "desc": "The duration of Divine Provision produced by the Talent is extended by 1 turn(s). When Huohuo possesses Divine Provision, all allies' SPD increases by 12%.",
        "icon": "icon/skill/1217_rank1.png",
        "paramsEido": [
          0.12,
          1
        ]
      },
      {
        "id": "121702",
        "name": "Sealed in Tail, Wraith Subdued",
        "rank": 2,
        "desc": "If Huohuo possesses \"Divine Provision\" when an ally target is struck by a killing blow, the ally will not be knocked down and their HP will immediately be restored by an amount equal to 50% of their Max HP. This reduces the duration of \"Divine Provision\" by 1 turn. This effect can only be triggered 2 time(s) per battle.",
        "icon": "icon/skill/1217_rank2.png",
        "paramsEido": [
          0.5,
          2
        ],
        "extraEffects": {
          "Downed State": {
            "desc": "An ally will be incapacitated once their HP is reduced to 0."
          }
        }
      },
      {
        "id": "121703",
        "name": "Cursed by Fate, Moths to Flame",
        "rank": 3,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1217_ultimate.png"
      },
      {
        "id": "121704",
        "name": "Tied in Life, Bound to Strife",
        "rank": 4,
        "desc": "When healing a target ally via Skill or Talent, the less HP the target ally currently has, the higher the amount of healing they will receive. The maximum increase in healing provided by Huohuo is 80%.",
        "icon": "icon/skill/1217_rank4.png",
        "paramsEido": [
          0.8
        ]
      },
      {
        "id": "121705",
        "name": "Mandated by Edict, Evils Evicted",
        "rank": 5,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1217_skill.png"
      },
      {
        "id": "121706",
        "name": "Woven Together, Cohere Forever",
        "rank": 6,
        "desc": "When healing a target ally, increases the target ally's DMG dealt by 50% for 2 turn(s).",
        "icon": "icon/skill/1217_rank6.png",
        "paramsEido": [
          0.5,
          2
        ]
      }
    ],
    "eidlonLevelBonuses": {
      "3": {
        "Ultimate": 2,
        "Talent": 2
      },
      "5": {
        "Basic ATK": 1,
        "Skill": 2
      }
    },
    "skills": {
      "Basic ATK": {
        "Banner: Stormcaller": {
          "variant1": {
            "skillID": 121701,
            "trigger": "Skill01",
            "name": "Banner: Stormcaller",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Wind DMG equal to #1[i]% of Huohuo's Max HP to a target enemy.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "1": [
                0.25
              ],
              "2": [
                0.3
              ],
              "3": [
                0.35
              ],
              "4": [
                0.4
              ],
              "5": [
                0.45
              ],
              "6": [
                0.5
              ],
              "7": [
                0.55
              ],
              "8": [
                0.6
              ],
              "9": [
                0.65
              ],
              "10": [
                0.7
              ]
            },
            "element": "Wind",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Huohuo_00_Skill01_Camera",
              "Avatar_Huohuo_00_Skill01_Phase01",
              "Avatar_Huohuo_00_Skill01_Phase02"
            ],
            "toughnessList": [
              30,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "Talisman: Protection": {
          "variant1": {
            "skillID": 121702,
            "trigger": "Skill02",
            "name": "Talisman: Protection",
            "type": "Restore",
            "slot": "Skill",
            "desc": "Dispels #5[i] debuff(s) from a single target ally and immediately restores this ally's HP by an amount equal to #1[f1]% of Huohuo's Max HP plus #2[i]. At the same time, restores HP for allies that are adjacent to this target ally by an amount equal to #3[f1]% of Huohuo's Max HP plus #4[i].",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.14,
                140,
                0.112,
                112,
                1
              ],
              "2": [
                0.14875,
                224,
                0.119,
                179.2,
                1
              ],
              "3": [
                0.1575,
                287,
                0.126,
                229.6,
                1
              ],
              "4": [
                0.16625,
                350,
                0.133,
                280,
                1
              ],
              "5": [
                0.175,
                392,
                0.14,
                313.6,
                1
              ],
              "6": [
                0.182,
                434,
                0.1456,
                347.2,
                1
              ],
              "7": [
                0.189,
                465.5,
                0.1512,
                372.4,
                1
              ],
              "8": [
                0.196,
                497,
                0.1568,
                397.6,
                1
              ],
              "9": [
                0.203,
                528.5,
                0.1624,
                422.8,
                1
              ],
              "10": [
                0.21,
                560,
                0.168,
                448,
                1
              ],
              "11": [
                0.217,
                591.5,
                0.1736,
                473.2,
                1
              ],
              "12": [
                0.224,
                623,
                0.1792,
                498.4,
                1
              ],
              "13": [
                0.231,
                654.5,
                0.1848,
                523.6,
                1
              ],
              "14": [
                0.238,
                686,
                0.1904,
                548.8,
                1
              ],
              "15": [
                0.245,
                717.5,
                0.196,
                574,
                1
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Restore",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Huohuo_00_Skill02_Camera",
              "Avatar_Huohuo_00_Skill02_Phase01",
              "Avatar_Huohuo_00_Skill02_Phase02"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Debuff": {
                "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled."
              }
            }
          }
        }
      },
      "Ultimate": {
        "Tail: Spiritual Domination": {
          "variant1": {
            "skillID": 121703,
            "trigger": "Skill03",
            "name": "Tail: Spiritual Domination",
            "type": "Support",
            "slot": "Ultimate",
            "desc": "Regenerates Energy for all teammates (i.e., excluding this unit) by an amount equal to #1[f1]% of their respective Max Energy. At the same time, increases their ATK by #2[f1]% for #3[i] turn(s).",
            "energyCost": 140,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.15,
                0.24,
                2
              ],
              "2": [
                0.155,
                0.256,
                2
              ],
              "3": [
                0.16,
                0.272,
                2
              ],
              "4": [
                0.165,
                0.288,
                2
              ],
              "5": [
                0.17,
                0.304,
                2
              ],
              "6": [
                0.175,
                0.32,
                2
              ],
              "7": [
                0.18125,
                0.34,
                2
              ],
              "8": [
                0.1875,
                0.36,
                2
              ],
              "9": [
                0.19375,
                0.38,
                2
              ],
              "10": [
                0.2,
                0.4,
                2
              ],
              "11": [
                0.205,
                0.416,
                2
              ],
              "12": [
                0.21,
                0.432,
                2
              ],
              "13": [
                0.215,
                0.448,
                2
              ],
              "14": [
                0.22,
                0.464,
                2
              ],
              "15": [
                0.225,
                0.48,
                2
              ]
            },
            "attackType": "Ultra",
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Huohuo_00_Skill03_Camera",
              "Avatar_Huohuo_00_Skill03_EnterReady",
              "Avatar_Huohuo_00_Skill03_Phase01",
              "Avatar_Huohuo_00_Skill03_Phase02"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Talent": {
        "Possession: Ethereal Metaflow": {
          "variant1": {
            "skillID": 121704,
            "trigger": "SkillP01",
            "name": "Possession: Ethereal Metaflow",
            "type": "Restore",
            "slot": "Talent",
            "desc": "After using her Skill, Huohuo gains Divine Provision, lasting for #1[i] turn(s). This duration decreases by 1 turn at the start of Huohuo's every turn. If Huohuo has Divine Provision when an ally's turn starts or when an ally uses their Ultimate, restores HP for that ally by an amount equal to #3[f1]% of Huohuo's Max HP plus #5[i]. At the same time, every ally with #6[i]% HP percentage or lower receives healing once.\\nWhen Divine Provision is triggered to heal an ally, dispel #2[i] debuff(s) from that ally. This effect can be triggered up to #7[i] time(s). Using the skill again resets the effect's trigger count.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                2,
                1,
                0.03,
                0,
                30,
                0.5,
                6
              ],
              "2": [
                2,
                1,
                0.031875,
                0,
                48,
                0.5,
                6
              ],
              "3": [
                2,
                1,
                0.03375,
                0,
                61.5,
                0.5,
                6
              ],
              "4": [
                2,
                1,
                0.035625,
                0,
                75,
                0.5,
                6
              ],
              "5": [
                2,
                1,
                0.0375,
                0,
                84,
                0.5,
                6
              ],
              "6": [
                2,
                1,
                0.039,
                0,
                93,
                0.5,
                6
              ],
              "7": [
                2,
                1,
                0.0405,
                0,
                99.75,
                0.5,
                6
              ],
              "8": [
                2,
                1,
                0.042,
                0,
                106.5,
                0.5,
                6
              ],
              "9": [
                2,
                1,
                0.0435,
                0,
                113.25,
                0.5,
                6
              ],
              "10": [
                2,
                1,
                0.044999998,
                0,
                120,
                0.5,
                6
              ],
              "11": [
                2,
                1,
                0.0465,
                0,
                126.75,
                0.5,
                6
              ],
              "12": [
                2,
                1,
                0.048,
                0,
                133.5,
                0.5,
                6
              ],
              "13": [
                2,
                1,
                0.0495,
                0,
                140.25,
                0.5,
                6
              ],
              "14": [
                2,
                1,
                0.051,
                0,
                147,
                0.5,
                6
              ],
              "15": [
                2,
                1,
                0.052500002,
                0,
                153.75,
                0.5,
                6
              ]
            },
            "skillEffect": "Restore",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Huohuo_00_PassiveSkill01",
              "Avatar_Huohuo_00_Rank02_Insert"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Debuff": {
                "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled."
              }
            }
          }
        }
      },
      "Technique": {
        "Fiend: Impeachment of Evil": {
          "variant1": {
            "skillID": 121707,
            "trigger": "SkillMaze",
            "name": "Fiend: Impeachment of Evil",
            "type": "Impair",
            "slot": "Technique",
            "desc": "Huohuo terrorizes surrounding enemies, afflicting Horror-Struck on them. Enemies in Horror-Struck will flee away from Huohuo for #4[i] second(s). When entering battle with enemies in Horror-Struck, there is a #1[i]% base chance of reducing every single enemy's ATK by #2[i]% for #3[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                1,
                0.25,
                2,
                10
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Impair",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Huohuo_00_SkillMazeInLevel"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Base Chance": {
                "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
              }
            }
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1217_basic_atk.png",
        "skillRef": {
          "skillName": "Banner: Stormcaller",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1217_skill.png",
        "skillRef": {
          "skillName": "Talisman: Protection",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1217_ultimate.png",
        "skillRef": {
          "skillName": "Tail: Spiritual Domination",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1217_talent.png",
        "skillRef": {
          "skillName": "Possession: Ethereal Metaflow",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1217_technique.png",
        "skillRef": {
          "skillName": "Fiend: Impeachment of Evil",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Fearful to Act",
        "icon": "icon/skill/1217_skilltree1.png",
        "desc": "When battle starts, Huohuo gains Divine Provision, lasting for #1[i] turn(s).",
        "params": [
          1
        ]
      },
      "Point07": {
        "name": "The Cursed One",
        "icon": "icon/skill/1217_skilltree2.png",
        "desc": "Increases the chance to resist Crowd Control debuffs by #1[i]%.",
        "params": [
          0.35
        ],
        "traceAbility": "Huohuo_Huohuo_Trace02",
        "extraEffects": {
          "Crowd Control debuff": {
            "desc": "Freeze, Entanglement, Imprisonment, Dominated, Outrage, Strong Reverberation, Alien Dream, Snarelock, Terrified, Action Lock."
          }
        }
      },
      "Point08": {
        "name": "Stress Reaction to Horror",
        "icon": "icon/skill/1217_skilltree3.png",
        "desc": "When her Talent is triggered to heal allies, Huohuo regenerates #1[i] Energy.",
        "params": [
          1
        ]
      },
      "Point09": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.04
        }
      },
      "Point10": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.04
        }
      },
      "Point11": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.04
        }
      },
      "Point12": {
        "name": "SPD Boost",
        "icon": "icon/property/IconSpeed.png",
        "stats": {
          "SPDFlat": 2
        }
      },
      "Point13": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.06
        }
      },
      "Point14": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.06
        }
      },
      "Point15": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.06
        }
      },
      "Point16": {
        "name": "SPD Boost",
        "icon": "icon/property/IconSpeed.png",
        "stats": {
          "SPDFlat": 3
        }
      },
      "Point17": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.08
        }
      },
      "Point18": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.08
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1217.png",
    "preview": "image/character_preview/1217.png",
    "portrait": "image/character_portrait/1217.png",
    "bannerOffsets": [
      29.3,
      11.9,
      0.66,
      29.3,
      11.9,
      0.66,
      29.3,
      11.9,
      0.66
    ],
    "isBuffed": false
  },
  "Gallagher": {
    "internalID": 1301,
    "name": "Gallagher",
    "path": "Abundance",
    "element": "Fire",
    "rarity": 4,
    "energyMax": 110,
    "baseStats": {
      "ATKBase": 529.2,
      "DEFBase": 441,
      "HPBase": 1305.3600000000001,
      "SPDBase": 98,
      "CritRateBase": 0.05,
      "CritDamageBase": 0.5,
      "CharacterAggroBase": 100
    },
    "eidolons": [
      {
        "id": "130101",
        "name": "Salty Dog",
        "rank": 1,
        "desc": "When entering the battle, Gallagher regenerates 20 Energy and increases Effect RES by 50%.",
        "icon": "icon/skill/1301_rank1.png",
        "paramsEido": [
          20,
          0.5
        ]
      },
      {
        "id": "130102",
        "name": "Lion's Tail",
        "rank": 2,
        "desc": "When using the Skill, dispels 1 debuff(s) from the designated ally. At the same time, increases their Effect RES by 30% for 2 turn(s).",
        "icon": "icon/skill/1301_rank2.png",
        "paramsEido": [
          1,
          0.3,
          2
        ],
        "extraEffects": {
          "Debuff": {
            "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled."
          }
        }
      },
      {
        "id": "130103",
        "name": "Corpse Reviver",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1301_skill.png"
      },
      {
        "id": "130104",
        "name": "Last Word",
        "rank": 4,
        "desc": "Extends the duration of the Besotted state inflicted by Gallagher's Ultimate by 1 turn(s).",
        "icon": "icon/skill/1301_rank4.png",
        "paramsEido": [
          1
        ]
      },
      {
        "id": "130105",
        "name": "Death in the Afternoon",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1301_ultimate.png"
      },
      {
        "id": "130106",
        "name": "Blood and Sand",
        "rank": 6,
        "desc": "Increases Gallagher's Break Effect by 20% and Weakness Break Efficiency by 20%.",
        "icon": "icon/skill/1301_rank6.png",
        "paramsEido": [
          0.2,
          0.2
        ]
      }
    ],
    "eidlonLevelBonuses": {
      "3": {
        "Basic ATK": 1,
        "Skill": 2
      },
      "5": {
        "Ultimate": 2,
        "Talent": 2
      }
    },
    "skills": {
      "Basic ATK": {
        "Corkage Fee": {
          "variant1": {
            "skillID": 130101,
            "trigger": "Skill01",
            "name": "Corkage Fee",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Fire DMG equal to #1[i]% of Gallagher's ATK to one designated enemy target.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "1": [
                0.5
              ],
              "2": [
                0.6
              ],
              "3": [
                0.7
              ],
              "4": [
                0.8
              ],
              "5": [
                0.9
              ],
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
              ],
              "9": [
                1.3
              ],
              "10": [
                1.4
              ]
            },
            "element": "Fire",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Gallagher_00_Skill01_Camera",
              "Avatar_Gallagher_00_Skill01_Phase01",
              "Avatar_Gallagher_00_Skill01_Phase02"
            ],
            "toughnessList": [
              30,
              0,
              0
            ],
            "hitSplits": []
          }
        },
        "Nectar Blitz": {
          "variant1": {
            "skillID": 130108,
            "trigger": "Skill11",
            "name": "Nectar Blitz",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Fire DMG equal to #1[i]% of Gallagher's ATK to one designated enemy target. Reduces the target's ATK by #2[f1]%, lasting for #3[i] turn(s).",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 30,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "1": [
                1.25,
                0.1,
                2
              ],
              "2": [
                1.5,
                0.11,
                2
              ],
              "3": [
                1.75,
                0.12,
                2
              ],
              "4": [
                2,
                0.13,
                2
              ],
              "5": [
                2.25,
                0.14,
                2
              ],
              "6": [
                2.5,
                0.15,
                2
              ],
              "7": [
                2.75,
                0.16,
                2
              ],
              "8": [
                3,
                0.17,
                2
              ],
              "9": [
                3.25,
                0.18,
                2
              ],
              "10": [
                3.5,
                0.19,
                2
              ]
            },
            "element": "Fire",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Gallagher_00_Skill11_Camera",
              "Avatar_Gallagher_00_Skill11_Phase01",
              "Avatar_Gallagher_00_Skill11_Phase02"
            ],
            "toughnessList": [
              90,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "Special Brew": {
          "variant1": {
            "skillID": 130102,
            "trigger": "Skill02",
            "name": "Special Brew",
            "type": "Restore",
            "slot": "Skill",
            "desc": "Immediately heals a target ally for #1[i] HP.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "1": [
                200
              ],
              "2": [
                340
              ],
              "3": [
                480
              ],
              "4": [
                676
              ],
              "5": [
                830
              ],
              "6": [
                984
              ],
              "7": [
                1138
              ],
              "8": [
                1292
              ],
              "9": [
                1446
              ],
              "10": [
                1600
              ],
              "11": [
                1684
              ],
              "12": [
                1768
              ],
              "13": [
                1852
              ],
              "14": [
                1936
              ],
              "15": [
                2020
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Restore",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Gallagher_00_Skill02_Camera",
              "Avatar_Gallagher_00_Skill02_Camera_End",
              "Avatar_Gallagher_00_Skill02_Phase01",
              "Avatar_Gallagher_00_Skill02_Phase02"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Ultimate": {
        "Champagne Etiquette": {
          "variant1": {
            "skillID": 130103,
            "trigger": "Skill03",
            "name": "Champagne Etiquette",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Inflicts Besotted on all enemies, lasting for #2[i] turn(s). At the same time, deals Fire DMG equal to #1[i]% of Gallagher's ATK to all enemies, and enhances his next Basic ATK to Nectar Blitz.",
            "energyCost": 110,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.75,
                2
              ],
              "2": [
                0.825,
                2
              ],
              "3": [
                0.9,
                2
              ],
              "4": [
                0.975,
                2
              ],
              "5": [
                1.05,
                2
              ],
              "6": [
                1.125,
                2
              ],
              "7": [
                1.21875,
                2
              ],
              "8": [
                1.3125,
                2
              ],
              "9": [
                1.40625,
                2
              ],
              "10": [
                1.5,
                2
              ],
              "11": [
                1.575,
                2
              ],
              "12": [
                1.65,
                2
              ],
              "13": [
                1.725,
                2
              ],
              "14": [
                1.8,
                2
              ],
              "15": [
                1.875,
                2
              ]
            },
            "element": "Fire",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Gallagher_00_Skill03_Camera",
              "Avatar_Gallagher_00_Skill03_EnterReady",
              "Avatar_Gallagher_00_Skill03_Phase01",
              "Avatar_Gallagher_00_Skill03_Phase02"
            ],
            "toughnessList": [
              0,
              60,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Talent": {
        "Tipsy Tussle": {
          "variant1": {
            "skillID": 130104,
            "trigger": "SkillP01",
            "name": "Tipsy Tussle",
            "type": "Restore",
            "slot": "Talent",
            "desc": "The Besotted state makes targets receive #1[f1]% more Break DMG. Every time a Besotted target gets attacked by an ally, the attacking ally's HP is restored by #2[i].",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.06,
                80
              ],
              "2": [
                0.066,
                136
              ],
              "3": [
                0.072,
                192
              ],
              "4": [
                0.078,
                270.4
              ],
              "5": [
                0.084,
                332
              ],
              "6": [
                0.09,
                393.6
              ],
              "7": [
                0.0975,
                455.2
              ],
              "8": [
                0.105,
                516.8
              ],
              "9": [
                0.1125,
                578.4
              ],
              "10": [
                0.12,
                640
              ],
              "11": [
                0.126,
                673.6
              ],
              "12": [
                0.132,
                707.2
              ],
              "13": [
                0.138,
                740.8
              ],
              "14": [
                0.144,
                774.4
              ],
              "15": [
                0.15,
                808
              ]
            },
            "element": "Fire",
            "skillEffect": "Restore",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Gallagher_00_PassiveSkill01"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Break DMG": {
                "desc": "Break DMG increases with higher Break Effect, higher target max Toughness, and higher character levels.\\nBreak DMG cannot CRIT Hit and is not affected by DMG Boost effects."
              }
            }
          }
        }
      },
      "Technique": {
        "Artisan Elixir": {
          "variant1": {
            "skillID": 130107,
            "trigger": "SkillMaze",
            "name": "Artisan Elixir",
            "slot": "Technique",
            "desc": "Immediately attacks the enemy. Upon entering battle, inflicts Besotted on all enemies, lasting for #1[i] turn(s). And deals Fire DMG equal to #2[i]% of Gallagher's ATK to all enemies.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                2,
                0.5
              ]
            },
            "element": "Fire",
            "attackType": "Maze",
            "skillEffect": "MazeAttack",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Gallagher_00_SkillMazeInLevel"
            ],
            "toughnessList": [
              60,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1301_basic_atk.png",
        "skillRef": {
          "skillName": "Corkage Fee",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1301_skill.png",
        "skillRef": {
          "skillName": "Special Brew",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1301_ultimate.png",
        "skillRef": {
          "skillName": "Champagne Etiquette",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1301_talent.png",
        "skillRef": {
          "skillName": "Tipsy Tussle",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1301_technique.png",
        "skillRef": {
          "skillName": "Artisan Elixir",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Novel Concoction",
        "icon": "icon/skill/1301_skilltree1.png",
        "desc": "Increases this unit's Outgoing Healing by an amount equal to #1[i]% of Break Effect, up to a maximum Outgoing Healing increase of #2[i]%.",
        "params": [
          0.5,
          0.75
        ]
      },
      "Point07": {
        "name": "Organic Yeast",
        "icon": "icon/skill/1301_skilltree2.png",
        "desc": "After using the Ultimate, immediately advances action for this unit by 100%.",
        "extraEffects": {
          "Action Advanced": {
            "desc": "Reduces the target's waiting interval before the next action."
          }
        }
      },
      "Point08": {
        "name": "Bottoms Up",
        "icon": "icon/skill/1301_skilltree3.png",
        "desc": "When Gallagher uses Nectar Blitz to attack Besotted enemies, the HP Restore effect of his Talent will also apply to teammates for this time."
      },
      "Point09": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.04
        }
      },
      "Point10": {
        "name": "Break Boost",
        "icon": "icon/property/IconBreakUp.png",
        "stats": {
          "DamageBreak": 0.053
        }
      },
      "Point11": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.04
        }
      },
      "Point12": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.04
        }
      },
      "Point13": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.06
        }
      },
      "Point14": {
        "name": "Break Boost",
        "icon": "icon/property/IconBreakUp.png",
        "stats": {
          "DamageBreak": 0.08
        }
      },
      "Point15": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.06
        }
      },
      "Point16": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.06
        }
      },
      "Point17": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.08
        }
      },
      "Point18": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.08
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1301.png",
    "preview": "image/character_preview/1301.png",
    "portrait": "image/character_portrait/1301.png",
    "bannerOffsets": [
      -38,
      -6,
      0.455,
      -38,
      -6,
      0.455,
      -38,
      -6,
      0.455
    ],
    "isBuffed": false
  },
  "Argenti": {
    "internalID": 1302,
    "name": "Argenti",
    "path": "Erudition",
    "element": "Physical",
    "rarity": 5,
    "energyMax": 180,
    "baseStats": {
      "ATKBase": 737.3520000000001,
      "DEFBase": 363.82500000000005,
      "HPBase": 1047.816,
      "SPDBase": 103,
      "CritRateBase": 0.05,
      "CritDamageBase": 0.5,
      "CharacterAggroBase": 75
    },
    "eidolons": [
      {
        "id": "130201",
        "name": "A Lacuna in Kingdom of Aesthetics",
        "rank": 1,
        "desc": "Each stack of Apotheosis additionally increases CRIT DMG by 4%.",
        "icon": "icon/skill/1302_rank1.png",
        "paramsEido": [
          0.04
        ]
      },
      {
        "id": "130202",
        "name": "Agate's Humility",
        "rank": 2,
        "desc": "If the number of enemies on the field equals to 3 or more when the Ultimate is used, ATK increases by 40% for 1 turn(s).",
        "icon": "icon/skill/1302_rank2.png",
        "paramsEido": [
          3,
          0.4,
          1
        ]
      },
      {
        "id": "130203",
        "name": "Thorny Road's Glory",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1302_skill.png"
      },
      {
        "id": "130204",
        "name": "Trumpet's Dedication",
        "rank": 4,
        "desc": "At the start of battle, gains 2 stack(s) of Apotheosis and increases the maximum stack limit of the Talent's effect by 2.",
        "icon": "icon/skill/1302_rank4.png",
        "paramsEido": [
          2,
          2
        ]
      },
      {
        "id": "130205",
        "name": "Snow, From Somewhere in Cosmos",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1302_ultimate.png"
      },
      {
        "id": "130206",
        "name": "\"Your\" Resplendence",
        "rank": 6,
        "desc": "When using Ultimate, ignores 30% of enemy targets' DEF.",
        "icon": "icon/skill/1302_rank6.png",
        "paramsEido": [
          0.3
        ]
      }
    ],
    "eidlonLevelBonuses": {
      "3": {
        "Skill": 2,
        "Talent": 2
      },
      "5": {
        "Basic ATK": 1,
        "Ultimate": 2
      }
    },
    "skills": {
      "Basic ATK": {
        "Fleeting Fragrance": {
          "variant1": {
            "skillID": 130201,
            "trigger": "Skill01",
            "name": "Fleeting Fragrance",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Physical DMG equal to #1[i]% of Argenti's ATK to one designated enemy target.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "1": [
                0.5
              ],
              "2": [
                0.6
              ],
              "3": [
                0.7
              ],
              "4": [
                0.8
              ],
              "5": [
                0.9
              ],
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
              ],
              "9": [
                1.3
              ],
              "10": [
                1.4
              ]
            },
            "element": "Physical",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Argenti_00_Skill01_Camera",
              "Avatar_Argenti_00_Skill01_Phase01",
              "Avatar_Argenti_00_Skill01_Phase02"
            ],
            "toughnessList": [
              30,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "Justice, Hereby Blooms": {
          "variant1": {
            "skillID": 130202,
            "trigger": "Skill02",
            "name": "Justice, Hereby Blooms",
            "type": "AoE",
            "slot": "Skill",
            "desc": "Deals Physical DMG equal to #1[i]% of Argenti's ATK to all enemies.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.6
              ],
              "2": [
                0.66
              ],
              "3": [
                0.72
              ],
              "4": [
                0.78
              ],
              "5": [
                0.84
              ],
              "6": [
                0.9
              ],
              "7": [
                0.975
              ],
              "8": [
                1.05
              ],
              "9": [
                1.125
              ],
              "10": [
                1.2
              ],
              "11": [
                1.26
              ],
              "12": [
                1.32
              ],
              "13": [
                1.38
              ],
              "14": [
                1.44
              ],
              "15": [
                1.5
              ]
            },
            "element": "Physical",
            "attackType": "BPSkill",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Argenti_00_Skill02_Camera",
              "Avatar_Argenti_00_Skill02_Phase01",
              "Avatar_Argenti_00_Skill02_Phase02"
            ],
            "toughnessList": [
              0,
              30,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Ultimate": {
        "For In This Garden, Supreme Beauty Bestows": {
          "variant1": {
            "skillID": 130203,
            "trigger": "Skill03",
            "name": "For In This Garden, Supreme Beauty Bestows",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Consumes #2[i] Energy and deals Physical DMG equal to #1[i]% of Argenti's ATK to all enemies.",
            "energyCost": 90,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.96,
                90
              ],
              "2": [
                1.024,
                90
              ],
              "3": [
                1.088,
                90
              ],
              "4": [
                1.152,
                90
              ],
              "5": [
                1.216,
                90
              ],
              "6": [
                1.28,
                90
              ],
              "7": [
                1.36,
                90
              ],
              "8": [
                1.44,
                90
              ],
              "9": [
                1.52,
                90
              ],
              "10": [
                1.6,
                90
              ],
              "11": [
                1.664,
                90
              ],
              "12": [
                1.728,
                90
              ],
              "13": [
                1.792,
                90
              ],
              "14": [
                1.856,
                90
              ],
              "15": [
                1.92,
                90
              ]
            },
            "element": "Physical",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Argenti_00_Skill03_Camera",
              "Avatar_Argenti_00_Skill03_Camera_End01",
              "Avatar_Argenti_00_Skill03_EnterReady",
              "Avatar_Argenti_00_Skill03_Phase01",
              "Avatar_Argenti_00_Skill03_Phase02"
            ],
            "toughnessList": [
              0,
              60,
              0
            ],
            "hitSplits": []
          }
        },
        "Merit Bestowed in \"My\" Garden": {
          "variant1": {
            "skillID": 130214,
            "trigger": "Skill31",
            "name": "Merit Bestowed in \"My\" Garden",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Consumes #4[i] Energy and deals Physical DMG equal to #1[i]% of Argenti's ATK to all enemies. And further deals DMG for #2[i] extra time(s), with each time dealing Physical DMG equal to #3[i]% of Argenti's ATK to a random enemy.",
            "energyCost": 180,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 25,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                1.68,
                6,
                0.57,
                180
              ],
              "2": [
                1.792,
                6,
                0.608,
                180
              ],
              "3": [
                1.904,
                6,
                0.646,
                180
              ],
              "4": [
                2.016,
                6,
                0.684,
                180
              ],
              "5": [
                2.128,
                6,
                0.722,
                180
              ],
              "6": [
                2.24,
                6,
                0.76,
                180
              ],
              "7": [
                2.38,
                6,
                0.8075,
                180
              ],
              "8": [
                2.52,
                6,
                0.855,
                180
              ],
              "9": [
                2.66,
                6,
                0.9025,
                180
              ],
              "10": [
                2.8,
                6,
                0.95,
                180
              ],
              "11": [
                2.912,
                6,
                0.988,
                180
              ],
              "12": [
                3.024,
                6,
                1.026,
                180
              ],
              "13": [
                3.136,
                6,
                1.064,
                180
              ],
              "14": [
                3.248,
                6,
                1.102,
                180
              ],
              "15": [
                3.36,
                6,
                1.14,
                180
              ]
            },
            "element": "Physical",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Argenti_00_Skill31_Camera",
              "Avatar_Argenti_00_Skill31_Camera_End02",
              "Avatar_Argenti_00_Skill31_EnterReady",
              "Avatar_Argenti_00_Skill31_Phase01",
              "Avatar_Argenti_00_Skill31_Phase02"
            ],
            "toughnessList": [
              15,
              60,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Talent": {
        "Sublime Object": {
          "variant1": {
            "skillID": 130204,
            "trigger": "SkillP01",
            "name": "Sublime Object",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "For every enemy hit when Argenti uses his Basic Attack, Skill, or Ultimate, regenerates Argenti's Energy by #1[i], and grants him a stack of Apotheosis, increasing his CRIT Rate by #2[f1]%. This effect can stack up to #3[i] time(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                3,
                0.01,
                10
              ],
              "2": [
                3,
                0.0115,
                10
              ],
              "3": [
                3,
                0.013,
                10
              ],
              "4": [
                3,
                0.0145,
                10
              ],
              "5": [
                3,
                0.015999999,
                10
              ],
              "6": [
                3,
                0.0175,
                10
              ],
              "7": [
                3,
                0.019375,
                10
              ],
              "8": [
                3,
                0.02125,
                10
              ],
              "9": [
                3,
                0.023125,
                10
              ],
              "10": [
                3,
                0.025,
                10
              ],
              "11": [
                3,
                0.0265,
                10
              ],
              "12": [
                3,
                0.027999999,
                10
              ],
              "13": [
                3,
                0.0295,
                10
              ],
              "14": [
                3,
                0.031,
                10
              ],
              "15": [
                3,
                0.0325,
                10
              ]
            },
            "element": "Physical",
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Argenti_00_PassiveSkill01"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Technique": {
        "Manifesto of Purest Virtue": {
          "variant1": {
            "skillID": 130207,
            "trigger": "SkillMaze",
            "name": "Manifesto of Purest Virtue",
            "type": "Impair",
            "slot": "Technique",
            "desc": "After using the Technique, enemies in a set area are inflicted with Daze for #1[i] second(s). Dazed enemies will not actively attack the team.\\nWhen attacking a Dazed enemy to enter combat, deals Physical DMG to all enemies equal to #2[i]% of Argenti's ATK and regenerates his Energy by #3[i].",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                10,
                0.8,
                15
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Impair",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Argenti_00_SkillMazeInLevel"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1302_basic_atk.png",
        "skillRef": {
          "skillName": "Fleeting Fragrance",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1302_skill.png",
        "skillRef": {
          "skillName": "Justice, Hereby Blooms",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1302_ultimate.png",
        "skillRef": {
          "skillName": "For In This Garden, Supreme Beauty Bestows",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1302_talent.png",
        "skillRef": {
          "skillName": "Sublime Object",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1302_technique.png",
        "skillRef": {
          "skillName": "Manifesto of Purest Virtue",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Piety",
        "icon": "icon/skill/1302_skilltree1.png",
        "desc": "At the start of a turn, immediately gains #1[i] stack(s) of Apotheosis.",
        "params": [
          1
        ]
      },
      "Point07": {
        "name": "Generosity",
        "icon": "icon/skill/1302_skilltree2.png",
        "desc": "When enemy targets enter combat, immediately regenerates #1[i] Energy for self.",
        "params": [
          2
        ]
      },
      "Point08": {
        "name": "Courage",
        "icon": "icon/skill/1302_skilltree3.png",
        "desc": "Deals #2[i]% more DMG to enemies whose HP percentage is #1[i]% or less.",
        "params": [
          0.5,
          0.15
        ]
      },
      "Point09": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.04
        }
      },
      "Point10": {
        "name": "DMG Boost: Physical",
        "icon": "icon/property/IconPhysicalAddedRatio.png",
        "stats": {
          "DamagePhysical": 0.032
        }
      },
      "Point11": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.04
        }
      },
      "Point12": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.04
        }
      },
      "Point13": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.06
        }
      },
      "Point14": {
        "name": "DMG Boost: Physical",
        "icon": "icon/property/IconPhysicalAddedRatio.png",
        "stats": {
          "DamagePhysical": 0.048
        }
      },
      "Point15": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.06
        }
      },
      "Point16": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.06
        }
      },
      "Point17": {
        "name": "DMG Boost: Physical",
        "icon": "icon/property/IconPhysicalAddedRatio.png",
        "stats": {
          "DamagePhysical": 0.064
        }
      },
      "Point18": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.08
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1302.png",
    "preview": "image/character_preview/1302.png",
    "portrait": "image/character_portrait/1302.png",
    "bannerOffsets": [
      205.4,
      -1.5,
      0.74,
      205.4,
      -1.5,
      0.74,
      205.4,
      -1.5,
      0.74
    ],
    "isBuffed": false
  },
  "Aventurine": {
    "internalID": 1304,
    "name": "Aventurine",
    "path": "Preservation",
    "element": "Imaginary",
    "rarity": 5,
    "energyMax": 110,
    "baseStats": {
      "ATKBase": 446.29200000000003,
      "DEFBase": 654.885,
      "HPBase": 1203.0479999999998,
      "SPDBase": 106,
      "CritRateBase": 0.05,
      "CritDamageBase": 0.5,
      "CharacterAggroBase": 150
    },
    "eidolons": [
      {
        "id": "130401",
        "name": "Prisoner's Dilemma",
        "rank": 1,
        "desc": "Increases CRIT DMG by 20% for ally targets with Fortified Wager. After using the Ultimate, provides all allies with a Fortified Wager shield, whose Shield Effect is equal to 100% of the one provided by the Skill, lasting for 3 turn(s).",
        "icon": "icon/skill/1304_rank1.png",
        "paramsEido": [
          0.2,
          1,
          3
        ]
      },
      {
        "id": "130402",
        "name": "Bounded Rationality",
        "rank": 2,
        "desc": "When using the Basic ATK, reduces the target's All-Type RES by 12% for 3 turn(s).",
        "icon": "icon/skill/1304_rank2.png",
        "paramsEido": [
          1.2,
          0.12,
          3
        ]
      },
      {
        "id": "130403",
        "name": "Droprate Maxing",
        "rank": 3,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1304_ultimate.png"
      },
      {
        "id": "130404",
        "name": "Unexpected Hanging Paradox",
        "rank": 4,
        "desc": "When triggering his Talent's Follow-Up ATK, first increases Aventurine's DEF by 40% for 2 turn(s), and additionally increases the Hits Per Action for his talent's Follow-Up ATK by 3.",
        "icon": "icon/skill/1304_rank4.png",
        "paramsEido": [
          0.4,
          2,
          3
        ],
        "extraEffects": {
          "Follow-Up ATK": {
            "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
          }
        }
      },
      {
        "id": "130405",
        "name": "Ambiguity Aversion",
        "rank": 5,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1304_skill.png"
      },
      {
        "id": "130406",
        "name": "Stag Hunt Game",
        "rank": 6,
        "desc": "For every teammate that holds a Shield, the DMG dealt by Aventurine increases by 50%, up to a maximum of 150%.",
        "icon": "icon/skill/1304_rank6.png",
        "paramsEido": [
          0.5,
          1.5
        ]
      }
    ],
    "eidlonLevelBonuses": {
      "3": {
        "Basic ATK": 1,
        "Ultimate": 2
      },
      "5": {
        "Skill": 2,
        "Talent": 2
      }
    },
    "skills": {
      "Basic ATK": {
        "Straight Bet": {
          "variant1": {
            "skillID": 130401,
            "trigger": "Skill01",
            "name": "Straight Bet",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Imaginary DMG equal to #1[i]% of Aventurine's DEF to one designated enemy target.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "1": [
                0.5
              ],
              "2": [
                0.6
              ],
              "3": [
                0.7
              ],
              "4": [
                0.8
              ],
              "5": [
                0.9
              ],
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
              ],
              "9": [
                1.3
              ],
              "10": [
                1.4
              ]
            },
            "element": "Imaginary",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Aventurine_00_Skill01_Camera",
              "Avatar_Aventurine_00_Skill01_Phase01",
              "Avatar_Aventurine_00_Skill01_Phase02"
            ],
            "toughnessList": [
              30,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "Cornerstone Deluxe": {
          "variant1": {
            "skillID": 130402,
            "trigger": "Skill02",
            "name": "Cornerstone Deluxe",
            "type": "Defense",
            "slot": "Skill",
            "desc": "Provides all allies with a Fortified Wager shield that can block DMG equal to #1[f1]% of Aventurine's DEF plus #2[i], lasting for #3[i] turn(s). When Fortified Wager is gained repeatedly, the Shield Effect can stack, up to #4[i]% of the current Shield Effect provided by the Skill.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.16,
                80,
                3,
                2
              ],
              "2": [
                0.17,
                128,
                3,
                2
              ],
              "3": [
                0.18,
                164,
                3,
                2
              ],
              "4": [
                0.19,
                200,
                3,
                2
              ],
              "5": [
                0.2,
                224,
                3,
                2
              ],
              "6": [
                0.208,
                248,
                3,
                2
              ],
              "7": [
                0.216,
                266,
                3,
                2
              ],
              "8": [
                0.224,
                284,
                3,
                2
              ],
              "9": [
                0.232,
                302,
                3,
                2
              ],
              "10": [
                0.24,
                320,
                3,
                2
              ],
              "11": [
                0.248,
                338,
                3,
                2
              ],
              "12": [
                0.256,
                356,
                3,
                2
              ],
              "13": [
                0.264,
                374,
                3,
                2
              ],
              "14": [
                0.272,
                392,
                3,
                2
              ],
              "15": [
                0.28,
                410,
                3,
                2
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Defence",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Aventurine_00_Skill02_Camera",
              "Avatar_Aventurine_00_Skill02_Phase01",
              "Avatar_Aventurine_00_Skill02_Phase02"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Ultimate": {
        "Roulette Shark": {
          "variant1": {
            "skillID": 130403,
            "trigger": "Skill03",
            "name": "Roulette Shark",
            "type": "Single Target",
            "slot": "Ultimate",
            "desc": "Randomly gains 1 to #1[i] points of \"Blind Bet.\" Then, inflicts \"Unnerved\" on one designated enemy target for #4[i] turn(s) and deals Imaginary DMG equal to #2[i]% of Aventurine's DEF to that enemy target. When an ally hits an \"Unnerved\" enemy target, the CRIT DMG dealt increases by #3[f1]%.",
            "energyCost": 110,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 30,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                7,
                1.62,
                0.09,
                3
              ],
              "2": [
                7,
                1.728,
                0.096,
                3
              ],
              "3": [
                7,
                1.836,
                0.102,
                3
              ],
              "4": [
                7,
                1.944,
                0.108,
                3
              ],
              "5": [
                7,
                2.052,
                0.114,
                3
              ],
              "6": [
                7,
                2.16,
                0.12,
                3
              ],
              "7": [
                7,
                2.295,
                0.1275,
                3
              ],
              "8": [
                7,
                2.43,
                0.135,
                3
              ],
              "9": [
                7,
                2.565,
                0.1425,
                3
              ],
              "10": [
                7,
                2.7,
                0.15,
                3
              ],
              "11": [
                7,
                2.808,
                0.156,
                3
              ],
              "12": [
                7,
                2.916,
                0.162,
                3
              ],
              "13": [
                7,
                3.024,
                0.168,
                3
              ],
              "14": [
                7,
                3.132,
                0.174,
                3
              ],
              "15": [
                7,
                3.24,
                0.18,
                3
              ]
            },
            "element": "Imaginary",
            "attackType": "Ultra",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Aventurine_00_Skill03_Camera",
              "Avatar_Aventurine_00_Skill03_EnterReady",
              "Avatar_Aventurine_00_Skill03_Phase01",
              "Avatar_Aventurine_00_Skill03_Phase02"
            ],
            "toughnessList": [
              90,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Talent": {
        "Shot Loaded Right": {
          "variant1": {
            "skillID": 130404,
            "trigger": "SkillP01",
            "name": "Shot Loaded Right",
            "type": "Bounce",
            "slot": "Talent",
            "desc": "For any single ally with \"Fortified Wager,\" their Effect RES increases by #4[f1]%, and when they get attacked, Aventurine gains 1 point of \"Blind Bet.\" When Aventurine has \"Fortified Wager,\" he can resist Crowd Control debuffs. This effect can trigger again after #5[i] turn(s). Aventurine additionally gains #1[i] point(s) of \"Blind Bet\" after getting attacked. Upon reaching 7 points of \"Blind Bet,\" Aventurine consumes the 7 points to launch a #2[i]-hit Follow-Up ATK, with each hit dealing Imaginary DMG equal to #3[i]% of Aventurine's DEF to one random enemy. \"Blind Bet\" is capped at 10 points.",
            "energyCost": null,
            "energyRegen": 1,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 3,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                1,
                7,
                0.125,
                0.25,
                2
              ],
              "2": [
                1,
                7,
                0.1375,
                0.275,
                2
              ],
              "3": [
                1,
                7,
                0.15,
                0.3,
                2
              ],
              "4": [
                1,
                7,
                0.1625,
                0.325,
                2
              ],
              "5": [
                1,
                7,
                0.175,
                0.35,
                2
              ],
              "6": [
                1,
                7,
                0.1875,
                0.375,
                2
              ],
              "7": [
                1,
                7,
                0.203125,
                0.40625,
                2
              ],
              "8": [
                1,
                7,
                0.21875,
                0.4375,
                2
              ],
              "9": [
                1,
                7,
                0.234375,
                0.46875,
                2
              ],
              "10": [
                1,
                7,
                0.25,
                0.5,
                2
              ],
              "11": [
                1,
                7,
                0.2625,
                0.525,
                2
              ],
              "12": [
                1,
                7,
                0.275,
                0.55,
                2
              ],
              "13": [
                1,
                7,
                0.2875,
                0.575,
                2
              ],
              "14": [
                1,
                7,
                0.3,
                0.6,
                2
              ],
              "15": [
                1,
                7,
                0.3125,
                0.625,
                2
              ]
            },
            "element": "Imaginary",
            "skillEffect": "Bounce",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Aventurine_00_PassiveSkill01",
              "Avatar_Aventurine_00_PassiveSkill01_InsertAbility",
              "Avatar_Aventurine_00_PassiveSkill01_InsertAbilityPhase02",
              "Avatar_Aventurine_00_PassiveSkill01_InsertAbility_Camera"
            ],
            "toughnessList": [
              10,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Follow-Up ATK": {
                "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
              },
              "Crowd Control debuff": {
                "desc": "Freeze, Entanglement, Imprisonment, Dominated, Outrage, Strong Reverberation, Alien Dream, Snarelock, Terrified, Action Lock."
              }
            }
          }
        }
      },
      "Technique": {
        "The Red or the Black": {
          "variant1": {
            "skillID": 130407,
            "trigger": "SkillMaze",
            "name": "The Red or the Black",
            "type": "Defense",
            "slot": "Technique",
            "desc": "After using the Technique, 1 of the following effects will be granted:\\nThere is a chance for DEF to increase by #1[i]%.\\nThere is a high chance for DEF to increase by #2[i]%.\\nThere is a small chance for DEF to increase by #3[i]%.\\n\\nWhen this Technique is used repeatedly, the acquired effect with the highest buff value is retained.\\nWhen the next battle starts, increases all allies' DEF by the corresponding value, lasting for #4[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.24,
                0.36,
                0.6,
                3
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Defence",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Aventurine_00_SkillMazeInLevel"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1304_basic_atk.png",
        "skillRef": {
          "skillName": "Straight Bet",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1304_skill.png",
        "skillRef": {
          "skillName": "Cornerstone Deluxe",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1304_ultimate.png",
        "skillRef": {
          "skillName": "Roulette Shark",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1304_talent.png",
        "skillRef": {
          "skillName": "Shot Loaded Right",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1304_technique.png",
        "skillRef": {
          "skillName": "The Red or the Black",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Leverage",
        "icon": "icon/skill/1304_skilltree1.png",
        "desc": "For every 100 of Aventurine's DEF that exceeds #3[i], increases his own CRIT Rate by #1[i]%, up to a maximum increase of #2[i]%.",
        "params": [
          0.02,
          0.48,
          1600
        ]
      },
      "Point07": {
        "name": "Hot Hand",
        "icon": "icon/skill/1304_skilltree2.png",
        "desc": "When battle starts, grants all allies a Fortified Wager shield, whose Shield Effect is equal to #2[i]% of the one provided by the Skill, lasting for #1[i] turn(s).",
        "params": [
          3,
          1
        ],
        "traceAbility": "Aventurine_Aventurine_Trace02"
      },
      "Point08": {
        "name": "Bingo!",
        "icon": "icon/skill/1304_skilltree3.png",
        "desc": "After a teammate with \"Fortified Wager\" launches Follow-Up ATK, Aventurine accumulates 1 \"Blind Bet\" point. This effect can trigger up to #3[i] time(s). Its trigger count resets at the start of Aventurine's turn. After Aventurine launches his Talent's Follow-Up ATK, provides all ally targets with a \"Fortified Wager\" that can offset DMG equal to #1[i]% of Aventurine's DEF plus #2[i], and additionally grants a \"Fortified Wager\" that can block DMG equal to #4[i]% of Aventurine's DEF plus #5[i] to the ally with the lowest Shield Effect, lasting for 3 turns.",
        "params": [
          0.072,
          96,
          3,
          0.072,
          96
        ],
        "extraEffects": {
          "Follow-Up ATK": {
            "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
          }
        }
      },
      "Point09": {
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.05
        }
      },
      "Point10": {
        "name": "DMG Boost: Imaginary",
        "icon": "icon/property/IconImaginaryAddedRatio.png",
        "stats": {
          "DamageImaginary": 0.032
        }
      },
      "Point11": {
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.05
        }
      },
      "Point12": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.04
        }
      },
      "Point13": {
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.075
        }
      },
      "Point14": {
        "name": "DMG Boost: Imaginary",
        "icon": "icon/property/IconImaginaryAddedRatio.png",
        "stats": {
          "DamageImaginary": 0.048
        }
      },
      "Point15": {
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.075
        }
      },
      "Point16": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.06
        }
      },
      "Point17": {
        "name": "DMG Boost: Imaginary",
        "icon": "icon/property/IconImaginaryAddedRatio.png",
        "stats": {
          "DamageImaginary": 0.064
        }
      },
      "Point18": {
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.1
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1304.png",
    "preview": "image/character_preview/1304.png",
    "portrait": "image/character_portrait/1304.png",
    "bannerOffsets": [
      -32.1,
      38,
      0.61,
      -32.1,
      38,
      0.61,
      -32.1,
      38,
      0.61
    ],
    "isBuffed": false
  },
  "Robin": {
    "internalID": 1309,
    "name": "Robin",
    "path": "Harmony",
    "element": "Physical",
    "rarity": 5,
    "energyMax": 160,
    "baseStats": {
      "ATKBase": 640.332,
      "DEFBase": 485.1,
      "HPBase": 1280.664,
      "SPDBase": 102,
      "CritRateBase": 0.05,
      "CritDamageBase": 0.5,
      "CharacterAggroBase": 100
    },
    "eidolons": [
      {
        "id": "130901",
        "name": "Land of Smiles",
        "rank": 1,
        "desc": "While the \"Concerto\" state is active, all allies' All-Type RES PEN increases by 24%.",
        "icon": "icon/skill/1309_rank1.png",
        "paramsEido": [
          0.24
        ],
        "extraEffects": {
          "RES PEN": {
            "desc": "When dealing DMG, ignore a part of the enemy target's resistance to the corresponding damage type."
          }
        }
      },
      {
        "id": "130902",
        "name": "Afternoon Tea For Two",
        "rank": 2,
        "desc": "While the Concerto state is active, all allies' SPD increases by 16%. The Talent's Energy Regeneration effect additionally increases by 1.",
        "icon": "icon/skill/1309_rank2.png",
        "paramsEido": [
          0.16,
          1
        ]
      },
      {
        "id": "130903",
        "name": "Inverted Tuning",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nUltimate Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1309_skill.png"
      },
      {
        "id": "130904",
        "name": "Raindrop Key",
        "rank": 4,
        "desc": "When using the Ultimate, dispels Crowd Control debuffs from all allies. While Robin is in the \"Concerto\" state, increases the Effect RES of all allies by 50%.",
        "icon": "icon/skill/1309_rank4.png",
        "paramsEido": [
          0.5
        ],
        "extraEffects": {
          "Crowd Control debuff": {
            "desc": "Freeze, Entanglement, Imprisonment, Dominated, Outrage, Strong Reverberation, Alien Dream, Snarelock, Terrified, Action Lock."
          }
        }
      },
      {
        "id": "130905",
        "name": "Lonestar's Lament",
        "rank": 5,
        "desc": "Basic ATK Lv. +1, up to a maximum of Lv. 10.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1309_rank5.png"
      },
      {
        "id": "130906",
        "name": "Moonless Midnight",
        "rank": 6,
        "desc": "While the \"Concerto\" state is active, the CRIT DMG for the Physical Additional DMG caused by the Ultimate increases by 450%. The effect of \"Moonless Midnight\" can trigger up to 8 time(s) and the trigger count resets each time the Ultimate is used.",
        "icon": "icon/skill/1309_rank6.png",
        "paramsEido": [
          8,
          4.5
        ],
        "extraEffects": {
          "Additional DMG": {
            "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
          }
        }
      }
    ],
    "eidlonLevelBonuses": {
      "3": {
        "Skill": 2,
        "Ultimate": 2
      },
      "5": {
        "Basic ATK": 1,
        "Talent": 2
      }
    },
    "skills": {
      "Basic ATK": {
        "Wingflip White Noise": {
          "variant1": {
            "skillID": 130901,
            "trigger": "Skill01",
            "name": "Wingflip White Noise",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Physical DMG equal to #1[i]% of Robin's ATK to one designated enemy target.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "1": [
                0.5
              ],
              "2": [
                0.6
              ],
              "3": [
                0.7
              ],
              "4": [
                0.8
              ],
              "5": [
                0.9
              ],
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
              ],
              "9": [
                1.3
              ],
              "10": [
                1.4
              ]
            },
            "element": "Physical",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Robin_00_Skill01_Camera",
              "Avatar_Robin_00_Skill01_Phase01",
              "Avatar_Robin_00_Skill01_Phase02"
            ],
            "toughnessList": [
              30,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "Pinion's Aria": {
          "variant1": {
            "skillID": 130902,
            "trigger": "Skill02",
            "name": "Pinion's Aria",
            "type": "Support",
            "slot": "Skill",
            "desc": "Increase DMG dealt by all allies by #1[i]%, lasting for #2[i] turn(s). This duration decreases by 1 at the start of Robin's every turn.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.25,
                3
              ],
              "2": [
                0.275,
                3
              ],
              "3": [
                0.3,
                3
              ],
              "4": [
                0.325,
                3
              ],
              "5": [
                0.35,
                3
              ],
              "6": [
                0.375,
                3
              ],
              "7": [
                0.40625,
                3
              ],
              "8": [
                0.4375,
                3
              ],
              "9": [
                0.46875,
                3
              ],
              "10": [
                0.5,
                3
              ],
              "11": [
                0.525,
                3
              ],
              "12": [
                0.55,
                3
              ],
              "13": [
                0.575,
                3
              ],
              "14": [
                0.6,
                3
              ],
              "15": [
                0.625,
                3
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Robin_00_Skill02_Camera",
              "Avatar_Robin_00_Skill02_Phase01",
              "Avatar_Robin_00_Skill02_Phase02",
              "Avatar_Robin_00_Skill02_FriendAttack"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Ultimate": {
        "Vox Harmonique, Opus Cosmique": {
          "variant1": {
            "skillID": 130903,
            "trigger": "Skill03",
            "name": "Vox Harmonique, Opus Cosmique",
            "type": "Support",
            "slot": "Ultimate",
            "desc": "Robin enters the \"Concerto\" state and makes all teammates (i.e., excluding this unit) immediately take action.\\nWhile in the \"Concerto\" state, increases all allies' ATK by #1[f1]% of Robin's ATK plus #3[i]. Moreover, after every attack by ally targets, Robin deals Physical Additional DMG equal to #4[i]% of her ATK for 1 time, with a fixed CRIT Rate for this damage set at #5[i]% and fixed CRIT DMG set at #6[i]%.\\nWhile in the \"Concerto\" state, Robin is immune to Crowd Control debuffs and cannot enter her turn or take action until the \"Concerto\" state ends.\\nA \"Concerto\" countdown appears in the Action Order. When the countdown's turn begins, Robin exits the \"Concerto\" state and immediately takes action. The countdown has its own fixed SPD of #2[i].",
            "energyCost": 160,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.152,
                90,
                50,
                0.72,
                1,
                1.5
              ],
              "2": [
                0.1596,
                90,
                65,
                0.768,
                1,
                1.5
              ],
              "3": [
                0.1672,
                90,
                80,
                0.816,
                1,
                1.5
              ],
              "4": [
                0.1748,
                90,
                95,
                0.864,
                1,
                1.5
              ],
              "5": [
                0.1824,
                90,
                110,
                0.912,
                1,
                1.5
              ],
              "6": [
                0.19,
                90,
                125,
                0.96,
                1,
                1.5
              ],
              "7": [
                0.1995,
                90,
                143.75,
                1.02,
                1,
                1.5
              ],
              "8": [
                0.209,
                90,
                162.5,
                1.08,
                1,
                1.5
              ],
              "9": [
                0.2185,
                90,
                181.25,
                1.14,
                1,
                1.5
              ],
              "10": [
                0.228,
                90,
                200,
                1.2,
                1,
                1.5
              ],
              "11": [
                0.2356,
                90,
                215,
                1.248,
                1,
                1.5
              ],
              "12": [
                0.2432,
                90,
                230,
                1.296,
                1,
                1.5
              ],
              "13": [
                0.2508,
                90,
                245,
                1.344,
                1,
                1.5
              ],
              "14": [
                0.2584,
                90,
                260,
                1.392,
                1,
                1.5
              ],
              "15": [
                0.266,
                90,
                275,
                1.44,
                1,
                1.5
              ]
            },
            "attackType": "Ultra",
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Robin_00_Skill03_Camera",
              "Avatar_Robin_00_Skill03_EnterReady",
              "Avatar_Robin_00_Skill03_Phase01",
              "Avatar_Robin_00_Skill03_Phase02"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Additional DMG": {
                "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
              },
              "Crowd Control debuff": {
                "desc": "Freeze, Entanglement, Imprisonment, Dominated, Outrage, Strong Reverberation, Alien Dream, Snarelock, Terrified, Action Lock."
              }
            }
          }
        }
      },
      "Talent": {
        "Tonal Resonance": {
          "variant1": {
            "skillID": 130904,
            "trigger": "SkillP01",
            "name": "Tonal Resonance",
            "type": "Support",
            "slot": "Talent",
            "desc": "Increase all allies' CRIT DMG by #1[f1]%. Moreover, after allies attack enemy targets, Robin additionally regenerates #2[i] Energy for herself.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.05,
                2
              ],
              "2": [
                0.065,
                2
              ],
              "3": [
                0.08,
                2
              ],
              "4": [
                0.095,
                2
              ],
              "5": [
                0.11,
                2
              ],
              "6": [
                0.125,
                2
              ],
              "7": [
                0.14375,
                2
              ],
              "8": [
                0.1625,
                2
              ],
              "9": [
                0.18125,
                2
              ],
              "10": [
                0.2,
                2
              ],
              "11": [
                0.215,
                2
              ],
              "12": [
                0.23,
                2
              ],
              "13": [
                0.245,
                2
              ],
              "14": [
                0.26,
                2
              ],
              "15": [
                0.275,
                2
              ]
            },
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Robin_00_PassiveSkill01"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Technique": {
        "Overture of Inebriation": {
          "variant1": {
            "skillID": 130907,
            "trigger": "SkillMaze",
            "name": "Overture of Inebriation",
            "type": "Support",
            "slot": "Technique",
            "desc": "After using Technique, creates a Special Dimension around the character that lasts for #1[i] seconds. Enemies within this dimension will not attack Robin and will follow Robin while the dimension is active. After entering battle while the dimension is active, Robin regenerates #2[i] Energy at the start of each wave. Only 1 Dimension Effect created by allies can exist at the same time.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                15,
                5
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Support",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Robin_00_SkillMazeInLevel"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1309_basic_atk.png",
        "skillRef": {
          "skillName": "Wingflip White Noise",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1309_skill.png",
        "skillRef": {
          "skillName": "Pinion's Aria",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1309_ultimate.png",
        "skillRef": {
          "skillName": "Vox Harmonique, Opus Cosmique",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1309_talent.png",
        "skillRef": {
          "skillName": "Tonal Resonance",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1309_technique.png",
        "skillRef": {
          "skillName": "Overture of Inebriation",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Coloratura Cadenza",
        "icon": "icon/skill/1309_skilltree1.png",
        "desc": "When the battle begins, action advances this character by #1[i]%.",
        "params": [
          0.25
        ],
        "extraEffects": {
          "Action Advanced": {
            "desc": "Reduces the target's waiting interval before the next action."
          }
        }
      },
      "Point07": {
        "name": "Impromptu Flourish",
        "icon": "icon/skill/1309_skilltree2.png",
        "desc": "While the \"Concerto\" state is active, the CRIT DMG dealt when all allies launch Follow-Up ATK increases by #1[i]%.",
        "params": [
          0.25
        ],
        "extraEffects": {
          "Follow-Up ATK": {
            "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
          }
        }
      },
      "Point08": {
        "name": "Sequential Passage",
        "icon": "icon/skill/1309_skilltree3.png",
        "desc": "When using Skill, additionally regenerates #1[i] Energy.",
        "params": [
          5
        ]
      },
      "Point09": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.04
        }
      },
      "Point10": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.04
        }
      },
      "Point11": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.04
        }
      },
      "Point12": {
        "name": "SPD Boost",
        "icon": "icon/property/IconSpeed.png",
        "stats": {
          "SPDFlat": 2
        }
      },
      "Point13": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.06
        }
      },
      "Point14": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.06
        }
      },
      "Point15": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.06
        }
      },
      "Point16": {
        "name": "SPD Boost",
        "icon": "icon/property/IconSpeed.png",
        "stats": {
          "SPDFlat": 3
        }
      },
      "Point17": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.08
        }
      },
      "Point18": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.08
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1309.png",
    "preview": "image/character_preview/1309.png",
    "portrait": "image/character_portrait/1309.png",
    "bannerOffsets": [
      -4,
      -64,
      0.62,
      -4,
      -64,
      0.62,
      -4,
      -64,
      0.62
    ],
    "isBuffed": false
  },
  "Sunday": {
    "internalID": 1313,
    "name": "Sunday",
    "path": "Harmony",
    "element": "Imaginary",
    "rarity": 5,
    "energyMax": 130,
    "baseStats": {
      "ATKBase": 640.332,
      "DEFBase": 533.61,
      "HPBase": 1241.8560000000002,
      "SPDBase": 96,
      "CritRateBase": 0.05,
      "CritDamageBase": 0.5,
      "CharacterAggroBase": 100
    },
    "eidolons": [
      {
        "id": "131301",
        "name": "Millennium's Quietus",
        "rank": 1,
        "desc": "When Sunday uses Skill, the target character can ignore 16% of enemy target's DEF to deal DMG and their summon can ignore 40% of enemy target's DEF to deal DMG, lasting for 2 turn(s).",
        "icon": "icon/skill/1313_rank1.png",
        "paramsEido": [
          2,
          0.16,
          0.4
        ]
      },
      {
        "id": "131302",
        "name": "Faith Outstrips Frailty",
        "rank": 2,
        "desc": "After the first use of Ultimate, recovers 2 Skill Point(s). The DMG dealt by \"The Beatified\" increases by 30%.",
        "icon": "icon/skill/1313_rank2.png",
        "paramsEido": [
          0.3,
          2
        ]
      },
      {
        "id": "131303",
        "name": "Hermitage of Thorns",
        "rank": 3,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1313_ultimate.png"
      },
      {
        "id": "131304",
        "name": "Sculpture's Preamble",
        "rank": 4,
        "desc": "When the turn starts, regenerates 8 Energy.",
        "icon": "icon/skill/1313_rank4.png",
        "paramsEido": [
          8
        ]
      },
      {
        "id": "131305",
        "name": "Paper Raft in Silver Bay",
        "rank": 5,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1313_skill.png"
      },
      {
        "id": "131306",
        "name": "Dawn of Sidereal Cacophony",
        "rank": 6,
        "desc": "The Talent's CRIT Rate boost effect becomes stackable up to 3 time(s), and the Talent's duration increases by 1 turn(s). When Sunday uses Ultimate, can also apply the Talent's CRIT Rate boost effect to the target. When the Talent's CRIT Rate boost takes effect and the target's CRIT Rate exceeds 100%, every 1% of excess CRIT Rate increases CRIT DMG by 2%.",
        "icon": "icon/skill/1313_rank6.png",
        "paramsEido": [
          3,
          0.02,
          1
        ]
      }
    ],
    "eidlonLevelBonuses": {
      "3": {
        "Basic ATK": 1,
        "Ultimate": 2
      },
      "5": {
        "Skill": 2,
        "Talent": 2
      }
    },
    "skills": {
      "Basic ATK": {
        "Gleaming Admonition": {
          "variant1": {
            "skillID": 131301,
            "trigger": "Skill01",
            "name": "Gleaming Admonition",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Imaginary DMG equal to #1[i]% of Sunday's ATK to one designated enemy.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "1": [
                0.5
              ],
              "2": [
                0.6
              ],
              "3": [
                0.7
              ],
              "4": [
                0.8
              ],
              "5": [
                0.9
              ],
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
              ],
              "9": [
                1.3
              ],
              "10": [
                1.4
              ]
            },
            "element": "Imaginary",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Sunday_10_Skill01_Camera",
              "Avatar_Sunday_10_Skill01_Phase01",
              "Avatar_Sunday_10_Skill01_Phase02"
            ],
            "toughnessList": [
              30,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "Benison of Paper and Rites": {
          "variant1": {
            "skillID": 131302,
            "trigger": "Skill02",
            "name": "Benison of Paper and Rites",
            "type": "Support",
            "slot": "Skill",
            "desc": "Enables one designated ally character and their summon to immediately take action, and increases their DMG dealt by #2[i]%. If the target has a summon, then the DMG Boost effect is further boosted by an additional #4[i]%, lasting for #3[i] turn(s).\\nAfter using Skill on The Beatified, recovers 1 Skill Point.\\nWhen Sunday uses this ability on characters following the Path of Harmony, cannot trigger the \"immediate action\" effect.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "1": [
                1,
                0.15,
                2,
                0.25
              ],
              "2": [
                1,
                0.165,
                2,
                0.275
              ],
              "3": [
                1,
                0.18,
                2,
                0.3
              ],
              "4": [
                1,
                0.195,
                2,
                0.325
              ],
              "5": [
                1,
                0.21,
                2,
                0.35
              ],
              "6": [
                1,
                0.225,
                2,
                0.375
              ],
              "7": [
                1,
                0.24375,
                2,
                0.40625
              ],
              "8": [
                1,
                0.2625,
                2,
                0.4375
              ],
              "9": [
                1,
                0.28125,
                2,
                0.46875
              ],
              "10": [
                1,
                0.3,
                2,
                0.5
              ],
              "11": [
                1,
                0.315,
                2,
                0.525
              ],
              "12": [
                1,
                0.33,
                2,
                0.55
              ],
              "13": [
                1,
                0.345,
                2,
                0.575
              ],
              "14": [
                1,
                0.36,
                2,
                0.6
              ],
              "15": [
                1,
                0.375,
                2,
                0.625
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Sunday_10_Skill02_Camera",
              "Avatar_Sunday_10_Skill02_Phase01",
              "Avatar_Sunday_10_Skill02_Phase02"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Ultimate": {
        "Ode to Caress and Cicatrix": {
          "variant1": {
            "skillID": 131303,
            "trigger": "Skill03",
            "name": "Ode to Caress and Cicatrix",
            "type": "Support",
            "slot": "Ultimate",
            "desc": "Regenerates Energy by #1[f1]% of Max Energy for one designated ally character, and turns the target and their summon into \"The Beatified.\" \"The Beatified\" have their CRIT DMG increased by an amount equal to #2[f1]% of Sunday's CRIT DMG plus #4[f1]%.\\nAt the start of Sunday's every turn, the duration of \"The Beatified\" decreases by 1 turn, lasting for a total of #3[i] turn(s). And it only takes effect on the most recent target of the Ultimate (excluding Sunday himself). When Sunday is knocked down, \"The Beatified\" will also be dispelled.",
            "energyCost": 130,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.2,
                0.12,
                3,
                0.08
              ],
              "2": [
                0.2,
                0.138,
                3,
                0.084
              ],
              "3": [
                0.2,
                0.156,
                3,
                0.088
              ],
              "4": [
                0.2,
                0.174,
                3,
                0.092
              ],
              "5": [
                0.2,
                0.192,
                3,
                0.096
              ],
              "6": [
                0.2,
                0.21,
                3,
                0.1
              ],
              "7": [
                0.2,
                0.2325,
                3,
                0.105
              ],
              "8": [
                0.2,
                0.255,
                3,
                0.11
              ],
              "9": [
                0.2,
                0.2775,
                3,
                0.115
              ],
              "10": [
                0.2,
                0.3,
                3,
                0.12
              ],
              "11": [
                0.2,
                0.318,
                3,
                0.124
              ],
              "12": [
                0.2,
                0.336,
                3,
                0.128
              ],
              "13": [
                0.2,
                0.354,
                3,
                0.132
              ],
              "14": [
                0.2,
                0.372,
                3,
                0.13599999
              ],
              "15": [
                0.2,
                0.39,
                3,
                0.14
              ]
            },
            "attackType": "Ultra",
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Sunday_10_Skill03_Camera",
              "Avatar_Sunday_10_Skill03_EnterReady",
              "Avatar_Sunday_10_Skill03_Phase01",
              "Avatar_Sunday_10_Skill03_Phase02"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Talent": {
        "The Sorrowing Body": {
          "variant1": {
            "skillID": 131304,
            "trigger": "SkillP01",
            "name": "The Sorrowing Body",
            "type": "Support",
            "slot": "Talent",
            "desc": "When using Skill, increases the target's CRIT Rate by #1[f1]%, lasting for #2[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.1,
                3
              ],
              "2": [
                0.11,
                3
              ],
              "3": [
                0.12,
                3
              ],
              "4": [
                0.13,
                3
              ],
              "5": [
                0.14,
                3
              ],
              "6": [
                0.15,
                3
              ],
              "7": [
                0.1625,
                3
              ],
              "8": [
                0.175,
                3
              ],
              "9": [
                0.1875,
                3
              ],
              "10": [
                0.2,
                3
              ],
              "11": [
                0.21,
                3
              ],
              "12": [
                0.22,
                3
              ],
              "13": [
                0.23,
                3
              ],
              "14": [
                0.24,
                3
              ],
              "15": [
                0.25,
                3
              ]
            },
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Sunday_10_PassiveSkill01"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Technique": {
        "The Glorious Mysteries": {
          "variant1": {
            "skillID": 131307,
            "trigger": "SkillMaze",
            "name": "The Glorious Mysteries",
            "type": "Support",
            "slot": "Technique",
            "desc": "After this Technique is used, the first time Sunday uses an ability on an ally target in the next battle, the target's DMG dealt increases by #1[i]%, lasting for #2[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.5,
                2
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Support",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Sunday_10_SkillMazeInLevel"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1313_basic_atk.png",
        "skillRef": {
          "skillName": "Gleaming Admonition",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1313_skill.png",
        "skillRef": {
          "skillName": "Benison of Paper and Rites",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1313_ultimate.png",
        "skillRef": {
          "skillName": "Ode to Caress and Cicatrix",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1313_talent.png",
        "skillRef": {
          "skillName": "The Sorrowing Body",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1313_technique.png",
        "skillRef": {
          "skillName": "The Glorious Mysteries",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Rest Day's Longing",
        "icon": "icon/skill/1313_skilltree1.png",
        "desc": "When using Ultimate, if the Energy regenerated for the target is less than #1[i], increases the regenerated Energy to #1[i].",
        "params": [
          40
        ]
      },
      "Point07": {
        "name": "Exalted Sweep",
        "icon": "icon/skill/1313_skilltree2.png",
        "desc": "When battle starts, Sunday regenerates #1[i] Energy.",
        "params": [
          25
        ]
      },
      "Point08": {
        "name": "Haven in Palm",
        "icon": "icon/skill/1313_skilltree3.png",
        "desc": "When using Skill, dispels #1[i] debuff(s) from the target.",
        "params": [
          1
        ],
        "extraEffects": {
          "Debuff": {
            "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled."
          }
        }
      },
      "Point09": {
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.053
        }
      },
      "Point10": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.04
        }
      },
      "Point11": {
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.053
        }
      },
      "Point12": {
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.05
        }
      },
      "Point13": {
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.08
        }
      },
      "Point14": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.06
        }
      },
      "Point15": {
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.08
        }
      },
      "Point16": {
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.075
        }
      },
      "Point17": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.08
        }
      },
      "Point18": {
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.107
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1313.png",
    "preview": "image/character_preview/1313.png",
    "portrait": "image/character_portrait/1313.png",
    "bannerOffsets": [
      5,
      -95,
      0.64,
      5,
      -95,
      0.64,
      5,
      -95,
      0.64
    ],
    "isBuffed": false
  },
  "Aglaea": {
    "internalID": 1402,
    "name": "Aglaea",
    "path": "Remembrance",
    "element": "Lightning",
    "rarity": 5,
    "energyMax": 350,
    "baseStats": {
      "ATKBase": 698.544,
      "DEFBase": 485.1,
      "HPBase": 1241.8560000000002,
      "SPDBase": 102,
      "CritRateBase": 0.05,
      "CritDamageBase": 0.5,
      "CharacterAggroBase": 100
    },
    "eidolons": [
      {
        "id": "140201",
        "name": "Drift at the Whim of Venus",
        "rank": 1,
        "desc": "The enemy afflicted with \"Seam Stitch\" takes 15% increased DMG. After Aglaea or Garmentmaker attacks this target, additionally regenerates 20 Energy.",
        "icon": "icon/skill/1402_rank1.png",
        "paramsEido": [
          0.15,
          20
        ]
      },
      {
        "id": "140202",
        "name": "Sail on the Raft of Eyelids",
        "rank": 2,
        "desc": "When Aglaea or Garmentmaker takes action, enables the DMG dealt by Aglaea and Garmentmaker to ignore 14% of the target's DEF. This effect stacks up to 3 time(s) and lasts until any unit, other than Aglaea or Garmentmaker, actively uses an ability.",
        "icon": "icon/skill/1402_rank2.png",
        "paramsEido": [
          0.14,
          3
        ]
      },
      {
        "id": "140203",
        "name": "Bequeath in the Coalescence of Dew",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.\nMemosprite Talent Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1402_skill.png"
      },
      {
        "id": "140204",
        "name": "Flicker Below the Surface of Marble",
        "rank": 4,
        "desc": "The SPD Boost effect from the Memosprite Talent has its max stack limit increased by 1. After Aglaea uses an attack, can also make Garmentmaker gain the SPD Boost effect from the Memosprite Talent.",
        "icon": "icon/skill/1402_rank4.png",
        "paramsEido": [
          1,
          2
        ]
      },
      {
        "id": "140205",
        "name": "Weave Under the Shroud of Woe",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.\nMemosprite Skill Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1402_ultimate.png"
      },
      {
        "id": "140206",
        "name": "Fluctuate in the Tapestry of Fates",
        "rank": 6,
        "desc": "While Aglaea is in \"Supreme Stance,\" increases her and Garmentmaker's Lightning RES PEN by 20%. When Aglaea's or Garmentmaker's SPD is greater than 160/240/320, the Joint ATK DMG dealt by them increases by 10%/30%/60%.",
        "icon": "icon/skill/1402_rank6.png",
        "paramsEido": [
          0.2,
          0.1,
          0.3,
          0.6
        ],
        "extraEffects": {
          "RES PEN": {
            "desc": "When dealing DMG, ignore a part of the enemy target's resistance to the corresponding damage type."
          },
          "Joint Attack": {
            "desc": "Multiple targets respectively use attacks on enemy targets in one action."
          }
        }
      }
    ],
    "eidlonLevelBonuses": {
      "3": {
        "Basic ATK": 1,
        "Skill": 2,
        "Memosprite Talent": 1
      },
      "5": {
        "Ultimate": 2,
        "Talent": 2,
        "Memosprite Skill": 1
      }
    },
    "skills": {
      "Basic ATK": {
        "Thorned Nectar": {
          "variant1": {
            "skillID": 140201,
            "trigger": "Skill01",
            "name": "Thorned Nectar",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Lightning DMG equal to #1[i]% of Aglaea's ATK to one designated enemy.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "1": [
                0.5,
                1
              ],
              "2": [
                0.6,
                1
              ],
              "3": [
                0.7,
                1
              ],
              "4": [
                0.8,
                1
              ],
              "5": [
                0.9,
                1
              ],
              "6": [
                1,
                1
              ],
              "7": [
                1.1,
                1
              ],
              "8": [
                1.2,
                1
              ],
              "9": [
                1.3,
                1
              ],
              "10": [
                1.4,
                1
              ]
            },
            "element": "Lightning",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Aglaea_00_Skill01_Camera",
              "Avatar_Aglaea_00_Skill01_Phase01",
              "Avatar_Aglaea_00_Skill01_Phase02"
            ],
            "toughnessList": [
              30,
              0,
              0
            ],
            "hitSplits": []
          }
        },
        "Slash by a Thousandfold Kiss": {
          "variant1": {
            "skillID": 140208,
            "trigger": "Skill11",
            "name": "Slash by a Thousandfold Kiss",
            "type": "Blast",
            "slot": "Basic ATK",
            "desc": "Aglaea and Garmentmaker launch a Joint ATK on the target, respectively dealing Lightning DMG equal to #1[f1]% of Aglaea's ATK and #3[f1]% of Garmentmaker's ATK to the target. Also, respectively deals Lightning DMG equal to #2[i]% of Aglaea's ATK and #4[i]% of Garmentmaker's ATK to adjacent targets.\\n\"Slash by a Thousandfold Kiss\" cannot recover Skill Points.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                1,
                0.45,
                1,
                0.45
              ],
              "2": [
                1.2,
                0.54,
                1.2,
                0.54
              ],
              "3": [
                1.4,
                0.63,
                1.4,
                0.63
              ],
              "4": [
                1.6,
                0.72,
                1.6,
                0.72
              ],
              "5": [
                1.8,
                0.81,
                1.8,
                0.81
              ],
              "6": [
                2,
                0.9,
                2,
                0.9
              ],
              "7": [
                2.2,
                0.99,
                2.2,
                0.99
              ],
              "8": [
                2.4,
                1.08,
                2.4,
                1.08
              ],
              "9": [
                2.6,
                1.17,
                2.6,
                1.17
              ],
              "10": [
                2.8,
                1.26,
                2.8,
                1.26
              ]
            },
            "element": "Lightning",
            "attackType": "Normal",
            "skillEffect": "Blast",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Aglaea_00_Skill11_Camera",
              "Avatar_Aglaea_00_Skill11_Phase01",
              "Avatar_Aglaea_00_Skill11_Phase02"
            ],
            "toughnessList": [
              60,
              0,
              30
            ],
            "hitSplits": [],
            "extraEffects": {
              "Joint Attack": {
                "desc": "Multiple targets respectively use attacks on enemy targets in one action."
              }
            }
          }
        }
      },
      "Skill": {
        "Rise, Exalted Renown": {
          "variant1": {
            "skillID": 140202,
            "trigger": "Skill02",
            "name": "Rise, Exalted Renown",
            "type": "Summon",
            "slot": "Skill",
            "desc": "Restores HP to Garmentmaker by #1[i]% of its Max HP. If Garmentmaker is absent, then summons the memosprite Garmentmaker and makes this unit immediately take action.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.25,
                0,
                5
              ],
              "2": [
                0.275,
                0,
                5
              ],
              "3": [
                0.3,
                0,
                5
              ],
              "4": [
                0.325,
                0,
                5
              ],
              "5": [
                0.35,
                0,
                5
              ],
              "6": [
                0.375,
                0,
                5
              ],
              "7": [
                0.40625,
                0,
                5
              ],
              "8": [
                0.4375,
                0,
                5
              ],
              "9": [
                0.46875,
                0,
                5
              ],
              "10": [
                0.5,
                0,
                5
              ],
              "11": [
                0.525,
                0,
                5
              ],
              "12": [
                0.55,
                0,
                5
              ],
              "13": [
                0.575,
                0,
                5
              ],
              "14": [
                0.6,
                0,
                5
              ],
              "15": [
                0.625,
                0,
                5
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Summon",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Aglaea_00_Skill02_Camera",
              "Avatar_Aglaea_00_Skill02_Phase01",
              "Avatar_Aglaea_00_Skill02_Phase02",
              "Avatar_Aglaea_00_Skill02_Camera_Self"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Summon Memosprite": {
                "desc": "Summon the memosprite to the field. If the memosprite is already on the field, dispels all Crowd Control debuffs the memosprite is afflicted with."
              }
            }
          },
          "variant2": {
            "skillID": 140209,
            "trigger": "Skill21",
            "name": "Rise, Exalted Renown",
            "type": "Restore",
            "slot": "Skill",
            "desc": "Restores HP for Garmentmaker. If Garmentmaker is absent, summons the memosprite Garmentmaker and makes this unit immediately take action.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.25
              ],
              "2": [
                0.275
              ],
              "3": [
                0.3
              ],
              "4": [
                0.325
              ],
              "5": [
                0.35
              ],
              "6": [
                0.375
              ],
              "7": [
                0.40625
              ],
              "8": [
                0.4375
              ],
              "9": [
                0.46875
              ],
              "10": [
                0.5
              ],
              "11": [
                0.525
              ],
              "12": [
                0.55
              ],
              "13": [
                0.575
              ],
              "14": [
                0.6
              ],
              "15": [
                0.625
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Restore",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Aglaea_00_Skill21_Camera",
              "Avatar_Aglaea_00_Skill21_Phase01",
              "Avatar_Aglaea_00_Skill21_Phase02"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Ultimate": {
        "Dance, Destined Weaveress": {
          "variant1": {
            "skillID": 140203,
            "trigger": "Skill03",
            "name": "Dance, Destined Weaveress",
            "type": "Enhance",
            "slot": "Ultimate",
            "desc": "Summons the memosprite Garmentmaker. If Garmentmaker is already on the field, then restores its HP to max. Aglaea enters the \"Supreme Stance\" state and immediately takes action.\\nWhile in \"Supreme Stance,\" Aglaea gains the SPD Boost stacks from Garmentmaker's Memosprite Talent, with each stack increasing this unit's SPD by #1[f1]%. Enhances Basic ATK to \"Slash by a Thousandfold Kiss,\" and cannot use Skill. Garmentmaker is immune to Crowd Control debuffs.\\nA countdown appears in the Action Order, with its own SPD set at #4[i]. While the countdown exists, using Ultimate again will reset the countdown. When the countdown's turn starts, Garmentmaker self-destructs. When Garmentmaker disappears, Aglaea dispels the \"Supreme Stance\" state.",
            "energyCost": 350,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.1,
                0,
                0,
                100,
                0,
                0
              ],
              "2": [
                0.105,
                0,
                0,
                100,
                0,
                0
              ],
              "3": [
                0.11,
                0,
                0,
                100,
                0,
                0
              ],
              "4": [
                0.115,
                0,
                0,
                100,
                0,
                0
              ],
              "5": [
                0.12,
                0,
                0,
                100,
                0,
                0
              ],
              "6": [
                0.125,
                0,
                0,
                100,
                0,
                0
              ],
              "7": [
                0.13125,
                0,
                0,
                100,
                0,
                0
              ],
              "8": [
                0.1375,
                0,
                0,
                100,
                0,
                0
              ],
              "9": [
                0.14375,
                0,
                0,
                100,
                0,
                0
              ],
              "10": [
                0.15,
                0,
                0,
                100,
                0,
                0
              ],
              "11": [
                0.155,
                0,
                0,
                100,
                0,
                0
              ],
              "12": [
                0.16,
                0,
                0,
                100,
                0,
                0
              ],
              "13": [
                0.165,
                0,
                0,
                100,
                0,
                0
              ],
              "14": [
                0.17,
                0,
                0,
                100,
                0,
                0
              ],
              "15": [
                0.175,
                0,
                0,
                100,
                0,
                0
              ]
            },
            "attackType": "Ultra",
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Aglaea_00_Skill03_Camera",
              "Avatar_Aglaea_00_Skill03_EnterReady",
              "Avatar_Aglaea_00_Skill03_Phase01",
              "Avatar_Aglaea_00_Skill03_Phase02"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Summon Memosprite": {
                "desc": "Summon the memosprite to the field. If the memosprite is already on the field, dispels all Crowd Control debuffs the memosprite is afflicted with."
              },
              "Crowd Control debuff": {
                "desc": "Freeze, Entanglement, Imprisonment, Dominated, Outrage, Strong Reverberation, Alien Dream, Snarelock, Terrified, Action Lock."
              }
            }
          }
        }
      },
      "Talent": {
        "Rosy-Fingered": {
          "variant1": {
            "skillID": 140204,
            "trigger": "SkillP01",
            "name": "Rosy-Fingered",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "The memosprite Garmentmaker has an initial SPD equal to #4[i]% of Aglaea's SPD and a Max HP equal to #5[i]% of Aglaea's Max HP plus #6[i]. While Garmentmaker is on the field, Aglaea's attacks inflict the target with the \"Seam Stitch\" state. After attacking enemies in the \"Seam Stitch\" state, further deals Lightning Additional DMG equal to #1[i]% of Aglaea's ATK. \"Seam Stitch\" only takes effect on the most recently inflicted target.",
            "energyCost": null,
            "energyRegen": 10,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.12,
                0,
                0,
                0.35,
                0.44,
                180
              ],
              "2": [
                0.138,
                0,
                0,
                0.35,
                0.4675,
                247.5
              ],
              "3": [
                0.156,
                0,
                0,
                0.35,
                0.495,
                315
              ],
              "4": [
                0.174,
                0,
                0,
                0.35,
                0.5225,
                382.5
              ],
              "5": [
                0.192,
                0,
                0,
                0.35,
                0.55,
                450
              ],
              "6": [
                0.21,
                0,
                0,
                0.35,
                0.572,
                504
              ],
              "7": [
                0.2325,
                0,
                0,
                0.35,
                0.594,
                558
              ],
              "8": [
                0.255,
                0,
                0,
                0.35,
                0.616,
                612
              ],
              "9": [
                0.2775,
                0,
                0,
                0.35,
                0.638,
                666
              ],
              "10": [
                0.3,
                0,
                0,
                0.35,
                0.66,
                720
              ],
              "11": [
                0.318,
                0,
                0,
                0.35,
                0.682,
                774
              ],
              "12": [
                0.336,
                0,
                0,
                0.35,
                0.704,
                828
              ],
              "13": [
                0.354,
                0,
                0,
                0.35,
                0.726,
                882
              ],
              "14": [
                0.372,
                0,
                0,
                0.35,
                0.748,
                936
              ],
              "15": [
                0.39,
                0,
                0,
                0.35,
                0.77,
                990
              ]
            },
            "element": "Lightning",
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Aglaea_00_PassiveSkill01",
              "Avatar_Aglaea_00_Bonus",
              "Avatar_Aglaea_00_Bonus_Camera"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Additional DMG": {
                "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
              }
            }
          }
        }
      },
      "Technique": {
        "Meteoric Sunder": {
          "variant1": {
            "skillID": 140207,
            "trigger": "SkillMaze",
            "name": "Meteoric Sunder",
            "slot": "Technique",
            "desc": "Summons the memosprite Garmentmaker and launches a forward joint attack. After entering battle, regenerates #2[i] Energy and deals Lightning DMG equal to #1[i]% of Aglaea's ATK to all enemy targets. Then, randomly inflicts the \"Seam Stitch\" state on a random enemy target.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                1,
                30
              ]
            },
            "element": "Lightning",
            "attackType": "Maze",
            "skillEffect": "MazeAttack",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Aglaea_00_SkillMazeInLevel"
            ],
            "toughnessList": [
              60,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Summon Memosprite": {
                "desc": "Summon the memosprite to the field. If the memosprite is already on the field, dispels all Crowd Control debuffs the memosprite is afflicted with."
              }
            }
          }
        }
      },
      "Memosprite Skill": {
        "Thorned Snare": {
          "variant1": {
            "skillID": 1140201,
            "trigger": "Skill01",
            "name": "Thorned Snare",
            "type": "Blast",
            "slot": "Memosprite Skill",
            "desc": "Deals Lightning DMG equal to #1[i]% of ATK to one enemy and Lightning DMG equal to #2[i]% of ATK to adjacent targets.",
            "energyCost": null,
            "energyRegen": 10,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.55,
                0.33,
                1
              ],
              "2": [
                0.66,
                0.396,
                1
              ],
              "3": [
                0.77,
                0.462,
                1
              ],
              "4": [
                0.88,
                0.528,
                1
              ],
              "5": [
                0.99,
                0.594,
                1
              ],
              "6": [
                1.1,
                0.66,
                1
              ],
              "7": [
                1.21,
                0.726,
                1
              ],
              "8": [
                1.32,
                0.792,
                1
              ],
              "9": [
                1.43,
                0.858,
                1
              ],
              "10": [
                1.54,
                0.924,
                1
              ]
            },
            "element": "Lightning",
            "attackType": "Servant",
            "skillEffect": "Blast",
            "maxLevel": 10,
            "configAbilityList": [
              "Servant_AglaeaServant_00_Skill11_Phase01",
              "Servant_AglaeaServant_00_Skill11_Phase02",
              "Servant_AglaeaServant_00_Skill11_Camera",
              "Servant_AglaeaServant_00_Skill11_Camera_Charm"
            ],
            "toughnessList": [
              30,
              0,
              15
            ],
            "hitSplits": []
          }
        }
      },
      "Memosprite Talent": {
        "A Body Brewed by Tears": {
          "variant1": {
            "skillID": 1140203,
            "trigger": "SkillP01",
            "name": "A Body Brewed by Tears",
            "type": "Enhance",
            "slot": "Memosprite Talent",
            "desc": "After attacking an enemy afflicted with \"Seam Stitch,\" increases this unit's SPD by #1[i], stacking up to #3[i] time(s). When Garmentmaker takes action, automatically uses \"Thorned Snare,\" prioritizing enemies under the \"Seam Stitch\" state.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                44,
                3,
                6
              ],
              "2": [
                46.2,
                3,
                6
              ],
              "3": [
                48.4,
                3,
                6
              ],
              "4": [
                50.6,
                3,
                6
              ],
              "5": [
                52.8,
                3,
                6
              ],
              "6": [
                55,
                3,
                6
              ],
              "7": [
                57.2,
                3,
                6
              ],
              "8": [
                59.4,
                3,
                6
              ],
              "9": [
                61.6,
                3,
                6
              ],
              "10": [
                63.8,
                3,
                6
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 10,
            "configAbilityList": [
              "Servant_AglaeaServant_00_Passive",
              "Servant_AglaeaServant_00_Skill11_Together_Phase01",
              "Servant_AglaeaServant_Skill11_00_Together_Phase02",
              "Servant_Aglaea_00_PassiveSkill01_ForceKill_Insert"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        },
        "The Speeding Summer": {
          "variant1": {
            "skillID": 1140205,
            "trigger": "SkillP03",
            "name": "The Speeding Summer",
            "type": "Enhance",
            "slot": "Memosprite Talent",
            "desc": "When Garmentmaker is summoned, this unit's action advances by #1[i]%.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                1
              ],
              "2": [
                1
              ],
              "3": [
                1
              ],
              "4": [
                1
              ],
              "5": [
                1
              ],
              "6": [
                1
              ],
              "7": [
                1
              ],
              "8": [
                1
              ],
              "9": [
                1
              ],
              "10": [
                1
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 10,
            "configAbilityList": [
              "Servant_AglaeaServant_00_BattleCry"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Action Advanced": {
                "desc": "Reduces the target's waiting interval before the next action."
              }
            }
          }
        },
        "Bloom of Drying Grass": {
          "variant1": {
            "skillID": 1140206,
            "trigger": "SkillP04",
            "name": "Bloom of Drying Grass",
            "type": "Enhance",
            "slot": "Memosprite Talent",
            "desc": "When Garmentmaker disappears, regenerates #1[i] Energy for Aglaea.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                20
              ],
              "2": [
                20
              ],
              "3": [
                20
              ],
              "4": [
                20
              ],
              "5": [
                20
              ],
              "6": [
                20
              ],
              "7": [
                20
              ],
              "8": [
                20
              ],
              "9": [
                20
              ],
              "10": [
                20
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 10,
            "configAbilityList": [
              "Servant_AglaeaServant_00_DeathRattle"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1402_basic_atk.png",
        "skillRef": {
          "skillName": "Thorned Nectar",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1402_skill.png",
        "skillRef": {
          "skillName": "Rise, Exalted Renown",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1402_ultimate.png",
        "skillRef": {
          "skillName": "Dance, Destined Weaveress",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1402_talent.png",
        "skillRef": {
          "skillName": "Rosy-Fingered",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1402_technique.png",
        "skillRef": {
          "skillName": "Meteoric Sunder",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "The Myopic's Doom",
        "icon": "icon/skill/1402_skilltree1.png",
        "desc": "While in \"Supreme Stance,\" increases Aglaea's and Garmentmaker's ATK by an amount equal to #1[i]% of Aglaea's SPD plus #2[i]% of Garmentmaker's SPD.",
        "params": [
          7.2,
          3.6
        ]
      },
      "Point07": {
        "name": "Last Thread of Fate",
        "icon": "icon/skill/1402_skilltree2.png",
        "desc": "When Garmentmaker disappears, up to #1[i] stack(s) of the SPD Boost from the Memosprite Talent can be retained. When Garmentmaker is summoned again, gains the corresponding number of SPD Boost stacks.",
        "params": [
          1
        ]
      },
      "Point08": {
        "name": "The Speeding Sol",
        "icon": "icon/skill/1402_skilltree3.png",
        "desc": "At the start of battle, if this unit's Energy is lower than #1[i]%, regenerates this unit's Energy to #2[i]%.",
        "params": [
          0.5,
          0.5
        ]
      },
      "Point09": {
        "name": "DMG Boost: Lightning",
        "icon": "icon/property/IconThunderAddedRatio.png",
        "stats": {
          "DamageLightning": 0.032
        }
      },
      "Point10": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.026999999
        }
      },
      "Point11": {
        "name": "DMG Boost: Lightning",
        "icon": "icon/property/IconThunderAddedRatio.png",
        "stats": {
          "DamageLightning": 0.032
        }
      },
      "Point12": {
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.05
        }
      },
      "Point13": {
        "name": "DMG Boost: Lightning",
        "icon": "icon/property/IconThunderAddedRatio.png",
        "stats": {
          "DamageLightning": 0.048
        }
      },
      "Point14": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.04
        }
      },
      "Point15": {
        "name": "DMG Boost: Lightning",
        "icon": "icon/property/IconThunderAddedRatio.png",
        "stats": {
          "DamageLightning": 0.048
        }
      },
      "Point16": {
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.075
        }
      },
      "Point17": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.053
        }
      },
      "Point18": {
        "name": "DMG Boost: Lightning",
        "icon": "icon/property/IconThunderAddedRatio.png",
        "stats": {
          "DamageLightning": 0.064
        }
      },
      "Point19": {
        "name": "Thorned Snare",
        "icon": "icon/skill/1402_memosprite_skill.png",
        "skillRef": {
          "skillName": "Thorned Snare",
          "skillSlot": "Memosprite Skill"
        }
      },
      "Point20": {
        "name": "A Body Brewed by Tears",
        "icon": "icon/skill/1402_memosprite_talent.png",
        "skillRef": {
          "skillName": "A Body Brewed by Tears",
          "skillSlot": "Memosprite Talent"
        }
      }
    },
    "hasSummon": true,
    "icon": "icon/character/1402.png",
    "preview": "image/character_preview/1402.png",
    "portrait": "image/character_portrait/1402.png",
    "bannerOffsets": [
      -44,
      -134,
      0.64,
      -44,
      -134,
      0.64,
      -44,
      -134,
      0.64
    ],
    "isBuffed": false,
    "baseSummonInfo": {
      "BaseAggro": 125
    },
    "hasRemembranceSummon": true,
    "remembranceSummonID": 11402,
    "summonName": "Garmentmaker"
  },
  "Tribbie": {
    "internalID": 1403,
    "name": "Tribbie",
    "path": "Harmony",
    "element": "Quantum",
    "rarity": 5,
    "energyMax": 120,
    "baseStats": {
      "ATKBase": 523.908,
      "DEFBase": 727.6500000000001,
      "HPBase": 1047.816,
      "SPDBase": 96,
      "CritRateBase": 0.05,
      "CritDamageBase": 0.5,
      "CharacterAggroBase": 100
    },
    "eidolons": [
      {
        "id": "140301",
        "name": "Rite of Sugar Scoop",
        "rank": 1,
        "desc": "While the Zone lasts and after ally targets attack enemies, additionally deals True DMG equal to 24% of the total DMG of this attack to targets that have been dealt Additional DMG by the Zone.",
        "icon": "icon/skill/1403_rank1.png",
        "paramsEido": [
          0.24
        ],
        "extraEffects": {
          "Additional DMG": {
            "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
          },
          "True DMG": {
            "desc": "Non-Type DMG that is not affected by any effects. This DMG is not considered as using 1 attack."
          }
        }
      },
      {
        "id": "140302",
        "name": "Guide of Dream Tour",
        "rank": 2,
        "desc": "The Additional DMG dealt by the Zone increases to 120% of the original DMG. When the Zone deals Additional DMG, further deals 1 instance(s) of Additional DMG.",
        "icon": "icon/skill/1403_rank2.png",
        "paramsEido": [
          1.2,
          1
        ],
        "extraEffects": {
          "Additional DMG": {
            "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
          }
        }
      },
      {
        "id": "140303",
        "name": "Trove of Morning Glow",
        "rank": 3,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1403_ultimate.png"
      },
      {
        "id": "140304",
        "name": "Peace of Empathy Bond",
        "rank": 4,
        "desc": "While \"Numinosity\" lasts, the DMG dealt by all allies ignores 18% of the target's DEF.",
        "icon": "icon/skill/1403_rank4.png",
        "paramsEido": [
          0.18
        ]
      },
      {
        "id": "140305",
        "name": "Clock of Wonder Origin",
        "rank": 5,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1403_skill.png"
      },
      {
        "id": "140306",
        "name": "Morrow of Star Shine",
        "rank": 6,
        "desc": "After Tribbie uses Ultimate, launches her Talent's Follow-Up ATK against all enemies. The DMG dealt by Talent's Follow-Up ATK increases by 729%.",
        "icon": "icon/skill/1403_rank6.png",
        "paramsEido": [
          7.29
        ],
        "extraEffects": {
          "Follow-Up ATK": {
            "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
          }
        }
      }
    ],
    "eidlonLevelBonuses": {
      "3": {
        "Basic ATK": 1,
        "Ultimate": 2
      },
      "5": {
        "Skill": 2,
        "Talent": 2
      }
    },
    "skills": {
      "Basic ATK": {
        "Hundred Rockets": {
          "variant1": {
            "skillID": 140301,
            "trigger": "Skill01",
            "name": "Hundred Rockets",
            "type": "Blast",
            "slot": "Basic ATK",
            "desc": "Deals Quantum DMG equal to #1[i]% of Tribbie's Max HP to one designated enemy. Deals Quantum DMG equal to #2[i]% of Tribbie's Max HP to adjacent targets.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "1": [
                0.15,
                0.075
              ],
              "2": [
                0.18,
                0.09
              ],
              "3": [
                0.21,
                0.105
              ],
              "4": [
                0.24,
                0.12
              ],
              "5": [
                0.27,
                0.135
              ],
              "6": [
                0.3,
                0.15
              ],
              "7": [
                0.33,
                0.165
              ],
              "8": [
                0.36,
                0.18
              ],
              "9": [
                0.39,
                0.195
              ],
              "10": [
                0.42,
                0.21
              ]
            },
            "element": "Quantum",
            "attackType": "Normal",
            "skillEffect": "Blast",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Tribbie_00_Skill01_Camera",
              "Avatar_Tribbie_00_Skill01_Phase01",
              "Avatar_Tribbie_00_Skill01_Phase02"
            ],
            "toughnessList": [
              30,
              0,
              15
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "Where'd the Gifts Go": {
          "variant1": {
            "skillID": 140302,
            "trigger": "Skill02",
            "name": "Where'd the Gifts Go",
            "type": "Support",
            "slot": "Skill",
            "desc": "Gains \"Numinosity,\" lasting for #2[i] turn(s). This duration decreases by 1 at the start of this unit's every turn. While Tribbie has \"Numinosity,\" increases all ally targets' All-Type RES PEN by #1[f1]%.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.12,
                3
              ],
              "2": [
                0.132,
                3
              ],
              "3": [
                0.144,
                3
              ],
              "4": [
                0.156,
                3
              ],
              "5": [
                0.168,
                3
              ],
              "6": [
                0.18,
                3
              ],
              "7": [
                0.195,
                3
              ],
              "8": [
                0.21,
                3
              ],
              "9": [
                0.225,
                3
              ],
              "10": [
                0.24,
                3
              ],
              "11": [
                0.252,
                3
              ],
              "12": [
                0.264,
                3
              ],
              "13": [
                0.276,
                3
              ],
              "14": [
                0.288,
                3
              ],
              "15": [
                0.3,
                3
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Tribbie_00_Skill02_Camera",
              "Avatar_Tribbie_00_Skill02_Phase01",
              "Avatar_Tribbie_00_Skill02_Phase02"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "RES PEN": {
                "desc": "When dealing DMG, ignore a part of the enemy target's resistance to the corresponding damage type."
              }
            }
          }
        }
      },
      "Ultimate": {
        "Guess Who Lives Here": {
          "variant1": {
            "skillID": 140303,
            "trigger": "Skill03",
            "name": "Guess Who Lives Here",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Activates a Zone and deals Quantum DMG equal to #1[i]% of Tribbie's Max HP to all enemies.\\nWhile the Zone lasts, increases enemy targets' DMG taken by #2[f1]%. After an ally target attacks, for every 1 target hit, deals 1 instance of Quantum Additional DMG equal to #3[f1]% of Tribbie's Max HP to the target that has the highest HP among the hit targets.\\nThe Zone lasts for #4[i] turn(s). This duration decreases by 1 at the start of this unit's every turn.",
            "energyCost": 120,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.15,
                0.15,
                0.06,
                2
              ],
              "2": [
                0.165,
                0.165,
                0.066,
                2
              ],
              "3": [
                0.18,
                0.18,
                0.072,
                2
              ],
              "4": [
                0.195,
                0.195,
                0.078,
                2
              ],
              "5": [
                0.21,
                0.21,
                0.084,
                2
              ],
              "6": [
                0.225,
                0.225,
                0.09,
                2
              ],
              "7": [
                0.24375,
                0.24375,
                0.0975,
                2
              ],
              "8": [
                0.2625,
                0.2625,
                0.105,
                2
              ],
              "9": [
                0.28125,
                0.28125,
                0.1125,
                2
              ],
              "10": [
                0.3,
                0.3,
                0.12,
                2
              ],
              "11": [
                0.315,
                0.315,
                0.126,
                2
              ],
              "12": [
                0.33,
                0.33,
                0.132,
                2
              ],
              "13": [
                0.345,
                0.345,
                0.138,
                2
              ],
              "14": [
                0.36,
                0.36,
                0.144,
                2
              ],
              "15": [
                0.375,
                0.375,
                0.15,
                2
              ]
            },
            "element": "Quantum",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Tribbie_00_Skill03_Camera",
              "Avatar_Tribbie_00_Skill03_EnterReady",
              "Avatar_Tribbie_00_Skill03_Phase01",
              "Avatar_Tribbie_00_Skill03_Phase02"
            ],
            "toughnessList": [
              0,
              60,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Additional DMG": {
                "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
              }
            }
          }
        }
      },
      "Talent": {
        "Busy as Tribbie": {
          "variant1": {
            "skillID": 140304,
            "trigger": "SkillP01",
            "name": "Busy as Tribbie",
            "type": "AoE",
            "slot": "Talent",
            "desc": "After other ally characters use Ultimate, Tribbie launches Follow-Up ATK, dealing Quantum DMG equal to #1[f1]% of Tribbie's Max HP to all enemies. This effect triggers up to 1 time per character. When Tribbie uses Ultimate, resets the trigger count for other ally characters. If the target was defeated before the Follow-Up ATK is launched, then launches the Follow-Up ATK against new enemy targets entering the battlefield.",
            "energyCost": null,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 5,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.09
              ],
              "2": [
                0.099
              ],
              "3": [
                0.108
              ],
              "4": [
                0.117
              ],
              "5": [
                0.126
              ],
              "6": [
                0.135
              ],
              "7": [
                0.14625
              ],
              "8": [
                0.1575
              ],
              "9": [
                0.16875
              ],
              "10": [
                0.18
              ],
              "11": [
                0.189
              ],
              "12": [
                0.198
              ],
              "13": [
                0.207
              ],
              "14": [
                0.216
              ],
              "15": [
                0.225
              ]
            },
            "element": "Quantum",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Tribbie_00_PassiveSkill01",
              "Avatar_Tribbie_00_Insert"
            ],
            "toughnessList": [
              0,
              15,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Follow-Up ATK": {
                "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
              }
            }
          }
        }
      },
      "Technique": {
        "If You're Happy and You Know It": {
          "variant1": {
            "skillID": 140307,
            "trigger": "SkillMaze",
            "name": "If You're Happy and You Know It",
            "type": "Enhance",
            "slot": "Technique",
            "desc": "After using Technique and upon entering battle, obtains \"Numinosity,\" lasting for #1[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                3
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Enhance",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Tribbie_00_SkillMazeInLevel"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1403_basic_atk.png",
        "skillRef": {
          "skillName": "Hundred Rockets",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1403_skill.png",
        "skillRef": {
          "skillName": "Where'd the Gifts Go",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1403_ultimate.png",
        "skillRef": {
          "skillName": "Guess Who Lives Here",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1403_talent.png",
        "skillRef": {
          "skillName": "Busy as Tribbie",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1403_technique.png",
        "skillRef": {
          "skillName": "If You're Happy and You Know It",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Lamb Outside the Wall...",
        "icon": "icon/skill/1403_skilltree1.png",
        "desc": "After using Talent's Follow-Up ATK, increases the DMG dealt by Tribbie by #1[i]%. This effect can stack up to #2[i] time(s), lasting for #3[i] turn(s).",
        "params": [
          0.72,
          3,
          3
        ],
        "extraEffects": {
          "Follow-Up ATK": {
            "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
          }
        }
      },
      "Point07": {
        "name": "Glass Ball with Wings!",
        "icon": "icon/skill/1403_skilltree2.png",
        "desc": "While the Zone lasts, Tribbie's Max HP increases by an amount equal to #1[i]% of the sum of all ally characters' Max HP.",
        "params": [
          0.09
        ]
      },
      "Point08": {
        "name": "Pebble at Crossroads?",
        "icon": "icon/skill/1403_skilltree3.png",
        "desc": "At the start of battle, Tribbie regenerates #1[i] Energy. After other ally targets attack, Tribbie regenerates #2[f1] Energy for each target hit.",
        "params": [
          30,
          1.5
        ]
      },
      "Point09": {
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.053
        }
      },
      "Point10": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.026999999
        }
      },
      "Point11": {
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.053
        }
      },
      "Point12": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.04
        }
      },
      "Point13": {
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.08
        }
      },
      "Point14": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.04
        }
      },
      "Point15": {
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.08
        }
      },
      "Point16": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.06
        }
      },
      "Point17": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.053
        }
      },
      "Point18": {
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.107
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1403.png",
    "preview": "image/character_preview/1403.png",
    "portrait": "image/character_portrait/1403.png",
    "bannerOffsets": [
      113,
      26,
      0.64,
      113,
      26,
      0.64,
      113,
      26,
      0.64
    ],
    "isBuffed": false
  },
  "Dan Heng • Permansor Terrae": {
    "internalID": 1414,
    "name": "Dan Heng • Permansor Terrae",
    "path": "Preservation",
    "element": "Physical",
    "rarity": 5,
    "energyMax": 135,
    "baseStats": {
      "ATKBase": 582.1199999999999,
      "DEFBase": 776.1600000000001,
      "HPBase": 1047.816,
      "SPDBase": 97,
      "CritRateBase": 0.05,
      "CritDamageBase": 0.5,
      "CharacterAggroBase": 150
    },
    "eidolons": [
      {
        "id": "141401",
        "name": "Shed Scales of Old",
        "rank": 1,
        "desc": "When Dan Heng • Permansor Terrae uses Ultimate, recovers 1 Skill Point(s) and increases the \"Bondmate's\" All-Type RES PEN by 18%, lasting for 3 turn(s).",
        "icon": "icon/skill/1414_rank1.png",
        "paramsEido": [
          1,
          0.18,
          3
        ],
        "extraEffects": {
          "RES PEN": {
            "desc": "When dealing DMG, ignore a part of the enemy target's resistance to the corresponding damage type."
          }
        }
      },
      {
        "id": "141402",
        "name": "Watch Trails to Blaze",
        "rank": 2,
        "desc": "Additionally increases the number of actions for the enhanced Souldragon from Ultimate by 2. After Dan Heng • Permansor Terrae uses Ultimate, Souldragon advances action by 100%. When the enhanced \"Souldragon\" takes action, the Additional DMG dealt by the \"Bondmate\" becomes 200% of its original DMG, and the Shield Effect provided in this instance becomes 200% of its original Shield Effect.",
        "icon": "icon/skill/1414_rank2.png",
        "paramsEido": [
          2,
          2,
          2
        ],
        "extraEffects": {
          "Action Advanced": {
            "desc": "Reduces the target's waiting interval before the next action."
          },
          "Additional DMG": {
            "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
          }
        }
      },
      {
        "id": "141403",
        "name": "Bear Weight of Worlds",
        "rank": 3,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1414_ultimate.png"
      },
      {
        "id": "141404",
        "name": "By Oath, This Vessel Is I",
        "rank": 4,
        "desc": "Reduces the DMG taken by the \"Bondmate\" by 20%.",
        "icon": "icon/skill/1414_rank4.png",
        "paramsEido": [
          0.2
        ]
      },
      {
        "id": "141405",
        "name": "The Path of Permanence Sweeps Far",
        "rank": 5,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1414_skill.png"
      },
      {
        "id": "141406",
        "name": "One Dream to Enfold All Wilds",
        "rank": 6,
        "desc": "When the \"Bondmate\" is on the field, increases the DMG taken by all enemies by 20%. When the \"Bondmate\" deals DMG, ignores 12% of the enemy targets' DEF. When Dan Heng • Permansor Terrae uses Ultimate, the \"Bondmate\" will deal Additional DMG of the Bondmate's Type to all enemies, equal to 330% of the Bondmate's ATK.",
        "icon": "icon/skill/1414_rank6.png",
        "paramsEido": [
          0.2,
          3.3,
          0.12
        ],
        "extraEffects": {
          "Additional DMG": {
            "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
          }
        }
      }
    ],
    "eidlonLevelBonuses": {
      "3": {
        "Basic ATK": 1,
        "Ultimate": 2
      },
      "5": {
        "Skill": 2,
        "Talent": 2
      }
    },
    "skills": {
      "Basic ATK": {
        "Aegis Vitae": {
          "variant1": {
            "skillID": 141401,
            "trigger": "Skill01",
            "name": "Aegis Vitae",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Physical DMG equal to #1[i]% of Dan Heng • Permansor Terrae's ATK to one designated enemy.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "1": [
                0.5
              ],
              "2": [
                0.6
              ],
              "3": [
                0.7
              ],
              "4": [
                0.8
              ],
              "5": [
                0.9
              ],
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
              ],
              "9": [
                1.3
              ],
              "10": [
                1.4
              ]
            },
            "element": "Physical",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_DanHengPT_00_Skill01_Camera",
              "Avatar_DanHengPT_00_Skill01_Phase01",
              "Avatar_DanHengPT_00_Skill01_Phase02"
            ],
            "toughnessList": [
              30,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "Terra Omnibus": {
          "variant1": {
            "skillID": 141402,
            "trigger": "Skill02",
            "name": "Terra Omnibus",
            "type": "Defense",
            "slot": "Skill",
            "desc": "Designates one ally character as the \"Bondmate\" and provides all allies with a Shield that can offset DMG equal to #1[f1]% of Dan Heng • Permansor Terrae's ATK plus #2[i] for #3[i] turn(s). When repeatedly receiving Dan Heng • Permansor Terrae's Shield, can stack the Shield Effect, but it will not exceed #4[i]% of the current Shield provided by Skill.\\n\"Bondmate\" only applies to the most recent target of Dan Heng • Permansor Terrae's Skill.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.14,
                100,
                3,
                3
              ],
              "2": [
                0.1475,
                160,
                3,
                3
              ],
              "3": [
                0.155,
                205,
                3,
                3
              ],
              "4": [
                0.1625,
                250,
                3,
                3
              ],
              "5": [
                0.17,
                280,
                3,
                3
              ],
              "6": [
                0.176,
                310,
                3,
                3
              ],
              "7": [
                0.182,
                332.5,
                3,
                3
              ],
              "8": [
                0.188,
                355,
                3,
                3
              ],
              "9": [
                0.194,
                377.5,
                3,
                3
              ],
              "10": [
                0.2,
                400,
                3,
                3
              ],
              "11": [
                0.206,
                422.5,
                3,
                3
              ],
              "12": [
                0.212,
                445,
                3,
                3
              ],
              "13": [
                0.218,
                467.5,
                3,
                3
              ],
              "14": [
                0.224,
                490,
                3,
                3
              ],
              "15": [
                0.23,
                512.5,
                3,
                3
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Defence",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_DanHengPT_00_Skill02_Camera",
              "Avatar_DanHengPT_00_Skill02_Camera_End",
              "Avatar_DanHengPT_00_Skill02_Phase01",
              "Avatar_DanHengPT_00_Skill02_Phase02",
              "Avatar_DanHengPT_00_BE_AddShield"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Ultimate": {
        "A Dragon's Zenith Knows No Rue": {
          "variant1": {
            "skillID": 141403,
            "trigger": "Skill03",
            "name": "A Dragon's Zenith Knows No Rue",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Deals Physical DMG equal to #1[i]% of Dan Heng • Permansor Terrae's ATK to all enemies, and provides a Shield to all allies that can offset DMG equal to #4[f1]% of Dan Heng • Permansor Terrae's ATK plus #5[i], lasting for #6[i] turn(s). When repeatedly receiving Dan Heng • Permansor Terrae's Shield, can stack the Shield Effect, but it will not exceed #7[i]% of the current Shield provided by Skill.\\n\"Souldragon\" becomes enhanced. When \"Souldragon\" takes action, launches Follow-Up ATK, dealing Physical DMG to all enemies equal to #2[i]% of Dan Heng • Permansor Terrae's ATK and Additional DMG of the Bondmate's Type to all enemies equal to #8[f1]% of the Bondmate's ATK. The enhancement lasts for #3[i] \"Souldragon\" action(s).",
            "energyCost": 135,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                1.5,
                0.4,
                2,
                0.14,
                100,
                3,
                3,
                0.4
              ],
              "2": [
                1.65,
                0.44,
                2,
                0.1475,
                160,
                3,
                3,
                0.44
              ],
              "3": [
                1.8,
                0.48,
                2,
                0.155,
                205,
                3,
                3,
                0.48
              ],
              "4": [
                1.95,
                0.52,
                2,
                0.1625,
                250,
                3,
                3,
                0.52
              ],
              "5": [
                2.1,
                0.56,
                2,
                0.17,
                280,
                3,
                3,
                0.56
              ],
              "6": [
                2.25,
                0.6,
                2,
                0.176,
                310,
                3,
                3,
                0.6
              ],
              "7": [
                2.4375,
                0.65,
                2,
                0.182,
                332.5,
                3,
                3,
                0.65
              ],
              "8": [
                2.625,
                0.7,
                2,
                0.188,
                355,
                3,
                3,
                0.7
              ],
              "9": [
                2.8125,
                0.75,
                2,
                0.194,
                377.5,
                3,
                3,
                0.75
              ],
              "10": [
                3,
                0.8,
                2,
                0.2,
                400,
                3,
                3,
                0.8
              ],
              "11": [
                3.15,
                0.84,
                2,
                0.206,
                422.5,
                3,
                3,
                0.84
              ],
              "12": [
                3.3,
                0.88,
                2,
                0.212,
                445,
                3,
                3,
                0.88
              ],
              "13": [
                3.45,
                0.92,
                2,
                0.218,
                467.5,
                3,
                3,
                0.92
              ],
              "14": [
                3.6,
                0.96,
                2,
                0.224,
                490,
                3,
                3,
                0.96
              ],
              "15": [
                3.75,
                1,
                2,
                0.23,
                512.5,
                3,
                3,
                1
              ]
            },
            "element": "Physical",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_DanHengPT_00_Skill03_Camera",
              "Avatar_DanHengPT_00_Skill03_EnterReady",
              "Avatar_DanHengPT_00_Skill03_Phase01",
              "Avatar_DanHengPT_00_Skill03_Phase02"
            ],
            "toughnessList": [
              0,
              60,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Follow-Up ATK": {
                "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
              },
              "Additional DMG": {
                "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
              }
            }
          }
        }
      },
      "Talent": {
        "Of Virtue, Forms Unfold": {
          "variant1": {
            "skillID": 141404,
            "trigger": "SkillP01",
            "name": "Of Virtue, Forms Unfold",
            "type": "Defense",
            "slot": "Talent",
            "desc": "When an ally character becomes the \"Bondmate,\" Dan Heng • Permansor Terrae summons \"Souldragon\" for them, which has an initial SPD of #5[i].\\nWhen \"Souldragon\" takes action, dispels #6[i] debuff(s) from all allies and provides a Shield that can offset DMG equal to #1[f1]% of Dan Heng • Permansor Terrae's ATK plus #2[i] for #3[i] turn(s). The Shield Effect provided by Dan Heng • Permansor Terrae and \"Souldragon\" can be stacked, but it will not exceed #4[i]% of the Shield provided by Dan Heng • Permansor Terrae's Skill.\\nWhen Dan Heng • Permansor Terrae or the \"Bondmate\" is knocked down, \"Souldragon\" disappears.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.07,
                50,
                3,
                3,
                165,
                1
              ],
              "2": [
                0.073750004,
                80,
                3,
                3,
                165,
                1
              ],
              "3": [
                0.0775,
                102.5,
                3,
                3,
                165,
                1
              ],
              "4": [
                0.08125,
                125,
                3,
                3,
                165,
                1
              ],
              "5": [
                0.085,
                140,
                3,
                3,
                165,
                1
              ],
              "6": [
                0.088,
                155,
                3,
                3,
                165,
                1
              ],
              "7": [
                0.091,
                166.25,
                3,
                3,
                165,
                1
              ],
              "8": [
                0.094,
                177.5,
                3,
                3,
                165,
                1
              ],
              "9": [
                0.097,
                188.75,
                3,
                3,
                165,
                1
              ],
              "10": [
                0.1,
                200,
                3,
                3,
                165,
                1
              ],
              "11": [
                0.103,
                211.25,
                3,
                3,
                165,
                1
              ],
              "12": [
                0.106,
                222.5,
                3,
                3,
                165,
                1
              ],
              "13": [
                0.109,
                233.75,
                3,
                3,
                165,
                1
              ],
              "14": [
                0.112,
                245,
                3,
                3,
                165,
                1
              ],
              "15": [
                0.115,
                256.25,
                3,
                3,
                165,
                1
              ]
            },
            "element": "Physical",
            "skillEffect": "Defence",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_DanHengPT_00_PassiveSkill01",
              "Avatar_DanHengPT_00_BE_InsertAttack_Phase02"
            ],
            "toughnessList": [
              0,
              60,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Debuff": {
                "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled."
              },
              "Downed State": {
                "desc": "An ally will be incapacitated once their HP is reduced to 0."
              }
            }
          }
        }
      },
      "Technique": {
        "Earthrend": {
          "variant1": {
            "skillID": 141407,
            "trigger": "SkillMaze",
            "name": "Earthrend",
            "type": "Impair",
            "slot": "Technique",
            "desc": "After using Technique, gains \"Bondmate\" and inflict Daze on enemies within a certain area for #1[i] second(s). Dazed enemies will not actively attack ally targets.\\nWhen switching the active character, \"Bondmate\" transfers to the current active character. At the start of the next battle, automatically uses Skill 1 time on the character with \"Bondmate\" without consuming any Skill Points.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                10
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Impair",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_DanHengPT_00_SkillMazeInLevel"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1414_basic_atk.png",
        "skillRef": {
          "skillName": "Aegis Vitae",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1414_skill.png",
        "skillRef": {
          "skillName": "Terra Omnibus",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1414_ultimate.png",
        "skillRef": {
          "skillName": "A Dragon's Zenith Knows No Rue",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1414_talent.png",
        "skillRef": {
          "skillName": "Of Virtue, Forms Unfold",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1414_technique.png",
        "skillRef": {
          "skillName": "Earthrend",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Empyreanity",
        "icon": "icon/skill/1414_skilltree1.png",
        "desc": "When using Skill, increases ATK for the target who has become \"Bondmate\" by an amount equal to #1[i]% of Dan Heng • Permansor Terrae's ATK.",
        "params": [
          0.15
        ]
      },
      "Point07": {
        "name": "Sylvanity",
        "icon": "icon/skill/1414_skilltree2.png",
        "desc": "When combat starts, Dan Heng • Permansor Terrae advances action by #1[i]%. When the \"Bondmate\" uses an attack, Dan Heng • Permansor Terrae regenerates #2[i] Energy and \"Souldragon\" advances action by #3[i]%.",
        "params": [
          0.4,
          6,
          0.15
        ],
        "extraEffects": {
          "Action Advanced": {
            "desc": "Reduces the target's waiting interval before the next action."
          }
        }
      },
      "Point08": {
        "name": "Sublimity",
        "icon": "icon/skill/1414_skilltree3.png",
        "desc": "When \"Souldragon\" takes action, additionally provides a Shield that can offset DMG equal to #2[i]% of Dan Heng • Permansor Terrae's ATK plus #3[i] to the ally target whose current Shield Effect is the lowest. When repeatedly receiving Dan Heng • Permansor Terrae's Shield, can stack the Shield Effect, but it will not exceed #4[i]% of the current Shield provided by Skill. When the enhanced \"Souldragon\" takes action, additionally deals 1 instance of Additional DMG of the Bondmate's Type to the one enemy target whose current HP is the highest, equal to #1[i]% of the Bondmate's ATK.",
        "params": [
          0.4,
          0.05,
          100,
          3
        ],
        "extraEffects": {
          "Additional DMG": {
            "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
          }
        }
      },
      "Point09": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.04
        }
      },
      "Point10": {
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.05
        }
      },
      "Point11": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.04
        }
      },
      "Point12": {
        "name": "SPD Boost",
        "icon": "icon/property/IconSpeed.png",
        "stats": {
          "SPDFlat": 2
        }
      },
      "Point13": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.06
        }
      },
      "Point14": {
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.075
        }
      },
      "Point15": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.06
        }
      },
      "Point16": {
        "name": "SPD Boost",
        "icon": "icon/property/IconSpeed.png",
        "stats": {
          "SPDFlat": 3
        }
      },
      "Point17": {
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.1
        }
      },
      "Point18": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.08
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1414.png",
    "preview": "image/character_preview/1414.png",
    "portrait": "image/character_portrait/1414.png",
    "bannerOffsets": [
      126,
      42,
      0.63,
      126,
      42,
      0.63,
      126,
      42,
      0.63
    ],
    "isBuffed": false
  },
  "Trailblazer - Remembrance": {
    "internalID": 8007,
    "name": "Trailblazer - Remembrance",
    "path": "Remembrance",
    "element": "Ice",
    "rarity": 5,
    "energyMax": 160,
    "baseStats": {
      "ATKBase": 543.312,
      "DEFBase": 630.6300000000001,
      "HPBase": 1047.816,
      "SPDBase": 103,
      "CritRateBase": 0.05,
      "CritDamageBase": 0.5,
      "CharacterAggroBase": 100
    },
    "eidolons": [
      {
        "id": "800701",
        "name": "Narrator of the Present",
        "rank": 1,
        "desc": "Increases the CRIT Rate of ally targets with \"Mem's Support\" by 10%. When an ally target has \"Mem's Support,\" the effect of \"Mem's Support\" also applies to the target's memosprite/memomaster. This effect cannot stack.",
        "icon": "icon/skill/8007_rank1.png",
        "paramsEido": [
          0.1
        ]
      },
      {
        "id": "800702",
        "name": "Gleaner of the Past",
        "rank": 2,
        "desc": "When ally memosprites (aside from Mem) take action, Trailblazer regenerates 8 Energy. This effect can trigger a max of 1 time(s) per turn. The trigger count resets at the start of Trailblazer's turn.",
        "icon": "icon/skill/8007_rank2.png",
        "paramsEido": [
          8,
          1
        ],
        "eidoAbility": "TrailblazerRemembrance_PlayerBoy_30_Eidolon2"
      },
      {
        "id": "800703",
        "name": "Chanter of the Future",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.\nMemosprite Talent Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/8007_skill.png"
      },
      {
        "id": "800704",
        "name": "Dancer of the Muse",
        "rank": 4,
        "desc": "When an ally target with 0 Max Energy actively uses an ability, Mem can also gain 3% Charge, and the multiplier of the True DMG dealt by this target via \"Mem's Support\" additionally increases by 6%.",
        "icon": "icon/skill/8007_rank4.png",
        "paramsEido": [
          0.03,
          0.06
        ],
        "eidoAbility": "TrailblazerRemembrance_PlayerBoy_30_Eidolon4"
      },
      {
        "id": "800705",
        "name": "Seamster of the Ode",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.\nMemosprite Skill Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/8007_ultimate.png"
      },
      {
        "id": "800706",
        "name": "Bearer of the Revelation",
        "rank": 6,
        "desc": "Ultimate's CRIT Rate is set at 100%.",
        "icon": "icon/skill/8007_rank6.png",
        "paramsEido": [
          1
        ]
      }
    ],
    "eidlonLevelBonuses": {
      "3": {
        "Skill": 2,
        "Talent": 2,
        "Memosprite Talent": 1
      },
      "5": {
        "Basic ATK": 1,
        "Ultimate": 2,
        "Memosprite Skill": 1
      }
    },
    "skills": {
      "Basic ATK": {
        "Leave It to Me!": {
          "variant1": {
            "skillID": 800701,
            "trigger": "Skill01",
            "name": "Leave It to Me!",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Ice DMG equal to #1[i]% of Trailblazer's ATK to one designated enemy.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "1": [
                0.5
              ],
              "2": [
                0.6
              ],
              "3": [
                0.7
              ],
              "4": [
                0.8
              ],
              "5": [
                0.9
              ],
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
              ],
              "9": [
                1.3
              ],
              "10": [
                1.4
              ]
            },
            "element": "Ice",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_PlayerBoy_30_Skill01_Camera",
              "Avatar_PlayerBoy_30_Skill01_Phase01",
              "Avatar_PlayerBoy_30_Skill01_Phase02"
            ],
            "toughnessList": [
              30,
              0,
              0
            ],
            "hitSplits": []
          }
        },
        "Together, We Script Tomorrow!": {
          "variant1": {
            "skillID": 800708,
            "trigger": "Skill11",
            "name": "Together, We Script Tomorrow!",
            "type": "AoE",
            "slot": "Basic ATK",
            "desc": "Consumes 1 stack of \"Epic\" to dispel all Crowd Control debuffs on Mem. Trailblazer and Mem launch a Joint ATK, dealing Ice DMG to all enemies equal to #1[i]% of Trailblazer's ATK and #2[i]% of Mem's ATK respectively. Then, Mem gains #3[i]% Charge.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "1": [
                0.6,
                0.6,
                0.1
              ],
              "2": [
                0.72,
                0.72,
                0.1
              ],
              "3": [
                0.84,
                0.84,
                0.1
              ],
              "4": [
                0.96,
                0.96,
                0.1
              ],
              "5": [
                1.08,
                1.08,
                0.1
              ],
              "6": [
                1.2,
                1.2,
                0.1
              ],
              "7": [
                1.32,
                1.32,
                0.1
              ],
              "8": [
                1.44,
                1.44,
                0.1
              ],
              "9": [
                1.56,
                1.56,
                0.1
              ],
              "10": [
                1.68,
                1.68,
                0.1
              ]
            },
            "element": "Ice",
            "attackType": "Normal",
            "skillEffect": "AoEAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_PlayerBoy_30_Skill11_Camera",
              "Avatar_PlayerBoy_30_Skill11_Phase01",
              "Avatar_PlayerBoy_30_Skill11_Phase02"
            ],
            "toughnessList": [
              0,
              30,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Crowd Control debuff": {
                "desc": "Freeze, Entanglement, Imprisonment, Dominated, Outrage, Strong Reverberation, Alien Dream, Snarelock, Terrified, Action Lock."
              },
              "Joint Attack": {
                "desc": "Multiple targets respectively use attacks on enemy targets in one action."
              }
            }
          }
        }
      },
      "Skill": {
        "I Choose You!": {
          "variant1": {
            "skillID": 800702,
            "trigger": "Skill02",
            "name": "I Choose You!",
            "type": "Summon",
            "slot": "Skill",
            "desc": "Summons the memosprite Mem. If Mem is already on the field, restores Mem's HP by an amount equal to #1[i]% of Mem's Max HP, and grants Mem #2[i]% Charge.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.3,
                0.1
              ],
              "2": [
                0.33,
                0.1
              ],
              "3": [
                0.36,
                0.1
              ],
              "4": [
                0.39,
                0.1
              ],
              "5": [
                0.42,
                0.1
              ],
              "6": [
                0.45,
                0.1
              ],
              "7": [
                0.4875,
                0.1
              ],
              "8": [
                0.525,
                0.1
              ],
              "9": [
                0.5625,
                0.1
              ],
              "10": [
                0.6,
                0.1
              ],
              "11": [
                0.63,
                0.1
              ],
              "12": [
                0.66,
                0.1
              ],
              "13": [
                0.69,
                0.1
              ],
              "14": [
                0.72,
                0.1
              ],
              "15": [
                0.75,
                0.1
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Summon",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_PlayerBoy_30_Skill02_Camera",
              "Avatar_PlayerBoy_30_Skill02_Phase01",
              "Avatar_PlayerBoy_30_Skill02_Phase02"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Summon Memosprite": {
                "desc": "Summon the memosprite to the field. If the memosprite is already on the field, dispels all Crowd Control debuffs the memosprite is afflicted with."
              }
            }
          },
          "variant2": {
            "skillID": 800709,
            "trigger": "Skill21",
            "name": "I Choose You!",
            "type": "Restore",
            "slot": "Skill",
            "desc": "Summons the memosprite Mem. If Mem is already on the field, restores Mem's HP, and grants Mem Charge.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "1": [],
              "2": [],
              "3": [],
              "4": [],
              "5": [],
              "6": [],
              "7": [],
              "8": [],
              "9": [],
              "10": [],
              "11": [],
              "12": [],
              "13": [],
              "14": [],
              "15": []
            },
            "attackType": "BPSkill",
            "skillEffect": "Restore",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_PlayerBoy_30_Skill21_Phase01",
              "Avatar_PlayerBoy_30_Skill21_Phase02"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Ultimate": {
        "Together, Mem!": {
          "variant1": {
            "skillID": 800703,
            "trigger": "Skill03",
            "name": "Together, Mem!",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Summons memosprite Mem. Grants Mem #2[i]% Charge, then makes Mem deal Ice DMG equal to #1[i]% of Mem's ATK to all enemies.",
            "energyCost": 160,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                1.2,
                0.4
              ],
              "2": [
                1.32,
                0.4
              ],
              "3": [
                1.44,
                0.4
              ],
              "4": [
                1.56,
                0.4
              ],
              "5": [
                1.68,
                0.4
              ],
              "6": [
                1.8,
                0.4
              ],
              "7": [
                1.95,
                0.4
              ],
              "8": [
                2.1,
                0.4
              ],
              "9": [
                2.25,
                0.4
              ],
              "10": [
                2.4,
                0.4
              ],
              "11": [
                2.52,
                0.4
              ],
              "12": [
                2.64,
                0.4
              ],
              "13": [
                2.76,
                0.4
              ],
              "14": [
                2.88,
                0.4
              ],
              "15": [
                3,
                0.4
              ]
            },
            "element": "Ice",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_PlayerBoy_30_Skill03_Camera",
              "Avatar_PlayerBoy_30_Skill03_EnterReady",
              "Avatar_PlayerBoy_30_Skill03_Phase01",
              "Avatar_PlayerBoy_30_Skill03_Phase02",
              "Avatar_PlayerBoy_30_Skill03_Phase02_Charge"
            ],
            "toughnessList": [
              0,
              60,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Summon Memosprite": {
                "desc": "Summon the memosprite to the field. If the memosprite is already on the field, dispels all Crowd Control debuffs the memosprite is afflicted with."
              }
            }
          }
        }
      },
      "Talent": {
        "Almighty Companion": {
          "variant1": {
            "skillID": 800704,
            "trigger": "SkillP01",
            "name": "Almighty Companion",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "Memosprite Mem has an initial SPD of #1[i] and a Max HP equal to #2[i]% of Trailblazer's Max HP plus #4[i]. For every #3[i] Energy regenerated by all allies in total, Mem gains 1% Charge.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                130,
                0.5,
                10,
                400
              ],
              "2": [
                130,
                0.53,
                10,
                424
              ],
              "3": [
                130,
                0.56,
                10,
                448
              ],
              "4": [
                130,
                0.59,
                10,
                472
              ],
              "5": [
                130,
                0.62,
                10,
                496
              ],
              "6": [
                130,
                0.65,
                10,
                520
              ],
              "7": [
                130,
                0.6875,
                10,
                550
              ],
              "8": [
                130,
                0.725,
                10,
                580
              ],
              "9": [
                130,
                0.7625,
                10,
                610
              ],
              "10": [
                130,
                0.8,
                10,
                640
              ],
              "11": [
                130,
                0.83,
                10,
                664
              ],
              "12": [
                130,
                0.86,
                10,
                688
              ],
              "13": [
                130,
                0.89,
                10,
                712
              ],
              "14": [
                130,
                0.92,
                10,
                736
              ],
              "15": [
                130,
                0.95,
                10,
                760
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_PlayerBoy_30_PassiveSkill01"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Technique": {
        "Memories Back as Echoes": {
          "variant1": {
            "skillID": 800707,
            "trigger": "SkillMaze",
            "name": "Memories Back as Echoes",
            "type": "Impair",
            "slot": "Technique",
            "desc": "After using Technique, creates a Special Dimension that lasts for #1[i] second(s). Enemies within the Special Dimension are placed in a Time Stop state, halting all their actions.\\nAfter entering battle against enemies afflicted with the Time Stop state, delays the action of all enemies by #2[i]%, and then deals Ice DMG to all enemies equal to #3[i]% of Trailblazer's ATK.\\nOnly 1 Dimension Effect created by allies can exist at the same time.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                10,
                0.5,
                1
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Impair",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_PlayerBoy_30_SkillMazeInLevel"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Action Delayed": {
                "desc": "Increases the target's waiting interval before the next action."
              }
            }
          }
        }
      },
      "Memosprite Skill": {
        "Baddies! Trouble!": {
          "variant1": {
            "skillID": 1800701,
            "trigger": "Skill01",
            "name": "Baddies! Trouble!",
            "type": "AoE",
            "slot": "Memosprite Skill",
            "desc": "Deals #2[i] instance(s) of DMG, with each instance dealing Ice DMG equal to #1[f1]% of Mem's ATK to one random enemy. At the end, deals Ice DMG equal to #3[i]% of Mem's ATK to all enemies.",
            "energyCost": null,
            "energyRegen": 10,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 15,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.18,
                4,
                0.45
              ],
              "2": [
                0.216,
                4,
                0.54
              ],
              "3": [
                0.252,
                4,
                0.63
              ],
              "4": [
                0.288,
                4,
                0.72
              ],
              "5": [
                0.324,
                4,
                0.81
              ],
              "6": [
                0.36,
                4,
                0.9
              ],
              "7": [
                0.396,
                4,
                0.99
              ],
              "8": [
                0.432,
                4,
                1.08
              ],
              "9": [
                0.468,
                4,
                1.17
              ],
              "10": [
                0.504,
                4,
                1.26
              ]
            },
            "element": "Ice",
            "attackType": "Servant",
            "skillEffect": "AoEAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Servant_PlayerBoyServant_30_Skill01_Phase01",
              "Servant_PlayerBoyServant_30_Skill01_Phase02",
              "Servant_PlayerBoyServant_30_Skill01_Camera",
              "Servant_PlayerBoyServant_30_Skill01_Camera_Charm"
            ],
            "toughnessList": [
              15,
              30,
              0
            ],
            "hitSplits": []
          }
        },
        "Lemme! Help You!": {
          "variant1": {
            "skillID": 1800707,
            "trigger": "Skill11",
            "name": "Lemme! Help You!",
            "type": "Support",
            "slot": "Memosprite Skill",
            "desc": "Advances the action of one designated ally by #3[i]% and grants them \"Mem's Support,\" lasting for #2[i] turn(s).\\nFor every 1 instance of DMG dealt by a target that has \"Mem's Support,\" additionally deals 1 instance of True DMG equal to #1[i]% of the original DMG.\\nWhen using this ability on this unit, cannot trigger the action advance effect.",
            "energyCost": null,
            "energyRegen": 10,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.18,
                3,
                1
              ],
              "2": [
                0.2,
                3,
                1
              ],
              "3": [
                0.22,
                3,
                1
              ],
              "4": [
                0.24,
                3,
                1
              ],
              "5": [
                0.26,
                3,
                1
              ],
              "6": [
                0.28,
                3,
                1
              ],
              "7": [
                0.3,
                3,
                1
              ],
              "8": [
                0.32,
                3,
                1
              ],
              "9": [
                0.34,
                3,
                1
              ],
              "10": [
                0.36,
                3,
                1
              ]
            },
            "attackType": "Servant",
            "skillEffect": "Support",
            "maxLevel": 10,
            "configAbilityList": [
              "Servant_PlayerBoyServant_30_Skill11_Entry",
              "Servant_PlayerBoyServant_30_Skill11_Entry_Camera",
              "Servant_PlayerBoyServant_30_Skill11_Phase01",
              "Servant_PlayerBoyServant_30_Skill11_Phase02",
              "Servant_PlayerBoyServant_30_Skill11_Camera"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Action Advanced": {
                "desc": "Reduces the target's waiting interval before the next action."
              },
              "True DMG": {
                "desc": "Non-Type DMG that is not affected by any effects. This DMG is not considered as using 1 attack."
              }
            }
          }
        }
      },
      "Memosprite Talent": {
        "Friends! Together!": {
          "variant1": {
            "skillID": 1800703,
            "trigger": "SkillP01",
            "name": "Friends! Together!",
            "type": "Support",
            "slot": "Memosprite Talent",
            "desc": "Increases all allies' CRIT DMG by an amount equal to #1[f1]% of Mem's CRIT DMG plus #2[f1]%.\\nIf the Charge has yet to reach 100%, Mem automatically uses \"Baddies! Trouble!\" when taking action. When the Charge reaches 100%, Mem immediately takes action. In the next action, can select one ally and use \"Lemme! Help You!\".",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.06,
                0.12
              ],
              "2": [
                0.072,
                0.144
              ],
              "3": [
                0.084,
                0.168
              ],
              "4": [
                0.096,
                0.192
              ],
              "5": [
                0.108,
                0.216
              ],
              "6": [
                0.12,
                0.24
              ],
              "7": [
                0.132,
                0.264
              ],
              "8": [
                0.144,
                0.288
              ],
              "9": [
                0.156,
                0.312
              ],
              "10": [
                0.168,
                0.336
              ]
            },
            "skillEffect": "Support",
            "maxLevel": 10,
            "configAbilityList": [
              "Servant_PlayerBoyServant_30_PassiveSkill01",
              "Servant_PlayerBoyServant_30_Skill03_Phase02",
              "Servant_PlayerBoyServant_30_Skill11_Together"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        },
        "Go, Mem, Go!": {
          "variant1": {
            "skillID": 1800705,
            "trigger": "SkillP03",
            "name": "Go, Mem, Go!",
            "type": "Enhance",
            "slot": "Memosprite Talent",
            "desc": "When Mem is summoned, immediately gains #1[i]% Charge.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.5
              ],
              "2": [
                0.5
              ],
              "3": [
                0.5
              ],
              "4": [
                0.5
              ],
              "5": [
                0.5
              ],
              "6": [
                0.5
              ],
              "7": [
                0.5
              ],
              "8": [
                0.5
              ],
              "9": [
                0.5
              ],
              "10": [
                0.5
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 10,
            "configAbilityList": [
              "Servant_PlayerBoyServant_30_BattleCry"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        },
        "No... Regrets": {
          "variant1": {
            "skillID": 1800706,
            "trigger": "SkillP04",
            "name": "No... Regrets",
            "type": "Enhance",
            "slot": "Memosprite Talent",
            "desc": "When Mem disappears, Trailblazer's action advances by #1[i]%.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.25
              ],
              "2": [
                0.25
              ],
              "3": [
                0.25
              ],
              "4": [
                0.25
              ],
              "5": [
                0.25
              ],
              "6": [
                0.25
              ],
              "7": [
                0.25
              ],
              "8": [
                0.25
              ],
              "9": [
                0.25
              ],
              "10": [
                0.25
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 10,
            "configAbilityList": [
              "Servant_PlayerBoyServant_30_DeathRattle"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": [],
            "extraEffects": {
              "Action Advanced": {
                "desc": "Reduces the target's waiting interval before the next action."
              }
            }
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/8007_basic_atk.png",
        "skillRef": {
          "skillName": "Leave It to Me!",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/8007_skill.png",
        "skillRef": {
          "skillName": "I Choose You!",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/8007_ultimate.png",
        "skillRef": {
          "skillName": "Together, Mem!",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/8007_talent.png",
        "skillRef": {
          "skillName": "Almighty Companion",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/8007_technique.png",
        "skillRef": {
          "skillName": "Memories Back as Echoes",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Rhapsode's Scepter",
        "icon": "icon/skill/8007_skilltree1.png",
        "desc": "When the battle starts, Trailblazer's action advances by #1[i]%. When Mem is first summoned, grants Mem #2[i]% Charge.",
        "params": [
          0.3,
          0.4
        ],
        "traceAbility": "TrailblazerRemembrance_PlayerBoy_30_Trace01",
        "extraEffects": {
          "Action Advanced": {
            "desc": "Reduces the target's waiting interval before the next action."
          }
        }
      },
      "Point07": {
        "name": "Petite Parable",
        "icon": "icon/skill/8007_skilltree2.png",
        "desc": "When using \"Baddies! Trouble!,\" Mem immediately gains #1[i]% Charge.",
        "params": [
          0.05
        ]
      },
      "Point08": {
        "name": "Magnets and Long Chains",
        "icon": "icon/skill/8007_skilltree3.png",
        "desc": "When the Max Energy of an ally target that has \"Mem's Support\" exceeds #1[i], for every #2[i] excess Energy, additionally increases the multiplier of the True DMG dealt via \"Mem's Support\" by #3[i]%, up to a max increase of #4[i]%.",
        "params": [
          100,
          10,
          0.02,
          0.2
        ],
        "extraEffects": {
          "True DMG": {
            "desc": "Non-Type DMG that is not affected by any effects. This DMG is not considered as using 1 attack."
          }
        }
      },
      "Point09": {
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.053
        }
      },
      "Point10": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.04
        }
      },
      "Point11": {
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.053
        }
      },
      "Point12": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.04
        }
      },
      "Point13": {
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.08
        }
      },
      "Point14": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.06
        }
      },
      "Point15": {
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.08
        }
      },
      "Point16": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.06
        }
      },
      "Point17": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.08
        }
      },
      "Point18": {
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.107
        }
      },
      "Point19": {
        "name": "Baddies! Trouble!",
        "icon": "icon/skill/8007_memosprite_skill.png",
        "skillRef": {
          "skillName": "Baddies! Trouble!",
          "skillSlot": "Memosprite Skill"
        }
      },
      "Point20": {
        "name": "Friends! Together!",
        "icon": "icon/skill/8007_memosprite_talent.png",
        "skillRef": {
          "skillName": "Friends! Together!",
          "skillSlot": "Memosprite Talent"
        }
      },
      "Point21": {
        "name": "Unfinished Epilogue",
        "icon": "icon/skill/8007_basic_atk2.png",
        "desc": "After using Ultimate, gains 1 stack of \"Epic,\" up to #1[i] stacks. When this unit has \"Epic\" and Mem is on the field, Basic ATK gets enhanced to \"Together, We Script Tomorrow!\"",
        "params": [
          2
        ]
      }
    },
    "hasSummon": true,
    "icon": "icon/character/8007.png",
    "preview": "image/character_preview/8007.png",
    "portrait": "image/character_portrait/8007.png",
    "bannerOffsets": [],
    "isBuffed": false,
    "baseSummonInfo": {
      "BaseAggro": 100
    },
    "hasRemembranceSummon": true,
    "remembranceSummonID": 18007,
    "summonName": "Mem"
  },
  "Saber": {
    "internalID": 1014,
    "name": "Saber",
    "path": "Destruction",
    "element": "Wind",
    "rarity": 5,
    "energyMax": 360,
    "baseStats": {
      "ATKBase": 601.5239999999999,
      "DEFBase": 654.885,
      "HPBase": 1241.8560000000002,
      "SPDBase": 101,
      "CritRateBase": 0.05,
      "CritDamageBase": 0.5,
      "CharacterAggroBase": 125
    },
    "eidolons": [
      {
        "id": "101401",
        "name": "The Lost White Walls",
        "rank": 1,
        "desc": "Increases the Ultimate DMG dealt by Saber by 60%. After Saber uses Basic ATK or Skill, gains 1 \"Core Resonance.\"",
        "icon": "icon/skill/1014_rank1.png",
        "paramsEido": [
          0.6,
          1
        ]
      },
      {
        "id": "101402",
        "name": "The Lost Oath of the Round Table",
        "rank": 2,
        "desc": "For every 1 point of \"Core Resonance\" gained in this battle, Saber's DMG dealt ignores 1.0% of the target's DEF. This effect stacks up to 15 time(s). When triggering the \"Core Resonance\" effect to boost Skill's multiplier, each point of \"Core Resonance\" additionally increases the DMG multiplier for the current instance of Skill by 7%.",
        "icon": "icon/skill/1014_rank2.png",
        "paramsEido": [
          0.07,
          0.01,
          15
        ]
      },
      {
        "id": "101403",
        "name": "A Wish Across Fifteen Centuries",
        "rank": 3,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1014_ultimate.png"
      },
      {
        "id": "101404",
        "name": "The Saga of Sixteen Winter Days",
        "rank": 4,
        "desc": "Increases Saber's Wind RES PEN by 8%. After using Ultimate, increases Saber's Wind RES PEN by 4%. This effect stacks up to 3 time(s).",
        "icon": "icon/skill/1014_rank4.png",
        "paramsEido": [
          0.08,
          0.04,
          3
        ],
        "extraEffects": {
          "RES PEN": {
            "desc": "When dealing DMG, ignore a part of the enemy target's resistance to the corresponding damage type."
          }
        }
      },
      {
        "id": "101405",
        "name": "The Dreamed Utopian Dawn",
        "rank": 5,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1014_skill.png"
      },
      {
        "id": "101406",
        "name": "The Long Fated Night",
        "rank": 6,
        "desc": "The Wind RES PEN of the Ultimate DMG dealt by Saber increases by 20%. The amount of overflow Energy that can be accumulated with the Trace \"Blessing of the Lake\" increases to 200. After using Ultimate for the first time upon entering combat, regenerates a fixed amount of 300 Energy for Saber. This effect can trigger 1 time after every 3 Ultimate use(s).",
        "icon": "icon/skill/1014_rank6.png",
        "paramsEido": [
          0.2,
          3,
          300,
          200
        ],
        "extraEffects": {
          "RES PEN": {
            "desc": "When dealing DMG, ignore a part of the enemy target's resistance to the corresponding damage type."
          }
        }
      }
    ],
    "eidlonLevelBonuses": {
      "3": {
        "Basic ATK": 1,
        "Ultimate": 2
      },
      "5": {
        "Skill": 2,
        "Talent": 2
      }
    },
    "skills": {
      "Basic ATK": {
        "Invisible Air: Barrier of the Wind King": {
          "variant1": {
            "skillID": 101401,
            "trigger": "Skill01",
            "name": "Invisible Air: Barrier of the Wind King",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Wind DMG equal to #1[i]% of Saber's ATK to one designated enemy.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "1": [
                0.5
              ],
              "2": [
                0.6
              ],
              "3": [
                0.7
              ],
              "4": [
                0.8
              ],
              "5": [
                0.9
              ],
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
              ],
              "9": [
                1.3
              ],
              "10": [
                1.4
              ]
            },
            "element": "Wind",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Saber_Skill01_Camera",
              "Avatar_Saber_00_Skill01_Phase01",
              "Avatar_Saber_00_Skill01_Phase02"
            ],
            "toughnessList": [
              30,
              0,
              0
            ],
            "hitSplits": []
          }
        },
        "Release, the Golden Scepter": {
          "variant1": {
            "skillID": 101408,
            "trigger": "Skill11",
            "name": "Release, the Golden Scepter",
            "type": "AoE",
            "slot": "Basic ATK",
            "desc": "Gains #2[i] point(s) of \"Core Resonance\" and deals Wind DMG to all enemies equal to #1[i]% of Saber's ATK. When this ability is used, if the number of enemy targets is 2 or 1, additionally deals Wind DMG to all enemies equal to #3[i]% or #4[i]% of Saber's ATK respectively.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "1": [
                0.75,
                2,
                0.75,
                1.1
              ],
              "2": [
                0.9,
                2,
                0.9,
                1.32
              ],
              "3": [
                1.05,
                2,
                1.05,
                1.54
              ],
              "4": [
                1.2,
                2,
                1.2,
                1.76
              ],
              "5": [
                1.35,
                2,
                1.35,
                1.98
              ],
              "6": [
                1.5,
                2,
                1.5,
                2.2
              ],
              "7": [
                1.65,
                2,
                1.65,
                2.42
              ],
              "8": [
                1.8,
                2,
                1.8,
                2.64
              ],
              "9": [
                1.95,
                2,
                1.95,
                2.86
              ],
              "10": [
                2.1,
                2,
                2.1,
                3.08
              ]
            },
            "element": "Wind",
            "attackType": "Normal",
            "skillEffect": "AoEAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Saber_00_Skill11_Camera",
              "Avatar_Saber_00_Skill11_Phase01",
              "Avatar_Saber_00_Skill11_Phase02"
            ],
            "toughnessList": [
              0,
              60,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "Strike Air: Hammer of the Wind King": {
          "variant1": {
            "skillID": 101402,
            "trigger": "Skill02",
            "name": "Strike Air: Hammer of the Wind King",
            "type": "Blast",
            "slot": "Skill",
            "desc": "Deals Wind DMG equal to #1[i]% of Saber's ATK to one designated enemy, and deals Wind DMG equal to #2[i]% of Saber's ATK to adjacent targets. If Saber currently holds \"Core Resonance\" and her Energy can be fully regenerated by consuming \"Core Resonance\" after this instance of Skill attack, then increases the multiplier for this instance of Skill. For every 1 point of \"Core Resonance,\" increases the DMG multiplier for this instance of Skill by #4[f1]%. And after the attack, consumes all \"Core Resonance\" to regenerate Energy for Saber. Otherwise, immediately gains #3[i] point(s) of \"Core Resonance.\"",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.75,
                0.375,
                3,
                0.07
              ],
              "2": [
                0.825,
                0.4125,
                3,
                0.077
              ],
              "3": [
                0.9,
                0.45,
                3,
                0.084
              ],
              "4": [
                0.975,
                0.4875,
                3,
                0.091
              ],
              "5": [
                1.05,
                0.525,
                3,
                0.098
              ],
              "6": [
                1.125,
                0.5625,
                3,
                0.105
              ],
              "7": [
                1.21875,
                0.609375,
                3,
                0.11375
              ],
              "8": [
                1.3125,
                0.65625,
                3,
                0.1225
              ],
              "9": [
                1.40625,
                0.703125,
                3,
                0.13125
              ],
              "10": [
                1.5,
                0.75,
                3,
                0.14
              ],
              "11": [
                1.575,
                0.7875,
                3,
                0.147
              ],
              "12": [
                1.65,
                0.825,
                3,
                0.154
              ],
              "13": [
                1.725,
                0.8625,
                3,
                0.161
              ],
              "14": [
                1.8,
                0.9,
                3,
                0.168
              ],
              "15": [
                1.875,
                0.9375,
                3,
                0.175
              ]
            },
            "element": "Wind",
            "attackType": "BPSkill",
            "skillEffect": "Blast",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Saber_Skill02_Camera",
              "Avatar_Saber_00_Skill02_Phase01",
              "Avatar_Saber_00_Skill02_Phase02"
            ],
            "toughnessList": [
              60,
              0,
              30
            ],
            "hitSplits": []
          }
        }
      },
      "Ultimate": {
        "Excalibur": {
          "variant1": {
            "skillID": 101403,
            "trigger": "Skill03",
            "name": "Excalibur",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Deals Wind DMG equal to #1[i]% of Saber's ATK to all enemies, and additionally deals #3[i] instance(s) of DMG, with each instance being Wind DMG equal to #2[i]% of Saber's ATK dealt to one random enemy. After using Ultimate, the next Basic ATK switches to \"Release, the Golden Scepter,\" and only \"Release, the Golden Scepter\" can be used.",
            "energyCost": 360,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 40,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                1.4,
                0.55,
                10
              ],
              "2": [
                1.54,
                0.605,
                10
              ],
              "3": [
                1.68,
                0.66,
                10
              ],
              "4": [
                1.82,
                0.715,
                10
              ],
              "5": [
                1.96,
                0.77,
                10
              ],
              "6": [
                2.1,
                0.825,
                10
              ],
              "7": [
                2.275,
                0.89375,
                10
              ],
              "8": [
                2.45,
                0.9625,
                10
              ],
              "9": [
                2.625,
                1.03125,
                10
              ],
              "10": [
                2.8,
                1.1,
                10
              ],
              "11": [
                2.94,
                1.155,
                10
              ],
              "12": [
                3.08,
                1.21,
                10
              ],
              "13": [
                3.22,
                1.265,
                10
              ],
              "14": [
                3.36,
                1.32,
                10
              ],
              "15": [
                3.5,
                1.375,
                10
              ]
            },
            "element": "Wind",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Saber_00_Skill03_Camera",
              "Avatar_Saber_00_Skill03_Phase01",
              "Avatar_Saber_00_Skill03_Phase02",
              "Avatar_Saber_00_Skill03_EnterReady"
            ],
            "toughnessList": [
              60,
              120,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Talent": {
        "Dragon Reactor Core": {
          "variant1": {
            "skillID": 101404,
            "trigger": "SkillP01",
            "name": "Dragon Reactor Core",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "When entering combat, gains #8[i] \"Core Resonance\" point(s). When any ally target uses Ultimate, increases the DMG dealt by Saber by #3[i]% for #4[i] turn(s) and gains #1[i] \"Core Resonance\" point(s). For every 1 \"Core Resonance\" point consumed, regenerates a fixed amount of #5[f1] Energy for Saber.",
            "energyCost": null,
            "energyRegen": 10,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                3,
                25,
                0.3,
                2,
                8,
                0.05,
                99,
                1
              ],
              "2": [
                3,
                25,
                0.33,
                2,
                8,
                0.055,
                99,
                1
              ],
              "3": [
                3,
                25,
                0.36,
                2,
                8,
                0.06,
                99,
                1
              ],
              "4": [
                3,
                25,
                0.39,
                2,
                8,
                0.065,
                99,
                1
              ],
              "5": [
                3,
                25,
                0.42,
                2,
                8,
                0.07,
                99,
                1
              ],
              "6": [
                3,
                25,
                0.45,
                2,
                8,
                0.075,
                99,
                1
              ],
              "7": [
                3,
                25,
                0.4875,
                2,
                8,
                0.08125,
                99,
                1
              ],
              "8": [
                3,
                25,
                0.525,
                2,
                8,
                0.0875,
                99,
                1
              ],
              "9": [
                3,
                25,
                0.5625,
                2,
                8,
                0.09375,
                99,
                1
              ],
              "10": [
                3,
                25,
                0.6,
                2,
                8,
                0.1,
                99,
                1
              ],
              "11": [
                3,
                25,
                0.63,
                2,
                8,
                0.105,
                99,
                1
              ],
              "12": [
                3,
                25,
                0.66,
                2,
                8,
                0.11,
                99,
                1
              ],
              "13": [
                3,
                25,
                0.69,
                2,
                8,
                0.115,
                99,
                1
              ],
              "14": [
                3,
                25,
                0.72,
                2,
                8,
                0.12,
                99,
                1
              ],
              "15": [
                3,
                25,
                0.75,
                2,
                8,
                0.125,
                99,
                1
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Activity_FateStory_Saber_Insert_Camera",
              "Activity_FateStory_Saber_Insert_Phase01",
              "Activity_FateStory_Saber_Insert_Phase02",
              "Avatar_Saber_00_PassiveSkill01"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      },
      "Technique": {
        "Behold, the King of Knights": {
          "variant1": {
            "skillID": 101407,
            "trigger": "SkillMaze",
            "name": "Behold, the King of Knights",
            "type": "Enhance",
            "slot": "Technique",
            "desc": "After using Technique, at the start of the next battle, increases Saber's ATK by #1[i]% for #2[i] turn(s) and gains #3[i] \"Core Resonance.\"",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.35,
                2,
                2
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Enhance",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Saber_00_SkillMazeInLevel"
            ],
            "toughnessList": [
              0,
              0,
              0
            ],
            "hitSplits": []
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1014_basic_atk.png",
        "skillRef": {
          "skillName": "Invisible Air: Barrier of the Wind King",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1014_skill.png",
        "skillRef": {
          "skillName": "Strike Air: Hammer of the Wind King",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1014_ultimate.png",
        "skillRef": {
          "skillName": "Excalibur",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1014_talent.png",
        "skillRef": {
          "skillName": "Dragon Reactor Core",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1014_technique.png",
        "skillRef": {
          "skillName": "Behold, the King of Knights",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Knight of the Dragon",
        "icon": "icon/skill/1014_skilltree1.png",
        "desc": "Increases Saber's CRIT Rate by #1[i]%. When entering combat or when using her Enhanced Basic ATK, gains the \"Mana Burst\" effect. Under this effect, if Saber has \"Core Resonance\" and her Energy can be fully regenerated by using her Skill and consuming \"Core Resonance,\" then consumes \"Mana Burst\" to recover 1 Skill Point for allies, and causes Saber to immediately take action.",
        "params": [
          0.2,
          0.4,
          0.2
        ]
      },
      "Point07": {
        "name": "Blessing of the Lake",
        "icon": "icon/skill/1014_skilltree2.png",
        "desc": "Saber can accumulate up to #1[i] overflow Energy. After using Ultimate, the overflow Energy is cleared and a corresponding amount of Energy is regenerated. When the battle starts, if Energy is below #3[i]%, it is regenerated to #2[i]%.",
        "params": [
          120,
          0.6,
          0.6
        ]
      },
      "Point08": {
        "name": "Crown of the Star",
        "icon": "icon/skill/1014_skilltree3.png",
        "desc": "When using Skill, increases Saber's CRIT DMG by #1[i]% for #2[i] turns. During this battle, for every 1 point of \"Core Resonance\" gained, increases Saber's CRIT DMG by #3[i]%, stacking up to #4[i] time(s).",
        "params": [
          0.5,
          2,
          0.04,
          8
        ]
      },
      "Point09": {
        "name": "DMG Boost: Wind",
        "icon": "icon/property/IconWindAddedRatio.png",
        "stats": {
          "DamageWind": 0.032
        }
      },
      "Point10": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.026999999
        }
      },
      "Point11": {
        "name": "DMG Boost: Wind",
        "icon": "icon/property/IconWindAddedRatio.png",
        "stats": {
          "DamageWind": 0.032
        }
      },
      "Point12": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.04
        }
      },
      "Point13": {
        "name": "DMG Boost: Wind",
        "icon": "icon/property/IconWindAddedRatio.png",
        "stats": {
          "DamageWind": 0.048
        }
      },
      "Point14": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.04
        }
      },
      "Point15": {
        "name": "DMG Boost: Wind",
        "icon": "icon/property/IconWindAddedRatio.png",
        "stats": {
          "DamageWind": 0.048
        }
      },
      "Point16": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.06
        }
      },
      "Point17": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.053
        }
      },
      "Point18": {
        "name": "DMG Boost: Wind",
        "icon": "icon/property/IconWindAddedRatio.png",
        "stats": {
          "DamageWind": 0.064
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1014.png",
    "preview": "image/character_preview/1014.png",
    "portrait": "image/character_portrait/1014.png",
    "bannerOffsets": [
      134,
      2,
      0.64,
      134,
      2,
      0.64,
      134,
      2,
      0.64
    ],
    "isBuffed": false
  }
}