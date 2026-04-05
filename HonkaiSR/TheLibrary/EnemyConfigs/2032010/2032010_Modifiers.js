const configAbility = {
  "fileName": "2032010_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-136426635\">W2_Lycan_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Achievement",
              "relatedAchievements": [
                {
                  "title": "No Words for the Moon",
                  "desc": "Before the Moon Rage countdown ends, all enemies on the field have their Moon Rage dispelled",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "isRaging",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "isRaging",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-826569398\">Enemy_W2_Lycan_RageStatusPhase03</a>"
              },
              "failed": [
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
                "Modifier Deletes Itself"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1414738413\">Enemy_W2_Lycan_RagePhase1Mark</a>[<span class=\"descriptionNumberColor\">Bloodlust</span>]",
      "stackType": "Replace",
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
                "value": "ENEMIES_OBJECT_UNUSED__169"
              },
              "ifTargetFound": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "<span class=\"descriptionNumberColor\">MDF_Layer</span> stack(s) of \"Bloodlust\" have been applied. The \"Bloodlust\" stacks and their stack limit for all enemy units that can enter \"Lunar Devourer\" will be kept the same."
                }
              ]
            }
          ]
        }
      ],
      "description": "Apply <span class=\"descriptionNumberColor\">MDF_Layer</span> stack(s) of Bloodlust. The Bloodlust stacks and stack limits for enemy units that can enter Moon Rage will be kept consistent.",
      "type": "Other",
      "effectName": "Bloodlust",
      "statusName": "Bloodlust",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1787691973\">Enemy_W2_Lycan_RageMarkInRage</a>",
      "stackType": "Replace",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1346076887\">Enemy_W2_Lycan_RageStartMark</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1905621078\">Enemy_W2_Lycan_RageControllerV2</a>",
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
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-645995038\">Enemy_W2_LycanMecha_BattleCryTag</a>"
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
              "name": "Preload Battle Event(s)",
              "eventID": [
                20009
              ]
            },
            {
              "name": "Add Stage Ability",
              "abilityName": "BattleEventAbility_Monster_Lycan_RageStart",
              "parameters": {}
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
                "name": "AND",
                "conditionList": [
                  {
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
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-645995038\">Enemy_W2_LycanMecha_BattleCryTag</a>",
                    "invertCondition": true
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
                },
                {
                  "name": "Add Stage Ability",
                  "abilityName": "BattleEventAbility_Monster_Lycan_RageFinish",
                  "parameters": {
                    "MaxRageCount": {
                      "operator": "Variables[0] (MaxAttackCount) || RETURN",
                      "displayLines": "MaxAttackCount",
                      "constants": [],
                      "variables": [
                        "MaxAttackCount"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1414738413\">Enemy_W2_Lycan_RagePhase1Mark</a>[<span class=\"descriptionNumberColor\">Bloodlust</span>]"
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
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "Wolf_AttackCount",
                      "value": 0
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
                            "compareType": "=",
                            "value2": 4
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_CTRL",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "Break",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "flagName": "DisableAction",
                                "invertCondition": true
                              }
                            ]
                          }
                        ]
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
                            "modifier": "<a class=\"gModGreen\" id=\"-655371918\">Enemy_W2_LycanKing_FirstTimeRageMark</a>"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-655371918\">Enemy_W2_LycanKing_FirstTimeRageMark</a>"
                            },
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "Monster_W2_LycanKing_Ability07_MainStroy_Part01",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "priorityTag": "EnemyChangeState",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "valuePerStack": {
                                "MaxWolfRank": 4
                              },
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
                              "abilityName": "Monster_W2_LycanKing_Ability07_Part01",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "priorityTag": "EnemyChangeState",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "valuePerStack": {
                                "MaxWolfRank": 4
                              },
                              "allowAbilityTriggers": false
                            }
                          ]
                        }
                      ],
                      "noTargetFound": [
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
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "compareType": "=",
                                "value2": 3
                              },
                              {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_CTRL",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "Break",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "flagName": "DisableAction",
                                    "invertCondition": true
                                  }
                                ]
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
                              "abilityName": "Monster_W2_LycanMecha_Ability03_Part01",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "priorityTag": "EnemyChangeState",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "valuePerStack": {
                                "MaxWolfRank": 3
                              },
                              "allowAbilityTriggers": false
                            }
                          ],
                          "failed": [
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
                                    "name": "Compare: Monster Rank",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "compareType": "=",
                                    "value2": 3
                                  },
                                  {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_CTRL",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "Break",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Modifier Holder}}"
                                        },
                                        "flagName": "DisableAction",
                                        "invertCondition": true
                                      }
                                    ]
                                  }
                                ]
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Inject Ability Use",
                                  "condition": {
                                    "name": "Insert Ability Condition",
                                    "type": "AbilityOwnerInsertUnusedCount",
                                    "typeValue": 1
                                  },
                                  "abilityName": "Monster_W2_LycanMecha_Ability03_Part01",
                                  "abilitySource": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "abilityTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "priorityTag": "EnemyChangeState",
                                  "canHitNonTargets": true,
                                  "showInActionOrder": true,
                                  "valuePerStack": {
                                    "MaxWolfRank": 3
                                  },
                                  "allowAbilityTriggers": false
                                }
                              ],
                              "noTargetFound": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Check Boolean Value",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "value": "ENEMIES_OBJECT_UNUSED__167"
                                  },
                                  "passed": [
                                    {
                                      "name": "Inject Ability Use",
                                      "condition": {
                                        "name": "Insert Ability Condition",
                                        "type": "AbilityOwnerInsertUnusedCount",
                                        "typeValue": 1
                                      },
                                      "abilityName": "BattleEventAbility_Monster_Lycan_RageStart",
                                      "abilitySource": {
                                        "name": "Target Name",
                                        "target": "{{Level Entity}}"
                                      },
                                      "abilityTarget": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "priorityTag": "EnemyChangeState",
                                      "canHitNonTargets": true,
                                      "valuePerStack": {
                                        "MaxWolfRank": 2
                                      },
                                      "allowAbilityTriggers": false
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Find New Target",
                                      "from": {
                                        "name": "Target Name",
                                        "target": "{{Enemy Team All}}"
                                      },
                                      "searchRandom": true,
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
                                          }
                                        ]
                                      },
                                      "ifTargetFound": [
                                        {
                                          "name": "Inject Ability Use",
                                          "condition": {
                                            "name": "Insert Ability Condition",
                                            "type": "AbilityOwnerInsertUnusedCount",
                                            "typeValue": 1
                                          },
                                          "abilityName": "BattleEventAbility_Monster_Lycan_RageStart",
                                          "abilitySource": {
                                            "name": "Target Name",
                                            "target": "{{Level Entity}}"
                                          },
                                          "abilityTarget": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "priorityTag": "EnemyChangeState",
                                          "canHitNonTargets": true,
                                          "valuePerStack": {
                                            "MaxWolfRank": 2
                                          },
                                          "allowAbilityTriggers": false
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
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-645995038\">Enemy_W2_LycanMecha_BattleCryTag</a>"
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
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1726527858\">Enemy_W2_Lycan_RageEffectMark</a>",
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}