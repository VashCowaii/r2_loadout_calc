const configAbility = {
  "fileName": "61001_Heliobus_Action_Ability",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Battle Event",
      "teamName": "Player Team",
      "eventID": {
        "operator": "Variables[0] (#ADF_1) || RETURN",
        "displayLines": "#ADF_1",
        "constants": [],
        "variables": [
          "#ADF_1"
        ]
      },
      "variables": null
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1448807942\">Modifier_Heliobus_Action_Ability</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Stage Type",
        "stageType": "Heliobus"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"117507254\">Modifier_Achievement30067</a>"
        },
        {
          "name": "Define Custom Variable with Varying Data",
          "target": null,
          "variableName": "_TurnLimit"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-493482030\">Modifier_ExtraSP</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_MaxSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "operator": "Variables[0] (MDF_MaxSP) || Variables[1] (#ADF_2) || DIV || RETURN",
                "displayLines": "(MDF_MaxSP / #ADF_2)",
                "constants": [],
                "variables": [
                  "MDF_MaxSP",
                  "#ADF_2"
                ]
              },
              "isFixed": "* ERR"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-493482030\">Modifier_ExtraSP</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1448807942\">Modifier_Heliobus_Action_Ability</a>",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "$type": "RPG.GameCore.ChangeIncomingActionCountDown",
              "Offset": {
                "IsDynamic": false,
                "FixedValue": {
                  "Value": 0
                }
              }
            },
            {
              "$type": "RPG.GameCore.ActionCountDownPreview",
              "Mode": "TurnWithUltra"
            }
          ]
        },
        {
          "eventTrigger": "Action End [Anyone]",
          "execute": [
            {
              "$type": "RPG.GameCore.SetDynamicValueByActionCountDown",
              "DynamicKey": "_CurrentCountDown"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "_CountFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Has Queued Ult"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "OneMore",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "$type": "RPG.GameCore.ConsumeActionCountDown"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_CountFlag",
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
                            "value1": "_CurrentCountDown",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "$type": "RPG.GameCore.ChangeIncomingActionCountDown",
                          "Offset": {
                            "IsDynamic": true,
                            "PostfixExpr": {
                              "OpCodes": "AQAAAAIR",
                              "FixedValues": [
                                {
                                  "Value": 1
                                }
                              ],
                              "DynamicHashes": [
                                1020727647
                              ]
                            }
                          }
                        },
                        {
                          "$type": "RPG.GameCore.ConsumeActionCountDown"
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
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "_CountFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Is Entity a Battle Event/Summon",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Current Turn Owner}}"
                      },
                      "expectedType": "Challenge Event"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "$type": "RPG.GameCore.ConsumeActionCountDown"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_CountFlag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "$type": "RPG.GameCore.ByHasInsertAbilityPending",
                        "Inverse": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "$type": "RPG.GameCore.ConsumeActionCountDown"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_InsertWaitFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ultimate [Anyone]: Start[?]",
          "execute": [
            {
              "$type": "RPG.GameCore.SetDynamicValueByWaitUltraCount",
              "DynamicKey": "_CurrentUltraWait"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_CurrentUltraWait",
              "value": {
                "operator": "Variables[0] (_CurrentUltraWait) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_CurrentUltraWait - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_CurrentUltraWait"
                ]
              }
            },
            {
              "$type": "RPG.GameCore.SetDynamicValueByActionCountDown",
              "DynamicKey": "_CurrentCountDown"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "_CurrentUltraWait",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (_InsertWaitFlag) || Constants[0] (1) || SUB || RETURN",
                      "displayLines": "(_InsertWaitFlag - 1)",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "_InsertWaitFlag"
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (_CurrentUltraWait) || RETURN",
                    "displayLines": "_CurrentUltraWait",
                    "constants": [],
                    "variables": [
                      "_CurrentUltraWait"
                    ]
                  },
                  "Event": [
                    {
                      "$type": "RPG.GameCore.ConsumeActionCountDown"
                    }
                  ]
                },
                {
                  "$type": "RPG.GameCore.ChangeIncomingActionCountDown",
                  "Offset": {
                    "IsDynamic": true,
                    "PostfixExpr": {
                      "OpCodes": "AQAR",
                      "FixedValues": [],
                      "DynamicHashes": [
                        1020727647
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "$type": "RPG.GameCore.ByHasInsertAbilityPending",
                    "Inverse": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_InsertWaitFlag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "$type": "RPG.GameCore.ConsumeActionCountDown"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_InsertWaitFlag",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action Countdown Active [Anyone][?]",
          "execute": [
            {
              "$type": "RPG.GameCore.ChangeIncomingActionCountDown",
              "Offset": {
                "IsDynamic": false,
                "FixedValue": {
                  "Value": 0
                }
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Battle Event ID",
                    "ID": "#ADF_1",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-493482030\">Modifier_ExtraSP</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Battle Event List}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Battle Event ID",
                        "ID": "#ADF_1",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "MDF_MaxSP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                        },
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": {
                            "operator": "Variables[0] (MDF_MaxSP) || Variables[1] (#ADF_2) || DIV || RETURN",
                            "displayLines": "(MDF_MaxSP / #ADF_2)",
                            "constants": [],
                            "variables": [
                              "MDF_MaxSP",
                              "#ADF_2"
                            ]
                          },
                          "isFixed": "* ERR"
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
      "for": "<a class=\"gModGreen\" id=\"mod__117507254\">Modifier_Achievement30067</a>",
      "execute": [
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
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1858063914\">Modifier_Achievement30067_Character</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Leave Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": "Battle was Victory",
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "The Real Exorcist",
                      "desc": "Complete any Exorcismal Chronicle stages without taking DMG",
                      "rarity": "Low",
                      "type": "Hidden until Completion"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1858063914\">Modifier_Achievement30067_Character</a>",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable with Damage Data",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "DamageAmount"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "DamageAmount",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"117507254\">Modifier_Achievement30067</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1858063914\">Modifier_Achievement30067_Character</a>"
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