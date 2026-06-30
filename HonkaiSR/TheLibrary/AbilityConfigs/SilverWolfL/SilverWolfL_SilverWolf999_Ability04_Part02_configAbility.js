const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "True Ending Unlocked"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Elation_Skill_Punchline_Value",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (40) || RETURN",
              "displayLines": "40",
              "constants": [],
              "variables": [
                40
              ]
            }
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
              "variables": {
                "parameter[0]_AddValue": {
                  "operator": "Variables[0] (15) || Variables[1] (20) || ADD || Variables[2] (20) || ADD || RETURN",
                  "displayLines": "((15 + 20) + 20)",
                  "constants": [],
                  "variables": [
                    15,
                    20,
                    20
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Elation_Skill_Punchline_Value",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (20) || RETURN",
                  "displayLines": "20",
                  "constants": [],
                  "variables": [
                    20
                  ]
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
                  "variables": {
                    "parameter[0]_AddValue": {
                      "operator": "Variables[0] (15) || Variables[1] (20) || ADD || RETURN",
                      "displayLines": "(15 + 20)",
                      "constants": [],
                      "variables": [
                        15,
                        20
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
                  "variables": {
                    "parameter[0]_AddValue": {
                      "operator": "Variables[0] (15) || RETURN",
                      "displayLines": "15",
                      "constants": [],
                      "variables": [
                        15
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
          "variables": {
            "parameter[0]_AddValue": {
              "operator": "Variables[0] (15) || RETURN",
              "displayLines": "15",
              "constants": [],
              "variables": [
                15
              ]
            }
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}