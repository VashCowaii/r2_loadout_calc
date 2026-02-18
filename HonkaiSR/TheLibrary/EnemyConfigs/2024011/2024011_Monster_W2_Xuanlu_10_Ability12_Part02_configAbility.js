const configAbility = {
  "fileName": "2024011_Monster_W2_Xuanlu_10_Ability12_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 4
          },
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 0,
            "conditions": {
              "name": "Character ID",
              "ID": "SummonMinionID_3",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "characterName": null
            }
          }
        ]
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill12[0]]}) || RETURN",
            "displayLines": "{[Skill12[0]]}",
            "constants": [],
            "variables": [
              "{[Skill12[0]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonMinionID_3) || RETURN",
                "displayLines": "SummonMinionID_3",
                "constants": [],
                "variables": [
                  "SummonMinionID_3"
                ]
              },
              "locationType": "Last"
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
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonMinionID_3) || RETURN",
              "displayLines": "SummonMinionID_3",
              "constants": [],
              "variables": [
                "SummonMinionID_3"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1029262152\">Enemy_W2_Xuanlu_10_MinionMark_3</a>",
              "valuePerStack": {
                "MDF_MaxMinionCount": {
                  "operator": "Variables[0] (MaxMinionCount) || RETURN",
                  "displayLines": "MaxMinionCount",
                  "constants": [],
                  "variables": [
                    "MaxMinionCount"
                  ]
                }
              }
            }
          ]
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
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 4
          },
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 0,
            "conditions": {
              "name": "Character ID",
              "ID": "SummonMinionID_1",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "characterName": null
            }
          }
        ]
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill12[1]]}) || RETURN",
            "displayLines": "{[Skill12[1]]}",
            "constants": [],
            "variables": [
              "{[Skill12[1]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonMinionID_1) || RETURN",
                "displayLines": "SummonMinionID_1",
                "constants": [],
                "variables": [
                  "SummonMinionID_1"
                ]
              },
              "locationType": "First"
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
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonMinionID_1) || RETURN",
              "displayLines": "SummonMinionID_1",
              "constants": [],
              "variables": [
                "SummonMinionID_1"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1062817390\">Enemy_W2_Xuanlu_10_MinionMark_1</a>",
              "valuePerStack": {
                "MDF_MaxMinionCount": {
                  "operator": "Variables[0] (MaxMinionCount) || RETURN",
                  "displayLines": "MaxMinionCount",
                  "constants": [],
                  "variables": [
                    "MaxMinionCount"
                  ]
                }
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
        "target": {
          "name": "Target Name",
          "target": "{{All Team Members}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "<=",
        "value2": 4
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill12[2]]}) || RETURN",
            "displayLines": "{[Skill12[2]]}",
            "constants": [],
            "variables": [
              "{[Skill12[2]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonMinionID_2) || RETURN",
                "displayLines": "SummonMinionID_2",
                "constants": [],
                "variables": [
                  "SummonMinionID_2"
                ]
              },
              "locationType": "AroundCaster"
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
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonMinionID_2) || RETURN",
              "displayLines": "SummonMinionID_2",
              "constants": [],
              "variables": [
                "SummonMinionID_2"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1046039771\">Enemy_W2_Xuanlu_10_MinionMark_2</a>",
              "valuePerStack": {
                "MDF_MaxMinionCount": {
                  "operator": "Variables[0] (MaxMinionCount) || RETURN",
                  "displayLines": "MaxMinionCount",
                  "constants": [],
                  "variables": [
                    "MaxMinionCount"
                  ]
                }
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
        "target": {
          "name": "Target Name",
          "target": "{{All Team Members}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "<=",
        "value2": 4
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill12[3]]}) || RETURN",
            "displayLines": "{[Skill12[3]]}",
            "constants": [],
            "variables": [
              "{[Skill12[3]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonMinionID_2) || RETURN",
                "displayLines": "SummonMinionID_2",
                "constants": [],
                "variables": [
                  "SummonMinionID_2"
                ]
              },
              "locationType": "AroundCaster"
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
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonMinionID_2) || RETURN",
              "displayLines": "SummonMinionID_2",
              "constants": [],
              "variables": [
                "SummonMinionID_2"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1046039771\">Enemy_W2_Xuanlu_10_MinionMark_2</a>",
              "valuePerStack": {
                "MDF_MaxMinionCount": {
                  "operator": "Variables[0] (MaxMinionCount) || RETURN",
                  "displayLines": "MaxMinionCount",
                  "constants": [],
                  "variables": [
                    "MaxMinionCount"
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}