const configAbility = {
  "fileName": "Saber_Saber_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "S02_Point",
      "value": {
        "operator": "Variables[0] (DV_SurgePoint) || RETURN",
        "displayLines": "DV_SurgePoint",
        "constants": [],
        "variables": [
          "DV_SurgePoint"
        ]
      }
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": "Caster",
      "variableName": "S02_SP_R",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRateSUM</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": "Caster",
      "variableName": "S02_MSP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": "Caster",
      "variableName": "S02_CSP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "S02_MSP",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] (S02_CSP) || Variables[1] (8) || Variables[2] (S02_Point) || MUL || ADD || Constants[0] (30) || Variables[3] (S02_SP_R) || MUL || ADD || RETURN",
              "displayLines": "((S02_CSP + (8 * S02_Point)) + (30 * S02_SP_R))",
              "constants": [
                30
              ],
              "variables": [
                "S02_CSP",
                8,
                "S02_Point",
                "S02_SP_R"
              ]
            }
          },
          {
            "name": "Compare: Variable",
            "value1": "DV_SurgePoint",
            "compareType": "<=",
            "value2": 0
          }
        ]
      },
      "passed": [
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "DV_SurgePoint",
          "on": "Caster",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Crown of the Star"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Saber_Trace03_Bonus_02[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
              "stackLimit": {
                "operator": "Variables[0] (8) || RETURN",
                "displayLines": "8",
                "constants": [],
                "variables": [
                  8
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.04) || RETURN",
                  "displayLines": "0.04",
                  "constants": [],
                  "variables": [
                    0.04
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
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
              "to": "Caster",
              "modifier": "Saber_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
              "stackLimit": {
                "operator": "Variables[0] (15) || RETURN",
                "displayLines": "15",
                "constants": [],
                "variables": [
                  15
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.01) || RETURN",
                  "displayLines": "0.01",
                  "constants": [],
                  "variables": [
                    0.01
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_SurgePoint",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] (DV_SurgePointMax) || RETURN",
              "displayLines": "DV_SurgePointMax",
              "constants": [],
              "variables": [
                "DV_SurgePointMax"
              ]
            }
          },
          "passed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Overwrite Value",
              "variableName": "DV_SurgePoint",
              "on": "Caster",
              "value": {
                "operator": "Variables[0] (DV_SurgePointMax) || RETURN",
                "displayLines": "DV_SurgePointMax",
                "constants": [],
                "variables": [
                  "DV_SurgePointMax"
                ]
              }
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (DV_SurgePoint) || RETURN",
            "displayLines": "DV_SurgePoint",
            "constants": [],
            "variables": [
              "DV_SurgePoint"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DV_SurgePointUse",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DV_ExtraDmgRatio",
          "value": 0
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_SurgePointUse",
          "value": {
            "operator": "Variables[0] (DV_SurgePoint) || RETURN",
            "displayLines": "DV_SurgePoint",
            "constants": [],
            "variables": [
              "DV_SurgePoint"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_ExtraDmgRatio",
              "value": {
                "operator": "Variables[0] (DV_SurgePointUse) || Variables[1] (0.07) || Variables[2] (0.14) || ADD || MUL || RETURN",
                "displayLines": "(DV_SurgePointUse * (0.07 + 0.14))",
                "constants": [],
                "variables": [
                  "DV_SurgePointUse",
                  0.07,
                  0.14
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_ExtraDmgRatio",
              "value": {
                "operator": "Variables[0] (DV_SurgePointUse) || Variables[1] (0.14) || MUL || RETURN",
                "displayLines": "(DV_SurgePointUse * 0.14)",
                "constants": [],
                "variables": [
                  "DV_SurgePointUse",
                  0.14
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Constants[0] (0.1) || Variables[0] (1.5) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
          "displayLines": "(0.1 * (1.5 + DV_ExtraDmgRatio))",
          "constants": [
            0.1
          ],
          "variables": [
            1.5,
            "DV_ExtraDmgRatio"
          ]
        },
        "Toughness": {
          "operator": "Constants[0] (0.1) || Variables[0] (ST Toughness Value) || MUL || RETURN",
          "displayLines": "(0.1 * ST Toughness Value)",
          "constants": [
            0.1
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": [
          "Skill"
        ],
        "EnergyGainPercent": "10%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Blast (Adjacent)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Constants[0] (0.1) || Variables[0] (0.75) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
          "displayLines": "(0.1 * (0.75 + DV_ExtraDmgRatio))",
          "constants": [
            0.1
          ],
          "variables": [
            0.75,
            "DV_ExtraDmgRatio"
          ]
        },
        "Toughness": {
          "operator": "Constants[0] (0.1) || Variables[0] (Blast Toughness Value) || MUL || RETURN",
          "displayLines": "(0.1 * Blast Toughness Value)",
          "constants": [
            0.1
          ],
          "variables": [
            "Blast Toughness Value"
          ]
        },
        "Tags": [
          "Skill"
        ]
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Constants[0] (0.1) || Variables[0] (1.5) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
          "displayLines": "(0.1 * (1.5 + DV_ExtraDmgRatio))",
          "constants": [
            0.1
          ],
          "variables": [
            1.5,
            "DV_ExtraDmgRatio"
          ]
        },
        "Toughness": {
          "operator": "Constants[0] (0.1) || Variables[0] (ST Toughness Value) || MUL || RETURN",
          "displayLines": "(0.1 * ST Toughness Value)",
          "constants": [
            0.1
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": [
          "Skill"
        ],
        "EnergyGainPercent": "10%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Blast (Adjacent)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Constants[0] (0.1) || Variables[0] (0.75) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
          "displayLines": "(0.1 * (0.75 + DV_ExtraDmgRatio))",
          "constants": [
            0.1
          ],
          "variables": [
            0.75,
            "DV_ExtraDmgRatio"
          ]
        },
        "Toughness": {
          "operator": "Constants[0] (0.1) || Variables[0] (Blast Toughness Value) || MUL || RETURN",
          "displayLines": "(0.1 * Blast Toughness Value)",
          "constants": [
            0.1
          ],
          "variables": [
            "Blast Toughness Value"
          ]
        },
        "Tags": [
          "Skill"
        ]
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Constants[0] (0.1) || Variables[0] (1.5) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
          "displayLines": "(0.1 * (1.5 + DV_ExtraDmgRatio))",
          "constants": [
            0.1
          ],
          "variables": [
            1.5,
            "DV_ExtraDmgRatio"
          ]
        },
        "Toughness": {
          "operator": "Constants[0] (0.1) || Variables[0] (ST Toughness Value) || MUL || RETURN",
          "displayLines": "(0.1 * ST Toughness Value)",
          "constants": [
            0.1
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": [
          "Skill"
        ],
        "EnergyGainPercent": "10%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Blast (Adjacent)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Constants[0] (0.1) || Variables[0] (0.75) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
          "displayLines": "(0.1 * (0.75 + DV_ExtraDmgRatio))",
          "constants": [
            0.1
          ],
          "variables": [
            0.75,
            "DV_ExtraDmgRatio"
          ]
        },
        "Toughness": {
          "operator": "Constants[0] (0.1) || Variables[0] (Blast Toughness Value) || MUL || RETURN",
          "displayLines": "(0.1 * Blast Toughness Value)",
          "constants": [
            0.1
          ],
          "variables": [
            "Blast Toughness Value"
          ]
        },
        "Tags": [
          "Skill"
        ]
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Constants[0] (0.7) || Variables[0] (1.5) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
          "displayLines": "(0.7 * (1.5 + DV_ExtraDmgRatio))",
          "constants": [
            0.7
          ],
          "variables": [
            1.5,
            "DV_ExtraDmgRatio"
          ]
        },
        "Toughness": {
          "operator": "Constants[0] (0.7) || Variables[0] (ST Toughness Value) || MUL || RETURN",
          "displayLines": "(0.7 * ST Toughness Value)",
          "constants": [
            0.7
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": [
          "Skill"
        ],
        "EnergyGainPercent": "70%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Blast (Adjacent)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Constants[0] (0.7) || Variables[0] (0.75) || Variables[1] (DV_ExtraDmgRatio) || ADD || MUL || RETURN",
          "displayLines": "(0.7 * (0.75 + DV_ExtraDmgRatio))",
          "constants": [
            0.7
          ],
          "variables": [
            0.75,
            "DV_ExtraDmgRatio"
          ]
        },
        "Toughness": {
          "operator": "Constants[0] (0.7) || Variables[0] (Blast Toughness Value) || MUL || RETURN",
          "displayLines": "(0.7 * Blast Toughness Value)",
          "constants": [
            0.7
          ],
          "variables": [
            "Blast Toughness Value"
          ]
        },
        "Tags": [
          "Skill"
        ]
      }
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "variableName": "Check_Surge_Use_Before",
      "value": {
        "operator": "Variables[0] (DV_SurgePoint) || RETURN",
        "displayLines": "DV_SurgePoint",
        "constants": [],
        "variables": [
          "DV_SurgePoint"
        ]
      }
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "DV_SurgePoint",
      "on": "Caster",
      "value": {
        "operator": "Constants[0] (0) || Variables[0] (DV_SurgePointUse) || SUB || RETURN",
        "displayLines": "(0 - DV_SurgePointUse)",
        "constants": [
          0
        ],
        "variables": [
          "DV_SurgePointUse"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "DV_SurgePointUse",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Update Energy",
          "on": "Caster",
          "value": {
            "operator": "Variables[0] (8) || Variables[1] (Check_Surge_Use_Before) || Variables[2] (DV_SurgePoint) || SUB || MUL || RETURN",
            "displayLines": "(8 * (Check_Surge_Use_Before - DV_SurgePoint))",
            "constants": [],
            "variables": [
              8,
              "Check_Surge_Use_Before",
              "DV_SurgePoint"
            ]
          },
          "isFixed": "(Fixed)"
        }
      ]
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (DV_SurgePoint) || RETURN",
        "displayLines": "DV_SurgePoint",
        "constants": [],
        "variables": [
          "DV_SurgePoint"
        ]
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}