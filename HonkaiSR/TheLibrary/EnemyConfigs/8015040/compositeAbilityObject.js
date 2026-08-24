const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 8015040,
  "trimCharacterName": 8015040,
  "abilityList": [
    "8015040_Modifiers",
    "8015040_BattleEventAbility_Monster_W5_AsatPramad_SummonMonster",
    "8015040_Monster_W5_AsatPramad_RestartPhase3AfterBE",
    "8015040_Monster_W5_AsatPramad_RestartPhase3",
    "8015040_Monster_W5_AsatPramad_RestartPhase2",
    "8015040_Monster_W5_AsatPramad_Ability31_Part02",
    "8015040_Monster_W5_AsatPramad_MainSpecialWin",
    "8015040_Monster_W5_AsatPramad_MainStory02Ability08",
    "8015040_Monster_W5_AsatPramad_MainStory02ChangePhaseTo03",
    "8015040_Monster_W5_AsatPramad_MainStory02ChangePhaseTo02",
    "8015040_Monster_W5_AsatPramad_MaintStory03BEFirstTime",
    "8015040_Monster_W5_AsatPramad_PassiveAbility_Part02toPhase03",
    "8015040_Monster_W5_AsatPramad_PassiveAbility_Part01toPhase02",
    "8015040_Monster_W5_AsatPramad_PassiveAbilityInitiate04",
    "8015040_Monster_W5_AsatPramad_PassiveAbilityInitiate03",
    "8015040_Monster_W5_AsatPramad_PassiveAbilityInitiate02",
    "8015040_Monster_W5_AsatPramad_AbilityP01",
    "8015040_Monster_W5_AsatPramad_Ability08_Assist_01",
    "8015040_Monster_W5_AsatPramad_Ability08_Assist_00",
    "8015040_Monster_W5_AsatPramad_Ability08_Part02",
    "8015040_Monster_W5_AsatPramad_Ability08_Part01",
    "8015040_Monster_W5_AsatPramad_Ability05_End_Part02",
    "8015040_Monster_W5_AsatPramad_Ability05_End_Part01",
    "8015040_Monster_W5_AsatPramad_Ability05_Insert_Part02",
    "8015040_Monster_W5_AsatPramad_Ability05_Insert_Part01",
    "8015040_Monster_W5_AsatPramad_Ability05_Part02",
    "8015040_Monster_W5_AsatPramad_Ability05_Part01",
    "8015040_Monster_W5_AsatPramad_Ability03_Insert_Part02",
    "8015040_Monster_W5_AsatPramad_Ability03_Insert_Part01",
    "8015040_Monster_W5_AsatPramad_Ability03_Part02",
    "8015040_Monster_W5_AsatPramad_Ability03_Part01",
    "8015040_Monster_W5_AsatPramad_Ability02_Assist_01",
    "8015040_Monster_W5_AsatPramad_Ability02_Assist_00",
    "8015040_Monster_W5_AsatPramad_Ability02P3_Part02",
    "8015040_Monster_W5_AsatPramad_Ability02P3_Part01",
    "8015040_Monster_W5_AsatPramad_Ability02_Part02",
    "8015040_Monster_W5_AsatPramad_Ability02_Part01",
    "8015040_Monster_W5_AsatPramad_Ability01_Assist_01",
    "8015040_Monster_W5_AsatPramad_Ability01_Assist_00",
    "8015040_Monster_W5_AsatPramad_Ability01P3_Part02",
    "8015040_Monster_W5_AsatPramad_Ability01P3_Part01",
    "8015040_Monster_W5_AsatPramad_Ability01_Part02",
    "8015040_Monster_W5_AsatPramad_Ability01_Part01",
    "8015040_Functions",
    "8015040_BE_BattleEvents",
    "8015040_Handling"
  ],
  "abilityObject": {
    "8015040_Modifiers": {
      "fileName": "8015040_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-253527266\">W5_AsatPramad_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Pick It Up on the Fly",
                      "desc": "In the battle against \"Asat Pramad,\" use the \"Barrier\" obtained from \"Gambit of Converging Fates\" to resist the DMG from \"The Game Is On\"",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-270304885\">W5_AsatPramad_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Expert Bomb Defuser",
                      "desc": "During the battle against \"Asat Pramad,\" when he uses \"Meme Carnival,\" ensure there are no \"Meme'd\" remaining to detonate",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-657254997\">Enemy_W5_AsatPramad_Debuff_12_Modifier_Sub</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Bleed",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "useEntitySnapshot": true,
          "description": "Takes Physical DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Bleed",
          "statusName": "Bleed",
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValue",
                  "value": {
                    "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                    "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_TargetMaxHP",
                      "Modifier_Tear_DamageRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValue",
                  "value": {
                    "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                    "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_TargetMaxHP",
                      "Modifier_Tear_DamageRatio"
                    ]
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_DamageValue) || Variables[1] (_Layer) || MUL || RETURN",
                      "displayLines": "(MDF_DamageValue * _Layer)",
                      "constants": [],
                      "variables": [
                        "MDF_DamageValue",
                        "_Layer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
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
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValue",
                  "value": {
                    "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                    "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_TargetMaxHP",
                      "Modifier_Tear_DamageRatio"
                    ]
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_DamageValue) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * MDF_DamageValue) * _Layer)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_DamageValue",
                        "_Layer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__607260658\">Enemy_W5_AsatPramad_Debuff_08_Modifier_Sub</a>",
          "stackType": "Replace",
          "targetRestriction": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "targetRestrictionFor": "EnemySelect",
          "modifierFlags": [
            "Taunt",
            "RemoveWhenCasterDead",
            "RemoveWhenCasterUnstage"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1320337391\">Enemy_W5_AsatPramad_Debuff_08_Modifier</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1488319040\">Standard_CTRL_Taunt</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1488319040\">Standard_CTRL_Taunt</a>[<span class=\"descriptionNumberColor\">Taunt</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__594195286\">Enemy_W5_AsatPramad_Debuff_05_Modifier</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "Shield"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
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
                  "name": "Set Hit-Class"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentHPRatio"
                },
                {
                  "name": "Create Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (MDF_ShieldTransferRatio) || MUL || RETURN",
                    "displayLines": "(MDF_MaxHP * MDF_ShieldTransferRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_MaxHP",
                      "MDF_ShieldTransferRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-961356533\">Enemy_W5_AsatPramad_Debuff_04_Modifier</a>[<span class=\"descriptionNumberColor\">Barrier</span>]",
          "counter": 1,
          "stackType": "Replace",
          "modifierFlags": [
            "BlockDamageExcludeDot",
            "MuteBreak"
          ],
          "description": "Nullifies all DMG received except DoTs. This state is dispelled after being attacked.",
          "type": "Buff",
          "effectName": "Barrier",
          "statusName": "Barrier",
          "execute": [
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
              "eventTrigger": "Take Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has DMG Instance Tag",
                    "tag": "W5_AsatPramad_Ultra"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-253527266\">W5_AsatPramad_BattleScore2</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has DMG Instance Tag",
                    "tag": "W5_AsatPramad_Bomb"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class"
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Damage was Blocked",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "function": "Add"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__817654149\">Enemy_W5_AsatPramad_SummonMonster</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Looped Event",
                  "maxLoops": 4,
                  "Event": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "team": "Enemy Team",
                        "location": "Left"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
                                "displayLines": "SummonList_ADF_1",
                                "constants": [],
                                "variables": [
                                  "SummonList_ADF_1"
                                ]
                              },
                              "locationType": "BeforeCaster"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (SummonList_ADF_1) || RETURN",
                                "displayLines": "SummonList_ADF_1",
                                "constants": [],
                                "variables": [
                                  "SummonList_ADF_1"
                                ]
                              },
                              "locationType": "AfterCaster"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Recently Summoned Enemies}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__295693692\">Enemy_W5_AsatPramad_Shake</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
          "modifierFlags": [
            "DispelPriorityHigh",
            "DisableAction",
            "STAT_CTRL_Shake",
            "STAT_CTRL",
            "AvatarBreak"
          ],
          "description": "Action delayed. Cannot take actions for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Strong Reverberation",
          "statusName": "Strong Reverberation",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "MDF_ActionDelayRatio"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "living": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "LifeTime"
                  },
                  "passed": [
                    "Abort Modifier Phase Action"
                  ],
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "popUpText": "Engulfed in Strong Reverberations"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ],
                  "text": "Ability cannot be used"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-239814021\">Enemy_W5_AsatPramad_DamageTakenUp</a>",
          "stackType": "Replace",
          "useEntitySnapshot": true,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has DMG Instance Tag",
                    "tag": "W5_AsatPramad_Bomb"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "(MDF_DamageTakenUpRatio_PerLayer * ModifierLayers)"
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
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-78128030\">Enemy_W5_AsatPramad_DirtyBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphon</span>]",
          "stackType": "Replace",
          "description": "Maximum Restorable HP decreases by <span class=\"descriptionNumberColor\">MDF_DirtyBloodRatioPerLayer</span>. This effect is stackable.",
          "type": "Debuff",
          "effectName": "Prana-Siphon",
          "statusName": "Prana-Siphon",
          "addStacksPerTrigger": 1,
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || Variables[1] (MDF_DirtyBloodRatioPerLayer) || MUL || RETURN",
                    "displayLines": "(MDF_Layer * MDF_DirtyBloodRatioPerLayer)",
                    "constants": [],
                    "variables": [
                      "MDF_Layer",
                      "MDF_DirtyBloodRatioPerLayer"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__904148343\">Enemy_W5_AsatPramad_BombMark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1505992097\">Enemy_W5_AsatPramad_BombCharging</a>[<span class=\"descriptionNumberColor\">Memes Incoming</span>]",
          "description": "The next action by \"Formation\" will detonate all \"Meme'd.\"",
          "type": "Other",
          "effectName": "Memes Incoming",
          "statusName": "Memes Incoming",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Asat Pramad: 0}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "NOT=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{{{Cyrene}}'s All Player Characters}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]",
          "stackType": "Replace",
          "description": "When an ally character uses \"Meme'd,\" Asat Pramad deals massive DMG to all ally targets, has a high chance to inflict \"Strong Reverberation\" on ally targets, and removes 1 stack of \"Meme'd.\" If the ally target does not have a Shield or \"Barrier,\" additionally applies 1 stack of \"Prana-Siphon.\"",
          "type": "Debuff",
          "effectName": "Meme'd",
          "statusName": "Meme'd",
          "stackLimit": 4,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "CommomAbility_W5_AsatPramad_00"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "IsHealer",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "AITag"
                      },
                      {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Preservation",
                          "Abundance"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AsatPramad_Skill3_DamagePercentageLight",
                  "value": {
                    "operator": "Variables[0] (MDF_DamagePercentageLightTeam) || RETURN",
                    "displayLines": "MDF_DamagePercentageLightTeam",
                    "constants": [],
                    "variables": [
                      "MDF_DamagePercentageLightTeam"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AsatPramad_Skill3_DamagePercentageDark",
                  "value": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__316) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__316",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__316"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AsatPramad_Skill3_BaseAttack",
                  "value": {
                    "operator": "Variables[0] (MDF_BaseAttack) || RETURN",
                    "displayLines": "MDF_BaseAttack",
                    "constants": [],
                    "variables": [
                      "MDF_BaseAttack"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AsatPramad_Skill3_MaxHP",
                  "value": {
                    "operator": "Variables[0] (MDF_MaxHP) || RETURN",
                    "displayLines": "MDF_MaxHP",
                    "constants": [],
                    "variables": [
                      "MDF_MaxHP"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AsatPramad_Skill3_DamageTakenUpRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageTakenUpRatio) || RETURN",
                    "displayLines": "MDF_DamageTakenUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageTakenUpRatio"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AsatPramad_Skill3_DamageTakenMaxLayer",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageTakenMaxLayer) || RETURN",
                    "displayLines": "MDF_DamageTakenMaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_DamageTakenMaxLayer"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AsatPramad_Skill3_DirtyBloodRatioPerLayer",
                  "value": {
                    "operator": "Variables[0] (MDF_DirtyBloodRatioPerLayer) || RETURN",
                    "displayLines": "MDF_DirtyBloodRatioPerLayer",
                    "constants": [],
                    "variables": [
                      "MDF_DirtyBloodRatioPerLayer"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AsatPramad_Skill3_DirtyBloodMaxLayer",
                  "value": {
                    "operator": "Variables[0] (MDF_DirtyBloodMaxLayer) || RETURN",
                    "displayLines": "MDF_DirtyBloodMaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_DirtyBloodMaxLayer"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AsatPramad_Skill3_Chance",
                  "value": {
                    "operator": "Variables[0] (MDF_Chance) || RETURN",
                    "displayLines": "MDF_Chance",
                    "constants": [],
                    "variables": [
                      "MDF_Chance"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AsatPramad_Skill3_isInsert"
                },
                {
                  "name": "Automatically use Ultimate",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "binding": [
                    "Skill3_AsatPramad_00"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Automatically use Ultimate",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "binding": [
                    "Skill3_AsatPramad_00"
                  ],
                  "enable": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "TEST DATA 1(Binding/skill): ASAT",
                  "abilityName": "Skill3_AsatPramad_00"
                },
                {
                  "name": "TEST DATA 2(Binding/skill): ASAT",
                  "abilityName": "Skill3_AsatPramad_00",
                  "auto": "ControlSkill03"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isSuperBomb",
                    "compareType": "=",
                    "value2": 1
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ultimate [Anyone]: Start[?]"
            },
            {
              "eventTrigger": "Departed State: Start [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-636682820\">Enemy_W5_AsatPramad_ShakeListener</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking Modifier Instance [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-659133671\">Enemy_W5_AsatPramad_AddShake</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-659133671\">Enemy_W5_AsatPramad_AddShake</a>",
                      "variable": "MDF_Chance",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "MDF_Chance"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"295693692\">Enemy_W5_AsatPramad_Shake</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
                      "duration": 1,
                      "baseChance": {
                        "operator": "Variables[0] (MDF_Chance) || RETURN",
                        "displayLines": "MDF_Chance",
                        "constants": [],
                        "variables": [
                          "MDF_Chance"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_ActionDelayRatio": 0
                      },
                      "success": []
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-659133671\">Enemy_W5_AsatPramad_AddShake</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-659133671\">Enemy_W5_AsatPramad_AddShake</a>",
          "stackType": "Replace"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__480332578\">Enemy_W5_AsatPramad_Ability04Mark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1765311230\">Enemy_W5_AsatPramad_MainStory03Talk10</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1090857767\">Enemy_W5_AsatPramad_SpecialBreakRecoverMark</a>",
          "execute": [
            {
              "eventTrigger": "Action End [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1161208794\">Enemy_W5_AsatPramad_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">Knockdown</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Knockdown",
          "statusName": "Knockdown",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
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
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__592405977\">Enemy_W5_AsatPramad_BEMuteSpeed</a>",
          "modifierFlags": [
            "MuteSpeed"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__975723655\">Enemy_W5_AsatPramad_BESpeedUp</a>",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedAddedRatio) || RETURN",
                    "displayLines": "MDF_SpeedAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedAddedRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2037132106\">Enemy_W5_AsatPramad_BESpeed</a>",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedOverride</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Speed) || RETURN",
                    "displayLines": "MDF_Speed",
                    "constants": [],
                    "variables": [
                      "MDF_Speed"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2037385218\">Enemy_W5_AsatPramad_Part03UnselectableMark</a>[<span class=\"descriptionNumberColor\">Elation Depleted</span>]",
          "description": "Currently in an unselectable state.",
          "type": "Other",
          "statusName": "Elation Depleted"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-660230935\">Enemy_W5_AsatPramad_Part03Mark</a>[<span class=\"descriptionNumberColor\">Three Faces as One</span>]",
          "description": "During this phase, all Lord of Saṃvartasthāyi, Asat Pramad units share HP.",
          "type": "Other",
          "statusName": "Three Faces as One"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1242962761\">Enemy_W5_AsatPramad_Part03Unselectable</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2037385218\">Enemy_W5_AsatPramad_Part03UnselectableMark</a>[<span class=\"descriptionNumberColor\">Elation Depleted</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)",
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "PartControl",
                  "state": false
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1445036185\">AddMuteSpeedAndLockActionDelayChange</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2037385218\">Enemy_W5_AsatPramad_Part03UnselectableMark</a>[<span class=\"descriptionNumberColor\">Elation Depleted</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-551162872\">Enemy_W5_AsatPramad_Part03</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Part03SpeedAddRatio) || RETURN",
                    "displayLines": "MDF_Part03SpeedAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_Part03SpeedAddRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-660230935\">Enemy_W5_AsatPramad_Part03Mark</a>[<span class=\"descriptionNumberColor\">Three Faces as One</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-534385253\">Enemy_W5_AsatPramad_Part02</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedAddedRatio) || RETURN",
                    "displayLines": "MDF_SpeedAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedAddedRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__294502655\">Enemy_W5_AsatPramad_Endurance</a>",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2070107442\">Enemy_W5_AsatPramad_AcrossPhaseController</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Turn [Anyone]: Start",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1105309933\">Enemy_W5_AsatPramad_PartController</a>",
          "execute": [
            {
              "eventTrigger": "Waiting in Limbo [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{{{Cyrene}}'s All Player Characters}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1505992097\">Enemy_W5_AsatPramad_BombCharging</a>[<span class=\"descriptionNumberColor\">Memes Incoming</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Asat Pramad: 0}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        }
                      },
                      {
                        "name": "Current Turn's Action Phase is Over",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Reset Turn AV",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 0}}"
                      },
                      "skipTurn": true
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"294502655\">Enemy_W5_AsatPramad_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-473353257\">Enemy_W5_AsatPramad_Effect00</a>"
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W5_AsatPramad_MainStory02ChangePhaseTo02",
                              "priorityTag": "EnemyPhaseChange",
                              "ownerState": "Mask_AliveOrLimbo",
                              "targetState": "Mask_AliveOrLimbo",
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            }
                          ],
                          "failed": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W5_AsatPramad_PassiveAbility_Part01toPhase02",
                              "priorityTag": "EnemyPhaseChange",
                              "ownerState": "Mask_AliveOrLimbo",
                              "targetState": "Mask_AliveOrLimbo",
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"294502655\">Enemy_W5_AsatPramad_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>"
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W5_AsatPramad_MainStory02ChangePhaseTo03",
                              "priorityTag": "EnemyPhaseChange",
                              "ownerState": "Mask_AliveOrLimbo",
                              "targetState": "Mask_AliveOrLimbo",
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            }
                          ],
                          "failed": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W5_AsatPramad_PassiveAbility_Part02toPhase03",
                              "priorityTag": "EnemyPhaseChange",
                              "ownerState": "Mask_AliveOrLimbo",
                              "targetState": "Mask_AliveOrLimbo",
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
              "priorityLevel": -90
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-439798019\">Enemy_W5_AsatPramad_Effect02</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-490130876\">Enemy_W5_AsatPramad_Effect01</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-473353257\">Enemy_W5_AsatPramad_Effect00</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1940494819\">Enemy_W5_AsatPramad_MainStory03BEFirstTime</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Anyone]: Start",
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
                        "value1": "MDF_isEnterPerformance",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Character ID",
                        "ID": 1510,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Himeko • Nova"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W5_AsatPramad_MaintStory03BEFirstTime",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 0}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "EnemyChangeState",
                      "allowAbilityTriggers": false
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Energy Change",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Energy%",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Disable Abilities",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "abilityTypes": [
                        "Ultimate"
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_isEnterPerformance",
                      "value": 1
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Character ID",
                            "ID": 1510,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "Himeko • Nova"
                          },
                          "passed": [
                            {
                              "name": "Action Advance/Delay",
                              "advanceType": "Set",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "set": 0
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
    "8015040_BattleEventAbility_Monster_W5_AsatPramad_SummonMonster": {
      "fileName": "8015040_BattleEventAbility_Monster_W5_AsatPramad_SummonMonster",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Take the Stage"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"817654149\">Enemy_W5_AsatPramad_SummonMonster</a>",
          "casterAssign": "TargetSelf"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_RestartPhase3AfterBE": {
      "fileName": "8015040_Monster_W5_AsatPramad_RestartPhase3AfterBE",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1044523816\">RemoveMuteSpeedAndLockActionDelayChange</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          }
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          },
          "set": 0
        },
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "AsatPramadAfterBE"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1090857767\">Enemy_W5_AsatPramad_SpecialBreakRecoverMark</a>"
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
          },
          "revertDefault": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1242962761\">Enemy_W5_AsatPramad_Part03Unselectable</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1044523816\">RemoveMuteSpeedAndLockActionDelayChange</a>",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BossUltra"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1044523816\">RemoveMuteSpeedAndLockActionDelayChange</a>",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BossSummonMonster"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1044523816\">RemoveMuteSpeedAndLockActionDelayChange</a>",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BE_AsatPramad_00"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1044523816\">RemoveMuteSpeedAndLockActionDelayChange</a>",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BE_AsatPramad_01"
          }
        },
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "AsatPramadAfterBE"
        },
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "AsatPramadAfterBE"
        },
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "AsatPramadAfterBE"
        },
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "AsatPramadAfterBE"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BossSummonMonster"
          },
          "multiBase": 0
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BossUltra"
          },
          "multiBase": 1
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BE_AsatPramad_00"
          },
          "multiBase": 0.5
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BE_AsatPramad_01"
          },
          "multiBase": 1
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-368045394\">W5_AsatPramad_Part03BEBreakRecover</a>"
        },
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}}"
          },
          "stayInTeam": false
        },
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 1}}"
          },
          "stayInTeam": false
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Asat Pramad: 0}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"192411193\">Enemy_W5_AsatPramad_MainStory03</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1765311230\">Enemy_W5_AsatPramad_MainStory03Talk10</a>"
            }
          ]
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
          }
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
          }
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
          },
          "flagNames": []
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-473353257\">Enemy_W5_AsatPramad_Effect00</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-490130876\">Enemy_W5_AsatPramad_Effect01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-439798019\">Enemy_W5_AsatPramad_Effect02</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1545281796\">W5_AsatPramad_Part03PosResetAfterAbility</a>"
        },
        {
          "name": "Destroy Battle Entity",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BossAfterBE"
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_RestartPhase3": {
      "fileName": "8015040_Monster_W5_AsatPramad_RestartPhase3",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
          },
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              "ifTargetFound": [
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
              },
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              },
              "ifTargetFound": [
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "flagNames": []
                }
              ]
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1882512440\">W5_AsatPramad_UltraPhase03</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_RestartPhase2": {
      "fileName": "8015040_Monster_W5_AsatPramad_RestartPhase2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "STAT_CTRL"
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Break"
              },
              "passed": [
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "STAT_CTRL"
              },
              "passed": [
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "flagNames": []
                }
              ]
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1839166892\">W5_AsatPramad_Part02ChangeTo00</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}}"
              }
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}}"
              },
              "ability": "Monster_W5_AsatPramad_Ability07_Part01",
              "isTrigger": true
            },
            "Wait for Pending Ability Completions"
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability31_Part02": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability31_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Meme'd"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "AsatPramad_Skill3_isInsert",
          "value": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Shield",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "BlockDamageExcludeDot",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "BlockDamage",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-78128030\">Enemy_W5_AsatPramad_DirtyBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphon</span>]",
              "stackLimit": {
                "operator": "Variables[0] (AsatPramad_Skill3_isInsert) || RETURN",
                "displayLines": "AsatPramad_Skill3_isInsert",
                "constants": [],
                "variables": [
                  "AsatPramad_Skill3_isInsert"
                ]
              },
              "valuePerStack": {
                "MDF_DirtyBloodRatioPerLayer": {
                  "operator": "Variables[0] ([object Object]) || RETURN",
                  "displayLines": "[object Object]",
                  "constants": [],
                  "variables": [
                    {}
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "DamageFlat": {
              "operator": "Variables[0] ([object Object]) || Variables[1] ([object Object]) || MUL || RETURN",
              "displayLines": "([object Object] * [object Object])",
              "constants": [],
              "variables": [
                {},
                {}
              ]
            },
            "Toughness": null,
            "instanceTag": "W5_AsatPramad_Bomb",
            "Tags": null,
            "attackType": "Additional DMG"
          },
          "overrideDamageOwner": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}}"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-659133671\">Enemy_W5_AsatPramad_AddShake</a>",
          "valuePerStack": {
            "MDF_Chance": {
              "operator": "Variables[0] ([object Object]) || RETURN",
              "displayLines": "[object Object]",
              "constants": [],
              "variables": [
                {}
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]",
            "compareType": "=",
            "value2": 1,
            "valueType": "Layer"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]",
              "addStacksPerTrigger": -1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AsatPramad_Skill3_isInsert",
              "value": 0
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_MainSpecialWin": {
      "fileName": "8015040_Monster_W5_AsatPramad_MainSpecialWin",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"472491240\">Enemy_W5_AsatPramad_DisableAction</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__472491240\">Enemy_W5_AsatPramad_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ]
        }
      ]
    },
    "8015040_Monster_W5_AsatPramad_MainStory02Ability08": {
      "fileName": "8015040_Monster_W5_AsatPramad_MainStory02Ability08",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          },
          "ability": "Monster_W5_AsatPramad_Ability08_Part01",
          "isTrigger": true
        },
        "Wait for Pending Ability Completions"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_MainStory02ChangePhaseTo03": {
      "fileName": "8015040_Monster_W5_AsatPramad_MainStory02ChangePhaseTo03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": [
              "Break"
            ]
          },
          "passed": [
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1822389273\">W5_AsatPramad_Part02ChangeTo01</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Inject Ability Use",
          "abilityName": "Monster_W5_AsatPramad_PassiveAbility_Part02toPhase03",
          "priorityTag": "EnemyPhaseChange",
          "ownerState": "Mask_AliveOrLimbo",
          "targetState": "Mask_AliveOrLimbo",
          "showInActionOrder": true,
          "allowAbilityTriggers": false
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_MainStory02ChangePhaseTo02": {
      "fileName": "8015040_Monster_W5_AsatPramad_MainStory02ChangePhaseTo02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": [
              "Break"
            ]
          },
          "passed": [
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "Inject Ability Use",
          "abilityName": "Monster_W5_AsatPramad_PassiveAbility_Part01toPhase02",
          "priorityTag": "EnemyPhaseChange",
          "ownerState": "Mask_AliveOrLimbo",
          "targetState": "Mask_AliveOrLimbo",
          "showInActionOrder": true,
          "allowAbilityTriggers": false
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_MaintStory03BEFirstTime": {
      "fileName": "8015040_Monster_W5_AsatPramad_MaintStory03BEFirstTime",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1041197693\">Enemy_W5_AsatPramad_MainStory03LockHPFirstTime</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"766895631\">Standard_Monster_Floating_DamageReduceController</a>"
        },
        {
          "name": "Inject Extra-Turn",
          "actionTag": null,
          "skillType": "ControlSkill03",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "HimekoBE"
          },
          "afterInjection": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_PassiveAbility_Part02toPhase03": {
      "fileName": "8015040_Monster_W5_AsatPramad_PassiveAbility_Part02toPhase03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "includeDyingTargets": true,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "W5_Shell"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2070107442\">Enemy_W5_AsatPramad_AcrossPhaseController</a>"
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "stayInTeam": false
            }
          ]
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Change Battle Arena",
              "status": "Inactive",
              "arenaID": 2054102
            },
            {
              "name": "Change Battle Arena",
              "arenaID": 2054103
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": 0.333,
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (AsatPramad01ID) || RETURN",
                "displayLines": "AsatPramad01ID",
                "constants": [],
                "variables": [
                  "AsatPramad01ID"
                ]
              },
              "locationType": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "variableName": "DebuffFirstTimeCount",
          "value": {
            "operator": "Variables[0] (DebuffFirstTimeCount) || RETURN",
            "displayLines": "DebuffFirstTimeCount",
            "constants": [],
            "variables": [
              "DebuffFirstTimeCount"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "variableName": "AIFlag",
          "value": 12
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1242962761\">Enemy_W5_AsatPramad_Part03Unselectable</a>"
        },
        {
          "name": "Create Enemies",
          "delayPercent": 0.667,
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (AsatPramad02ID) || RETURN",
                "displayLines": "AsatPramad02ID",
                "constants": [],
                "variables": [
                  "AsatPramad02ID"
                ]
              },
              "locationType": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "variableName": "AIFlag",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "variableName": "DebuffFirstTimeCount",
          "value": {
            "operator": "Variables[0] (DebuffFirstTimeCount) || RETURN",
            "displayLines": "DebuffFirstTimeCount",
            "constants": [],
            "variables": [
              "DebuffFirstTimeCount"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Change Character UI",
          "characterName": "Lord of Saṃvartasthāyi, Asat Pramad: \"Formation\"",
          "icon": "Monster_8015030.png"
        },
        {
          "name": "Change Character Model"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-490130876\">Enemy_W5_AsatPramad_Effect01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-473353257\">Enemy_W5_AsatPramad_Effect00</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CurrentFace",
          "value": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1242962761\">Enemy_W5_AsatPramad_Part03Unselectable</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 12
        },
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}}"
          },
          "stayInTeam": false
        },
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 1}}"
          },
          "stayInTeam": false
        },
        {
          "name": "Create Shared HP Group",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          },
          "subTarget": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}}"
          }
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          },
          "display": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"294502655\">Enemy_W5_AsatPramad_Endurance</a>"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 2}}"
          },
          "multiBase": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-534385253\">Enemy_W5_AsatPramad_Part02</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-551162872\">Enemy_W5_AsatPramad_Part03</a>",
          "valuePerStack": {
            "MDF_Part03SpeedAddRatio": {
              "operator": "Variables[0] ({[SkillP01[5]]}) || RETURN",
              "displayLines": "{[SkillP01[5]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[5]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BossSummonMonster"
          },
          "modifier": "<a class=\"gModGreen\" id=\"975723655\">Enemy_W5_AsatPramad_BESpeedUp</a>",
          "valuePerStack": {
            "MDF_SpeedAddedRatio": {
              "operator": "Variables[0] ({[SkillP04[3]]}) || RETURN",
              "displayLines": "{[SkillP04[3]]}",
              "constants": [],
              "variables": [
                "{[SkillP04[3]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BossUltra"
          },
          "modifier": "<a class=\"gModGreen\" id=\"975723655\">Enemy_W5_AsatPramad_BESpeedUp</a>",
          "valuePerStack": {
            "MDF_SpeedAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_13195) || RETURN",
              "displayLines": "UnusedUnderThisBase_13195",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_13195"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Current Turn Is",
            "target": {
              "name": "Add Target by Unique Identifier",
              "identifier": "BossUltra"
            }
          },
          "passed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": 1,
              "adjustmentType": "="
            }
          ],
          "failed": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Add Target by Unique Identifier",
                "identifier": "BossUltra"
              },
              "multiBase": 1
            }
          ]
        },
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            20050,
            20051
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Battle Event",
              "teamName": "Enemy Team",
              "eventID": 20050,
              "variables": null,
              "whenCreated": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "multiBase": 1
                },
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "BE_AsatPramad_00",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-660230935\">Enemy_W5_AsatPramad_Part03Mark</a>[<span class=\"descriptionNumberColor\">Three Faces as One</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2037385218\">Enemy_W5_AsatPramad_Part03UnselectableMark</a>[<span class=\"descriptionNumberColor\">Elation Depleted</span>]"
                }
              ]
            },
            {
              "name": "Add Battle Event",
              "teamName": "Enemy Team",
              "eventID": 20051,
              "variables": null,
              "whenCreated": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "multiBase": 0.5
                },
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "BE_AsatPramad_01",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-660230935\">Enemy_W5_AsatPramad_Part03Mark</a>[<span class=\"descriptionNumberColor\">Three Faces as One</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2037385218\">Enemy_W5_AsatPramad_Part03UnselectableMark</a>[<span class=\"descriptionNumberColor\">Elation Depleted</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1997389745\">Enemy_W5_AsatPramad_MainStory02LockHP</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{{{Cyrene}}'s All Player Characters}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1327533640\">Enemy_W5_AsatPramad_MainStory02AvatarLockHP</a>"
            }
          ],
          "failed": [
            {
              "name": "Preload Battle Event(s)",
              "eventID": [
                60044
              ]
            },
            {
              "name": "Add Battle Event",
              "teamName": "Player Team",
              "dmgCountsForTeam": "Player Team",
              "eventID": 60044,
              "variables": null,
              "whenCreated": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "HimekoBE",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Show BattleEvent Button",
                  "show": true
                }
              ]
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1545281796\">W5_AsatPramad_Part03PosResetAfterAbility</a>"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BossSummonMonster"
          },
          "set": 0
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1327533640\">Enemy_W5_AsatPramad_MainStory02AvatarLockHP</a>",
          "latentQueue": [
            "AIFlag",
            "CurrentFace"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.01
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1997389745\">Enemy_W5_AsatPramad_MainStory02LockHP</a>",
          "latentQueue": [
            "AIFlag",
            "CurrentFace"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.7
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": 0.99
                }
              ]
            }
          ]
        }
      ]
    },
    "8015040_Monster_W5_AsatPramad_PassiveAbility_Part01toPhase02": {
      "fileName": "8015040_Monster_W5_AsatPramad_PassiveAbility_Part01toPhase02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>",
            "invertCondition": true
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>"
          },
          "passed": [
            {
              "name": "Change Character UI",
              "characterName": "Lord of Saṃvartasthāyi, Asat Pramad: \"Existence\"",
              "icon": "Monster_8015040.png"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-490130876\">Enemy_W5_AsatPramad_Effect01</a>"
            }
          ],
          "failed": [
            {
              "name": "Change Character UI",
              "characterName": "Lord of Saṃvartasthāyi, Asat Pramad: \"Existence\"",
              "icon": "Monster_8015040.png"
            },
            {
              "name": "Change Character Model"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-473353257\">Enemy_W5_AsatPramad_Effect00</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-490130876\">Enemy_W5_AsatPramad_Effect01</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CurrentFace",
          "value": 1
        },
        {
          "name": "Inject Ability Use",
          "condition": {
            "name": "Insert Ability Condition",
            "type": "AbilityOwnerInsertUnusedCount",
            "typeValue": 1
          },
          "abilityName": "Monster_W5_AsatPramad_Ability05_Insert_Part01",
          "abilitySource": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "priorityTag": "EnemyBuffSelf",
          "allowAbilityTriggers": false
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"294502655\">Enemy_W5_AsatPramad_Endurance</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-534385253\">Enemy_W5_AsatPramad_Part02</a>",
          "valuePerStack": {
            "MDF_SpeedAddedRatio": {
              "operator": "Variables[0] ({[SkillP01[4]]}) || RETURN",
              "displayLines": "{[SkillP01[4]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[4]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BossSummonMonster"
          },
          "modifier": "<a class=\"gModGreen\" id=\"975723655\">Enemy_W5_AsatPramad_BESpeedUp</a>",
          "valuePerStack": {
            "MDF_SpeedAddedRatio": {
              "operator": "Variables[0] ({[SkillP04[2]]}) || RETURN",
              "displayLines": "{[SkillP04[2]]}",
              "constants": [],
              "variables": [
                "{[SkillP04[2]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "InsertCheck",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Current Turn Is",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": 0,
              "adjustmentType": "="
            }
          ],
          "failed": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "multiBase": 0
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BaseSpeed",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
        },
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            20046
          ]
        },
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20046,
          "variables": null,
          "whenCreated": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": 1
            },
            {
              "name": "Assign Unique Name",
              "uniqueName": "BossUltra",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "BossSummonMonster"
          },
          "set": 0
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_PassiveAbilityInitiate04": {
      "fileName": "8015040_Monster_W5_AsatPramad_PassiveAbilityInitiate04",
      "skillTrigger": "SkillP04",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_PassiveAbilityInitiate03": {
      "fileName": "8015040_Monster_W5_AsatPramad_PassiveAbilityInitiate03",
      "skillTrigger": "SkillP03",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_PassiveAbilityInitiate02": {
      "fileName": "8015040_Monster_W5_AsatPramad_PassiveAbilityInitiate02",
      "skillTrigger": "SkillP02",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_AbilityP01": {
      "fileName": "8015040_Monster_W5_AsatPramad_AbilityP01",
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BaseAttack",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BaseSpeed",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "W5_AsatPramad_00"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-636682820\">Enemy_W5_AsatPramad_ShakeListener</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1369501540\">Enemy_W5_AsatPramad_DisableLookAt</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1678225227\">Enemy_W5_AsatPramad_MuteHitFly</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Asat Pramad: 0}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-473353257\">Enemy_W5_AsatPramad_Effect00</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Asat Pramad: 1}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-490130876\">Enemy_W5_AsatPramad_Effect01</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Asat Pramad: 2}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-439798019\">Enemy_W5_AsatPramad_Effect02</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "W5_AsatPramad_00"
          },
          "passed": [
            {
              "name": "Change Character UI",
              "characterName": "Lord of Saṃvartasthāyi, Asat Pramad: \"Formation\""
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Stage ID",
                "ID": 2350,
                "compareType": "<=",
                "characterName": null
              },
              {
                "name": "Stage ID",
                "ID": 2344,
                "compareType": ">=",
                "characterName": null
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Asat Pramad: 2}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "W5_AsatPramad_02",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Stage ID",
                    "ID": 2350,
                    "compareType": "=",
                    "characterName": null
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"964206682\">W5_AsatPramad_Part03BEBreakSet</a>"
                    },
                    {
                      "name": "Change Entity Turn-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
                      },
                      "phase": "Phase1"
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 0}}+{{Asat Pramad: 1}}+{{Asat Pramad: 2}}"
                      },
                      "set": 999
                    },
                    {
                      "name": "Create Shared HP Group",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "subTarget": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}}"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-180566802\">Enemy_W5_AsatPramad_EnterBattle</a>"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 1}}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Assign Unique Name",
                          "uniqueName": "W5_AsatPramad_01",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Remove from Team Target Grouping",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "stayInTeam": false
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1445036185\">AddMuteSpeedAndLockActionDelayChange</a>",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 0}}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Assign Unique Name",
                          "uniqueName": "W5_AsatPramad_00",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Remove from Team Target Grouping",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "stayInTeam": false
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1445036185\">AddMuteSpeedAndLockActionDelayChange</a>",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Create Shared HP Group",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "subTarget": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}}"
                      }
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
                        "name": "Stage ID",
                        "ID": 2344,
                        "compareType": "NOT=",
                        "characterName": null
                      },
                      {
                        "name": "Stage ID",
                        "ID": 2350,
                        "compareType": "NOT=",
                        "characterName": null
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"596508493\">Enemy_W5_AsatPramad_BreakController</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
              },
              "includeDyingTargets": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Is Related Summoned Entity",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "ifTargetFound": [
                {
                  "name": "Set Enemy Phase",
                  "phase": 3
                }
              ],
              "noTargetFound": [
                {
                  "name": "Boss Bar Display",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": true
                },
                {
                  "name": "Preload Battle Event(s)",
                  "eventID": [
                    20045
                  ]
                },
                {
                  "name": "Add Battle Event",
                  "teamName": "Enemy Team",
                  "eventID": 20045,
                  "variables": null,
                  "whenCreated": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "multiBase": 0
                    },
                    {
                      "name": "Assign Unique Name",
                      "uniqueName": "BossSummonMonster",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 20
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "isPhase03EnterBattle",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value": "UNKNOWN_OBJECT_BOOLEAN_90659577",
                        "invertCondition": true
                      }
                    },
                    {
                      "name": "Set Enemy Phase",
                      "phase": 3
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-180566802\">Enemy_W5_AsatPramad_EnterBattle</a>"
                    },
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0.333,
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (AsatPramad01ID) || RETURN",
                            "displayLines": "AsatPramad01ID",
                            "constants": [],
                            "variables": [
                              "AsatPramad01ID"
                            ]
                          },
                          "locationType": "BeforeCaster"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Recently Summoned Enemies}}"
                      },
                      "variableName": "AIFlag",
                      "value": 12
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Recently Summoned Enemies}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1242962761\">Enemy_W5_AsatPramad_Part03Unselectable</a>"
                    },
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0.667,
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (AsatPramad02ID) || RETURN",
                            "displayLines": "AsatPramad02ID",
                            "constants": [],
                            "variables": [
                              "AsatPramad02ID"
                            ]
                          },
                          "locationType": "BeforeCaster"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Recently Summoned Enemies}}"
                      },
                      "variableName": "AIFlag",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Recently Summoned Enemies}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1242962761\">Enemy_W5_AsatPramad_Part03Unselectable</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 12
                    },
                    {
                      "name": "Remove from Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 0}}"
                      },
                      "stayInTeam": false
                    },
                    {
                      "name": "Remove from Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 1}}"
                      },
                      "stayInTeam": false
                    },
                    {
                      "name": "Create Shared HP Group",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 2}}"
                      },
                      "subTarget": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}}"
                      }
                    },
                    {
                      "name": "Boss Bar Display",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 2}}"
                      },
                      "display": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-551162872\">Enemy_W5_AsatPramad_Part03</a>",
                      "valuePerStack": {
                        "MDF_Part03SpeedAddRatio": {
                          "operator": "Variables[0] ({[SkillP01[5]]}) || RETURN",
                          "displayLines": "{[SkillP01[5]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[5]]}"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Add Target by Unique Identifier",
                        "identifier": "BossSummonMonster"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"975723655\">Enemy_W5_AsatPramad_BESpeedUp</a>",
                      "valuePerStack": {
                        "MDF_SpeedAddedRatio": {
                          "operator": "Variables[0] ({[SkillP04[3]]}) || RETURN",
                          "displayLines": "{[SkillP04[3]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP04[3]]}"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Preload Battle Event(s)",
                      "eventID": [
                        20046
                      ]
                    },
                    {
                      "name": "Add Battle Event",
                      "teamName": "Enemy Team",
                      "eventID": 20046,
                      "variables": null,
                      "whenCreated": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "multiBase": 2
                        },
                        {
                          "name": "Assign Unique Name",
                          "uniqueName": "BossUltra",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"975723655\">Enemy_W5_AsatPramad_BESpeedUp</a>",
                          "valuePerStack": {
                            "MDF_SpeedAddedRatio": {
                              "operator": "Variables[0] (UnusedUnderThisBase_13195) || RETURN",
                              "displayLines": "UnusedUnderThisBase_13195",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_13195"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Preload Battle Event(s)",
                      "eventID": [
                        20050,
                        20051
                      ]
                    },
                    {
                      "name": "Add Battle Event",
                      "teamName": "Enemy Team",
                      "eventID": 20050,
                      "variables": null,
                      "whenCreated": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "multiBase": 1
                        },
                        {
                          "name": "Assign Unique Name",
                          "uniqueName": "BE_AsatPramad_00",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-660230935\">Enemy_W5_AsatPramad_Part03Mark</a>[<span class=\"descriptionNumberColor\">Three Faces as One</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2037385218\">Enemy_W5_AsatPramad_Part03UnselectableMark</a>[<span class=\"descriptionNumberColor\">Elation Depleted</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Add Battle Event",
                      "teamName": "Enemy Team",
                      "eventID": 20051,
                      "variables": null,
                      "whenCreated": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "multiBase": 0.5
                        },
                        {
                          "name": "Assign Unique Name",
                          "uniqueName": "BE_AsatPramad_01",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-660230935\">Enemy_W5_AsatPramad_Part03Mark</a>[<span class=\"descriptionNumberColor\">Three Faces as One</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2037385218\">Enemy_W5_AsatPramad_Part03UnselectableMark</a>[<span class=\"descriptionNumberColor\">Elation Depleted</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Preload Battle Event(s)",
                      "eventID": [
                        60044
                      ]
                    },
                    {
                      "name": "Add Battle Event",
                      "teamName": "Player Team",
                      "dmgCountsForTeam": "Player Team",
                      "eventID": 60044,
                      "variables": null,
                      "whenCreated": [
                        {
                          "name": "Assign Unique Name",
                          "uniqueName": "HimekoBE",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Show BattleEvent Button",
                          "show": true
                        }
                      ]
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Add Target by Unique Identifier",
                        "identifier": "BossSummonMonster"
                      },
                      "set": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1105309933\">Enemy_W5_AsatPramad_PartController</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-180566802\">Enemy_W5_AsatPramad_EnterBattle</a>",
          "latentQueue": [
            "AIFlag",
            "isPhase03EnterBattle"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Anyone]: Start",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1369501540\">Enemy_W5_AsatPramad_DisableLookAt</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1576555605\">Enemy_W5_AsatPramad_ModelChange</a>",
          "execute": [
            {
              "eventTrigger": "Action Completed [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_CurrentFace",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CurrentFace",
                      "value": 1
                    },
                    {
                      "name": "Change Character Model",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CurrentFace",
                      "value": 0
                    },
                    {
                      "name": "Change Character Model",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__596508493\">Enemy_W5_AsatPramad_BreakController</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentFace",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1839166892\">W5_AsatPramad_Part02ChangeTo00</a>",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "CurrentFace",
                          "value": 0
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1678225227\">Enemy_W5_AsatPramad_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ]
        }
      ]
    },
    "8015040_Monster_W5_AsatPramad_Ability08_Assist_01": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability08_Assist_01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability08_Assist_00": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability08_Assist_00",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Let Elation Hang in Silence"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Asat Pramad: 0}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{{{Cyrene}}'s All Player Characters}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1327533640\">Enemy_W5_AsatPramad_MainStory02AvatarLockHP</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[getMemosprite]]"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}.[[removeMemosprite]]"
            },
            "compareType": "<=",
            "value2": 2
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}.[[removeMemosprite]]"
            },
            "compareType": "<=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1626272269\">Monster_W5_AsatPramad_Ability08Mark</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1626272269\">Monster_W5_AsatPramad_Ability08Mark</a>"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1626272269\">Monster_W5_AsatPramad_Ability08Mark</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1626272269\">Monster_W5_AsatPramad_Ability08Mark</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1626272269\">Monster_W5_AsatPramad_Ability08Mark</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1626272269\">Monster_W5_AsatPramad_Ability08Mark</a>"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1626272269\">Monster_W5_AsatPramad_Ability08Mark</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1626272269\">Monster_W5_AsatPramad_Ability08Mark</a>"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1626272269\">Monster_W5_AsatPramad_Ability08Mark</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1626272269\">Monster_W5_AsatPramad_Ability08Mark</a>"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1626272269\">Monster_W5_AsatPramad_Ability08Mark</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1626272269\">Monster_W5_AsatPramad_Ability08Mark</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1626272269\">Monster_W5_AsatPramad_Ability08Mark</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_13806) || RETURN",
              "displayLines": "UnusedUnderThisBase_13806",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_13806"
              ]
            },
            "Toughness": null,
            "instanceTag": "W5_AsatPramad_Ultra",
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Asat Pramad: 0}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>"
          },
          "passed": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "consumePercent": 1,
              "roundDMG": true,
              "DamageType": {
                "name": "Damage Type Source",
                "sourceType": "Quantum"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1545281796\">W5_AsatPramad_Part03PosResetAfterAbility</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Asat Pramad: 0}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>"
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1626272269\">Monster_W5_AsatPramad_Ability08Mark</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        }
      ]
    },
    "8015040_Monster_W5_AsatPramad_Ability08_Part02": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Joint-Attack Ability",
          "abilityList": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "ability": "Monster_W5_AsatPramad_Ability08_Assist_00"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "abortFlags": [
                "STAT_CTRL",
                "Break",
                "DisableAction"
              ],
              "ability": "Monster_W5_AsatPramad_Ability08_Assist_01"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 1}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "abortFlags": [
                "STAT_CTRL",
                "Break",
                "DisableAction"
              ],
              "ability": "Monster_W5_AsatPramad_Ability08_Assist_01"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Asat Pramad: 0}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>"
          },
          "passed": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Monster_W5_AsatPramad_MainSpecialWin",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "STAGE_Enemy",
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability08_Part01": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability08_Part01",
      "childAbilityList": [
        "8015040_Monster_W5_AsatPramad_Ability08_Part01",
        "8015040_Monster_W5_AsatPramad_Ability08_Part02",
        "8015040_Monster_W5_AsatPramad_Ability08_Camera",
        "8015040_Monster_W5_AsatPramad_Ability08_Assist_00",
        "8015040_Monster_W5_AsatPramad_Ability08_Assist_01"
      ],
      "skillTrigger": "Skill08",
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
          "ability": "Monster_W5_AsatPramad_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability05_End_Part02": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability05_End_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "revertDefault": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: Skill05 Target1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: Skill05 Target2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: Skill05 Target3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: Skill05 Target4}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: Skill05 Target5}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Asat Pramad: Skill05 Target6}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Asat Pramad: 0}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1839166892\">W5_AsatPramad_Part02ChangeTo00</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "CurrentFace",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1505992097\">Enemy_W5_AsatPramad_BombCharging</a>[<span class=\"descriptionNumberColor\">Memes Incoming</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability05_End_Part01": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability05_End_Part01",
      "childAbilityList": [
        "8015040_Monster_W5_AsatPramad_Ability05_End_Part01",
        "8015040_Monster_W5_AsatPramad_Ability05_End_Part02",
        "8015040_Monster_W5_AsatPramad_Ability05_End_Camera"
      ],
      "skillTrigger": "Skill05_End",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Attack Targets}}"
          },
          "ability": "Monster_W5_AsatPramad_Ability05_End_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Asat Pramad: 0}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1545281796\">W5_AsatPramad_Part03PosResetAfterAbility</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}",
        "allowUnselectable": true
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability05_Insert_Part02": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability05_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Gambit of Converging Fates"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1102899313\">Enemy_W5_AsatPramad_MainStory02Talk05</a>"
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"124696286\">W5_AsatPramad_Ability05</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1753386308\">Enemy_W5_AsatPramad_MainStory02DelayMark</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1102899313\">Enemy_W5_AsatPramad_MainStory02Talk05</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        }
      ]
    },
    "8015040_Monster_W5_AsatPramad_Ability05_Insert_Part01": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability05_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W5_AsatPramad_Ability05_Insert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability05_Part02": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"124696286\">W5_AsatPramad_Ability05</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability05_Part01": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability05_Part01",
      "childAbilityList": [
        "8015040_Monster_W5_AsatPramad_Ability05_Part01",
        "8015040_Monster_W5_AsatPramad_Ability05_Part02",
        "8015040_Monster_W5_AsatPramad_Ability05_Camera",
        "8015040_Monster_W5_AsatPramad_Ability05_Insert_Part01",
        "8015040_Monster_W5_AsatPramad_Ability05_Insert_Part02"
      ],
      "skillTrigger": "Skill05",
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
          "ability": "Monster_W5_AsatPramad_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability03_Insert_Part02": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability03_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Meme Setup"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"158251524\">W5_AsatPramad_Ability03</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability03_Insert_Part01": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability03_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W5_AsatPramad_Ability03_Insert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1545281796\">W5_AsatPramad_Part03PosResetAfterAbility</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability03_Part02": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"158251524\">W5_AsatPramad_Ability03</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1731394976\">Enemy_W5_AsatPramad_MainStory02Tutorial</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1731394976\">Enemy_W5_AsatPramad_MainStory02Tutorial</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isTrigger",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_isTrigger",
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
    "8015040_Monster_W5_AsatPramad_Ability03_Part01": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability03_Part01",
      "childAbilityList": [
        "8015040_Monster_W5_AsatPramad_Ability03_Part01",
        "8015040_Monster_W5_AsatPramad_Ability03_Part02",
        "8015040_Monster_W5_AsatPramad_Ability03_Camera",
        "8015040_Monster_W5_AsatPramad_Ability03_Insert_Part01",
        "8015040_Monster_W5_AsatPramad_Ability03_Insert_Part02"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_W5_AsatPramad_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability02_Assist_01": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability02_Assist_01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability02_Assist_00": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability02_Assist_00",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_13194) || Constants[0] (3) || DIV || RETURN",
              "displayLines": "(UnusedUnderThisBase_13194 / 3)",
              "constants": [
                3
              ],
              "variables": [
                "UnusedUnderThisBase_13194"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "(1 / 3)* 100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_13194) || Constants[0] (3) || DIV || RETURN",
              "displayLines": "(UnusedUnderThisBase_13194 / 3)",
              "constants": [
                3
              ],
              "variables": [
                "UnusedUnderThisBase_13194"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "(1 / 3)* 100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_13194) || Constants[0] (3) || DIV || RETURN",
              "displayLines": "(UnusedUnderThisBase_13194 / 3)",
              "constants": [
                3
              ],
              "variables": [
                "UnusedUnderThisBase_13194"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "(1 / 3)* 100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1545281796\">W5_AsatPramad_Part03PosResetAfterAbility</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability02P3_Part02": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability02P3_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Trigger Joint-Attack Ability",
          "abilityList": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target List}}"
              },
              "ability": "Monster_W5_AsatPramad_Ability02_Assist_00"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target List}}"
              },
              "abortFlags": [
                "STAT_CTRL",
                "Break",
                "DisableAction"
              ],
              "ability": "Monster_W5_AsatPramad_Ability02_Assist_01"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 1}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target List}}"
              },
              "abortFlags": [
                "STAT_CTRL",
                "Break",
                "DisableAction"
              ],
              "ability": "Monster_W5_AsatPramad_Ability02_Assist_01"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability02P3_Part01": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability02P3_Part01",
      "childAbilityList": [
        "8015040_Monster_W5_AsatPramad_Ability02P3_Part01",
        "8015040_Monster_W5_AsatPramad_Ability02P3_Part02",
        "8015040_Monster_W5_AsatPramad_Ability02P3_Camera",
        "8015040_Monster_W5_AsatPramad_Ability02_Assist_00",
        "8015040_Monster_W5_AsatPramad_Ability02_Assist_01"
      ],
      "skillTrigger": "Skill02P3",
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
          "ability": "Monster_W5_AsatPramad_Ability02P3_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability02_Part02": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentFace",
            "compareType": "=",
            "value2": 0
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentFace",
            "compareType": "=",
            "value2": 0
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentFace",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentFace",
            "compareType": "=",
            "value2": 0
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"190017911\">W5_AsatPramad_Part02ChangeCheck</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability02_Part01": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability02_Part01",
      "childAbilityList": [
        "8015040_Monster_W5_AsatPramad_Ability02_Part01",
        "8015040_Monster_W5_AsatPramad_Ability02_Part02",
        "8015040_Monster_W5_AsatPramad_Ability02_Camera",
        "8015040_Monster_W5_AsatPramad_Ability02_1_Camera"
      ],
      "skillTrigger": "Skill02",
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
          "ability": "Monster_W5_AsatPramad_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentFace",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
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
    "8015040_Monster_W5_AsatPramad_Ability01_Assist_01": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability01_Assist_01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability01_Assist_00": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability01_Assist_00",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_13192) || RETURN",
              "displayLines": "UnusedUnderThisBase_13192",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_13192"
              ]
            },
            "HitSplit": {
              "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
              "displayLines": "(1 / 6)",
              "constants": [
                1,
                6
              ],
              "variables": []
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_13192) || RETURN",
              "displayLines": "UnusedUnderThisBase_13192",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_13192"
              ]
            },
            "HitSplit": {
              "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
              "displayLines": "(1 / 6)",
              "constants": [
                1,
                6
              ],
              "variables": []
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_13192) || RETURN",
              "displayLines": "UnusedUnderThisBase_13192",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_13192"
              ]
            },
            "HitSplit": {
              "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
              "displayLines": "(1 / 6)",
              "constants": [
                1,
                6
              ],
              "variables": []
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_13192) || RETURN",
              "displayLines": "UnusedUnderThisBase_13192",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_13192"
              ]
            },
            "HitSplit": {
              "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
              "displayLines": "(1 / 6)",
              "constants": [
                1,
                6
              ],
              "variables": []
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_13192) || RETURN",
              "displayLines": "UnusedUnderThisBase_13192",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_13192"
              ]
            },
            "HitSplit": {
              "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
              "displayLines": "(1 / 6)",
              "constants": [
                1,
                6
              ],
              "variables": []
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_13192) || RETURN",
              "displayLines": "UnusedUnderThisBase_13192",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_13192"
              ]
            },
            "HitSplit": {
              "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
              "displayLines": "(1 / 6)",
              "constants": [
                1,
                6
              ],
              "variables": []
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1545281796\">W5_AsatPramad_Part03PosResetAfterAbility</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability01P3_Part02": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability01P3_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Trigger Joint-Attack Ability",
          "abilityList": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target List}}"
              },
              "ability": "Monster_W5_AsatPramad_Ability01_Assist_00"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target List}}"
              },
              "abortFlags": [
                "STAT_CTRL",
                "Break",
                "DisableAction"
              ],
              "ability": "Monster_W5_AsatPramad_Ability01_Assist_01"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 1}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target List}}"
              },
              "abortFlags": [
                "STAT_CTRL",
                "Break",
                "DisableAction"
              ],
              "ability": "Monster_W5_AsatPramad_Ability01_Assist_01"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability01P3_Part01": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability01P3_Part01",
      "childAbilityList": [
        "8015040_Monster_W5_AsatPramad_Ability01P3_Part01",
        "8015040_Monster_W5_AsatPramad_Ability01P3_Part02",
        "8015040_Monster_W5_AsatPramad_Ability01P3_Camera",
        "8015040_Monster_W5_AsatPramad_Ability01_Assist_00",
        "8015040_Monster_W5_AsatPramad_Ability01_Assist_01"
      ],
      "skillTrigger": "Skill01P3",
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
          "ability": "Monster_W5_AsatPramad_Ability01P3_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability01_Part02": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-2139553754\">W5_AsatPramad_Ability01Attack</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-2139553754\">W5_AsatPramad_Ability01Attack</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-2139553754\">W5_AsatPramad_Ability01Attack</a>"
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"190017911\">W5_AsatPramad_Part02ChangeCheck</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-2139553754\">W5_AsatPramad_Ability01Attack</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CurrentFace",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                      "displayLines": "{[Skill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[0]]}"
                      ]
                    },
                    "HitSplit": {
                      "operator": "Constants[0] (1) || Constants[1] (3) || DIV || RETURN",
                      "displayLines": "(1 / 3)",
                      "constants": [
                        1,
                        3
                      ],
                      "variables": []
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                      "displayLines": "{[Skill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[0]]}"
                      ]
                    },
                    "HitSplit": {
                      "operator": "Constants[0] (1) || Constants[1] (3) || DIV || RETURN",
                      "displayLines": "(1 / 3)",
                      "constants": [
                        1,
                        3
                      ],
                      "variables": []
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "8015040_Monster_W5_AsatPramad_Ability01_Part01": {
      "fileName": "8015040_Monster_W5_AsatPramad_Ability01_Part01",
      "childAbilityList": [
        "8015040_Monster_W5_AsatPramad_Ability01_Part01",
        "8015040_Monster_W5_AsatPramad_Ability01_Part02",
        "8015040_Monster_W5_AsatPramad_Ability01_Camera"
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
          "ability": "Monster_W5_AsatPramad_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "8015040_Functions": {
      "fileName": "8015040_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 13,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-866641197\">W5_AsatPramad_StartCamera</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "PauseLevelForCameraPerform",
              "value": 1
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 2}}"
              },
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Asat Pramad: 0}}"
                    },
                    "value": "W5_AsatPramad_MainStory440P3"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PauseLevelForCameraPerform"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PauseLevelForCameraPerform"
                    }
                  ]
                }
              ],
              "noTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Asat Pramad: 0}}"
                    },
                    "value": "W5_AsatPramad_MainStory440P3"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PauseLevelForCameraPerform"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PauseLevelForCameraPerform"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__158251524\">W5_AsatPramad_Ability03</a>",
          "parse": [
            {
              "name": "Looped Event",
              "maxLoops": 4,
              "Event": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]",
                      "valuePerStack": {
                        "MDF_DamagePercentageLightTeam": {
                          "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                          "displayLines": "{[Skill03[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill03[0]]}"
                          ]
                        },
                        "MDF_BaseAttack": {
                          "operator": "Variables[0] (BaseAttack) || RETURN",
                          "displayLines": "BaseAttack",
                          "constants": [],
                          "variables": [
                            "BaseAttack"
                          ]
                        },
                        "MDF_MaxHP": {
                          "operator": "Variables[0] (MaxHP) || RETURN",
                          "displayLines": "MaxHP",
                          "constants": [],
                          "variables": [
                            "MaxHP"
                          ]
                        },
                        "MDF_DirtyBloodRatioPerLayer": {
                          "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                          "displayLines": "{[Skill03[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill03[1]]}"
                          ]
                        },
                        "MDF_DirtyBloodMaxLayer": {
                          "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                          "displayLines": "{[Skill03[2]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill03[2]]}"
                          ]
                        },
                        "MDF_Chance": {
                          "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
                          "displayLines": "{[Skill03[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill03[3]]}"
                          ]
                        },
                        "MDF_DamageTakenUpRatio": {
                          "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                          "displayLines": "{[Skill03[4]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill03[4]]}"
                          ]
                        },
                        "MDF_DamageTakenMaxLayer": {
                          "operator": "Variables[0] ({[Skill03[5]]}) || RETURN",
                          "displayLines": "{[Skill03[5]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill03[5]]}"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]",
                          "valuePerStack": {
                            "MDF_DamagePercentageLightTeam": {
                              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                              "displayLines": "{[Skill03[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill03[0]]}"
                              ]
                            },
                            "MDF_BaseAttack": {
                              "operator": "Variables[0] (BaseAttack) || RETURN",
                              "displayLines": "BaseAttack",
                              "constants": [],
                              "variables": [
                                "BaseAttack"
                              ]
                            },
                            "MDF_MaxHP": {
                              "operator": "Variables[0] (MaxHP) || RETURN",
                              "displayLines": "MaxHP",
                              "constants": [],
                              "variables": [
                                "MaxHP"
                              ]
                            },
                            "MDF_DirtyBloodRatioPerLayer": {
                              "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                              "displayLines": "{[Skill03[1]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill03[1]]}"
                              ]
                            },
                            "MDF_DirtyBloodMaxLayer": {
                              "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                              "displayLines": "{[Skill03[2]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill03[2]]}"
                              ]
                            },
                            "MDF_Chance": {
                              "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
                              "displayLines": "{[Skill03[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill03[3]]}"
                              ]
                            },
                            "MDF_DamageTakenUpRatio": {
                              "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                              "displayLines": "{[Skill03[4]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill03[4]]}"
                              ]
                            },
                            "MDF_DamageTakenMaxLayer": {
                              "operator": "Variables[0] ({[Skill03[5]]}) || RETURN",
                              "displayLines": "{[Skill03[5]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill03[5]]}"
                              ]
                            }
                          },
                          "casterAssign": "TargetSelf"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1505992097\">Enemy_W5_AsatPramad_BombCharging</a>[<span class=\"descriptionNumberColor\">Memes Incoming</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}.[[removeMemosprite]]"
                },
                "compareType": "<=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{{{Cyrene}}'s All Player Characters}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"506921583\">Enemy_W5_AsatPramad_Ability03Mark</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Asat Pramad: 0}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"190017911\">W5_AsatPramad_Part02ChangeCheck</a>"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Asat Pramad: 0}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 0}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__141473905\">W5_AsatPramad_Ability04</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{{{Cyrene}}'s All Player Characters}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]"
              },
              "noTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-270304885\">W5_AsatPramad_BattleScore1</a>"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Skill04TargetCount",
              "value": 1
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Character",
                    "livingState": "Mask_AliveOnly"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"480332578\">Enemy_W5_AsatPramad_Ability04Mark</a>",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"480332578\">Enemy_W5_AsatPramad_Ability04Mark</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}.[[removeMemosprite]]"
                    },
                    "compareType": "<=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (Skill04TargetCount) || RETURN",
                        "displayLines": "Skill04TargetCount",
                        "constants": [],
                        "variables": [
                          "Skill04TargetCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2
                        }
                      ],
                      "defaultEvents": []
                    }
                  ],
                  "failed": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (Skill04TargetCount) || RETURN",
                        "displayLines": "Skill04TargetCount",
                        "constants": [],
                        "variables": [
                          "Skill04TargetCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Skill04TargetCount",
                  "value": 1
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "type": "Character",
                "livingState": "Mask_AliveOnly"
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]"
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{{{Cyrene}}'s All Player Characters}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]"
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Skill04BombCount",
                  "modifierName": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (Skill04BombCount) || RETURN",
                    "displayLines": "Skill04BombCount",
                    "constants": [],
                    "variables": [
                      "Skill04BombCount"
                    ]
                  },
                  "Event": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Shield",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "BlockDamageExcludeDot",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "BlockDamage",
                            "invertCondition": true
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-78128030\">Enemy_W5_AsatPramad_DirtyBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphon</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                            "displayLines": "{[Skill03[2]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill03[2]]}"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DirtyBloodRatioPerLayer": {
                              "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                              "displayLines": "{[Skill03[1]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill03[1]]}"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Skill04BombCount",
                  "modifierName": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (Skill04BombCount) || RETURN",
                    "displayLines": "Skill04BombCount",
                    "constants": [],
                    "variables": [
                      "Skill04BombCount"
                    ]
                  },
                  "Event": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_13896) || RETURN",
                          "displayLines": "UnusedUnderThisBase_13896",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_13896"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"724771238\">Enemy_W5_AsatPramad_Bomb</a>[<span class=\"descriptionNumberColor\">Meme'd</span>]"
                }
              ]
            },
            "Trigger: Attack End",
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1505992097\">Enemy_W5_AsatPramad_BombCharging</a>[<span class=\"descriptionNumberColor\">Memes Incoming</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"480332578\">Enemy_W5_AsatPramad_Ability04Mark</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Asat Pramad: 0}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "NOT=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Asat Pramad: 0}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"190017911\">W5_AsatPramad_Part02ChangeCheck</a>"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 0}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__124696286\">W5_AsatPramad_Ability05</a>",
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
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1753386308\">Enemy_W5_AsatPramad_MainStory02DelayMark</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1753386308\">Enemy_W5_AsatPramad_MainStory02DelayMark</a>"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DebuffID01",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DebuffID02",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DebuffID03",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DebuffID04",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DebuffID05",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DebuffID06",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "CardCount",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DebuffFirstTimeCount",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (DebuffFirstTimeCount) || RETURN",
                    "displayLines": "DebuffFirstTimeCount",
                    "constants": [],
                    "variables": [
                      "DebuffFirstTimeCount"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Sequence Event",
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID_Result",
                              "value": 700001
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID_Result",
                              "value": 700005
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID_Result",
                              "value": 700017
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Sequence Event",
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Asat Pramad: 0}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1997389745\">Enemy_W5_AsatPramad_MainStory02LockHP</a>"
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "DebuffID_Result",
                                  "value": 700001
                                },
                                {
                                  "name": "Use Custom Character Function",
                                  "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "DebuffID_Result",
                                  "value": 700003
                                },
                                {
                                  "name": "Use Custom Character Function",
                                  "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID_Result",
                              "value": 700007
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID_Result",
                              "value": 700015
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Sequence Event",
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID_Result",
                              "value": 700009
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID_Result",
                              "value": 700019
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID_Result",
                              "value": 700013
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "DebuffFirstTimeCount",
                  "value": -1,
                  "max": 100
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DebuffRandomCount",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DebuffHighRiskyFlag",
                  "value": 0
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"4341073\">W5_AsatPramad_Ability05RandomSelect</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DebuffRandomCount",
                  "value": 0
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"4341073\">W5_AsatPramad_Ability05RandomSelect</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DebuffRandomCount",
                  "value": 0
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"4341073\">W5_AsatPramad_Ability05RandomSelect</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-799541487\">W5_AsatPramad_BonusSelect</a>"
                }
              ]
            },
            {
              "name": "Combat Buff Selection",
              "passed": [
                {
                  "name": "BUFF CHOICE",
                  "lightTarget": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: Skill05 Target1}}"
                  },
                  "lightBuff": {
                    "operator": "Variables[0] (DebuffID01) || RETURN",
                    "displayLines": "DebuffID01",
                    "constants": [],
                    "variables": [
                      "DebuffID01"
                    ]
                  },
                  "darkTarget": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: Skill05 Target2}}"
                  },
                  "darkBuff": {
                    "operator": "Variables[0] (DebuffID02) || RETURN",
                    "displayLines": "DebuffID02",
                    "constants": [],
                    "variables": [
                      "DebuffID02"
                    ]
                  },
                  "weight": {
                    "operator": "Variables[0] (DebuffWeight01) || RETURN",
                    "displayLines": "DebuffWeight01",
                    "constants": [],
                    "variables": [
                      "DebuffWeight01"
                    ]
                  }
                },
                {
                  "name": "BUFF CHOICE",
                  "lightTarget": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: Skill05 Target3}}"
                  },
                  "lightBuff": {
                    "operator": "Variables[0] (DebuffID03) || RETURN",
                    "displayLines": "DebuffID03",
                    "constants": [],
                    "variables": [
                      "DebuffID03"
                    ]
                  },
                  "darkTarget": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: Skill05 Target4}}"
                  },
                  "darkBuff": {
                    "operator": "Variables[0] (DebuffID04) || RETURN",
                    "displayLines": "DebuffID04",
                    "constants": [],
                    "variables": [
                      "DebuffID04"
                    ]
                  },
                  "weight": {
                    "operator": "Variables[0] (DebuffWeight02) || RETURN",
                    "displayLines": "DebuffWeight02",
                    "constants": [],
                    "variables": [
                      "DebuffWeight02"
                    ]
                  }
                },
                {
                  "name": "BUFF CHOICE",
                  "lightTarget": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: Skill05 Target5}}"
                  },
                  "lightBuff": {
                    "operator": "Variables[0] (DebuffID05) || RETURN",
                    "displayLines": "DebuffID05",
                    "constants": [],
                    "variables": [
                      "DebuffID05"
                    ]
                  },
                  "darkTarget": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: Skill05 Target6}}"
                  },
                  "darkBuff": {
                    "operator": "Variables[0] (DebuffID06) || RETURN",
                    "displayLines": "DebuffID06",
                    "constants": [],
                    "variables": [
                      "DebuffID06"
                    ]
                  },
                  "weight": {
                    "operator": "Variables[0] (DebuffWeight03) || RETURN",
                    "displayLines": "DebuffWeight03",
                    "constants": [],
                    "variables": [
                      "DebuffWeight03"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Asat Pramad: 0}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "NOT=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W5_AsatPramad_Ability05_End_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 0}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 0}}"
                  },
                  "priorityTag": "EnemyChangeState",
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W5_AsatPramad_Ability05_End_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 1}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "priorityTag": "EnemyChangeState",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__4341073\">W5_AsatPramad_Ability05RandomSelect</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{{{Cyrene}}'s All Player Characters}}"
              },
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": 0.4
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target List}}"
                    },
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DebuffHighRiskyFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DebuffHighRiskyFlag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Random Event",
                  "isUnique": true,
                  "odds": [
                    4,
                    4,
                    1,
                    2,
                    2,
                    1,
                    1
                  ],
                  "execute": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700005
                        }
                      ]
                    },
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700007
                        }
                      ]
                    },
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700009
                        }
                      ]
                    },
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700015
                        }
                      ]
                    },
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700017
                        }
                      ]
                    },
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700019
                        }
                      ]
                    },
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700021
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Random Event",
                  "isUnique": true,
                  "odds": [
                    4,
                    4,
                    3,
                    3,
                    1,
                    4,
                    4,
                    1,
                    1,
                    2,
                    0.5
                  ],
                  "execute": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700001
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffHighRiskyFlag",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Asat Pramad: 0}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1997389745\">Enemy_W5_AsatPramad_MainStory02LockHP</a>"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID_Result",
                              "value": 700001
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID_Result",
                              "value": 700003
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffHighRiskyFlag",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700005
                        }
                      ]
                    },
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700007
                        }
                      ]
                    },
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700009
                        }
                      ]
                    },
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700011
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffHighRiskyFlag",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700013
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffHighRiskyFlag",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700015
                        }
                      ]
                    },
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700017
                        }
                      ]
                    },
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700019
                        }
                      ]
                    },
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DebuffID_Result",
                          "value": 700021
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "DebuffRandomCount",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DebuffRandomCount",
                "compareType": "<=",
                "value2": 50
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DebuffID_Result",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (DebuffID01) || RETURN",
                          "displayLines": "DebuffID01",
                          "constants": [],
                          "variables": [
                            "DebuffID01"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DebuffID_Result",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (DebuffID03) || RETURN",
                          "displayLines": "DebuffID03",
                          "constants": [],
                          "variables": [
                            "DebuffID03"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DebuffID_Result",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (DebuffID05) || RETURN",
                          "displayLines": "DebuffID05",
                          "constants": [],
                          "variables": [
                            "DebuffID05"
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"4341073\">W5_AsatPramad_Ability05RandomSelect</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-799541487\">W5_AsatPramad_BonusSelect</a>",
          "parse": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (DebuffID_Result) || RETURN",
                "displayLines": "DebuffID_Result",
                "constants": [],
                "variables": [
                  "DebuffID_Result"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 700001,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (CardCount) || RETURN",
                        "displayLines": "CardCount",
                        "constants": [],
                        "variables": [
                          "CardCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID01",
                              "value": 700001
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID02",
                              "value": 700002
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight01",
                              "value": 15
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID03",
                              "value": 700001
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID04",
                              "value": 700002
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight02",
                              "value": 15
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID05",
                              "value": 700001
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID06",
                              "value": 700002
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight03",
                              "value": 15
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 700003,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (CardCount) || RETURN",
                        "displayLines": "CardCount",
                        "constants": [],
                        "variables": [
                          "CardCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID01",
                              "value": 700003
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID02",
                              "value": 700004
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight01",
                              "value": 10
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID03",
                              "value": 700003
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID04",
                              "value": 700004
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight02",
                              "value": 10
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID05",
                              "value": 700003
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID06",
                              "value": 700004
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight03",
                              "value": 10
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 700005,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (CardCount) || RETURN",
                        "displayLines": "CardCount",
                        "constants": [],
                        "variables": [
                          "CardCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID01",
                              "value": 700005
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID02",
                              "value": 700006
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight01",
                              "value": 8
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID03",
                              "value": 700005
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID04",
                              "value": 700006
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight02",
                              "value": 8
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID05",
                              "value": 700005
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID06",
                              "value": 700006
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight03",
                              "value": 8
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 700007,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (CardCount) || RETURN",
                        "displayLines": "CardCount",
                        "constants": [],
                        "variables": [
                          "CardCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID01",
                              "value": 700007
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID02",
                              "value": 700008
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight01",
                              "value": 11
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID03",
                              "value": 700007
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID04",
                              "value": 700008
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight01",
                              "value": 11
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID05",
                              "value": 700007
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID06",
                              "value": 700008
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight01",
                              "value": 11
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 700009,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (CardCount) || RETURN",
                        "displayLines": "CardCount",
                        "constants": [],
                        "variables": [
                          "CardCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID01",
                              "value": 700009
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID02",
                              "value": 700010
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              "maxTargets": 1,
                              "conditions": {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "compareType": "=",
                                "value2": 5
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight01",
                              "value": 7
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID03",
                              "value": 700009
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID04",
                              "value": 700010
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              "maxTargets": 1,
                              "conditions": {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "compareType": "=",
                                "value2": 5
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight02",
                              "value": 7
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID05",
                              "value": 700009
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID06",
                              "value": 700010
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              "maxTargets": 1,
                              "conditions": {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "compareType": "=",
                                "value2": 5
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight03",
                              "value": 7
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 700011,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (CardCount) || RETURN",
                        "displayLines": "CardCount",
                        "constants": [],
                        "variables": [
                          "CardCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID01",
                              "value": 700011
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID02",
                              "value": 700012
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight01",
                              "value": 12
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID03",
                              "value": 700011
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID04",
                              "value": 700012
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight02",
                              "value": 12
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID05",
                              "value": 700011
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID06",
                              "value": 700012
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight03",
                              "value": 12
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 700013,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (CardCount) || RETURN",
                        "displayLines": "CardCount",
                        "constants": [],
                        "variables": [
                          "CardCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID01",
                              "value": 700013
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID02",
                              "value": 700014
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight01",
                              "value": 13
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID03",
                              "value": 700013
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID04",
                              "value": 700014
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight02",
                              "value": 13
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID05",
                              "value": 700013
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID06",
                              "value": 700014
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight03",
                              "value": 13
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 700015,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (CardCount) || RETURN",
                        "displayLines": "CardCount",
                        "constants": [],
                        "variables": [
                          "CardCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID01",
                              "value": 700015
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID02",
                              "value": 700016
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}.[[sortByHPCurrent]].[[reverse]]"
                              },
                              "maxTargets": 1,
                              "ifTargetFound": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                                }
                              ]
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              "maxTargets": 1,
                              "conditions": {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "compareType": "=",
                                "value2": 5
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight01",
                              "value": 3
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID03",
                              "value": 700015
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID04",
                              "value": 700016
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}.[[sortByHPCurrent]].[[reverse]]"
                              },
                              "maxTargets": 1,
                              "ifTargetFound": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                                }
                              ]
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              "maxTargets": 1,
                              "conditions": {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "compareType": "=",
                                "value2": 5
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight02",
                              "value": 3
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID05",
                              "value": 700015
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID06",
                              "value": 700016
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}.[[sortByHPCurrent]].[[reverse]]"
                              },
                              "maxTargets": 1,
                              "ifTargetFound": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                                }
                              ]
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              "maxTargets": 1,
                              "conditions": {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "compareType": "=",
                                "value2": 5
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight03",
                              "value": 3
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 700017,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (CardCount) || RETURN",
                        "displayLines": "CardCount",
                        "constants": [],
                        "variables": [
                          "CardCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID01",
                              "value": 700017
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID02",
                              "value": 700018
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight01",
                              "value": 2
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID03",
                              "value": 700017
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID04",
                              "value": 700018
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight02",
                              "value": 2
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID05",
                              "value": 700017
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID06",
                              "value": 700018
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight03",
                              "value": 2
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 700019,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (CardCount) || RETURN",
                        "displayLines": "CardCount",
                        "constants": [],
                        "variables": [
                          "CardCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID01",
                              "value": 700019
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID02",
                              "value": 700020
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight01",
                              "value": 6
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID03",
                              "value": 700019
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID04",
                              "value": 700020
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight02",
                              "value": 6
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID05",
                              "value": 700019
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID06",
                              "value": 700020
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight03",
                              "value": 6
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 700021,
                  "execute": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (CardCount) || RETURN",
                        "displayLines": "CardCount",
                        "constants": [],
                        "variables": [
                          "CardCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID01",
                              "value": 700021
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID02",
                              "value": 700022
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1297194573\">Enemy_W5_AsatPramad_BonusTarget01</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1246861716\">Enemy_W5_AsatPramad_BonusTarget02</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight01",
                              "value": 1
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID03",
                              "value": 700021
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID04",
                              "value": 700022
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1263639335\">Enemy_W5_AsatPramad_BonusTarget03</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1213306478\">Enemy_W5_AsatPramad_BonusTarget04</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight02",
                              "value": 1
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID05",
                              "value": 700021
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffID06",
                              "value": 700022
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1230084097\">Enemy_W5_AsatPramad_BonusTarget05</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1179751240\">Enemy_W5_AsatPramad_BonusTarget06</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DebuffWeight03",
                              "value": 1
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                }
              ],
              "defaultEvents": []
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CardCount",
              "value": 1
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1882512440\">W5_AsatPramad_UltraPhase03</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Asat Pramad: 0}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"175633574\">Enemy_W5_AsatPramad_MainStory02</a>"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
                  },
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
                      },
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Reset Toughness",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Exit Broken-State",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
                      },
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Modifier Behavior Flag(s)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagNames": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W5_AsatPramad_MainStory02Ability08",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 2}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "EnemyChangeState",
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 2}}"
                  },
                  "ability": "Monster_W5_AsatPramad_Ability08_Part01",
                  "isTrigger": true
                },
                "Wait for Pending Ability Completions"
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1839166892\">W5_AsatPramad_Part02ChangeTo00</a>",
          "parse": [
            {
              "name": "Change Character UI",
              "characterName": "Lord of Saṃvartasthāyi, Asat Pramad: \"Formation\"",
              "target": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "icon": "Monster_8015030.png"
            },
            {
              "name": "Change Character Model",
              "target": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-490130876\">Enemy_W5_AsatPramad_Effect01</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-473353257\">Enemy_W5_AsatPramad_Effect00</a>"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1822389273\">W5_AsatPramad_Part02ChangeTo01</a>",
          "parse": [
            {
              "name": "Change Character UI",
              "characterName": "Lord of Saṃvartasthāyi, Asat Pramad: \"Existence\"",
              "target": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "icon": "Monster_8015040.png"
            },
            {
              "name": "Change Character Model",
              "target": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-473353257\">Enemy_W5_AsatPramad_Effect00</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-490130876\">Enemy_W5_AsatPramad_Effect01</a>"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__190017911\">W5_AsatPramad_Part02ChangeCheck</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentFace",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1822389273\">W5_AsatPramad_Part02ChangeTo01</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurrentFace",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1839166892\">W5_AsatPramad_Part02ChangeTo00</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurrentFace",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1545281796\">W5_AsatPramad_Part03PosResetAfterAbility</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__964206682\">W5_AsatPramad_Part03BEBreakSet</a>",
          "parse": [
            {
              "name": "Set Mapping Point",
              "point": "SelectRoot",
              "mapTo": "HeadPhase03",
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "CameraRoot",
              "mapTo": "CameraRootPhase03",
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "Root",
              "mapTo": "RootPointPhase03",
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "Origin",
              "mapTo": "RootPointPhase03",
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "SelectRoot",
              "mapTo": "HeadPhase03",
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 1}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "CameraRoot",
              "mapTo": "CameraRootPhase03",
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 1}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "Root",
              "mapTo": "RootPointPhase03",
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 1}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "Origin",
              "mapTo": "RootPointPhase03",
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 1}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "SelectRoot",
              "mapTo": "HeadPhase03",
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 2}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "CameraRoot",
              "mapTo": "CameraRootPhase03",
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 2}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "Root",
              "mapTo": "RootPointPhase03",
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 2}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "Origin",
              "mapTo": "RootPointPhase03",
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 2}}"
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-368045394\">W5_AsatPramad_Part03BEBreakRecover</a>",
          "parse": [
            {
              "name": "Set Mapping Point",
              "point": "SelectRoot",
              "reset": true,
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "CameraRoot",
              "reset": true,
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "Root",
              "reset": true,
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "Origin",
              "reset": true,
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 0}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "SelectRoot",
              "reset": true,
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 1}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "CameraRoot",
              "reset": true,
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 1}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "Root",
              "reset": true,
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 1}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "Origin",
              "reset": true,
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 1}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "SelectRoot",
              "reset": true,
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 2}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "CameraRoot",
              "reset": true,
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 2}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "Root",
              "reset": true,
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 2}}"
              }
            },
            {
              "name": "Set Mapping Point",
              "point": "Origin",
              "reset": true,
              "target": {
                "name": "Target Name",
                "target": "{{Asat Pramad: 2}}"
              }
            }
          ]
        }
      ],
      "references": []
    },
    "8015040_BE_BattleEvents": {
      "fileName": "8015040_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 20050,
          "team": "Enemy Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEventAbility_Monster_W5_AsatPramad_Part03Act00"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": 120
            }
          ],
          "hardLevelEvent": true
        },
        {
          "name": "Battle Event Construction",
          "ID": 20051,
          "team": "Enemy Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEventAbility_Monster_W5_AsatPramad_Part03Act01"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": 140
            }
          ],
          "hardLevelEvent": true
        },
        {
          "name": "Battle Event Construction",
          "ID": 60044,
          "team": "Player Team",
          "eventType": "Assist",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevelEvent": true,
          "actionDescription": "Deals massive DMG to all enemy targets, applies \"Knockdown\" to Asat Pramad, and causes all ally targets to immediately take action. A \"Knockdown\" countdown appears on the Action Order. At the start of the countdown's turn, Lord of Saṃvartasthāyi, Asat Pramad exits the \"Knockdown\" state and immediately takes action."
        },
        {
          "name": "Battle Event Construction",
          "ID": 20046,
          "team": "Enemy Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEventAbility_Monster_W5_AsatPramad_Ultra"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": 95
            }
          ],
          "hardLevelEvent": true
        },
        {
          "name": "Battle Event Construction",
          "ID": 20045,
          "team": "Enemy Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEventAbility_Monster_W5_AsatPramad_Summon"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": 115
            }
          ],
          "hardLevelEvent": true,
          "actionDescription": "Upon every action, summons \"Comediologist.\""
        }
      ],
      "references": []
    },
    "8015040_Handling": {
      "fileName": "8015040_Handling",
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
          "options": [
            {
              "name": "HANDLER OPTION GROUP",
              "option": "Phase01",
              "goal": [
                {
                  "name": "HANDLER OPTION",
                  "option": "单攻",
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
                          "variableName": "AIFlag",
                          "value": 1
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "AOE",
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
                          "variableName": "AIFlag",
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "起爆准备",
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
                          "variableName": "AIFlag",
                          "value": 3
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "起爆",
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
                          "variableName": "AIFlag",
                          "value": 4
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill04"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "单攻",
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
                          "variableName": "AIFlag",
                          "value": 7
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 6,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "AOE",
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
                          "variableName": "AIFlag",
                          "value": 6
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 5,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "起爆准备",
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
                          "variableName": "AIFlag",
                          "value": 8
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 7,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "起爆",
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
                          "variableName": "AIFlag",
                          "value": 9
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill04"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 8,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "单攻",
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
                          "variableName": "AIFlag",
                          "value": 12
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 11,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "AOE",
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
                          "variableName": "AIFlag",
                          "value": 11
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 10,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "起爆准备",
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
                          "variableName": "AIFlag",
                          "value": 10
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill05"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 12,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "起爆",
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
                          "variableName": "AIFlag",
                          "value": 5
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill07"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 9,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "单攻",
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
                          "variableName": "AIFlag",
                          "value": 15
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 14,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "AOE",
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
                          "variableName": "AIFlag",
                          "value": 14
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 13,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "起爆准备",
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
                          "variableName": "AIFlag",
                          "value": 16
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill06"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 15,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "起爆",
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
                          "variableName": "AIFlag",
                          "value": 13
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill08"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 16,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "单攻",
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
                          "variableName": "AIFlag",
                          "value": 21
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 20,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "AOE",
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
                          "variableName": "AIFlag",
                          "value": 1
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 21,
                        "contextScope": "TargetEntity"
                      }
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION GROUP",
              "option": "Phase02",
              "goal": [
                {
                  "name": "HANDLER OPTION",
                  "option": "起爆准备",
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
                          "variableName": "AIFlag",
                          "value": 3
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "单攻",
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
                          "variableName": "AIFlag",
                          "value": 2
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "起爆",
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
                          "variableName": "AIFlag",
                          "value": 6
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill04"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 5,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "抽卡",
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
                          "variableName": "AIFlag",
                          "value": 1
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill05"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 8,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "单体",
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
                          "variableName": "AIFlag",
                          "value": 8
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 7,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "AOE",
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
                          "variableName": "AIFlag",
                          "value": 4
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "抽卡",
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
                          "variableName": "AIFlag",
                          "value": 5
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill05"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "AOE",
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
                          "variableName": "AIFlag",
                          "value": 7
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 6,
                        "contextScope": "TargetEntity"
                      }
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION GROUP",
              "option": "Phase03",
              "goal": [
                {
                  "name": "HANDLER OPTION",
                  "option": "连携1",
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
                          "variableName": "AIFlag",
                          "value": 1
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill06"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "单攻",
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
                          "variableName": "AIFlag",
                          "value": 2
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01P3"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "连携2",
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
                          "variableName": "AIFlag",
                          "value": 3
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill06"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "AOE",
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
                          "variableName": "AIFlag",
                          "value": 4
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02P3"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "空过",
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
                          "variableName": "AIFlag",
                          "value": 12
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill09"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 12,
                        "contextScope": "TargetEntity"
                      }
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      }
                    ]
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