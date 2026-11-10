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
      "modifier": "<a class=\"gModGreen\" id=\"-1969840009\">RuanMei_Passive</a>"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "displayLines": "3"
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
          "modifier": "<a class=\"gModGreen\" id=\"-780236472\">RuanMei_Tree02_RecoverSP</a>",
          "valuePerStack": {
            "Trace_PointB2_P1_SP": {
              "displayLines": "5"
            }
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1531846618\">RuanMei_Passive_SpeedUp</a>[<span class=\"descriptionNumberColor\">Somatotypical Helix</span>]",
      "stackType": "Refresh",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "description": "Increases SPD by <span class=\"descriptionNumberColor\">#SkillP01_P1_SpeedUpRatio</span>.",
      "type": "Buff",
      "statusName": "Somatotypical Helix",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "statValue": {
                "displayLines": "0.1"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__894337794\">RuanMei_Passive_TriggerBreakDamage</a>",
      "stackType": "Multiple",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "DV_Passive_Damage_MaxStance",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "warningType": "MaxToughness",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "((((DV_Passive_Damage_MaxStance / 30) + 2) / 4) * SkillP01_FinalBreakDamagePercentage_set)"
              },
              "variableName": "SkillP01_FinalBreakDamagePercentage_set"
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
                  "displayLines": "SkillP01_FinalBreakDamagePercentage_set"
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
      "for": "<a class=\"gModGreen\" id=\"mod__402849385\">RuanMei_Passive_ListenBeingBreakOrHit</a>",
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
                "target1": {
                  "name": "Target Name",
                  "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Base Break Damage",
                  "variableName": "_BreakBaseDamage",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "_BreakDamageAddedRatio",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
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
                      "value": {
                        "displayLines": "(1.2 + 2)"
                      },
                      "variableName": "_SkillP01_FinalBreakDamagePercentage"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "1.2"
                      },
                      "variableName": "_SkillP01_FinalBreakDamagePercentage"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"894337794\">RuanMei_Passive_TriggerBreakDamage</a>",
                  "valuePerStack": {
                    "MDF_BreakBaseDamage_set": {
                      "displayLines": "_BreakBaseDamage"
                    },
                    "MDF_BreakDamageAddedRatio_set": {
                      "displayLines": "_BreakDamageAddedRatio"
                    },
                    "AbilityP01_FinalBreakDamagePercentage_set": {
                      "displayLines": "_SkillP01_FinalBreakDamagePercentage"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1969840009\">RuanMei_Passive</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"806368907\">RuanMei_PassiveArea_PenetrateUP</a>"
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
                "modifier": "<a class=\"gModGreen\" id=\"461506636\">RuanMei_Ability02_Area</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "LifeTime",
                  "variableName": "Skill02_EnergyBarCount",
                  "modifierName": "<a class=\"gModGreen\" id=\"461506636\">RuanMei_Ability02_Area</a>",
                  "multiplier": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "Skill02_EnergyBarCount"
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
                    "displayLines": "Skill02_EnergyBarCount"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1531846618\">RuanMei_Passive_SpeedUp</a>[<span class=\"descriptionNumberColor\">Somatotypical Helix</span>]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-23155683\">RuanMei_BreakDamageAdded</a>[<span class=\"descriptionNumberColor\">Inert Respiration</span>]",
                  "valuePerStack": {
                    "Trace_PointB1_P1_BreakDamageAdded": {
                      "displayLines": "0.2"
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
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1531846618\">RuanMei_Passive_SpeedUp</a>[<span class=\"descriptionNumberColor\">Somatotypical Helix</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-23155683\">RuanMei_BreakDamageAdded</a>[<span class=\"descriptionNumberColor\">Inert Respiration</span>]",
                      "valuePerStack": {
                        "Trace_PointB1_P1_BreakDamageAdded": {
                          "displayLines": "0.2"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1641844295\">RuanMei_AttackBreakEnemyAttackUp</a>[<span class=\"descriptionNumberColor\">Reedside Promenade</span>]",
                      "valuePerStack": {
                        "AbilityRank_Eidolon2_P1_AttackUpRatio": {
                          "displayLines": "0.4"
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
                "team": "Enemy Team"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1703049476\">RuanMei_Eidolon4_PassiveListenBreak</a>"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"402849385\">RuanMei_Passive_ListenBeingBreakOrHit</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1531846618\">RuanMei_Passive_SpeedUp</a>[<span class=\"descriptionNumberColor\">Somatotypical Helix</span>]",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"894337794\">RuanMei_Passive_TriggerBreakDamage</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-23155683\">RuanMei_BreakDamageAdded</a>[<span class=\"descriptionNumberColor\">Inert Respiration</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1641844295\">RuanMei_AttackBreakEnemyAttackUp</a>[<span class=\"descriptionNumberColor\">Reedside Promenade</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1641844295\">RuanMei_AttackBreakEnemyAttackUp</a>[<span class=\"descriptionNumberColor\">Reedside Promenade</span>]",
                  "valuePerStack": {
                    "AbilityRank_Eidolon2_P1_AttackUpRatio": {
                      "displayLines": "0.4"
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
                  "modifier": "<a class=\"gModGreen\" id=\"614915339\">RuanMei_Eidolon4_PassiveStackProperty</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1703049476\">RuanMei_Eidolon4_PassiveListenBreak</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1212418869\">RuanMei_Tree03_BreakDamageAddedValueShow</a>"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "0.32"
                  },
                  "variableName": "Skill02_P1_DamageAddedRatioFinal"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"402849385\">RuanMei_Passive_ListenBeingBreakOrHit</a>"
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}