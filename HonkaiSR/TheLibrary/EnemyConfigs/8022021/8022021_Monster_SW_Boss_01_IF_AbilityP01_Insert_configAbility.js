const configAbility = {
  "fileName": "8022021_Monster_SW_Boss_01_IF_AbilityP01_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
          "valuePerStack": {
            "MDF_SummonID": {
              "operator": "Variables[0] (SummonMonsterID01) || RETURN",
              "displayLines": "SummonMonsterID01",
              "constants": [],
              "variables": [
                "SummonMonsterID01"
              ]
            },
            "MDF_SummonDelay": {
              "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
              "displayLines": "SummonDelayRatioPhase2",
              "constants": [],
              "variables": [
                "SummonDelayRatioPhase2"
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
            "value1": "Phase2FirstSummon",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Phase2FirstSummon",
              "value": 0
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
              "valuePerStack": {
                "MDF_SummonID": {
                  "operator": "Variables[0] (SummonMonsterID02) || RETURN",
                  "displayLines": "SummonMonsterID02",
                  "constants": [],
                  "variables": [
                    "SummonMonsterID02"
                  ]
                },
                "MDF_SummonDelay": {
                  "operator": "Variables[0] (SummonDelayRatioPhase1) || RETURN",
                  "displayLines": "SummonDelayRatioPhase1",
                  "constants": [],
                  "variables": [
                    "SummonDelayRatioPhase1"
                  ]
                }
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
              "valuePerStack": {
                "MDF_SummonID": {
                  "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                  "displayLines": "SummonMonsterID01",
                  "constants": [],
                  "variables": [
                    "SummonMonsterID01"
                  ]
                },
                "MDF_SummonDelay": {
                  "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                  "displayLines": "SummonDelayRatioPhase2",
                  "constants": [],
                  "variables": [
                    "SummonDelayRatioPhase2"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": 0.5
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                  "valuePerStack": {
                    "MDF_SummonID": {
                      "operator": "Variables[0] (SummonMonsterID02) || RETURN",
                      "displayLines": "SummonMonsterID02",
                      "constants": [],
                      "variables": [
                        "SummonMonsterID02"
                      ]
                    },
                    "MDF_SummonDelay": {
                      "operator": "Variables[0] (SummonDelayRatioPhase1) || RETURN",
                      "displayLines": "SummonDelayRatioPhase1",
                      "constants": [],
                      "variables": [
                        "SummonDelayRatioPhase1"
                      ]
                    }
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                  "valuePerStack": {
                    "MDF_SummonID": {
                      "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                      "displayLines": "SummonMonsterID01",
                      "constants": [],
                      "variables": [
                        "SummonMonsterID01"
                      ]
                    },
                    "MDF_SummonDelay": {
                      "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                      "displayLines": "SummonDelayRatioPhase2",
                      "constants": [],
                      "variables": [
                        "SummonDelayRatioPhase2"
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                  "valuePerStack": {
                    "MDF_SummonID": {
                      "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                      "displayLines": "SummonMonsterID01",
                      "constants": [],
                      "variables": [
                        "SummonMonsterID01"
                      ]
                    },
                    "MDF_SummonDelay": {
                      "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                      "displayLines": "SummonDelayRatioPhase2",
                      "constants": [],
                      "variables": [
                        "SummonDelayRatioPhase2"
                      ]
                    }
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                  "valuePerStack": {
                    "MDF_SummonID": {
                      "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                      "displayLines": "SummonMonsterID01",
                      "constants": [],
                      "variables": [
                        "SummonMonsterID01"
                      ]
                    },
                    "MDF_SummonDelay": {
                      "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                      "displayLines": "SummonDelayRatioPhase2",
                      "constants": [],
                      "variables": [
                        "SummonDelayRatioPhase2"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 4
          },
          {
            "name": "Compare: Variable",
            "abilityOwnerType": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "abilityName": "Monster_SW_Boss_01_IF_AbilityP01_Insert",
            "value1": "QueuedActions",
            "compareType": ">=",
            "value2": 1
          }
        ]
      }
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1940595812\">RandomSummonDelay</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Random Chance",
            "chance": 0.4
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SummonDelayRatio1",
              "value": {
                "operator": "Variables[0] (SummonDelayRatio1Random2) || RETURN",
                "displayLines": "SummonDelayRatio1Random2",
                "constants": [],
                "variables": [
                  "SummonDelayRatio1Random2"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": 0.5
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonDelayRatio1",
                  "value": {
                    "operator": "Variables[0] (SummonDelayRatio1Random3) || RETURN",
                    "displayLines": "SummonDelayRatio1Random3",
                    "constants": [],
                    "variables": [
                      "SummonDelayRatio1Random3"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonDelayRatio1",
                  "value": {
                    "operator": "Variables[0] (SummonDelayRatio1Random1) || RETURN",
                    "displayLines": "SummonDelayRatio1Random1",
                    "constants": [],
                    "variables": [
                      "SummonDelayRatio1Random1"
                    ]
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