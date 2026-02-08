const configAbility = {
  "fileName": "8002089_Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Fengrao_02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
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
            "flagName": "STAT_CTRL",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "DisableAction",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Break",
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
          "modifier": "<a class=\"gModGreen\" id=\"2041908574\">Enemy_XP_Minion04_02_Fengrao_02_Caster</a>",
          "counter": {
            "operator": "Variables[0] (Enemy_XP_Minion04_02_Fengrao_02_Caster) || RETURN",
            "displayLines": "Enemy_XP_Minion04_02_Fengrao_02_Caster",
            "constants": [],
            "variables": [
              "Enemy_XP_Minion04_02_Fengrao_02_Caster"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1435692684\">Enemy_XP_Minion04_02_Fengrao_02_Minion</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1435692684\">Enemy_XP_Minion04_02_Fengrao_02_Minion</a>"
        }
      ],
      "failed": [
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "Skill04",
          "passed": [
            {
              "name": "Animation Task"
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2041908574\">Enemy_XP_Minion04_02_Fengrao_02_Caster</a>",
                  "counter": {
                    "operator": "Variables[0] (Enemy_XP_Minion04_02_Fengrao_02_Caster) || RETURN",
                    "displayLines": "Enemy_XP_Minion04_02_Fengrao_02_Caster",
                    "constants": [],
                    "variables": [
                      "Enemy_XP_Minion04_02_Fengrao_02_Caster"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1435692684\">Enemy_XP_Minion04_02_Fengrao_02_Minion</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1435692684\">Enemy_XP_Minion04_02_Fengrao_02_Minion</a>"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2041908574\">Enemy_XP_Minion04_02_Fengrao_02_Caster</a>",
      "counter": 100,
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1435692684\">Enemy_XP_Minion04_02_Fengrao_02_Minion</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1435692684\">Enemy_XP_Minion04_02_Fengrao_02_Minion</a>"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "CurrentCount",
              "value": 0
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1935414098\">Enemy_XP_Minion04_02_Fengrao_02_Minion_Hit</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<",
                    "value2": 1
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "CostCount"
                },
                {
                  "name": "Looped Event",
                  "maxLoops": 10,
                  "Event": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CostCount",
                        "compareType": "<",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "CurrentCount",
                          "value": {
                            "operator": "Variables[0] (CurrentCount) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(CurrentCount + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "CurrentCount"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "CostCount",
                          "value": {
                            "operator": "Variables[0] (CostCount) || Constants[0] (0.1) || ADD || RETURN",
                            "displayLines": "(CostCount + 0.1)",
                            "constants": [
                              0.1
                            ],
                            "variables": [
                              "CostCount"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "healPercent": 1,
                  "formula": "Heal from Target MaxHP"
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
              "maxTargets": 20,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1935414098\">Enemy_XP_Minion04_02_Fengrao_02_Minion_Hit</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<",
                    "value2": 1
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "CostCount"
                },
                {
                  "name": "Looped Event",
                  "maxLoops": 10,
                  "Event": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CostCount",
                        "compareType": "<",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "CurrentCount",
                          "value": {
                            "operator": "Variables[0] (CurrentCount) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(CurrentCount + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "CurrentCount"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "CostCount",
                          "value": {
                            "operator": "Variables[0] (CostCount) || Constants[0] (0.1) || ADD || RETURN",
                            "displayLines": "(CostCount + 0.1)",
                            "constants": [
                              0.1
                            ],
                            "variables": [
                              "CostCount"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "healPercent": 1,
                  "formula": "Heal from Target MaxHP"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1935414098\">Enemy_XP_Minion04_02_Fengrao_02_Minion_Hit</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1935414098\">Enemy_XP_Minion04_02_Fengrao_02_Minion_Hit</a>"
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "variableName": "CostCount",
              "modifierName": "<a class=\"gModGreen\" id=\"2041908574\">Enemy_XP_Minion04_02_Fengrao_02_Caster</a>",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CurrentCount",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (CostCount) || RETURN",
                  "displayLines": "CostCount",
                  "constants": [],
                  "variables": [
                    "CostCount"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentCount",
                  "value": {
                    "operator": "Variables[0] (CostCount) || RETURN",
                    "displayLines": "CostCount",
                    "constants": [],
                    "variables": [
                      "CostCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Modifier Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"2041908574\">Enemy_XP_Minion04_02_Fengrao_02_Caster</a>",
              "function": "Add",
              "value": {
                "operator": "Variables[0] (CurrentCount) || INVERT || RETURN",
                "displayLines": "-CurrentCount",
                "constants": [],
                "variables": [
                  "CurrentCount"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1935414098\">Enemy_XP_Minion04_02_Fengrao_02_Minion_Hit</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1435692684\">Enemy_XP_Minion04_02_Fengrao_02_Minion</a>",
      "execute": [
        {
          "eventTrigger": "Take Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1935414098\">Enemy_XP_Minion04_02_Fengrao_02_Minion_Hit</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}