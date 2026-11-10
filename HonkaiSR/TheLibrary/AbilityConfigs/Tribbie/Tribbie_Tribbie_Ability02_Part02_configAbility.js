const configAbility = {
  "fileName": "Tribbie_Tribbie_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(Left to Right)}}"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_EffectRandom",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_EffectRandom",
            "compareType": "=",
            "value2": 2
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_EffectRandom",
            "compareType": "=",
            "value2": 3
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_EffectRandom",
            "compareType": "=",
            "value2": 4
          }
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(MDF_EffectRandom + 1)"
          },
          "variableName": "MDF_EffectRandom"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_EffectRandom",
            "compareType": ">",
            "value2": 4
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_EffectRandom - 4)"
              },
              "variableName": "MDF_EffectRandom"
            }
          ]
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1664293665\">Tribbie_SKL02_Bonus</a>[<span class=\"descriptionNumberColor\">Numinosity</span>]",
      "duration": {
        "displayLines": "3"
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "0.24"
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "3"
      },
      "variableName": "Energy_Layer"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "displayLines": "Energy_Layer"
      },
      "priorState": "Active"
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End",
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "MDF_EffectRandom"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}