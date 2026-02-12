const configAbility = {
  "fileName": "4043010_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 4,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1206781785\">Random_MonsterIDKey</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonType",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Random Event",
              "odds": [
                1,
                1
              ],
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "Summon_MonsterIDKey",
                  "value": {
                    "operator": "Variables[0] (SummonID01) || RETURN",
                    "displayLines": "SummonID01",
                    "constants": [],
                    "variables": [
                      "SummonID01"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "Summon_MonsterIDKey",
                  "value": {
                    "operator": "Variables[0] (SummonID02) || RETURN",
                    "displayLines": "SummonID02",
                    "constants": [],
                    "variables": [
                      "SummonID02"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonType",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TP_SummonLocation",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Random Event",
                  "odds": [
                    1
                  ],
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "Summon_MonsterIDKey",
                      "value": {
                        "operator": "Variables[0] (SummonID01) || RETURN",
                        "displayLines": "SummonID01",
                        "constants": [],
                        "variables": [
                          "SummonID01"
                        ]
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Random Event",
                  "odds": [
                    1
                  ],
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "Summon_MonsterIDKey",
                      "value": {
                        "operator": "Variables[0] (SummonID02) || RETURN",
                        "displayLines": "SummonID02",
                        "constants": [],
                        "variables": [
                          "SummonID02"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-61933346\">MonsterHerta_SummonOnce</a>",
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1206781785\">Random_MonsterIDKey</a>",
          "variables": {
            "TP_SummonLocation": {
              "operator": "Variables[0] (TP_SummonLocation) || RETURN",
              "displayLines": "TP_SummonLocation",
              "constants": [],
              "variables": [
                "TP_SummonLocation"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "TP_SummonLocation",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "stayInTeam": false
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] (TP_DelayRatio) || RETURN",
                "displayLines": "TP_DelayRatio",
                "constants": [],
                "variables": [
                  "TP_DelayRatio"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (Summon_MonsterIDKey) || RETURN",
                    "displayLines": "Summon_MonsterIDKey",
                    "constants": [],
                    "variables": [
                      "Summon_MonsterIDKey"
                    ]
                  },
                  "locationType": "FormationRecord"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "TP_SummonLocation",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] (TP_DelayRatio) || RETURN",
                "displayLines": "TP_DelayRatio",
                "constants": [],
                "variables": [
                  "TP_DelayRatio"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (Summon_MonsterIDKey) || RETURN",
                    "displayLines": "Summon_MonsterIDKey",
                    "constants": [],
                    "variables": [
                      "Summon_MonsterIDKey"
                    ]
                  },
                  "locationType": "First"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "TP_SummonLocation",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] (TP_DelayRatio) || RETURN",
                "displayLines": "TP_DelayRatio",
                "constants": [],
                "variables": [
                  "TP_DelayRatio"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (Summon_MonsterIDKey) || RETURN",
                    "displayLines": "Summon_MonsterIDKey",
                    "constants": [],
                    "variables": [
                      "Summon_MonsterIDKey"
                    ]
                  },
                  "locationType": "Last"
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_CasterMaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_CasterCurrHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "variableName": "_SummonMaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Set HP Value",
          "target": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "setValue": {
            "operator": "Variables[0] (_SummonMaxHP) || Variables[1] (_CasterCurrHP) || Variables[2] (_CasterMaxHP) || DIV || MUL || RETURN",
            "displayLines": "(_SummonMaxHP * (_CasterCurrHP / _CasterMaxHP))",
            "constants": [],
            "variables": [
              "_SummonMaxHP",
              "_CasterCurrHP",
              "_CasterMaxHP"
            ]
          }
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_CasterMaxStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_CasterCurrStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_CasterCurrStance",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Deal Toughness DMG",
              "valuePercentReduce": 0.99,
              "target": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              }
            }
          ],
          "failed": [
            {
              "name": "Deal Toughness DMG",
              "valuePercentReduce": {
                "operator": "Constants[0] (1) || Variables[0] (_CasterCurrStance) || Variables[1] (_CasterMaxStance) || DIV || SUB || RETURN",
                "displayLines": "(1 - (_CasterCurrStance / _CasterMaxStance))",
                "constants": [
                  1
                ],
                "variables": [
                  "_CasterCurrStance",
                  "_CasterMaxStance"
                ]
              },
              "target": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              }
            }
          ]
        },
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "Monster_Herta",
          "state": false
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-947845666\">Monster_W4_Herta_SummonMark</a>"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1673790475\">MonsterHerta_Explode</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__372443677\">MonsterHerta_FireOnce</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              {
                "name": "Sort by Action Order"
              }
            ]
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-947845666\">Monster_W4_Herta_SummonMark</a>"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-947845666\">Monster_W4_Herta_SummonMark</a>"
            },
            {
              "name": "Shot Fired"
            },
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "Monster_Herta"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}