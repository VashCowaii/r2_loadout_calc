const configAbility = {
  "fileName": "BlackSwan_Functions",
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__632471047\">function_Advanced_BlackSwan_AddDOT</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          },
          "includeDyingTargets": true,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "parameter[0]_AddLayer"
              },
              "variableName": "Result_Stack_Layer"
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "displayLines": "parameter[0]_AddLayer"
              },
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"803699563\">Advanced_BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                      },
                      {
                        "name": "Random Chance",
                        "chance": {
                          "displayLines": "0.5"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(Result_Stack_Layer + 1)"
                      },
                      "variableName": "Result_Stack_Layer"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(Result_Stack_Layer + 1)"
                      },
                      "variableName": "Result_Stack_Layer"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1945456695\">M_Advanced_BlackSwan_ForbidEffectFlag</a>",
                "justAddedOrActive": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
                  "baseChance": {
                    "displayLines": "parameter[1]_Chance"
                  },
                  "stackLimit": {
                    "displayLines": "Max_DOT_Layer"
                  },
                  "valuePerStack": {
                    "Basic_DamagePercentage": {
                      "displayLines": "2.4"
                    },
                    "ExtraLayer_DamagePercentage": {
                      "displayLines": "0.12"
                    },
                    "Spread_DamagePercentage": {
                      "displayLines": "1.8"
                    },
                    "ThresholdLayer": {
                      "displayLines": "DOT_Layer_Threshold"
                    },
                    "DefenceIgnore": {
                      "displayLines": "0.2"
                    }
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "Result_Stack_Layer"
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
                  "baseChance": {
                    "displayLines": "parameter[1]_Chance"
                  },
                  "stackLimit": {
                    "displayLines": "Max_DOT_Layer"
                  },
                  "valuePerStack": {
                    "Basic_DamagePercentage": {
                      "displayLines": "2.4"
                    },
                    "ExtraLayer_DamagePercentage": {
                      "displayLines": "0.12"
                    },
                    "Spread_DamagePercentage": {
                      "displayLines": "1.8"
                    },
                    "ThresholdLayer": {
                      "displayLines": "DOT_Layer_Threshold"
                    },
                    "DefenceIgnore": {
                      "displayLines": "0.2"
                    }
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "Result_Stack_Layer"
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