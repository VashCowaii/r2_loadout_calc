const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_RogueRage_Enhance",
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
      "modifier": "<a class=\"gModGreen\" id=\"-843474776\">Modifier_BattleEventAbility_RogueRage_Enhance</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1642750548\">Modifier_BattleEventAbility_RogueRage_Speed_Enhance</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-843474776\">Modifier_BattleEventAbility_RogueRage_Enhance</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1642750548\">Modifier_BattleEventAbility_RogueRage_Speed_Enhance</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_DamageUpTimes",
              "value": {
                "operator": "Variables[0] (MDF_DamageUpTimes) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(MDF_DamageUpTimes + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_DamageUpTimes"
                ]
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2140377444\">Monster_RogueElite_DamageUp</a>[<span class=\"descriptionNumberColor\">Berserk</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2140377444\">Monster_RogueElite_DamageUp</a>[<span class=\"descriptionNumberColor\">Berserk</span>]",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P1_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P1_ADF"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2140377444\">Monster_RogueElite_DamageUp</a>[<span class=\"descriptionNumberColor\">Berserk</span>]",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P1_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P1_ADF"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_DamageUpTimes) || RETURN",
                        "displayLines": "MDF_DamageUpTimes",
                        "constants": [],
                        "variables": [
                          "MDF_DamageUpTimes"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1642750548\">Modifier_BattleEventAbility_RogueRage_Speed_Enhance</a>"
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Advance",
                  "multiAdd": -0.1
                }
              ],
              "failed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Advance",
                  "multiAdd": -0.05
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1642750548\">Modifier_BattleEventAbility_RogueRage_Speed_Enhance</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "value": -50
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}