const configAbility = {
  "fileName": "11402_Functions",
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1952576234\">Aglaea_Eidolon6_SpeedValue</a>",
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
              "modifierName": "<a class=\"gModGreen\" id=\"1330366864\">Aglaea_Eidolon6_Effect</a>[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
              "variableName": "MDF_PropertyValue2",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_13935) || RETURN",
                "displayLines": "UnusedUnderThisBase_13935",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_13935"
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
                  "modifierName": "<a class=\"gModGreen\" id=\"1330366864\">Aglaea_Eidolon6_Effect</a>[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
                  "variableName": "MDF_PropertyValue2",
                  "value": {
                    "operator": "Variables[0] (UnusedUnderThisBase_13949) || RETURN",
                    "displayLines": "UnusedUnderThisBase_13949",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_13949"
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
                      "modifierName": "<a class=\"gModGreen\" id=\"1330366864\">Aglaea_Eidolon6_Effect</a>[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
                      "variableName": "MDF_PropertyValue2",
                      "value": {
                        "operator": "Variables[0] (UnusedUnderThisBase_13933) || RETURN",
                        "displayLines": "UnusedUnderThisBase_13933",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_13933"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Modifier-Specific Variable",
                      "modifierName": "<a class=\"gModGreen\" id=\"1330366864\">Aglaea_Eidolon6_Effect</a>[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
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