const configAbility = {
  "fileName": "2034014_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1007960687\">Enemy_W2_LycanKing_IF_AbilityEX04</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__957627830\">Enemy_W2_LycanKing_IF_AbilityEX03</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__974405449\">Enemy_W2_LycanKing_IF_AbilityEX02</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__924072592\">Enemy_W2_LycanKing_IF_AbilityEX01</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1045160712\">Enemy_W2_LycanKing_IF_RageStatusEnhance</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [
        "MDF_SpeedAddRatio"
      ],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1148945924\">Enemy_W2_LycanKing_IF_RageControllerV2</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "Wolf_AttackCount",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "Wolf_MaxAttackCount",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Action End [Anyone]",
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
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1736159544\">Enemy_W2_Lycan_RageStatus</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__167"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (Wolf_AttackCount) || RETURN",
                        "displayLines": "Wolf_AttackCount",
                        "constants": [],
                        "variables": [
                          "Wolf_AttackCount"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                        "displayLines": "Wolf_MaxAttackCount",
                        "constants": [],
                        "variables": [
                          "Wolf_MaxAttackCount"
                        ]
                      },
                      "assignState": "True",
                      "state": "Normal"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "value1": "Wolf_AttackCount",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Wolf_AttackCount"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "Wolf_MaxAttackCount",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "Wolf_MaxAttackCount",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MaxAttackCount) || RETURN",
                      "displayLines": "MaxAttackCount",
                      "constants": [],
                      "variables": [
                        "MaxAttackCount"
                      ]
                    },
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Wolf_MaxAttackCount",
                  "value": {
                    "operator": "Variables[0] (MaxAttackCount) || RETURN",
                    "displayLines": "MaxAttackCount",
                    "constants": [],
                    "variables": [
                      "MaxAttackCount"
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
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1736159544\">Enemy_W2_Lycan_RageStatus</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__167"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (Wolf_AttackCount) || RETURN",
                        "displayLines": "Wolf_AttackCount",
                        "constants": [],
                        "variables": [
                          "Wolf_AttackCount"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                        "displayLines": "Wolf_MaxAttackCount",
                        "constants": [],
                        "variables": [
                          "Wolf_MaxAttackCount"
                        ]
                      },
                      "assignState": "True",
                      "state": "Normal"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "includeDyingTargets": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__167"
              },
              "noTargetFound": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Wolf_AttackCount"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Wolf_MaxAttackCount",
                  "value": {
                    "operator": "Variables[0] (MaxAttackCount) || RETURN",
                    "displayLines": "MaxAttackCount",
                    "constants": [],
                    "variables": [
                      "MaxAttackCount"
                    ]
                  }
                },
                "Modifier Deletes Itself"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__167"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1736159544\">Enemy_W2_Lycan_RageStatus</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "Wolf_AttackCount",
                    "compareType": "NOT=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1414738413\">Enemy_W2_Lycan_RagePhase1Mark</a>[<span class=\"descriptionNumberColor\">Bloodlust</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                        "displayLines": "Wolf_MaxAttackCount",
                        "constants": [],
                        "variables": [
                          "Wolf_MaxAttackCount"
                        ]
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (Wolf_AttackCount) || RETURN",
                        "displayLines": "Wolf_AttackCount",
                        "constants": [],
                        "variables": [
                          "Wolf_AttackCount"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Wolf_AttackCount) || RETURN",
                    "displayLines": "Wolf_AttackCount",
                    "constants": [],
                    "variables": [
                      "Wolf_AttackCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                    "displayLines": "Wolf_MaxAttackCount",
                    "constants": [],
                    "variables": [
                      "Wolf_MaxAttackCount"
                    ]
                  },
                  "assignState": "True",
                  "state": "Normal"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
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
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1736159544\">Enemy_W2_Lycan_RageStatus</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__167"
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "compareType": ">=",
                                "value2": 4
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1344172938\">Enemy_W2_LycanKing_Part1End</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "Wolf_AttackCount",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                    "displayLines": "Wolf_MaxAttackCount",
                    "constants": [],
                    "variables": [
                      "Wolf_MaxAttackCount"
                    ]
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__167"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 4
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (Wolf_AttackCount) || RETURN",
                        "displayLines": "Wolf_AttackCount",
                        "constants": [],
                        "variables": [
                          "Wolf_AttackCount"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                        "displayLines": "Wolf_MaxAttackCount",
                        "constants": [],
                        "variables": [
                          "Wolf_MaxAttackCount"
                        ]
                      },
                      "assignState": "True",
                      "state": "Normal"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__167"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1414738413\">Enemy_W2_Lycan_RagePhase1Mark</a>[<span class=\"descriptionNumberColor\">Bloodlust</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                        "displayLines": "Wolf_MaxAttackCount",
                        "constants": [],
                        "variables": [
                          "Wolf_MaxAttackCount"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "=",
                        "value2": 2
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "=",
                            "value2": 3
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "Wolf_AttackCount",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                      "displayLines": "Wolf_MaxAttackCount",
                      "constants": [],
                      "variables": [
                        "Wolf_MaxAttackCount"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__167"
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "=",
                            "value2": 4
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Break"
                          },
                          "passed": [
                            {
                              "name": "Reset Toughness",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            },
                            {
                              "name": "Exit Broken-State",
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
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_CTRL"
                          },
                          "passed": [
                            {
                              "name": "Remove Modifier Behavior Flag(s)",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagNames": []
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Current Turn Is",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                              },
                              "failed": [
                                {
                                  "name": "Action Advance/Delay",
                                  "advanceType": "Set",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "set": 0
                                },
                                {
                                  "name": "Assign Advance/Delay to Current Ability Use",
                                  "adjustmentValue": 0,
                                  "adjustmentType": "="
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
                                "target": "{{Parameter Target}}"
                              },
                              "set": 0
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 0
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
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1787691973\">Enemy_W2_Lycan_RageMarkInRage</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>",
                  "casterAssign": "CasterSelf"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "assignState": "True",
                  "state": "Active"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1787691973\">Enemy_W2_Lycan_RageMarkInRage</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"729115226\">Enemy_W2_LycanKing_IF_LycanTriggerDeath</a>"
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
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1736159544\">Enemy_W2_Lycan_RageStatus</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            },
                            {
                              "name": "Target Filter",
                              "conditions": {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "compareType": "=",
                                "value2": 4
                              }
                            }
                          ]
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "Wolf_AttackCount",
                      "value": 1,
                      "max": {
                        "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                        "displayLines": "Wolf_MaxAttackCount",
                        "constants": [],
                        "variables": [
                          "Wolf_MaxAttackCount"
                        ]
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__167"
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": ">=",
                            "value2": 4
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (Wolf_AttackCount) || RETURN",
                            "displayLines": "Wolf_AttackCount",
                            "constants": [],
                            "variables": [
                              "Wolf_AttackCount"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                            "displayLines": "Wolf_MaxAttackCount",
                            "constants": [],
                            "variables": [
                              "Wolf_MaxAttackCount"
                            ]
                          },
                          "assignState": "True",
                          "state": "Normal"
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__167"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1414738413\">Enemy_W2_Lycan_RagePhase1Mark</a>[<span class=\"descriptionNumberColor\">Bloodlust</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                            "displayLines": "Wolf_MaxAttackCount",
                            "constants": [],
                            "variables": [
                              "Wolf_MaxAttackCount"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "=",
                            "value2": 2
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "compareType": "=",
                                "value2": 3
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "value1": "Wolf_AttackCount",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                          "displayLines": "Wolf_MaxAttackCount",
                          "constants": [],
                          "variables": [
                            "Wolf_MaxAttackCount"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "ENEMIES_OBJECT_UNUSED__167"
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "compareType": "=",
                                "value2": 4
                              }
                            ]
                          },
                          "ifTargetFound": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "Break"
                              },
                              "passed": [
                                {
                                  "name": "Reset Toughness",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  }
                                },
                                {
                                  "name": "Exit Broken-State",
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
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_CTRL"
                              },
                              "passed": [
                                {
                                  "name": "Remove Modifier Behavior Flag(s)",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagNames": []
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Current Turn Is",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                }
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                                  },
                                  "failed": [
                                    {
                                      "name": "Action Advance/Delay",
                                      "advanceType": "Set",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "set": 0
                                    },
                                    {
                                      "name": "Assign Advance/Delay to Current Ability Use",
                                      "adjustmentValue": 0,
                                      "adjustmentType": "="
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
                                    "target": "{{Parameter Target}}"
                                  },
                                  "set": 0
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 0
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
          "eventTrigger": "New Enemy Wave: Start",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "Wolf_AttackCount",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "Wolf_MaxAttackCount",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1736159544\">Enemy_W2_Lycan_RageStatus</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__167"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (Wolf_AttackCount) || RETURN",
                        "displayLines": "Wolf_AttackCount",
                        "constants": [],
                        "variables": [
                          "Wolf_AttackCount"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                        "displayLines": "Wolf_MaxAttackCount",
                        "constants": [],
                        "variables": [
                          "Wolf_MaxAttackCount"
                        ]
                      },
                      "assignState": "True",
                      "state": "Normal"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MaxAttackCount"
      ],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1959235815\">Monster_W2_LycanKing_IF_Revive</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player & Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-480380135\">Enemy_W2_LycanKing_IF_DisableAction</a>[<span class=\"descriptionNumberColor\">Departed</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"659682696\">Enemy_W2_LycanKing_IF_PickUpMark</a>"
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "silent": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Wolf_AttackCount) || RETURN",
                    "displayLines": "Wolf_AttackCount",
                    "constants": [],
                    "variables": [
                      "Wolf_AttackCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                    "displayLines": "Wolf_MaxAttackCount",
                    "constants": [],
                    "variables": [
                      "Wolf_MaxAttackCount"
                    ]
                  },
                  "assignState": "True",
                  "state": "Normal"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1736159544\">Enemy_W2_Lycan_RageStatus</a>"
                }
              ]
            },
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"979801477\">Monster_Standard_Endurance</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1715207705\">Enemy_XP_Minion04_02_Huimie_EffectPaths</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"24516597\">Enemy_XP_Minion04_02_Huimie_EffectRound</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1010578616\">Enemy_XP_Minion04_02_Huimie_EffectGround</a>"
            },
            {
              "name": "Set Enemy Phase",
              "mode": "Inc"
            },
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Monster_W2_LycanKing_IF_PassiveAbility_Insert",
              "priorityTag": "MonsterChangePhase",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            },
            "Modifier Deletes Itself"
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__833181750\">Enemy_W2_LycanKing_IF_MuteUltra</a>",
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
              "abilityTypes": [
                "Ultimate"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1507614101\">Enemy_W2_LycanKing_IF_MuteBreak</a>",
      "modifierFlags": [
        "MuteBreak"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1180885897\">Enemy_W2_LycanKing_IF_ProtectWeakness</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Protected",
              "valueList": [
                "AllType"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1211837792\">Enemy_W2_LycanKing_IF_LycanLimboMark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1962417127\">Enemy_W2_LycanKing_IF_LycanDeathrattle_Sub</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1898412116\">Enemy_W2_LycanKing_IF_LycanDeathrattle</a>",
      "execute": [
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1211837792\">Enemy_W2_LycanKing_IF_LycanLimboMark</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Attacked Completed [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1211837792\">Enemy_W2_LycanKing_IF_LycanLimboMark</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1962417127\">Enemy_W2_LycanKing_IF_LycanDeathrattle_Sub</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1543064469\">Enemy_W2_LycanKing_IF_ProtectWeaknessController</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1180885897\">Enemy_W2_LycanKing_IF_ProtectWeakness</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1507614101\">Enemy_W2_LycanKing_IF_MuteBreak</a>"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player & Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-480380135\">Enemy_W2_LycanKing_IF_DisableAction</a>[<span class=\"descriptionNumberColor\">Departed</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"659682696\">Enemy_W2_LycanKing_IF_PickUpMark</a>"
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "LycanDieCount",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1180885897\">Enemy_W2_LycanKing_IF_ProtectWeakness</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1507614101\">Enemy_W2_LycanKing_IF_MuteBreak</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-149187790\">Lycanking_SummonLycan</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"1211837792\">Enemy_W2_LycanKing_IF_LycanLimboMark</a>"
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
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "LycanDieCount",
                  "value": {
                    "operator": "Variables[0] (LycanDieCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(LycanDieCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "LycanDieCount"
                    ]
                  }
                },
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "conditionActive": {
                    "name": "Compare: Variable",
                    "value1": "LycanDieCount",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "abilityName": "BattleEventAbility_Monster_W2_LycanKing_IF_StanceDamage",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "priorityTag": "MonsterDeathRattle",
                  "canHitNonTargets": true,
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
      "for": "<a class=\"gModGreen\" id=\"mod__-160773215\">Enemy_W2_LycanKing_IF_ChampionEnhanceForeverStatus</a>[<span class=\"descriptionNumberColor\">Rising War Spirits</span>]",
      "stackType": "Replace",
      "description": "DMG dealt by this unit and their summoned targets increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeAddedRatio</span> and Break Effect increases by <span class=\"descriptionNumberColor\">MDF_BreakDamageAddedRatioBase</span>. This effect is stackable.",
      "type": "Buff",
      "effectName": "Rising War Spirits",
      "statusName": "Rising War Spirits",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1831180535\">Enemy_W2_LycanKing_IF_ChampionEnhanceForever</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "ServantInherit_ModifierContinuation"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
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
                "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_AllDamageTypeAddedRatio * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeAddedRatio",
                  "MDF_Layer"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_BreakDamageAddedRatioBase) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_BreakDamageAddedRatioBase * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_BreakDamageAddedRatioBase",
                  "MDF_Layer"
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
                "name": "Is Related Summoned Entity",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1831180535\">Enemy_W2_LycanKing_IF_ChampionEnhanceForever</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "MaxLayer",
                      "variableName": "MDF_MaxLayer",
                      "multiplier": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1831180535\">Enemy_W2_LycanKing_IF_ChampionEnhanceForever</a>",
                      "stackLimit": {
                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                        "displayLines": "MDF_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_AllDamageTypeAddedRatio": {
                          "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                          "displayLines": "MDF_AllDamageTypeAddedRatio",
                          "constants": [],
                          "variables": [
                            "MDF_AllDamageTypeAddedRatio"
                          ]
                        },
                        "MDF_BreakDamageAddedRatioBase": {
                          "operator": "Variables[0] (MDF_BreakDamageAddedRatioBase) || RETURN",
                          "displayLines": "MDF_BreakDamageAddedRatioBase",
                          "constants": [],
                          "variables": [
                            "MDF_BreakDamageAddedRatioBase"
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
                        "value1": "<a class=\"gModGreen\" id=\"1831180535\">Enemy_W2_LycanKing_IF_ChampionEnhanceForever</a>",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MDF_Layer) || RETURN",
                          "displayLines": "MDF_Layer",
                          "constants": [],
                          "variables": [
                            "MDF_Layer"
                          ]
                        },
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "valueType": "Layer",
                          "variableName": "MDF_LayerNeedAdd",
                          "modifierName": "<a class=\"gModGreen\" id=\"1831180535\">Enemy_W2_LycanKing_IF_ChampionEnhanceForever</a>",
                          "multiplier": 1
                        },
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "valueType": "MaxLayer",
                          "variableName": "MDF_MaxLayer",
                          "multiplier": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1831180535\">Enemy_W2_LycanKing_IF_ChampionEnhanceForever</a>",
                          "stackLimit": {
                            "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                            "displayLines": "MDF_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLayer"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_AllDamageTypeAddedRatio": {
                              "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                              "displayLines": "MDF_AllDamageTypeAddedRatio",
                              "constants": [],
                              "variables": [
                                "MDF_AllDamageTypeAddedRatio"
                              ]
                            },
                            "MDF_BreakDamageAddedRatioBase": {
                              "operator": "Variables[0] (MDF_BreakDamageAddedRatioBase) || RETURN",
                              "displayLines": "MDF_BreakDamageAddedRatioBase",
                              "constants": [],
                              "variables": [
                                "MDF_BreakDamageAddedRatioBase"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (MDF_Layer) || Variables[1] (MDF_LayerNeedAdd) || SUB || RETURN",
                            "displayLines": "(MDF_Layer - MDF_LayerNeedAdd)",
                            "constants": [],
                            "variables": [
                              "MDF_Layer",
                              "MDF_LayerNeedAdd"
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
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2137851816\">Enemy_W2_LycanKing_IF_ChampionEnhanceHitMark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__84881984\">Enemy_W2_LycanKing_IF_ChampionHPEnhance</a>[<span class=\"descriptionNumberColor\">Last Stand</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Character"
                  },
                  {
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
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_HPAddDelta",
                  "value": {
                    "operator": "Variables[0] (MDF_MaxHP) || RETURN",
                    "displayLines": "MDF_MaxHP",
                    "constants": [],
                    "variables": [
                      "MDF_MaxHP"
                    ]
                  },
                  "max": 999999
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_Attack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_AttackDelta",
                  "value": {
                    "operator": "Variables[0] (MDF_Attack) || RETURN",
                    "displayLines": "MDF_Attack",
                    "constants": [],
                    "variables": [
                      "MDF_Attack"
                    ]
                  },
                  "max": 999999
                }
              ]
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_HPAddDelta) || RETURN",
                "displayLines": "MDF_HPAddDelta",
                "constants": [],
                "variables": [
                  "MDF_HPAddDelta"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackDelta) || RETURN",
                "displayLines": "MDF_AttackDelta",
                "constants": [],
                "variables": [
                  "MDF_AttackDelta"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Max HP increases by <span class=\"descriptionNumberColor\">MDF_HPAddDelta</span> and ATK increases by <span class=\"descriptionNumberColor\">MDF_AttackDelta</span>. This effect will be removed when the \"Going Solo\" state ends.",
      "type": "Buff",
      "effectName": "Last Stand",
      "statusName": "Last Stand"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1535911464\">Enemy_W2_LycanKing_IF_ChampionEnhance</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2137851816\">Enemy_W2_LycanKing_IF_ChampionEnhanceHitMark</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
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
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}.[[getMemosprite]]"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "MaxLayer",
                  "variableName": "MDF_MaxLayer",
                  "multiplier": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1535911464\">Enemy_W2_LycanKing_IF_ChampionEnhance</a>",
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_HealPercentage": {
                      "operator": "Variables[0] (MDF_HealPercentage) || RETURN",
                      "displayLines": "MDF_HealPercentage",
                      "constants": [],
                      "variables": [
                        "MDF_HealPercentage"
                      ]
                    },
                    "MDF_DamageStancePerLayer": {
                      "operator": "Variables[0] (MDF_DamageStancePerLayer) || RETURN",
                      "displayLines": "MDF_DamageStancePerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageStancePerLayer"
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
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2137851816\">Enemy_W2_LycanKing_IF_ChampionEnhanceHitMark</a>"
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Fire"
                    }
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageStancePerLayer) || Variables[1] (MDF_Layer) || MUL || RETURN",
                        "displayLines": "(MDF_DamageStancePerLayer * MDF_Layer)",
                        "constants": [],
                        "variables": [
                          "MDF_DamageStancePerLayer",
                          "MDF_Layer"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "canDelay": true,
                      "ToughnessDMGType": "Fire"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Thunder"
                    }
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageStancePerLayer) || Variables[1] (MDF_Layer) || MUL || RETURN",
                        "displayLines": "(MDF_DamageStancePerLayer * MDF_Layer)",
                        "constants": [],
                        "variables": [
                          "MDF_DamageStancePerLayer",
                          "MDF_Layer"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "canDelay": true,
                      "ToughnessDMGType": "Thunder"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Ice"
                    }
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageStancePerLayer) || Variables[1] (MDF_Layer) || MUL || RETURN",
                        "displayLines": "(MDF_DamageStancePerLayer * MDF_Layer)",
                        "constants": [],
                        "variables": [
                          "MDF_DamageStancePerLayer",
                          "MDF_Layer"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "canDelay": true,
                      "ToughnessDMGType": "Ice"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Wind"
                    }
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageStancePerLayer) || Variables[1] (MDF_Layer) || MUL || RETURN",
                        "displayLines": "(MDF_DamageStancePerLayer * MDF_Layer)",
                        "constants": [],
                        "variables": [
                          "MDF_DamageStancePerLayer",
                          "MDF_Layer"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "canDelay": true,
                      "ToughnessDMGType": "Wind"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Physical"
                    }
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageStancePerLayer) || Variables[1] (MDF_Layer) || MUL || RETURN",
                        "displayLines": "(MDF_DamageStancePerLayer * MDF_Layer)",
                        "constants": [],
                        "variables": [
                          "MDF_DamageStancePerLayer",
                          "MDF_Layer"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "canDelay": true,
                      "ToughnessDMGType": "Physical"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Imaginary"
                    }
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageStancePerLayer) || Variables[1] (MDF_Layer) || MUL || RETURN",
                        "displayLines": "(MDF_DamageStancePerLayer * MDF_Layer)",
                        "constants": [],
                        "variables": [
                          "MDF_DamageStancePerLayer",
                          "MDF_Layer"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "canDelay": true,
                      "ToughnessDMGType": "Imaginary"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Quantum"
                    }
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageStancePerLayer) || Variables[1] (MDF_Layer) || MUL || RETURN",
                        "displayLines": "(MDF_DamageStancePerLayer * MDF_Layer)",
                        "constants": [],
                        "variables": [
                          "MDF_DamageStancePerLayer",
                          "MDF_Layer"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "canDelay": true,
                      "ToughnessDMGType": "Quantum"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2137851816\">Enemy_W2_LycanKing_IF_ChampionEnhanceHitMark</a>"
                }
              ]
            },
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "healer": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Compare: Monster Rank",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "compareType": "=",
                      "value2": 4
                    }
                  }
                ]
              },
              "healPercent": {
                "operator": "Variables[0] (MDF_HealPercentage) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_HealPercentage * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_HealPercentage",
                  "MDF_Layer"
                ]
              },
              "formula": "Heal from Target MaxHP"
            }
          ]
        }
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "toughnessReductionPreviewAdd": {
          "operator": "Variables[0] (MDF_DamageStancePerLayer) || Variables[1] (MDF_Layer) || MUL || RETURN",
          "displayLines": "(MDF_DamageStancePerLayer * MDF_Layer)",
          "constants": [],
          "variables": [
            "MDF_DamageStancePerLayer",
            "MDF_Layer"
          ]
        }
      },
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__848754639\">Enemy_W2_LycanKing_IF_ChampionMark</a>[<span class=\"descriptionNumberColor\">Blood Surge</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]"
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"659682696\">Enemy_W2_LycanKing_IF_PickUpMark</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1535911464\">Enemy_W2_LycanKing_IF_ChampionEnhance</a>",
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_HealPercentage": {
                      "operator": "Variables[0] (MDF_HealPercentage) || RETURN",
                      "displayLines": "MDF_HealPercentage",
                      "constants": [],
                      "variables": [
                        "MDF_HealPercentage"
                      ]
                    },
                    "MDF_DamageStancePerLayer": {
                      "operator": "Variables[0] (MDF_DamageStancePerLayer) || RETURN",
                      "displayLines": "MDF_DamageStancePerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageStancePerLayer"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1831180535\">Enemy_W2_LycanKing_IF_ChampionEnhanceForever</a>",
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_AllDamageTypeAddedRatio": {
                      "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                      "displayLines": "MDF_AllDamageTypeAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageTypeAddedRatio"
                      ]
                    },
                    "MDF_BreakDamageAddedRatioBase": {
                      "operator": "Variables[0] (MDF_BreakDamageAddedRatioBase) || RETURN",
                      "displayLines": "MDF_BreakDamageAddedRatioBase",
                      "constants": [],
                      "variables": [
                        "MDF_BreakDamageAddedRatioBase"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-160773215\">Enemy_W2_LycanKing_IF_ChampionEnhanceForeverStatus</a>[<span class=\"descriptionNumberColor\">Rising War Spirits</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_AllDamageTypeAddedRatio": {
                      "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                      "displayLines": "MDF_AllDamageTypeAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageTypeAddedRatio"
                      ]
                    },
                    "MDF_BreakDamageAddedRatioBase": {
                      "operator": "Variables[0] (MDF_BreakDamageAddedRatioBase) || RETURN",
                      "displayLines": "MDF_BreakDamageAddedRatioBase",
                      "constants": [],
                      "variables": [
                        "MDF_BreakDamageAddedRatioBase"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1535911464\">Enemy_W2_LycanKing_IF_ChampionEnhance</a>",
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_HealPercentage": {
                      "operator": "Variables[0] (MDF_HealPercentage) || RETURN",
                      "displayLines": "MDF_HealPercentage",
                      "constants": [],
                      "variables": [
                        "MDF_HealPercentage"
                      ]
                    },
                    "MDF_DamageStancePerLayer": {
                      "operator": "Variables[0] (MDF_DamageStancePerLayer) || RETURN",
                      "displayLines": "MDF_DamageStancePerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageStancePerLayer"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1831180535\">Enemy_W2_LycanKing_IF_ChampionEnhanceForever</a>",
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_AllDamageTypeAddedRatio": {
                      "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                      "displayLines": "MDF_AllDamageTypeAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageTypeAddedRatio"
                      ]
                    },
                    "MDF_BreakDamageAddedRatioBase": {
                      "operator": "Variables[0] (MDF_BreakDamageAddedRatioBase) || RETURN",
                      "displayLines": "MDF_BreakDamageAddedRatioBase",
                      "constants": [],
                      "variables": [
                        "MDF_BreakDamageAddedRatioBase"
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
                  "name": "Update Modifier Description",
                  "popUpText": "After this unit or their summon attacks, they will additionally reduce Toughness and restore HP equal to <span class=\"descriptionNumberColor\">MDF_HealPercentage</span> Max HP. This effect is stackable and will be removed when the \"Going Solo\" state ends."
                }
              ]
            }
          ]
        }
      ],
      "description": "When a target character with \"Blood Surge\" and their summon enters \"Going Solo,\" they will additionally reduce enemy Toughness and restore HP after attacking. This effect is stackable and is removed when \"Going Solo\" ends.",
      "type": "Buff",
      "effectName": "Blood Surge",
      "statusName": "Blood Surge",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__729115226\">Enemy_W2_LycanKing_IF_LycanTriggerDeath</a>",
      "stackType": "Replace",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2024649491\">Enemy_W2_LycanKing_IF_ChampionMarkController</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"729115226\">Enemy_W2_LycanKing_IF_LycanTriggerDeath</a>"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Memosprite",
                    "invertCondition": true
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
                        "modifier": "<a class=\"gModGreen\" id=\"1535911464\">Enemy_W2_LycanKing_IF_ChampionEnhance</a>"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valueType": "Layer",
                          "variableName": "MDF_ChampionEnhancedCount",
                          "modifierName": "<a class=\"gModGreen\" id=\"1535911464\">Enemy_W2_LycanKing_IF_ChampionEnhance</a>",
                          "multiplier": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_ChampionEnhancedCount",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"848754639\">Enemy_W2_LycanKing_IF_ChampionMark</a>[<span class=\"descriptionNumberColor\">Blood Surge</span>]"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valueType": "Layer",
                          "variableName": "MDF_ChampionMarkCount",
                          "modifierName": "<a class=\"gModGreen\" id=\"848754639\">Enemy_W2_LycanKing_IF_ChampionMark</a>[<span class=\"descriptionNumberColor\">Blood Surge</span>]",
                          "multiplier": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_ChampionMarkCount",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ChampionCountTotal",
                      "value": {
                        "operator": "Variables[0] (MDF_ChampionCountTotal) || Variables[1] (MDF_ChampionMarkCount) || ADD || RETURN",
                        "displayLines": "(MDF_ChampionCountTotal + MDF_ChampionMarkCount)",
                        "constants": [],
                        "variables": [
                          "MDF_ChampionCountTotal",
                          "MDF_ChampionMarkCount"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_ChampionCountTotal",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                          "displayLines": "MDF_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLayer"
                          ]
                        }
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "type": "Memosprite"
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"848754639\">Enemy_W2_LycanKing_IF_ChampionMark</a>[<span class=\"descriptionNumberColor\">Blood Surge</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (MDF_MaxLayer) || Variables[1] (MDF_ChampionCountTotal) || SUB || RETURN",
                                "displayLines": "(MDF_MaxLayer - MDF_ChampionCountTotal)",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer",
                                  "MDF_ChampionCountTotal"
                                ]
                              },
                              "valuePerStack": {
                                "MDF_MaxLayer": {
                                  "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                  "displayLines": "MDF_MaxLayer",
                                  "constants": [],
                                  "variables": [
                                    "MDF_MaxLayer"
                                  ]
                                },
                                "MDF_HealPercentage": {
                                  "operator": "Variables[0] (MDF_HealPercentage) || RETURN",
                                  "displayLines": "MDF_HealPercentage",
                                  "constants": [],
                                  "variables": [
                                    "MDF_HealPercentage"
                                  ]
                                },
                                "MDF_AllDamageTypeAddedRatio": {
                                  "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                                  "displayLines": "MDF_AllDamageTypeAddedRatio",
                                  "constants": [],
                                  "variables": [
                                    "MDF_AllDamageTypeAddedRatio"
                                  ]
                                },
                                "MDF_DamageStancePerLayer": {
                                  "operator": "Variables[0] (MDF_DamageStancePerLayer) || RETURN",
                                  "displayLines": "MDF_DamageStancePerLayer",
                                  "constants": [],
                                  "variables": [
                                    "MDF_DamageStancePerLayer"
                                  ]
                                },
                                "MDF_BreakDamageAddedRatioBase": {
                                  "operator": "Variables[0] (MDF_BreakDamageAddedRatioBase) || RETURN",
                                  "displayLines": "MDF_BreakDamageAddedRatioBase",
                                  "constants": [],
                                  "variables": [
                                    "MDF_BreakDamageAddedRatioBase"
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
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-71943107\">Enemy_W2_LycanKing_IF_ChampionMarkHalo</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2024649491\">Enemy_W2_LycanKing_IF_ChampionMarkController</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"848754639\">Enemy_W2_LycanKing_IF_ChampionMark</a>[<span class=\"descriptionNumberColor\">Blood Surge</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1535911464\">Enemy_W2_LycanKing_IF_ChampionEnhance</a>"
            }
          ]
        }
      ],
      "stackData": [
        "MDF_MaxLayer",
        "MDF_HealPercentage",
        "MDF_AllDamageTypeAddedRatio",
        "MDF_DamageStancePerLayer",
        "MDF_BreakDamageAddedRatioBase"
      ],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2024649491\">Enemy_W2_LycanKing_IF_ChampionMarkController</a>",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_MaxLayer": {
              "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
              "displayLines": "MDF_MaxLayer",
              "constants": [],
              "variables": [
                "MDF_MaxLayer"
              ]
            },
            "MDF_HealPercentage": {
              "operator": "Variables[0] (MDF_HealPercentage) || RETURN",
              "displayLines": "MDF_HealPercentage",
              "constants": [],
              "variables": [
                "MDF_HealPercentage"
              ]
            },
            "MDF_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
              "displayLines": "MDF_AllDamageTypeAddedRatio",
              "constants": [],
              "variables": [
                "MDF_AllDamageTypeAddedRatio"
              ]
            },
            "MDF_DamageStancePerLayer": {
              "operator": "Variables[0] (MDF_DamageStancePerLayer) || RETURN",
              "displayLines": "MDF_DamageStancePerLayer",
              "constants": [],
              "variables": [
                "MDF_DamageStancePerLayer"
              ]
            },
            "MDF_BreakDamageAddedRatioBase": {
              "operator": "Variables[0] (MDF_BreakDamageAddedRatioBase) || RETURN",
              "displayLines": "MDF_BreakDamageAddedRatioBase",
              "constants": [],
              "variables": [
                "MDF_BreakDamageAddedRatioBase"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1743938491\">Enemy_W2_LycanKing_IF_PickUpHitMark</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Compare: Monster Rank",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "compareType": "=",
                      "value2": 4
                    }
                  }
                ]
              },
              "variableName": "HitCount",
              "context": "TargetEntity",
              "value": 1,
              "max": 100
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1565088528\">Enemy_W2_LycanKing_IF_PickUpMarkLycanKing</a>[<span class=\"descriptionNumberColor\">Going Solo</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_AllDamageTypeAddedRatio",
              "value": {
                "operator": "Variables[0] ({[SkillP02[2]]}) || RETURN",
                "displayLines": "{[SkillP02[2]]}",
                "constants": [],
                "variables": [
                  "{[SkillP02[2]]}"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                "displayLines": "MDF_AllDamageTypeAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeAddedRatio"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1007960687\">Enemy_W2_LycanKing_IF_AbilityEX04</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageReduce",
                  "value": {
                    "operator": "Variables[0] ({[SkillEX04[0]]}) || Variables[1] ({[SkillP02[5]]}) || ADD || RETURN",
                    "displayLines": "({[SkillEX04[0]]} + {[SkillP02[5]]})",
                    "constants": [],
                    "variables": [
                      "{[SkillEX04[0]]}",
                      "{[SkillP02[5]]}"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageReduce) || RETURN",
                    "displayLines": "MDF_DamageReduce",
                    "constants": [],
                    "variables": [
                      "MDF_DamageReduce"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageReduce",
                  "value": {
                    "operator": "Variables[0] ({[SkillP02[5]]}) || RETURN",
                    "displayLines": "{[SkillP02[5]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP02[5]]}"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageReduce) || RETURN",
                    "displayLines": "MDF_DamageReduce",
                    "constants": [],
                    "variables": [
                      "MDF_DamageReduce"
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
      "description": "Currently in the \"Going Solo\" state. Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeAddedRatio</span> and decreases DMG taken by <span class=\"descriptionNumberColor\">MDF_DamageReduce</span>.",
      "type": "Other",
      "effectName": "Going Solo",
      "statusName": "Going Solo"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__659682696\">Enemy_W2_LycanKing_IF_PickUpMark</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "TeamAction",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Update Character Panel Visibility",
              "show": "CasterOnly",
              "showKey": "Lycanking",
              "forceDisplayUltButton": true
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1743938491\">Enemy_W2_LycanKing_IF_PickUpHitMark</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1496443322\">Enemy_W2_LycanKing_RageEffect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player & Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-480380135\">Enemy_W2_LycanKing_IF_DisableAction</a>[<span class=\"descriptionNumberColor\">Departed</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"848754639\">Enemy_W2_LycanKing_IF_ChampionMark</a>[<span class=\"descriptionNumberColor\">Blood Surge</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1535911464\">Enemy_W2_LycanKing_IF_ChampionEnhance</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"84881984\">Enemy_W2_LycanKing_IF_ChampionHPEnhance</a>[<span class=\"descriptionNumberColor\">Last Stand</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1565088528\">Enemy_W2_LycanKing_IF_PickUpMarkLycanKing</a>[<span class=\"descriptionNumberColor\">Going Solo</span>]"
            },
            {
              "name": "Update Character Panel Visibility",
              "showKey": "Lycanking"
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1743938491\">Enemy_W2_LycanKing_IF_PickUpHitMark</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__40667951\">Enemy_W2_LycanKing_IF_DisableActionEndMark</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "team": "Enemy Team"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "team": "Enemy Team"
              },
              "failed": [
                {
                  "name": "Assign DEPARTED(Modifier: Standard_Departed)",
                  "groupName": "MuteEntityAction"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "=",
                        "value2": 4
                      }
                    }
                  ]
                },
                "flagName": "Break",
                "justAddedOrLiving": true
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-480380135\">Enemy_W2_LycanKing_IF_DisableAction</a>[<span class=\"descriptionNumberColor\">Departed</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "W2_LycanKing_IF"
                },
                {
                  "name": "Lock Target AV",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                },
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "W2_LycanKing_IF"
                },
                {
                  "name": "Lock Target AV",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getBattleEvents]]"
                  },
                  "isLock": false
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "=",
                        "value2": 4
                      }
                    }
                  ]
                },
                "flagName": "Break",
                "justAddedOrLiving": true
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"40667951\">Enemy_W2_LycanKing_IF_DisableActionEndMark</a>"
                }
              ]
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
              "modifier": "<a class=\"gModGreen\" id=\"848754639\">Enemy_W2_LycanKing_IF_ChampionMark</a>[<span class=\"descriptionNumberColor\">Blood Surge</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                "Mark Entity as Non-Target(Unselectable)",
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "W2_LycanKing_IF",
                  "state": false
                },
                {
                  "name": "Lock Target AV",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ],
              "failed": [
                {
                  "name": "Assign DEPARTED(Modifier: Standard_Departed)",
                  "groupName": "MuteEntityAction"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Targets in the Departed state cannot be designated as ability targets and will not appear in the Action Order.",
      "type": "Other",
      "effectName": "Departed",
      "statusName": "Departed"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__268414254\">W2_LycanKing_BattleScore2Mark</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-535542021\">W2_LycanKing_BattleScore2</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Achievement",
              "relatedAchievements": [
                {
                  "title": "Veiled Moon, Ceased Sheen",
                  "desc": "Hoolay could not unleash \"Lupine Chase Calls Bloody Gleam\" in Moon Rage's duration",
                  "rarity": "Low"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-518764402\">W2_LycanKing_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__167"
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
                    },
                    "invertCondition": true
                  }
                ]
              },
              "noTargetFound": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Lone Wolf's Howl",
                      "desc": "There are no other Wolftrooper enemies on the field when Hoolay triggers Moon Rage",
                      "rarity": "Low"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-2068184553\">Enemy_W2_LycanKing_RageEffect</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__168"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 3
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__168",
                        "invertCondition": true
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "HP_Bars_Remaining",
                            "compareType": ">=",
                            "value2": 2
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1370655977\">Enemy_W2_LycanKing_MainStoryPhase2Mark</a>"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__168"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 3
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__168",
                        "invertCondition": true
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "HP_Bars_Remaining",
                            "compareType": ">=",
                            "value2": 2
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1370655977\">Enemy_W2_LycanKing_MainStoryPhase2Mark</a>"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]"
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1708829325\">Enemy_W2_LycanKing_RageEffectFadeout</a>"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
              },
              "passed": [
                "Modifier Deletes Itself"
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1708829325\">Enemy_W2_LycanKing_RageEffectFadeout</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__563066245\">Enemy_W2_LycanKing_BloodRageMark</a>[<span class=\"descriptionNumberColor\">Irate</span>]",
      "stackType": "Replace",
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
                "value1": null,
                "compareType": "<=",
                "value2": 0,
                "valueType": "Layer"
              },
              "passed": [
                "Modifier Deletes Itself"
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-2054251220\">Enemy_W2_LycanKing_BloodRage</a>"
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
        "MDF_BloodRageCountRemain",
        "MDF_BloodRageCountBefore"
      ],
      "description": "Hoolay currently possesses <span class=\"descriptionNumberColor\">MDF_Layer</span> stack(s) of Irate.",
      "type": "Other",
      "effectName": "Irate",
      "statusName": "Irate",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__435779874\">Monster_W2_LycanKing_RefreshEnergyBar</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (WolfBoss_BloodRageCount) || RETURN",
                "displayLines": "WolfBoss_BloodRageCount",
                "constants": [],
                "variables": [
                  "WolfBoss_BloodRageCount"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (WolfBoss_BloodRageMaxCount) || RETURN",
                "displayLines": "WolfBoss_BloodRageMaxCount",
                "constants": [],
                "variables": [
                  "WolfBoss_BloodRageMaxCount"
                ]
              },
              "assignState": "True",
              "barType": "Hulei"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MDF_BloodRageCountRemain",
        "MDF_BloodRageCountBefore"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-717129648\">Enemy_W2_LycanKing_RageStatusEnhanceSelf</a>[<span class=\"descriptionNumberColor\">Lupine Lord's Majesty</span>]",
      "stackType": "Replace",
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
                "value1": null,
                "compareType": "<=",
                "value2": 0,
                "valueType": "Layer"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "description": "Hoolay's SPD increases by <span class=\"descriptionNumberColor\">MDF_SpeedAddRatioPerLayer</span> due to the presence of Sableclaw Wolftrooper and Eclipse Wolftrooper on the field.",
      "type": "Buff",
      "effectName": "Lupine Lord's Majesty",
      "statusName": "Lupine Lord's Majesty",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1729331430\">Enemy_W2_LycanKing_RageStatusEnhance</a>[<span class=\"descriptionNumberColor\">Lupine Lord's Majesty</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [
        "MDF_SpeedAddRatio"
      ],
      "latentQueue": [],
      "description": "When entering Moon Rage, the effect of Moon Rage will be Enhanced.",
      "type": "Buff",
      "effectName": "Lupitoxin",
      "statusName": "Lupine Lord's Majesty"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__545997619\">Monster_W2_LycanKing_Revive</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "silent": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Wolf_AttackCount) || RETURN",
                    "displayLines": "Wolf_AttackCount",
                    "constants": [],
                    "variables": [
                      "Wolf_AttackCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                    "displayLines": "Wolf_MaxAttackCount",
                    "constants": [],
                    "variables": [
                      "Wolf_MaxAttackCount"
                    ]
                  },
                  "assignState": "True",
                  "state": "Normal"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
                }
              ]
            },
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"979801477\">Monster_Standard_Endurance</a>"
            },
            {
              "name": "Set Enemy Phase",
              "mode": "Inc"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__168"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W2_LycanKing_RLBoss_PassiveAbility_Insert",
                  "priorityTag": "MonsterChangePhase",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W2_LycanKing_PassiveAbility_Insert",
                  "priorityTag": "MonsterChangePhase",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}