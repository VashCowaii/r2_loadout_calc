const configAbility = {
  "fileName": "8015050_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__594195286\">Enemy_W5_AsatPramad_Debuff_05_Modifier</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "Shield"
      ],
      "description": "Gains a Shield that can offset DMG.",
      "type": "Buff",
      "effectName": "Shield",
      "statusName": "Shield",
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
              "abilityName": "CommomAbility_W5_AsatPramad_00",
              "isPool": true
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
}