const configAbility = {
  "fileName": "3024013_Monster_W2_Argenti_IF_EX02_PassiveAbility",
  "skillTrigger": "SkillEX02",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": ">=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W2_Argenti_IF_EX02_StateController"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W2_Argenti_IF_EX_PowerController"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W2_Argenti_IF_AccumulatePower"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "MModifier_W2_Argenti_IF_BattleAlert"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_Argenti_IF_EX02_UltraState[<span class=\"descriptionNumberColor\">Medal of Elegance</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "assignState": "False"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PowerCount",
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": 4,
              "assignState": "True",
              "barType": "BossDot"
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "Monster_W2_Argenti_IF_FlowerPower[<span class=\"descriptionNumberColor\">Wreath</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PowerCount",
                  "value": {
                    "operator": "Variables[0] (MDF_PowerCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_PowerCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_PowerCount"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_PowerCount) || RETURN",
                    "displayLines": "MDF_PowerCount",
                    "constants": [],
                    "variables": [
                      "MDF_PowerCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 4,
                  "assignState": "True",
                  "barType": "BossDot"
                }
              ]
            }
          ]
        }
      ],
      "description": "Cannot be selected before the next action or before all summons have been defeated. Use Undeniable Fate the next time this unit takes action.",
      "type": "Buff",
      "effectName": "Medal of Elegance",
      "statusName": "Medal of Elegance"
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_Argenti_IF_EX02_AttackState[<span class=\"descriptionNumberColor\">Golden Harvest</span>]",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "assignState": "False"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_TurnCount",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TurnCount",
                  "value": {
                    "operator": "Variables[0] (MDF_TurnCount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(MDF_TurnCount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_TurnCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_TurnCount) || RETURN",
                "displayLines": "MDF_TurnCount",
                "constants": [],
                "variables": [
                  "MDF_TurnCount"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": 3,
              "assignState": "True",
              "barType": "BossDot"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_TurnCount",
              "value": 3
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_ShowValue1",
              "value": {
                "operator": "Variables[0] ({[SkillEX02[1]]}) || RETURN",
                "displayLines": "{[SkillEX02[1]]}",
                "constants": [],
                "variables": [
                  "{[SkillEX02[1]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_ShowValue2",
              "value": {
                "operator": "Variables[0] ({[SkillEX02[0]]}) || RETURN",
                "displayLines": "{[SkillEX02[0]]}",
                "constants": [],
                "variables": [
                  "{[SkillEX02[0]]}"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] ({[SkillEX02[1]]}) || RETURN",
                "displayLines": "{[SkillEX02[1]]}",
                "constants": [],
                "variables": [
                  "{[SkillEX02[1]]}"
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
                "operator": "Variables[0] ({[SkillEX02[0]]}) || RETURN",
                "displayLines": "{[SkillEX02[0]]}",
                "constants": [],
                "variables": [
                  "{[SkillEX02[0]]}"
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_TurnCount) || RETURN",
                "displayLines": "MDF_TurnCount",
                "constants": [],
                "variables": [
                  "MDF_TurnCount"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": 3,
              "assignState": "True",
              "barType": "BossDot"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span> and increases SPD by <span class=\"descriptionNumberColor\">MDF_ShowValue2</span>.",
      "type": "Buff",
      "effectName": "Golden Harvest",
      "statusName": "Golden Harvest"
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_Argenti_IF_EX02_DefendState[<span class=\"descriptionNumberColor\">Chivalric Wrath</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "assignState": "False"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_TurnCount",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TurnCount",
                  "value": {
                    "operator": "Variables[0] (MDF_TurnCount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(MDF_TurnCount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_TurnCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_TurnCount) || RETURN",
                "displayLines": "MDF_TurnCount",
                "constants": [],
                "variables": [
                  "MDF_TurnCount"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": 3,
              "assignState": "True",
              "barType": "BossDot"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_TurnCount",
              "value": 3
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_ShowValue1",
              "value": {
                "operator": "Variables[0] ({[SkillEX02[2]]}) || RETURN",
                "displayLines": "{[SkillEX02[2]]}",
                "constants": [],
                "variables": [
                  "{[SkillEX02[2]]}"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] ({[SkillEX02[2]]}) || RETURN",
                "displayLines": "{[SkillEX02[2]]}",
                "constants": [],
                "variables": [
                  "{[SkillEX02[2]]}"
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_TurnCount) || RETURN",
                "displayLines": "MDF_TurnCount",
                "constants": [],
                "variables": [
                  "MDF_TurnCount"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": 3,
              "assignState": "True",
              "barType": "BossDot"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>.",
      "type": "Buff",
      "effectName": "Chivalric Wrath",
      "statusName": "Chivalric Wrath"
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_Argenti_IF_EX02_StateController",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill11"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_W2_Argenti_IF_EX02_DefendState[<span class=\"descriptionNumberColor\">Chivalric Wrath</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W2_Argenti_IF_EX02_AttackState[<span class=\"descriptionNumberColor\">Golden Harvest</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W2_Argenti_IF_EX02_UltraState[<span class=\"descriptionNumberColor\">Medal of Elegance</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W2_Argenti_IF_EX02_DefendState[<span class=\"descriptionNumberColor\">Chivalric Wrath</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill12"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_W2_Argenti_IF_EX02_AttackState[<span class=\"descriptionNumberColor\">Golden Harvest</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W2_Argenti_IF_EX02_DefendState[<span class=\"descriptionNumberColor\">Chivalric Wrath</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W2_Argenti_IF_EX02_UltraState[<span class=\"descriptionNumberColor\">Medal of Elegance</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W2_Argenti_IF_EX02_AttackState[<span class=\"descriptionNumberColor\">Golden Harvest</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill13"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_W2_Argenti_IF_EX02_UltraState[<span class=\"descriptionNumberColor\">Medal of Elegance</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W2_Argenti_IF_EX02_DefendState[<span class=\"descriptionNumberColor\">Chivalric Wrath</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W2_Argenti_IF_EX02_AttackState[<span class=\"descriptionNumberColor\">Golden Harvest</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W2_Argenti_IF_EX02_UltraState[<span class=\"descriptionNumberColor\">Medal of Elegance</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill16"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W2_Argenti_IF_EX02_DefendState[<span class=\"descriptionNumberColor\">Chivalric Wrath</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W2_Argenti_IF_EX02_AttackState[<span class=\"descriptionNumberColor\">Golden Harvest</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_W2_Argenti_IF_EX02_UltraState[<span class=\"descriptionNumberColor\">Medal of Elegance</span>]"
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