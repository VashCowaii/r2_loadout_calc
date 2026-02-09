const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_Challenge_Xianzhou_01",
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
      "modifier": "<a class=\"gModGreen\" id=\"351308596\">Modifier_BattleEventAbility_Challenge_Xianzhou_01</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__613022705\">Modifier_BattleEventAbility_Challenge_Xianzhou_01_Sub</a>",
      "modifierFlags": [
        "Deathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "BattleEventAbility_Challenge_Xianzhou_01_Camera"
            },
            {
              "name": "Add Ability",
              "abilityName": "BattleEventAbility_Challenge_Xianzhou_01_Insert"
            }
          ]
        },
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "BattleEventAbility_Challenge_Xianzhou_01_Insert",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "MonsterDeathRattle",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "valuePerStack": {
                "MDF_DamageValue2": {
                  "operator": "Variables[0] (MDF_DamageValue) || RETURN",
                  "displayLines": "MDF_DamageValue",
                  "constants": [],
                  "variables": [
                    "MDF_DamageValue"
                  ]
                }
              },
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__351308596\">Modifier_BattleEventAbility_Challenge_Xianzhou_01</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy Team is Dead",
                "invertCondition": true
              },
              "passed": [
                "Deleted bullshit",
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 202301010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Disciples of Sanctus Medicus: Shape Shifter"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 2022010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Mara-Struck Soldier"
                      }
                    ]
                  },
                  "ifTargetFound": [
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
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (2022010) || RETURN",
                            "displayLines": "2022010",
                            "constants": [
                              2022010
                            ],
                            "variables": []
                          },
                          "locationType": "First"
                        }
                      ]
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
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (2022010) || RETURN",
                            "displayLines": "2022010",
                            "constants": [
                              2022010
                            ],
                            "variables": []
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ],
                  "noTargetFound": [
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
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (2022040) || RETURN",
                            "displayLines": "2022040",
                            "constants": [
                              2022040
                            ],
                            "variables": []
                          },
                          "locationType": "First"
                        }
                      ]
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
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (2022040) || RETURN",
                            "displayLines": "2022040",
                            "constants": [
                              2022040
                            ],
                            "variables": []
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
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "BattleEventAbility_SummonMonsterInfinite_Camera"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "TempHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"613022705\">Modifier_BattleEventAbility_Challenge_Xianzhou_01_Sub</a>",
              "valuePerStack": {
                "MDF_DamageValue": {
                  "operator": "Variables[0] (TempHP) || Variables[1] (#BattleEvent_P2_ADF) || MUL || RETURN",
                  "displayLines": "(TempHP * #BattleEvent_P2_ADF)",
                  "constants": [],
                  "variables": [
                    "TempHP",
                    "#BattleEvent_P2_ADF"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"613022705\">Modifier_BattleEventAbility_Challenge_Xianzhou_01_Sub</a>",
                  "valuePerStack": {
                    "MDF_DamageValue": {
                      "operator": "Variables[0] (TempHP) || Variables[1] (#BattleEvent_P2_ADF) || MUL || RETURN",
                      "displayLines": "(TempHP * #BattleEvent_P2_ADF)",
                      "constants": [],
                      "variables": [
                        "TempHP",
                        "#BattleEvent_P2_ADF"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}