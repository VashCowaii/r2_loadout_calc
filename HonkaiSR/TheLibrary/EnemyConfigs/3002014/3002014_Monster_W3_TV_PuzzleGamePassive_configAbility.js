const configAbility = {
  "fileName": "3002014_Monster_W3_TV_PuzzleGamePassive",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1430956299\">MModifier_Monster_W3_TV_SideCheck</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1233820232\">MModifier_Monster_W3_TV_ATMark</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__951989121\">MModifier_Monster_W3_TV_RemoveMark</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "BattleEventAbility_Monster_W3_TV_PuzzleAbility",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "EnemyChangeState",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1430956299\">MModifier_Monster_W3_TV_SideCheck</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Varying Data",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MonsterIDSelf",
              "value": "TargetCharacterID"
            },
            {
              "name": "Add Stage Ability",
              "abilityName": "BattleEventAbility_Monster_W3_TV_PuzzleAbility",
              "parameters": {}
            }
          ]
        },
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Target Right of Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Target Left of Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder and Adjacent Targets}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"951989121\">MModifier_Monster_W3_TV_RemoveMark</a>"
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
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value": "MonsterType_W3_TV_00"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Target Right of Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Target Left of Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder and Adjacent Targets}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"951989121\">MModifier_Monster_W3_TV_RemoveMark</a>"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (MonsterIDSelf) || RETURN",
                          "displayLines": "MonsterIDSelf",
                          "constants": [],
                          "variables": [
                            "MonsterIDSelf"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Target Right of Caster}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (MonsterIDSelf) || RETURN",
                          "displayLines": "MonsterIDSelf",
                          "constants": [],
                          "variables": [
                            "MonsterIDSelf"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Target Left of Caster}}"
                        },
                        "characterName": null
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder and Adjacent Targets}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"951989121\">MModifier_Monster_W3_TV_RemoveMark</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"951989121\">MModifier_Monster_W3_TV_RemoveMark</a>"
              },
              "passed": [
                {
                  "name": "Set HP Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "setValue": 1
                },
                {
                  "name": "Lock HP",
                  "threshold": 0.000010000076
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value": "MonsterType_W3_TV_00"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Target Right of Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Target Left of Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder and Adjacent Targets}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"951989121\">MModifier_Monster_W3_TV_RemoveMark</a>"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (MonsterIDSelf) || RETURN",
                          "displayLines": "MonsterIDSelf",
                          "constants": [],
                          "variables": [
                            "MonsterIDSelf"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Target Right of Caster}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (MonsterIDSelf) || RETURN",
                          "displayLines": "MonsterIDSelf",
                          "constants": [],
                          "variables": [
                            "MonsterIDSelf"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Target Left of Caster}}"
                        },
                        "characterName": null
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder and Adjacent Targets}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"951989121\">MModifier_Monster_W3_TV_RemoveMark</a>"
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
  ]
}