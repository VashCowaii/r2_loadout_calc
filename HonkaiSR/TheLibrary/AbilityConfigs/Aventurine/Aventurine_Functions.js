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
      "functionName": "Aventurine_RecordCurrentShield",
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
                "modifier": "Aventurine_StackableShield"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "tmp_currentshield"
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
                  "modifierName": "Aventurine_StackableShield",
                  "multiplier": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AventurineShieldValue",
                  "value": {
                    "operator": "Variables[0] (tmp_currentshield) || RETURN",
                    "displayLines": "tmp_currentshield",
                    "constants": [],
                    "variables": [
                      "tmp_currentshield"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AventurineShieldValue",
                  "value": {
                    "operator": "Constants[0] (0) || RETURN",
                    "displayLines": "0",
                    "constants": [
                      0
                    ],
                    "variables": []
                  }
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