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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageUpRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_DamageUpRatio * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_DamageUpRatio",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio</span>, up to 8 stacks.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "ATK Boost",
      "duration": 2,
      "stackLimit": 8,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-6604732\">BattleEventAbilityNewBoxingClub_Sp_CritDamageUpModifier</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CritDamageUpRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_CritDamageUpRatio * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_CritDamageUpRatio",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_CritDamageUpRatio</span>, up to 10 stacks.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "CRIT DMG Boost",
      "duration": 2,
      "stackLimit": 10,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1214810651\">BattleEventAbilityNewBoxingClub_Sp_CritUpModifier</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CritChanceUpRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_CritChanceUpRatio * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_CritChanceUpRatio",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_CritChanceUpRatio</span>, up to 10 stacks.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "CRIT Rate Boost",
      "duration": 2,
      "stackLimit": 10,
      "addStacksPerTrigger": 1
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "CurrentHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CostHP",
                  "value": {
                    "operator": "Variables[0] (MaxHP) || Constants[0] (0.3) || MUL || RETURN",
                    "displayLines": "(MaxHP * 0.3)",
                    "constants": [
                      0.3
                    ],
                    "variables": [
                      "MaxHP"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "HPFloor",
                  "value": {
                    "operator": "Variables[0] (MaxHP) || Constants[0] (0.5) || MUL || RETURN",
                    "displayLines": "(MaxHP * 0.5)",
                    "constants": [
                      0.5
                    ],
                    "variables": [
                      "MaxHP"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TargetHP",
                  "value": {
                    "operator": "Variables[0] (CurrentHP) || Variables[1] (CostHP) || SUB || RETURN",
                    "displayLines": "(CurrentHP - CostHP)",
                    "constants": [],
                    "variables": [
                      "CurrentHP",
                      "CostHP"
                    ]
                  }
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
                      "operator": "Variables[0] (HPFloor) || RETURN",
                      "displayLines": "HPFloor",
                      "constants": [],
                      "variables": [
                        "HPFloor"
                      ]
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
      ],
      "stackData": [],
      "latentQueue": []
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": 2
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
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Physical"
                }
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
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Fire"
                }
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
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Ice"
                }
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
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Thunder"
                }
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
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Wind"
                }
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
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Quantum"
                }
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
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Imaginary"
                }
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
      ],
      "stackData": [],
      "latentQueue": []
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": 1
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
                    "operator": "Constants[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [
                      1
                    ],
                    "variables": []
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
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "TargetStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
              "warningType": "MaxToughness"
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CasterBreakBaseDamage"
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
                      "operator": "Constants[0] (0.07) || Variables[0] (DamageRatio) || MUL || RETURN",
                      "displayLines": "(0.07 * DamageRatio)",
                      "constants": [
                        0.07
                      ],
                      "variables": [
                        "DamageRatio"
                      ]
                    },
                    "MDF_StandardRatio": {
                      "operator": "Constants[0] (0.16) || Variables[0] (DamageRatio) || MUL || RETURN",
                      "displayLines": "(0.16 * DamageRatio)",
                      "constants": [
                        0.16
                      ],
                      "variables": [
                        "DamageRatio"
                      ]
                    },
                    "MDF_DamageMax": {
                      "operator": "Variables[0] (CasterBreakBaseDamage) || Constants[0] (2) || MUL || Constants[0] (2) || Variables[1] (TargetStance) || Variables[2] (StanceUnit) || DIV || ADD || MUL || Constants[1] (4) || DIV || Variables[3] (DamageRatio) || MUL || RETURN",
                      "displayLines": "((((CasterBreakBaseDamage * 2) * (2 + (TargetStance / StanceUnit))) / 4) * DamageRatio)",
                      "constants": [
                        2,
                        4
                      ],
                      "variables": [
                        "CasterBreakBaseDamage",
                        "TargetStance",
                        "StanceUnit",
                        "DamageRatio"
                      ]
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
                      "operator": "Constants[0] (2) || Constants[0] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[1] (4) || DIV || Variables[2] (DamageRatio) || MUL || RETURN",
                      "displayLines": "(((2 * (2 + (TargetStance / StanceUnit))) / 4) * DamageRatio)",
                      "constants": [
                        2,
                        4
                      ],
                      "variables": [
                        "TargetStance",
                        "StanceUnit",
                        "DamageRatio"
                      ]
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
                      "operator": "Variables[0] (DamageRatio) || RETURN",
                      "displayLines": "DamageRatio",
                      "constants": [],
                      "variables": [
                        "DamageRatio"
                      ]
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
                      "operator": "Constants[0] (1) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || Variables[2] (DamageRatio) || MUL || RETURN",
                      "displayLines": "(((1 * (2 + (TargetStance / StanceUnit))) / 4) * DamageRatio)",
                      "constants": [
                        1,
                        2,
                        4
                      ],
                      "variables": [
                        "TargetStance",
                        "StanceUnit",
                        "DamageRatio"
                      ]
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
                      "operator": "Variables[0] (DamageRatio) || RETURN",
                      "displayLines": "DamageRatio",
                      "constants": [],
                      "variables": [
                        "DamageRatio"
                      ]
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
                      "operator": "Constants[0] (2) || Constants[0] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[1] (4) || DIV || Variables[2] (DamageRatio) || MUL || RETURN",
                      "displayLines": "(((2 * (2 + (TargetStance / StanceUnit))) / 4) * DamageRatio)",
                      "constants": [
                        2,
                        4
                      ],
                      "variables": [
                        "TargetStance",
                        "StanceUnit",
                        "DamageRatio"
                      ]
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
                          "operator": "Variables[0] (DamageRatio) || RETURN",
                          "displayLines": "DamageRatio",
                          "constants": [],
                          "variables": [
                            "DamageRatio"
                          ]
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
                          "operator": "Variables[0] (DamageRatio) || RETURN",
                          "displayLines": "DamageRatio",
                          "constants": [],
                          "variables": [
                            "DamageRatio"
                          ]
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
                      "operator": "Constants[0] (1.5) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || Variables[2] (DamageRatio) || MUL || RETURN",
                      "displayLines": "(((1.5 * (2 + (TargetStance / StanceUnit))) / 4) * DamageRatio)",
                      "constants": [
                        1.5,
                        2,
                        4
                      ],
                      "variables": [
                        "TargetStance",
                        "StanceUnit",
                        "DamageRatio"
                      ]
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
                      "operator": "Constants[0] (2) || Variables[0] (DamageRatio) || MUL || RETURN",
                      "displayLines": "(2 * DamageRatio)",
                      "constants": [
                        2
                      ],
                      "variables": [
                        "DamageRatio"
                      ]
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
                      "operator": "Constants[0] (1) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || Variables[2] (DamageRatio) || MUL || RETURN",
                      "displayLines": "(((1 * (2 + (TargetStance / StanceUnit))) / 4) * DamageRatio)",
                      "constants": [
                        1,
                        2,
                        4
                      ],
                      "variables": [
                        "TargetStance",
                        "StanceUnit",
                        "DamageRatio"
                      ]
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
                      "operator": "Constants[0] (0.5) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || Variables[2] (DamageRatio) || MUL || RETURN",
                      "displayLines": "(((0.5 * (2 + (TargetStance / StanceUnit))) / 4) * DamageRatio)",
                      "constants": [
                        0.5,
                        2,
                        4
                      ],
                      "variables": [
                        "TargetStance",
                        "StanceUnit",
                        "DamageRatio"
                      ]
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
                      "operator": "Constants[0] (0.75) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || Variables[2] (DamageRatio) || MUL || RETURN",
                      "displayLines": "(((0.75 * (2 + (TargetStance / StanceUnit))) / 4) * DamageRatio)",
                      "constants": [
                        0.75,
                        2,
                        4
                      ],
                      "variables": [
                        "TargetStance",
                        "StanceUnit",
                        "DamageRatio"
                      ]
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
                      "operator": "Constants[0] (0.5) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || Variables[2] (DamageRatio) || MUL || RETURN",
                      "displayLines": "(((0.5 * (2 + (TargetStance / StanceUnit))) / 4) * DamageRatio)",
                      "constants": [
                        0.5,
                        2,
                        4
                      ],
                      "variables": [
                        "TargetStance",
                        "StanceUnit",
                        "DamageRatio"
                      ]
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
      ],
      "stackData": [],
      "latentQueue": []
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": 1
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
                        "operator": "Constants[0] (0.8) || RETURN",
                        "displayLines": "0.8",
                        "constants": [
                          0.8
                        ],
                        "variables": []
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1096271358\">BattleEventAbilityNewBoxingClub_ModifyBPCost_AddCritDamageModifier</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CritDamage) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_CritDamage * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_CritDamage",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Each stack increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_CritDamage</span>, up to 2 stacks.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "CRIT DMG Boost",
      "stackLimit": 2,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2035389673\">BattleEventAbilityNewBoxingClub_ModifyBPCost_AddCritModifier</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CritChance) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_CritChance * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_CritChance",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Each stack increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_CritChance</span>, up to 2 stacks.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "CRIT Rate Boost",
      "stackLimit": 2,
      "addStacksPerTrigger": 1
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1115036386\">BattleEventAbilityNewBoxingClub_StanceBreakStateSP_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "stackType": "Replace",
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
              "variableName": "DamageTakenUpValue",
              "value": 0.6
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (DamageTakenUpValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(DamageTakenUpValue * MDF_Layer)",
                "constants": [],
                "variables": [
                  "DamageTakenUpValue",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases DMG received by <span class=\"descriptionNumberColor\">DamageTakenUpValue</span>, up to 5 stacks.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Vulnerability",
      "addStacksPerTrigger": 1
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
      ],
      "stackData": [],
      "latentQueue": []
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
                  "operator": "Constants[0] (0.5) || Variables[0] (BuffCount) || MUL || RETURN",
                  "displayLines": "(0.5 * BuffCount)",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "BuffCount"
                  ]
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1894271172\">BattleEventAbilityNewBoxingClub_BPSpeedUp_UltraDamageUp</a>[<span class=\"descriptionNumberColor\">Ultimate DMG Boost</span>]",
      "stackType": "Replace",
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
      ],
      "description": "Each stack increases DMG dealt by the next Ultimate by <span class=\"descriptionNumberColor\">UltraDamageUp</span>, up to 3 stacks.",
      "type": "Buff",
      "effectName": "Ultimate DMG Boost",
      "statusName": "Ultimate DMG Boost",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1016177797\">BattleEventAbilityNewBoxingClub_BPSpeedUp</a>",
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
      ],
      "stackData": [],
      "latentQueue": [],
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
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1113757560\">BattleEventAbilityNewBoxingClub_AllStanceBreakState_DamageTakenUP</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "stackType": "Replace",
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
              "variableName": "DamageTakenUpValue",
              "value": 0.4
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnemyVulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (DamageTakenUpValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(DamageTakenUpValue * MDF_Layer)",
                "constants": [],
                "variables": [
                  "DamageTakenUpValue",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases DMG received by <span class=\"descriptionNumberColor\">DamageTakenUpValue</span>, up to 12 stacks.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Vulnerability",
      "addStacksPerTrigger": 1
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
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "TargetStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
              "warningType": "MaxToughness"
            },
            {
              "name": "Trigger: Break",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "NOT",
                      "condition": {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Get Prior Entity Defined by Index",
                          "index": 1
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
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
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Physical"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Base Break Damage",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CasterBreakBaseDamage"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "condition": {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "mustBeAlive2": true
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
                      "operator": "Variables[0] (CasterBreakBaseDamage) || Constants[0] (2) || MUL || Constants[0] (2) || Variables[1] (TargetStance) || Variables[2] (StanceUnit) || DIV || ADD || MUL || Constants[1] (4) || DIV || RETURN",
                      "displayLines": "(((CasterBreakBaseDamage * 2) * (2 + (TargetStance / StanceUnit))) / 4)",
                      "constants": [
                        2,
                        4
                      ],
                      "variables": [
                        "CasterBreakBaseDamage",
                        "TargetStance",
                        "StanceUnit"
                      ]
                    }
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "condition": {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "mustBeAlive2": true
                          }
                        }
                      }
                    ]
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageBreak": {
                      "operator": "Constants[0] (2) || Constants[0] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[1] (4) || DIV || RETURN",
                      "displayLines": "((2 * (2 + (TargetStance / StanceUnit))) / 4)",
                      "constants": [
                        2,
                        4
                      ],
                      "variables": [
                        "TargetStance",
                        "StanceUnit"
                      ]
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
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Fire"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "condition": {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "mustBeAlive2": true
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
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "condition": {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "mustBeAlive2": true
                          }
                        }
                      }
                    ]
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageBreak": {
                      "operator": "Constants[0] (2) || Constants[0] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[1] (4) || DIV || RETURN",
                      "displayLines": "((2 * (2 + (TargetStance / StanceUnit))) / 4)",
                      "constants": [
                        2,
                        4
                      ],
                      "variables": [
                        "TargetStance",
                        "StanceUnit"
                      ]
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
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Wind"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "NOT",
                            "condition": {
                              "name": "Is Part Of",
                              "of": {
                                "name": "Get Prior Entity Defined by Index",
                                "index": 1
                              },
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "mustBeAlive2": true
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
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "NOT",
                              "condition": {
                                "name": "Is Part Of",
                                "of": {
                                  "name": "Get Prior Entity Defined by Index",
                                  "index": 1
                                },
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "mustBeAlive2": true
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
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "NOT",
                              "condition": {
                                "name": "Is Part Of",
                                "of": {
                                  "name": "Get Prior Entity Defined by Index",
                                  "index": 1
                                },
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "mustBeAlive2": true
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
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "condition": {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "mustBeAlive2": true
                          }
                        }
                      }
                    ]
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageBreak": {
                      "operator": "Constants[0] (1.5) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || RETURN",
                      "displayLines": "((1.5 * (2 + (TargetStance / StanceUnit))) / 4)",
                      "constants": [
                        1.5,
                        2,
                        4
                      ],
                      "variables": [
                        "TargetStance",
                        "StanceUnit"
                      ]
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
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Thunder"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "condition": {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "mustBeAlive2": true
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
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "condition": {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "mustBeAlive2": true
                          }
                        }
                      }
                    ]
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "DamageBreak": {
                      "operator": "Constants[0] (1) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || RETURN",
                      "displayLines": "((1 * (2 + (TargetStance / StanceUnit))) / 4)",
                      "constants": [
                        1,
                        2,
                        4
                      ],
                      "variables": [
                        "TargetStance",
                        "StanceUnit"
                      ]
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
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Imaginary"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "condition": {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "mustBeAlive2": true
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
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "condition": {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "mustBeAlive2": true
                          }
                        }
                      }
                    ]
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "DamageBreak": {
                      "operator": "Constants[0] (0.5) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || RETURN",
                      "displayLines": "((0.5 * (2 + (TargetStance / StanceUnit))) / 4)",
                      "constants": [
                        0.5,
                        2,
                        4
                      ],
                      "variables": [
                        "TargetStance",
                        "StanceUnit"
                      ]
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
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Quantum"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "condition": {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "mustBeAlive2": true
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
                      "operator": "Constants[0] (0.75) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || RETURN",
                      "displayLines": "((0.75 * (2 + (TargetStance / StanceUnit))) / 4)",
                      "constants": [
                        0.75,
                        2,
                        4
                      ],
                      "variables": [
                        "TargetStance",
                        "StanceUnit"
                      ]
                    }
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "condition": {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "mustBeAlive2": true
                          }
                        }
                      }
                    ]
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageBreak": {
                      "operator": "Constants[0] (0.5) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || RETURN",
                      "displayLines": "((0.5 * (2 + (TargetStance / StanceUnit))) / 4)",
                      "constants": [
                        0.5,
                        2,
                        4
                      ],
                      "variables": [
                        "TargetStance",
                        "StanceUnit"
                      ]
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
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "Ice"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "condition": {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "mustBeAlive2": true
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
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "NOT",
                          "condition": {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Get Prior Entity Defined by Index",
                              "index": 1
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "mustBeAlive2": true
                          }
                        }
                      }
                    ]
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "DamageBreak": {
                      "operator": "Constants[0] (1) || Constants[1] (2) || Variables[0] (TargetStance) || Variables[1] (StanceUnit) || DIV || ADD || MUL || Constants[2] (4) || DIV || RETURN",
                      "displayLines": "((1 * (2 + (TargetStance / StanceUnit))) / 4)",
                      "constants": [
                        1,
                        2,
                        4
                      ],
                      "variables": [
                        "TargetStance",
                        "StanceUnit"
                      ]
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
      ],
      "stackData": [],
      "latentQueue": []
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
              "value": 0.5
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
      ],
      "stackData": [],
      "latentQueue": []
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
              "value": 300
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}