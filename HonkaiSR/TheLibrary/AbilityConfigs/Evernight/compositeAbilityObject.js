const compositeAbilityObject = {
  "fullCharacterName": "Evernight",
  "trimCharacterName": "Evernight",
  "summonName": "Evey",
  "trimSummonName": "Evey",
  "abilityList": [
    "Evernight_Evernight_TechniqueInLevel",
    "Evernight_Evernight_PassiveAbility01",
    "Evernight_Evernight_Ability03_Part02",
    "Evernight_Evernight_Ability03_Part02_Charge",
    "Evernight_Evernight_Ability03_Servant_Damage",
    "Evernight_Evernight_Ability03_Part01",
    "Evernight_Evernight_Ability03_Servant",
    "Evernight_Evernight_Ability03_EnterReady",
    "Evernight_Evernight_Ability21_Part02",
    "Evernight_Evernight_Ability02_Part02",
    "Evernight_Evernight_Ability21_Part01",
    "Evernight_Evernight_Ability02_2_Servant",
    "Evernight_Evernight_Ability02_Servant",
    "Evernight_Evernight_Ability02_Part01",
    "Evernight_Evernight_Ability01_Part02",
    "Evernight_Evernight_Ability01_Part01",
    "Evernight_Modifiers",
    "Evernight_Functions",
    "Evey_Servant_EvernightServant_DeathRattle",
    "Evey_Servant_EvernightServant_BattleCry",
    "Evey_Servant_EvernightServant_PassiveAbility01",
    "Evey_Servant_EvernightServant_Ability12_Part02",
    "Evey_Servant_EvernightServant_Ability11_Part02",
    "Evey_Servant_EvernightServant_Ability11_Part01",
    "Evey_Servant_EvernightServant_Ability11_EnterReady",
    "Evey_Servant_EvernightServant_Ability01_Part02",
    "Evey_Servant_EvernightServant_Ability01_Part01",
    "Evey_Servant_EvernightServant_PassiveAbility01_Resummon",
    "Evey_Modifiers"
  ],
  "abilityObject": {
    "Evernight_Evernight_TechniqueInLevel": {
      "fileName": "Evernight_Evernight_TechniqueInLevel",
      "childAbilityList": [
        "Evernight_Evernight_TechniqueInLevel"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_Maze"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Evernight_Maze",
          "execute": [
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
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_Partner_Count_Show",
                      "value": {
                        "operator": "Variables[0] (1) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                        "displayLines": "(1 + _Evernight_00_Extra_Energy)",
                        "constants": [],
                        "variables": [
                          1,
                          "_Evernight_00_Extra_Energy"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "variableName": "_Partner_Count",
                      "value": {
                        "operator": "Variables[0] (1) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                        "displayLines": "(1 + _Evernight_00_Extra_Energy)",
                        "constants": [],
                        "variables": [
                          1,
                          "_Evernight_00_Extra_Energy"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_S02_Buff_Value",
                      "value": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Kindle the Morn, Drop the Rain"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Team Count",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]]"
                          },
                          "variableName": "_S02_Char_Count",
                          "livingTargets": true,
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Target is Pathstrider",
                                "path": [
                                  "Remembrance"
                                ],
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                }
                              },
                              {
                                "name": "Is Entity a Battle Event/Summon",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "invertCondition": true
                              }
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_S02_Char_Count",
                            "compareType": ">=",
                            "value2": 4
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_S02_Buff_Value",
                              "value": {
                                "operator": "Variables[0] (0.65) || Variables[1] (_S02_Buff_Value) || ADD || RETURN",
                                "displayLines": "(0.65 + _S02_Buff_Value)",
                                "constants": [],
                                "variables": [
                                  0.65,
                                  "_S02_Buff_Value"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "_S02_Char_Count",
                                "compareType": "=",
                                "value2": 3
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "_S02_Buff_Value",
                                  "value": {
                                    "operator": "Variables[0] (0.5) || Variables[1] (_S02_Buff_Value) || ADD || RETURN",
                                    "displayLines": "(0.5 + _S02_Buff_Value)",
                                    "constants": [],
                                    "variables": [
                                      0.5,
                                      "_S02_Buff_Value"
                                    ]
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "_S02_Char_Count",
                                    "compareType": "=",
                                    "value2": 2
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "_S02_Buff_Value",
                                      "value": {
                                        "operator": "Variables[0] (0.15) || Variables[1] (_S02_Buff_Value) || ADD || RETURN",
                                        "displayLines": "(0.15 + _S02_Buff_Value)",
                                        "constants": [],
                                        "variables": [
                                          0.15,
                                          "_S02_Buff_Value"
                                        ]
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "_S02_Char_Count",
                                        "compareType": "=",
                                        "value2": 1
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "_S02_Buff_Value",
                                          "value": {
                                            "operator": "Variables[0] (0.05) || Variables[1] (_S02_Buff_Value) || ADD || RETURN",
                                            "displayLines": "(0.05 + _S02_Buff_Value)",
                                            "constants": [],
                                            "variables": [
                                              0.05,
                                              "_S02_Buff_Value"
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
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Evernight_Ability02_Bonus[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_Conv": {
                          "operator": "Variables[0] (0.24) || Variables[1] (S02_ExtraRatio) || ADD || RETURN",
                          "displayLines": "(0.24 + S02_ExtraRatio)",
                          "constants": [],
                          "variables": [
                            0.24,
                            "S02_ExtraRatio"
                          ]
                        },
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (_S02_Buff_Value) || RETURN",
                          "displayLines": "_S02_Buff_Value",
                          "constants": [],
                          "variables": [
                            "_S02_Buff_Value"
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
    "Evernight_Evernight_PassiveAbility01": {
      "fileName": "Evernight_Evernight_PassiveAbility01",
      "childAbilityList": [
        "Evernight_Evernight_PassiveAbility01"
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
          "name": "Define Custom Variable",
          "variableName": "_Partner_Count_Max",
          "value": {
            "operator": "Variables[0] (16) || RETURN",
            "displayLines": "16",
            "constants": [],
            "variables": [
              16
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_SummonServantPreshow"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_LoseHPPreshow"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "displaySubType": "Fraction",
          "displayShowIcon": "False",
          "maximum": {
            "operator": "Variables[0] (_Partner_Count_Max) || RETURN",
            "displayLines": "_Partner_Count_Max",
            "constants": [],
            "variables": [
              "_Partner_Count_Max"
            ]
          },
          "assignState": "True",
          "bar#": "Number"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Dark the Night, Still the Moon",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Evernight_PointB1_Crit[<span class=\"descriptionNumberColor\">Dark the Night, Still the Moon</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.35) || RETURN",
                  "displayLines": "0.35",
                  "constants": [],
                  "variables": [
                    0.35
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
              "modifier": "Evernight_PointB1_Aura",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
                  ]
                },
                "MDF_Cost": {
                  "operator": "Variables[0] (0.05) || RETURN",
                  "displayLines": "0.05",
                  "constants": [],
                  "variables": [
                    0.05
                  ]
                },
                "MDF_LifeTime": {
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
              "modifier": "Evernight_Eidolon2_Crit[<span class=\"descriptionNumberColor\">Listen Up, the Slumber Speaks Soft</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_EnergyBar"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_Passive_Endurance_Control"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_Passive"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Evernight_PL_Layer",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_HPChange",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "S03_Duration",
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
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "S03_Duration",
              "value": {
                "operator": "Variables[0] (S03_Duration) || Variables[1] (2) || ADD || RETURN",
                "displayLines": "(S03_Duration + 2)",
                "constants": [],
                "variables": [
                  "S03_Duration",
                  2
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Evernight_00_Extra_Energy",
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
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Evernight_Eidolon1_ListenDamage"
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
              "modifier": "Evernight_Eidolon4_Aura"
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
              "modifier": "Evernight_Eidolon6_Aura"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Rouse the Flame, Lull the Light"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Evernight_PointB2_EnterBattle"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_ViewMode_Control"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Evernight_EnergyBar",
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_Partner_Count",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": -999,
                  "maxValue": 99999,
                  "whenEnteringRange": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_Partner_Count) || RETURN",
                        "displayLines": "_Partner_Count",
                        "constants": [],
                        "variables": [
                          "_Partner_Count"
                        ]
                      }
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_Partner_Count) || RETURN",
                        "displayLines": "_Partner_Count",
                        "constants": [],
                        "variables": [
                          "_Partner_Count"
                        ]
                      }
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
          "for": "Evernight_Passive_Endurance_Control",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Memosprite}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Memosprite}}"
                        },
                        "modifier": "Memosprite_EvernightServant_TriggerNormal_NoEnemy"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "modifier": "Memosprite_EvernightServant_TriggerNormal",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Memosprite}}"
                        },
                        "modifier": "Memosprite_EvernightServant_TriggerNormal",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_Partner_Count_Show",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (16) || RETURN",
                          "displayLines": "16",
                          "constants": [],
                          "variables": [
                            16
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true,
                      "toRemove": [
                        "DisableAction",
                        "STAT_CTRL"
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Evernight_Passive_Endurance"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Memosprite}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Memosprite}}"
                          },
                          "modifier": "Memosprite_EvernightServant_TriggerNormal",
                          "casterAssign": "TargetSelf"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Memosprite}}"
                          },
                          "modifier": "Memosprite_EvernightServant_TriggerNormal_NoEnemy"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_Partner_Count",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": -999,
                  "maxValue": {
                    "operator": "Variables[0] (16) || RETURN",
                    "displayLines": "16",
                    "constants": [],
                    "variables": [
                      16
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Evernight_Passive_Endurance"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "modifier": "Memosprite_EvernightServant_TriggerNormal_NoEnemy"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "modifier": "Memosprite_EvernightServant_TriggerNormal"
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Evernight_Passive_Endurance"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "modifier": "Memosprite_EvernightServant_TriggerNormal_NoEnemy"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "modifier": "Memosprite_EvernightServant_TriggerNormal"
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (16) || RETURN",
                    "displayLines": "16",
                    "constants": [],
                    "variables": [
                      16
                    ]
                  },
                  "maxValue": 99999,
                  "whenEnteringRange": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true,
                      "toRemove": [
                        "DisableAction",
                        "STAT_CTRL"
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Evernight_Passive_Endurance"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Memosprite}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Memosprite}}"
                          },
                          "modifier": "Memosprite_EvernightServant_TriggerNormal",
                          "casterAssign": "TargetSelf"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Memosprite}}"
                          },
                          "modifier": "Memosprite_EvernightServant_TriggerNormal_NoEnemy"
                        }
                      ]
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true,
                      "toRemove": [
                        "DisableAction",
                        "STAT_CTRL"
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Evernight_Passive_Endurance"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Memosprite}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Memosprite}}"
                          },
                          "modifier": "Memosprite_EvernightServant_TriggerNormal",
                          "casterAssign": "TargetSelf"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Memosprite}}"
                          },
                          "modifier": "Memosprite_EvernightServant_TriggerNormal_NoEnemy"
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
          "for": "Evernight_Passive_Endurance",
          "modifierFlags": [
            "EnduranceLogicOnly"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_Passive",
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
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
                        "name": "Is Part Of",
                        "of": {
                          "name": "Join Targets",
                          "TargetList": [
                            {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            {
                              "name": "Target Name",
                              "target": "{{All Memosprites}}"
                            }
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Rouse the Flame, Lull the Light"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "_Partner_Count_Show",
                          "value": {
                            "operator": "Variables[0] (1) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                            "displayLines": "(1 + _Evernight_00_Extra_Energy)",
                            "constants": [],
                            "variables": [
                              1,
                              "_Evernight_00_Extra_Energy"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Memosprite}}"
                          },
                          "variableName": "_Partner_Count",
                          "value": {
                            "operator": "Variables[0] (1) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                            "displayLines": "(1 + _Evernight_00_Extra_Energy)",
                            "constants": [],
                            "variables": [
                              1,
                              "_Evernight_00_Extra_Energy"
                            ]
                          }
                        },
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "operator": "Variables[0] (5) || RETURN",
                            "displayLines": "5",
                            "constants": [],
                            "variables": [
                              5
                            ]
                          },
                          "isFixed": "* ERR"
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
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "function_Evernight_TryCreateServant",
                      "variables": {
                        "DV_Partner_Count": {
                          "operator": "Variables[0] (_Partner_Count) || RETURN",
                          "displayLines": "_Partner_Count",
                          "constants": [],
                          "variables": [
                            "_Partner_Count"
                          ]
                        },
                        "DV_Delay": -1,
                        "DV_HP_Ratio": 0
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -92
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_PointB2_EnterBattle",
          "execute": [
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
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_Partner_Count_Show",
                      "value": {
                        "operator": "Variables[0] (1) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                        "displayLines": "(1 + _Evernight_00_Extra_Energy)",
                        "constants": [],
                        "variables": [
                          1,
                          "_Evernight_00_Extra_Energy"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "variableName": "_Partner_Count",
                      "value": {
                        "operator": "Variables[0] (1) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                        "displayLines": "(1 + _Evernight_00_Extra_Energy)",
                        "constants": [],
                        "variables": [
                          1,
                          "_Evernight_00_Extra_Energy"
                        ]
                      }
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (70) || RETURN",
                        "displayLines": "70",
                        "constants": [],
                        "variables": [
                          70
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_Evernight_PL_Layer"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_Eidolon1_ListenDamage",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Anyone]: Any",
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
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Memosprites}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Rank01_Rat",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variableName": "_Alive_Count",
                      "livingTargets": true
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Alive_Count",
                        "compareType": "<",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Alive_Count",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Alive_Count",
                        "compareType": ">",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Alive_Count",
                          "value": 4
                        }
                      ]
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (_Alive_Count) || RETURN",
                        "displayLines": "_Alive_Count",
                        "constants": [],
                        "variables": [
                          "_Alive_Count"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_Rank01_Rat",
                              "value": {
                                "operator": "Variables[0] (1.5) || RETURN",
                                "displayLines": "1.5",
                                "constants": [],
                                "variables": [
                                  1.5
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_Rank01_Rat",
                              "value": {
                                "operator": "Variables[0] (1.3) || RETURN",
                                "displayLines": "1.3",
                                "constants": [],
                                "variables": [
                                  1.3
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_Rank01_Rat",
                              "value": {
                                "operator": "Variables[0] (1.25) || RETURN",
                                "displayLines": "1.25",
                                "constants": [],
                                "variables": [
                                  1.25
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_Rank01_Rat",
                              "value": {
                                "operator": "Variables[0] (1.2) || RETURN",
                                "displayLines": "1.2",
                                "constants": [],
                                "variables": [
                                  1.2
                                ]
                              }
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">BaseAbilityMultiplier</span>&nbsp;",
                          "value": "_Rank01_Rat"
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
            "_Evernight_PL_Layer"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_Eidolon4_Aura",
          "stackData": [],
          "latentQueue": [
            "_Evernight_PL_Layer"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[getMemosprite]]"
              },
              "modifier": "Evernight_Eidolon4_Bonus[<span class=\"descriptionNumberColor\">Wake Up, the Tomorrow is Yours</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue_1": {
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
                  ]
                },
                "MDF_PropertyValue_2": {
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_Eidolon6_Aura",
          "stackData": [],
          "latentQueue": [
            "_Evernight_PL_Layer"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "Evernight_Eidolon6_Bonus[<span class=\"descriptionNumberColor\">Like This, Always</span>]",
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
          "for": "Evernight_ViewMode_Control",
          "execute": [
            {
              "eventTrigger": "Enter View-Mode [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_CL_Is_S03_Ready",
                    "compareType": "=",
                    "value2": 1
                  }
                }
              ]
            },
            {
              "eventTrigger": "Exit View-Mode [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_CL_Is_S03_Ready",
                    "compareType": "=",
                    "value2": 1
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_Evernight_PL_Layer"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_LoseHPPreshow",
          "execute": [
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
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
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Update UI Preview",
                      "show": "Show",
                      "skillType": [
                        "Skill"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "previewType": null,
                      "previewValue": {
                        "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.1) || MUL || RETURN",
                        "displayLines": "(MDF_MaxHP * 0.1)",
                        "constants": [],
                        "variables": [
                          "MDF_MaxHP",
                          0.1
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Evernight_Evernight_Ability03_Part02": {
      "fileName": "Evernight_Evernight_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_UltraMode_Effect"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_S03"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_TryCreateServant",
          "variables": {
            "DV_Partner_Count": {
              "operator": "Variables[0] (_Partner_Count) || RETURN",
              "displayLines": "_Partner_Count",
              "constants": [],
              "variables": [
                "_Partner_Count"
              ]
            },
            "DV_Delay": -1,
            "DV_HP_Ratio": 0
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "ability": "Evernight_Ability03_Servant",
          "isTrigger": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            },
            "MDF_PropertyValue_2": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            }
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
            "modifier": "Evernight_UltraMode_Energy[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          },
          "passed": [
            {
              "name": "Define Modifier Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "Evernight_UltraMode_Energy[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]",
              "function": "Add",
              "value": {
                "operator": "Variables[0] (S03_Duration) || RETURN",
                "displayLines": "S03_Duration",
                "constants": [],
                "variables": [
                  "S03_Duration"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Evernight_UltraMode_Energy[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]",
              "counter": {
                "operator": "Variables[0] (S03_Duration) || RETURN",
                "displayLines": "S03_Duration",
                "constants": [],
                "variables": [
                  "S03_Duration"
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getMemosprite]]"
          },
          "scope": "TargetEntity",
          "variableName": "_Skill03_Stance",
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
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getMemosprite]]"
          },
          "scope": "TargetEntity",
          "variableName": "_Skill03_P1_DamagePercentage",
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
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getMemosprite]]"
          },
          "ability": "Evernight_Ability03_Servant_Damage",
          "isTrigger": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_UltraMode_Effect",
          "casterAssign": "TargetSelf"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Evernight_S03",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Evernight_Evernight_Ability03_Part02_Charge": {
      "fileName": "Evernight_Evernight_Ability03_Part02_Charge",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        }
      ],
      "references": []
    },
    "Evernight_Evernight_Ability03_Servant_Damage": {
      "fileName": "Evernight_Evernight_Ability03_Servant_Damage",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getSummoner]]"
          },
          "ability": "Evernight_Ability03_Part02_Charge",
          "isTrigger": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (_Skill03_P1_DamagePercentage) || RETURN",
              "displayLines": "_Skill03_P1_DamagePercentage",
              "constants": [],
              "variables": [
                "_Skill03_P1_DamagePercentage"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (_Skill03_Stance) || RETURN",
              "displayLines": "_Skill03_Stance",
              "constants": [],
              "variables": [
                "_Skill03_Stance"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Ice"
            },
            "Tags": null,
            "attackType": "Ultimate"
          }
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "Evernight_Evernight_Ability03_Part01": {
      "fileName": "Evernight_Evernight_Ability03_Part01",
      "childAbilityList": [
        "Evernight_Evernight_Ability03_Camera",
        "Evernight_Evernight_Ability03_EnterReady",
        "Evernight_Evernight_Ability03_Part01",
        "Evernight_Evernight_Ability03_Part02",
        "Evernight_Evernight_Ability03_Part02_Charge"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        30,
        0
      ],
      "parse": [
        {
          "name": "Define Custom Variable (VFX)",
          "variableName": "_CL_Is_S03_Ready",
          "value": 0
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Evernight_Ability03_Part02",
          "isTrigger": true
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_SizeControl_STB2"
        }
      ],
      "references": []
    },
    "Evernight_Evernight_Ability03_Servant": {
      "fileName": "Evernight_Evernight_Ability03_Servant",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_SizeControl_Perf"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_FollowControl_00"
        },
        "Deleted bullshit",
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_FollowControl_STB"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "Evernight_S03"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_FollowControl_STB"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Partner_Count",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (4) || MUL || RETURN",
              "displayLines": "(_Partner_CountThresHold * 4)",
              "constants": [
                4
              ],
              "variables": [
                "_Partner_CountThresHold"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Partner_Count",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (3) || MUL || RETURN",
              "displayLines": "(_Partner_CountThresHold * 3)",
              "constants": [
                3
              ],
              "variables": [
                "_Partner_CountThresHold"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Partner_Count",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (2) || MUL || RETURN",
              "displayLines": "(_Partner_CountThresHold * 2)",
              "constants": [
                2
              ],
              "variables": [
                "_Partner_CountThresHold"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Partner_Count",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (1) || MUL || RETURN",
              "displayLines": "(_Partner_CountThresHold * 1)",
              "constants": [
                1
              ],
              "variables": [
                "_Partner_CountThresHold"
              ]
            }
          }
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Evernight_Ability03_TriggerAnim_Man",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Evernight_Ability03_TriggerAnim_01",
          "parse": [
            {
              "name": "Use Custom Character Function",
              "functionName": "function_Evernight_Group_FollowControl_STB"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Evernight_Ability03_TriggerAnim_02",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Evernight_Ability03_TriggerAnim_03",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Evernight_Ability03_TriggerAnim_04",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Evernight_Ability03_TriggerAnim_05",
          "parse": []
        }
      ],
      "references": []
    },
    "Evernight_Evernight_Ability03_EnterReady": {
      "fileName": "Evernight_Evernight_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable (VFX)",
          "variableName": "_CL_Is_S03_Ready",
          "value": 1
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_SizeControl_STB2"
        }
      ],
      "references": []
    },
    "Evernight_Evernight_Ability21_Part02": {
      "fileName": "Evernight_Evernight_Ability21_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Consume",
          "consumeFrom": "CurrentHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (0.1) || RETURN",
            "displayLines": "0.1",
            "constants": [],
            "variables": [
              0.1
            ]
          },
          "consumeFloor": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_UltraMode_Effect"
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_Partner_Count_Show",
          "value": {
            "operator": "Variables[0] (2) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
            "displayLines": "(2 + _Evernight_00_Extra_Energy)",
            "constants": [],
            "variables": [
              2,
              "_Evernight_00_Extra_Energy"
            ]
          }
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "variableName": "_Partner_Count",
          "value": {
            "operator": "Variables[0] (2) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
            "displayLines": "(2 + _Evernight_00_Extra_Energy)",
            "constants": [],
            "variables": [
              2,
              "_Evernight_00_Extra_Energy"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_S02_Buff_Value",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Kindle the Morn, Drop the Rain"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]]"
              },
              "variableName": "_S02_Char_Count",
              "livingTargets": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Remembrance"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  }
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_S02_Char_Count",
                "compareType": ">=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_S02_Buff_Value",
                  "value": {
                    "operator": "Variables[0] (0.65) || Variables[1] (_S02_Buff_Value) || ADD || RETURN",
                    "displayLines": "(0.65 + _S02_Buff_Value)",
                    "constants": [],
                    "variables": [
                      0.65,
                      "_S02_Buff_Value"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_S02_Char_Count",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_S02_Buff_Value",
                      "value": {
                        "operator": "Variables[0] (0.5) || Variables[1] (_S02_Buff_Value) || ADD || RETURN",
                        "displayLines": "(0.5 + _S02_Buff_Value)",
                        "constants": [],
                        "variables": [
                          0.5,
                          "_S02_Buff_Value"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_S02_Char_Count",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_S02_Buff_Value",
                          "value": {
                            "operator": "Variables[0] (0.15) || Variables[1] (_S02_Buff_Value) || ADD || RETURN",
                            "displayLines": "(0.15 + _S02_Buff_Value)",
                            "constants": [],
                            "variables": [
                              0.15,
                              "_S02_Buff_Value"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_S02_Char_Count",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_S02_Buff_Value",
                              "value": {
                                "operator": "Variables[0] (0.05) || Variables[1] (_S02_Buff_Value) || ADD || RETURN",
                                "displayLines": "(0.05 + _S02_Buff_Value)",
                                "constants": [],
                                "variables": [
                                  0.05,
                                  "_S02_Buff_Value"
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
            "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_Partner_Count_Show",
              "value": {
                "operator": "Variables[0] (12) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                "displayLines": "(12 + _Evernight_00_Extra_Energy)",
                "constants": [],
                "variables": [
                  12,
                  "_Evernight_00_Extra_Energy"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "variableName": "_Partner_Count",
              "value": {
                "operator": "Variables[0] (12) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                "displayLines": "(12 + _Evernight_00_Extra_Energy)",
                "constants": [],
                "variables": [
                  12,
                  "_Evernight_00_Extra_Energy"
                ]
              }
            },
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "healPercent": {
                "operator": "Variables[0] (0.5) || RETURN",
                "displayLines": "0.5",
                "constants": [],
                "variables": [
                  0.5
                ]
              },
              "formula": "Heal from Target MaxHP"
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "valuePercent": 1,
              "ofAbilitySplit": true,
              "isFixed": "* ERR"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Evernight_Ability02_Bonus[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_Conv": {
                  "operator": "Variables[0] (0.24) || Variables[1] (S02_ExtraRatio) || ADD || RETURN",
                  "displayLines": "(0.24 + S02_ExtraRatio)",
                  "constants": [],
                  "variables": [
                    0.24,
                    "S02_ExtraRatio"
                  ]
                },
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (_S02_Buff_Value) || RETURN",
                  "displayLines": "_S02_Buff_Value",
                  "constants": [],
                  "variables": [
                    "_S02_Buff_Value"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "healPercent": {
                "operator": "Variables[0] (0.5) || RETURN",
                "displayLines": "0.5",
                "constants": [],
                "variables": [
                  0.5
                ]
              },
              "formula": "Heal from Target MaxHP"
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "valuePercent": 1,
              "ofAbilitySplit": true,
              "isFixed": "* ERR"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Evernight_Ability02_Bonus[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_Conv": {
                  "operator": "Variables[0] (0.24) || Variables[1] (S02_ExtraRatio) || ADD || RETURN",
                  "displayLines": "(0.24 + S02_ExtraRatio)",
                  "constants": [],
                  "variables": [
                    0.24,
                    "S02_ExtraRatio"
                  ]
                },
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (_S02_Buff_Value) || RETURN",
                  "displayLines": "_S02_Buff_Value",
                  "constants": [],
                  "variables": [
                    "_S02_Buff_Value"
                  ]
                }
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
            "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "modifier": "Evernight_UltraMode_Effect_Normal",
              "casterAssign": "TargetSelf"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Evernight_Evernight_Ability02_Part02": {
      "fileName": "Evernight_Evernight_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Consume",
          "consumeFrom": "CurrentHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (0.1) || RETURN",
            "displayLines": "0.1",
            "constants": [],
            "variables": [
              0.1
            ]
          },
          "consumeFloor": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_UltraMode_Effect"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_TryCreateServant",
          "variables": {
            "DV_Partner_Count": {
              "operator": "Variables[0] (_Partner_Count) || RETURN",
              "displayLines": "_Partner_Count",
              "constants": [],
              "variables": [
                "_Partner_Count"
              ]
            },
            "DV_Delay": -1,
            "DV_HP_Ratio": 0
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
            "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "ability": "Evernight_Ability02_2_Servant",
              "isTrigger": true
            }
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "ability": "Evernight_Ability02_Servant",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_SizeControl_Perf2"
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_Partner_Count_Show",
          "value": {
            "operator": "Variables[0] (2) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
            "displayLines": "(2 + _Evernight_00_Extra_Energy)",
            "constants": [],
            "variables": [
              2,
              "_Evernight_00_Extra_Energy"
            ]
          }
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "variableName": "_Partner_Count",
          "value": {
            "operator": "Variables[0] (2) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
            "displayLines": "(2 + _Evernight_00_Extra_Energy)",
            "constants": [],
            "variables": [
              2,
              "_Evernight_00_Extra_Energy"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_S02_Buff_Value",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Kindle the Morn, Drop the Rain"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]]"
              },
              "variableName": "_S02_Char_Count",
              "livingTargets": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Remembrance"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  }
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_S02_Char_Count",
                "compareType": ">=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_S02_Buff_Value",
                  "value": {
                    "operator": "Variables[0] (0.65) || Variables[1] (_S02_Buff_Value) || ADD || RETURN",
                    "displayLines": "(0.65 + _S02_Buff_Value)",
                    "constants": [],
                    "variables": [
                      0.65,
                      "_S02_Buff_Value"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_S02_Char_Count",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_S02_Buff_Value",
                      "value": {
                        "operator": "Variables[0] (0.5) || Variables[1] (_S02_Buff_Value) || ADD || RETURN",
                        "displayLines": "(0.5 + _S02_Buff_Value)",
                        "constants": [],
                        "variables": [
                          0.5,
                          "_S02_Buff_Value"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_S02_Char_Count",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_S02_Buff_Value",
                          "value": {
                            "operator": "Variables[0] (0.15) || Variables[1] (_S02_Buff_Value) || ADD || RETURN",
                            "displayLines": "(0.15 + _S02_Buff_Value)",
                            "constants": [],
                            "variables": [
                              0.15,
                              "_S02_Buff_Value"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_S02_Char_Count",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_S02_Buff_Value",
                              "value": {
                                "operator": "Variables[0] (0.05) || Variables[1] (_S02_Buff_Value) || ADD || RETURN",
                                "displayLines": "(0.05 + _S02_Buff_Value)",
                                "constants": [],
                                "variables": [
                                  0.05,
                                  "_S02_Buff_Value"
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
            "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_Partner_Count_Show",
              "value": {
                "operator": "Variables[0] (12) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                "displayLines": "(12 + _Evernight_00_Extra_Energy)",
                "constants": [],
                "variables": [
                  12,
                  "_Evernight_00_Extra_Energy"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "variableName": "_Partner_Count",
              "value": {
                "operator": "Variables[0] (12) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                "displayLines": "(12 + _Evernight_00_Extra_Energy)",
                "constants": [],
                "variables": [
                  12,
                  "_Evernight_00_Extra_Energy"
                ]
              }
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "valuePercent": 1,
              "ofAbilitySplit": true,
              "isFixed": "* ERR"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Evernight_Ability02_Bonus[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_Conv": {
                  "operator": "Variables[0] (0.24) || Variables[1] (S02_ExtraRatio) || ADD || RETURN",
                  "displayLines": "(0.24 + S02_ExtraRatio)",
                  "constants": [],
                  "variables": [
                    0.24,
                    "S02_ExtraRatio"
                  ]
                },
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (_S02_Buff_Value) || RETURN",
                  "displayLines": "_S02_Buff_Value",
                  "constants": [],
                  "variables": [
                    "_S02_Buff_Value"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "valuePercent": 1,
              "ofAbilitySplit": true,
              "isFixed": "* ERR"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Evernight_Ability02_Bonus[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_Conv": {
                  "operator": "Variables[0] (0.24) || Variables[1] (S02_ExtraRatio) || ADD || RETURN",
                  "displayLines": "(0.24 + S02_ExtraRatio)",
                  "constants": [],
                  "variables": [
                    0.24,
                    "S02_ExtraRatio"
                  ]
                },
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (_S02_Buff_Value) || RETURN",
                  "displayLines": "_S02_Buff_Value",
                  "constants": [],
                  "variables": [
                    "_S02_Buff_Value"
                  ]
                }
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
            "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "modifier": "Evernight_UltraMode_Effect_Normal",
              "casterAssign": "TargetSelf"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Evernight_Evernight_Ability21_Part01": {
      "fileName": "Evernight_Evernight_Ability21_Part01",
      "childAbilityList": [
        "Evernight_Evernight_Ability21_Part01",
        "Evernight_Evernight_Ability21_Part02"
      ],
      "skillTrigger": "Skill21",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_SizeControl_Perf2"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "ability": "Evernight_Ability02_2_Servant",
              "isTrigger": true
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Evernight_Ability21_Part02",
              "isTrigger": true
            },
            "Deleted bullshit",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Evernight_UltraMode_Effect",
              "casterAssign": "TargetSelf"
            }
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "ability": "Evernight_Ability02_Servant",
              "isTrigger": true
            },
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Evernight_Ability21_Part02",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_SizeControl_STB2"
        }
      ],
      "references": []
    },
    "Evernight_Evernight_Ability02_2_Servant": {
      "fileName": "Evernight_Evernight_Ability02_2_Servant",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_UltraMode_Effect_Normal"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_FollowControl_00"
        },
        {
          "name": "Trigger Multiple Functions",
          "variables": {},
          "functionList": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Evernight_Ability02_2_TriggerAnim_Pos"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Evernight_Ability02_2_TriggerAnim_01"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Evernight_Ability02_2_TriggerAnim_02"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Evernight_Ability02_2_TriggerAnim_03"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Evernight_Ability02_2_TriggerAnim_04"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Evernight_Ability02_2_TriggerAnim_05"
            }
          ]
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Evernight_Ability02_2_TriggerAnim_Pos",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Evernight_Ability02_2_TriggerAnim_01",
          "parse": [
            {
              "name": "Use Custom Character Function",
              "functionName": "function_Evernight_Group_FollowControl_STB"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Evernight_Ability02_2_TriggerAnim_02",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Evernight_Ability02_2_TriggerAnim_03",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Evernight_Ability02_2_TriggerAnim_04",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Evernight_Ability02_2_TriggerAnim_05",
          "parse": []
        }
      ],
      "references": []
    },
    "Evernight_Evernight_Ability02_Servant": {
      "fileName": "Evernight_Evernight_Ability02_Servant",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_FollowControl_00"
        },
        {
          "name": "Trigger Multiple Functions",
          "variables": {},
          "functionList": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Evernight_Ability02_TriggerAnim_Pos"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Evernight_Ability02_TriggerAnim_01"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Evernight_Ability02_TriggerAnim_02"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Evernight_Ability02_TriggerAnim_03"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Evernight_Ability02_TriggerAnim_04"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Evernight_Ability02_TriggerAnim_05"
            }
          ]
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Evernight_Ability02_TriggerAnim_Pos",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Evernight_Ability02_TriggerAnim_01",
          "parse": [
            {
              "name": "Use Custom Character Function",
              "functionName": "function_Evernight_Group_FollowControl_STB"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Evernight_Ability02_TriggerAnim_02",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Evernight_Ability02_TriggerAnim_03",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Evernight_Ability02_TriggerAnim_04",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Evernight_Ability02_TriggerAnim_05",
          "parse": []
        }
      ],
      "references": []
    },
    "Evernight_Evernight_Ability02_Part01": {
      "fileName": "Evernight_Evernight_Ability02_Part01",
      "childAbilityList": [
        "Evernight_Evernight_Ability02_Camera",
        "Evernight_Evernight_Ability02_Part01",
        "Evernight_Evernight_Ability02_Part02",
        "Evernight_Evernight_Ability02_2_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_SizeControl_Perf2"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Evernight_Ability02_Part02",
              "isTrigger": true
            },
            "Deleted bullshit",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Evernight_UltraMode_Effect",
              "casterAssign": "TargetSelf"
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
              "ability": "Evernight_Ability02_Part02",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_SizeControl_STB2"
        }
      ],
      "references": []
    },
    "Evernight_Evernight_Ability01_Part02": {
      "fileName": "Evernight_Evernight_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "Evernight_ServantTarget"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Evernight_ServantTarget"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
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
              "DamageType": "Ice"
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
    "Evernight_Evernight_Ability01_Part01": {
      "fileName": "Evernight_Evernight_Ability01_Part01",
      "childAbilityList": [
        "Evernight_Evernight_Ability01_Camera",
        "Evernight_Evernight_Ability01_Far_Camera",
        "Evernight_Evernight_Ability01_Part01",
        "Evernight_Evernight_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Target Count SUM",
                "target": {
                  "name": "Target Name",
                  "target": "{{Hostile Entities(AOE)}}"
                },
                "conditions": {
                  "name": "Compare: Monster Rank",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "compareType": ">=",
                  "value2": 5
                }
              },
              {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "team": "Enemy Team"
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
          "ability": "Evernight_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Evernight_Modifiers": {
      "fileName": "Evernight_Modifiers",
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
          "for": "Evernight_Weapon_Show_2",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_Weapon_Show_1",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "EnduranceLogicOnly"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character UI",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Change Character UI",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue",
            "MDF_PropertyValue_2"
          ],
          "latentQueue": [],
          "description": "This unit and their memosprite are immune to Crowd Control debuffs, and the DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Darkest Riddle",
          "statusName": "Darkest Riddle",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                ]
              },
              "modifier": "Evernight_UltraMode_Bonus",
              "aliveOnly": "True",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "Evernight_UltraMode_Debuff[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]",
              "aliveOnly": "True",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue_2) || RETURN",
                  "displayLines": "MDF_PropertyValue_2",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue_2"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_UltraMode_Debuff[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
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
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Darkest Riddle"
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_UltraMode_Energy_0[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]",
          "execute": [
            {
              "eventTrigger": "Turn Start [Anyone]",
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
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Evernight_TryRemoveUltra_Flag"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Evernight_UltraMode_Effect"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "modifier": "Evernight_UltraMode_Effect_Normal"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Evernight_UltraMode_Energy[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Evernight_UltraMode_Energy_0[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "When Evernight's turn begins, she exits the \"Darkest Riddle\" state.",
          "type": "Other",
          "statusName": "Darkest Riddle"
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_TryRemoveUltra_Flag"
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_UltraMode_Energy[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]",
          "counter": 1,
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Evernight_UltraMode_Energy_0[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Evernight_UltraMode_Energy_Cost"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Evernight_UltraMode_Energy_Cost"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Evernight_UltraMode_Energy[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]",
                        "compareType": ">",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Modifier Variable",
                          "modifierName": null,
                          "function": "Add"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Evernight_UltraMode_Energy_0[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "The memosprite Evey consumes 1 Charge after it uses \"Dream, Dissolving, as Dew.\" When Evernight's turn begins, if no Charge remains, she exits the \"Darkest Riddle\" state.",
          "type": "Other",
          "statusName": "Darkest Riddle"
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_UltraMode_Energy_Cost"
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_UltraMode_Effect",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "Evernight_UltraMode_Effect_Normal",
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_UltraMode_Effect_Normal",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_ServantTarget",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_Ability02_ChangeSkill",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill02",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                }
              ]
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
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_TryKillServant_Flag"
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_UltraMode_Bonus",
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_Ability02_Bonus_PointB3[<span class=\"descriptionNumberColor\">Kindle the Morn, Drop the Rain</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Kindle the Morn, Drop the Rain"
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_Ability02_Bonus_Buff[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_CritBase",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_Conv) || Variables[1] (MDF_CritBase) || MUL || RETURN",
                    "displayLines": "(MDF_Conv * MDF_CritBase)",
                    "constants": [],
                    "variables": [
                      "MDF_Conv",
                      "MDF_CritBase"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  },
                  "isRefresh": true
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_PropertyValue",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 9999999,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                        "displayLines": "MDF_PropertyValue",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue"
                        ]
                      },
                      "isRefresh": true
                    }
                  ]
                }
              ]
            }
          ],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Day Gently Slips"
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_Ability02_Bonus[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "S02_ExtraRatio",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_CritBase",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Conv",
                      "value": {
                        "operator": "Variables[0] (0.24) || Variables[1] (S02_ExtraRatio) || ADD || RETURN",
                        "displayLines": "(0.24 + S02_ExtraRatio)",
                        "constants": [],
                        "variables": [
                          0.24,
                          "S02_ExtraRatio"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_TMP_NEW_VAL",
                      "value": {
                        "operator": "Variables[0] (MDF_Conv) || Variables[1] (MDF_CritBase) || MUL || RETURN",
                        "displayLines": "(MDF_Conv * MDF_CritBase)",
                        "constants": [],
                        "variables": [
                          "MDF_Conv",
                          "MDF_CritBase"
                        ]
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[getMemosprite]]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Evernight_Ability02_Bonus_Buff[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]"
                          },
                          "passed": [
                            {
                              "name": "Define Modifier-Specific Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifierName": "Evernight_Ability02_Bonus_Buff[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
                              "variableName": "MDF_PropertyValue",
                              "value": {
                                "operator": "Variables[0] (_TMP_NEW_VAL) || RETURN",
                                "displayLines": "_TMP_NEW_VAL",
                                "constants": [],
                                "variables": [
                                  "_TMP_NEW_VAL"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Evernight_Ability02_Bonus_Buff[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
                              "valuePerStack": {
                                "MDF_Conv": {
                                  "operator": "Variables[0] (MDF_CritBase) || RETURN",
                                  "displayLines": "MDF_CritBase",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CritBase"
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
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_CritBase",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_TMP_NEW_VAL",
                      "value": {
                        "operator": "Variables[0] (MDF_Conv) || Variables[1] (MDF_CritBase) || MUL || RETURN",
                        "displayLines": "(MDF_Conv * MDF_CritBase)",
                        "constants": [],
                        "variables": [
                          "MDF_Conv",
                          "MDF_CritBase"
                        ]
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[getMemosprite]]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Evernight_Ability02_Bonus_Buff[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]"
                          },
                          "passed": [
                            {
                              "name": "Define Modifier-Specific Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifierName": "Evernight_Ability02_Bonus_Buff[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
                              "variableName": "MDF_PropertyValue",
                              "value": {
                                "operator": "Variables[0] (_TMP_NEW_VAL) || RETURN",
                                "displayLines": "_TMP_NEW_VAL",
                                "constants": [],
                                "variables": [
                                  "_TMP_NEW_VAL"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Evernight_Ability02_Bonus_Buff[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
                              "valuePerStack": {
                                "MDF_Conv": {
                                  "operator": "Variables[0] (MDF_CritBase) || RETURN",
                                  "displayLines": "MDF_CritBase",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CritBase"
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
              ]
            }
          ],
          "stackData": [
            "MDF_Conv",
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "_S02_Char_Count"
          ],
          "description": "While this effect persists, CRIT DMG increases for all ally memosprites.",
          "type": "Other",
          "statusName": "Day Gently Slips",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[getMemosprite]]"
              },
              "modifier": "Evernight_Ability02_Bonus_Buff[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_Conv": {
                  "operator": "Variables[0] (MDF_CritBase) || RETURN",
                  "displayLines": "MDF_CritBase",
                  "constants": [],
                  "variables": [
                    "MDF_CritBase"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[getMemosprite]]"
              },
              "modifier": "Evernight_Ability02_Bonus_PointB3[<span class=\"descriptionNumberColor\">Kindle the Morn, Drop the Rain</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Kindle the Morn, Drop the Rain"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_PropertyValue",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_Eidolon2_Crit[<span class=\"descriptionNumberColor\">Listen Up, the Slumber Speaks Soft</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Listen Up, the Slumber Speaks Soft"
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_Passive_Bonus[<span class=\"descriptionNumberColor\">With Me, This Night</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "With Me, This Night"
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_HPChange_Trigger",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Evernight_Passive_Bonus[<span class=\"descriptionNumberColor\">With Me, This Night</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "Evernight_Passive_Bonus[<span class=\"descriptionNumberColor\">With Me, This Night</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
                      ]
                    }
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_Eidolon4_Bonus[<span class=\"descriptionNumberColor\">Wake Up, the Tomorrow is Yours</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
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
                      "target": "{{Caster's Memosprite}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue_1) || Variables[1] (MDF_PropertyValue_2) || ADD || RETURN",
                        "displayLines": "(MDF_PropertyValue_1 + MDF_PropertyValue_2)",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue_1",
                          "MDF_PropertyValue_2"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue_1) || RETURN",
                        "displayLines": "MDF_PropertyValue_1",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue_1"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
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
            "MDF_PropertyValue_1",
            "MDF_PropertyValue_2"
          ],
          "latentQueue": [
            "_Evernight_PL_Layer"
          ],
          "description": "Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Wake Up, the Tomorrow is Yours"
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_Eidolon6_Bonus[<span class=\"descriptionNumberColor\">Like This, Always</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
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
            "_Evernight_PL_Layer"
          ],
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Like This, Always"
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_HPChange",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Check_isHeal",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Dealt Damage while Crowd/Mind Controlled [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Check_isCharmAttack",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Check_isCharmAttack",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Check_isAttack",
                      "value": 1
                    }
                  ]
                }
              ],
              "priorityLevel": -100
            },
            {
              "eventTrigger": "Dealt Damage (END) while Crowd/Mind Controlled [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Check_isCharmAttack",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Check_isAttack",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Check_isAttack",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Check_AttackStart",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Check_isHeal",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Check_AttackStart",
                        "compareType": "<",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Check_isAttack",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Check_AttackStart",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Check_isAttack",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Attack Type",
                        "attackTypes": [
                          "DOT",
                          "Additional DMG"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_Check_AttackStart",
                            "compareType": "<",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Check_isAttack",
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
              "eventTrigger": "Receiving Heal Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Healing",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_HealValue"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_HealValue",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Check_isHeal",
                      "value": 1
                    }
                  ]
                }
              ],
              "priorityLevel": 200
            },
            {
              "eventTrigger": "Receiving Heal End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Check_isHeal",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Check_isHeal",
                    "compareType": ">",
                    "value2": 0
                  },
                  "failed": [
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
                            "value1": "MDF_Check_isAttack",
                            "compareType": "<",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Check_AttackStart",
                              "value": 0
                            },
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "_Partner_Count_Show",
                              "value": {
                                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                                "displayLines": "(MDF_PropertyValue + _Evernight_00_Extra_Energy)",
                                "constants": [],
                                "variables": [
                                  "MDF_PropertyValue",
                                  "_Evernight_00_Extra_Energy"
                                ]
                              }
                            },
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
                                  "name": "Define Custom Variable with Added Value",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Memosprite}}"
                                  },
                                  "variableName": "_Partner_Count",
                                  "context": "TargetEntity",
                                  "value": {
                                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                                    "displayLines": "(MDF_PropertyValue + _Evernight_00_Extra_Energy)",
                                    "constants": [],
                                    "variables": [
                                      "MDF_PropertyValue",
                                      "_Evernight_00_Extra_Energy"
                                    ]
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
                              "modifier": "Evernight_HPChange_Trigger",
                              "casterAssign": "TargetSelf"
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
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Check_AttackStart",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Check_isAttack",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Check_AttackStart",
                  "value": 0
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "_Evernight_PL_Layer"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_PointB1_Crit[<span class=\"descriptionNumberColor\">Dark the Night, Still the Moon</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
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
          "description": "CRIT Rate increases <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Dark the Night, Still the Moon"
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_SummonServantPreshow",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "entityType": "Servant",
            "entityID": 11413,
            "skillType": [
              "Skill",
              "Ultimate"
            ],
            "conditions": {
              "name": "Compare: Target Count",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "compareType": "<=",
              "value2": 0,
              "livingTargets": true
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0(Set AV)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_PointB1_Bonus[<span class=\"descriptionNumberColor\">Dark the Night, Still the Moon</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Dark the Night, Still the Moon"
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_PointB1_Servant",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "CurrentHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MDF_Cost) || RETURN",
                    "displayLines": "MDF_Cost",
                    "constants": [],
                    "variables": [
                      "MDF_Cost"
                    ]
                  },
                  "consumeFloor": 1,
                  "attackType": "Unknown"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Evernight_PointB1_Bonus[<span class=\"descriptionNumberColor\">Dark the Night, Still the Moon</span>]",
                  "duration": {
                    "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                    "displayLines": "MDF_LifeTime",
                    "constants": [],
                    "variables": [
                      "MDF_LifeTime"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "Evernight_PointB1_Bonus[<span class=\"descriptionNumberColor\">Dark the Night, Still the Moon</span>]",
                  "duration": {
                    "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                    "displayLines": "MDF_LifeTime",
                    "constants": [],
                    "variables": [
                      "MDF_LifeTime"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Evernight_PointB1_Aura",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "CurrentHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MDF_Cost) || RETURN",
                    "displayLines": "MDF_Cost",
                    "constants": [],
                    "variables": [
                      "MDF_Cost"
                    ]
                  },
                  "consumeFloor": 1,
                  "attackType": "Unknown"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Evernight_PointB1_Bonus[<span class=\"descriptionNumberColor\">Dark the Night, Still the Moon</span>]",
                  "duration": {
                    "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                    "displayLines": "MDF_LifeTime",
                    "constants": [],
                    "variables": [
                      "MDF_LifeTime"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "Evernight_PointB1_Bonus[<span class=\"descriptionNumberColor\">Dark the Night, Still the Moon</span>]",
                  "duration": {
                    "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                    "displayLines": "MDF_LifeTime",
                    "constants": [],
                    "variables": [
                      "MDF_LifeTime"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue",
            "MDF_Cost",
            "MDF_LifeTime"
          ],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "modifier": "Evernight_PointB1_Servant",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                },
                "MDF_Cost": {
                  "operator": "Variables[0] (MDF_Cost) || RETURN",
                  "displayLines": "MDF_Cost",
                  "constants": [],
                  "variables": [
                    "MDF_Cost"
                  ]
                },
                "MDF_LifeTime": {
                  "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                  "displayLines": "MDF_LifeTime",
                  "constants": [],
                  "variables": [
                    "MDF_LifeTime"
                  ]
                }
              }
            }
          ]
        }
      ],
      "references": []
    },
    "Evernight_Functions": {
      "fileName": "Evernight_Functions",
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
          "functionName": "function_Evernight_Group_FollowControl_00",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "function_Evernight_Group_FollowControl_STB",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "function_Evernight_Group_FollowControl_ViewMode",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "function_Evernight_Group_SizeControl_STB",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "function_Evernight_Group_SizeControl_STB2",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "function_Evernight_Group_SizeControl_Perf2",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "function_Evernight_Group_SizeControl_Perf",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "function_Evernight_TryCreateServant",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Memosprite}}"
                },
                "compareType": "<=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Summon Memosprite",
                  "memoID": 11413,
                  "valuePerStack": {
                    "Init_Count": {
                      "operator": "Variables[0] (DV_Partner_Count) || RETURN",
                      "displayLines": "DV_Partner_Count",
                      "constants": [],
                      "variables": [
                        "DV_Partner_Count"
                      ]
                    },
                    "Init_HP_Ratio": {
                      "operator": "Variables[0] (DV_HP_Ratio) || RETURN",
                      "displayLines": "DV_HP_Ratio",
                      "constants": [],
                      "variables": [
                        "DV_HP_Ratio"
                      ]
                    },
                    "Init_Delay": {
                      "operator": "Variables[0] (DV_Delay) || RETURN",
                      "displayLines": "DV_Delay",
                      "constants": [],
                      "variables": [
                        "DV_Delay"
                      ]
                    },
                    "AbilityP01_P1_AddCount": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    },
                    "_Evernight_Extra_Energy": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    },
                    "AbilityRank_Eidolon6_P1_Ratio": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    }
                  },
                  "afterSummon": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Evernight_00_DeathRattle_Layer",
                      "value": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Dark the Night, Still the Moon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Evernight_PointB1_Crit[<span class=\"descriptionNumberColor\">Dark the Night, Still the Moon</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.35) || RETURN",
                              "displayLines": "0.35",
                              "constants": [],
                              "variables": [
                                0.35
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
                        "eidolon": 2,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Evernight_Eidolon2_Crit[<span class=\"descriptionNumberColor\">Listen Up, the Slumber Speaks Soft</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Evernight_HPChange",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        }
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_Partner_Count",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (_Partner_Count_Max) || RETURN",
                          "displayLines": "_Partner_Count_Max",
                          "constants": [],
                          "variables": [
                            "_Partner_Count_Max"
                          ]
                        }
                      },
                      "failed": [
                        {
                          "name": "Force Auto-Battle on Target",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "enable": true
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Evernight_Ability02_ChangeSkill"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
                      },
                      "passed": [
                        {
                          "name": "Change Character UI",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      ]
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
                            "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "Evernight_S03",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Evernight_UltraMode_Effect",
                          "casterAssign": "TargetSelf"
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
      "references": []
    },
    "Evey_Servant_EvernightServant_DeathRattle": {
      "fileName": "Evey_Servant_EvernightServant_DeathRattle",
      "childAbilityList": [
        "Evey_Servant_EvernightServant_DeathRattle"
      ],
      "skillTrigger": "SkillP04",
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
          "modifier": "Memosprite_EvernightServant_DeathRattle"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Memosprite_EvernightServant_DeathRattle",
          "modifierFlags": [
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "Memosprite_EvernightServant_DeathRattle_Speed[<span class=\"descriptionNumberColor\">You, Parting, Beyond Reach</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
                      ]
                    },
                    "MDF_PropertyValue_2": {
                      "operator": "Variables[0] (0.01) || RETURN",
                      "displayLines": "0.01",
                      "constants": [],
                      "variables": [
                        0.01
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Evey_Servant_EvernightServant_BattleCry": {
      "fileName": "Evey_Servant_EvernightServant_BattleCry",
      "childAbilityList": [
        "Evey_Servant_EvernightServant_BattleCry"
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
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": 0
        }
      ],
      "references": []
    },
    "Evey_Servant_EvernightServant_PassiveAbility01": {
      "fileName": "Evey_Servant_EvernightServant_PassiveAbility01",
      "childAbilityList": [
        "Evey_Servant_EvernightServant_PassiveAbility01",
        "Evey_Servant_EvernightServant_PassiveAbility01_Resummon"
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
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "enable": false
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Partner_CountThresHold",
          "value": {
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Partner_Count_Max",
          "value": {
            "operator": "Variables[0] (16) || RETURN",
            "displayLines": "16",
            "constants": [],
            "variables": [
              16
            ]
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_FollowControl_STB"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_SizeControl_STB"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_EvernightServant_Passive"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_EvernightServant_Sync"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_EvernightServant_PartnerControl"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_EvernightServant_InsertControl"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_EvernightServant_View"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_EvernightServant_PassiveBonus_Aura"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Partner_Size",
          "value": {
            "operator": "Variables[0] (Init_Count) || RETURN",
            "displayLines": "Init_Count",
            "constants": [],
            "variables": [
              "Init_Count"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Partner_Count",
          "value": {
            "operator": "Variables[0] (Init_Count) || RETURN",
            "displayLines": "Init_Count",
            "constants": [],
            "variables": [
              "Init_Count"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_EvernightServant_TryKill"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_EvernightServant_HitAnimControl"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_EvernightServant_Ability11_StancePreshow"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_EvernightServant_Ability11_LoseHPPreshow"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Memosprite_EvernightServant_PartnerControl",
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_Partner_Count_Show",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": -999,
                  "maxValue": {
                    "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (0.5) || SUB || RETURN",
                    "displayLines": "(_Partner_CountThresHold - 0.5)",
                    "constants": [
                      0.5
                    ],
                    "variables": [
                      "_Partner_CountThresHold"
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "modifier": "Evernight_S03"
                      }
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "modifier": "Evernight_S03"
                      }
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (0.5) || SUB || RETURN",
                    "displayLines": "(_Partner_CountThresHold - 0.5)",
                    "constants": [
                      0.5
                    ],
                    "variables": [
                      "_Partner_CountThresHold"
                    ]
                  },
                  "maxValue": {
                    "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (2) || MUL || Constants[1] (0.5) || SUB || RETURN",
                    "displayLines": "((_Partner_CountThresHold * 2) - 0.5)",
                    "constants": [
                      2,
                      0.5
                    ],
                    "variables": [
                      "_Partner_CountThresHold"
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "modifier": "Evernight_S03"
                      }
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "modifier": "Evernight_S03"
                      }
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (2) || MUL || Constants[1] (0.5) || SUB || RETURN",
                    "displayLines": "((_Partner_CountThresHold * 2) - 0.5)",
                    "constants": [
                      2,
                      0.5
                    ],
                    "variables": [
                      "_Partner_CountThresHold"
                    ]
                  },
                  "maxValue": {
                    "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (3) || MUL || Constants[1] (0.5) || SUB || RETURN",
                    "displayLines": "((_Partner_CountThresHold * 3) - 0.5)",
                    "constants": [
                      3,
                      0.5
                    ],
                    "variables": [
                      "_Partner_CountThresHold"
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "modifier": "Evernight_S03"
                      }
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "modifier": "Evernight_S03"
                      }
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (3) || MUL || Constants[1] (0.5) || SUB || RETURN",
                    "displayLines": "((_Partner_CountThresHold * 3) - 0.5)",
                    "constants": [
                      3,
                      0.5
                    ],
                    "variables": [
                      "_Partner_CountThresHold"
                    ]
                  },
                  "maxValue": {
                    "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (4) || MUL || Constants[1] (0.5) || SUB || RETURN",
                    "displayLines": "((_Partner_CountThresHold * 4) - 0.5)",
                    "constants": [
                      4,
                      0.5
                    ],
                    "variables": [
                      "_Partner_CountThresHold"
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "modifier": "Evernight_S03"
                      }
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "modifier": "Evernight_S03"
                      }
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (4) || MUL || Constants[1] (0.5) || SUB || RETURN",
                    "displayLines": "((_Partner_CountThresHold * 4) - 0.5)",
                    "constants": [
                      4,
                      0.5
                    ],
                    "variables": [
                      "_Partner_CountThresHold"
                    ]
                  },
                  "maxValue": 9999,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "modifier": "Evernight_S03"
                      }
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "modifier": "Evernight_S03"
                      }
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
          "for": "Memosprite_EvernightServant_InsertControl",
          "modifierFlags": [
            "EnduranceLogicOnly"
          ],
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
                      "target": "{{Caster's Summoner}}"
                    },
                    "value1": "_Partner_Count_Show",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (4) || MUL || RETURN",
                      "displayLines": "(_Partner_CountThresHold * 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "_Partner_CountThresHold"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Memosprite_EvernightServant_TriggerNormal"
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
          "for": "Memosprite_EvernightServant_Sync",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variableName": "_Partner_Count_Show",
                  "value": {
                    "operator": "Variables[0] (Init_Count) || RETURN",
                    "displayLines": "Init_Count",
                    "constants": [],
                    "variables": [
                      "Init_Count"
                    ]
                  }
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_Partner_Count_Show",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": -999,
                  "maxValue": 99999,
                  "whenEnteringRange": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "variableName": "_Partner_Count_Show",
                      "value": {
                        "operator": "Variables[0] (_Partner_Count_Show) || RETURN",
                        "displayLines": "_Partner_Count_Show",
                        "constants": [],
                        "variables": [
                          "_Partner_Count_Show"
                        ]
                      }
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "variableName": "_Partner_Count_Show",
                      "value": {
                        "operator": "Variables[0] (_Partner_Count_Show) || RETURN",
                        "displayLines": "_Partner_Count_Show",
                        "constants": [],
                        "variables": [
                          "_Partner_Count_Show"
                        ]
                      }
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
          "for": "Memosprite_EvernightServant_View",
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Is_S11_Ready",
                  "value": 0
                }
              ]
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
                        "value1": "Is_S11_Ready",
                        "compareType": "=",
                        "value2": 1
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
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "function_Evernight_Group_FollowControl_STB"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "function_Evernight_Group_SizeControl_STB"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable (VFX)",
                  "variableName": "Is_S11_Ready",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Enter View-Mode [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Evernight_Group_FollowControl_ViewMode"
                }
              ]
            },
            {
              "eventTrigger": "Exit View-Mode [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Is_S11_Ready",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "function_Evernight_Group_FollowControl_00"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "function_Evernight_Group_FollowControl_STB"
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
          "for": "Memosprite_EvernightServant_Passive",
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
                  "modifier": "Evernight_Ability02_ChangeSkill"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "Evernight_Ability02_ChangeSkill"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_EvernightServant_HitAnimControl",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Follow_Flag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Follow_Flag",
                      "value": 0
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "function_Evernight_Group_SizeControl_STB"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Follow_Flag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Follow_Flag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Follow_Flag",
                      "value": 0
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "function_Evernight_Group_SizeControl_STB"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_Partner_Size"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_EvernightServant_Ability11_StancePreshow",
          "stackData": [],
          "latentQueue": [
            "_Partner_Size"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_EvernightServant_PassiveBonus_Aura",
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}} + {{Caster's Summoner}}"
              },
              "modifier": "Memosprite_EvernightServant_PassiveBonus[<span class=\"descriptionNumberColor\">Solitude, Drifting, In Murk</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_EvernightServant_Ability11_LoseHPPreshow",
          "execute": [
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Memosprite_EvernightServant_TriggerNormal"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Update UI Preview",
                      "show": "Show",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "previewType": null,
                      "previewValue": {
                        "operator": "Variables[0] (MDF_MaxHP) || RETURN",
                        "displayLines": "MDF_MaxHP",
                        "constants": [],
                        "variables": [
                          "MDF_MaxHP"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_Partner_Size"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_EvernightServant_TryKill",
          "execute": [
            {
              "eventTrigger": "Action Completed [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "modifier": "Evernight_TryKillServant_Flag"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "modifier": "Evernight_TryKillServant_Flag"
                    },
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "variable": "_Partner_Count_Show",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "variable2": "Revive_Count"
                    },
                    {
                      "name": "Mark Entity For Immediate Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_Partner_Size"
          ]
        }
      ]
    },
    "Evey_Servant_EvernightServant_Ability12_Part02": {
      "fileName": "Evey_Servant_EvernightServant_Ability12_Part02",
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
          "modifier": "Memosprite_EvernightServant_TriggerDeathrattle"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "Evernight_UltraMode_Energy[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "Evernight_UltraMode_Energy_Cost",
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_UltraMode_Effect_Normal"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_UltraMode_Effect_Normal"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "Evernight_TryKillServant_Flag",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "Evernight_UltraMode_Energy_0[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "Evernight_TryRemoveUltra_Flag",
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_EvernightServant_TriggerNormal"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6,
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Rank06_Refund_Count",
              "value": {
                "operator": "Variables[0] (FLOOR) || Variables[1] (_Partner_Count_Show) || Variables[2] (AbilityRank_Eidolon6_P1_Ratio) || MUL || PARAM_1 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_Partner_Count_Show * AbilityRank_Eidolon6_P1_Ratio))",
                "constants": [],
                "variables": [
                  "FLOOR",
                  "_Partner_Count_Show",
                  "AbilityRank_Eidolon6_P1_Ratio"
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "S11_PointB1_Rat",
          "value": 1
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}} - {{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (0.06) || Variables[1] (_Partner_Count_Show) || MUL || RETURN",
              "displayLines": "(0.06 * _Partner_Count_Show)",
              "constants": [],
              "variables": [
                0.06,
                "_Partner_Count_Show"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Ice"
            },
            "Tags": null,
            "attackType": "Memosprite"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (_Partner_Count_Show) || Variables[1] (0.12) || MUL || RETURN",
              "displayLines": "(_Partner_Count_Show * 0.12)",
              "constants": [],
              "variables": [
                "_Partner_Count_Show",
                0.12
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
              "DamageType": "Ice"
            },
            "Tags": null,
            "attackType": "Memosprite",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_EvernightServant_TriggerDeathrattle"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Partner_Count",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] (40) || RETURN",
              "displayLines": "40",
              "constants": [],
              "variables": [
                40
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "_Evernight_00_DeathRattle_Layer",
              "value": {
                "operator": "Variables[0] (40) || RETURN",
                "displayLines": "40",
                "constants": [],
                "variables": [
                  40
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "_Evernight_00_DeathRattle_Layer",
              "value": {
                "operator": "Variables[0] (_Partner_Count_Show) || RETURN",
                "displayLines": "_Partner_Count_Show",
                "constants": [],
                "variables": [
                  "_Partner_Count_Show"
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Partner_Count",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6,
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_Partner_Count",
              "value": {
                "operator": "Variables[0] (_Rank06_Refund_Count) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                "displayLines": "(_Rank06_Refund_Count + _Evernight_00_Extra_Energy)",
                "constants": [],
                "variables": [
                  "_Rank06_Refund_Count",
                  "_Evernight_00_Extra_Energy"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "PointB1",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            }
          },
          "passed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": 1,
              "adjustmentType": "+"
            }
          ]
        },
        {
          "name": "Consume",
          "consumeFrom": "CurrentHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": 1,
          "attackType": "Unknown"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Evernight_UltraMode_Effect_Normal"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Evey_Servant_EvernightServant_Ability11_Part02": {
      "fileName": "Evey_Servant_EvernightServant_Ability11_Part02",
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
          "modifier": "Memosprite_EvernightServant_TriggerDeathrattle"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "Evernight_UltraMode_Energy[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "Evernight_UltraMode_Energy_Cost",
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_UltraMode_Effect_Normal"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "Evernight_TryKillServant_Flag",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "Evernight_UltraMode_Energy_0[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "Evernight_TryRemoveUltra_Flag",
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_EvernightServant_TriggerNormal"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6,
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Rank06_Refund_Count",
              "value": {
                "operator": "Variables[0] (FLOOR) || Variables[1] (_Partner_Count_Show) || Variables[2] (AbilityRank_Eidolon6_P1_Ratio) || MUL || PARAM_1 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_Partner_Count_Show * AbilityRank_Eidolon6_P1_Ratio))",
                "constants": [],
                "variables": [
                  "FLOOR",
                  "_Partner_Count_Show",
                  "AbilityRank_Eidolon6_P1_Ratio"
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "S11_PointB1_Rat",
          "value": 1
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}} - {{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (0.06) || Variables[1] (_Partner_Count_Show) || MUL || RETURN",
              "displayLines": "(0.06 * _Partner_Count_Show)",
              "constants": [],
              "variables": [
                0.06,
                "_Partner_Count_Show"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Ice"
            },
            "Tags": null,
            "attackType": "Memosprite"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (0.12) || Variables[1] (_Partner_Count_Show) || MUL || RETURN",
              "displayLines": "(0.12 * _Partner_Count_Show)",
              "constants": [],
              "variables": [
                0.12,
                "_Partner_Count_Show"
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
              "DamageType": "Ice"
            },
            "Tags": null,
            "attackType": "Memosprite",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_EvernightServant_TriggerDeathrattle"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Partner_Count",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] (40) || RETURN",
              "displayLines": "40",
              "constants": [],
              "variables": [
                40
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "_Evernight_00_DeathRattle_Layer",
              "value": {
                "operator": "Variables[0] (40) || RETURN",
                "displayLines": "40",
                "constants": [],
                "variables": [
                  40
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "_Evernight_00_DeathRattle_Layer",
              "value": {
                "operator": "Variables[0] (_Partner_Count_Show) || RETURN",
                "displayLines": "_Partner_Count_Show",
                "constants": [],
                "variables": [
                  "_Partner_Count_Show"
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Partner_Count",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6,
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_Partner_Count",
              "value": {
                "operator": "Variables[0] (_Rank06_Refund_Count) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                "displayLines": "(_Rank06_Refund_Count + _Evernight_00_Extra_Energy)",
                "constants": [],
                "variables": [
                  "_Rank06_Refund_Count",
                  "_Evernight_00_Extra_Energy"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "PointB1",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            }
          },
          "passed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": 1,
              "adjustmentType": "+"
            }
          ]
        },
        {
          "name": "Consume",
          "consumeFrom": "CurrentHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": 1,
          "attackType": "Unknown"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Evey_Servant_EvernightServant_Ability11_Part01": {
      "fileName": "Evey_Servant_EvernightServant_Ability11_Part01",
      "childAbilityList": [
        "Evey_Servant_EvernightServant_Ability11_Part01",
        "Evey_Servant_EvernightServant_Ability11_Part02",
        "Evey_Servant_EvernightServant_Ability11_Camera",
        "Evey_Servant_EvernightServant_Ability12_Part02",
        "Evey_Servant_EvernightServant_Ability12_Camera",
        "Evey_Servant_EvernightServant_Ability11_EnterReady"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Memosprite",
      "energy": 10,
      "toughnessList": [
        30,
        20,
        0
      ],
      "parse": [
        {
          "name": "Define Custom Variable (VFX)",
          "variableName": "Is_S11_Ready",
          "value": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_SizeControl_Perf"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_FollowControl_00"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Servant_EvernightServant_Ability12_Part02",
              "isTrigger": true
            },
            "Deleted bullshit",
            {
              "name": "Trigger Multiple Functions",
              "variables": {},
              "functionList": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_Evernight_Ability12_TriggerAnim_Tuowei"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_Evernight_Ability12_TriggerAnim_Man"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_Evernight_Ability12_TriggerAnim_01"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_Evernight_Ability12_TriggerAnim_02"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_Evernight_Ability12_TriggerAnim_03"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_Evernight_Ability12_TriggerAnim_04"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_Evernight_Ability12_TriggerAnim_05"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count SUM",
                "target": {
                  "name": "Target Name",
                  "target": "{{Hostile Entities(AOE)}}"
                },
                "conditions": {
                  "name": "Compare: Monster Rank",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "compareType": ">=",
                  "value2": 5
                }
              }
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Servant_EvernightServant_Ability11_Part02",
              "isTrigger": true
            },
            "Deleted bullshit",
            {
              "name": "Trigger Multiple Functions",
              "variables": {},
              "functionList": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_Evernight_Ability11_TriggerAnim_Man"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_Evernight_Ability11_TriggerAnim_01"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_Evernight_Ability11_TriggerAnim_02"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_Evernight_Ability11_TriggerAnim_03"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_Evernight_Ability11_TriggerAnim_04"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_Evernight_Ability11_TriggerAnim_05"
                }
              ]
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
            "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_FollowControl_STB"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_SizeControl_STB"
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Evernight_Ability11_TriggerAnim_Man",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Evernight_Ability11_TriggerAnim_01",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Evernight_Ability11_TriggerAnim_02",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Evernight_Ability11_TriggerAnim_03",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Evernight_Ability11_TriggerAnim_04",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Evernight_Ability11_TriggerAnim_05",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Evernight_Ability12_TriggerAnim_Tuowei",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Evernight_Ability12_TriggerAnim_Man",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Evernight_Ability12_TriggerAnim_01",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Evernight_Ability12_TriggerAnim_02",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Evernight_Ability12_TriggerAnim_03",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Evernight_Ability12_TriggerAnim_04",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Evernight_Ability12_TriggerAnim_05",
          "parse": []
        }
      ],
      "references": []
    },
    "Evey_Servant_EvernightServant_Ability11_EnterReady": {
      "fileName": "Evey_Servant_EvernightServant_Ability11_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable (VFX)",
          "variableName": "Is_S11_Ready",
          "value": 1
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_SizeControl_Perf"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_FollowControl_00"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_TriggerNormal_Cutin",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "UI Display Event",
              "popUpText": "With Me, This Night"
            },
            {
              "name": "Define Custom Variable (VFX)",
              "variableName": "_TriggerNormal_Cutin",
              "value": 0
            }
          ]
        }
      ],
      "references": []
    },
    "Evey_Servant_EvernightServant_Ability01_Part02": {
      "fileName": "Evey_Servant_EvernightServant_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Evernight_UltraMode_Effect_Normal"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "S01_T_PTN",
          "value": {
            "operator": "Variables[0] (_Partner_Count_Show) || RETURN",
            "displayLines": "_Partner_Count_Show",
            "constants": [],
            "variables": [
              "_Partner_Count_Show"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "S01_HitCount",
          "value": 0
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "S01_T_PTN",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (_Partner_CountThresHold) || RETURN",
              "displayLines": "_Partner_CountThresHold",
              "constants": [],
              "variables": [
                "_Partner_CountThresHold"
              ]
            }
          },
          "Event": [
            {
              "name": "Define Custom Variable",
              "variableName": "S01_T_PTN",
              "value": {
                "operator": "Variables[0] (S01_T_PTN) || Variables[1] (_Partner_CountThresHold) || SUB || RETURN",
                "displayLines": "(S01_T_PTN - _Partner_CountThresHold)",
                "constants": [],
                "variables": [
                  "S01_T_PTN",
                  "_Partner_CountThresHold"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "S01_HitCount",
              "value": {
                "operator": "Variables[0] (S01_HitCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(S01_HitCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "S01_HitCount"
                ]
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
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (0.5) || Variables[1] (S01_HitCount) || Variables[2] (0.1) || MUL || ADD || RETURN",
              "displayLines": "(0.5 + (S01_HitCount * 0.1))",
              "constants": [],
              "variables": [
                0.5,
                "S01_HitCount",
                0.1
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Ice"
            },
            "Tags": null,
            "attackType": "Memosprite",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (0.5) || Variables[1] (S01_HitCount) || Variables[2] (0.1) || MUL || ADD || RETURN",
              "displayLines": "(0.5 + (S01_HitCount * 0.1))",
              "constants": [],
              "variables": [
                0.5,
                "S01_HitCount",
                0.1
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Ice"
            },
            "Tags": null,
            "attackType": "Memosprite",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (0.5) || Variables[1] (S01_HitCount) || Variables[2] (0.1) || MUL || ADD || RETURN",
              "displayLines": "(0.5 + (S01_HitCount * 0.1))",
              "constants": [],
              "variables": [
                0.5,
                "S01_HitCount",
                0.1
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Ice"
            },
            "Tags": null,
            "attackType": "Memosprite",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (0.5) || Variables[1] (S01_HitCount) || Variables[2] (0.1) || MUL || ADD || RETURN",
              "displayLines": "(0.5 + (S01_HitCount * 0.1))",
              "constants": [],
              "variables": [
                0.5,
                "S01_HitCount",
                0.1
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Ice"
            },
            "Tags": null,
            "attackType": "Memosprite",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (0.5) || Variables[1] (S01_HitCount) || Variables[2] (0.1) || MUL || ADD || RETURN",
              "displayLines": "(0.5 + (S01_HitCount * 0.1))",
              "constants": [],
              "variables": [
                0.5,
                "S01_HitCount",
                0.1
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Ice"
            },
            "Tags": null,
            "attackType": "Memosprite",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (0.5) || Variables[1] (S01_HitCount) || Variables[2] (0.1) || MUL || ADD || RETURN",
              "displayLines": "(0.5 + (S01_HitCount * 0.1))",
              "constants": [],
              "variables": [
                0.5,
                "S01_HitCount",
                0.1
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.5,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Ice"
            },
            "Tags": null,
            "attackType": "Memosprite",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "_Partner_Count",
          "value": {
            "operator": "Variables[0] (_Partner_Count_Show) || Variables[1] (1) || ADD || Variables[2] (_Evernight_00_Extra_Energy) || ADD || RETURN",
            "displayLines": "((_Partner_Count_Show + 1) + _Evernight_00_Extra_Energy)",
            "constants": [],
            "variables": [
              "_Partner_Count_Show",
              1,
              "_Evernight_00_Extra_Energy"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "WAIT FOR",
              "condition": {
                "name": "Death Animation Completed",
                "team": "Enemy Team",
                "type": "Team Characters"
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
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Evernight_UltraMode_Effect_Normal"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Evey_Servant_EvernightServant_Ability01_Part01": {
      "fileName": "Evey_Servant_EvernightServant_Ability01_Part01",
      "childAbilityList": [
        "Evey_Servant_EvernightServant_Ability01_Part01",
        "Evey_Servant_EvernightServant_Ability01_Part02",
        "Evey_Servant_EvernightServant_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Memosprite",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_SizeControl_Perf"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_FollowControl_00"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Servant_EvernightServant_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Trigger Multiple Functions",
          "variables": {},
          "functionList": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_Evernight_Ability01_TriggerEffect"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_Evernight_Ability01_TriggerAnim_01"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_Evernight_Ability01_TriggerAnim_02"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_Evernight_Ability01_TriggerAnim_03"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_Evernight_Ability01_TriggerAnim_04"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_Evernight_Ability01_TriggerAnim_05"
            }
          ]
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Evernight_Ability01_TriggerEffect",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Evernight_Ability01_TriggerAnim_01",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Death Animation Completed",
                "team": "Enemy Team",
                "type": "Team Characters",
                "invertCondition": true
              },
              "passed": [
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
                    "name": "Battle is Over"
                  },
                  "failed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "function_Evernight_Group_FollowControl_STB"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "function_Evernight_Group_SizeControl_STB"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Evernight_Group_FollowControl_STB"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Evernight_Group_SizeControl_STB"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Evernight_Ability01_TriggerAnim_02",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Death Animation Completed",
                "team": "Enemy Team",
                "type": "Team Characters",
                "invertCondition": true
              },
              "passed": [
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
                    "name": "Battle is Over"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Evernight_Ability01_TriggerAnim_03",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Death Animation Completed",
                "team": "Enemy Team",
                "type": "Team Characters",
                "invertCondition": true
              },
              "passed": [
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
                    "name": "Battle is Over"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Evernight_Ability01_TriggerAnim_04",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Death Animation Completed",
                "team": "Enemy Team",
                "type": "Team Characters",
                "invertCondition": true
              },
              "passed": [
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
                    "name": "Battle is Over"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_Evernight_Ability01_TriggerAnim_05",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Death Animation Completed",
                "team": "Enemy Team",
                "type": "Team Characters",
                "invertCondition": true
              },
              "passed": [
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
                    "name": "Battle is Over"
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "Evey_Servant_EvernightServant_PassiveAbility01_Resummon": {
      "fileName": "Evey_Servant_EvernightServant_PassiveAbility01_Resummon",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Multiple Functions",
          "variables": {},
          "functionList": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_EvernightServant_PassiveAbility01_Resummon_Junk01TriggerAnim"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_EvernightServant_PassiveAbility01_Resummon_Junk02TriggerAnim"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_EvernightServant_PassiveAbility01_Resummon_Junk03TriggerAnim"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_EvernightServant_PassiveAbility01_Resummon_Junk04TriggerAnim"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_EvernightServant_PassiveAbility01_Resummon_TriggerAnim"
            }
          ]
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_EvernightServant_PassiveAbility01_Resummon_TriggerAnim",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_EvernightServant_PassiveAbility01_Resummon_Junk01TriggerAnim",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_EvernightServant_PassiveAbility01_Resummon_Junk02TriggerAnim",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_EvernightServant_PassiveAbility01_Resummon_Junk03TriggerAnim",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_EvernightServant_PassiveAbility01_Resummon_Junk04TriggerAnim",
          "parse": []
        }
      ],
      "references": []
    },
    "Evey_Modifiers": {
      "fileName": "Evey_Modifiers",
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
          "for": "Memosprite_EvernightServant_TriggerDeathrattle",
          "execute": [
            {
              "eventTrigger": "Got a Queued Kill [Owner]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 10,
                  "isFixed": "* ERR"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_EvernightServant_TriggerNormal",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable (VFX)",
                  "variableName": "_TriggerNormal_Cutin",
                  "value": 0
                },
                {
                  "name": "Force Auto-Battle on Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "enable": true
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Hide",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Memosprite"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Memosprite_EvernightServant_TriggerNormal_NoEnemy"
                },
                {
                  "name": "Define Custom Variable (VFX)",
                  "variableName": "_TriggerNormal_Cutin",
                  "value": 1
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
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "DisableAction"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "flagName": "DisableAction"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable (VFX)",
                      "variableName": "_TriggerNormal_Cutin",
                      "value": 0
                    },
                    {
                      "name": "Force Auto-Battle on Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "enable": true
                    },
                    {
                      "name": "Update Ability Enhance Button",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "display": "Hide",
                      "abilityName": "Basic ATK"
                    },
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "abilityName": "Skill01",
                      "skillSlot": "Memosprite"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Ability Enhance Button",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "display": "Show",
                      "abilityName": "Basic ATK"
                    },
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "abilityName": "Skill11",
                      "skillSlot": "Memosprite"
                    },
                    {
                      "name": "Force Auto-Battle on Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Current Turn's Action Phase is Over"
                      },
                      "passed": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": -1,
                          "adjustmentType": "Advance"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Modifier Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_CTRL"
                          },
                          {
                            "name": "Modifier Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "DisableAction"
                          }
                        ]
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
                      "name": "Define Custom Variable (VFX)",
                      "variableName": "_TriggerNormal_Cutin",
                      "value": 0
                    },
                    {
                      "name": "Force Auto-Battle on Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "enable": true
                    },
                    {
                      "name": "Update Ability Enhance Button",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "display": "Hide",
                      "abilityName": "Basic ATK"
                    },
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "abilityName": "Skill01",
                      "skillSlot": "Memosprite"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
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
                      "name": "Update Ability Enhance Button",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "display": "Show",
                      "abilityName": "Basic ATK"
                    },
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "abilityName": "Skill11",
                      "skillSlot": "Memosprite"
                    },
                    {
                      "name": "Force Auto-Battle on Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
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
          "for": "Memosprite_EvernightServant_TriggerNormal_NoEnemy"
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_EvernightServant_PassiveBonus[<span class=\"descriptionNumberColor\">Solitude, Drifting, In Murk</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
          "statusName": "Solitude, Drifting, In Murk"
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_EvernightServant_DeathRattle_Speed[<span class=\"descriptionNumberColor\">You, Parting, Beyond Reach</span>]",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Show",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_PropertyValue_2) || Variables[2] (_Evernight_00_DeathRattle_Layer) || MUL || ADD || RETURN",
                    "displayLines": "(MDF_PropertyValue + (MDF_PropertyValue_2 * _Evernight_00_DeathRattle_Layer))",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_PropertyValue_2",
                      "_Evernight_00_DeathRattle_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Show) || RETURN",
                    "displayLines": "MDF_Show",
                    "constants": [],
                    "variables": [
                      "MDF_Show"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue",
            "MDF_PropertyValue_2"
          ],
          "latentQueue": [],
          "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_Show</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "You, Parting, Beyond Reach"
        }
      ],
      "references": []
    }
  }
}