const compositeAbilityObject = {
  "fullCharacterName": 3024013,
  "trimCharacterName": 3024013,
  "abilityList": [
    "3024013_Monster_W2_Argenti_IF_EX05_PassiveAbility",
    "3024013_Monster_W2_Argenti_IF_EX04_PassiveAbility",
    "3024013_Monster_W2_Argenti_IF_EX03_PassiveAbility",
    "3024013_Monster_W2_Argenti_IF_EX02_PassiveAbility",
    "3024013_Monster_W2_Argenti_IF_EX01_PassiveAbility",
    "3024013_Monster_W2_Argenti_IF_EX_Basic_PassiveAbility",
    "3024013_Monster_W2_Argenti_IF_TransferEnhance",
    "3024013_Monster_W2_Argenti_Ability24_IF_Part02",
    "3024013_Monster_W2_Argenti_Ability23_IF_Part02",
    "3024013_Monster_W2_Argenti_Ability22_IF_Part02",
    "3024013_Monster_W2_Argenti_Ability21_IF_Part02",
    "3024013_Monster_W2_Argenti_IF_Ability05_Part02",
    "3024013_Monster_W2_Argenti_Ability10_IF_Part01",
    "3024013_Monster_W2_Argenti_Ability17_IF_Part02",
    "3024013_Monster_W2_Argenti_Ability17_IF_Part01",
    "3024013_Monster_W2_Argenti_Ability16_IF_Part02_Insert",
    "3024013_Monster_W2_Argenti_Ability16_IF_Part01_Insert",
    "3024013_Monster_W2_Argenti_Ability16_IF_Part02",
    "3024013_Monster_W2_Argenti_Ability16_IF_Part01",
    "3024013_Monster_W2_Argenti_Ability09_IF_Insert",
    "3024013_Monster_W2_Argenti_Ability09_IF_Part02",
    "3024013_Monster_W2_Argenti_Ability09_IF_Part01",
    "3024013_Monster_W2_Argenti_Ability15_IF_Part02",
    "3024013_Monster_W2_Argenti_Ability15_IF_Part01",
    "3024013_Monster_W2_Argenti_Ability14_IF_Part02",
    "3024013_Monster_W2_Argenti_Ability14_IF_Part01",
    "3024013_Monster_W2_Argenti_Ability13_IF_Part02",
    "3024013_Monster_W2_Argenti_Ability13_IF_Part01",
    "3024013_Monster_W2_Argenti_Ability12_IF_Part02",
    "3024013_Monster_W2_Argenti_Ability12_IF_Part01",
    "3024013_Monster_W2_Argenti_Ability11_IF_Part02",
    "3024013_Monster_W2_Argenti_Ability11_IF_Part01",
    "3024013_Monster_W2_Argenti_IF_Passive02",
    "3024013_Monster_W2_Argenti_IF_Passive01",
    "3024013_Monster_W2_Argenti_PartChange2T3_Insert",
    "3024013_Monster_W2_Argenti_Ability08_Part02",
    "3024013_Monster_W2_Argenti_Ability08_Part01",
    "3024013_Monster_W2_Argenti_Ability06_Part02",
    "3024013_Monster_W2_Argenti_Ability06_Part01",
    "3024013_Monster_W2_Argenti_Ability07_Part02",
    "3024013_Monster_W2_Argenti_Ability07_Part01",
    "3024013_Monster_W2_Argenti_Ability05_Part02",
    "3024013_Monster_W2_Argenti_Ability05_Part01",
    "3024013_Monster_W2_Argenti_Ability04_Part02",
    "3024013_Monster_W2_Argenti_Ability04_Part01",
    "3024013_Monster_W2_Argenti_Ability03_Part02",
    "3024013_Monster_W2_Argenti_Ability03_Part01",
    "3024013_Monster_W2_Argenti_Ability02_Part02",
    "3024013_Monster_W2_Argenti_Ability02_Part01",
    "3024013_Monster_W2_Argenti_Ability01_Part02",
    "3024013_Monster_W2_Argenti_Ability01_Part01",
    "3024013_BattleEventAbility_Monster_W2_Argenti_MainStory202",
    "3024013_Monster_W2_Argenti_PassiveAbility202",
    "3024013_Monster_W2_Argenti_PartChange_Insert",
    "3024013_Monster_W2_Argenti_PassiveAbilityInitiate",
    "3024013_Monster_W2_Argenti_Passive02",
    "3024013_Monster_W2_Argenti_Passive01",
    "3024013_Monster_W2_Argenti_PassiveAbility_BGM",
    "3024013_Modifiers",
    "3024013_Functions"
  ],
  "abilityObject": {
    "3024013_Monster_W2_Argenti_IF_EX05_PassiveAbility": {
      "fileName": "3024013_Monster_W2_Argenti_IF_EX05_PassiveAbility",
      "skillTrigger": "SkillEX05",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "3024013_Monster_W2_Argenti_IF_EX04_PassiveAbility": {
      "fileName": "3024013_Monster_W2_Argenti_IF_EX04_PassiveAbility",
      "skillTrigger": "SkillEX04",
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
            "value2": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_W2_Argenti_IF_EX_EnemyCount",
              "valuePerStack": {
                "MDF_ShowValue1": {
                  "operator": "Variables[0] ({[SkillEX04[0]]}) || RETURN",
                  "displayLines": "{[SkillEX04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX04[0]]}"
                  ]
                },
                "MDF_ShowValue2": {
                  "operator": "Variables[0] ({[SkillEX04[1]]}) || RETURN",
                  "displayLines": "{[SkillEX04[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX04[1]]}"
                  ]
                }
              }
            }
          ]
        }
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_IF_EX03_PassiveAbility": {
      "fileName": "3024013_Monster_W2_Argenti_IF_EX03_PassiveAbility",
      "skillTrigger": "SkillEX03",
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
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_W2_Argenti_IF_EX_ExtraEnhanceController"
            }
          ]
        }
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_IF_EX02_PassiveAbility": {
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
    },
    "3024013_Monster_W2_Argenti_IF_EX01_PassiveAbility": {
      "fileName": "3024013_Monster_W2_Argenti_IF_EX01_PassiveAbility",
      "skillTrigger": "SkillEX01",
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
              "modifier": "Enemy_W2_Cocolia_IF_SuperArmorController",
              "valuePerStack": {
                "MDF_IF_BOSS_BreakDelay": {
                  "operator": "Variables[0] ({[SkillEX01[2]]}) || RETURN",
                  "displayLines": "{[SkillEX01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX01[2]]}"
                  ]
                },
                "MDF_IF_BOSS_WeaknessDMGUpRatio": {
                  "operator": "Variables[0] ({[SkillEX01[1]]}) || RETURN",
                  "displayLines": "{[SkillEX01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX01[1]]}"
                  ]
                },
                "MDF_IF_BOSS_Standard_Defence": {
                  "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
                  "displayLines": "{[SkillEX01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX01[0]]}"
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
              "modifier": "Enemy_W2_Cocolia_IF_SoftFrenzyController",
              "valuePerStack": {
                "MDF_FrenzyStartDelay": {
                  "operator": "Variables[0] ({[SkillEX05[0]]}) || RETURN",
                  "displayLines": "{[SkillEX05[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX05[0]]}"
                  ]
                },
                "MDF_FrenzyIntervalDelay": {
                  "operator": "Variables[0] ({[SkillEX05[1]]}) || RETURN",
                  "displayLines": "{[SkillEX05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX05[1]]}"
                  ]
                },
                "MDF_MaxFrenzyLayer": {
                  "operator": "Variables[0] ({[SkillEX05[2]]}) || RETURN",
                  "displayLines": "{[SkillEX05[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX05[2]]}"
                  ]
                },
                "MDF_TokenDMGAddRatioPerLayer": {
                  "operator": "Variables[0] ({[SkillEX05[3]]}) || RETURN",
                  "displayLines": "{[SkillEX05[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX05[3]]}"
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
              "modifier": "Monster_W2_Argenti_IF_EX01_PassiveAbility_Boss"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_IF_EX01_PassiveAbility_Boss",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 4
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_W2_Cocolia_IF_SuperArmorController",
                      "valuePerStack": {
                        "MDF_IF_BOSS_BreakDelay": {
                          "operator": "Variables[0] ({[SkillEX01[2]]}) || RETURN",
                          "displayLines": "{[SkillEX01[2]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillEX01[2]]}"
                          ]
                        },
                        "MDF_IF_BOSS_WeaknessDMGUpRatio": {
                          "operator": "Variables[0] ({[SkillEX01[1]]}) || RETURN",
                          "displayLines": "{[SkillEX01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillEX01[1]]}"
                          ]
                        },
                        "MDF_IF_BOSS_Standard_Defence": {
                          "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
                          "displayLines": "{[SkillEX01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillEX01[0]]}"
                          ]
                        }
                      }
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
    "3024013_Monster_W2_Argenti_IF_EX_Basic_PassiveAbility": {
      "fileName": "3024013_Monster_W2_Argenti_IF_EX_Basic_PassiveAbility",
      "skillTrigger": "SkillEXPassiveSkill",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "3024013_Monster_W2_Argenti_IF_TransferEnhance": {
      "fileName": "3024013_Monster_W2_Argenti_IF_TransferEnhance",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (FlowerPower) || RETURN",
            "displayLines": "FlowerPower",
            "constants": [],
            "variables": [
              "FlowerPower"
            ]
          },
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_W2_Argenti_IF_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                      }
                    ],
                    "invertCondition": true
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "Sword_FirstFlag"
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
                  "modifier": "Enemy_W2_Argenti_IF_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability24_IF_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability24_IF_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Modifier"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Eff01_Modifier"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Eff02_Modifier"
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[0]]}) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "({[Skill10[0]]} * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "{[Skill10[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (0.8) || MUL || RETURN",
              "displayLines": "({[Skill10[1]]} * 0.8)",
              "constants": [
                0.8
              ],
              "variables": [
                "{[Skill10[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (0.8) || MUL || RETURN",
              "displayLines": "({[Skill10[1]]} * 0.8)",
              "constants": [
                0.8
              ],
              "variables": [
                "{[Skill10[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (0.8) || MUL || RETURN",
              "displayLines": "({[Skill10[1]]} * 0.8)",
              "constants": [
                0.8
              ],
              "variables": [
                "{[Skill10[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (0.8) || MUL || RETURN",
              "displayLines": "({[Skill10[1]]} * 0.8)",
              "constants": [
                0.8
              ],
              "variables": [
                "{[Skill10[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (0.8) || MUL || RETURN",
              "displayLines": "({[Skill10[1]]} * 0.8)",
              "constants": [
                0.8
              ],
              "variables": [
                "{[Skill10[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Big"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[0]]}) || Constants[0] (0.8) || MUL || RETURN",
              "displayLines": "({[Skill10[0]]} * 0.8)",
              "constants": [
                0.8
              ],
              "variables": [
                "{[Skill10[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "80%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "FlowerPower",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_IF_FlowerPower[<span class=\"descriptionNumberColor\">Wreath</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability23_IF_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability23_IF_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Modifier"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Eff01_Modifier"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Eff02_Modifier"
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[0]]}) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "({[Skill10[0]]} * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "{[Skill10[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (0.6) || MUL || RETURN",
              "displayLines": "({[Skill10[1]]} * 0.6)",
              "constants": [
                0.6
              ],
              "variables": [
                "{[Skill10[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (0.6) || MUL || RETURN",
              "displayLines": "({[Skill10[1]]} * 0.6)",
              "constants": [
                0.6
              ],
              "variables": [
                "{[Skill10[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (0.6) || MUL || RETURN",
              "displayLines": "({[Skill10[1]]} * 0.6)",
              "constants": [
                0.6
              ],
              "variables": [
                "{[Skill10[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (0.6) || MUL || RETURN",
              "displayLines": "({[Skill10[1]]} * 0.6)",
              "constants": [
                0.6
              ],
              "variables": [
                "{[Skill10[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (0.6) || MUL || RETURN",
              "displayLines": "({[Skill10[1]]} * 0.6)",
              "constants": [
                0.6
              ],
              "variables": [
                "{[Skill10[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Big"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[0]]}) || Constants[0] (0.8) || MUL || RETURN",
              "displayLines": "({[Skill10[0]]} * 0.8)",
              "constants": [
                0.8
              ],
              "variables": [
                "{[Skill10[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "80%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "FlowerPower",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_IF_FlowerPower[<span class=\"descriptionNumberColor\">Wreath</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability22_IF_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability22_IF_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Modifier"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Eff01_Modifier"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Eff02_Modifier"
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[0]]}) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "({[Skill10[0]]} * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "{[Skill10[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (2) || DIV || RETURN",
              "displayLines": "({[Skill10[1]]} / 2)",
              "constants": [
                2
              ],
              "variables": [
                "{[Skill10[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (2) || DIV || RETURN",
              "displayLines": "({[Skill10[1]]} / 2)",
              "constants": [
                2
              ],
              "variables": [
                "{[Skill10[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (2) || DIV || RETURN",
              "displayLines": "({[Skill10[1]]} / 2)",
              "constants": [
                2
              ],
              "variables": [
                "{[Skill10[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (2) || DIV || RETURN",
              "displayLines": "({[Skill10[1]]} / 2)",
              "constants": [
                2
              ],
              "variables": [
                "{[Skill10[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Big"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[0]]}) || Constants[0] (0.8) || MUL || RETURN",
              "displayLines": "({[Skill10[0]]} * 0.8)",
              "constants": [
                0.8
              ],
              "variables": [
                "{[Skill10[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "80%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "FlowerPower",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_IF_FlowerPower[<span class=\"descriptionNumberColor\">Wreath</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability21_IF_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability21_IF_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Modifier"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Eff01_Modifier"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Eff02_Modifier"
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[0]]}) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "({[Skill10[0]]} * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "{[Skill10[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (3) || DIV || RETURN",
              "displayLines": "({[Skill10[1]]} / 3)",
              "constants": [
                3
              ],
              "variables": [
                "{[Skill10[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (3) || DIV || RETURN",
              "displayLines": "({[Skill10[1]]} / 3)",
              "constants": [
                3
              ],
              "variables": [
                "{[Skill10[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[1]]}) || Constants[0] (3) || DIV || RETURN",
              "displayLines": "({[Skill10[1]]} / 3)",
              "constants": [
                3
              ],
              "variables": [
                "{[Skill10[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Small"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shake_Big"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[0]]}) || Constants[0] (0.8) || MUL || RETURN",
              "displayLines": "({[Skill10[0]]} * 0.8)",
              "constants": [
                0.8
              ],
              "variables": [
                "{[Skill10[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "80%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "FlowerPower",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_IF_FlowerPower[<span class=\"descriptionNumberColor\">Wreath</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_IF_Ability05_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_IF_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[0]]}) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "({[Skill10[0]]} * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "{[Skill10[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[0]]}) || Constants[0] (0.8) || MUL || RETURN",
              "displayLines": "({[Skill10[0]]} * 0.8)",
              "constants": [
                0.8
              ],
              "variables": [
                "{[Skill10[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "80%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability10_IF_Part01": {
      "fileName": "3024013_Monster_W2_Argenti_Ability10_IF_Part01",
      "childAbilityList": [
        "3024013_Monster_W2_Argenti_Ability10_IF_Part01",
        "3024013_Monster_W2_Argenti_Ability10_IF_Camera",
        "3024013_Monster_W2_Argenti_Ability21_IF_Part02",
        "3024013_Monster_W2_Argenti_Ability22_IF_Part02",
        "3024013_Monster_W2_Argenti_Ability23_IF_Part02",
        "3024013_Monster_W2_Argenti_Ability24_IF_Part02",
        "3024013_Monster_W2_Argenti_IF_Ability05_Part02"
      ],
      "skillTrigger": "Skill10",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "FlowerPower",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Modifier"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Eff01_Modifier"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Eff02_Modifier"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W2_Argenti_IF_Ability05_Part02",
              "isTrigger": true
            },
            "Deleted bullshit"
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "FlowerPower",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W2_Argenti_Ability21_IF_Part02",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "FlowerPower",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W2_Argenti_Ability22_IF_Part02",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "FlowerPower",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W2_Argenti_Ability23_IF_Part02",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "FlowerPower",
            "compareType": "=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W2_Argenti_Ability24_IF_Part02",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        }
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability17_IF_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability17_IF_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Looped Event",
          "maxLoops": 2,
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_W2_Argenti_IF_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                      }
                    ],
                    "invertCondition": true
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "Sword_FirstFlag"
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
                  "modifier": "Enemy_W2_Argenti_IF_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability17_IF_Part01": {
      "fileName": "3024013_Monster_W2_Argenti_Ability17_IF_Part01",
      "childAbilityList": [
        "3024013_Monster_W2_Argenti_Ability17_IF_Part01",
        "3024013_Monster_W2_Argenti_Ability17_IF_Part02"
      ],
      "skillTrigger": "Skill17",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability17_IF_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability16_IF_Part02_Insert": {
      "fileName": "3024013_Monster_W2_Argenti_Ability16_IF_Part02_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Collect_Power"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_Ability16_IF_MarkModifier"
        }
      ]
    },
    "3024013_Monster_W2_Argenti_Ability16_IF_Part01_Insert": {
      "fileName": "3024013_Monster_W2_Argenti_Ability16_IF_Part01_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability16_IF_Part02_Insert",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability16_IF_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability16_IF_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "Enemy_W2_ArgentiTotem_IF_Initiate"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "Enemy_W2_ArgentiTotem_01_IF_Initiate"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "Enemy_W2_ArgentiTotem_02_IF_Initiate"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Collect_Power"
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "silent": true
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "typeOverride": "Buff",
          "silent": true
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_Ability16_IF_MarkModifier"
        }
      ]
    },
    "3024013_Monster_W2_Argenti_Ability16_IF_Part01": {
      "fileName": "3024013_Monster_W2_Argenti_Ability16_IF_Part01",
      "childAbilityList": [
        "3024013_Monster_W2_Argenti_Ability16_IF_Part01",
        "3024013_Monster_W2_Argenti_Ability16_IF_Part02",
        "3024013_Monster_W2_Argenti_Ability16_IF_Part01_Insert",
        "3024013_Monster_W2_Argenti_Ability16_IF_Part02_Insert"
      ],
      "skillTrigger": "Skill16",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability16_IF_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability09_IF_Insert": {
      "fileName": "3024013_Monster_W2_Argenti_Ability09_IF_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability09_IF_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability09_IF_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Eff01_Modifier"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Eff02_Modifier"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_IF_FlowerTeam"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Matching Team Count",
            "countType": "Count1",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Modifier"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_Ability09_IF_BOSS_Eff02_Modifier",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_Ability09_IF_BOSS_Eff01_Modifier",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_Ability09_IF_BOSS_Modifier",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stayInTeam": false
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add to Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Argenti_Ability09_IF_Insert",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "LevelPerformAvatar",
                  "ownerState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Matching Team Count"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
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
    "3024013_Monster_W2_Argenti_Ability09_IF_Part01": {
      "fileName": "3024013_Monster_W2_Argenti_Ability09_IF_Part01",
      "childAbilityList": [
        "3024013_Monster_W2_Argenti_Ability09_IF_Part01",
        "3024013_Monster_W2_Argenti_Ability09_IF_Part02",
        "3024013_Monster_W2_Argenti_Ability09_IF_Camera",
        "3024013_Monster_W2_Argenti_Ability09_IF_Insert"
      ],
      "skillTrigger": "Skill09",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability09_IF_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase0"
        }
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability15_IF_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability15_IF_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Monster_W2_Argenti_Ability15_IF_Taunt01_MarkModifier"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Monster_W2_Argenti_Ability15_IF_Taunt02_MarkModifier"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Monster_W2_Argenti_Ability15_IF_Taunt03_MarkModifier"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Monster_W2_Argenti_Ability15_IF_Taunt04_MarkModifier"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Argenti_Ability15_IF_Taunt01_MarkModifier"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_Ability15_IF_Taunt01_MarkModifier"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Standard_AbilityTarget"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Pos2"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Argenti_Ability15_IF_Taunt02_MarkModifier"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_Ability15_IF_Taunt02_MarkModifier"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Standard_AbilityTarget"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Pos3"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Argenti_Ability15_IF_Taunt03_MarkModifier"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_Ability15_IF_Taunt03_MarkModifier"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Standard_AbilityTarget"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team",
            "location": "Max"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Argenti_Ability15_IF_Taunt04_MarkModifier"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_Ability15_IF_Taunt04_MarkModifier"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Standard_AbilityTarget"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_Summon01"
                }
              }
            ]
          },
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Standard_AbilityTarget"
                }
              ]
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_Summon01"
                }
              }
            ]
          },
          "ability": "Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part01",
          "isTrigger": true
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_Summon02"
                }
              }
            ]
          },
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team",
                "location": "Pos2"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Standard_AbilityTarget"
                }
              ]
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_Summon02"
                }
              }
            ]
          },
          "ability": "Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part01",
          "isTrigger": true
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_Summon03"
                }
              }
            ]
          },
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team",
                "location": "Pos3"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Standard_AbilityTarget"
                }
              ]
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_Summon03"
                }
              }
            ]
          },
          "ability": "Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part01",
          "isTrigger": true
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_Summon01"
                }
              }
            ]
          },
          "ability": "Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part02",
          "isTrigger": true
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_Summon04"
                }
              }
            ]
          },
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team",
                "location": "Max"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Standard_AbilityTarget"
                }
              ]
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_Summon04"
                }
              }
            ]
          },
          "ability": "Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part01",
          "isTrigger": true
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_Summon02"
                }
              }
            ]
          },
          "ability": "Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part02",
          "isTrigger": true
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_Summon03"
                }
              }
            ]
          },
          "ability": "Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part02",
          "isTrigger": true
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_Summon04"
                }
              }
            ]
          },
          "ability": "Monster_W2_ArgentiTotem_02_IF_AssistAbility01_Part02",
          "isTrigger": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "Monster_W2_Argenti_Ability15_IF_MarkModifier"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_Ability15_IF_Taunt04_MarkModifier",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_Ability15_IF_Taunt03_MarkModifier",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_Ability15_IF_Taunt02_MarkModifier",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_Ability15_IF_Taunt01_MarkModifier",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_Ability15_IF_MarkModifier"
        }
      ]
    },
    "3024013_Monster_W2_Argenti_Ability15_IF_Part01": {
      "fileName": "3024013_Monster_W2_Argenti_Ability15_IF_Part01",
      "childAbilityList": [
        "3024013_Monster_W2_Argenti_Ability15_IF_Part01",
        "3024013_Monster_W2_Argenti_Ability15_IF_Part02",
        "3024013_Monster_W2_Argenti_Ability15_IF_Camera"
      ],
      "skillTrigger": "Skill15",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability15_IF_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability14_IF_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability14_IF_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Sword_FirstFlag",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_W2_Argenti_IF_EX_PowerAdd"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Sword_FirstFlag",
              "value": 0
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 4,
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  {
                    "name": "Sort by Physical Positioning",
                    "byHighest": true
                  }
                ]
              },
              "includeDyingTargets": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Argenti_Ability14_IF_MarkModifier",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_Ability14_IF_MarkModifier"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W2_ArgentiTotem_IF_AssistAbility01_Part01",
                  "isTrigger": true
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "variableName": "_TargetNum"
        },
        {
          "name": "Looped Event",
          "maxLoops": 4,
          "Event": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Monster_W2_Argenti_Ability14_IF_MarkModifier"
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (_TargetNum) || RETURN",
                "displayLines": "_TargetNum",
                "constants": [],
                "variables": [
                  "_TargetNum"
                ]
              },
              "Event": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Argenti_Ability14_IF_MarkModifier",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W2_Argenti_Ability14_IF_MarkModifier"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill14[0]]}) || Constants[0] (16) || DIV || RETURN",
                          "displayLines": "({[Skill14[0]]} / 16)",
                          "constants": [
                            16
                          ],
                          "variables": [
                            "{[Skill14[0]]}"
                          ]
                        },
                        "Toughness": null,
                        "ToughnessDMGType": {
                          "DamageType": "Physical"
                        },
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "6.25%"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "Monster_W2_Argenti_Ability14_IF_MarkModifier"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_Ability14_IF_MarkModifier",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3024013_Monster_W2_Argenti_Ability14_IF_Part01": {
      "fileName": "3024013_Monster_W2_Argenti_Ability14_IF_Part01",
      "childAbilityList": [
        "3024013_Monster_W2_Argenti_Ability14_IF_Part01",
        "3024013_Monster_W2_Argenti_Ability14_IF_Part02",
        "3024013_Monster_W2_Argenti_Ability14_IF_Camera"
      ],
      "skillTrigger": "Skill14",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability14_IF_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability13_IF_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability13_IF_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "Sword_FirstFlag",
          "value": 1
        },
        {
          "name": "Random Event",
          "odds": [
            0.5,
            0.5
          ],
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Argenti_SummonAllMonsters",
              "variables": {
                "SummonMonsterID": {
                  "operator": "Variables[0] (SummonID01) || RETURN",
                  "displayLines": "SummonID01",
                  "constants": [],
                  "variables": [
                    "SummonID01"
                  ]
                },
                "DelayRatio04": {
                  "operator": "Variables[0] ({[Skill13[0]]}) || RETURN",
                  "displayLines": "{[Skill13[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill13[0]]}"
                  ]
                },
                "DelayRatio02": {
                  "operator": "Variables[0] ({[Skill13[3]]}) || RETURN",
                  "displayLines": "{[Skill13[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill13[3]]}"
                  ]
                },
                "DelayRatio01": {
                  "operator": "Variables[0] ({[Skill13[2]]}) || RETURN",
                  "displayLines": "{[Skill13[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill13[2]]}"
                  ]
                },
                "DelayRatio03": {
                  "operator": "Variables[0] ({[Skill13[1]]}) || RETURN",
                  "displayLines": "{[Skill13[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill13[1]]}"
                  ]
                }
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Argenti_SummonAllMonsters",
              "variables": {
                "SummonMonsterID": {
                  "operator": "Variables[0] (SummonID01) || RETURN",
                  "displayLines": "SummonID01",
                  "constants": [],
                  "variables": [
                    "SummonID01"
                  ]
                },
                "DelayRatio04": {
                  "operator": "Variables[0] ({[Skill13[1]]}) || RETURN",
                  "displayLines": "{[Skill13[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill13[1]]}"
                  ]
                },
                "DelayRatio02": {
                  "operator": "Variables[0] ({[Skill13[2]]}) || RETURN",
                  "displayLines": "{[Skill13[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill13[2]]}"
                  ]
                },
                "DelayRatio01": {
                  "operator": "Variables[0] ({[Skill13[3]]}) || RETURN",
                  "displayLines": "{[Skill13[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill13[3]]}"
                  ]
                },
                "DelayRatio03": {
                  "operator": "Variables[0] ({[Skill13[0]]}) || RETURN",
                  "displayLines": "{[Skill13[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill13[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Argenti_AddWeaknessToAllSummons"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W2_Argenti_IF_EX_PowerAddMax"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability13_IF_Part01": {
      "fileName": "3024013_Monster_W2_Argenti_Ability13_IF_Part01",
      "childAbilityList": [
        "3024013_Monster_W2_Argenti_Ability13_IF_Part01",
        "3024013_Monster_W2_Argenti_Ability13_IF_Part02"
      ],
      "skillTrigger": "Skill13",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability13_IF_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability12_IF_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability12_IF_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "Sword_FirstFlag",
          "value": 1
        },
        {
          "name": "Random Event",
          "odds": [
            0.5,
            0.5
          ],
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Argenti_SummonAllMonsters",
              "variables": {
                "SummonMonsterID": {
                  "operator": "Variables[0] (SummonID03) || RETURN",
                  "displayLines": "SummonID03",
                  "constants": [],
                  "variables": [
                    "SummonID03"
                  ]
                },
                "DelayRatio04": {
                  "operator": "Variables[0] ({[Skill12[0]]}) || RETURN",
                  "displayLines": "{[Skill12[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill12[0]]}"
                  ]
                },
                "DelayRatio02": {
                  "operator": "Variables[0] ({[Skill12[3]]}) || RETURN",
                  "displayLines": "{[Skill12[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill12[3]]}"
                  ]
                },
                "DelayRatio01": {
                  "operator": "Variables[0] ({[Skill12[2]]}) || RETURN",
                  "displayLines": "{[Skill12[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill12[2]]}"
                  ]
                },
                "DelayRatio03": {
                  "operator": "Variables[0] ({[Skill12[1]]}) || RETURN",
                  "displayLines": "{[Skill12[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill12[1]]}"
                  ]
                }
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Argenti_SummonAllMonsters",
              "variables": {
                "SummonMonsterID": {
                  "operator": "Variables[0] (SummonID03) || RETURN",
                  "displayLines": "SummonID03",
                  "constants": [],
                  "variables": [
                    "SummonID03"
                  ]
                },
                "DelayRatio04": {
                  "operator": "Variables[0] ({[Skill12[1]]}) || RETURN",
                  "displayLines": "{[Skill12[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill12[1]]}"
                  ]
                },
                "DelayRatio02": {
                  "operator": "Variables[0] ({[Skill12[2]]}) || RETURN",
                  "displayLines": "{[Skill12[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill12[2]]}"
                  ]
                },
                "DelayRatio01": {
                  "operator": "Variables[0] ({[Skill12[3]]}) || RETURN",
                  "displayLines": "{[Skill12[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill12[3]]}"
                  ]
                },
                "DelayRatio03": {
                  "operator": "Variables[0] ({[Skill12[0]]}) || RETURN",
                  "displayLines": "{[Skill12[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill12[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W2_Argenti_IF_EX_PowerAdd"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability12_IF_Part01": {
      "fileName": "3024013_Monster_W2_Argenti_Ability12_IF_Part01",
      "childAbilityList": [
        "3024013_Monster_W2_Argenti_Ability12_IF_Part01",
        "3024013_Monster_W2_Argenti_Ability12_IF_Part02"
      ],
      "skillTrigger": "Skill12",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability12_IF_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability11_IF_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability11_IF_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Random Event",
          "odds": [
            0.5,
            0.5
          ],
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Argenti_SummonAllMonsters",
              "variables": {
                "SummonMonsterID": {
                  "operator": "Variables[0] (SummonID02) || RETURN",
                  "displayLines": "SummonID02",
                  "constants": [],
                  "variables": [
                    "SummonID02"
                  ]
                },
                "DelayRatio04": {
                  "operator": "Variables[0] ({[Skill11[0]]}) || RETURN",
                  "displayLines": "{[Skill11[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill11[0]]}"
                  ]
                },
                "DelayRatio02": {
                  "operator": "Variables[0] ({[Skill11[3]]}) || RETURN",
                  "displayLines": "{[Skill11[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill11[3]]}"
                  ]
                },
                "DelayRatio01": {
                  "operator": "Variables[0] ({[Skill11[2]]}) || RETURN",
                  "displayLines": "{[Skill11[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill11[2]]}"
                  ]
                },
                "DelayRatio03": {
                  "operator": "Variables[0] ({[Skill11[1]]}) || RETURN",
                  "displayLines": "{[Skill11[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill11[1]]}"
                  ]
                }
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Argenti_SummonAllMonsters",
              "variables": {
                "SummonMonsterID": {
                  "operator": "Variables[0] (SummonID02) || RETURN",
                  "displayLines": "SummonID02",
                  "constants": [],
                  "variables": [
                    "SummonID02"
                  ]
                },
                "DelayRatio04": {
                  "operator": "Variables[0] ({[Skill11[1]]}) || RETURN",
                  "displayLines": "{[Skill11[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill11[1]]}"
                  ]
                },
                "DelayRatio02": {
                  "operator": "Variables[0] ({[Skill11[2]]}) || RETURN",
                  "displayLines": "{[Skill11[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill11[2]]}"
                  ]
                },
                "DelayRatio01": {
                  "operator": "Variables[0] ({[Skill11[3]]}) || RETURN",
                  "displayLines": "{[Skill11[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill11[3]]}"
                  ]
                },
                "DelayRatio03": {
                  "operator": "Variables[0] ({[Skill11[0]]}) || RETURN",
                  "displayLines": "{[Skill11[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill11[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Argenti_AddWeaknessToAllSummons"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W2_Argenti_IF_Protect"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W2_Argenti_IF_EX_PowerAdd"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability11_IF_Part01": {
      "fileName": "3024013_Monster_W2_Argenti_Ability11_IF_Part01",
      "childAbilityList": [
        "3024013_Monster_W2_Argenti_Ability11_IF_Part01",
        "3024013_Monster_W2_Argenti_Ability11_IF_Part02"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability11_IF_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_IF_Passive02": {
      "fileName": "3024013_Monster_W2_Argenti_IF_Passive02",
      "skillTrigger": "SkillP03",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_IF_Initiate"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_IF_Initiate",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Argenti_KillAllMonsters"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Die_Flag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
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
                      "variableName": "Die_Flag",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_Standard_Endurance"
                    },
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": null,
                      "variableName": "MaxPhase",
                      "value": "MaxMonsterPhase"
                    },
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
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Enemy_W2_Argenti_IF_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Argenti_PartChange_Insert",
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AIFlag",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SAIFlag",
                          "value": 3
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "Enemy_W2_Yanqing_01_ChangePhaseDestroy"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
                  },
                  "modifier": "Enemy_W2_Yanqing_01_ChangePhaseDestroy"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Argenti_KillAllMonsters"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3024013_Monster_W2_Argenti_IF_Passive01": {
      "fileName": "3024013_Monster_W2_Argenti_IF_Passive01",
      "skillTrigger": "SkillP02",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "Monster_IF_InsertCount"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "Monster_IF_InsertCameraFlag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "Monster_IF_InsertCount02"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "Monster_IF_InsertCameraFlag02"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "W2_Argenti_BattleScore1"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "W2_Argenti_BattleScore2"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMorePerTurn"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W2_Argenti_IF_Boss_Enhance"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W2_Argenti_IF_AIController"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multi": {
            "operator": "Variables[0] ({[SkillP02[0]]}) || RETURN",
            "displayLines": "{[SkillP02[0]]}",
            "constants": [],
            "variables": [
              "{[SkillP02[0]]}"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W2_Argenti_IF_PowerCollecterController"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W2_Argenti_IF_EnterCombatAlert"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_IF_EnterCombatAlert",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
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
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Monster_IF_InsertCount",
            "Monster_IF_InsertCameraFlag",
            "Monster_IF_InsertCount02",
            "Monster_IF_InsertCameraFlag02"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_IF_PowerCollecterController",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "SAIFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 31,
                        "invertCondition": true
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
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_W2_Argenti_IF_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Argenti_Ability16_IF_Part01_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "priorityTag": "MonsterBattleCry",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
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
            "Monster_IF_InsertCount",
            "Monster_IF_InsertCameraFlag",
            "Monster_IF_InsertCount02",
            "Monster_IF_InsertCameraFlag02"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_IF_AIController",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SAIFlag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_IF_InsertCount",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_IF_InsertCameraFlag",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_IF_InsertCount02",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_IF_InsertCameraFlag02",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SAIFlag",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SAIFlag",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SAIFlag",
                      "value": 2
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Monster_IF_InsertCount",
            "Monster_IF_InsertCameraFlag",
            "Monster_IF_InsertCount02",
            "Monster_IF_InsertCameraFlag02"
          ]
        }
      ]
    },
    "3024013_Monster_W2_Argenti_PartChange2T3_Insert": {
      "fileName": "3024013_Monster_W2_Argenti_PartChange2T3_Insert",
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
          "name": "Use Custom Character Function",
          "functionName": "Monster_ChangePhase"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multi": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_Standard_Endurance"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Phase_Flag",
          "value": 3
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 1
        }
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability08_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "healPercent": 1,
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
                "displayLines": "{[Skill08[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill08[0]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID02) || RETURN",
                    "displayLines": "SummonID02",
                    "constants": [],
                    "variables": [
                      "SummonID02"
                    ]
                  },
                  "locationType": "First"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
                "displayLines": "{[Skill08[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill08[0]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID02) || RETURN",
                    "displayLines": "SummonID02",
                    "constants": [],
                    "variables": [
                      "SummonID02"
                    ]
                  },
                  "locationType": "Last"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
                "displayLines": "{[Skill08[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill08[0]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID02) || RETURN",
                    "displayLines": "SummonID02",
                    "constants": [],
                    "variables": [
                      "SummonID02"
                    ]
                  },
                  "locationType": "First"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
                "displayLines": "{[Skill08[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill08[0]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID02) || RETURN",
                    "displayLines": "SummonID02",
                    "constants": [],
                    "variables": [
                      "SummonID02"
                    ]
                  },
                  "locationType": "Last"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
                "displayLines": "{[Skill08[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill08[0]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID02) || RETURN",
                    "displayLines": "SummonID02",
                    "constants": [],
                    "variables": [
                      "SummonID02"
                    ]
                  },
                  "locationType": "First"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
                "displayLines": "{[Skill08[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill08[0]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID02) || RETURN",
                    "displayLines": "SummonID02",
                    "constants": [],
                    "variables": [
                      "SummonID02"
                    ]
                  },
                  "locationType": "Last"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
                "displayLines": "{[Skill08[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill08[0]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID02) || RETURN",
                    "displayLines": "SummonID02",
                    "constants": [],
                    "variables": [
                      "SummonID02"
                    ]
                  },
                  "locationType": "First"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
                "displayLines": "{[Skill08[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill08[0]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID02) || RETURN",
                    "displayLines": "SummonID02",
                    "constants": [],
                    "variables": [
                      "SummonID02"
                    ]
                  },
                  "locationType": "Last"
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability08_Part01": {
      "fileName": "3024013_Monster_W2_Argenti_Ability08_Part01",
      "childAbilityList": [
        "3024013_Monster_W2_Argenti_Ability08_Camera",
        "3024013_Monster_W2_Argenti_Ability08_Part01",
        "3024013_Monster_W2_Argenti_Ability08_Part02"
      ],
      "skillTrigger": "Skill08",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability06_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMorePerTurn"
        },
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 3024011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Argenti (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 302401100,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "Enemy_W2_Argenti_Power_RL[<span class=\"descriptionNumberColor\">Soul Ascension</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                "displayLines": "{[Skill04[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[0]]}"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "Enemy_W2_Argenti_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                "displayLines": "{[Skill04[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[0]]}"
                ]
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability06_Part01": {
      "fileName": "3024013_Monster_W2_Argenti_Ability06_Part01",
      "childAbilityList": [
        "3024013_Monster_W2_Argenti_Ability06_Camera",
        "3024013_Monster_W2_Argenti_Ability06_Part01",
        "3024013_Monster_W2_Argenti_Ability06_Part02"
      ],
      "skillTrigger": "Skill06",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability07_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID01) || RETURN",
              "displayLines": "SummonID01",
              "constants": [],
              "variables": [
                "SummonID01"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "noTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                    "displayLines": "{[Skill03[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[1]]}"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID01) || RETURN",
                        "displayLines": "SummonID01",
                        "constants": [],
                        "variables": [
                          "SummonID01"
                        ]
                      },
                      "locationType": "First"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                    "displayLines": "{[Skill03[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[1]]}"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID01) || RETURN",
                        "displayLines": "SummonID01",
                        "constants": [],
                        "variables": [
                          "SummonID01"
                        ]
                      },
                      "locationType": "Last"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID03) || RETURN",
              "displayLines": "SummonID03",
              "constants": [],
              "variables": [
                "SummonID03"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "noTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                    "displayLines": "{[Skill03[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[2]]}"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID03) || RETURN",
                        "displayLines": "SummonID03",
                        "constants": [],
                        "variables": [
                          "SummonID03"
                        ]
                      },
                      "locationType": "First"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                    "displayLines": "{[Skill03[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[2]]}"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID03) || RETURN",
                        "displayLines": "SummonID03",
                        "constants": [],
                        "variables": [
                          "SummonID03"
                        ]
                      },
                      "locationType": "Last"
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
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                "displayLines": "{[Skill03[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[0]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID02) || RETURN",
                    "displayLines": "SummonID02",
                    "constants": [],
                    "variables": [
                      "SummonID02"
                    ]
                  },
                  "locationType": "First"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                "displayLines": "{[Skill03[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[0]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID02) || RETURN",
                    "displayLines": "SummonID02",
                    "constants": [],
                    "variables": [
                      "SummonID02"
                    ]
                  },
                  "locationType": "Last"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                "displayLines": "{[Skill03[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[0]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID02) || RETURN",
                    "displayLines": "SummonID02",
                    "constants": [],
                    "variables": [
                      "SummonID02"
                    ]
                  },
                  "locationType": "First"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                "displayLines": "{[Skill03[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[0]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID02) || RETURN",
                    "displayLines": "SummonID02",
                    "constants": [],
                    "variables": [
                      "SummonID02"
                    ]
                  },
                  "locationType": "Last"
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability07_Part01": {
      "fileName": "3024013_Monster_W2_Argenti_Ability07_Part01",
      "childAbilityList": [
        "3024013_Monster_W2_Argenti_Ability07_Camera",
        "3024013_Monster_W2_Argenti_Ability07_Part01",
        "3024013_Monster_W2_Argenti_Ability07_Part02"
      ],
      "skillTrigger": "Skill07",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Spear & Shield"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability05_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "({[Skill05[0]]} * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || Constants[0] (0.8) || MUL || RETURN",
              "displayLines": "({[Skill05[0]]} * 0.8)",
              "constants": [
                0.8
              ],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "80%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 3024011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Argenti (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 302401100,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null
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
              "modifier": "Monster_W1_Gepard_RL_DamageUP[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "valuePerStack": {
                "MDF_DamageAddedRatio": {
                  "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                  "displayLines": "{[SkillP01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 302401000,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability05_Part01": {
      "fileName": "3024013_Monster_W2_Argenti_Ability05_Part01",
      "childAbilityList": [
        "3024013_Monster_W2_Argenti_Ability05_Camera",
        "3024013_Monster_W2_Argenti_Ability05_Part01",
        "3024013_Monster_W2_Argenti_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability04_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Enemy_W2_Argenti_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Enemy_W2_Argenti_Power_RL[<span class=\"descriptionNumberColor\">Soul Ascension</span>]"
                  }
                ],
                "invertCondition": true
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "Sword_FirstFlag"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 3024011,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Argenti (Complete)"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 302401100,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": null
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_W2_Argenti_Power_RL[<span class=\"descriptionNumberColor\">Soul Ascension</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                    "displayLines": "{[Skill04[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill04[0]]}"
                    ]
                  }
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "multi": 0
                },
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "popUpText": "Action Advanced",
                  "living": true
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_W2_Argenti_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                    "displayLines": "{[Skill04[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill04[0]]}"
                    ]
                  }
                }
              ]
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "Sword_FirstFlag"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 3024011,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Argenti (Complete)"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 302401100,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": null
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_W2_Argenti_Power_RL[<span class=\"descriptionNumberColor\">Soul Ascension</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                        "displayLines": "{[Skill04[0]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill04[0]]}"
                        ]
                      }
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "multi": 0
                    },
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "popUpText": "Action Advanced",
                      "living": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_W2_Argenti_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                        "displayLines": "{[Skill04[0]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill04[0]]}"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability04_Part01": {
      "fileName": "3024013_Monster_W2_Argenti_Ability04_Part01",
      "childAbilityList": [
        "3024013_Monster_W2_Argenti_Ability04_Camera",
        "3024013_Monster_W2_Argenti_Ability04_Part01",
        "3024013_Monster_W2_Argenti_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability03_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Random Event",
          "isUnique": true,
          "count": 2,
          "odds": [
            0.3,
            0.4,
            0.4
          ],
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                    "displayLines": "{[Skill03[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[1]]}"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID01) || RETURN",
                        "displayLines": "SummonID01",
                        "constants": [],
                        "variables": [
                          "SummonID01"
                        ]
                      },
                      "locationType": "First"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                    "displayLines": "{[Skill03[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[1]]}"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID01) || RETURN",
                        "displayLines": "SummonID01",
                        "constants": [],
                        "variables": [
                          "SummonID01"
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
                "target": "{{All Team Members}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID02) || RETURN",
                  "displayLines": "SummonID02",
                  "constants": [],
                  "variables": [
                    "SummonID02"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                        "displayLines": "{[Skill03[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[1]]}"
                        ]
                      },
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (SummonID01) || RETURN",
                            "displayLines": "SummonID01",
                            "constants": [],
                            "variables": [
                              "SummonID01"
                            ]
                          },
                          "locationType": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                        "displayLines": "{[Skill03[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[1]]}"
                        ]
                      },
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (SummonID01) || RETURN",
                            "displayLines": "SummonID01",
                            "constants": [],
                            "variables": [
                              "SummonID01"
                            ]
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                }
              ],
              "noTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                        "displayLines": "{[Skill03[0]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[0]]}"
                        ]
                      },
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (SummonID02) || RETURN",
                            "displayLines": "SummonID02",
                            "constants": [],
                            "variables": [
                              "SummonID02"
                            ]
                          },
                          "locationType": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                        "displayLines": "{[Skill03[0]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[0]]}"
                        ]
                      },
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (SummonID02) || RETURN",
                            "displayLines": "SummonID02",
                            "constants": [],
                            "variables": [
                              "SummonID02"
                            ]
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID03) || RETURN",
                  "displayLines": "SummonID03",
                  "constants": [],
                  "variables": [
                    "SummonID03"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                        "displayLines": "{[Skill03[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[1]]}"
                        ]
                      },
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (SummonID01) || RETURN",
                            "displayLines": "SummonID01",
                            "constants": [],
                            "variables": [
                              "SummonID01"
                            ]
                          },
                          "locationType": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                        "displayLines": "{[Skill03[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[1]]}"
                        ]
                      },
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (SummonID01) || RETURN",
                            "displayLines": "SummonID01",
                            "constants": [],
                            "variables": [
                              "SummonID01"
                            ]
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                }
              ],
              "noTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                        "displayLines": "{[Skill03[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[2]]}"
                        ]
                      },
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (SummonID03) || RETURN",
                            "displayLines": "SummonID03",
                            "constants": [],
                            "variables": [
                              "SummonID03"
                            ]
                          },
                          "locationType": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                        "displayLines": "{[Skill03[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[2]]}"
                        ]
                      },
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (SummonID03) || RETURN",
                            "displayLines": "SummonID03",
                            "constants": [],
                            "variables": [
                              "SummonID03"
                            ]
                          },
                          "locationType": "Last"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability03_Part01": {
      "fileName": "3024013_Monster_W2_Argenti_Ability03_Part01",
      "childAbilityList": [
        "3024013_Monster_W2_Argenti_Ability03_Camera",
        "3024013_Monster_W2_Argenti_Ability03_Part01",
        "3024013_Monster_W2_Argenti_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability02_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability02_Part01": {
      "fileName": "3024013_Monster_W2_Argenti_Ability02_Part01",
      "childAbilityList": [
        "3024013_Monster_W2_Argenti_Ability02_Camera",
        "3024013_Monster_W2_Argenti_Ability02_Part01",
        "3024013_Monster_W2_Argenti_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability01_Part02": {
      "fileName": "3024013_Monster_W2_Argenti_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Ability01_Part01": {
      "fileName": "3024013_Monster_W2_Argenti_Ability01_Part01",
      "childAbilityList": [
        "3024013_Monster_W2_Argenti_Ability01_Camera",
        "3024013_Monster_W2_Argenti_Ability01_Part01",
        "3024013_Monster_W2_Argenti_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024013_BattleEventAbility_Monster_W2_Argenti_MainStory202": {
      "fileName": "3024013_BattleEventAbility_Monster_W2_Argenti_MainStory202",
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
          "modifier": "Monster_Monster_W2_Argenti_BattlePerform_LockHP"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_Monster_W2_Argenti_BattlePerform_LockHP",
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
              "eventTrigger": "Being Attacked End [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3024013_Monster_W2_Argenti_PassiveAbility202": {
      "fileName": "3024013_Monster_W2_Argenti_PassiveAbility202",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W2_Argenti_TalkListener"
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "BattleEventAbility_Monster_W2_Argenti_MainStory202",
          "parameters": {}
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_TalkListener",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
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
                        "value1": "MDF_InsertCheck",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_InsertCheck",
                      "value": 1
                    },
                    {
                      "name": "Set HP Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "setValue": 0.01
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "BattleEventAbility_Monster_W2_Argenti_MainStory202",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterChangePhase",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
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
    "3024013_Monster_W2_Argenti_PartChange_Insert": {
      "fileName": "3024013_Monster_W2_Argenti_PartChange_Insert",
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MaxPhase",
            "compareType": "=",
            "value2": 3,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Die_Flag"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 302401000,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_ChangePhase"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multi": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_Standard_Endurance"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Phase_Flag",
          "value": 2
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 302401000,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_LockHP",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.01
                }
              ]
            }
          ]
        }
      ]
    },
    "3024013_Monster_W2_Argenti_PassiveAbilityInitiate": {
      "fileName": "3024013_Monster_W2_Argenti_PassiveAbilityInitiate",
      "skillTrigger": "SkillP01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Phase_Flag",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_Standard_HideMonsterHUD"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_Standard_MuteHitFly"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 302401000,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_GS_Argenti_SpecialVictory_LockHP"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_GS_Argenti_SpecialVictory_LockHP",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.5
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Argenti_SpecialVictory_Flag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
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
                      "variableName": "AIFlag",
                      "value": 13
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "multi": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "Monster_Standard_DisableAction"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Argenti_SpecialVictory_Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag",
            "Phase_Flag"
          ]
        }
      ]
    },
    "3024013_Monster_W2_Argenti_Passive02": {
      "fileName": "3024013_Monster_W2_Argenti_Passive02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "W2_Argenti_BattleScore1"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "W2_Argenti_BattleScore2"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMorePerTurn"
        }
      ],
      "references": []
    },
    "3024013_Monster_W2_Argenti_Passive01": {
      "fileName": "3024013_Monster_W2_Argenti_Passive01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_Initiate"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_Initiate",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "Enemy_W2_ArgentiTotem_Initiate"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "Enemy_W2_ArgentiTotem_01_Initiate"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "Enemy_W2_ArgentiTotem_02_Initiate"
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Die_Flag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
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
                      "variableName": "Die_Flag",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_Standard_Endurance"
                    },
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": null,
                      "variableName": "MaxPhase",
                      "value": "MaxMonsterPhase"
                    },
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
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Argenti_PartChange_Insert",
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
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
                                "value1": "HP_Bars_Remaining",
                                "compareType": "NOT=",
                                "value2": {
                                  "operator": "Variables[0] (MaxPhase) || RETURN",
                                  "displayLines": "MaxPhase",
                                  "constants": [],
                                  "variables": [
                                    "MaxPhase"
                                  ]
                                }
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "MaxPhase",
                                "compareType": "=",
                                "value2": 3
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Set Enemy Phase",
                              "mode": "Inc"
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W2_Argenti_PartChange2T3_Insert",
                              "priorityTag": "MonsterChangePhase",
                              "ownerState": "Mask_AliveOrLimbo",
                              "targetState": "Mask_AliveOrLimbo",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            }
                          ]
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
        }
      ]
    },
    "3024013_Monster_W2_Argenti_PassiveAbility_BGM": {
      "fileName": "3024013_Monster_W2_Argenti_PassiveAbility_BGM",
      "childAbilityList": [
        "3024013_Monster_W2_Argenti_PassiveAbility_BGM"
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
          "modifier": "Enemy_W2_Argenti_ResetStageBGM"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_ResetStageBGM",
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
    "3024013_Modifiers": {
      "fileName": "3024013_Modifiers",
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
          "for": "MModifier_Standard_IF_SetMaxBonusCount",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "MModifier_W2_Argenti_IF_BattleAlert",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
                  },
                  "modifier": "MModifier_Standard_IF_SetMaxBonusCount"
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
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "<=",
                        "value2": 4
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "MModifier_Standard_IF_SetMaxBonusCount"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Action Completed [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_W2_Argenti_IF_EX02_DefendState[<span class=\"descriptionNumberColor\">Chivalric Wrath</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "compareType": "<=",
                        "value2": 4,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Update Enemy InfoPanel"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_W2_Argenti_IF_EX02_AttackState[<span class=\"descriptionNumberColor\">Golden Harvest</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "compareType": "<=",
                        "value2": 4,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Update Enemy InfoPanel"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_W2_Argenti_IF_EX02_UltraState[<span class=\"descriptionNumberColor\">Medal of Elegance</span>]"
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
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "<=",
                        "value2": 2
                      },
                      "noTargetFound": [
                        {
                          "name": "Update Enemy InfoPanel"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill11"
                  },
                  "passed": [
                    {
                      "name": "Update Enemy InfoPanel",
                      "text": "Defeat summoned enemies to dispel Toughness Protection",
                      "type": "Warning"
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
                      "name": "Update Enemy InfoPanel",
                      "text": "Attack the boss after defeating the Taunting unit",
                      "type": "Warning"
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
                      "name": "Update Enemy InfoPanel",
                      "text": "Stop summoned enemies from taking action to weaken the boss",
                      "type": "Warning"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Update Enemy InfoPanel"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_IF_EX_EnemyCount_Sub[<span class=\"descriptionNumberColor\">Stellar Aegis</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageAddRatio) || Variables[1] (Layer) || MUL || RETURN",
                    "displayLines": "(MDF_DamageAddRatio * Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageAddRatio",
                      "Layer"
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
                    "operator": "Variables[0] (MDF_TokenDMGRduceRatio) || Variables[1] (Layer) || MUL || RETURN",
                    "displayLines": "(MDF_TokenDMGRduceRatio * Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_TokenDMGRduceRatio",
                      "Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageAddRatio</span> and reduces DMG received by <span class=\"descriptionNumberColor\">MDF_TokenDMGRduceRatio</span>.",
          "type": "Buff",
          "statusName": "Stellar Aegis",
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_IF_EX_EnemyCount",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "EnemyCount_AddModifier"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                      "name": "Use Custom Character Function",
                      "functionName": "EnemyCount_AddModifier"
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
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "EnemyCount_AddModifier"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "EnemyCount_AddModifier",
              "parse": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "variableName": "_TeamNumber",
                  "livingTargets": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "Enemy_W2_Argenti_IF_EX_EnemyCount_Sub[<span class=\"descriptionNumberColor\">Stellar Aegis</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_TeamNumber",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "Enemy_W2_Argenti_IF_EX_EnemyCount_Sub[<span class=\"descriptionNumberColor\">Stellar Aegis</span>]",
                      "valuePerStack": {
                        "MDF_DamageAddRatio": {
                          "operator": "Variables[0] (MDF_ShowValue2) || RETURN",
                          "displayLines": "MDF_ShowValue2",
                          "constants": [],
                          "variables": [
                            "MDF_ShowValue2"
                          ]
                        },
                        "MDF_TokenDMGRduceRatio": {
                          "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                          "displayLines": "MDF_ShowValue1",
                          "constants": [],
                          "variables": [
                            "MDF_ShowValue1"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_TeamNumber) || RETURN",
                        "displayLines": "_TeamNumber",
                        "constants": [],
                        "variables": [
                          "_TeamNumber"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ShowValue1",
            "MDF_ShowValue2"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_IF_EX_ExtraEnhanceController",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_IF_EX_ExtraPowerUpController"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_IF_EX_PowerController",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_IF_BOSS_PowerFlag01",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IF_BOSS_AllPowerFlag",
                      "value": {
                        "operator": "Variables[0] (MDF_IF_BOSS_AllPowerFlag) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_IF_BOSS_AllPowerFlag + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_IF_BOSS_AllPowerFlag"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IF_BOSS_PowerFlag01",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_W2_Argenti_IF_EX_ExtraEnhanceController"
                  },
                  "passed": [
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
                            "value1": "CurrentHP%",
                            "compareType": "<=",
                            "value2": 0.5
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_IF_BOSS_PowerFlag02",
                            "compareType": "<=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_IF_BOSS_AllPowerFlag",
                          "value": {
                            "operator": "Variables[0] (MDF_IF_BOSS_AllPowerFlag) || RETURN",
                            "displayLines": "MDF_IF_BOSS_AllPowerFlag",
                            "constants": [],
                            "variables": [
                              "MDF_IF_BOSS_AllPowerFlag"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_IF_BOSS_PowerFlag02",
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
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 2
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_IF_BOSS_PowerFlag03",
                            "compareType": "<=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_IF_BOSS_AllPowerFlag",
                          "value": {
                            "operator": "Variables[0] (MDF_IF_BOSS_AllPowerFlag) || Constants[0] (3) || ADD || RETURN",
                            "displayLines": "(MDF_IF_BOSS_AllPowerFlag + 3)",
                            "constants": [
                              3
                            ],
                            "variables": [
                              "MDF_IF_BOSS_AllPowerFlag"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_IF_BOSS_PowerFlag03",
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
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 2
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": "<=",
                            "value2": 0.5
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_IF_BOSS_PowerFlag04",
                            "compareType": "<=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_IF_BOSS_AllPowerFlag",
                          "value": {
                            "operator": "Variables[0] (MDF_IF_BOSS_AllPowerFlag) || RETURN",
                            "displayLines": "MDF_IF_BOSS_AllPowerFlag",
                            "constants": [],
                            "variables": [
                              "MDF_IF_BOSS_AllPowerFlag"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_IF_BOSS_PowerFlag04",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Enemy_W2_Argenti_IF_EX_PowerAdd"
                  },
                  "passed": [
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (MDF_IF_BOSS_AllPowerFlag) || RETURN",
                        "displayLines": "MDF_IF_BOSS_AllPowerFlag",
                        "constants": [],
                        "variables": [
                          "MDF_IF_BOSS_AllPowerFlag"
                        ]
                      },
                      "Event": [
                        {
                          "name": "Find New Target",
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
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "Enemy_W2_Argenti_IF_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]",
                                  "invertCondition": true
                                }
                              },
                              {
                                "name": "Sort by Stat",
                                "stat": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
                                "sortByHighest": true
                              },
                              {
                                "name": "Return Target",
                                "value": 1
                              }
                            ]
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "<=",
                            "value2": 2
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Enemy_W2_Argenti_IF_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]",
                              "valuePerStack": {
                                "MDF_LightPowerUp": {
                                  "operator": "Variables[0] ({[Skill17[0]]}) || RETURN",
                                  "displayLines": "{[Skill17[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill17[0]]}"
                                  ]
                                },
                                "MDF_DamageAddedRatio": {
                                  "operator": "Variables[0] ({[Skill17[1]]}) || RETURN",
                                  "displayLines": "{[Skill17[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill17[1]]}"
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W2_Argenti_IF_EX_PowerAdd"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Enemy_W2_Argenti_IF_EX_PowerAddMax"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "modifier": "Enemy_W2_Argenti_IF_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]",
                      "valuePerStack": {
                        "MDF_LightPowerUp": {
                          "operator": "Variables[0] ({[Skill17[0]]}) || RETURN",
                          "displayLines": "{[Skill17[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill17[0]]}"
                          ]
                        },
                        "MDF_DamageAddedRatio": {
                          "operator": "Variables[0] ({[Skill17[1]]}) || RETURN",
                          "displayLines": "{[Skill17[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill17[1]]}"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W2_Argenti_IF_EX_PowerAddMax"
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
          "for": "Enemy_W2_Argenti_IF_EX_PowerUpLight[<span class=\"descriptionNumberColor\">Soul Enhancement</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_LightPowerUp) || Variables[1] (Layer) || MUL || RETURN",
                    "displayLines": "(MDF_LightPowerUp * Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_LightPowerUp",
                      "Layer"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ShowValue1",
                  "value": {
                    "operator": "Variables[0] (MDF_LightPowerUp) || RETURN",
                    "displayLines": "MDF_LightPowerUp",
                    "constants": [],
                    "variables": [
                      "MDF_LightPowerUp"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Soul Enhancement",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_IF_EX_PowerUpDark[<span class=\"descriptionNumberColor\">Regain Enhancement</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] ({[Skill16[0]]}) || Variables[1] (Layer) || MUL || RETURN",
                    "displayLines": "({[Skill16[0]]} * Layer)",
                    "constants": [],
                    "variables": [
                      "{[Skill16[0]]}",
                      "Layer"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ShowValue1",
                  "value": {
                    "operator": "Variables[0] ({[Skill16[0]]}) || RETURN",
                    "displayLines": "{[Skill16[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill16[0]]}"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Regain Enhancement",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_IF_EX_PowerAddMax",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_IF_EX_PowerAdd",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_IF_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]",
          "stackType": "Multiple",
          "modifierFlags": [
            "STAT_SpeedUp",
            "Deathrattle",
            "KeepOnDeathrattle",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_W2_Argenti_IF_Power_Mute",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "Monster_IF_InsertCount02",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 100
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_ArgentiTotem_IF_Power_AbilityP01_Insert",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target's Source Owner}}"
                      },
                      "priorityTag": "MonsterBuffOthers",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_MonsterChangePhase"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W2_ArgentiTotem_IF_Power_AbilityP01_Insert"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W2_ArgentiTotem_IF_Power_AbilityP01_Part01"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W2_ArgentiTotem_01_IF_AbilityP01_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W2_ArgentiTotem_01_IF_AbilityP01_Camera_Sub"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W2_ArgentiTotem_01_IF_Ability01_Part01_Assist"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W2_ArgentiTotem_01_IF_Ability01_Part02_Assist"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageAddedRatio) || RETURN",
                    "displayLines": "MDF_DamageAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true,
                  "toRemove": [
                    "STAT_CTRL",
                    "DisableAction",
                    "Break"
                  ]
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_Standard_WeakControl[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Enemy_W2_Argenti_IF_Power_Trigger"
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
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "Enemy_W2_Argenti_IF_EX_PowerUpLight[<span class=\"descriptionNumberColor\">Soul Enhancement</span>]",
                          "valuePerStack": {
                            "MDF_LightPowerUp": {
                              "operator": "Variables[0] (MDF_LightPowerUp) || RETURN",
                              "displayLines": "MDF_LightPowerUp",
                              "constants": [],
                              "variables": [
                                "MDF_LightPowerUp"
                              ]
                            }
                          }
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_LightPowerUp",
            "MDF_DamageAddedRatio"
          ],
          "latentQueue": [
            "MDF_IF_BOSS_PowerFlag01",
            "MDF_IF_BOSS_PowerFlag02",
            "MDF_IF_BOSS_PowerFlag03",
            "MDF_IF_BOSS_PowerFlag04"
          ],
          "description": "The knight's prayers bid the liberation of souls. Abilities have been enhanced.",
          "type": "Buff",
          "effectName": "Soulfreed",
          "statusName": "Soulfreed"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_IF_Power_Trigger",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_IF_Power_Mute",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_IF_AccumulatePower",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "W2_Argenti_BattleScore2",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W2_Argenti_00_BattleSore2_Flag"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "W2_Argenti_00_BattleSore2_Flag",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "The Things I Do for Beauty",
                          "desc": "In the battle against Argenti, none of The Speartip, The Shield, and The Honored have entered the Soulfreed state",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "Enemy_W2_Argenti_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "Enemy_W2_Argenti_Power_RL[<span class=\"descriptionNumberColor\">Soul Ascension</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Argenti_00_BattleSore2_Flag",
                      "value": 1
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
          "for": "W2_ArgentiTotem_02_BattleScore1"
        },
        {
          "name": "Modifier Construction",
          "for": "W2_ArgentiTotem_01_BattleScore1"
        },
        {
          "name": "Modifier Construction",
          "for": "W2_ArgentiTotem_BattleScore1"
        },
        {
          "name": "Modifier Construction",
          "for": "W2_Argenti_BattleScore1",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "W2_ArgentiTotem_BattleScore1"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "W2_ArgentiTotem_01_BattleScore1"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "W2_ArgentiTotem_02_BattleScore1"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "My Heart and Actions Are Utterly Unclouded",
                          "desc": "In the battle against Argenti, defeat The Speartip, The Shield, and The Honored while they are in the Soulfreed state",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
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
          "for": "Enemy__W2_Argenti_IF_NoWeakness",
          "stackType": "Replace",
          "modifierFlags": [
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DefenceAddedRatio) || RETURN",
                    "displayLines": "MDF_DefenceAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DefenceAddedRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_IF_Protect",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "compareType": "=",
                    "value2": 5,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy__W2_Argenti_IF_NoWeakness",
                      "valuePerStack": {
                        "MDF_DefenceAddedRatio": {
                          "operator": "Variables[0] (MDF_DefenceAddedRatio) || RETURN",
                          "displayLines": "MDF_DefenceAddedRatio",
                          "constants": [],
                          "variables": [
                            "MDF_DefenceAddedRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "compareType": "<",
                    "value2": 5,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy__W2_Argenti_IF_NoWeakness"
                    },
                    "Modifier Deletes Itself"
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
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "compareType": "=",
                    "value2": 5,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy__W2_Argenti_IF_NoWeakness",
                      "valuePerStack": {
                        "MDF_DefenceAddedRatio": {
                          "operator": "Variables[0] (MDF_DefenceAddedRatio) || RETURN",
                          "displayLines": "MDF_DefenceAddedRatio",
                          "constants": [],
                          "variables": [
                            "MDF_DefenceAddedRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy__W2_Argenti_IF_NoWeakness"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "compareType": "<",
                    "value2": 5,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy__W2_Argenti_IF_NoWeakness"
                    },
                    "Modifier Deletes Itself"
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
          "for": "WEnemy_W2_Argenti_IF_DamageSplit_Ohters",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Is Joint-Attack",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  },
                  "passed": [
                    {
                      "name": "Share DMG Taken",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "selfSplit": 0.2,
                      "targetSplit": 0.8
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "WEnemy_W2_Argenti_IF_DamageSplit_Boss",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "WEnemy_W2_Argenti_IF_DamageSplit_Ohters",
                      "casterAssign": "CasterSelf"
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
                      "modifier": "WEnemy_W2_Argenti_IF_DamageSplit_Ohters",
                      "casterAssign": "CasterSelf"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Anyone]",
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
                      "modifier": "WEnemy_W2_Argenti_IF_DamageSplit_Ohters",
                      "casterAssign": "CasterSelf"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_IF_SuperArmorController",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_SuperArmor[<span class=\"descriptionNumberColor\">Safeguard</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeResistance": {
                      "operator": "Variables[0] (MDF_SuperArmorDamageResistance) || RETURN",
                      "displayLines": "MDF_SuperArmorDamageResistance",
                      "constants": [],
                      "variables": [
                        "MDF_SuperArmorDamageResistance"
                      ]
                    }
                  }
                },
                {
                  "name": "Set Shield State/Value",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Stage Ability",
                  "abilityName": "BattleEventAbility_IF_BOSS_Standard_BeingBreak",
                  "parameters": {}
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_SuperArmor[<span class=\"descriptionNumberColor\">Safeguard</span>]"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "MDF_SuperArmorBreakActionDelay"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_SuperArmorBreak[<span class=\"descriptionNumberColor\">Safeguard Broken</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeTakenRatio": {
                      "operator": "Variables[0] (MDF_SuperArmorBreakDamageTakenRatio) || RETURN",
                      "displayLines": "MDF_SuperArmorBreakDamageTakenRatio",
                      "constants": [],
                      "variables": [
                        "MDF_SuperArmorBreakDamageTakenRatio"
                      ]
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": ">=",
                        "value2": 4
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "BattleEventAbility_IF_BOSS_Standard_BeingBreak",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterBattleCry",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "BOSS_BreakDelay": 0
                      },
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Clear Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Protected",
                      "valueList": [
                        "Physical",
                        "Fire",
                        "Ice",
                        "Thunder",
                        "Wind",
                        "Quantum",
                        "Imaginary"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_SuperArmorBreak[<span class=\"descriptionNumberColor\">Safeguard Broken</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_SuperArmor[<span class=\"descriptionNumberColor\">Safeguard</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeResistance": {
                      "operator": "Variables[0] (MDF_SuperArmorDamageResistance) || RETURN",
                      "displayLines": "MDF_SuperArmorDamageResistance",
                      "constants": [],
                      "variables": [
                        "MDF_SuperArmorDamageResistance"
                      ]
                    }
                  }
                },
                {
                  "name": "Set Shield State/Value",
                  "reset": true
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_IF_Summon_Enhance_Shield",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_IF_Summon_Enhance_Sword",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_IF_FlowerTeam",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Is Matching Team Count",
                        "countType": "Count3"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Part Of Team Location",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "team": "Enemy Team",
                            "location": "Left"
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Matching Team Count",
                        "countType": "Count2"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Matching Team Count",
                        "countType": "Count1"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Part Of Team Location",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "team": "Enemy Team",
                            "location": "Left"
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Matching Team Count"
                      },
                      "passed": [
                        "Modifier Deletes Itself"
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
          "for": "Monster_W2_Argenti_IF_FlowerPower[<span class=\"descriptionNumberColor\">Wreath</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "FlowerPower",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "FlowerPower",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 100
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "FlowerPower",
                  "value": 0
                }
              ]
            }
          ],
          "description": "Every stack additionally adds one instance of DMG dealt for Undeniable Fate.",
          "type": "Buff",
          "effectName": "Wreath",
          "statusName": "Wreath",
          "stackLimit": 4,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_IF_Boss_EnhanceByRecycle",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] ({[Skill16[0]]}) || Variables[1] (Layer) || MUL || RETURN",
                    "displayLines": "({[Skill16[0]]} * Layer)",
                    "constants": [],
                    "variables": [
                      "{[Skill16[0]]}",
                      "Layer"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_IF_Boss_Enhance",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "BreakMark",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Completed [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "BreakMark",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BreakMark",
                      "value": 0
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Argenti_KillAllMonsters"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "BreakMark",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Monster_IF_InsertCount",
            "Monster_IF_InsertCameraFlag",
            "Monster_IF_InsertCount02",
            "Monster_IF_InsertCameraFlag02"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_IF_Sword04",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Fire"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Ice"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Fire",
                      "value": -0.2
                    }
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Ice",
                      "value": -0.2
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_IF_Sword03",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Physical"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Imaginary"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Physical",
                      "value": -0.2
                    }
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Imaginary",
                      "value": -0.2
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_IF_Sword02",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Fire"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Ice"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Fire",
                      "value": -0.2
                    }
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Ice",
                      "value": -0.2
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_IF_Sword01",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Physical"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Imaginary"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Physical",
                      "value": -0.2
                    }
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Imaginary",
                      "value": -0.2
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_IF_SwordBase",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": []
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_IF_Summon04"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_IF_Summon03"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_IF_Summon02"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_IF_Summon01"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_Argenti_Attack_Sign",
          "modifierFlags": [],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_Standard_AllDamageReduce",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_Power_RL[<span class=\"descriptionNumberColor\">Soul Ascension</span>]",
          "stackType": "Refresh",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "The knight's prayers completely ascended the soul. This is regarded as equal to \"Soulfreed.\"",
          "type": "Buff",
          "effectName": "Soul Ascension",
          "statusName": "Soul Ascension"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]",
          "stackType": "Refresh",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "The knight's prayers bid the liberation of souls. Abilities have been enhanced.",
          "type": "Buff",
          "effectName": "Soulfreed",
          "statusName": "Soulfreed"
        }
      ],
      "references": []
    },
    "3024013_Functions": {
      "fileName": "3024013_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 7,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "Argenti_SummonAllMonsters",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (DelayRatio04) || RETURN",
                    "displayLines": "DelayRatio04",
                    "constants": [],
                    "variables": [
                      "DelayRatio04"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonMonsterID) || RETURN",
                        "displayLines": "SummonMonsterID",
                        "constants": [],
                        "variables": [
                          "SummonMonsterID"
                        ]
                      },
                      "locationType": "First"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (DelayRatio04) || RETURN",
                    "displayLines": "DelayRatio04",
                    "constants": [],
                    "variables": [
                      "DelayRatio04"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonMonsterID) || RETURN",
                        "displayLines": "SummonMonsterID",
                        "constants": [],
                        "variables": [
                          "SummonMonsterID"
                        ]
                      },
                      "locationType": "Last"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (DelayRatio02) || RETURN",
                    "displayLines": "DelayRatio02",
                    "constants": [],
                    "variables": [
                      "DelayRatio02"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonMonsterID) || RETURN",
                        "displayLines": "SummonMonsterID",
                        "constants": [],
                        "variables": [
                          "SummonMonsterID"
                        ]
                      },
                      "locationType": "First"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (DelayRatio02) || RETURN",
                    "displayLines": "DelayRatio02",
                    "constants": [],
                    "variables": [
                      "DelayRatio02"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonMonsterID) || RETURN",
                        "displayLines": "SummonMonsterID",
                        "constants": [],
                        "variables": [
                          "SummonMonsterID"
                        ]
                      },
                      "locationType": "Last"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (DelayRatio01) || RETURN",
                    "displayLines": "DelayRatio01",
                    "constants": [],
                    "variables": [
                      "DelayRatio01"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonMonsterID) || RETURN",
                        "displayLines": "SummonMonsterID",
                        "constants": [],
                        "variables": [
                          "SummonMonsterID"
                        ]
                      },
                      "locationType": "First"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (DelayRatio01) || RETURN",
                    "displayLines": "DelayRatio01",
                    "constants": [],
                    "variables": [
                      "DelayRatio01"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonMonsterID) || RETURN",
                        "displayLines": "SummonMonsterID",
                        "constants": [],
                        "variables": [
                          "SummonMonsterID"
                        ]
                      },
                      "locationType": "Last"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (DelayRatio03) || RETURN",
                    "displayLines": "DelayRatio03",
                    "constants": [],
                    "variables": [
                      "DelayRatio03"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonMonsterID) || RETURN",
                        "displayLines": "SummonMonsterID",
                        "constants": [],
                        "variables": [
                          "SummonMonsterID"
                        ]
                      },
                      "locationType": "First"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (DelayRatio03) || RETURN",
                    "displayLines": "DelayRatio03",
                    "constants": [],
                    "variables": [
                      "DelayRatio03"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonMonsterID) || RETURN",
                        "displayLines": "SummonMonsterID",
                        "constants": [],
                        "variables": [
                          "SummonMonsterID"
                        ]
                      },
                      "locationType": "Last"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Monster_W2_Argenti_IF_Summon01"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Monster_W2_Argenti_IF_Summon02"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Monster_W2_Argenti_IF_Summon03"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Monster_W2_Argenti_IF_Summon04"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_Summon01"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Max"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_Summon04"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Pos2"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_Summon02"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Right"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Argenti_IF_Summon04",
                    "invertCondition": true
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
                  "modifier": "Monster_W2_Argenti_IF_Summon03"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SummonMonsterID",
                "compareType": "=",
                "value2": {
                  "operator": "Variables[0] (SummonID02) || RETURN",
                  "displayLines": "SummonID02",
                  "constants": [],
                  "variables": [
                    "SummonID02"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "Enemy_W2_Argenti_IF_Summon_Enhance_Sword"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SummonMonsterID",
                "compareType": "=",
                "value2": {
                  "operator": "Variables[0] (SummonID03) || RETURN",
                  "displayLines": "SummonID03",
                  "constants": [],
                  "variables": [
                    "SummonID03"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "Enemy_W2_Argenti_IF_Summon_Enhance_Shield"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Argenti_KillAllMonsters",
          "parse": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "silent": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "Enemy_W2_ArgentiTotem_IF_Initiate"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "Enemy_W2_ArgentiTotem_01_IF_Initiate"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "Enemy_W2_ArgentiTotem_02_IF_Initiate"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_W2_Argenti_IF_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                }
              ]
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Argenti_AddWeaknessToAllSummons",
          "parse": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Monster_W2_Argenti_IF_Sword01"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Monster_W2_Argenti_IF_Sword02"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Monster_W2_Argenti_IF_Sword03"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Monster_W2_Argenti_IF_Sword04"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Argenti_IF_Summon01"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_SwordBase"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_Sword01"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Argenti_IF_Summon02"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_SwordBase"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_Sword02"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Argenti_IF_Summon03"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_SwordBase"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_Sword03"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Argenti_IF_Summon04"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_SwordBase"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Argenti_IF_Sword04"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Shake_Small",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Shake_Big",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Collect_Power",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_W2_Argenti_IF_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                      }
                    ]
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "Sword_FirstFlag"
                  }
                ]
              }
            },
            {
              "name": "Trigger Multiple Functions",
              "variables": {},
              "functionList": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Collect_Power_Sub",
                  "delayInterval": 0.3,
                  "parallelCount": 4
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Collect_Power_Sub",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_W2_Argenti_IF_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                      }
                    ]
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "Sword_FirstFlag"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_W2_Argenti_IF_EX_PowerUpDark[<span class=\"descriptionNumberColor\">Regain Enhancement</span>]",
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_W2_Argenti_IF_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}