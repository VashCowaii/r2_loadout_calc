const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 30102,
  "trimCharacterName": 30102,
  "abilityList": [
    "30102_BattleEventAbility_Challenge_Month_02",
    "30102_Modifiers"
  ],
  "abilityObject": {
    "30102_BattleEventAbility_Challenge_Month_02": {
      "fileName": "30102_BattleEventAbility_Challenge_Month_02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-892941395\">Modifier_BattleEventAbility_Challenge_Month_02</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1670469819\">MLevel_BattleEventAbility_Challenge_Month_02</a>[<span class=\"descriptionNumberColor\">CRIT Rate, CRIT DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases CRIT Rate by <span class=\"descriptionNumberColor\">ADF_2</span> and CRIT DMG by <span class=\"descriptionNumberColor\">ADF_1</span>. Can stack up to 3 times.",
          "type": "Buff",
          "effectName": "CRIT Rate, CRIT DMG Boost",
          "statusName": "CRIT Rate, CRIT DMG Boost",
          "stackLimit": 3,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ADF_1) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(ADF_1 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "ADF_1",
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ADF_2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(ADF_2 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "ADF_2",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-892941395\">Modifier_BattleEventAbility_Challenge_Month_02</a>",
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
                  "maxTargets": 4,
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1670469819\">MLevel_BattleEventAbility_Challenge_Month_02</a>[<span class=\"descriptionNumberColor\">CRIT Rate, CRIT DMG Boost</span>]",
                      "duration": {
                        "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                        "displayLines": "#BattleEvent_P3_ADF",
                        "constants": [],
                        "variables": [
                          "#BattleEvent_P3_ADF"
                        ]
                      },
                      "stackLimit": {
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
                          "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P1_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P1_ADF"
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
    "30102_Modifiers": {
      "fileName": "30102_Modifiers",
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