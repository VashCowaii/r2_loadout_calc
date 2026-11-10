const configAbility = {
  "fileName": "Rappa_Functions",
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1176541882\">Template_Rappa_PassiveBreak</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_PassiveBreakCount",
            "compareType": "<",
            "value2": {
              "displayLines": "(_PassiveBreakCountMax - _PassiveBreakCountBase)"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(_PassiveBreakCount + 1)"
              },
              "variableName": "_PassiveBreakCount"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1458859803\">Rappa_Break_Modifier_ForShow</a>[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
              "stackLimit": {
                "displayLines": "_PassiveBreakCountMax"
              },
              "addStacksPerTrigger": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(DV_Rappa_BreakCount + 1)"
              },
              "variableName": "DV_Rappa_BreakCount"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "DV_StockTempCount"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Ninjutsu Inscription: Sky High"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "compareType": ">=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(_PassiveBreakCount + 1)"
                  },
                  "variableName": "DV_StockTempCount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_StockTempCount",
                    "compareType": ">",
                    "value2": {
                      "displayLines": "(_PassiveBreakCountMax - _PassiveBreakCountBase)"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1458859803\">Rappa_Break_Modifier_ForShow</a>[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
                      "stackLimit": {
                        "displayLines": "_PassiveBreakCountMax"
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "((_PassiveBreakCountMax - _PassiveBreakCountBase) - _PassiveBreakCount)"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(_PassiveBreakCountMax - _PassiveBreakCountBase)"
                      },
                      "variableName": "_PassiveBreakCount"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1458859803\">Rappa_Break_Modifier_ForShow</a>[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
                      "stackLimit": {
                        "displayLines": "_PassiveBreakCountMax"
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "1"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(_PassiveBreakCount + 1)"
                      },
                      "variableName": "_PassiveBreakCount"
                    }
                  ]
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "displayLines": "10"
                  },
                  "isFixed": "* ERR"
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