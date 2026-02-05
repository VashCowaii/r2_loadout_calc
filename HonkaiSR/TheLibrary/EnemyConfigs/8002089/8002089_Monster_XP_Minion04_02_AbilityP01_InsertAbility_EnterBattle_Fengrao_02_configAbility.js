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
          "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Caster",
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
          "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion"
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
                  "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Caster",
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
                  "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion"
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
      "for": "Enemy_XP_Minion04_02_Fengrao_02_Caster",
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
              "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion"
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
                    "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion_Hit"
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
                    "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion_Hit"
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
              "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion_Hit"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion_Hit"
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "variableName": "CostCount",
              "modifierName": "Enemy_XP_Minion04_02_Fengrao_02_Caster",
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
              "modifierName": "Enemy_XP_Minion04_02_Fengrao_02_Caster",
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
      "for": "Enemy_XP_Minion04_02_Fengrao_02_Minion_Hit"
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_XP_Minion04_02_Fengrao_02_Minion",
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
              "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion_Hit"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}