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
      "to": "Caster",
      "modifier": "Luocha_Passive01_QuickHealthHP",
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
      "for": "Luocha_InsertAbility02_Mark",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Luocha_Ability02_InsertAbility",
              "abilitySource": "Caster",
              "abilityTarget": "Owner of this Modifier",
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
              "to": "Caster",
              "modifier": "Luocha_InsertAbility02_Retarget"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Luocha_InsertAbility02_Retarget",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": [
                {
                  "name": "Join Targets",
                  "TargetList": [
                    {
                      "name": "Target List",
                      "target": "All Teammates (Excluding Owner)"
                    },
                    {
                      "name": "Target List",
                      "target": "Caster"
                    }
                  ]
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": "Use Prior Target(s) Defined",
                    "invertCondition": true
                  }
                }
              ],
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Target Has Lowest/Highest Value",
                    "target": "Use Prior Target(s) Defined",
                    "partOf": [
                      {
                        "name": "Join Targets",
                        "TargetList": [
                          {
                            "name": "Target List",
                            "target": "All Teammates (Excluding Owner)"
                          },
                          {
                            "name": "Target List",
                            "target": "Caster"
                          }
                        ]
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Is Entity a Battle Event/Summon",
                          "target": "Use Prior Target(s) Defined",
                          "invertCondition": true
                        }
                      }
                    ],
                    "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
                    "minOrMax": "Min"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": "Use Prior Target(s) Defined",
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Luocha_InsertAbility02_Mark"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Luocha_Passive01_QuickHealthHP",
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
                    "target": "Use Prior Target(s) Defined",
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
                      "target": "Caster",
                      "modifier": "Luocha_Passive01_HealHPCD[<span class=\"descriptionNumberColor\">Prayer of Abyss Flower</span>]"
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
                            "target": "Caster",
                            "flagName": "STAT_CTRL"
                          },
                          {
                            "name": "Has Flag",
                            "target": "Caster",
                            "flagName": "DisableAction"
                          }
                        ]
                      },
                      "failed": [
                        {
                          "name": "Find New Target",
                          "from": [
                            {
                              "name": "Join Targets",
                              "TargetList": [
                                {
                                  "name": "Target List",
                                  "target": "All Teammates (Excluding Owner)"
                                },
                                {
                                  "name": "Target List",
                                  "target": "Caster"
                                }
                              ]
                            },
                            {
                              "name": "Target Filter",
                              "conditions": {
                                "name": "Is Entity a Battle Event/Summon",
                                "target": "Use Prior Target(s) Defined",
                                "invertCondition": true
                              }
                            }
                          ],
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Target Has Lowest/Highest Value",
                                "target": "Use Prior Target(s) Defined",
                                "partOf": [
                                  {
                                    "name": "Join Targets",
                                    "TargetList": [
                                      {
                                        "name": "Target List",
                                        "target": "All Teammates (Excluding Owner)"
                                      },
                                      {
                                        "name": "Target List",
                                        "target": "Caster"
                                      }
                                    ]
                                  },
                                  {
                                    "name": "Target Filter",
                                    "conditions": {
                                      "name": "Is Entity a Battle Event/Summon",
                                      "target": "Use Prior Target(s) Defined",
                                      "invertCondition": true
                                    }
                                  }
                                ],
                                "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
                                "minOrMax": "Min"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": "Use Prior Target(s) Defined",
                                "value1": "CurrentHP",
                                "compareType": ">",
                                "value2": 0
                              },
                              {
                                "name": "Is Entity a Battle Event/Summon",
                                "target": "Use Prior Target(s) Defined",
                                "invertCondition": true
                              }
                            ]
                          },
                          "ifTargetFound": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": "Use Prior Target(s) Defined",
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
                                  "to": "Caster",
                                  "modifier": "Luocha_InsertAbility02_Retarget"
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
                    "target": "Caster",
                    "flagName": "STAT_CTRL"
                  },
                  {
                    "name": "Has Flag",
                    "target": "Caster",
                    "flagName": "DisableAction"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Team Members(In Context, with Untargetable)",
                  "modifier": "Luocha_InsertAbility02_Mark"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Team Members(In Context, with Untargetable)",
                  "modifier": "Luocha_InsertAbility02_Retarget"
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
                    "target": "Caster",
                    "modifier": "Luocha_Passive01_InsertMark"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Luocha_Passive01_InsertMark"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Luocha_Passive01_DisableActionInsertMark"
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