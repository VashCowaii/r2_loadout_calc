const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 30023,
  "trimCharacterName": 30023,
  "abilityList": [
    "30023_BattleEventAbility_Challenge_New_06",
    "30023_Modifiers"
  ],
  "abilityObject": {
    "30023_BattleEventAbility_Challenge_New_06": {
      "fileName": "30023_BattleEventAbility_Challenge_New_06",
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
          "modifier": "<a class=\"gModGreen\" id=\"872867625\">Modifier_BattleEventAbility_Challenge_New_06</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1602534417\">MLevel_BattleEventAbility_Challenge_New_06</a>[<span class=\"descriptionNumberColor\">CRIT Rate and CRIT DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases CRIT Rate by <span class=\"descriptionNumberColor\">ADF_1</span> and CRIT DMG by <span class=\"descriptionNumberColor\">ADF_2</span>.",
          "type": "Buff",
          "effectName": "CRIT Rate and CRIT DMG Boost",
          "statusName": "CRIT Rate and CRIT DMG Boost",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ADF_1) || RETURN",
                    "displayLines": "ADF_1",
                    "constants": [],
                    "variables": [
                      "ADF_1"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ADF_2) || RETURN",
                    "displayLines": "ADF_2",
                    "constants": [],
                    "variables": [
                      "ADF_2"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__872867625\">Modifier_BattleEventAbility_Challenge_New_06</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Player Team Entity}}"
                  },
                  "ability": "BattleEventAbility_Camear_AllLightTeam",
                  "isTrigger": true
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P1_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P1_ADF"
                      ]
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1602534417\">MLevel_BattleEventAbility_Challenge_New_06</a>[<span class=\"descriptionNumberColor\">CRIT Rate and CRIT DMG Boost</span>]",
                      "duration": {
                        "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
                        "displayLines": "#BattleEvent_P4_ADF",
                        "constants": [],
                        "variables": [
                          "#BattleEvent_P4_ADF"
                        ]
                      },
                      "valuePerStack": {
                        "ADF_1": {
                          "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P2_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P2_ADF"
                          ]
                        },
                        "ADF_2": {
                          "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P3_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P3_ADF"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "30023_Modifiers": {
      "fileName": "30023_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1651606625\">MDF_RogueDLCAchievementListener</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "count",
                  "value": {
                    "operator": "Variables[0] (count) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(count + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "count"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "count",
                    "compareType": "=",
                    "value2": 10
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "All Watched Over By Machines of Loving Grace",
                          "desc": "In Simulated Universe: Gold and Gears, endure #1[i] or more Resonance Extrapolation(s) in a single battle",
                          "rarity": "Low",
                          "type": "Hidden until Completion",
                          "params": [
                            10
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1651606625\">MDF_RogueDLCAchievementListener</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1216668349\">Challenge_Camera_AllTeam_Temp_2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1216668349\">Challenge_Camera_AllTeam_Temp_2</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1166335492\">Challenge_Camera_AllTeam_Temp_1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1166335492\">Challenge_Camera_AllTeam_Temp_1</a>"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  },
  "enemyData": {},
  "isBattleEvent": true
}