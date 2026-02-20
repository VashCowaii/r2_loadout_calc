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
                  "variableName": "_BonusCheck",
                  "value": {
                    "operator": "Variables[0] (_SummonCheck) || Variables[1] (_Bonus2Init) || SUB || Variables[2] (_Bonus2Sums) || DIV || RETURN",
                    "displayLines": "((_SummonCheck - _Bonus2Init) / _Bonus2Sums)",
                    "constants": [],
                    "variables": [
                      "_SummonCheck",
                      "_Bonus2Init",
                      "_Bonus2Sums"
                    ]
                  }
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
              "variableName": "_BonusCheck",
              "value": {
                "operator": "Variables[0] (_SummonCheck) || Variables[1] (_BonusInit) || SUB || Variables[2] (_BonusSums) || DIV || RETURN",
                "displayLines": "((_SummonCheck - _BonusInit) / _BonusSums)",
                "constants": [],
                "variables": [
                  "_SummonCheck",
                  "_BonusInit",
                  "_BonusSums"
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Mascot}}"
          },
          "variableName": "_MascotCounts",
          "livingTargets": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_BonusCheck",
            "compareType": "=",
            "value2": {
              "operator": "Variables[0] (WHOLE) || Variables[1] (_BonusCheck) || PARAM_1 || FUNCTION || RETURN",
              "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(_BonusCheck)",
              "constants": [],
              "variables": [
                "WHOLE",
                "_BonusCheck"
              ]
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
                          "operator": "Variables[0] (_Bonus2Limit) || RETURN",
                          "displayLines": "_Bonus2Limit",
                          "constants": [],
                          "variables": [
                            "_Bonus2Limit"
                          ]
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
                          "operator": "Variables[0] (_BonusLimit) || Variables[1] (_Bonus2Limit) || ADD || RETURN",
                          "displayLines": "(_BonusLimit + _Bonus2Limit)",
                          "constants": [],
                          "variables": [
                            "_BonusLimit",
                            "_Bonus2Limit"
                          ]
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
                    "operator": "Variables[0] (SummonID03) || RETURN",
                    "displayLines": "SummonID03",
                    "constants": [],
                    "variables": [
                      "SummonID03"
                    ]
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
                "operator": "Variables[0] (_DelayCase) || RETURN",
                "displayLines": "_DelayCase",
                "constants": [],
                "variables": [
                  "_DelayCase"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DelayRatio",
                      "value": {
                        "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                        "displayLines": "{[Skill02[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[1]]}"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DelayRatio",
                      "value": {
                        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                        "displayLines": "{[Skill02[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[2]]}"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DelayRatio",
                      "value": {
                        "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                        "displayLines": "{[Skill02[3]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[3]]}"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 0,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DelayRatio",
                      "value": {
                        "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                        "displayLines": "{[Skill02[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill02[4]]}"
                        ]
                      }
                    }
                  ]
                }
              ],
              "defaultEvents": []
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
                  "variableName": "_DelayCase",
                  "value": 0
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
                "operator": "Variables[0] (_DelayRatio) || RETURN",
                "displayLines": "_DelayRatio",
                "constants": [],
                "variables": [
                  "_DelayRatio"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID01) || RETURN",
                    "displayLines": "SummonID01",
                    "constants": [],
                    "variables": [
                      "SummonID01"
                    ]
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