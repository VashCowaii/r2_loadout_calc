const configAbility = {
  "fileName": "Aventurine_Functions",
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-969049614\">Aventurine_RecordCurrentShield</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "tmp_currentshield",
                  "scope": "ContextTaskTemplate"
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "valueType": "CurrentShield",
                  "variableName": "tmp_currentshield",
                  "modifierName": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>",
                  "multiplier": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "AventurineShieldValue",
                  "resetValue": {
                    "displayLines": "tmp_currentshield"
                  },
                  "scope": "TargetEntity"
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "AventurineShieldValue",
                  "resetValue": {
                    "displayLines": "0"
                  },
                  "scope": "TargetEntity"
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