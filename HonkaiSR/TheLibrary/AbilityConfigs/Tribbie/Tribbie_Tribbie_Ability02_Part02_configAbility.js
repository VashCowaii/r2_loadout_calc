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
          "variableName": "MDF_EffectRandom",
          "value": {
            "operator": "Variables[0] (MDF_EffectRandom) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(MDF_EffectRandom + 1)",
            "constants": [
              1
            ],
            "variables": [
              "MDF_EffectRandom"
            ]
          }
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
              "variableName": "MDF_EffectRandom",
              "value": {
                "operator": "Variables[0] (MDF_EffectRandom) || Constants[0] (4) || SUB || RETURN",
                "displayLines": "(MDF_EffectRandom - 4)",
                "constants": [
                  4
                ],
                "variables": [
                  "MDF_EffectRandom"
                ]
              }
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
      "modifier": "Tribbie_SKL02_Bonus[<span class=\"descriptionNumberColor\">Numinosity</span>]",
      "duration": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.24) || RETURN",
          "displayLines": "0.24",
          "constants": [],
          "variables": [
            0.24
          ]
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Energy_Layer",
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
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (Energy_Layer) || RETURN",
        "displayLines": "Energy_Layer",
        "constants": [],
        "variables": [
          "Energy_Layer"
        ]
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
      "variableName": "MDF_EffectRandom",
      "value": 1
    }
  ],
  "references": []
}