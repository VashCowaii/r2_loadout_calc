const compositeAbilityObject = {
  "fullCharacterName": "Castorice",
  "trimCharacterName": "Castorice",
  "summonName": "Netherwing: Pollux",
  "trimSummonName": "NetherwingPollux",
  "abilityList": [
    "Castorice_Castorice_TechniqueInLevel",
    "Castorice_Castorice_PassiveAbility_1",
    "Castorice_Castorice_Ability03_Part02",
    "Castorice_Castorice_Ability03_Part01",
    "Castorice_Castorice_Ability03_EnterReady",
    "Castorice_Castorice_Ability21_Part02",
    "Castorice_Castorice_Ability21_Part01",
    "Castorice_Castorice_Ability02_Part02",
    "Castorice_Castorice_Ability02_Part01",
    "Castorice_Castorice_Ability01_Part02",
    "Castorice_Castorice_Ability01_Part01",
    "Castorice_Modifiers",
    "Castorice_Functions",
    "NetherwingPollux_Servant_CastoriceServant_BattleCry",
    "NetherwingPollux_Servant_CastoriceServant_PassiveAbility01",
    "NetherwingPollux_Servant_CastoriceServant_DeathRattle",
    "NetherwingPollux_Servant_CastoriceServant_PassiveInsertAbility_Part02",
    "NetherwingPollux_Servant_CastoriceServant_PassiveInsertAbility_Part01",
    "NetherwingPollux_Servant_CastoriceServant_Together_Part01",
    "NetherwingPollux_Servant_CastoriceServant_Ability23_Part02",
    "NetherwingPollux_Servant_CastoriceServant_Ability23_Part01",
    "NetherwingPollux_Servant_CastoriceServant_Ability22_Part02",
    "NetherwingPollux_Servant_CastoriceServant_Ability22_Part01",
    "NetherwingPollux_Servant_CastoriceServant_Ability21_Part02",
    "NetherwingPollux_Servant_CastoriceServant_Ability21_Part01",
    "NetherwingPollux_Servant_CastoriceServant_Ability02_Part02",
    "NetherwingPollux_Servant_CastoriceServant_Ability02_Part01",
    "NetherwingPollux_Servant_CastoriceServant_Ability01_Ready",
    "NetherwingPollux_Servant_CastoriceServant_Ability01_Part02",
    "NetherwingPollux_Servant_CastoriceServant_Ability01_Part01",
    "NetherwingPollux_Modifiers",
    "NetherwingPollux_Functions"
  ],
  "abilityObject": {
    "Castorice_Castorice_TechniqueInLevel": {
      "fileName": "Castorice_Castorice_TechniqueInLevel",
      "childAbilityList": [
        "Castorice_Castorice_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "Castorice_SkillMaze_Flag",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Castorice_Passive_Count",
          "value": {
            "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
            "displayLines": "Castorice_Passive_MaxCount",
            "constants": [],
            "variables": [
              "Castorice_Passive_MaxCount"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Castorice_Ability03_Field"
        },
        {
          "name": "Summon Memosprite",
          "memoID": 11407,
          "valuePerStack": {
            "Castorice_Ability21_P3_HPPercentage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "CastoriceServant_BaseSpeed": {
              "operator": "Variables[0] (165) || RETURN",
              "displayLines": "165",
              "constants": [],
              "variables": [
                165
              ]
            },
            "CastoriceServant_LifeTime": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "CastoriceServant_CurrentHP": {
              "operator": "Variables[0] (Castorice_Passive_MaxCount) || Variables[1] (0.5) || MUL || RETURN",
              "displayLines": "(Castorice_Passive_MaxCount * 0.5)",
              "constants": [],
              "variables": [
                "Castorice_Passive_MaxCount",
                0.5
              ]
            },
            "CastoriceServant_MaxHP": {
              "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
              "displayLines": "Castorice_Passive_MaxCount",
              "constants": [],
              "variables": [
                "Castorice_Passive_MaxCount"
              ]
            },
            "CastoriceServant_PointB2_SpeedRatio": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "CastoriceServant_PointB3_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "CastoriceServant_PointB3_MaxLayer": {
              "operator": "Variables[0] (6) || RETURN",
              "displayLines": "6",
              "constants": [],
              "variables": [
                6
              ]
            },
            "CastoriceServant_Eidolon1_HPRatio01": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            },
            "CastoriceServant_Eidolon1_HPRatio02": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "CastoriceServant_Eidolon1_DamageRatio01": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
              ]
            },
            "CastoriceServant_Eidolon1_DamageRatio02": {
              "operator": "Variables[0] (1.4) || RETURN",
              "displayLines": "1.4",
              "constants": [],
              "variables": [
                1.4
              ]
            },
            "CastoriceServant_Eidolon2_MaxCount": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "CastoriceServant_Eidolon6_AddCount": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "variableName": "EnterBattlePlayTimes",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Castorice_Eidolon2_Check"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Castorice_Rank02_Count",
              "value": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "variableName": "CastoriceServant_Rank02_Count",
              "value": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              }
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "advanceType": "Advance",
          "multiAdd": -1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "ReduceActionDelay",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variables": {
                "parameter[0]_NormalizedValue": 1
              }
            },
            {
              "name": "Advance/Delay up to Target",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}.[[getMemosprite]]"
              },
              "targetRef": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "refPoint": "After"
            }
          ]
        },
        {
          "name": "Reconstruct Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Castorice_Passive_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "execute": [
            {
              "name": "Copy Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "source": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "dispelFilter": "AnyStatus",
              "copyType": "Override",
              "useParamModifier": true
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "StageAbility_Maze_Castorice_Modifier",
          "valuePerStack": {
            "MDF_LoseHP": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            }
          }
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Castorice_OnWaveMonsterPerform",
          "parse": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "CL_EnterBattlePlayTimes",
              "value": 1
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Castorice_Modifier",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Technique Modifies Current Wave"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Consume",
                      "consumeFrom": "CurrentHP",
                      "target": {
                        "name": "Target Name",
                        "target": "{{All Team Members}} - {{Caster's Memosprite}}"
                      },
                      "consumePercent": {
                        "operator": "Variables[0] (MDF_LoseHP) || RETURN",
                        "displayLines": "MDF_LoseHP",
                        "constants": [],
                        "variables": [
                          "MDF_LoseHP"
                        ]
                      },
                      "consumeFloor": 1,
                      "attackType": "Unknown"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ],
              "priorityLevel": -81
            }
          ],
          "stackData": [
            "MDF_LoseHP"
          ],
          "latentQueue": [
            "Castorice_SkillMaze_Flag",
            "EnterBattlePlayTimes"
          ]
        }
      ]
    },
    "Castorice_Castorice_PassiveAbility_1": {
      "fileName": "Castorice_Castorice_PassiveAbility_1",
      "childAbilityList": [
        "Castorice_Castorice_PassiveAbility_1"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Automatically use Ultimate",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Castorice_Passive"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Contained Dark Tide"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Castorice_PointB1_HealTaxes"
            },
            {
              "name": "Define Custom Variable",
              "scope": "AITag",
              "variableName": "OverHeal",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "scope": "AITag",
              "variableName": "OverHeal",
              "value": 0
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Inverted Torch"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_Castorice_PointB2_OnListen",
              "valuePerStack": {
                "Castorice_PointB2_HPRatio": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                },
                "Castorice_PointB2_SpeedRatio": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Castorice_Eidolon2_OnListenValueChange"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Castorice_Eidolon4_Listen"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Castorice_Eidolon6_OnListen",
              "valuePerStack": {
                "MDF_QuantumPenetrate": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Castorice_RefreshMaxSpecialSPFlag"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (Castorice_Passive_Count) || RETURN",
            "displayLines": "Castorice_Passive_Count",
            "constants": [],
            "variables": [
              "Castorice_Passive_Count"
            ]
          },
          "displaySubType": "Percent",
          "displayShowIcon": "False",
          "maximum": {
            "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
            "displayLines": "Castorice_Passive_MaxCount",
            "constants": [],
            "variables": [
              "Castorice_Passive_MaxCount"
            ]
          },
          "assignState": "True",
          "bar#": "Number"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Castorice_Eidolon6_OnListen",
          "stackData": [
            "MDF_QuantumPenetrate"
          ],
          "latentQueue": [
            "OverHeal"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Castorice_Eidolon6_QuantumPenetrate[<span class=\"descriptionNumberColor\">Await for Years to Loom</span>]",
              "aliveOnly": "False",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_QuantumPenetrate) || RETURN",
                  "displayLines": "MDF_QuantumPenetrate",
                  "constants": [],
                  "variables": [
                    "MDF_QuantumPenetrate"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "modifier": "Castorice_Eidolon6_QuantumPenetrate[<span class=\"descriptionNumberColor\">Await for Years to Loom</span>]",
              "aliveOnly": "False",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_QuantumPenetrate) || RETURN",
                  "displayLines": "MDF_QuantumPenetrate",
                  "constants": [],
                  "variables": [
                    "MDF_QuantumPenetrate"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Castorice_Eidolon4_Listen",
          "stackData": [],
          "latentQueue": [
            "OverHeal"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "Castorice_Eidolon4_HealTakenRatio[<span class=\"descriptionNumberColor\">Rest in Songs of Gloom</span>]",
              "aliveOnly": "False",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Castorice_Passive02_OnListenHPChange",
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Castorice_AttackFlag",
                        "compareType": "<",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Castorice_Passive_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                              "displayLines": "MDF_MaxLayer",
                              "constants": [],
                              "variables": [
                                "MDF_MaxLayer"
                              ]
                            },
                            "valueType": "Layer"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "Castorice_Passive_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                              "duration": {
                                "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                                "displayLines": "MDF_LifeTime",
                                "constants": [],
                                "variables": [
                                  "MDF_LifeTime"
                                ]
                              },
                              "stackLimit": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
                                ]
                              },
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                                  "displayLines": "MDF_AllDamageTypeAddedRatio",
                                  "constants": [],
                                  "variables": [
                                    "MDF_AllDamageTypeAddedRatio"
                                  ]
                                },
                                "MDF_MaxLayer": {
                                  "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                  "displayLines": "MDF_MaxLayer",
                                  "constants": [],
                                  "variables": [
                                    "MDF_MaxLayer"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster's Memosprite}}"
                              },
                              "modifier": "Castorice_Passive_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                              "duration": {
                                "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                                "displayLines": "MDF_LifeTime",
                                "constants": [],
                                "variables": [
                                  "MDF_LifeTime"
                                ]
                              },
                              "stackLimit": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
                                ]
                              },
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                                  "displayLines": "MDF_AllDamageTypeAddedRatio",
                                  "constants": [],
                                  "variables": [
                                    "MDF_AllDamageTypeAddedRatio"
                                  ]
                                },
                                "MDF_MaxLayer": {
                                  "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                  "displayLines": "MDF_MaxLayer",
                                  "constants": [],
                                  "variables": [
                                    "MDF_MaxLayer"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "Castorice_Passive_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                              "duration": {
                                "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                                "displayLines": "MDF_LifeTime",
                                "constants": [],
                                "variables": [
                                  "MDF_LifeTime"
                                ]
                              },
                              "stackLimit": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
                                ]
                              },
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                                  "displayLines": "MDF_AllDamageTypeAddedRatio",
                                  "constants": [],
                                  "variables": [
                                    "MDF_AllDamageTypeAddedRatio"
                                  ]
                                },
                                "MDF_MaxLayer": {
                                  "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                  "displayLines": "MDF_MaxLayer",
                                  "constants": [],
                                  "variables": [
                                    "MDF_MaxLayer"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster's Memosprite}}"
                              },
                              "modifier": "Castorice_Passive_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                              "duration": {
                                "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                                "displayLines": "MDF_LifeTime",
                                "constants": [],
                                "variables": [
                                  "MDF_LifeTime"
                                ]
                              },
                              "stackLimit": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
                                ]
                              },
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                                  "displayLines": "MDF_AllDamageTypeAddedRatio",
                                  "constants": [],
                                  "variables": [
                                    "MDF_AllDamageTypeAddedRatio"
                                  ]
                                },
                                "MDF_MaxLayer": {
                                  "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                  "displayLines": "MDF_MaxLayer",
                                  "constants": [],
                                  "variables": [
                                    "MDF_MaxLayer"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Castorice_RefreshMaxSpecialSPFlag",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Castorice_RefreshMaxSpecialSPFlag",
                  "value": 1
                }
              ],
              "priorityLevel": 10001
            }
          ],
          "stackData": [],
          "latentQueue": [
            "OverHeal"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Castorice_Passive",
          "modifierFlags": [
            "ListenBattleEventSkill",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Switch to Action/Ability Context"
                },
                {
                  "name": "Update Energy Value",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": 0,
                  "adjustment": "Set",
                  "ignoreBlock": true
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Castorice_RefreshMaxSpecialSPFlag",
                    "compareType": "<",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Castorice_RefreshMaxSpecialSP"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster's Memosprite}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Changes to Stats",
                          "variableName": "Current_LostHP"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "Castorice_Ability03_Field",
                            "invertCondition": true,
                            "justAddedOrActive": true
                          },
                          "passed": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "Castorice_AddSpecialSP",
                              "variables": {
                                "_FixedAddValue": {
                                  "operator": "Variables[0] (Current_LostHP) || INVERT || RETURN",
                                  "displayLines": "-Current_LostHP",
                                  "constants": [],
                                  "variables": [
                                    "Current_LostHP"
                                  ]
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Target Count",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster's Memosprite}}"
                                },
                                "compareType": ">",
                                "value2": 0,
                                "livingTargets": true
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Memosprite}}"
                                  },
                                  "variableName": "Passive_CastoriceServant_CurrentHP",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                                },
                                {
                                  "name": "Set HP Value",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Memosprite}}"
                                  },
                                  "setValue": {
                                    "operator": "Variables[0] (Passive_CastoriceServant_CurrentHP) || Variables[1] (ABS) || Variables[2] (Current_LostHP) || PARAM_1 || FUNCTION || ADD || RETURN",
                                    "displayLines": "(Passive_CastoriceServant_CurrentHP + &nbsp;<span class=\"descriptionFunctionColor\">ABS</span>(Current_LostHP))",
                                    "constants": [],
                                    "variables": [
                                      "Passive_CastoriceServant_CurrentHP",
                                      "ABS",
                                      "Current_LostHP"
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Current_LostHP",
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Castorice_SkillMaze_Flag",
                        "compareType": "<=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Castorice_AddSpecialSP",
                      "variables": {
                        "_FixedAddValue": {
                          "operator": "Variables[0] (Castorice_Passive_MaxCount) || Variables[1] (0.3) || MUL || RETURN",
                          "displayLines": "(Castorice_Passive_MaxCount * 0.3)",
                          "constants": [],
                          "variables": [
                            "Castorice_Passive_MaxCount",
                            0.3
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Leave Battle"
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "Castorice_Passive_Count",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 9999999,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "Castorice_DeltaAdd"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Castorice_Ability03_Field",
                        "invertCondition": true,
                        "justAddedOrActive": true
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (Castorice_Passive_Count) || RETURN",
                            "displayLines": "Castorice_Passive_Count",
                            "constants": [],
                            "variables": [
                              "Castorice_Passive_Count"
                            ]
                          },
                          "displaySubType": "Percent",
                          "displayShowIcon": "False",
                          "maximum": {
                            "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
                            "displayLines": "Castorice_Passive_MaxCount",
                            "constants": [],
                            "variables": [
                              "Castorice_Passive_MaxCount"
                            ]
                          },
                          "assignState": "True",
                          "bar#": "Number"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Castorice_DeltaAdd",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "triggerClampedChanges": true,
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Castorice_CheckCurrentSpecialSPChange"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "triggerClampedChanges": true,
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Castorice_CheckCurrentSpecialSPChange"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "Castorice_RefreshMaxSpecialSP",
              "parse": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Castorice_TeamLevel",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable with WorldLevel",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Castorice_WorldLevel"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Castorice_WorldLevel",
                    "compareType": "<",
                    "value2": 5
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All}}.[[removeMemosprite]]"
                          },
                          {
                            "name": "Sort by Stat",
                            "stat": "&nbsp;<span class=\"descriptionNumberColor\">CharacterLevel</span>&nbsp;",
                            "living": true,
                            "sortByHighest": true
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "Castorice_Level",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">CharacterLevel</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Castorice_Passive_MaxCount",
                          "value": {
                            "operator": "Variables[0] (FLOOR) || Variables[1] (Castorice_Level) || Variables[1] (Castorice_Level) || MUL || Constants[0] (5.3125) || MUL || PARAM_1 || FUNCTION || RETURN",
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(((Castorice_Level * Castorice_Level) * 5.3125))",
                            "constants": [
                              5.3125
                            ],
                            "variables": [
                              "FLOOR",
                              "Castorice_Level"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Castorice_Passive_MaxCount",
                      "value": {
                        "operator": "Variables[0] (FLOOR) || Constants[0] (80) || Constants[0] (80) || MUL || Constants[1] (5.3125) || MUL || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(((80 * 80) * 5.3125))",
                        "constants": [
                          80,
                          5.3125
                        ],
                        "variables": [
                          "FLOOR"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Castorice_Passive_MaxCount",
                    "compareType": "<=",
                    "value2": 2000
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Castorice_Passive_MaxCount",
                      "value": 2000
                    }
                  ]
                },
                {
                  "name": "Update Character Data Entry",
                  "energyCost": {
                    "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
                    "displayLines": "Castorice_Passive_MaxCount",
                    "constants": [],
                    "variables": [
                      "Castorice_Passive_MaxCount"
                    ]
                  },
                  "skills": [
                    {
                      "name": "Skill Data Entry",
                      "skillTrigger": "Skill03",
                      "energyCost": {
                        "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
                        "displayLines": "Castorice_Passive_MaxCount",
                        "constants": [],
                        "variables": [
                          "Castorice_Passive_MaxCount"
                        ]
                      },
                      "parameters": {
                        "5": {
                          "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
                          "displayLines": "Castorice_Passive_MaxCount",
                          "constants": [],
                          "variables": [
                            "Castorice_Passive_MaxCount"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill03"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Energy Cost",
                      "propertyAction": "Remove",
                      "value": {
                        "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
                        "displayLines": "Castorice_Passive_MaxCount",
                        "constants": [],
                        "variables": [
                          "Castorice_Passive_MaxCount"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
                    "displayLines": "Castorice_Passive_MaxCount",
                    "constants": [],
                    "variables": [
                      "Castorice_Passive_MaxCount"
                    ]
                  },
                  "isRefresh": true
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Passive_CastoriceServant_CurrentSpecialSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Passive_CastoriceServant_CurrentExtraSpecialSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Castorice_Passive_Count",
                  "value": {
                    "operator": "Variables[0] (Passive_CastoriceServant_CurrentSpecialSP) || Variables[1] (Passive_CastoriceServant_CurrentExtraSpecialSP) || ADD || RETURN",
                    "displayLines": "(Passive_CastoriceServant_CurrentSpecialSP + Passive_CastoriceServant_CurrentExtraSpecialSP)",
                    "constants": [],
                    "variables": [
                      "Passive_CastoriceServant_CurrentSpecialSP",
                      "Passive_CastoriceServant_CurrentExtraSpecialSP"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Castorice_Ability03_Field",
                    "invertCondition": true,
                    "justAddedOrActive": true
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "maximum": {
                        "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
                        "displayLines": "Castorice_Passive_MaxCount",
                        "constants": [],
                        "variables": [
                          "Castorice_Passive_MaxCount"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "CharacterFunctions",
              "functionName": "Castorice_CheckCurrentSpecialSPChange",
              "parse": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "Castorice_ChangeValue"
                },
                {
                  "name": "Define Custom Variable",
                  "skipWhenMindControlled": false,
                  "variableName": "Castorice_Passive_Count",
                  "value": {
                    "operator": "Variables[0] (Castorice_ChangeValue) || Variables[1] (Castorice_Passive_Count) || ADD || RETURN",
                    "displayLines": "(Castorice_ChangeValue + Castorice_Passive_Count)",
                    "constants": [],
                    "variables": [
                      "Castorice_ChangeValue",
                      "Castorice_Passive_Count"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "skipWhenMindControlled": false,
                  "variableName": "Castorice_ChangeValue",
                  "value": 0
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "Castorice_Passive02_OnListenHPChange",
              "aliveOnly": "False",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                },
                "MDF_LifeTime": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                },
                "MDF_MaxLayer": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]] - {{Caster's Memosprite}}"
              },
              "modifier": "Castorice_LoseHPPreShow",
              "aliveOnly": "False",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PreShowMaxHP": 0,
                "MDF_PreShowCurrentHP": 0,
                "MDF_LoseHPRatio01": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                },
                "MDF_LoseHPRatio02": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    "Castorice_Castorice_Ability03_Part02": {
      "fileName": "Castorice_Castorice_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Castorice_Ability03_Field"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Castorice_ExtraSpecialSPReturn",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Summon Memosprite",
          "memoID": 11407,
          "valuePerStack": {
            "Castorice_Ability21_P3_HPPercentage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "CastoriceServant_BaseSpeed": {
              "operator": "Variables[0] (165) || RETURN",
              "displayLines": "165",
              "constants": [],
              "variables": [
                165
              ]
            },
            "CastoriceServant_LifeTime": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "CastoriceServant_CurrentHP": {
              "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
              "displayLines": "Castorice_Passive_MaxCount",
              "constants": [],
              "variables": [
                "Castorice_Passive_MaxCount"
              ]
            },
            "CastoriceServant_MaxHP": {
              "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
              "displayLines": "Castorice_Passive_MaxCount",
              "constants": [],
              "variables": [
                "Castorice_Passive_MaxCount"
              ]
            },
            "CastoriceServant_PointB2_SpeedRatio": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "CastoriceServant_PointB3_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "CastoriceServant_PointB3_MaxLayer": {
              "operator": "Variables[0] (6) || RETURN",
              "displayLines": "6",
              "constants": [],
              "variables": [
                6
              ]
            },
            "CastoriceServant_Eidolon1_HPRatio01": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            },
            "CastoriceServant_Eidolon1_HPRatio02": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "CastoriceServant_Eidolon1_DamageRatio01": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
              ]
            },
            "CastoriceServant_Eidolon1_DamageRatio02": {
              "operator": "Variables[0] (1.4) || RETURN",
              "displayLines": "1.4",
              "constants": [],
              "variables": [
                1.4
              ]
            },
            "CastoriceServant_Eidolon2_MaxCount": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "CastoriceServant_Eidolon6_AddCount": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Castorice_Eidolon2_Check"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Castorice_Rank02_Count",
              "value": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "variableName": "CastoriceServant_Rank02_Count",
              "value": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              }
            }
          ]
        },
        {
          "name": "Reconstruct Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Castorice_Passive_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "execute": [
            {
              "name": "Copy Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "source": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "dispelFilter": "AnyStatus",
              "copyType": "Override",
              "useParamModifier": true
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "advanceType": "Advance",
          "multiAdd": -1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "ReduceActionDelay",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variables": {
                "parameter[0]_NormalizedValue": 1
              }
            },
            {
              "name": "Advance/Delay up to Target",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}.[[getMemosprite]]"
              },
              "targetRef": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "refPoint": "After"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Castorice_Castorice_Ability03_Part01": {
      "fileName": "Castorice_Castorice_Ability03_Part01",
      "childAbilityList": [
        "Castorice_Castorice_Ability03_Camera",
        "Castorice_Castorice_Ability03_Camera02",
        "Castorice_Castorice_Ability03_EnterReady",
        "Castorice_Castorice_Ability03_Part01",
        "Castorice_Castorice_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Castorice_Ability03_Part02"
        },
        {
          "name": "Change Battle Arena",
          "arena": "CastoriceBattleArea",
          "tag": "BattleArea01",
          "priorityTag": "Character"
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Castorice_Castorice_Ability03_EnterReady": {
      "fileName": "Castorice_Castorice_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Castorice_Castorice_Ability21_Part02": {
      "fileName": "Castorice_Castorice_Ability21_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Consume",
          "consumeFrom": "CurrentHP",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}} - {{Caster's Memosprite}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (0.4) || RETURN",
            "displayLines": "0.4",
            "constants": [],
            "variables": [
              0.4
            ]
          },
          "consumeFloor": 1,
          "attackType": "Unknown"
        },
        {
          "name": "UI Display Event",
          "popUpText": "Boneclaw, Doomdrake's Embrace"
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "ifTargetFound": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Castorice_SetDamageRatio"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (0.3) || Variables[1] (Avatar_Castorice_Rank01_DamageRatio) || MUL || RETURN",
                      "displayLines": "(0.3 * Avatar_Castorice_Rank01_DamageRatio)",
                      "constants": [],
                      "variables": [
                        0.3,
                        "Avatar_Castorice_Rank01_DamageRatio"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
                      "displayLines": "(AOE Toughness Value * 0.5)",
                      "constants": [
                        0.5
                      ],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "instanceTag": "CastoricePairsDamage",
                    "Tags": [
                      "Joint-Attack"
                    ],
                    "attackType": "Skill",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
                  "displayLines": "(AOE Toughness Value * 0.5)",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "instanceTag": "CastoricePairsDamage",
                "Tags": [
                  "Joint-Attack"
                ],
                "attackType": "Skill",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Trigger: Attack End",
          "skipDeathSettle": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Castorice_Eidolon2_Check"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Castorice_Rank02_MaxSpecialSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Castorice_AddSpecialSP",
              "variables": {
                "_FixedAddValue": {
                  "operator": "Variables[0] (Castorice_Rank02_MaxSpecialSP) || Variables[1] (0.3) || MUL || RETURN",
                  "displayLines": "(Castorice_Rank02_MaxSpecialSP * 0.3)",
                  "constants": [],
                  "variables": [
                    "Castorice_Rank02_MaxSpecialSP",
                    0.3
                  ]
                }
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Castorice_Eidolon2_Check"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Castorice_Castorice_Ability21_Part01": {
      "fileName": "Castorice_Castorice_Ability21_Part01",
      "childAbilityList": [
        "Castorice_Castorice_Ability21_Camera",
        "Castorice_Castorice_Ability21_Camera02",
        "Castorice_Castorice_Ability21_Part01",
        "Castorice_Castorice_Ability21_Part02"
      ],
      "skillTrigger": "Skill21",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": [
        0,
        20,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "variableName": "_PairStance",
          "value": {
            "operator": "Variables[0] (AOE Toughness Value) || RETURN",
            "displayLines": "AOE Toughness Value",
            "constants": [],
            "variables": [
              "AOE Toughness Value"
            ]
          }
        },
        {
          "name": "Trigger Joint-Attack Ability",
          "abilityList": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Castorice_Ability21_Part02"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Servant_CastoriceServant_Together_Part01"
            }
          ]
        },
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters"
          }
        }
      ],
      "references": []
    },
    "Castorice_Castorice_Ability02_Part02": {
      "fileName": "Castorice_Castorice_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Consume",
          "consumeFrom": "CurrentHP",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}} - {{Caster's Memosprite}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (0.3) || RETURN",
            "displayLines": "0.3",
            "constants": [],
            "variables": [
              0.3
            ]
          },
          "consumeFloor": 1,
          "attackType": "Unknown"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Quantum"
            },
            "Tags": null,
            "attackType": "Skill",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Quantum"
            },
            "Tags": null,
            "attackType": "Skill"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Castorice_Castorice_Ability02_Part01": {
      "fileName": "Castorice_Castorice_Ability02_Part01",
      "childAbilityList": [
        "Castorice_Castorice_Ability02_Camera",
        "Castorice_Castorice_Ability02_Part01",
        "Castorice_Castorice_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Castorice_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Castorice_Castorice_Ability01_Part02": {
      "fileName": "Castorice_Castorice_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Quantum"
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.8,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Quantum"
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Castorice_Castorice_Ability01_Part01": {
      "fileName": "Castorice_Castorice_Ability01_Part01",
      "childAbilityList": [
        "Castorice_Castorice_Ability01_Camera",
        "Castorice_Castorice_Ability01_Part01",
        "Castorice_Castorice_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Castorice_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Castorice_Modifiers": {
      "fileName": "Castorice_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Modifier Construction",
          "for": "Castorice_Eidolon6_QuantumPenetrate[<span class=\"descriptionNumberColor\">Await for Years to Loom</span>]",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumPEN</span>&nbsp;",
                      "value": "MDF_PropertyValue"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "OverHeal"
          ],
          "description": "When dealing DMG, increases Quantum RES PEN by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Await for Years to Loom"
        },
        {
          "name": "Modifier Construction",
          "for": "Castorice_Eidolon4_HealTakenRatio[<span class=\"descriptionNumberColor\">Rest in Songs of Gloom</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "OverHeal"
          ],
          "description": "The HP restored when receiving healing increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "HP Restoration Boost",
          "statusName": "Rest in Songs of Gloom"
        },
        {
          "name": "Modifier Construction",
          "for": "Castorice_Eidolon2_Count[<span class=\"descriptionNumberColor\">Ardent Will</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_PropertyValue",
                  "multiplier": 1
                }
              ]
            }
          ],
          "description": "Can be used to offset the HP cost of Netherwing's Memosprite Skill, \"Breath Scorches the Shadow.\" A maximum of <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> \"Ardent Will\" can be possessed at any given time.",
          "type": "Other",
          "effectName": "Ardent Will",
          "statusName": "Ardent Will"
        },
        {
          "name": "Modifier Construction",
          "for": "Castorice_Eidolon2_OnListenValueChange",
          "stackType": "ReplaceByCaster",
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "Castorice_Rank02_Count",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 9999999,
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Castorice_Eidolon2_Count[<span class=\"descriptionNumberColor\">Ardent Will</span>]"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Castorice_Eidolon2_Count[<span class=\"descriptionNumberColor\">Ardent Will</span>]"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Castorice_Rank02_Count",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Castorice_Eidolon2_Count[<span class=\"descriptionNumberColor\">Ardent Will</span>]",
                          "counter": {
                            "operator": "Variables[0] (Castorice_Rank02_Count) || RETURN",
                            "displayLines": "Castorice_Rank02_Count",
                            "constants": [],
                            "variables": [
                              "Castorice_Rank02_Count"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_MaxLayer": {
                              "operator": "Variables[0] (2) || RETURN",
                              "displayLines": "2",
                              "constants": [],
                              "variables": [
                                2
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "OverHeal"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Castorice_Eidolon2_Check",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Castorice_PointB3_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">Where The West Wind Dwells</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Every stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, lasting until the end of this turn.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Where The West Wind Dwells"
        },
        {
          "name": "Modifier Construction",
          "for": "Castorice_PointB1_HealTaxesListen",
          "execute": [
            {
              "eventTrigger": "Receiving Heal End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Healing",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "Castorice_BeingHealValue"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Castorice_MaxSpecialSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "skipWhenMindControlled": false,
                  "variableName": "Castorice_MaxSpecialSP",
                  "value": {
                    "operator": "Variables[0] (Castorice_MaxSpecialSP) || Variables[1] (Castorice_PointB1_HealRatioDown) || MUL || RETURN",
                    "displayLines": "(Castorice_MaxSpecialSP * Castorice_PointB1_HealRatioDown)",
                    "constants": [],
                    "variables": [
                      "Castorice_MaxSpecialSP",
                      "Castorice_PointB1_HealRatioDown"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "skipWhenMindControlled": false,
                  "variableName": "HealAmount_CasterAdd",
                  "value": {
                    "operator": "Variables[0] (MIN) || Variables[1] (Castorice_BeingHealValue) || Variables[2] (Castorice_PointB1_HPPercent) || MUL || Variables[3] (Castorice_MaxSpecialSP) || Variables[4] (Castorice_SumBeingHealValue) || SUB || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((Castorice_BeingHealValue * Castorice_PointB1_HPPercent), (Castorice_MaxSpecialSP - Castorice_SumBeingHealValue))",
                    "constants": [],
                    "variables": [
                      "MIN",
                      "Castorice_BeingHealValue",
                      "Castorice_PointB1_HPPercent",
                      "Castorice_MaxSpecialSP",
                      "Castorice_SumBeingHealValue"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HealAmount_CasterAdd",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "skipWhenMindControlled": false,
                      "variableName": "Castorice_SumBeingHealValue",
                      "value": {
                        "operator": "Variables[0] (Castorice_SumBeingHealValue) || Variables[1] (HealAmount_CasterAdd) || ADD || RETURN",
                        "displayLines": "(Castorice_SumBeingHealValue + HealAmount_CasterAdd)",
                        "constants": [],
                        "variables": [
                          "Castorice_SumBeingHealValue",
                          "HealAmount_CasterAdd"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Memosprite}}"
                        },
                        "modifier": "Memosprite_CastoriceServant_Passive"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "skipWhenMindControlled": false,
                          "variableName": "HealAmount_ServantAdd",
                          "value": {
                            "operator": "Variables[0] (HealAmount_CasterAdd) || RETURN",
                            "displayLines": "HealAmount_CasterAdd",
                            "constants": [],
                            "variables": [
                              "HealAmount_CasterAdd"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Memosprite}}"
                          },
                          "variableName": "CastoriceServant_CurrentHP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster's Memosprite}}"
                            },
                            "modifier": "Memosprite_CastoriceServant_GoDie"
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Living State",
                                "state": "Mask_AliveOnly",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster's Memosprite}}"
                                }
                              },
                              "passed": [
                                {
                                  "name": "Set HP Value",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Memosprite}}"
                                  },
                                  "setValue": {
                                    "operator": "Variables[0] (CastoriceServant_CurrentHP) || Variables[1] (HealAmount_ServantAdd) || ADD || RETURN",
                                    "displayLines": "(CastoriceServant_CurrentHP + HealAmount_ServantAdd)",
                                    "constants": [],
                                    "variables": [
                                      "CastoriceServant_CurrentHP",
                                      "HealAmount_ServantAdd"
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Castorice_AddSpecialSP",
                          "variables": {
                            "_FixedAddValue": {
                              "operator": "Variables[0] (HealAmount_CasterAdd) || RETURN",
                              "displayLines": "HealAmount_CasterAdd",
                              "constants": [],
                              "variables": [
                                "HealAmount_CasterAdd"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "skipWhenMindControlled": false,
                  "variableName": "Castorice_SumBeingHealValue",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "skipWhenMindControlled": false,
                  "variableName": "Castorice_MaxFlag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "skipWhenMindControlled": false,
                  "variableName": "Castorice_SumBeingHealValue",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "skipWhenMindControlled": false,
                  "variableName": "Castorice_MaxFlag",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Castorice_PointB1_HealTaxes",
          "stackData": [],
          "latentQueue": [
            "OverHeal"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}} - {{Caster}}.[[getMemosprite]]"
              },
              "modifier": "Castorice_PointB1_HealTaxesListen",
              "haloStatus": true,
              "valuePerStack": {
                "Castorice_PointB1_HPPercent": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "Castorice_PointB1_HealRatioDown": {
                  "operator": "Variables[0] (0.12) || RETURN",
                  "displayLines": "0.12",
                  "constants": [],
                  "variables": [
                    0.12
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_Castorice_SpeedRatio[<span class=\"descriptionNumberColor\">Inverted Torch</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "Inverted Torch"
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_Castorice_PointB2_OnListen",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (Castorice_PointB2_HPRatio) || RETURN",
                      "displayLines": "Castorice_PointB2_HPRatio",
                      "constants": [],
                      "variables": [
                        "Castorice_PointB2_HPRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Memosprite_Castorice_SpeedRatio[<span class=\"descriptionNumberColor\">Inverted Torch</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (Castorice_PointB2_SpeedRatio) || RETURN",
                          "displayLines": "Castorice_PointB2_SpeedRatio",
                          "constants": [],
                          "variables": [
                            "Castorice_PointB2_SpeedRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (Castorice_PointB2_HPRatio) || RETURN",
                          "displayLines": "Castorice_PointB2_HPRatio",
                          "constants": [],
                          "variables": [
                            "Castorice_PointB2_HPRatio"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "Memosprite_Castorice_SpeedRatio[<span class=\"descriptionNumberColor\">Inverted Torch</span>]",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "Memosprite_Castorice_SpeedRatio[<span class=\"descriptionNumberColor\">Inverted Torch</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (Castorice_PointB2_SpeedRatio) || RETURN",
                                  "displayLines": "Castorice_PointB2_SpeedRatio",
                                  "constants": [],
                                  "variables": [
                                    "Castorice_PointB2_SpeedRatio"
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "Memosprite_Castorice_SpeedRatio[<span class=\"descriptionNumberColor\">Inverted Torch</span>]"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "Memosprite_Castorice_SpeedRatio[<span class=\"descriptionNumberColor\">Inverted Torch</span>]"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "Castorice_PointB2_HPRatio",
            "Castorice_PointB2_SpeedRatio"
          ],
          "latentQueue": [
            "OverHeal"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Castorice_Passive_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue",
            "MDF_MaxLayer"
          ],
          "latentQueue": [
            "MDF_Castorice_AttackFlag"
          ],
          "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. This effect stacks up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "Castorice_Ability03_AllDamageTypeResistance[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "All-Type RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, lasting until the Territory ends.",
          "type": "Debuff",
          "effectName": "All-Type RES Reduction",
          "statusName": "All-Type RES Reduction"
        },
        {
          "name": "Modifier Construction",
          "for": "Castorice_Ability03_Field",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "SpecialBattleArea"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "scope": "AITag",
                  "variableName": "DamageCarry",
                  "value": 100
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill02",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Skill"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Castorice_Passive_Count) || RETURN",
                    "displayLines": "Castorice_Passive_Count",
                    "constants": [],
                    "variables": [
                      "Castorice_Passive_Count"
                    ]
                  },
                  "displaySubType": "Percent",
                  "displayShowIcon": "False",
                  "maximum": {
                    "operator": "Variables[0] (Castorice_Passive_MaxCount) || RETURN",
                    "displayLines": "Castorice_Passive_MaxCount",
                    "constants": [],
                    "variables": [
                      "Castorice_Passive_MaxCount"
                    ]
                  },
                  "assignState": "True",
                  "bar#": "Number"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "scope": "AITag",
                  "variableName": "DamageCarry",
                  "value": 10
                },
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ]
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill21",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Skill"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "Castorice_Ability03_AllDamageTypeResistance[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
              "aliveOnly": "False",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Castorice_LoseHPPreShow",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Target is Unselectable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "failed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_PreShowCurrentHP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "Castorice_Ability03_Field"
                          },
                          "passed": [
                            {
                              "name": "Update UI Preview",
                              "show": "Show",
                              "skillType": [
                                "Skill"
                              ],
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "previewType": null,
                              "previewValue": {
                                "operator": "Variables[0] (MDF_PreShowCurrentHP) || Variables[1] (MDF_LoseHPRatio02) || MUL || RETURN",
                                "displayLines": "(MDF_PreShowCurrentHP * MDF_LoseHPRatio02)",
                                "constants": [],
                                "variables": [
                                  "MDF_PreShowCurrentHP",
                                  "MDF_LoseHPRatio02"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Update UI Preview",
                              "show": "Show",
                              "skillType": [
                                "Skill"
                              ],
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "previewType": null,
                              "previewValue": {
                                "operator": "Variables[0] (MDF_PreShowCurrentHP) || Variables[1] (MDF_LoseHPRatio01) || MUL || RETURN",
                                "displayLines": "(MDF_PreShowCurrentHP * MDF_LoseHPRatio01)",
                                "constants": [],
                                "variables": [
                                  "MDF_PreShowCurrentHP",
                                  "MDF_LoseHPRatio01"
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PreShowMaxHP",
            "MDF_PreShowCurrentHP",
            "MDF_LoseHPRatio01",
            "MDF_LoseHPRatio02"
          ],
          "latentQueue": []
        }
      ],
      "references": []
    },
    "Castorice_Functions": {
      "fileName": "Castorice_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 3,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "Castorice_SetDamageRatio",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Avatar_Castorice_Rank01_DamageRatio",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Avatar_Castorice_Rank01_DamageRatio",
                      "value": {
                        "operator": "Variables[0] (1.2) || RETURN",
                        "displayLines": "1.2",
                        "constants": [],
                        "variables": [
                          1.2
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Avatar_Castorice_Rank01_DamageRatio",
                          "value": {
                            "operator": "Variables[0] (1.4) || RETURN",
                            "displayLines": "1.4",
                            "constants": [],
                            "variables": [
                              1.4
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Castorice_AddSpecialSP",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_CurSpecialSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_MaxSpecialSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "scope": "ContextTaskTemplate",
              "variableName": "_ExtraSpecialSP",
              "value": {
                "operator": "Variables[0] (MAX) || Variables[1] (_CurSpecialSP) || Variables[2] (_FixedAddValue) || ADD || Variables[3] (_MaxSpecialSP) || SUB || Constants[0] (0) || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(((_CurSpecialSP + _FixedAddValue) - _MaxSpecialSP), 0)",
                "constants": [
                  0
                ],
                "variables": [
                  "MAX",
                  "_CurSpecialSP",
                  "_FixedAddValue",
                  "_MaxSpecialSP"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_ExtraSpecialSP",
                "compareType": ">",
                "value2": 0,
                "contextScope": "ContextTaskTemplate"
              },
              "passed": [
                {
                  "name": "Define Custom Property",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_ExtraSpecialSP) || RETURN",
                    "displayLines": "_ExtraSpecialSP",
                    "constants": [],
                    "variables": [
                      "_ExtraSpecialSP"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (_FixedAddValue) || RETURN",
                "displayLines": "_FixedAddValue",
                "constants": [],
                "variables": [
                  "_FixedAddValue"
                ]
              },
              "isFixed": "(Fixed)",
              "ignoreBlock": true,
              "isSpecialEnergy": true
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Castorice_ExtraSpecialSPReturn",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_CurExtraSpecialSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Castorice_AddSpecialSP",
              "variables": {
                "_FixedAddValue": {
                  "operator": "Variables[0] (_CurExtraSpecialSP) || Variables[1] (MDF_ReturnRatio) || MUL || RETURN",
                  "displayLines": "(_CurExtraSpecialSP * MDF_ReturnRatio)",
                  "constants": [],
                  "variables": [
                    "_CurExtraSpecialSP",
                    "MDF_ReturnRatio"
                  ]
                }
              }
            },
            {
              "name": "Define Custom Property",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
              "value": 0,
              "function": "="
            }
          ]
        }
      ],
      "references": []
    },
    "NetherwingPollux_Servant_CastoriceServant_BattleCry": {
      "fileName": "NetherwingPollux_Servant_CastoriceServant_BattleCry",
      "childAbilityList": [
        "NetherwingPollux_Servant_CastoriceServant_BattleCry"
      ],
      "skillTrigger": "SkillP03",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_BattleCry"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_BattleCry",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "Memosprite_CastoriceServant_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">Roar Rumbles the Realm</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "Memosprite_CastoriceServant_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">Roar Rumbles the Realm</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.1) || RETURN",
                          "displayLines": "0.1",
                          "constants": [],
                          "variables": [
                            0.1
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "NetherwingPollux_Servant_CastoriceServant_PassiveAbility01": {
      "fileName": "NetherwingPollux_Servant_CastoriceServant_PassiveAbility01",
      "childAbilityList": [
        "NetherwingPollux_Servant_CastoriceServant_PassiveAbility01",
        "NetherwingPollux_Servant_CastoriceServant_Together_Part01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Set Netherwing Skill Phase",
          "level": 1
        },
        {
          "name": "Update Action Bar Display",
          "triggerName": "Level_1",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Set Netherwing's Ardent Will Stacks",
              "display": 0,
              "preview": 0
            }
          ],
          "failed": [
            {
              "name": "Set Netherwing's Ardent Will Stacks",
              "show": false,
              "display": 0,
              "preview": 0
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_Passive"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_LoseHPPreShow"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_LifeTime",
          "counter": {
            "operator": "Variables[0] (CastoriceServant_LifeTime) || RETURN",
            "displayLines": "CastoriceServant_LifeTime",
            "constants": [],
            "variables": [
              "CastoriceServant_LifeTime"
            ]
          },
          "valuePerStack": {
            "_AttackTime": {
              "operator": "Variables[0] (CastoriceServant_LifeTime) || RETURN",
              "displayLines": "CastoriceServant_LifeTime",
              "constants": [],
              "variables": [
                "CastoriceServant_LifeTime"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_Deathrattle"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_OnListenHitDamageSplit"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Eidolon6_StancePreview"
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Servant_CastoriceServant_GetMaxHP"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_Deathrattle",
          "modifierFlags": [
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Servant_CastoriceServant_PassiveInsertAbility_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "AvatarInsertAttackSelf",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "ClearAvatarArea_ByAbility"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Servant_CastoriceServant_PassiveInsertAbility_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "AvatarInsertAttackSelf",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_TiggerKiller",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Auto-Battle",
                    "invertCondition": true
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CastoriceServant_Disable"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_LifeTime",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CastoriceServant_TiggerKiller"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_CastoriceServant_RefreshActionBar"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_AttackTime",
                  "value": {
                    "operator": "Variables[0] (_AttackTime) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(_AttackTime - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_AttackTime"
                    ]
                  }
                },
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "function": "Add"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_AttackTime) || RETURN",
                    "displayLines": "_AttackTime",
                    "constants": [],
                    "variables": [
                      "_AttackTime"
                    ]
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "assignState": "True",
                  "bar#": "Dot"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_AttackTime",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_AttackMaxTime",
                  "value": {
                    "operator": "Variables[0] (_AttackTime) || RETURN",
                    "displayLines": "_AttackTime",
                    "constants": [],
                    "variables": [
                      "_AttackTime"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_AttackTime) || RETURN",
                    "displayLines": "_AttackTime",
                    "constants": [],
                    "variables": [
                      "_AttackTime"
                    ]
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (_AttackMaxTime) || RETURN",
                    "displayLines": "_AttackMaxTime",
                    "constants": [],
                    "variables": [
                      "_AttackMaxTime"
                    ]
                  },
                  "assignState": "True",
                  "bar#": "Dot"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_CastoriceServant_RefreshActionBar"
                }
              ]
            }
          ],
          "stackData": [
            "_AttackTime"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_Passive",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ImmuneDebuff",
            "SpecialBattleArea"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "Castorice_Ability03_Field"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_CastoriceServant_OnPhase1Change"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Memosprite_CastoriceServant_BPCost_3"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CastoriceServant_PlayCrossHairPreviewFadeIn"
                },
                {
                  "name": "Mark Entity as Non-Target(Unselectable) [CUSTOM]",
                  "blockTeams": "Enemy Team"
                },
                {
                  "name": "Reinstance Stat Value/Bounds",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (CastoriceServant_MaxHP) || RETURN",
                    "displayLines": "CastoriceServant_MaxHP",
                    "constants": [],
                    "variables": [
                      "CastoriceServant_MaxHP"
                    ]
                  }
                },
                {
                  "name": "Reinstance Stat Value/Bounds",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": 0,
                  "floor": 0,
                  "ceiling": 0
                },
                {
                  "name": "Reinstance Stat Value/Bounds",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
                  "value": 0,
                  "floor": 0,
                  "ceiling": 0
                },
                {
                  "name": "Reinstance Stat Value/Bounds",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
                  "value": 0,
                  "floor": 0,
                  "ceiling": 0
                },
                {
                  "name": "Set HP Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "setValue": {
                    "operator": "Variables[0] (CastoriceServant_CurrentHP) || RETURN",
                    "displayLines": "CastoriceServant_CurrentHP",
                    "constants": [],
                    "variables": [
                      "CastoriceServant_CurrentHP"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CastoriceServant_CurrentCount",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_CastoriceServant_GetMaxHP"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "CastoriceServant_CurrentCount",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CastoriceServant_CurrentCount",
                      "value": {
                        "operator": "Variables[0] (FLOOR) || Variables[1] (CastoriceServant_CurrentCount) || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(CastoriceServant_CurrentCount)",
                        "constants": [],
                        "variables": [
                          "FLOOR",
                          "CastoriceServant_CurrentCount"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "CastoriceServant_Skill02_AttackCurrent_LostHP"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CastoriceServant_Skill02_AttackCurrent_LostHP",
                      "value": {
                        "operator": "Variables[0] (CastoriceServant_Skill02_AttackCurrent_LostHP) || INVERT || RETURN",
                        "displayLines": "-CastoriceServant_Skill02_AttackCurrent_LostHP",
                        "constants": [],
                        "variables": [
                          "CastoriceServant_Skill02_AttackCurrent_LostHP"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CastoriceServant_Skill02_AttackTotal_LostHP",
                      "value": {
                        "operator": "Variables[0] (FLOOR) || Variables[1] (CastoriceServant_Skill02_AttackTotal_LostHP) || Variables[2] (CastoriceServant_Skill02_AttackCurrent_LostHP) || ADD || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((CastoriceServant_Skill02_AttackTotal_LostHP + CastoriceServant_Skill02_AttackCurrent_LostHP))",
                        "constants": [],
                        "variables": [
                          "FLOOR",
                          "CastoriceServant_Skill02_AttackTotal_LostHP",
                          "CastoriceServant_Skill02_AttackCurrent_LostHP"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Leave Battle"
            },
            {
              "eventTrigger": "New Enemy Wave"
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "CastoriceServant_SkillMaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": {
                              "operator": "Variables[0] (0.25) || RETURN",
                              "displayLines": "0.25",
                              "constants": [],
                              "variables": [
                                0.25
                              ]
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Memosprite_CastoriceServant_BP_Explode"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "Memosprite_CastoriceServant_BPCost_3"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "Memosprite_CastoriceServant_BPCost_3"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "CastoriceServant_BPSkill_Level",
                                "compareType": "<=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "Memosprite_CastoriceServant_BPCost_1"
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "CastoriceServant_BPSkill_Level",
                                "compareType": ">=",
                                "value2": 2
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "Memosprite_CastoriceServant_BPCost_2"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Servant_CastoriceServant_RefreshActionBar"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_PlayCrossHairPreviewFadeIn",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "EnterBattlePlayTimes",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "EnterBattlePlayTimes",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "mustBeAlive2": true,
                        "invertCondition": true
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CL_PlayTimes",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action End [Owner]"
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CL_PlayTimes",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CL_EnterBattlePlayTimes",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle"
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "EnterBattlePlayTimes",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "mustBeAlive2": true,
                        "invertCondition": true
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "EnterBattlePlayTimes",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "mustBeAlive2": true,
                        "invertCondition": true
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "EnterBattlePlayTimes",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "mustBeAlive2": true,
                        "invertCondition": true
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Active Ability Chosen [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "CL_EnterBattlePlayTimes",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "CL_PlayTimes",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "CL_EnterBattlePlayTimes",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "CL_PlayTimes",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Check Callback Flag Parameter",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Param Flag",
                    "flagName": "CallBackBefore_OnListenInsertAbilityStart"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "NetherwingPollux_Servant_CastoriceServant_DeathRattle": {
      "fileName": "NetherwingPollux_Servant_CastoriceServant_DeathRattle",
      "childAbilityList": [
        "NetherwingPollux_Servant_CastoriceServant_DeathRattle",
        "NetherwingPollux_Servant_CastoriceServant_PassiveInsertAbility_Part01",
        "NetherwingPollux_Servant_CastoriceServant_PassiveInsertAbility_Part02",
        "NetherwingPollux_Servant_CastoriceServant_PassiveInsertAbility_Camera",
        "NetherwingPollux_Servant_CastoriceServant_PassiveInsertAbility_NoneCasterSummonerCamera"
      ],
      "skillTrigger": "SkillP04",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        5,
        0,
        0
      ],
      "parse": [],
      "references": []
    },
    "NetherwingPollux_Servant_CastoriceServant_PassiveInsertAbility_Part02": {
      "fileName": "NetherwingPollux_Servant_CastoriceServant_PassiveInsertAbility_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_GoDie"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_BP_Explode"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_TiggerKiller"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_Deathrattle"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Servant_CastoriceServant_GetMaxHP"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "CastoriceServant_LoopCount",
              "value": {
                "operator": "Variables[0] (6) || Variables[1] (CastoriceServant_Eidolon6_AddCount) || ADD || RETURN",
                "displayLines": "(6 + CastoriceServant_Eidolon6_AddCount)",
                "constants": [],
                "variables": [
                  6,
                  "CastoriceServant_Eidolon6_AddCount"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "CastoriceServant_LoopCount",
              "value": {
                "operator": "Variables[0] (6) || RETURN",
                "displayLines": "6",
                "constants": [],
                "variables": [
                  6
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SkillP04_P1_HPPercentage",
          "value": {
            "operator": "Variables[0] (0.4) || Variables[1] (SkillP04_P1_ExtraAddPercentage) || ADD || RETURN",
            "displayLines": "(0.4 + SkillP04_P1_ExtraAddPercentage)",
            "constants": [],
            "variables": [
              0.4,
              "SkillP04_P1_ExtraAddPercentage"
            ]
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (CastoriceServant_LoopCount) || RETURN",
            "displayLines": "CastoriceServant_LoopCount",
            "constants": [],
            "variables": [
              "CastoriceServant_LoopCount"
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Bounce_SelectTarget",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "paramSequence": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Servant_CastoriceServant_SetDamageRatio"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (SkillP04_P1_HPPercentage) || Variables[1] (Castorice_Rank01_DamageRatio) || MUL || RETURN",
                          "displayLines": "(SkillP04_P1_HPPercentage * Castorice_Rank01_DamageRatio)",
                          "constants": [],
                          "variables": [
                            "SkillP04_P1_HPPercentage",
                            "Castorice_Rank01_DamageRatio"
                          ]
                        },
                        "dmgFormula": "[SUMMONER] Max HP Scaling",
                        "Toughness": {
                          "operator": "Variables[0] (ST Toughness Value) || RETURN",
                          "displayLines": "ST Toughness Value",
                          "constants": [],
                          "variables": [
                            "ST Toughness Value"
                          ]
                        },
                        "Tags": null,
                        "attackType": "Memosprite",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (SkillP04_P1_HPPercentage) || RETURN",
                          "displayLines": "SkillP04_P1_HPPercentage",
                          "constants": [],
                          "variables": [
                            "SkillP04_P1_HPPercentage"
                          ]
                        },
                        "dmgFormula": "[SUMMONER] Max HP Scaling",
                        "Toughness": {
                          "operator": "Variables[0] (ST Toughness Value) || RETURN",
                          "displayLines": "ST Toughness Value",
                          "constants": [],
                          "variables": [
                            "ST Toughness Value"
                          ]
                        },
                        "Tags": null,
                        "attackType": "Memosprite",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}} -{{Caster}}"
          },
          "healFlat": {
            "operator": "Variables[0] (CastoriceServant_SummonMaxHP) || Variables[1] (0.06) || MUL || Variables[2] (800) || ADD || RETURN",
            "displayLines": "((CastoriceServant_SummonMaxHP * 0.06) + 800)",
            "constants": [],
            "variables": [
              "CastoriceServant_SummonMaxHP",
              0.06,
              800
            ]
          },
          "formula": "Heal from Base Value"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "Castorice_Ability03_Field"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "ClearAvatarArea_ByAbility"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "ClearAvatarArea_ByAbility"
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ignoreHPLossTriggers": true,
              "ignoreDeathTriggers": true
            }
          ]
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "references": []
    },
    "NetherwingPollux_Servant_CastoriceServant_PassiveInsertAbility_Part01": {
      "fileName": "NetherwingPollux_Servant_CastoriceServant_PassiveInsertAbility_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "flagName": "STAT_CTRL"
              }
            ]
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Servant_CastoriceServant_PassiveInsertAbility_Part02",
          "isTrigger": true
        },
        {
          "name": "Change Battle Arena",
          "arena": "CastoriceBattleArea",
          "tag": "BattleArea01",
          "status": "Inactive",
          "priorityTag": "Character"
        }
      ],
      "references": []
    },
    "NetherwingPollux_Servant_CastoriceServant_Together_Part01": {
      "fileName": "NetherwingPollux_Servant_CastoriceServant_Together_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "includeDyingTargets": true,
              "ifTargetFound": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_CastoriceServant_SetDamageRatio"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (Castorice_Ability21_P3_HPPercentage) || Variables[1] (Castorice_Rank01_DamageRatio) || MUL || RETURN",
                      "displayLines": "(Castorice_Ability21_P3_HPPercentage * Castorice_Rank01_DamageRatio)",
                      "constants": [],
                      "variables": [
                        "Castorice_Ability21_P3_HPPercentage",
                        "Castorice_Rank01_DamageRatio"
                      ]
                    },
                    "dmgFormula": "[SUMMONER] Max HP Scaling",
                    "Toughness": {
                      "operator": "Variables[0] (_PairStance) || Constants[0] (0.5) || MUL || RETURN",
                      "displayLines": "(_PairStance * 0.5)",
                      "constants": [
                        0.5
                      ],
                      "variables": [
                        "_PairStance"
                      ]
                    },
                    "ToughnessDMGType": {
                      "DamageType": "Quantum"
                    },
                    "instanceTag": "CastoricePairsDamage",
                    "Tags": [
                      "Joint-Attack"
                    ],
                    "attackType": "Skill",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (Castorice_Ability21_P3_HPPercentage) || RETURN",
                  "displayLines": "Castorice_Ability21_P3_HPPercentage",
                  "constants": [],
                  "variables": [
                    "Castorice_Ability21_P3_HPPercentage"
                  ]
                },
                "dmgFormula": "[SUMMONER] Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (_PairStance) || Constants[0] (0.5) || MUL || RETURN",
                  "displayLines": "(_PairStance * 0.5)",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "_PairStance"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Quantum"
                },
                "instanceTag": "CastoricePairsDamage",
                "Tags": [
                  "Joint-Attack"
                ],
                "attackType": "Skill",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage"
            }
          ]
        }
      ],
      "references": []
    },
    "NetherwingPollux_Servant_CastoriceServant_Ability23_Part02": {
      "fileName": "NetherwingPollux_Servant_CastoriceServant_Ability23_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_GoDie"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_BP_Explode"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_Ability23Check"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_TiggerKiller"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_Deathrattle"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Servant_CastoriceServant_GetMaxHP"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "CastoriceServant_LoopCount",
              "value": {
                "operator": "Variables[0] (6) || Variables[1] (CastoriceServant_Eidolon6_AddCount) || ADD || RETURN",
                "displayLines": "(6 + CastoriceServant_Eidolon6_AddCount)",
                "constants": [],
                "variables": [
                  6,
                  "CastoriceServant_Eidolon6_AddCount"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "CastoriceServant_LoopCount",
              "value": {
                "operator": "Variables[0] (6) || RETURN",
                "displayLines": "6",
                "constants": [],
                "variables": [
                  6
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SkillP04_P1_HPPercentage",
          "value": {
            "operator": "Variables[0] (0.4) || Variables[1] (SkillP04_P1_ExtraAddPercentage) || ADD || RETURN",
            "displayLines": "(0.4 + SkillP04_P1_ExtraAddPercentage)",
            "constants": [],
            "variables": [
              0.4,
              "SkillP04_P1_ExtraAddPercentage"
            ]
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (CastoriceServant_LoopCount) || RETURN",
            "displayLines": "CastoriceServant_LoopCount",
            "constants": [],
            "variables": [
              "CastoriceServant_LoopCount"
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Bounce_SelectTarget",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "paramSequence": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Servant_CastoriceServant_SetDamageRatio"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (SkillP04_P1_HPPercentage) || Variables[1] (Castorice_Rank01_DamageRatio) || MUL || RETURN",
                          "displayLines": "(SkillP04_P1_HPPercentage * Castorice_Rank01_DamageRatio)",
                          "constants": [],
                          "variables": [
                            "SkillP04_P1_HPPercentage",
                            "Castorice_Rank01_DamageRatio"
                          ]
                        },
                        "dmgFormula": "[SUMMONER] Max HP Scaling",
                        "Toughness": {
                          "operator": "Variables[0] (ST Toughness Value) || RETURN",
                          "displayLines": "ST Toughness Value",
                          "constants": [],
                          "variables": [
                            "ST Toughness Value"
                          ]
                        },
                        "Tags": null,
                        "attackType": "Memosprite",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (SkillP04_P1_HPPercentage) || RETURN",
                          "displayLines": "SkillP04_P1_HPPercentage",
                          "constants": [],
                          "variables": [
                            "SkillP04_P1_HPPercentage"
                          ]
                        },
                        "dmgFormula": "[SUMMONER] Max HP Scaling",
                        "Toughness": {
                          "operator": "Variables[0] (ST Toughness Value) || RETURN",
                          "displayLines": "ST Toughness Value",
                          "constants": [],
                          "variables": [
                            "ST Toughness Value"
                          ]
                        },
                        "Tags": null,
                        "attackType": "Memosprite",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}} -{{Caster}}"
          },
          "healFlat": {
            "operator": "Variables[0] (CastoriceServant_SummonMaxHP) || Variables[1] (0.06) || MUL || Variables[2] (800) || ADD || RETURN",
            "displayLines": "((CastoriceServant_SummonMaxHP * 0.06) + 800)",
            "constants": [],
            "variables": [
              "CastoriceServant_SummonMaxHP",
              0.06,
              800
            ]
          },
          "formula": "Heal from Base Value"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "Castorice_Ability03_Field"
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ignoreHPLossTriggers": true,
          "ignoreDeathTriggers": true,
          "abortInsertedAbilities": true
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Force Auto-Battle on Target",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "NetherwingPollux_Servant_CastoriceServant_Ability23_Part01": {
      "fileName": "NetherwingPollux_Servant_CastoriceServant_Ability23_Part01",
      "childAbilityList": [
        "NetherwingPollux_Servant_CastoriceServant_Ability23_Part01",
        "NetherwingPollux_Servant_CastoriceServant_Ability23_Part02",
        "NetherwingPollux_Servant_CastoriceServant_Ability23_Camera",
        "NetherwingPollux_Servant_CastoriceServant_Ability23_Camera_NoneCasterSummonerCamera",
        "NetherwingPollux_Servant_CastoriceServant_Ability23_ReadytoFly_Camera",
        "NetherwingPollux_Servant_CastoriceServant_Ability23_ReadytoFly_Camera02",
        "NetherwingPollux_Servant_CastoriceServant_Ability23_ReadytoFly_Camera03"
      ],
      "skillTrigger": "Skill23",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        5,
        0,
        0
      ],
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Servant_CastoriceServant_FlyToAbility23"
        },
        {
          "name": "Change Battle Arena",
          "arena": "CastoriceBattleArea",
          "tag": "BattleArea01",
          "status": "Inactive",
          "priorityTag": "Character"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Servant_CastoriceServant_Ability23_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "flagName": "STAT_CTRL"
              }
            ]
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "NetherwingPollux_Servant_CastoriceServant_Ability22_Part02": {
      "fileName": "NetherwingPollux_Servant_CastoriceServant_Ability22_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CL_PlayTimes",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_BattleViewModeLevel",
          "value": 3
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CL_EnterBattlePlayTimes",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Memosprite_CastoriceServant_BPCost_3"
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "Castorice_Rank02_Count",
                "compareType": "<=",
                "value2": 0,
                "contextScope": "TargetEntity"
              }
            ]
          },
          "passed": [
            {
              "name": "Force Auto-Battle on Target",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "enable": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_BP_Explode"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Ability23Check"
            }
          ],
          "failed": [
            {
              "name": "Set Netherwing Skill Phase",
              "level": 3
            },
            {
              "name": "Update Action Bar Display",
              "triggerName": "Level_3",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Memosprite_CastoriceServant_LifeTime",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Force Auto-Battle on Target",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "enable": true
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_UseSkill02_Flag",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "PointB3"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Castorice_PointB3_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">Where The West Wind Dwells</span>]",
              "stackLimit": {
                "operator": "Variables[0] (CastoriceServant_PointB3_MaxLayer) || RETURN",
                "displayLines": "CastoriceServant_PointB3_MaxLayer",
                "constants": [],
                "variables": [
                  "CastoriceServant_PointB3_MaxLayer"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (CastoriceServant_PointB3_AllDamageTypeAddedRatio) || RETURN",
                  "displayLines": "CastoriceServant_PointB3_AllDamageTypeAddedRatio",
                  "constants": [],
                  "variables": [
                    "CastoriceServant_PointB3_AllDamageTypeAddedRatio"
                  ]
                }
              },
              "addStacksPerTrigger": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CastoriceServant_BPSkill_Level3_Loop",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "Castorice_Rank02_Count",
                "compareType": ">",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CastoriceServant_Rank02_Count",
                  "value": {
                    "operator": "Variables[0] (CastoriceServant_Rank02_Count) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(CastoriceServant_Rank02_Count - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "CastoriceServant_Rank02_Count"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Castorice_Rank02_Count",
                  "value": {
                    "operator": "Variables[0] (CastoriceServant_Rank02_Count) || RETURN",
                    "displayLines": "CastoriceServant_Rank02_Count",
                    "constants": [],
                    "variables": [
                      "CastoriceServant_Rank02_Count"
                    ]
                  }
                },
                {
                  "name": "Set Netherwing's Ardent Will Stacks",
                  "display": {
                    "operator": "Variables[0] (CastoriceServant_Rank02_Count) || RETURN",
                    "displayLines": "CastoriceServant_Rank02_Count",
                    "constants": [],
                    "variables": [
                      "CastoriceServant_Rank02_Count"
                    ]
                  },
                  "preview": 0
                }
              ],
              "failed": [
                {
                  "name": "Consume",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "flatConsume": {
                    "operator": "Variables[0] (CastoriceServant_SkillMaxHP) || Variables[1] (0.25) || MUL || RETURN",
                    "displayLines": "(CastoriceServant_SkillMaxHP * 0.25)",
                    "constants": [],
                    "variables": [
                      "CastoriceServant_SkillMaxHP",
                      0.25
                    ]
                  },
                  "consumeFloor": 1,
                  "attackType": "Unknown"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Consume",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "flatConsume": {
                "operator": "Variables[0] (CastoriceServant_SkillMaxHP) || Variables[1] (0.25) || MUL || RETURN",
                "displayLines": "(CastoriceServant_SkillMaxHP * 0.25)",
                "constants": [],
                "variables": [
                  "CastoriceServant_SkillMaxHP",
                  0.25
                ]
              },
              "consumeFloor": 1,
              "attackType": "Unknown"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceBPLoopMax",
          "value": 10
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (CastoriceBPLoopMax) || RETURN",
            "displayLines": "CastoriceBPLoopMax",
            "constants": [],
            "variables": [
              "CastoriceBPLoopMax"
            ]
          },
          "Event": [
            {
              "name": "Define Custom Variable",
              "variableName": "CastoriceBPLoop",
              "value": {
                "operator": "Variables[0] (CastoriceBPLoop) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(CastoriceBPLoop + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "CastoriceBPLoop"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "includeDyingTargets": true,
                  "ifTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Servant_CastoriceServant_SetDamageRatio"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (0.34) || Variables[1] (Castorice_Rank01_DamageRatio) || MUL || RETURN",
                          "displayLines": "(0.34 * Castorice_Rank01_DamageRatio)",
                          "constants": [],
                          "variables": [
                            0.34,
                            "Castorice_Rank01_DamageRatio"
                          ]
                        },
                        "dmgFormula": "[SUMMONER] Max HP Scaling",
                        "HitSplit": {
                          "operator": "Constants[0] (1) || Constants[0] (1) || Variables[0] (CastoriceBPLoopMax) || DIV || MUL || RETURN",
                          "displayLines": "(1 * (1 / CastoriceBPLoopMax))",
                          "constants": [
                            1
                          ],
                          "variables": [
                            "CastoriceBPLoopMax"
                          ]
                        },
                        "Toughness": {
                          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                          "displayLines": "AOE Toughness Value",
                          "constants": [],
                          "variables": [
                            "AOE Toughness Value"
                          ]
                        },
                        "Tags": null,
                        "attackType": "Memosprite",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (0.34) || RETURN",
                      "displayLines": "0.34",
                      "constants": [],
                      "variables": [
                        0.34
                      ]
                    },
                    "dmgFormula": "[SUMMONER] Max HP Scaling",
                    "HitSplit": {
                      "operator": "Constants[0] (1) || Constants[0] (1) || Variables[0] (CastoriceBPLoopMax) || DIV || MUL || RETURN",
                      "displayLines": "(1 * (1 / CastoriceBPLoopMax))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "CastoriceBPLoopMax"
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Memosprite",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceBPLoop",
          "value": {
            "operator": "Variables[0] (CastoriceBPLoop) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(CastoriceBPLoop + 1)",
            "constants": [
              1
            ],
            "variables": [
              "CastoriceBPLoop"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_BPSkill_Level",
          "value": 3
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_ReadyFlag",
          "value": {
            "operator": "Variables[0] (CastoriceServant_BattleViewModeLevel) || RETURN",
            "displayLines": "CastoriceServant_BattleViewModeLevel",
            "constants": [],
            "variables": [
              "CastoriceServant_BattleViewModeLevel"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_UseSkill02_Flag",
          "value": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Servant_CastoriceServant_BP_OneMore_AbilityChange"
        }
      ],
      "references": []
    },
    "NetherwingPollux_Servant_CastoriceServant_Ability22_Part01": {
      "fileName": "NetherwingPollux_Servant_CastoriceServant_Ability22_Part01",
      "childAbilityList": [
        "NetherwingPollux_Servant_CastoriceServant_Ability22_Part01",
        "NetherwingPollux_Servant_CastoriceServant_Ability22_Part02",
        "NetherwingPollux_Servant_CastoriceServant_Ability22_Camera",
        "NetherwingPollux_Servant_CastoriceServant_Ability22_Skill01toSkill22_Camera"
      ],
      "skillTrigger": "Skill22",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        0,
        10,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CastoriceServant_BPSkill_Level3_Loop",
            "compareType": ">=",
            "value2": 1
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_BPSkill_Level",
                    "compareType": ">=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_ReadyAnimStateFlag",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                "Deleted bullshit"
              ],
              "failed": [
                "Deleted bullshit"
              ]
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Servant_CastoriceServant_Ability22_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CastoriceServant_BPSkill_Level3_Loop",
            "compareType": ">=",
            "value2": 1
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Memosprite_CastoriceServant_BPCost_3"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_BPSkill_Level",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "CastoriceServant_BPSkill_Level3_Loop",
              "value": 1
            }
          ]
        }
      ],
      "references": []
    },
    "NetherwingPollux_Servant_CastoriceServant_Ability21_Part02": {
      "fileName": "NetherwingPollux_Servant_CastoriceServant_Ability21_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CL_PlayTimes",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_BattleViewModeLevel",
          "value": 2
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CL_EnterBattlePlayTimes",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Memosprite_CastoriceServant_BPCost_3"
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "Castorice_Rank02_Count",
                "compareType": "<=",
                "value2": 0,
                "contextScope": "TargetEntity"
              }
            ]
          },
          "passed": [
            {
              "name": "Force Auto-Battle on Target",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "enable": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_BP_Explode"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Ability23Check"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Memosprite_CastoriceServant_LifeTime",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Force Auto-Battle on Target",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "enable": true
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_BPSkill_Level",
          "value": 2
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_UseSkill02_Flag",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "PointB3"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Castorice_PointB3_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">Where The West Wind Dwells</span>]",
              "stackLimit": {
                "operator": "Variables[0] (CastoriceServant_PointB3_MaxLayer) || RETURN",
                "displayLines": "CastoriceServant_PointB3_MaxLayer",
                "constants": [],
                "variables": [
                  "CastoriceServant_PointB3_MaxLayer"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (CastoriceServant_PointB3_AllDamageTypeAddedRatio) || RETURN",
                  "displayLines": "CastoriceServant_PointB3_AllDamageTypeAddedRatio",
                  "constants": [],
                  "variables": [
                    "CastoriceServant_PointB3_AllDamageTypeAddedRatio"
                  ]
                }
              },
              "addStacksPerTrigger": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "Castorice_Rank02_Count",
                "compareType": ">",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CastoriceServant_Rank02_Count",
                  "value": {
                    "operator": "Variables[0] (CastoriceServant_Rank02_Count) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(CastoriceServant_Rank02_Count - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "CastoriceServant_Rank02_Count"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Castorice_Rank02_Count",
                  "value": {
                    "operator": "Variables[0] (CastoriceServant_Rank02_Count) || RETURN",
                    "displayLines": "CastoriceServant_Rank02_Count",
                    "constants": [],
                    "variables": [
                      "CastoriceServant_Rank02_Count"
                    ]
                  }
                },
                {
                  "name": "Set Netherwing's Ardent Will Stacks",
                  "display": {
                    "operator": "Variables[0] (CastoriceServant_Rank02_Count) || RETURN",
                    "displayLines": "CastoriceServant_Rank02_Count",
                    "constants": [],
                    "variables": [
                      "CastoriceServant_Rank02_Count"
                    ]
                  },
                  "preview": 0
                }
              ],
              "failed": [
                {
                  "name": "Consume",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "flatConsume": {
                    "operator": "Variables[0] (CastoriceServant_SkillMaxHP) || Variables[1] (0.25) || MUL || RETURN",
                    "displayLines": "(CastoriceServant_SkillMaxHP * 0.25)",
                    "constants": [],
                    "variables": [
                      "CastoriceServant_SkillMaxHP",
                      0.25
                    ]
                  },
                  "consumeFloor": 1,
                  "attackType": "Unknown"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Consume",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "flatConsume": {
                "operator": "Variables[0] (CastoriceServant_SkillMaxHP) || Variables[1] (0.25) || MUL || RETURN",
                "displayLines": "(CastoriceServant_SkillMaxHP * 0.25)",
                "constants": [],
                "variables": [
                  "CastoriceServant_SkillMaxHP",
                  0.25
                ]
              },
              "consumeFloor": 1,
              "attackType": "Unknown"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceBPLoopMax",
          "value": 10
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (CastoriceBPLoopMax) || RETURN",
            "displayLines": "CastoriceBPLoopMax",
            "constants": [],
            "variables": [
              "CastoriceBPLoopMax"
            ]
          },
          "Event": [
            {
              "name": "Define Custom Variable",
              "variableName": "CastoriceBPLoop",
              "value": {
                "operator": "Variables[0] (CastoriceBPLoop) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(CastoriceBPLoop + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "CastoriceBPLoop"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "includeDyingTargets": true,
                  "ifTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Servant_CastoriceServant_SetDamageRatio"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (0.28) || Variables[1] (Castorice_Rank01_DamageRatio) || MUL || RETURN",
                          "displayLines": "(0.28 * Castorice_Rank01_DamageRatio)",
                          "constants": [],
                          "variables": [
                            0.28,
                            "Castorice_Rank01_DamageRatio"
                          ]
                        },
                        "dmgFormula": "[SUMMONER] Max HP Scaling",
                        "HitSplit": {
                          "operator": "Constants[0] (1) || Constants[0] (1) || Variables[0] (CastoriceBPLoopMax) || DIV || MUL || RETURN",
                          "displayLines": "(1 * (1 / CastoriceBPLoopMax))",
                          "constants": [
                            1
                          ],
                          "variables": [
                            "CastoriceBPLoopMax"
                          ]
                        },
                        "Toughness": {
                          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                          "displayLines": "AOE Toughness Value",
                          "constants": [],
                          "variables": [
                            "AOE Toughness Value"
                          ]
                        },
                        "Tags": null,
                        "attackType": "Memosprite",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (0.28) || RETURN",
                      "displayLines": "0.28",
                      "constants": [],
                      "variables": [
                        0.28
                      ]
                    },
                    "dmgFormula": "[SUMMONER] Max HP Scaling",
                    "HitSplit": {
                      "operator": "Constants[0] (1) || Constants[0] (1) || Variables[0] (CastoriceBPLoopMax) || DIV || MUL || RETURN",
                      "displayLines": "(1 * (1 / CastoriceBPLoopMax))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "CastoriceBPLoopMax"
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Memosprite",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceBPLoop",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_ReadyFlag",
          "value": {
            "operator": "Variables[0] (CastoriceServant_BattleViewModeLevel) || RETURN",
            "displayLines": "CastoriceServant_BattleViewModeLevel",
            "constants": [],
            "variables": [
              "CastoriceServant_BattleViewModeLevel"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_UseSkill02_Flag",
          "value": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Servant_CastoriceServant_BP_OneMore_AbilityChange"
        }
      ],
      "references": []
    },
    "NetherwingPollux_Servant_CastoriceServant_Ability21_Part01": {
      "fileName": "NetherwingPollux_Servant_CastoriceServant_Ability21_Part01",
      "childAbilityList": [
        "NetherwingPollux_Servant_CastoriceServant_Ability21_Part01",
        "NetherwingPollux_Servant_CastoriceServant_Ability21_Part02",
        "NetherwingPollux_Servant_CastoriceServant_Ability21_Camera",
        "NetherwingPollux_Servant_CastoriceServant_Ability21_Skill01toSkill21_Camera"
      ],
      "skillTrigger": "Skill21",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        0,
        20,
        0
      ],
      "parse": [
        {
          "name": "Set Netherwing Skill Phase",
          "level": 2
        },
        {
          "name": "Update Action Bar Display",
          "triggerName": "Level_2",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": ">=",
                "value2": 1
              },
              {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_ReadyAnimStateFlag",
                "compareType": ">=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "CastoriceServant_ReadyAnimStateFlag",
              "value": 0
            },
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Servant_CastoriceServant_Ability21_Part02",
              "isTrigger": true
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Servant_CastoriceServant_Ability21_Part02",
              "isTrigger": true
            }
          ]
        }
      ],
      "references": []
    },
    "NetherwingPollux_Servant_CastoriceServant_Ability02_Part02": {
      "fileName": "NetherwingPollux_Servant_CastoriceServant_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CL_PlayTimes",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_BattleViewModeLevel",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CL_EnterBattlePlayTimes",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Memosprite_CastoriceServant_BPCost_3"
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "Castorice_Rank02_Count",
                "compareType": "<=",
                "value2": 0,
                "contextScope": "TargetEntity"
              }
            ]
          },
          "passed": [
            {
              "name": "Force Auto-Battle on Target",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "enable": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_BP_Explode"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Ability23Check"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Memosprite_CastoriceServant_LifeTime",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Force Auto-Battle on Target",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "enable": true
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_BPSkill_Level",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_UseSkill02_Flag",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "PointB3"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Castorice_PointB3_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">Where The West Wind Dwells</span>]",
              "stackLimit": {
                "operator": "Variables[0] (CastoriceServant_PointB3_MaxLayer) || RETURN",
                "displayLines": "CastoriceServant_PointB3_MaxLayer",
                "constants": [],
                "variables": [
                  "CastoriceServant_PointB3_MaxLayer"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (CastoriceServant_PointB3_AllDamageTypeAddedRatio) || RETURN",
                  "displayLines": "CastoriceServant_PointB3_AllDamageTypeAddedRatio",
                  "constants": [],
                  "variables": [
                    "CastoriceServant_PointB3_AllDamageTypeAddedRatio"
                  ]
                }
              },
              "addStacksPerTrigger": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "Castorice_Rank02_Count",
                "compareType": ">",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CastoriceServant_Rank02_Count",
                  "value": {
                    "operator": "Variables[0] (CastoriceServant_Rank02_Count) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(CastoriceServant_Rank02_Count - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "CastoriceServant_Rank02_Count"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Castorice_Rank02_Count",
                  "value": {
                    "operator": "Variables[0] (CastoriceServant_Rank02_Count) || RETURN",
                    "displayLines": "CastoriceServant_Rank02_Count",
                    "constants": [],
                    "variables": [
                      "CastoriceServant_Rank02_Count"
                    ]
                  }
                },
                {
                  "name": "Set Netherwing's Ardent Will Stacks",
                  "display": {
                    "operator": "Variables[0] (CastoriceServant_Rank02_Count) || RETURN",
                    "displayLines": "CastoriceServant_Rank02_Count",
                    "constants": [],
                    "variables": [
                      "CastoriceServant_Rank02_Count"
                    ]
                  },
                  "preview": 0
                }
              ],
              "failed": [
                {
                  "name": "Consume",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "flatConsume": {
                    "operator": "Variables[0] (CastoriceServant_SkillMaxHP) || Variables[1] (0.25) || MUL || RETURN",
                    "displayLines": "(CastoriceServant_SkillMaxHP * 0.25)",
                    "constants": [],
                    "variables": [
                      "CastoriceServant_SkillMaxHP",
                      0.25
                    ]
                  },
                  "consumeFloor": 1,
                  "attackType": "Unknown"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Consume",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "flatConsume": {
                "operator": "Variables[0] (CastoriceServant_SkillMaxHP) || Variables[1] (0.25) || MUL || RETURN",
                "displayLines": "(CastoriceServant_SkillMaxHP * 0.25)",
                "constants": [],
                "variables": [
                  "CastoriceServant_SkillMaxHP",
                  0.25
                ]
              },
              "consumeFloor": 1,
              "attackType": "Unknown"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceBPLoopMax",
          "value": 10
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (CastoriceBPLoopMax) || RETURN",
            "displayLines": "CastoriceBPLoopMax",
            "constants": [],
            "variables": [
              "CastoriceBPLoopMax"
            ]
          },
          "Event": [
            {
              "name": "Define Custom Variable",
              "variableName": "CastoriceBPLoop",
              "value": {
                "operator": "Variables[0] (CastoriceBPLoop) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(CastoriceBPLoop + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "CastoriceBPLoop"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "includeDyingTargets": true,
                  "ifTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Servant_CastoriceServant_SetDamageRatio"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (0.24) || Variables[1] (Castorice_Rank01_DamageRatio) || MUL || RETURN",
                          "displayLines": "(0.24 * Castorice_Rank01_DamageRatio)",
                          "constants": [],
                          "variables": [
                            0.24,
                            "Castorice_Rank01_DamageRatio"
                          ]
                        },
                        "dmgFormula": "[SUMMONER] Max HP Scaling",
                        "HitSplit": {
                          "operator": "Constants[0] (1) || Constants[0] (1) || Variables[0] (CastoriceBPLoopMax) || DIV || MUL || RETURN",
                          "displayLines": "(1 * (1 / CastoriceBPLoopMax))",
                          "constants": [
                            1
                          ],
                          "variables": [
                            "CastoriceBPLoopMax"
                          ]
                        },
                        "Toughness": {
                          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                          "displayLines": "AOE Toughness Value",
                          "constants": [],
                          "variables": [
                            "AOE Toughness Value"
                          ]
                        },
                        "Tags": null,
                        "attackType": "Memosprite",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (0.24) || RETURN",
                      "displayLines": "0.24",
                      "constants": [],
                      "variables": [
                        0.24
                      ]
                    },
                    "dmgFormula": "[SUMMONER] Max HP Scaling",
                    "HitSplit": {
                      "operator": "Constants[0] (1) || Constants[0] (1) || Variables[0] (CastoriceBPLoopMax) || DIV || MUL || RETURN",
                      "displayLines": "(1 * (1 / CastoriceBPLoopMax))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "CastoriceBPLoopMax"
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Memosprite",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceBPLoop",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_ReadyFlag",
          "value": {
            "operator": "Variables[0] (CastoriceServant_BattleViewModeLevel) || RETURN",
            "displayLines": "CastoriceServant_BattleViewModeLevel",
            "constants": [],
            "variables": [
              "CastoriceServant_BattleViewModeLevel"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_UseSkill02_Flag",
          "value": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Servant_CastoriceServant_BP_OneMore_AbilityChange"
        }
      ],
      "references": []
    },
    "NetherwingPollux_Servant_CastoriceServant_Ability02_Part01": {
      "fileName": "NetherwingPollux_Servant_CastoriceServant_Ability02_Part01",
      "childAbilityList": [
        "NetherwingPollux_Servant_CastoriceServant_Ability02_Part01",
        "NetherwingPollux_Servant_CastoriceServant_Ability02_Part02",
        "NetherwingPollux_Servant_CastoriceServant_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Servant_CastoriceServant_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "NetherwingPollux_Servant_CastoriceServant_Ability01_Ready": {
      "fileName": "NetherwingPollux_Servant_CastoriceServant_Ability01_Ready",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "NetherwingPollux_Servant_CastoriceServant_Ability01_Part02": {
      "fileName": "NetherwingPollux_Servant_CastoriceServant_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Servant_CastoriceServant_BP_OneMore_Clean"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "includeDyingTargets": true,
              "ifTargetFound": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_CastoriceServant_SetDamageRatio"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (0.4) || Variables[1] (Castorice_Rank01_DamageRatio) || MUL || RETURN",
                      "displayLines": "(0.4 * Castorice_Rank01_DamageRatio)",
                      "constants": [],
                      "variables": [
                        0.4,
                        "Castorice_Rank01_DamageRatio"
                      ]
                    },
                    "dmgFormula": "[SUMMONER] Max HP Scaling",
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Memosprite",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
                  ]
                },
                "dmgFormula": "[SUMMONER] Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Memosprite",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage"
            }
          ]
        },
        "Trigger: Ability End",
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceServant_ReadyFlag",
          "value": {
            "operator": "Variables[0] (CastoriceServant_BattleViewModeLevel) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(CastoriceServant_BattleViewModeLevel + 1)",
            "constants": [
              1
            ],
            "variables": [
              "CastoriceServant_BattleViewModeLevel"
            ]
          }
        },
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_StandByOnPhase2"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_StandByOnPhase2",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "CastoriceServant_ReadyFlag"
          ],
          "duration": 1
        }
      ]
    },
    "NetherwingPollux_Servant_CastoriceServant_Ability01_Part01": {
      "fileName": "NetherwingPollux_Servant_CastoriceServant_Ability01_Part01",
      "childAbilityList": [
        "NetherwingPollux_Servant_CastoriceServant_Ability01_Part01",
        "NetherwingPollux_Servant_CastoriceServant_Ability01_Part02",
        "NetherwingPollux_Servant_CastoriceServant_Ability01_Camera",
        "NetherwingPollux_Servant_CastoriceServant_Ability01_Ready"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Servant_CastoriceServant_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "NetherwingPollux_Modifiers": {
      "fileName": "NetherwingPollux_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_Eidolon6_StancePreview",
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "whenValueChanges": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (CASTORICE_OBJECT_UNUSED_8) || RETURN",
                        "displayLines": "CASTORICE_OBJECT_UNUSED_8",
                        "constants": [],
                        "variables": [
                          "CASTORICE_OBJECT_UNUSED_8"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Memosprite",
            "toughnessForcedReductionPreview": {
              "operator": "Variables[0] (CASTORICE_OBJECT_UNUSED_8) || RETURN",
              "displayLines": "CASTORICE_OBJECT_UNUSED_8",
              "constants": [],
              "variables": [
                "CASTORICE_OBJECT_UNUSED_8"
              ]
            },
            "showAsForcedReduction": true
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ForceStanceDamage"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (CASTORICE_OBJECT_UNUSED_8) || RETURN",
                    "displayLines": "CASTORICE_OBJECT_UNUSED_8",
                    "constants": [],
                    "variables": [
                      "CASTORICE_OBJECT_UNUSED_8"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_Ability23Check",
          "stackData": [],
          "latentQueue": [
            "CL_PlayTimes",
            "CL_EnterBattlePlayTimes"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_BP_Explode",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_BPSkill_Level",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill22",
                      "skillSlot": "Memosprite",
                      "enableSecondaryType": "ControlSkill02"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_BPSkill_Level",
                    "compareType": "<=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill21",
                      "skillSlot": "Memosprite",
                      "enableSecondaryType": "ControlSkill02"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_BPSkill_Level",
                    "compareType": "<",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill02",
                      "skillSlot": "Memosprite",
                      "enableSecondaryType": "ControlSkill02"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CastoriceServant_Disable"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CastoriceServant_Disable"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill23",
                  "skillSlot": "Memosprite",
                  "enableSecondaryType": "ControlSkill02"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "CL_PlayTimes",
            "CL_EnterBattlePlayTimes"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_Disable",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": null,
                  "controlTypes": [
                    "ControlSkill01"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "CL_EnterBattlePlayTimes",
            "CL_PlayTimes",
            "CastoriceServant_BPSkill_Level"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_BPCost_3",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_BPSkill_Level",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Set Netherwing Skill Phase",
                      "level": 3
                    },
                    {
                      "name": "Update Action Bar Display",
                      "triggerName": "Level_3",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    },
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill22",
                      "skillSlot": "Memosprite",
                      "enableSecondaryType": "ControlSkill02"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_BPSkill_Level",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Set Netherwing Skill Phase",
                      "level": 2
                    },
                    {
                      "name": "Update Action Bar Display",
                      "triggerName": "Level_2",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    },
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill21",
                      "skillSlot": "Memosprite",
                      "enableSecondaryType": "ControlSkill02"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_BPSkill_Level",
                    "compareType": "<",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill02",
                      "skillSlot": "Memosprite",
                      "enableSecondaryType": "ControlSkill02"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_BPCost_2",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill22",
                  "skillSlot": "Memosprite",
                  "enableSecondaryType": "ControlSkill02"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "CastoriceServant_BPSkill_Level"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_BPCost_1",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill21",
                  "skillSlot": "Memosprite",
                  "enableSecondaryType": "ControlSkill02"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "CastoriceServant_BPSkill_Level"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_Flag01",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_InsideExplode[<span class=\"descriptionNumberColor\">Back to the Black</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "description": "Triggers the Talent effect of \"Wings Sweep the Ruins\" the next time \"Breath Scorches the Shadow\" is used.",
          "type": "Other",
          "statusName": "Back to the Black"
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_GoDie",
          "modifierFlags": [
            "DisableHPBarRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_HitDamageSplit",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Lock HP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "lockHolder": "Memosprite_CastoriceServant_HitDamageSplit"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Fatal Damage [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Standard_Departed",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Target is HP-Locked",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Lock HP",
                          "threshold": 0,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "lockHolder": "Memosprite_CastoriceServant_HitDamageSplit"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Was Overhealed [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Standard_Departed",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "ParameterValue",
                            "compareType": "<",
                            "value2": 0
                          },
                          {
                            "name": "Target is HP-Locked",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "lockHolder": "Memosprite_CastoriceServant_HitDamageSplit"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Changes to Stats",
                          "variableName": "MDF_OwnerDeltaHP"
                        },
                        {
                          "name": "Consume",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "flatConsume": {
                            "operator": "Variables[0] (MDF_OwnerDeltaHP) || INVERT || Variables[1] (5) || MUL || RETURN",
                            "displayLines": "(-MDF_OwnerDeltaHP * 5)",
                            "constants": [],
                            "variables": [
                              "MDF_OwnerDeltaHP",
                              5
                            ]
                          },
                          "attackType": "Unknown"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Lock HP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "lockHolder": "Memosprite_CastoriceServant_HitDamageSplit"
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Lock HP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "lockHolder": "Memosprite_CastoriceServant_HitDamageSplit"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_OnListenHitDamageSplit",
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
              },
              "modifier": "Memosprite_CastoriceServant_HitDamageSplit",
              "haloStatus": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_LoseHPPreShow",
          "execute": [
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_PreShowMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "value1": "Castorice_Rank02_Count",
                        "compareType": "<=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Memosprite_CastoriceServant_LifeTime",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Update UI Preview",
                          "show": "Show",
                          "skillType": [
                            "Memosprite"
                          ],
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "previewType": null,
                          "previewValue": {
                            "operator": "Variables[0] (MDF_PreShowMaxHP) || RETURN",
                            "displayLines": "MDF_PreShowMaxHP",
                            "constants": [],
                            "variables": [
                              "MDF_PreShowMaxHP"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update UI Preview",
                          "show": "Show",
                          "skillType": [
                            "Memosprite"
                          ],
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "previewType": null,
                          "previewValue": {
                            "operator": "Variables[0] (MDF_PreShowMaxHP) || Variables[1] (0.25) || MUL || RETURN",
                            "displayLines": "(MDF_PreShowMaxHP * 0.25)",
                            "constants": [],
                            "variables": [
                              "MDF_PreShowMaxHP",
                              0.25
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Memosprite_CastoriceServant_LifeTime",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Update UI Preview",
                          "show": "Show",
                          "skillType": [
                            "Memosprite"
                          ],
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "previewType": null,
                          "previewValue": {
                            "operator": "Variables[0] (MDF_PreShowMaxHP) || RETURN",
                            "displayLines": "MDF_PreShowMaxHP",
                            "constants": [],
                            "variables": [
                              "MDF_PreShowMaxHP"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Eidolon Activated",
                            "eidolon": 2
                          },
                          "passed": [
                            {
                              "name": "Set Netherwing's Ardent Will Stacks",
                              "display": {
                                "operator": "Variables[0] (CastoriceServant_Rank02_Count) || RETURN",
                                "displayLines": "CastoriceServant_Rank02_Count",
                                "constants": [],
                                "variables": [
                                  "CastoriceServant_Rank02_Count"
                                ]
                              },
                              "preview": {
                                "operator": "Variables[0] (CastoriceServant_Rank02_Count) || RETURN",
                                "displayLines": "CastoriceServant_Rank02_Count",
                                "constants": [],
                                "variables": [
                                  "CastoriceServant_Rank02_Count"
                                ]
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Eidolon Activated",
                            "eidolon": 2
                          },
                          "passed": [
                            {
                              "name": "Set Netherwing's Ardent Will Stacks",
                              "display": {
                                "operator": "Variables[0] (CastoriceServant_Rank02_Count) || RETURN",
                                "displayLines": "CastoriceServant_Rank02_Count",
                                "constants": [],
                                "variables": [
                                  "CastoriceServant_Rank02_Count"
                                ]
                              },
                              "preview": 1
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CastoriceServant_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">Roar Rumbles the Realm</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Roar Rumbles the Realm"
        }
      ],
      "references": []
    },
    "NetherwingPollux_Functions": {
      "fileName": "NetherwingPollux_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 8,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_CastoriceServant_RefreshActionBar",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Memosprite_CastoriceServant_LifeTime"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Action Bar Display",
                  "triggerName": "Level_0",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Set Netherwing Skill Phase"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Auto-Battle",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Force Auto-Battle on Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CastoriceServant_InsideExplode[<span class=\"descriptionNumberColor\">Back to the Black</span>]"
                }
              ],
              "failed": [
                {
                  "name": "Update Action Bar Display",
                  "triggerName": "Level_Limit",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Set Netherwing Skill Phase"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CastoriceServant_InsideExplode[<span class=\"descriptionNumberColor\">Back to the Black</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_CastoriceServant_SetDamageRatio",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (CastoriceServant_Eidolon1_HPRatio01) || RETURN",
                  "displayLines": "CastoriceServant_Eidolon1_HPRatio01",
                  "constants": [],
                  "variables": [
                    "CastoriceServant_Eidolon1_HPRatio01"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Castorice_Rank01_DamageRatio",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (CastoriceServant_Eidolon1_HPRatio01) || RETURN",
                          "displayLines": "CastoriceServant_Eidolon1_HPRatio01",
                          "constants": [],
                          "variables": [
                            "CastoriceServant_Eidolon1_HPRatio01"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (CastoriceServant_Eidolon1_HPRatio02) || RETURN",
                          "displayLines": "CastoriceServant_Eidolon1_HPRatio02",
                          "constants": [],
                          "variables": [
                            "CastoriceServant_Eidolon1_HPRatio02"
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Castorice_Rank01_DamageRatio",
                      "value": {
                        "operator": "Variables[0] (CastoriceServant_Eidolon1_DamageRatio01) || RETURN",
                        "displayLines": "CastoriceServant_Eidolon1_DamageRatio01",
                        "constants": [],
                        "variables": [
                          "CastoriceServant_Eidolon1_DamageRatio01"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (CastoriceServant_Eidolon1_HPRatio02) || RETURN",
                          "displayLines": "CastoriceServant_Eidolon1_HPRatio02",
                          "constants": [],
                          "variables": [
                            "CastoriceServant_Eidolon1_HPRatio02"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Castorice_Rank01_DamageRatio",
                          "value": {
                            "operator": "Variables[0] (CastoriceServant_Eidolon1_DamageRatio02) || RETURN",
                            "displayLines": "CastoriceServant_Eidolon1_DamageRatio02",
                            "constants": [],
                            "variables": [
                              "CastoriceServant_Eidolon1_DamageRatio02"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_CastoriceServant_GetMaxHP",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "CastoriceServant_SummonMaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CastoriceServant_CurrentHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CastoriceServant_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_CastoriceServant_BP_OneMore_Clean",
          "parse": [
            {
              "name": "Define Custom Variable",
              "variableName": "CastoriceServant_BPSkill_Level3_Loop",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Flag01"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_BPCost_1"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_BPCost_2"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_BPCost_3"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_BP_Explode"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_CastoriceServant_BP_OneMore_AbilityChange",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": ">=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Update Action Bar Display",
                  "triggerName": "Level_3",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Update Action Bar Display",
                  "triggerName": "Level_2",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Memosprite_CastoriceServant_LifeTime",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CastoriceServant_Disable"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Auto-Battle",
                "invertCondition": true
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Flag01"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Memosprite_CastoriceServant_BP_Explode"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Memosprite_CastoriceServant_BPCost_1"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Memosprite_CastoriceServant_BPCost_2"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CastoriceServant_BPSkill_Level",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Memosprite_CastoriceServant_BPCost_1"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CastoriceServant_BPSkill_Level",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Memosprite_CastoriceServant_BPCost_2"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Memosprite_CastoriceServant_BPCost_3"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CastoriceServant_BPSkill_Level",
                        "compareType": "<=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Memosprite_CastoriceServant_BPCost_1"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CastoriceServant_BPSkill_Level",
                        "compareType": ">=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Memosprite_CastoriceServant_BPCost_2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "HP Can be Damaged",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}.[[removeUnselectable]]"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Memosprite_CastoriceServant_TiggerKiller",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "PointB2"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Memosprite_Castorice_SpeedRatio[<span class=\"descriptionNumberColor\">Inverted Torch</span>]",
                      "duration": 1,
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (CastoriceServant_PointB2_SpeedRatio) || RETURN",
                          "displayLines": "CastoriceServant_PointB2_SpeedRatio",
                          "constants": [],
                          "variables": [
                            "CastoriceServant_PointB2_SpeedRatio"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_BPSkill_Level",
                    "compareType": "=",
                    "value2": 1
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_BPSkill_Level",
                    "compareType": "=",
                    "value2": 2
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_BPSkill_Level",
                    "compareType": "=",
                    "value2": 3
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_CastoriceServant_AnimEvents"
                },
                "Trigger: Attack End",
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage"
                    }
                  ]
                },
                "Trigger: Ability End",
                {
                  "name": "WAIT FOR",
                  "condition": {
                    "name": "Death Animation Completed",
                    "team": "Enemy Team",
                    "type": "Team Characters"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CastoriceServant_Flag01"
                }
              ],
              "failed": [
                {
                  "name": "Force-Trigger Ability Next-Phase",
                  "ability": "MISSING NAME OBJECT(Or implicit from Context)"
                },
                {
                  "name": "Trigger: Ability End",
                  "skipAttackSettle": true
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_CastoriceServant_FlyToAbility23",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                "Deleted bullshit"
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                "Deleted bullshit"
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                "Deleted bullshit"
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_BPCost_3"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_CastoriceServant_OnPhase1Change",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CastoriceServant_BPCost_2"
                },
                {
                  "name": "Set Netherwing Skill Phase",
                  "level": 3
                },
                {
                  "name": "Update Action Bar Display",
                  "triggerName": "Level_3",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_ReadyAnimStateFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CastoriceServant_ReadyAnimStateFlag",
                      "value": 1
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CastoriceServant_BPSkill_Level",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Memosprite_CastoriceServant_BPCost_2"
                    },
                    {
                      "name": "Set Netherwing Skill Phase",
                      "level": 3
                    },
                    {
                      "name": "Update Action Bar Display",
                      "triggerName": "Level_3",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CastoriceServant_ReadyAnimStateFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "CastoriceServant_ReadyAnimStateFlag",
                          "value": 1
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CastoriceServant_BPSkill_Level",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Set Netherwing Skill Phase",
                          "level": 2
                        },
                        {
                          "name": "Update Action Bar Display",
                          "triggerName": "Level_2",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Memosprite_CastoriceServant_BPCost_1"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "CastoriceServant_ReadyAnimStateFlag",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "CastoriceServant_ReadyAnimStateFlag",
                              "value": 1
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BattleViewModeLevel",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CastoriceServant_BattleViewModeLevel",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CastoriceServant_BattleViewModeLevel",
                  "value": {
                    "operator": "Variables[0] (CastoriceServant_BattleViewModeLevel) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(CastoriceServant_BattleViewModeLevel + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "CastoriceServant_BattleViewModeLevel"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "CastoriceServant_BPSkill_Level3_Loop",
              "value": 0
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_CastoriceServant_AnimEvents",
          "parse": [
            {
              "name": "Force Auto-Battle on Target",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": "<=",
                "value2": 1
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": "=",
                "value2": 2
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": ">=",
                "value2": 3
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_BPCost_3"
            }
          ]
        }
      ],
      "references": []
    }
  }
}