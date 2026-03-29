const configAbility = {
  "fileName": "3003022_Monster_W2_Beast02_01_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
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
                "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                "displayLines": "{[Skill03[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[0]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID01",
                  "summonLocation": "BeforeCaster"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                "displayLines": "{[Skill03[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[0]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID01",
                  "summonLocation": "AfterCaster"
                }
              ]
            }
          ]
        },
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
                "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                "displayLines": "{[Skill03[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[1]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID01",
                  "summonLocation": "BeforeCaster"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                "displayLines": "{[Skill03[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[1]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID01",
                  "summonLocation": "AfterCaster"
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
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}