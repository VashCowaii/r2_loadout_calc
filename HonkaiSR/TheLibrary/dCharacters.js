let characters = {
  "Herta": {
    "internalID": 1013,
    "name": "Herta",
    "path": "Erudition",
    "element": "Ice",
    "rarity": 4,
    "energyMax": 110,
    "baseStats": {
      "ATKBase": 582.1199999999999,
      "DEFBase": 396.9,
      "HPBase": 952.56,
      "SPDBase": 100,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 75
    },
    "eidolons": [
      {
        "id": "101301",
        "name": "Kick You When You're Down",
        "rank": 1,
        "desc": "When using Basic ATK, if the designated enemy's HP percentage is at 50% or less, additionally deals Ice Additional DMG equal to 40% of Herta's ATK.",
        "icon": "icon/skill/1013_rank1.png",
        "paramsEido": [
          0.5,
          0.4
        ],
        "extraEffects": {
          "Additional DMG": {
            "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
          }
        }
      },
      {
        "id": "101302",
        "name": "Keep the Ball Rolling",
        "rank": 2,
        "desc": "Every time Talent is triggered, this character's CRIT Rate increases by 3%. This effect can stack up to 5 time(s).",
        "icon": "icon/skill/1013_rank2.png",
        "paramsEido": [
          0.03,
          5
        ]
      },
      {
        "id": "101303",
        "name": "That's the Kind of Girl I Am",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1013_skill.png"
      },
      {
        "id": "101304",
        "name": "Hit Where It Hurts",
        "rank": 4,
        "desc": "When Talent is triggered, DMG increases by 10%.",
        "icon": "icon/skill/1013_rank4.png",
        "paramsEido": [
          0.1
        ]
      },
      {
        "id": "101305",
        "name": "Cuss Big or Cuss Nothing",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1013_ultimate.png"
      },
      {
        "id": "101306",
        "name": "No One Can Betray Me",
        "rank": 6,
        "desc": "After using Ultimate, this character's ATK increases by 25% for 1 turn(s).",
        "icon": "icon/skill/1013_rank6.png",
        "paramsEido": [
          0.25,
          1
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
        "What Are You Looking At?": {
          "variant1": {
            "skillID": 101301,
            "trigger": "Skill01",
            "name": "What Are You Looking At?",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Ice DMG equal to #1[i]% of Herta's ATK to one designated enemy.",
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
              "Avatar_Herta_Skill01_Camera",
              "Avatar_Herta_Skill01_Phase01",
              "Avatar_Herta_Skill01_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 30
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "One-Time Offer": {
          "variant1": {
            "skillID": 101302,
            "trigger": "Skill02",
            "name": "One-Time Offer",
            "type": "AoE",
            "slot": "Skill",
            "desc": "Deals Ice DMG equal to #1[i]% of Herta's ATK to all enemies. If the enemy's HP percentage is #2[i]% or higher, DMG dealt to this target increases by #3[i]%.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.8125,
                0.5,
                0.2
              ],
              "8": [
                0.875,
                0.5,
                0.2
              ],
              "9": [
                0.9375,
                0.5,
                0.2
              ],
              "10": [
                1,
                0.5,
                0.2
              ],
              "11": [
                1.05,
                0.5,
                0.2
              ],
              "12": [
                1.1,
                0.5,
                0.2
              ]
            },
            "element": "Ice",
            "attackType": "BPSkill",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Herta_Skill02_Camera",
              "Avatar_Herta_Skill02_Phase01",
              "Avatar_Herta_Skill02_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 30
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Ultimate": {
        "It's Magic, I Added Some Magic": {
          "variant1": {
            "skillID": 101303,
            "trigger": "Skill03",
            "name": "It's Magic, I Added Some Magic",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Deals Ice DMG equal to #1[i]% of Herta's ATK to all enemies.",
            "energyCost": 110,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.7
              ],
              "8": [
                1.8
              ],
              "9": [
                1.9
              ],
              "10": [
                2
              ],
              "11": [
                2.08
              ],
              "12": [
                2.16
              ]
            },
            "element": "Ice",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Herta_00_Skill03_Camera",
              "Avatar_Herta_Skill03_Phase01",
              "Avatar_Herta_Skill03_Phase02",
              "Avatar_Herta_00_Skill03_EnterReady"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 60
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Talent": {
        "Fine, I'll Do It Myself": {
          "variant1": {
            "skillID": 101304,
            "trigger": "SkillP01",
            "name": "Fine, I'll Do It Myself",
            "type": "AoE",
            "slot": "Talent",
            "desc": "When an ally target's attack causes an enemy target's HP percentage to fall to #1[i]% or lower, Herta will launch a Follow-Up ATK, dealing Ice DMG equal to #2[i]% of Herta's ATK to all enemies.",
            "energyCost": null,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 5,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.5,
                0.34375
              ],
              "8": [
                0.5,
                0.3625
              ],
              "9": [
                0.5,
                0.38125
              ],
              "10": [
                0.5,
                0.4
              ],
              "11": [
                0.5,
                0.415
              ],
              "12": [
                0.5,
                0.43
              ]
            },
            "element": "Ice",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Herta_PassiveSkill01",
              "Avatar_Herta_Passive1Atk_Ability_Camera",
              "Avatar_Herta_00_PassiveAtkReady_Ability"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 15
              },
              {
                "Value": 0
              }
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
        "It Can Still Be Optimized": {
          "variant1": {
            "skillID": 101307,
            "trigger": "SkillMaze",
            "name": "It Can Still Be Optimized",
            "type": "Enhance",
            "slot": "Technique",
            "desc": "After using her Technique, Herta's ATK increases by #1[i]% for #2[i] turn(s) at the beginning of the next battle.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.4,
                3
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Enhance",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Herta_00_SkillMazeInLevel"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1013_basic_atk.png",
        "skillRef": {
          "skillName": "What Are You Looking At?",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1013_skill.png",
        "skillRef": {
          "skillName": "One-Time Offer",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1013_ultimate.png",
        "skillRef": {
          "skillName": "It's Magic, I Added Some Magic",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1013_talent.png",
        "skillRef": {
          "skillName": "Fine, I'll Do It Myself",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1013_technique.png",
        "skillRef": {
          "skillName": "It Can Still Be Optimized",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Efficiency",
        "icon": "icon/skill/1013_skilltree1.png",
        "desc": "When Skill is used, the DMG Boost effect on target enemies increases by an extra #1[i]%.",
        "params": [
          0.25
        ]
      },
      "Point07": {
        "name": "Puppet",
        "icon": "icon/skill/1013_skilltree2.png",
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
        "name": "Icing",
        "icon": "icon/skill/1013_skilltree3.png",
        "desc": "When Ultimate is used, deals #1[i]% more DMG to Frozen enemies.",
        "params": [
          0.2
        ]
      },
      "Point09": {
        "name": "DMG Boost: Ice",
        "icon": "icon/property/IconIceAddedRatio.png",
        "stats": {
          "DamageIce": 0.032
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
        "name": "DMG Boost: Ice",
        "icon": "icon/property/IconIceAddedRatio.png",
        "stats": {
          "DamageIce": 0.032
        }
      },
      "Point12": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.026999999
        }
      },
      "Point13": {
        "name": "DMG Boost: Ice",
        "icon": "icon/property/IconIceAddedRatio.png",
        "stats": {
          "DamageIce": 0.048
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
        "name": "DMG Boost: Ice",
        "icon": "icon/property/IconIceAddedRatio.png",
        "stats": {
          "DamageIce": 0.048
        }
      },
      "Point16": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.04
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
        "name": "DMG Boost: Ice",
        "icon": "icon/property/IconIceAddedRatio.png",
        "stats": {
          "DamageIce": 0.064
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1013.png",
    "preview": "image/character_preview/1013.png",
    "portrait": "image/character_portrait/1013.png",
    "bannerOffsets": [
      21.9,
      -66,
      0.6,
      21.9,
      -66,
      0.6,
      21.9,
      -66,
      0.6
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
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
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
        "desc": "After any other ally character uses Basic ATK on an enemy target that has Wind Weakness, Bronya immediately launches 1 instance of Follow-Up ATK, dealing Wind DMG to this target equal to 80% of her Basic ATK DMG. This effect can only trigger once per turn.",
        "icon": "icon/skill/1101_rank4.png",
        "paramsEido": [
          0.8
        ],
        "extraEffects": {
          "Follow-Up ATK": {
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
            "toughnessList": [
              {
                "Value": 30
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
            "toughnessList": [
              {
                "Value": 30
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
  "Seele": {
    "internalID": 1102,
    "name": "Seele",
    "path": "The Hunt",
    "element": "Quantum",
    "rarity": 5,
    "energyMax": 120,
    "baseStats": {
      "ATKBase": 640.332,
      "DEFBase": 363.82500000000005,
      "HPBase": 931.392,
      "SPDBase": 115,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 75
    },
    "eidolons": [
      {
        "id": "110201",
        "name": "Extirpating Slash",
        "rank": 1,
        "desc": "When dealing DMG to an enemy whose HP percentage is 80% or lower, CRIT Rate increases by 15%.",
        "icon": "icon/skill/1102_rank1.png",
        "paramsEido": [
          0.8,
          0.15
        ]
      },
      {
        "id": "110202",
        "name": "Dancing Butterfly",
        "rank": 2,
        "desc": "The SPD Boost effect of Seele's Skill can stack up to 2 time(s).",
        "icon": "icon/skill/1102_rank2.png",
        "paramsEido": [
          2
        ]
      },
      {
        "id": "110203",
        "name": "Dazzling Tumult",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1102_skill.png"
      },
      {
        "id": "110204",
        "name": "Flitting Phantasm",
        "rank": 4,
        "desc": "Seele regenerates 15 Energy when she defeats an enemy.",
        "icon": "icon/skill/1102_rank4.png",
        "paramsEido": [
          15
        ]
      },
      {
        "id": "110205",
        "name": "Piercing Shards",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1102_ultimate.png"
      },
      {
        "id": "110206",
        "name": "Shattering Shambles",
        "rank": 6,
        "desc": "After Seele uses Ultimate, inflict the attacked enemy with \"Butterfly Flurry\" for 1 turn(s). Enemies in \"Butterfly Flurry\" will additionally take 1 instance of Quantum Additional DMG equal to 15% of Seele's Ultimate DMG every time they are attacked. If the target is defeated by the \"Butterfly Flurry\" state's Additional DMG triggered by other allies' attacks, Seele's Talent will not be triggered.\nWhen Seele is knocked down, the \"Butterfly Flurry\" inflicted on the enemies will be removed.",
        "icon": "icon/skill/1102_rank6.png",
        "paramsEido": [
          0.15,
          1
        ],
        "extraEffects": {
          "Additional DMG": {
            "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
          },
          "Downed State": {
            "desc": "An ally will be incapacitated once their HP is reduced to 0."
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
        "Thwack": {
          "variant1": {
            "skillID": 110201,
            "trigger": "Skill01",
            "name": "Thwack",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Quantum DMG equal to #1[i]% of Seele's ATK to one designated enemy.",
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
              "Avatar_Seele_00_Skill01_Camera",
              "Avatar_Seele_00_Skill01_Phase01",
              "Avatar_Seele_00_Skill01_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 30
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "Sheathed Blade": {
          "variant1": {
            "skillID": 110202,
            "trigger": "Skill02",
            "name": "Sheathed Blade",
            "type": "Single Target",
            "slot": "Skill",
            "desc": "Increases Seele's SPD by #2[i]% for #3[i] turn(s) and deals Quantum DMG equal to #1[i]% of Seele's ATK to one designated enemy.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.7875,
                0.25,
                2
              ],
              "8": [
                1.925,
                0.25,
                2
              ],
              "9": [
                2.0625,
                0.25,
                2
              ],
              "10": [
                2.2,
                0.25,
                2
              ],
              "11": [
                2.31,
                0.25,
                2
              ],
              "12": [
                2.42,
                0.25,
                2
              ]
            },
            "element": "Quantum",
            "attackType": "BPSkill",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Seele_00_Skill02_Camera",
              "Avatar_Seele_00_Skill02_Phase01",
              "Avatar_Seele_00_Skill02_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 60
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Ultimate": {
        "Butterfly Flurry": {
          "variant1": {
            "skillID": 110203,
            "trigger": "Skill03",
            "name": "Butterfly Flurry",
            "type": "Single Target",
            "slot": "Ultimate",
            "desc": "Seele enters the Amplification state and deals Quantum DMG equal to #1[i]% of her ATK to one designated enemy.",
            "energyCost": 120,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 30,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                3.6125
              ],
              "8": [
                3.825
              ],
              "9": [
                4.0375
              ],
              "10": [
                4.25
              ],
              "11": [
                4.42
              ],
              "12": [
                4.59
              ]
            },
            "element": "Quantum",
            "attackType": "Ultra",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Seele_00_Skill03_Camera",
              "Avatar_Seele_00_Skill03_EnterReady",
              "Avatar_Seele_00_Skill03_Phase01",
              "Avatar_Seele_00_Skill03_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 90
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Talent": {
        "Resurgence": {
          "variant1": {
            "skillID": 110204,
            "trigger": "SkillP01",
            "name": "Resurgence",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "Enters the Amplification state upon defeating an enemy with Basic ATK, Skill, or Ultimate, and receives an extra turn. While in the Amplification state, the DMG of Seele's attacks increases by #1[i]% for #2[i] turn(s).\\nEnemies defeated in the extra turn provided by \"Resurgence\" will not trigger another \"Resurgence.\"",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.65,
                1
              ],
              "8": [
                0.7,
                1
              ],
              "9": [
                0.75,
                1
              ],
              "10": [
                0.8,
                1
              ],
              "11": [
                0.84,
                1
              ],
              "12": [
                0.88,
                1
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Seele_00_Bonus_Camera",
              "Avatar_Seele_00_PassiveSkill_1",
              "Avatar_Seele_00_Bonus"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": [],
            "extraEffects": {
              "Extra Turn": {
                "desc": "Gain 1 extra turn that won't expend your remaining turns when taking action. During this extra turn, no Ultimate can be used."
              }
            }
          }
        }
      },
      "Technique": {
        "Phantom Illusion": {
          "variant1": {
            "skillID": 110207,
            "trigger": "SkillMaze",
            "name": "Phantom Illusion",
            "type": "Enhance",
            "slot": "Technique",
            "desc": "After using her Technique, Seele gains Stealth for #1[i] second(s). While Stealth is active, Seele cannot be detected by enemies. And when entering battle by attacking enemies, Seele will immediately enter the Amplification state.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                20
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Enhance",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Seele_00_SkillMazeInLevel"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1102_basic_atk.png",
        "skillRef": {
          "skillName": "Thwack",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1102_skill.png",
        "skillRef": {
          "skillName": "Sheathed Blade",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1102_ultimate.png",
        "skillRef": {
          "skillName": "Butterfly Flurry",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1102_talent.png",
        "skillRef": {
          "skillName": "Resurgence",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1102_technique.png",
        "skillRef": {
          "skillName": "Phantom Illusion",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Nightshade",
        "icon": "icon/skill/1102_skilltree1.png",
        "desc": "When current HP percentage is #1[i]% or lower, reduces the chance of being attacked by enemies.",
        "params": [
          0.5,
          0.5
        ]
      },
      "Point07": {
        "name": "Lacerate",
        "icon": "icon/skill/1102_skilltree2.png",
        "desc": "While Seele is in the Amplification state, her Quantum RES PEN increases by #1[i]%.",
        "params": [
          0.2
        ],
        "extraEffects": {
          "RES PEN": {
            "desc": "When dealing DMG, ignore a part of the enemy target's resistance to the corresponding damage type."
          }
        }
      },
      "Point08": {
        "name": "Rippling Waves",
        "icon": "icon/skill/1102_skilltree3.png",
        "desc": "After using a Basic ATK, Seele's next action advances by #1[i]%.",
        "params": [
          0.2
        ],
        "extraEffects": {
          "Action Advanced": {
            "desc": "Reduces the target's waiting interval before the next action."
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
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.053
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
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.05
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
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.08
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
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.075
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
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.08
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1102.png",
    "preview": "image/character_preview/1102.png",
    "portrait": "image/character_portrait/1102.png",
    "bannerOffsets": [
      145.5,
      198.4,
      0.81,
      145.5,
      198.4,
      0.81,
      145.5,
      198.4,
      0.81
    ]
  },
  "Serval": {
    "internalID": 1103,
    "name": "Serval",
    "path": "Erudition",
    "element": "Lightning",
    "rarity": 4,
    "energyMax": 100,
    "baseStats": {
      "ATKBase": 652.6800000000001,
      "DEFBase": 374.85,
      "HPBase": 917.28,
      "SPDBase": 104,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 75
    },
    "eidolons": [
      {
        "id": "110301",
        "name": "Echo Chamber",
        "rank": 1,
        "desc": "Basic ATK deals Lightning DMG equal to 60% of Basic ATK DMG to a random target adjacent to the target enemy.",
        "icon": "icon/skill/1103_rank1.png",
        "paramsEido": [
          0.6
        ]
      },
      {
        "id": "110302",
        "name": "Encore!",
        "rank": 2,
        "desc": "Every time Serval's Talent is triggered to deal Additional DMG, she regenerates 4 Energy.",
        "icon": "icon/skill/1103_rank2.png",
        "paramsEido": [
          4
        ],
        "extraEffects": {
          "Additional DMG": {
            "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
          }
        }
      },
      {
        "id": "110303",
        "name": "Listen, the Heartbeat of the Gears",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1103_skill.png"
      },
      {
        "id": "110304",
        "name": "Make Some Noise!",
        "rank": 4,
        "desc": "Ultimate has a 100% base chance to apply Shock to any enemies not currently Shocked. This Shock has the same effects as the one applied by Skill.",
        "icon": "icon/skill/1103_rank4.png",
        "paramsEido": [
          1
        ],
        "extraEffects": {
          "Base Chance": {
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
          }
        }
      },
      {
        "id": "110305",
        "name": "Belobog's Loudest Roar!",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1103_ultimate.png"
      },
      {
        "id": "110306",
        "name": "This Song Rocks to Heaven!",
        "rank": 6,
        "desc": "Serval deals 30% more DMG to Shocked enemies.",
        "icon": "icon/skill/1103_rank6.png",
        "paramsEido": [
          0.3
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
        "Roaring Thunderclap": {
          "variant1": {
            "skillID": 110301,
            "trigger": "Skill01",
            "name": "Roaring Thunderclap",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Lightning DMG equal to #1[i]% of Serval's ATK to one designated enemy.",
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
              "Avatar_Serval_00_Skill01_Camera",
              "Avatar_Serval_Skill01_Phase01",
              "Avatar_Serval_Skill01_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 30
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "Lightning Flash": {
          "variant1": {
            "skillID": 110302,
            "trigger": "Skill02",
            "name": "Lightning Flash",
            "type": "Blast",
            "slot": "Skill",
            "desc": "Deals Lightning DMG equal to #1[i]% of Serval's ATK to one designated enemy and Lightning DMG equal to #2[i]% of Serval's ATK to enemies adjacent to it, with a #3[i]% base chance for enemies hit to become Shocked for #4[i] turn(s).\\nWhile Shocked, enemies take Lightning DoT equal to #5[i]% of Serval's ATK at the beginning of each turn.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.1375,
                0.4875,
                0.8,
                2,
                0.7
              ],
              "8": [
                1.225,
                0.525,
                0.8,
                2,
                0.8
              ],
              "9": [
                1.3125,
                0.5625,
                0.8,
                2,
                0.92
              ],
              "10": [
                1.4,
                0.6,
                0.8,
                2,
                1.04
              ],
              "11": [
                1.47,
                0.63,
                0.8,
                2,
                1.092
              ],
              "12": [
                1.54,
                0.66,
                0.8,
                2,
                1.144
              ]
            },
            "element": "Lightning",
            "attackType": "BPSkill",
            "skillEffect": "Blast",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Serval_00_Skill02_Camera",
              "Avatar_Serval_Skill02_Phase01",
              "Avatar_Serval_Skill02_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 60
              },
              {
                "Value": 0
              },
              {
                "Value": 30
              }
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
        "Here Comes the Mechanical Fever": {
          "variant1": {
            "skillID": 110303,
            "trigger": "Skill03",
            "name": "Here Comes the Mechanical Fever",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Deals Lightning DMG equal to #1[i]% of Serval's ATK to all enemies. Enemies already Shocked will extend the duration of their Shock state by #2[i] turn(s).",
            "energyCost": 100,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.53,
                2
              ],
              "8": [
                1.62,
                2
              ],
              "9": [
                1.71,
                2
              ],
              "10": [
                1.8,
                2
              ],
              "11": [
                1.872,
                2
              ],
              "12": [
                1.944,
                2
              ]
            },
            "element": "Lightning",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Serval_00_Skill03_Camera",
              "Avatar_Serval_Skill03_EnterReady",
              "Avatar_Serval_Skill03_Phase01",
              "Avatar_Serval_Skill03_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 60
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Talent": {
        "Galvanic Chords": {
          "variant1": {
            "skillID": 110304,
            "trigger": "SkillP01",
            "name": "Galvanic Chords",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "After Serval attacks, deals Lightning Additional DMG equal to #1[i]% of Serval's ATK to all Shocked enemies.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.585
              ],
              "8": [
                0.63
              ],
              "9": [
                0.675
              ],
              "10": [
                0.72
              ],
              "11": [
                0.756
              ],
              "12": [
                0.792
              ]
            },
            "element": "Lightning",
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Serval_PassiveSkill01"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
        "Good Night, Belobog": {
          "variant1": {
            "skillID": 110307,
            "trigger": "SkillMaze",
            "name": "Good Night, Belobog",
            "slot": "Technique",
            "desc": "Immediately attacks the enemy. After entering battle, deals Lightning DMG equal to #4[i]% of Serval's ATK to a random enemy, with a #1[i]% base chance for all enemies to become Shocked for #3[i] turn(s).\\nWhile Shocked, enemies will take Lightning DoT equal to #2[i]% of Serval's ATK at the beginning of each turn.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                1,
                0.5,
                3,
                0.5
              ]
            },
            "element": "Lightning",
            "attackType": "Maze",
            "skillEffect": "MazeAttack",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Serval_00_SkillMazeInLevel"
            ],
            "toughnessList": [
              {
                "Value": 60
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
        "icon": "icon/skill/1103_basic_atk.png",
        "skillRef": {
          "skillName": "Roaring Thunderclap",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1103_skill.png",
        "skillRef": {
          "skillName": "Lightning Flash",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1103_ultimate.png",
        "skillRef": {
          "skillName": "Here Comes the Mechanical Fever",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1103_talent.png",
        "skillRef": {
          "skillName": "Galvanic Chords",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1103_technique.png",
        "skillRef": {
          "skillName": "Good Night, Belobog",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Rock 'n' Roll",
        "icon": "icon/skill/1103_skilltree1.png",
        "desc": "When using skill, increases the base chance for the attacked enemy target to become Shocked by #1[i]%.",
        "params": [
          0.2
        ],
        "extraEffects": {
          "Base Chance": {
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
          }
        }
      },
      "Point07": {
        "name": "String Vibration",
        "icon": "icon/skill/1103_skilltree2.png",
        "desc": "At the start of the battle, immediately regenerates #1[i] Energy.",
        "params": [
          15
        ]
      },
      "Point08": {
        "name": "Mania",
        "icon": "icon/skill/1103_skilltree3.png",
        "desc": "Upon defeating an enemy, ATK is increased by #1[i]% for #2[i] turn(s).",
        "params": [
          0.2,
          2
        ]
      },
      "Point09": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.026999999
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
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.026999999
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
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.04
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
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.04
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
        "name": "Effect Hit Rate Boost",
        "icon": "icon/property/IconStatusProbability.png",
        "stats": {
          "EffectHitRate": 0.08
        }
      },
      "Point18": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.053
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1103.png",
    "preview": "image/character_preview/1103.png",
    "portrait": "image/character_portrait/1103.png",
    "bannerOffsets": [
      -26,
      33,
      0.68,
      -26,
      33,
      0.68,
      -26,
      33,
      0.68
    ]
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
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 100
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
        ]
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
        ]
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
              "Avatar_Natasha_00_Skill01_Camera",
              "Avatar_Natasha_00_Skill01_Phase01",
              "Avatar_Natasha_00_Skill01_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 30
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Natasha_00_PassiveSkill01"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
              {
                "Value": 60
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
        ]
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
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
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
            "toughnessList": [
              {
                "Value": 30
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
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
            "toughnessList": [
              {
                "Value": 30
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
            "toughnessList": [
              {
                "Value": 90
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 60
              },
              {
                "Value": 0
              }
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
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
              {
                "Value": 60
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
    ]
  },
  "Trailblazer - Destruction": {
    "internalID": 8001,
    "name": "Trailblazer - Destruction",
    "path": "Destruction",
    "element": "Physical",
    "rarity": 5,
    "energyMax": 120,
    "baseStats": {
      "ATKBase": 620.9280000000001,
      "DEFBase": 460.845,
      "HPBase": 1203.0479999999998,
      "SPDBase": 100,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 125
    },
    "eidolons": [
      {
        "id": "800101",
        "name": "A Falling Star",
        "rank": 1,
        "desc": "When enemies are defeated due to the Trailblazer's Ultimate, the Trailblazer regenerates 10 extra Energy. This effect can only be triggered once per attack.",
        "icon": "icon/skill/8001_rank1.png",
        "paramsEido": [
          10
        ]
      },
      {
        "id": "800102",
        "name": "An Unwilling Host",
        "rank": 2,
        "desc": "Attacking enemies with Physical Weakness restores the Trailblazer's HP equal to 5% of the Trailblazer's ATK.",
        "icon": "icon/skill/8001_rank2.png",
        "paramsEido": [
          0.05
        ]
      },
      {
        "id": "800103",
        "name": "A Leading Whisper",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/8001_skill.png"
      },
      {
        "id": "800104",
        "name": "A Destructing Glance",
        "rank": 4,
        "desc": "When attacking an enemy that is Weakness Broken, increases CRIT Rate by 25%.",
        "icon": "icon/skill/8001_rank4.png",
        "paramsEido": [
          0.25
        ],
        "extraEffects": {
          "Weakness Break State": {
            "desc": "When enemy targets' Toughness is reduced to 0, they will enter the Weakness Break State, which delays their actions."
          }
        }
      },
      {
        "id": "800105",
        "name": "A Surviving Hope",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/8001_ultimate.png"
      },
      {
        "id": "800106",
        "name": "A Trailblazing Will",
        "rank": 6,
        "desc": "The Trailblazer's Talent is also triggered when they defeat an enemy.",
        "icon": "icon/skill/8001_rank6.png",
        "paramsEido": [
          1
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
        "Farewell Hit": {
          "variant1": {
            "skillID": 800101,
            "trigger": "Skill01",
            "name": "Farewell Hit",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Physical DMG equal to #1[i]% of the Trailblazer's ATK to one designated enemy.",
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
              "Avatar_PlayerBoy_Skill01_Camera",
              "Avatar_PlayerBoy_Skill01_Phase01",
              "Avatar_PlayerBoy_Skill01_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 30
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "RIP Home Run": {
          "variant1": {
            "skillID": 800102,
            "trigger": "Skill02",
            "name": "RIP Home Run",
            "type": "Blast",
            "slot": "Skill",
            "desc": "Deals Physical DMG equal to #1[i]% of the Trailblazer's ATK to one designated enemy and enemies adjacent to it.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.015625
              ],
              "8": [
                1.09375
              ],
              "9": [
                1.171875
              ],
              "10": [
                1.25
              ],
              "11": [
                1.3125
              ],
              "12": [
                1.375
              ]
            },
            "element": "Physical",
            "attackType": "BPSkill",
            "skillEffect": "Blast",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_PlayerBoy_Skill02_Camera",
              "Avatar_PlayerBoy_Skill02_Phase01",
              "Avatar_PlayerBoy_Skill02_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 60
              },
              {
                "Value": 0
              },
              {
                "Value": 30
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Ultimate": {
        "Stardust Ace": {
          "variant1": {
            "skillID": 800103,
            "trigger": "Skill03",
            "name": "Stardust Ace",
            "type": "Enhance",
            "slot": "Ultimate",
            "desc": "Choose between two attack modes to deliver a full strike.\\n\"Blowout: Farewell Hit\" deals Physical DMG equal to #1[i]% of the Trailblazer's ATK to one designated enemy.\\n\"Blowout: RIP Home Run\" deals Physical DMG equal to #2[i]% of the Trailblazer's ATK to one designated enemy, and Physical DMG equal to #3[i]% of the Trailblazer's ATK to enemies adjacent to it.",
            "energyCost": 120,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                3.9375,
                2.3625,
                1.4175
              ],
              "8": [
                4.125,
                2.475,
                1.485
              ],
              "9": [
                4.3125,
                2.5875,
                1.5525
              ],
              "10": [
                4.5,
                2.7,
                1.62
              ],
              "11": [
                4.65,
                2.79,
                1.674
              ],
              "12": [
                4.8,
                2.88,
                1.728
              ]
            },
            "element": "Physical",
            "attackType": "Ultra",
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_PlayerBoy_Skill03_Camera",
              "Avatar_PlayerBoy_Skill03_EnterReady"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        },
        "Blowout: Farewell Hit": {
          "variant1": {
            "skillID": 800108,
            "trigger": "Skill11",
            "name": "Blowout: Farewell Hit",
            "type": "Single Target",
            "slot": "Ultimate",
            "desc": "Deals Physical DMG equal to #1[i]% of the Trailblazer's ATK to one designated enemy.",
            "energyCost": 120,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 30,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                3.9375
              ],
              "8": [
                4.125
              ],
              "9": [
                4.3125
              ],
              "10": [
                4.5
              ],
              "11": [
                4.65
              ],
              "12": [
                4.8
              ]
            },
            "element": "Physical",
            "attackType": "Ultra",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_PlayerBoy_Skill11_Camera",
              "Avatar_PlayerBoy_Skill11_Phase01",
              "Avatar_PlayerBoy_Skill11_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 90
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        },
        "Blowout: RIP Home Run": {
          "variant1": {
            "skillID": 800109,
            "trigger": "Skill21",
            "name": "Blowout: RIP Home Run",
            "type": "Blast",
            "slot": "Ultimate",
            "desc": "Deals Physical DMG equal to #1[i]% of Trailblazer's ATK to one designated enemy and Physical DMG equal to #2[i]% of Trailblazer's ATK to enemies adjacent to it.",
            "energyCost": 120,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                2.3625,
                1.4175
              ],
              "8": [
                2.475,
                1.485
              ],
              "9": [
                2.5875,
                1.5525
              ],
              "10": [
                2.7,
                1.62
              ],
              "11": [
                2.79,
                1.674
              ],
              "12": [
                2.88,
                1.728
              ]
            },
            "element": "Physical",
            "attackType": "Ultra",
            "skillEffect": "Blast",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_PlayerBoy_Skill21_Camera",
              "Avatar_PlayerBoy_Skill21_Phase01",
              "Avatar_PlayerBoy_Skill21_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 60
              },
              {
                "Value": 0
              },
              {
                "Value": 60
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Talent": {
        "Perfect Pickoff": {
          "variant1": {
            "skillID": 800104,
            "trigger": "SkillP01",
            "name": "Perfect Pickoff",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "Each time after this character inflicts Weakness Break on an enemy, ATK increases by #1[i]%. This effect stacks up to #2[i] time(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.1625,
                2
              ],
              "8": [
                0.175,
                2
              ],
              "9": [
                0.1875,
                2
              ],
              "10": [
                0.2,
                2
              ],
              "11": [
                0.21,
                2
              ],
              "12": [
                0.22,
                2
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_PlayerBoy_PassiveSkill01"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Technique": {
        "Immortal Third Strike": {
          "variant1": {
            "skillID": 800107,
            "trigger": "SkillMaze",
            "name": "Immortal Third Strike",
            "type": "Restore",
            "slot": "Technique",
            "desc": "Immediately heals all allies for #1[i]% of their respective Max HP after using this Technique.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.15
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Restore",
            "maxLevel": 1,
            "configAbilityList": null,
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/8001_basic_atk.png",
        "skillRef": {
          "skillName": "Farewell Hit",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/8001_skill.png",
        "skillRef": {
          "skillName": "RIP Home Run",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/8001_ultimate.png",
        "skillRef": {
          "skillName": "Stardust Ace",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/8001_talent.png",
        "skillRef": {
          "skillName": "Perfect Pickoff",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/8001_technique.png",
        "skillRef": {
          "skillName": "Immortal Third Strike",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Ready for Battle",
        "icon": "icon/skill/8001_skilltree1.png",
        "desc": "At the start of the battle, immediately regenerates #1[i] Energy.",
        "params": [
          15
        ]
      },
      "Point07": {
        "name": "Tenacity",
        "icon": "icon/skill/8001_skilltree2.png",
        "desc": "Each Talent stack increases the Trailblazer's DEF by #1[i]%.",
        "params": [
          0.1
        ]
      },
      "Point08": {
        "name": "Fighting Will",
        "icon": "icon/skill/8001_skilltree3.png",
        "desc": "When using Skill or Ultimate \"Blowout: RIP Home Run,\" DMG dealt to the target enemy is increased by #1[i]%.",
        "params": [
          0.25
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
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.05
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
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.075
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
    "icon": "icon/character/8001.png",
    "preview": "image/character_preview/8001.png",
    "portrait": "image/character_portrait/8001.png",
    "bannerOffsets": [
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1
    ]
  },
  "Trailblazer - Preservation": {
    "internalID": 8003,
    "name": "Trailblazer - Preservation",
    "path": "Preservation",
    "element": "Fire",
    "rarity": 5,
    "energyMax": 120,
    "baseStats": {
      "ATKBase": 601.5239999999999,
      "DEFBase": 606.375,
      "HPBase": 1241.8560000000002,
      "SPDBase": 95,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 150
    },
    "eidolons": [
      {
        "id": "800301",
        "name": "Earth-Shaking Resonance",
        "rank": 1,
        "desc": "When the Trailblazer uses their Basic ATK, additionally deals Fire DMG equal to 25% of the Trailblazer's DEF. When the Trailblazer uses their enhanced Basic ATK, additionally deals Fire DMG equal to 50% of the Trailblazer's DEF.",
        "icon": "icon/skill/8003_rank1.png",
        "paramsEido": [
          0.25,
          0.5
        ]
      },
      {
        "id": "800302",
        "name": "Time-Defying Tenacity",
        "rank": 2,
        "desc": "The Shield applied to all allies from the Trailblazer's Talent will block extra DMG equal to 2% of the Trailblazer's DEF plus 27.",
        "icon": "icon/skill/8003_rank2.png",
        "paramsEido": [
          0.02,
          27
        ]
      },
      {
        "id": "800303",
        "name": "Trail-Blazing Blueprint",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/8003_skill.png"
      },
      {
        "id": "800304",
        "name": "Nation-Building Oath",
        "rank": 4,
        "desc": "At the start of the battle, immediately gains 4 stack(s) of Magma Will.",
        "icon": "icon/skill/8003_rank4.png",
        "paramsEido": [
          4
        ]
      },
      {
        "id": "800305",
        "name": "Spirit-Warming Flame",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/8003_ultimate.png"
      },
      {
        "id": "800306",
        "name": "City-Forging Bulwarks",
        "rank": 6,
        "desc": "After the Trailblazer uses enhanced Basic ATK or Ultimate, their DEF increases by 10%. Stacks up to 3 time(s).",
        "icon": "icon/skill/8003_rank6.png",
        "paramsEido": [
          0.1,
          3
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
        "Ice-Breaking Light": {
          "variant1": {
            "skillID": 800301,
            "trigger": "Skill01",
            "name": "Ice-Breaking Light",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Fire DMG equal to #1[i]% of the Trailblazer's ATK to one designated enemy and gains 1 stack of \"Magma Will.\"",
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
              "Avatar_PlayerBoy_10_Skill01_Camera",
              "Avatar_PlayerBoy_10_Skill01_Phase01",
              "Avatar_PlayerBoy_10_Skill01_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 30
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          },
          "variant2": {
            "skillID": 800308,
            "trigger": "Skill11",
            "name": "Ice-Breaking Light",
            "type": "Blast",
            "slot": "Basic ATK",
            "desc": "Consumes 4 stacks of \"Magma Will\" to enhance Basic ATK, dealing Fire DMG equal to #1[i]% of the Trailblazer's ATK to one designated enemy and Fire DMG to equal to #2[i]% of the Trailblazer's ATK to enemies adjacent to it.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "6": [
                1.35,
                0.54
              ],
              "7": [
                1.4625,
                0.585
              ],
              "8": [
                1.575,
                0.63
              ]
            },
            "element": "Fire",
            "attackType": "Normal",
            "skillEffect": "Blast",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_PlayerBoy_10_Skill11_Phase01",
              "Avatar_PlayerBoy_10_Skill11_Phase02",
              "Avatar_PlayerBoy_10_Skill11_Camera"
            ],
            "toughnessList": [
              {
                "Value": 60
              },
              {
                "Value": 0
              },
              {
                "Value": 30
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "Ever-Burning Amber": {
          "variant1": {
            "skillID": 800302,
            "trigger": "Skill02",
            "name": "Ever-Burning Amber",
            "type": "Defense",
            "slot": "Skill",
            "desc": "Increases the Trailblazer's DMG Reduction by #1[i]% and gains 1 stack of Magma Will, with a #2[i]% base chance to Taunt all enemies for #3[i] turn(s).",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.4625,
                1,
                1
              ],
              "8": [
                0.475,
                1,
                1
              ],
              "9": [
                0.4875,
                1,
                1
              ],
              "10": [
                0.5,
                1,
                1
              ],
              "11": [
                0.51,
                1,
                1
              ],
              "12": [
                0.52,
                1,
                1
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Defence",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_PlayerBoy_10_Skill02_Camera_Self",
              "Avatar_PlayerBoy_10_Skill02_Phase01",
              "Avatar_PlayerBoy_10_Skill02_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
        "War-Flaming Lance": {
          "variant1": {
            "skillID": 800303,
            "trigger": "Skill03",
            "name": "War-Flaming Lance",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Deals Fire DMG equal to #1[i]% of the Trailblazer's ATK plus #2[i]% of the Trailblazer's DEF to all enemies. The next Basic ATK will be automatically enhanced and does not cost Magma Will.",
            "energyCost": 120,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.8125,
                1.21875
              ],
              "8": [
                0.875,
                1.3125
              ],
              "9": [
                0.9375,
                1.40625
              ],
              "10": [
                1,
                1.5
              ],
              "11": [
                1.05,
                1.575
              ],
              "12": [
                1.1,
                1.65
              ]
            },
            "element": "Fire",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_PlayerBoy_10_Skill03_Camera",
              "Avatar_PlayerBoy_10_Skill03_EnterReady",
              "Avatar_PlayerBoy_10_Skill03_Phase01",
              "Avatar_PlayerBoy_10_Skill03_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 60
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Talent": {
        "Treasure of the Architects": {
          "variant1": {
            "skillID": 800304,
            "trigger": "SkillP01",
            "name": "Treasure of the Architects",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "Each time the Trailblazer is hit, they gain 1 stack of \"Magma Will\" for a max of #3[i] stack(s).\\nWhen \"Magma Will\" has no fewer than 4 stacks, the Trailblazer's Basic ATK becomes enhanced, dealing DMG to one designated enemy and enemies adjacent to it.\\nWhen the Trailblazer uses Basic ATK, Skill, or Ultimate, apply a Shield to all allies that absorbs DMG equal to #1[f1]% of the Trailblazer's DEF plus #4[i]. The Shield lasts for #2[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.054,
                2,
                8,
                66.5
              ],
              "8": [
                0.055999998,
                2,
                8,
                71
              ],
              "9": [
                0.058,
                2,
                8,
                75.5
              ],
              "10": [
                0.06,
                2,
                8,
                80
              ],
              "11": [
                0.062,
                2,
                8,
                84.5
              ],
              "12": [
                0.064,
                2,
                8,
                89
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_PlayerBoy_10_PassiveSkill01"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Technique": {
        "Call of the Guardian": {
          "variant1": {
            "skillID": 800307,
            "trigger": "SkillMaze",
            "name": "Call of the Guardian",
            "type": "Defense",
            "slot": "Technique",
            "desc": "After using Technique, at the start of the next battle, gains a Shield that absorbs DMG equal to #1[i]% of the Trailblazer's DEF plus #2[i] for #3[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.3,
                384,
                1
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Defence",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_PlayerBoy_10_SkillMazeInLevel"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/8003_basic_atk.png",
        "skillRef": {
          "skillName": "Ice-Breaking Light",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/8003_skill.png",
        "skillRef": {
          "skillName": "Ever-Burning Amber",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/8003_ultimate.png",
        "skillRef": {
          "skillName": "War-Flaming Lance",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/8003_talent.png",
        "skillRef": {
          "skillName": "Treasure of the Architects",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/8003_technique.png",
        "skillRef": {
          "skillName": "Call of the Guardian",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "The Strong Defend the Weak",
        "icon": "icon/skill/8003_skilltree1.png",
        "desc": "After using the Skill, the DMG taken by all allies decreases by #2[i]% for #3[i] turn(s).",
        "params": [
          10,
          0.15,
          1
        ]
      },
      "Point07": {
        "name": "Unwavering Gallantry",
        "icon": "icon/skill/8003_skilltree2.png",
        "desc": "Using Enhanced Basic ATK restores the Trailblazer's HP by #1[i]% of their Max HP.",
        "params": [
          0.05
        ]
      },
      "Point08": {
        "name": "Action Beats Overthinking",
        "icon": "icon/skill/8003_skilltree3.png",
        "desc": "When the Trailblazer is protected by a Shield at the beginning of the turn, increases their ATK by #2[i]% and regenerates #1[i] Energy until the action is over.",
        "params": [
          5,
          0.15
        ]
      },
      "Point09": {
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.05
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
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.05
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
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.075
        }
      },
      "Point14": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.06
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
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.06
        }
      },
      "Point17": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.08
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
    "icon": "icon/character/8003.png",
    "preview": "image/character_preview/8003.png",
    "portrait": "image/character_portrait/8003.png",
    "bannerOffsets": [
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1
    ]
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
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
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
            "toughnessList": [
              {
                "Value": 30
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 60
              },
              {
                "Value": 0
              }
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
            "toughnessList": [
              {
                "Value": 60
              },
              {
                "Value": 0
              },
              {
                "Value": 30
              }
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
            "toughnessList": [
              {
                "Value": 60
              },
              {
                "Value": 120
              },
              {
                "Value": 0
              }
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
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
  },
  "Archer": {
    "internalID": 1015,
    "name": "Archer",
    "path": "The Hunt",
    "element": "Quantum",
    "rarity": 5,
    "energyMax": 220,
    "baseStats": {
      "ATKBase": 620.9280000000001,
      "DEFBase": 485.1,
      "HPBase": 1164.2399999999998,
      "SPDBase": 105,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 75
    },
    "eidolons": [
      {
        "id": "101501",
        "name": "The Unreached Dream",
        "rank": 1,
        "desc": "After using Skill 3 time(s) within one turn, recovers 2 Skill Point(s) for allies.",
        "icon": "icon/skill/1015_rank1.png",
        "paramsEido": [
          3,
          2
        ]
      },
      {
        "id": "101502",
        "name": "The Unfulfilled Happiness",
        "rank": 2,
        "desc": "When using Ultimate, reduces the enemy target's Quantum RES by 20%, and applies Quantum Weakness to it, lasting for 2 turn(s).",
        "icon": "icon/skill/1015_rank2.png",
        "paramsEido": [
          0.2,
          2
        ]
      },
      {
        "id": "101503",
        "name": "The Untamed Will",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1015_skill.png"
      },
      {
        "id": "101504",
        "name": "The Unsung Life",
        "rank": 4,
        "desc": "Increases the Ultimate DMG dealt by 150%.",
        "icon": "icon/skill/1015_rank4.png",
        "paramsEido": [
          1.5
        ]
      },
      {
        "id": "101505",
        "name": "The Nameless Watch",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1015_ultimate.png"
      },
      {
        "id": "101506",
        "name": "The Endless Pilgrimage",
        "rank": 6,
        "desc": "When the turn starts, recovers 1 Skill Point for allies. The maximum number of stacks allowed for the DMG boost effect provided by this unit's Skill increases by 1. The Skill DMG dealt ignores 20% of DEF.",
        "icon": "icon/skill/1015_rank6.png",
        "paramsEido": [
          1,
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
        "Kanshou and Bakuya": {
          "variant1": {
            "skillID": 101501,
            "trigger": "Skill01",
            "name": "Kanshou and Bakuya",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Quantum DMG equal to #1[i]% of Archer's ATK to one designated enemy.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
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
              ]
            },
            "element": "Quantum",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 9,
            "configAbilityList": [
              "Avatar_Archer_00_Skill01_Camera",
              "Avatar_Archer_00_Skill01_Phase01",
              "Avatar_Archer_00_Skill01_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 30
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Skill": {
        "Caladbolg II: Fake Spiral Sword": {
          "variant1": {
            "skillID": 101502,
            "trigger": "Skill02",
            "name": "Caladbolg II: Fake Spiral Sword",
            "type": "Single Target",
            "slot": "Skill",
            "desc": "Enters the \"Circuit Connection\" state. Deals Quantum DMG equal to #1[i]% of Archer's ATK to one designated enemy. After using Skill in the \"Circuit Connection\" state, the current turn does not end, and the DMG dealt by Archer's Skill increases by #2[i]%. This effect can stack up to #3[i] time(s), lasting until he exits the \"Circuit Connection\" state. After actively using Skill #5[i] time(s) or when Skill Points are insufficient to use Skill again, exits the \"Circuit Connection\" state. After all enemy targets have been defeated in each wave, exits the \"Circuit Connection\" state.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 2,
            "skillPointGain": 0,
            "params": {
              "7": [
                2.925,
                0.85,
                2,
                1,
                5
              ],
              "8": [
                3.15,
                0.9,
                2,
                1,
                5
              ],
              "9": [
                3.375,
                0.95,
                2,
                1,
                5
              ],
              "10": [
                3.6,
                1,
                2,
                1,
                5
              ],
              "11": [
                3.78,
                1.04,
                2,
                1,
                5
              ],
              "12": [
                3.96,
                1.08,
                2,
                1,
                5
              ]
            },
            "element": "Quantum",
            "attackType": "BPSkill",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Archer_00_Skill02_Camera",
              "Avatar_Archer_00_Skill02_Phase01",
              "Avatar_Archer_00_Skill02_Phase02",
              "Avatar_Archer_00_Skill02_End_Camera",
              "Avatar_Archer_00_Skill02_C02_Camera",
              "Avatar_Archer_00_Skill02_C01andC02_Camera"
            ],
            "toughnessList": [
              {
                "Value": 60
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        },
        "End": {
          "variant1": {
            "skillID": 101509,
            "trigger": "Skill21",
            "name": "End",
            "type": "End",
            "slot": "Skill",
            "desc": "Exits \"Circuit Connection\" state and ends the turn.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": []
            },
            "attackType": "BPSkill",
            "skillEffect": "Enhance",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Archer_00_Skill02Cancel_Phase01",
              "Avatar_Archer_00_Skill02Cancel_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Ultimate": {
        "Unlimited Blade Works": {
          "variant1": {
            "skillID": 101503,
            "trigger": "Skill03",
            "name": "Unlimited Blade Works",
            "type": "Single Target",
            "slot": "Ultimate",
            "desc": "Deals Quantum DMG equal to #1[i]% of Archer's ATK to one designated enemy and gains #2[i] point(s) of Charge, up to a maximum of #3[i].",
            "energyCost": 220,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 30,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                8.5,
                2,
                4
              ],
              "8": [
                9,
                2,
                4
              ],
              "9": [
                9.5,
                2,
                4
              ],
              "10": [
                10,
                2,
                4
              ],
              "11": [
                10.4,
                2,
                4
              ],
              "12": [
                10.8,
                2,
                4
              ]
            },
            "element": "Quantum",
            "attackType": "Ultra",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Archer_00_Skill03_Camera",
              "Avatar_Archer_00_Skill03_EnterReady",
              "Avatar_Archer_00_Skill03_Phase01",
              "Avatar_Archer_00_Skill03_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 90
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Talent": {
        "Mind's Eye (True)": {
          "variant1": {
            "skillID": 101504,
            "trigger": "SkillP01",
            "name": "Mind's Eye (True)",
            "type": "Single Target",
            "slot": "Talent",
            "desc": "After Archer's teammates attack enemy targets, Archer consumes 1 Charge and immediately launches Follow-Up ATK on the primary target, dealing Quantum DMG equal to #1[i]% of Archer's ATK and recovering 1 Skill Point. If the target is defeated before this Follow-Up ATK is launched, the Follow-Up ATK will be directed at one random enemy instead.",
            "energyCost": null,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.625
              ],
              "8": [
                1.75
              ],
              "9": [
                1.875
              ],
              "10": [
                2
              ],
              "11": [
                2.1
              ],
              "12": [
                2.2
              ]
            },
            "element": "Quantum",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Archer_00_PassiveSkill01",
              "Avatar_Archer_00_Insert_Phase01",
              "Avatar_Archer_00_Insert_Phase02",
              "Avatar_Archer_00_Insert_Camera",
              "Avatar_Archer_00_Bonus",
              "Avatar_Archer_00_Bonus_Camera"
            ],
            "toughnessList": [
              {
                "Value": 30
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
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
        "Clairvoyance": {
          "variant1": {
            "skillID": 101507,
            "trigger": "SkillMaze",
            "name": "Clairvoyance",
            "slot": "Technique",
            "desc": "Immediately attacks enemies. After entering combat, deals Quantum DMG equal to #1[i]% of Archer's ATK to all enemies and gains #2[i] point(s) of Charge.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                2,
                1
              ]
            },
            "element": "Quantum",
            "attackType": "Maze",
            "skillEffect": "MazeAttack",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Archer_00_SkillMazeInLevel"
            ],
            "toughnessList": [
              {
                "Value": 60
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1015_basic_atk.png",
        "skillRef": {
          "skillName": "Kanshou and Bakuya",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1015_skill.png",
        "skillRef": {
          "skillName": "Caladbolg II: Fake Spiral Sword",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1015_ultimate.png",
        "skillRef": {
          "skillName": "Unlimited Blade Works",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1015_talent.png",
        "skillRef": {
          "skillName": "Mind's Eye (True)",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1015_technique.png",
        "skillRef": {
          "skillName": "Clairvoyance",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Projection Magecraft",
        "icon": "icon/skill/1015_skilltree1.png",
        "desc": "When Archer is on the field, increases the maximum Skill Point limit by #1[i].",
        "params": [
          2
        ]
      },
      "Point07": {
        "name": "Hero of Justice",
        "icon": "icon/skill/1015_skilltree2.png",
        "desc": "When Archer enters combat, gains #1[i] point(s) of Charge.",
        "params": [
          1
        ]
      },
      "Point08": {
        "name": "Guardian",
        "icon": "icon/skill/1015_skilltree3.png",
        "desc": "After allies gain a Skill Point, if there are #3[i] Skill Points or more, increases Archer's CRIT DMG by #1[i]% for #2[i] turn(s).",
        "params": [
          1.2,
          1,
          4
        ]
      },
      "Point09": {
        "name": "DMG Boost: Quantum",
        "icon": "icon/property/IconQuantumAddedRatio.png",
        "stats": {
          "DamageQuantum": 0.032
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
        "name": "DMG Boost: Quantum",
        "icon": "icon/property/IconQuantumAddedRatio.png",
        "stats": {
          "DamageQuantum": 0.032
        }
      },
      "Point12": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.026999999
        }
      },
      "Point13": {
        "name": "DMG Boost: Quantum",
        "icon": "icon/property/IconQuantumAddedRatio.png",
        "stats": {
          "DamageQuantum": 0.048
        }
      },
      "Point14": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.06
        }
      },
      "Point15": {
        "name": "DMG Boost: Quantum",
        "icon": "icon/property/IconQuantumAddedRatio.png",
        "stats": {
          "DamageQuantum": 0.048
        }
      },
      "Point16": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.04
        }
      },
      "Point17": {
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.08
        }
      },
      "Point18": {
        "name": "DMG Boost: Quantum",
        "icon": "icon/property/IconQuantumAddedRatio.png",
        "stats": {
          "DamageQuantum": 0.064
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1015.png",
    "preview": "image/character_preview/1015.png",
    "portrait": "image/character_portrait/1015.png",
    "bannerOffsets": [
      45,
      33,
      0.64,
      45,
      33,
      0.64,
      45,
      33,
      0.64
    ]
  }
}