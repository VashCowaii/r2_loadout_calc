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
          "value": {
            "displayLines": "(_Dr_Ratio_00_EnergyBar - 1)"
          },
          "variableName": "_Dr_Ratio_00_EnergyBar"
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
              "value": 0,
              "variableName": "_Dr_Ratio_00_EnergyBar"
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
                "displayLines": "_Dr_Ratio_00_EnergyBar"
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
              "modifier": "<a class=\"gModGreen\" id=\"1000967262\">Dr_Ratio_Ability03_TheFool</a>[<span class=\"descriptionNumberColor\">Wiseman's Folly</span>]"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "_Dr_Ratio_00_EnergyBar"
              },
              "priorState": "Normal"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "_Dr_Ratio_00_EnergyBar_Flag"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1351658038\">Dr_Ratio_Eidolon6_AllDamageTypeAddedRatio</a>",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.5"
            }
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_Dr_RatioAttack"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-253275642\">Dr_Ratio_Insert_Flag</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1963870595\">Dr_Ratio_Insert_Flag_Caster</a>"
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
            "displayLines": "15"
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
          "displayLines": "2.7"
        },
        "Toughness": {
          "displayLines": "ST Toughness Value"
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
              "displayLines": "4"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "4"
              },
              "variableName": "_DebuffCount"
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "_DebuffCount"
          },
          "execute": [
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
                  "displayLines": "0.2"
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
      "value": 0,
      "variableName": "_DebuffCount"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1051620439\">Dr_Ratio_InsertAbility</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1351658038\">Dr_Ratio_Eidolon6_AllDamageTypeAddedRatio</a>"
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "OnInsertAbort_Flg"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}