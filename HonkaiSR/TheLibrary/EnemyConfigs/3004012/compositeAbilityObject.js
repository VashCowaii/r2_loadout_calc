const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3004012,
  "trimCharacterName": 3004012,
  "abilityList": [
    "3004012_Monster_W3_DollElite_Standard_BattleEvent",
    "3004012_Monster_W3_DollElite_Standard_Ability04_Insert_Explode",
    "3004012_Monster_W3_DollElite_Standard_Ability03_Insert_Transform",
    "3004012_Monster_W3_DollElite_Standard_Ability02_Insert_RestartPhase2",
    "3004012_Monster_W3_DollElite_Standard_Ability02_Insert_Restart",
    "3004012_Monster_W3_DollElite_Standard_Ability01_Insert_EnterCombat",
    "3004012_WMonster_W3_DollElite01_PassiveAbility02_Insert",
    "3004012_WMonster_W3_DollElite01_PassiveAbility01_Insert",
    "3004012_Monster_W3_FigureBoss_New_PassiveAbility_Initiate",
    "3004012_WMonster_W3_DollElite01_PassiveAbility_Initiate",
    "3004012_Monster_W3_Figure_Solo_PassiveAbility_Initiate",
    "3004012_Monster_W3_FigureBoss_PassiveAbility_BGM",
    "3004012_Modifiers",
    "3004012_Functions",
    "3004012_BE_BattleEvents"
  ],
  "abilityObject": {
    "3004012_Monster_W3_DollElite_Standard_BattleEvent": {
      "fileName": "3004012_Monster_W3_DollElite_Standard_BattleEvent",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1671905329\">Enemy_W3_DollElite_Standard_BattleEvent</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1671905329\">Enemy_W3_DollElite_Standard_BattleEvent</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
                        "compareType": "<=",
                        "value2": 4
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
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_00"
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_01"
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_02"
                          }
                        ]
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Break"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_CTRL"
                          }
                        ]
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "multiBase": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertCount",
                        "typeValue": 1
                      },
                      "abilityName": "Monster_W3_DollElite_Standard_Ability02_Insert_RestartPhase2",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterChangeState",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_00"
                              },
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_01"
                              },
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_02"
                              }
                            ]
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Break"
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Exit Broken-State",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Reset Toughness",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
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
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_00"
                              },
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_01"
                              },
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_02"
                              }
                            ]
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_CTRL"
                          }
                        ]
                      },
                      "ifTargetFound": [
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
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
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
                              "name": "Check Boolean Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "value": "W3_Figure_02"
                            }
                          }
                        ]
                      },
                      "multiBase": 1.333
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
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
                              "name": "Check Boolean Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "value": "W3_Figure_00"
                            }
                          }
                        ]
                      },
                      "multiBase": 0.0009999999
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
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
                              "name": "Check Boolean Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "value": "W3_Figure_01"
                            }
                          }
                        ]
                      },
                      "multiBase": 0.667
                    },
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Check Boolean Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "value": "W3_Figure_02"
                            }
                          }
                        ]
                      },
                      "ability": "Monster_W3_Figure_02_Ability07_Part00",
                      "isTrigger": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"851149437\">Enemy_W3_DollElite_Commnon_TheChosenOneEffect</a>"
                    },
                    "Wait for Pending Ability Completions"
                  ]
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
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (BE_P1_BESpeed) || RETURN",
                    "displayLines": "BE_P1_BESpeed",
                    "constants": [],
                    "variables": [
                      "BE_P1_BESpeed"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
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
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_00"
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_01"
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_02"
                          }
                        ]
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1775147687\">RedStanceState</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "P2_BreakDelayRatioPerFigure"
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
    "3004012_Monster_W3_DollElite_Standard_Ability04_Insert_Explode": {
      "fileName": "3004012_Monster_W3_DollElite_Standard_Ability04_Insert_Explode",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W3_Figure_00"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W3_Figure_01"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W3_Figure_02"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1855037437\">Enemy_W3_Figure_02_SuperArmorBreak</a>"
            },
            {
              "name": "Looped Event",
              "maxLoops": 4,
              "Event": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (P3_ExploreDamagePercentage) || Constants[0] (4) || DIV || RETURN",
                    "displayLines": "(P3_ExploreDamagePercentage / 4)",
                    "constants": [
                      4
                    ],
                    "variables": [
                      "P3_ExploreDamagePercentage"
                    ]
                  },
                  "DamageType": {
                    "name": "Damage Type Source",
                    "sourceType": "AllType"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
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
                  "name": "OR",
                  "conditionList": [
                    {
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "W3_Figure_00"
                    },
                    {
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "W3_Figure_01"
                    },
                    {
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "W3_Figure_02"
                    }
                  ]
                }
              }
            ]
          },
          "advanceType": "Set",
          "multiAdd": "P4_ExploreDelayRatio"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "OR",
                  "conditionList": [
                    {
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "W3_Figure_00"
                    },
                    {
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "W3_Figure_01"
                    },
                    {
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "W3_Figure_02"
                    }
                  ]
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"1389138668\">Enemy_W3_DollElite_Standard_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "valuePerStack": {
            "MDF_ExploreDamageUpRatio": {
              "operator": "Variables[0] (P5_ExploreDamageUpRatio) || RETURN",
              "displayLines": "P5_ExploreDamageUpRatio",
              "constants": [],
              "variables": [
                "P5_ExploreDamageUpRatio"
              ]
            }
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1389138668\">Enemy_W3_DollElite_Standard_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
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
                    "operator": "Variables[0] (MDF_ExploreDamageUpRatio) || RETURN",
                    "displayLines": "MDF_ExploreDamageUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_ExploreDamageUpRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ExploreDamageUpRatio"
          ],
          "latentQueue": [],
          "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">MDF_ExploreDamageUpRatio</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability",
          "duration": 1
        }
      ]
    },
    "3004012_Monster_W3_DollElite_Standard_Ability03_Insert_Transform": {
      "fileName": "3004012_Monster_W3_DollElite_Standard_Ability03_Insert_Transform",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_00"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_01"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_02"
                  }
                ]
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
              "valuePerStack": {
                "MDF_BreakDelayRatio": {
                  "operator": "Variables[0] (P1_BreakDelayRatio) || RETURN",
                  "displayLines": "P1_BreakDelayRatio",
                  "constants": [],
                  "variables": [
                    "P1_BreakDelayRatio"
                  ]
                },
                "MDF_ChosenOneSpeedUp": {
                  "operator": "Variables[0] (P2_ChosenOneSpeedUp) || RETURN",
                  "displayLines": "P2_ChosenOneSpeedUp",
                  "constants": [],
                  "variables": [
                    "P2_ChosenOneSpeedUp"
                  ]
                },
                "MDF_ExploreDamagePercentage": {
                  "operator": "Variables[0] (P3_ExploreDamagePercentage) || RETURN",
                  "displayLines": "P3_ExploreDamagePercentage",
                  "constants": [],
                  "variables": [
                    "P3_ExploreDamagePercentage"
                  ]
                },
                "MDF_ExploreDelayRatio": {
                  "operator": "Variables[0] (P4_ExploreDelayRatio) || RETURN",
                  "displayLines": "P4_ExploreDelayRatio",
                  "constants": [],
                  "variables": [
                    "P4_ExploreDelayRatio"
                  ]
                },
                "MDF_ExploreDamageUpRatio": {
                  "operator": "Variables[0] (P5_ExploreDamageUpRatio) || RETURN",
                  "displayLines": "P5_ExploreDamageUpRatio",
                  "constants": [],
                  "variables": [
                    "P5_ExploreDamageUpRatio"
                  ]
                }
              }
            }
          ],
          "noTargetFound": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertCount",
                "typeValue": 1
              },
              "abilityName": "Monster_W3_DollElite_Standard_Ability04_Insert_Explode",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "priorityTag": "MonsterChangeState",
              "canHitNonTargets": true,
              "valuePerStack": {
                "P1_BreakDelayRatio": {
                  "operator": "Variables[0] (P1_BreakDelayRatio) || RETURN",
                  "displayLines": "P1_BreakDelayRatio",
                  "constants": [],
                  "variables": [
                    "P1_BreakDelayRatio"
                  ]
                },
                "P2_ChosenOneSpeedUp": {
                  "operator": "Variables[0] (P2_ChosenOneSpeedUp) || RETURN",
                  "displayLines": "P2_ChosenOneSpeedUp",
                  "constants": [],
                  "variables": [
                    "P2_ChosenOneSpeedUp"
                  ]
                },
                "P3_ExploreDamagePercentage": {
                  "operator": "Variables[0] (P3_ExploreDamagePercentage) || RETURN",
                  "displayLines": "P3_ExploreDamagePercentage",
                  "constants": [],
                  "variables": [
                    "P3_ExploreDamagePercentage"
                  ]
                },
                "P4_ExploreDelayRatio": {
                  "operator": "Variables[0] (P4_ExploreDelayRatio) || RETURN",
                  "displayLines": "P4_ExploreDelayRatio",
                  "constants": [],
                  "variables": [
                    "P4_ExploreDelayRatio"
                  ]
                },
                "P5_ExploreDamageUpRatio": {
                  "operator": "Variables[0] (P5_ExploreDamageUpRatio) || RETURN",
                  "displayLines": "P5_ExploreDamageUpRatio",
                  "constants": [],
                  "variables": [
                    "P5_ExploreDamageUpRatio"
                  ]
                }
              },
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3004012_Monster_W3_DollElite_Standard_Ability02_Insert_RestartPhase2": {
      "fileName": "3004012_Monster_W3_DollElite_Standard_Ability02_Insert_RestartPhase2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_00"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_01"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_02"
                  }
                ]
              },
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  }
                ]
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              "ifTargetFound": [
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  }
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_00"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_01"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_02"
                      }
                    ]
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL"
                  }
                ]
              },
              "ifTargetFound": [
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
              "valuePerStack": {
                "MDF_BreakDelayRatio": {
                  "operator": "Variables[0] (P1_BreakDelayRatio) || RETURN",
                  "displayLines": "P1_BreakDelayRatio",
                  "constants": [],
                  "variables": [
                    "P1_BreakDelayRatio"
                  ]
                },
                "MDF_ChosenOneSpeedUp": {
                  "operator": "Variables[0] (P2_ChosenOneSpeedUp) || RETURN",
                  "displayLines": "P2_ChosenOneSpeedUp",
                  "constants": [],
                  "variables": [
                    "P2_ChosenOneSpeedUp"
                  ]
                },
                "MDF_ExploreDamagePercentage": {
                  "operator": "Variables[0] (P3_ExploreDamagePercentage) || RETURN",
                  "displayLines": "P3_ExploreDamagePercentage",
                  "constants": [],
                  "variables": [
                    "P3_ExploreDamagePercentage"
                  ]
                },
                "MDF_ExploreDelayRatio": {
                  "operator": "Variables[0] (P4_ExploreDelayRatio) || RETURN",
                  "displayLines": "P4_ExploreDelayRatio",
                  "constants": [],
                  "variables": [
                    "P4_ExploreDelayRatio"
                  ]
                },
                "MDF_ExploreDamageUpRatio": {
                  "operator": "Variables[0] (P5_ExploreDamageUpRatio) || RETURN",
                  "displayLines": "P5_ExploreDamageUpRatio",
                  "constants": [],
                  "variables": [
                    "P5_ExploreDamageUpRatio"
                  ]
                }
              }
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
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
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "W3_Figure_02"
                    }
                  }
                ]
              },
              "multiBase": 1.33
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
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
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "W3_Figure_00"
                    }
                  }
                ]
              },
              "multiBase": 0.0009999999
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
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
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "W3_Figure_01"
                    }
                  }
                ]
              },
              "multiBase": 0.667
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "W3_Figure_02"
                    }
                  }
                ]
              },
              "ability": "Monster_W3_Figure_02_Ability07_Part00",
              "isTrigger": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"851149437\">Enemy_W3_DollElite_Commnon_TheChosenOneEffect</a>"
            },
            "Wait for Pending Ability Completions"
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3004012_Monster_W3_DollElite_Standard_Ability02_Insert_Restart": {
      "fileName": "3004012_Monster_W3_DollElite_Standard_Ability02_Insert_Restart",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
          "valuePerStack": {
            "MDF_BreakDelayRatio": {
              "operator": "Variables[0] (P1_BreakDelayRatio) || RETURN",
              "displayLines": "P1_BreakDelayRatio",
              "constants": [],
              "variables": [
                "P1_BreakDelayRatio"
              ]
            },
            "MDF_ChosenOneSpeedUp": {
              "operator": "Variables[0] (P2_ChosenOneSpeedUp) || RETURN",
              "displayLines": "P2_ChosenOneSpeedUp",
              "constants": [],
              "variables": [
                "P2_ChosenOneSpeedUp"
              ]
            },
            "MDF_ExploreDamagePercentage": {
              "operator": "Variables[0] (P3_ExploreDamagePercentage) || RETURN",
              "displayLines": "P3_ExploreDamagePercentage",
              "constants": [],
              "variables": [
                "P3_ExploreDamagePercentage"
              ]
            },
            "MDF_ExploreDelayRatio": {
              "operator": "Variables[0] (P4_ExploreDelayRatio) || RETURN",
              "displayLines": "P4_ExploreDelayRatio",
              "constants": [],
              "variables": [
                "P4_ExploreDelayRatio"
              ]
            },
            "MDF_ExploreDamageUpRatio": {
              "operator": "Variables[0] (P5_ExploreDamageUpRatio) || RETURN",
              "displayLines": "P5_ExploreDamageUpRatio",
              "constants": [],
              "variables": [
                "P5_ExploreDamageUpRatio"
              ]
            }
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "3004012_Monster_W3_DollElite_Standard_Ability01_Insert_EnterCombat": {
      "fileName": "3004012_Monster_W3_DollElite_Standard_Ability01_Insert_EnterCombat",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_00"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_01"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_02"
                  }
                ]
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1336534629\">Enemy_W3_DollElite_Commnon_Basic</a>[<span class=\"descriptionNumberColor\">\"Puppets of the Order\"</span>]"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
          "valuePerStack": {
            "MDF_BreakDelayRatio": {
              "operator": "Variables[0] (P1_BreakDelayRatio) || RETURN",
              "displayLines": "P1_BreakDelayRatio",
              "constants": [],
              "variables": [
                "P1_BreakDelayRatio"
              ]
            },
            "MDF_ChosenOneSpeedUp": {
              "operator": "Variables[0] (P2_ChosenOneSpeedUp) || RETURN",
              "displayLines": "P2_ChosenOneSpeedUp",
              "constants": [],
              "variables": [
                "P2_ChosenOneSpeedUp"
              ]
            },
            "MDF_ExploreDamagePercentage": {
              "operator": "Variables[0] (P3_ExploreDamagePercentage) || RETURN",
              "displayLines": "P3_ExploreDamagePercentage",
              "constants": [],
              "variables": [
                "P3_ExploreDamagePercentage"
              ]
            },
            "MDF_ExploreDelayRatio": {
              "operator": "Variables[0] (P4_ExploreDelayRatio) || RETURN",
              "displayLines": "P4_ExploreDelayRatio",
              "constants": [],
              "variables": [
                "P4_ExploreDelayRatio"
              ]
            },
            "MDF_ExploreDamageUpRatio": {
              "operator": "Variables[0] (P5_ExploreDamageUpRatio) || RETURN",
              "displayLines": "P5_ExploreDamageUpRatio",
              "constants": [],
              "variables": [
                "P5_ExploreDamageUpRatio"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 300401000,
            "target": {
              "name": "Add Target by Unique Identifier",
              "identifier": "DollBoss"
            },
            "characterName": null
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_00"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_01"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_02"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1202391577\">Enemy_W3_FigureBoss_SaveModel</a>"
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1202391577\">Enemy_W3_FigureBoss_SaveModel</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3004012_WMonster_W3_DollElite01_PassiveAbility02_Insert": {
      "fileName": "3004012_WMonster_W3_DollElite01_PassiveAbility02_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3004012_WMonster_W3_DollElite01_PassiveAbility01_Insert": {
      "fileName": "3004012_WMonster_W3_DollElite01_PassiveAbility01_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "BreakEndFlag"
        },
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20012,
          "variables": {
            "BE_P1_BESpeed": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "P1_BreakDelayRatio": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "P2_BreakDelayRatioPerFigure": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            }
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Battle Event ID",
            "ID": 20012,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          },
          "ifTargetFound": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": 0
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W3_Figure_00"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W3_Figure_01"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W3_Figure_02"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
              "valuePerStack": {
                "MDF_BreakDelayRatio": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                  "displayLines": "{[Skill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                },
                "MDF_ChosenOneSpeedUp": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                },
                "MDF_ExploreDamagePercentage": {
                  "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                  "displayLines": "{[Skill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[2]]}"
                  ]
                },
                "MDF_ExploreDelayRatio": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                },
                "MDF_ExploreDamageUpRatio": {
                  "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                  "displayLines": "{[Skill01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[4]]}"
                  ]
                }
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2051649734\">Enemy_W3_DollElite_Commnon_DamageSplit</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"911256169\">Enemy_W3_DollElite_Commnon_DamageSplitPhase2</a>",
              "casterAssign": "CasterSelf"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
            }
          ]
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "InsertCheck",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
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
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "W3_Figure_02"
                }
              }
            ]
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 7
        },
        {
          "name": "Declare Custom Variable",
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
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "W3_Figure_00"
                }
              }
            ]
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
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
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "W3_Figure_01"
                }
              }
            ]
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 3
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
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
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "W3_Figure_02"
                }
              }
            ]
          },
          "multiBase": 1.333
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
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
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "W3_Figure_00"
                }
              }
            ]
          },
          "multiBase": 0.0009999999
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
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
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "W3_Figure_01"
                }
              }
            ]
          },
          "multiBase": 0.667
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-48704972\">WMonster_W3_DollElite01_PartController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1198317781\">Enemy_W3_DollElite_Commnon_Part2Break</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W3_Figure_00"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W3_Figure_01"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W3_Figure_02"
              }
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-894175068\">W3_FigureBoss_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-843842211\">W3_FigureBoss_BattleScore2</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3004012_Monster_W3_FigureBoss_New_PassiveAbility_Initiate": {
      "fileName": "3004012_Monster_W3_FigureBoss_New_PassiveAbility_Initiate",
      "childAbilityList": [
        "3004012_Monster_W3_FigureBoss_New_PassiveAbility_Initiate"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1856806253\">Standard_MuteAttachWeakness</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-942301720\">Monster_W3_FigureBoss_New_SummonMonster</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-972729784\">Enemy_W3_DollElite_Boss_Initiate</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-48704972\">WMonster_W3_DollElite01_PartController</a>"
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "DollBoss",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "Monster_W3_DollElite_Standard_Ability01_Insert_EnterCombat",
          "parameters": {
            "P1_BreakDelayRatio": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "P2_ChosenOneSpeedUp": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            },
            "P3_ExploreDamagePercentage": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            },
            "P4_ExploreDelayRatio": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
              ]
            },
            "P5_ExploreDamageUpRatio": {
              "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
              "displayLines": "{[Skill01[4]]}",
              "constants": [],
              "variables": [
                "{[Skill01[4]]}"
              ]
            }
          }
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "Monster_W3_DollElite_Standard_Ability02_Insert_Restart",
          "parameters": {
            "P1_BreakDelayRatio": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "P2_ChosenOneSpeedUp": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            },
            "P3_ExploreDamagePercentage": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            },
            "P4_ExploreDelayRatio": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
              ]
            },
            "P5_ExploreDamageUpRatio": {
              "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
              "displayLines": "{[Skill01[4]]}",
              "constants": [],
              "variables": [
                "{[Skill01[4]]}"
              ]
            }
          }
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "Monster_W3_DollElite_Standard_Ability03_Insert_Transform",
          "parameters": {
            "P1_BreakDelayRatio": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "P2_ChosenOneSpeedUp": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            },
            "P3_ExploreDamagePercentage": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            },
            "P4_ExploreDelayRatio": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
              ]
            },
            "P5_ExploreDamageUpRatio": {
              "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
              "displayLines": "{[Skill01[4]]}",
              "constants": [],
              "variables": [
                "{[Skill01[4]]}"
              ]
            }
          }
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "Monster_W3_DollElite_Standard_Ability04_Insert_Explode",
          "parameters": {
            "P1_BreakDelayRatio": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "P2_ChosenOneSpeedUp": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            },
            "P3_ExploreDamagePercentage": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            },
            "P4_ExploreDelayRatio": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
              ]
            },
            "P5_ExploreDamageUpRatio": {
              "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
              "displayLines": "{[Skill01[4]]}",
              "constants": [],
              "variables": [
                "{[Skill01[4]]}"
              ]
            }
          }
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "Monster_W3_DollElite_Standard_Ability02_Insert_RestartPhase2",
          "parameters": {
            "P1_BreakDelayRatio": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "P2_ChosenOneSpeedUp": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            },
            "P3_ExploreDamagePercentage": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            },
            "P4_ExploreDelayRatio": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
              ]
            },
            "P5_ExploreDamageUpRatio": {
              "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
              "displayLines": "{[Skill01[4]]}",
              "constants": [],
              "variables": [
                "{[Skill01[4]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-366928355\">Enemy_W3_DollElite_Boss_ViewModeListener</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-894175068\">W3_FigureBoss_BattleScore1</a>"
        },
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "DollBoss",
          "state": false
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1856806253\">Standard_MuteAttachWeakness</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1183897502\">Monster_W3_FigureBoss_New_ImmuneDebuff</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1183897502\">Monster_W3_FigureBoss_New_ImmuneDebuff</a>",
          "modifierFlags": [
            "ImmuneDebuff",
            "MuteSpeed"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-942301720\">Monster_W3_FigureBoss_New_SummonMonster</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3004012_WMonster_W3_DollElite01_PassiveAbility_Initiate": {
      "fileName": "3004012_WMonster_W3_DollElite01_PassiveAbility_Initiate",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1856806253\">Standard_MuteAttachWeakness</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-972729784\">Enemy_W3_DollElite_Boss_Initiate</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-48704972\">WMonster_W3_DollElite01_PartController</a>"
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "DollBoss",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "Monster_W3_DollElite_Standard_Ability01_Insert_EnterCombat",
          "parameters": {
            "P1_BreakDelayRatio": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "P2_ChosenOneSpeedUp": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            },
            "P3_ExploreDamagePercentage": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            },
            "P4_ExploreDelayRatio": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
              ]
            },
            "P5_ExploreDamageUpRatio": {
              "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
              "displayLines": "{[Skill01[4]]}",
              "constants": [],
              "variables": [
                "{[Skill01[4]]}"
              ]
            }
          }
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "Monster_W3_DollElite_Standard_Ability02_Insert_Restart",
          "parameters": {
            "P1_BreakDelayRatio": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "P2_ChosenOneSpeedUp": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            },
            "P3_ExploreDamagePercentage": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            },
            "P4_ExploreDelayRatio": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
              ]
            },
            "P5_ExploreDamageUpRatio": {
              "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
              "displayLines": "{[Skill01[4]]}",
              "constants": [],
              "variables": [
                "{[Skill01[4]]}"
              ]
            }
          }
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "Monster_W3_DollElite_Standard_Ability03_Insert_Transform",
          "parameters": {
            "P1_BreakDelayRatio": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "P2_ChosenOneSpeedUp": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            },
            "P3_ExploreDamagePercentage": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            },
            "P4_ExploreDelayRatio": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
              ]
            },
            "P5_ExploreDamageUpRatio": {
              "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
              "displayLines": "{[Skill01[4]]}",
              "constants": [],
              "variables": [
                "{[Skill01[4]]}"
              ]
            }
          }
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "Monster_W3_DollElite_Standard_Ability04_Insert_Explode",
          "parameters": {
            "P1_BreakDelayRatio": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "P2_ChosenOneSpeedUp": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            },
            "P3_ExploreDamagePercentage": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            },
            "P4_ExploreDelayRatio": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
              ]
            },
            "P5_ExploreDamageUpRatio": {
              "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
              "displayLines": "{[Skill01[4]]}",
              "constants": [],
              "variables": [
                "{[Skill01[4]]}"
              ]
            }
          }
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "Monster_W3_DollElite_Standard_Ability02_Insert_RestartPhase2",
          "parameters": {
            "P1_BreakDelayRatio": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "P2_ChosenOneSpeedUp": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            },
            "P3_ExploreDamagePercentage": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            },
            "P4_ExploreDelayRatio": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
              ]
            },
            "P5_ExploreDamageUpRatio": {
              "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
              "displayLines": "{[Skill01[4]]}",
              "constants": [],
              "variables": [
                "{[Skill01[4]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-366928355\">Enemy_W3_DollElite_Boss_ViewModeListener</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-894175068\">W3_FigureBoss_BattleScore1</a>"
        },
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "DollBoss",
          "state": false
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3004012_Monster_W3_Figure_Solo_PassiveAbility_Initiate": {
      "fileName": "3004012_Monster_W3_Figure_Solo_PassiveAbility_Initiate",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3004012_Monster_W3_FigureBoss_PassiveAbility_BGM": {
      "fileName": "3004012_Monster_W3_FigureBoss_PassiveAbility_BGM",
      "childAbilityList": [
        "3004012_Monster_W3_FigureBoss_PassiveAbility_BGM"
      ],
      "skillTrigger": "Passive_BGM",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"419579896\">Enemy_W3_FigureBoss_ResetStageBGM</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__419579896\">Enemy_W3_FigureBoss_ResetStageBGM</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex",
                  "value": "CurWaveIndex"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex2",
                  "value": "CurWaveIndex"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_WaveIndex",
                    "compareType": "NOT=",
                    "value2": {
                      "operator": "Variables[0] (MDF_WaveIndex2) || RETURN",
                      "displayLines": "MDF_WaveIndex2",
                      "constants": [],
                      "variables": [
                        "MDF_WaveIndex2"
                      ]
                    }
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
    "3004012_Modifiers": {
      "fileName": "3004012_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-843842211\">W3_FigureBoss_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W3_FigureBoss_00_BattleScore2_Flag1",
                  "value": 2
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "W3_FigureBoss_00_BattleScore2_Flag1",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "One-Act Play",
                          "desc": "In the second phase of \"The Past, Present, and Eternal Show,\" the enemy uses \"Dance for Synchrony\" at most once",
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
          "latentQueue": [
            "BreakEndFlag",
            "InsertCheck",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-894175068\">W3_FigureBoss_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W3_FigureBoss_00_BattleScore1_Flag1"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W3_FigureBoss_00_BattleScore1_Flag2"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W3_FigureBoss_00_BattleScore1_Flag3"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_00"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "W3_FigureBoss_00_BattleScore1_Flag1",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_01"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "W3_FigureBoss_00_BattleScore1_Flag2",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_02"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "W3_FigureBoss_00_BattleScore1_Flag3",
                          "value": 1
                        }
                      ]
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
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W3_FigureBoss_00_BattleScore1_Flag1",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W3_FigureBoss_00_BattleScore1_Flag2",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W3_FigureBoss_00_BattleScore1_Flag3",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "relatedAchievements": [
                            {
                              "title": "Ensemble Piece",
                              "desc": "In the first phase of \"The Past, Present, and Eternal Show,\" cause #1 enemies to take turns to become Impresario for 1 time",
                              "rarity": "Low",
                              "params": [
                                3
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
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1855037437\">Enemy_W3_Figure_02_SuperArmorBreak</a>",
          "modifierFlags": [
            "STAT_SuperArmorBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1924069150\">Enemy_W3_Figure_02_AIRecorder</a>",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": {
                    "operator": "Variables[0] (MDF_AIFlag) || RETURN",
                    "displayLines": "MDF_AIFlag",
                    "constants": [],
                    "variables": [
                      "MDF_AIFlag"
                    ]
                  }
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "set": {
                    "operator": "Variables[0] (MDF_ActionDelay) || RETURN",
                    "displayLines": "MDF_ActionDelay",
                    "constants": [],
                    "variables": [
                      "MDF_ActionDelay"
                    ]
                  }
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable": "AIFlag",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "MDF_AIFlag"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_ActionDelay",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 10
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "set": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__851149437\">Enemy_W3_DollElite_Commnon_TheChosenOneEffect</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                }
              ]
            },
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"851149437\">Enemy_W3_DollElite_Commnon_TheChosenOneEffect</a>"
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>",
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"851149437\">Enemy_W3_DollElite_Commnon_TheChosenOneEffect</a>"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_ChosenOneSpeedUp) || RETURN",
                    "displayLines": "MDF_ChosenOneSpeedUp",
                    "constants": [],
                    "variables": [
                      "MDF_ChosenOneSpeedUp"
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
                    "value1": "AIFlag",
                    "compareType": "NOT=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 5
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "MDF_BreakDelayRatio"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Add Target by Unique Identifier",
                          "identifier": "DollBoss"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Add Target by Unique Identifier",
                          "identifier": "DollBoss"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
                      },
                      "passed": [
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
                                "name": "OR",
                                "conditionList": [
                                  {
                                    "name": "Check Boolean Value",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "value": "W3_Figure_00"
                                  },
                                  {
                                    "name": "Check Boolean Value",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "value": "W3_Figure_01"
                                  },
                                  {
                                    "name": "Check Boolean Value",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "value": "W3_Figure_02"
                                  }
                                ]
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
                            "Modifier Deletes Itself"
                          ],
                          "noTargetFound": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"851149437\">Enemy_W3_DollElite_Commnon_TheChosenOneEffect</a>"
                            },
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertCount",
                                "typeValue": 1
                              },
                              "abilityName": "Monster_W3_DollElite_Standard_Ability04_Insert_Explode",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "priorityTag": "MonsterChangeState",
                              "canHitNonTargets": true,
                              "valuePerStack": {
                                "P1_BreakDelayRatio": {
                                  "operator": "Variables[0] (MDF_BreakDelayRatio) || RETURN",
                                  "displayLines": "MDF_BreakDelayRatio",
                                  "constants": [],
                                  "variables": [
                                    "MDF_BreakDelayRatio"
                                  ]
                                },
                                "P2_ChosenOneSpeedUp": {
                                  "operator": "Variables[0] (MDF_ChosenOneSpeedUp) || RETURN",
                                  "displayLines": "MDF_ChosenOneSpeedUp",
                                  "constants": [],
                                  "variables": [
                                    "MDF_ChosenOneSpeedUp"
                                  ]
                                },
                                "P3_ExploreDamagePercentage": {
                                  "operator": "Variables[0] (MDF_ExploreDamagePercentage) || RETURN",
                                  "displayLines": "MDF_ExploreDamagePercentage",
                                  "constants": [],
                                  "variables": [
                                    "MDF_ExploreDamagePercentage"
                                  ]
                                },
                                "P4_ExploreDelayRatio": {
                                  "operator": "Variables[0] (MDF_ExploreDelayRatio) || RETURN",
                                  "displayLines": "MDF_ExploreDelayRatio",
                                  "constants": [],
                                  "variables": [
                                    "MDF_ExploreDelayRatio"
                                  ]
                                },
                                "P5_ExploreDamageUpRatio": {
                                  "operator": "Variables[0] (MDF_ExploreDamageUpRatio) || RETURN",
                                  "displayLines": "MDF_ExploreDamageUpRatio",
                                  "constants": [],
                                  "variables": [
                                    "MDF_ExploreDamageUpRatio"
                                  ]
                                }
                              },
                              "allowAbilityTriggers": false
                            }
                          ]
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
                                "name": "OR",
                                "conditionList": [
                                  {
                                    "name": "Check Boolean Value",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "value": "W3_Figure_00"
                                  },
                                  {
                                    "name": "Check Boolean Value",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "value": "W3_Figure_01"
                                  },
                                  {
                                    "name": "Check Boolean Value",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "value": "W3_Figure_02"
                                  }
                                ]
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
                          "noTargetFound": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"851149437\">Enemy_W3_DollElite_Commnon_TheChosenOneEffect</a>"
                            }
                          ]
                        },
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertCount",
                            "typeValue": 1
                          },
                          "conditionActive": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Add Target by Unique Identifier",
                              "identifier": "DollBoss"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": "<",
                            "value2": 2
                          },
                          "abilityName": "Monster_W3_DollElite_Standard_Ability03_Insert_Transform",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "MonsterChangeState",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "P1_BreakDelayRatio": {
                              "operator": "Variables[0] (MDF_BreakDelayRatio) || RETURN",
                              "displayLines": "MDF_BreakDelayRatio",
                              "constants": [],
                              "variables": [
                                "MDF_BreakDelayRatio"
                              ]
                            },
                            "P2_ChosenOneSpeedUp": {
                              "operator": "Variables[0] (MDF_ChosenOneSpeedUp) || RETURN",
                              "displayLines": "MDF_ChosenOneSpeedUp",
                              "constants": [],
                              "variables": [
                                "MDF_ChosenOneSpeedUp"
                              ]
                            },
                            "P3_ExploreDamagePercentage": {
                              "operator": "Variables[0] (MDF_ExploreDamagePercentage) || RETURN",
                              "displayLines": "MDF_ExploreDamagePercentage",
                              "constants": [],
                              "variables": [
                                "MDF_ExploreDamagePercentage"
                              ]
                            },
                            "P4_ExploreDelayRatio": {
                              "operator": "Variables[0] (MDF_ExploreDelayRatio) || RETURN",
                              "displayLines": "MDF_ExploreDelayRatio",
                              "constants": [],
                              "variables": [
                                "MDF_ExploreDelayRatio"
                              ]
                            },
                            "P5_ExploreDamageUpRatio": {
                              "operator": "Variables[0] (MDF_ExploreDamageUpRatio) || RETURN",
                              "displayLines": "MDF_ExploreDamageUpRatio",
                              "constants": [],
                              "variables": [
                                "MDF_ExploreDamageUpRatio"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_BreakDelayRatio",
            "MDF_ChosenOneSpeedUp",
            "MDF_ExploreDamagePercentage",
            "MDF_ExploreDelayRatio",
            "MDF_ExploreDamageUpRatio"
          ],
          "latentQueue": [
            "BreakEndFlag"
          ],
          "description": "An extra action can be taken every turn with a slight increase in SPD.",
          "type": "Buff",
          "effectName": "Impresario",
          "statusName": "Impresario"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1842038910\">Enemy_W3_DollElite_Commnon_BreakController</a>",
          "execute": [
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Action Holder Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "HaveAnyChosenOne"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "HaveAnyChosenOne",
                          "context": "TargetEntity",
                          "value": 1,
                          "max": 5
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
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "HaveAnyChosenOne",
                            "compareType": "=",
                            "value2": 0,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Add Target by Unique Identifier",
                              "identifier": "DollBoss"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": ">=",
                            "value2": 2
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
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
                          "valuePerStack": {
                            "MDF_BreakDelayRatio": {
                              "operator": "Variables[0] (MDF_BreakDelayRatio) || RETURN",
                              "displayLines": "MDF_BreakDelayRatio",
                              "constants": [],
                              "variables": [
                                "MDF_BreakDelayRatio"
                              ]
                            },
                            "MDF_ChosenOneSpeedUp": {
                              "operator": "Variables[0] (MDF_ChosenOneSpeedUp) || RETURN",
                              "displayLines": "MDF_ChosenOneSpeedUp",
                              "constants": [],
                              "variables": [
                                "MDF_ChosenOneSpeedUp"
                              ]
                            },
                            "MDF_ExploreDamagePercentage": {
                              "operator": "Variables[0] (MDF_ExploreDamagePercentage) || RETURN",
                              "displayLines": "MDF_ExploreDamagePercentage",
                              "constants": [],
                              "variables": [
                                "MDF_ExploreDamagePercentage"
                              ]
                            },
                            "MDF_ExploreDelayRatio": {
                              "operator": "Variables[0] (MDF_ExploreDelayRatio) || RETURN",
                              "displayLines": "MDF_ExploreDelayRatio",
                              "constants": [],
                              "variables": [
                                "MDF_ExploreDelayRatio"
                              ]
                            },
                            "MDF_ExploreDamageUpRatio": {
                              "operator": "Variables[0] (MDF_ExploreDamageUpRatio) || RETURN",
                              "displayLines": "MDF_ExploreDamageUpRatio",
                              "constants": [],
                              "variables": [
                                "MDF_ExploreDamageUpRatio"
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1336534629\">Enemy_W3_DollElite_Commnon_Basic</a>[<span class=\"descriptionNumberColor\">\"Puppets of the Order\"</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Puppets controlled by Order. Can become Impresario.",
          "type": "Other",
          "effectName": "\"Puppets of the Order\"",
          "statusName": "\"Puppets of the Order\""
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1198317781\">Enemy_W3_DollElite_Commnon_Part2Break</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Trigger 0-Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "BreakEndFlag",
            "InsertCheck",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__911256169\">Enemy_W3_DollElite_Commnon_DamageSplitPhase2</a>",
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 300401000,
                        "target": {
                          "name": "Add Target by Unique Identifier",
                          "identifier": "DollBoss"
                        },
                        "characterName": null
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Lock HP",
                      "threshold": 0.0009999999
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "BreakEndFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2051649734\">Enemy_W3_DollElite_Commnon_DamageSplit</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999
                }
              ]
            },
            {
              "eventTrigger": "Waiting for Healing in Limbo"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1064046612\">Enemy_W3_DollElite_Commnon_BossEnhance</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Battle Event List}}"
                  },
                  "conditions": {
                    "name": "Battle Event ID",
                    "ID": 20012,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Destroy Battle Entity",
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
                        "name": "Enemy ID",
                        "ID": 300401000,
                        "target": {
                          "name": "Add Target by Unique Identifier",
                          "identifier": "DollBoss"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Add Target by Unique Identifier",
                          "identifier": "DollBoss"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
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
                      "searchRandom": true,
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_00"
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_01"
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_02"
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "Break"
                              }
                            ]
                          }
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-48704972\">WMonster_W3_DollElite01_PartController</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-882985814\">RuanMei_PassiveArea_EnemyCD</a>"
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "searchRandom": true,
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_00"
                              },
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_01"
                              },
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_02"
                              }
                            ]
                          },
                          "ifTargetFound": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "OR",
                                "conditionList": [
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "Break"
                                  }
                                ]
                              }
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                            },
                            {
                              "name": "Dispel Debuffs",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "silent": true
                            },
                            {
                              "name": "Dispel Debuffs",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          ]
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "WMonster_W3_DollElite01_PassiveAbility01_Insert",
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-366928355\">Enemy_W3_DollElite_Boss_ViewModeListener</a>",
          "execute": [
            {
              "eventTrigger": "Enter View-Mode [Anyone]"
            },
            {
              "eventTrigger": "Exit View-Mode [Anyone]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-972729784\">Enemy_W3_DollElite_Boss_Initiate</a>",
          "modifierFlags": [
            "MuteSpeed",
            "ImmuneDebuff"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Create Shared HP Group",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isRemove": true
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_00"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_01"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_02"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)",
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stayInTeam": false
                },
                {
                  "name": "Boss Bar Display",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1064046612\">Enemy_W3_DollElite_Commnon_BossEnhance</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-942301720\">Monster_W3_FigureBoss_New_SummonMonster</a>"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (SummonList_ADF_3) || RETURN",
                            "displayLines": "SummonList_ADF_3",
                            "constants": [],
                            "variables": [
                              "SummonList_ADF_3"
                            ]
                          },
                          "locationType": "Last"
                        }
                      ]
                    },
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (SummonList_ADF_2) || RETURN",
                            "displayLines": "SummonList_ADF_2",
                            "constants": [],
                            "variables": [
                              "SummonList_ADF_2"
                            ]
                          },
                          "locationType": "Last"
                        }
                      ]
                    },
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
                            "displayLines": "SummonList_ADF_1",
                            "constants": [],
                            "variables": [
                              "SummonList_ADF_1"
                            ]
                          },
                          "locationType": "Last"
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_00"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_01"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_02"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2051649734\">Enemy_W3_DollElite_Commnon_DamageSplit</a>",
                      "casterAssign": "CasterSelf"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1842038910\">Enemy_W3_DollElite_Commnon_BreakController</a>",
                      "valuePerStack": {
                        "MDF_BreakDelayRatio": {
                          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                          "displayLines": "{[Skill01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill01[0]]}"
                          ]
                        },
                        "MDF_ChosenOneSpeedUp": {
                          "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                          "displayLines": "{[Skill01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill01[1]]}"
                          ]
                        },
                        "MDF_ExploreDamagePercentage": {
                          "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                          "displayLines": "{[Skill01[2]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill01[2]]}"
                          ]
                        },
                        "MDF_ExploreDelayRatio": {
                          "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                          "displayLines": "{[Skill01[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill01[3]]}"
                          ]
                        },
                        "MDF_ExploreDamageUpRatio": {
                          "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                          "displayLines": "{[Skill01[4]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill01[4]]}"
                          ]
                        }
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_00"
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_01"
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_02"
                          }
                        ]
                      },
                      {
                        "name": "Is Related Summoned Entity",
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
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"911256169\">Enemy_W3_DollElite_Commnon_DamageSplitPhase2</a>",
                          "casterAssign": "CasterSelf"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2051649734\">Enemy_W3_DollElite_Commnon_DamageSplit</a>",
                          "casterAssign": "CasterSelf"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1842038910\">Enemy_W3_DollElite_Commnon_BreakController</a>",
                      "valuePerStack": {
                        "MDF_BreakDelayRatio": {
                          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                          "displayLines": "{[Skill01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill01[0]]}"
                          ]
                        },
                        "MDF_ChosenOneSpeedUp": {
                          "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                          "displayLines": "{[Skill01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill01[1]]}"
                          ]
                        },
                        "MDF_ExploreDamagePercentage": {
                          "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                          "displayLines": "{[Skill01[2]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill01[2]]}"
                          ]
                        },
                        "MDF_ExploreDelayRatio": {
                          "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                          "displayLines": "{[Skill01[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill01[3]]}"
                          ]
                        },
                        "MDF_ExploreDamageUpRatio": {
                          "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                          "displayLines": "{[Skill01[4]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill01[4]]}"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_00"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_01"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_02"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Create Shared HP Group",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "subTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W3_DollElite_Standard_Ability01_Insert_EnterCombat",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "abilityTarget": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Is Part Of Team Location",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "team": "Enemy Team",
                          "location": "Pos2"
                        }
                      }
                    ]
                  },
                  "priorityTag": "MonsterBattleCry",
                  "canHitNonTargets": true,
                  "valuePerStack": {
                    "P1_BreakDelayRatio": {
                      "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                      "displayLines": "{[Skill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[0]]}"
                      ]
                    },
                    "P2_ChosenOneSpeedUp": {
                      "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                      "displayLines": "{[Skill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[1]]}"
                      ]
                    },
                    "P3_ExploreDamagePercentage": {
                      "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                      "displayLines": "{[Skill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[2]]}"
                      ]
                    },
                    "P4_ExploreDelayRatio": {
                      "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                      "displayLines": "{[Skill01[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[3]]}"
                      ]
                    },
                    "P5_ExploreDamageUpRatio": {
                      "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                      "displayLines": "{[Skill01[4]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[4]]}"
                      ]
                    }
                  },
                  "allowAbilityTriggers": false
                }
              ],
              "priorityLevel": -91
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    },
    "3004012_Functions": {
      "fileName": "3004012_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-210738989\">FigureBossStartCamera</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Add Target by Unique Identifier",
                "identifier": "DollBoss"
              },
              "ifTargetFound": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PauseLevelForCameraPerform",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PauseLevelForCameraPerform"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PauseLevelForCameraPerform",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PauseLevelForCameraPerform"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "3004012_BE_BattleEvents": {
      "fileName": "3004012_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 20012,
          "team": "Enemy Team",
          "eventType": "Assist",
          "abilityList": [
            "Monster_W3_DollElite_Standard_BattleEvent"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevelEvent": true
        }
      ],
      "references": []
    }
  }
}