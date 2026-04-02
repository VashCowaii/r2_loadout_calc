const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60021,
  "trimCharacterName": 60021,
  "abilityList": [
    "60021_MissionBattleEvent60021_AbilityP01",
    "60021_MissionBattleEvent60021_Insert4",
    "60021_MissionBattleEvent60021_Insert3",
    "60021_MissionBattleEvent60021_Insert2",
    "60021_MissionBattleEvent60021_Insert1",
    "60021_MissionBattleEvent60021_Ability03_Camera",
    "60021_MissionBattleEvent60021_Ability03_Part02",
    "60021_MissionBattleEvent60021_Ability03_Part01",
    "60021_Modifiers",
    "60021_Functions"
  ],
  "abilityObject": {
    "60021_MissionBattleEvent60021_AbilityP01": {
      "fileName": "60021_MissionBattleEvent60021_AbilityP01",
      "childAbilityList": [
        "60021_MissionBattleEvent60021_AbilityP01",
        "60021_MissionBattleEvent60021_Insert1",
        "60021_MissionBattleEvent60021_Insert2",
        "60021_MissionBattleEvent60021_Insert3",
        "60021_MissionBattleEvent60021_Insert4"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        20,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-596105277\">MissionBattleEvent60021_PassiveAbility</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"528762090\">MissionBattleEvent60021_Charge</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-908385913\">MissionBattleEvent60021_AutoUseUltraAbility</a>"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
            "displayLines": "{[SkillP01[0]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[0]]}"
            ]
          },
          "isFixed": "(Fixed)"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-551659404\">MissionBattleEvent60021_Insert4_Modifier</a>",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-551659404\">MissionBattleEvent60021_Insert4_Modifier</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1021418696\">StageSpecialAbility_20412061_InBattle_BEBonus</a>[<span class=\"descriptionNumberColor\">Silver Wolf's Cheat Code</span>]"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Is_Triggered",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Is_Triggered",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__599594647\">MissionBattleEvent60021_Insert3_Modifier</a>",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"599594647\">MissionBattleEvent60021_Insert3_Modifier</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1021418696\">StageSpecialAbility_20412061_InBattle_BEBonus</a>[<span class=\"descriptionNumberColor\">Silver Wolf's Cheat Code</span>]"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Is_Triggered",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Is_Triggered",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__963165122\">MissionBattleEvent60021_Insert2_Modifier</a>",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"963165122\">MissionBattleEvent60021_Insert2_Modifier</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1021418696\">StageSpecialAbility_20412061_InBattle_BEBonus</a>[<span class=\"descriptionNumberColor\">Silver Wolf's Cheat Code</span>]"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Is_Triggered",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Is_Triggered",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__972086269\">MissionBattleEvent60021_Insert1_Modifier</a>",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"972086269\">MissionBattleEvent60021_Insert1_Modifier</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1021418696\">StageSpecialAbility_20412061_InBattle_BEBonus</a>[<span class=\"descriptionNumberColor\">Silver Wolf's Cheat Code</span>]"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Is_Triggered",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Is_Triggered",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1157711417\">MissionBattleEvent60021_TauntForAutoLock</a>",
          "modifierFlags": [
            "TauntForAutoLock"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 8007,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Trailblazer - Remembrance[M]"
                      },
                      {
                        "name": "Character ID",
                        "ID": 8008,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Trailblazer - Remembrance[F]"
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-745710374\">Memosprite_PlayerBoyServant_30_UltraBonus</a>[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-908385913\">MissionBattleEvent60021_AutoUseUltraAbility</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Automatically use Ultimate",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__528762090\">MissionBattleEvent60021_Charge</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Current Action Holder's Team",
                        "team": "Player Team"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Skill Type",
                          "skillType": "Ultimate"
                        }
                      }
                    ]
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
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-745710374\">Memosprite_PlayerBoyServant_30_UltraBonus</a>[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                          },
                          {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Target Name",
                              "target": "{{Parameter Target's Ability Targets}}"
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            },
                            "mustBeAlive2": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                            "displayLines": "{[SkillP01[2]]}",
                            "constants": [],
                            "variables": [
                              "{[SkillP01[2]]}"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                            "displayLines": "{[SkillP01[1]]}",
                            "constants": [],
                            "variables": [
                              "{[SkillP01[1]]}"
                            ]
                          },
                          "isFixed": "(Fixed)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-596105277\">MissionBattleEvent60021_PassiveAbility</a>",
          "modifierFlags": [
            "BlockDamage",
            "Stealth"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)",
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}} - {{All Memosprites}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1157711417\">MissionBattleEvent60021_TauntForAutoLock</a>"
                    }
                  ]
                }
              ],
              "priorityLevel": 999999
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeOverride": "Buff"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeOverride": "Other"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1446276332\">MissionBattleEvent60021_TriggerBEAbility</a>"
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valuePercent": 1,
                      "isFixed": "(Fixed)",
                      "isSetToValue": true
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-745710374\">Memosprite_PlayerBoyServant_30_UltraBonus</a>[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Character ID",
                        "ID": 1205,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Blade"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"972086269\">MissionBattleEvent60021_Insert1_Modifier</a>",
                          "duration": 3,
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__231) || RETURN",
                              "displayLines": "ENEMIES_OBJECT_UNUSED__231",
                              "constants": [],
                              "variables": [
                                "ENEMIES_OBJECT_UNUSED__231"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "MissionBattleEvent60021_Insert1",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Character ID",
                            "ID": 8007,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "Trailblazer - Remembrance[M]"
                          },
                          {
                            "name": "Character ID",
                            "ID": 8008,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "Trailblazer - Remembrance[F]"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"963165122\">MissionBattleEvent60021_Insert2_Modifier</a>",
                          "duration": 3,
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__231) || RETURN",
                              "displayLines": "ENEMIES_OBJECT_UNUSED__231",
                              "constants": [],
                              "variables": [
                                "ENEMIES_OBJECT_UNUSED__231"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "MissionBattleEvent60021_Insert2",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Character ID",
                        "ID": 1005,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Kafka"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"599594647\">MissionBattleEvent60021_Insert3_Modifier</a>",
                          "duration": 3,
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__231) || RETURN",
                              "displayLines": "ENEMIES_OBJECT_UNUSED__231",
                              "constants": [],
                              "variables": [
                                "ENEMIES_OBJECT_UNUSED__231"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "MissionBattleEvent60021_Insert3",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Character ID",
                        "ID": 1310,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Firefly"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-551659404\">MissionBattleEvent60021_Insert4_Modifier</a>",
                          "duration": 3,
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__231) || RETURN",
                              "displayLines": "ENEMIES_OBJECT_UNUSED__231",
                              "constants": [],
                              "variables": [
                                "ENEMIES_OBJECT_UNUSED__231"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "MissionBattleEvent60021_Insert4",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
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
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60021_MissionBattleEvent60021_Insert4": {
      "fileName": "60021_MissionBattleEvent60021_Insert4",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"270618984\">StageSpecialAbility_20412061_BEPerform</a>",
          "paramSequence2": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1487905304\">StageSpecialAbility_20412061_InBattle_Weakness_Fire</a>",
              "duration": 2,
              "valuePerStack": {
                "MDF_PropertyValue": 0.2
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || Constants[0] (2) || MUL || RETURN",
                  "displayLines": "(AOE Toughness Value * 2)",
                  "constants": [
                    2
                  ],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "AllType"
                },
                "Tags": null,
                "attackType": "Ultimate"
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1487905304\">StageSpecialAbility_20412061_InBattle_Weakness_Fire</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"1487905304\">StageSpecialAbility_20412061_InBattle_Weakness_Fire</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1099669275\">Silwolf_BPAbility_WeakType_Fire</a>[<span class=\"descriptionNumberColor\">Extra Fire Weakness</span>]"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFireBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Fire"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "60021_MissionBattleEvent60021_Insert3": {
      "fileName": "60021_MissionBattleEvent60021_Insert3",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"270618984\">StageSpecialAbility_20412061_BEPerform</a>",
          "paramSequence2": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"808836798\">StageSpecialAbility_20412061_InBattle_Weakness_Thunder</a>",
              "duration": 2,
              "valuePerStack": {
                "MDF_PropertyValue": 0.2
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
              "duration": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__229) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__229",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__229"
                ]
              },
              "valuePerStack": {
                "Modifier_Electric_DamagePercentage": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__230) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__230",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__230"
                  ]
                }
              },
              "stackFlag": "Level"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
              "duration": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__229) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__229",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__229"
                ]
              },
              "valuePerStack": {
                "Modifier_Poison_DamagePercentage": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__230) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__230",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__230"
                  ]
                }
              },
              "stackFlag": "Level"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__229) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__229",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__229"
                ]
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__230) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__230",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__230"
                  ]
                }
              },
              "stackFlag": "Level"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"227784370\">Standard_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
              "duration": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__229) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__229",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__229"
                ]
              },
              "valuePerStack": {
                "Modifier_Tear_DamageRatio": 0.1,
                "Modifier_Tear_MaxPercentage": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__230) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__230",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__230"
                  ]
                }
              },
              "stackFlag": "Level"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__808836798\">StageSpecialAbility_20412061_InBattle_Weakness_Thunder</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"808836798\">StageSpecialAbility_20412061_InBattle_Weakness_Thunder</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"954284461\">Silwolf_BPAbility_WeakType_Thunder</a>[<span class=\"descriptionNumberColor\">Extra Lightning Weakness</span>]"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceLightningBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Thunder"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "60021_MissionBattleEvent60021_Insert2": {
      "fileName": "60021_MissionBattleEvent60021_Insert2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"270618984\">StageSpecialAbility_20412061_BEPerform</a>",
          "paramSequence2": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1351694549\">StageSpecialAbility_20412061_InBattle_Weakness_Ice</a>",
              "duration": 2,
              "valuePerStack": {
                "MDF_PropertyValue": 0.2
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
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "advanceType": "Delay",
                  "multiAdd": 1
                }
              ]
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1351694549\">StageSpecialAbility_20412061_InBattle_Weakness_Ice</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-1351694549\">StageSpecialAbility_20412061_InBattle_Weakness_Ice</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"110873612\">Silwolf_BPAbility_WeakType_Ice</a>[<span class=\"descriptionNumberColor\">Extra Ice Weakness</span>]"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIceBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Ice"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "60021_MissionBattleEvent60021_Insert1": {
      "fileName": "60021_MissionBattleEvent60021_Insert1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"270618984\">StageSpecialAbility_20412061_BEPerform</a>",
          "paramSequence2": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"591807962\">StageSpecialAbility_20412061_InBattle_Weakness_Wind</a>",
              "duration": 2,
              "valuePerStack": {
                "MDF_PropertyValue": 0.2
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Constants[0] (8) || Variables[0] ({[SkillP01[3]]}) || MUL || RETURN",
                  "displayLines": "(8 * {[SkillP01[3]]})",
                  "constants": [
                    8
                  ],
                  "variables": [
                    "{[SkillP01[3]]}"
                  ]
                },
                "indirectDMG": true,
                "Toughness": {
                  "displayLines": 30
                },
                "Tags": null,
                "attackType": "Ultimate"
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__591807962\">StageSpecialAbility_20412061_InBattle_Weakness_Wind</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"591807962\">StageSpecialAbility_20412061_InBattle_Weakness_Wind</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"1411533355\">Silwolf_BPAbility_WeakType_Wind</a>[<span class=\"descriptionNumberColor\">Extra Wind Weakness</span>]"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Wind"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "60021_MissionBattleEvent60021_Ability03_Camera": {
      "fileName": "60021_MissionBattleEvent60021_Ability03_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "60021_MissionBattleEvent60021_Ability03_Part02": {
      "fileName": "60021_MissionBattleEvent60021_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Skill Points Modification",
          "adjustmentValue": 5,
          "adjustmentType": "+"
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "healPercent": 1,
          "formula": "Heal from Target MaxHP"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Character ID",
            "ID": 18007,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "CurEnergy",
              "context": "TargetEntity",
              "value": 100
            }
          ]
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Player Team Members"
      }
    },
    "60021_MissionBattleEvent60021_Ability03_Part01": {
      "fileName": "60021_MissionBattleEvent60021_Ability03_Part01",
      "childAbilityList": [
        "60021_MissionBattleEvent60021_Ability03_Part01",
        "60021_MissionBattleEvent60021_Ability03_Part02",
        "60021_MissionBattleEvent60021_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "MissionBattleEvent60021_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Player Team Members"
      },
      "realTargetData": {
        "primaryTarget": "All Player Team"
      }
    },
    "60021_Modifiers": {
      "fileName": "60021_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1446276332\">MissionBattleEvent60021_TriggerBEAbility</a>"
        }
      ],
      "references": []
    },
    "60021_Functions": {
      "fileName": "60021_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__270618984\">StageSpecialAbility_20412061_BEPerform</a>",
          "parse": [
            {
              "name": "UI Display Event",
              "popUpText": "User Banned"
            },
            {
              "name": "Looped Event",
              "maxLoops": 8,
              "Event": []
            },
            {
              "name": "Looped Event",
              "maxLoops": 8,
              "Event": []
            },
            {
              "name": "Call Parameter Sequence",
              "parameterName": "SpecialEffectForAvatar"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                  "displayLines": "{[SkillP01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[3]]}"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Quantum"
                },
                "Tags": null,
                "attackType": "Ultimate",
                "EnergyGainPercent": "100%"
              }
            },
            "Trigger: Attack End",
            "Trigger: Skip Death Handling"
          ]
        }
      ],
      "references": []
    }
  },
  "enemyData": {
    "Skill03": {
      "skillID": 6002101,
      "trigger": "Skill03",
      "name": "Allow Changes?",
      "type": "Restore",
      "slot": "Ultimate",
      "desc": "Restores all HP for all allies, recover all Skill Points, and cause Mem to receive 100% Charge.",
      "energyCost": 160,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": []
      },
      "attackType": "Ultra",
      "skillEffect": "Support",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60021_Skill03_Phase01",
        "Avatar_MissionBattleEvent60021_Skill03_Phase02",
        "Avatar_MissionBattleEvent60021_Skill03_Camera"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    },
    "SkillP01": {
      "skillID": 6002102,
      "trigger": "SkillP01",
      "name": null,
      "type": "AoE",
      "slot": "Talent",
      "desc": "",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          80,
          10,
          40,
          1
        ]
      },
      "element": "Quantum",
      "skillEffect": "Passive",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60021_SkillP01",
        "Avatar_MissionBattleEvent60021_Insert1",
        "Avatar_MissionBattleEvent60021_Insert2",
        "Avatar_MissionBattleEvent60021_Insert3",
        "Avatar_MissionBattleEvent60021_Insert4"
      ],
      "toughnessList": [
        0,
        60,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}