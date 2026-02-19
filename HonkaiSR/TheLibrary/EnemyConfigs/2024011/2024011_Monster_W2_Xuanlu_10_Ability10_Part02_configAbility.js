const configAbility = {
  "fileName": "2024011_Monster_W2_Xuanlu_10_Ability10_Part02",
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
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill10[0]]}) || RETURN",
            "displayLines": "{[Skill10[0]]}",
            "constants": [],
            "variables": [
              "{[Skill10[0]]}"
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
              "locationType": "AroundCasterOnEdge"
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
            "operator": "Variables[0] ({[Skill10[1]]}) || RETURN",
            "displayLines": "{[Skill10[1]]}",
            "constants": [],
            "variables": [
              "{[Skill10[1]]}"
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
              "locationType": "AroundCasterOnEdge"
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
    },
    "Trigger: Ability End"
  ],
  "references": []
}