const stageTypers = "anom";
let mocSchedule = [
  {
    "id": 3,
    "image": "activityBG/ChallengePeakPanelBanner_4003.png",
    "realName": "Dissonance",
    "buffData": null,
    "floorData": {
      "1": {
        "floorName": "Knight (I)",
        "stageDataObject": {
          "stage1": {
            "ids": [
              30503011
            ],
            "stageDataArray": [
              {
                "stageName": "Cyclonic Swarm Mother",
                "enemyLevel": 95,
                "modifiersToAdd": [],
                "buffOverride": null,
                "battleEventAbilities": [
                  {
                    "realModifierNamne": "BattleEventAbility_SummonMonsterInfinite",
                    "BEKey": -1097634517,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  },
                  {
                    "realModifierNamne": "BattleEventAbility_ChallengePeakBattle_CountDown",
                    "BEKey": 1912336050,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  }
                ],
                "stageType": "Challenge",
                "enemyList": [
                  {
                    "isPF": true,
                    "scaleElite": 349,
                    "enemies": [
                      {
                        "name": "Cyclonic Swarm Mother",
                        "id": 4053020,
                        "image": 4053020,
                        "rank": "Elite",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 4189893.66,
                        "speedBase": 217.8,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Quantum",
                        "hpBars": 1,
                        "toughnessBase": 160,
                        "weaknessList": [
                          "Fire",
                          "Ice",
                          "Thunder"
                        ],
                        "resistances": {
                          "Physical": 0.2,
                          "Wind": 0.2,
                          "Quantum": 0.2,
                          "Imaginary": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      {
                        "name": "The Ascended",
                        "id": 2023030,
                        "image": 2023030,
                        "rank": "Elite",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 3072588.684,
                        "speedBase": 158.4,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Physical",
                        "hpBars": 1,
                        "toughnessBase": 140,
                        "weaknessList": [
                          "Physical",
                          "Ice",
                          "Thunder"
                        ],
                        "resistances": {
                          "Fire": 0.2,
                          "Wind": 0.4,
                          "Quantum": 0.2,
                          "Imaginary": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      0,
                      1
                    ],
                    "totalMax": 4,
                    "fieldMax": 2,
                    "abilityName": "",
                    "params": []
                  }
                ],
                "scalarHard": 3,
                "configData": {
                  "_Wave": "1",
                  "_IsEliteBattle": "1",
                  "_StageInfiniteGroup": "30503011",
                  "_CreateBattleEvent": "30502"
                }
              }
            ]
          },
          "stage2": {
            "ids": null,
            "stageDataArray": []
          }
        },
        "tagList": [
          {
            "name": "Inversion",
            "desc": "Each time after the enemy target is attacked, the attacker will lose HP equal to #1[i]% of their own Max HP. This effect is Non-fatal.",
            "realModifierNamne": "ChallengePeakBattle_BaseAbility_0003",
            "BEKey": 1912336050,
            "params": [
              0.02
            ]
          }
        ]
      },
      "2": {
        "floorName": "Knight (II)",
        "stageDataObject": {
          "stage1": {
            "ids": [
              30503012
            ],
            "stageDataArray": [
              {
                "stageName": "Swarm: True Sting (Complete)",
                "enemyLevel": 95,
                "modifiersToAdd": [],
                "buffOverride": null,
                "battleEventAbilities": [
                  {
                    "realModifierNamne": "BattleEventAbility_SummonMonsterInfinite",
                    "BEKey": -1097634517,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  },
                  {
                    "realModifierNamne": "BattleEventAbility_ChallengePeakBattle_CountDown",
                    "BEKey": 1912336050,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  }
                ],
                "stageType": "Challenge",
                "enemyList": [
                  {
                    "isPF": true,
                    "scaleElite": 350,
                    "enemies": [
                      {
                        "name": "Noontide Gryphon",
                        "id": 4023010,
                        "image": 4023010,
                        "rank": "Elite",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 1815620.586,
                        "speedBase": 158.4,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 0.5,
                        "toughnessBars": 1,
                        "toughnessElement": "Fire",
                        "hpBars": 1,
                        "toughnessBase": 160,
                        "weaknessList": [
                          "Physical",
                          "Quantum",
                          "Imaginary"
                        ],
                        "resistances": {
                          "Fire": 0.2,
                          "Ice": 0.2,
                          "Thunder": 0.2,
                          "Wind": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      {
                        "name": "Moonlit Pegasus",
                        "id": 4023020,
                        "image": 4023020,
                        "rank": "Elite",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 1536294.342,
                        "speedBase": 132,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Quantum",
                        "hpBars": 1,
                        "toughnessBase": 160,
                        "weaknessList": [
                          "Fire",
                          "Quantum",
                          "Imaginary"
                        ],
                        "resistances": {
                          "Physical": 0.2,
                          "Ice": 0.2,
                          "Thunder": 0.2,
                          "Wind": 0.2
                        },
                        "resistancesDebuff": {}
                      }
                    ],
                    "totalMax": 2,
                    "fieldMax": 2,
                    "abilityName": "",
                    "params": []
                  },
                  {
                    "isPF": true,
                    "scaleElite": 350,
                    "enemies": [
                      {
                        "name": "Swarm: True Sting",
                        "id": 802401107,
                        "image": 8024011,
                        "rank": "LittleBoss",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 3072588.1253475,
                        "speedBase": 190.08,
                        "critDMG": 0.2,
                        "effectRES": 0.4,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Wind",
                        "hpBars": 2,
                        "toughnessBase": 160,
                        "weaknessList": [
                          "Ice",
                          "Quantum",
                          "Imaginary"
                        ],
                        "resistances": {
                          "Physical": 0.2,
                          "Fire": 0.2,
                          "Thunder": 0.2,
                          "Wind": 0.2
                        },
                        "resistancesDebuff": {}
                      }
                    ],
                    "totalMax": 1,
                    "fieldMax": 1,
                    "abilityName": "",
                    "params": []
                  }
                ],
                "scalarHard": 3,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1",
                  "_StageInfiniteGroup": "30503012",
                  "_CreateBattleEvent": "30502"
                }
              }
            ]
          },
          "stage2": {
            "ids": null,
            "stageDataArray": []
          }
        },
        "tagList": [
          {
            "name": "Tempering",
            "desc": "For every 1% HP the enemy target loses, reduces CRIT DMG dealt to them by #1[i]%.",
            "realModifierNamne": "ChallengePeakBattle_BaseAbility_0002",
            "BEKey": 1912336050,
            "params": [
              0.03
            ]
          }
        ]
      },
      "3": {
        "floorName": "Knight (III)",
        "stageDataObject": {
          "stage1": {
            "ids": [
              30503013
            ],
            "stageDataArray": [
              {
                "stageName": "Ichor Memosprite: Judge of Oblivion",
                "enemyLevel": 95,
                "modifiersToAdd": [],
                "buffOverride": null,
                "battleEventAbilities": [
                  {
                    "realModifierNamne": "BattleEventAbility_SummonMonsterInfinite",
                    "BEKey": -1097634517,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  },
                  {
                    "realModifierNamne": "BattleEventAbility_ChallengePeakBattle_CountDown",
                    "BEKey": 1912336050,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  }
                ],
                "stageType": "Challenge",
                "enemyList": [
                  {
                    "isPF": true,
                    "scaleElite": 351,
                    "enemies": [
                      {
                        "name": "Automaton Direwolf",
                        "id": 1013020,
                        "image": 1013020,
                        "rank": "Elite",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 1152220.7565,
                        "speedBase": 190.08,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Physical",
                        "hpBars": 1,
                        "toughnessBase": 100,
                        "weaknessList": [
                          "Ice",
                          "Thunder",
                          "Imaginary"
                        ],
                        "resistances": {
                          "Physical": 0.2,
                          "Fire": 0.2,
                          "Wind": 0.2,
                          "Quantum": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      {
                        "name": "Dreamjolt Troupe's Sweet Gorilla",
                        "id": 3003020,
                        "image": 3003020,
                        "rank": "Elite",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 1885452.147,
                        "speedBase": 190.08,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Physical",
                        "hpBars": 1,
                        "toughnessBase": 100,
                        "weaknessList": [
                          "Physical",
                          "Fire",
                          "Imaginary"
                        ],
                        "resistances": {
                          "Ice": 0.2,
                          "Thunder": 0.2,
                          "Wind": 0.2,
                          "Quantum": 0.2
                        },
                        "resistancesDebuff": {}
                      }
                    ],
                    "totalMax": 2,
                    "fieldMax": 2,
                    "abilityName": "",
                    "params": []
                  },
                  {
                    "isPF": true,
                    "scaleElite": 351,
                    "enemies": [
                      {
                        "name": "Ichor Memosprite: Judge of Oblivion",
                        "id": 4064010,
                        "image": 4064010,
                        "rank": "LittleBoss",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 2828178.2205,
                        "speedBase": 198,
                        "critDMG": 0.2,
                        "effectRES": 0.4,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 4,
                        "toughnessElement": "Imaginary",
                        "hpBars": 2,
                        "toughnessBase": 120,
                        "weaknessList": [
                          "Physical",
                          "Ice",
                          "Imaginary"
                        ],
                        "resistances": {
                          "Fire": 0.2,
                          "Thunder": 0.2,
                          "Wind": 0.2,
                          "Quantum": 0.2
                        },
                        "resistancesDebuff": {
                          "STAT_CTRL": 0.5
                        }
                      }
                    ],
                    "totalMax": 1,
                    "fieldMax": 1,
                    "abilityName": "",
                    "params": []
                  }
                ],
                "scalarHard": 3,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1",
                  "_StageInfiniteGroup": "30503013",
                  "_CreateBattleEvent": "30502"
                }
              }
            ]
          },
          "stage2": {
            "ids": null,
            "stageDataArray": []
          }
        },
        "tagList": [
          {
            "name": "Taunting",
            "desc": "Enemy target takes immediate action after being attacked #1[i] time(s). This tally resets at the start of the enemy target's turn.",
            "realModifierNamne": "ChallengePeakBattle_BaseAbility_0008",
            "BEKey": 1912336050,
            "params": [
              6
            ]
          },
          {
            "name": "Interference",
            "desc": "After the enemy target uses an attack, randomly causes #1[i]% or #2[i]% action delay to the attacked target.",
            "realModifierNamne": "ChallengePeakBattle_BaseAbility_0009",
            "BEKey": 1912336050,
            "params": [
              0.05,
              0.1
            ]
          }
        ]
      },
      "4": {
        "floorName": "King in Check",
        "stageDataObject": {
          "stage1": {
            "ids": [
              30503021
            ],
            "stageDataArray": [
              {
                "stageName": "\"Harmonious Choir\" The Great Septimus",
                "enemyLevel": 100,
                "modifiersToAdd": [],
                "buffOverride": null,
                "battleEventAbilities": [
                  {
                    "realModifierNamne": "BattleEventAbility_SummonMonsterInfinite",
                    "BEKey": -1097634517,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  },
                  {
                    "realModifierNamne": "BattleEventAbility_ChallengePeakBattle_CountDown",
                    "BEKey": 1912336050,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  }
                ],
                "stageType": "Challenge",
                "enemyList": [
                  {
                    "isPF": true,
                    "scaleElite": 354,
                    "enemies": [
                      {
                        "name": "\"Harmonious Choir\" The Great Septimus",
                        "id": 3025016,
                        "image": 3025016,
                        "rank": "BigBoss",
                        "attackBase": 766.7796309,
                        "defBase": 1200.00006,
                        "hpBase": [
                          10818299.9952,
                          10818299.9952,
                          8654639.99616
                        ],
                        "speedBase": 190.08,
                        "critDMG": 0.2,
                        "effectRES": 0.4,
                        "ehr": 0.4,
                        "delay": 1,
                        "toughnessBars": [
                          3,
                          3,
                          9
                        ],
                        "toughnessElement": "Physical",
                        "hpBars": 3,
                        "toughnessBase": [
                          70,
                          70,
                          39.97
                        ],
                        "weaknessList": [
                          "Fire",
                          "Thunder",
                          "Imaginary"
                        ],
                        "resistances": {
                          "Physical": 0.2,
                          "Ice": 0.2,
                          "Wind": 0.2,
                          "Quantum": 0.2
                        },
                        "resistancesDebuff": {
                          "STAT_CTRL": 1
                        }
                      }
                    ],
                    "totalMax": 1,
                    "fieldMax": 1,
                    "abilityName": "",
                    "params": []
                  }
                ],
                "scalarHard": 3,
                "configData": {
                  "_Wave": "1",
                  "_IsEliteBattle": "1",
                  "_StageInfiniteGroup": "30503021",
                  "_CreateBattleEvent": "30503"
                }
              }
            ]
          },
          "stage2": {
            "ids": null,
            "stageDataArray": []
          }
        },
        "tagList": [
          {
            "name": "Resilient Armor+",
            "desc": "Enemy target initially has #1[i] stacks of \"Resilient Armor+,\" and each stack reduces DMG taken by #2[i]%. Enemy targets lose 1 stack of \"Resilient Armor+\" each time their Toughness is reduced to 0. Stacks of this effect will reset at each of the enemy target's phase.",
            "realModifierNamne": "ChallengePeakBattle_EnhancedAbility_0001",
            "BEKey": 1912336050,
            "params": [
              3,
              0.15
            ]
          },
          {
            "name": "Depowered",
            "desc": "When entering combat, reduces ally target's Energy by #1[i]% and decreases their Energy Regeneration Rate by #2[i]% outside of their turn for #3[i] turn(s).",
            "realModifierNamne": "ChallengePeakBattle_BaseAbility_0013",
            "BEKey": 1912336050,
            "params": [
              0.5,
              0.5,
              2
            ]
          },
          {
            "name": "Unending Refinement",
            "desc": "After the enemy target takes DMG, reduces DMG taken by this unit by #1[i]% and CRIT DMG taken by #3[i]%, stacking up to #2[i] time(s). These stacks are cleared when the enemy target's turn begins or when they enter the Weakness Break state. While the enemy target is in the Weakness Break state, stacks cannot be accumulated.",
            "realModifierNamne": "ChallengePeakBattle_BaseAbility_0012",
            "BEKey": 1912336050,
            "params": [
              0.02,
              10,
              0.04
            ]
          }
        ]
      },
      "5": {
        "floorName": "King in Check: Plight",
        "stageDataObject": {
          "stage1": {
            "ids": [
              30503022
            ],
            "stageDataArray": [
              {
                "stageName": "\"Harmonious Choir\" The Great Septimus",
                "enemyLevel": 120,
                "modifiersToAdd": [],
                "buffOverride": null,
                "battleEventAbilities": [
                  {
                    "realModifierNamne": "BattleEventAbility_SummonMonsterInfinite",
                    "BEKey": -1097634517,
                    "actualParams": [
                      0.5,
                      3,
                      0,
                      0
                    ]
                  },
                  {
                    "realModifierNamne": "BattleEventAbility_ChallengePeakBattle_CountDown",
                    "BEKey": 1912336050,
                    "actualParams": [
                      0.5,
                      3,
                      0,
                      0
                    ]
                  },
                  {
                    "realModifierNamne": "BattleEventAbility_ChallengePeakBattle_HardBossScreenEffect",
                    "BEKey": 1912336050,
                    "actualParams": [
                      0.5,
                      3,
                      0,
                      0
                    ]
                  }
                ],
                "stageType": "Challenge",
                "enemyList": [
                  {
                    "isPF": true,
                    "scaleElite": 352,
                    "enemies": [
                      {
                        "name": "\"Harmonious Choir\" The Great Septimus",
                        "id": 3025016,
                        "image": 3025016,
                        "rank": "BigBoss",
                        "attackBase": 1073.4914876,
                        "defBase": 1200.00006,
                        "hpBase": [
                          50846008.9284,
                          50846008.9284,
                          40676807.14272
                        ],
                        "speedBase": 216,
                        "critDMG": 0.2,
                        "effectRES": 0.5,
                        "ehr": 0.5,
                        "delay": 1,
                        "toughnessBars": [
                          3,
                          3,
                          9
                        ],
                        "toughnessElement": "Physical",
                        "hpBars": 3,
                        "toughnessBase": [
                          70,
                          70,
                          39.97
                        ],
                        "weaknessList": [
                          "Fire",
                          "Thunder",
                          "Imaginary"
                        ],
                        "resistances": {
                          "Physical": 0.2,
                          "Ice": 0.2,
                          "Wind": 0.2,
                          "Quantum": 0.2
                        },
                        "resistancesDebuff": {
                          "STAT_CTRL": 1
                        }
                      }
                    ],
                    "totalMax": 1,
                    "fieldMax": 1,
                    "abilityName": "",
                    "params": []
                  }
                ],
                "scalarHard": 3,
                "configData": {
                  "_Wave": "1",
                  "_IsEliteBattle": "1",
                  "_StageInfiniteGroup": "30503022",
                  "_CreateBattleEvent": "30504"
                }
              }
            ]
          },
          "stage2": {
            "ids": null,
            "stageDataArray": []
          }
        },
        "tagList": [
          {
            "name": "Resilient Armor++",
            "desc": "Enemy target initially has #1[i] stacks of \"Resilient Armor++,\" and each stack reduces DMG taken by #2[i]%. Enemy targets lose 1 stack of \"Resilient Armor++\" each time their Toughness is reduced to 0. Stacks of this effect will reset at each of the enemy target's phase.",
            "realModifierNamne": "ChallengePeakBattle_ExtremeAbility_0001",
            "BEKey": 1912336050,
            "params": [
              4,
              0.15
            ]
          },
          {
            "name": "Depowered++",
            "desc": "When entering combat, reduces ally target's Energy by #1[i]% and decreases their Energy Regeneration Rate by #2[i]% outside of their turn for #3[i] turn(s).",
            "realModifierNamne": "ChallengePeakBattle_ExtremeAbility_0013",
            "BEKey": 1912336050,
            "params": [
              1,
              1,
              2
            ]
          },
          {
            "name": "Unending Refinement+",
            "desc": "After the enemy target takes DMG, reduces DMG taken by this unit by #1[i]% and CRIT DMG taken by #3[i]%, stacking up to #2[i] time(s). These stacks are cleared when the enemy target's turn begins or when they enter the Weakness Break state. While the enemy target is in the Weakness Break state, stacks cannot be accumulated.",
            "realModifierNamne": "ChallengePeakBattle_EnhancedAbility_0012",
            "BEKey": 1912336050,
            "params": [
              0.03,
              10,
              0.06
            ]
          }
        ]
      }
    },
    "kingBuffList": [
      {
        "modifierName": "ADV_StageAbility_3033032",
        "realModifierNamne": "ChallengePeakBattle_BaseAbility_Plugins_0007",
        "BEKey": 1912336050,
        "name": "No Break No Rise",
        "desc": "Increases all ally targets' Break Effect by #1[i]%. Each time an enemy target's Toughness is reduced to 0, increases Break DMG taken by that target by #2[i]%, stacking up to #3[i] times.",
        "battleDesc": null,
        "buffType": "",
        "params": [
          0.6,
          0.15,
          4
        ]
      },
      {
        "modifierName": "ADV_StageAbility_3033033",
        "realModifierNamne": "ChallengePeakBattle_BaseAbility_Plugins_0008",
        "BEKey": 1912336050,
        "name": "Impassioned Spirits",
        "desc": "Increases all ally targets' ATK by #1[i]%. When using \"Horizon's Echo From Afar,\" additionally increases all ally targets' ATK by #2[i]%, this effect is stackable.",
        "battleDesc": null,
        "buffType": "",
        "params": [
          0.4,
          0.2
        ]
      },
      {
        "modifierName": "ADV_StageAbility_3033034",
        "realModifierNamne": "ChallengePeakBattle_BaseAbility_Plugins_0009",
        "BEKey": 1912336050,
        "name": "Seize the Moment",
        "desc": "Increases all ally targets' DMG by #1[i]%. After an ally target uses an attack, applies Weakness corresponding to this unit's Type to the attacked enemy target. This effect is removed when the enemy target recovers from Weakness Break state.",
        "battleDesc": null,
        "buffType": "",
        "params": [
          0.4
        ]
      }
    ],
    "patchName": "3.8"
  },
  {
    "id": 2,
    "image": "activityBG/ChallengePeakPanelBanner_4002.png",
    "realName": "Illusory Realm of the Blazing Sun",
    "buffData": null,
    "floorData": {
      "1": {
        "floorName": "Knight (I)",
        "stageDataObject": {
          "stage1": {
            "ids": [
              30502011
            ],
            "stageDataArray": [
              {
                "stageName": "Aurumaton Spectral Envoy",
                "enemyLevel": 95,
                "modifiersToAdd": [],
                "buffOverride": null,
                "battleEventAbilities": [
                  {
                    "realModifierNamne": "BattleEventAbility_SummonMonsterInfinite",
                    "BEKey": -1097634517,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  },
                  {
                    "realModifierNamne": "BattleEventAbility_ChallengePeakBattle_CountDown",
                    "BEKey": 1912336050,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  }
                ],
                "stageType": "Challenge",
                "enemyList": [
                  {
                    "isPF": true,
                    "scaleElite": 345,
                    "enemies": [
                      {
                        "name": "Dreamjolt Troupe's Bubble Hound",
                        "id": 3002030,
                        "image": 3002030,
                        "rank": "MinionLv2",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 392802.530625,
                        "speedBase": 132,
                        "critDMG": 0.2,
                        "effectRES": 0.2,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Physical",
                        "hpBars": 1,
                        "toughnessBase": 30,
                        "weaknessList": [
                          "Physical",
                          "Thunder",
                          "Wind"
                        ],
                        "resistances": {
                          "Fire": 0.2,
                          "Ice": 0.2,
                          "Quantum": 0.2,
                          "Imaginary": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      {
                        "name": "Aurumaton Spectral Envoy",
                        "id": 2013020,
                        "image": 2013020,
                        "rank": "Elite",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 2094946.83,
                        "speedBase": 158.4,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Physical",
                        "hpBars": 1,
                        "toughnessBase": 100,
                        "weaknessList": [
                          "Physical",
                          "Thunder",
                          "Imaginary"
                        ],
                        "resistances": {
                          "Fire": 0.2,
                          "Ice": 0.2,
                          "Wind": 0.2,
                          "Quantum": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      {
                        "name": "Howling Casket",
                        "id": 2033010,
                        "image": 2033010,
                        "rank": "Elite",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 2094946.83,
                        "speedBase": 158.4,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Physical",
                        "hpBars": 1,
                        "toughnessBase": 120,
                        "weaknessList": [
                          "Thunder",
                          "Wind",
                          "Imaginary"
                        ],
                        "resistances": {
                          "Physical": 0.2,
                          "Fire": 0.2,
                          "Ice": 0.2,
                          "Quantum": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      0,
                      0,
                      2,
                      0,
                      1,
                      0,
                      0
                    ],
                    "totalMax": 10,
                    "fieldMax": 4,
                    "abilityName": "",
                    "params": []
                  }
                ],
                "scalarHard": 3,
                "configData": {
                  "_Wave": "1",
                  "_IsEliteBattle": "1",
                  "_StageInfiniteGroup": "30502011",
                  "_CreateBattleEvent": "30502"
                }
              }
            ]
          },
          "stage2": {
            "ids": null,
            "stageDataArray": []
          }
        },
        "tagList": [
          {
            "name": "Taunting",
            "desc": "Enemy target takes immediate action after being attacked #1[i] time(s). This tally resets at the start of the enemy target's turn.",
            "realModifierNamne": "ChallengePeakBattle_BaseAbility_0008",
            "BEKey": 1912336050,
            "params": [
              6
            ]
          }
        ]
      },
      "2": {
        "floorName": "Knight (II)",
        "stageDataObject": {
          "stage1": {
            "ids": [
              30502012
            ],
            "stageDataArray": [
              {
                "stageName": "Borisin Warhead: Hoolay",
                "enemyLevel": 95,
                "modifiersToAdd": [],
                "buffOverride": null,
                "battleEventAbilities": [
                  {
                    "realModifierNamne": "BattleEventAbility_SummonMonsterInfinite",
                    "BEKey": -1097634517,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  },
                  {
                    "realModifierNamne": "BattleEventAbility_ChallengePeakBattle_CountDown",
                    "BEKey": 1912336050,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  }
                ],
                "stageType": "Challenge",
                "enemyList": [
                  {
                    "isPF": true,
                    "scaleElite": 346,
                    "enemies": [
                      {
                        "name": "Ichor Memosprite: Winged Serpent",
                        "id": 4063010,
                        "image": 4063010,
                        "rank": "Elite",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 1955283.708,
                        "speedBase": 158.4,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Imaginary",
                        "hpBars": 1,
                        "toughnessBase": 160,
                        "weaknessList": [
                          "Physical",
                          "Fire",
                          "Ice"
                        ],
                        "resistances": {
                          "Thunder": 0.2,
                          "Wind": 0.2,
                          "Quantum": 0.2,
                          "Imaginary": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      {
                        "name": "Howling Casket",
                        "id": 2033010,
                        "image": 2033010,
                        "rank": "Elite",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 1466462.781,
                        "speedBase": 158.4,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Physical",
                        "hpBars": 1,
                        "toughnessBase": 120,
                        "weaknessList": [
                          "Thunder",
                          "Wind",
                          "Imaginary"
                        ],
                        "resistances": {
                          "Physical": 0.2,
                          "Fire": 0.2,
                          "Ice": 0.2,
                          "Quantum": 0.2
                        },
                        "resistancesDebuff": {}
                      }
                    ],
                    "totalMax": 2,
                    "fieldMax": 2,
                    "abilityName": "",
                    "params": []
                  },
                  {
                    "isPF": true,
                    "scaleElite": 346,
                    "enemies": [
                      {
                        "name": "Borisin Warhead: Hoolay",
                        "id": 2034010,
                        "image": 2034010,
                        "rank": "LittleBoss",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 3360643.873125,
                        "speedBase": 264,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Thunder",
                        "hpBars": 2,
                        "toughnessBase": 240,
                        "weaknessList": [
                          "Physical",
                          "Fire",
                          "Wind"
                        ],
                        "resistances": {
                          "Ice": 0.2,
                          "Thunder": 0.2,
                          "Quantum": 0.2,
                          "Imaginary": 0.2
                        },
                        "resistancesDebuff": {
                          "STAT_CTRL_Frozen": 0.75,
                          "STAT_Confine": 0.75,
                          "STAT_Entangle": 0.75
                        }
                      }
                    ],
                    "totalMax": 1,
                    "fieldMax": 1,
                    "abilityName": "",
                    "params": []
                  }
                ],
                "scalarHard": 3,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1",
                  "_StageInfiniteGroup": "30502012",
                  "_CreateBattleEvent": "30502"
                }
              }
            ]
          },
          "stage2": {
            "ids": null,
            "stageDataArray": []
          }
        },
        "tagList": [
          {
            "name": "Interference",
            "desc": "After the enemy target uses an attack, randomly causes #1[i]% or #2[i]% action delay to the attacked target.",
            "realModifierNamne": "ChallengePeakBattle_BaseAbility_0009",
            "BEKey": 1912336050,
            "params": [
              0.05,
              0.1
            ]
          },
          {
            "name": "Energy Absorption",
            "desc": "After an enemy target receives an attack, reduces the attacker's Energy by #1[i] points, except when the attacker's Energy is maxed. When an enemy target is defeated, the attacker regenerates #2[i] Energy.",
            "realModifierNamne": "ChallengePeakBattle_BaseAbility_0005",
            "BEKey": 1912336050,
            "params": [
              2,
              10
            ]
          }
        ]
      },
      "3": {
        "floorName": "Knight (III)",
        "stageDataObject": {
          "stage1": {
            "ids": [
              30502013
            ],
            "stageDataArray": [
              {
                "stageName": "Wonder Forest's Banacademic Office Staff",
                "enemyLevel": 95,
                "modifiersToAdd": [],
                "buffOverride": null,
                "battleEventAbilities": [
                  {
                    "realModifierNamne": "BattleEventAbility_SummonMonsterInfinite",
                    "BEKey": -1097634517,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  },
                  {
                    "realModifierNamne": "BattleEventAbility_ChallengePeakBattle_CountDown",
                    "BEKey": 1912336050,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  }
                ],
                "stageType": "Challenge",
                "enemyList": [
                  {
                    "isPF": true,
                    "scaleElite": 347,
                    "enemies": [
                      {
                        "name": "Senior Staff: Team Leader",
                        "id": 803301014,
                        "image": 8033010,
                        "rank": "Elite",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 1396631.22,
                        "speedBase": 158.4,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Physical",
                        "hpBars": 1,
                        "toughnessBase": 120,
                        "weaknessList": [
                          "Fire",
                          "Ice",
                          "Imaginary"
                        ],
                        "resistances": {
                          "Physical": 0.2,
                          "Thunder": 0.2,
                          "Wind": 0.2,
                          "Quantum": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      {
                        "name": "Abundance Sprite: Malefic Ape",
                        "id": 2023020,
                        "image": 2023020,
                        "rank": "Elite",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 1047473.415,
                        "speedBase": 190.08,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Physical",
                        "hpBars": 1,
                        "toughnessBase": 120,
                        "weaknessList": [
                          "Fire",
                          "Ice",
                          "Wind"
                        ],
                        "resistances": {
                          "Physical": 0.2,
                          "Thunder": 0.2,
                          "Quantum": 0.2,
                          "Imaginary": 0.2
                        },
                        "resistancesDebuff": {}
                      }
                    ],
                    "totalMax": 2,
                    "fieldMax": 2,
                    "abilityName": "",
                    "params": []
                  },
                  {
                    "isPF": true,
                    "scaleElite": 347,
                    "enemies": [
                      {
                        "name": "Wonder Forest's Banacademic Office Staff",
                        "id": 3004020,
                        "image": 3004020,
                        "rank": "LittleBoss",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 3491578.05,
                        "speedBase": 105.6,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessElement": "Physical",
                        "hpBars": 2,
                        "toughnessBase": null,
                        "weaknessList": [
                          "Fire",
                          "Ice",
                          "Thunder",
                          "Imaginary"
                        ],
                        "resistances": {},
                        "resistancesDebuff": {}
                      }
                    ],
                    "totalMax": 1,
                    "fieldMax": 1,
                    "abilityName": "",
                    "params": []
                  }
                ],
                "scalarHard": 3,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1",
                  "_StageInfiniteGroup": "30502013",
                  "_CreateBattleEvent": "30502"
                }
              }
            ]
          },
          "stage2": {
            "ids": null,
            "stageDataArray": []
          }
        },
        "tagList": [
          {
            "name": "Resilient Armor",
            "desc": "Enemy target initially has #1[i] stacks of \"Resilient Armor,\" and each stack reduces DMG taken by #2[i]%. Enemy targets lose 1 stack of \"Resilient Armor\" each time their Toughness is reduced to 0.",
            "realModifierNamne": "ChallengePeakBattle_BaseAbility_0001",
            "BEKey": 1912336050,
            "params": [
              2,
              0.15
            ]
          }
        ]
      },
      "4": {
        "floorName": "King in Check",
        "stageDataObject": {
          "stage1": {
            "ids": [
              30502021
            ],
            "stageDataArray": [
              {
                "stageName": "Sublime, Radiant, Avatar of the Sky",
                "enemyLevel": 100,
                "modifiersToAdd": [],
                "buffOverride": null,
                "battleEventAbilities": [
                  {
                    "realModifierNamne": "BattleEventAbility_SummonMonsterInfinite",
                    "BEKey": -1097634517,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  },
                  {
                    "realModifierNamne": "BattleEventAbility_ChallengePeakBattle_CountDown",
                    "BEKey": 1912336050,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  }
                ],
                "stageType": "Challenge",
                "enemyList": [
                  {
                    "isPF": true,
                    "scaleElite": 353,
                    "enemies": [
                      {
                        "name": "Sublime, Radiant, Avatar of the Sky",
                        "id": 401501101,
                        "image": 4015011,
                        "rank": "BigBoss",
                        "attackBase": 641.306646,
                        "defBase": 1200.00006,
                        "hpBase": [
                          12677695.306875,
                          17748773.429625,
                          27890929.675125
                        ],
                        "speedBase": 190.08,
                        "critDMG": 0.2,
                        "effectRES": 0.4,
                        "ehr": 0.4,
                        "delay": 0.5,
                        "toughnessBars": 1,
                        "toughnessElement": "Imaginary",
                        "hpBars": 3,
                        "toughnessBase": [
                          320,
                          384,
                          384
                        ],
                        "weaknessList": [
                          "Physical",
                          "Ice",
                          "Quantum"
                        ],
                        "resistances": {
                          "Fire": 0.2,
                          "Thunder": 0.2,
                          "Wind": 0.2,
                          "Imaginary": 0.2
                        },
                        "resistancesDebuff": {
                          "STAT_CTRL": 1
                        }
                      }
                    ],
                    "totalMax": 1,
                    "fieldMax": 1,
                    "abilityName": "",
                    "params": []
                  }
                ],
                "scalarHard": 3,
                "configData": {
                  "_Wave": "1",
                  "_IsEliteBattle": "1",
                  "_StageInfiniteGroup": "30502021",
                  "_CreateBattleEvent": "30503"
                }
              }
            ]
          },
          "stage2": {
            "ids": null,
            "stageDataArray": []
          }
        },
        "tagList": [
          {
            "name": "Energy Absorption+",
            "desc": "After an enemy target receives an attack, reduces the attacker's Energy by #1[i] points, except when the attacker's Energy is maxed. When an enemy target is defeated, the attacker regenerates #2[i] Energy.",
            "realModifierNamne": "ChallengePeakBattle_EnhancedAbility_0005",
            "BEKey": 1912336050,
            "params": [
              3,
              10
            ]
          },
          {
            "name": "Sunder",
            "desc": "When ally targets are being attacked by enemies, the \"Sunder\" effect will be inflicted on them. Each stack additionally causes the holder to lose HP equal to #1[f1]% of their Max HP. This effect can be stacked indefinitely and cannot be dissipated. After targets with \"Sunder\" received a Shield from an ally target other than themselves or healing, all \"Sunder\" effects are dispelled on both targets.",
            "realModifierNamne": "ChallengePeakBattle_BaseAbility_0007",
            "BEKey": 1912336050,
            "params": [
              0.007999999
            ]
          }
        ]
      },
      "5": {
        "floorName": "King in Check: Plight",
        "stageDataObject": {
          "stage1": {
            "ids": [
              30502022
            ],
            "stageDataArray": [
              {
                "stageName": "Sublime, Radiant, Avatar of the Sky",
                "enemyLevel": 120,
                "modifiersToAdd": [],
                "buffOverride": null,
                "battleEventAbilities": [
                  {
                    "realModifierNamne": "BattleEventAbility_SummonMonsterInfinite",
                    "BEKey": -1097634517,
                    "actualParams": [
                      0.5,
                      3,
                      0,
                      0
                    ]
                  },
                  {
                    "realModifierNamne": "BattleEventAbility_ChallengePeakBattle_CountDown",
                    "BEKey": 1912336050,
                    "actualParams": [
                      0.5,
                      3,
                      0,
                      0
                    ]
                  },
                  {
                    "realModifierNamne": "BattleEventAbility_ChallengePeakBattle_HardBossScreenEffect",
                    "BEKey": 1912336050,
                    "actualParams": [
                      0.5,
                      3,
                      0,
                      0
                    ]
                  }
                ],
                "stageType": "Challenge",
                "enemyList": [
                  {
                    "isPF": true,
                    "scaleElite": 348,
                    "enemies": [
                      {
                        "name": "Sublime, Radiant, Avatar of the Sky",
                        "id": 401501101,
                        "image": 4015011,
                        "rank": "BigBoss",
                        "attackBase": 897.829308,
                        "defBase": 1200.00006,
                        "hpBase": [
                          56345311.3125,
                          78883435.8375,
                          123959684.8875
                        ],
                        "speedBase": 216,
                        "critDMG": 0.2,
                        "effectRES": 0.5,
                        "ehr": 0.5,
                        "delay": 0.5,
                        "toughnessBars": 1,
                        "toughnessElement": "Imaginary",
                        "hpBars": 3,
                        "toughnessBase": [
                          320,
                          384,
                          384
                        ],
                        "weaknessList": [
                          "Physical",
                          "Ice",
                          "Quantum"
                        ],
                        "resistances": {
                          "Fire": 0.2,
                          "Thunder": 0.2,
                          "Wind": 0.2,
                          "Imaginary": 0.2
                        },
                        "resistancesDebuff": {
                          "STAT_CTRL": 1
                        }
                      }
                    ],
                    "totalMax": 1,
                    "fieldMax": 1,
                    "abilityName": "",
                    "params": []
                  }
                ],
                "scalarHard": 3,
                "configData": {
                  "_Wave": "1",
                  "_IsEliteBattle": "1",
                  "_StageInfiniteGroup": "30502022",
                  "_CreateBattleEvent": "30504"
                }
              }
            ]
          },
          "stage2": {
            "ids": null,
            "stageDataArray": []
          }
        },
        "tagList": [
          {
            "name": "Energy Absorption++",
            "desc": "After an enemy target receives an attack, reduces the attacker's Energy by #1[i] points, except when the attacker's Energy is maxed. When an enemy target is defeated, the attacker regenerates #2[i] Energy.",
            "realModifierNamne": "ChallengePeakBattle_ExtremeAbility_0005",
            "BEKey": 1912336050,
            "params": [
              4,
              10
            ]
          },
          {
            "name": "Sunder++",
            "desc": "When ally targets are being attacked by enemies, the \"Sunder++\" effect will be inflicted on them. Each stack additionally causes the holder to lose HP equal to #1[f1]% of their Max HP. This effect can be stacked indefinitely and cannot be dissipated. After targets with \"Sunder++\" received a Shield from an ally target other than themselves or healing, all \"Sunder++\" effects are dispelled on both targets.",
            "realModifierNamne": "ChallengePeakBattle_ExtremeAbility_0007",
            "BEKey": 1912336050,
            "params": [
              0.015999999
            ]
          }
        ]
      }
    },
    "kingBuffList": [
      {
        "modifierName": "ADV_StageAbility_3033020",
        "realModifierNamne": "ChallengePeakBattle_BaseAbility_Plugins_0004",
        "BEKey": 1912336050,
        "name": "Sanguine Vitality",
        "desc": "Increases CRIT DMG of all ally targets by #1[i]%. When using \"Healing Rainbow\", the increased Max HP is further raised by #2[i]%.",
        "battleDesc": null,
        "buffType": "",
        "params": [
          0.5,
          0.6
        ]
      },
      {
        "modifierName": "ADV_StageAbility_3033021",
        "realModifierNamne": "ChallengePeakBattle_BaseAbility_Plugins_0005",
        "BEKey": 1912336050,
        "name": "Power Surge",
        "desc": "Increases all allies' Basic ATK, Skill, and Ultimate DMG by #1[i]%. When using \"Healing Rainbow,\" additionally increases all allies' ATK by #2[i] points.",
        "battleDesc": null,
        "buffType": "",
        "params": [
          0.8,
          2000
        ]
      },
      {
        "modifierName": "ADV_StageAbility_3033022",
        "realModifierNamne": "ChallengePeakBattle_BaseAbility_Plugins_0006",
        "BEKey": 1912336050,
        "name": "Fluid Dash",
        "desc": "Increases all allies' DoT All-Type RES PEN by #1[i]%. When using \"Healing Rainbow,\" additionally increases all allies' SPD by #2[i]%.",
        "battleDesc": null,
        "buffType": "",
        "params": [
          0.4,
          0.3
        ]
      }
    ],
    "patchName": "3.7"
  },
  {
    "id": 1,
    "image": "activityBG/ChallengePeakPanelBanner.png",
    "realName": "Intellitron Endgame",
    "buffData": null,
    "floorData": {
      "1": {
        "floorName": "Knight (I)",
        "stageDataObject": {
          "stage1": {
            "ids": [
              30501011
            ],
            "stageDataArray": [
              {
                "stageName": "\"Tomorrow in Harmonious Chords\"",
                "enemyLevel": 95,
                "modifiersToAdd": [],
                "buffOverride": null,
                "battleEventAbilities": [
                  {
                    "realModifierNamne": "BattleEventAbility_SummonMonsterInfinite",
                    "BEKey": -1097634517,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  },
                  {
                    "realModifierNamne": "BattleEventAbility_ChallengePeakBattle_CountDown",
                    "BEKey": 1912336050,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  }
                ],
                "stageType": "Challenge",
                "enemyList": [
                  {
                    "isPF": true,
                    "scaleElite": 340,
                    "enemies": [
                      {
                        "name": "Memory Zone Meme \"Heartbreaker\"",
                        "id": 3012020,
                        "image": 3012020,
                        "rank": "MinionLv2",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 117317.02248,
                        "speedBase": 132,
                        "critDMG": 0.2,
                        "effectRES": 0.2,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Physical",
                        "hpBars": 1,
                        "toughnessBase": 20,
                        "weaknessList": [
                          "Fire",
                          "Ice",
                          "Thunder"
                        ],
                        "resistances": {
                          "Physical": 0.2,
                          "Wind": 0.2,
                          "Quantum": 0.2,
                          "Imaginary": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      {
                        "name": "Memory Zone Meme \"Shell of Faded Rage\"",
                        "id": 3013010,
                        "image": 3013010,
                        "rank": "Elite",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 1173170.2248,
                        "speedBase": 145.2,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Physical",
                        "hpBars": 1,
                        "toughnessBase": 120,
                        "weaknessList": [
                          "Thunder",
                          "Quantum",
                          "Imaginary"
                        ],
                        "resistances": {
                          "Physical": 0.2,
                          "Fire": 0.2,
                          "Ice": 0.2,
                          "Wind": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      1,
                      0
                    ],
                    "totalMax": 4,
                    "fieldMax": 4,
                    "abilityName": "",
                    "params": []
                  },
                  {
                    "isPF": true,
                    "scaleElite": 340,
                    "enemies": [
                      {
                        "name": "The Past, Present, and Eternal Show",
                        "id": 3004012,
                        "image": 3004012,
                        "rank": "LittleBoss",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 4189893.66,
                        "speedBase": null,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessElement": "Physical",
                        "hpBars": 2,
                        "toughnessBase": null,
                        "weaknessList": [],
                        "resistances": {},
                        "resistancesDebuff": {}
                      }
                    ],
                    "totalMax": 1,
                    "fieldMax": 1,
                    "abilityName": "",
                    "params": []
                  }
                ],
                "scalarHard": 3,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1",
                  "_StageInfiniteGroup": "30501011",
                  "_CreateBattleEvent": "30502"
                }
              }
            ]
          },
          "stage2": {
            "ids": null,
            "stageDataArray": []
          }
        },
        "tagList": [
          {
            "name": "Resilient Armor",
            "desc": "Enemy target initially has #1[i] stacks of \"Resilient Armor,\" and each stack reduces DMG taken by #2[i]%. Enemy targets lose 1 stack of \"Resilient Armor\" each time their Toughness is reduced to 0.",
            "realModifierNamne": "ChallengePeakBattle_BaseAbility_0001",
            "BEKey": 1912336050,
            "params": [
              2,
              0.15
            ]
          }
        ]
      },
      "2": {
        "floorName": "Knight (II)",
        "stageDataObject": {
          "stage1": {
            "ids": [
              30501012
            ],
            "stageDataArray": [
              {
                "stageName": "Memory Zone Meme \"Something Unto Death\"",
                "enemyLevel": 95,
                "modifiersToAdd": [],
                "buffOverride": null,
                "battleEventAbilities": [
                  {
                    "realModifierNamne": "BattleEventAbility_SummonMonsterInfinite",
                    "BEKey": -1097634517,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  },
                  {
                    "realModifierNamne": "BattleEventAbility_ChallengePeakBattle_CountDown",
                    "BEKey": 1912336050,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  }
                ],
                "stageType": "Challenge",
                "enemyList": [
                  {
                    "isPF": true,
                    "scaleElite": 341,
                    "enemies": [
                      {
                        "name": "Servant of Tides",
                        "id": 4052010,
                        "image": 4052010,
                        "rank": "MinionLv2",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 272343.0879,
                        "speedBase": 190.08,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Ice",
                        "hpBars": 1,
                        "toughnessBase": 40,
                        "weaknessList": [
                          "Physical",
                          "Thunder",
                          "Wind"
                        ],
                        "resistances": {
                          "Fire": 0.2,
                          "Ice": 0.2,
                          "Quantum": 0.2,
                          "Imaginary": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      {
                        "name": "Lady of Crashing Waves",
                        "id": 4053010,
                        "image": 4053010,
                        "rank": "Elite",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 1256968.098,
                        "speedBase": 190.08,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Ice",
                        "hpBars": 1,
                        "toughnessBase": 180,
                        "weaknessList": [
                          "Physical",
                          "Fire",
                          "Thunder"
                        ],
                        "resistances": {
                          "Ice": 0.2,
                          "Wind": 0.2,
                          "Quantum": 0.2,
                          "Imaginary": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      0,
                      0,
                      1
                    ],
                    "totalMax": 5,
                    "fieldMax": 3,
                    "abilityName": "",
                    "params": []
                  },
                  {
                    "isPF": true,
                    "scaleElite": 341,
                    "enemies": [
                      {
                        "name": "Memory Zone Meme \"Something Unto Death\"",
                        "id": 3014020,
                        "image": 3014020,
                        "rank": "LittleBoss",
                        "attackBase": 688.06287,
                        "defBase": 1149.9999,
                        "hpBase": 1843553.2104,
                        "speedBase": 190.08,
                        "critDMG": 0.2,
                        "effectRES": 0.4,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Physical",
                        "hpBars": 2,
                        "toughnessBase": 240,
                        "weaknessList": [
                          "Fire",
                          "Wind",
                          "Imaginary"
                        ],
                        "resistances": {
                          "Physical": 0.2,
                          "Ice": 0.2,
                          "Thunder": 0.2,
                          "Quantum": 0.2
                        },
                        "resistancesDebuff": {
                          "STAT_CTRL_Frozen": 0.5,
                          "STAT_Entangle": 0.5
                        }
                      }
                    ],
                    "totalMax": 1,
                    "fieldMax": 1,
                    "abilityName": "",
                    "params": []
                  }
                ],
                "scalarHard": 3,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1",
                  "_StageInfiniteGroup": "30501012",
                  "_CreateBattleEvent": "30502"
                }
              }
            ]
          },
          "stage2": {
            "ids": null,
            "stageDataArray": []
          }
        },
        "tagList": [
          {
            "name": "Tempering",
            "desc": "For every 1% HP the enemy target loses, reduces CRIT DMG dealt to them by #1[i]%.",
            "realModifierNamne": "ChallengePeakBattle_BaseAbility_0002",
            "BEKey": 1912336050,
            "params": [
              0.03
            ]
          }
        ]
      },
      "3": {
        "floorName": "Knight (III)",
        "stageDataObject": {
          "stage1": {
            "ids": [
              30501013
            ],
            "stageDataArray": [
              {
                "stageName": "Dark Sun Gryphon",
                "enemyLevel": 95,
                "modifiersToAdd": [],
                "buffOverride": null,
                "battleEventAbilities": [
                  {
                    "realModifierNamne": "BattleEventAbility_SummonMonsterInfinite",
                    "BEKey": -1097634517,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  },
                  {
                    "realModifierNamne": "BattleEventAbility_ChallengePeakBattle_CountDown",
                    "BEKey": 1912336050,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  }
                ],
                "stageType": "Challenge",
                "enemyList": [
                  {
                    "isPF": true,
                    "scaleElite": 342,
                    "enemies": [
                      {
                        "name": "Black Tide's Decrepit Bow",
                        "id": 4032050,
                        "image": 4032050,
                        "rank": "MinionLv2",
                        "attackBase": 625.5117,
                        "defBase": 1149.9999,
                        "hpBase": 523736.7075,
                        "speedBase": 204.6,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Physical",
                        "hpBars": 1,
                        "toughnessBase": 30,
                        "weaknessList": [
                          "Physical",
                          "Ice",
                          "Quantum"
                        ],
                        "resistances": {
                          "Fire": 0.2,
                          "Thunder": 0.2,
                          "Wind": 0.2,
                          "Imaginary": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      {
                        "name": "Black Tide's Corroded Daemon",
                        "id": 4033010,
                        "image": 4033010,
                        "rank": "Elite",
                        "attackBase": 625.5117,
                        "defBase": 1149.9999,
                        "hpBase": 2444104.635,
                        "speedBase": 158.4,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Physical",
                        "hpBars": 1,
                        "toughnessBase": 160,
                        "weaknessList": [
                          "Physical",
                          "Wind",
                          "Quantum"
                        ],
                        "resistances": {
                          "Fire": 0.2,
                          "Ice": 0.2,
                          "Thunder": 0.2,
                          "Imaginary": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      {
                        "name": "Tide-Eroded Blade",
                        "id": 4032010,
                        "image": 4032010,
                        "rank": "MinionLv2",
                        "attackBase": 625.5117,
                        "defBase": 1149.9999,
                        "hpBase": 523736.7075,
                        "speedBase": 132,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Physical",
                        "hpBars": 1,
                        "toughnessBase": 30,
                        "weaknessList": [
                          "Thunder",
                          "Quantum",
                          "Imaginary"
                        ],
                        "resistances": {
                          "Physical": 0.2,
                          "Fire": 0.2,
                          "Ice": 0.2,
                          "Wind": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      0
                    ],
                    "totalMax": 4,
                    "fieldMax": 4,
                    "abilityName": "",
                    "params": []
                  },
                  {
                    "isPF": true,
                    "scaleElite": 342,
                    "enemies": [
                      {
                        "name": "Black Tide's Corroded Daemon",
                        "id": 4033010,
                        "image": 4033010,
                        "rank": "Elite",
                        "attackBase": 625.5117,
                        "defBase": 1149.9999,
                        "hpBase": 2444104.635,
                        "speedBase": 158.4,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Physical",
                        "hpBars": 1,
                        "toughnessBase": 160,
                        "weaknessList": [
                          "Physical",
                          "Wind",
                          "Quantum"
                        ],
                        "resistances": {
                          "Fire": 0.2,
                          "Ice": 0.2,
                          "Thunder": 0.2,
                          "Imaginary": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      {
                        "name": "Dark Sun Gryphon",
                        "id": 4033030,
                        "image": 4033030,
                        "rank": "Elite",
                        "attackBase": 625.5117,
                        "defBase": 1149.9999,
                        "hpBase": 2618683.5375,
                        "speedBase": 190.08,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.36,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Wind",
                        "hpBars": 1,
                        "toughnessBase": 160,
                        "weaknessList": [
                          "Physical",
                          "Fire",
                          "Quantum"
                        ],
                        "resistances": {
                          "Ice": 0.2,
                          "Thunder": 0.2,
                          "Wind": 0.2,
                          "Imaginary": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      0
                    ],
                    "totalMax": 3,
                    "fieldMax": 3,
                    "abilityName": "",
                    "params": []
                  }
                ],
                "scalarHard": 3,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1",
                  "_StageInfiniteGroup": "30501013",
                  "_CreateBattleEvent": "30502"
                }
              }
            ]
          },
          "stage2": {
            "ids": null,
            "stageDataArray": []
          }
        },
        "tagList": [
          {
            "name": "Inversion",
            "desc": "Each time after the enemy target is attacked, the attacker will lose HP equal to #1[i]% of their own Max HP. This effect is Non-fatal.",
            "realModifierNamne": "ChallengePeakBattle_BaseAbility_0003",
            "BEKey": 1912336050,
            "params": [
              0.02
            ]
          },
          {
            "name": "Under Protection",
            "desc": "All non-elite enemy targets won't have their HP and Toughness reduced, and increases their Effect RES by #1[i]%. When all elite enemy targets are defeated, remaining enemy targets will also be eliminated.",
            "realModifierNamne": "ChallengePeakBattle_BaseAbility_0004",
            "BEKey": 1912336050,
            "params": [
              1
            ]
          }
        ]
      },
      "4": {
        "floorName": "King in Check",
        "stageDataObject": {
          "stage1": {
            "ids": [
              30501021
            ],
            "stageDataArray": [
              {
                "stageName": "First Genius, Entelechy, Zandar",
                "enemyLevel": 100,
                "modifiersToAdd": [],
                "buffOverride": null,
                "battleEventAbilities": [
                  {
                    "realModifierNamne": "BattleEventAbility_SummonMonsterInfinite",
                    "BEKey": -1097634517,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  },
                  {
                    "realModifierNamne": "BattleEventAbility_ChallengePeakBattle_CountDown",
                    "BEKey": 1912336050,
                    "actualParams": [
                      0.5,
                      7,
                      4,
                      0.5
                    ]
                  }
                ],
                "stageType": "Challenge",
                "enemyList": [
                  {
                    "isPF": true,
                    "scaleElite": 343,
                    "enemies": [
                      {
                        "name": "Noontide Gryphon",
                        "id": 4023010,
                        "image": 4023010,
                        "rank": "Elite",
                        "attackBase": 769.5679752,
                        "defBase": 1200.00006,
                        "hpBase": 4687929.99792,
                        "speedBase": 158.4,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.4,
                        "delay": 0.5,
                        "toughnessBars": 1,
                        "toughnessElement": "Fire",
                        "hpBars": 1,
                        "toughnessBase": 160,
                        "weaknessList": [
                          "Physical",
                          "Quantum",
                          "Imaginary"
                        ],
                        "resistances": {
                          "Fire": 0.2,
                          "Ice": 0.2,
                          "Thunder": 0.2,
                          "Wind": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      {
                        "name": "Moonlit Pegasus",
                        "id": 4023020,
                        "image": 4023020,
                        "rank": "Elite",
                        "attackBase": 769.5679752,
                        "defBase": 1200.00006,
                        "hpBase": 3966709.99824,
                        "speedBase": 132,
                        "critDMG": 0.2,
                        "effectRES": 0.3,
                        "ehr": 0.4,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Quantum",
                        "hpBars": 1,
                        "toughnessBase": 160,
                        "weaknessList": [
                          "Fire",
                          "Quantum",
                          "Imaginary"
                        ],
                        "resistances": {
                          "Physical": 0.2,
                          "Ice": 0.2,
                          "Thunder": 0.2,
                          "Wind": 0.2
                        },
                        "resistancesDebuff": {}
                      }
                    ],
                    "totalMax": 2,
                    "fieldMax": 2,
                    "abilityName": "",
                    "params": []
                  },
                  {
                    "isPF": true,
                    "scaleElite": 343,
                    "enemies": [
                      {
                        "name": "First Genius, Entelechy, Zandar",
                        "id": 4044010,
                        "image": 4044010,
                        "rank": "LittleBoss",
                        "attackBase": 769.5679752,
                        "defBase": 1200.00006,
                        "hpBase": 43273199.9808,
                        "speedBase": 211.2,
                        "critDMG": 0.2,
                        "effectRES": 0.4,
                        "ehr": 0.4,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Quantum",
                        "hpBars": 1,
                        "toughnessBase": 200,
                        "weaknessList": [
                          "Physical",
                          "Ice",
                          "Wind"
                        ],
                        "resistances": {
                          "Fire": 0.2,
                          "Thunder": 0.2,
                          "Quantum": 0.2,
                          "Imaginary": 0.2
                        },
                        "resistancesDebuff": {
                          "STAT_CTRL": 0.5
                        }
                      }
                    ],
                    "totalMax": 1,
                    "fieldMax": 1,
                    "abilityName": "",
                    "params": []
                  }
                ],
                "scalarHard": 3,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1",
                  "_StageInfiniteGroup": "30501021",
                  "_CreateBattleEvent": "30503"
                }
              }
            ]
          },
          "stage2": {
            "ids": null,
            "stageDataArray": []
          }
        },
        "tagList": [
          {
            "name": "Inversion",
            "desc": "Each time after the enemy target is attacked, the attacker will lose HP equal to #1[i]% of their own Max HP. This effect is Non-fatal.",
            "realModifierNamne": "ChallengePeakBattle_BaseAbility_0003",
            "BEKey": 1912336050,
            "params": [
              0.02
            ]
          },
          {
            "name": "Energy Absorption",
            "desc": "After an enemy target receives an attack, reduces the attacker's Energy by #1[i] points, except when the attacker's Energy is maxed. When an enemy target is defeated, the attacker regenerates #2[i] Energy.",
            "realModifierNamne": "ChallengePeakBattle_BaseAbility_0005",
            "BEKey": 1912336050,
            "params": [
              2,
              10
            ]
          },
          {
            "name": "Sunder",
            "desc": "When ally targets are being attacked by enemies, the \"Sunder\" effect will be inflicted on them. Each stack additionally causes the holder to lose HP equal to #1[f1]% of their Max HP. This effect can be stacked indefinitely and cannot be dissipated. After targets with \"Sunder\" received a Shield from an ally target other than themselves or healing, all \"Sunder\" effects are dispelled on both targets.",
            "realModifierNamne": "ChallengePeakBattle_BaseAbility_0007",
            "BEKey": 1912336050,
            "params": [
              0.007999999
            ]
          }
        ]
      },
      "5": {
        "floorName": "King in Check: Plight",
        "stageDataObject": {
          "stage1": {
            "ids": [
              30501022
            ],
            "stageDataArray": [
              {
                "stageName": "First Genius, Entelechy, Zandar",
                "enemyLevel": 120,
                "modifiersToAdd": [],
                "buffOverride": null,
                "battleEventAbilities": [
                  {
                    "realModifierNamne": "BattleEventAbility_SummonMonsterInfinite",
                    "BEKey": -1097634517,
                    "actualParams": [
                      0.5,
                      3,
                      0,
                      0
                    ]
                  },
                  {
                    "realModifierNamne": "BattleEventAbility_ChallengePeakBattle_CountDown",
                    "BEKey": 1912336050,
                    "actualParams": [
                      0.5,
                      3,
                      0,
                      0
                    ]
                  },
                  {
                    "realModifierNamne": "BattleEventAbility_ChallengePeakBattle_HardBossScreenEffect",
                    "BEKey": 1912336050,
                    "actualParams": [
                      0.5,
                      3,
                      0,
                      0
                    ]
                  }
                ],
                "stageType": "Challenge",
                "enemyList": [
                  {
                    "isPF": true,
                    "scaleElite": 344,
                    "enemies": [
                      {
                        "name": "Noontide Gryphon",
                        "id": 4023010,
                        "image": 4023010,
                        "rank": "Elite",
                        "attackBase": 1077.3951696,
                        "defBase": 1200.00006,
                        "hpBase": 18751719.6048,
                        "speedBase": 180,
                        "critDMG": 0.2,
                        "effectRES": 0.4,
                        "ehr": 0.5,
                        "delay": 0.5,
                        "toughnessBars": 1,
                        "toughnessElement": "Fire",
                        "hpBars": 1,
                        "toughnessBase": 160,
                        "weaknessList": [
                          "Physical",
                          "Quantum",
                          "Imaginary"
                        ],
                        "resistances": {
                          "Fire": 0.2,
                          "Ice": 0.2,
                          "Thunder": 0.2,
                          "Wind": 0.2
                        },
                        "resistancesDebuff": {}
                      },
                      {
                        "name": "Moonlit Pegasus",
                        "id": 4023020,
                        "image": 4023020,
                        "rank": "Elite",
                        "attackBase": 1077.3951696,
                        "defBase": 1200.00006,
                        "hpBase": 15866839.6656,
                        "speedBase": 150,
                        "critDMG": 0.2,
                        "effectRES": 0.4,
                        "ehr": 0.5,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Quantum",
                        "hpBars": 1,
                        "toughnessBase": 160,
                        "weaknessList": [
                          "Fire",
                          "Quantum",
                          "Imaginary"
                        ],
                        "resistances": {
                          "Physical": 0.2,
                          "Ice": 0.2,
                          "Thunder": 0.2,
                          "Wind": 0.2
                        },
                        "resistancesDebuff": {}
                      }
                    ],
                    "totalMax": 2,
                    "fieldMax": 2,
                    "abilityName": "",
                    "params": []
                  },
                  {
                    "isPF": true,
                    "scaleElite": 344,
                    "enemies": [
                      {
                        "name": "First Genius, Entelechy, Zandar",
                        "id": 4044010,
                        "image": 4044010,
                        "rank": "LittleBoss",
                        "attackBase": 1077.3951696,
                        "defBase": 1200.00006,
                        "hpBase": 173092796.352,
                        "speedBase": 240,
                        "critDMG": 0.2,
                        "effectRES": 0.5,
                        "ehr": 0.5,
                        "delay": 1,
                        "toughnessBars": 1,
                        "toughnessElement": "Quantum",
                        "hpBars": 1,
                        "toughnessBase": 200,
                        "weaknessList": [
                          "Physical",
                          "Ice",
                          "Wind"
                        ],
                        "resistances": {
                          "Fire": 0.2,
                          "Thunder": 0.2,
                          "Quantum": 0.2,
                          "Imaginary": 0.2
                        },
                        "resistancesDebuff": {
                          "STAT_CTRL": 0.5
                        }
                      }
                    ],
                    "totalMax": 1,
                    "fieldMax": 1,
                    "abilityName": "",
                    "params": []
                  }
                ],
                "scalarHard": 3,
                "configData": {
                  "_Wave": "2",
                  "_IsEliteBattle": "1",
                  "_StageInfiniteGroup": "30501022",
                  "_CreateBattleEvent": "30504"
                }
              }
            ]
          },
          "stage2": {
            "ids": null,
            "stageDataArray": []
          }
        },
        "tagList": [
          {
            "name": "Inversion+",
            "desc": "Each time after the enemy target is attacked, the attacker will lose HP equal to #1[i]% of their own Max HP. This effect is Non-fatal.",
            "realModifierNamne": "ChallengePeakBattle_EnhancedAbility_0003",
            "BEKey": 1912336050,
            "params": [
              0.03
            ]
          },
          {
            "name": "Energy Absorption++",
            "desc": "After an enemy target receives an attack, reduces the attacker's Energy by #1[i] points, except when the attacker's Energy is maxed. When an enemy target is defeated, the attacker regenerates #2[i] Energy.",
            "realModifierNamne": "ChallengePeakBattle_ExtremeAbility_0005",
            "BEKey": 1912336050,
            "params": [
              4,
              10
            ]
          },
          {
            "name": "Sunder++",
            "desc": "When ally targets are being attacked by enemies, the \"Sunder++\" effect will be inflicted on them. Each stack additionally causes the holder to lose HP equal to #1[f1]% of their Max HP. This effect can be stacked indefinitely and cannot be dissipated. After targets with \"Sunder++\" received a Shield from an ally target other than themselves or healing, all \"Sunder++\" effects are dispelled on both targets.",
            "realModifierNamne": "ChallengePeakBattle_ExtremeAbility_0007",
            "BEKey": 1912336050,
            "params": [
              0.015999999
            ]
          }
        ]
      }
    },
    "kingBuffList": [
      {
        "modifierName": "ADV_StageAbility_3033006",
        "realModifierNamne": "ChallengePeakBattle_BaseAbility_Plugins_0001",
        "BEKey": 1912336050,
        "name": "Think Outside the Box",
        "desc": "When the number of ally targets currently on the field is not 4, all allies' dealt DMG increases by #1[i]%.",
        "battleDesc": null,
        "buffType": "",
        "params": [
          0.6
        ]
      },
      {
        "modifierName": "ADV_StageAbility_3033007",
        "realModifierNamne": "ChallengePeakBattle_BaseAbility_Plugins_0002",
        "BEKey": 1912336050,
        "name": "Infantry and Cavalry",
        "desc": "Whenever any ally uses their Ultimate, ignores #1[i]% of target's DEF. After Ultimate deals DMG, the next Skill will ignore #2[i]% of target's DEF.",
        "battleDesc": null,
        "buffType": "",
        "params": [
          0.4,
          0.4
        ]
      },
      {
        "modifierName": "ADV_StageAbility_3033008",
        "realModifierNamne": "ChallengePeakBattle_BaseAbility_Plugins_0003",
        "BEKey": 1912336050,
        "name": "Hammer and Anvil",
        "desc": "After receiving Shield effects or healing from ally targets (excluding this unit), reduces DMG taken by this unit by #1[i]%, and increases All-Type RES PEN by #2[i]% for #3[i] turn(s).",
        "battleDesc": null,
        "buffType": "",
        "params": [
          0.25,
          0.2,
          2
        ]
      }
    ],
    "patchName": "3.6"
  }
]