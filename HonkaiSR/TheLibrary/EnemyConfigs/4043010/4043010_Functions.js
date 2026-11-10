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
                  "value": {
                    "displayLines": "SummonID01"
                  },
                  "variableName": "Summon_MonsterIDKey"
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "value": {
                    "displayLines": "SummonID02"
                  },
                  "variableName": "Summon_MonsterIDKey"
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
                      "value": {
                        "displayLines": "SummonID01"
                      },
                      "variableName": "Summon_MonsterIDKey"
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
                      "value": {
                        "displayLines": "SummonID02"
                      },
                      "variableName": "Summon_MonsterIDKey"
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
              "displayLines": "TP_SummonLocation"
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
              }
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "displayLines": "TP_DelayRatio"
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "displayLines": "Summon_MonsterIDKey"
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
                "displayLines": "TP_DelayRatio"
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "displayLines": "Summon_MonsterIDKey"
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
                "displayLines": "TP_DelayRatio"
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "displayLines": "Summon_MonsterIDKey"
                  },
                  "locationType": "Last"
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_CasterMaxHP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_CasterCurrHP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_SummonMaxHP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Set HP Value",
          "target": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "setValue": {
            "displayLines": "(_SummonMaxHP * (_CasterCurrHP / _CasterMaxHP))"
          }
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_CasterMaxStance",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "warningType": "MaxToughness",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_CasterCurrStance",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
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
                "displayLines": "(1 - (_CasterCurrStance / _CasterMaxStance))"
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
            "TargetList": [
              {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "Sort by Action Order"
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