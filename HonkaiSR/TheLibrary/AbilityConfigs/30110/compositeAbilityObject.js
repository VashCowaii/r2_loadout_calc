const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 30110,
  "trimCharacterName": 30110,
  "abilityList": [
    "30110_Modifiers",
    "30110_BattleEventAbility_Challenge_Month_10"
  ],
  "abilityObject": {
    "30110_Modifiers": {
      "fileName": "30110_Modifiers",
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
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
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
    },
    "30110_BattleEventAbility_Challenge_Month_10": {
      "fileName": "30110_BattleEventAbility_Challenge_Month_10",
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
          "modifier": "<a class=\"gModGreen\" id=\"1120122622\">Modifier_BattleEventAbility_Challenge_Month_10</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1406945547\">MLevel_BattleEventAbility_Challenge_Month_10_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
          "stackType": "Replace",
          "description": "Each stack decreases DMG received by <span class=\"descriptionNumberColor\">#BattleEvent_P1_ADF</span>, up to <span class=\"descriptionNumberColor\">_MaxLayer</span> stack(s).",
          "type": "Buff",
          "effectName": "DMG Mitigation",
          "statusName": "Memory Imprint",
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
                  "variableName": "_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (#BattleEvent_P1_ADF) || Variables[1] (_Layer) || MUL || RETURN",
                    "displayLines": "(#BattleEvent_P1_ADF * _Layer)",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P1_ADF",
                      "_Layer"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-544322984\">MLevel_BattleEventAbility_Challenge_Month_10</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Param Flag",
                          "flagName": "IsHPChangeByDamage"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1406945547\">MLevel_BattleEventAbility_Challenge_Month_10_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                        "displayLines": "#BattleEvent_P2_ADF",
                        "constants": [],
                        "variables": [
                          "#BattleEvent_P2_ADF"
                        ]
                      },
                      "valuePerStack": {
                        "_MaxLayer": {
                          "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P2_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P2_ADF"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1406945547\">MLevel_BattleEventAbility_Challenge_Month_10_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P2_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P2_ADF"
                    ]
                  },
                  "valuePerStack": {
                    "_MaxLayer": {
                      "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P2_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P2_ADF"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1120122622\">Modifier_BattleEventAbility_Challenge_Month_10</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1406945547\">MLevel_BattleEventAbility_Challenge_Month_10_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "valueType": "Layer",
                      "variableName": "Temp_MDF_Layer",
                      "modifierName": "<a class=\"gModGreen\" id=\"-1406945547\">MLevel_BattleEventAbility_Challenge_Month_10_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Temp_MDF_Layer",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (MDF_Layer) || RETURN",
                          "displayLines": "MDF_Layer",
                          "constants": [],
                          "variables": [
                            "MDF_Layer"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Layer",
                          "value": {
                            "operator": "Variables[0] (Temp_MDF_Layer) || RETURN",
                            "displayLines": "Temp_MDF_Layer",
                            "constants": [],
                            "variables": [
                              "Temp_MDF_Layer"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Layer",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "ability": "BattleEventAbility_Camear_AllDarkTeam",
                      "isTrigger": true
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "operator": "Variables[0] (#BattleEvent_P3_ADF) || Variables[1] (MDF_Layer) || MUL || RETURN",
                          "displayLines": "(#BattleEvent_P3_ADF * MDF_Layer)",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P3_ADF",
                            "MDF_Layer"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "DOT"
                      }
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1406945547\">MLevel_BattleEventAbility_Challenge_Month_10_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Layer",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Temp_MDF_Layer",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-544322984\">MLevel_BattleEventAbility_Challenge_Month_10</a>"
                }
              ]
            }
          ]
        }
      ]
    }
  },
  "enemyData": {},
  "isBattleEvent": true
}