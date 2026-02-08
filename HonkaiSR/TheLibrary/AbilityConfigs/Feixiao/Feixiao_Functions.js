const configAbility = {
  "fileName": "Feixiao_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 15,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1045121925\">Feixiao_Passive_ChargeTeamAttackCount</a>",
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "Passive_AttackCount",
          "value": {
            "operator": "Variables[0] (Passive_AttackCount) || Variables[1] (parameter[0]_AddValue) || ADD || RETURN",
            "displayLines": "(Passive_AttackCount + parameter[0]_AddValue)",
            "constants": [],
            "variables": [
              "Passive_AttackCount",
              "parameter[0]_AddValue"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ComboAttackCount",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (12) || RETURN",
              "displayLines": "12",
              "constants": [],
              "variables": [
                12
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Passive_AttackCount",
              "value": {
                "operator": "Variables[0] (MIN) || Variables[1] (Passive_AttackCount) || Variables[2] (Passive_NeedAttackCount) || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(Passive_AttackCount, Passive_NeedAttackCount)",
                "constants": [],
                "variables": [
                  "MIN",
                  "Passive_AttackCount",
                  "Passive_NeedAttackCount"
                ]
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"683713803\">Feixiao_Passive_CostTeamAttackCountToGainSP</a>"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__683713803\">Feixiao_Passive_CostTeamAttackCountToGainSP</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "Passive_AttackCount",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (Passive_NeedAttackCount) || RETURN",
                  "displayLines": "Passive_NeedAttackCount",
                  "constants": [],
                  "variables": [
                    "Passive_NeedAttackCount"
                  ]
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "ComboAttackCount",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (12) || RETURN",
                  "displayLines": "12",
                  "constants": [],
                  "variables": [
                    12
                  ]
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": 1,
              "isFixed": "(Fixed)",
              "ignoreBlock": true,
              "isSpecialEnergy": true
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Passive_AttackCount",
              "context": "ContextCaster",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (Passive_NeedAttackCount) || SUB || RETURN",
                "displayLines": "(0 - Passive_NeedAttackCount)",
                "constants": [
                  0
                ],
                "variables": [
                  "Passive_NeedAttackCount"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__2050569712\">Feixiao_ResetAnimSpeed</a>",
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "ComboSpeed",
          "value": 1
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1125040676\">Feixiao_ComboStartCheck</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Animator Variable",
                "paramType": "Bool",
                "paramName": "IsCombo",
                "compareType": "="
              }
            ]
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__69209893\">Feixiao_Combo1_CostSPBeforeDamage</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1161841910\">Feixiao_Combo1_DealSubDamage</a>",
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (Ability11_DamagePercentage) || RETURN",
              "displayLines": "Ability11_DamagePercentage",
              "constants": [],
              "variables": [
                "Ability11_DamagePercentage"
              ]
            },
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          },
          "attackType": "Ultimate"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-14625690\">Feixiao_Combo1_DealDamage</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Combo1_Loop_Index",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (Ability11_DamagePercentage) || RETURN",
                  "displayLines": "Ability11_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Ability11_DamagePercentage"
                  ]
                },
                "HitSplit": 0.9,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              },
              "attackType": "Ultimate"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Combo1_Loop_Index",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (Ability11_DamagePercentage) || RETURN",
                  "displayLines": "Ability11_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Ability11_DamagePercentage"
                  ]
                },
                "HitSplit": 0.9,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              },
              "attackType": "Ultimate"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Combo1_Loop_Index",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (Ability11_DamagePercentage) || RETURN",
                  "displayLines": "Ability11_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Ability11_DamagePercentage"
                  ]
                },
                "HitSplit": 0.9,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              },
              "attackType": "Ultimate"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Combo1_Loop_Index",
            "compareType": "=",
            "value2": 4
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (Ability11_DamagePercentage) || RETURN",
                  "displayLines": "Ability11_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Ability11_DamagePercentage"
                  ]
                },
                "HitSplit": 0.9,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              },
              "attackType": "Ultimate"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1999111375\">Feixiao_Combo2_DealDamage</a>",
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextAbility",
          "variableName": "ADF_Effect_Index",
          "value": {
            "operator": "Variables[0] (UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]) || Variables[1] (FLOOR) || Variables[2] (ComboHitCount) || Constants[0] (2) || DIV || PARAM_1 || FUNCTION || Constants[0] (2) || PARAM_2 || FUNCTION || RETURN",
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]</span>(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((ComboHitCount / 2)), 2)",
            "constants": [
              2
            ],
            "variables": [
              "UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]",
              "FLOOR",
              "ComboHitCount"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Combo2_Loop_Index",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ADF_Effect_Index",
                "compareType": "=",
                "value2": 0
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (Skill21_DamagePercentage) || RETURN",
                  "displayLines": "Skill21_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Skill21_DamagePercentage"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              },
              "attackType": "Ultimate"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ADF_Effect_Index",
                "compareType": "=",
                "value2": 0
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (Skill21_DamagePercentage) || RETURN",
                  "displayLines": "Skill21_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Skill21_DamagePercentage"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              },
              "attackType": "Ultimate"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1982785786\">Feixiao_TriggerBreak</a>",
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "First_Break_Effect",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ComboType",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Active: Fast-Forward Animations"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1394849956\">Feixiao_Combo1_AfterDamageCheck</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1384650414\">Feixiao_Eidolon1_Property</a>[<span class=\"descriptionNumberColor\">Skyward I Quell</span>]",
              "stackLimit": {
                "operator": "Variables[0] (5) || RETURN",
                "displayLines": "5",
                "constants": [],
                "variables": [
                  5
                ]
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.1) || RETURN",
                  "displayLines": "0.1",
                  "constants": [],
                  "variables": [
                    0.1
                  ]
                }
              },
              "addStacksPerTrigger": 1
            }
          ]
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "ComboHitCount",
          "context": "ContextCaster",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1145384524\">M_Feixiao_UltraTarget_CutFlag</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Force-Trigger Ability Next-Phase",
              "ability": "MISSING NAME OBJECT(Or implicit from Context)"
            }
          ],
          "failed": [
            {
              "name": "Force-Trigger Ability Next-Phase",
              "ability": "MISSING NAME OBJECT(Or implicit from Context)",
              "subAbilityIndex": 1
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Hide",
              "abilityName": "Ultimate"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Show",
              "abilityName": "Ultimate",
              "subAbilityIndex": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Compare: Variable",
                "value1": "First_Break_Effect",
                "compareType": ">=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1982785786\">Feixiao_TriggerBreak</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1389767451\">Feixiao_Combo2_AfterDamageCheck</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1384650414\">Feixiao_Eidolon1_Property</a>[<span class=\"descriptionNumberColor\">Skyward I Quell</span>]",
              "stackLimit": {
                "operator": "Variables[0] (5) || RETURN",
                "displayLines": "5",
                "constants": [],
                "variables": [
                  5
                ]
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.1) || RETURN",
                  "displayLines": "0.1",
                  "constants": [],
                  "variables": [
                    0.1
                  ]
                }
              },
              "addStacksPerTrigger": 1
            }
          ]
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "ComboHitCount",
          "context": "ContextCaster",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1145384524\">M_Feixiao_UltraTarget_CutFlag</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Force-Trigger Ability Next-Phase",
              "ability": "MISSING NAME OBJECT(Or implicit from Context)"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Show",
              "abilityName": "Ultimate"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Hide",
              "abilityName": "Ultimate",
              "subAbilityIndex": 1
            }
          ],
          "failed": [
            {
              "name": "Force-Trigger Ability Next-Phase",
              "ability": "MISSING NAME OBJECT(Or implicit from Context)",
              "subAbilityIndex": 1
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__342687242\">Feixiao_ComboPerformFinish</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              },
              {
                "name": "Compare: Variable",
                "value1": "ComboHitCount",
                "compareType": "=",
                "value2": {
                  "operator": "Variables[0] (6) || Constants[0] (1) || SUB || RETURN",
                  "displayLines": "(6 - 1)",
                  "constants": [
                    1
                  ],
                  "variables": [
                    6
                  ]
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Feixiao_AchievementPrecheck",
              "value": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Active: Fast-Forward Animations"
          }
        },
        {
          "name": "Trigger: Ability End",
          "skipAttackSettle": true
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1207472342\">Feixiao_EnterFinish</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "ComboHitCount",
          "context": "ContextCaster",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "Feixiao_AchievementPrecheck",
                "compareType": ">=",
                "value2": 1
              },
              {
                "name": "Compare: Variable",
                "value1": "ComboHitCount",
                "compareType": "=",
                "value2": {
                  "operator": "Variables[0] (6) || RETURN",
                  "displayLines": "6",
                  "constants": [],
                  "variables": [
                    6
                  ]
                }
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "value1": "CurrentHP",
                "compareType": "<=",
                "value2": 0
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
              "modifier": "<a class=\"gModGreen\" id=\"-1478735185\">M_Feixiao_AchievementFlag</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Active: Fast-Forward Animations"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"965737321\">M_Feixiao_UltraTarget_FinalHitFlag</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Compare: Variable",
                "value1": "First_Break_Effect",
                "compareType": ">=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1982785786\">Feixiao_TriggerBreak</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Active: Fast-Forward Animations"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ComboType",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"908013757\">Monster_W2_Feixiao_MainEnd</a>"
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability03_Finish_W2Main_Part01"
            }
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability03_Finish_Part01"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1990296654\">Feixiao_ReturnComboLoopOnCombo</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Animator Variable",
            "paramType": "Bool",
            "paramName": "IsStart",
            "compareType": "="
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Active: Fast-Forward Animations"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__293207912\">Feixiao_FrameHaltRealTime</a>",
      "parse": []
    }
  ],
  "references": []
}