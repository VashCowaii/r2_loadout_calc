const configAbility = {
  "fileName": "Aglaea_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 1,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "Aglaea_Eidolon6_SpeedValue",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Ability Value",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
            "compareType": ">",
            "value2": 320
          },
          "passed": [
            {
              "name": "Define Modifier-Specific Variable",
              "modifierName": "Aglaea_Eidolon6_Effect[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
              "variableName": "MDF_PropertyValue2",
              "value": {
                "operator": "Variables[0] (0.6) || RETURN",
                "displayLines": "0.6",
                "constants": [],
                "variables": [
                  0.6
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Ability Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                "compareType": ">",
                "value2": 240
              },
              "passed": [
                {
                  "name": "Define Modifier-Specific Variable",
                  "modifierName": "Aglaea_Eidolon6_Effect[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
                  "variableName": "MDF_PropertyValue2",
                  "value": {
                    "operator": "Variables[0] (0.3) || RETURN",
                    "displayLines": "0.3",
                    "constants": [],
                    "variables": [
                      0.3
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                    "compareType": ">",
                    "value2": 160
                  },
                  "passed": [
                    {
                      "name": "Define Modifier-Specific Variable",
                      "modifierName": "Aglaea_Eidolon6_Effect[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
                      "variableName": "MDF_PropertyValue2",
                      "value": {
                        "operator": "Variables[0] (0.1) || RETURN",
                        "displayLines": "0.1",
                        "constants": [],
                        "variables": [
                          0.1
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Modifier-Specific Variable",
                      "modifierName": "Aglaea_Eidolon6_Effect[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
                      "variableName": "MDF_PropertyValue2",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}