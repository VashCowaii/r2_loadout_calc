const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_RogueDLCReinforce",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1921898846\">Modifier_BattleEventAbility_RogueDLCReinforce</a>"
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "advanceType": "Advance",
      "multiAdd": -0.5
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1921898846\">Modifier_BattleEventAbility_RogueDLCReinforce</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemy Team is Dead",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<",
                    "value2": 5
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "displayLines": "#BattleEvent_P1_ADF"
                    }
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
                        "stateType": "Left"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "displayLines": "8022020"
                              },
                              "locationType": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "displayLines": "8022020"
                              },
                              "locationType": "Last"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "team": "Enemy Team",
                        "stateType": "Left"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.5,
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "displayLines": "8022010"
                              },
                              "locationType": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.5,
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "displayLines": "8022010"
                              },
                              "locationType": "Last"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}