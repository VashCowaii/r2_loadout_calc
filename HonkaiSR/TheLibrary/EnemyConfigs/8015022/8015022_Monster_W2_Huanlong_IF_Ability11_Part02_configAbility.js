const configAbility = {
  "fileName": "8015022_Monster_W2_Huanlong_IF_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1775073303\">Monster_W2_HuanlongPart_01_MuteHitFly</a>"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-268148846\">Monster_W2_HuanlongPart_MuteHitFly</a>"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "flagNames": []
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SummonTimes",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "SummonID_1",
          "value": {
            "operator": "Variables[0] (SummonID4) || RETURN",
            "displayLines": "SummonID4",
            "constants": [],
            "variables": [
              "SummonID4"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SummonID_2",
          "value": {
            "operator": "Variables[0] (SummonID4) || RETURN",
            "displayLines": "SummonID4",
            "constants": [],
            "variables": [
              "SummonID4"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SummonID_3",
          "value": {
            "operator": "Variables[0] (SummonID3) || RETURN",
            "displayLines": "SummonID3",
            "constants": [],
            "variables": [
              "SummonID3"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SummonID_4",
          "value": {
            "operator": "Variables[0] (SummonID3) || RETURN",
            "displayLines": "SummonID3",
            "constants": [],
            "variables": [
              "SummonID3"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonTimes",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "FlowerLevel",
                "compareType": ">=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonID_1",
                  "value": {
                    "operator": "Variables[0] (SummonID3) || RETURN",
                    "displayLines": "SummonID3",
                    "constants": [],
                    "variables": [
                      "SummonID3"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonID_2",
                  "value": {
                    "operator": "Variables[0] (SummonID3) || RETURN",
                    "displayLines": "SummonID3",
                    "constants": [],
                    "variables": [
                      "SummonID3"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonID_3",
                  "value": {
                    "operator": "Variables[0] (SummonID3) || RETURN",
                    "displayLines": "SummonID3",
                    "constants": [],
                    "variables": [
                      "SummonID3"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonID_4",
                  "value": {
                    "operator": "Variables[0] (SummonID3) || RETURN",
                    "displayLines": "SummonID3",
                    "constants": [],
                    "variables": [
                      "SummonID3"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonID_1",
                  "value": {
                    "operator": "Variables[0] (SummonID4) || RETURN",
                    "displayLines": "SummonID4",
                    "constants": [],
                    "variables": [
                      "SummonID4"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonID_2",
                  "value": {
                    "operator": "Variables[0] (SummonID4) || RETURN",
                    "displayLines": "SummonID4",
                    "constants": [],
                    "variables": [
                      "SummonID4"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonID_3",
                  "value": {
                    "operator": "Variables[0] (SummonID4) || RETURN",
                    "displayLines": "SummonID4",
                    "constants": [],
                    "variables": [
                      "SummonID4"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonID_4",
                  "value": {
                    "operator": "Variables[0] (SummonID4) || RETURN",
                    "displayLines": "SummonID4",
                    "constants": [],
                    "variables": [
                      "SummonID4"
                    ]
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "FlowerLevel",
                "compareType": "<",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonID_1",
                  "value": {
                    "operator": "Variables[0] (SummonID3) || RETURN",
                    "displayLines": "SummonID3",
                    "constants": [],
                    "variables": [
                      "SummonID3"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonID_2",
                  "value": {
                    "operator": "Variables[0] (SummonID3) || RETURN",
                    "displayLines": "SummonID3",
                    "constants": [],
                    "variables": [
                      "SummonID3"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonID_3",
                  "value": {
                    "operator": "Variables[0] (SummonID3) || RETURN",
                    "displayLines": "SummonID3",
                    "constants": [],
                    "variables": [
                      "SummonID3"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonID_4",
                  "value": {
                    "operator": "Variables[0] (SummonID3) || RETURN",
                    "displayLines": "SummonID3",
                    "constants": [],
                    "variables": [
                      "SummonID3"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonID_1",
                  "value": {
                    "operator": "Variables[0] (SummonID4) || RETURN",
                    "displayLines": "SummonID4",
                    "constants": [],
                    "variables": [
                      "SummonID4"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonID_2",
                  "value": {
                    "operator": "Variables[0] (SummonID4) || RETURN",
                    "displayLines": "SummonID4",
                    "constants": [],
                    "variables": [
                      "SummonID4"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonID_3",
                  "value": {
                    "operator": "Variables[0] (SummonID4) || RETURN",
                    "displayLines": "SummonID4",
                    "constants": [],
                    "variables": [
                      "SummonID4"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonID_4",
                  "value": {
                    "operator": "Variables[0] (SummonID4) || RETURN",
                    "displayLines": "SummonID4",
                    "constants": [],
                    "variables": [
                      "SummonID4"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SummonTimes",
      "value": {
        "operator": "Variables[0] (SummonTimes) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(SummonTimes + 1)",
        "constants": [
          1
        ],
        "variables": [
          "SummonTimes"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SummonTimes",
        "compareType": "=",
        "value2": 3
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "SummonTimes",
          "value": 0
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[PassiveSkill05[0]]}) || RETURN",
        "displayLines": "{[PassiveSkill05[0]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill05[0]]}"
        ]
      },
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonID_1) || RETURN",
            "displayLines": "SummonID_1",
            "constants": [],
            "variables": [
              "SummonID_1"
            ]
          },
          "locationType": "BeforeCaster"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1190585947\">Monster_W2_HuanlongPart_IF_P2_SecondMark</a>"
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[PassiveSkill05[1]]}) || RETURN",
        "displayLines": "{[PassiveSkill05[1]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill05[1]]}"
        ]
      },
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonID_2) || RETURN",
            "displayLines": "SummonID_2",
            "constants": [],
            "variables": [
              "SummonID_2"
            ]
          },
          "locationType": "First"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1296858925\">Monster_W2_HuanlongPart_IF_P2_FirstMark</a>"
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[PassiveSkill05[2]]}) || RETURN",
        "displayLines": "{[PassiveSkill05[2]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill05[2]]}"
        ]
      },
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonID_3) || RETURN",
            "displayLines": "SummonID_3",
            "constants": [],
            "variables": [
              "SummonID_3"
            ]
          },
          "locationType": "AfterCaster"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1242033542\">Monster_W2_HuanlongPart_IF_P2_ThirdMark</a>"
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[PassiveSkill05[3]]}) || RETURN",
        "displayLines": "{[PassiveSkill05[3]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill05[3]]}"
        ]
      },
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonID_4) || RETURN",
            "displayLines": "SummonID_4",
            "constants": [],
            "variables": [
              "SummonID_4"
            ]
          },
          "locationType": "Last"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1084207204\">Monster_W2_HuanlongPart_IF_P2_ForthMark</a>"
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
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1788965070\">Monster_W2_Huanlong_IF_WeaknessProtect</a>[<span class=\"descriptionNumberColor\">Flower By Another Name</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}