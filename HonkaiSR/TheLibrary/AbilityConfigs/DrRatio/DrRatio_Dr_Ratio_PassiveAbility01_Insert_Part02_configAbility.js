const configAbility = {
  "fileName": "DrRatio_Dr_Ratio_PassiveAbility01_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_Dr_Ratio_00_EnergyBar_Flag",
        "compareType": ">=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Dr_Ratio_00_EnergyBar",
          "value": {
            "operator": "Variables[0] (_Dr_Ratio_00_EnergyBar) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(_Dr_Ratio_00_EnergyBar - 1)",
            "constants": [
              1
            ],
            "variables": [
              "_Dr_Ratio_00_EnergyBar"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Dr_Ratio_00_EnergyBar",
            "compareType": "<=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Dr_Ratio_00_EnergyBar",
              "value": 0
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Dr_Ratio_00_EnergyBar",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (_Dr_Ratio_00_EnergyBar) || RETURN",
                "displayLines": "_Dr_Ratio_00_EnergyBar",
                "constants": [],
                "variables": [
                  "_Dr_Ratio_00_EnergyBar"
                ]
              },
              "priorState": "Active"
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "Dr_Ratio_Ability03_TheFool[<span class=\"descriptionNumberColor\">Wiseman's Folly</span>]"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (_Dr_Ratio_00_EnergyBar) || RETURN",
                "displayLines": "_Dr_Ratio_00_EnergyBar",
                "constants": [],
                "variables": [
                  "_Dr_Ratio_00_EnergyBar"
                ]
              },
              "priorState": "Normal"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Dr_Ratio_00_EnergyBar_Flag",
          "value": 0
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Dr_Ratio_Eidolon6_AllDamageTypeAddedRatio",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Dr_RatioAttack",
      "value": 0
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "modifier": "Dr_Ratio_Insert_Flag"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Dr_Ratio_Insert_Flag_Caster"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Define Custom Variable with Status Counter",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "_DebuffCount"
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
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (15) || RETURN",
            "displayLines": "15",
            "constants": [],
            "variables": [
              15
            ]
          },
          "isFixed": "* ERR"
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (2.7) || RETURN",
          "displayLines": "2.7",
          "constants": [],
          "variables": [
            2.7
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
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_DebuffCount",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (4) || RETURN",
              "displayLines": "4",
              "constants": [],
              "variables": [
                4
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_DebuffCount",
              "value": {
                "operator": "Variables[0] (4) || RETURN",
                "displayLines": "4",
                "constants": [],
                "variables": [
                  4
                ]
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (_DebuffCount) || RETURN",
            "displayLines": "_DebuffCount",
            "constants": [],
            "variables": [
              "_DebuffCount"
            ]
          },
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "variableName": "_DebuffCount",
      "value": 0
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Dr_Ratio_InsertAbility"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Dr_Ratio_Eidolon6_AllDamageTypeAddedRatio"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "OnInsertAbort_Flg",
      "value": 1
    }
  ],
  "references": []
}