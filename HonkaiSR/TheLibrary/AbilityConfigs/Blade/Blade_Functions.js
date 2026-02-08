const configAbility = {
  "fileName": "Blade_Functions",
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1574082321\">Ren_CheckHPChange</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CasterMaxHP",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "CasterLostHPPercentage",
              "value": {
                "operator": "Variables[0] (CasterLostHP) || Variables[1] (CasterMaxHP) || DIV || RETURN",
                "displayLines": "(CasterLostHP / CasterMaxHP)",
                "constants": [],
                "variables": [
                  "CasterLostHP",
                  "CasterMaxHP"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CasterLostHPPercentage",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
              ]
            },
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "CasterFinalLostHP",
              "value": {
                "operator": "Variables[0] (CasterMaxHP) || Variables[1] (0.9) || MUL || RETURN",
                "displayLines": "(CasterMaxHP * 0.9)",
                "constants": [],
                "variables": [
                  "CasterMaxHP",
                  0.9
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "CasterFinalLostHP",
              "value": {
                "operator": "Variables[0] (CasterLostHP) || RETURN",
                "displayLines": "CasterLostHP",
                "constants": [],
                "variables": [
                  "CasterLostHP"
                ]
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-936894999\">Advanced_Ren_Ability03_Listen</a>[<span class=\"descriptionNumberColor\">Death Sentence</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (CasterFinalLostHP) || RETURN",
              "displayLines": "CasterFinalLostHP",
              "constants": [],
              "variables": [
                "CasterFinalLostHP"
              ]
            }
          }
        }
      ]
    }
  ],
  "references": []
}