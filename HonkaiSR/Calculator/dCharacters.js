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
      "AggroBase": 100
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
        "desc": "When an enemy target enters battle, increases their DMG taken by 20%. When an enemy target gets attacked by ally targets, Silver Wolf has a 100% base chance to implant 1 random \"Bug\" on the attacked enemy target.",
        "icon": "icon/skill/1100_rank2.png",
        "paramsEido": [
          0.2,
          1
        ],
        "extraEffects": {
          "Base Chance": {
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
          }
        }
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
        }
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
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
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
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 0.25,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
              },
              {
                "primary": {
                  "hitRatio": 0.25,
                  "energyRatio": 1,
                  "toughness": 10
                }
              },
              {
                "primary": {
                  "hitRatio": 0.5,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
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
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 20
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true,
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ],
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
            "hitSplits": [
              {
                "all": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 20
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true,
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ],
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
              ]
            },
            "skillEffect": "Impair",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Advanced_Silwolf_00_PassiveSkill01"
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
            "hitSplits": [
              {
                "all": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 20
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true,
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
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
    ]
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
      "AggroBase": 100
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
        }
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
        "desc": "After any other ally character uses Basic ATK on an enemy target that has Wind Weakness, Bronya immediately launches 1 instance of Follow-up ATK, dealing Wind DMG to this target equal to 80% of her Basic ATK DMG. This effect can only trigger once per turn.",
        "icon": "icon/skill/1101_rank4.png",
        "paramsEido": [
          0.8
        ],
        "extraEffects": {
          "Follow-up ATK": {
            "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
          }
        }
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
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
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
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true,
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
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
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true,
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ],
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
        ]
      },
      "Point08": {
        "name": "Military Might",
        "icon": "icon/skill/1101_skilltree3.png",
        "desc": "When Bronya is on the field, all allies deal #1[i]% more DMG.",
        "params": [
          0.1
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
    ]
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
      "AggroBase": 100
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
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
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
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 0.3,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
              },
              {
                "primary": {
                  "hitRatio": 0.7,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
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
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_TingYun_PassiveSkill01"
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
      "Point08": {
        "name": "Jubilant Passage",
        "icon": "icon/skill/1202_skilltree3.png",
        "desc": "Tingyun immediately regenerates #1[i] Energy at the start of her turn.",
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
      },
      "Point07": {
        "name": "Knell Subdual",
        "icon": "icon/skill/1202_skilltree2.png",
        "desc": "DMG dealt by Basic ATK increases by #1[i]%.",
        "params": [
          0.4
        ]
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
    ]
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
      "AggroBase": 100
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
              "6": [
                0.5
              ],
              "7": [
                0.55
              ],
              "8": [
                0.6
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
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 0.2,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
              },
              {
                "primary": {
                  "hitRatio": 0.2,
                  "energyRatio": 1,
                  "toughness": 10
                }
              },
              {
                "primary": {
                  "hitRatio": 0.2,
                  "energyRatio": 1,
                  "toughness": 10
                }
              },
              {
                "primary": {
                  "hitRatio": 0.4,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
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
              ]
            },
            "skillEffect": "Restore",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Huohuo_00_PassiveSkill01",
              "Avatar_Huohuo_00_Rank02_Insert"
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
    ]
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
      "AggroBase": 100
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
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
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
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 0.5,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
              },
              {
                "primary": {
                  "hitRatio": 0.5,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
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
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 0.25,
                  "energyRatio": 1,
                  "toughness": 30
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
              },
              {
                "primary": {
                  "hitRatio": 0.15,
                  "energyRatio": 1,
                  "toughness": 30
                }
              },
              {
                "primary": {
                  "hitRatio": 0.6,
                  "energyRatio": 1,
                  "toughness": 30
                },
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
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
            "hitSplits": [
              {
                "all": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 20
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true,
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
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
              ]
            },
            "element": "Fire",
            "skillEffect": "Restore",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Gallagher_00_PassiveSkill01"
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
            "hitSplits": [
              {
                "all": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 20
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true,
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
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
    ]
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
      "AggroBase": 100
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
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
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
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 0.33,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
              },
              {
                "primary": {
                  "hitRatio": 0.33,
                  "energyRatio": 1,
                  "toughness": 10
                }
              },
              {
                "primary": {
                  "hitRatio": 0.34,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
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
              ]
            },
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Robin_00_PassiveSkill01"
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
        "desc": "While the Concerto state is active, the CRIT DMG dealt when all allies launch Follow-up ATK increases by #1[i]%.",
        "params": [
          0.25
        ],
        "extraEffects": {
          "Follow-up ATK": {
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
    ]
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
      "AggroBase": 100
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
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
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
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true,
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
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
            "desc": "Enables one designated ally character and their summon to immediately take action, and increases their DMG dealt by #2[i]%. If the target has a summon, then the dealt DMG increase is further boosted by an additional #4[i]%, lasting for #3[i] turn(s).\\nAfter using Skill on The Beatified, recovers 1 Skill Point.\\nWhen Sunday uses this ability on characters following the Path of Harmony, cannot trigger the \"immediate action\" effect.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
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
              ]
            },
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Sunday_10_PassiveSkill01"
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
    ]
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
      "AggroBase": 100
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
        "desc": "After Tribbie uses Ultimate, launches her Talent's Follow-up ATK against all enemies. The DMG dealt by Talent's Follow-up ATK increases by 729%.",
        "icon": "icon/skill/1403_rank6.png",
        "paramsEido": [
          7.29
        ],
        "extraEffects": {
          "Follow-up ATK": {
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
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "blast": {
                  "hitRatio": 1,
                  "toughness": 5
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true,
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
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
            "hitSplits": [
              {
                "all": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 20
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true,
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ],
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
            "desc": "After other ally characters use Ultimate, Tribbie launches Follow-up ATK, dealing Quantum DMG equal to #1[f1]% of Tribbie's Max HP to all enemies. This effect triggers up to 1 time per character. When Tribbie uses Ultimate, resets the trigger count for other ally characters. If the target was defeated before the Follow-up ATK is launched, then launches the Follow-up ATK against new enemy targets entering the battlefield.",
            "energyCost": null,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 5,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
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
              ]
            },
            "element": "Quantum",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Tribbie_00_PassiveSkill01",
              "Avatar_Tribbie_00_Insert"
            ],
            "hitSplits": [
              {
                "all": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 5
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true,
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ],
            "extraEffects": {
              "Follow-up ATK": {
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
        "desc": "After using Talent's Follow-up ATK, increases the DMG dealt by Tribbie by #1[i]%. This effect can stack up to #2[i] time(s), lasting for #3[i] turn(s).",
        "params": [
          0.72,
          3,
          3
        ],
        "extraEffects": {
          "Follow-up ATK": {
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
    ]
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
      "AggroBase": 150
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
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
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
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 0.3,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
              },
              {
                "primary": {
                  "hitRatio": 0.7,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
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
            "desc": "Deals Physical DMG equal to #1[i]% of Dan Heng • Permansor Terrae's ATK to all enemies, and provides a Shield to all allies that can offset DMG equal to #4[f1]% of Dan Heng • Permansor Terrae's ATK plus #5[i], lasting for #6[i] turn(s). When repeatedly receiving Dan Heng • Permansor Terrae's Shield, can stack the Shield Effect, but it will not exceed #7[i]% of the current Shield provided by Skill.\\n\"Souldragon\" becomes enhanced. When \"Souldragon\" takes action, launches Follow-up ATK, dealing Physical DMG to all enemies equal to #2[i]% of Dan Heng • Permansor Terrae's ATK and Additional DMG of the Bondmate's Type to all enemies equal to #8[f1]% of the Bondmate's ATK. The enhancement lasts for #3[i] \"Souldragon\" action(s).",
            "energyCost": 135,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
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
            "hitSplits": [
              {
                "all": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 20
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
              },
              {
                "all": {
                  "hitRatio": 1,
                  "toughness": null
                },
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ],
            "extraEffects": {
              "Follow-up ATK": {
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
              ]
            },
            "element": "Physical",
            "skillEffect": "Defence",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_DanHengPT_00_PassiveSkill01",
              "Avatar_DanHengPT_00_BE_InsertAttack_Phase02"
            ],
            "hitSplits": [
              {
                "all": {
                  "hitRatio": 0.25,
                  "toughness": 20
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
              },
              {
                "all": {
                  "hitRatio": 0.25,
                  "toughness": 20
                }
              },
              {
                "all": {
                  "hitRatio": 0.25,
                  "toughness": 20
                }
              },
              {
                "all": {
                  "hitRatio": 0.25,
                  "toughness": 20
                }
              },
              {
                "all": {
                  "hitRatio": 1,
                  "toughness": null
                }
              },
              {
                "unknownTypers": {
                  "unknownTypeName": "ParamEntity",
                  "unknownType": true,
                  "upperType": "Avatar_DanHengPT_00_BE_InsertAttack_Phase02"
                },
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ],
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
    ]
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
      "AggroBase": 100
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
        ]
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
        ]
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
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
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
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true,
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
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
            "hitSplits": [
              {
                "all": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 5
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true,
                "isSourceLastHit": true
              },
              {
                "all": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 5
                },
                "isMemo": true,
                "isSourceFirstHit": true,
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ],
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
              "7": [],
              "8": [],
              "9": [],
              "10": [],
              "11": [],
              "12": []
            },
            "attackType": "BPSkill",
            "skillEffect": "Restore",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_PlayerBoy_30_Skill21_Phase01",
              "Avatar_PlayerBoy_30_Skill21_Phase02"
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
            "hitSplits": [
              {
                "all": {
                  "hitRatio": 1,
                  "toughness": 20
                },
                "isMemo": true,
                "isSourceFirstHit": true,
                "isAttackFirstHit": true,
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ],
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
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_PlayerBoy_30_PassiveSkill01"
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
            "hitSplits": [
              {
                "all": {
                  "hitRatio": 1,
                  "toughness": null
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true,
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ],
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
            "hitSplits": [
              {
                "bounce": {
                  "hitRatio": 1,
                  "toughness": 5
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
              },
              {
                "bounce": {
                  "hitRatio": 1,
                  "toughness": 5
                }
              },
              {
                "bounce": {
                  "hitRatio": 1,
                  "toughness": 5
                }
              },
              {
                "bounce": {
                  "hitRatio": 1,
                  "toughness": 5
                }
              },
              {
                "all": {
                  "hitRatio": 1,
                  "toughness": 10
                },
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
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
              ]
            },
            "skillEffect": "Support",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_PlayerBoy_30_PassiveSkill01"
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
              "6": [
                0.5
              ],
              "7": [
                0.5
              ],
              "8": [
                0.5
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 10,
            "configAbilityList": null,
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
              "6": [
                0.25
              ],
              "7": [
                0.25
              ],
              "8": [
                0.25
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 10,
            "configAbilityList": null,
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
      "AggroBase": 125
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
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
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
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true,
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
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
            "hitSplits": [
              {
                "all": {
                  "hitRatio": 0.5,
                  "energyRatio": 1,
                  "toughness": 20
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
              },
              {
                "all": {
                  "hitRatio": 0.5,
                  "energyRatio": 1,
                  "toughness": 20
                },
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
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
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 0.1,
                  "energyRatio": 0.1,
                  "toughness": 20
                },
                "blast": {
                  "hitRatio": 0.1,
                  "toughness": 10
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
              },
              {
                "primary": {
                  "hitRatio": 0.1,
                  "energyRatio": 0.1,
                  "toughness": 20
                },
                "blast": {
                  "hitRatio": 0.1,
                  "toughness": 10
                }
              },
              {
                "primary": {
                  "hitRatio": 0.1,
                  "energyRatio": 0.1,
                  "toughness": 20
                },
                "blast": {
                  "hitRatio": 0.1,
                  "toughness": 10
                }
              },
              {
                "primary": {
                  "hitRatio": 0.7,
                  "energyRatio": 0.7,
                  "toughness": 20
                },
                "blast": {
                  "hitRatio": 0.7,
                  "toughness": 10
                },
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
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
            "hitSplits": [
              {
                "all": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 40
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
              },
              {
                "all": {
                  "hitRatio": 1,
                  "toughness": null
                }
              },
              {
                "all": {
                  "hitRatio": 1,
                  "toughness": null
                },
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
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
    ]
  }
}