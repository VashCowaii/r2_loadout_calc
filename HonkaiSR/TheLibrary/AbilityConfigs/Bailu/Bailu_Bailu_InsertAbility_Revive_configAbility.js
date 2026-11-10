const configAbility = {
  "fileName": "Bailu_Bailu_InsertAbility_Revive",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "value1": "CurrentHP",
        "compareType": "<=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Modifier Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"339980930\">Bailu_ReviveEvent</a>",
          "function": "Add"
        },
        "Deleted bullshit",
        {
          "name": "UI Display Event",
          "popUpText": "Gourdful of Elixir"
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "silent": true
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "healPercent": {
            "displayLines": "0.18"
          },
          "healFlat": {
            "displayLines": "480"
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"339980930\">Bailu_ReviveEvent</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "variableName": "MDF_ReviveTime2",
              "modifierName": "<a class=\"gModGreen\" id=\"339980930\">Bailu_ReviveEvent</a>",
              "multiplier": {
                "displayLines": "1"
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "MDF_ReviveTime2"
              },
              "maximum": {
                "displayLines": "MDF_ReviveTime"
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 3
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "0"
              },
              "variableName": "MDF_ReviveTime2"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "MDF_ReviveTime2"
              },
              "maximum": {
                "displayLines": "MDF_ReviveTime"
              },
              "assignState": "True",
              "priorState": "Disable",
              "bar#": 3
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1496935031\">Bailu_Revive_Mark</a>"
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}