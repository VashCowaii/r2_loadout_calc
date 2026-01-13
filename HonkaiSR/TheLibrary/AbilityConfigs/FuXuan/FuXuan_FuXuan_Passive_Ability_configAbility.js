const configAbility = {
  "fileName": "FuXuan_FuXuan_Passive_Ability",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": "Caster",
        "value1": "CurrentHP%",
        "compareType": ">",
        "value2": 0.5
      },
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "GDF_ExChangeHPCount",
          "value": {
            "operator": "Variables[0] (GDF_ExChangeHPCount) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(GDF_ExChangeHPCount - 1)",
            "constants": [
              1
            ],
            "variables": [
              "GDF_ExChangeHPCount"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "GDF_LimboHPChangeFlag",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "GDF_ExChangeHPCount",
            "compareType": "<=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (GDF_ExChangeHPCount) || RETURN",
                "displayLines": "GDF_ExChangeHPCount",
                "constants": [],
                "variables": [
                  "GDF_ExChangeHPCount"
                ]
              },
              "maximum": 2,
              "assignState": "True",
              "priorState": "Disable",
              "bar#": 3
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (GDF_ExChangeHPCount) || RETURN",
                "displayLines": "GDF_ExChangeHPCount",
                "constants": [],
                "variables": [
                  "GDF_ExChangeHPCount"
                ]
              },
              "maximum": 2,
              "assignState": "True",
              "priorState": "Active",
              "bar#": 3
            }
          ]
        },
        {
          "name": "UI Display Event",
          "popUpText": "Bleak Breeds Bliss"
        },
        "Deleted bullshit",
        {
          "name": "Heal",
          "target": "Caster",
          "healPercent": {
            "operator": "Variables[0] (0.9) || RETURN",
            "displayLines": "0.9",
            "constants": [],
            "variables": [
              0.9
            ]
          },
          "formula": "Heal from Target's MissingHP"
        }
      ]
    }
  ],
  "references": []
}