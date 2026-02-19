const configAbility = {
  "fileName": "2024013_Monster_W2_Xuanlu_Extra_Ability12_Part02",
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
                    "operator": "Variables[0] (SummonMinionID_3) || RETURN",
                    "displayLines": "SummonMinionID_3",
                    "constants": [],
                    "variables": [
                      "SummonMinionID_3"
                    ]
                  },
                  "locationType": "BeforeCaster"
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
          "modifier": "<a class=\"gModGreen\" id=\"1302509608\">Enemy_W2_Xuanlu_Extra_MinionMark_3</a>",
          "valuePerStack": {
            "MDF_MaxMinionCount": 1
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}