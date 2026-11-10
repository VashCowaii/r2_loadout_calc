const configAbility = {
  "fileName": "-993122841_FantasticStory_BaseAbility_2060_BeforeFever",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"931941990\">Modifier_FantasticStory_BaseAbility_2060_BeforeFever</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__931941990\">Modifier_FantasticStory_BaseAbility_2060_BeforeFever</a>",
      "stackType": "ReplaceByCaster",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1271014269\">Modifier_FantasticStory_BaseAbility_2060_BeforeFever_ForShow</a>[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
          "haloStatus": true
        }
      ],
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(DV_FantasticStory_BaseAbility_BirdAttackCount + 1)"
                  },
                  "variableName": "DV_FantasticStory_BaseAbility_BirdAttackCount"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1883595095\">Modifier_FantasticStory_BaseAbility_2060_BeforeFever_BirdAtkCount</a>[<span class=\"descriptionNumberColor\">\"Resound\"</span>]",
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_BirdAttackCount",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1883595095\">Modifier_FantasticStory_BaseAbility_2060_BeforeFever_BirdAtkCount</a>[<span class=\"descriptionNumberColor\">\"Resound\"</span>]",
                  "addStacksPerTrigger": {
                    "displayLines": "DV_FantasticStory_BaseAbility_BirdAttackCount"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}