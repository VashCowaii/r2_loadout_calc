const configAbility = {
  "fileName": "8015022_Monster_W2_Huanlong_IF_Ability08_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "WeakProtect",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Minions}}"
        },
        "compareType": "<",
        "value2": 4,
        "livingTargets": true
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "WeakProtect",
          "value": 1
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SummonTimes_P1",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[PassiveSkill04[2]]}) || RETURN",
            "displayLines": "{[PassiveSkill04[2]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill04[2]]}"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID2) || RETURN",
                "displayLines": "SummonID2",
                "constants": [],
                "variables": [
                  "SummonID2"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1995770228\">Monster_W2_HuanlongPart_IF_P1_SecondMark</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1637495295\">Monster_W2_HuanlongPart_IF_LastSummonMark</a>"
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[PassiveSkill04[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill04[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill04[0]]}"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID1) || RETURN",
                "displayLines": "SummonID1",
                "constants": [],
                "variables": [
                  "SummonID1"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1954442981\">Monster_W2_HuanlongPart_IF_P1_ThirdMark</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1637495295\">Monster_W2_HuanlongPart_IF_LastSummonMark</a>"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Caster's Minions}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1995770228\">Monster_W2_HuanlongPart_IF_P1_SecondMark</a>"
                  }
                }
              ]
            },
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[PassiveSkill04[2]]}) || RETURN",
                "displayLines": "{[PassiveSkill04[2]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill04[2]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID2) || RETURN",
                    "displayLines": "SummonID2",
                    "constants": [],
                    "variables": [
                      "SummonID2"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1995770228\">Monster_W2_HuanlongPart_IF_P1_SecondMark</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1637495295\">Monster_W2_HuanlongPart_IF_LastSummonMark</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Caster's Minions}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"254104224\">Monster_W2_HuanlongPart_IF_P1_FirstMark</a>"
                  }
                }
              ]
            },
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[PassiveSkill04[3]]}) || RETURN",
                "displayLines": "{[PassiveSkill04[3]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill04[3]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID2) || RETURN",
                    "displayLines": "SummonID2",
                    "constants": [],
                    "variables": [
                      "SummonID2"
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
              "modifier": "<a class=\"gModGreen\" id=\"254104224\">Monster_W2_HuanlongPart_IF_P1_FirstMark</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1637495295\">Monster_W2_HuanlongPart_IF_LastSummonMark</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Caster's Minions}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1954442981\">Monster_W2_HuanlongPart_IF_P1_ThirdMark</a>"
                  }
                }
              ]
            },
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[PassiveSkill04[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill04[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill04[0]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID1) || RETURN",
                    "displayLines": "SummonID1",
                    "constants": [],
                    "variables": [
                      "SummonID1"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1954442981\">Monster_W2_HuanlongPart_IF_P1_ThirdMark</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1637495295\">Monster_W2_HuanlongPart_IF_LastSummonMark</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Caster's Minions}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1540631993\">Monster_W2_HuanlongPart_IF_P1_ForthMark</a>"
                  }
                }
              ]
            },
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[PassiveSkill04[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill04[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill04[1]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID1) || RETURN",
                    "displayLines": "SummonID1",
                    "constants": [],
                    "variables": [
                      "SummonID1"
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
              "modifier": "<a class=\"gModGreen\" id=\"1540631993\">Monster_W2_HuanlongPart_IF_P1_ForthMark</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1637495295\">Monster_W2_HuanlongPart_IF_LastSummonMark</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1637495295\">Monster_W2_HuanlongPart_IF_LastSummonMark</a>"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1637495295\">Monster_W2_HuanlongPart_IF_LastSummonMark</a>"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1637495295\">Monster_W2_HuanlongPart_IF_LastSummonMark</a>"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SummonTimes_P1",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1637495295\">Monster_W2_HuanlongPart_IF_LastSummonMark</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] ({[SkillEX03[1]]}) || RETURN",
                    "displayLines": "{[SkillEX03[1]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillEX03[1]]}"
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Monster_W2_HuanlongPart_IF_Recover"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "WeakProtect",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1788965070\">Monster_W2_Huanlong_IF_WeaknessProtect</a>[<span class=\"descriptionNumberColor\">Flower By Another Name</span>]"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SummonTimes_P1",
      "value": {
        "operator": "Variables[0] (SummonTimes_P1) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(SummonTimes_P1 + 1)",
        "constants": [
          1
        ],
        "variables": [
          "SummonTimes_P1"
        ]
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1637495295\">Monster_W2_HuanlongPart_IF_LastSummonMark</a>"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1637495295\">Monster_W2_HuanlongPart_IF_LastSummonMark</a>",
      "stackData": [],
      "latentQueue": [
        "WeakProtect"
      ]
    }
  ]
}