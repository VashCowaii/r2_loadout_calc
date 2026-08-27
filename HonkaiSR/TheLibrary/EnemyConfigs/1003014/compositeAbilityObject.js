const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 1003014,
  "trimCharacterName": 1003014,
  "abilityList": [
    "1003014_Modifiers",
    "1003014_Monster_W1_Soldier03_Ability03_Part01_FateRin_Insert",
    "1003014_Monster_W1_Soldier03_PassiveAbilityInitiate_FateRin",
    "1003014_Monster_W1_Soldier03_Ability03_Camera_FateRin_01",
    "1003014_Monster_W1_Soldier03_Ability03_Part02_FateRin",
    "1003014_Monster_W1_Soldier03_Ability03_Part01_FateRin",
    "1003014_Monster_W1_Soldier03_Ability03_Camera_FateRin_02",
    "1003014_Monster_W1_Soldier03_Ability02_Part02_FateRin",
    "1003014_Monster_W1_Soldier03_Ability02_Part01_FateRin",
    "1003014_Monster_W1_Soldier03_Ability07_Camera_FateRin",
    "1003014_Monster_W1_Soldier03_Ability01_Part02",
    "1003014_Monster_W1_Soldier03_Ability01_Part01",
    "1003014_Handling"
  ],
  "abilityObject": {
    "1003014_Modifiers": {
      "fileName": "1003014_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-35846482\">Enemy_W1_Soldier03_BattleScore1</a>",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__291277050\">Monster_W1_Soldier03_LoseShieldInCtrl</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Anyone]: End",
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
                      "priorityTag": "EnemyChangeState",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-387357924\">Enemy_W1_Soldier03_ListenBeingAttacked</a>[<span class=\"descriptionNumberColor\">Counter</span>]",
          "modifierFlags": [
            "MuteHitH",
            "ListenBattleEventSkill"
          ],
          "description": "Uses a Powerful Counter on the attacker after being attacked.",
          "type": "Buff",
          "effectName": "Counter",
          "statusName": "Counter",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class"
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
                  "name": "Set Hit-Class",
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
              "eventTrigger": "Being Attacked [Owner]: End",
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
                              "priorityTag": "EnemyAttackFromSelf",
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
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "Monster_W1_Soldier03_Ability06_Insert_Part01",
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "priorityTag": "EnemyAttackFromSelf",
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
                  "name": "Change Entity Turn-State",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1398382688\">Monster_W1_Soldier03_HoldShield</a>",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1997793398\">Monster_W1_Soldier03_ShieldControl</a>",
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1398382688\">Monster_W1_Soldier03_HoldShield</a>"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1398382688\">Monster_W1_Soldier03_HoldShield</a>"
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W1_Soldier03_PassiveAbilityInsert",
                              "priorityTag": "EnemyChangeState",
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1398382688\">Monster_W1_Soldier03_HoldShield</a>"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1398382688\">Monster_W1_Soldier03_HoldShield</a>"
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W1_Soldier03_PassiveAbilityInsert",
                              "priorityTag": "EnemyChangeState",
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
          ]
        }
      ],
      "references": []
    },
    "1003014_Monster_W1_Soldier03_Ability03_Part01_FateRin_Insert": {
      "fileName": "1003014_Monster_W1_Soldier03_Ability03_Part01_FateRin_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"623050592\">Enemy_W1_Soldier03_Passive_FateRin_DamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]"
        },
        {
          "name": "Consume",
          "consumeFrom": "CurrentHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": 0.8,
          "consumeFloor": 1
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1003014_Monster_W1_Soldier03_PassiveAbilityInitiate_FateRin": {
      "fileName": "1003014_Monster_W1_Soldier03_PassiveAbilityInitiate_FateRin",
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
          "modifier": "<a class=\"gModGreen\" id=\"-35846482\">Enemy_W1_Soldier03_BattleScore1</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W1_Soldier03_00_SummonCounter"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W1_Soldier03_00_AICounter",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1019940220\">Enemy_Standard_HideMonsterHUD</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-888445549\">Enemy_W1_Soldier03_NoInsert</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-746711674\">Enemy_W1_Soldier03_Passive_FateRin</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-888445549\">Enemy_W1_Soldier03_NoInsert</a>",
          "latentQueue": [
            "W1_Soldier03_00_SummonCounter",
            "W1_Soldier03_00_AICounter"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking Modifier Instance [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1158230799\">Enemy_W1_Soldier04_AbilityP01_EnterBattle</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1158230799\">Enemy_W1_Soldier04_AbilityP01_EnterBattle</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__623050592\">Enemy_W1_Soldier03_Passive_FateRin_DamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "description": "DMG taken decreases <span class=\"descriptionNumberColor\">ReduceRatio</span>.",
          "type": "Other",
          "effectName": "DMG Mitigation",
          "statusName": "DMG Mitigation",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ReduceRatio) || RETURN",
                    "displayLines": "ReduceRatio",
                    "constants": [],
                    "variables": [
                      "ReduceRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-746711674\">Enemy_W1_Soldier03_Passive_FateRin</a>",
          "latentQueue": [
            "W1_Soldier03_00_SummonCounter",
            "W1_Soldier03_00_AICounter"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"623050592\">Enemy_W1_Soldier03_Passive_FateRin_DamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
                  "valuePerStack": {
                    "ReduceRatio": 0.9
                  }
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_Soldier03_Ability02_Part01_FateRin",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ]
    },
    "1003014_Monster_W1_Soldier03_Ability03_Camera_FateRin_01": {
      "fileName": "1003014_Monster_W1_Soldier03_Ability03_Camera_FateRin_01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "1003014_Monster_W1_Soldier03_Ability03_Part02_FateRin": {
      "fileName": "1003014_Monster_W1_Soldier03_Ability03_Part02_FateRin",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "1003014_Monster_W1_Soldier03_Ability03_Part01_FateRin": {
      "fileName": "1003014_Monster_W1_Soldier03_Ability03_Part01_FateRin",
      "childAbilityList": [
        "1003014_Monster_W1_Soldier03_Ability03_Camera_FateRin_02",
        "1003014_Monster_W1_Soldier03_Ability03_Part01_FateRin",
        "1003014_Monster_W1_Soldier03_Ability03_Part02_FateRin",
        "1003014_Monster_W1_Soldier03_Ability03_Camera_FateRin_01"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Inject Ability Use",
          "abilityName": "Monster_W1_Soldier03_Ability03_Part01_FateRin_Insert",
          "abilitySource": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "allowAbilityTriggers": false
        },
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_Soldier03_Ability03_Part02_FateRin",
          "isTrigger": true
        },
        {
          "name": "UI Display Event",
          "popUpText": "Generates \"Gate of Babylon!\" when drawing cards."
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "1003014_Monster_W1_Soldier03_Ability03_Camera_FateRin_02": {
      "fileName": "1003014_Monster_W1_Soldier03_Ability03_Camera_FateRin_02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "1003014_Monster_W1_Soldier03_Ability02_Part02_FateRin": {
      "fileName": "1003014_Monster_W1_Soldier03_Ability02_Part02_FateRin",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Find a way to defend against the Gáe Bolg's attacks!"
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1003014_Monster_W1_Soldier03_Ability02_Part01_FateRin": {
      "fileName": "1003014_Monster_W1_Soldier03_Ability02_Part01_FateRin",
      "childAbilityList": [
        "1003014_Monster_W1_Soldier03_Ability07_Camera_FateRin",
        "1003014_Monster_W1_Soldier03_Ability02_Part01_FateRin",
        "1003014_Monster_W1_Soldier03_Ability02_Part02_FateRin"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_Soldier03_Ability02_Part02_FateRin",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1003014_Monster_W1_Soldier03_Ability07_Camera_FateRin": {
      "fileName": "1003014_Monster_W1_Soldier03_Ability07_Camera_FateRin",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "1003014_Monster_W1_Soldier03_Ability01_Part02": {
      "fileName": "1003014_Monster_W1_Soldier03_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "1003014_Monster_W1_Soldier03_Ability01_Part01": {
      "fileName": "1003014_Monster_W1_Soldier03_Ability01_Part01",
      "childAbilityList": [
        "1003014_Monster_W1_Soldier03_Ability01_Camera",
        "1003014_Monster_W1_Soldier03_Ability01_Part01",
        "1003014_Monster_W1_Soldier03_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_Soldier03_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "from": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "to": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "Distance_Between_Entities",
            "compareType": ">",
            "value2": 0
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "1003014_Handling": {
      "fileName": "1003014_Handling",
      "abilityType": "Handling",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler String",
              "variableName": "CurrentPhase",
              "value": "RO_015_Phase01"
            },
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill01",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W1_Soldier03_00_AICounter",
                      "value": 2
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill01"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "W1_Soldier03_00_AICounter",
                    "compareType": ">",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill03",
              "goal": [
                {
                  "name": "Sequence Event",
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W1_Soldier03_00_AICounter",
                      "value": 2
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill03"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "W1_Soldier03_00_AICounter",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}