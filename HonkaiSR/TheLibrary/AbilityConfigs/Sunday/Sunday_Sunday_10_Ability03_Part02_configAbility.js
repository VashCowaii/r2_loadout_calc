const configAbility = {
  "fileName": "Sunday_Sunday_10_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "invertCondition": true
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "invertCondition": true
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity Type",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "type": "Character"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}.[[getMemosprite]]"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "invertCondition": true
      }
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "variableName": "_MAXSP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Skill03_AddSPAmount",
      "value": {
        "operator": "Variables[0] (_MAXSP) || Variables[1] (0.2) || MUL || RETURN",
        "displayLines": "(_MAXSP * 0.2)",
        "constants": [],
        "variables": [
          "_MAXSP",
          0.2
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Rest Day's Longing"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Skill03_AddSPAmount",
            "compareType": "<",
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
              "variableName": "_Skill03_AddSPAmount",
              "value": {
                "operator": "Variables[0] (40) || RETURN",
                "displayLines": "40",
                "constants": [],
                "variables": [
                  40
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
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"761788663\">Sunday_Eidolon2_UltraTag</a>"
      },
      "passed": [
        {
          "name": "Skill Points Modification",
          "adjustmentValue": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "adjustmentType": "+"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"761788663\">Sunday_Eidolon2_UltraTag</a>"
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "value": {
        "operator": "Variables[0] (_Skill03_AddSPAmount) || RETURN",
        "displayLines": "_Skill03_AddSPAmount",
        "constants": [],
        "variables": [
          "_Skill03_AddSPAmount"
        ]
      },
      "isFixed": "(Fixed)",
      "tag": "ActiveSkillAdd"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"762667758\">Sunday_10_Ability03_Link_ForCaster</a>",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1284738050\">Sunday_10_Ability03_Link</a>[<span class=\"descriptionNumberColor\">The Beatified</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity Type",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "type": "Character"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}} + {{Ability Target(ST)}}.[[getMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1284738050\">Sunday_10_Ability03_Link</a>[<span class=\"descriptionNumberColor\">The Beatified</span>]",
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                },
                "MDF_PropertyBase": {
                  "operator": "Variables[0] (0.12) || RETURN",
                  "displayLines": "0.12",
                  "constants": [],
                  "variables": [
                    0.12
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
              "modifier": "<a class=\"gModGreen\" id=\"-1284738050\">Sunday_10_Ability03_Link</a>[<span class=\"descriptionNumberColor\">The Beatified</span>]",
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                },
                "MDF_PropertyBase": {
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
        "modifier": "<a class=\"gModGreen\" id=\"-1449149515\">Sunday_10_MazeBonus_ForCaster</a>[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1449149515\">Sunday_10_MazeBonus_ForCaster</a>[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}} + {{Ability Target(ST)}}.[[getMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2041266105\">Sunday_10_MazeBonus</a>[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]",
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
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity Type",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "type": "Character"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}} + {{Ability Target(ST)}}.[[getMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2103228822\">Sunday_10_CritUp</a>[<span class=\"descriptionNumberColor\">The Sorrowing Body</span>]",
              "duration": {
                "operator": "Variables[0] (_P01_LifeTime) || RETURN",
                "displayLines": "_P01_LifeTime",
                "constants": [],
                "variables": [
                  "_P01_LifeTime"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (_SkillP01_StackingLayer) || RETURN",
                "displayLines": "_SkillP01_StackingLayer",
                "constants": [],
                "variables": [
                  "_SkillP01_StackingLayer"
                ]
              },
              "valuePerStack": {
                "MDF_CritValue": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
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
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2103228822\">Sunday_10_CritUp</a>[<span class=\"descriptionNumberColor\">The Sorrowing Body</span>]",
              "duration": {
                "operator": "Variables[0] (_P01_LifeTime) || RETURN",
                "displayLines": "_P01_LifeTime",
                "constants": [],
                "variables": [
                  "_P01_LifeTime"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (_SkillP01_StackingLayer) || RETURN",
                "displayLines": "_SkillP01_StackingLayer",
                "constants": [],
                "variables": [
                  "_SkillP01_StackingLayer"
                ]
              },
              "valuePerStack": {
                "MDF_CritValue": {
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
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "invertCondition": true
      }
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1076921726\">Sunday_10_Ability03_Link_Damage</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1034196387\">MW_Sunday_Passive</a>"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Current Action Target List}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Custom Damage Type",
                      "initialTypePreRead": "Physical",
                      "sourceType": "ReadTargetType",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    },
                    "Damage": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
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
      "for": "<a class=\"gModGreen\" id=\"mod__762667758\">Sunday_10_Ability03_Link_ForCaster</a>",
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1284738050\">Sunday_10_Ability03_Link</a>[<span class=\"descriptionNumberColor\">The Beatified</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "LifeTime",
              "variableName": "_lifeTime",
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
                "value1": "_lifeTime",
                "compareType": ">",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_lifeTime) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(_lifeTime - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_lifeTime"
                    ]
                  },
                  "priorState": "Active"
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "priorState": "Normal"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "LifeTime",
              "variableName": "_lifeTime",
              "multiplier": 1
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (_lifeTime) || RETURN",
                "displayLines": "_lifeTime",
                "constants": [],
                "variables": [
                  "_lifeTime"
                ]
              },
              "priorState": "Active"
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1284738050\">Sunday_10_Ability03_Link</a>[<span class=\"descriptionNumberColor\">The Beatified</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_ownerCritDamage",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_PropertyFinal",
                      "value": {
                        "operator": "Variables[0] (_ownerCritDamage) || Variables[1] (0.3) || MUL || Variables[2] (0.12) || ADD || RETURN",
                        "displayLines": "((_ownerCritDamage * 0.3) + 0.12)",
                        "constants": [],
                        "variables": [
                          "_ownerCritDamage",
                          0.3,
                          0.12
                        ]
                      }
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-1284738050\">Sunday_10_Ability03_Link</a>[<span class=\"descriptionNumberColor\">The Beatified</span>]",
                      "variableName": "MDF_PropertyFinal",
                      "value": {
                        "operator": "Variables[0] (_PropertyFinal) || RETURN",
                        "displayLines": "_PropertyFinal",
                        "constants": [],
                        "variables": [
                          "_PropertyFinal"
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
      "stackData": [],
      "latentQueue": []
    }
  ]
}