const configAbility = {
  "fileName": "5014020_BattleEventAbility_W5_Pam_SummonMonster",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "MDF_BEAlive",
            "compareType": "=",
            "value2": 0
          }
        ]
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<",
                "value2": 4
              }
            ]
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": 0.25,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonList_ADF_1",
                  "summonLocation": "KeepOnEdge"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"223685370\">Monster_W5_Pam_SummonedMinions_Appear</a>"
            },
            {
              "name": "Create Enemies",
              "delayPercent": 0.75,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonList_ADF_1",
                  "summonLocation": "KeepOnEdge"
                }
              ]
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"223685370\">Monster_W5_Pam_SummonedMinions_Appear</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 4
                  }
                ]
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.25,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonList_ADF_1",
                      "summonLocation": "KeepOnEdge"
                    }
                  ]
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"223685370\">Monster_W5_Pam_SummonedMinions_Appear</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "eventID": 20032,
          "assignOwner": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variables": null,
          "whenCreated": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "Pamu_Robot",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "stayInTeam": false
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_BEAlive",
          "value": 1
        }
      ],
      "failed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Battle Event ID",
            "ID": 20032,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          },
          "ifTargetFound": [
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "stayInTeam": false
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
                  "target": "{{Enemy Team All}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<",
                "value2": 4
              }
            ]
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": 0.25,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonList_ADF_1",
                  "summonLocation": "KeepOnEdge"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"223685370\">Monster_W5_Pam_SummonedMinions_Appear</a>"
            },
            {
              "name": "Create Enemies",
              "delayPercent": 0.75,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonList_ADF_1",
                  "summonLocation": "KeepOnEdge"
                }
              ]
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"223685370\">Monster_W5_Pam_SummonedMinions_Appear</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 4
                  }
                ]
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.25,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonList_ADF_1",
                      "summonLocation": "KeepOnEdge"
                    }
                  ]
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"223685370\">Monster_W5_Pam_SummonedMinions_Appear</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    "Deleted bullshit",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Battle Event List}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Battle Event ID",
        "ID": 20032,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        }
      },
      "ifTargetFound": [
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "stayInTeam": false
        }
      ]
    }
  ],
  "references": []
}