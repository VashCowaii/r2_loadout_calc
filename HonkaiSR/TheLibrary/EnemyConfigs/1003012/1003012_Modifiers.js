const configAbility = {
  "fileName": "1003012_Modifiers",
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
      "for": "MW1_Soldier03_RL_AIFlag"
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_Soldier03_BattleScore1",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "W1_Soldier03_00_BattleScore2_Flag"
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W1_Soldier"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "W1_Soldier03_00_BattleScore2_Flag",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "value1": "W1_Soldier03_00_BattleScore1_Flag",
                "compareType": ">=",
                "value2": 4,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Attack! No Matter the Cost!",
                      "desc": "Trigger Silvermane Lieutenant's Shield Reflect at least #1[i] time(s) and defeat it",
                      "rarity": "Low",
                      "params": [
                        4
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W1_Soldier03_00_BattleScore2_Flag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Decapitation Strike",
                      "desc": "Defeat the Silvermane Lieutenant without defeating any Silvermane Guards",
                      "rarity": "Mid"
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
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Soldier03_LoseShieldInCtrl",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_Soldier03_PassiveAbilityInsert",
                  "priorityTag": "MonsterChangeState",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
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
      "for": "Enemy_W1_Soldier03_ListenBeingAttacked[<span class=\"descriptionNumberColor\">Counter</span>]",
      "modifierFlags": [
        "MuteHitH",
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Set Shield State/Value"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "ReturnAttackCounter"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Shield State/Value",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 1003011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Silvermane Lieutenant (Bug)"
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "When attacked, performs a powerful Counter on the attacker. Remains in the Counter state as long as there are other enemy targets on the field."
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "ReturnAttackCounter",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "W1_Soldier03_00_BattleScore1_Flag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W1_Soldier03_00_BattleScore1_Flag"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "W1_Soldier03_00_BattleScore1_Flag",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 4
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 1003011,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Silvermane Lieutenant (Bug)"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "W1_Soldier03_00_InsertAttackFlag",
                            "compareType": "=",
                            "value2": 0,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "NOT",
                            "condition": {
                              "name": "Has Param Flag",
                              "flagName": "IsFakeAvatarAttack"
                            }
                          },
                          {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Currency Wars Full OffFieldList}}"
                            },
                            "mustBeAlive2": true,
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "W1_Soldier03_00_InsertAttackFlag",
                          "value": 1
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W1_Soldier03_AbilityP06_Part01",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "MonsterInsertAttackSelf",
                          "showInActionOrder": true,
                          "abortFlags": [
                            "STAT_CTRL",
                            "DisableAction",
                            "Break"
                          ],
                          "allowAbilityTriggers": false
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
                            "name": "NOT",
                            "condition": {
                              "name": "Has Param Flag",
                              "flagName": "IsFakeAvatarAttack"
                            }
                          },
                          {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Currency Wars Full OffFieldList}}"
                            },
                            "mustBeAlive2": true,
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "ReturnAttackCounter",
                          "value": 1
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W1_Soldier03_Ability06_Insert_Part01",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "MonsterInsertAttackSelf",
                          "showInActionOrder": true,
                          "abortFlags": [
                            "STAT_CTRL",
                            "DisableAction",
                            "Break"
                          ],
                          "allowAbilityTriggers": false
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
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "ReturnAttackCounter"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase1"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 1003011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Silvermane Lieutenant (Bug)"
              },
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W1_Soldier03_00_AICounter",
                  "value": 1
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Uses a Powerful Counter on the attacker after being attacked.",
      "type": "Buff",
      "effectName": "Counter",
      "statusName": "Counter"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Soldier03_HoldShield",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "W1_Soldier03_00_AICounter",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "W1_Soldier03_00_InsertAttackFlag"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Soldier03_ShieldControl",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "W1_Soldier03_00_InsertFlag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Teammate",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W1_Soldier03_00_InsertFlag",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Monster_W1_Soldier03_HoldShield"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Monster_W1_Soldier03_HoldShield"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W1_Soldier03_PassiveAbilityInsert",
                          "priorityTag": "MonsterChangeState",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "W1_Soldier03_00_AICounter",
                          "value": 1
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
          "eventTrigger": "Entity Left Battle [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "W1_Soldier03_00_InsertFlag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Teammate",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W1_Soldier03_00_InsertFlag",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Monster_W1_Soldier03_HoldShield"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Monster_W1_Soldier03_HoldShield"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W1_Soldier03_PassiveAbilityInsert",
                          "priorityTag": "MonsterChangeState",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "W1_Soldier03_00_AICounter",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "W1_Soldier03_00_SummonCounter",
        "W1_Soldier03_00_AICounter"
      ]
    }
  ],
  "references": []
}