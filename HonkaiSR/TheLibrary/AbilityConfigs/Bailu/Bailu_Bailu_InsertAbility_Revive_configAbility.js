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
        "target": "Single Target (Primary)",
        "value1": "CurrentHP",
        "compareType": "<=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Modifier Variable",
          "target": "Caster",
          "modifierName": "Bailu_ReviveEvent",
          "function": "Add"
        },
        "Deleted bullshit",
        {
          "name": "UI Display Event",
          "popUpText": "Gourdful of Elixir"
        },
        {
          "name": "Dispel Debuffs",
          "target": "Single Target (Primary)",
          "silent": true
        },
        {
          "name": "Heal",
          "target": "Single Target (Primary)",
          "healPercent": {
            "operator": "Variables[0] (0.18) || RETURN",
            "displayLines": "0.18",
            "constants": [],
            "variables": [
              0.18
            ]
          },
          "healFlat": {
            "operator": "Variables[0] (480) || RETURN",
            "displayLines": "480",
            "constants": [],
            "variables": [
              480
            ]
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "Bailu_ReviveEvent"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "variableName": "MDF_ReviveTime2",
              "modifierName": "Bailu_ReviveEvent",
              "multiplier": {
                "operator": "Constants[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [
                  1
                ],
                "variables": []
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_ReviveTime2) || RETURN",
                "displayLines": "MDF_ReviveTime2",
                "constants": [],
                "variables": [
                  "MDF_ReviveTime2"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (MDF_ReviveTime) || RETURN",
                "displayLines": "MDF_ReviveTime",
                "constants": [],
                "variables": [
                  "MDF_ReviveTime"
                ]
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 3
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_ReviveTime2",
              "value": {
                "operator": "Constants[0] (0) || RETURN",
                "displayLines": "0",
                "constants": [
                  0
                ],
                "variables": []
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_ReviveTime2) || RETURN",
                "displayLines": "MDF_ReviveTime2",
                "constants": [],
                "variables": [
                  "MDF_ReviveTime2"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (MDF_ReviveTime) || RETURN",
                "displayLines": "MDF_ReviveTime",
                "constants": [],
                "variables": [
                  "MDF_ReviveTime"
                ]
              },
              "assignState": "True",
              "priorState": "Disable",
              "bar#": 3
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Single Target (Primary)",
          "modifier": "Bailu_Revive_Mark"
        }
      ]
    }
  ],
  "references": []
}