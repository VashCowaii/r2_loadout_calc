const compositeAbilityObject = {
  "fullCharacterName": "Messenger Traversing Hackerspace",
  "trimCharacterName": "MessengerTraversingHackerspace",
  "abilityList": [
    "MessengerTraversingHackerspace_Ability51141"
  ],
  "abilityObject": {
    "MessengerTraversingHackerspace_Ability51141": {
      "fileName": "MessengerTraversingHackerspace_Ability51141",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Relic_114_Main"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Relic_114_AbilityPreShowModifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_114_AbilityPreShowModifier",
          "stackType": "ReplaceByCaster",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "skillType": [
              "Ultimate"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Relic_114_Sub[<span class=\"descriptionNumberColor\">Messenger Traversing Hackerspace</span>]",
                  "invertCondition": true
                },
                {
                  "name": "Is Part Of Team",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Indicator Target List}}"
                  },
                  "team": "TeamLight"
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0.12(SPD Change)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_114_Sub[<span class=\"descriptionNumberColor\">Messenger Traversing Hackerspace</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.12) || RETURN",
                    "displayLines": "0.12",
                    "constants": [],
                    "variables": [
                      0.12
                    ]
                  }
                }
              ]
            }
          ],
          "description": "SPD +<span class=\"descriptionNumberColor\">#SkillRelic_114_4_P1_SpeedAddRatio</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "Messenger Traversing Hackerspace"
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_114_Main",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Ability Target List}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "mustBeAlive2": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "Relic_114_Sub[<span class=\"descriptionNumberColor\">Messenger Traversing Hackerspace</span>]",
                          "duration": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "isRelic": true,
      "desc": [
        "Increases SPD by 6%.",
        "When the wearer uses their Ultimate on an ally, SPD for all allies increases by 12% for 1 turn(s). This effect cannot be stacked."
      ],
      "params": [
        [
          0.06
        ],
        [
          0.12,
          1
        ]
      ]
    }
  },
  "fixedStats": {
    "2": {
      "SPD%": 0.06
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}