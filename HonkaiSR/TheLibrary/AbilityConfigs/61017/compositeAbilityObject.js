const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 61017,
  "trimCharacterName": 61017,
  "abilityList": [
    "61017_Modifiers",
    "61017_BattleEventAbility_SummonMonsterInfinite_Fuyan",
    "61017_BattleEventAbility_SummonMonsterInfinite_Fuyan_Insert",
    "61017_BattleEventAbility_SummonMonsterInfinite_Fuyan_Camera"
  ],
  "abilityObject": {
    "61017_Modifiers": {
      "fileName": "61017_Modifiers",
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
    },
    "61017_BattleEventAbility_SummonMonsterInfinite_Fuyan": {
      "fileName": "61017_BattleEventAbility_SummonMonsterInfinite_Fuyan",
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
          "modifier": "<a class=\"gModGreen\" id=\"521512603\">BattleEventAbility_SummonMonsterInfinite_Fuyan_Modifier</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1528480436\">Modifier_Infinite_Summon_Level</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1528480436\">Modifier_Infinite_Summon_Level</a>",
          "execute": [
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "popUpText": "Enemy Reinforcement"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__521512603\">BattleEventAbility_SummonMonsterInfinite_Fuyan_Modifier</a>",
          "modifierFlags": [
            "CustomEvent_InfiniteDoSummon"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Insert_Flag"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_SummonMonsterInfinite_Fuyan_Insert"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_SummonMonsterInfinite_Fuyan_Camera"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"269952436\">InfiniteWave_SummonMonster_Fuyan</a>",
                  "isGlobal": true,
                  "variables": {
                    "ManuallySummon_Flag": 0
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Left Battle [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"269952436\">InfiniteWave_SummonMonster_Fuyan</a>",
                  "isGlobal": true,
                  "variables": {
                    "ManuallySummon_Flag": 0
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"269952436\">InfiniteWave_SummonMonster_Fuyan</a>",
                  "isGlobal": true,
                  "variables": {
                    "ManuallySummon_Flag": 1
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "61017_BattleEventAbility_SummonMonsterInfinite_Fuyan_Insert": {
      "fileName": "61017_BattleEventAbility_SummonMonsterInfinite_Fuyan_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "In Aha-Instant"
          },
          "passed": [
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Dying Enemies}}"
              },
              "dieNow": true
            }
          ],
          "failed": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters"
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Insert_Flag"
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Infinite Enemy Waves Remain",
                "totalRank": 7
              }
            ]
          },
          "Event": [
            {
              "name": "Update Next Wave Enemy",
              "context": "ContextAbility",
              "enemyID": "Value_NextMonsterId",
              "activityGroupScaling": "Value_NextMonsterEliteGroup",
              "slot": "Value_MonsterSlotKey"
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                "displayLines": "#BattleEvent_P1_ADF",
                "constants": [],
                "variables": [
                  "#BattleEvent_P1_ADF"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (Value_NextMonsterId) || RETURN",
                    "displayLines": "Value_NextMonsterId",
                    "constants": [],
                    "variables": [
                      "Value_NextMonsterId"
                    ]
                  },
                  "locationType": "FormationRecord",
                  "overrideActivityGroup": {
                    "operator": "Variables[0] (Value_NextMonsterEliteGroup) || RETURN",
                    "displayLines": "Value_NextMonsterEliteGroup",
                    "constants": [],
                    "variables": [
                      "Value_NextMonsterEliteGroup"
                    ]
                  },
                  "slot": {
                    "operator": "Variables[0] (Value_MonsterSlotKey) || RETURN",
                    "displayLines": "Value_MonsterSlotKey",
                    "constants": [],
                    "variables": [
                      "Value_MonsterSlotKey"
                    ]
                  }
                }
              ]
            },
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "popUpText": "Enemy Reinforcement"
            }
          ]
        },
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Target Name",
            "target": "{{Every Battle Entity}}"
          },
          "variableName": null,
          "eventType": "InfiniteRefresh",
          "value": null
        },
        {
          "name": "IF",
          "conditions": {
            "name": "In Aha-Instant"
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "61017_BattleEventAbility_SummonMonsterInfinite_Fuyan_Camera": {
      "fileName": "61017_BattleEventAbility_SummonMonsterInfinite_Fuyan_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      }
    }
  },
  "enemyData": {
    "SkillP01": {
      "skillID": 6100901,
      "trigger": "SkillP01",
      "name": null,
      "type": "Talent",
      "slot": "Path Resonance",
      "desc": "",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": []
      },
      "skillEffect": "Passive",
      "maxLevel": 1,
      "configAbilityList": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}