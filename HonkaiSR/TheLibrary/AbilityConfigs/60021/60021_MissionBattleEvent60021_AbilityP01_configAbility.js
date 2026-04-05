const configAbility = {
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
                      "priorityTag": "CharacterAttackFromSelf",
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
                      "priorityTag": "CharacterAttackFromSelf",
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
                      "priorityTag": "CharacterAttackFromSelf",
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
                      "priorityTag": "CharacterAttackFromSelf",
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
}