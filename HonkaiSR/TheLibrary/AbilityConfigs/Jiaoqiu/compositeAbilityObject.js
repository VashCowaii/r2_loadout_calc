const compositeAbilityObject = {
  "fullCharacterName": "Jiaoqiu",
  "trimCharacterName": "Jiaoqiu",
  "abilityList": [
    "Jiaoqiu_Jiaoqiu_TechniqueInLevel",
    "Jiaoqiu_Jiaoqiu_PassiveAbility01",
    "Jiaoqiu_Jiaoqiu_Ability03_Part02",
    "Jiaoqiu_Jiaoqiu_Ability03_Part01",
    "Jiaoqiu_Jiaoqiu_Ability03_EnterReady",
    "Jiaoqiu_Jiaoqiu_Ability02_Part02",
    "Jiaoqiu_Jiaoqiu_Ability02_Part01",
    "Jiaoqiu_Jiaoqiu_Ability01_Part02",
    "Jiaoqiu_Jiaoqiu_Ability01_Part01",
    "Jiaoqiu_Modifiers"
  ],
  "abilityObject": {
    "Jiaoqiu_Jiaoqiu_TechniqueInLevel": {
      "fileName": "Jiaoqiu_Jiaoqiu_TechniqueInLevel",
      "childAbilityList": [
        "Jiaoqiu_Jiaoqiu_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"174080663\">StageAbility_Maze_Jiaoqiu_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__174080663\">StageAbility_Maze_Jiaoqiu_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Technique Modifies Current Wave"
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Technique"
                      }
                    },
                    "Trigger: Attack End",
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (_MaxLayer) || RETURN",
                        "displayLines": "_MaxLayer",
                        "constants": [],
                        "variables": [
                          "_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "DOT_Ratio": {
                          "operator": "Variables[0] (SkillP01_DotRatio) || RETURN",
                          "displayLines": "SkillP01_DotRatio",
                          "constants": [],
                          "variables": [
                            "SkillP01_DotRatio"
                          ]
                        },
                        "AbilityRank_Eidolon2_P1_Ratio": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        },
                        "AbilityRank_Eidolon6_P3_DownRatio": {
                          "operator": "Variables[0] (0.03) || RETURN",
                          "displayLines": "0.03",
                          "constants": [],
                          "variables": [
                            0.03
                          ]
                        },
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        },
                        "MDF_PropertyValue_2": {
                          "operator": "Variables[0] (0.05) || RETURN",
                          "displayLines": "0.05",
                          "constants": [],
                          "variables": [
                            0.05
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ],
              "priorityLevel": -60
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Jiaoqiu_Jiaoqiu_PassiveAbility01": {
      "fileName": "Jiaoqiu_Jiaoqiu_PassiveAbility01",
      "childAbilityList": [
        "Jiaoqiu_Jiaoqiu_PassiveAbility01"
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
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1097387552\">Jiaoqiu_PassiveAbility</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__674970009\">Jiaoqiu_Tree01_recoverSP</a>",
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
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (15) || RETURN",
                        "displayLines": "15",
                        "constants": [],
                        "variables": [
                          15
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1097387552\">Jiaoqiu_PassiveAbility</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Action Phase Start [Owner][?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1304078651\">Jiaoqiu_Aura</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "LifeTime",
                      "variableName": "EnergyBarCount",
                      "modifierName": "<a class=\"gModGreen\" id=\"-1304078651\">Jiaoqiu_Aura</a>",
                      "multiplier": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EnergyBarCount",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EnergyBarCount",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (EnergyBarCount) || RETURN",
                        "displayLines": "EnergyBarCount",
                        "constants": [],
                        "variables": [
                          "EnergyBarCount"
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SkillP01_DotRatio",
                  "value": {
                    "operator": "Variables[0] (1.8) || RETURN",
                    "displayLines": "1.8",
                    "constants": [],
                    "variables": [
                      1.8
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-666615841\">Jiaoqiu_PassiveAbility_Debuff</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Pyre Cleanse"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"674970009\">Jiaoqiu_Tree01_recoverSP</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Hearth Kindle"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-122400477\">Jiaoqiu_Tree02_StatusProbabilityShow</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1908309004\">Jiaoqiu_Eidolon6_ListenFlavor</a>"
                    }
                  ]
                },
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
                      "name": "Define Custom Variable",
                      "variableName": "SkillRank_Rank04_Flag",
                      "value": 1
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
                      "name": "Define Custom Variable",
                      "variableName": "_MaxLayer",
                      "value": {
                        "operator": "Variables[0] (9) || RETURN",
                        "displayLines": "9",
                        "constants": [],
                        "variables": [
                          9
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_MaxLayer",
                      "value": {
                        "operator": "Variables[0] (5) || RETURN",
                        "displayLines": "5",
                        "constants": [],
                        "variables": [
                          5
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-666615841\">Jiaoqiu_PassiveAbility_Debuff</a>"
                    }
                  ]
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
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"453883342\">Jiaoqiu_Eidolon1_ListenDamage</a>[<span class=\"descriptionNumberColor\">Pentapathic Transference</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              }
            }
          ]
        }
      ]
    },
    "Jiaoqiu_Jiaoqiu_Ability03_Part02": {
      "fileName": "Jiaoqiu_Jiaoqiu_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Layer_Total",
          "value": 0
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "valueType": "Layer",
              "variableName": "_Temp_Val",
              "modifierName": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Layer_Total",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (_Temp_Val) || RETURN",
                  "displayLines": "_Temp_Val",
                  "constants": [],
                  "variables": [
                    "_Temp_Val"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Layer_Total",
                  "value": {
                    "operator": "Variables[0] (_Temp_Val) || RETURN",
                    "displayLines": "_Temp_Val",
                    "constants": [],
                    "variables": [
                      "_Temp_Val"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Layer_Total",
            "compareType": ">=",
            "value2": 0.5
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Temp_Val",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "valueType": "Layer",
                      "variableName": "_Temp_Val",
                      "modifierName": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                      "multiplier": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Layer_Total",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (_Temp_Val) || RETURN",
                      "displayLines": "_Temp_Val",
                      "constants": [],
                      "variables": [
                        "_Temp_Val"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (_MaxLayer) || RETURN",
                        "displayLines": "_MaxLayer",
                        "constants": [],
                        "variables": [
                          "_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "DOT_Ratio": {
                          "operator": "Variables[0] (SkillP01_DotRatio) || RETURN",
                          "displayLines": "SkillP01_DotRatio",
                          "constants": [],
                          "variables": [
                            "SkillP01_DotRatio"
                          ]
                        },
                        "AbilityRank_Eidolon2_P1_Ratio": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        },
                        "AbilityRank_Eidolon6_P3_DownRatio": {
                          "operator": "Variables[0] (0.03) || RETURN",
                          "displayLines": "0.03",
                          "constants": [],
                          "variables": [
                            0.03
                          ]
                        },
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        },
                        "MDF_PropertyValue_2": {
                          "operator": "Variables[0] (0.05) || RETURN",
                          "displayLines": "0.05",
                          "constants": [],
                          "variables": [
                            0.05
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_Layer_Total) || Variables[1] (_Temp_Val) || SUB || RETURN",
                        "displayLines": "(_Layer_Total - _Temp_Val)",
                        "constants": [],
                        "variables": [
                          "_Layer_Total",
                          "_Temp_Val"
                        ]
                      }
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
          "modifier": "<a class=\"gModGreen\" id=\"-1304078651\">Jiaoqiu_Aura</a>",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "valuePerStack": {
            "Ability03_P1_DamagePercentage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "Ability03_P2_Ratio": 0,
            "Ability03_P3_Value": 0,
            "Ability03_P3_Ratio": 0,
            "Ability03_P4_Duration": 0
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Rank01_Stack_Layer",
                  "value": {
                    "operator": "Constants[0] (1) || Variables[0] (1) || ADD || RETURN",
                    "displayLines": "(1 + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      1
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Rank01_Stack_Layer",
                  "value": {
                    "operator": "Constants[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [
                      1
                    ],
                    "variables": []
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
              "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "baseChance": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (_MaxLayer) || RETURN",
                "displayLines": "_MaxLayer",
                "constants": [],
                "variables": [
                  "_MaxLayer"
                ]
              },
              "valuePerStack": {
                "DOT_Ratio": {
                  "operator": "Variables[0] (SkillP01_DotRatio) || RETURN",
                  "displayLines": "SkillP01_DotRatio",
                  "constants": [],
                  "variables": [
                    "SkillP01_DotRatio"
                  ]
                },
                "AbilityRank_Eidolon2_P1_Ratio": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                },
                "AbilityRank_Eidolon6_P3_DownRatio": {
                  "operator": "Variables[0] (0.03) || RETURN",
                  "displayLines": "0.03",
                  "constants": [],
                  "variables": [
                    0.03
                  ]
                },
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
                  ]
                },
                "MDF_PropertyValue_2": {
                  "operator": "Variables[0] (0.05) || RETURN",
                  "displayLines": "0.05",
                  "constants": [],
                  "variables": [
                    0.05
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (Rank01_Stack_Layer) || RETURN",
                "displayLines": "Rank01_Stack_Layer",
                "constants": [],
                "variables": [
                  "Rank01_Stack_Layer"
                ]
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
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
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "maximum": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Jiaoqiu_Jiaoqiu_Ability03_Part01": {
      "fileName": "Jiaoqiu_Jiaoqiu_Ability03_Part01",
      "childAbilityList": [
        "Jiaoqiu_Jiaoqiu_Ability03_Camera",
        "Jiaoqiu_Jiaoqiu_Ability03_EnterReady",
        "Jiaoqiu_Jiaoqiu_Ability03_Part01",
        "Jiaoqiu_Jiaoqiu_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        20,
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
          "ability": "Jiaoqiu_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Jiaoqiu_Jiaoqiu_Ability03_EnterReady": {
      "fileName": "Jiaoqiu_Jiaoqiu_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Jiaoqiu_Jiaoqiu_Ability02_Part02": {
      "fileName": "Jiaoqiu_Jiaoqiu_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank01_Stack_Layer",
              "value": {
                "operator": "Constants[0] (1) || Variables[0] (1) || ADD || RETURN",
                "displayLines": "(1 + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  1
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank01_Stack_Layer",
              "value": {
                "operator": "Constants[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [
                  1
                ],
                "variables": []
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] (_MaxLayer) || RETURN",
            "displayLines": "_MaxLayer",
            "constants": [],
            "variables": [
              "_MaxLayer"
            ]
          },
          "valuePerStack": {
            "DOT_Ratio": {
              "operator": "Variables[0] (SkillP01_DotRatio) || RETURN",
              "displayLines": "SkillP01_DotRatio",
              "constants": [],
              "variables": [
                "SkillP01_DotRatio"
              ]
            },
            "AbilityRank_Eidolon2_P1_Ratio": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "AbilityRank_Eidolon6_P3_DownRatio": {
              "operator": "Variables[0] (0.03) || RETURN",
              "displayLines": "0.03",
              "constants": [],
              "variables": [
                0.03
              ]
            },
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.15) || RETURN",
              "displayLines": "0.15",
              "constants": [],
              "variables": [
                0.15
              ]
            },
            "MDF_PropertyValue_2": {
              "operator": "Variables[0] (0.05) || RETURN",
              "displayLines": "0.05",
              "constants": [],
              "variables": [
                0.05
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (Rank01_Stack_Layer) || RETURN",
            "displayLines": "Rank01_Stack_Layer",
            "constants": [],
            "variables": [
              "Rank01_Stack_Layer"
            ]
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] (_MaxLayer) || RETURN",
            "displayLines": "_MaxLayer",
            "constants": [],
            "variables": [
              "_MaxLayer"
            ]
          },
          "valuePerStack": {
            "DOT_Ratio": {
              "operator": "Variables[0] (SkillP01_DotRatio) || RETURN",
              "displayLines": "SkillP01_DotRatio",
              "constants": [],
              "variables": [
                "SkillP01_DotRatio"
              ]
            },
            "AbilityRank_Eidolon2_P1_Ratio": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "AbilityRank_Eidolon6_P3_DownRatio": {
              "operator": "Variables[0] (0.03) || RETURN",
              "displayLines": "0.03",
              "constants": [],
              "variables": [
                0.03
              ]
            },
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.15) || RETURN",
              "displayLines": "0.15",
              "constants": [],
              "variables": [
                0.15
              ]
            },
            "MDF_PropertyValue_2": {
              "operator": "Variables[0] (0.05) || RETURN",
              "displayLines": "0.05",
              "constants": [],
              "variables": [
                0.05
              ]
            }
          },
          "addStacksPerTrigger": 1
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Jiaoqiu_Jiaoqiu_Ability02_Part01": {
      "fileName": "Jiaoqiu_Jiaoqiu_Ability02_Part01",
      "childAbilityList": [
        "Jiaoqiu_Jiaoqiu_Ability02_Camera",
        "Jiaoqiu_Jiaoqiu_Ability02_Part01",
        "Jiaoqiu_Jiaoqiu_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
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
          "ability": "Jiaoqiu_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Jiaoqiu_Jiaoqiu_Ability01_Part02": {
      "fileName": "Jiaoqiu_Jiaoqiu_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank01_Stack_Layer",
              "value": {
                "operator": "Constants[0] (1) || Variables[0] (1) || ADD || RETURN",
                "displayLines": "(1 + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  1
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank01_Stack_Layer",
              "value": {
                "operator": "Constants[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [
                  1
                ],
                "variables": []
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] (_MaxLayer) || RETURN",
            "displayLines": "_MaxLayer",
            "constants": [],
            "variables": [
              "_MaxLayer"
            ]
          },
          "valuePerStack": {
            "DOT_Ratio": {
              "operator": "Variables[0] (SkillP01_DotRatio) || RETURN",
              "displayLines": "SkillP01_DotRatio",
              "constants": [],
              "variables": [
                "SkillP01_DotRatio"
              ]
            },
            "AbilityRank_Eidolon2_P1_Ratio": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "AbilityRank_Eidolon6_P3_DownRatio": {
              "operator": "Variables[0] (0.03) || RETURN",
              "displayLines": "0.03",
              "constants": [],
              "variables": [
                0.03
              ]
            },
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.15) || RETURN",
              "displayLines": "0.15",
              "constants": [],
              "variables": [
                0.15
              ]
            },
            "MDF_PropertyValue_2": {
              "operator": "Variables[0] (0.05) || RETURN",
              "displayLines": "0.05",
              "constants": [],
              "variables": [
                0.05
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (Rank01_Stack_Layer) || RETURN",
            "displayLines": "Rank01_Stack_Layer",
            "constants": [],
            "variables": [
              "Rank01_Stack_Layer"
            ]
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Jiaoqiu_Jiaoqiu_Ability01_Part01": {
      "fileName": "Jiaoqiu_Jiaoqiu_Ability01_Part01",
      "childAbilityList": [
        "Jiaoqiu_Jiaoqiu_Ability01_Camera",
        "Jiaoqiu_Jiaoqiu_Ability01_Part01",
        "Jiaoqiu_Jiaoqiu_Ability01_Part02"
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
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Jiaoqiu_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Jiaoqiu_Modifiers": {
      "fileName": "Jiaoqiu_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1036174530\">Jiaoqiu_AbilityEidolon6_ResistDown</a>[<span class=\"descriptionNumberColor\">Nonamorphic Pyrobind</span>]",
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
                    "operator": "Constants[0] (0) || Variables[0] (ResistDownRatio) || SUB || RETURN",
                    "displayLines": "(0 - ResistDownRatio)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "ResistDownRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Decreases All-Type RES by <span class=\"descriptionNumberColor\">ResistDownRatio</span>.",
          "type": "Debuff",
          "statusName": "Nonamorphic Pyrobind",
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-524635455\">Jiaoqiu_Eidolon4_AttackDown</a>[<span class=\"descriptionNumberColor\">Leisure In, Luster Out</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttackDown"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
          "description": "ATK decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "ATK Reduction",
          "statusName": "Leisure In, Luster Out",
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__679986078\">Jiaoqiu_AbilityEidolon6_Flag</a>",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1908309004\">Jiaoqiu_Eidolon6_ListenFlavor</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]"
                          },
                          {
                            "name": "Is Part Of Team",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "team": "Enemy Team"
                          },
                          {
                            "name": "NOT",
                            "condition": {
                              "name": "Is Part Of Team",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target 2}}"
                              },
                              "team": "Enemy Team"
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1069991214\">Jiaoqiu_Eidolon6_Sub</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__1069991214\">Jiaoqiu_Eidolon6_Sub</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "valueType": "Layer",
                      "variableName": "MDF_Layer",
                      "modifierName": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All(with Unselectable)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"679986078\">Jiaoqiu_AbilityEidolon6_Flag</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"679986078\">Jiaoqiu_AbilityEidolon6_Flag</a>"
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 10,
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Modifier Values",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "valueType": "Layer",
                              "variableName": "_TempLayer",
                              "modifierName": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                              "multiplier": 1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "_Layer_Min",
                                "compareType": ">",
                                "value2": {
                                  "operator": "Variables[0] (_TempLayer) || RETURN",
                                  "displayLines": "_TempLayer",
                                  "constants": [],
                                  "variables": [
                                    "_TempLayer"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "_Layer_Min",
                                  "value": {
                                    "operator": "Variables[0] (_TempLayer) || RETURN",
                                    "displayLines": "_TempLayer",
                                    "constants": [],
                                    "variables": [
                                      "_TempLayer"
                                    ]
                                  }
                                },
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Enemy Team All(with Unselectable)}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"679986078\">Jiaoqiu_AbilityEidolon6_Flag</a>"
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"679986078\">Jiaoqiu_AbilityEidolon6_Flag</a>"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"679986078\">Jiaoqiu_AbilityEidolon6_Flag</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          },
                          "stackLimit": {
                            "operator": "Variables[0] (_MaxLayer) || RETURN",
                            "displayLines": "_MaxLayer",
                            "constants": [],
                            "variables": [
                              "_MaxLayer"
                            ]
                          },
                          "valuePerStack": {
                            "DOT_Ratio": {
                              "operator": "Variables[0] (SkillP01_DotRatio) || RETURN",
                              "displayLines": "SkillP01_DotRatio",
                              "constants": [],
                              "variables": [
                                "SkillP01_DotRatio"
                              ]
                            },
                            "AbilityRank_Eidolon2_P1_Ratio": {
                              "operator": "Variables[0] (3) || RETURN",
                              "displayLines": "3",
                              "constants": [],
                              "variables": [
                                3
                              ]
                            },
                            "AbilityRank_Eidolon6_P3_DownRatio": {
                              "operator": "Variables[0] (0.03) || RETURN",
                              "displayLines": "0.03",
                              "constants": [],
                              "variables": [
                                0.03
                              ]
                            },
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.15) || RETURN",
                              "displayLines": "0.15",
                              "constants": [],
                              "variables": [
                                0.15
                              ]
                            },
                            "MDF_PropertyValue_2": {
                              "operator": "Variables[0] (0.05) || RETURN",
                              "displayLines": "0.05",
                              "constants": [],
                              "variables": [
                                0.05
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (MDF_Layer) || RETURN",
                            "displayLines": "MDF_Layer",
                            "constants": [],
                            "variables": [
                              "MDF_Layer"
                            ]
                          }
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All(with Unselectable)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"679986078\">Jiaoqiu_AbilityEidolon6_Flag</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Layer_Min",
                          "value": 99
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
          "for": "<a class=\"gModGreen\" id=\"mod__453883342\">Jiaoqiu_Eidolon1_ListenDamage</a>[<span class=\"descriptionNumberColor\">Pentapathic Transference</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                    "justAddedOrActive": true
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.4"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Increases DMG dealt to enemies afflicted with Ashen Roast by <span class=\"descriptionNumberColor\">#SkillRank_Rank01_P1_ExtraRatio</span>.",
          "type": "Buff",
          "statusName": "Pentapathic Transference"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1304078651\">Jiaoqiu_Aura</a>",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SkillRank_Rank04_Flag",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "priorState": "Normal",
                  "bar#": 3
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Max_Count_Left",
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
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Seared Scent"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_Layer_Total",
                            "compareType": ">",
                            "value2": 0
                          },
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_Layer_Total",
                              "value": {
                                "operator": "Variables[0] (1) || RETURN",
                                "displayLines": "1",
                                "constants": [],
                                "variables": [
                                  1
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                          },
                          "searchRandom": true,
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Modifier Values",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "valueType": "Layer",
                              "variableName": "_Temp_Val",
                              "modifierName": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                              "multiplier": 1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "_Layer_Total",
                                "compareType": "<=",
                                "value2": {
                                  "operator": "Variables[0] (_Temp_Val) || RETURN",
                                  "displayLines": "_Temp_Val",
                                  "constants": [],
                                  "variables": [
                                    "_Temp_Val"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "_Layer_Total",
                                  "value": {
                                    "operator": "Variables[0] (_Temp_Val) || RETURN",
                                    "displayLines": "_Temp_Val",
                                    "constants": [],
                                    "variables": [
                                      "_Temp_Val"
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          },
                          "stackLimit": {
                            "operator": "Variables[0] (_MaxLayer) || RETURN",
                            "displayLines": "_MaxLayer",
                            "constants": [],
                            "variables": [
                              "_MaxLayer"
                            ]
                          },
                          "valuePerStack": {
                            "DOT_Ratio": {
                              "operator": "Variables[0] (SkillP01_DotRatio) || RETURN",
                              "displayLines": "SkillP01_DotRatio",
                              "constants": [],
                              "variables": [
                                "SkillP01_DotRatio"
                              ]
                            },
                            "AbilityRank_Eidolon2_P1_Ratio": {
                              "operator": "Variables[0] (3) || RETURN",
                              "displayLines": "3",
                              "constants": [],
                              "variables": [
                                3
                              ]
                            },
                            "AbilityRank_Eidolon6_P3_DownRatio": {
                              "operator": "Variables[0] (0.03) || RETURN",
                              "displayLines": "0.03",
                              "constants": [],
                              "variables": [
                                0.03
                              ]
                            },
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.15) || RETURN",
                              "displayLines": "0.15",
                              "constants": [],
                              "variables": [
                                0.15
                              ]
                            },
                            "MDF_PropertyValue_2": {
                              "operator": "Variables[0] (0.05) || RETURN",
                              "displayLines": "0.05",
                              "constants": [],
                              "variables": [
                                0.05
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (_Layer_Total) || RETURN",
                            "displayLines": "_Layer_Total",
                            "constants": [],
                            "variables": [
                              "_Layer_Total"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "priorState": "Normal",
                  "bar#": 3
                }
              ]
            }
          ],
          "stackData": [
            "Skill03_P1_DamagePercentage",
            "Skill03_P2_Ratio",
            "Skill03_P3_Value",
            "Skill03_P3_Ratio",
            "Skill03_P4_Duration"
          ],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1053970623\">Jiaoqiu_Ultimate_FriendForShow</a>",
              "haloStatus": true
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"8266626\">Jiaoqiu_Aura_DebuffForShow</a>",
              "haloStatus": true
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1256261973\">Jiaoqiu_Debuff_Ultra</a>[<span class=\"descriptionNumberColor\">Pyrograph Arcanum</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
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
              "modifier": "<a class=\"gModGreen\" id=\"-524635455\">Jiaoqiu_Eidolon4_AttackDown</a>[<span class=\"descriptionNumberColor\">Leisure In, Luster Out</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1102373100\">Jiaoqiu_Tree02_AttackUp</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (SkillTree_PointB2_StatusProbabilityValue) || RETURN",
                    "displayLines": "SkillTree_PointB2_StatusProbabilityValue",
                    "constants": [],
                    "variables": [
                      "SkillTree_PointB2_StatusProbabilityValue"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1053970623\">Jiaoqiu_Ultimate_FriendForShow</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Skill03_P4_Duration",
            "Skill03_P3_Ratio",
            "Skill03_P3_Value",
            "Skill03_P2_Ratio",
            "Skill03_P1_DamagePercentage"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-666615841\">Jiaoqiu_PassiveAbility_Debuff</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "stackData": [],
          "latentQueue": [
            "SkillRank_Rank04_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__8266626\">Jiaoqiu_Aura_DebuffForShow</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [],
          "latentQueue": [
            "Skill03_P4_Duration",
            "Skill03_P3_Ratio",
            "Skill03_P3_Value",
            "Skill03_P2_Ratio",
            "Skill03_P1_DamagePercentage"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "KeepOnDeathrattle",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (DOT_Ratio) || RETURN",
                      "displayLines": "DOT_Ratio",
                      "constants": [],
                      "variables": [
                        "DOT_Ratio"
                      ]
                    },
                    "DamageExtra": {
                      "operator": "Variables[0] (Modifier_Burn_DamagePercentage_Defence) || RETURN",
                      "displayLines": "Modifier_Burn_DamagePercentage_Defence",
                      "constants": [],
                      "variables": [
                        "Modifier_Burn_DamagePercentage_Defence"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (Modifier_Burn_DamageValue) || RETURN",
                      "displayLines": "Modifier_Burn_DamageValue",
                      "constants": [],
                      "variables": [
                        "Modifier_Burn_DamageValue"
                      ]
                    },
                    "dmgFormulaExtra": "DEF Scaling",
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Flags to Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagName": [
                    "STAT_DOT_Burn"
                  ],
                  "modifierName": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                  "casterFilter": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || Constants[0] (1) || SUB || Variables[2] (MDF_PropertyValue_2) || MUL || ADD || RETURN",
                    "displayLines": "(MDF_PropertyValue + ((MDF_Layer - 1) * MDF_PropertyValue_2))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer",
                      "MDF_PropertyValue_2"
                    ]
                  }
                },
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
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Snapshot Target's Source Owner}}"
                    },
                    "value1": "_Layer_Total",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_Layer) || RETURN",
                      "displayLines": "MDF_Layer",
                      "constants": [],
                      "variables": [
                        "MDF_Layer"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Snapshot Target's Source Owner}}"
                      },
                      "variableName": "_Layer_Total",
                      "value": {
                        "operator": "Variables[0] (MDF_Layer) || RETURN",
                        "displayLines": "MDF_Layer",
                        "constants": [],
                        "variables": [
                          "MDF_Layer"
                        ]
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
                      "target": "{{Snapshot Target's Source Owner}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DOT_Ratio",
                      "value": {
                        "operator": "Variables[0] (DOT_Ratio) || Variables[1] (SkillRank_Rank02_P1_Ratio) || ADD || RETURN",
                        "displayLines": "(DOT_Ratio + SkillRank_Rank02_P1_Ratio)",
                        "constants": [],
                        "variables": [
                          "DOT_Ratio",
                          "SkillRank_Rank02_P1_Ratio"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Snapshot Target's Source Owner}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1036174530\">Jiaoqiu_AbilityEidolon6_ResistDown</a>[<span class=\"descriptionNumberColor\">Nonamorphic Pyrobind</span>]",
                      "valuePerStack": {
                        "ResistDownRatio": {
                          "operator": "Variables[0] (MDF_Layer) || Variables[1] (SkillRank_Rank06_P3_DownRatio) || MUL || RETURN",
                          "displayLines": "(MDF_Layer * SkillRank_Rank06_P3_DownRatio)",
                          "constants": [],
                          "variables": [
                            "MDF_Layer",
                            "SkillRank_Rank06_P3_DownRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (DOT_Ratio) || MUL || RETURN",
                      "displayLines": "(DOT_TriggerRatio * DOT_Ratio)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "DOT_Ratio"
                      ]
                    },
                    "DamageExtra": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamagePercentage_Defence) || MUL || RETURN",
                      "displayLines": "(DOT_TriggerRatio * Modifier_Burn_DamagePercentage_Defence)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Burn_DamagePercentage_Defence"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamageValue) || MUL || RETURN",
                      "displayLines": "(DOT_TriggerRatio * Modifier_Burn_DamageValue)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Modifier_Burn_DamageValue"
                      ]
                    },
                    "dmgFormulaExtra": "DEF Scaling",
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "DOT_Ratio",
            "SkillRank_Rank02_P1_Ratio",
            "SkillRank_Rank06_P3_DownRatio",
            "MDF_PropertyValue",
            "MDF_PropertyValue_2"
          ],
          "latentQueue": [
            "Skill03_P4_Duration",
            "Skill03_P3_Ratio",
            "Skill03_P3_Value",
            "Skill03_P2_Ratio",
            "Skill03_P1_DamagePercentage",
            "SkillRank_Rank04_Flag"
          ],
          "description": "Increases DMG received by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. This unit can be considered as Burned. While Ashen Roast is active, takes Fire DMG at the start of each turn.",
          "type": "Debuff",
          "effectName": "Ashen Roast",
          "statusName": "Ashen Roast"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1256261973\">Jiaoqiu_Debuff_Ultra</a>[<span class=\"descriptionNumberColor\">Pyrograph Arcanum</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_TurnCD",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "DV_TurnCD",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_Max_Count_Left",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (0.6) || RETURN",
                        "displayLines": "0.6",
                        "constants": [],
                        "variables": [
                          0.6
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (_MaxLayer) || RETURN",
                        "displayLines": "_MaxLayer",
                        "constants": [],
                        "variables": [
                          "_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "DOT_Ratio": {
                          "operator": "Variables[0] (SkillP01_DotRatio) || RETURN",
                          "displayLines": "SkillP01_DotRatio",
                          "constants": [],
                          "variables": [
                            "SkillP01_DotRatio"
                          ]
                        },
                        "AbilityRank_Eidolon2_P1_Ratio": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        },
                        "AbilityRank_Eidolon6_P3_DownRatio": {
                          "operator": "Variables[0] (0.03) || RETURN",
                          "displayLines": "0.03",
                          "constants": [],
                          "variables": [
                            0.03
                          ]
                        },
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        },
                        "MDF_PropertyValue_2": {
                          "operator": "Variables[0] (0.05) || RETURN",
                          "displayLines": "0.05",
                          "constants": [],
                          "variables": [
                            0.05
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1,
                      "success": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DV_TurnCD",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Max_Count_Left",
                          "value": {
                            "operator": "Variables[0] (_Max_Count_Left) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(_Max_Count_Left - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_Max_Count_Left"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "DV_TurnCD",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_Max_Count_Left",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (0.6) || RETURN",
                        "displayLines": "0.6",
                        "constants": [],
                        "variables": [
                          0.6
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (_MaxLayer) || RETURN",
                        "displayLines": "_MaxLayer",
                        "constants": [],
                        "variables": [
                          "_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "DOT_Ratio": {
                          "operator": "Variables[0] (SkillP01_DotRatio) || RETURN",
                          "displayLines": "SkillP01_DotRatio",
                          "constants": [],
                          "variables": [
                            "SkillP01_DotRatio"
                          ]
                        },
                        "AbilityRank_Eidolon2_P1_Ratio": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        },
                        "AbilityRank_Eidolon6_P3_DownRatio": {
                          "operator": "Variables[0] (0.03) || RETURN",
                          "displayLines": "0.03",
                          "constants": [],
                          "variables": [
                            0.03
                          ]
                        },
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        },
                        "MDF_PropertyValue_2": {
                          "operator": "Variables[0] (0.05) || RETURN",
                          "displayLines": "0.05",
                          "constants": [],
                          "variables": [
                            0.05
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1,
                      "success": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DV_TurnCD",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Max_Count_Left",
                          "value": {
                            "operator": "Variables[0] (_Max_Count_Left) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(_Max_Count_Left - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_Max_Count_Left"
                            ]
                          }
                        }
                      ]
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
            "Skill03_P4_Duration",
            "Skill03_P3_Ratio",
            "Skill03_P3_Value",
            "Skill03_P2_Ratio",
            "Skill03_P1_DamagePercentage"
          ],
          "description": "Enemy targets in the Zone take <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> increased Ultimate DMG, with a <span class=\"descriptionNumberColor\">#Skill03_P2_Chance</span> base chance of being inflicted with 1 stack of Ashen Roast when taking action. While the Zone exists, this effect can trigger up to <span class=\"descriptionNumberColor\">#Skill03_P5_Value</span> time(s). And it can only trigger once per enemy turn. This effect can still trigger for <span class=\"descriptionNumberColor\">_Max_Count_Left</span> more time(s).",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Pyrograph Arcanum",
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"-1304078651\">Jiaoqiu_Aura</a>"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__476489800\">Jiaoqiu_Passive_TargetMark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-122400477\">Jiaoqiu_Tree02_StatusProbabilityShow</a>",
          "stackType": "ReplaceByCaster",
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateSUM</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "whenEnteringRange": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"525838576\">Jiaoqiu_Tree02_Sub</a>"
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"525838576\">Jiaoqiu_Tree02_Sub</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__525838576\">Jiaoqiu_Tree02_Sub</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "SkillTree_PointB2_StatusProbabilityValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SkillTree_PointB2_StatusProbabilityValue",
                  "value": {
                    "operator": "Variables[0] (WHOLE) || Variables[1] (SkillTree_PointB2_StatusProbabilityValue) || Variables[2] (0.8) || SUB || Variables[3] (0.15) || DIV || PARAM_1 || FUNCTION || Variables[4] (0.6) || MUL || RETURN",
                    "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(((SkillTree_PointB2_StatusProbabilityValue - 0.8) / 0.15)) * 0.6)",
                    "constants": [],
                    "variables": [
                      "WHOLE",
                      "SkillTree_PointB2_StatusProbabilityValue",
                      0.8,
                      0.15,
                      0.6
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SkillTree_PointB2_StatusProbabilityValue",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SkillTree_PointB2_StatusProbabilityValue",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1102373100\">Jiaoqiu_Tree02_AttackUp</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SkillTree_PointB2_StatusProbabilityValue",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (2.4) || RETURN",
                          "displayLines": "2.4",
                          "constants": [],
                          "variables": [
                            2.4
                          ]
                        },
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillTree_PointB2_StatusProbabilityValue",
                          "value": {
                            "operator": "Variables[0] (2.4) || RETURN",
                            "displayLines": "2.4",
                            "constants": [],
                            "variables": [
                              2.4
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
                      "modifier": "<a class=\"gModGreen\" id=\"1102373100\">Jiaoqiu_Tree02_AttackUp</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}