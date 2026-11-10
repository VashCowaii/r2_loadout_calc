const configAbility = {
  "fileName": "-1565656763_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1400833329\">BattleEventAbilityNewBoxingClub_HPExchangeDamage_DamageUpModifier</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "stackType": "Replace",
      "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio</span>, up to 8 stacks.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "ATK Boost",
      "duration": 2,
      "stackLimit": 8,
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "statValue": {
                "displayLines": "(MDF_DamageUpRatio * MDF_Layer)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-6604732\">BattleEventAbilityNewBoxingClub_Sp_CritDamageUpModifier</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
      "stackType": "Replace",
      "description": "Each stack increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_CritDamageUpRatio</span>, up to 10 stacks.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "CRIT DMG Boost",
      "duration": 2,
      "stackLimit": 10,
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "statValue": {
                "displayLines": "(MDF_CritDamageUpRatio * MDF_Layer)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1214810651\">BattleEventAbilityNewBoxingClub_Sp_CritUpModifier</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
      "stackType": "Replace",
      "description": "Each stack increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_CritChanceUpRatio</span>, up to 10 stacks.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "CRIT Rate Boost",
      "duration": 2,
      "stackLimit": 10,
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "statValue": {
                "displayLines": "(MDF_CritChanceUpRatio * MDF_Layer)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__379851488\">BattleEventAbilityNewBoxingClub_HPExchangeDamage_IgnoreDefModifier</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                  "value": 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-846283301\">BattleEventAbilityNewBoxingClub_HPExchangeDamage</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MaxHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "CurrentHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MaxHP * 0.3)"
                  },
                  "variableName": "CostHP"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MaxHP * 0.5)"
                  },
                  "variableName": "HPFloor"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(CurrentHP - CostHP)"
                  },
                  "variableName": "TargetHP"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": {
                      "displayLines": "HPFloor"
                    }
                  },
                  "passed": [
                    {
                      "name": "Consume",
                      "consumeFrom": "MaxHP",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "consumePercent": 0.3,
                      "consumeFloor": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"379851488\">BattleEventAbilityNewBoxingClub_HPExchangeDamage_IgnoreDefModifier</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1400833329\">BattleEventAbilityNewBoxingClub_HPExchangeDamage_DamageUpModifier</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                      "valuePerStack": {
                        "MDF_DamageUpRatio": 0.5
                      }
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"379851488\">BattleEventAbilityNewBoxingClub_HPExchangeDamage_IgnoreDefModifier</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__720127566\">BattleEventAbilityNewBoxingClub_AddStanceWeak</a>",
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
              "statValue": 2
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Physical"
              },
              "passed": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical"
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Fire"
              },
              "passed": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Fire"
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Ice"
              },
              "passed": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Ice"
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Thunder"
              },
              "passed": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Thunder"
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Wind"
              },
              "passed": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Wind"
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Quantum"
              },
              "passed": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Quantum"
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Imaginary"
              },
              "passed": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Imaginary"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1632666176\">BattleEventAbilityNewBoxingClub_AllStanceBreakDamage</a>",
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
              "statValue": 1
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Skill"
              },
              "passed": [
                {
                  "name": "Trigger Modifier Event",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "variableName": "DOT_TriggerRatio",
                  "eventType": "DOT",
                  "value": {
                    "displayLines": "1"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Caused Weakness Break [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "TargetStance",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "warningType": "MaxToughness",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "DamageType": "Physical"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Base Break Damage",
                  "variableName": "CasterBreakBaseDamage",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1797970053\">Standard_Element_Bleed</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                  "duration": 2,
                  "baseChance": 1.5,
                  "valuePerStack": {
                    "MDF_EliteRatio": {
                      "displayLines": "(0.07 * DamageRatio)"
                    },
                    "MDF_StandardRatio": {
                      "displayLines": "(0.16 * DamageRatio)"
                    },
                    "MDF_DamageMax": {
                      "displayLines": "((((CasterBreakBaseDamage * 2) * (2 + (TargetStance / StanceUnit))) / 4) * DamageRatio)"
                    }
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageBreak": {
                      "displayLines": "(((2 * (2 + (TargetStance / StanceUnit))) / 4) * DamageRatio)"
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Break DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "DamageType": "Ice"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-130814791\">Standard_Element_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                  "duration": 1,
                  "baseChance": 1.5,
                  "valuePerStack": {
                    "MDF_DamagePercentage": {
                      "displayLines": "DamageRatio"
                    }
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "DamageBreak": {
                      "displayLines": "(((1 * (2 + (TargetStance / StanceUnit))) / 4) * DamageRatio)"
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Break DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "DamageType": "Fire"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1852685234\">Standard_Element_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                  "duration": 2,
                  "baseChance": 1.5,
                  "valuePerStack": {
                    "MDF_DamagePercentage": {
                      "displayLines": "DamageRatio"
                    }
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageBreak": {
                      "displayLines": "(((2 * (2 + (TargetStance / StanceUnit))) / 4) * DamageRatio)"
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Break DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "DamageType": "Wind"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-51292629\">Standard_Element_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                      "duration": 2,
                      "baseChance": 1.5,
                      "valuePerStack": {
                        "MDF_DamagePercentage": {
                          "displayLines": "DamageRatio"
                        }
                      },
                      "addStacksPerTrigger": 3
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-51292629\">Standard_Element_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                      "duration": 2,
                      "baseChance": 1.5,
                      "valuePerStack": {
                        "MDF_DamagePercentage": {
                          "displayLines": "DamageRatio"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageBreak": {
                      "displayLines": "(((1.5 * (2 + (TargetStance / StanceUnit))) / 4) * DamageRatio)"
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Break DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "DamageType": "Thunder"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1979618180\">Standard_Element_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                  "duration": 2,
                  "baseChance": 1.5,
                  "valuePerStack": {
                    "MDF_DamagePercentage": {
                      "displayLines": "(2 * DamageRatio)"
                    }
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "DamageBreak": {
                      "displayLines": "(((1 * (2 + (TargetStance / StanceUnit))) / 4) * DamageRatio)"
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Break DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "DamageType": "Imaginary"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-838929203\">Standard_Element_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                  "duration": 1,
                  "baseChance": 1.5,
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": 0.3,
                    "MDF_SpeedDownRatio": 0.1
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "DamageBreak": {
                      "displayLines": "(((0.5 * (2 + (TargetStance / StanceUnit))) / 4) * DamageRatio)"
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Break DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "DamageType": "Quantum"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-576412017\">Standard_Element_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                  "duration": 1,
                  "baseChance": 1.5,
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": 0.2,
                    "MDF_DamagePercentage": {
                      "displayLines": "(((0.75 * (2 + (TargetStance / StanceUnit))) / 4) * DamageRatio)"
                    }
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageBreak": {
                      "displayLines": "(((0.5 * (2 + (TargetStance / StanceUnit))) / 4) * DamageRatio)"
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Break DMG"
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
      "for": "<a class=\"gModGreen\" id=\"mod__92909798\">BattleEventAbilityNewBoxingClub_StanceBreakDamageUp</a>",
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
              "statValue": 1
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 5,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
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
                        "displayLines": "0.8"
                      }
                    },
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Reset Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "skipTeamLock": true
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
      "for": "<a class=\"gModGreen\" id=\"mod__1096271358\">BattleEventAbilityNewBoxingClub_ModifyBPCost_AddCritDamageModifier</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
      "stackType": "Replace",
      "description": "Each stack increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_CritDamage</span>, up to 2 stacks.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "CRIT DMG Boost",
      "stackLimit": 2,
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "statValue": {
                "displayLines": "(MDF_CritDamage * MDF_Layer)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2035389673\">BattleEventAbilityNewBoxingClub_ModifyBPCost_AddCritModifier</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
      "stackType": "Replace",
      "description": "Each stack increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_CritChance</span>, up to 2 stacks.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "CRIT Rate Boost",
      "stackLimit": 2,
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "statValue": {
                "displayLines": "(MDF_CritChance * MDF_Layer)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-685577954\">BattleEventAbilityNewBoxingClub_ModifyBPCost</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Properties",
              "abilityTagList": [
                "Skill02",
                "Skill21"
              ],
              "propertyList": [
                {
                  "name": "Ability Property Action",
                  "propertyName": "Skill Point Cost",
                  "propertyAction": "Remove"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1115036386\">BattleEventAbilityNewBoxingClub_StanceBreakStateSP_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "stackType": "Replace",
      "description": "Each stack increases DMG received by <span class=\"descriptionNumberColor\">DamageTakenUpValue</span>, up to 5 stacks.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Vulnerability",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "value": 0.6,
              "variableName": "DamageTakenUpValue"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "statValue": {
                "displayLines": "(DamageTakenUpValue * MDF_Layer)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__341041736\">BattleEventAbilityNewBoxingClub_StanceBreakStateSP</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1115036386\">BattleEventAbilityNewBoxingClub_StanceBreakStateSP_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                  "stackLimit": 5
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Caused Weakness Break [Owner]",
          "execute": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": 200,
              "isFixed": "* ERR"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__414329207\">BattleEventAbilityNewBoxingClub_BonusDamage</a>",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": {
                  "name": "Custom Damage Type",
                  "initialTypePreRead": "Ice",
                  "sourceType": "ReadTargetType",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                "DamageBreak": {
                  "displayLines": "(0.5 * BuffCount)"
                },
                "dmgFormula": "Break DMG Scaling",
                "dmgFormulaFinal": "Pure (No DMG%)",
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Modifier Status Type",
                "statusType": "Buff"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Status Counter",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "BuffCount",
                  "type": "Buff"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Modifier Status Type",
                "statusType": "Buff"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Status Counter",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "BuffCount",
                  "type": "Buff"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1894271172\">BattleEventAbilityNewBoxingClub_BPSpeedUp_UltraDamageUp</a>[<span class=\"descriptionNumberColor\">Ultimate DMG Boost</span>]",
      "stackType": "Replace",
      "description": "Each stack increases DMG dealt by the next Ultimate by <span class=\"descriptionNumberColor\">UltraDamageUp</span>, up to 3 stacks.",
      "type": "Buff",
      "effectName": "Ultimate DMG Boost",
      "statusName": "Ultimate DMG Boost",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "(UltraDamageUp * MDF_Layer)"
                    }
                  ]
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
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1894271172\">BattleEventAbilityNewBoxingClub_BPSpeedUp_UltraDamageUp</a>[<span class=\"descriptionNumberColor\">Ultimate DMG Boost</span>]"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1016177797\">BattleEventAbilityNewBoxingClub_BPSpeedUp</a>",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "skillType": [
          "Skill"
        ],
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0(Set AV)"
        }
      },
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Skill"
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Current Action Owner}}"
                  },
                  "set": 0
                },
                {
                  "name": "Assign Advance/Delay to Current Ability Use",
                  "adjustmentValue": -1,
                  "adjustmentType": "Advance"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Current Action Owner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1894271172\">BattleEventAbilityNewBoxingClub_BPSpeedUp_UltraDamageUp</a>[<span class=\"descriptionNumberColor\">Ultimate DMG Boost</span>]",
                  "stackLimit": 3
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1113757560\">BattleEventAbilityNewBoxingClub_AllStanceBreakState_DamageTakenUP</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "stackType": "Replace",
      "description": "Each stack increases DMG received by <span class=\"descriptionNumberColor\">DamageTakenUpValue</span>, up to 12 stacks.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Vulnerability",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "value": 0.4,
              "variableName": "DamageTakenUpValue"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EnemyVulnerability</span>&nbsp;",
              "statValue": {
                "displayLines": "(DamageTakenUpValue * MDF_Layer)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1174856950\">BattleEventAbilityNewBoxingClub_AllStanceBreakState</a>",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1113757560\">BattleEventAbilityNewBoxingClub_AllStanceBreakState_DamageTakenUP</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                      "stackLimit": 12
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Caused Weakness Break [Owner]",
          "execute": [
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "TargetStance",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "warningType": "MaxToughness",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
            },
            {
              "name": "Trigger: Break",
              "target": {
                "name": "Target Sequence",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "NOT",
                      "conditions": {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Get Prior Entity Defined by Index",
                          "index": 1
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Physical"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Base Break Damage",
                  "variableName": "CasterBreakBaseDamage",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "conditions": {
                            "name": "Is Part Of",
                            "target1": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          }
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1797970053\">Standard_Element_Bleed</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                  "duration": 2,
                  "baseChance": 1.5,
                  "valuePerStack": {
                    "MDF_EliteRatio": 0.07,
                    "MDF_StandardRatio": 0.16,
                    "MDF_DamageMax": {
                      "displayLines": "(((CasterBreakBaseDamage * 2) * (2 + (TargetStance / StanceUnit))) / 4)"
                    }
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "conditions": {
                            "name": "Is Part Of",
                            "target1": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          }
                        }
                      }
                    ]
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageBreak": {
                      "displayLines": "((2 * (2 + (TargetStance / StanceUnit))) / 4)"
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": {
                      "displayLines": 1
                    },
                    "Tags": null,
                    "attackType": "Break DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Fire"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "conditions": {
                            "name": "Is Part Of",
                            "target1": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          }
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1852685234\">Standard_Element_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                  "duration": 2,
                  "baseChance": 1.5,
                  "valuePerStack": {
                    "MDF_DamagePercentage": 1
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "conditions": {
                            "name": "Is Part Of",
                            "target1": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          }
                        }
                      }
                    ]
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageBreak": {
                      "displayLines": "((2 * (2 + (TargetStance / StanceUnit))) / 4)"
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": {
                      "displayLines": 1
                    },
                    "Tags": null,
                    "attackType": "Break DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Wind"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Sequence",
                      "TargetList": [
                        {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "NOT",
                            "conditions": {
                              "name": "Is Part Of",
                              "target1": {
                                "name": "Get Prior Entity Defined by Index",
                                "index": 1
                              },
                              "target2": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          }
                        }
                      ]
                    },
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "NOT",
                              "conditions": {
                                "name": "Is Part Of",
                                "target1": {
                                  "name": "Get Prior Entity Defined by Index",
                                  "index": 1
                                },
                                "target2": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                }
                              }
                            }
                          }
                        ]
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-51292629\">Standard_Element_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                      "duration": 2,
                      "baseChance": 1.5,
                      "valuePerStack": {
                        "MDF_DamagePercentage": 1
                      },
                      "addStacksPerTrigger": 3
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "NOT",
                              "conditions": {
                                "name": "Is Part Of",
                                "target1": {
                                  "name": "Get Prior Entity Defined by Index",
                                  "index": 1
                                },
                                "target2": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                }
                              }
                            }
                          }
                        ]
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-51292629\">Standard_Element_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                      "duration": 2,
                      "baseChance": 1.5,
                      "valuePerStack": {
                        "MDF_DamagePercentage": 1
                      }
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "conditions": {
                            "name": "Is Part Of",
                            "target1": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          }
                        }
                      }
                    ]
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageBreak": {
                      "displayLines": "((1.5 * (2 + (TargetStance / StanceUnit))) / 4)"
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": {
                      "displayLines": 1
                    },
                    "Tags": null,
                    "attackType": "Break DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Thunder"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "conditions": {
                            "name": "Is Part Of",
                            "target1": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          }
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1979618180\">Standard_Element_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                  "duration": 2,
                  "baseChance": 1.5,
                  "valuePerStack": {
                    "MDF_DamagePercentage": 2
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "conditions": {
                            "name": "Is Part Of",
                            "target1": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          }
                        }
                      }
                    ]
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "DamageBreak": {
                      "displayLines": "((1 * (2 + (TargetStance / StanceUnit))) / 4)"
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": {
                      "displayLines": 1
                    },
                    "Tags": null,
                    "attackType": "Break DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Imaginary"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "conditions": {
                            "name": "Is Part Of",
                            "target1": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          }
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-838929203\">Standard_Element_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                  "duration": 1,
                  "baseChance": 1.5,
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": 0.5,
                    "MDF_SpeedDownRatio": 0.1
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "conditions": {
                            "name": "Is Part Of",
                            "target1": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          }
                        }
                      }
                    ]
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "DamageBreak": {
                      "displayLines": "((0.5 * (2 + (TargetStance / StanceUnit))) / 4)"
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": {
                      "displayLines": 1
                    },
                    "Tags": null,
                    "attackType": "Break DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Quantum"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "conditions": {
                            "name": "Is Part Of",
                            "target1": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          }
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-576412017\">Standard_Element_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                  "duration": 1,
                  "baseChance": 1.5,
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": 0.2,
                    "MDF_DamagePercentage": {
                      "displayLines": "((0.75 * (2 + (TargetStance / StanceUnit))) / 4)"
                    }
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "conditions": {
                            "name": "Is Part Of",
                            "target1": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          }
                        }
                      }
                    ]
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageBreak": {
                      "displayLines": "((0.5 * (2 + (TargetStance / StanceUnit))) / 4)"
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": {
                      "displayLines": 1
                    },
                    "Tags": null,
                    "attackType": "Break DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Ice"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "conditions": {
                            "name": "Is Part Of",
                            "target1": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          }
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-130814791\">Standard_Element_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                  "duration": 1,
                  "baseChance": 1.5,
                  "valuePerStack": {
                    "MDF_DamagePercentage": 1
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "conditions": {
                            "name": "Is Part Of",
                            "target1": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          }
                        }
                      }
                    ]
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "DamageBreak": {
                      "displayLines": "((1 * (2 + (TargetStance / StanceUnit))) / 4)"
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": {
                      "displayLines": 1
                    },
                    "Tags": null,
                    "attackType": "Break DMG"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1538096628\">BattleEventAbilityNewBoxingClub_Sp</a>",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
              "statValue": 0.5
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1214810651\">BattleEventAbilityNewBoxingClub_Sp_CritUpModifier</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-6604732\">BattleEventAbilityNewBoxingClub_Sp_CritDamageUpModifier</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]"
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "value": 10,
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1683443620\">BattleEventAbilityNewBoxingClub_ControlDamageUp</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "StatusCount",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
              "statValue": 300
            }
          ]
        }
      ]
    }
  ],
  "references": []
}