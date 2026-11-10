const configAbility = {
  "fileName": "Saber_Saber_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "DV_SurgePoint"
      },
      "variableName": "S02_Point"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "S02_SP_R",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRateSUM</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "S02_MSP",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "S02_CSP",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
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
              "displayLines": "((S02_CSP + (8 * S02_Point)) + (30 * S02_SP_R))"
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
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "displayLines": "3"
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
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1328926688\">Saber_Trace03_Bonus_02</a>[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
              "stackLimit": {
                "displayLines": "8"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.04"
                }
              },
              "addStacksPerTrigger": {
                "displayLines": "3"
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
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1058966793\">Saber_Eidolon2_Bonus</a>[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
              "stackLimit": {
                "displayLines": "15"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.01"
                }
              },
              "addStacksPerTrigger": {
                "displayLines": "3"
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
              "displayLines": "DV_SurgePointMax"
            }
          },
          "passed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Overwrite Value",
              "variableName": "DV_SurgePoint",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "displayLines": "DV_SurgePointMax"
              }
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "DV_SurgePoint"
          }
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "DV_SurgePointUse"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "DV_ExtraDmgRatio"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "DV_SurgePoint"
          },
          "variableName": "DV_SurgePointUse"
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
              "value": {
                "displayLines": "(DV_SurgePointUse * (0.07 + 0.14))"
              },
              "variableName": "DV_ExtraDmgRatio"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(DV_SurgePointUse * 0.14)"
              },
              "variableName": "DV_ExtraDmgRatio"
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
        "DamageType": "Wind",
        "Damage": {
          "displayLines": "(0.1 * (1.5 + DV_ExtraDmgRatio))"
        },
        "Toughness": {
          "displayLines": "(0.1 * ST Toughness Value)"
        },
        "Tags": [
          "Skill (Saber)"
        ],
        "EnergyGainPercent": "10%"
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
        "DamageType": "Wind",
        "Damage": {
          "displayLines": "(0.1 * (0.75 + DV_ExtraDmgRatio))"
        },
        "Toughness": {
          "displayLines": "(0.1 * Blast Toughness Value)"
        },
        "Tags": [
          "Skill (Saber)"
        ]
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
          "displayLines": "(0.1 * (1.5 + DV_ExtraDmgRatio))"
        },
        "Toughness": {
          "displayLines": "(0.1 * ST Toughness Value)"
        },
        "Tags": [
          "Skill (Saber)"
        ],
        "EnergyGainPercent": "10%"
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
        "DamageType": "Wind",
        "Damage": {
          "displayLines": "(0.1 * (0.75 + DV_ExtraDmgRatio))"
        },
        "Toughness": {
          "displayLines": "(0.1 * Blast Toughness Value)"
        },
        "Tags": [
          "Skill (Saber)"
        ]
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
          "displayLines": "(0.1 * (1.5 + DV_ExtraDmgRatio))"
        },
        "Toughness": {
          "displayLines": "(0.1 * ST Toughness Value)"
        },
        "Tags": [
          "Skill (Saber)"
        ],
        "EnergyGainPercent": "10%"
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
        "DamageType": "Wind",
        "Damage": {
          "displayLines": "(0.1 * (0.75 + DV_ExtraDmgRatio))"
        },
        "Toughness": {
          "displayLines": "(0.1 * Blast Toughness Value)"
        },
        "Tags": [
          "Skill (Saber)"
        ]
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
          "displayLines": "(0.7 * (1.5 + DV_ExtraDmgRatio))"
        },
        "Toughness": {
          "displayLines": "(0.7 * ST Toughness Value)"
        },
        "Tags": [
          "Skill (Saber)"
        ],
        "EnergyGainPercent": "70%"
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
        "DamageType": "Wind",
        "Damage": {
          "displayLines": "(0.7 * (0.75 + DV_ExtraDmgRatio))"
        },
        "Toughness": {
          "displayLines": "(0.7 * Blast Toughness Value)"
        },
        "Tags": [
          "Skill (Saber)"
        ]
      }
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "DV_SurgePoint"
      },
      "variableName": "Check_Surge_Use_Before"
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "DV_SurgePoint",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": {
        "displayLines": "(0 - DV_SurgePointUse)"
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
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "displayLines": "(8 * (Check_Surge_Use_Before - DV_SurgePoint))"
          },
          "isFixed": "(Fixed)"
        }
      ]
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "displayLines": "DV_SurgePoint"
      }
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}