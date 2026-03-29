const configAbility = {
  "fileName": "4013011_Monster_W4_Claymore_Ability05_Part02",
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
        "compareType": "<=",
        "value2": 3
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4013013,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Furiae Praetor (Bug)",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": 0.5,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID) || RETURN",
                    "displayLines": "SummonID",
                    "constants": [],
                    "variables": [
                      "SummonID"
                    ]
                  },
                  "locationType": "KeepOnEdge"
                },
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID) || RETURN",
                    "displayLines": "SummonID",
                    "constants": [],
                    "variables": [
                      "SummonID"
                    ]
                  },
                  "locationType": "KeepOnEdge"
                },
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID) || RETURN",
                    "displayLines": "SummonID",
                    "constants": [],
                    "variables": [
                      "SummonID"
                    ]
                  },
                  "locationType": "KeepOnEdge"
                },
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID) || RETURN",
                    "displayLines": "SummonID",
                    "constants": [],
                    "variables": [
                      "SummonID"
                    ]
                  },
                  "locationType": "KeepOnEdge"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID) || RETURN",
                    "displayLines": "SummonID",
                    "constants": [],
                    "variables": [
                      "SummonID"
                    ]
                  },
                  "locationType": "BeforeCaster"
                },
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID) || RETURN",
                    "displayLines": "SummonID",
                    "constants": [],
                    "variables": [
                      "SummonID"
                    ]
                  },
                  "locationType": "AfterCaster"
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
        }
      ],
      "failed": [
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
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID) || RETURN",
                    "displayLines": "SummonID",
                    "constants": [],
                    "variables": [
                      "SummonID"
                    ]
                  },
                  "locationType": "AroundCaster"
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
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Recently Summoned Enemies}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1276555812\">MModifier_Monster_AML_Minion03_01_StoneShieldEnhance</a>[<span class=\"descriptionNumberColor\">Indomitable</span>]"
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}