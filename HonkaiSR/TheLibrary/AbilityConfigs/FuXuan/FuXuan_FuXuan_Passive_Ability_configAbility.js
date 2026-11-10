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
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value1": "CurrentHP%",
        "compareType": ">",
        "value2": 0.5
      },
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(GDF_ExChangeHPCount - 1)"
          },
          "variableName": "GDF_ExChangeHPCount"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "GDF_LimboHPChangeFlag"
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
                "displayLines": "GDF_ExChangeHPCount"
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
                "displayLines": "GDF_ExChangeHPCount"
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
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "healPercent": {
            "displayLines": "0.9"
          },
          "formula": "Heal from Target's MissingHP"
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}