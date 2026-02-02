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
      "modifier": "Modifier_FantasticStory_BaseAbility_2060_BeforeFever"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2060_BeforeFever",
      "stackType": "ReplaceByCaster",
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
                  "variableName": "DV_FantasticStory_BaseAbility_BirdAttackCount",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_BirdAttackCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_BirdAttackCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_BirdAttackCount"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_2060_BeforeFever_BirdAtkCount[<span class=\"descriptionNumberColor\">\"Resound\"</span>]",
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
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
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
                  "modifier": "Modifier_FantasticStory_BaseAbility_2060_BeforeFever_BirdAtkCount[<span class=\"descriptionNumberColor\">\"Resound\"</span>]",
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_BirdAttackCount) || RETURN",
                    "displayLines": "DV_FantasticStory_BaseAbility_BirdAttackCount",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_BirdAttackCount"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2060_BeforeFever_ForShow[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
          "haloStatus": true
        }
      ]
    }
  ]
}