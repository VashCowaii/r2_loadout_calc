const configAbility = {
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
      "value": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "variableName": "MDF_PassiveMaxLayer"
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
          "eventTrigger": "Turn [Anyone]: Start",
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
                    "entityType": "Character"
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
                  "value": 0,
                  "variableName": "MDF_BPCount"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_BPCountAll"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Anyone]: End",
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
              "value": 0,
              "variableName": "MDF_BPCount"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MDF_BPCountAll"
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
                    "entityType": "Memosprite"
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
              "value": {
                "operator": "Variables[0] (MDF_BPCount) || INVERT || RETURN",
                "displayLines": "-MDF_BPCount",
                "constants": [],
                "variables": [
                  "MDF_BPCount"
                ]
              },
              "variableName": "MDF_BPCount"
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
                    "entityType": "Character"
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
                      "value": {
                        "operator": "Variables[0] (MDF_BPCountAll) || Variables[1] (MDF_BPCount) || ADD || RETURN",
                        "displayLines": "(MDF_BPCountAll + MDF_BPCount)",
                        "constants": [],
                        "variables": [
                          "MDF_BPCountAll",
                          "MDF_BPCount"
                        ]
                      },
                      "variableName": "MDF_BPCountAll"
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
                        "entityType": "Character"
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
          "priorityLevel": -80,
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
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-489784205\">Advanced_Sparkle_AbilityPreshow</a>",
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
          "target1": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "target2": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
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
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}