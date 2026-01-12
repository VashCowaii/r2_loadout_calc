let characters = {
  "March 7th - Preservation": {
    "internalID": 1001,
    "name": "March 7th - Preservation",
    "path": "Preservation",
    "element": "Ice",
    "rarity": 4,
    "energyMax": 120,
    "baseStats": {
      "ATKBase": 511.56,
      "DEFBase": 573.3,
      "HPBase": 1058.4,
      "SPDBase": 101,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 150
    },
    "eidolons": [
      {
        "id": "100101",
        "name": "Memory of You",
        "rank": 1,
        "desc": "Every time March 7th's Ultimate Freezes a target, she regenerates 6 Energy.",
        "icon": "icon/skill/1001_rank1.png",
        "paramsEido": [
          6
        ]
      },
      {
        "id": "100102",
        "name": "Memory of It",
        "rank": 2,
        "desc": "Upon entering battle, grants a Shield equal to 24% of March 7th's DEF plus 320 to the ally with the lowest HP percentage, lasting for 3 turn(s).",
        "icon": "icon/skill/1001_rank2.png",
        "paramsEido": [
          0.24,
          3,
          320
        ]
      },
      {
        "id": "100103",
        "name": "Memory of Everything",
        "rank": 3,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1001_ultimate.png"
      },
      {
        "id": "100104",
        "name": "Never Forfeit Again",
        "rank": 4,
        "desc": "The Talent's Counter effect can be triggered 1 more time in each turn. The DMG dealt by Counter increases by an amount that is equal to 30% of March 7th's DEF.",
        "icon": "icon/skill/1001_rank4.png",
        "paramsEido": [
          0.3
        ],
        "extraEffects": {
          "Counter": {
            "desc": "An effect that automatically triggers when the target is attacked, which unleashes an extra attack on the attacker.\\nCounter is also considered a Follow-Up ATK."
          }
        }
      },
      {
        "id": "100105",
        "name": "Never Forget Again",
        "rank": 5,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1001_skill.png"
      },
      {
        "id": "100106",
        "name": "Just Like This, Always...",
        "rank": 6,
        "desc": "Allies under the protection of the Shield granted by the Skill restore HP equal to 4% of their Max HP plus 106 at the beginning of each turn.",
        "icon": "icon/skill/1001_rank6.png",
        "paramsEido": [
          0.04,
          106
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
        "Frigid Cold Arrow": {
          "variant1": {
            "skillID": 100101,
            "trigger": "Skill01",
            "name": "Frigid Cold Arrow",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Ice DMG equal to #1[i]% of March 7th's ATK to one enemy.",
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
              "Avatar_Mar_7th_00_Skill01_Phase01",
              "Avatar_Mar_7th_00_Skill01_Phase02",
              "Avatar_Mar_7th_00_Skill01_Camera"
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
        "The Power of Cuteness": {
          "variant1": {
            "skillID": 100102,
            "trigger": "Skill02",
            "name": "The Power of Cuteness",
            "type": "Defense",
            "slot": "Skill",
            "desc": "Provides a single ally with a Shield that can absorb DMG equal to #1[i]% of March 7th's DEF plus #4[i] for #2[i] turn(s).\\nIf the ally's current HP percentage is #3[i]% or higher, greatly increases the chance of enemies attacking that ally.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.513,
                3,
                0.3,
                631.75,
                5
              ],
              "8": [
                0.532,
                3,
                0.3,
                674.5,
                5
              ],
              "9": [
                0.551,
                3,
                0.3,
                717.25,
                5
              ],
              "10": [
                0.57,
                3,
                0.3,
                760,
                5
              ],
              "11": [
                0.589,
                3,
                0.3,
                802.75,
                5
              ],
              "12": [
                0.608,
                3,
                0.3,
                845.5,
                5
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Defence",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Mar_7th_00_Skill02_Phase01",
              "Avatar_Mar_7th_00_Skill02_Phase02",
              "Avatar_Mar_7th_00_Skill02_Camera_Self",
              "Avatar_Mar_7th_00_Skill02_Camera_Other"
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
        "Glacial Cascade": {
          "variant1": {
            "skillID": 100103,
            "trigger": "Skill03",
            "name": "Glacial Cascade",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Deals Ice DMG equal to #1[i]% of March 7th's ATK to all enemies. Hit enemies have a #2[i]% base chance to be Frozen for #3[i] turn(s).\\nWhile Frozen, enemies cannot take action and will receive Ice Additional DMG equal to #4[i]% of March 7th's ATK at the beginning of each turn.",
            "energyCost": 120,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.275,
                0.5,
                1,
                0.4875
              ],
              "8": [
                1.35,
                0.5,
                1,
                0.525
              ],
              "9": [
                1.425,
                0.5,
                1,
                0.5625
              ],
              "10": [
                1.5,
                0.5,
                1,
                0.6
              ],
              "11": [
                1.56,
                0.5,
                1,
                0.63
              ],
              "12": [
                1.62,
                0.5,
                1,
                0.66
              ]
            },
            "element": "Ice",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Mar_7th_00_Skill03_Phase01",
              "Avatar_Mar_7th_00_Skill03_Phase02",
              "Avatar_Mar_7th_00_Skill03_Camera",
              "Avatar_Mar_7th_00_Skill03_EnterReady"
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
            "hitSplits": [],
            "extraEffects": {
              "Base Chance": {
                "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
              },
              "Additional DMG": {
                "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
              }
            }
          }
        }
      },
      "Talent": {
        "Girl Power": {
          "variant1": {
            "skillID": 100104,
            "trigger": "SkillP01",
            "name": "Girl Power",
            "type": "Single Target",
            "slot": "Talent",
            "desc": "After a Shielded ally is attacked by an enemy, March 7th immediately Counters, dealing Ice DMG equal to #1[i]% of her ATK. This effect can be triggered #2[i] time(s) each turn.",
            "energyCost": null,
            "energyRegen": 10,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.8125,
                2
              ],
              "8": [
                0.875,
                2
              ],
              "9": [
                0.9375,
                2
              ],
              "10": [
                1,
                2
              ],
              "11": [
                1.05,
                2
              ],
              "12": [
                1.1,
                2
              ]
            },
            "element": "Ice",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Mar_7th_00_PassiveSkill01",
              "Avatar_Mar_7th_00_PassiveSkill01_InsertAbility",
              "Avatar_Mar_7th_00_PassiveSkill01_Camera"
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
              "Counter": {
                "desc": "An effect that automatically triggers when the target is attacked, which unleashes an extra attack on the attacker.\\nCounter is also considered a Follow-Up ATK."
              }
            }
          }
        }
      },
      "Technique": {
        "Freezing Beauty": {
          "variant1": {
            "skillID": 100107,
            "trigger": "SkillMaze",
            "name": "Freezing Beauty",
            "slot": "Technique",
            "desc": "Immediately attacks the enemy. After entering battle, there is a #1[i]% base chance to Freeze a random enemy for #2[i] turn(s).\\nWhile Frozen, the enemy cannot take action and will take Ice Additional DMG equal to #3[i]% of March 7th's ATK at the beginning of each turn.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                1,
                1,
                0.5
              ]
            },
            "element": "Ice",
            "attackType": "Maze",
            "skillEffect": "MazeAttack",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Mar_7th_00_SkillMazeInLevel"
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
              },
              "Additional DMG": {
                "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
              }
            }
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1001_basic_atk.png",
        "skillRef": {
          "skillName": "Frigid Cold Arrow",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1001_skill.png",
        "skillRef": {
          "skillName": "The Power of Cuteness",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1001_ultimate.png",
        "skillRef": {
          "skillName": "Glacial Cascade",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1001_talent.png",
        "skillRef": {
          "skillName": "Girl Power",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1001_technique.png",
        "skillRef": {
          "skillName": "Freezing Beauty",
          "skillSlot": "Technique"
        }
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
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.04
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
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.06
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
        "name": "DMG Boost: Ice",
        "icon": "icon/property/IconIceAddedRatio.png",
        "stats": {
          "DamageIce": 0.048
        }
      },
      "Point17": {
        "name": "DMG Boost: Ice",
        "icon": "icon/property/IconIceAddedRatio.png",
        "stats": {
          "DamageIce": 0.064
        }
      },
      "Point18": {
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.1
        }
      },
      "Point06": {
        "name": "Purify",
        "icon": "icon/skill/1001_skilltree1.png",
        "desc": "When using Skill, dispels 1 debuff from one designated ally.",
        "extraEffects": {
          "Debuff": {
            "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled.",
            "params": []
          }
        }
      },
      "Point07": {
        "name": "Reinforce",
        "icon": "icon/skill/1001_skilltree2.png",
        "desc": "The duration of the Shield generated from Skill is extended for #1[i] turn(s).",
        "params": [
          1
        ]
      },
      "Point08": {
        "name": "Ice Spell",
        "icon": "icon/skill/1001_skilltree3.png",
        "desc": "When using Ultimate, increases the base chance to Freeze enemies by #1[i]%.",
        "params": [
          0.15
        ],
        "extraEffects": {
          "Base Chance": {
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES.",
            "params": [
              0.15
            ]
          }
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1001.png",
    "preview": "image/character_preview/1001.png",
    "portrait": "image/character_portrait/1001.png",
    "bannerOffsets": [
      31,
      29,
      0.59,
      31,
      29,
      0.59,
      31,
      29,
      0.59
    ],
    "isBuffed": false
  },
  "Dan Heng": {
    "internalID": 1002,
    "name": "Dan Heng",
    "path": "The Hunt",
    "element": "Wind",
    "rarity": 4,
    "energyMax": 100,
    "baseStats": {
      "ATKBase": 546.84,
      "DEFBase": 396.9,
      "HPBase": 882,
      "SPDBase": 110,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 75
    },
    "eidolons": [
      {
        "id": "100201",
        "name": "The Higher You Fly, the Harder You Fall",
        "rank": 1,
        "desc": "When the target enemy's current HP percentage is greater than or equal to 50%, CRIT Rate increases by 12%.",
        "icon": "icon/skill/1002_rank1.png",
        "paramsEido": [
          0.5,
          0.12
        ]
      },
      {
        "id": "100202",
        "name": "Quell the Venom Octet, Quench the Vice O'Flame",
        "rank": 2,
        "desc": "Reduces Talent cooldown by 1 turn.",
        "icon": "icon/skill/1002_rank2.png"
      },
      {
        "id": "100203",
        "name": "Seen and Unseen",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1002_skill.png"
      },
      {
        "id": "100204",
        "name": "Roaring Dragon and Soaring Sun",
        "rank": 4,
        "desc": "When Dan Heng uses his Ultimate to defeat an enemy, he will immediately take action again.",
        "icon": "icon/skill/1002_rank4.png"
      },
      {
        "id": "100205",
        "name": "A Drop of Rain Feeds a Torrent",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1002_ultimate.png"
      },
      {
        "id": "100206",
        "name": "The Troubled Soul Lies in Wait",
        "rank": 6,
        "desc": "The Slow state triggered by Skill reduces the enemy's SPD by an extra 8%.",
        "icon": "icon/skill/1002_rank6.png",
        "paramsEido": [
          0.08
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
        "Cloudlancer Art: North Wind": {
          "variant1": {
            "skillID": 100201,
            "trigger": "Skill01",
            "name": "Cloudlancer Art: North Wind",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Wind DMG equal to #1[i]% of Dan Heng's ATK to one enemy.",
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
              "Avatar_DanHeng_00_Skill01_Camera",
              "Avatar_DanHeng_00_Skill01_Phase01",
              "Avatar_DanHeng_00_Skill01_Phase02"
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
        "Cloudlancer Art: Torrent": {
          "variant1": {
            "skillID": 100202,
            "trigger": "Skill02",
            "name": "Cloudlancer Art: Torrent",
            "type": "Single Target",
            "slot": "Skill",
            "desc": "Deals Wind DMG equal to #1[i]% of Dan Heng's ATK to one designated enemy.\\nWhen DMG dealt by Skill triggers CRIT Hit, there is a #4[i]% base chance to reduce the target's SPD by #2[i]%, lasting for #3[i] turn(s).",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                2.1125,
                0.12,
                2,
                1
              ],
              "8": [
                2.275,
                0.12,
                2,
                1
              ],
              "9": [
                2.4375,
                0.12,
                2,
                1
              ],
              "10": [
                2.6,
                0.12,
                2,
                1
              ],
              "11": [
                2.73,
                0.12,
                2,
                1
              ],
              "12": [
                2.86,
                0.12,
                2,
                1
              ]
            },
            "element": "Wind",
            "attackType": "BPSkill",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_DanHeng_00_Skill02_Camera",
              "Avatar_DanHeng_00_Skill02_Phase01",
              "Avatar_DanHeng_00_Skill02_Phase02"
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
      },
      "Ultimate": {
        "Ethereal Dream": {
          "variant1": {
            "skillID": 100203,
            "trigger": "Skill03",
            "name": "Ethereal Dream",
            "type": "Single Target",
            "slot": "Ultimate",
            "desc": "Deals Wind DMG equal to #1[i]% of Dan Heng's ATK to one designated enemy target. If the attacked enemy is Slowed, the multiplier for the DMG dealt by Ultimate increases by #2[i]%.",
            "energyCost": 100,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 30,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                3.4,
                1.02
              ],
              "8": [
                3.6,
                1.08
              ],
              "9": [
                3.8,
                1.14
              ],
              "10": [
                4,
                1.2
              ],
              "11": [
                4.16,
                1.248
              ],
              "12": [
                4.32,
                1.296
              ]
            },
            "element": "Wind",
            "attackType": "Ultra",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_DanHeng_00_Skill03_Camera",
              "Avatar_DanHeng_00_Skill03_EnterReady",
              "Avatar_DanHeng_00_Skill03_Phase01",
              "Avatar_DanHeng_00_Skill03_Phase02"
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
        "Superiority of Reach": {
          "variant1": {
            "skillID": 100204,
            "trigger": "SkillP01",
            "name": "Superiority of Reach",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "When Dan Heng becomes the target of an ally's ability, his next attack's Wind RES PEN increases by #1[i]%. This effect can be triggered again after #2[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.2925,
                2
              ],
              "8": [
                0.315,
                2
              ],
              "9": [
                0.3375,
                2
              ],
              "10": [
                0.36,
                2
              ],
              "11": [
                0.378,
                2
              ],
              "12": [
                0.396,
                2
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_DanHeng_00_PassiveSkill01",
              "Avatar_DanHeng_00_PassiveSkill01_Enhance_Phase01",
              "Avatar_DanHeng_00_PassiveSkill01_Enhance_Phase02",
              "Avatar_DanHeng_00_PassiveSkill01_Enhance_Camera"
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
              "RES PEN": {
                "desc": "When dealing DMG, ignore a part of the enemy target's resistance to the corresponding damage type."
              }
            }
          }
        }
      },
      "Technique": {
        "Splitting Spearhead": {
          "variant1": {
            "skillID": 100207,
            "trigger": "SkillMaze",
            "name": "Splitting Spearhead",
            "type": "Enhance",
            "slot": "Technique",
            "desc": "After Dan Heng uses his Technique, his ATK increases by #1[i]% at the start of the next battle for #2[i] turn(s).",
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
              "Avatar_DanHeng_SkillMazeInLevel"
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
        "icon": "icon/skill/1002_basic_atk.png",
        "skillRef": {
          "skillName": "Cloudlancer Art: North Wind",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1002_skill.png",
        "skillRef": {
          "skillName": "Cloudlancer Art: Torrent",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1002_ultimate.png",
        "skillRef": {
          "skillName": "Ethereal Dream",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1002_talent.png",
        "skillRef": {
          "skillName": "Superiority of Reach",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1002_technique.png",
        "skillRef": {
          "skillName": "Splitting Spearhead",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Hidden Dragon",
        "icon": "icon/skill/1002_skilltree1.png",
        "desc": "When current HP percentage is #1[i]% or lower, reduces the chance of being attacked by enemies.",
        "params": [
          0.5,
          0.5
        ]
      },
      "Point07": {
        "name": "Faster Than Light",
        "icon": "icon/skill/1002_skilltree2.png",
        "desc": "After launching an attack, there is a #1[i]% fixed chance to increase this unit's SPD by #2[i]% for #3[i] turn(s).",
        "params": [
          0.5,
          0.2,
          2
        ],
        "extraEffects": {
          "Fixed Chance": {
            "desc": "Fixed chance will not be affected by any factor.",
            "params": [
              0.5,
              0.2,
              2
            ]
          }
        }
      },
      "Point08": {
        "name": "High Gale",
        "icon": "icon/skill/1002_skilltree3.png",
        "desc": "Basic ATK deals #1[i]% more DMG to Slowed enemies.",
        "params": [
          0.4
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
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.04
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
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.05
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
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.06
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
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.075
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
        "name": "DMG Boost: Wind",
        "icon": "icon/property/IconWindAddedRatio.png",
        "stats": {
          "DamageWind": 0.064
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1002.png",
    "preview": "image/character_preview/1002.png",
    "portrait": "image/character_portrait/1002.png",
    "bannerOffsets": [
      -65,
      76.1,
      0.71,
      -65,
      76.1,
      0.71,
      -65,
      76.1,
      0.71
    ],
    "isBuffed": false
  },
  "Kafka": {
    "internalID": 1005,
    "name": "Kafka",
    "path": "Nihility",
    "element": "Lightning",
    "rarity": 5,
    "energyMax": 120,
    "baseStats": {
      "ATKBase": 679.1400000000001,
      "DEFBase": 485.1,
      "HPBase": 1086.624,
      "SPDBase": 100,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 100
    },
    "eidolons": [
      {
        "id": "1100501",
        "name": "Da Capo",
        "rank": 1,
        "desc": "When using an attack, has a 100% base chance to increase the DoT taken by the target by 30% for 2 turn(s).",
        "icon": "icon/skill/1100_rank1.png",
        "paramsEido": [
          1,
          0.3,
          2
        ],
        "extraEffects": {
          "Base Chance": {
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
          }
        }
      },
      {
        "id": "1100502",
        "name": "Fortississimo",
        "rank": 2,
        "desc": "While Kafka is on the field, DoT dealt by all allies increases by 33%.",
        "icon": "icon/skill/1100_rank2.png",
        "paramsEido": [
          0.33
        ]
      },
      {
        "id": "1100503",
        "name": "Capriccio",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1100_skill.png"
      },
      {
        "id": "1100504",
        "name": "Recitativo",
        "rank": 4,
        "desc": "When an enemy target takes DMG from the Shock status inflicted by Kafka, Kafka additionally regenerates 2 Energy.",
        "icon": "icon/skill/1100_rank4.png",
        "paramsEido": [
          2
        ]
      },
      {
        "id": "1100505",
        "name": "Doloroso",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1100_ultimate.png"
      },
      {
        "id": "1100506",
        "name": "Leggiero",
        "rank": 6,
        "desc": "The Shock state inflicted on the enemy target by the Ultimate, Technique, or the Talent-triggered Follow-Up ATK has a DMG multiplier increase of 156% and lasts 1 turn(s) longer.",
        "icon": "icon/skill/1100_rank6.png",
        "paramsEido": [
          1.56,
          1
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
        "Skill": 2
      },
      "5": {
        "Ultimate": 2,
        "Talent": 2
      }
    },
    "skills": {
      "Basic ATK": {
        "Midnight Tumult": {
          "variant1": {
            "skillID": 1100501,
            "trigger": "Skill01",
            "name": "Midnight Tumult",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Lightning DMG equal to #1[i]% of Kafka's ATK to one designated enemy.",
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
              "Avatar_Kafka_00_Skill01_Camera",
              "Avatar_Advanced_Kafka_00_Skill01_Phase01",
              "Avatar_Advanced_Kafka_00_Skill01_Phase02"
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
        "Caressing Moonlight": {
          "variant1": {
            "skillID": 1100502,
            "trigger": "Skill02",
            "name": "Caressing Moonlight",
            "type": "Blast",
            "slot": "Skill",
            "desc": "Deals Lightning DMG equal to #1[i]% of Kafka's ATK to one designated enemy and Lightning DMG equal to #3[i]% of Kafka's ATK to adjacent targets.\\nIf the designated enemy or the adjacent targets are currently afflicted with DoT, all DoTs currently placed on those enemies immediately produces DMG equal to #2[i]% or #4[i]% of the original DMG.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.3,
                0.69375,
                0.4875,
                0.4625
              ],
              "8": [
                1.4,
                0.7125,
                0.525,
                0.475
              ],
              "9": [
                1.5,
                0.73125,
                0.5625,
                0.4875
              ],
              "10": [
                1.6,
                0.75,
                0.6,
                0.5
              ],
              "11": [
                1.68,
                0.765,
                0.63,
                0.51
              ],
              "12": [
                1.76,
                0.78,
                0.66,
                0.52
              ]
            },
            "element": "Lightning",
            "attackType": "BPSkill",
            "skillEffect": "Blast",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Kafka_00_Skill02_Camera",
              "Avatar_Advanced_Kafka_00_Skill02_Phase01",
              "Avatar_Advanced_Kafka_00_Skill02_Phase02"
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
        "Twilight Trill": {
          "variant1": {
            "skillID": 1100503,
            "trigger": "Skill03",
            "name": "Twilight Trill",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Deals Lightning DMG equal to #1[i]% of Kafka's ATK to all enemies, with a #2[i]% base chance for enemy targets hit to become Shocked and immediately take DMG from their current DoT debuff(s), equal to #5[i]% of the original DMG. Shock lasts for #3[i] turn(s).\\nWhile Shocked, enemy targets receive Lightning DoT equal to #4[i]% of Kafka's ATK at the beginning of each turn.",
            "energyCost": 120,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.68,
                1,
                2,
                1.975625,
                1.125
              ],
              "8": [
                0.72,
                1,
                2,
                2.2475,
                1.15
              ],
              "9": [
                0.76,
                1,
                2,
                2.57375,
                1.175
              ],
              "10": [
                0.8,
                1,
                2,
                2.9,
                1.2
              ],
              "11": [
                0.832,
                1,
                2,
                3.041375,
                1.22
              ],
              "12": [
                0.864,
                1,
                2,
                3.18275,
                1.24
              ]
            },
            "element": "Lightning",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Kafka_00_Skill03_Camera",
              "Avatar_Advanced_Kafka_00_Skill03_Phase01",
              "Avatar_Advanced_Kafka_00_Skill03_Phase02",
              "Avatar_Advanced_Kafka_00_Skill03_EnterReady"
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
        "Gentle but Cruel": {
          "variant1": {
            "skillID": 1100504,
            "trigger": "SkillP01",
            "name": "Gentle but Cruel",
            "type": "Single Target",
            "slot": "Talent",
            "desc": "After Kafka's teammate uses an attack on an enemy target, Kafka immediately launches Follow-Up ATK and deals Lightning DMG equal to #1[i]% of Kafka's ATK to the primary target, with a #2[i]% base chance to inflict Shock (equivalent to that applied by her Ultimate) on the attacked enemy target for #3[i] turns. This effect can trigger up to #5[i] time(s), #4[i] of which can be regained at the end of Kafka's turn.",
            "energyCost": null,
            "energyRegen": 10,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.0325,
                1,
                2,
                1,
                2
              ],
              "8": [
                1.155,
                1,
                2,
                1,
                2
              ],
              "9": [
                1.2775,
                1,
                2,
                1,
                2
              ],
              "10": [
                1.4,
                1,
                2,
                1,
                2
              ],
              "11": [
                1.498,
                1,
                2,
                1,
                2
              ],
              "12": [
                1.596,
                1,
                2,
                1,
                2
              ]
            },
            "element": "Lightning",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Advanced_Kafka_00_PassiveSkill01",
              "Avatar_Advanced_Kafka_00_PassiveAtk_Ability",
              "Avatar_Kafka_Passive1Atk_Ability_Camera"
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
              },
              "Base Chance": {
                "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
              }
            }
          }
        }
      },
      "Technique": {
        "Mercy Is Not Forgiveness": {
          "variant1": {
            "skillID": 1100507,
            "trigger": "SkillMaze",
            "name": "Mercy Is Not Forgiveness",
            "slot": "Technique",
            "desc": "Immediately attacks all enemies within a set range. After entering combat, deals Lightning DMG equal to #3[i]% of Kafka's ATK to all enemies, with a #1[i]% base chance to inflict Shock (equivalent to that applied by her Ultimate) on every enemy target for #2[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                1,
                2,
                0.5
              ]
            },
            "element": "Lightning",
            "attackType": "Maze",
            "skillEffect": "MazeAttack",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Advanced_Kafka_00_SkillMazeInLevel"
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
        "icon": "icon/skill/1005_basic_atk.png",
        "skillRef": {
          "skillName": "Midnight Tumult",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1005_skill.png",
        "skillRef": {
          "skillName": "Caressing Moonlight",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1005_ultimate.png",
        "skillRef": {
          "skillName": "Twilight Trill",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1005_talent.png",
        "skillRef": {
          "skillName": "Gentle but Cruel",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1005_technique.png",
        "skillRef": {
          "skillName": "Mercy Is Not Forgiveness",
          "skillSlot": "Technique"
        }
      },
      "Point07": {
        "name": "Plunder",
        "icon": "icon/skill/1005_skilltree2.png",
        "desc": "If an enemy target is defeated while Shocked, Kafka additionally regenerates #1[i] Energy.",
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
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.06
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
        "name": "Torture",
        "icon": "icon/skill/1005_skilltree1.png",
        "desc": "When an ally target's Effect Hit Rate is #1[i]% or higher, Kafka increases that target's ATK by #2[i]%.",
        "params": [
          0.75,
          1
        ]
      },
      "Point08": {
        "name": "Thorns",
        "icon": "icon/skill/1005_skilltree3.png",
        "desc": "After using Ultimate, restores the triggerable count of Talent's Follow-Up ATK by 1. And the Talent's Follow-Up ATK can cause all DoTs debuffs currently on the target to immediately produce DMG equal to #1[i]% of the original DMG.",
        "params": [
          0.8
        ],
        "extraEffects": {
          "Follow-Up ATK": {
            "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met.",
            "params": [
              0.8
            ]
          }
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1005.png",
    "preview": "image/character_preview/1005.png",
    "portrait": "image/character_portrait/1005.png",
    "bannerOffsets": [
      1,
      -50,
      0.71,
      1,
      -50,
      0.71,
      1,
      -50,
      0.71
    ],
    "isBuffed": true
  },
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
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
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
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES.",
            "params": [
              1,
              1
            ]
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
  "Arlan": {
    "internalID": 1008,
    "name": "Arlan",
    "path": "Destruction",
    "element": "Lightning",
    "rarity": 4,
    "energyMax": 110,
    "baseStats": {
      "ATKBase": 599.76,
      "DEFBase": 330.75,
      "HPBase": 1199.52,
      "SPDBase": 102,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 125
    },
    "eidolons": [
      {
        "id": "100801",
        "name": "To the Bitter End",
        "rank": 1,
        "desc": "When HP percentage is lower than or equal to 50% of Max HP, increases DMG dealt by Skill by 10%.",
        "icon": "icon/skill/1008_rank1.png",
        "paramsEido": [
          0.1
        ]
      },
      {
        "id": "100802",
        "name": "Breaking Free",
        "rank": 2,
        "desc": "Using Skill or Ultimate removes 1 debuff from this unit.",
        "icon": "icon/skill/1008_rank2.png",
        "extraEffects": {
          "Debuff": {
            "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled."
          }
        }
      },
      {
        "id": "100803",
        "name": "Power Through",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1008_skill.png"
      },
      {
        "id": "100804",
        "name": "Turn the Tables",
        "rank": 4,
        "desc": "When struck by a killing blow after entering battle, instead of becoming knocked down, Arlan immediately restores his HP to 25% of his Max HP. This effect is automatically removed after it is triggered once or after 2 turn(s) have elapsed.",
        "icon": "icon/skill/1008_rank4.png",
        "paramsEido": [
          0.25,
          2
        ],
        "extraEffects": {
          "Downed State": {
            "desc": "An ally will be incapacitated once their HP is reduced to 0."
          }
        }
      },
      {
        "id": "100805",
        "name": "Hammer and Tongs",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1008_ultimate.png"
      },
      {
        "id": "100806",
        "name": "Self-Sacrifice",
        "rank": 6,
        "desc": "When the current HP percentage drops to 50% or below, Ultimate deals 20% more DMG, and the DMG multiplier for adjacent targets is raised to the same level as that for the primary target.",
        "icon": "icon/skill/1008_rank6.png",
        "paramsEido": [
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
        "Lightning Rush": {
          "variant1": {
            "skillID": 100801,
            "trigger": "Skill01",
            "name": "Lightning Rush",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Lightning DMG equal to #1[i]% of Arlan's ATK to one designated enemy.",
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
              "Avatar_Arlan_00_Skill01_Camera",
              "Avatar_Arlan_Skill01_Phase01",
              "Avatar_Arlan_Skill01_Phase02"
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
        "Shackle Breaker": {
          "variant1": {
            "skillID": 100802,
            "trigger": "Skill02",
            "name": "Shackle Breaker",
            "type": "Single Target",
            "slot": "Skill",
            "desc": "Consumes Arlan's HP equal to #1[i]% of his Max HP to deal Lightning DMG equal to #2[i]% of Arlan's ATK to one designated enemy. If Arlan does not have sufficient HP, his HP will be reduced to 1 after using his Skill.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.15,
                1.95
              ],
              "8": [
                0.15,
                2.1
              ],
              "9": [
                0.15,
                2.25
              ],
              "10": [
                0.15,
                2.4
              ],
              "11": [
                0.15,
                2.52
              ],
              "12": [
                0.15,
                2.64
              ]
            },
            "element": "Lightning",
            "attackType": "BPSkill",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Arlan_Skill02_Camera",
              "Avatar_Arlan_Skill02_Phase01",
              "Avatar_Arlan_Skill02_Phase02"
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
        "Frenzied Punishment": {
          "variant1": {
            "skillID": 100803,
            "trigger": "Skill03",
            "name": "Frenzied Punishment",
            "type": "Blast",
            "slot": "Ultimate",
            "desc": "Deals Lightning DMG equal to #1[i]% of Arlan's ATK to one designated enemy and Lightning DMG equal to #2[i]% of Arlan's ATK to enemies adjacent to it.",
            "energyCost": 110,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                2.72,
                1.36
              ],
              "8": [
                2.88,
                1.44
              ],
              "9": [
                3.04,
                1.52
              ],
              "10": [
                3.2,
                1.6
              ],
              "11": [
                3.328,
                1.664
              ],
              "12": [
                3.456,
                1.728
              ]
            },
            "element": "Lightning",
            "attackType": "Ultra",
            "skillEffect": "Blast",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Arlan_Skill03_Camera",
              "Avatar_Arlan_00_Skill03_EnterReady",
              "Avatar_Arlan_Skill03_Phase01",
              "Avatar_Arlan_Skill03_Phase02"
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
        "Pain and Anger": {
          "variant1": {
            "skillID": 100804,
            "trigger": "SkillP01",
            "name": "Pain and Anger",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "Based on Arlan's current missing HP percentage, gains DMG bonus, up to a maximum increase of #1[i]% DMG dealt by Arlan.",
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
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Arlan_PassiveSkill01",
              "Avatar_Arlan_00_PassiveSkill03_Insert"
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
        "Swift Harvest": {
          "variant1": {
            "skillID": 100807,
            "trigger": "SkillMaze",
            "name": "Swift Harvest",
            "slot": "Technique",
            "desc": "Immediately attacks the enemy. After entering battle, deals Lightning DMG equal to #1[i]% of Arlan's ATK to all enemies.",
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
            "element": "Lightning",
            "attackType": "Maze",
            "skillEffect": "MazeAttack",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Arlan_00_SkillMazeInLevel"
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
        "icon": "icon/skill/1008_basic_atk.png",
        "skillRef": {
          "skillName": "Lightning Rush",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1008_skill.png",
        "skillRef": {
          "skillName": "Shackle Breaker",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1008_ultimate.png",
        "skillRef": {
          "skillName": "Frenzied Punishment",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1008_talent.png",
        "skillRef": {
          "skillName": "Pain and Anger",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1008_technique.png",
        "skillRef": {
          "skillName": "Swift Harvest",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Revival",
        "icon": "icon/skill/1008_skilltree1.png",
        "desc": "If the current HP percentage is #1[i]% or lower when defeating an enemy, immediately restores HP equal to #2[i]% of Max HP.",
        "params": [
          0.3,
          0.2
        ]
      },
      "Point07": {
        "name": "Endurance",
        "icon": "icon/skill/1008_skilltree2.png",
        "desc": "The chance to resist DoT Debuffs increases by #1[i]%.",
        "params": [
          0.5
        ]
      },
      "Point08": {
        "name": "Repel",
        "icon": "icon/skill/1008_skilltree3.png",
        "desc": "Upon entering battle, if Arlan's HP percentage is less than or equal to #1[i]%, he can nullify all DMG received except for DoTs until he is attacked.",
        "params": [
          0.5
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
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.04
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
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.06
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
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.08
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
    "icon": "icon/character/1008.png",
    "preview": "image/character_preview/1008.png",
    "portrait": "image/character_portrait/1008.png",
    "bannerOffsets": [
      -36,
      16,
      0.62,
      -36,
      16,
      0.62,
      -36,
      16,
      0.62
    ],
    "isBuffed": false
  },
  "Asta": {
    "internalID": 1009,
    "name": "Asta",
    "path": "Harmony",
    "element": "Fire",
    "rarity": 4,
    "energyMax": 120,
    "baseStats": {
      "ATKBase": 511.56,
      "DEFBase": 463.04999999999995,
      "HPBase": 1023.12,
      "SPDBase": 106,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 100
    },
    "eidolons": [
      {
        "id": "100901",
        "name": "Star Sings Sans Verses or Vocals",
        "rank": 1,
        "desc": "When using Skill, deals DMG for 1 extra time to a random enemy.",
        "icon": "icon/skill/1009_rank1.png"
      },
      {
        "id": "100902",
        "name": "Moon Speaks in Wax and Wane",
        "rank": 2,
        "desc": "After using her Ultimate, Asta's Charging stacks will not be reduced in the next turn.",
        "icon": "icon/skill/1009_rank2.png",
        "paramsEido": [
          1
        ]
      },
      {
        "id": "100903",
        "name": "Meteor Showers for Wish and Want",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1009_skill.png"
      },
      {
        "id": "100904",
        "name": "Aurora Basks in Beauty and Bliss",
        "rank": 4,
        "desc": "Asta's Energy Regeneration Rate increases by 15% when she has 2 or more Charging stacks.",
        "icon": "icon/skill/1009_rank4.png",
        "paramsEido": [
          2,
          0.15
        ]
      },
      {
        "id": "100905",
        "name": "Nebula Secludes in Runes and Riddles",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1009_ultimate.png"
      },
      {
        "id": "100906",
        "name": "Cosmos Dreams in Calm and Comfort",
        "rank": 6,
        "desc": "Charging stack(s) lost in each turn is reduced by 1.",
        "icon": "icon/skill/1009_rank6.png",
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
        "Spectrum Beam": {
          "variant1": {
            "skillID": 100901,
            "trigger": "Skill01",
            "name": "Spectrum Beam",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Fire DMG equal to #1[i]% of Asta's ATK to one designated enemy.",
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
              "Avatar_Asta_00_Skill01_Camera",
              "Avatar_Asta_00_Skill01_Phase01",
              "Avatar_Asta_00_Skill01_Phase02"
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
        "Meteor Storm": {
          "variant1": {
            "skillID": 100902,
            "trigger": "Skill02",
            "name": "Meteor Storm",
            "type": "Bounce",
            "slot": "Skill",
            "desc": "Deals Fire DMG equal to #1[i]% of Asta's ATK to one designated enemy and further deals DMG for 4 extra times, with each time dealing Fire DMG equal to #1[i]% of Asta's ATK to a random enemy.",
            "energyCost": null,
            "energyRegen": 6,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
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
              ]
            },
            "element": "Fire",
            "attackType": "BPSkill",
            "skillEffect": "Bounce",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Asta_00_Skill02_Camera",
              "Avatar_Asta_00_Skill02_Phase01",
              "Avatar_Asta_00_Skill02_Phase02"
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
      "Ultimate": {
        "Astral Blessing": {
          "variant1": {
            "skillID": 100903,
            "trigger": "Skill03",
            "name": "Astral Blessing",
            "type": "Support",
            "slot": "Ultimate",
            "desc": "Increases SPD of all allies by #1[i] for #2[i] turn(s).",
            "energyCost": 120,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                44.75,
                2
              ],
              "8": [
                46.5,
                2
              ],
              "9": [
                48.25,
                2
              ],
              "10": [
                50,
                2
              ],
              "11": [
                51.4,
                2
              ],
              "12": [
                52.8,
                2
              ]
            },
            "attackType": "Ultra",
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Asta_00_Skill03_Camera",
              "Avatar_Asta_00_Skill03_EnterReady",
              "Avatar_Asta_00_Skill03_Phase01",
              "Avatar_Asta_00_Skill03_Phase02"
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
        "Astrometry": {
          "variant1": {
            "skillID": 100904,
            "trigger": "SkillP01",
            "name": "Astrometry",
            "type": "Support",
            "slot": "Talent",
            "desc": "Gains 1 stack of Charging for every different enemy hit by Asta plus an extra stack if the enemy hit has Fire Weakness.\\nFor every stack of Charging Asta has, all allies' ATK increases by #1[f1]%, up to #2[i] time(s).\\nStarting from her second turn, Asta's Charging stack count is reduced by #3[i] at the beginning of every turn.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.11375,
                5,
                3
              ],
              "8": [
                0.1225,
                5,
                3
              ],
              "9": [
                0.13125,
                5,
                3
              ],
              "10": [
                0.14,
                5,
                3
              ],
              "11": [
                0.147,
                5,
                3
              ],
              "12": [
                0.154,
                5,
                3
              ]
            },
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Asta_00_PassiveSkill_1"
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
        "Miracle Flash": {
          "variant1": {
            "skillID": 100907,
            "trigger": "SkillMaze",
            "name": "Miracle Flash",
            "slot": "Technique",
            "desc": "Immediately attacks the enemy. After entering battle, deals Fire DMG equal to #1[i]% of Asta's ATK to all enemies.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.5
              ]
            },
            "element": "Fire",
            "attackType": "Maze",
            "skillEffect": "MazeAttack",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Asta_00_SkillMazeInLevel"
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
        "icon": "icon/skill/1009_basic_atk.png",
        "skillRef": {
          "skillName": "Spectrum Beam",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1009_skill.png",
        "skillRef": {
          "skillName": "Meteor Storm",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1009_ultimate.png",
        "skillRef": {
          "skillName": "Astral Blessing",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1009_talent.png",
        "skillRef": {
          "skillName": "Astrometry",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1009_technique.png",
        "skillRef": {
          "skillName": "Miracle Flash",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Sparks",
        "icon": "icon/skill/1009_skilltree1.png",
        "desc": "Asta's Basic ATK has a #1[i]% base chance to Burn the enemy target for #2[i] turn(s).\nBurned enemies take Fire DoT equal to #3[i]% of DMG dealt by Asta's Basic ATK at the start of each turn.",
        "params": [
          0.8,
          3,
          0.5
        ],
        "extraEffects": {
          "Base Chance": {
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES.",
            "params": [
              0.8,
              3,
              0.5
            ]
          }
        }
      },
      "Point07": {
        "name": "Ignite",
        "icon": "icon/skill/1009_skilltree2.png",
        "desc": "When Asta is on the field, all allies' Fire DMG increases by #1[i]%.",
        "params": [
          0.18
        ]
      },
      "Point08": {
        "name": "Constellation",
        "icon": "icon/skill/1009_skilltree3.png",
        "desc": "Asta's DEF increases by #1[i]% for every current Charging stack she possesses.",
        "params": [
          0.06
        ]
      },
      "Point09": {
        "name": "DMG Boost: Fire",
        "icon": "icon/property/IconFireAddedRatio.png",
        "stats": {
          "DamageFire": 0.032
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
        "name": "DMG Boost: Fire",
        "icon": "icon/property/IconFireAddedRatio.png",
        "stats": {
          "DamageFire": 0.032
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
        "name": "DMG Boost: Fire",
        "icon": "icon/property/IconFireAddedRatio.png",
        "stats": {
          "DamageFire": 0.048
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
        "name": "DMG Boost: Fire",
        "icon": "icon/property/IconFireAddedRatio.png",
        "stats": {
          "DamageFire": 0.048
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
        "name": "DMG Boost: Fire",
        "icon": "icon/property/IconFireAddedRatio.png",
        "stats": {
          "DamageFire": 0.064
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1009.png",
    "preview": "image/character_preview/1009.png",
    "portrait": "image/character_portrait/1009.png",
    "bannerOffsets": [
      28,
      22,
      0.53,
      28,
      22,
      0.53,
      28,
      22,
      0.53
    ],
    "isBuffed": false
  },
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
            "desc": "Freeze, Entanglement, Imprisonment, Dominated, Outrage, Strong Reverberation, Alien Dream, Snarelock, Terrified, Action Lock.",
            "params": [
              0.35
            ]
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
    ],
    "isBuffed": false
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
    ],
    "isBuffed": false
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
            "desc": "When dealing DMG, ignore a part of the enemy target's resistance to the corresponding damage type.",
            "params": [
              0.2
            ]
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
            "desc": "Reduces the target's waiting interval before the next action.",
            "params": [
              0.2
            ]
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
    ],
    "isBuffed": false
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
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES.",
            "params": [
              0.2
            ]
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
            "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled.",
            "params": [
              1
            ]
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
    ],
    "isBuffed": false
  },
  "Pela": {
    "internalID": 1106,
    "name": "Pela",
    "path": "Nihility",
    "element": "Ice",
    "rarity": 4,
    "energyMax": 110,
    "baseStats": {
      "ATKBase": 546.84,
      "DEFBase": 463.04999999999995,
      "HPBase": 987.8399999999999,
      "SPDBase": 105,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 100
    },
    "eidolons": [
      {
        "id": "110601",
        "name": "Victory Report",
        "rank": 1,
        "desc": "When an enemy is defeated, Pela regenerates 5 Energy.",
        "icon": "icon/skill/1106_rank1.png",
        "paramsEido": [
          5
        ]
      },
      {
        "id": "110602",
        "name": "Adamant Charge",
        "rank": 2,
        "desc": "Using Skill to dispel buff(s) increases SPD by 10% for 2 turn(s).",
        "icon": "icon/skill/1106_rank2.png",
        "paramsEido": [
          0.1,
          2,
          1
        ],
        "extraEffects": {
          "Buff": {
            "desc": "Can buff combat ability for a period of time, which can be dispelled unless otherwise specified."
          }
        }
      },
      {
        "id": "110603",
        "name": "Suppressive Force",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1106_skill.png"
      },
      {
        "id": "110604",
        "name": "Full Analysis",
        "rank": 4,
        "desc": "When using Skill, there is a 100% base chance to reduce the target enemy's Ice RES by 12% for 2 turn(s).",
        "icon": "icon/skill/1106_rank4.png",
        "paramsEido": [
          1,
          0.12,
          2
        ],
        "extraEffects": {
          "Base Chance": {
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
          }
        }
      },
      {
        "id": "110605",
        "name": "Absolute Jeopardy",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1106_ultimate.png"
      },
      {
        "id": "110606",
        "name": "Feeble Pursuit",
        "rank": 6,
        "desc": "After Pela attacks, if the enemy target is debuffed, deals Ice Additional DMG equal to 40% of Pela's ATK to the enemy.",
        "icon": "icon/skill/1106_rank6.png",
        "paramsEido": [
          0.4
        ],
        "extraEffects": {
          "Debuff": {
            "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled."
          },
          "Additional DMG": {
            "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
          }
        }
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
        "Frost Shot": {
          "variant1": {
            "skillID": 110601,
            "trigger": "Skill01",
            "name": "Frost Shot",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Ice DMG equal to #1[i]% of Pela's ATK to one designated enemy target.",
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
              "Avatar_Pela_00_Skill01_Camera",
              "Avatar_Pela_00_Skill01_Phase01",
              "Avatar_Pela_00_Skill01_Phase02"
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
        "Frostbite": {
          "variant1": {
            "skillID": 110602,
            "trigger": "Skill02",
            "name": "Frostbite",
            "type": "Single Target",
            "slot": "Skill",
            "desc": "Removes #2[i] buff(s) and deals Ice DMG equal to #1[i]% of Pela's ATK to one designated target enemy.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.70625,
                1
              ],
              "8": [
                1.8375,
                1
              ],
              "9": [
                1.96875,
                1
              ],
              "10": [
                2.1,
                1
              ],
              "11": [
                2.205,
                1
              ],
              "12": [
                2.31,
                1
              ]
            },
            "element": "Ice",
            "attackType": "BPSkill",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Pela_00_Skill02_Camera",
              "Avatar_Pela_00_Skill02_Phase01",
              "Avatar_Pela_00_Skill02_Phase02"
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
              "Buff": {
                "desc": "Can buff combat ability for a period of time, which can be dispelled unless otherwise specified."
              }
            }
          }
        }
      },
      "Ultimate": {
        "Zone Suppression": {
          "variant1": {
            "skillID": 110603,
            "trigger": "Skill03",
            "name": "Zone Suppression",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Deals Ice DMG equal to #4[i]% of Pela's ATK to all enemies, with a #1[i]% base chance to inflict Exposed on all enemies.\\nWhen Exposed, enemies' DEF is reduced by #2[i]% for #3[i] turn(s).",
            "energyCost": 110,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                1,
                0.3625,
                2,
                0.85
              ],
              "8": [
                1,
                0.375,
                2,
                0.9
              ],
              "9": [
                1,
                0.3875,
                2,
                0.95
              ],
              "10": [
                1,
                0.4,
                2,
                1
              ],
              "11": [
                1,
                0.41,
                2,
                1.04
              ],
              "12": [
                1,
                0.42,
                2,
                1.08
              ]
            },
            "element": "Ice",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Pela_00_Skill03_Camera",
              "Avatar_Pela_00_Skill03_Phase01",
              "Avatar_Pela_00_Skill03_Phase02",
              "Avatar_Pela_00_Skill03_Cutin"
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
        "Data Collecting": {
          "variant1": {
            "skillID": 110604,
            "trigger": "SkillP01",
            "name": "Data Collecting",
            "type": "Support",
            "slot": "Talent",
            "desc": "If the enemy is debuffed after Pela's attack, Pela will restore #1[f1] additional Energy. This effect can only be triggered 1 time per attack.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                8.125
              ],
              "8": [
                8.75
              ],
              "9": [
                9.375
              ],
              "10": [
                10
              ],
              "11": [
                10.5
              ],
              "12": [
                11
              ]
            },
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Pela_00_PassiveSkill01"
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
      "Technique": {
        "Preemptive Strike": {
          "variant1": {
            "skillID": 110607,
            "trigger": "SkillMaze",
            "name": "Preemptive Strike",
            "slot": "Technique",
            "desc": "Immediately attacks the enemy. Upon entering battle, Pela deals Ice DMG equal to #4[i]% of her ATK to a random enemy, with a #1[i]% base chance of lowering the DEF of all enemies by #2[i]% for #3[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                1,
                0.2,
                2,
                0.8
              ]
            },
            "element": "Ice",
            "attackType": "Maze",
            "skillEffect": "MazeAttack",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Pela_00_SkillMazeInLevel"
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
        "icon": "icon/skill/1106_basic_atk.png",
        "skillRef": {
          "skillName": "Frost Shot",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1106_skill.png",
        "skillRef": {
          "skillName": "Frostbite",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1106_ultimate.png",
        "skillRef": {
          "skillName": "Zone Suppression",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1106_talent.png",
        "skillRef": {
          "skillName": "Data Collecting",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1106_technique.png",
        "skillRef": {
          "skillName": "Preemptive Strike",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Bash",
        "icon": "icon/skill/1106_skilltree1.png",
        "desc": "Deals #1[i]% more DMG to debuffed enemy targets.",
        "params": [
          0.2
        ],
        "extraEffects": {
          "Debuff": {
            "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled.",
            "params": [
              0.2
            ]
          }
        }
      },
      "Point07": {
        "name": "The Secret Strategy",
        "icon": "icon/skill/1106_skilltree2.png",
        "desc": "When Pela is on the battlefield, all allies' Effect Hit Rate increases by #1[i]%.",
        "params": [
          0.1
        ]
      },
      "Point08": {
        "name": "Wipe Out",
        "icon": "icon/skill/1106_skilltree3.png",
        "desc": "When using Skill to dispel buff(s), increases the DMG dealt by the next attack by #1[i]%.",
        "params": [
          0.2
        ],
        "extraEffects": {
          "Buff": {
            "desc": "Can buff combat ability for a period of time, which can be dispelled unless otherwise specified.",
            "params": [
              0.2
            ]
          }
        }
      },
      "Point09": {
        "name": "DMG Boost: Ice",
        "icon": "icon/property/IconIceAddedRatio.png",
        "stats": {
          "DamageIce": 0.032
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
        "name": "DMG Boost: Ice",
        "icon": "icon/property/IconIceAddedRatio.png",
        "stats": {
          "DamageIce": 0.032
        }
      },
      "Point12": {
        "name": "Effect Hit Rate Boost",
        "icon": "icon/property/IconStatusProbability.png",
        "stats": {
          "EffectHitRate": 0.04
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
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.06
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
        "name": "Effect Hit Rate Boost",
        "icon": "icon/property/IconStatusProbability.png",
        "stats": {
          "EffectHitRate": 0.06
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
        "name": "DMG Boost: Ice",
        "icon": "icon/property/IconIceAddedRatio.png",
        "stats": {
          "DamageIce": 0.064
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1106.png",
    "preview": "image/character_preview/1106.png",
    "portrait": "image/character_portrait/1106.png",
    "bannerOffsets": [
      116,
      68,
      0.64,
      116,
      68,
      0.64,
      116,
      68,
      0.64
    ],
    "isBuffed": false
  },
  "Clara": {
    "internalID": 1107,
    "name": "Clara",
    "path": "Destruction",
    "element": "Physical",
    "rarity": 5,
    "energyMax": 110,
    "baseStats": {
      "ATKBase": 737.3520000000001,
      "DEFBase": 485.1,
      "HPBase": 1241.8560000000002,
      "SPDBase": 90,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 125
    },
    "eidolons": [
      {
        "id": "110701",
        "name": "A Tall Figure",
        "rank": 1,
        "desc": "Using Skill will not remove Marks of Counter on the enemy.",
        "icon": "icon/skill/1107_rank1.png"
      },
      {
        "id": "110702",
        "name": "A Tight Embrace",
        "rank": 2,
        "desc": "After using the Ultimate, ATK increases by 30% for 2 turn(s).",
        "icon": "icon/skill/1107_rank2.png",
        "paramsEido": [
          0.3,
          2
        ]
      },
      {
        "id": "110703",
        "name": "Cold Steel Armor",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1107_skill.png"
      },
      {
        "id": "110704",
        "name": "Family's Warmth",
        "rank": 4,
        "desc": "After Clara is hit, the DMG taken by Clara is reduced by 30%. This effect lasts until the start of her next turn.",
        "icon": "icon/skill/1107_rank4.png",
        "paramsEido": [
          0.3
        ]
      },
      {
        "id": "110705",
        "name": "A Small Promise",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1107_ultimate.png"
      },
      {
        "id": "110706",
        "name": "Long Company",
        "rank": 6,
        "desc": "After other allies are attacked, Svarog also has a 50% fixed chance to trigger a Counter on the attacker and mark them with a \"Mark of Counter.\" When using Ultimate, the number of Enhanced Counters increases by 1.",
        "icon": "icon/skill/1107_rank6.png",
        "paramsEido": [
          0.5,
          1
        ],
        "extraEffects": {
          "Fixed Chance": {
            "desc": "Fixed chance will not be affected by any factor."
          },
          "Counter": {
            "desc": "An effect that automatically triggers when the target is attacked, which unleashes an extra attack on the attacker.\\nCounter is also considered a Follow-Up ATK."
          }
        }
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
        "I Want to Help": {
          "variant1": {
            "skillID": 110701,
            "trigger": "Skill01",
            "name": "I Want to Help",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Physical DMG equal to #1[i]% of Clara's ATK to one designated enemy.",
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
              "Avatar_Klara_00_Skill01_Camera",
              "Avatar_Klara_00_Skill01_Phase01",
              "Avatar_Klara_00_Skill01_Phase02"
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
        "Svarog Watches Over You": {
          "variant1": {
            "skillID": 110702,
            "trigger": "Skill02",
            "name": "Svarog Watches Over You",
            "type": "AoE",
            "slot": "Skill",
            "desc": "Deals Physical DMG equal to #1[i]% of Clara's ATK to all enemies, and additionally deals Physical DMG equal to #2[i]% of Clara's ATK to enemies marked by Svarog with a Mark of Counter.\\nAll Marks of Counter will be removed after this Skill is used.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.975,
                0.975
              ],
              "8": [
                1.05,
                1.05
              ],
              "9": [
                1.125,
                1.125
              ],
              "10": [
                1.2,
                1.2
              ],
              "11": [
                1.26,
                1.26
              ],
              "12": [
                1.32,
                1.32
              ]
            },
            "element": "Physical",
            "attackType": "BPSkill",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Klara_00_Skill02_Camera",
              "Avatar_Klara_00_Skill02_Phase01",
              "Avatar_Klara_00_Skill02_Phase02"
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
        "Promise, Not Command": {
          "variant1": {
            "skillID": 110703,
            "trigger": "Skill03",
            "name": "Promise, Not Command",
            "type": "Enhance",
            "slot": "Ultimate",
            "desc": "After Clara uses Ultimate, DMG dealt to her is reduced by an extra #4[i]%, and she has greatly increased chances of being attacked by enemies for #3[i] turn(s).\\nIn addition, Svarog's Counter is enhanced. When an ally is attacked, Svarog immediately launches a Counter, and its DMG multiplier against the enemy increases by #2[i]%. Enemies adjacent to it take 50% of the DMG dealt to the primary target enemy. Enhanced Counter(s) can take effect #5[i] time(s).",
            "energyCost": 110,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                5,
                1.36,
                2,
                0.2125,
                2
              ],
              "8": [
                5,
                1.44,
                2,
                0.225,
                2
              ],
              "9": [
                5,
                1.52,
                2,
                0.2375,
                2
              ],
              "10": [
                5,
                1.6,
                2,
                0.25,
                2
              ],
              "11": [
                5,
                1.664,
                2,
                0.26,
                2
              ],
              "12": [
                5,
                1.728,
                2,
                0.27,
                2
              ]
            },
            "attackType": "Ultra",
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Klara_00_Skill03_Camera",
              "Avatar_Klara_00_Skill03_EnterReady",
              "Avatar_Klara_00_Skill03_Phase01",
              "Avatar_Klara_00_Skill03_Phase02"
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
              "Counter": {
                "desc": "An effect that automatically triggers when the target is attacked, which unleashes an extra attack on the attacker.\\nCounter is also considered a Follow-Up ATK."
              }
            }
          }
        }
      },
      "Talent": {
        "Because We're Family": {
          "variant1": {
            "skillID": 110704,
            "trigger": "SkillP01",
            "name": "Because We're Family",
            "type": "Single Target",
            "slot": "Talent",
            "desc": "Under the protection of Svarog, DMG taken by Clara when hit by enemy attacks is reduced by #3[i]%. Svarog will mark enemies who attack Clara with his Mark of Counter and retaliate with a Counter, dealing Physical DMG equal to #2[i]% of Clara's ATK.",
            "energyCost": null,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                1,
                1.3,
                0.1
              ],
              "8": [
                1,
                1.4,
                0.1
              ],
              "9": [
                1,
                1.5,
                0.1
              ],
              "10": [
                1,
                1.6,
                0.1
              ],
              "11": [
                1,
                1.68,
                0.1
              ],
              "12": [
                1,
                1.76,
                0.1
              ]
            },
            "element": "Physical",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Klara_00_PassiveSkill_Camera",
              "Avatar_Klara_00_PassiveSkill01",
              "Avatar_Klara_00_PassiveSkill01_InsertAbility"
            ],
            "toughnessList": [
              {
                "Value": 30
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
              "Counter": {
                "desc": "An effect that automatically triggers when the target is attacked, which unleashes an extra attack on the attacker.\\nCounter is also considered a Follow-Up ATK."
              }
            }
          }
        }
      },
      "Technique": {
        "A Small Price for Victory": {
          "variant1": {
            "skillID": 110707,
            "trigger": "SkillMaze",
            "name": "A Small Price for Victory",
            "slot": "Technique",
            "desc": "Immediately attacks the enemy. Upon entering battle, the chance Clara will be attacked by enemies increases for #1[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                2,
                5
              ]
            },
            "element": "Physical",
            "attackType": "Maze",
            "skillEffect": "MazeAttack",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Klara_SkillMazeInLevel"
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
        "icon": "icon/skill/1107_basic_atk.png",
        "skillRef": {
          "skillName": "I Want to Help",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1107_skill.png",
        "skillRef": {
          "skillName": "Svarog Watches Over You",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1107_ultimate.png",
        "skillRef": {
          "skillName": "Promise, Not Command",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1107_talent.png",
        "skillRef": {
          "skillName": "Because We're Family",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1107_technique.png",
        "skillRef": {
          "skillName": "A Small Price for Victory",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Kinship",
        "icon": "icon/skill/1107_skilltree1.png",
        "desc": "When attacked, this unit has a #1[i]% fixed chance to dispel 1 debuff placed on them.",
        "params": [
          0.35
        ],
        "extraEffects": {
          "Fixed Chance": {
            "desc": "Fixed chance will not be affected by any factor.",
            "params": [
              0.35
            ]
          },
          "Debuff": {
            "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled.",
            "params": [
              0.35
            ]
          }
        }
      },
      "Point07": {
        "name": "Under Protection",
        "icon": "icon/skill/1107_skilltree2.png",
        "desc": "Increases the chance to resist Crowd Control debuffs by #1[i]%.",
        "params": [
          0.35
        ],
        "extraEffects": {
          "Crowd Control debuff": {
            "desc": "Freeze, Entanglement, Imprisonment, Dominated, Outrage, Strong Reverberation, Alien Dream, Snarelock, Terrified, Action Lock.",
            "params": [
              0.35
            ]
          }
        }
      },
      "Point08": {
        "name": "Revenge",
        "icon": "icon/skill/1107_skilltree3.png",
        "desc": "Increases DMG dealt by Svarog's Counter by #1[i]%.",
        "params": [
          0.3
        ],
        "extraEffects": {
          "Counter": {
            "desc": "An effect that automatically triggers when the target is attacked, which unleashes an extra attack on the attacker.\\nCounter is also considered a Follow-Up ATK.",
            "params": [
              0.3
            ]
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
    "icon": "icon/character/1107.png",
    "preview": "image/character_preview/1107.png",
    "portrait": "image/character_portrait/1107.png",
    "bannerOffsets": [
      28,
      -50,
      0.65,
      28,
      -50,
      0.65,
      28,
      -50,
      0.65
    ],
    "isBuffed": false
  },
  "Hook": {
    "internalID": 1109,
    "name": "Hook",
    "path": "Destruction",
    "element": "Fire",
    "rarity": 4,
    "energyMax": 120,
    "baseStats": {
      "ATKBase": 617.4000000000001,
      "DEFBase": 352.79999999999995,
      "HPBase": 1340.6399999999999,
      "SPDBase": 94,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 125
    },
    "eidolons": [
      {
        "id": "110901",
        "name": "Early to Bed, Early to Rise",
        "rank": 1,
        "desc": "Enhanced Skill deals 20% increased DMG.",
        "icon": "icon/skill/1109_rank1.png",
        "paramsEido": [
          0.2
        ]
      },
      {
        "id": "110902",
        "name": "Happy Tummy, Happy Body",
        "rank": 2,
        "desc": "Extends the duration of Burn caused by Skill by 1 turn(s).",
        "icon": "icon/skill/1109_rank2.png",
        "paramsEido": [
          1
        ]
      },
      {
        "id": "110903",
        "name": "Don't Be Picky, Nothing's Icky",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1109_skill.png"
      },
      {
        "id": "110904",
        "name": "It's Okay to Not Know",
        "rank": 4,
        "desc": "When Talent is triggered, there is a 100% base chance to Burn enemies adjacent to the designated enemy target, equivalent to that of Skill.",
        "icon": "icon/skill/1109_rank4.png",
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
        "id": "110905",
        "name": "Let the Moles' Deeds Be Known",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1109_ultimate.png"
      },
      {
        "id": "110906",
        "name": "Always Ready to Punch and Kick",
        "rank": 6,
        "desc": "Hook deals 20% more DMG to enemies afflicted with Burn.",
        "icon": "icon/skill/1109_rank6.png",
        "paramsEido": [
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
        "Hehe! Don't Get Burned!": {
          "variant1": {
            "skillID": 110901,
            "trigger": "Skill01",
            "name": "Hehe! Don't Get Burned!",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Fire DMG equal to #1[i]% of Hook's ATK to one designated enemy.",
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
              "Avatar_Hook_00_Skill01_Camera",
              "Avatar_Hook_00_Skill01_Phase01",
              "Avatar_Hook_00_Skill01_Phase02"
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
        "Hey! Remember Hook?": {
          "variant1": {
            "skillID": 110902,
            "trigger": "Skill02",
            "name": "Hey! Remember Hook?",
            "type": "Single Target",
            "slot": "Skill",
            "desc": "Deals Fire DMG equal to #1[i]% of Hook's ATK to one designated enemy. In addition, there is a #2[i]% base chance to inflict Burn for #3[i] turn(s).\\nWhen afflicted with Burn, enemies will take Fire DoT equal to #4[i]% of Hook's ATK at the beginning of each turn.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.95,
                1,
                2,
                0.4375
              ],
              "8": [
                2.1,
                1,
                2,
                0.5
              ],
              "9": [
                2.25,
                1,
                2,
                0.575
              ],
              "10": [
                2.4,
                1,
                2,
                0.65
              ],
              "11": [
                2.52,
                1,
                2,
                0.6825
              ],
              "12": [
                2.64,
                1,
                2,
                0.715
              ]
            },
            "element": "Fire",
            "attackType": "BPSkill",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Hook_00_Skill02_Camera",
              "Avatar_Hook_00_Skill02_Phase01",
              "Avatar_Hook_00_Skill02_Phase02"
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
          },
          "variant2": {
            "skillID": 110909,
            "trigger": "Skill21",
            "name": "Hey! Remember Hook?",
            "type": "Blast",
            "slot": "Skill",
            "desc": "Deals Fire DMG equal to #1[i]% of Hook's ATK to one designated enemy, with a #2[i]% base chance to Burn them for #3[i] turn(s). Additionally, deals Fire DMG equal to #5[i]% of Hook's ATK to enemies adjacent to it.\\nWhen afflicted with Burn, enemies will take Fire DoT equal to #4[i]% of Hook's ATK at the beginning of each turn.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                2.275,
                1,
                2,
                0.4375,
                0.65
              ],
              "8": [
                2.45,
                1,
                2,
                0.5,
                0.7
              ],
              "9": [
                2.625,
                1,
                2,
                0.575,
                0.75
              ],
              "10": [
                2.8,
                1,
                2,
                0.65,
                0.8
              ],
              "11": [
                2.94,
                1,
                2,
                0.6825,
                0.84
              ],
              "12": [
                3.08,
                1,
                2,
                0.715,
                0.88
              ]
            },
            "element": "Fire",
            "attackType": "BPSkill",
            "skillEffect": "Blast",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Hook_00_Skill21_Camera",
              "Avatar_Hook_00_Skill21_Phase01",
              "Avatar_Hook_00_Skill21_Phase02"
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
        "Boom! Here Comes the Fire!": {
          "variant1": {
            "skillID": 110903,
            "trigger": "Skill03",
            "name": "Boom! Here Comes the Fire!",
            "type": "Single Target",
            "slot": "Ultimate",
            "desc": "Deals Fire DMG equal to #1[i]% of Hook's ATK to one designated enemy.\\nAfter using Ultimate, the next Skill to be used is Enhanced, which deals DMG to one designated enemy and enemies adjacent to it.",
            "energyCost": 120,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 30,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                3.4
              ],
              "8": [
                3.6
              ],
              "9": [
                3.8
              ],
              "10": [
                4
              ],
              "11": [
                4.16
              ],
              "12": [
                4.32
              ]
            },
            "element": "Fire",
            "attackType": "Ultra",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Hook_00_Skill03_Camera",
              "Avatar_Hook_00_Skill03_EnterReady",
              "Avatar_Hook_00_Skill03_Phase01",
              "Avatar_Hook_00_Skill03_Phase02"
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
        "Ha! Oil to the Flames!": {
          "variant1": {
            "skillID": 110904,
            "trigger": "SkillP01",
            "name": "Ha! Oil to the Flames!",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "When attacking a target afflicted with Burn, deals Fire Additional DMG equal to #1[i]% of Hook's ATK and regenerates #2[i] extra Energy.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.8125,
                5
              ],
              "8": [
                0.875,
                5
              ],
              "9": [
                0.9375,
                5
              ],
              "10": [
                1,
                5
              ],
              "11": [
                1.05,
                5
              ],
              "12": [
                1.1,
                5
              ]
            },
            "element": "Fire",
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Hook_00_PassiveSkill01",
              "Avatar_Hook_00_PassiveSkill01_2"
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
        "Ack! Look at This Mess!": {
          "variant1": {
            "skillID": 110907,
            "trigger": "SkillMaze",
            "name": "Ack! Look at This Mess!",
            "slot": "Technique",
            "desc": "Immediately attacks the enemy. Upon entering battle, Hook deals Fire DMG equal to #4[i]% of her ATK to a random enemy. In addition, there is a #1[i]% base chance to inflict Burn on every enemy for #3[i] turn(s).\\nWhen afflicted with Burn, enemies will take Fire DoT equal to #2[i]% of Hook's ATK at the beginning of each turn.",
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
            "element": "Fire",
            "attackType": "Maze",
            "skillEffect": "MazeAttack",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Hook_00_SkillMazeInLevel"
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
        "icon": "icon/skill/1109_basic_atk.png",
        "skillRef": {
          "skillName": "Hehe! Don't Get Burned!",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1109_skill.png",
        "skillRef": {
          "skillName": "Hey! Remember Hook?",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1109_ultimate.png",
        "skillRef": {
          "skillName": "Boom! Here Comes the Fire!",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1109_talent.png",
        "skillRef": {
          "skillName": "Ha! Oil to the Flames!",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1109_technique.png",
        "skillRef": {
          "skillName": "Ack! Look at This Mess!",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Innocence",
        "icon": "icon/skill/1109_skilltree1.png",
        "desc": "Hook restores HP equal to #1[i]% of her Max HP whenever her Talent is triggered.",
        "params": [
          0.05
        ]
      },
      "Point07": {
        "name": "Naivete",
        "icon": "icon/skill/1109_skilltree2.png",
        "desc": "Increases the chance to resist Crowd Control debuffs by #1[i]%.",
        "params": [
          0.35
        ],
        "extraEffects": {
          "Crowd Control debuff": {
            "desc": "Freeze, Entanglement, Imprisonment, Dominated, Outrage, Strong Reverberation, Alien Dream, Snarelock, Terrified, Action Lock.",
            "params": [
              0.35
            ]
          }
        }
      },
      "Point08": {
        "name": "Playing With Fire",
        "icon": "icon/skill/1109_skilltree3.png",
        "desc": "After using her Ultimate, Hook has her action advanced by #2[i]% and additionally regenerates #1[i] Energy.",
        "params": [
          5,
          0.2
        ],
        "extraEffects": {
          "Action Advanced": {
            "desc": "Reduces the target's waiting interval before the next action.",
            "params": [
              5,
              0.2
            ]
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
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.053
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
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.08
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
    "icon": "icon/character/1109.png",
    "preview": "image/character_preview/1109.png",
    "portrait": "image/character_portrait/1109.png",
    "bannerOffsets": [
      47,
      60.3,
      0.68,
      47,
      60.3,
      0.68,
      47,
      60.3,
      0.68
    ],
    "isBuffed": false
  },
  "Lynx": {
    "internalID": 1110,
    "name": "Lynx",
    "path": "Abundance",
    "element": "Quantum",
    "rarity": 4,
    "energyMax": 100,
    "baseStats": {
      "ATKBase": 493.91999999999996,
      "DEFBase": 551.25,
      "HPBase": 1058.4,
      "SPDBase": 100,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 100
    },
    "eidolons": [
      {
        "id": "111001",
        "name": "Morning of Snow Hike",
        "rank": 1,
        "desc": "When healing allies with HP percentage equal to or lower than 50%, Lynx's Outgoing Healing increases by 20%. This effect also works on continuous healing.",
        "icon": "icon/skill/1110_rank1.png",
        "paramsEido": [
          0.5,
          0.2
        ]
      },
      {
        "id": "111002",
        "name": "Noon of Portable Furnace",
        "rank": 2,
        "desc": "A target with \"Survival Response\" can resist debuff application for 1 time(s).",
        "icon": "icon/skill/1110_rank2.png",
        "paramsEido": [
          1
        ],
        "extraEffects": {
          "Debuff": {
            "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled."
          }
        }
      },
      {
        "id": "111003",
        "name": "Afternoon of Avalanche Beacon",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1110_skill.png"
      },
      {
        "id": "111004",
        "name": "Dusk of Warm Campfire",
        "rank": 4,
        "desc": "When \"Survival Response\" is gained, increases the target's ATK by an amount equal to 3.0% of Lynx's Max HP for 1 turn(s).",
        "icon": "icon/skill/1110_rank4.png",
        "paramsEido": [
          0.03,
          1
        ]
      },
      {
        "id": "111005",
        "name": "Night of Aurora Tea",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1110_ultimate.png"
      },
      {
        "id": "111006",
        "name": "Dawn of Explorers' Chart",
        "rank": 6,
        "desc": "Additionally boosts the Max HP increasing effect of \"Survival Response\" by an amount equal to 6.0% of Lynx's Max HP and increases Effect RES by 30%.",
        "icon": "icon/skill/1110_rank6.png",
        "paramsEido": [
          0.06,
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
        "Ice Crampon Technique": {
          "variant1": {
            "skillID": 111001,
            "trigger": "Skill01",
            "name": "Ice Crampon Technique",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Quantum DMG equal to #1[i]% of this character's Max HP to one designated enemy.",
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
            "element": "Quantum",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Lynx_00_Skill01_Phase01",
              "Avatar_Lynx_00_Skill01_Phase02",
              "Avatar_Lynx_00_Skill01_Camera"
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
        "Salted Camping Cans": {
          "variant1": {
            "skillID": 111002,
            "trigger": "Skill02",
            "name": "Salted Camping Cans",
            "type": "Restore",
            "slot": "Skill",
            "desc": "Applies \"Survival Response\" to a single target ally and increases their Max HP by #1[f1]% of Lynx's Max HP plus #2[i]. If the target ally is a character on the Path of Destruction or Preservation, the chance of them being attacked by enemies will greatly increase. \"Survival Response\" lasts for #3[i] turn(s).\\nRestores the target's HP by #4[f1]% of Lynx's Max HP plus #5[i].",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.065625,
                166.25,
                2,
                0.108,
                266,
                5
              ],
              "8": [
                0.06875,
                177.5,
                2,
                0.112,
                284,
                5
              ],
              "9": [
                0.071875,
                188.75,
                2,
                0.116,
                302,
                5
              ],
              "10": [
                0.075,
                200,
                2,
                0.12,
                320,
                5
              ],
              "11": [
                0.0775,
                211.25,
                2,
                0.124,
                338,
                5
              ],
              "12": [
                0.08,
                222.5,
                2,
                0.128,
                356,
                5
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Restore",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Lynx_00_Skill02_Phase01",
              "Avatar_Lynx_00_Skill02_Phase02",
              "Avatar_Lynx_00_Skill02_Camera_Self",
              "Avatar_Lynx_00_Skill02_Camera_Other"
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
        "Snowfield First Aid": {
          "variant1": {
            "skillID": 111003,
            "trigger": "Skill03",
            "name": "Snowfield First Aid",
            "type": "Restore",
            "slot": "Ultimate",
            "desc": "Dispels #1[i] debuff(s) from all allies and immediately restores their respective HP by an amount equal to #2[f1]% of Lynx's Max HP plus #3[i].",
            "energyCost": 100,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                1,
                0.1215,
                299.25
              ],
              "8": [
                1,
                0.126,
                319.5
              ],
              "9": [
                1,
                0.1305,
                339.75
              ],
              "10": [
                1,
                0.135,
                360
              ],
              "11": [
                1,
                0.1395,
                380.25
              ],
              "12": [
                1,
                0.144,
                400.5
              ]
            },
            "attackType": "Ultra",
            "skillEffect": "Restore",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Lynx_00_Skill03_EnterReady",
              "Avatar_Lynx_00_Skill03_Phase01",
              "Avatar_Lynx_00_Skill03_Phase02",
              "Avatar_Lynx_00_Skill03_Camera"
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
      "Talent": {
        "Outdoor Survival Experience": {
          "variant1": {
            "skillID": 111004,
            "trigger": "SkillP01",
            "name": "Outdoor Survival Experience",
            "type": "Restore",
            "slot": "Talent",
            "desc": "When using Lynx's Skill or Ultimate, applies continuous healing to the target ally for #1[i] turn(s), restoring the target ally's HP by an amount equal to #2[f1]% of Lynx's Max HP plus #3[i] at the start of each turn. If the target has \"Survival Response,\" the continuous healing effect additionally restores HP by an amount equal to #4[f1]% of Lynx's Max HP plus #5[i].",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                2,
                0.0324,
                79.8,
                0.0405,
                99.75
              ],
              "8": [
                2,
                0.0336,
                85.2,
                0.042,
                106.5
              ],
              "9": [
                2,
                0.0348,
                90.6,
                0.0435,
                113.25
              ],
              "10": [
                2,
                0.036,
                96,
                0.044999998,
                120
              ],
              "11": [
                2,
                0.0372,
                101.4,
                0.0465,
                126.75
              ],
              "12": [
                2,
                0.038399998,
                106.8,
                0.048,
                133.5
              ]
            },
            "skillEffect": "Restore",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Lynx_00_PassiveSkill01"
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
        "Chocolate Energy Bar": {
          "variant1": {
            "skillID": 111007,
            "trigger": "SkillMaze",
            "name": "Chocolate Energy Bar",
            "type": "Restore",
            "slot": "Technique",
            "desc": "After Lynx uses her Technique, at the start of the next battle, all allies are granted her Talent's continuous healing effect, lasting for #1[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                2
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Restore",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Lynx_00_SkillMazeInLevel"
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
        "icon": "icon/skill/1110_basic_atk.png",
        "skillRef": {
          "skillName": "Ice Crampon Technique",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1110_skill.png",
        "skillRef": {
          "skillName": "Salted Camping Cans",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1110_ultimate.png",
        "skillRef": {
          "skillName": "Snowfield First Aid",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1110_talent.png",
        "skillRef": {
          "skillName": "Outdoor Survival Experience",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1110_technique.png",
        "skillRef": {
          "skillName": "Chocolate Energy Bar",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Advance Surveying",
        "icon": "icon/skill/1110_skilltree1.png",
        "desc": "After a target with \"Survival Response\" is hit, Lynx regenerates #1[i] Energy immediately.",
        "params": [
          2
        ]
      },
      "Point07": {
        "name": "Exploration Techniques",
        "icon": "icon/skill/1110_skilltree2.png",
        "desc": "Increases the chance to resist Crowd Control debuffs by #1[i]%.",
        "params": [
          0.35
        ],
        "extraEffects": {
          "Crowd Control debuff": {
            "desc": "Freeze, Entanglement, Imprisonment, Dominated, Outrage, Strong Reverberation, Alien Dream, Snarelock, Terrified, Action Lock.",
            "params": [
              0.35
            ]
          }
        }
      },
      "Point08": {
        "name": "Survival in the Extreme",
        "icon": "icon/skill/1110_skilltree3.png",
        "desc": "Extends the duration of the continuous healing effect granted by Talent for #1[i] turn(s).",
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
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.05
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
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.075
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
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.1
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
    "icon": "icon/character/1110.png",
    "preview": "image/character_preview/1110.png",
    "portrait": "image/character_portrait/1110.png",
    "bannerOffsets": [
      -44,
      42,
      0.56,
      -44,
      42,
      0.56,
      -44,
      42,
      0.56
    ],
    "isBuffed": false
  },
  "Luka": {
    "internalID": 1111,
    "name": "Luka",
    "path": "Nihility",
    "element": "Physical",
    "rarity": 4,
    "energyMax": 130,
    "baseStats": {
      "ATKBase": 582.1199999999999,
      "DEFBase": 485.1,
      "HPBase": 917.28,
      "SPDBase": 103,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 100
    },
    "eidolons": [
      {
        "id": "111101",
        "name": "Fighting Endlessly",
        "rank": 1,
        "desc": "When Luka takes action, if the target enemy is Bleeding, increases DMG dealt by Luka by 15% for 2 turn(s).",
        "icon": "icon/skill/1111_rank1.png",
        "paramsEido": [
          0.15,
          2
        ]
      },
      {
        "id": "111102",
        "name": "The Enemy is Weak, I am Strong",
        "rank": 2,
        "desc": "If the Skill hits an enemy target with Physical Weakness, gain 1 stack(s) of Fighting Will.",
        "icon": "icon/skill/1111_rank2.png",
        "paramsEido": [
          1
        ]
      },
      {
        "id": "111103",
        "name": "Born for the Ring",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1111_skill.png"
      },
      {
        "id": "111104",
        "name": "Never Turning Back",
        "rank": 4,
        "desc": "For every stack of Fighting Will obtained, increases ATK by 5%, stacking up to 4 time(s).",
        "icon": "icon/skill/1111_rank4.png",
        "paramsEido": [
          0.05,
          4
        ]
      },
      {
        "id": "111105",
        "name": "The Spirit of Wildfire",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1111_ultimate.png"
      },
      {
        "id": "111106",
        "name": "A Champion's Applause",
        "rank": 6,
        "desc": "After the Enhanced Basic ATK's \"Rising Uppercut\" hits a Bleeding enemy target, the Bleed status will immediately deal DMG 1 time equal to 8% of the original DMG for every hit of Direct Punch already unleashed during the current Enhanced Basic ATK.",
        "icon": "icon/skill/1111_rank6.png",
        "paramsEido": [
          0.08
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
        "Direct Punch": {
          "variant1": {
            "skillID": 111101,
            "trigger": "Skill01",
            "name": "Direct Punch",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Physical DMG equal to #1[i]% of Luka's ATK to one designated enemy.",
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
              "Avatar_Luka_Skill01_Phase01",
              "Avatar_Luka_Skill01_Phase02",
              "Avatar_Luka_00_Skill01_Camera"
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
        "Sky-Shatter Fist": {
          "variant1": {
            "skillID": 111108,
            "trigger": "Skill11",
            "name": "Sky-Shatter Fist",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Consumes 2 stacks of \"Fighting Will.\" First, uses \"Direct Punch\" to deal 3 hits, with each hit dealing Physical DMG equal to #1[i]% of Luka's ATK to one designated enemy target.\\nThen, uses \"Rising Uppercut\" to deal 1 hit, dealing Physical DMG equal to #2[i]% of Luka's ATK to the designated enemy target.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "6": [
                0.2,
                0.8
              ],
              "7": [
                0.22,
                0.88
              ],
              "8": [
                0.24,
                0.96
              ]
            },
            "element": "Physical",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Luka_Skill11_Phase01",
              "Avatar_Luka_Skill11_Phase02",
              "Avatar_Luka_Skill11_End_Camera",
              "Avatar_Luka_Skill11_Camera",
              "Avatar_Luka_Skill11_Loop_Camera",
              "Avatar_Luka_Skill11_Loop2_Camera"
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
      "Skill": {
        "Lacerating Fist": {
          "variant1": {
            "skillID": 111102,
            "trigger": "Skill02",
            "name": "Lacerating Fist",
            "type": "Single Target",
            "slot": "Skill",
            "desc": "Deals Physical DMG equal to #1[i]% of Luka's ATK to one designated enemy target. In addition, there is a #2[i]% base chance to inflict Bleed on them, lasting for #5[i] turn(s).\\nWhile Bleeding, the enemy will take #3[f1]% of their Max HP as Physical DoT at the start of each turn. This DMG will not exceed more than #4[i]% of Luka's ATK.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.975,
                1,
                0.24,
                2.275,
                3
              ],
              "8": [
                1.05,
                1,
                0.24,
                2.6,
                3
              ],
              "9": [
                1.125,
                1,
                0.24,
                2.99,
                3
              ],
              "10": [
                1.2,
                1,
                0.24,
                3.38,
                3
              ],
              "11": [
                1.26,
                1,
                0.24,
                3.549,
                3
              ],
              "12": [
                1.32,
                1,
                0.24,
                3.718,
                3
              ]
            },
            "element": "Physical",
            "attackType": "BPSkill",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Luka_Skill02_Phase01",
              "Avatar_Luka_Skill02_Phase02",
              "Avatar_Luka_Skill02_Camera"
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
      },
      "Ultimate": {
        "Coup de Grâce": {
          "variant1": {
            "skillID": 111103,
            "trigger": "Skill03",
            "name": "Coup de Grâce",
            "type": "Single Target",
            "slot": "Ultimate",
            "desc": "Receives #5[i] stack(s) of \"Fighting Will,\" with a #2[i]% base chance to increase one designated enemy target's DMG received by #3[f1]% for #4[i] turn(s). Then, deals Physical DMG equal to #1[i]% of Luka's ATK to the target.",
            "energyCost": 130,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 30,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                2.805,
                1,
                0.17,
                3,
                2
              ],
              "8": [
                2.97,
                1,
                0.18,
                3,
                2
              ],
              "9": [
                3.135,
                1,
                0.19,
                3,
                2
              ],
              "10": [
                3.3,
                1,
                0.2,
                3,
                2
              ],
              "11": [
                3.432,
                1,
                0.208,
                3,
                2
              ],
              "12": [
                3.564,
                1,
                0.216,
                3,
                2
              ]
            },
            "element": "Physical",
            "attackType": "Ultra",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Luka_Skill03_Phase01",
              "Avatar_Luka_Skill03_Phase02",
              "Avatar_Luka_00_Skill03_Camera",
              "Avatar_Luka_Skill03_EnterReady"
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
        "Flying Sparks": {
          "variant1": {
            "skillID": 111104,
            "trigger": "SkillP01",
            "name": "Flying Sparks",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "After Luka uses his Basic ATK \"Direct Punch\" or Skill \"Lacerating Fist,\" he receives #1[i] stack of Fighting Will, up to 4 stacks. When he has 2 or more stacks of Fighting Will, his Basic ATK \"Direct Punch\" is enhanced to \"Sky-Shatter Fist.\" After his Enhanced Basic ATK's \"Rising Uppercut\" hits a Bleeding enemy target, the Bleed status will immediately deal DMG for 1 time equal to #2[i]% of the original DMG to the target. At the start of battle, Luka will possess 1 stack of Fighting Will.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                1,
                0.78625
              ],
              "8": [
                1,
                0.8075
              ],
              "9": [
                1,
                0.82875
              ],
              "10": [
                1,
                0.85
              ],
              "11": [
                1,
                0.867
              ],
              "12": [
                1,
                0.884
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Luka_PassiveSkill01"
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
        "Anticipator": {
          "variant1": {
            "skillID": 111107,
            "trigger": "SkillMaze",
            "name": "Anticipator",
            "slot": "Technique",
            "desc": "Immediately attacks the enemy. Upon entering battle, Luka deals Physical DMG equal to #1[i]% of his ATK to a random single enemy with a #2[i]% base chance to inflict his Skill's Bleed effect on the target. Then, Luka gains 1 additional stack of Fighting Will.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.5,
                1
              ]
            },
            "element": "Physical",
            "attackType": "Maze",
            "skillEffect": "MazeAttack",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Luka_00_SkillMazeInLevel"
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
        "icon": "icon/skill/1111_basic_atk.png",
        "skillRef": {
          "skillName": "Direct Punch",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1111_skill.png",
        "skillRef": {
          "skillName": "Lacerating Fist",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1111_ultimate.png",
        "skillRef": {
          "skillName": "Coup de Grâce",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1111_talent.png",
        "skillRef": {
          "skillName": "Flying Sparks",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1111_technique.png",
        "skillRef": {
          "skillName": "Anticipator",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Kinetic Overload",
        "icon": "icon/skill/1111_skilltree1.png",
        "desc": "When using Skill, immediately dispels #1[i] buff(s) from the enemy target.",
        "params": [
          1
        ],
        "extraEffects": {
          "Buff": {
            "desc": "Can buff combat ability for a period of time, which can be dispelled unless otherwise specified.",
            "params": [
              1
            ]
          }
        }
      },
      "Point07": {
        "name": "Cycle Braking",
        "icon": "icon/skill/1111_skilltree2.png",
        "desc": "For every stack of Fighting Will obtained, additionally regenerates #1[i] Energy.",
        "params": [
          3
        ]
      },
      "Point08": {
        "name": "Crush Fighting Will",
        "icon": "icon/skill/1111_skilltree3.png",
        "desc": "When using Enhanced Basic ATK, every hit of \"Direct Punch\" has a #1[i]% fixed chance for Luka to use 1 additional hit. This effect does not apply to additional hits generated in this way.",
        "params": [
          0.5
        ],
        "extraEffects": {
          "Fixed Chance": {
            "desc": "Fixed chance will not be affected by any factor.",
            "params": [
              0.5
            ]
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
        "name": "DEF Boost",
        "icon": "icon/property/IconDefence.png",
        "stats": {
          "DEF%": 0.075
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
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1111.png",
    "preview": "image/character_preview/1111.png",
    "portrait": "image/character_portrait/1111.png",
    "bannerOffsets": [
      102,
      -95,
      0.7,
      102,
      -95,
      0.7,
      102,
      -95,
      0.7
    ],
    "isBuffed": false
  },
  "Qingque": {
    "internalID": 1201,
    "name": "Qingque",
    "path": "Erudition",
    "element": "Quantum",
    "rarity": 4,
    "energyMax": 140,
    "baseStats": {
      "ATKBase": 652.6800000000001,
      "DEFBase": 441,
      "HPBase": 1023.12,
      "SPDBase": 98,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 75
    },
    "eidolons": [
      {
        "id": "120101",
        "name": "Rise Through the Tiles",
        "rank": 1,
        "desc": "Ultimate deals 10% more DMG.",
        "icon": "icon/skill/1201_rank1.png",
        "paramsEido": [
          0.1
        ]
      },
      {
        "id": "120102",
        "name": "Sleep on the Tiles",
        "rank": 2,
        "desc": "Every time Draw Tile is triggered, Qingque immediately regenerates 1 Energy.",
        "icon": "icon/skill/1201_rank2.png",
        "paramsEido": [
          1
        ]
      },
      {
        "id": "120103",
        "name": "Read Between the Tiles",
        "rank": 3,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1201_ultimate.png"
      },
      {
        "id": "120104",
        "name": "Right on the Tiles",
        "rank": 4,
        "desc": "After using Skill, there is a 24% fixed chance to gain \"Self-Sufficer,\" lasting until the end of the current turn. \nWhile \"Self-Sufficer\" is active, using Basic ATK or Enhanced Basic ATK immediately launches 1 Follow-Up ATK on the same target, dealing Quantum DMG equal to 100% of Basic ATK DMG or Enhanced Basic ATK DMG.",
        "icon": "icon/skill/1201_rank4.png",
        "paramsEido": [
          0.24
        ],
        "extraEffects": {
          "Fixed Chance": {
            "desc": "Fixed chance will not be affected by any factor."
          },
          "Follow-Up ATK": {
            "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
          }
        }
      },
      {
        "id": "120105",
        "name": "Gambit for the Tiles",
        "rank": 5,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1201_skill.png"
      },
      {
        "id": "120106",
        "name": "Prevail Beyond the Tiles",
        "rank": 6,
        "desc": "Recovers 1 Skill Point after using Enhanced Basic ATK.",
        "icon": "icon/skill/1201_rank6.png"
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
        "Flower Pick": {
          "variant1": {
            "skillID": 120101,
            "trigger": "Skill01",
            "name": "Flower Pick",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Tosses 1 jade tile from the suit with the fewest tiles in hand to deal Quantum DMG equal to #1[i]% of Qingque's ATK to one designated enemy.",
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
              "Avatar_Qingque_00_Skill01_Camera",
              "Avatar_QingQue_00_Skill01_Phase01",
              "Avatar_QingQue_00_Skill01_Phase02",
              "Avatar_Qingque_00_Rank04_ATK"
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
        "Cherry on Top!": {
          "variant1": {
            "skillID": 120108,
            "trigger": "Skill11",
            "name": "Cherry on Top!",
            "type": "Blast",
            "slot": "Basic ATK",
            "desc": "Deals Quantum DMG equal to #1[i]% of Qingque's ATK to one designated enemy, and deals Quantum DMG equal to #2[i]% of Qingque's ATK to enemies adjacent to it.\\n\"Cherry on Top!\" cannot recover Skill Points.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "6": [
                2.4,
                1
              ],
              "7": [
                2.64,
                1.1
              ],
              "8": [
                2.88,
                1.2
              ]
            },
            "element": "Quantum",
            "attackType": "Normal",
            "skillEffect": "Blast",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Qingque_00_Skill011_Camera",
              "Avatar_QingQue_00_Skill11_Phase01",
              "Avatar_Qingque_00_Rank04_ATK_Special",
              "Avatar_QingQue_00_Skill11_Phase02"
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
        "A Scoop of Moon": {
          "variant1": {
            "skillID": 120102,
            "trigger": "Skill02",
            "name": "A Scoop of Moon",
            "type": "Enhance",
            "slot": "Skill",
            "desc": "Immediately draws #1[i] jade tile(s) and increases DMG by #2[i]% until the end of the current turn. This effect can stack up to #3[i] time(s). The turn will not end after this Skill is used.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                2,
                0.2275,
                4
              ],
              "8": [
                2,
                0.245,
                4
              ],
              "9": [
                2,
                0.2625,
                4
              ],
              "10": [
                2,
                0.28,
                4
              ],
              "11": [
                2,
                0.294,
                4
              ],
              "12": [
                2,
                0.308,
                4
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Qingque_00_Skill02_Camera",
              "Avatar_QingQue_00_Skill02_Phase01",
              "Avatar_QingQue_00_Skill02_Phase02",
              "Avatar_Qingque_00_BpInsertAction",
              "Avatar_Qingque_00_BpInsertAction_Camera",
              "Avatar_Qingque_00_BpInsertAction_Tiao",
              "Avatar_Qingque_00_BpInsertAction_Tong",
              "Avatar_Qingque_00_BpInsertAction_Wan"
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
        "A Quartet? Woo-hoo!": {
          "variant1": {
            "skillID": 120103,
            "trigger": "Skill03",
            "name": "A Quartet? Woo-hoo!",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Deals Quantum DMG equal to #1[i]% of Qingque's ATK to all enemies, and obtains 4 jade tiles of the same suit.",
            "energyCost": 140,
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
            "element": "Quantum",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Qingque_00_Skill03_Camera",
              "Avatar_QingQue_00_Skill03_Phase01",
              "Avatar_QingQue_00_Skill03_Phase02",
              "Avatar_Pela_00_Skill03_Cutin",
              "Avatar_Qingque_00_Skill03_EnterReady"
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
        "Celestial Jade": {
          "variant1": {
            "skillID": 120104,
            "trigger": "SkillP01",
            "name": "Celestial Jade",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "When an ally's turn starts, Qingque randomly draws 1 tile from 3 different suits and can hold up to 4 tiles at one time.\\nIf Qingque starts her turn with 4 tiles of the same suit, she consumes all tiles to enter the \"Hidden Hand\" state.\\nWhile in this state, Qingque cannot use her Skill again. At the same time, Qingque's ATK increases by #1[i]%, and her Basic ATK \"Flower Pick\" is enhanced, becoming \"Cherry on Top!\" The \"Hidden Hand\" state ends after using \"Cherry on Top!\".",
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
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_QingQue_00_PassiveSkill01",
              "Avatar_Qingque_00_Bonus",
              "Avatar_Qingque_00_Rank04_ATK_Camera",
              "Avatar_Qingque_00_Bonus_Camera",
              "Avatar_Qingque_00_Rank04_ATK_Special_Camera",
              "Avatar_Qingque_00_UltraGangFix_Camera"
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
        "Game Solitaire": {
          "variant1": {
            "skillID": 120107,
            "trigger": "SkillMaze",
            "name": "Game Solitaire",
            "type": "Enhance",
            "slot": "Technique",
            "desc": "After using Technique, Qingque draws #1[i] jade tile(s) when the battle starts.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                2
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Enhance",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Qingque_00_SkillMazeInLevel"
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
        "icon": "icon/skill/1201_basic_atk.png",
        "skillRef": {
          "skillName": "Flower Pick",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1201_skill.png",
        "skillRef": {
          "skillName": "A Scoop of Moon",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1201_ultimate.png",
        "skillRef": {
          "skillName": "A Quartet? Woo-hoo!",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1201_talent.png",
        "skillRef": {
          "skillName": "Celestial Jade",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1201_technique.png",
        "skillRef": {
          "skillName": "Game Solitaire",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Tile Battle",
        "icon": "icon/skill/1201_skilltree1.png",
        "desc": "Restores 1 Skill Point when using the Skill. This effect can only be triggered 1 time per battle."
      },
      "Point07": {
        "name": "Bide Time",
        "icon": "icon/skill/1201_skilltree2.png",
        "desc": "Using the Skill increases DMG Boost effect of attacks by an extra #1[i]%.",
        "params": [
          0.1
        ]
      },
      "Point08": {
        "name": "Winning Hand",
        "icon": "icon/skill/1201_skilltree3.png",
        "desc": "Qingque's SPD increases by #1[i]% for 1 turn after using the Enhanced Basic ATK.",
        "params": [
          0.1
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
        "name": "DMG Boost: Quantum",
        "icon": "icon/property/IconQuantumAddedRatio.png",
        "stats": {
          "DamageQuantum": 0.032
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
        "name": "DMG Boost: Quantum",
        "icon": "icon/property/IconQuantumAddedRatio.png",
        "stats": {
          "DamageQuantum": 0.048
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
        "name": "DMG Boost: Quantum",
        "icon": "icon/property/IconQuantumAddedRatio.png",
        "stats": {
          "DamageQuantum": 0.064
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
    "icon": "icon/character/1201.png",
    "preview": "image/character_preview/1201.png",
    "portrait": "image/character_portrait/1201.png",
    "bannerOffsets": [
      48,
      15,
      0.58,
      48,
      15,
      0.58,
      48,
      15,
      0.58
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
    ],
    "isBuffed": false
  },
  "Sushang": {
    "internalID": 1206,
    "name": "Sushang",
    "path": "The Hunt",
    "element": "Physical",
    "rarity": 4,
    "energyMax": 120,
    "baseStats": {
      "ATKBase": 564.48,
      "DEFBase": 418.95000000000005,
      "HPBase": 917.28,
      "SPDBase": 107,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 75
    },
    "eidolons": [
      {
        "id": "120601",
        "name": "Cut With Ease",
        "rank": 1,
        "desc": "After using Skill against a Weakness Broken enemy, regenerates 1 Skill Point.",
        "icon": "icon/skill/1206_rank1.png",
        "extraEffects": {
          "Weakness Break State": {
            "desc": "When enemy targets' Toughness is reduced to 0, they will enter the Weakness Break State, which delays their actions."
          }
        }
      },
      {
        "id": "120602",
        "name": "Refine in Toil",
        "rank": 2,
        "desc": "After Sword Stance is triggered, the DMG taken by Sushang is reduced by 20% for 1 turn.",
        "icon": "icon/skill/1206_rank2.png",
        "paramsEido": [
          0.2
        ]
      },
      {
        "id": "120603",
        "name": "Rise From Fame",
        "rank": 3,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1206_ultimate.png"
      },
      {
        "id": "120604",
        "name": "Cleave With Heart",
        "rank": 4,
        "desc": "Sushang's Break Effect increases by 40%.",
        "icon": "icon/skill/1206_rank4.png",
        "paramsEido": [
          0.4
        ]
      },
      {
        "id": "120605",
        "name": "Prevail via Taixu",
        "rank": 5,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1206_skill.png"
      },
      {
        "id": "120606",
        "name": "Dwell Like Water",
        "rank": 6,
        "desc": "Talent's SPD Boost is stackable and can stack up to 2 times. Additionally, after entering battle, Sushang immediately gains 1 stack of her Talent's SPD Boost.",
        "icon": "icon/skill/1206_rank6.png"
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
        "Cloudfencer Art: Starshine": {
          "variant1": {
            "skillID": 120601,
            "trigger": "Skill01",
            "name": "Cloudfencer Art: Starshine",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Physical DMG equal to #1[i]% of Sushang's ATK to one designated enemy.",
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
              "Avatar_Sushang_00_Skill01_Phase01",
              "Avatar_Sushang_00_Skill01_Phase02",
              "Avatar_Sushang_00_Skill01_Camera"
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
        "Cloudfencer Art: Mountainfall": {
          "variant1": {
            "skillID": 120602,
            "trigger": "Skill02",
            "name": "Cloudfencer Art: Mountainfall",
            "type": "Single Target",
            "slot": "Skill",
            "desc": "Deals Physical DMG equal to #1[i]% of Sushang's ATK to one designated enemy. In addition, there is a #3[i]% chance to trigger \"Sword Stance\" on the final hit, dealing Physical Additional DMG equal to #2[i]% of Sushang's ATK to the enemy.\\nIf the enemy is inflicted with Weakness Break, \"Sword Stance\" is guaranteed to trigger.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.70625,
                0.8125,
                0.33
              ],
              "8": [
                1.8375,
                0.875,
                0.33
              ],
              "9": [
                1.96875,
                0.9375,
                0.33
              ],
              "10": [
                2.1,
                1,
                0.33
              ],
              "11": [
                2.205,
                1.05,
                0.33
              ],
              "12": [
                2.31,
                1.1,
                0.33
              ]
            },
            "element": "Physical",
            "attackType": "BPSkill",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Sushang_00_Skill02_Phase01",
              "Avatar_Sushang_00_Skill02_Phase02",
              "Avatar_Sushang_00_Skill02_Camera"
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
              "Additional DMG": {
                "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
              },
              "Weakness Break State": {
                "desc": "When enemy targets' Toughness is reduced to 0, they will enter the Weakness Break State, which delays their actions."
              }
            }
          }
        }
      },
      "Ultimate": {
        "Shape of Taixu: Dawn Herald": {
          "variant1": {
            "skillID": 120603,
            "trigger": "Skill03",
            "name": "Shape of Taixu: Dawn Herald",
            "type": "Single Target",
            "slot": "Ultimate",
            "desc": "Deals Physical DMG equal to #1[i]% of Sushang's ATK to one designated enemy target, and she immediately takes action. In addition, Sushang's ATK increases by #4[i]% and using her Skill has 2 extra chances to trigger \"Sword Stance\" for #2[i] turn(s).\\n\"Sword Stance\" triggered from the extra chances deals #3[i]% of the original DMG.",
            "energyCost": 120,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 30,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                2.72,
                2,
                0.5,
                0.255
              ],
              "8": [
                2.88,
                2,
                0.5,
                0.27
              ],
              "9": [
                3.04,
                2,
                0.5,
                0.285
              ],
              "10": [
                3.2,
                2,
                0.5,
                0.3
              ],
              "11": [
                3.328,
                2,
                0.5,
                0.312
              ],
              "12": [
                3.456,
                2,
                0.5,
                0.324
              ]
            },
            "element": "Physical",
            "attackType": "Ultra",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Sushang_00_Skill03_EnterReady",
              "Avatar_Sushang_00_Skill03_Phase01",
              "Avatar_Sushang_00_Skill03_Phase02",
              "Avatar_Sushang_00_Skill03_Camera"
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
        "Dancing Blade": {
          "variant1": {
            "skillID": 120604,
            "trigger": "SkillP01",
            "name": "Dancing Blade",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "When an enemy has their Weakness Broken on the field, Sushang's SPD increases by #1[f2]% for #2[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.18125,
                2
              ],
              "8": [
                0.1875,
                2
              ],
              "9": [
                0.19375,
                2
              ],
              "10": [
                0.2,
                2
              ],
              "11": [
                0.205,
                2
              ],
              "12": [
                0.21,
                2
              ]
            },
            "element": "Physical",
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Sushang_00_PassiveSkill01"
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
        "Cloudfencer Art: Warcry": {
          "variant1": {
            "skillID": 120607,
            "trigger": "SkillMaze",
            "name": "Cloudfencer Art: Warcry",
            "slot": "Technique",
            "desc": "Immediately attacks the enemy. Upon entering battle, Sushang deals Physical DMG equal to #1[i]% of her ATK to all enemies.",
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
            "element": "Physical",
            "attackType": "Maze",
            "skillEffect": "MazeAttack",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Sushang_00_SkillMazeInLevel"
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
        "icon": "icon/skill/1206_basic_atk.png",
        "skillRef": {
          "skillName": "Cloudfencer Art: Starshine",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1206_skill.png",
        "skillRef": {
          "skillName": "Cloudfencer Art: Mountainfall",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1206_ultimate.png",
        "skillRef": {
          "skillName": "Shape of Taixu: Dawn Herald",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1206_talent.png",
        "skillRef": {
          "skillName": "Dancing Blade",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1206_technique.png",
        "skillRef": {
          "skillName": "Cloudfencer Art: Warcry",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Guileless",
        "icon": "icon/skill/1206_skilltree1.png",
        "desc": "When current HP percentage is #1[i]% or lower, reduces the chance of being attacked by enemies.",
        "params": [
          0.5,
          0.5
        ]
      },
      "Point07": {
        "name": "Riposte",
        "icon": "icon/skill/1206_skilltree2.png",
        "desc": "For every Sword Stance triggered, the DMG dealt by Sword Stance increases by #1[i]%. Stacks up to #2[i] time(s).",
        "params": [
          0.025,
          10
        ]
      },
      "Point08": {
        "name": "Vanquisher",
        "icon": "icon/skill/1206_skilltree3.png",
        "desc": "After using Basic ATK or Skill, if there are enemies on the field that are Weakness Broken, Sushang's action advances by #1[i]%.",
        "params": [
          0.15
        ],
        "extraEffects": {
          "Weakness Break State": {
            "desc": "When enemy targets' Toughness is reduced to 0, they will enter the Weakness Break State, which delays their actions.",
            "params": [
              0.15
            ]
          },
          "Action Advanced": {
            "desc": "Reduces the target's waiting interval before the next action.",
            "params": [
              0.15
            ]
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
    "icon": "icon/character/1206.png",
    "preview": "image/character_preview/1206.png",
    "portrait": "image/character_portrait/1206.png",
    "bannerOffsets": [
      0,
      40,
      0.67,
      0,
      40,
      0.67,
      0,
      40,
      0.67
    ],
    "isBuffed": false
  },
  "Yukong": {
    "internalID": 1207,
    "name": "Yukong",
    "path": "Harmony",
    "element": "Imaginary",
    "rarity": 4,
    "energyMax": 130,
    "baseStats": {
      "ATKBase": 599.76,
      "DEFBase": 374.85,
      "HPBase": 917.28,
      "SPDBase": 107,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 100
    },
    "eidolons": [
      {
        "id": "120701",
        "name": "Aerial Marshal",
        "rank": 1,
        "desc": "At the start of battle, increases the SPD of all allies by 10% for 2 turn(s).",
        "icon": "icon/skill/1207_rank1.png",
        "paramsEido": [
          0.1,
          2
        ]
      },
      {
        "id": "120702",
        "name": "Skyward Command",
        "rank": 2,
        "desc": "When any ally's current energy is equal to its energy limit, Yukong regenerates an additional 5 energy. This effect can only be triggered once for each ally. The trigger count is reset after Yukong uses her Ultimate.",
        "icon": "icon/skill/1207_rank2.png",
        "paramsEido": [
          5
        ]
      },
      {
        "id": "120703",
        "name": "Torrential Fusillade",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1207_skill.png"
      },
      {
        "id": "120704",
        "name": "Zephyrean Echoes",
        "rank": 4,
        "desc": "When \"Roaring Bowstrings\" is active, Yukong deals 30% more DMG to enemies.",
        "icon": "icon/skill/1207_rank4.png",
        "paramsEido": [
          0.3
        ]
      },
      {
        "id": "120705",
        "name": "August Deadshot",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1207_ultimate.png"
      },
      {
        "id": "120706",
        "name": "Bowstring Thunderclap",
        "rank": 6,
        "desc": "When Yukong uses her Ultimate, she immediately gains 1 stack(s) of \"Roaring Bowstrings.\"",
        "icon": "icon/skill/1207_rank6.png",
        "paramsEido": [
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
        "Arrowslinger": {
          "variant1": {
            "skillID": 120701,
            "trigger": "Skill01",
            "name": "Arrowslinger",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals #1[i]% of Yukong's ATK as Imaginary DMG to a target enemy.",
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
              "Avatar_Yukong_00_Skill01_Camera",
              "Avatar_Yukong_00_Skill01_Camera_V2",
              "Avatar_Yukong_00_Skill01_Phase01",
              "Avatar_Yukong_00_Skill01_Phase02"
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
        "Emboldening Salvo": {
          "variant1": {
            "skillID": 120702,
            "trigger": "Skill02",
            "name": "Emboldening Salvo",
            "type": "Support",
            "slot": "Skill",
            "desc": "Obtains #1[i] stack(s) of \"Roaring Bowstrings\" (to a maximum of 2 stacks). When \"Roaring Bowstrings\" is active, the ATK of all allies increases by #2[i]%, and every time an ally's turn (including Yukong's) ends, Yukong loses 1 stack of \"Roaring Bowstrings.\"\\nWhen it's the turn where Yukong gains \"Roaring Bowstrings\" by using Skill, \"Roaring Bowstrings\" will not be removed.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                2,
                0.65
              ],
              "8": [
                2,
                0.7
              ],
              "9": [
                2,
                0.75
              ],
              "10": [
                2,
                0.8
              ],
              "11": [
                2,
                0.84
              ],
              "12": [
                2,
                0.88
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Yukong_00_Skill02_Camera",
              "Avatar_Yukong_00_Skill02_Phase01",
              "Avatar_Yukong_00_Skill02_Phase02",
              "Avatar_Yukong_00_Skill02_AddFlower",
              "Avatar_Yukong_00_Skill02_CountDown"
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
        "Diving Kestrel": {
          "variant1": {
            "skillID": 120703,
            "trigger": "Skill03",
            "name": "Diving Kestrel",
            "type": "Single Target",
            "slot": "Ultimate",
            "desc": "If \"Roaring Bowstrings\" is active on Yukong when her Ultimate is used, additionally increases all allies' CRIT Rate by #2[f1]% and CRIT DMG by #3[i]%. At the same time, deals Imaginary DMG equal to #1[i]% of Yukong's ATK to one designated enemy.",
            "energyCost": 130,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 30,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                3.23,
                0.25375,
                0.5525
              ],
              "8": [
                3.42,
                0.2625,
                0.585
              ],
              "9": [
                3.61,
                0.27125,
                0.6175
              ],
              "10": [
                3.8,
                0.28,
                0.65
              ],
              "11": [
                3.952,
                0.287,
                0.676
              ],
              "12": [
                4.104,
                0.294,
                0.702
              ]
            },
            "element": "Imaginary",
            "attackType": "Ultra",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Yukong_00_Skill03_Camera",
              "Avatar_Yukong_00_Skill03_EnterReady",
              "Avatar_Yukong_00_Skill03_Phase01",
              "Avatar_Yukong_00_Skill03_Phase02",
              "Avatar_Yukong_00_Skill03_AddFlower"
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
        "Seven Layers, One Arrow": {
          "variant1": {
            "skillID": 120704,
            "trigger": "SkillP01",
            "name": "Seven Layers, One Arrow",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "Basic ATK additionally deals Imaginary DMG equal to #1[i]% of Yukong's ATK, and increases the Toughness Reduction of this attack by #2[i]%. This effect can be triggered again after #3[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.65,
                1,
                1
              ],
              "8": [
                0.7,
                1,
                1
              ],
              "9": [
                0.75,
                1,
                1
              ],
              "10": [
                0.8,
                1,
                1
              ],
              "11": [
                0.84,
                1,
                1
              ],
              "12": [
                0.88,
                1,
                1
              ]
            },
            "element": "Imaginary",
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Yukong_00_PassiveSkill01"
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
        "Windchaser": {
          "variant1": {
            "skillID": 120707,
            "trigger": "SkillMaze",
            "name": "Windchaser",
            "type": "Enhance",
            "slot": "Technique",
            "desc": "After using her Technique, Yukong enters Sprint mode for #1[i] seconds. In Sprint mode, her movement speed increases by #2[i]%, and Yukong gains #3[i] stack(s) of \"Roaring Bowstrings\" when she enters battle by attacking enemies.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                20,
                0.35,
                2
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Enhance",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Yukong_00_SkillMazeInLevel"
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
        "icon": "icon/skill/1207_basic_atk.png",
        "skillRef": {
          "skillName": "Arrowslinger",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1207_skill.png",
        "skillRef": {
          "skillName": "Emboldening Salvo",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1207_ultimate.png",
        "skillRef": {
          "skillName": "Diving Kestrel",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1207_talent.png",
        "skillRef": {
          "skillName": "Seven Layers, One Arrow",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1207_technique.png",
        "skillRef": {
          "skillName": "Windchaser",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Archerion",
        "icon": "icon/skill/1207_skilltree1.png",
        "desc": "Yukong can resist 1 debuff application for 1 time. This effect can be triggered again after #1[i] turn(s).",
        "params": [
          2
        ],
        "extraEffects": {
          "Debuff": {
            "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled.",
            "params": [
              2
            ]
          }
        }
      },
      "Point07": {
        "name": "Bowmaster",
        "icon": "icon/skill/1207_skilltree2.png",
        "desc": "When Yukong is on the field, Imaginary DMG dealt by all allies increases by #1[i]%.",
        "params": [
          0.12
        ]
      },
      "Point08": {
        "name": "Majestas",
        "icon": "icon/skill/1207_skilltree3.png",
        "desc": "When \"Roaring Bowstrings\" is active, Yukong regenerates #1[i] additional Energy every time an ally takes action.",
        "params": [
          2
        ]
      },
      "Point09": {
        "name": "DMG Boost: Imaginary",
        "icon": "icon/property/IconImaginaryAddedRatio.png",
        "stats": {
          "DamageImaginary": 0.032
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
        "name": "DMG Boost: Imaginary",
        "icon": "icon/property/IconImaginaryAddedRatio.png",
        "stats": {
          "DamageImaginary": 0.032
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
        "name": "DMG Boost: Imaginary",
        "icon": "icon/property/IconImaginaryAddedRatio.png",
        "stats": {
          "DamageImaginary": 0.048
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
        "name": "DMG Boost: Imaginary",
        "icon": "icon/property/IconImaginaryAddedRatio.png",
        "stats": {
          "DamageImaginary": 0.048
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
        "name": "DMG Boost: Imaginary",
        "icon": "icon/property/IconImaginaryAddedRatio.png",
        "stats": {
          "DamageImaginary": 0.064
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1207.png",
    "preview": "image/character_preview/1207.png",
    "portrait": "image/character_portrait/1207.png",
    "bannerOffsets": [
      87.7,
      34.8,
      0.59,
      87.7,
      34.8,
      0.59,
      87.7,
      34.8,
      0.59
    ],
    "isBuffed": false
  },
  "Guinaifen": {
    "internalID": 1210,
    "name": "Guinaifen",
    "path": "Nihility",
    "element": "Fire",
    "rarity": 4,
    "energyMax": 120,
    "baseStats": {
      "ATKBase": 582.1199999999999,
      "DEFBase": 441,
      "HPBase": 882,
      "SPDBase": 106,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 100
    },
    "eidolons": [
      {
        "id": "121001",
        "name": "Slurping Noodles During Handstand",
        "rank": 1,
        "desc": "When Skill is used, there is a 100% base chance to reduce the attacked target enemy's Effect RES by 10% for 2 turn(s).",
        "icon": "icon/skill/1210_rank1.png",
        "paramsEido": [
          1,
          0.1,
          2
        ],
        "extraEffects": {
          "Base Chance": {
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
          }
        }
      },
      {
        "id": "121002",
        "name": "Brushing Teeth While Whistling",
        "rank": 2,
        "desc": "When an enemy target is being Burned, the DMG multiplier of the Burn status applied by her Basic ATK or Skill increases by 40%.",
        "icon": "icon/skill/1210_rank2.png",
        "paramsEido": [
          0.4
        ]
      },
      {
        "id": "121003",
        "name": "Smashing Boulder on Chest",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1210_skill.png"
      },
      {
        "id": "121004",
        "name": "Blocking Pike with Neck",
        "rank": 4,
        "desc": "Every time the Burn status inflicted by Guinaifen causes DMG, Guinaifen regenerates 2 Energy.",
        "icon": "icon/skill/1210_rank4.png",
        "paramsEido": [
          2
        ]
      },
      {
        "id": "121005",
        "name": "Swallowing Sword to Stomach",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1210_ultimate.png"
      },
      {
        "id": "121006",
        "name": "Catching Bullet with Hands",
        "rank": 6,
        "desc": "Increases the stackable Firekiss count by 1.",
        "icon": "icon/skill/1210_rank6.png",
        "paramsEido": [
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
        "Standing Ovation": {
          "variant1": {
            "skillID": 121001,
            "trigger": "Skill01",
            "name": "Standing Ovation",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Fire DMG equal to #1[i]% of Guinaifen's ATK to one designated enemy.",
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
              "Avatar_Guinaifen_00_Skill01_Camera",
              "Avatar_Guinaifen_00_Skill01_Phase01",
              "Avatar_Guinaifen_00_Skill01_Phase02"
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
        "Blazing Welcome": {
          "variant1": {
            "skillID": 121002,
            "trigger": "Skill02",
            "name": "Blazing Welcome",
            "type": "Blast",
            "slot": "Skill",
            "desc": "Deals Fire DMG equal to #1[i]% of Guinaifen's ATK to one designated enemy and Fire DMG equal to #2[i]% of Guinaifen's ATK to any adjacent enemies, with a #3[i]% base chance to Burn the target and adjacent targets. When Burned, enemies will take a Fire DoT equal to #4[i]% of Guinaifen's ATK at the beginning of each turn, lasting for #5[i] turn(s).",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.975,
                0.325,
                1,
                1.46859,
                2
              ],
              "8": [
                1.05,
                0.35,
                1,
                1.67844,
                2
              ],
              "9": [
                1.125,
                0.375,
                1,
                1.93026,
                2
              ],
              "10": [
                1.2,
                0.4,
                1,
                2.18208,
                2
              ],
              "11": [
                1.26,
                0.42,
                1,
                2.291202,
                2
              ],
              "12": [
                1.32,
                0.44,
                1,
                2.400324,
                2
              ]
            },
            "element": "Fire",
            "attackType": "BPSkill",
            "skillEffect": "Blast",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Guinaifen_00_Skill02_Camera",
              "Avatar_Guinaifen_00_Skill02_Phase01",
              "Avatar_Guinaifen_00_Skill02_Phase02"
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
        "Watch This Showstopper": {
          "variant1": {
            "skillID": 121003,
            "trigger": "Skill03",
            "name": "Watch This Showstopper",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Deals Fire DMG equal to #1[f1]% of Guinaifen's ATK to all enemies. If the target enemy is currently inflicted with Burn, then their Burn status immediately produces DMG equal to #2[i]% of their original DMG.",
            "energyCost": 120,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.02,
                0.845
              ],
              "8": [
                1.08,
                0.87
              ],
              "9": [
                1.14,
                0.895
              ],
              "10": [
                1.2,
                0.92
              ],
              "11": [
                1.248,
                0.94
              ],
              "12": [
                1.296,
                0.96
              ]
            },
            "element": "Fire",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Guinaifen_00_Skill03_Camera",
              "Avatar_Guinaifen_00_Skill03_EnterReady",
              "Avatar_Guinaifen_00_Skill03_Phase01",
              "Avatar_Guinaifen_00_Skill03_Phase02"
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
        "PatrAeon Benefits": {
          "variant1": {
            "skillID": 121004,
            "trigger": "SkillP01",
            "name": "PatrAeon Benefits",
            "type": "Impair",
            "slot": "Talent",
            "desc": "When Guinaifen is on the field, there is a #1[i]% base chance to apply Firekiss to an enemy after their Burn status causes DMG. While inflicted with Firekiss, the enemy receives #4[f1]% increased DMG, which lasts for #5[i] turn(s) and can stack up to #6[i] time(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                1,
                0,
                0,
                0.05875,
                3,
                3
              ],
              "8": [
                1,
                0,
                0,
                0.0625,
                3,
                3
              ],
              "9": [
                1,
                0,
                0,
                0.06625,
                3,
                3
              ],
              "10": [
                1,
                0,
                0,
                0.07,
                3,
                3
              ],
              "11": [
                1,
                0,
                0,
                0.073,
                3,
                3
              ],
              "12": [
                1,
                0,
                0,
                0.076,
                3,
                3
              ]
            },
            "element": "Fire",
            "skillEffect": "Impair",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Guinaifen_00_PassiveSkill01"
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
      "Technique": {
        "Skill Showcase": {
          "variant1": {
            "skillID": 121007,
            "trigger": "SkillMaze",
            "name": "Skill Showcase",
            "slot": "Technique",
            "desc": "Immediately attacks the enemy. After entering battle, deals DMG for #2[i] time(s), dealing Fire DMG equal to #1[i]% of Guinaifen's ATK to a random single enemy target each time, with a #3[i]% base chance of inflicting Firekiss on them.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.5,
                4,
                1
              ]
            },
            "element": "Fire",
            "attackType": "Maze",
            "skillEffect": "MazeAttack",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Guinaifen_00_SkillMazeInLevel"
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
        "icon": "icon/skill/1210_basic_atk.png",
        "skillRef": {
          "skillName": "Standing Ovation",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1210_skill.png",
        "skillRef": {
          "skillName": "Blazing Welcome",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1210_ultimate.png",
        "skillRef": {
          "skillName": "Watch This Showstopper",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1210_talent.png",
        "skillRef": {
          "skillName": "PatrAeon Benefits",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1210_technique.png",
        "skillRef": {
          "skillName": "Skill Showcase",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "High Poles",
        "icon": "icon/skill/1210_skilltree1.png",
        "desc": "Basic ATK has a #1[i]% base chance of inflicting an enemy with a Burn equivalent to that of Skill.",
        "params": [
          0.8
        ],
        "extraEffects": {
          "Base Chance": {
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES.",
            "params": [
              0.8
            ]
          }
        }
      },
      "Point07": {
        "name": "Bladed Hoop",
        "icon": "icon/skill/1210_skilltree2.png",
        "desc": "When the battle begins, Guinaifen's action advances by #1[i]%.",
        "params": [
          0.25
        ],
        "extraEffects": {
          "Action Advanced": {
            "desc": "Reduces the target's waiting interval before the next action.",
            "params": [
              0.25
            ]
          }
        }
      },
      "Point08": {
        "name": "Walking on Knives",
        "icon": "icon/skill/1210_skilltree3.png",
        "desc": "Deals #1[i]% more DMG to Burned enemies.",
        "params": [
          0.2
        ]
      },
      "Point09": {
        "name": "DMG Boost: Fire",
        "icon": "icon/property/IconFireAddedRatio.png",
        "stats": {
          "DamageFire": 0.032
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
        "name": "DMG Boost: Fire",
        "icon": "icon/property/IconFireAddedRatio.png",
        "stats": {
          "DamageFire": 0.032
        }
      },
      "Point12": {
        "name": "Effect Hit Rate Boost",
        "icon": "icon/property/IconStatusProbability.png",
        "stats": {
          "EffectHitRate": 0.04
        }
      },
      "Point13": {
        "name": "DMG Boost: Fire",
        "icon": "icon/property/IconFireAddedRatio.png",
        "stats": {
          "DamageFire": 0.048
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
        "name": "DMG Boost: Fire",
        "icon": "icon/property/IconFireAddedRatio.png",
        "stats": {
          "DamageFire": 0.048
        }
      },
      "Point16": {
        "name": "Effect Hit Rate Boost",
        "icon": "icon/property/IconStatusProbability.png",
        "stats": {
          "EffectHitRate": 0.06
        }
      },
      "Point17": {
        "name": "Break Boost",
        "icon": "icon/property/IconBreakUp.png",
        "stats": {
          "DamageBreak": 0.107
        }
      },
      "Point18": {
        "name": "DMG Boost: Fire",
        "icon": "icon/property/IconFireAddedRatio.png",
        "stats": {
          "DamageFire": 0.064
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1210.png",
    "preview": "image/character_preview/1210.png",
    "portrait": "image/character_portrait/1210.png",
    "bannerOffsets": [
      43,
      -28,
      0.72,
      43,
      -28,
      0.72,
      43,
      -28,
      0.72
    ],
    "isBuffed": false
  },
  "Xueyi": {
    "internalID": 1214,
    "name": "Xueyi",
    "path": "Destruction",
    "element": "Quantum",
    "rarity": 4,
    "energyMax": 120,
    "baseStats": {
      "ATKBase": 599.76,
      "DEFBase": 396.9,
      "HPBase": 1058.4,
      "SPDBase": 103,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 125
    },
    "eidolons": [
      {
        "id": "121401",
        "name": "Dvesha, Inhibited",
        "rank": 1,
        "desc": "Increases the DMG dealt by the Talent's Follow-Up ATK by 40%.",
        "icon": "icon/skill/1214_rank1.png",
        "paramsEido": [
          0.4
        ],
        "extraEffects": {
          "Follow-Up ATK": {
            "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
          }
        }
      },
      {
        "id": "121402",
        "name": "Klesha, Breached",
        "rank": 2,
        "desc": "Talent's Follow-Up ATK Reduces enemy Toughness regardless of Weakness types. At the same time, restores Xueyi's HP by an amount equal to 5% of her Max HP. When breaking Weakness, triggers the Quantum Break Effect.",
        "icon": "icon/skill/1214_rank2.png",
        "paramsEido": [
          0.05
        ],
        "extraEffects": {
          "Follow-Up ATK": {
            "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
          }
        }
      },
      {
        "id": "121403",
        "name": "Duḥkha, Ceased",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1214_skill.png"
      },
      {
        "id": "121404",
        "name": "Karma, Severed",
        "rank": 4,
        "desc": "When using Ultimate, increases Break Effect by 40% for 2 turn(s).",
        "icon": "icon/skill/1214_rank4.png",
        "paramsEido": [
          0.4,
          2
        ]
      },
      {
        "id": "121405",
        "name": "Deva, Enthralled",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1214_ultimate.png"
      },
      {
        "id": "121406",
        "name": "Saṃsāra, Mastered",
        "rank": 6,
        "desc": "The max stack limit for Karma decreases to 6.",
        "icon": "icon/skill/1214_rank6.png",
        "paramsEido": [
          6
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
        "Mara-Sunder Awl": {
          "variant1": {
            "skillID": 121401,
            "trigger": "Skill01",
            "name": "Mara-Sunder Awl",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals #1[i]% of Xueyi's ATK as Quantum DMG to one designated enemy target.",
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
              "Avatar_Xueyi_00_Skill01_Camera",
              "Avatar_Xueyi_00_Skill01_Phase01",
              "Avatar_Xueyi_00_Skill01_Phase02"
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
        "Iniquity Obliteration": {
          "variant1": {
            "skillID": 121402,
            "trigger": "Skill02",
            "name": "Iniquity Obliteration",
            "type": "Blast",
            "slot": "Skill",
            "desc": "Deals Quantum DMG equal to #1[i]% of Xueyi's ATK to one designated enemy, and Quantum DMG equal to #2[i]% of Xueyi's ATK to any adjacent enemies.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.1375,
                0.56875
              ],
              "8": [
                1.225,
                0.6125
              ],
              "9": [
                1.3125,
                0.65625
              ],
              "10": [
                1.4,
                0.7
              ],
              "11": [
                1.47,
                0.735
              ],
              "12": [
                1.54,
                0.77
              ]
            },
            "element": "Quantum",
            "attackType": "BPSkill",
            "skillEffect": "Blast",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Xueyi_00_Skill02_Camera",
              "Avatar_Xueyi_00_Skill02_Phase01",
              "Avatar_Xueyi_00_Skill02_Phase02"
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
        "Divine Castigation": {
          "variant1": {
            "skillID": 121403,
            "trigger": "Skill03",
            "name": "Divine Castigation",
            "type": "Single Target",
            "slot": "Ultimate",
            "desc": "Deals Quantum DMG equal to #1[i]% of Xueyi's ATK to one designated enemy target. This attack ignores Weakness Types and reduces the enemy's Toughness. When the enemy's Weakness is Broken, the Quantum Weakness Break effect is triggered.\\nIn this attack, the more Toughness is reduced, the higher the DMG will be dealt, up to a max of #3[f1]% increase.",
            "energyCost": 120,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 40,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                2.125,
                0.1275,
                0.51
              ],
              "8": [
                2.25,
                0.135,
                0.54
              ],
              "9": [
                2.375,
                0.1425,
                0.57
              ],
              "10": [
                2.5,
                0.15,
                0.6
              ],
              "11": [
                2.6,
                0.156,
                0.624
              ],
              "12": [
                2.7,
                0.162,
                0.648
              ]
            },
            "element": "Quantum",
            "attackType": "Ultra",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Xueyi_00_Skill03_Camera",
              "Avatar_Xueyi_00_Skill03_Phase01",
              "Avatar_Xueyi_00_Skill03_Phase02",
              "Avatar_Xueyi_00_Skill03_EnterReady"
            ],
            "toughnessList": [
              {
                "Value": 120
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
        "Karmic Perpetuation": {
          "variant1": {
            "skillID": 121404,
            "trigger": "SkillP01",
            "name": "Karmic Perpetuation",
            "type": "Bounce",
            "slot": "Talent",
            "desc": "When Xueyi reduces enemy Toughness with attacks, \"Karma\" will be stacked. The more Toughness is reduced, the more stacks of \"Karma\" are added, up to #1[i] stacks.\\nWhen Xueyi's teammates reduce enemy Toughness with attacks, Xueyi gains #3[i] stack(s) of \"Karma.\"\\nWhen \"Karma\" reaches the max number of stacks, consumes all current \"Karma\" stacks and immediately launches Follow-Up ATK against an enemy target, dealing DMG for 3 times, with each time dealing Quantum DMG equal to #2[i]% of Xueyi's ATK to a single random enemy. This Follow-Up ATK will not add \"Karma\" stacks.",
            "energyCost": null,
            "energyRegen": 2,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 5,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                8,
                0.73125,
                1
              ],
              "8": [
                8,
                0.7875,
                1
              ],
              "9": [
                8,
                0.84375,
                1
              ],
              "10": [
                8,
                0.9,
                1
              ],
              "11": [
                8,
                0.945,
                1
              ],
              "12": [
                8,
                0.99,
                1
              ]
            },
            "element": "Quantum",
            "skillEffect": "Bounce",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Xueyi_00_PassiveSkill01",
              "Avatar_Xueyi_00_PassiveAtk_Insert01",
              "Avatar_Xueyi_00_PassiveAtk_Insert02",
              "Avatar_Xueyi_Passive1Atk_Ability_Camera",
              "Avatar_Xueyi_Passive1Atk_Ability_Camera_01"
            ],
            "toughnessList": [
              {
                "Value": 15
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
        "Summary Execution": {
          "variant1": {
            "skillID": 121407,
            "trigger": "SkillMaze",
            "name": "Summary Execution",
            "slot": "Technique",
            "desc": "Immediately attacks the enemy. After entering combat, deals #1[i]% of Xueyi's ATK as Quantum DMG to all enemies.",
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
              "Avatar_Xueyi_00_SkillMazeInLevel"
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
        "icon": "icon/skill/1214_basic_atk.png",
        "skillRef": {
          "skillName": "Mara-Sunder Awl",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1214_skill.png",
        "skillRef": {
          "skillName": "Iniquity Obliteration",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1214_ultimate.png",
        "skillRef": {
          "skillName": "Divine Castigation",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1214_talent.png",
        "skillRef": {
          "skillName": "Karmic Perpetuation",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1214_technique.png",
        "skillRef": {
          "skillName": "Summary Execution",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Clairvoyant Loom",
        "icon": "icon/skill/1214_skilltree1.png",
        "desc": "Increases DMG dealt by this unit by an amount equal to #1[i]% of Break Effect, up to a maximum DMG increase of #2[i]%.",
        "params": [
          1,
          2.4
        ]
      },
      "Point07": {
        "name": "Intrepid Rollerbearings",
        "icon": "icon/skill/1214_skilltree2.png",
        "desc": "If the enemy target's Toughness is equal to or higher than #1[i]% of their Max Toughness, deals #2[i]% more DMG when using Ultimate.",
        "params": [
          0.5,
          0.1
        ]
      },
      "Point08": {
        "name": "Perspicacious Mainframe",
        "icon": "icon/skill/1214_skilltree3.png",
        "desc": "Xueyi will keep a tally of the number of Karma stacks that exceed the max stack limit, up to #1[i] stacks in the tally. After Xueyi's Talent is triggered, she will gain a corresponding number of tallied Karma stacks.",
        "params": [
          6
        ]
      },
      "Point09": {
        "name": "Break Boost",
        "icon": "icon/property/IconBreakUp.png",
        "stats": {
          "DamageBreak": 0.053
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
        "name": "Break Boost",
        "icon": "icon/property/IconBreakUp.png",
        "stats": {
          "DamageBreak": 0.053
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
        "name": "Break Boost",
        "icon": "icon/property/IconBreakUp.png",
        "stats": {
          "DamageBreak": 0.08
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
        "name": "Break Boost",
        "icon": "icon/property/IconBreakUp.png",
        "stats": {
          "DamageBreak": 0.08
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
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.08
        }
      },
      "Point18": {
        "name": "Break Boost",
        "icon": "icon/property/IconBreakUp.png",
        "stats": {
          "DamageBreak": 0.107
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1214.png",
    "preview": "image/character_preview/1214.png",
    "portrait": "image/character_portrait/1214.png",
    "bannerOffsets": [
      29,
      -58,
      0.58,
      29,
      -58,
      0.58,
      29,
      -58,
      0.58
    ],
    "isBuffed": false
  },
  "Hanya": {
    "internalID": 1215,
    "name": "Hanya",
    "path": "Harmony",
    "element": "Physical",
    "rarity": 4,
    "energyMax": 140,
    "baseStats": {
      "ATKBase": 564.48,
      "DEFBase": 352.79999999999995,
      "HPBase": 917.28,
      "SPDBase": 110,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 100
    },
    "eidolons": [
      {
        "id": "121501",
        "name": "One Heart",
        "rank": 1,
        "desc": "When an ally target with Hanya's Ultimate effect defeats an enemy, Hanya's action advances by 15%. This effect can only be triggered 1 time(s) per turn.",
        "icon": "icon/skill/1215_rank1.png",
        "paramsEido": [
          0.15,
          1
        ],
        "extraEffects": {
          "Action Advanced": {
            "desc": "Reduces the target's waiting interval before the next action."
          }
        }
      },
      {
        "id": "121502",
        "name": "Two Views",
        "rank": 2,
        "desc": "After using the Skill, this character's SPD increases by 20% for 1 turn(s).",
        "icon": "icon/skill/1215_rank2.png",
        "paramsEido": [
          0.2,
          1
        ]
      },
      {
        "id": "121503",
        "name": "Three Temptations",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1215_skill.png"
      },
      {
        "id": "121504",
        "name": "Four Truths",
        "rank": 4,
        "desc": "The Ultimate's duration is additionally extended for 1 turn(s).",
        "icon": "icon/skill/1215_rank4.png",
        "paramsEido": [
          1
        ]
      },
      {
        "id": "121505",
        "name": "Five Skandhas",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1215_ultimate.png"
      },
      {
        "id": "121506",
        "name": "Six Reverences",
        "rank": 6,
        "desc": "Increase the DMG Boost effect of the Talent by an additional 10%.",
        "icon": "icon/skill/1215_rank6.png",
        "paramsEido": [
          0.1
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
        "Oracle Brush": {
          "variant1": {
            "skillID": 121501,
            "trigger": "Skill01",
            "name": "Oracle Brush",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Physical DMG equal to #1[i]% of Hanya's ATK to one designated enemy.",
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
              "Avatar_Hanya_00_Skill01_Phase01",
              "Avatar_Hanya_00_Skill01_Camera",
              "Avatar_Hanya_00_Skill01_Phase02"
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
        "Samsara, Locked": {
          "variant1": {
            "skillID": 121502,
            "trigger": "Skill02",
            "name": "Samsara, Locked",
            "type": "Single Target",
            "slot": "Skill",
            "desc": "Deals Physical DMG equal to #1[i]% of Hanya's ATK to one designated enemy target, then applies \"Burden\" to them.\\nFor every 2 Basic ATKs, Skills, or Ultimates allies use on an enemy with \"Burden,\" allies will immediately recover 1 Skill Point. \"Burden\" is only active on the latest target it is applied to, and will be dispelled automatically after the Skill Point recovery effect has been triggered #2[i] times.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.95,
                2
              ],
              "8": [
                2.1,
                2
              ],
              "9": [
                2.25,
                2
              ],
              "10": [
                2.4,
                2
              ],
              "11": [
                2.52,
                2
              ],
              "12": [
                2.64,
                2
              ]
            },
            "element": "Physical",
            "attackType": "BPSkill",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Hanya_00_Skill02_Phase01",
              "Avatar_Hanya_00_Skill02_Camera",
              "Avatar_Hanya_00_Skill02_Phase02"
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
        "Ten-Lords' Decree, All Shall Obey": {
          "variant1": {
            "skillID": 121503,
            "trigger": "Skill03",
            "name": "Ten-Lords' Decree, All Shall Obey",
            "type": "Enhance",
            "slot": "Ultimate",
            "desc": "Increases the SPD of a target ally by #3[f1]% of Hanya's SPD and increases the same target ally's ATK by #1[i]%, lasting for #2[i] turn(s).",
            "energyCost": 140,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.51,
                2,
                0.18125
              ],
              "8": [
                0.54,
                2,
                0.1875
              ],
              "9": [
                0.57,
                2,
                0.19375
              ],
              "10": [
                0.6,
                2,
                0.2
              ],
              "11": [
                0.624,
                2,
                0.205
              ],
              "12": [
                0.648,
                2,
                0.21
              ]
            },
            "attackType": "Ultra",
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Hanya_00_Skill03_EnterReady",
              "Avatar_Hanya_00_Skill03_Phase01",
              "Avatar_Hanya_00_Skill03_Phase02",
              "Avatar_Hanya_00_Skill03_Camera"
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
        "Sanction": {
          "variant1": {
            "skillID": 121504,
            "trigger": "SkillP01",
            "name": "Sanction",
            "type": "Support",
            "slot": "Talent",
            "desc": "When an ally uses a Basic ATK, Skill, or Ultimate on an enemy inflicted with Burden, the DMG dealt increases by #1[i]%, lasting for #2[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.24375,
                2
              ],
              "8": [
                0.2625,
                2
              ],
              "9": [
                0.28125,
                2
              ],
              "10": [
                0.3,
                2
              ],
              "11": [
                0.315,
                2
              ],
              "12": [
                0.33,
                2
              ]
            },
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Hanya_00_PassiveSkill01"
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
        "Netherworld Judgment": {
          "variant1": {
            "skillID": 121507,
            "trigger": "SkillMaze",
            "name": "Netherworld Judgment",
            "slot": "Technique",
            "desc": "Immediately attacks the enemy. After entering battle, applies Burden equivalent to that applied by the Skill to a random enemy.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": []
            },
            "element": "Physical",
            "attackType": "Maze",
            "skillEffect": "MazeAttack",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Hanya_00_SkillMazeInLevel"
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
        "icon": "icon/skill/1215_basic_atk.png",
        "skillRef": {
          "skillName": "Oracle Brush",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1215_skill.png",
        "skillRef": {
          "skillName": "Samsara, Locked",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1215_ultimate.png",
        "skillRef": {
          "skillName": "Ten-Lords' Decree, All Shall Obey",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1215_talent.png",
        "skillRef": {
          "skillName": "Sanction",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1215_technique.png",
        "skillRef": {
          "skillName": "Netherworld Judgment",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Scrivener",
        "icon": "icon/skill/1215_skilltree1.png",
        "desc": "Allies triggering Burden's Skill Point recovery effect have their ATK increased by #1[i]% for #2[i] turn(s).",
        "params": [
          0.1,
          1
        ]
      },
      "Point07": {
        "name": "Netherworld",
        "icon": "icon/skill/1215_skilltree2.png",
        "desc": "If the trigger count for the Burden's Skill Point recovery effect is #1[i] or lower when an enemy with Burden is defeated, then additionally recovers #2[i] Skill Point(s).",
        "params": [
          1,
          1
        ]
      },
      "Point08": {
        "name": "Reanimated",
        "icon": "icon/skill/1215_skilltree3.png",
        "desc": "When Burden's Skill Point recovery effect is triggered, this character regenerates #1[i] Energy.",
        "params": [
          2
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
        "name": "SPD Boost",
        "icon": "icon/property/IconSpeed.png",
        "stats": {
          "SPDFlat": 2
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
        "name": "SPD Boost",
        "icon": "icon/property/IconSpeed.png",
        "stats": {
          "SPDFlat": 3
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
        "name": "SPD Boost",
        "icon": "icon/property/IconSpeed.png",
        "stats": {
          "SPDFlat": 4
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
    "icon": "icon/character/1215.png",
    "preview": "image/character_preview/1215.png",
    "portrait": "image/character_portrait/1215.png",
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
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
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
            "desc": "Freeze, Entanglement, Imprisonment, Dominated, Outrage, Strong Reverberation, Alien Dream, Snarelock, Terrified, Action Lock.",
            "params": [
              0.35
            ]
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
  "Moze": {
    "internalID": 1223,
    "name": "Moze",
    "path": "The Hunt",
    "element": "Lightning",
    "rarity": 4,
    "energyMax": 120,
    "baseStats": {
      "ATKBase": 599.76,
      "DEFBase": 352.79999999999995,
      "HPBase": 811.44,
      "SPDBase": 111,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 75
    },
    "eidolons": [
      {
        "id": "122301",
        "name": "Oathkeeper",
        "rank": 1,
        "desc": "After entering battle, Moze regenerates 20 Energy. Each time the Additional DMG from his Talent is triggered, Moze regenerates 2 Energy.",
        "icon": "icon/skill/1223_rank1.png",
        "paramsEido": [
          2,
          20
        ],
        "extraEffects": {
          "Additional DMG": {
            "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
          }
        }
      },
      {
        "id": "122302",
        "name": "Wrathbearer",
        "rank": 2,
        "desc": "When all allies deal DMG to the enemy target marked as \"Prey,\" increases CRIT DMG by 40%.",
        "icon": "icon/skill/1223_rank2.png",
        "paramsEido": [
          0.4
        ]
      },
      {
        "id": "122303",
        "name": "Deathchaser",
        "rank": 3,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1223_ultimate.png"
      },
      {
        "id": "122304",
        "name": "Heathprowler",
        "rank": 4,
        "desc": "When using Ultimate, increases the DMG dealt by Moze by 30.0%, lasting for 2 turn(s).",
        "icon": "icon/skill/1223_rank4.png",
        "paramsEido": [
          0.3,
          2
        ]
      },
      {
        "id": "122305",
        "name": "Truthbender",
        "rank": 5,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1223_skill.png"
      },
      {
        "id": "122306",
        "name": "Faithbinder",
        "rank": 6,
        "desc": "Increases the DMG multiplier of the Talent's Follow-Up ATK by 25%.",
        "icon": "icon/skill/1223_rank6.png",
        "paramsEido": [
          0.25
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
        "Hurlthorn": {
          "variant1": {
            "skillID": 122301,
            "trigger": "Skill01",
            "name": "Hurlthorn",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Lightning DMG equal to #1[i]% of Moze's ATK to one designated enemy target.",
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
              "Avatar_Moze_00_Skill01_Camera",
              "Avatar_Moze_00_Skill01_Phase01",
              "Avatar_Moze_00_Skill01_Phase02"
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
        "Fleetwinged Raid": {
          "variant1": {
            "skillID": 122302,
            "trigger": "Skill02",
            "name": "Fleetwinged Raid",
            "type": "Single Target",
            "slot": "Skill",
            "desc": "Marks a designated single enemy target as \"Prey\" and deals to it Lightning DMG equal to #1[i]% of Moze's ATK, and gains #2[i] points of Charge.\\nWhen there are no other characters on the field that are capable of combat, Moze cannot use his Skill and dispels the enemy's \"Prey\" state.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.21875,
                9
              ],
              "8": [
                1.3125,
                9
              ],
              "9": [
                1.40625,
                9
              ],
              "10": [
                1.5,
                9
              ],
              "11": [
                1.575,
                9
              ],
              "12": [
                1.65,
                9
              ]
            },
            "element": "Lightning",
            "attackType": "BPSkill",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Moze_00_Skill02_Camera",
              "Avatar_Moze_00_Skill02_Phase01",
              "Avatar_Moze_00_Skill02_Phase02"
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
        "Dash In, Gash Out": {
          "variant1": {
            "skillID": 122303,
            "trigger": "Skill03",
            "name": "Dash In, Gash Out",
            "type": "Single Target",
            "slot": "Ultimate",
            "desc": "Deals Lightning DMG equal to #1[i]% of Moze's ATK to one designated enemy target, and launches the Talent's Follow-Up ATK against this target. If the target is defeated before this Follow-Up ATK is used, then launches the Follow-Up ATK against a random single enemy instead.",
            "energyCost": 120,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 30,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                2.295
              ],
              "8": [
                2.43
              ],
              "9": [
                2.565
              ],
              "10": [
                2.7
              ],
              "11": [
                2.808
              ],
              "12": [
                2.916
              ]
            },
            "element": "Lightning",
            "attackType": "Ultra",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Moze_00_Skill03_Camera",
              "Avatar_Moze_00_Skill03_EnterReady",
              "Avatar_Moze_00_Skill03_Phase01",
              "Avatar_Moze_00_Skill03_Phase02"
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
            "hitSplits": [],
            "extraEffects": {
              "Follow-Up ATK": {
                "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
              }
            }
          }
        }
      },
      "Talent": {
        "Cascading Featherblade": {
          "variant1": {
            "skillID": 122304,
            "trigger": "SkillP01",
            "name": "Cascading Featherblade",
            "type": "Single Target",
            "slot": "Talent",
            "desc": "When \"Prey\" exists on the field, Moze will enter the Departed state.\\nAfter ally targets attack \"Prey,\" Moze will additionally deal 1 instance of Lightning Additional DMG equal to #1[i]% of his ATK and consumes 1 point of Charge. For every #2[i] point(s) of Charge consumed, Moze launches 1 Follow-Up ATK to \"Prey,\" dealing Lightning DMG equal to #3[i]% of his ATK. When Charge reaches 0, dispels the target's \"Prey\" state and resets the tally of Charge points required to launch Follow-Up ATK. Talent's Follow-Up ATK does not consume Charge.",
            "energyCost": null,
            "energyRegen": 10,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.24375,
                3,
                1.3
              ],
              "8": [
                0.2625,
                3,
                1.4
              ],
              "9": [
                0.28125,
                3,
                1.5
              ],
              "10": [
                0.3,
                3,
                1.6
              ],
              "11": [
                0.315,
                3,
                1.68
              ],
              "12": [
                0.33,
                3,
                1.76
              ]
            },
            "element": "Lightning",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Moze_00_PassiveSkill01",
              "Avatar_Moze_00_Insert_Phase01",
              "Avatar_Moze_00_Insert_Camera",
              "Avatar_Moze_00_Insert_Phase01_Rank06Extra",
              "Avatar_Moze_00_Insert_End_Camera"
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
              "Departed": {
                "desc": "Targets in the Departed state cannot be designated as ability targets and will not appear in the Action Order."
              },
              "Additional DMG": {
                "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
              },
              "Follow-Up ATK": {
                "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
              }
            }
          }
        }
      },
      "Technique": {
        "Bated Wings": {
          "variant1": {
            "skillID": 122307,
            "trigger": "SkillMaze",
            "name": "Bated Wings",
            "type": "Enhance",
            "slot": "Technique",
            "desc": "After using Technique, enters the Stealth state for #1[i] second(s). While in Stealth, Moze is undetectable by enemies. If Moze attacks enemies to enter combat while in Stealth, increases DMG by #2[i]%, lasting for #3[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                20,
                0.3,
                2
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Enhance",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Moze_00_SkillMazeInLevel"
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
        "icon": "icon/skill/1223_basic_atk.png",
        "skillRef": {
          "skillName": "Hurlthorn",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1223_skill.png",
        "skillRef": {
          "skillName": "Fleetwinged Raid",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1223_ultimate.png",
        "skillRef": {
          "skillName": "Dash In, Gash Out",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1223_talent.png",
        "skillRef": {
          "skillName": "Cascading Featherblade",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1223_technique.png",
        "skillRef": {
          "skillName": "Bated Wings",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Nightfeather",
        "icon": "icon/skill/1223_skilltree1.png",
        "desc": "After using Talent's Follow-Up ATK, recovers #1[i] Skill Point(s). This effect can trigger again after #2[i] turn(s).",
        "params": [
          1,
          1
        ],
        "extraEffects": {
          "Follow-Up ATK": {
            "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met.",
            "params": [
              1,
              1
            ]
          }
        }
      },
      "Point07": {
        "name": "Daggerhold",
        "icon": "icon/skill/1223_skilltree2.png",
        "desc": "When Moze dispels his Departed state, his action advances by #1[i]%. At the start of each wave, Moze's action advances by #2[i]%.",
        "params": [
          0.2,
          0.3
        ],
        "extraEffects": {
          "Departed": {
            "desc": "Targets in the Departed state cannot be designated as ability targets and will not appear in the Action Order.",
            "params": [
              0.2,
              0.3
            ]
          },
          "Action Advanced": {
            "desc": "Reduces the target's waiting interval before the next action.",
            "params": [
              0.2,
              0.3
            ]
          }
        }
      },
      "Point08": {
        "name": "Vengewise",
        "icon": "icon/skill/1223_skilltree3.png",
        "desc": "When dealing DMG by using Ultimate, it is considered as having launched a Follow-Up ATK. The Follow-Up ATK DMG taken by the \"Prey\" increases by #1[i]%.",
        "params": [
          0.25
        ],
        "extraEffects": {
          "Follow-Up ATK": {
            "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met.",
            "params": [
              0.25
            ]
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
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.06
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
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.08
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
    "icon": "icon/character/1223.png",
    "preview": "image/character_preview/1223.png",
    "portrait": "image/character_portrait/1223.png",
    "bannerOffsets": [
      24.8,
      75.5,
      0.64,
      24.8,
      75.5,
      0.64,
      24.8,
      75.5,
      0.64
    ],
    "isBuffed": false
  },
  "March 7th - The Hunt": {
    "internalID": 1224,
    "name": "March 7th - The Hunt",
    "path": "The Hunt",
    "element": "Imaginary",
    "rarity": 4,
    "energyMax": 110,
    "baseStats": {
      "ATKBase": 564.48,
      "DEFBase": 441,
      "HPBase": 1058.4,
      "SPDBase": 102,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 75
    },
    "eidolons": [
      {
        "id": "122401",
        "name": "My Sword Stirs Starlight",
        "rank": 1,
        "desc": "When Shifu is on the field, increases March 7th's SPD by 10%.",
        "icon": "icon/skill/1224_rank1.png",
        "paramsEido": [
          0.1
        ]
      },
      {
        "id": "122402",
        "name": "Blade Dances on Waves' Fight",
        "rank": 2,
        "desc": "After \"Shifu\" uses Basic ATK or Skill to attack an enemy target, March 7th immediately launches a Follow-Up ATK and deals Imaginary DMG equal to 60% of March 7th's ATK to the primary target of this attack. Additionally, triggers the corresponding effect based on \"Shifu\"'s Path and then gains 1 point(s) of Charge. If there is no primary target available to attack, then she attacks a single random enemy instead. This effect can only trigger once per turn.",
        "icon": "icon/skill/1224_rank2.png",
        "paramsEido": [
          0.6,
          5,
          1,
          15
        ],
        "extraEffects": {
          "Follow-Up ATK": {
            "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
          }
        }
      },
      {
        "id": "122403",
        "name": "Sharp Wit in Martial Might",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1224_skill.png"
      },
      {
        "id": "122404",
        "name": "Being Fabulous Never Frights",
        "rank": 4,
        "desc": "At the start of the turn, regenerates 5 Energy.",
        "icon": "icon/skill/1224_rank4.png",
        "paramsEido": [
          5
        ]
      },
      {
        "id": "122405",
        "name": "Sword Delights, Sugar Blights",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1224_ultimate.png"
      },
      {
        "id": "122406",
        "name": "Me, the Best Girl in Sight",
        "rank": 6,
        "desc": "After using Ultimate, increases the CRIT DMG dealt by the next Enhanced Basic ATK by 50%.",
        "icon": "icon/skill/1224_rank6.png",
        "paramsEido": [
          0.5
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
        "My Sword Zaps Demons": {
          "variant1": {
            "skillID": 122401,
            "trigger": "Skill01",
            "name": "My Sword Zaps Demons",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Imaginary DMG equal to #1[i]% of March 7th's ATK to one designated enemy target and gains #2[i] point(s) of Charge.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
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
              ]
            },
            "element": "Imaginary",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Mar_7th_10_Skill01_Phase01",
              "Avatar_Mar_7th_10_Skill01_Phase02",
              "Avatar_Mar_7th_10_Skill01_Camera",
              "Avatar_Mar_7th_10_Rank02_Insert_SelectTarget",
              "Avatar_Mar_7th_10_Rank02_Insert_Phase01",
              "Avatar_Mar_7th_10_Rank02_Insert_Phase02"
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
        "Brows Be Smitten, Heart Be Bitten": {
          "variant1": {
            "skillID": 122408,
            "trigger": "Skill11",
            "name": "Brows Be Smitten, Heart Be Bitten",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Initially, deals #4[i] hits, each causing Imaginary DMG equal to #1[i]% of March 7th's ATK to one designated enemy target. When dealing the final hit, there is a #2[i]% fixed chance to deal 1 additional hit of DMG, up to a max of #3[i] additional hit(s). Energy regenerated from using Enhanced Basic ATK does not increase with the number of hits.\\nEnhanced Basic ATK cannot recover Skill Points.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 5,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "6": [
                0.8,
                0.6,
                3,
                3
              ],
              "7": [
                0.88,
                0.6,
                3,
                3
              ],
              "8": [
                0.96,
                0.6,
                3,
                3
              ]
            },
            "element": "Imaginary",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Mar_7th_10_Skill11_Phase01",
              "Avatar_Mar_7th_10_Skill11_Phase02",
              "Avatar_Mar_7th_10_Skill11_Camera",
              "Avatar_Mar_7th_10_Skill11_Camera_Alt"
            ],
            "toughnessList": [
              {
                "Value": 15
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
              "Fixed Chance": {
                "desc": "Fixed chance will not be affected by any factor."
              }
            }
          }
        }
      },
      "Skill": {
        "Master, It's Tea Time!": {
          "variant1": {
            "skillID": 122402,
            "trigger": "Skill02",
            "name": "Master, It's Tea Time!",
            "type": "Support",
            "slot": "Skill",
            "desc": "Designates a single ally (excluding this unit) as \"Shifu\" and increases \"Shifu\"'s SPD by #1[f1]%. Only the most recent target of March 7th's Skill is considered as \"Shifu.\"\\n\\n\\nWhenever using Basic ATK or dealing 1 hit of Enhanced Basic ATK's DMG, triggers the corresponding effect if \"Shifu\" with the specified Path is present on the field:\\n\\nErudition, Destruction, The Hunt, Remembrance: Deals Additional DMG (DMG Type based on \"Shifu\"'s Combat Type) equal to #2[i]% of March 7th's ATK.\\n\\nHarmony, Nihility, Preservation, Abundance: Increases the Toughness Reduction of this instance of DMG by #3[i]%.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.085,
                0.1625,
                1
              ],
              "8": [
                0.09,
                0.175,
                1
              ],
              "9": [
                0.095,
                0.1875,
                1
              ],
              "10": [
                0.1,
                0.2,
                1
              ],
              "11": [
                0.104,
                0.21,
                1
              ],
              "12": [
                0.108,
                0.22,
                1
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Mar_7th_10_Skill02_Phase01",
              "Avatar_Mar_7th_10_Skill02_Phase02",
              "Avatar_Mar_7th_10_Skill02_Camera",
              "Avatar_Mar_7th_10_BPExtraTurn",
              "Avatar_Mar_7th_10_Bonus_Camera"
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
        "March 7th, the Apex Heroine": {
          "variant1": {
            "skillID": 122403,
            "trigger": "Skill03",
            "name": "March 7th, the Apex Heroine",
            "type": "Single Target",
            "slot": "Ultimate",
            "desc": "Deals Imaginary DMG equal to #1[i]% of March 7th's ATK to one designated enemy target.\\nIncreases the initial Hits Per Action of the next Enhanced Basic ATK by #2[i] hit(s) and increase the fixed chance of additionally dealing DMG by #3[i]%.",
            "energyCost": 110,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 30,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                2.04,
                2,
                0.2
              ],
              "8": [
                2.16,
                2,
                0.2
              ],
              "9": [
                2.28,
                2,
                0.2
              ],
              "10": [
                2.4,
                2,
                0.2
              ],
              "11": [
                2.496,
                2,
                0.2
              ],
              "12": [
                2.592,
                2,
                0.2
              ]
            },
            "element": "Imaginary",
            "attackType": "Ultra",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Mar_7th_10_Skill03_EnterReady",
              "Avatar_Mar_7th_10_Skill03_Phase01",
              "Avatar_Mar_7th_10_Skill03_Phase02",
              "Avatar_Mar_7th_10_Skill03_Camera"
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
            "hitSplits": [],
            "extraEffects": {
              "Fixed Chance": {
                "desc": "Fixed chance will not be affected by any factor."
              }
            }
          }
        }
      },
      "Talent": {
        "Master, I've Ascended!": {
          "variant1": {
            "skillID": 122404,
            "trigger": "SkillP01",
            "name": "Master, I've Ascended!",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "After Shifu uses an attack or Ultimate, March 7th gains up to 1 point of Charge each time.\\nUpon reaching #1[i] or more points of Charge, March 7th immediately takes action and increases the DMG she deals by #2[i]%. Her Basic ATK gets Enhanced, and her Skill cannot be used. After using Enhanced Basic ATK, consumes #1[i] point(s) of Charge. Charge is capped at #3[i] points.",
            "energyCost": null,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                7,
                0.65,
                10
              ],
              "8": [
                7,
                0.7,
                10
              ],
              "9": [
                7,
                0.75,
                10
              ],
              "10": [
                7,
                0.8,
                10
              ],
              "11": [
                7,
                0.84,
                10
              ],
              "12": [
                7,
                0.88,
                10
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Mar_7th_10_PassiveSkill01",
              "Avatar_Mar_7th_10_Camera_Insert",
              "Avatar_Mar_7th_10_Ready_Special",
              "Avatar_Mar_7th_10_Ready_Special_Camera"
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
        "Feast in One Go": {
          "variant1": {
            "skillID": 122407,
            "trigger": "SkillMaze",
            "name": "Feast in One Go",
            "type": "Enhance",
            "slot": "Technique",
            "desc": "If March 7th is on the team, she gains 1 point of Charge at the start of the next battle whenever a teammate uses Technique, up to a max of #1[i] point(s).\\nAfter using Technique, March 7th regenerates #2[i] Energy when the next battle starts.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                3,
                30
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Enhance",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Mar_7th_10_SkillMazeInLevel"
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
        "icon": "icon/skill/1224_basic_atk.png",
        "skillRef": {
          "skillName": "My Sword Zaps Demons",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1224_skill.png",
        "skillRef": {
          "skillName": "Master, It's Tea Time!",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1224_ultimate.png",
        "skillRef": {
          "skillName": "March 7th, the Apex Heroine",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1224_talent.png",
        "skillRef": {
          "skillName": "Master, I've Ascended!",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1224_technique.png",
        "skillRef": {
          "skillName": "Feast in One Go",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Swan Soar",
        "icon": "icon/skill/1224_skilltree1.png",
        "desc": "When the battle starts, March 7th's action advances by #1[i]%.",
        "params": [
          0.25
        ],
        "extraEffects": {
          "Action Advanced": {
            "desc": "Reduces the target's waiting interval before the next action.",
            "params": [
              0.25
            ]
          }
        }
      },
      "Point07": {
        "name": "Filigree",
        "icon": "icon/skill/1224_skilltree2.png",
        "desc": "March 7th can reduce the Toughness of enemies whose Weakness Type is the same as Shifu's Combat Type. When Breaking Weakness, triggers the Imaginary Weakness Break effect."
      },
      "Point08": {
        "name": "Tide Tamer",
        "icon": "icon/skill/1224_skilltree3.png",
        "desc": "After using Enhanced Basic ATK, increases Shifu's CRIT DMG by #1[i]% and Break Effect by #2[i]%, lasting for #3[i] turn(s).",
        "params": [
          0.6,
          0.36,
          2
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
    "icon": "icon/character/1224.png",
    "preview": "image/character_preview/1224.png",
    "portrait": "image/character_portrait/1224.png",
    "bannerOffsets": [
      31,
      29,
      0.59,
      31,
      29,
      0.59,
      31,
      29,
      0.59
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
            "desc": "Reduces the target's waiting interval before the next action.",
            "params": []
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
  "Ruan Mei": {
    "internalID": 1303,
    "name": "Ruan Mei",
    "path": "Harmony",
    "element": "Ice",
    "rarity": 5,
    "energyMax": 130,
    "baseStats": {
      "ATKBase": 659.7360000000001,
      "DEFBase": 485.1,
      "HPBase": 1086.624,
      "SPDBase": 104,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 100
    },
    "eidolons": [
      {
        "id": "130301",
        "name": "Neuronic Embroidery",
        "rank": 1,
        "desc": "While the Ultimate's Zone is deployed, the DMG dealt by all allies ignores 20% of the target's DEF.",
        "icon": "icon/skill/1303_rank1.png",
        "paramsEido": [
          0.2
        ]
      },
      {
        "id": "130302",
        "name": "Reedside Promenade",
        "rank": 2,
        "desc": "While Ruan Mei is on the field, all allies increase their ATK by 40% when dealing DMG to enemies that are Weakness Broken.",
        "icon": "icon/skill/1303_rank2.png",
        "paramsEido": [
          0.4
        ],
        "extraEffects": {
          "Weakness Break State": {
            "desc": "When enemy targets' Toughness is reduced to 0, they will enter the Weakness Break State, which delays their actions."
          }
        }
      },
      {
        "id": "130303",
        "name": "Viridescent Pirouette",
        "rank": 3,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1303_ultimate.png"
      },
      {
        "id": "130304",
        "name": "Chatoyant Éclat",
        "rank": 4,
        "desc": "When an enemy target's Weakness is Broken, Ruan Mei's Break Effect increases by 100% for 3 turn(s).",
        "icon": "icon/skill/1303_rank4.png",
        "paramsEido": [
          1,
          3
        ]
      },
      {
        "id": "130305",
        "name": "Languid Barrette",
        "rank": 5,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1303_skill.png"
      },
      {
        "id": "130306",
        "name": "Sash Cascade",
        "rank": 6,
        "desc": "Extends the duration of the Ultimate's Zone by 1 turn(s). The Talent's Break DMG multiplier additionally increases by 200%.",
        "icon": "icon/skill/1303_rank6.png",
        "paramsEido": [
          1,
          2
        ],
        "extraEffects": {
          "Break DMG": {
            "desc": "Break DMG increases with higher Break Effect, higher target max Toughness, and higher character levels.\\nBreak DMG cannot CRIT Hit and is not affected by DMG Boost effects."
          }
        }
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
        "Threading Fragrance": {
          "variant1": {
            "skillID": 130301,
            "trigger": "Skill01",
            "name": "Threading Fragrance",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Ice DMG equal to #1[i]% of Ruan Mei's ATK to one designated enemy target.",
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
              "Avatar_RuanMei_00_Skill01_Camera",
              "Avatar_RuanMei_Skill01_Phase01",
              "Avatar_RuanMei_Skill01_Phase02"
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
        "String Sings Slow Swirls": {
          "variant1": {
            "skillID": 130302,
            "trigger": "Skill02",
            "name": "String Sings Slow Swirls",
            "type": "Support",
            "slot": "Skill",
            "desc": "After using her Skill, Ruan Mei gains Overtone, lasting for #3[i] turn(s). This duration decreases by 1 at the start of Ruan Mei's every turn. When Ruan Mei has Overtone, all allies' DMG increases by #1[f1]% and Weakness Break Efficiency increases by #2[i]%.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.26,
                0.5,
                3
              ],
              "8": [
                0.28,
                0.5,
                3
              ],
              "9": [
                0.3,
                0.5,
                3
              ],
              "10": [
                0.32,
                0.5,
                3
              ],
              "11": [
                0.336,
                0.5,
                3
              ],
              "12": [
                0.352,
                0.5,
                3
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_RuanMei_00_Skill02_Camera",
              "Avatar_RuanMei_Skill02_Phase01",
              "Avatar_RuanMei_Skill02_Phase02"
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
        "Petals to Stream, Repose in Dream": {
          "variant1": {
            "skillID": 130303,
            "trigger": "Skill03",
            "name": "Petals to Stream, Repose in Dream",
            "type": "Support",
            "slot": "Ultimate",
            "desc": "Ruan Mei deploys a Zone that lasts for #2[i] turns. The Zone's duration decreases by 1 at the start of her turn.\\nWhile inside the Zone, all allies' All-Type RES PEN increases by #1[f1]% and their attacks apply Thanatoplum Rebloom to the enemies hit.\\nWhen these enemies attempt to recover from Weakness Break, Thanatoplum Rebloom is triggered, extending the duration of their Weakness Break, delaying their action by an amount equal to #3[i]% of Ruan Mei's Break Effect plus #4[i]%, and dealing Break DMG equal to #5[i]% of Ruan Mei's Ice Break DMG.\\nEnemy targets cannot have Thanatoplum Rebloom re-applied to them until they recover from Weakness Break.",
            "energyCost": 130,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.2125,
                2,
                0.2,
                0.1,
                0.425
              ],
              "8": [
                0.225,
                2,
                0.2,
                0.1,
                0.45
              ],
              "9": [
                0.2375,
                2,
                0.2,
                0.1,
                0.475
              ],
              "10": [
                0.25,
                2,
                0.2,
                0.1,
                0.5
              ],
              "11": [
                0.26,
                2,
                0.2,
                0.1,
                0.52
              ],
              "12": [
                0.27,
                2,
                0.2,
                0.1,
                0.54
              ]
            },
            "attackType": "Ultra",
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_RuanMei_00_Skill03_Camera",
              "Avatar_RuanMei_Skill03_EnterReady",
              "Avatar_RuanMei_Skill03_Phase01",
              "Avatar_RuanMei_Skill03_Phase02",
              "Avatar_RuanMei_TriggerImprintEffect"
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
              "Weakness Break State": {
                "desc": "When enemy targets' Toughness is reduced to 0, they will enter the Weakness Break State, which delays their actions."
              },
              "Action Delayed": {
                "desc": "Increases the target's waiting interval before the next action."
              },
              "Break DMG": {
                "desc": "Break DMG increases with higher Break Effect, higher target max Toughness, and higher character levels.\\nBreak DMG cannot CRIT Hit and is not affected by DMG Boost effects."
              }
            }
          }
        }
      },
      "Talent": {
        "Somatotypical Helix": {
          "variant1": {
            "skillID": 130304,
            "trigger": "SkillP01",
            "name": "Somatotypical Helix",
            "type": "Support",
            "slot": "Talent",
            "desc": "Increases SPD by #1[f1]% for all teammates (i.e., excluding this unit). When allies Break an enemy target's Weakness, Ruan Mei deals to this enemy target Break DMG equal to #2[f1]% of her Ice Break DMG.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.0925,
                0.975
              ],
              "8": [
                0.095,
                1.05
              ],
              "9": [
                0.0975,
                1.125
              ],
              "10": [
                0.1,
                1.2
              ],
              "11": [
                0.102,
                1.26
              ],
              "12": [
                0.104,
                1.32
              ]
            },
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_RuanMei_PassiveSkill01"
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
        "Silken Serenade": {
          "variant1": {
            "skillID": 130307,
            "trigger": "SkillMaze",
            "name": "Silken Serenade",
            "type": "Enhance",
            "slot": "Technique",
            "desc": "After using the Technique, gains Silken Serenade. At the start of the next battle, automatically triggers the Skill for #1[i] time(s) without consuming Skill Points.\\nIn Simulated Universe or Divergent Universe, when Ruan Mei has Silken Serenade, the team actively attacking enemies will always be regarded as attacking their Weakness to enter battle, and this attack can reduce all enemies' Toughness regardless of Weakness types. When breaking Weakness, triggers Weakness Break Effect corresponding to the attacker's Type. For every Blessing in possession (up to a max of #4[i] Blessings will be taken into account), additionally increases the Toughness Reduction of this attack by #2[i]%. After breaking an enemy target's Weakness, additionally deals to the enemy target Break DMG equal to #3[i]% of Ruan Mei's Ice Break DMG.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                1,
                1,
                1,
                20
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Enhance",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_RuanMei_00_SkillMazeInLevel",
              "Avatar_RuanMei_00_SkillMazeInLevel_Insert"
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
        "icon": "icon/skill/1303_basic_atk.png",
        "skillRef": {
          "skillName": "Threading Fragrance",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1303_skill.png",
        "skillRef": {
          "skillName": "String Sings Slow Swirls",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1303_ultimate.png",
        "skillRef": {
          "skillName": "Petals to Stream, Repose in Dream",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1303_talent.png",
        "skillRef": {
          "skillName": "Somatotypical Helix",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1303_technique.png",
        "skillRef": {
          "skillName": "Silken Serenade",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Inert Respiration",
        "icon": "icon/skill/1303_skilltree1.png",
        "desc": "Increases Break Effect by #1[i]% for all allies.",
        "params": [
          0.2
        ]
      },
      "Point07": {
        "name": "Days Wane, Thoughts Wax",
        "icon": "icon/skill/1303_skilltree2.png",
        "desc": "Ruan Mei regenerates #1[i] Energy at the start of her turn.",
        "params": [
          5
        ]
      },
      "Point08": {
        "name": "Candle Lights on Still Waters",
        "icon": "icon/skill/1303_skilltree3.png",
        "desc": "In battle, for every #2[i]% of Ruan Mei's Break Effect that exceeds #1[i]%, her Skill additionally increases allies' DMG by #3[i]%, up to a maximum of #4[i]%.",
        "params": [
          1.2,
          0.1,
          0.06,
          0.36
        ]
      },
      "Point09": {
        "name": "Break Boost",
        "icon": "icon/property/IconBreakUp.png",
        "stats": {
          "DamageBreak": 0.053
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
        "name": "Break Boost",
        "icon": "icon/property/IconBreakUp.png",
        "stats": {
          "DamageBreak": 0.053
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
        "name": "Break Boost",
        "icon": "icon/property/IconBreakUp.png",
        "stats": {
          "DamageBreak": 0.08
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
        "name": "Break Boost",
        "icon": "icon/property/IconBreakUp.png",
        "stats": {
          "DamageBreak": 0.08
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
        "name": "Break Boost",
        "icon": "icon/property/IconBreakUp.png",
        "stats": {
          "DamageBreak": 0.107
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1303.png",
    "preview": "image/character_preview/1303.png",
    "portrait": "image/character_portrait/1303.png",
    "bannerOffsets": [
      -6.1,
      23,
      0.55,
      -6.1,
      23,
      0.55,
      -6.1,
      23,
      0.55
    ],
    "isBuffed": false
  },
  "Sparkle": {
    "internalID": 1306,
    "name": "Sparkle",
    "path": "Harmony",
    "element": "Quantum",
    "rarity": 5,
    "energyMax": 110,
    "baseStats": {
      "ATKBase": 523.908,
      "DEFBase": 485.1,
      "HPBase": 1397.088,
      "SPDBase": 101,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 100
    },
    "eidolons": [
      {
        "id": "130601",
        "name": "Suspension of Disbelief",
        "rank": 1,
        "desc": "The Cipher effect granted by the Ultimate lasts for 1 extra turn. All allies with Cipher have their ATK increased by 40%.",
        "icon": "icon/skill/1306_rank1.png",
        "paramsEido": [
          0.4
        ]
      },
      {
        "id": "130602",
        "name": "Purely Fictitious",
        "rank": 2,
        "desc": "Every stack of the Talent's effect allows allies to additionally ignore 8% of the target's DEF when dealing DMG.",
        "icon": "icon/skill/1306_rank2.png",
        "paramsEido": [
          0.08
        ]
      },
      {
        "id": "130603",
        "name": "Pipedream",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1306_skill.png"
      },
      {
        "id": "130604",
        "name": "Life Is a Gamble",
        "rank": 4,
        "desc": "The Ultimate recovers 1 more Skill Point. The Talent additionally increases the Max Skill Points by 1.",
        "icon": "icon/skill/1306_rank4.png"
      },
      {
        "id": "130605",
        "name": "Parallax Truth",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1306_ultimate.png"
      },
      {
        "id": "130606",
        "name": "Narrative Polysemy",
        "rank": 6,
        "desc": "The CRIT DMG Boost effect provided by the Skill additionally increases by an amount equal to 30% of Sparkle's CRIT DMG. When Sparkle uses Skill, her Skill's CRIT DMG Boost effect will apply to all teammates with Cipher. When Sparkle uses her Ultimate, any single ally who benefits from her Skill's CRIT DMG Boost will spread that effect to teammates with Cipher.",
        "icon": "icon/skill/1306_rank6.png",
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
        "Monodrama": {
          "variant1": {
            "skillID": 130601,
            "trigger": "Skill01",
            "name": "Monodrama",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Quantum DMG equal to #1[i]% of Sparkle's ATK to one designated enemy target.",
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
              "Avatar_Sparkle_00_Skill01_Camera",
              "Avatar_Sparkle_00_Skill01_Phase01",
              "Avatar_Sparkle_00_Skill01_Phase02"
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
        "Dreamdiver": {
          "variant1": {
            "skillID": 130602,
            "trigger": "Skill02",
            "name": "Dreamdiver",
            "type": "Support",
            "slot": "Skill",
            "desc": "Increases the CRIT DMG of a single target ally by #1[f1]% of Sparkle's CRIT DMG plus #2[f1]%, lasting for #3[i] turn(s). And at the same time, Advances Forward this ally's action by #4[i]%.\\nWhen Sparkle uses this ability on herself, the Action Advance effect will not trigger.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.195,
                0.3825,
                1,
                0.5
              ],
              "8": [
                0.21,
                0.405,
                1,
                0.5
              ],
              "9": [
                0.225,
                0.4275,
                1,
                0.5
              ],
              "10": [
                0.24,
                0.45,
                1,
                0.5
              ],
              "11": [
                0.252,
                0.468,
                1,
                0.5
              ],
              "12": [
                0.264,
                0.486,
                1,
                0.5
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Sparkle_00_Skill02_Phase01",
              "Avatar_Sparkle_00_Skill02_Self_Camera",
              "Avatar_Sparkle_00_Skill02_Self_Phase02",
              "Avatar_Sparkle_00_Skill02_Others_Camera",
              "Avatar_Sparkle_00_Skill02_Others_Phase02"
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
        "The Hero with a Thousand Faces": {
          "variant1": {
            "skillID": 130603,
            "trigger": "Skill03",
            "name": "The Hero with a Thousand Faces",
            "type": "Support",
            "slot": "Ultimate",
            "desc": "Recovers #2[i] Skill Points for the team and grants all allies Cipher. For allies with Cipher, each stack of the DMG Boost effect provided by Sparkle's Talent additionally increases by #3[f1]%, lasting for #4[i] turns.",
            "energyCost": 110,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                2,
                4,
                0.085,
                2
              ],
              "8": [
                2,
                4,
                0.09,
                2
              ],
              "9": [
                2,
                4,
                0.095,
                2
              ],
              "10": [
                2,
                4,
                0.1,
                2
              ],
              "11": [
                2,
                4,
                0.104,
                2
              ],
              "12": [
                2,
                4,
                0.108,
                2
              ]
            },
            "attackType": "Ultra",
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Sparkle_00_Skill03_Camera",
              "Avatar_Sparkle_00_Skill03_EnterReady",
              "Avatar_Sparkle_00_Skill03_Phase01",
              "Avatar_Sparkle_00_Skill03_Phase02"
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
        "Red Herring": {
          "variant1": {
            "skillID": 130604,
            "trigger": "SkillP01",
            "name": "Red Herring",
            "type": "Support",
            "slot": "Talent",
            "desc": "While Sparkle is on the battlefield, additionally increases the max number of Skill Points by #3[i]. Whenever an ally consumes 1 Skill Point, all allies' DMG dealt increases by #2[f1]%. This effect lasts for #1[i] turn(s) and can stack up to #4[i] time(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                2,
                0.048750002,
                2,
                3
              ],
              "8": [
                2,
                0.052500002,
                2,
                3
              ],
              "9": [
                2,
                0.05625,
                2,
                3
              ],
              "10": [
                2,
                0.06,
                2,
                3
              ],
              "11": [
                2,
                0.063,
                2,
                3
              ],
              "12": [
                2,
                0.066,
                2,
                3
              ]
            },
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Sparkle_00_PassiveSkill_1",
              "Avatar_Sparkle_00_Rank06_BP"
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
        "Unreliable Narrator": {
          "variant1": {
            "skillID": 130607,
            "trigger": "SkillMaze",
            "name": "Unreliable Narrator",
            "type": "Support",
            "slot": "Technique",
            "desc": "Using the Technique grants all allies Misdirect for #2[i] seconds. Characters with Misdirect will not be detected by enemies, and entering battle in the Misdirect state recovers #1[i] Skill Point(s) for the team.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                3,
                20
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Support",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Sparkle_00_SkillMazeInLevel"
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
        "icon": "icon/skill/1306_basic_atk.png",
        "skillRef": {
          "skillName": "Monodrama",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1306_skill.png",
        "skillRef": {
          "skillName": "Dreamdiver",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1306_ultimate.png",
        "skillRef": {
          "skillName": "The Hero with a Thousand Faces",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1306_talent.png",
        "skillRef": {
          "skillName": "Red Herring",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1306_technique.png",
        "skillRef": {
          "skillName": "Unreliable Narrator",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Almanac",
        "icon": "icon/skill/1306_skilltree1.png",
        "desc": "When using Basic ATK, additionally regenerates #1[i] Energy.",
        "params": [
          10
        ]
      },
      "Point07": {
        "name": "Artificial Flower",
        "icon": "icon/skill/1306_skilltree2.png",
        "desc": "The CRIT DMG Boost effect provided by the Skill will be extended until the start of the target's next turn."
      },
      "Point08": {
        "name": "Nocturne",
        "icon": "icon/skill/1306_skilltree3.png",
        "desc": "Increases all allies' ATK by #4[i]%. When there are 1/2/3 Quantum-Type allies in the team, additionally increases Quantum-Type allies' ATK by #1[i]%/#2[i]%/#3[i]%.",
        "params": [
          0.05,
          0.15,
          0.3,
          0.15
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
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.053
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
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.08
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
        "name": "CRIT DMG Boost",
        "icon": "icon/property/IconCriticalDamage.png",
        "stats": {
          "CritDamageBase": 0.107
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
    "icon": "icon/character/1306.png",
    "preview": "image/character_preview/1306.png",
    "portrait": "image/character_portrait/1306.png",
    "bannerOffsets": [
      12,
      51,
      0.54,
      12,
      51,
      0.54,
      12,
      51,
      0.54
    ],
    "isBuffed": false
  },
  "Black Swan": {
    "internalID": 1307,
    "name": "Black Swan",
    "path": "Nihility",
    "element": "Wind",
    "rarity": 5,
    "energyMax": 120,
    "baseStats": {
      "ATKBase": 659.7360000000001,
      "DEFBase": 485.1,
      "HPBase": 1086.624,
      "SPDBase": 102,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 100
    },
    "eidolons": [
      {
        "id": "130701",
        "name": "Seven Pillars of Wisdom",
        "rank": 1,
        "desc": "While Black Swan is active in battle, enemies afflicted with Wind Shear, Bleed, Burn, or Shock will have their corresponding Wind, Physical, Fire, or Lightning RES respectively reduced by 25%.",
        "icon": "icon/skill/1307_rank1.png",
        "paramsEido": [
          0.25
        ]
      },
      {
        "id": "130702",
        "name": "Weep Not For Me, My Lamb",
        "rank": 2,
        "desc": "When an enemy target afflicted with \"Arcana\" is defeated, there is a 100% base chance of inflicting 6 stack(s) of \"Arcana\" on adjacent targets.",
        "icon": "icon/skill/1307_rank2.png",
        "paramsEido": [
          1,
          6
        ],
        "extraEffects": {
          "Base Chance": {
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
          },
          "Arcana": {
            "desc": "Arcana is a debuff that deals DMG over time. This debuff cannot be dispelled.\\nWhile in the Arcana state, the unit is also considered to be in the Wind Shear state and takes Wind DoT at the start of each turn.\\nThe infliction of Arcana ignores the target's Wind Shear RES, Bleed RES, Burn RES, and Shock RES."
          }
        }
      },
      {
        "id": "130703",
        "name": "As Above, So Below",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1307_skill.png"
      },
      {
        "id": "130704",
        "name": "In Tears We Gift",
        "rank": 4,
        "desc": "While in the Epiphany state, enemy targets have their Effect RES reduced by 10% and Black Swan regenerates 8 Energy at the start of these targets' turns or when they are defeated. This Energy Regeneration effect can only trigger up to 1 time while Epiphany lasts. The trigger count is reset when Epiphany is applied again.",
        "icon": "icon/skill/1307_rank4.png",
        "paramsEido": [
          0.1,
          8
        ]
      },
      {
        "id": "130705",
        "name": "Linnutee Flyway",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1307_ultimate.png"
      },
      {
        "id": "130706",
        "name": "Pantheon Merciful, Masses Pitiful",
        "rank": 6,
        "desc": "When an enemy target is attacked by Black Swan's teammates, Black Swan has a 65% base chance of inflicting 1 stack of \"Arcana\" on the target.\nEvery time Black Swan inflicts \"Arcana\" on an enemy target, there is a 50% fixed chance to additionally increase the number of \"Arcana\" stacked this time by 1.",
        "icon": "icon/skill/1307_rank6.png",
        "paramsEido": [
          0.5,
          0.65,
          1
        ],
        "extraEffects": {
          "Base Chance": {
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
          },
          "Arcana": {
            "desc": "Arcana is a debuff that deals DMG over time. This debuff cannot be dispelled.\\nWhile in the Arcana state, the unit is also considered to be in the Wind Shear state and takes Wind DoT at the start of each turn.\\nThe infliction of Arcana ignores the target's Wind Shear RES, Bleed RES, Burn RES, and Shock RES."
          },
          "Fixed Chance": {
            "desc": "Fixed chance will not be affected by any factor."
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
        "Percipience, Silent Dawn": {
          "variant1": {
            "skillID": 130701,
            "trigger": "Skill01",
            "name": "Percipience, Silent Dawn",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Wind DMG equal to #1[i]% of Black Swan's ATK to one designated enemy target, with a #2[i]% base chance of inflicting 1 stack of \"Arcana\" on the target. Additionally, when attacking a target that suffers Wind Shear, Bleed, Burn, or Shock, there is respectively a #3[i]% base chance of inflicting 1 extra stack of \"Arcana\" on the target.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "6": [
                0.6,
                0.65,
                0.65
              ],
              "7": [
                0.66,
                0.68,
                0.68
              ],
              "8": [
                0.72,
                0.71,
                0.71
              ]
            },
            "element": "Wind",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_BlackSwan_00_Skill01_Camera",
              "Avatar_BlackSwan_00_Skill01_Phase01",
              "Avatar_BlackSwan_00_Skill01_Phase02"
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
              "Base Chance": {
                "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
              },
              "Arcana": {
                "desc": "Arcana is a debuff that deals DMG over time. This debuff cannot be dispelled.\\nWhile in the Arcana state, the unit is also considered to be in the Wind Shear state and takes Wind DoT at the start of each turn.\\nThe infliction of Arcana ignores the target's Wind Shear RES, Bleed RES, Burn RES, and Shock RES."
              }
            }
          }
        }
      },
      "Skill": {
        "Decadence, False Twilight": {
          "variant1": {
            "skillID": 130702,
            "trigger": "Skill02",
            "name": "Decadence, False Twilight",
            "type": "Blast",
            "slot": "Skill",
            "desc": "Deals Wind DMG equal to #1[i]% of Black Swan's ATK to one designated enemy target and any adjacent targets. At the same time, there is a #2[i]% base chance of inflicting 1 stack of \"Arcana\" on the target enemy and the adjacent targets. Additionally, there is a #3[i]% base chance of reducing the DEF of the target enemy and the adjacent targets by #4[f1]%, lasting for #5[i] turn(s).",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.73125,
                1,
                1,
                0.1855,
                3
              ],
              "8": [
                0.7875,
                1,
                1,
                0.193,
                3
              ],
              "9": [
                0.84375,
                1,
                1,
                0.2005,
                3
              ],
              "10": [
                0.9,
                1,
                1,
                0.208,
                3
              ],
              "11": [
                0.945,
                1,
                1,
                0.214,
                3
              ],
              "12": [
                0.99,
                1,
                1,
                0.22,
                3
              ]
            },
            "element": "Wind",
            "attackType": "BPSkill",
            "skillEffect": "Blast",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_BlackSwan_00_Skill02_Camera",
              "Avatar_BlackSwan_00_Skill02_Phase01",
              "Avatar_BlackSwan_00_Skill02_Phase02"
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
              },
              "Arcana": {
                "desc": "Arcana is a debuff that deals DMG over time. This debuff cannot be dispelled.\\nWhile in the Arcana state, the unit is also considered to be in the Wind Shear state and takes Wind DoT at the start of each turn.\\nThe infliction of Arcana ignores the target's Wind Shear RES, Bleed RES, Burn RES, and Shock RES."
              }
            }
          }
        }
      },
      "Ultimate": {
        "Bliss of Otherworld's Embrace": {
          "variant1": {
            "skillID": 130703,
            "trigger": "Skill03",
            "name": "Bliss of Otherworld's Embrace",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Inflicts Epiphany on all enemies for #2[i] turn(s).\\nWhile afflicted with Epiphany, enemies take #3[i]% increased DMG in their turn. Additionally, if enemies are also inflicted with Arcana, they are considered to be simultaneously afflicted with Wind Shear, Bleed, Burn, and Shock. After Arcana causes DMG at the start of each turn, its stacks are not reset. This non-reset effect of Arcana stacks can be triggered up to #4[i] time(s) for the duration of Epiphany. And the trigger count resets when Epiphany is applied again.\\nDeals Wind DMG equal to #1[i]% of Black Swan's ATK to all enemies.",
            "energyCost": 120,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.02,
                2,
                0.2125,
                1
              ],
              "8": [
                1.08,
                2,
                0.225,
                1
              ],
              "9": [
                1.14,
                2,
                0.2375,
                1
              ],
              "10": [
                1.2,
                2,
                0.25,
                1
              ],
              "11": [
                1.248,
                2,
                0.26,
                1
              ],
              "12": [
                1.296,
                2,
                0.27,
                1
              ]
            },
            "element": "Wind",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_BlackSwan_00_Skill03_Camera",
              "Avatar_BlackSwan_00_Skill03_Phase01",
              "Avatar_BlackSwan_00_Skill03_Phase02",
              "Avatar_BlackSwan_00_Skill03_Cutin"
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
            "hitSplits": [],
            "extraEffects": {
              "Arcana": {
                "desc": "Arcana is a debuff that deals DMG over time. This debuff cannot be dispelled.\\nWhile in the Arcana state, the unit is also considered to be in the Wind Shear state and takes Wind DoT at the start of each turn.\\nThe infliction of Arcana ignores the target's Wind Shear RES, Bleed RES, Burn RES, and Shock RES."
              }
            }
          }
        }
      },
      "Talent": {
        "Loom of Fate's Caprice": {
          "variant1": {
            "skillID": 130704,
            "trigger": "SkillP01",
            "name": "Loom of Fate's Caprice",
            "type": "Impair",
            "slot": "Talent",
            "desc": "Every time an enemy target receives DoT at the start of each turn, there is a #2[i]% base chance for it to be inflicted with 1 stack of Arcana.\\nWhile afflicted with Arcana, enemy targets receive Wind DoT equal to #1[i]% of Black Swan's ATK at the start of each turn. Each stack of Arcana increases this DMG multiplier by #3[f1]%. Then Arcana resets to 1 stack. Arcana can stack up to #8[i] times.\\nOnly when Arcana causes DMG at the start of an enemy target's turn, Black Swan triggers additional effects based on the number of Arcana stacks inflicted on the target:\\nWhen there are #4[i] or more Arcana stacks, deals Wind DoT equal to #5[i]% of Black Swan's ATK to adjacent targets, with a #2[i]% base chance of inflicting 1 stack of Arcana on adjacent targets.\\nWhen there are #6[i] or more Arcana stacks, enables the current DoT dealt this time to ignore #7[i]% of the target's and adjacent targets' DEF.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.896,
                0.59375,
                0.0948,
                3,
                1.422,
                7,
                0.2,
                50
              ],
              "8": [
                2.04,
                0.6125,
                0.102,
                3,
                1.53,
                7,
                0.2,
                50
              ],
              "9": [
                2.22,
                0.63125,
                0.111,
                3,
                1.665,
                7,
                0.2,
                50
              ],
              "10": [
                2.4,
                0.65,
                0.12,
                3,
                1.8,
                7,
                0.2,
                50
              ],
              "11": [
                2.52,
                0.665,
                0.126,
                3,
                1.89,
                7,
                0.2,
                50
              ],
              "12": [
                2.64,
                0.68,
                0.132,
                3,
                1.98,
                7,
                0.2,
                50
              ]
            },
            "skillEffect": "Impair",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_BlackSwan_00_PassiveSkill01"
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
              },
              "Arcana": {
                "desc": "Arcana is a debuff that deals DMG over time. This debuff cannot be dispelled.\\nWhile in the Arcana state, the unit is also considered to be in the Wind Shear state and takes Wind DoT at the start of each turn.\\nThe infliction of Arcana ignores the target's Wind Shear RES, Bleed RES, Burn RES, and Shock RES."
              }
            }
          }
        }
      },
      "Technique": {
        "From Façade to Vérité": {
          "variant1": {
            "skillID": 130707,
            "trigger": "SkillMaze",
            "name": "From Façade to Vérité",
            "type": "Enhance",
            "slot": "Technique",
            "desc": "After this Technique is used, there is a #1[i]% base chance for each enemy to be inflicted with 1 stack of Arcana at the start of the next battle. For each successful application of Arcana on a target, inflicts another stack of Arcana on the same target. This process repeats until Arcana fails to be inflicted on this target. For each successive application of Arcana on a target, its base chance of success is equal to #2[i]% of the base chance of the previous successful infliction of Arcana on that target.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                1.5,
                0.5
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Enhance",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_BlackSwan_00_SkillMazeInLevel",
              "Avatar_BlackSwan_00_SkillMazeInLevel_Insert"
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
              },
              "Arcana": {
                "desc": "Arcana is a debuff that deals DMG over time. This debuff cannot be dispelled.\\nWhile in the Arcana state, the unit is also considered to be in the Wind Shear state and takes Wind DoT at the start of each turn.\\nThe infliction of Arcana ignores the target's Wind Shear RES, Bleed RES, Burn RES, and Shock RES."
              }
            }
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1307_basic_atk.png",
        "skillRef": {
          "skillName": "Percipience, Silent Dawn",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1307_skill.png",
        "skillRef": {
          "skillName": "Decadence, False Twilight",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1307_ultimate.png",
        "skillRef": {
          "skillName": "Bliss of Otherworld's Embrace",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1307_talent.png",
        "skillRef": {
          "skillName": "Loom of Fate's Caprice",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1307_technique.png",
        "skillRef": {
          "skillName": "From Façade to Vérité",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Viscera's Disquiet",
        "icon": "icon/skill/1307_skilltree1.png",
        "desc": "After using Skill to attack one designated enemy that has Wind Shear, Bleed, Burn, or Shock, each of these debuffs respectively has a #1[i]% base chance of inflicting 1 extra stack of Arcana.",
        "params": [
          0.65
        ],
        "extraEffects": {
          "Base Chance": {
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES.",
            "params": [
              0.65
            ]
          },
          "Arcana": {
            "desc": "Arcana is a debuff that deals DMG over time. This debuff cannot be dispelled.\\nWhile in the Arcana state, the unit is also considered to be in the Wind Shear state and takes Wind DoT at the start of each turn.\\nThe infliction of Arcana ignores the target's Wind Shear RES, Bleed RES, Burn RES, and Shock RES.",
            "params": [
              0.65
            ]
          }
        }
      },
      "Point07": {
        "name": "Goblet's Dredges",
        "icon": "icon/skill/1307_skilltree2.png",
        "desc": "When an enemy target enters battle, there is a #1[i]% base chance for it to be inflicted with 1 stack of Arcana.\nEvery time an enemy target receives 1 instance of DoT during a single attack by an ally, there is a #1[i]% base chance for the target to be inflicted with 1 stack of Arcana. The maximum number of stacks that can be inflicted during 1 single attack is #2[i].",
        "params": [
          0.65,
          3
        ],
        "extraEffects": {
          "Base Chance": {
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES.",
            "params": [
              0.65,
              3
            ]
          },
          "Arcana": {
            "desc": "Arcana is a debuff that deals DMG over time. This debuff cannot be dispelled.\\nWhile in the Arcana state, the unit is also considered to be in the Wind Shear state and takes Wind DoT at the start of each turn.\\nThe infliction of Arcana ignores the target's Wind Shear RES, Bleed RES, Burn RES, and Shock RES.",
            "params": [
              0.65,
              3
            ]
          }
        }
      },
      "Point08": {
        "name": "Candleflame's Portent",
        "icon": "icon/skill/1307_skilltree3.png",
        "desc": "Increases this unit's DMG by an amount equal to #1[i]% of Effect Hit Rate, up to a maximum DMG increase of #2[i]%.",
        "params": [
          0.6,
          0.72
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
        "name": "DMG Boost: Wind",
        "icon": "icon/property/IconWindAddedRatio.png",
        "stats": {
          "DamageWind": 0.032
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
        "name": "Effect Hit Rate Boost",
        "icon": "icon/property/IconStatusProbability.png",
        "stats": {
          "EffectHitRate": 0.04
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
        "name": "DMG Boost: Wind",
        "icon": "icon/property/IconWindAddedRatio.png",
        "stats": {
          "DamageWind": 0.048
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
        "name": "Effect Hit Rate Boost",
        "icon": "icon/property/IconStatusProbability.png",
        "stats": {
          "EffectHitRate": 0.06
        }
      },
      "Point17": {
        "name": "DMG Boost: Wind",
        "icon": "icon/property/IconWindAddedRatio.png",
        "stats": {
          "DamageWind": 0.064
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
    "icon": "icon/character/1307.png",
    "preview": "image/character_preview/1307.png",
    "portrait": "image/character_portrait/1307.png",
    "bannerOffsets": [
      -4,
      -55,
      0.69,
      -4,
      -55,
      0.69,
      -4,
      -55,
      0.69
    ],
    "isBuffed": false
  },
  "Misha": {
    "internalID": 1312,
    "name": "Misha",
    "path": "Destruction",
    "element": "Ice",
    "rarity": 4,
    "energyMax": 100,
    "baseStats": {
      "ATKBase": 599.76,
      "DEFBase": 396.9,
      "HPBase": 1270.08,
      "SPDBase": 96,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 125
    },
    "eidolons": [
      {
        "id": "131201",
        "name": "Whimsicality of Fancy",
        "rank": 1,
        "desc": "When using the Ultimate, for every enemy on the field, additionally increases the Hits Per Action for the current Ultimate by 1 hit(s), up to a maximum increase of 5 hit(s).",
        "icon": "icon/skill/1312_rank1.png",
        "paramsEido": [
          1,
          5
        ]
      },
      {
        "id": "131202",
        "name": "Yearning of Youth",
        "rank": 2,
        "desc": "Before each hit of the Ultimate lands, there is a 24% base chance of reducing the target's DEF by 16% for 3 turn(s).",
        "icon": "icon/skill/1312_rank2.png",
        "paramsEido": [
          0.16,
          3,
          0.24
        ],
        "extraEffects": {
          "Base Chance": {
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
          }
        }
      },
      {
        "id": "131203",
        "name": "Vestige of Happiness",
        "rank": 3,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1312_ultimate.png"
      },
      {
        "id": "131204",
        "name": "Visage of Kinship",
        "rank": 4,
        "desc": "Increases the DMG multiplier for each hit of the Ultimate by 6%.",
        "icon": "icon/skill/1312_rank4.png",
        "paramsEido": [
          0.06
        ]
      },
      {
        "id": "131205",
        "name": "Genesis of First Love",
        "rank": 5,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1312_skill.png"
      },
      {
        "id": "131206",
        "name": "Estrangement of Dream",
        "rank": 6,
        "desc": "When using the Ultimate, increases own DMG by 30%, lasting until the end of the turn. In addition, the next time the Skill is used, recovers 1 Skill Point(s) for the team.",
        "icon": "icon/skill/1312_rank6.png",
        "paramsEido": [
          1,
          0.3
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
        "E—Excuse Me, Please!": {
          "variant1": {
            "skillID": 131201,
            "trigger": "Skill01",
            "name": "E—Excuse Me, Please!",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Ice DMG equal to #1[i]% of Misha's ATK to one designated enemy target.",
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
              "Avatar_Misha_00_Skill01_Camera",
              "Avatar_Misha_00_Skill01_Phase01",
              "Avatar_Misha_00_Skill01_Phase02"
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
        "R—Room Service!": {
          "variant1": {
            "skillID": 131202,
            "trigger": "Skill02",
            "name": "R—Room Service!",
            "type": "Blast",
            "slot": "Skill",
            "desc": "Increases the Hits Per Action for Misha's next Ultimate by #3[i] hit(s). Deals Ice DMG equal to #1[i]% of Misha's ATK to one designated enemy target, and Ice DMG equal to #2[i]% of Misha's ATK to adjacent targets.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.625,
                0.65,
                1
              ],
              "8": [
                1.75,
                0.7,
                1
              ],
              "9": [
                1.875,
                0.75,
                1
              ],
              "10": [
                2,
                0.8,
                1
              ],
              "11": [
                2.1,
                0.84,
                1
              ],
              "12": [
                2.2,
                0.88,
                1
              ]
            },
            "element": "Ice",
            "attackType": "BPSkill",
            "skillEffect": "Blast",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Misha_00_Skill02_Camera",
              "Avatar_Misha_00_Skill02_Phase01",
              "Avatar_Misha_00_Skill02_Phase02"
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
        "G—Gonna Be Late!": {
          "variant1": {
            "skillID": 131203,
            "trigger": "Skill03",
            "name": "G—Gonna Be Late!",
            "type": "Bounce",
            "slot": "Ultimate",
            "desc": "Has #1[i] Hits Per Action by default. First, uses 1 hit to deal Ice DMG equal to #2[i]% of Misha's ATK to one designated enemy target. Then, the rest of the hits each deals Ice DMG equal to #2[i]% of Misha's ATK to one random enemy. Just before each hit lands, there is a #3[f1]% base chance to Freeze the target, lasting for 1 turn.\\nWhile Frozen, enemy targets cannot take any actions, and at the start of their turn, they receive Ice Additional DMG equal to #4[i]% of Misha's ATK.\\nThis Ultimate can possess up to #5[i] Hits Per Action. After the Ultimate is used, its Hits Per Action will be reset to the default level.",
            "energyCost": 100,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                3,
                0.51,
                0.17,
                0.255,
                10
              ],
              "8": [
                3,
                0.54,
                0.18,
                0.27,
                10
              ],
              "9": [
                3,
                0.57,
                0.19,
                0.285,
                10
              ],
              "10": [
                3,
                0.6,
                0.2,
                0.3,
                10
              ],
              "11": [
                3,
                0.624,
                0.208,
                0.312,
                10
              ],
              "12": [
                3,
                0.648,
                0.216,
                0.324,
                10
              ]
            },
            "element": "Ice",
            "attackType": "Ultra",
            "skillEffect": "Bounce",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Misha_00_Skill03_Camera",
              "Avatar_Misha_00_Skill03_EnterReady",
              "Avatar_Misha_00_Skill03_Phase01",
              "Avatar_Misha_00_Skill03_Phase02"
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
              "Base Chance": {
                "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
              },
              "Additional DMG": {
                "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
              }
            }
          }
        }
      },
      "Talent": {
        "Horological Escapement": {
          "variant1": {
            "skillID": 131204,
            "trigger": "SkillP01",
            "name": "Horological Escapement",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "For every 1 Skill Point allies consume, Misha's next Ultimate delivers #2[i] more Hit(s) Per Action, and Misha regenerates #1[f1] Energy.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.625,
                1
              ],
              "8": [
                1.75,
                1
              ],
              "9": [
                1.875,
                1
              ],
              "10": [
                2,
                1
              ],
              "11": [
                2.1,
                1
              ],
              "12": [
                2.2,
                1
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Misha_00_PassiveSkill01"
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
        "Wait, You Are So Beautiful!": {
          "variant1": {
            "skillID": 131207,
            "trigger": "SkillMaze",
            "name": "Wait, You Are So Beautiful!",
            "type": "Impair",
            "slot": "Technique",
            "desc": "After using the Technique, creates a Special Dimension that lasts for #1[i] seconds. Enemies caught in the Special Dimension are inflicted with Dream Prison and stop all their actions. Upon entering battle against enemies afflicted with Dream Prison, increases the Hits Per Action for Misha's next Ultimate by #2[i] hit(s). Only 1 Dimension Effect created by allies can exist at the same time.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                15,
                2
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Impair",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Misha_00_SkillMazeInLevel"
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
        "icon": "icon/skill/1312_basic_atk.png",
        "skillRef": {
          "skillName": "E—Excuse Me, Please!",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1312_skill.png",
        "skillRef": {
          "skillName": "R—Room Service!",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1312_ultimate.png",
        "skillRef": {
          "skillName": "G—Gonna Be Late!",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1312_talent.png",
        "skillRef": {
          "skillName": "Horological Escapement",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1312_technique.png",
        "skillRef": {
          "skillName": "Wait, You Are So Beautiful!",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Release",
        "icon": "icon/skill/1312_skilltree1.png",
        "desc": "Before the Ultimate's first hit, increases the base chance of Freezing the target by #1[i]%.",
        "params": [
          0.8
        ],
        "extraEffects": {
          "Base Chance": {
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES.",
            "params": [
              0.8
            ]
          }
        }
      },
      "Point07": {
        "name": "Interlock",
        "icon": "icon/skill/1312_skilltree2.png",
        "desc": "When using the Ultimate, increases the Effect Hit Rate by #1[i]%, lasting until the end of the current Ultimate's action.",
        "params": [
          0.6
        ]
      },
      "Point08": {
        "name": "Transmission",
        "icon": "icon/skill/1312_skilltree3.png",
        "desc": "When dealing DMG to Frozen enemies, increases CRIT DMG by #1[i]%.",
        "params": [
          0.3
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
    "icon": "icon/character/1312.png",
    "preview": "image/character_preview/1312.png",
    "portrait": "image/character_portrait/1312.png",
    "bannerOffsets": [
      -34,
      98,
      0.57,
      -34,
      98,
      0.57,
      -34,
      98,
      0.57
    ],
    "isBuffed": false
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
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
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
            "toughnessList": [
              {
                "Value": 30
              },
              {
                "Value": 0
              },
              {
                "Value": 15
              }
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
            "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met.",
            "params": [
              0.72,
              3,
              3
            ]
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
  "Anaxa": {
    "internalID": 1405,
    "name": "Anaxa",
    "path": "Erudition",
    "element": "Wind",
    "rarity": 5,
    "energyMax": 140,
    "baseStats": {
      "ATKBase": 756.756,
      "DEFBase": 557.865,
      "HPBase": 970.2,
      "SPDBase": 97,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 75
    },
    "eidolons": [
      {
        "id": "140501",
        "name": "Magician, Isolated by Stars",
        "rank": 1,
        "desc": "After using Skill for the first time, recovers 1 Skill Point(s). When using Skill to hit enemy targets, decreases the targets' DEF by 16%, lasting for 2 turn(s).",
        "icon": "icon/skill/1405_rank1.png",
        "paramsEido": [
          0.16,
          2,
          1
        ]
      },
      {
        "id": "140502",
        "name": "Soul, True to History",
        "rank": 2,
        "desc": "When enemy targets enter the battlefield, triggers 1 instance of the Talent's Weakness Implant effect, and reduces their All-Type RES by 20%.",
        "icon": "icon/skill/1405_rank2.png",
        "paramsEido": [
          0.2
        ]
      },
      {
        "id": "140503",
        "name": "Pupil, Etched into Cosmos",
        "rank": 3,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1405_ultimate.png"
      },
      {
        "id": "140504",
        "name": "Blaze, Plunged to Canyon",
        "rank": 4,
        "desc": "When using Skill, increases ATK by 30%, lasting for 2 turn(s). This effect can stack up to 2 time(s).",
        "icon": "icon/skill/1405_rank4.png",
        "paramsEido": [
          0.3,
          2,
          2
        ]
      },
      {
        "id": "140505",
        "name": "Embryo, Set Beyond Vortex",
        "rank": 5,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1405_skill.png"
      },
      {
        "id": "140506",
        "name": "Everything Is in Everything",
        "rank": 6,
        "desc": "The DMG dealt by Anaxa is 130% of the original DMG. The 2 effects in the Trace \"Imperative Hiatus\" will be triggered directly and will no longer depend on the number of \"Erudition\" characters in the team.",
        "icon": "icon/skill/1405_rank6.png",
        "paramsEido": [
          1.3
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
        "Pain, Brews Truth": {
          "variant1": {
            "skillID": 140501,
            "trigger": "Skill01",
            "name": "Pain, Brews Truth",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Wind DMG equal to #1[i]% of Anaxa's ATK to one designated enemy.",
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
              "Avatar_Anaxa_00_Skill01_Camera",
              "Avatar_Anaxa_00_Skill01_Phase01",
              "Avatar_Anaxa_00_Skill01_Phase02"
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
        "Fractal, Exiles Fallacy": {
          "variant1": {
            "skillID": 140502,
            "trigger": "Skill02",
            "name": "Fractal, Exiles Fallacy",
            "type": "Bounce",
            "slot": "Skill",
            "desc": "Deals Wind DMG equal to #1[i]% of Anaxa's ATK to one designated enemy and additionally deals #2[i] instance(s) of DMG. Each instance of DMG deals Wind DMG equal to #1[i]% of Anaxa's ATK to one random enemy, prioritizing Bouncing to enemy targets that have not been hit by this instance of Skill.\\nWhen used, for each attackable enemy on the field, this Skill has its DMG dealt increased by #3[i]%.",
            "energyCost": null,
            "energyRegen": 6,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.56875,
                4,
                0.2
              ],
              "8": [
                0.6125,
                4,
                0.2
              ],
              "9": [
                0.65625,
                4,
                0.2
              ],
              "10": [
                0.7,
                4,
                0.2
              ],
              "11": [
                0.735,
                4,
                0.2
              ],
              "12": [
                0.77,
                4,
                0.2
              ]
            },
            "element": "Wind",
            "attackType": "BPSkill",
            "skillEffect": "Bounce",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Anaxa_00_Skill02_Camera",
              "Avatar_Anaxa_00_Skill02_Phase01",
              "Avatar_Anaxa_00_Skill02_Phase02"
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
      "Ultimate": {
        "Sprouting Life Sculpts Earth": {
          "variant1": {
            "skillID": 140503,
            "trigger": "Skill03",
            "name": "Sprouting Life Sculpts Earth",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Inflicts the \"Sublimation\" state on all enemies, then deals Wind DMG equal to #1[i]% of Anaxa's ATK to all enemies.\\nIn the \"Sublimation\" state, the targets will be simultaneously inflicted with Physical, Fire, Ice, Lightning, Wind, Quantum, and Imaginary Weaknesses, lasting until the start of the targets' turn. If the targets do not have Control RES, they are unable to take action in the \"Sublimation\" state.",
            "energyCost": 140,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.3
              ],
              "8": [
                1.4
              ],
              "9": [
                1.5
              ],
              "10": [
                1.6
              ],
              "11": [
                1.68
              ],
              "12": [
                1.76
              ]
            },
            "element": "Wind",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Anaxa_00_Skill03_Camera",
              "Avatar_Anaxa_00_Skill03_EnterReady",
              "Avatar_Anaxa_00_Skill03_Phase01",
              "Avatar_Anaxa_00_Skill03_Phase02"
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
        "Tetrad Wisdom Reigns Thrice": {
          "variant1": {
            "skillID": 140504,
            "trigger": "SkillP01",
            "name": "Tetrad Wisdom Reigns Thrice",
            "type": "Impair",
            "slot": "Talent",
            "desc": "Each time Anaxa lands 1 hit on enemy targets, inflicts 1 Weakness of a random Type to the targets, lasting for #2[i] turn(s), with priority to the Weakness Type that the target doesn't already possess.\\nWhile Anaxa is on the field, inflicts the \"Qualitative Disclosure\" state on enemy targets that have at least #3[i] different Types of Weaknesses. Anaxa deals #1[i]% increased DMG to targets afflicted with the \"Qualitative Disclosure\" state. In addition, after using Basic ATK or Skill on them, unleashes 1 additional instance of Skill on the targets. This additional Skill does not consume any Skill Points and cannot trigger this effect again. If the target has been defeated before the additional Skill is used, it will be cast on one random enemy instead.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.255,
                3,
                5
              ],
              "8": [
                0.27,
                3,
                5
              ],
              "9": [
                0.285,
                3,
                5
              ],
              "10": [
                0.3,
                3,
                5
              ],
              "11": [
                0.312,
                3,
                5
              ],
              "12": [
                0.324,
                3,
                5
              ]
            },
            "skillEffect": "Impair",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Anaxa_00_PassiveSkill01"
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
        "Prism of the Pupil": {
          "variant1": {
            "skillID": 140507,
            "trigger": "SkillMaze",
            "name": "Prism of the Pupil",
            "type": "Impair",
            "slot": "Technique",
            "desc": "After using Technique, inflicts the Terrified state on enemies in a set area. Terrified enemies will flee in a direction away from Anaxa for #1[i] second(s). When allies enter battle via actively attacking a Terrified enemy, it will always be considered as entering battle via attacking a Weakness. After entering battle, Anaxa applies 1 Weakness of the attacker's Type to every enemy target, lasting for #2[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                10,
                3
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Impair",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Anaxa_00_SkillMazeInLevel"
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
        "icon": "icon/skill/1405_basic_atk.png",
        "skillRef": {
          "skillName": "Pain, Brews Truth",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1405_skill.png",
        "skillRef": {
          "skillName": "Fractal, Exiles Fallacy",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1405_ultimate.png",
        "skillRef": {
          "skillName": "Sprouting Life Sculpts Earth",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1405_talent.png",
        "skillRef": {
          "skillName": "Tetrad Wisdom Reigns Thrice",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1405_technique.png",
        "skillRef": {
          "skillName": "Prism of the Pupil",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Roaming Signifier",
        "icon": "icon/skill/1405_skilltree1.png",
        "desc": "When using Basic ATK, additionally regenerates #1[i] Energy.\nAt the start of the turn, if there are no enemy targets in the \"Qualitative Disclosure\" state, immediately regenerates #2[i] Energy.",
        "params": [
          10,
          30
        ]
      },
      "Point07": {
        "name": "Imperative Hiatus",
        "icon": "icon/skill/1405_skilltree2.png",
        "desc": "Based on the number of \"Erudition\" characters in the team, one of the following effects will be triggered in the current battle:\n1 character: Increases Anaxa's CRIT DMG by #1[i]%.\nAt least 2 characters: Increases DMG dealt by all allies by #2[i]%.",
        "params": [
          1.4,
          0.5
        ]
      },
      "Point08": {
        "name": "Qualitative Shift",
        "icon": "icon/skill/1405_skilltree3.png",
        "desc": "For every 1 different Weakness Type an enemy target has, the DMG that Anaxa deals to that target ignores #1[i]% of their DEF. Up to a max of 7 Weakness Types can be taken into account for this effect.",
        "params": [
          0.04
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
    "icon": "icon/character/1405.png",
    "preview": "image/character_preview/1405.png",
    "portrait": "image/character_portrait/1405.png",
    "bannerOffsets": [
      0,
      12,
      0.63,
      0,
      12,
      0.63,
      0,
      12,
      0.63
    ],
    "isBuffed": false
  },
  "Hysilens": {
    "internalID": 1410,
    "name": "Hysilens",
    "path": "Nihility",
    "element": "Physical",
    "rarity": 5,
    "energyMax": 110,
    "baseStats": {
      "ATKBase": 601.5239999999999,
      "DEFBase": 485.1,
      "HPBase": 1203.0479999999998,
      "SPDBase": 102,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 100
    },
    "eidolons": [
      {
        "id": "141001",
        "name": "You Ask Why Hearts Cry",
        "rank": 1,
        "desc": "While Hysilens is on the field, the DoT dealt by ally targets is equal to 116% of their original value. When Hysilens inflicts Wind Shear/Bleed/Burn/Shock on enemies via her Talent, there is a 100% base chance to additionally inflict the target with 1 instance of Wind Shear/Bleed/Burn/Shock state that is equivalent to those from the original Talent effect and can coexist with such pre-existing states.",
        "icon": "icon/skill/1410_rank1.png",
        "paramsEido": [
          1.16,
          1
        ],
        "extraEffects": {
          "Base Chance": {
            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
          }
        }
      },
      {
        "id": "141002",
        "name": "Tell Me Why Waves Roar High",
        "rank": 2,
        "desc": "While the Zone is active, the DMG Boost effect from Trace \"The Fiddle of Pearls\" applies to all allies.",
        "icon": "icon/skill/1410_rank2.png"
      },
      {
        "id": "141003",
        "name": "Why Do Lights Bid Goodbye",
        "rank": 3,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1410_ultimate.png"
      },
      {
        "id": "141004",
        "name": "Lo, How Time Flows By",
        "rank": 4,
        "desc": "While the Zone is active, reduces All-Type RES of all enemies by 20%.",
        "icon": "icon/skill/1410_rank4.png",
        "paramsEido": [
          0.2
        ]
      },
      {
        "id": "141005",
        "name": "In Ablution, I Hum and Sigh",
        "rank": 5,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1410_skill.png"
      },
      {
        "id": "141006",
        "name": "When to Return From Where You Lie",
        "rank": 6,
        "desc": "While the Zone is active, at the start of each turn or after one attack by an ally target, increases the maximum trigger count for Hysilens's Physical DoT effect to 12, and increases the multiplier of the DMG dealt by 20%.",
        "icon": "icon/skill/1410_rank6.png",
        "paramsEido": [
          12,
          0.2
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
        "Aeolian Mode: Echoes in Still Waters": {
          "variant1": {
            "skillID": 141001,
            "trigger": "Skill01",
            "name": "Aeolian Mode: Echoes in Still Waters",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Physical DMG equal to #1[i]% of Hysilens's ATK to one designated enemy.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "6": [
                1,
                1,
                3
              ],
              "7": [
                1.1,
                1,
                3
              ],
              "8": [
                1.2,
                1,
                3
              ]
            },
            "element": "Physical",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Harscyline_00_Skill01_Camera",
              "Avatar_Harscyline_00_Skill01_Phase01",
              "Avatar_Harscyline_00_Skill01_Phase02"
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
        "Overtone Hum: Chorus After Dark Tides": {
          "variant1": {
            "skillID": 141002,
            "trigger": "Skill02",
            "name": "Overtone Hum: Chorus After Dark Tides",
            "type": "AoE",
            "slot": "Skill",
            "desc": "Has a #2[i]% base chance to increase the DMG taken by all enemies by #3[i]%, lasting for #4[i] turn(s). At the same time, deals Physical DMG equal to #1[i]% of Hysilens's ATK to all enemies.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.1375,
                1,
                0.1625,
                3
              ],
              "8": [
                1.225,
                1,
                0.175,
                3
              ],
              "9": [
                1.3125,
                1,
                0.1875,
                3
              ],
              "10": [
                1.4,
                1,
                0.2,
                3
              ],
              "11": [
                1.47,
                1,
                0.21,
                3
              ],
              "12": [
                1.54,
                1,
                0.22,
                3
              ]
            },
            "element": "Physical",
            "attackType": "BPSkill",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Harscyline_00_Skill02_Camera",
              "Avatar_Harscyline_00_Skill02_Phase01",
              "Avatar_Harscyline_00_Skill02_Phase02"
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
        "Maelstrom Rhapsody": {
          "variant1": {
            "skillID": 141003,
            "trigger": "Skill03",
            "name": "Maelstrom Rhapsody",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Hysilens deploys a Zone that reduces enemy targets' ATK by #6[f1]% and DEF by #3[f1]%, and deals Physical DMG equal to #1[i]% of Hysilens's ATK to all enemies.\\nFor every 1 instance of DoT taken by an enemy target within the Zone, Hysilens deals Physical DoT equal to #4[f1]% of her ATK to them. This damage triggers at the start of each turn or after one attack by an ally target, up to #5[i] time(s). And it cannot repeatedly trigger this effect.\\nThe Zone lasts for #2[i] turn(s) and this duration decreases by 1 at the start of this unit's every turn. When Hysilens gets knocked down, the Zone will also be dispelled.",
            "energyCost": 110,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.7,
                3,
                0.2125,
                0.632,
                8,
                0.15
              ],
              "8": [
                1.8,
                3,
                0.225,
                0.68,
                8,
                0.15
              ],
              "9": [
                1.9,
                3,
                0.2375,
                0.74,
                8,
                0.15
              ],
              "10": [
                2,
                3,
                0.25,
                0.8,
                8,
                0.15
              ],
              "11": [
                2.08,
                3,
                0.26,
                0.84,
                8,
                0.15
              ],
              "12": [
                2.16,
                3,
                0.27,
                0.88,
                8,
                0.15
              ]
            },
            "element": "Physical",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Harscyline_00_Skill03_Camera",
              "Avatar_Harscyline_00_Skill03_Phase01",
              "Avatar_Harscyline_00_Skill03_Phase02",
              "Avatar_Harscyline_00_Skill03_EnterReady"
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
            "hitSplits": [],
            "extraEffects": {
              "Downed State": {
                "desc": "An ally will be incapacitated once their HP is reduced to 0."
              }
            }
          }
        }
      },
      "Talent": {
        "Sirenic Serenade": {
          "variant1": {
            "skillID": 141004,
            "trigger": "SkillP01",
            "name": "Sirenic Serenade",
            "type": "Impair",
            "slot": "Talent",
            "desc": "When an ally target attacks, there is a #1[i]% base chance for Hysilens to inflict the hit enemy target with one of the following states: Wind Shear, Bleed, Burn, or Shock. Priority is given to inflicting a different state.\\nWhile in the Wind Shear/Burn/Shock state, at the start of each turn, the enemy target takes Wind/Fire/Lightning DoT equal to #2[f1]% of Hysilens's ATK for #5[i] turn(s).\\nWhile in the Bleed state, at the start of each turn, the enemy target takes Physical DoT equal to #3[f1]% of their Max HP, up to #4[f1]% of Hysilens's ATK, lasting for #5[i] turn(s).",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                1,
                0.1975,
                0.2,
                0.1975,
                2
              ],
              "8": [
                1,
                0.2125,
                0.2,
                0.2125,
                2
              ],
              "9": [
                1,
                0.23125,
                0.2,
                0.23125,
                2
              ],
              "10": [
                1,
                0.25,
                0.2,
                0.25,
                2
              ],
              "11": [
                1,
                0.2625,
                0.2,
                0.2625,
                2
              ],
              "12": [
                1,
                0.275,
                0.2,
                0.275,
                2
              ]
            },
            "skillEffect": "Impair",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Harscyline_00_PassiveSkill01"
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
      "Technique": {
        "At Ocean's Abode": {
          "variant1": {
            "skillID": 141007,
            "trigger": "SkillMaze",
            "name": "At Ocean's Abode",
            "type": "Impair",
            "slot": "Technique",
            "desc": "After using Technique, creates a Special Dimension that lasts for #1[i] seconds and automatically moves forward. Enemies within the Special Dimension enter the \"Soulstruck\" state. \"Soulstruck\" enemies will not attack ally targets and will follow the dimension while it persists.\\nAfter entering combat with \"Soulstruck\" enemies, there is a #2[i]% base chance to inflict each enemy target with #3[i] of the following states: Wind Shear/Bleed/Burn/Shock, all of which are equivalent to those provided by Hysilens's Talent effect. Only 1 Dimension Effect created by allies can exist at the same time.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                20,
                1,
                2
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Impair",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Harscyline_00_SkillMazeInLevel"
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
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1410_basic_atk.png",
        "skillRef": {
          "skillName": "Aeolian Mode: Echoes in Still Waters",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1410_skill.png",
        "skillRef": {
          "skillName": "Overtone Hum: Chorus After Dark Tides",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1410_ultimate.png",
        "skillRef": {
          "skillName": "Maelstrom Rhapsody",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1410_talent.png",
        "skillRef": {
          "skillName": "Sirenic Serenade",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1410_technique.png",
        "skillRef": {
          "skillName": "At Ocean's Abode",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "The Gladius of Conquest",
        "icon": "icon/skill/1410_skilltree1.png",
        "desc": "At the start of combat, Hysilens deploys a Zone, equivalent to that provided by her Ultimate, lasting for #1[i] turn(s). Whenever Hysilens deploys a Zone, she recovers #2[i] Skill Point(s).",
        "params": [
          3,
          1
        ]
      },
      "Point07": {
        "name": "The Bubble of Banquets",
        "icon": "icon/skill/1410_skilltree2.png",
        "desc": "When Hysilens uses Ultimate, if the enemy target is currently afflicted with DoT(s), all DoTs currently applied on the target will immediately produce DMG equal to #1[i]% of their original DMG.",
        "params": [
          1.5
        ]
      },
      "Point08": {
        "name": "The Fiddle of Pearls",
        "icon": "icon/skill/1410_skilltree3.png",
        "desc": "For every #2[i]% of Hysilens's Effect Hit Rate that exceeds #1[i]%, increases her DMG dealt by #3[i]%, up to a max increase of #4[i]%.",
        "params": [
          0.6,
          0.1,
          0.15,
          0.9
        ]
      },
      "Point09": {
        "name": "SPD Boost",
        "icon": "icon/property/IconSpeed.png",
        "stats": {
          "SPDFlat": 2
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
        "name": "SPD Boost",
        "icon": "icon/property/IconSpeed.png",
        "stats": {
          "SPDFlat": 2
        }
      },
      "Point12": {
        "name": "Effect Hit Rate Boost",
        "icon": "icon/property/IconStatusProbability.png",
        "stats": {
          "EffectHitRate": 0.04
        }
      },
      "Point13": {
        "name": "SPD Boost",
        "icon": "icon/property/IconSpeed.png",
        "stats": {
          "SPDFlat": 3
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
        "name": "SPD Boost",
        "icon": "icon/property/IconSpeed.png",
        "stats": {
          "SPDFlat": 3
        }
      },
      "Point16": {
        "name": "Effect Hit Rate Boost",
        "icon": "icon/property/IconStatusProbability.png",
        "stats": {
          "EffectHitRate": 0.06
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
        "name": "SPD Boost",
        "icon": "icon/property/IconSpeed.png",
        "stats": {
          "SPDFlat": 4
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1410.png",
    "preview": "image/character_preview/1410.png",
    "portrait": "image/character_portrait/1410.png",
    "bannerOffsets": [
      175,
      12,
      0.63,
      175,
      12,
      0.63,
      175,
      12,
      0.63
    ],
    "isBuffed": false
  },
  "Cerydra": {
    "internalID": 1412,
    "name": "Cerydra",
    "path": "Harmony",
    "element": "Wind",
    "rarity": 5,
    "energyMax": 130,
    "baseStats": {
      "ATKBase": 620.9280000000001,
      "DEFBase": 485.1,
      "HPBase": 1358.2800000000002,
      "SPDBase": 99,
      "CritRateSUM": 0.05,
      "CritDamageSUM": 0.5,
      "AggroBase": 100
    },
    "eidolons": [
      {
        "id": "141201",
        "name": "Seize the Crowns of All",
        "rank": 1,
        "desc": "The character with \"Military Merit\" ignores 16% of the targets' DEF when dealing DMG. If \"Military Merit\" has been upgraded to \"Peerage,\" then the character additionally ignores 20% of the targets' DEF when dealing Skill DMG. When Cerydra uses her Skill, regenerates 2 Energy for the designated ally target.",
        "icon": "icon/skill/1412_rank1.png",
        "paramsEido": [
          0.16,
          0.2,
          2
        ]
      },
      {
        "id": "141202",
        "name": "Forge the Dreams of Many",
        "rank": 2,
        "desc": "The character with \"Military Merit\" deals 40% increased DMG. While a teammate on the field has \"Military Merit,\" Cerydra's DMG dealt increases by 160%.",
        "icon": "icon/skill/1412_rank2.png",
        "paramsEido": [
          0.4,
          1.6
        ]
      },
      {
        "id": "141203",
        "name": "Torch the Laws of Old",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1412_skill.png"
      },
      {
        "id": "141204",
        "name": "Remake the Realms of Men",
        "rank": 4,
        "desc": "Increases Ultimate's DMG multiplier by 240%.",
        "icon": "icon/skill/1412_rank4.png",
        "paramsEido": [
          2.4
        ]
      },
      {
        "id": "141205",
        "name": "Help and Hurt Repaid in Full",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1412_ultimate.png"
      },
      {
        "id": "141206",
        "name": "A Journey Set Starward",
        "rank": 6,
        "desc": "The character with \"Military Merit\" increases their All-Type RES PEN by 20%, and the multiplier for the Additional DMG triggered via \"Military Merit\" increases by 300%. While a teammate on the field has \"Military Merit,\" Cerydra's All-Type RES PEN increases by 20%.",
        "icon": "icon/skill/1412_rank6.png",
        "paramsEido": [
          0.2,
          3
        ],
        "extraEffects": {
          "RES PEN": {
            "desc": "When dealing DMG, ignore a part of the enemy target's resistance to the corresponding damage type."
          },
          "Additional DMG": {
            "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
          }
        }
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
        "King's Castling": {
          "variant1": {
            "skillID": 141201,
            "trigger": "Skill01",
            "name": "King's Castling",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Wind DMG equal to #1[i]% of Cerydra's ATK to one designated enemy.",
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
              "Avatar_Cerydra_00_Skill01_Camera",
              "Avatar_Cerydra_00_Skill01_Phase01",
              "Avatar_Cerydra_00_Skill01_Phase02"
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
        "Pawn's Promotion": {
          "variant1": {
            "skillID": 141202,
            "trigger": "Skill02",
            "name": "Pawn's Promotion",
            "type": "Support",
            "slot": "Skill",
            "desc": "Grants \"Military Merit\" to one designated ally character and gives Cerydra #2[i] points of Charge. Charge is capped at #3[i] points. When Charge reaches #4[i] points, automatically upgrades the character's \"Military Merit\" to \"Peerage\" and dispels their Crowd Control debuffs. The character with \"Peerage\" is considered to have \"Military Merit\" simultaneously. The character with \"Peerage\" increases the CRIT DMG for their dealt Skill DMG by #1[i]%, increases their All-Type RES PEN by #5[f1]%, and triggers Coup de Main when using their Skill on enemy targets. After Coup de Main ends, consumes #4[i] points of Charge to revert \"Peerage\" to \"Military Merit.\"",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.585,
                1,
                8,
                6,
                0.0925
              ],
              "8": [
                0.63,
                1,
                8,
                6,
                0.095
              ],
              "9": [
                0.675,
                1,
                8,
                6,
                0.0975
              ],
              "10": [
                0.72,
                1,
                8,
                6,
                0.1
              ],
              "11": [
                0.756,
                1,
                8,
                6,
                0.102
              ],
              "12": [
                0.792,
                1,
                8,
                6,
                0.104
              ]
            },
            "attackType": "BPSkill",
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Cerydra_00_Skill02_Phase01",
              "Avatar_Cerydra_00_Skill02_Camera_TimeLine",
              "Avatar_Cerydra_00_Skill02_1_Camera_TimeLine",
              "Avatar_Cerydra_00_Skill02_2_Camera_TimeLine",
              "Avatar_Cerydra_00_Skill02_Others_Phase02",
              "Avatar_Cerydra_00_Skill02_InsertRank01",
              "Avatar_Cerydra_00_Skill02_Insert_Camera",
              "Avatar_Cerydra_00_Skill02_3_Camera_TimeLine"
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
              "Crowd Control debuff": {
                "desc": "Freeze, Entanglement, Imprisonment, Dominated, Outrage, Strong Reverberation, Alien Dream, Snarelock, Terrified, Action Lock."
              },
              "Coup de Main": {
                "desc": "Copy and immediately use the ability about to be used, then use the original ability.\\nCoup de Main won't trigger Coup de Main again."
              },
              "RES PEN": {
                "desc": "When dealing DMG, ignore a part of the enemy target's resistance to the corresponding damage type."
              }
            }
          }
        }
      },
      "Ultimate": {
        "Scholar's Mate": {
          "variant1": {
            "skillID": 141203,
            "trigger": "Skill03",
            "name": "Scholar's Mate",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Gains #2[i] Charge. Deals Wind DMG equal to #1[i]% of Cerydra's ATK to all enemies. If no character on the field has \"Military Merit,\" prioritizes granting \"Military Merit\" to the first character in the current team.",
            "energyCost": 130,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                2.04,
                2
              ],
              "8": [
                2.16,
                2
              ],
              "9": [
                2.28,
                2
              ],
              "10": [
                2.4,
                2
              ],
              "11": [
                2.496,
                2
              ],
              "12": [
                2.592,
                2
              ]
            },
            "element": "Wind",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Cerydra_00_Skill03_Camera",
              "Avatar_Cerydra_00_Skill03_EnterReady",
              "Avatar_Cerydra_00_Skill03_Phase01",
              "Avatar_Cerydra_00_Skill03_Phase02"
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
        "Ave Imperator": {
          "variant1": {
            "skillID": 141204,
            "trigger": "SkillP01",
            "name": "Ave Imperator",
            "type": "Support",
            "slot": "Talent",
            "desc": "The character with \"Military Merit\" increases ATK by an amount equal to #2[f1]% of Cerydra's ATK. When the character uses Basic ATK or Skill, Cerydra gains #1[i] Charge. During Coup de Main, Cerydra cannot gain Charge. After the character with \"Military Merit\" uses an attack, Cerydra additionally deals 1 instance of Wind Additional DMG equal to #3[i]% of her ATK. This effect can trigger up to #4[i] time(s). The trigger count resets every time Cerydra uses her Ultimate. \"Military Merit\" only takes effect on the most recent target. When the target changes, Cerydra's Charge is reset to 0.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                1,
                0.2175,
                0.4875,
                20
              ],
              "8": [
                1,
                0.225,
                0.525,
                20
              ],
              "9": [
                1,
                0.2325,
                0.5625,
                20
              ],
              "10": [
                1,
                0.24,
                0.6,
                20
              ],
              "11": [
                1,
                0.246,
                0.63,
                20
              ],
              "12": [
                1,
                0.252,
                0.66,
                20
              ]
            },
            "skillEffect": "Support",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Cerydra_00_PassiveSkill"
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
              "Coup de Main": {
                "desc": "Copy and immediately use the ability about to be used, then use the original ability.\\nCoup de Main won't trigger Coup de Main again."
              },
              "Additional DMG": {
                "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
              }
            }
          }
        }
      },
      "Technique": {
        "First-Move Advantage": {
          "variant1": {
            "skillID": 141207,
            "trigger": "SkillMaze",
            "name": "First-Move Advantage",
            "type": "Support",
            "slot": "Technique",
            "desc": "After using Technique, gains \"Military Merit.\" When switching the active character, \"Military Merit\" transfers to the current active character. At the start of the next battle, automatically uses Skill 1 time on the character with \"Military Merit\" without consuming any Skill Points.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": []
            },
            "attackType": "Maze",
            "skillEffect": "Support",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Cerydra_00_SkillMazeInLevel"
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
        "icon": "icon/skill/1412_basic_atk.png",
        "skillRef": {
          "skillName": "King's Castling",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1412_skill.png",
        "skillRef": {
          "skillName": "Pawn's Promotion",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1412_ultimate.png",
        "skillRef": {
          "skillName": "Scholar's Mate",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1412_talent.png",
        "skillRef": {
          "skillName": "Ave Imperator",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1412_technique.png",
        "skillRef": {
          "skillName": "First-Move Advantage",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Veni",
        "icon": "icon/skill/1412_skilltree1.png",
        "desc": "For every #2[i] of Cerydra's ATK that exceeds #1[i], increases her CRIT DMG by #3[i]%, up to a max increase of #4[i]%.",
        "params": [
          2000,
          100,
          0.18,
          3.6
        ]
      },
      "Point07": {
        "name": "Vidi",
        "icon": "icon/skill/1412_skilltree2.png",
        "desc": "Increases Cerydra's CRIT Rate by #1[i]%. While Cerydra's Charge is below its maximum, the character with \"Military Merit\" using their Ultimate grants Cerydra #2[i] Charge. This effect can trigger once per battle.",
        "params": [
          1,
          1
        ]
      },
      "Point08": {
        "name": "Vici",
        "icon": "icon/skill/1412_skilltree3.png",
        "desc": "When using Skill, increases SPD by #2[i] for this unit and the teammate with \"Military Merit,\" lasting for #3[i] turn(s). When the character with \"Military Merit\" uses Basic ATK or Skill, regenerates #1[i] Energy for Cerydra.",
        "params": [
          5,
          20,
          3
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
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.04
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
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.06
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
        "name": "ATK Boost",
        "icon": "icon/property/IconAttack.png",
        "stats": {
          "ATK%": 0.08
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
    "icon": "icon/character/1412.png",
    "preview": "image/character_preview/1412.png",
    "portrait": "image/character_portrait/1412.png",
    "bannerOffsets": [
      57,
      -50,
      0.63,
      57,
      -50,
      0.63,
      57,
      -50,
      0.63
    ],
    "isBuffed": false
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
    ],
    "isBuffed": false
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
    ],
    "isBuffed": false
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
    ],
    "isBuffed": false
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
    ],
    "isBuffed": false
  }
}