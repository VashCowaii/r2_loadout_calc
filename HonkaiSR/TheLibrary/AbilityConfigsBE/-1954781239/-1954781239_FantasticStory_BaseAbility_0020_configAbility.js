const configAbility = {
  "fileName": "-1954781239_FantasticStory_BaseAbility_0020",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_0021"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_0022"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_0023"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_0024"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_0025"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_0026"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_0027"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_0028"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_Plus6_WarlockCount"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "BattleEvent_BaseHP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "BattleEvent_BaseHP",
      "value": {
        "operator": "Variables[0] (BattleEvent_BaseHP) || Constants[0] (90) || MUL || RETURN",
        "displayLines": "(BattleEvent_BaseHP * 90)",
        "constants": [
          90
        ],
        "variables": [
          "BattleEvent_BaseHP"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Modifier_FantasticStory_BaseAbility_0020",
      "valuePerStack": {
        "ADF_1": {
          "operator": "Variables[0] (#ADF_1) || RETURN",
          "displayLines": "#ADF_1",
          "constants": [],
          "variables": [
            "#ADF_1"
          ]
        },
        "ADF_2": {
          "operator": "Variables[0] (#ADF_2) || RETURN",
          "displayLines": "#ADF_2",
          "constants": [],
          "variables": [
            "#ADF_2"
          ]
        },
        "ADF_3": {
          "operator": "Variables[0] (#ADF_3) || RETURN",
          "displayLines": "#ADF_3",
          "constants": [],
          "variables": [
            "#ADF_3"
          ]
        },
        "TempHP": {
          "operator": "Variables[0] (BattleEvent_BaseHP) || RETURN",
          "displayLines": "BattleEvent_BaseHP",
          "constants": [],
          "variables": [
            "BattleEvent_BaseHP"
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0020_sub7",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "maxTargets": 5,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_DOT_Poison"
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_DOT_Burn"
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_DOT_Bleed"
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_DOT_Electric"
                              }
                            ]
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
                                "flagName": "STAT_DOT_Poison",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_DOT_Burn"
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_DOT_Bleed"
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_DOT_Electric"
                              }
                            ]
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
                                "flagName": "STAT_DOT_Poison"
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_DOT_Burn",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_DOT_Bleed"
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_DOT_Electric"
                              }
                            ]
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
                                "flagName": "STAT_DOT_Poison"
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_DOT_Burn"
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_DOT_Bleed",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_DOT_Electric"
                              }
                            ]
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
                                "flagName": "STAT_DOT_Poison"
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_DOT_Burn"
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_DOT_Bleed"
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_DOT_Electric",
                                "invertCondition": true
                              }
                            ]
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Trigger Modifier Event",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "DOT_TriggerRatio",
                          "eventType": "DOT",
                          "value": {
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0028_ADF_3) || RETURN",
                            "displayLines": "DV_FantasticStory_PlusAbility_0028_ADF_3",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_0028_ADF_3"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Poison"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Burn"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Bleed",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Electric",
                                    "invertCondition": true
                                  }
                                ]
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
                                    "flagName": "STAT_DOT_Poison"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Burn",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Bleed"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Electric",
                                    "invertCondition": true
                                  }
                                ]
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
                                    "flagName": "STAT_DOT_Poison"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Burn",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Bleed",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Electric"
                                  }
                                ]
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
                                    "flagName": "STAT_DOT_Poison",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Burn"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Bleed"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Electric",
                                    "invertCondition": true
                                  }
                                ]
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
                                    "flagName": "STAT_DOT_Poison",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Burn"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Bleed",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Electric"
                                  }
                                ]
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
                                    "flagName": "STAT_DOT_Poison",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Burn",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Bleed"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_DOT_Electric"
                                  }
                                ]
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Trigger Modifier Event",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "DOT_TriggerRatio",
                              "eventType": "DOT",
                              "value": {
                                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0028_ADF_2) || RETURN",
                                "displayLines": "DV_FantasticStory_PlusAbility_0028_ADF_2",
                                "constants": [],
                                "variables": [
                                  "DV_FantasticStory_PlusAbility_0028_ADF_2"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "OR",
                                "conditionList": [
                                  {
                                    "name": "AND",
                                    "conditionList": [
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Poison"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Burn",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Bleed",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Electric",
                                        "invertCondition": true
                                      }
                                    ]
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
                                        "flagName": "STAT_DOT_Poison",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Burn"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Bleed",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Electric",
                                        "invertCondition": true
                                      }
                                    ]
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
                                        "flagName": "STAT_DOT_Poison",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Burn",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Bleed"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Electric",
                                        "invertCondition": true
                                      }
                                    ]
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
                                        "flagName": "STAT_DOT_Poison",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Burn",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Bleed",
                                        "invertCondition": true
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_DOT_Electric"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Trigger Modifier Event",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "DOT_TriggerRatio",
                                  "eventType": "DOT",
                                  "value": {
                                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0028_ADF_1) || RETURN",
                                    "displayLines": "DV_FantasticStory_PlusAbility_0028_ADF_1",
                                    "constants": [],
                                    "variables": [
                                      "DV_FantasticStory_PlusAbility_0028_ADF_1"
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
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0020_sub8",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "Endurance"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0020_sub6_dot[<span class=\"descriptionNumberColor\">Gimmick</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Poison"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "Modifier_Poison_PoisonLayer",
              "multiplier": 1
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (Modifier_Poison_Damage) || Variables[1] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                  "displayLines": "(Modifier_Poison_Damage * Modifier_Poison_PoisonLayer)",
                  "constants": [],
                  "variables": [
                    "Modifier_Poison_Damage",
                    "Modifier_Poison_PoisonLayer"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "Modifier_Poison_PoisonLayer",
              "multiplier": 1
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Poison_Damage) || MUL || Variables[2] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                  "displayLines": "((DOT_TriggerRatio * Modifier_Poison_Damage) * Modifier_Poison_PoisonLayer)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Modifier_Poison_Damage",
                    "Modifier_Poison_PoisonLayer"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "description": "Takes DoT Wind DMG at the start of each turn for a certain number of turns.",
      "type": "Debuff",
      "effectName": "Wind Shear",
      "statusName": "Gimmick",
      "stackLimit": 5,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0020_sub6",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Caused Weakness Break [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub6_dot[<span class=\"descriptionNumberColor\">Gimmick</span>]",
              "duration": {
                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0027_ADF_4) || RETURN",
                "displayLines": "DV_FantasticStory_PlusAbility_0027_ADF_4",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_PlusAbility_0027_ADF_4"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0027_ADF_3) || RETURN",
                "displayLines": "DV_FantasticStory_PlusAbility_0027_ADF_3",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_PlusAbility_0027_ADF_3"
                ]
              },
              "valuePerStack": {
                "Modifier_Poison_Damage": {
                  "operator": "Variables[0] (TempHP_get) || Variables[1] (DV_FantasticStory_PlusAbility_0027_ADF_2) || MUL || RETURN",
                  "displayLines": "(TempHP_get * DV_FantasticStory_PlusAbility_0027_ADF_2)",
                  "constants": [],
                  "variables": [
                    "TempHP_get",
                    "DV_FantasticStory_PlusAbility_0027_ADF_2"
                  ]
                }
              },
              "addStacksPerTrigger": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0020_sub5[<span class=\"descriptionNumberColor\">Gimmick</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0027_ADF_1) || RETURN",
                "displayLines": "DV_FantasticStory_PlusAbility_0027_ADF_1",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_PlusAbility_0027_ADF_1"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0027_ADF_1</span>. Upon Breaking an enemy target's Weakness, applies Wind Shear to all enemies.",
      "type": "Buff",
      "statusName": "Gimmick"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0020_sub4[<span class=\"descriptionNumberColor\">Verification</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (DmgAddedRatio) || RETURN",
                "displayLines": "DmgAddedRatio",
                "constants": [],
                "variables": [
                  "DmgAddedRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (SpdAddedRatio) || RETURN",
                "displayLines": "SpdAddedRatio",
                "constants": [],
                "variables": [
                  "SpdAddedRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">DmgAddedRatio</span> and increases SPD by <span class=\"descriptionNumberColor\">SpdAddedRatio</span>.",
      "type": "Buff",
      "effectName": "DMG and SPD Boost",
      "statusName": "Verification"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0020_sub3_dot[<span class=\"descriptionNumberColor\">Argument</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Poison"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "Modifier_Poison_PoisonLayer",
              "multiplier": 1
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (Modifier_Poison_Damage) || Variables[1] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                  "displayLines": "(Modifier_Poison_Damage * Modifier_Poison_PoisonLayer)",
                  "constants": [],
                  "variables": [
                    "Modifier_Poison_Damage",
                    "Modifier_Poison_PoisonLayer"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "Modifier_Poison_PoisonLayer",
              "multiplier": 1
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Poison_Damage) || MUL || Variables[2] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                  "displayLines": "((DOT_TriggerRatio * Modifier_Poison_Damage) * Modifier_Poison_PoisonLayer)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Modifier_Poison_Damage",
                    "Modifier_Poison_PoisonLayer"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "description": "Takes DoT Wind DMG at the start of each turn for a certain number of turns.",
      "type": "Debuff",
      "effectName": "Wind Shear",
      "statusName": "Argument",
      "stackLimit": 5,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0020_sub3",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder and Adjacent Targets}}"
              },
              "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub3_dot[<span class=\"descriptionNumberColor\">Argument</span>]",
              "duration": {
                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0025_ADF_5) || RETURN",
                "displayLines": "DV_FantasticStory_PlusAbility_0025_ADF_5",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_PlusAbility_0025_ADF_5"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0025_ADF_4) || RETURN",
                "displayLines": "DV_FantasticStory_PlusAbility_0025_ADF_4",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_PlusAbility_0025_ADF_4"
                ]
              },
              "valuePerStack": {
                "Modifier_Poison_Damage": {
                  "operator": "Variables[0] (TempHP_get) || Variables[1] (DV_FantasticStory_PlusAbility_0025_ADF_3) || MUL || RETURN",
                  "displayLines": "(TempHP_get * DV_FantasticStory_PlusAbility_0025_ADF_3)",
                  "constants": [],
                  "variables": [
                    "TempHP_get",
                    "DV_FantasticStory_PlusAbility_0025_ADF_3"
                  ]
                }
              },
              "addStacksPerTrigger": 1
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
              "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub3_dot[<span class=\"descriptionNumberColor\">Argument</span>]",
              "duration": {
                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0025_ADF_5) || RETURN",
                "displayLines": "DV_FantasticStory_PlusAbility_0025_ADF_5",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_PlusAbility_0025_ADF_5"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0025_ADF_4) || RETURN",
                "displayLines": "DV_FantasticStory_PlusAbility_0025_ADF_4",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_PlusAbility_0025_ADF_4"
                ]
              },
              "valuePerStack": {
                "Modifier_Poison_Damage": {
                  "operator": "Variables[0] (TempHP_get) || Variables[1] (DV_FantasticStory_PlusAbility_0025_ADF_3) || MUL || RETURN",
                  "displayLines": "(TempHP_get * DV_FantasticStory_PlusAbility_0025_ADF_3)",
                  "constants": [],
                  "variables": [
                    "TempHP_get",
                    "DV_FantasticStory_PlusAbility_0025_ADF_3"
                  ]
                }
              },
              "addStacksPerTrigger": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0020_sub2_dot[<span class=\"descriptionNumberColor\">Rumor</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Poison"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "Modifier_Poison_PoisonLayer",
              "multiplier": 1
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (Modifier_Poison_Damage) || Variables[1] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                  "displayLines": "(Modifier_Poison_Damage * Modifier_Poison_PoisonLayer)",
                  "constants": [],
                  "variables": [
                    "Modifier_Poison_Damage",
                    "Modifier_Poison_PoisonLayer"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "Modifier_Poison_PoisonLayer",
              "multiplier": 1
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Poison_Damage) || MUL || Variables[2] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                  "displayLines": "((DOT_TriggerRatio * Modifier_Poison_Damage) * Modifier_Poison_PoisonLayer)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Modifier_Poison_Damage",
                    "Modifier_Poison_PoisonLayer"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "description": "Takes DoT Wind DMG at the start of each turn for a certain number of turns.",
      "type": "Debuff",
      "effectName": "Wind Shear",
      "statusName": "Rumor",
      "stackLimit": 5,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0020_sub2",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub2_dot[<span class=\"descriptionNumberColor\">Rumor</span>]",
              "duration": {
                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0022_ADF_3) || RETURN",
                "displayLines": "DV_FantasticStory_PlusAbility_0022_ADF_3",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_PlusAbility_0022_ADF_3"
                ]
              },
              "stackLimit": 5,
              "valuePerStack": {
                "Modifier_Poison_Damage": {
                  "operator": "Variables[0] (TempHP_get) || Variables[1] (DV_FantasticStory_PlusAbility_0022_ADF_1) || MUL || RETURN",
                  "displayLines": "(TempHP_get * DV_FantasticStory_PlusAbility_0022_ADF_1)",
                  "constants": [],
                  "variables": [
                    "TempHP_get",
                    "DV_FantasticStory_PlusAbility_0022_ADF_1"
                  ]
                }
              },
              "addStacksPerTrigger": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0020_sub",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "STAT_DOT"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
                      "value": "ADF_2_get"
                    }
                  ]
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
                  "DOT"
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
                      "value": "ADF_1_get"
                    }
                  ]
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
                    "value1": "DV_FantasticStory_PlusAbility_0021",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Damage Type/Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "list": [
                      "Fire"
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Joint-Attack",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "failed": [
                        {
                          "name": "Share DMG Taken",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Targets Adjacent to Modifier Holder}}"
                          },
                          "selfSplit": 1,
                          "targetSplit": {
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0021_ADF_1 ) || RETURN",
                            "displayLines": "DV_FantasticStory_PlusAbility_0021_ADF_1 ",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_0021_ADF_1 "
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
                    "name": "Is Damage Type/Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "list": [
                      "Physical"
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Joint-Attack",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "failed": [
                        {
                          "name": "Share DMG Taken",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Targets Adjacent to Modifier Holder}}"
                          },
                          "selfSplit": 1,
                          "targetSplit": {
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0021_ADF_1 ) || RETURN",
                            "displayLines": "DV_FantasticStory_PlusAbility_0021_ADF_1 ",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_0021_ADF_1 "
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
                    "name": "Is Damage Type/Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "list": [
                      "Lightning"
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Joint-Attack",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "failed": [
                        {
                          "name": "Share DMG Taken",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Targets Adjacent to Modifier Holder}}"
                          },
                          "selfSplit": 1,
                          "targetSplit": {
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0021_ADF_1 ) || RETURN",
                            "displayLines": "DV_FantasticStory_PlusAbility_0021_ADF_1 ",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_0021_ADF_1 "
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
                    "name": "Is Damage Type/Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "list": [
                      "Wind"
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Joint-Attack",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "failed": [
                        {
                          "name": "Share DMG Taken",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Targets Adjacent to Modifier Holder}}"
                          },
                          "selfSplit": 1,
                          "targetSplit": {
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0021_ADF_1 ) || RETURN",
                            "displayLines": "DV_FantasticStory_PlusAbility_0021_ADF_1 ",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_0021_ADF_1 "
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
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0023",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Target Has Lowest/Highest Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "partOf": {
                      "name": "Target Name",
                      "target": "{{Player Team(Exclude Memosprites)}}"
                    },
                    "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
                    "minOrMax": "Min"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0023_ADF_1) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_0023_ADF_1",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_0023_ADF_1"
                        ]
                      },
                      "formula": "Heal from Target MaxHP"
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "(0 - DV_FantasticStory_PlusAbility_0023_ADF_2)"
                    },
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "living": true
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0024",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
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
                      "name": "Copy Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "source": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagFilter": [
                        "STAT_DOT"
                      ],
                      "chance": {
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0024_ADF_1) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_0024_ADF_1",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_0024_ADF_1"
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
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "STAT_DOT"
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "(0 - ADF_3_get)"
                },
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "living": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0020_sub_preshow",
      "stackType": "ReplaceByCaster",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player's Aim Target List}}"
        },
        "skillType": [
          "Ultimate",
          "Skill",
          "Basic ATK"
        ],
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Flag",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagName": "STAT_DOT"
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
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Constants[0] (0) || Variables[0] (ADF_3_get) || SUB || RETURN",
            "displayLines": "(0 - ADF_3_get)",
            "constants": [
              0
            ],
            "variables": [
              "ADF_3_get"
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0020",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub",
              "valuePerStack": {
                "TempHP_get": {
                  "operator": "Variables[0] (TempHP) || RETURN",
                  "displayLines": "TempHP",
                  "constants": [],
                  "variables": [
                    "TempHP"
                  ]
                },
                "ADF_1_get": {
                  "operator": "Variables[0] (ADF_1) || RETURN",
                  "displayLines": "ADF_1",
                  "constants": [],
                  "variables": [
                    "ADF_1"
                  ]
                },
                "ADF_2_get": {
                  "operator": "Variables[0] (ADF_2) || RETURN",
                  "displayLines": "ADF_2",
                  "constants": [],
                  "variables": [
                    "ADF_2"
                  ]
                },
                "ADF_3_get": {
                  "operator": "Variables[0] (ADF_3) || RETURN",
                  "displayLines": "ADF_3",
                  "constants": [],
                  "variables": [
                    "ADF_3"
                  ]
                }
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub",
                  "valuePerStack": {
                    "TempHP_get": {
                      "operator": "Variables[0] (TempHP) || RETURN",
                      "displayLines": "TempHP",
                      "constants": [],
                      "variables": [
                        "TempHP"
                      ]
                    },
                    "ADF_1_get": {
                      "operator": "Variables[0] (ADF_1) || RETURN",
                      "displayLines": "ADF_1",
                      "constants": [],
                      "variables": [
                        "ADF_1"
                      ]
                    },
                    "ADF_2_get": {
                      "operator": "Variables[0] (ADF_2) || RETURN",
                      "displayLines": "ADF_2",
                      "constants": [],
                      "variables": [
                        "ADF_2"
                      ]
                    },
                    "ADF_3_get": {
                      "operator": "Variables[0] (ADF_3) || RETURN",
                      "displayLines": "ADF_3",
                      "constants": [],
                      "variables": [
                        "ADF_3"
                      ]
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0025",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub3",
                      "valuePerStack": {
                        "TempHP_get": {
                          "operator": "Variables[0] (TempHP) || RETURN",
                          "displayLines": "TempHP",
                          "constants": [],
                          "variables": [
                            "TempHP"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0027",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub8"
                    }
                  ]
                }
              ]
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub_preshow",
                  "valuePerStack": {
                    "ADF_3_get": {
                      "operator": "Variables[0] (ADF_3) || RETURN",
                      "displayLines": "ADF_3",
                      "constants": [],
                      "variables": [
                        "ADF_3"
                      ]
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0027",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub5[<span class=\"descriptionNumberColor\">Gimmick</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub6",
                      "valuePerStack": {
                        "TempHP_get": {
                          "operator": "Variables[0] (TempHP) || RETURN",
                          "displayLines": "TempHP",
                          "constants": [],
                          "variables": [
                            "TempHP"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0028",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub7"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "type": "Memosprite"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0022",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub2",
                      "valuePerStack": {
                        "TempHP_get": {
                          "operator": "Variables[0] (TempHP) || RETURN",
                          "displayLines": "TempHP",
                          "constants": [],
                          "variables": [
                            "TempHP"
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
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub_preshow",
              "valuePerStack": {
                "ADF_3_get": {
                  "operator": "Variables[0] (ADF_3) || RETURN",
                  "displayLines": "ADF_3",
                  "constants": [],
                  "variables": [
                    "ADF_3"
                  ]
                }
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0022",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub2",
                  "valuePerStack": {
                    "TempHP_get": {
                      "operator": "Variables[0] (TempHP) || RETURN",
                      "displayLines": "TempHP",
                      "constants": [],
                      "variables": [
                        "TempHP"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0025",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub3",
                  "valuePerStack": {
                    "TempHP_get": {
                      "operator": "Variables[0] (TempHP) || RETURN",
                      "displayLines": "TempHP",
                      "constants": [],
                      "variables": [
                        "TempHP"
                      ]
                    }
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
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0026",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Nihility"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_Plus6_WarlockCount",
                      "value": {
                        "operator": "Variables[0] (DV_Plus6_WarlockCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(DV_Plus6_WarlockCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "DV_Plus6_WarlockCount"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_Plus6_WarlockCount",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub4[<span class=\"descriptionNumberColor\">Verification</span>]",
                      "valuePerStack": {
                        "DmgAddedRatio": {
                          "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0026_ADF_1) || RETURN",
                          "displayLines": "DV_FantasticStory_PlusAbility_0026_ADF_1",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_PlusAbility_0026_ADF_1"
                          ]
                        },
                        "SpdAddedRatio": {
                          "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0026_ADF_2) || RETURN",
                          "displayLines": "DV_FantasticStory_PlusAbility_0026_ADF_2",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_PlusAbility_0026_ADF_2"
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
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0027",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub5[<span class=\"descriptionNumberColor\">Gimmick</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub6",
                  "valuePerStack": {
                    "TempHP_get": {
                      "operator": "Variables[0] (TempHP) || RETURN",
                      "displayLines": "TempHP",
                      "constants": [],
                      "variables": [
                        "TempHP"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub8"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0028",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0020_sub7"
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [
        "ADF_1",
        "ADF_2",
        "ADF_3",
        "TempHP"
      ],
      "latentQueue": [
        "DV_FantasticStory_PlusAbility_0021",
        "DV_FantasticStory_PlusAbility_0022",
        "DV_FantasticStory_PlusAbility_0023",
        "DV_FantasticStory_PlusAbility_0024",
        "DV_FantasticStory_PlusAbility_0025",
        "DV_FantasticStory_PlusAbility_0026",
        "DV_FantasticStory_PlusAbility_0027",
        "DV_FantasticStory_PlusAbility_0028"
      ]
    }
  ]
}