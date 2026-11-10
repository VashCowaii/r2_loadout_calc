const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0019",
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
      "modifier": "<a class=\"gModGreen\" id=\"1799932743\">Modifier_ChallengePeakBattle_EnhancedAbility_0019</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1352915135\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_03</a>[<span class=\"descriptionNumberColor\">Flow Break+</span>]",
      "stackType": "Replace",
      "description": "Each stack reduces DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0019_ADF_1</span> and CRIT DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0019_ADF_2</span>, stacking up to <span class=\"descriptionNumberColor\">ChallengePeakBattle_0019_ADF_3</span> time(s). This effect decreases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0019_ADF_4</span> stack(s) after the enemy target receives a Follow-Up ATK or when Aha Instant ends.",
      "type": "Other",
      "statusName": "Flow Break+",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                  "value": "(-ChallengePeakBattle_0019_ADF_2 * MDF_Layer)"
                }
              ]
            }
          ]
        },
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
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "statValue": {
                "displayLines": "(ChallengePeakBattle_0019_ADF_1 * MDF_Layer)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1369692754\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_02</a>",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Follow-up"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MDF_InsertFlag"
                }
              ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-1352915135\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_03</a>[<span class=\"descriptionNumberColor\">Flow Break+</span>]",
              "stackLimit": {
                "displayLines": "ChallengePeakBattle_0019_ADF_3"
              },
              "valuePerStack": {
                "ChallengePeakBattle_0019_ADF_1": {
                  "displayLines": "ChallengePeakBattle_0019_ADF_1"
                },
                "ChallengePeakBattle_0019_ADF_2": {
                  "displayLines": "ChallengePeakBattle_0019_ADF_2"
                },
                "ChallengePeakBattle_0019_ADF_3": {
                  "displayLines": "ChallengePeakBattle_0019_ADF_3"
                },
                "ChallengePeakBattle_0019_ADF_4": {
                  "displayLines": "ChallengePeakBattle_0019_ADF_4"
                }
              },
              "addStacksPerTrigger": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: Start",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_StackCount",
              "modifierName": "<a class=\"gModGreen\" id=\"-1352915135\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_03</a>[<span class=\"descriptionNumberColor\">Flow Break+</span>]",
              "multiplier": 1
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MDF_InsertFlag"
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: End",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_InsertFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_StackCount",
                      "value": 1,
                      "max": {
                        "displayLines": "ChallengePeakBattle_0019_ADF_3"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1352915135\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_03</a>[<span class=\"descriptionNumberColor\">Flow Break+</span>]",
                      "stackLimit": {
                        "displayLines": "ChallengePeakBattle_0019_ADF_3"
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0019_ADF_1": {
                          "displayLines": "ChallengePeakBattle_0019_ADF_1"
                        },
                        "ChallengePeakBattle_0019_ADF_2": {
                          "displayLines": "ChallengePeakBattle_0019_ADF_2"
                        },
                        "ChallengePeakBattle_0019_ADF_3": {
                          "displayLines": "ChallengePeakBattle_0019_ADF_3"
                        },
                        "ChallengePeakBattle_0019_ADF_4": {
                          "displayLines": "ChallengePeakBattle_0019_ADF_4"
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_InsertFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_StackCount",
                      "value": {
                        "displayLines": "(0 - ChallengePeakBattle_0019_ADF_4)"
                      },
                      "max": {
                        "displayLines": "ChallengePeakBattle_0019_ADF_3"
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1352915135\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_03</a>[<span class=\"descriptionNumberColor\">Flow Break+</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1352915135\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_03</a>[<span class=\"descriptionNumberColor\">Flow Break+</span>]",
                      "stackLimit": {
                        "displayLines": "ChallengePeakBattle_0019_ADF_3"
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0019_ADF_1": {
                          "displayLines": "ChallengePeakBattle_0019_ADF_1"
                        },
                        "ChallengePeakBattle_0019_ADF_2": {
                          "displayLines": "ChallengePeakBattle_0019_ADF_2"
                        },
                        "ChallengePeakBattle_0019_ADF_3": {
                          "displayLines": "ChallengePeakBattle_0019_ADF_3"
                        },
                        "ChallengePeakBattle_0019_ADF_4": {
                          "displayLines": "ChallengePeakBattle_0019_ADF_4"
                        }
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "MDF_StackCount"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_InsertFlag"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Aha Instant: End",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_StackCount",
              "modifierName": "<a class=\"gModGreen\" id=\"-1352915135\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_03</a>[<span class=\"descriptionNumberColor\">Flow Break+</span>]",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_StackCount",
              "value": {
                "displayLines": "(0 - ChallengePeakBattle_0019_ADF_4)"
              },
              "max": {
                "displayLines": "ChallengePeakBattle_0019_ADF_3"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1352915135\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_03</a>[<span class=\"descriptionNumberColor\">Flow Break+</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1352915135\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_03</a>[<span class=\"descriptionNumberColor\">Flow Break+</span>]",
              "stackLimit": {
                "displayLines": "ChallengePeakBattle_0019_ADF_3"
              },
              "valuePerStack": {
                "ChallengePeakBattle_0019_ADF_1": {
                  "displayLines": "ChallengePeakBattle_0019_ADF_1"
                },
                "ChallengePeakBattle_0019_ADF_2": {
                  "displayLines": "ChallengePeakBattle_0019_ADF_2"
                },
                "ChallengePeakBattle_0019_ADF_3": {
                  "displayLines": "ChallengePeakBattle_0019_ADF_3"
                },
                "ChallengePeakBattle_0019_ADF_4": {
                  "displayLines": "ChallengePeakBattle_0019_ADF_4"
                }
              },
              "addStacksPerTrigger": {
                "displayLines": "MDF_StackCount"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1799932743\">Modifier_ChallengePeakBattle_EnhancedAbility_0019</a>",
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
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1369692754\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_02</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0019_ADF_1": {
                      "displayLines": "#ADF_1"
                    },
                    "ChallengePeakBattle_0019_ADF_2": {
                      "displayLines": "#ADF_2"
                    },
                    "ChallengePeakBattle_0019_ADF_3": {
                      "displayLines": "#ADF_3"
                    },
                    "ChallengePeakBattle_0019_ADF_4": {
                      "displayLines": "#ADF_4"
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
}