const configAbility = {
  "fileName": "4064010_Monster_W4_Serpent_01_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{All Team Members}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "<",
        "value2": 5
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
            "displayLines": "{[Skill02[0]]}",
            "constants": [],
            "variables": [
              "{[Skill02[0]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__95"
                ]
              },
              "locationType": "KeepOnEdge"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
            "displayLines": "{[Skill02[3]]}",
            "constants": [],
            "variables": [
              "{[Skill02[3]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__95"
                ]
              },
              "locationType": "KeepOnEdge"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "RLBoss"
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
              }
            ]
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                "displayLines": "{[Skill02[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[0]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__95"
                    ]
                  },
                  "locationType": "KeepOnEdge"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                "displayLines": "{[Skill02[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[3]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__95"
                    ]
                  },
                  "locationType": "KeepOnEdge"
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
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
            "invertCondition": true
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
            "invertCondition": true
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
            "invertCondition": true
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
              "modifier": "<a class=\"gModGreen\" id=\"120636483\">Enemy_W4_Serpent_01_Summon_Deathrattle</a>[<span class=\"descriptionNumberColor\">Execution Squad</span>]"
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}