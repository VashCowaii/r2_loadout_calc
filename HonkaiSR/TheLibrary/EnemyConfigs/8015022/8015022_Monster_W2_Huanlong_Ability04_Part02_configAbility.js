const configAbility = {
  "fileName": "8015022_Monster_W2_Huanlong_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "team": "Enemy Team",
        "location": "Left"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_204) || RETURN",
            "displayLines": "UnusedUnderThisBase_204",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_204"
            ]
          },
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
              "locationType": "BeforeCaster"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_204) || RETURN",
            "displayLines": "UnusedUnderThisBase_204",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_204"
            ]
          },
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
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Minions}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 2
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] (UnusedUnderThisBase_205) || RETURN",
                "displayLines": "UnusedUnderThisBase_205",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_205"
                ]
              },
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
                  "locationType": "BeforeCaster"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] (UnusedUnderThisBase_205) || RETURN",
                "displayLines": "UnusedUnderThisBase_205",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_205"
                ]
              },
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
            }
          ]
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
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID1) || RETURN",
              "displayLines": "SummonID1",
              "constants": [],
              "variables": [
                "SummonID1"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1697333588\">Monster_W2_Huanlong_Ability04Mark</a>",
            "invertCondition": true
          }
        ]
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
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID1) || RETURN",
              "displayLines": "SummonID1",
              "constants": [],
              "variables": [
                "SummonID1"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1697333588\">Monster_W2_Huanlong_Ability04Mark</a>",
            "invertCondition": true
          }
        ]
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
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID1) || RETURN",
              "displayLines": "SummonID1",
              "constants": [],
              "variables": [
                "SummonID1"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1697333588\">Monster_W2_Huanlong_Ability04Mark</a>",
            "invertCondition": true
          }
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1697333588\">Monster_W2_Huanlong_Ability04Mark</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}