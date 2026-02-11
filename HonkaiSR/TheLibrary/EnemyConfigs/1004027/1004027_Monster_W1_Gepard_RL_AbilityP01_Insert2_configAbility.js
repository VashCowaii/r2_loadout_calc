const configAbility = {
  "fileName": "1004027_Monster_W1_Gepard_RL_AbilityP01_Insert2",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "UsedShieldFlag"
    },
    {
      "name": "UI Display Event",
      "popUpText": "Support"
    },
    {
      "name": "Animation Event",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "state": "Skill12",
      "passed": [
        {
          "name": "Animation Task"
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": 0.5,
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (Soldier03) || RETURN",
                    "displayLines": "Soldier03",
                    "constants": [],
                    "variables": [
                      "Soldier03"
                    ]
                  },
                  "locationType": "BeforeCaster"
                },
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (Soldier03) || RETURN",
                    "displayLines": "Soldier03",
                    "constants": [],
                    "variables": [
                      "Soldier03"
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
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            }
          ]
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-243818097\">SPRL_Flag</a>"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (Soldier03) || RETURN",
                        "displayLines": "Soldier03",
                        "constants": [],
                        "variables": [
                          "Soldier03"
                        ]
                      },
                      "locationType": "First"
                    },
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (Soldier03) || RETURN",
                        "displayLines": "Soldier03",
                        "constants": [],
                        "variables": [
                          "Soldier03"
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
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}