const configAbility = {
  "fileName": "Luocha_Luocha_PassiveAbility01",
  "childAbilityList": [
    "Luocha_Luocha_PassiveAbility01_Camera",
    "Luocha_Luocha_PassiveAbility01",
    "Luocha_Luocha_Passive01_InsertAbility",
    "Luocha_Luocha_Ability02_InsertAbility"
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
      "modifier": "<a class=\"gModGreen\" id=\"-613660626\">Luocha_Passive01_QuickHealthHP</a>",
      "valuePerStack": {
        "MDF_HPRatio": {
          "operator": "Variables[0] (0.5) || RETURN",
          "displayLines": "0.5",
          "constants": [],
          "variables": [
            0.5
          ]
        }
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": 2,
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 2
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1001666346\">Luocha_InsertAbility02_Mark</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Luocha_Ability02_InsertAbility",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "AvatarHealOthers",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-704950893\">Luocha_InsertAbility02_Retarget</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-704950893\">Luocha_InsertAbility02_Retarget</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Join Targets",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    ]
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Is Entity a Battle Event/Summon",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "invertCondition": true
                    }
                  }
                ]
              },
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Target Has Lowest/Highest Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "partOf": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Join Targets",
                          "TargetList": [
                            {
                              "name": "Target Name",
                              "target": "{{All Team Members(Exclude Self)}}"
                            },
                            {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          ]
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Is Entity a Battle Event/Summon",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "invertCondition": true
                          }
                        }
                      ]
                    },
                    "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
                    "minOrMax": "Min"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1001666346\">Luocha_InsertAbility02_Mark</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-613660626\">Luocha_Passive01_QuickHealthHP</a>",
      "execute": [
        {
          "eventTrigger": "HP Change [Anyone]",
          "execute": [
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
                    "name": "Is Entity a Battle Event/Summon",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1468187936\">Luocha_Passive01_HealHPCD</a>[<span class=\"descriptionNumberColor\">Prayer of Abyss Flower</span>]"
                    }
                  },
                  "passed": [
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
                            "flagName": "STAT_CTRL"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "DisableAction"
                          }
                        ]
                      },
                      "failed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Join Targets",
                                "TargetList": [
                                  {
                                    "name": "Target Name",
                                    "target": "{{All Team Members(Exclude Self)}}"
                                  },
                                  {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  }
                                ]
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Is Entity a Battle Event/Summon",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "invertCondition": true
                                }
                              }
                            ]
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Target Has Lowest/Highest Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "partOf": {
                                  "name": "Target Sequence",
                                  "Sequence": [
                                    {
                                      "name": "Join Targets",
                                      "TargetList": [
                                        {
                                          "name": "Target Name",
                                          "target": "{{All Team Members(Exclude Self)}}"
                                        },
                                        {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Target Filter",
                                      "conditions": {
                                        "name": "Is Entity a Battle Event/Summon",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "invertCondition": true
                                      }
                                    }
                                  ]
                                },
                                "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
                                "minOrMax": "Min"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "CurrentHP",
                                "compareType": ">",
                                "value2": 0
                              },
                              {
                                "name": "Is Entity a Battle Event/Summon",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "invertCondition": true
                              }
                            ]
                          },
                          "ifTargetFound": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "CurrentHP%",
                                "compareType": "<=",
                                "value2": {
                                  "operator": "Variables[0] (MDF_HPRatio) || RETURN",
                                  "displayLines": "MDF_HPRatio",
                                  "constants": [],
                                  "variables": [
                                    "MDF_HPRatio"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-704950893\">Luocha_InsertAbility02_Retarget</a>"
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
          "eventTrigger": "Injected Ability Use [Owner]: End",
          "execute": [
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
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "DisableAction"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1001666346\">Luocha_InsertAbility02_Mark</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-704950893\">Luocha_InsertAbility02_Retarget</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "IsInserAbilityTrigger",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"905229597\">Luocha_Passive01_InsertMark</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"905229597\">Luocha_Passive01_InsertMark</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1784149745\">Luocha_Passive01_DisableActionInsertMark</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_HPRatio"
      ],
      "latentQueue": []
    }
  ]
}