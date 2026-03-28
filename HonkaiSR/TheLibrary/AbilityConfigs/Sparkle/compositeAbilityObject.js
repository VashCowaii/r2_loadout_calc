const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Sparkle",
  "trimCharacterName": "Sparkle",
  "abilityList": [
    "Sparkle_Advanced_Sparkle_Trace02",
    "Sparkle_Advanced_Sparkle_TechniqueInLevel",
    "Sparkle_Advanced_Sparkle_PassiveAbility_1",
    "Sparkle_Advanced_Sparkle_Eidolon6_BP",
    "Sparkle_Advanced_Sparkle_Ability03_Part02",
    "Sparkle_Advanced_Sparkle_Ability03_Part01",
    "Sparkle_Advanced_Sparkle_Ability03_EnterReady",
    "Sparkle_Advanced_Sparkle_Ability02_Self_Part02",
    "Sparkle_Advanced_Sparkle_Ability02_Others_Part02",
    "Sparkle_Advanced_Sparkle_Ability02_Part01",
    "Sparkle_Advanced_Sparkle_Ability01_Part02",
    "Sparkle_Advanced_Sparkle_Ability01_Part01",
    "Sparkle_Modifiers"
  ],
  "abilityObject": {
    "Sparkle_Advanced_Sparkle_Trace02": {
      "fileName": "Sparkle_Advanced_Sparkle_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Sparkle_Advanced_Sparkle_TechniqueInLevel": {
      "fileName": "Sparkle_Advanced_Sparkle_TechniqueInLevel",
      "childAbilityList": [
        "Sparkle_Advanced_Sparkle_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"-762225535\">Advanced_Sparkle_Maze_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-762225535\">Advanced_Sparkle_Maze_Modifier</a>",
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
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "adjustmentType": "+"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (20) || RETURN",
                        "displayLines": "20",
                        "constants": [],
                        "variables": [
                          20
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
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Sparkle_Advanced_Sparkle_PassiveAbility_1": {
      "fileName": "Sparkle_Advanced_Sparkle_PassiveAbility_1",
      "childAbilityList": [
        "Sparkle_Advanced_Sparkle_PassiveAbility_1",
        "Sparkle_Advanced_Sparkle_Eidolon6_BP"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2031508716\">Advanced_Sparkle_PassiveAbility_Listen</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-489784205\">Advanced_Sparkle_AbilityPreshow</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_PassiveMaxLayer",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2031508716\">Advanced_Sparkle_PassiveAbility_Listen</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Change Skill Point Max",
                      "function": "Add",
                      "value": {
                        "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(2 + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          2
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Change Skill Point Max",
                      "function": "Add",
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
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Skill Point Max",
                  "function": "Add",
                  "value": {
                    "operator": "Variables[0] (2) || INVERT || RETURN",
                    "displayLines": "-2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn Start [Anyone]",
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
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
                      },
                      {
                        "name": "Trace Activated",
                        "conditionList": "Artificial Flower"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_BPCount",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_BPCountAll",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_BPCountAll",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        }
                      },
                      {
                        "name": "Trace Activated",
                        "conditionList": "Artificial Flower"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1010036084\">Advanced_Sparkle_PointB2_FreeAbility</a>[<span class=\"descriptionNumberColor\">Artificial Flower</span>]"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_BPCount",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_BPCountAll",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Nocturne"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Memosprite"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1118089721\">Advanced_Sparkle_Tree03</a>[<span class=\"descriptionNumberColor\">Nocturne</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.45) || RETURN",
                          "displayLines": "0.45",
                          "constants": [],
                          "variables": [
                            0.45
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Skill Point Changes",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_BPCount",
                  "value": "ParamValue"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_BPCount",
                  "value": {
                    "operator": "Variables[0] (MDF_BPCount) || INVERT || RETURN",
                    "displayLines": "-MDF_BPCount",
                    "constants": [],
                    "variables": [
                      "MDF_BPCount"
                    ]
                  }
                },
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
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Artificial Flower"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_BPCountAll",
                          "value": {
                            "operator": "Variables[0] (MDF_BPCountAll) || Variables[1] (MDF_BPCount) || ADD || RETURN",
                            "displayLines": "(MDF_BPCountAll + MDF_BPCount)",
                            "constants": [],
                            "variables": [
                              "MDF_BPCountAll",
                              "MDF_BPCount"
                            ]
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
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]"
                          },
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "type": "Character"
                          },
                          {
                            "name": "Trace Activated",
                            "conditionList": "Almanac"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          },
                          "isFixed": "* ERR"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1755645655\">Advanced_Sparkle_PassiveAbility_Halo</a>[<span class=\"descriptionNumberColor\">Figment</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (MDF_PassiveMaxLayer) || RETURN",
                        "displayLines": "MDF_PassiveMaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_PassiveMaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (0.04) || RETURN",
                          "displayLines": "0.04",
                          "constants": [],
                          "variables": [
                            0.04
                          ]
                        },
                        "MDF_PropertyValue3": {
                          "operator": "Variables[0] (0.06) || RETURN",
                          "displayLines": "0.06",
                          "constants": [],
                          "variables": [
                            0.06
                          ]
                        },
                        "MDF_DefenceAddedRatio2": {
                          "operator": "Variables[0] (0.1) || RETURN",
                          "displayLines": "0.1",
                          "constants": [],
                          "variables": [
                            0.1
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_BPCount) || RETURN",
                        "displayLines": "MDF_BPCount",
                        "constants": [],
                        "variables": [
                          "MDF_BPCount"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Anyone]"
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
                        "name": "Eidolon Activated",
                        "eidolon": 1
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1178065515\">Advanced_Sparkle_SpeedUP</a>[<span class=\"descriptionNumberColor\">Suspension of Disbelief</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "referenceModifier": "<a class=\"gModGreen\" id=\"1020254741\">MReference_SpeedRatioUp</a>",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Nocturne"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1118089721\">Advanced_Sparkle_Tree03</a>[<span class=\"descriptionNumberColor\">Nocturne</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.45) || RETURN",
                          "displayLines": "0.45",
                          "constants": [],
                          "variables": [
                            0.45
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-489784205\">Advanced_Sparkle_AbilityPreshow</a>",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player's Aim Target List}}"
            },
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "Is Part Of",
              "of": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "mustBeAlive2": true,
              "invertCondition": true
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": -0.5
            }
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Sparkle_Advanced_Sparkle_Eidolon6_BP": {
      "fileName": "Sparkle_Advanced_Sparkle_Eidolon6_BP",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Current Action Holder Is",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MDF_Sparkle_CritDmgValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_CriticalDamageBase_change",
          "value": {
            "operator": "Variables[0] (MDF_Sparkle_CritDmgValue) || RETURN",
            "displayLines": "MDF_Sparkle_CritDmgValue",
            "constants": [],
            "variables": [
              "MDF_Sparkle_CritDmgValue"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_CriticalDamageBase_change",
          "value": {
            "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (0.24) || MUL || RETURN",
            "displayLines": "(MDF_CriticalDamageBase_change * 0.24)",
            "constants": [],
            "variables": [
              "MDF_CriticalDamageBase_change",
              0.24
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValueConvert": {
              "operator": "Variables[0] (MDF_CriticalDamageBase_change) || RETURN",
              "displayLines": "MDF_CriticalDamageBase_change",
              "constants": [],
              "variables": [
                "MDF_CriticalDamageBase_change"
              ]
            },
            "MDF_PropertyValueBase": {
              "operator": "Variables[0] (0.45) || RETURN",
              "displayLines": "0.45",
              "constants": [],
              "variables": [
                0.45
              ]
            },
            "MDF_AllDamageTypePenetrate": {
              "operator": "Variables[0] (0.1) || RETURN",
              "displayLines": "0.1",
              "constants": [],
              "variables": [
                0.1
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of",
            "of": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "mustBeAlive2": true,
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "advanceType": "Advance",
              "multiAdd": "-0.5"
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Sparkle_Advanced_Sparkle_Ability03_Part02": {
      "fileName": "Sparkle_Advanced_Sparkle_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Skill Points",
          "variableName": "MDF_PassiveLayer01"
        },
        {
          "name": "Define Custom Variable with Skill Points",
          "variableName": "MDF_PassiveLayerDirty"
        },
        {
          "name": "Define Custom Variable with Skill Point Max",
          "variableName": "TeamBpMax"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_BPGap",
          "value": {
            "operator": "Variables[0] (TeamBpMax) || Variables[1] (MDF_PassiveLayer01) || SUB || Variables[2] (MDF_PassiveLayerDirty) || SUB || RETURN",
            "displayLines": "((TeamBpMax - MDF_PassiveLayer01) - MDF_PassiveLayerDirty)",
            "constants": [],
            "variables": [
              "TeamBpMax",
              "MDF_PassiveLayer01",
              "MDF_PassiveLayerDirty"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Eidolon Activated",
                "eidolon": 4
              }
            ]
          },
          "passed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": {
                "operator": "Variables[0] (6) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(6 + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  6
                ]
              },
              "adjustmentType": "+"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "BPAdd",
              "value": {
                "operator": "Variables[0] (6) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(6 + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  6
                ]
              }
            },
            {
              "name": "Define Custom Variable with Skill Points",
              "variableName": "MDF_PassiveLayer02"
            }
          ],
          "failed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": {
                "operator": "Variables[0] (6) || RETURN",
                "displayLines": "6",
                "constants": [],
                "variables": [
                  6
                ]
              },
              "adjustmentType": "+"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "BPAdd",
              "value": {
                "operator": "Variables[0] (6) || RETURN",
                "displayLines": "6",
                "constants": [],
                "variables": [
                  6
                ]
              }
            },
            {
              "name": "Define Custom Variable with Skill Points",
              "variableName": "MDF_PassiveLayer02"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BPAdd",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] (MDF_BPGap) || RETURN",
              "displayLines": "MDF_BPGap",
              "constants": [],
              "variables": [
                "MDF_BPGap"
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
              "modifier": "<a class=\"gModGreen\" id=\"1887140599\">Advanced_Sparkle_Ability03ExtraBP</a>[<span class=\"descriptionNumberColor\">The Hero with a Thousand Faces</span>]",
              "stackLimit": {
                "operator": "Variables[0] (10) || RETURN",
                "displayLines": "10",
                "constants": [],
                "variables": [
                  10
                ]
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (BPAdd) || Variables[1] (MDF_BPGap) || SUB || RETURN",
                "displayLines": "(BPAdd - MDF_BPGap)",
                "constants": [],
                "variables": [
                  "BPAdd",
                  "MDF_BPGap"
                ]
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1966292851\">Advanced_Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]",
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
              "operator": "Variables[0] (0.06) || RETURN",
              "displayLines": "0.06",
              "constants": [],
              "variables": [
                0.06
              ]
            },
            "MDF_PropertyValue2": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MDF_Sparkle_CritDmgValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "NDF_Sparkle_Rank06_CritDmg",
              "value": {
                "operator": "Variables[0] (MDF_Sparkle_CritDmgValue) || Variables[1] (0.3) || MUL || RETURN",
                "displayLines": "(MDF_Sparkle_CritDmgValue * 0.3)",
                "constants": [],
                "variables": [
                  "MDF_Sparkle_CritDmgValue",
                  0.3
                ]
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValueConvert": {
                      "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (NDF_Sparkle_Rank06_CritDmg) || ADD || RETURN",
                      "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)",
                      "constants": [],
                      "variables": [
                        "MDF_CriticalDamageBase_change",
                        "NDF_Sparkle_Rank06_CritDmg"
                      ]
                    },
                    "MDF_PropertyValueBase": {
                      "operator": "Variables[0] (0.45) || RETURN",
                      "displayLines": "0.45",
                      "constants": [],
                      "variables": [
                        0.45
                      ]
                    },
                    "MDF_AllDamageTypePenetrate": {
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
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"980417237\">Advanced_Sparkle_Ability02_CritDmgAddedRatio02</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
                          "invertCondition": true
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"980417237\">Advanced_Sparkle_Ability02_CritDmgAddedRatio02</a>",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValueConvert2": {
                      "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (NDF_Sparkle_Rank06_CritDmg) || ADD || RETURN",
                      "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)",
                      "constants": [],
                      "variables": [
                        "MDF_CriticalDamageBase_change",
                        "NDF_Sparkle_Rank06_CritDmg"
                      ]
                    },
                    "MDF_PropertyValueBase2": {
                      "operator": "Variables[0] (0.45) || RETURN",
                      "displayLines": "0.45",
                      "constants": [],
                      "variables": [
                        0.45
                      ]
                    },
                    "MDF_AllDamageTypePenetrate": {
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
          ]
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
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      }
    },
    "Sparkle_Advanced_Sparkle_Ability03_Part01": {
      "fileName": "Sparkle_Advanced_Sparkle_Ability03_Part01",
      "childAbilityList": [
        "Sparkle_Sparkle_Ability03_Camera",
        "Sparkle_Advanced_Sparkle_Ability03_EnterReady",
        "Sparkle_Advanced_Sparkle_Ability03_Part01",
        "Sparkle_Advanced_Sparkle_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
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
          "ability": "Advanced_Sparkle_Ability03_Part02"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      }
    },
    "Sparkle_Advanced_Sparkle_Ability03_EnterReady": {
      "fileName": "Sparkle_Advanced_Sparkle_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Sparkle_Advanced_Sparkle_Ability02_Self_Part02": {
      "fileName": "Sparkle_Advanced_Sparkle_Ability02_Self_Part02",
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1178065515\">Advanced_Sparkle_SpeedUP</a>[<span class=\"descriptionNumberColor\">Suspension of Disbelief</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "referenceModifier": "<a class=\"gModGreen\" id=\"1020254741\">MReference_SpeedRatioUp</a>",
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
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MDF_Sparkle_CritDmgValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_CriticalDamageBase_change",
          "value": {
            "operator": "Variables[0] (MDF_Sparkle_CritDmgValue) || RETURN",
            "displayLines": "MDF_Sparkle_CritDmgValue",
            "constants": [],
            "variables": [
              "MDF_Sparkle_CritDmgValue"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_CriticalDamageBase_change",
          "value": {
            "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (0.24) || MUL || RETURN",
            "displayLines": "(MDF_CriticalDamageBase_change * 0.24)",
            "constants": [],
            "variables": [
              "MDF_CriticalDamageBase_change",
              0.24
            ]
          }
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
              "variableName": "NDF_Sparkle_Rank06_CritDmg",
              "value": {
                "operator": "Variables[0] (MDF_Sparkle_CritDmgValue) || Variables[1] (0.3) || MUL || RETURN",
                "displayLines": "(MDF_Sparkle_CritDmgValue * 0.3)",
                "constants": [],
                "variables": [
                  "MDF_Sparkle_CritDmgValue",
                  0.3
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValueConvert": {
                  "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (NDF_Sparkle_Rank06_CritDmg) || ADD || RETURN",
                  "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)",
                  "constants": [],
                  "variables": [
                    "MDF_CriticalDamageBase_change",
                    "NDF_Sparkle_Rank06_CritDmg"
                  ]
                },
                "MDF_PropertyValueBase": {
                  "operator": "Variables[0] (0.45) || RETURN",
                  "displayLines": "0.45",
                  "constants": [],
                  "variables": [
                    0.45
                  ]
                },
                "MDF_AllDamageTypePenetrate": {
                  "operator": "Variables[0] (0.1) || RETURN",
                  "displayLines": "0.1",
                  "constants": [],
                  "variables": [
                    0.1
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "OR",
                      "conditionList": [
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1966292851\">Advanced_Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]"
                        }
                      ]
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValueConvert": {
                  "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (NDF_Sparkle_Rank06_CritDmg) || ADD || RETURN",
                  "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)",
                  "constants": [],
                  "variables": [
                    "MDF_CriticalDamageBase_change",
                    "NDF_Sparkle_Rank06_CritDmg"
                  ]
                },
                "MDF_PropertyValueBase": {
                  "operator": "Variables[0] (0.45) || RETURN",
                  "displayLines": "0.45",
                  "constants": [],
                  "variables": [
                    0.45
                  ]
                },
                "MDF_AllDamageTypePenetrate": {
                  "operator": "Variables[0] (0.1) || RETURN",
                  "displayLines": "0.1",
                  "constants": [],
                  "variables": [
                    0.1
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValueConvert": {
                  "operator": "Variables[0] (MDF_CriticalDamageBase_change) || RETURN",
                  "displayLines": "MDF_CriticalDamageBase_change",
                  "constants": [],
                  "variables": [
                    "MDF_CriticalDamageBase_change"
                  ]
                },
                "MDF_PropertyValueBase": {
                  "operator": "Variables[0] (0.45) || RETURN",
                  "displayLines": "0.45",
                  "constants": [],
                  "variables": [
                    0.45
                  ]
                },
                "MDF_AllDamageTypePenetrate": {
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
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Sparkle_Advanced_Sparkle_Ability02_Others_Part02": {
      "fileName": "Sparkle_Advanced_Sparkle_Ability02_Others_Part02",
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1178065515\">Advanced_Sparkle_SpeedUP</a>[<span class=\"descriptionNumberColor\">Suspension of Disbelief</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "referenceModifier": "<a class=\"gModGreen\" id=\"1020254741\">MReference_SpeedRatioUp</a>",
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
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MDF_Sparkle_CritDmgValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_CriticalDamageBase_change",
          "value": {
            "operator": "Variables[0] (MDF_Sparkle_CritDmgValue) || RETURN",
            "displayLines": "MDF_Sparkle_CritDmgValue",
            "constants": [],
            "variables": [
              "MDF_Sparkle_CritDmgValue"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_CriticalDamageBase_change",
          "value": {
            "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (0.24) || MUL || RETURN",
            "displayLines": "(MDF_CriticalDamageBase_change * 0.24)",
            "constants": [],
            "variables": [
              "MDF_CriticalDamageBase_change",
              0.24
            ]
          }
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
              "variableName": "NDF_Sparkle_Rank06_CritDmg",
              "value": {
                "operator": "Variables[0] (MDF_Sparkle_CritDmgValue) || Variables[1] (0.3) || MUL || RETURN",
                "displayLines": "(MDF_Sparkle_CritDmgValue * 0.3)",
                "constants": [],
                "variables": [
                  "MDF_Sparkle_CritDmgValue",
                  0.3
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "OR",
                      "conditionList": [
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1966292851\">Advanced_Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]"
                        },
                        {
                          "name": "Is Part Of",
                          "of": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "target": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "mustBeAlive2": true
                        }
                      ]
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValueConvert": {
                  "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (NDF_Sparkle_Rank06_CritDmg) || ADD || RETURN",
                  "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)",
                  "constants": [],
                  "variables": [
                    "MDF_CriticalDamageBase_change",
                    "NDF_Sparkle_Rank06_CritDmg"
                  ]
                },
                "MDF_PropertyValueBase": {
                  "operator": "Variables[0] (0.45) || RETURN",
                  "displayLines": "0.45",
                  "constants": [],
                  "variables": [
                    0.45
                  ]
                },
                "MDF_AllDamageTypePenetrate": {
                  "operator": "Variables[0] (0.1) || RETURN",
                  "displayLines": "0.1",
                  "constants": [],
                  "variables": [
                    0.1
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValueConvert": {
                  "operator": "Variables[0] (MDF_CriticalDamageBase_change) || RETURN",
                  "displayLines": "MDF_CriticalDamageBase_change",
                  "constants": [],
                  "variables": [
                    "MDF_CriticalDamageBase_change"
                  ]
                },
                "MDF_PropertyValueBase": {
                  "operator": "Variables[0] (0.45) || RETURN",
                  "displayLines": "0.45",
                  "constants": [],
                  "variables": [
                    0.45
                  ]
                },
                "MDF_AllDamageTypePenetrate": {
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
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Advance",
          "multiAdd": "-0.5"
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
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Sparkle_Advanced_Sparkle_Ability02_Part01": {
      "fileName": "Sparkle_Advanced_Sparkle_Ability02_Part01",
      "childAbilityList": [
        "Sparkle_Advanced_Sparkle_Ability02_Part01",
        "Sparkle_Sparkle_Ability02_Self_Camera",
        "Sparkle_Advanced_Sparkle_Ability02_Self_Part02",
        "Sparkle_Sparkle_Ability02_Others_Camera",
        "Sparkle_Advanced_Sparkle_Ability02_Others_Part02"
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
          "name": "IF",
          "conditions": {
            "name": "Current Action Holder Is",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Advanced_Sparkle_Ability02_Self_Part02",
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
              "ability": "Advanced_Sparkle_Ability02_Others_Part02",
              "isTrigger": true
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Sparkle_Advanced_Sparkle_Ability01_Part02": {
      "fileName": "Sparkle_Advanced_Sparkle_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Almanac"
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (10) || RETURN",
                "displayLines": "10",
                "constants": [],
                "variables": [
                  10
                ]
              },
              "isFixed": "* ERR"
            }
          ]
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
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Sparkle_Advanced_Sparkle_Ability01_Part01": {
      "fileName": "Sparkle_Advanced_Sparkle_Ability01_Part01",
      "childAbilityList": [
        "Sparkle_Sparkle_Ability01_Camera",
        "Sparkle_Advanced_Sparkle_Ability01_Part01",
        "Sparkle_Advanced_Sparkle_Ability01_Part02"
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
          "ability": "Advanced_Sparkle_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Sparkle_Modifiers": {
      "fileName": "Sparkle_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1118089721\">Advanced_Sparkle_Tree03</a>[<span class=\"descriptionNumberColor\">Nocturne</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue3",
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue3</span>.",
          "type": "Buff",
          "effectName": "Nocturne",
          "statusName": "Nocturne"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-922966375\">Advanced_Sparkle_PassiveAbility_Real_AllDamageAddedRatio</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
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
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1966292851\">Advanced_Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]"
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
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
                      "variableName": "MDF_PropertyValue4",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue2) || Variables[1] (MDF_PropertyValue3) || ADD || Variables[2] (MDF_Count) || MUL || RETURN",
                        "displayLines": "((MDF_PropertyValue2 + MDF_PropertyValue3) * MDF_Count)",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue2",
                          "MDF_PropertyValue3",
                          "MDF_Count"
                        ]
                      }
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue4"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue4",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue2) || Variables[1] (MDF_Count) || MUL || RETURN",
                        "displayLines": "(MDF_PropertyValue2 * MDF_Count)",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue2",
                          "MDF_Count"
                        ]
                      }
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue4"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__582121474\">Advanced_Sparkle_Eidolon6_Mark</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 10,
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"582121474\">Advanced_Sparkle_Eidolon6_Mark</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1471334562\">Advanced_Sparkle_PassiveAbility_AllDamageAddedRatio02</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-922966375\">Advanced_Sparkle_PassiveAbility_Real_AllDamageAddedRatio</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"94548241\">Advanced_Sparkle_PassiveAbility_Real_DefenceDownRatio</a>"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Count",
                  "modifierName": "<a class=\"gModGreen\" id=\"1755645655\">Advanced_Sparkle_PassiveAbility_Halo</a>[<span class=\"descriptionNumberColor\">Figment</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Count",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_PassiveMaxLayer) || RETURN",
                      "displayLines": "MDF_PassiveMaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_PassiveMaxLayer"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_PassiveMaxLayer) || RETURN",
                        "displayLines": "MDF_PassiveMaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_PassiveMaxLayer"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue2) || Variables[1] (MDF_Count) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue2 * MDF_Count)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2",
                      "MDF_Count"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-922966375\">Advanced_Sparkle_PassiveAbility_Real_AllDamageAddedRatio</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue2": {
                      "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                      "displayLines": "MDF_PropertyValue2",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue2"
                      ]
                    },
                    "MDF_PropertyValue3": {
                      "operator": "Variables[0] (MDF_PropertyValue3) || RETURN",
                      "displayLines": "MDF_PropertyValue3",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue3"
                      ]
                    },
                    "MDF_Count": {
                      "operator": "Variables[0] (MDF_Count) || RETURN",
                      "displayLines": "MDF_Count",
                      "constants": [],
                      "variables": [
                        "MDF_Count"
                      ]
                    },
                    "MDF_DefenceAddedRatio2": {
                      "operator": "Variables[0] (MDF_DefenceAddedRatio2) || RETURN",
                      "displayLines": "MDF_DefenceAddedRatio2",
                      "constants": [],
                      "variables": [
                        "MDF_DefenceAddedRatio2"
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
                      "name": "Update Modifier Description",
                      "popUpText": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and DEF decreases by <span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio2</span>."
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DefenceAddedRatio2",
                      "value": {
                        "operator": "Variables[0] (MDF_DefenceAddedRatio2) || Variables[1] (MDF_Count) || MUL || RETURN",
                        "displayLines": "(MDF_DefenceAddedRatio2 * MDF_Count)",
                        "constants": [],
                        "variables": [
                          "MDF_DefenceAddedRatio2",
                          "MDF_Count"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"94548241\">Advanced_Sparkle_PassiveAbility_Real_DefenceDownRatio</a>",
                      "referenceModifier": "<a class=\"gModGreen\" id=\"779501689\">MReference_DefenceRatioDown</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_DefenceAddedRatio2) || RETURN",
                          "displayLines": "MDF_DefenceAddedRatio2",
                          "constants": [],
                          "variables": [
                            "MDF_DefenceAddedRatio2"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]"
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]"
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]"
            }
          ],
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1755645655\">Advanced_Sparkle_PassiveAbility_Halo</a>[<span class=\"descriptionNumberColor\">Figment</span>]",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "MDF_PropertyValue2",
            "MDF_PropertyValue3",
            "MDF_DefenceAddedRatio2"
          ],
          "latentQueue": [],
          "description": "The DMG taken by all enemies increases.",
          "type": "Buff",
          "statusName": "Figment",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1471334562\">Advanced_Sparkle_PassiveAbility_AllDamageAddedRatio02</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
              "aliveOnly": "True",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue2": {
                  "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                  "displayLines": "MDF_PropertyValue2",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue2"
                  ]
                },
                "MDF_PropertyValue3": {
                  "operator": "Variables[0] (MDF_PropertyValue3) || RETURN",
                  "displayLines": "MDF_PropertyValue3",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue3"
                  ]
                },
                "MDF_DefenceAddedRatio2": {
                  "operator": "Variables[0] (MDF_DefenceAddedRatio2) || RETURN",
                  "displayLines": "MDF_DefenceAddedRatio2",
                  "constants": [],
                  "variables": [
                    "MDF_DefenceAddedRatio2"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__208852691\">Advanced_Sparkle_Eidolon6_CritDmgAddedRatio01</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValueConvert) || RETURN",
                    "displayLines": "MDF_PropertyValueConvert",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValueConvert"
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
                    "operator": "Variables[0] (MDF_PropertyValueConvert) || RETURN",
                    "displayLines": "MDF_PropertyValueConvert",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValueConvert"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__980417237\">Advanced_Sparkle_Ability02_CritDmgAddedRatio02</a>",
          "stackType": "Replace",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue2",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValueConvert2) || Variables[1] (MDF_PropertyValueBase2) || ADD || RETURN",
                    "displayLines": "(MDF_PropertyValueConvert2 + MDF_PropertyValueBase2)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValueConvert2",
                      "MDF_PropertyValueBase2"
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
                    "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                    "displayLines": "MDF_PropertyValue2",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValueConvert2",
            "MDF_PropertyValueBase2",
            "MDF_AllDamageTypePenetrate"
          ],
          "latentQueue": [
            "MDF_PassiveLayer02"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
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
                  "modifier": "<a class=\"gModGreen\" id=\"980417237\">Advanced_Sparkle_Ability02_CritDmgAddedRatio02</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValueConvert) || Variables[1] (MDF_PropertyValueBase) || ADD || RETURN",
                    "displayLines": "(MDF_PropertyValueConvert + MDF_PropertyValueBase)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValueConvert",
                      "MDF_PropertyValueBase"
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
                    "operator": "Variables[0] (MDF_PropertyValueConvert) || Variables[1] (MDF_PropertyValueBase) || ADD || RETURN",
                    "displayLines": "(MDF_PropertyValueConvert + MDF_PropertyValueBase)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValueConvert",
                      "MDF_PropertyValueBase"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Nocturne",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Character"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypePenetrate</span>."
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_AllDamageTypePenetrateAll) || RETURN",
                        "displayLines": "MDF_AllDamageTypePenetrateAll",
                        "constants": [],
                        "variables": [
                          "MDF_AllDamageTypePenetrateAll"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValueConvert",
            "MDF_PropertyValueBase",
            "MDF_AllDamageTypePenetrate"
          ],
          "latentQueue": [],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Dreamdiver"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2103842601\">Advanced_Sparkle_Eidolon4_CD</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1966292851\">Advanced_Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                        "displayLines": "MDF_PropertyValue2",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue2"
                        ]
                      }
                    },
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>, and additionally enhances each stack of the Vulnerability effect provided by Sparkle's Talent by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>."
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End"
            }
          ],
          "stackData": [
            "MDF_PropertyValue",
            "MDF_PropertyValue2"
          ],
          "latentQueue": [
            "MDF_PassiveLayer02"
          ],
          "description": "Each stack of the Vulnerability effect provided by Sparkle's Talent additionally increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Cipher",
          "statusName": "Cipher"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1010036084\">Advanced_Sparkle_PointB2_FreeAbility</a>[<span class=\"descriptionNumberColor\">Artificial Flower</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill02"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Reset to Default"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill02"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Remove"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill02"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "The next use of Skill does not consume any Skill Points.",
          "type": "Buff",
          "statusName": "Artificial Flower"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1887140599\">Advanced_Sparkle_Ability03ExtraBP</a>[<span class=\"descriptionNumberColor\">The Hero with a Thousand Faces</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
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
                          "target": "{{Current Turn Owner}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        },
                        "type": "Character"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Skill Points",
                      "variableName": "MDF_CurrentBP"
                    },
                    {
                      "name": "Define Custom Variable with Skill Points",
                      "variableName": "MDF_BPDirty"
                    },
                    {
                      "name": "Define Custom Variable with Skill Point Max",
                      "variableName": "MDF_BPMax"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_BPGap1",
                      "value": {
                        "operator": "Variables[0] (MDF_BPMax) || Variables[1] (MDF_CurrentBP) || SUB || Variables[2] (MDF_BPDirty) || SUB || RETURN",
                        "displayLines": "((MDF_BPMax - MDF_CurrentBP) - MDF_BPDirty)",
                        "constants": [],
                        "variables": [
                          "MDF_BPMax",
                          "MDF_CurrentBP",
                          "MDF_BPDirty"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "MDF_Layer",
                      "multiplier": 1
                    },
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (MIN) || Variables[1] (MDF_Layer) || Variables[2] (MDF_BPGap1) || PARAM_2 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(MDF_Layer, MDF_BPGap1)",
                        "constants": [],
                        "variables": [
                          "MIN",
                          "MDF_Layer",
                          "MDF_BPGap1"
                        ]
                      },
                      "Event": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": null,
                            "compareType": ">",
                            "value2": 1,
                            "valueType": "Layer"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1887140599\">Advanced_Sparkle_Ability03ExtraBP</a>[<span class=\"descriptionNumberColor\">The Hero with a Thousand Faces</span>]",
                              "addStacksPerTrigger": -1
                            },
                            {
                              "name": "Skill Points Modification",
                              "adjustmentValue": 1,
                              "adjustmentType": "+"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Skill Points Modification",
                              "adjustmentValue": 1,
                              "adjustmentType": "+"
                            },
                            "Modifier Deletes Itself"
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
          "latentQueue": [
            "MDF_PassiveLayer02"
          ],
          "description": "After an ally's turn ends, if the current Skill Points are not at maximum, immediately recovers Skill Points for the team.",
          "type": "Buff",
          "statusName": "The Hero with a Thousand Faces"
        }
      ],
      "references": []
    }
  }
}