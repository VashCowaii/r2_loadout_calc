const configAbility = {
  "fileName": "Boothill_Boothill_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "_enhance_before_attack",
      "value": {
        "operator": "Variables[0] (CurEnhance) || RETURN",
        "displayLines": "CurEnhance",
        "constants": [],
        "variables": [
          "CurEnhance"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill11_Bonus_Check",
      "value": 0
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "One_Shot"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "One_Shot"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "One_Shot"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "One_Shot"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "One_Shot"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "One_Shot_Final"
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
            "value1": "_enhance_before_attack",
            "compareType": ">=",
            "value2": 1
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill11_Bonus_Check",
          "value": 1
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "_maxStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_maxStance",
          "value": {
            "operator": "Variables[0] (MIN) || Variables[1] (_maxStance) || Constants[0] (30) || Variables[2] (16) || MUL || PARAM_2 || FUNCTION || RETURN",
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(_maxStance, (30 * 16))",
            "constants": [
              30
            ],
            "variables": [
              "MIN",
              "_maxStance",
              16
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_enhance_before_attack",
            "compareType": ">=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill11_BreakDamagePercentage",
              "value": {
                "operator": "Variables[0] (1.7) || RETURN",
                "displayLines": "1.7",
                "constants": [],
                "variables": [
                  1.7
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_enhance_before_attack",
                "compareType": ">=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Skill11_BreakDamagePercentage",
                  "value": {
                    "operator": "Variables[0] (1.2) || RETURN",
                    "displayLines": "1.2",
                    "constants": [],
                    "variables": [
                      1.2
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Skill11_BreakDamagePercentage",
                  "value": {
                    "operator": "Variables[0] (0.7) || RETURN",
                    "displayLines": "0.7",
                    "constants": [],
                    "variables": [
                      0.7
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "DamageBreak": {
              "operator": "Constants[0] (0.2) || Constants[1] (2) || MUL || Variables[0] (_maxStance) || Constants[2] (30) || DIV || Constants[1] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (Skill11_BreakDamagePercentage) || MUL || RETURN",
              "displayLines": "((((0.2 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage)",
              "constants": [
                0.2,
                2,
                30,
                4
              ],
              "variables": [
                "_maxStance",
                "Skill11_BreakDamagePercentage"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
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
                "DamageType": "Physical",
                "DamageBreak": {
                  "operator": "Constants[0] (0.2) || Constants[1] (2) || MUL || Variables[0] (_maxStance) || Constants[2] (30) || DIV || Constants[1] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (Skill11_BreakDamagePercentage) || MUL || Variables[2] (0.4) || MUL || RETURN",
                  "displayLines": "(((((0.2 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage) * 0.4)",
                  "constants": [
                    0.2,
                    2,
                    30,
                    4
                  ],
                  "variables": [
                    "_maxStance",
                    "Skill11_BreakDamagePercentage",
                    0.4
                  ]
                },
                "dmgFormula": "Break DMG Scaling",
                "dmgFormulaFinal": "Pure (No DMG%)",
                "Toughness": null,
                "Tags": null,
                "attackType": "Break DMG"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageBreak": {
                  "operator": "Constants[0] (0.2) || Constants[1] (2) || MUL || Variables[0] (_maxStance) || Constants[2] (30) || DIV || Constants[1] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (Skill11_BreakDamagePercentage) || MUL || Variables[2] (0.7) || MUL || RETURN",
                  "displayLines": "(((((0.2 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage) * 0.7)",
                  "constants": [
                    0.2,
                    2,
                    30,
                    4
                  ],
                  "variables": [
                    "_maxStance",
                    "Skill11_BreakDamagePercentage",
                    0.7
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "DamageBreak": {
              "operator": "Constants[0] (0.2) || Constants[1] (2) || MUL || Variables[0] (_maxStance) || Constants[2] (30) || DIV || Constants[1] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (Skill11_BreakDamagePercentage) || MUL || RETURN",
              "displayLines": "((((0.2 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage)",
              "constants": [
                0.2,
                2,
                30,
                4
              ],
              "variables": [
                "_maxStance",
                "Skill11_BreakDamagePercentage"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
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
                "DamageType": "Physical",
                "DamageBreak": {
                  "operator": "Constants[0] (0.2) || Constants[1] (2) || MUL || Variables[0] (_maxStance) || Constants[2] (30) || DIV || Constants[1] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (Skill11_BreakDamagePercentage) || MUL || Variables[2] (0.4) || MUL || RETURN",
                  "displayLines": "(((((0.2 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage) * 0.4)",
                  "constants": [
                    0.2,
                    2,
                    30,
                    4
                  ],
                  "variables": [
                    "_maxStance",
                    "Skill11_BreakDamagePercentage",
                    0.4
                  ]
                },
                "dmgFormula": "Break DMG Scaling",
                "dmgFormulaFinal": "Pure (No DMG%)",
                "Toughness": null,
                "Tags": null,
                "attackType": "Break DMG"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageBreak": {
                  "operator": "Constants[0] (0.2) || Constants[1] (2) || MUL || Variables[0] (_maxStance) || Constants[2] (30) || DIV || Constants[1] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (Skill11_BreakDamagePercentage) || MUL || Variables[2] (0.7) || MUL || RETURN",
                  "displayLines": "(((((0.2 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage) * 0.7)",
                  "constants": [
                    0.2,
                    2,
                    30,
                    4
                  ],
                  "variables": [
                    "_maxStance",
                    "Skill11_BreakDamagePercentage",
                    0.7
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "DamageBreak": {
              "operator": "Constants[0] (0.6) || Constants[1] (2) || MUL || Variables[0] (_maxStance) || Constants[2] (30) || DIV || Constants[1] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (Skill11_BreakDamagePercentage) || MUL || RETURN",
              "displayLines": "((((0.6 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage)",
              "constants": [
                0.6,
                2,
                30,
                4
              ],
              "variables": [
                "_maxStance",
                "Skill11_BreakDamagePercentage"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
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
                "DamageType": "Physical",
                "DamageBreak": {
                  "operator": "Constants[0] (0.6) || Constants[1] (2) || MUL || Variables[0] (_maxStance) || Constants[2] (30) || DIV || Constants[1] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (Skill11_BreakDamagePercentage) || MUL || Variables[2] (0.4) || MUL || RETURN",
                  "displayLines": "(((((0.6 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage) * 0.4)",
                  "constants": [
                    0.6,
                    2,
                    30,
                    4
                  ],
                  "variables": [
                    "_maxStance",
                    "Skill11_BreakDamagePercentage",
                    0.4
                  ]
                },
                "dmgFormula": "Break DMG Scaling",
                "dmgFormulaFinal": "Pure (No DMG%)",
                "Toughness": null,
                "Tags": null,
                "attackType": "Break DMG"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageBreak": {
                  "operator": "Constants[0] (0.6) || Constants[1] (2) || MUL || Variables[0] (_maxStance) || Constants[2] (30) || DIV || Constants[1] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (Skill11_BreakDamagePercentage) || MUL || Variables[2] (0.7) || MUL || RETURN",
                  "displayLines": "(((((0.6 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage) * 0.7)",
                  "constants": [
                    0.6,
                    2,
                    30,
                    4
                  ],
                  "variables": [
                    "_maxStance",
                    "Skill11_BreakDamagePercentage",
                    0.7
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
        "Trigger: Attack End"
      ],
      "failed": [
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "Skill11_Bonus_Check",
          "value": -1
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "M_Boothill_Ability11_StancePreview"
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "One_Shot",
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (2.2) || RETURN",
              "displayLines": "2.2",
              "constants": [],
              "variables": [
                2.2
              ]
            },
            "HitSplit": {
              "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
              "displayLines": "(1 / 6)",
              "constants": [
                1,
                6
              ],
              "variables": []
            },
            "Toughness": {
              "operator": "Constants[0] (1) || Variables[0] (CurEnhance) || Variables[1] (0.5) || MUL || ADD || Variables[2] (ST Toughness Value) || MUL || RETURN",
              "displayLines": "((1 + (CurEnhance * 0.5)) * ST Toughness Value)",
              "constants": [
                1
              ],
              "variables": [
                "CurEnhance",
                0.5,
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "One_Shot_Final",
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (2.2) || RETURN",
              "displayLines": "2.2",
              "constants": [],
              "variables": [
                2.2
              ]
            },
            "HitSplit": {
              "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
              "displayLines": "(1 / 6)",
              "constants": [
                1,
                6
              ],
              "variables": []
            },
            "Toughness": {
              "operator": "Constants[0] (1) || Variables[0] (CurEnhance) || Variables[1] (0.5) || MUL || ADD || Variables[2] (ST Toughness Value) || MUL || RETURN",
              "displayLines": "((1 + (CurEnhance * 0.5)) * ST Toughness Value)",
              "constants": [
                1
              ],
              "variables": [
                "CurEnhance",
                0.5,
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Boothill_Ability11_StancePreview",
      "stackData": [],
      "latentQueue": [
        "_enhance_before_attack",
        "Skill11_Bonus_Check"
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Basic ATK",
        "conditions": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Boothill_DuelState[<span class=\"descriptionNumberColor\">Standoff</span>]"
        },
        "multiplier": {
          "operator": "Constants[0] (1) || Variables[0] (CurEnhance) || Variables[1] (0.5) || MUL || ADD || RETURN",
          "displayLines": "(1 + (CurEnhance * 0.5))",
          "constants": [
            1
          ],
          "variables": [
            "CurEnhance",
            0.5
          ]
        }
      }
    }
  ]
}