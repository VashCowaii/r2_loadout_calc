const configAbility = {
  "fileName": "RuanMei_RuanMei_PassiveAbility01",
  "childAbilityList": [
    "RuanMei_RuanMei_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Basic ATK",
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
      "modifier": "RuanMei_Passive"
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
      "priorState": "Normal",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Days Wane, Thoughts Wax"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "RuanMei_Tree02_RecoverSP",
          "valuePerStack": {
            "Trace_PointB2_P1_SP": {
              "operator": "Variables[0] (5) || RETURN",
              "displayLines": "5",
              "constants": [],
              "variables": [
                5
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
      "for": "RuanMei_Passive_SpeedUp[<span class=\"descriptionNumberColor\">Somatotypical Helix</span>]",
      "stackType": "Refresh",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.1) || RETURN",
                "displayLines": "0.1",
                "constants": [],
                "variables": [
                  0.1
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases SPD by <span class=\"descriptionNumberColor\">#SkillP01_P1_SpeedUpRatio</span>.",
      "type": "Buff",
      "statusName": "Somatotypical Helix"
    },
    {
      "name": "Modifier Construction",
      "for": "RuanMei_Passive_TriggerBreakDamage",
      "stackType": "Multiple",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "DV_Passive_Damage_MaxStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
              "warningType": "MaxToughness"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "SkillP01_FinalBreakDamagePercentage_set",
              "value": {
                "operator": "Variables[0] (DV_Passive_Damage_MaxStance) || Constants[0] (30) || DIV || Constants[1] (2) || ADD || Constants[2] (4) || DIV || Variables[1] (SkillP01_FinalBreakDamagePercentage_set) || MUL || RETURN",
                "displayLines": "((((DV_Passive_Damage_MaxStance / 30) + 2) / 4) * SkillP01_FinalBreakDamagePercentage_set)",
                "constants": [
                  30,
                  2,
                  4
                ],
                "variables": [
                  "DV_Passive_Damage_MaxStance",
                  "SkillP01_FinalBreakDamagePercentage_set"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "DamageBreak": {
                  "operator": "Variables[0] (SkillP01_FinalBreakDamagePercentage_set) || RETURN",
                  "displayLines": "SkillP01_FinalBreakDamagePercentage_set",
                  "constants": [],
                  "variables": [
                    "SkillP01_FinalBreakDamagePercentage_set"
                  ]
                },
                "dmgFormula": "Break DMG Scaling",
                "dmgFormulaFinal": "Pure (No DMG%)",
                "Toughness": null,
                "Tags": null,
                "attackType": "Break DMG"
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "RuanMei_Passive_ListenBeingBreakOrHit",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Base Break Damage",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_BreakBaseDamage"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_BreakDamageAddedRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_SkillP01_FinalBreakDamagePercentage",
                      "value": {
                        "operator": "Variables[0] (1.2) || Variables[1] (2) || ADD || RETURN",
                        "displayLines": "(1.2 + 2)",
                        "constants": [],
                        "variables": [
                          1.2,
                          2
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_SkillP01_FinalBreakDamagePercentage",
                      "value": {
                        "operator": "Variables[0] (1.2) || RETURN",
                        "displayLines": "1.2",
                        "constants": [],
                        "variables": [
                          1.2
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "RuanMei_Passive_TriggerBreakDamage",
                  "valuePerStack": {
                    "MDF_BreakBaseDamage_set": {
                      "operator": "Variables[0] (_BreakBaseDamage) || RETURN",
                      "displayLines": "_BreakBaseDamage",
                      "constants": [],
                      "variables": [
                        "_BreakBaseDamage"
                      ]
                    },
                    "MDF_BreakDamageAddedRatio_set": {
                      "operator": "Variables[0] (_BreakDamageAddedRatio) || RETURN",
                      "displayLines": "_BreakDamageAddedRatio",
                      "constants": [],
                      "variables": [
                        "_BreakDamageAddedRatio"
                      ]
                    },
                    "AbilityP01_FinalBreakDamagePercentage_set": {
                      "operator": "Variables[0] (_SkillP01_FinalBreakDamagePercentage) || RETURN",
                      "displayLines": "_SkillP01_FinalBreakDamagePercentage",
                      "constants": [],
                      "variables": [
                        "_SkillP01_FinalBreakDamagePercentage"
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
      "name": "Modifier Construction",
      "for": "RuanMei_Passive",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "RuanMei_PassiveArea_PenetrateUP"
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Owner][?]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "RuanMei_Ability02_Area"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "LifeTime",
                  "variableName": "Skill02_EnergyBarCount",
                  "modifierName": "RuanMei_Ability02_Area",
                  "multiplier": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Skill02_EnergyBarCount",
                  "value": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Skill02_EnergyBarCount",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Skill02_EnergyBarCount) || RETURN",
                    "displayLines": "Skill02_EnergyBarCount",
                    "constants": [],
                    "variables": [
                      "Skill02_EnergyBarCount"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 3,
                  "cooldown": 0
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 3,
                  "cooldown": 0
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
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "RuanMei_Passive_SpeedUp[<span class=\"descriptionNumberColor\">Somatotypical Helix</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Inert Respiration"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "RuanMei_BreakDamageAdded[<span class=\"descriptionNumberColor\">Inert Respiration</span>]",
                  "valuePerStack": {
                    "Trace_PointB1_P1_BreakDamageAdded": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    }
                  }
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
                "team": "TeamLight"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "RuanMei_Passive_SpeedUp[<span class=\"descriptionNumberColor\">Somatotypical Helix</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Inert Respiration"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "RuanMei_BreakDamageAdded[<span class=\"descriptionNumberColor\">Inert Respiration</span>]",
                      "valuePerStack": {
                        "Trace_PointB1_P1_BreakDamageAdded": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        }
                      }
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "RuanMei_AttackBreakEnemyAttackUp[<span class=\"descriptionNumberColor\">Reedside Promenade</span>]",
                      "valuePerStack": {
                        "AbilityRank_Eidolon2_P1_AttackUpRatio": {
                          "operator": "Variables[0] (0.4) || RETURN",
                          "displayLines": "0.4",
                          "constants": [],
                          "variables": [
                            0.4
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
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "TeamDark"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "RuanMei_Eidolon4_PassiveListenBreak"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "RuanMei_Passive_ListenBeingBreakOrHit"
                }
              ]
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
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "RuanMei_Passive_SpeedUp[<span class=\"descriptionNumberColor\">Somatotypical Helix</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "RuanMei_Passive_TriggerBreakDamage"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "RuanMei_BreakDamageAdded[<span class=\"descriptionNumberColor\">Inert Respiration</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "RuanMei_AttackBreakEnemyAttackUp[<span class=\"descriptionNumberColor\">Reedside Promenade</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
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
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "RuanMei_AttackBreakEnemyAttackUp[<span class=\"descriptionNumberColor\">Reedside Promenade</span>]",
                  "valuePerStack": {
                    "AbilityRank_Eidolon2_P1_AttackUpRatio": {
                      "operator": "Variables[0] (0.4) || RETURN",
                      "displayLines": "0.4",
                      "constants": [],
                      "variables": [
                        0.4
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "RuanMei_Eidolon4_PassiveStackProperty"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "RuanMei_Eidolon4_PassiveListenBreak"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Candle Lights on Still Waters"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "RuanMei_Tree03_BreakDamageAddedValueShow"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Skill02_P1_DamageAddedRatioFinal",
                  "value": {
                    "operator": "Variables[0] (0.32) || RETURN",
                    "displayLines": "0.32",
                    "constants": [],
                    "variables": [
                      0.32
                    ]
                  }
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "RuanMei_Passive_ListenBeingBreakOrHit"
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}