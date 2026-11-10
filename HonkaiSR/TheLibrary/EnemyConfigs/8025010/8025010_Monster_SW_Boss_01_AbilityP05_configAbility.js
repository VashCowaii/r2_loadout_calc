const configAbility = {
  "fileName": "8025010_Monster_SW_Boss_01_AbilityP05",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Phase2FirstTurn",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "failed": [
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
                  "displayLines": "SummonList_ADF_1"
                },
                "MDF_SummonDelay": {
                  "displayLines": "SummonDelayRatioPhase2"
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
                  "value": 0,
                  "variableName": "Phase2FirstSummon"
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
                      "displayLines": "SummonList_ADF_2"
                    },
                    "MDF_SummonDelay": {
                      "displayLines": "SummonDelayRatioPhase1"
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
                      "displayLines": "SummonList_ADF_1"
                    },
                    "MDF_SummonDelay": {
                      "displayLines": "SummonDelayRatioPhase2"
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
                          "displayLines": "SummonList_ADF_2"
                        },
                        "MDF_SummonDelay": {
                          "displayLines": "SummonDelayRatioPhase1"
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
                          "displayLines": "SummonList_ADF_1"
                        },
                        "MDF_SummonDelay": {
                          "displayLines": "SummonDelayRatioPhase2"
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
                          "displayLines": "SummonList_ADF_1"
                        },
                        "MDF_SummonDelay": {
                          "displayLines": "SummonDelayRatioPhase2"
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
                          "displayLines": "SummonList_ADF_1"
                        },
                        "MDF_SummonDelay": {
                          "displayLines": "SummonDelayRatioPhase2"
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
        }
      ]
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
              "value": {
                "displayLines": "SummonDelayRatio1Random2"
              },
              "variableName": "SummonDelayRatio1"
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
                  "value": {
                    "displayLines": "SummonDelayRatio1Random3"
                  },
                  "variableName": "SummonDelayRatio1"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "SummonDelayRatio1Random1"
                  },
                  "variableName": "SummonDelayRatio1"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}