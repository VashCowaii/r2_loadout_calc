const configAbility = {
  "fileName": "Boothill_Boothill_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "CurEnhance"
      },
      "variableName": "_enhance_before_attack"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Skill11_Bonus_Check"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1166126384\">One_Shot</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1166126384\">One_Shot</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1166126384\">One_Shot</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1166126384\">One_Shot</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1166126384\">One_Shot</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-824172561\">One_Shot_Final</a>"
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
          "value": 1,
          "variableName": "Skill11_Bonus_Check"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_maxStance",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "warningType": "MaxToughness",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(_maxStance, (30 * 16))"
          },
          "variableName": "_maxStance"
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
              "value": {
                "displayLines": "1.7"
              },
              "variableName": "Skill11_BreakDamagePercentage"
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
                  "value": {
                    "displayLines": "1.2"
                  },
                  "variableName": "Skill11_BreakDamagePercentage"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "0.7"
                  },
                  "variableName": "Skill11_BreakDamagePercentage"
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
              "displayLines": "((((0.2 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage)"
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
                  "displayLines": "(((((0.2 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage) * 0.4)"
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
                  "displayLines": "(((((0.2 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage) * 0.7)"
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
              "displayLines": "((((0.2 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage)"
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
                  "displayLines": "(((((0.2 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage) * 0.4)"
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
                  "displayLines": "(((((0.2 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage) * 0.7)"
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
              "displayLines": "((((0.6 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage)"
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
                  "displayLines": "(((((0.6 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage) * 0.4)"
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
                  "displayLines": "(((((0.6 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage) * 0.7)"
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
          "value": -1,
          "variableName": "Skill11_Bonus_Check"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1599304772\">M_Boothill_Ability11_StancePreview</a>"
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1166126384\">One_Shot</a>",
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
              "displayLines": "2.2"
            },
            "HitSplit": {
              "displayLines": "(1 / 6)"
            },
            "Toughness": {
              "displayLines": "((1 + (CurEnhance * 0.5)) * ST Toughness Value)"
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-824172561\">One_Shot_Final</a>",
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
              "displayLines": "2.2"
            },
            "HitSplit": {
              "displayLines": "(1 / 6)"
            },
            "Toughness": {
              "displayLines": "((1 + (CurEnhance * 0.5)) * ST Toughness Value)"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1599304772\">M_Boothill_Ability11_StancePreview</a>",
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
          "modifier": "<a class=\"gModGreen\" id=\"1542670262\">Boothill_DuelState</a>[<span class=\"descriptionNumberColor\">Standoff</span>]"
        },
        "multiplier": {
          "displayLines": "(1 + (CurEnhance * 0.5))"
        }
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}