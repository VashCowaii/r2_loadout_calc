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
      "variableName": "DV_FantasticStory_PlusAbility_0021",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0022",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0023",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0024",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0025",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0026",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0027",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0028",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_Plus6_WarlockCount",
      "scope": "ContextCaster"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
      "variableName": "BattleEvent_BaseHP"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(BattleEvent_BaseHP * 90)"
      },
      "variableName": "BattleEvent_BaseHP"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1872930168\">Modifier_FantasticStory_BaseAbility_0020</a>",
      "valuePerStack": {
        "ADF_1": {
          "displayLines": "#ADF_1"
        },
        "ADF_2": {
          "displayLines": "#ADF_2"
        },
        "ADF_3": {
          "displayLines": "#ADF_3"
        },
        "TempHP": {
          "displayLines": "BattleEvent_BaseHP"
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1420491994\">Modifier_FantasticStory_BaseAbility_0020_sub7</a>",
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
                            "displayLines": "DV_FantasticStory_PlusAbility_0028_ADF_3"
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
                                "displayLines": "DV_FantasticStory_PlusAbility_0028_ADF_2"
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
                                    "displayLines": "DV_FantasticStory_PlusAbility_0028_ADF_1"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1235938185\">Modifier_FantasticStory_BaseAbility_0020_sub8</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "Endurance"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1431018009\">Modifier_FantasticStory_BaseAbility_0020_sub6_dot</a>[<span class=\"descriptionNumberColor\">Gimmick</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Poison"
      ],
      "useEntitySnapshot": true,
      "description": "Takes DoT Wind DMG at the start of each turn for a certain number of turns.",
      "type": "Debuff",
      "effectName": "Wind Shear",
      "statusName": "Gimmick",
      "stackLimit": 5,
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
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
                "DamageFlat": {
                  "displayLines": "(Modifier_Poison_Damage * Modifier_Poison_PoisonLayer)"
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
                "DamageFlat": {
                  "displayLines": "((DOT_TriggerRatio * Modifier_Poison_Damage) * Modifier_Poison_PoisonLayer)"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1403714375\">Modifier_FantasticStory_BaseAbility_0020_sub6</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"1431018009\">Modifier_FantasticStory_BaseAbility_0020_sub6_dot</a>[<span class=\"descriptionNumberColor\">Gimmick</span>]",
              "duration": {
                "displayLines": "DV_FantasticStory_PlusAbility_0027_ADF_4"
              },
              "stackLimit": {
                "displayLines": "DV_FantasticStory_PlusAbility_0027_ADF_3"
              },
              "valuePerStack": {
                "Modifier_Poison_Damage": {
                  "displayLines": "(TempHP_get * DV_FantasticStory_PlusAbility_0027_ADF_2)"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1454047232\">Modifier_FantasticStory_BaseAbility_0020_sub5</a>[<span class=\"descriptionNumberColor\">Gimmick</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0027_ADF_1</span>. Upon Breaking an enemy target's Weakness, applies Wind Shear to all enemies.",
      "type": "Buff",
      "statusName": "Gimmick",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "statValue": {
                "displayLines": "DV_FantasticStory_PlusAbility_0027_ADF_1"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1437269613\">Modifier_FantasticStory_BaseAbility_0020_sub4</a>[<span class=\"descriptionNumberColor\">Verification</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">DmgAddedRatio</span> and increases SPD by <span class=\"descriptionNumberColor\">SpdAddedRatio</span>.",
      "type": "Buff",
      "effectName": "DMG and SPD Boost",
      "statusName": "Verification",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "statValue": {
                "displayLines": "DmgAddedRatio"
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "statValue": {
                "displayLines": "SpdAddedRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-19171630\">Modifier_FantasticStory_BaseAbility_0020_sub3_dot</a>[<span class=\"descriptionNumberColor\">Argument</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Poison"
      ],
      "useEntitySnapshot": true,
      "description": "Takes DoT Wind DMG at the start of each turn for a certain number of turns.",
      "type": "Debuff",
      "effectName": "Wind Shear",
      "statusName": "Argument",
      "stackLimit": 5,
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
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
                "DamageFlat": {
                  "displayLines": "(Modifier_Poison_Damage * Modifier_Poison_PoisonLayer)"
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
                "DamageFlat": {
                  "displayLines": "((DOT_TriggerRatio * Modifier_Poison_Damage) * Modifier_Poison_PoisonLayer)"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1353381518\">Modifier_FantasticStory_BaseAbility_0020_sub3</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder and Adjacent Targets}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-19171630\">Modifier_FantasticStory_BaseAbility_0020_sub3_dot</a>[<span class=\"descriptionNumberColor\">Argument</span>]",
              "duration": {
                "displayLines": "DV_FantasticStory_PlusAbility_0025_ADF_5"
              },
              "stackLimit": {
                "displayLines": "DV_FantasticStory_PlusAbility_0025_ADF_4"
              },
              "valuePerStack": {
                "Modifier_Poison_Damage": {
                  "displayLines": "(TempHP_get * DV_FantasticStory_PlusAbility_0025_ADF_3)"
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
              "modifier": "<a class=\"gModGreen\" id=\"-19171630\">Modifier_FantasticStory_BaseAbility_0020_sub3_dot</a>[<span class=\"descriptionNumberColor\">Argument</span>]",
              "duration": {
                "displayLines": "DV_FantasticStory_PlusAbility_0025_ADF_5"
              },
              "stackLimit": {
                "displayLines": "DV_FantasticStory_PlusAbility_0025_ADF_4"
              },
              "valuePerStack": {
                "Modifier_Poison_Damage": {
                  "displayLines": "(TempHP_get * DV_FantasticStory_PlusAbility_0025_ADF_3)"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1561743765\">Modifier_FantasticStory_BaseAbility_0020_sub2_dot</a>[<span class=\"descriptionNumberColor\">Rumor</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Poison"
      ],
      "useEntitySnapshot": true,
      "description": "Takes DoT Wind DMG at the start of each turn for a certain number of turns.",
      "type": "Debuff",
      "effectName": "Wind Shear",
      "statusName": "Rumor",
      "stackLimit": 5,
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
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
                "DamageFlat": {
                  "displayLines": "(Modifier_Poison_Damage * Modifier_Poison_PoisonLayer)"
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
                "DamageFlat": {
                  "displayLines": "((DOT_TriggerRatio * Modifier_Poison_Damage) * Modifier_Poison_PoisonLayer)"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1336603899\">Modifier_FantasticStory_BaseAbility_0020_sub2</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"1561743765\">Modifier_FantasticStory_BaseAbility_0020_sub2_dot</a>[<span class=\"descriptionNumberColor\">Rumor</span>]",
              "duration": {
                "displayLines": "DV_FantasticStory_PlusAbility_0022_ADF_3"
              },
              "stackLimit": 5,
              "valuePerStack": {
                "Modifier_Poison_Damage": {
                  "displayLines": "(TempHP_get * DV_FantasticStory_PlusAbility_0022_ADF_1)"
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
      "for": "<a class=\"gModGreen\" id=\"mod__444006453\">Modifier_FantasticStory_BaseAbility_0020_sub</a>",
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
                            "displayLines": "DV_FantasticStory_PlusAbility_0021_ADF_1 "
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
                            "displayLines": "DV_FantasticStory_PlusAbility_0021_ADF_1 "
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
                            "displayLines": "DV_FantasticStory_PlusAbility_0021_ADF_1 "
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
                            "displayLines": "DV_FantasticStory_PlusAbility_0021_ADF_1 "
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
                        "displayLines": "DV_FantasticStory_PlusAbility_0023_ADF_1"
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
                        "displayLines": "DV_FantasticStory_PlusAbility_0024_ADF_1"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: End",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-769619478\">Modifier_FantasticStory_BaseAbility_0020_sub_preshow</a>",
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
            "displayLines": "(0 - ADF_3_get)"
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1872930168\">Modifier_FantasticStory_BaseAbility_0020</a>",
      "stackType": "ReplaceByCaster",
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
      ],
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
              "modifier": "<a class=\"gModGreen\" id=\"444006453\">Modifier_FantasticStory_BaseAbility_0020_sub</a>",
              "valuePerStack": {
                "TempHP_get": {
                  "displayLines": "TempHP"
                },
                "ADF_1_get": {
                  "displayLines": "ADF_1"
                },
                "ADF_2_get": {
                  "displayLines": "ADF_2"
                },
                "ADF_3_get": {
                  "displayLines": "ADF_3"
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
                  "modifier": "<a class=\"gModGreen\" id=\"444006453\">Modifier_FantasticStory_BaseAbility_0020_sub</a>",
                  "valuePerStack": {
                    "TempHP_get": {
                      "displayLines": "TempHP"
                    },
                    "ADF_1_get": {
                      "displayLines": "ADF_1"
                    },
                    "ADF_2_get": {
                      "displayLines": "ADF_2"
                    },
                    "ADF_3_get": {
                      "displayLines": "ADF_3"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1353381518\">Modifier_FantasticStory_BaseAbility_0020_sub3</a>",
                      "valuePerStack": {
                        "TempHP_get": {
                          "displayLines": "TempHP"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1235938185\">Modifier_FantasticStory_BaseAbility_0020_sub8</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-769619478\">Modifier_FantasticStory_BaseAbility_0020_sub_preshow</a>",
                  "valuePerStack": {
                    "ADF_3_get": {
                      "displayLines": "ADF_3"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1454047232\">Modifier_FantasticStory_BaseAbility_0020_sub5</a>[<span class=\"descriptionNumberColor\">Gimmick</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1403714375\">Modifier_FantasticStory_BaseAbility_0020_sub6</a>",
                      "valuePerStack": {
                        "TempHP_get": {
                          "displayLines": "TempHP"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1420491994\">Modifier_FantasticStory_BaseAbility_0020_sub7</a>"
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
                "entityType": "Memosprite"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1336603899\">Modifier_FantasticStory_BaseAbility_0020_sub2</a>",
                      "valuePerStack": {
                        "TempHP_get": {
                          "displayLines": "TempHP"
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
          "eventTrigger": "Character Path [Anyone]: Change",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0026",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Matching Path",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]]"
                  },
                  "variableName": "DV_Plus6_WarlockCount",
                  "path": [
                    "Nihility"
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
                        "target": "{{Player Team All(with Unselectable)V2}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1437269613\">Modifier_FantasticStory_BaseAbility_0020_sub4</a>[<span class=\"descriptionNumberColor\">Verification</span>]",
                      "valuePerStack": {
                        "DmgAddedRatio": {
                          "displayLines": "DV_FantasticStory_PlusAbility_0026_ADF_1"
                        },
                        "SpdAddedRatio": {
                          "displayLines": "DV_FantasticStory_PlusAbility_0026_ADF_2"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1437269613\">Modifier_FantasticStory_BaseAbility_0020_sub4</a>[<span class=\"descriptionNumberColor\">Verification</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -90,
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-769619478\">Modifier_FantasticStory_BaseAbility_0020_sub_preshow</a>",
              "valuePerStack": {
                "ADF_3_get": {
                  "displayLines": "ADF_3"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1336603899\">Modifier_FantasticStory_BaseAbility_0020_sub2</a>",
                  "valuePerStack": {
                    "TempHP_get": {
                      "displayLines": "TempHP"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1353381518\">Modifier_FantasticStory_BaseAbility_0020_sub3</a>",
                  "valuePerStack": {
                    "TempHP_get": {
                      "displayLines": "TempHP"
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
                      "value": {
                        "displayLines": "(DV_Plus6_WarlockCount + 1)"
                      },
                      "variableName": "DV_Plus6_WarlockCount"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1437269613\">Modifier_FantasticStory_BaseAbility_0020_sub4</a>[<span class=\"descriptionNumberColor\">Verification</span>]",
                      "valuePerStack": {
                        "DmgAddedRatio": {
                          "displayLines": "DV_FantasticStory_PlusAbility_0026_ADF_1"
                        },
                        "SpdAddedRatio": {
                          "displayLines": "DV_FantasticStory_PlusAbility_0026_ADF_2"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1454047232\">Modifier_FantasticStory_BaseAbility_0020_sub5</a>[<span class=\"descriptionNumberColor\">Gimmick</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1403714375\">Modifier_FantasticStory_BaseAbility_0020_sub6</a>",
                  "valuePerStack": {
                    "TempHP_get": {
                      "displayLines": "TempHP"
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1235938185\">Modifier_FantasticStory_BaseAbility_0020_sub8</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1420491994\">Modifier_FantasticStory_BaseAbility_0020_sub7</a>"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}