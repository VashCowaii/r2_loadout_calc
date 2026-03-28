const configAbility = {
  "fileName": "2024013_Monster_W2_Xuanlu_Extra_Ability10_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Minion_1_Alive",
        "compareType": "<",
        "value2": {
          "operator": "Variables[0] (MinionState_1) || RETURN",
          "displayLines": "MinionState_1",
          "constants": [],
          "variables": [
            "MinionState_1"
          ]
        }
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": 1.2,
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
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-221780048\">Enemy_W2_Xuanlu_Extra_ListenMinion_1_Killed</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Minion_1_Alive",
          "value": 1
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Minion_3_Alive",
        "compareType": "<",
        "value2": {
          "operator": "Variables[0] (MinionState_3) || RETURN",
          "displayLines": "MinionState_3",
          "constants": [],
          "variables": [
            "MinionState_3"
          ]
        }
      },
      "passed": [
        {
          "name": "Create Enemies",
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
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1758985714\">Enemy_W2_Xuanlu_Extra_ListenMinion_3_Killed</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Minion_3_Alive",
          "value": 1
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Minion_4_Alive",
        "compareType": "<",
        "value2": {
          "operator": "Variables[0] (MinionState_4) || RETURN",
          "displayLines": "MinionState_4",
          "constants": [],
          "variables": [
            "MinionState_4"
          ]
        }
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": 0.6,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonMinionID_4) || RETURN",
                "displayLines": "SummonMinionID_4",
                "constants": [],
                "variables": [
                  "SummonMinionID_4"
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
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"884572601\">Enemy_W2_Xuanlu_Extra_ListenMinion_4_Killed</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Minion_4_Alive",
          "value": 1
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Minion_2_Alive",
        "compareType": "<",
        "value2": {
          "operator": "Variables[0] (MinionState_2) || RETURN",
          "displayLines": "MinionState_2",
          "constants": [],
          "variables": [
            "MinionState_2"
          ]
        }
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Minion_2_Alive",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": 0,
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
                  "locationType": "First"
                },
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
                  "locationType": "Last"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Random Event",
              "odds": [
                0.5,
                0.5
              ],
              "execute": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0,
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
                      "locationType": "First"
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "delayPercent": 0,
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
                      "locationType": "Last"
                    }
                  ]
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
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1947428863\">Enemy_W2_Xuanlu_Extra_ListenMinion_2_Killed</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Minion_2_Alive",
          "value": 2
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
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
          {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1933098157\">Enemy_W2_Xuanlu_10_Extra_IncreaseReturnDamage</a>[<span class=\"descriptionNumberColor\">Cultivation</span>]"
            }
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1933098157\">Enemy_W2_Xuanlu_10_Extra_IncreaseReturnDamage</a>[<span class=\"descriptionNumberColor\">Cultivation</span>]",
          "valuePerStack": {
            "MDF_DamageIncreaseValue": {
              "operator": "Variables[0] ({[Skill15[0]]}) || RETURN",
              "displayLines": "{[Skill15[0]]}",
              "constants": [],
              "variables": [
                "{[Skill15[0]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MDF_ShowFlag",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_ShowFlag",
          "value": 1
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-348100636\">Enemy_W2_Xuanlu_10_Extra_HealMinionShowUIModifier</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    }
  ]
}