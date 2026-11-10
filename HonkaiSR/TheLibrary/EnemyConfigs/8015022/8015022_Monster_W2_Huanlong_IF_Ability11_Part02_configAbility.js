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
          }
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
          "value": {
            "displayLines": "SummonID4"
          },
          "variableName": "SummonID_1"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "SummonID4"
          },
          "variableName": "SummonID_2"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "SummonID3"
          },
          "variableName": "SummonID_3"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "SummonID3"
          },
          "variableName": "SummonID_4"
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
                  "value": {
                    "displayLines": "SummonID3"
                  },
                  "variableName": "SummonID_1"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "SummonID3"
                  },
                  "variableName": "SummonID_2"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "SummonID3"
                  },
                  "variableName": "SummonID_3"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "SummonID3"
                  },
                  "variableName": "SummonID_4"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "SummonID4"
                  },
                  "variableName": "SummonID_1"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "SummonID4"
                  },
                  "variableName": "SummonID_2"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "SummonID4"
                  },
                  "variableName": "SummonID_3"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "SummonID4"
                  },
                  "variableName": "SummonID_4"
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
                  "value": {
                    "displayLines": "SummonID3"
                  },
                  "variableName": "SummonID_1"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "SummonID3"
                  },
                  "variableName": "SummonID_2"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "SummonID3"
                  },
                  "variableName": "SummonID_3"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "SummonID3"
                  },
                  "variableName": "SummonID_4"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "SummonID4"
                  },
                  "variableName": "SummonID_1"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "SummonID4"
                  },
                  "variableName": "SummonID_2"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "SummonID4"
                  },
                  "variableName": "SummonID_3"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "SummonID4"
                  },
                  "variableName": "SummonID_4"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(SummonTimes + 1)"
      },
      "variableName": "SummonTimes"
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
          "value": 0,
          "variableName": "SummonTimes"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "displayLines": "{[PassiveSkill05[0]]}"
      },
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "displayLines": "SummonID_1"
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
        "displayLines": "{[PassiveSkill05[1]]}"
      },
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "displayLines": "SummonID_2"
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
        "displayLines": "{[PassiveSkill05[2]]}"
      },
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "displayLines": "SummonID_3"
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
        "displayLines": "{[PassiveSkill05[3]]}"
      },
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "displayLines": "SummonID_4"
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
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}