const configAbility = {
  "fileName": "Aventurine_LocalPlayer_Aventurine_TechniqueUsage",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_no_ssr_times",
        "compareType": ">=",
        "value2": {
          "operator": "Variables[0] (UNKNOWN_PITY_OBJECT) || Constants[0] (1) || SUB || RETURN",
          "displayLines": "(UNKNOWN_PITY_OBJECT - 1)",
          "constants": [
            1
          ],
          "variables": [
            "UNKNOWN_PITY_OBJECT"
          ]
        },
        "contextScope": "ContextCaster"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "_random",
          "value": 100
        }
      ],
      "failed": [
        {
          "name": "Define Variable with Random Value",
          "scope": "ContextAbility",
          "integer": true,
          "variableName": "_random",
          "min": 0,
          "max": 100
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_sum_probability",
      "value": {
        "operator": "Variables[0] (UNKNOWN_ODDS_1) || Variables[1] (UNKNOWN_ODDS_2) || ADD || Variables[2] (UNKNOWN_ODDS_3) || ADD || RETURN",
        "displayLines": "((UNKNOWN_ODDS_1 + UNKNOWN_ODDS_2) + UNKNOWN_ODDS_3)",
        "constants": [],
        "variables": [
          "UNKNOWN_ODDS_1",
          "UNKNOWN_ODDS_2",
          "UNKNOWN_ODDS_3"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_random",
        "compareType": "<",
        "value2": {
          "operator": "Variables[0] (UNKNOWN_ODDS_1) || Variables[1] (_sum_probability) || DIV || Constants[0] (100) || MUL || RETURN",
          "displayLines": "((UNKNOWN_ODDS_1 / _sum_probability) * 100)",
          "constants": [
            100
          ],
          "variables": [
            "UNKNOWN_ODDS_1",
            "_sum_probability"
          ]
        },
        "contextScope": "ContextAbility"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_result",
          "value": 0
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_random",
            "compareType": ">=",
            "value2": {
              "operator": "Constants[0] (100) || Variables[0] (UNKNOWN_ODDS_3) || Variables[1] (_sum_probability) || DIV || Constants[0] (100) || MUL || SUB || RETURN",
              "displayLines": "(100 - ((UNKNOWN_ODDS_3 / _sum_probability) * 100))",
              "constants": [
                100
              ],
              "variables": [
                "UNKNOWN_ODDS_3",
                "_sum_probability"
              ]
            },
            "contextScope": "ContextAbility"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_result",
              "value": 2
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_result",
              "value": 1
            },
            {
              "name": "Define Variable with Random Value",
              "scope": "ContextAbility",
              "integer": true,
              "variableName": "_random",
              "min": 0,
              "max": 3
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_random",
                "compareType": "=",
                "value2": 0,
                "contextScope": "ContextAbility"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_random",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextAbility"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_result",
        "compareType": "=",
        "value2": 2
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "_no_ssr_times",
          "value": 0
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "_no_ssr_times",
          "value": {
            "operator": "Variables[0] (_no_ssr_times) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(_no_ssr_times + 1)",
            "constants": [
              1
            ],
            "variables": [
              "_no_ssr_times"
            ]
          }
        }
      ]
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_result",
        "compareType": "=",
        "value2": 2
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_result",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "130401(Avatar_Aventurine_00_SkillMazeInLevel_00)",
          "duration": -1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier (OVERWORLD)",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "buffID": 130402,
                "modifier": null,
                "invertCondition": true
              },
              {
                "name": "Has Modifier (OVERWORLD)",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "buffID": 130403,
                "modifier": null,
                "invertCondition": true
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "130404()",
          "duration": -1,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier (OVERWORLD)",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "buffID": 130402,
                "modifier": null
              },
              {
                "name": "Has Modifier (OVERWORLD)",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "buffID": 130403,
                "modifier": null
              }
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_result",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": null,
              "ID": "130402(Avatar_Aventurine_00_SkillMazeInLevel_01)",
              "duration": -1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier (OVERWORLD)",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "buffID": 130403,
                    "modifier": null,
                    "invertCondition": true
                  }
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": null,
              "ID": "130405()",
              "duration": -1,
              "conditions": {
                "name": "Has Modifier (OVERWORLD)",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "buffID": 130403,
                "modifier": null
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": null,
              "ID": "130403(Avatar_Aventurine_00_SkillMazeInLevel_02)",
              "duration": -1
            }
          ]
        }
      ]
    },
    "Submit Technique Use"
  ],
  "whenAdded": [
    {
      "name": "Define Custom Variable",
      "scope": "ContextCaster",
      "variableName": "_no_ssr_times",
      "value": 0
    }
  ],
  "onAbortReg": [],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}