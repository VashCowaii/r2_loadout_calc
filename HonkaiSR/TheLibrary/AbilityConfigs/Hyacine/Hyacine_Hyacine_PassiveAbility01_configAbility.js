const configAbility = {
  "fileName": "Hyacine_Hyacine_PassiveAbility01",
  "childAbilityList": [
    "Hyacine_Hyacine_PassiveAbility01"
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
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_CurrenMaxtHP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "assignState": "True",
      "bar#": "Dot"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Hyacine_Passive"
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "variableName": "MDF_Energy_Count",
      "modifierName": "Hyacine_IronWater",
      "multiplier": 1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Gloomy Grin"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Hyacine_PointB1"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Stormy Caress"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Hyacine_PointB2",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            }
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Hyacine_Passive",
      "execute": [
        {
          "eventTrigger": "Heal Target Start [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "modifier": "Hyacine_Passive_Effect[<span class=\"descriptionNumberColor\">First Light Heals the World</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "valuePerStack": {
                "MDF_DamageAddRatio": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                }
              },
              "addStacksPerTrigger": 1
            }
          ]
        },
        {
          "eventTrigger": "Heal Target End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Living State",
                "state": "Mask_AliveOnly",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Memosprite}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_HealCount",
                  "value": {
                    "operator": "Variables[0] (_HealCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(_HealCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_HealCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable with Healing",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_HealValue",
              "context": "ContextCaster"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_HealValue",
              "value": {
                "operator": "Variables[0] (_HealValue) || Constants[0] (1) || Variables[1] (ExtraHealRatio) || ADD || MUL || RETURN",
                "displayLines": "(_HealValue * (1 + ExtraHealRatio))",
                "constants": [
                  1
                ],
                "variables": [
                  "_HealValue",
                  "ExtraHealRatio"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_HealValueTotal",
              "value": {
                "operator": "Variables[0] (_HealValueTotal) || Variables[1] (_HealValue) || ADD || RETURN",
                "displayLines": "(_HealValueTotal + _HealValue)",
                "constants": [],
                "variables": [
                  "_HealValueTotal",
                  "_HealValue"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "variableName": "_SummonerHealValueTotal",
              "value": {
                "operator": "Variables[0] (_HealValueTotal) || RETURN",
                "displayLines": "_HealValueTotal",
                "constants": [],
                "variables": [
                  "_HealValueTotal"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "modifier": "Memosprite_HyacineServant_Passive_Mark[<span class=\"descriptionNumberColor\">Rainclouds, Time to Go!</span>]",
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Tempestuous Halt"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Hyacine_PointB3"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Hyacine_Eidolon2_Listen"
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
                    "name": "Trace Activated",
                    "conditionList": "Tempestuous Halt"
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}.[[getMemosprite]]"
                    }
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
                  "modifier": "Hyacine_PointB3"
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "_HealCount",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 99,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "variableName": "_SummonerHealCount",
                  "value": {
                    "operator": "Variables[0] (_HealCount) || RETURN",
                    "displayLines": "_HealCount",
                    "constants": [],
                    "variables": [
                      "_HealCount"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Tempestuous Halt"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Hyacine_PointB3"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Tempestuous Halt"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Hyacine_PointB3"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Tempestuous Halt"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Hyacine_PointB3"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Tempestuous Halt"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Hyacine_PointB3"
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
    }
  ]
}