const configAbility = {
  "fileName": "4023012_Functions",
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1587865992\">W4_Griffin_LocalLegend_Summon</a>",
      "parse": [
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
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_SummonCheck",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 4023012,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Earthshaker Leo: Solblaze Winged Beast",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "((_SummonCheck - _Bonus2Init) / _Bonus2Sums)"
                  },
                  "variableName": "_BonusCheck"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_SummonCheck",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "((_SummonCheck - _BonusInit) / _BonusSums)"
              },
              "variableName": "_BonusCheck"
            }
          ]
        },
        {
          "name": "Define Custom Variable with Team Count",
          "variableName": "_MascotCounts",
          "readTarget": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Mascot}}"
          },
          "living": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_BonusCheck",
            "compareType": "=",
            "value2": {
              "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(_BonusCheck)"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_MascotReadyToSum",
              "value": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "_MascotReadyToSum",
                "compareType": ">=",
                "value2": 1
              },
              {
                "name": "Compare: Variable",
                "value1": "_MascotCounts",
                "compareType": "<=",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4023012,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Earthshaker Leo: Solblaze Winged Beast",
                "invertCondition": true
              },
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_BonusCheck02",
                        "compareType": "<",
                        "value2": {
                          "displayLines": "_Bonus2Limit"
                        }
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_BonusCheck02",
                        "compareType": "<",
                        "value2": {
                          "displayLines": "(_BonusLimit + _Bonus2Limit)"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_MascotReadyToSum",
              "value": -1
            },
            {
              "name": "Create Enemies",
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "displayLines": "SummonID03"
                  },
                  "locationType": "FormationRecord"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "SWITCH",
              "switchValue": {
                "displayLines": "_DelayCase"
              },
              "caseTasks": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "{[Skill02[1]]}"
                      },
                      "variableName": "_DelayRatio"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "{[Skill02[2]]}"
                      },
                      "variableName": "_DelayRatio"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "{[Skill02[3]]}"
                      },
                      "variableName": "_DelayRatio"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 0,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "{[Skill02[4]]}"
                      },
                      "variableName": "_DelayRatio"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_DelayCase",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "_DelayCase"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_DelayCase",
                  "value": 1,
                  "max": 3
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "displayLines": "_DelayRatio"
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "displayLines": "SummonID01"
                  },
                  "locationType": "FormationRecord"
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        }
      ]
    }
  ],
  "references": []
}