const configAbility = {
  "fileName": "2024015_Monster_W2_Xuanlu_10_Ability10_Part02",
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
            "displayLines": "{[Skill10[0]]}"
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "displayLines": "SummonMinionID_1"
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
            "displayLines": "{[Skill10[1]]}"
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "displayLines": "SummonMinionID_1"
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
          "displayLines": "SummonMinionID_1"
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
              "displayLines": "MaxMinionCount"
            }
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}