const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Feixiao",
  "trimCharacterName": "Feixiao",
  "abilityList": [
    "Feixiao_Modifiers",
    "Feixiao_Feixiao_Trace03",
    "Feixiao_Feixiao_Trace02",
    "Feixiao_Feixiao_Trace01",
    "Feixiao_Feixiao_Eidolon6",
    "Feixiao_Feixiao_TechniqueSP",
    "Feixiao_LocalPlayer_StandardAbility_AttackBreak",
    "Feixiao_LocalPlayer_Feixiao_TechniqueUsage",
    "Feixiao_LocalPlayer_Feixiao_NormalAtk01_RemoveMazebuff",
    "Feixiao_LocalPlayer_Feixiao_NormalAtk01",
    "Feixiao_Feixiao_TechniqueInLevel",
    "Feixiao_Feixiao_Insert_Part02",
    "Feixiao_Feixiao_Insert_Part01",
    "Feixiao_Feixiao_Insert_SelectTargetSelf",
    "Feixiao_Feixiao_Insert_SelectTarget",
    "Feixiao_Feixiao_PassiveAbility01",
    "Feixiao_Feixiao_Ability03_ComboFinish2_Part02",
    "Feixiao_Feixiao_Ability03_ComboFinish2_Part01",
    "Feixiao_Feixiao_Ability21_Anim2_Part02",
    "Feixiao_Feixiao_Ability21_Anim1_Part02",
    "Feixiao_Feixiao_Ability21_Anim2_Part01",
    "Feixiao_Feixiao_Ability21_Anim1_Part01",
    "Feixiao_Feixiao_Ability21_Entry",
    "Feixiao_Feixiao_Ability03_ComboFinish1_Part02",
    "Feixiao_Feixiao_Ability03_ComboFinish1_Part01",
    "Feixiao_Feixiao_Ability11_Anim4_Part02",
    "Feixiao_Feixiao_Ability11_Anim3_Part02",
    "Feixiao_Feixiao_Ability11_Anim2_Part02",
    "Feixiao_Feixiao_Ability11_Anim1_Part02",
    "Feixiao_Feixiao_Ability11_Anim4_Part01",
    "Feixiao_Feixiao_Ability11_Anim3_Part01",
    "Feixiao_Feixiao_Ability11_Anim2_Part01",
    "Feixiao_Feixiao_Ability11_Anim1_Part01",
    "Feixiao_Feixiao_Ability11_Entry",
    "Feixiao_Feixiao_Ability03_Finish_W2Main_Part01",
    "Feixiao_Feixiao_Ability03_Finish_Part02",
    "Feixiao_Feixiao_Ability03_Finish_Part01",
    "Feixiao_Feixiao_Ability03_Part02",
    "Feixiao_Feixiao_Ability03_Part01",
    "Feixiao_Feixiao_Ability03_EnterReady",
    "Feixiao_Feixiao_Ability02_Part02",
    "Feixiao_Feixiao_Ability02_Part01",
    "Feixiao_Feixiao_Ability01_Part02",
    "Feixiao_Feixiao_Ability01_Part01",
    "Feixiao_Functions"
  ],
  "abilityObject": {
    "Feixiao_Modifiers": {
      "fileName": "Feixiao_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__450225831\">ADV_StageAbility_Maze_Feixiao_Achievement</a>",
          "modifierTasks": [
            {
              "name": "Achievement",
              "relatedAchievements": [
                {
                  "title": "I Am the Storm",
                  "desc": "Use Feixiao's Technique and continuously pull in #1 or more enemies for longer than #2 seconds",
                  "rarity": "Low",
                  "type": "Hidden until Completion",
                  "params": [
                    5,
                    30
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__164111166\">ADV_StageAbility_Maze_Feixiao_GatheredEnemyElite_Visual</a>",
          "counter": 1,
          "stackType": "Replace",
          "modifierFlags": [
            "LoopHit"
          ],
          "onApplication": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1694983067\">ADV_StageAbility_Maze_Feixiao_GatheredEnemy_Visual</a>",
          "counter": 1,
          "stackType": "Replace",
          "modifierFlags": [
            "Confine"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2059238450\">ADV_StageAbility_Maze_Feixiao_GatheredEnemy</a>",
          "counter": 1,
          "stackType": "Replace",
          "onCreation": [
            {
              "name": "Add Target Parameter",
              "variableName": "_Feixiao_Achievement_Count",
              "readTarget": {
                "name": "Add Target by Summoned Units",
                "targetSummoner": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "summonID": 12201
              },
              "paramTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "TargetList": [
                    {
                      "name": "Add Target by Summoned Units",
                      "targetSummoner": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "summonID": 12201
                    }
                  ]
                },
                "compareType": ">=",
                "value2": 5
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"450225831\">ADV_StageAbility_Maze_Feixiao_Achievement</a>",
                  "duration": -1
                }
              ]
            }
          ],
          "onRemoval": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "TargetList": [
                    {
                      "name": "Add Target by Summoned Units",
                      "targetSummoner": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "summonID": 12201
                    }
                  ]
                },
                "compareType": ">=",
                "value2": 5
              },
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"450225831\">ADV_StageAbility_Maze_Feixiao_Achievement</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1609663662\">ADV_StageAbility_Maze_Feixiao_Attack_HolyShield</a>",
          "counter": 1,
          "stackType": "Merge",
          "modifierFlags": [
            "HolyShield"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__698297764\">ADV_StageAbility_Maze_Feixiao_Attack</a>",
          "counter": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-147386284\">ADV_StageAbility_Maze_Feixiao_Visual</a>",
          "counter": 1,
          "stackType": "Refresh",
          "onCreation": [
            {
              "name": "Create Overworld Entity",
              "summonID": 12203
            },
            {
              "name": "IF",
              "conditions": {
                "name": "In Motion (Overworld)",
                "flag": "FastRun"
              }
            }
          ],
          "onRemoval": [
            {
              "name": "Remove Overworld Entity",
              "targetSummonEntity": {
                "name": "Add Target by Summoned Units",
                "targetSummoner": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "summonID": 12203
              }
            }
          ],
          "onStageExit": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1139036944\">ADV_StageAbility_Maze_Feixiao_SummonUnitLifetimer</a>",
          "counter": 1,
          "stackType": "Refresh",
          "onCreation": [
            {
              "name": "Create Overworld Entity",
              "summonID": 12201
            }
          ],
          "onRemoval": [
            {
              "name": "Remove Overworld Entity",
              "targetSummonEntity": {
                "name": "Add Target by Summoned Units",
                "targetSummoner": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "summonID": 12201
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__769308695\">ADV_StageAbility_Maze_Feixiao</a>",
          "counter": 1,
          "stackType": "Refresh",
          "onCreation": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "CDF_IsEnterBattle"
            }
          ],
          "onRemoval": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-147386284\">ADV_StageAbility_Maze_Feixiao_Visual</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CDF_IsEnterBattle",
                "compareType": "=",
                "value2": 0
              }
            }
          ],
          "onStageExit": [
            "Modifier Deletes Itself"
          ],
          "onStack": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-147386284\">ADV_StageAbility_Maze_Feixiao_Visual</a>"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1813368649\">StageAbility_Maze_Feixiao_Modifier_GainSP</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
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
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "displayLines": "1"
                      },
                      "isFixed": "(Fixed)",
                      "ignoreBlock": true,
                      "isSpecialEnergy": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__965737321\">M_Feixiao_UltraTarget_FinalHitFlag</a>",
          "stackType": "ReplaceByCaster",
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"176878499\">M_Feixiao_UltraTarget_Mark</a>"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1145384524\">M_Feixiao_UltraTarget_CutFlag</a>",
          "stackType": "ReplaceByCaster",
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"176878499\">M_Feixiao_UltraTarget_Mark</a>"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__385618061\">M_Feixiao_UltraTarget_FadeInFlag</a>",
          "stackType": "ReplaceByCaster",
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"176878499\">M_Feixiao_UltraTarget_Mark</a>"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1192517657\">M_Feixiao_UltraTarget_Visual_Stun</a>",
          "modifierFlags": [
            "STAT_Stun_Effect"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1169885953\">M_Feixiao_UltraTarget_Visual_Confine</a>",
          "modifierFlags": [
            "STAT_Confine_Effect"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1478735185\">M_Feixiao_AchievementFlag</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1503840637\">M_Feixiao_InsertCheckSelf</a>",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"393261393\">Feixiao_InsertRetargetSelf</a>"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -55,
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"393261393\">Feixiao_InsertRetargetSelf</a>"
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"393261393\">Feixiao_InsertRetargetSelf</a>"
                }
              ]
            },
            {
              "eventTrigger": "Batch: Enemy Arrival",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"393261393\">Feixiao_InsertRetargetSelf</a>"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
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
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Living State",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "livingState": "Mask_AliveOrRevivable"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"393261393\">Feixiao_InsertRetargetSelf</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__393261393\">Feixiao_InsertRetargetSelf</a>",
              "parse": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "living": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Feixiao_Insert_SelectTargetSelf",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
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
          "for": "<a class=\"gModGreen\" id=\"mod__248447225\">M_Feixiao_InsertCheck</a>",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-238911265\">Feixiao_InsertRetarget</a>"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -55,
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-238911265\">Feixiao_InsertRetarget</a>"
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-238911265\">Feixiao_InsertRetarget</a>"
                }
              ]
            },
            {
              "eventTrigger": "Batch: Enemy Arrival",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-238911265\">Feixiao_InsertRetarget</a>"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
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
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Living State",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "livingState": "Mask_AliveOrRevivable"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-238911265\">Feixiao_InsertRetarget</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-238911265\">Feixiao_InsertRetarget</a>",
              "parse": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "living": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Feixiao_Insert_SelectTarget",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
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
          "for": "<a class=\"gModGreen\" id=\"mod__1006222027\">Feixiao_Eidolon4_Property</a>[<span class=\"descriptionNumberColor\">Stormward I Hear</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "Stormward I Hear",
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
                    "displayLines": "MDF_PropertyRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-343822525\">Feixiao_Eidolon2_CD</a>[<span class=\"descriptionNumberColor\">Moonward I Wish</span>]",
          "counter": 3,
          "description": "In the Talent's effect, for every 1 instance of Follow-Up ATK launched by ally targets, Feixiao gains 1 point of \"Flying Aureus.\" This effect can still trigger <span class=\"descriptionNumberColor\">MDF_Count</span> time(s).",
          "type": "Other",
          "statusName": "Moonward I Wish"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1384650414\">Feixiao_Eidolon1_Property</a>[<span class=\"descriptionNumberColor\">Skyward I Quell</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Each stack additionally increases the Ultimate DMG dealt by an amount equal to <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> of the original DMG.",
          "type": "Buff",
          "statusName": "Skyward I Quell",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-446302809\">ModifyDamageData_IndependentDamageAddedRatio</a>",
                      "variables": {
                        "parameter[0]_IndependentDamageAddedRatio": {
                          "displayLines": "(MDF_PropertyRatio * MDF_Layer)"
                        }
                      }
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-909564099\">Feixiao_InsertIsReady</a>[<span class=\"descriptionNumberColor\">Thunderhunt</span>]",
          "description": "The Talent's Follow-Up ATK can now be triggered.",
          "type": "Other",
          "statusName": "Thunderhunt"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1539174332\">Feixiao_Ultramode_StanceBreakPreshow</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Feixiao Ult Target}}"
                    },
                    "flagName": "Break"
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                  "value": {
                    "displayLines": "1"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Feixiao Ult Target}}"
                    },
                    "flagName": "Break"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1525021884\">Feixiao_Ultramode</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ForceStanceDamage"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "showAsForcedReduction": true
          },
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Toggle View Mode",
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "ComboHitCount"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "Combo1_Loop_Index"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "Combo2_Loop_Index"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "ComboType"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "Feixiao_AchievementPrecheck"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                "Toggle View Mode",
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill03",
                  "skillSlot": "Ultimate",
                  "enableSecondaryType": "ControlSkill03"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Ultimate"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Ultimate",
                  "subAbilityIndex": 1
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Feixiao Ult Target}}"
                    },
                    "flagName": "Break"
                  },
                  "passed": [
                    {
                      "name": "Update Ability Enhance Button",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "display": "Show",
                      "abilityName": "Ultimate"
                    },
                    {
                      "name": "Update Ability Enhance Button",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "display": "Hide",
                      "abilityName": "Ultimate",
                      "subAbilityIndex": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Ability Enhance Button",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "display": "Hide",
                      "abilityName": "Ultimate"
                    },
                    {
                      "name": "Update Ability Enhance Button",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "display": "Show",
                      "abilityName": "Ultimate",
                      "subAbilityIndex": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "value": 1
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill31",
                  "skillSlot": "Ultimate",
                  "enableSecondaryType": "ControlSkill03"
                }
              ]
            },
            {
              "eventTrigger": "Leave Battle"
            },
            {
              "eventTrigger": "End Broken State [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Feixiao Ult Target}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1539174332\">Feixiao_Ultramode_StanceBreakPreshow</a>"
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
    "Feixiao_Feixiao_Trace03": {
      "fileName": "Feixiao_Feixiao_Trace03",
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
          "modifier": "<a class=\"gModGreen\" id=\"79070567\">M_Feixiao_Tree03</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2094330090\">Feixiao_AttackProperty</a>[<span class=\"descriptionNumberColor\">Boltcatch</span>]",
          "stackType": "ReplaceByCaster",
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Boltcatch",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "displayLines": "MDF_PropertyRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__79070567\">M_Feixiao_Tree03</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2094330090\">Feixiao_AttackProperty</a>[<span class=\"descriptionNumberColor\">Boltcatch</span>]",
                      "duration": {
                        "displayLines": "3"
                      },
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "displayLines": "0.48"
                        }
                      }
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
      }
    },
    "Feixiao_Feixiao_Trace02": {
      "fileName": "Feixiao_Feixiao_Trace02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-226054239\">M_Feixiao_Trace02</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__694697928\">M_Feixiao_Trace02_Sub</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Attack-Type Extension",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeToExtend": "Ultimate",
                  "isRemove": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Attack-Type Extension",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeToExtend": "Ultimate",
                  "extendTypeTo": "Follow-up"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-226054239\">M_Feixiao_Trace02</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                          "value": "0.36"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"694697928\">M_Feixiao_Trace02_Sub</a>"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"694697928\">M_Feixiao_Trace02_Sub</a>"
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
      }
    },
    "Feixiao_Feixiao_Trace01": {
      "fileName": "Feixiao_Feixiao_Trace01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-276387096\">M_Feixiao_Trace01</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-276387096\">M_Feixiao_Trace01</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
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
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "displayLines": "3"
                      },
                      "isFixed": "(Fixed)",
                      "ignoreBlock": true,
                      "isSpecialEnergy": true
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
      }
    },
    "Feixiao_Feixiao_Eidolon6": {
      "fileName": "Feixiao_Feixiao_Eidolon6",
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
          "modifier": "<a class=\"gModGreen\" id=\"1082253554\">M_Feixiao_Eidolon6</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1082253554\">M_Feixiao_Eidolon6</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                          "value": "0.2"
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
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Feixiao_Feixiao_TechniqueSP": {
      "fileName": "Feixiao_Feixiao_TechniqueSP",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1813368649\">StageAbility_Maze_Feixiao_Modifier_GainSP</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Feixiao_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Feixiao_LocalPlayer_StandardAbility_AttackBreak",
      "skillTrigger": "MazeCommonPassve01",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"951318209\">ADV_StageAbility_MazeStandard_OnStageEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-247093964\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Standard</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Physical"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"761715744\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Physical</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Fire"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-380086631\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Fire</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Ice"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-97518784\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Ice</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Thunder"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1597144751\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Thunder</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Wind"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1816746695\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Wind</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Quantum"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-418599870\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Quantum</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Imaginary"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1882459002\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Imaginary</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1927069485\">ADV_StageAbility_MazeStandard_ListenEnterBattle_TeamLeader</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Feixiao_LocalPlayer_Feixiao_TechniqueUsage": {
      "fileName": "Feixiao_LocalPlayer_Feixiao_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "122004()",
          "duration": {
            "displayLines": "(20 + 0.5)"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "122001(Avatar_Feixiao_00_SkillMazeSP)",
          "duration": {
            "displayLines": "20"
          },
          "valuePerStack": {
            "MDF_MoveSpeedRatio": {
              "displayLines": "0.5"
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "In Motion (Overworld)",
                "flag": "FastRun"
              },
              {
                "name": "In Motion (Overworld)",
                "flag": "Run"
              },
              {
                "name": "In Motion (Overworld)",
                "flag": "Walk"
              }
            ]
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Feixiao_LocalPlayer_Feixiao_NormalAtk01_RemoveMazebuff": {
      "fileName": "Feixiao_LocalPlayer_Feixiao_NormalAtk01_RemoveMazebuff",
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
          "modifier": null,
          "overworldID": 122001
        },
        "Submit Technique Use"
      ],
      "references": [],
      "triggerType": "Free",
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Feixiao_LocalPlayer_Feixiao_NormalAtk01": {
      "fileName": "Feixiao_LocalPlayer_Feixiao_NormalAtk01",
      "skillTrigger": "NormalAtk",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier (OVERWORLD)",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"769308695\">ADV_StageAbility_Maze_Feixiao</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "CDF_IsEnterBattle"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1609663662\">ADV_StageAbility_Maze_Feixiao_Attack_HolyShield</a>",
              "counter": 1,
              "duration": 1
            },
            {
              "name": "IF",
              "conditions": "Ability Has a Target"
            },
            {
              "name": "Create Overworld Entity",
              "summonID": 12202
            },
            "Deleted bullshit",
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-147386284\">ADV_StageAbility_Maze_Feixiao_Visual</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": null,
              "overworldID": 122004
            },
            {
              "name": "Remove Overworld Entity",
              "targetSummonEntity": {
                "name": "Add Target by Summoned Units",
                "targetSummoner": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "summonID": 12201
              }
            },
            {
              "name": "IF",
              "conditions": "Ability Has a Target"
            },
            {
              "name": "Overworld Attack Instance",
              "onBattle": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": null,
                  "ID": "122002(SkillMaze)"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "CDF_IsEnterBattle"
                }
              ],
              "entryTargetType": "AllHitTarget"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CDF_IsEnterBattle",
                "compareType": "<=",
                "value2": 0
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": null,
              "overworldID": 122001
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1609663662\">ADV_StageAbility_Maze_Feixiao_Attack_HolyShield</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": "Ability Has a Target",
              "passed": [
                "Deleted bullshit",
                {
                  "name": "Overworld Attack Instance"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "In Motion (Overworld)",
                    "flag": "FastRun"
                  },
                  "passed": [
                    "Deleted bullshit"
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "In Motion (Overworld)",
                        "flag": "Run"
                      },
                      "passed": [
                        "Deleted bullshit"
                      ],
                      "failed": [
                        "Deleted bullshit"
                      ]
                    }
                  ]
                },
                {
                  "name": "Overworld Attack Instance"
                }
              ]
            }
          ]
        }
      ],
      "onAbortReg": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1609663662\">ADV_StageAbility_Maze_Feixiao_Attack_HolyShield</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Feixiao_Feixiao_TechniqueInLevel": {
      "fileName": "Feixiao_Feixiao_TechniqueInLevel",
      "childAbilityList": [
        "Feixiao_Feixiao_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1813550053\">StageAbility_Maze_Feixiao_Modifier_Attack</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1813368649\">StageAbility_Maze_Feixiao_Modifier_GainSP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-182307548\">M_Feixiao_Maze_ForceCritical</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-182307548\">M_Feixiao_Maze_ForceCritical</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Technique"
                        ]
                      },
                      {
                        "name": "Has DMG Instance Tag",
                        "tag": "Feixiao_00_MazeAttack"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "AttackData",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateOverride</span>&nbsp;",
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1813550053\">StageAbility_Maze_Feixiao_Modifier_Attack</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -60,
              "execute": [
                {
                  "name": "Define Custom Variable with Stage Wave Count",
                  "scope": "ContextModifier",
                  "variableName": "MDF_WaveStageCount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": ">",
                    "value2": 1
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": ">",
                    "value2": 1
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
                        "DamageType": "Wind",
                        "Damage": {
                          "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(10, (2 + ((MDF_WaveStageCount - 1) * 1)))"
                        },
                        "Toughness": {
                          "displayLines": 30
                        },
                        "instanceTag": "Feixiao_00_MazeAttack",
                        "Tags": null,
                        "attackType": "Technique",
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
                        "DamageType": "Wind",
                        "Damage": {
                          "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(10, (2 + ((MDF_WaveStageCount - 1) * 1)))"
                        },
                        "Toughness": null,
                        "instanceTag": "Feixiao_00_MazeAttack",
                        "Tags": null,
                        "attackType": "Technique",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                },
                "Trigger: Attack End"
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Feixiao_Feixiao_Insert_Part02": {
      "fileName": "Feixiao_Feixiao_Insert_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"248447225\">M_Feixiao_InsertCheck</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1503840637\">M_Feixiao_InsertCheckSelf</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-349901882\">M_Feixiao_Friend_Mark_Main</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "IsUnCountedInsert",
            "compareType": "<=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-909564099\">Feixiao_InsertIsReady</a>[<span class=\"descriptionNumberColor\">Thunderhunt</span>]"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "IsUnCountedInsert"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1116070545\">Feixiao_DamageProperty</a>[<span class=\"descriptionNumberColor\">Thunderhunt</span>]",
          "duration": {
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "displayLines": "0.6"
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1006222027\">Feixiao_Eidolon4_Property</a>[<span class=\"descriptionNumberColor\">Stormward I Hear</span>]",
              "duration": {
                "displayLines": "2"
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "displayLines": "0.08"
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Attack-Type Extension",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "typeToExtend": "Follow-up",
              "extendTypeTo": "Ultimate",
              "instanceIdentifier": "Feixiao_00_Rank06"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "displayLines": "Insert_DamagePercentage"
            },
            "Toughness": {
              "displayLines": "(ST Toughness Value * Insert_StanceRatio)"
            },
            "instanceTag": "Feixiao_00_InsertAttack",
            "Tags": null,
            "attackType": "Follow-up"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Attack-Type Extension",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "typeToExtend": "Follow-up",
              "isRemove": true,
              "instanceIdentifier": "Feixiao_00_Rank06"
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1116070545\">Feixiao_DamageProperty</a>[<span class=\"descriptionNumberColor\">Thunderhunt</span>]",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": [
            "IsUnCountedInsert"
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Thunderhunt",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "displayLines": "MDF_PropertyRatio"
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Feixiao_Feixiao_Insert_Part01": {
      "fileName": "Feixiao_Feixiao_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Thunderhunt"
        },
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
          "ability": "Feixiao_Insert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Feixiao_Feixiao_Insert_SelectTargetSelf": {
      "fileName": "Feixiao_Feixiao_Insert_SelectTargetSelf",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1525021884\">Feixiao_Ultramode</a>",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "living": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"158143017\">M_Feixiao_Friend_Mark_Self</a>"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "IsUnCountedInsert"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Feixiao_Insert_Part01",
                  "isTrigger": true
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "living": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "IsUnCountedInsert"
                    },
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "ability": "Feixiao_Insert_Part01",
                      "isTrigger": true
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1503840637\">M_Feixiao_InsertCheckSelf</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "onAbort": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1503840637\">M_Feixiao_InsertCheckSelf</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Feixiao_Feixiao_Insert_SelectTarget": {
      "fileName": "Feixiao_Feixiao_Insert_SelectTarget",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1525021884\">Feixiao_Ultramode</a>",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "living": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-349901882\">M_Feixiao_Friend_Mark_Main</a>"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Feixiao_Insert_Part01",
                  "isTrigger": true
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "living": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "ability": "Feixiao_Insert_Part01",
                      "isTrigger": true
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"248447225\">M_Feixiao_InsertCheck</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "onAbort": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"248447225\">M_Feixiao_InsertCheck</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Feixiao_Feixiao_PassiveAbility01": {
      "fileName": "Feixiao_Feixiao_PassiveAbility01",
      "childAbilityList": [
        "Feixiao_Feixiao_PassiveAbility01",
        "Feixiao_Feixiao_Insert_SelectTarget",
        "Feixiao_Feixiao_Insert_SelectTargetSelf",
        "Feixiao_Feixiao_Insert_Part01",
        "Feixiao_Feixiao_Insert_Part02",
        "Feixiao_Feixiao_Insert_Camera"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        5,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-342757676\">Feixiao_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-909564099\">Feixiao_InsertIsReady</a>[<span class=\"descriptionNumberColor\">Thunderhunt</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-343822525\">Feixiao_Eidolon2_CD</a>[<span class=\"descriptionNumberColor\">Moonward I Wish</span>]",
              "counter": {
                "displayLines": "6"
              },
              "valuePerStack": {
                "MDF_Count": {
                  "displayLines": "6"
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(1 + 1)"
              },
              "variableName": "Insert_StanceRatio"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "Insert_StanceRatio"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "IsUnCountedInsert"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "2"
          },
          "variableName": "Passive_NeedAttackCount"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(1.1 + 1.4)"
              },
              "variableName": "Insert_DamagePercentage"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "1.1"
              },
              "variableName": "Insert_DamagePercentage"
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "Passive_AttackCount"
          },
          "activeCount": {
            "displayLines": "ComboAttackCount"
          },
          "maximum": {
            "displayLines": "Passive_NeedAttackCount"
          },
          "assignState": "True",
          "priorState": "Normal"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-349901882\">M_Feixiao_Friend_Mark_Main</a>",
          "stackType": "RetainGlobalLatestUnique",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}.[[getTeamMembers]].[[addAttachedSummon]] - {{Caster}}"
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Parameter Target List}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                        }
                      }
                    ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__-342757676\">Feixiao_Passive</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Heavenpath"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-909564099\">Feixiao_InsertIsReady</a>[<span class=\"descriptionNumberColor\">Thunderhunt</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1045121925\">Feixiao_Passive_ChargeTeamAttackCount</a>",
                      "variables": {
                        "parameter[0]_AddValue": 1
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-909564099\">Feixiao_InsertIsReady</a>[<span class=\"descriptionNumberColor\">Thunderhunt</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Action-End Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-343822525\">Feixiao_Eidolon2_CD</a>[<span class=\"descriptionNumberColor\">Moonward I Wish</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-343822525\">Feixiao_Eidolon2_CD</a>[<span class=\"descriptionNumberColor\">Moonward I Wish</span>]",
                      "counter": {
                        "displayLines": "6"
                      },
                      "valuePerStack": {
                        "MDF_Count": {
                          "displayLines": "6"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Switch to Action/Ability Context",
                {
                  "name": "Update Energy Value",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 0,
                  "adjustment": "Set",
                  "ignoreBlock": true
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1525021884\">Feixiao_Ultramode</a>",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Attack Type",
                                "attackTypes": [
                                  "Follow-up"
                                ],
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                }
                              },
                              {
                                "name": "Eidolon Activated",
                                "eidolon": 2
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-343822525\">Feixiao_Eidolon2_CD</a>[<span class=\"descriptionNumberColor\">Moonward I Wish</span>]"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"1045121925\">Feixiao_Passive_ChargeTeamAttackCount</a>",
                              "variables": {
                                "parameter[0]_AddValue": 2
                              }
                            },
                            {
                              "name": "Define Modifier Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifierName": "<a class=\"gModGreen\" id=\"-343822525\">Feixiao_Eidolon2_CD</a>[<span class=\"descriptionNumberColor\">Moonward I Wish</span>]",
                              "function": "Add"
                            },
                            {
                              "name": "Define Modifier-Specific Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifierName": "<a class=\"gModGreen\" id=\"-343822525\">Feixiao_Eidolon2_CD</a>[<span class=\"descriptionNumberColor\">Moonward I Wish</span>]",
                              "adjustmentType": "+",
                              "variableName": "MDF_Count",
                              "value": -1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"1045121925\">Feixiao_Passive_ChargeTeamAttackCount</a>",
                              "variables": {
                                "parameter[0]_AddValue": 1
                              }
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
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "target1": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target List Entities",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                        },
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-349901882\">M_Feixiao_Friend_Mark_Main</a>"
                        },
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Target Count",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target's Attack Targets}}"
                            },
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target's Attack Targets}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-349901882\">M_Feixiao_Friend_Mark_Main</a>"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Parameter Target's Attack Targets}}"
                              },
                              "searchRandom": true,
                              "maxTargets": 1,
                              "ifTargetFound": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-349901882\">M_Feixiao_Friend_Mark_Main</a>"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-432640007\">Feixiao_InsertCheck</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Ability Targets}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Ability Targets}}"
                        },
                        "compareType": "=",
                        "value2": 1,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target's Ability Targets}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-349901882\">M_Feixiao_Friend_Mark_Main</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-349901882\">M_Feixiao_Friend_Mark_Main</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-432640007\">Feixiao_InsertCheck</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-909564099\">Feixiao_InsertIsReady</a>[<span class=\"descriptionNumberColor\">Thunderhunt</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Feixiao_Insert_SelectTarget",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "STAT_CTRL",
                            "DisableAction"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"248447225\">M_Feixiao_InsertCheck</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "ComboAttackCount",
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "displayLines": "12"
                  },
                  "includeMaxValueInRange": true,
                  "onChange": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "activeCount": {
                        "displayLines": "ComboAttackCount"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Changes",
              "variableName": "Passive_AttackCount",
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 99,
                  "includeMaxValueInRange": true,
                  "onChange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "Passive_AttackCount",
                            "compareType": ">=",
                            "value2": {
                              "displayLines": "Passive_NeedAttackCount"
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "ComboAttackCount",
                            "compareType": "<",
                            "value2": {
                              "displayLines": "12"
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "displayLines": "Passive_AttackCount"
                          },
                          "priorState": "Active"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "displayLines": "Passive_AttackCount"
                          },
                          "priorState": "Normal"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "displayLines": "12"
                  },
                  "includeMaxValueInRange": true,
                  "onChange": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "ComboAttackCount",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
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
      }
    },
    "Feixiao_Feixiao_Ability03_ComboFinish2_Part02": {
      "fileName": "Feixiao_Feixiao_Ability03_ComboFinish2_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"69209893\">Feixiao_Combo1_CostSPBeforeDamage</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "displayLines": "Skill21_DamagePercentage"
            },
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          },
          "attackType": "Ultimate"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1207472342\">Feixiao_EnterFinish</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability03_ComboFinish2_Part01": {
      "fileName": "Feixiao_Feixiao_Ability03_ComboFinish2_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability21_Anim2_Part02": {
      "fileName": "Feixiao_Feixiao_Ability21_Anim2_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"69209893\">Feixiao_Combo1_CostSPBeforeDamage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1999111375\">Feixiao_Combo2_DealDamage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1389767451\">Feixiao_Combo2_AfterDamageCheck</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Compare: Variable",
                "value1": "First_Break_Effect",
                "compareType": ">=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1982785786\">Feixiao_TriggerBreak</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": "Active: Fast-Forward Animations",
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"293207912\">Feixiao_FrameHaltRealTime</a>",
                  "variables": {
                    "parameter[0]_Realtime": 0.1,
                    "parameter[1]_TimeScale": 0.025
                  }
                }
              ],
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"293207912\">Feixiao_FrameHaltRealTime</a>",
                  "variables": {
                    "parameter[0]_Realtime": 0.1,
                    "parameter[1]_TimeScale": 0.05
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"342687242\">Feixiao_ComboPerformFinish</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability21_Anim1_Part02": {
      "fileName": "Feixiao_Feixiao_Ability21_Anim1_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"69209893\">Feixiao_Combo1_CostSPBeforeDamage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1999111375\">Feixiao_Combo2_DealDamage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1389767451\">Feixiao_Combo2_AfterDamageCheck</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Compare: Variable",
                "value1": "First_Break_Effect",
                "compareType": ">=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1982785786\">Feixiao_TriggerBreak</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": "Active: Fast-Forward Animations",
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"293207912\">Feixiao_FrameHaltRealTime</a>",
                  "variables": {
                    "parameter[0]_Realtime": 0.1,
                    "parameter[1]_TimeScale": 0.025
                  }
                }
              ],
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"293207912\">Feixiao_FrameHaltRealTime</a>",
                  "variables": {
                    "parameter[0]_Realtime": 0.1,
                    "parameter[1]_TimeScale": 0.05
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"342687242\">Feixiao_ComboPerformFinish</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability21_Anim2_Part01": {
      "fileName": "Feixiao_Feixiao_Ability21_Anim2_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "ADF_Effect_Index",
          "resetValue": {
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]</span>(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((ComboHitCount / 2)), 2)"
          },
          "scope": "ContextAbility"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ADF_Effect_Index",
            "compareType": "=",
            "value2": 0
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability21_Anim1_Part01": {
      "fileName": "Feixiao_Feixiao_Ability21_Anim1_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "ADF_Effect_Index",
          "resetValue": {
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]</span>(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((ComboHitCount / 2)), 2)"
          },
          "scope": "ContextAbility"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ADF_Effect_Index",
            "compareType": "=",
            "value2": 0
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability21_Entry": {
      "fileName": "Feixiao_Feixiao_Ability21_Entry",
      "childAbilityList": [
        "Feixiao_Feixiao_Ability21_Entry",
        "Feixiao_Feixiao_Ability21_Camera_1",
        "Feixiao_Feixiao_Ability21_Camera_2",
        "Feixiao_Feixiao_Ability21_Anim1_Part01",
        "Feixiao_Feixiao_Ability21_Anim2_Part01",
        "Feixiao_Feixiao_Ability21_Anim1_Part02",
        "Feixiao_Feixiao_Ability21_Anim2_Part02",
        "Feixiao_Feixiao_Ability03_ComboFinish2_Camera",
        "Feixiao_Feixiao_Ability03_ComboFinish2_Part01",
        "Feixiao_Feixiao_Ability03_ComboFinish2_Part02"
      ],
      "skillTrigger": "Skill21",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        5,
        0,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "0.6"
              },
              "variableName": "Skill21_DamagePercentage"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(0.6 + 0.3)"
              },
              "variableName": "Skill21_DamagePercentage"
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"2050569712\">Feixiao_ResetAnimSpeed</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Animator Variable",
                "paramType": "Bool",
                "paramName": "IsCombo",
                "compareType": "=",
                "compareValue": true
              },
              {
                "name": "Compare: Variable",
                "value1": "ComboType",
                "compareType": "=",
                "value2": 2
              }
            ],
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]</span>((ComboHitCount + 1), 2)"
              },
              "variableName": "Combo2_Loop_Index"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(Combo2_Loop_Index + 1)"
          },
          "variableName": "Combo2_Loop_Index"
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Combo2_Loop_Index",
            "compareType": ">",
            "value2": 2
          },
          "maxLoops": 99,
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Combo2_Loop_Index - 2)"
              },
              "variableName": "Combo2_Loop_Index"
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1125040676\">Feixiao_ComboStartCheck</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Animator Variable",
                "paramType": "Bool",
                "paramName": "IsCombo",
                "compareType": "="
              },
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Animator Variable",
                    "paramType": "Bool",
                    "paramName": "IsCombo",
                    "compareType": "=",
                    "compareValue": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "ComboType",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": "Active: Fast-Forward Animations",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CDF_Combo_2_StartFrame",
                  "resetValue": 12,
                  "scope": "ContextCaster"
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CDF_Combo_2_StartFrame",
                  "resetValue": 12,
                  "scope": "ContextCaster"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": "Active: Fast-Forward Animations",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CDF_Combo_2_StartFrame",
                  "resetValue": 6,
                  "scope": "ContextCaster"
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CDF_Combo_2_StartFrame",
                  "resetValue": 6,
                  "scope": "ContextCaster"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ComboHitCount",
            "compareType": "=",
            "value2": {
              "displayLines": "(6 - 1)"
            }
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability03_ComboFinish2_Part01",
              "isTrigger": true
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability03_ComboFinish2_Part02",
              "isTrigger": true
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo2_Loop_Index",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                "Deleted bullshit",
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability21_Anim1_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability21_Anim1_Part02",
                  "isTrigger": true
                }
              ],
              "failed": [
                "Deleted bullshit",
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability21_Anim2_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability21_Anim2_Part02",
                  "isTrigger": true
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": 2,
          "variableName": "ComboType"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "stateFilter": "AliveOrLimbo",
        "filter": {
          "name": "Target Sequence",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"550698929\">M_Feixiao_UltraTarget</a>"
              }
            }
          ]
        }
      }
    },
    "Feixiao_Feixiao_Ability03_ComboFinish1_Part02": {
      "fileName": "Feixiao_Feixiao_Ability03_ComboFinish1_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"69209893\">Feixiao_Combo1_CostSPBeforeDamage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1161841910\">Feixiao_Combo1_DealSubDamage</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "displayLines": "Ability11_DamagePercentage"
            },
            "HitSplit": 0.9,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          },
          "attackType": "Ultimate"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1207472342\">Feixiao_EnterFinish</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability03_ComboFinish1_Part01": {
      "fileName": "Feixiao_Feixiao_Ability03_ComboFinish1_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Animator Variable",
            "paramType": "Bool",
            "paramName": "IsCombo",
            "compareType": "=",
            "compareValue": true
          }
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": "Active: Fast-Forward Animations"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability11_Anim4_Part02": {
      "fileName": "Feixiao_Feixiao_Ability11_Anim4_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"69209893\">Feixiao_Combo1_CostSPBeforeDamage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1161841910\">Feixiao_Combo1_DealSubDamage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-14625690\">Feixiao_Combo1_DealDamage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1394849956\">Feixiao_Combo1_AfterDamageCheck</a>"
        },
        {
          "name": "IF",
          "conditions": "Active: Fast-Forward Animations"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"342687242\">Feixiao_ComboPerformFinish</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability11_Anim3_Part02": {
      "fileName": "Feixiao_Feixiao_Ability11_Anim3_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"69209893\">Feixiao_Combo1_CostSPBeforeDamage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1161841910\">Feixiao_Combo1_DealSubDamage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-14625690\">Feixiao_Combo1_DealDamage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1394849956\">Feixiao_Combo1_AfterDamageCheck</a>"
        },
        {
          "name": "IF",
          "conditions": "Active: Fast-Forward Animations"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"342687242\">Feixiao_ComboPerformFinish</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability11_Anim2_Part02": {
      "fileName": "Feixiao_Feixiao_Ability11_Anim2_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"69209893\">Feixiao_Combo1_CostSPBeforeDamage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1161841910\">Feixiao_Combo1_DealSubDamage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-14625690\">Feixiao_Combo1_DealDamage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1394849956\">Feixiao_Combo1_AfterDamageCheck</a>"
        },
        {
          "name": "IF",
          "conditions": "Active: Fast-Forward Animations"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"342687242\">Feixiao_ComboPerformFinish</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability11_Anim1_Part02": {
      "fileName": "Feixiao_Feixiao_Ability11_Anim1_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"69209893\">Feixiao_Combo1_CostSPBeforeDamage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1161841910\">Feixiao_Combo1_DealSubDamage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-14625690\">Feixiao_Combo1_DealDamage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1394849956\">Feixiao_Combo1_AfterDamageCheck</a>"
        },
        {
          "name": "IF",
          "conditions": "Active: Fast-Forward Animations"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"342687242\">Feixiao_ComboPerformFinish</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability11_Anim4_Part01": {
      "fileName": "Feixiao_Feixiao_Ability11_Anim4_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Animator Variable",
            "paramType": "Bool",
            "paramName": "IsCombo",
            "compareType": "=",
            "compareValue": true
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability11_Anim3_Part01": {
      "fileName": "Feixiao_Feixiao_Ability11_Anim3_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Animator Variable",
            "paramType": "Bool",
            "paramName": "IsCombo",
            "compareType": "=",
            "compareValue": true
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability11_Anim2_Part01": {
      "fileName": "Feixiao_Feixiao_Ability11_Anim2_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability11_Anim1_Part01": {
      "fileName": "Feixiao_Feixiao_Ability11_Anim1_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Animator Variable",
            "paramType": "Bool",
            "paramName": "IsCombo",
            "compareType": "=",
            "compareValue": true
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability11_Entry": {
      "fileName": "Feixiao_Feixiao_Ability11_Entry",
      "childAbilityList": [
        "Feixiao_Feixiao_Ability11_Entry",
        "Feixiao_Feixiao_Ability11_Camera",
        "Feixiao_Feixiao_Ability11_Anim1_Part01",
        "Feixiao_Feixiao_Ability11_Anim2_Part01",
        "Feixiao_Feixiao_Ability11_Anim3_Part01",
        "Feixiao_Feixiao_Ability11_Anim4_Part01",
        "Feixiao_Feixiao_Ability11_Anim1_Part02",
        "Feixiao_Feixiao_Ability11_Anim2_Part02",
        "Feixiao_Feixiao_Ability11_Anim3_Part02",
        "Feixiao_Feixiao_Ability11_Anim4_Part02",
        "Feixiao_Feixiao_Ability03_ComboFinish1_Camera",
        "Feixiao_Feixiao_Ability03_ComboFinish1_Part01",
        "Feixiao_Feixiao_Ability03_ComboFinish1_Part02"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        5,
        0,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(0.6 + 0.3)"
              },
              "variableName": "Skill11_DamagePercentage"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "0.6"
              },
              "variableName": "Skill11_DamagePercentage"
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"2050569712\">Feixiao_ResetAnimSpeed</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Animator Variable",
                "paramType": "Bool",
                "paramName": "IsCombo",
                "compareType": "=",
                "compareValue": true
              },
              {
                "name": "Compare: Variable",
                "value1": "ComboType",
                "compareType": "=",
                "value2": 1
              }
            ],
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]</span>((ComboHitCount + 3), 4)"
              },
              "variableName": "Combo1_Loop_Index"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(Combo1_Loop_Index + 1)"
          },
          "variableName": "Combo1_Loop_Index"
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Combo1_Loop_Index",
            "compareType": ">",
            "value2": 4
          },
          "maxLoops": 99,
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Combo1_Loop_Index - 4)"
              },
              "variableName": "Combo1_Loop_Index"
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1125040676\">Feixiao_ComboStartCheck</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Animator Variable",
                "paramType": "Bool",
                "paramName": "IsCombo",
                "compareType": "=",
                "compareValue": true
              },
              {
                "name": "Compare: Variable",
                "value1": "ComboType",
                "compareType": "=",
                "value2": 2
              }
            ]
          }
        },
        {
          "name": "IF",
          "conditions": "Active: Fast-Forward Animations",
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CDF_Combo_1_StartFrame",
              "resetValue": 4,
              "scope": "ContextCaster"
            }
          ],
          "failed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CDF_Combo_1_StartFrame",
              "resetValue": 6,
              "scope": "ContextCaster"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ComboHitCount",
            "compareType": "=",
            "value2": {
              "displayLines": "(6 - 1)"
            }
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability03_ComboFinish1_Part01",
              "isTrigger": true
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability03_ComboFinish1_Part02",
              "isTrigger": true
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo1_Loop_Index",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability11_Anim3_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability11_Anim3_Part02",
                  "isTrigger": true
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo1_Loop_Index",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability11_Anim4_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability11_Anim4_Part02",
                  "isTrigger": true
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo1_Loop_Index",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability11_Anim1_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability11_Anim1_Part02",
                  "isTrigger": true
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo1_Loop_Index",
                "compareType": "=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability11_Anim2_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability11_Anim2_Part02",
                  "isTrigger": true
                }
              ]
            },
            "Deleted bullshit"
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "ComboType"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "stateFilter": "AliveOrLimbo",
        "filter": {
          "name": "Target Sequence",
          "TargetList": [
            {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"550698929\">M_Feixiao_UltraTarget</a>"
              }
            }
          ]
        }
      }
    },
    "Feixiao_Feixiao_Ability03_Finish_W2Main_Part01": {
      "fileName": "Feixiao_Feixiao_Ability03_Finish_W2Main_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability03_Finish_Part02": {
      "fileName": "Feixiao_Feixiao_Ability03_Finish_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"176878499\">M_Feixiao_UltraTarget_Mark</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "displayLines": "1.6"
            },
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null
          },
          "attackType": "Ultimate"
        },
        "Trigger: Attack End",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"683713803\">Feixiao_Passive_CostTeamAttackCountToGainSP</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"550698929\">M_Feixiao_UltraTarget</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1525021884\">Feixiao_Ultramode</a>"
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability03_Finish_Part01": {
      "fileName": "Feixiao_Feixiao_Ability03_Finish_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Feixiao_Ability03_Finish_Part02",
          "isTrigger": true
        },
        {
          "name": "Update Character Panel Visibility"
        },
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability03_Part02": {
      "fileName": "Feixiao_Feixiao_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1525021884\">Feixiao_Ultramode</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"550698929\">M_Feixiao_UltraTarget</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "First_Break_Effect"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Show",
              "abilityName": "Ultimate"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Hide",
              "abilityName": "Ultimate",
              "subAbilityIndex": 1
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1539174332\">Feixiao_Ultramode_StanceBreakPreshow</a>"
            },
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "First_Break_Effect"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Hide",
              "abilityName": "Ultimate"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Show",
              "abilityName": "Ultimate",
              "subAbilityIndex": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "MuteHitFly"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1192517657\">M_Feixiao_UltraTarget_Visual_Stun</a>"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1169885953\">M_Feixiao_UltraTarget_Visual_Confine</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"176878499\">M_Feixiao_UltraTarget_Mark</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Force-Trigger Ability Next-Phase",
              "ability": "MISSING NAME OBJECT(Or implicit from Context)"
            }
          ],
          "failed": [
            {
              "name": "Force-Trigger Ability Next-Phase",
              "ability": "MISSING NAME OBJECT(Or implicit from Context)",
              "subAbilityIndex": 1
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"385618061\">M_Feixiao_UltraTarget_FadeInFlag</a>"
        },
        {
          "name": "Trigger: Ability End",
          "skipAttackSettle": true
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-233737306\">M_Feixiao_Ability03_ForceStance</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"922102305\">M_Feixiao_Ability03_StanceAddedPreshow</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__802330220\">M_Feixiao_BreakableElite_Mark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1999108381\">M_Feixiao_BreakableElite_Listener</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1135796130\">Feixiao_RefreshUltraFrame</a>"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1135796130\">Feixiao_RefreshUltraFrame</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1135796130\">Feixiao_RefreshUltraFrame</a>"
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1135796130\">Feixiao_RefreshUltraFrame</a>"
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1135796130\">Feixiao_RefreshUltraFrame</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1135796130\">Feixiao_RefreshUltraFrame</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_StanceBreakAddedRatio",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "ComboAttackCount",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "6"
                        }
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "MuteBreak",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Target__Toughness",
                        "compareType": "<=",
                        "value2": {
                          "displayLines": "((ComboAttackCount * MDF_BaseStance) * (1 + MDF_StanceBreakAddedRatio))"
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"802330220\">M_Feixiao_BreakableElite_Mark</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"802330220\">M_Feixiao_BreakableElite_Mark</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__224032294\">M_Feixiao_BreakableEliteMarker</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 3
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
                      "modifier": "<a class=\"gModGreen\" id=\"1999108381\">M_Feixiao_BreakableElite_Listener</a>",
                      "valuePerStack": {
                        "MDF_BaseStance": {
                          "displayLines": "ST Toughness Value"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "includeDyingTargets": true,
                  "maxTargets": 99,
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 3
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1999108381\">M_Feixiao_BreakableElite_Listener</a>",
                      "valuePerStack": {
                        "MDF_BaseStance": {
                          "displayLines": "ST Toughness Value"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"802330220\">M_Feixiao_BreakableElite_Mark</a>"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"802330220\">M_Feixiao_BreakableElite_Mark</a>"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target List Entities",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Hostile Entities(AOE)}}"
                        },
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"802330220\">M_Feixiao_BreakableElite_Mark</a>"
                        },
                        "invertCondition": true
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
          "for": "<a class=\"gModGreen\" id=\"mod__922102305\">M_Feixiao_Ability03_StanceAddedPreshow</a>",
          "latentQueue": [
            "First_Break_Effect"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Ultimate",
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1525021884\">Feixiao_Ultramode</a>",
                  "invertCondition": true
                },
                {
                  "name": "Has Flag",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "flagName": "Break",
                  "invertCondition": true
                }
              ]
            },
            "toughnessReductionPreview": {
              "displayLines": "1"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-233737306\">M_Feixiao_Ability03_ForceStance</a>",
          "latentQueue": [
            "First_Break_Effect"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Ultimate",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1525021884\">Feixiao_Ultramode</a>",
              "invertCondition": true
            },
            "toughnessForcedReductionPreview": 1,
            "showAsForcedReduction": true
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__176878499\">M_Feixiao_UltraTarget_Mark</a>",
          "latentQueue": [
            "First_Break_Effect"
          ],
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"550698929\">M_Feixiao_UltraTarget</a>"
          },
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
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
                    "modifier": "<a class=\"gModGreen\" id=\"385618061\">M_Feixiao_UltraTarget_FadeInFlag</a>"
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "trigger": "State_FadeIn"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1145384524\">M_Feixiao_UltraTarget_CutFlag</a>"
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "trigger": "State_Cut_2"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"965737321\">M_Feixiao_UltraTarget_FinalHitFlag</a>"
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "trigger": "State_FadeOut"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__550698929\">M_Feixiao_UltraTarget</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1169885953\">M_Feixiao_UltraTarget_Visual_Confine</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1192517657\">M_Feixiao_UltraTarget_Visual_Stun</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1525021884\">Feixiao_Ultramode</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability03_Part01": {
      "fileName": "Feixiao_Feixiao_Ability03_Part01",
      "childAbilityList": [
        "Feixiao_Feixiao_Ability03_EnterReady",
        "Feixiao_Feixiao_Ability03_Camera",
        "Feixiao_Feixiao_Ability03_Part01",
        "Feixiao_Feixiao_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        30,
        0,
        0
      ],
      "parse": [
        {
          "name": "Update Character Panel Visibility",
          "show": "CasterOnly",
          "forceDisplayUltButton": true
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Feixiao_Ability03_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "MuteHitFly"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Auto-Battle",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Force Team Target-Lock on Target",
              "team": "Player Team",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 99,
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "invertCondition": true
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Feixiao_Feixiao_Ability03_EnterReady": {
      "fileName": "Feixiao_Feixiao_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Feixiao_Feixiao_Ability02_Part02": {
      "fileName": "Feixiao_Feixiao_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"158143017\">M_Feixiao_Friend_Mark_Self</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "displayLines": "2"
            },
            "HitSplit": 0.34,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "attackType": "Skill",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": 2,
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "displayLines": "2"
                },
                "HitSplit": 0.33,
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "Tags": null,
                "attackType": "Skill",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Feixiao_Insert_SelectTargetSelf",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "priorityTag": "CharacterAttackFromSelf",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            }
          ],
          "noTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1503840637\">M_Feixiao_InsertCheckSelf</a>"
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__158143017\">M_Feixiao_Friend_Mark_Self</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}} - {{Modifier Holder}}"
                  },
                  "maxTargets": 99,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"158143017\">M_Feixiao_Friend_Mark_Self</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"158143017\">M_Feixiao_Friend_Mark_Self</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability02_Part01": {
      "fileName": "Feixiao_Feixiao_Ability02_Part01",
      "childAbilityList": [
        "Feixiao_Feixiao_Ability02_Camera",
        "Feixiao_Feixiao_Ability02_Part01",
        "Feixiao_Feixiao_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": [
        20,
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
          "ability": "Feixiao_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "MuteHitFly"
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Feixiao_Feixiao_Ability01_Part02": {
      "fileName": "Feixiao_Feixiao_Ability01_Part02",
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
            "DamageType": "Wind",
            "Damage": {
              "displayLines": "1"
            },
            "HitSplit": 0.2,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "displayLines": "1"
            },
            "HitSplit": 0.2,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "displayLines": "1"
            },
            "HitSplit": 0.6,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Feixiao_Feixiao_Ability01_Part01": {
      "fileName": "Feixiao_Feixiao_Ability01_Part01",
      "childAbilityList": [
        "Feixiao_Feixiao_Ability01_Camera",
        "Feixiao_Feixiao_Ability01_Part01",
        "Feixiao_Feixiao_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": [
        10,
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
          "ability": "Feixiao_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Feixiao_Functions": {
      "fileName": "Feixiao_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 15,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1045121925\">Feixiao_Passive_ChargeTeamAttackCount</a>",
          "parse": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Passive_AttackCount + parameter[0]_AddValue)"
              },
              "variableName": "Passive_AttackCount"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ComboAttackCount",
                "compareType": ">=",
                "value2": {
                  "displayLines": "12"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(Passive_AttackCount, Passive_NeedAttackCount)"
                  },
                  "variableName": "Passive_AttackCount"
                }
              ]
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"683713803\">Feixiao_Passive_CostTeamAttackCountToGainSP</a>"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__683713803\">Feixiao_Passive_CostTeamAttackCountToGainSP</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Passive_AttackCount",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "Passive_NeedAttackCount"
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "ComboAttackCount",
                    "compareType": "<",
                    "value2": {
                      "displayLines": "12"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": 1,
                  "isFixed": "(Fixed)",
                  "ignoreBlock": true,
                  "isSpecialEnergy": true
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Passive_AttackCount",
                  "context": "ContextCaster",
                  "value": {
                    "displayLines": "(0 - Passive_NeedAttackCount)"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__2050569712\">Feixiao_ResetAnimSpeed</a>",
          "parse": [
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "ComboSpeed"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1125040676\">Feixiao_ComboStartCheck</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Animator Variable",
                    "paramType": "Bool",
                    "paramName": "IsCombo",
                    "compareType": "="
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__69209893\">Feixiao_Combo1_CostSPBeforeDamage</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1161841910\">Feixiao_Combo1_DealSubDamage</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "displayLines": "Ability11_DamagePercentage"
                },
                "HitSplit": 0.1,
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              },
              "attackType": "Ultimate"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-14625690\">Feixiao_Combo1_DealDamage</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo1_Loop_Index",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "displayLines": "Ability11_DamagePercentage"
                    },
                    "HitSplit": 0.9,
                    "Toughness": {
                      "displayLines": "ST Toughness Value"
                    },
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  },
                  "attackType": "Ultimate"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo1_Loop_Index",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "displayLines": "Ability11_DamagePercentage"
                    },
                    "HitSplit": 0.9,
                    "Toughness": {
                      "displayLines": "ST Toughness Value"
                    },
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  },
                  "attackType": "Ultimate"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo1_Loop_Index",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "displayLines": "Ability11_DamagePercentage"
                    },
                    "HitSplit": 0.9,
                    "Toughness": {
                      "displayLines": "ST Toughness Value"
                    },
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  },
                  "attackType": "Ultimate"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo1_Loop_Index",
                "compareType": "=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "displayLines": "Ability11_DamagePercentage"
                    },
                    "HitSplit": 0.9,
                    "Toughness": {
                      "displayLines": "ST Toughness Value"
                    },
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  },
                  "attackType": "Ultimate"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1999111375\">Feixiao_Combo2_DealDamage</a>",
          "parse": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "ADF_Effect_Index",
              "resetValue": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]</span>(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((ComboHitCount / 2)), 2)"
              },
              "scope": "ContextAbility"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo2_Loop_Index",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ADF_Effect_Index",
                    "compareType": "=",
                    "value2": 0
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "displayLines": "Skill21_DamagePercentage"
                    },
                    "Toughness": {
                      "displayLines": "ST Toughness Value"
                    },
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  },
                  "attackType": "Ultimate"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ADF_Effect_Index",
                    "compareType": "=",
                    "value2": 0
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "displayLines": "Skill21_DamagePercentage"
                    },
                    "Toughness": {
                      "displayLines": "ST Toughness Value"
                    },
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  },
                  "attackType": "Ultimate"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1982785786\">Feixiao_TriggerBreak</a>",
          "parse": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "First_Break_Effect"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ComboType",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": "Active: Fast-Forward Animations"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1394849956\">Feixiao_Combo1_AfterDamageCheck</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1384650414\">Feixiao_Eidolon1_Property</a>[<span class=\"descriptionNumberColor\">Skyward I Quell</span>]",
                  "stackLimit": {
                    "displayLines": "5"
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "displayLines": "0.1"
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "ComboHitCount",
              "context": "ContextCaster",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1145384524\">M_Feixiao_UltraTarget_CutFlag</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Break"
              },
              "passed": [
                {
                  "name": "Force-Trigger Ability Next-Phase",
                  "ability": "MISSING NAME OBJECT(Or implicit from Context)"
                }
              ],
              "failed": [
                {
                  "name": "Force-Trigger Ability Next-Phase",
                  "ability": "MISSING NAME OBJECT(Or implicit from Context)",
                  "subAbilityIndex": 1
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Hide",
                  "abilityName": "Ultimate"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Show",
                  "abilityName": "Ultimate",
                  "subAbilityIndex": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "First_Break_Effect",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1982785786\">Feixiao_TriggerBreak</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1389767451\">Feixiao_Combo2_AfterDamageCheck</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1384650414\">Feixiao_Eidolon1_Property</a>[<span class=\"descriptionNumberColor\">Skyward I Quell</span>]",
                  "stackLimit": {
                    "displayLines": "5"
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "displayLines": "0.1"
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "ComboHitCount",
              "context": "ContextCaster",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1145384524\">M_Feixiao_UltraTarget_CutFlag</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Break"
              },
              "passed": [
                {
                  "name": "Force-Trigger Ability Next-Phase",
                  "ability": "MISSING NAME OBJECT(Or implicit from Context)"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Show",
                  "abilityName": "Ultimate"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Hide",
                  "abilityName": "Ultimate",
                  "subAbilityIndex": 1
                }
              ],
              "failed": [
                {
                  "name": "Force-Trigger Ability Next-Phase",
                  "ability": "MISSING NAME OBJECT(Or implicit from Context)",
                  "subAbilityIndex": 1
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__342687242\">Feixiao_ComboPerformFinish</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "ComboHitCount",
                    "compareType": "=",
                    "value2": {
                      "displayLines": "(6 - 1)"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "Feixiao_AchievementPrecheck"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": "Active: Fast-Forward Animations"
            },
            {
              "name": "Trigger: Ability End",
              "skipAttackSettle": true
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1207472342\">Feixiao_EnterFinish</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "ComboHitCount",
              "context": "ContextCaster",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Feixiao_AchievementPrecheck",
                    "compareType": ">=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "ComboHitCount",
                    "compareType": "=",
                    "value2": {
                      "displayLines": "6"
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 0
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1478735185\">M_Feixiao_AchievementFlag</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": "Active: Fast-Forward Animations"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"965737321\">M_Feixiao_UltraTarget_FinalHitFlag</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "First_Break_Effect",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1982785786\">Feixiao_TriggerBreak</a>"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": "Active: Fast-Forward Animations"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ComboType",
                "compareType": "=",
                "value2": 1
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
                "modifier": "<a class=\"gModGreen\" id=\"908013757\">Monster_W2_Feixiao_MainEnd</a>"
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability03_Finish_W2Main_Part01"
                }
              ],
              "failed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability03_Finish_Part01"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1990296654\">Feixiao_ReturnComboLoopOnCombo</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Animator Variable",
                "paramType": "Bool",
                "paramName": "IsStart",
                "compareType": "="
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": "Active: Fast-Forward Animations"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__293207912\">Feixiao_FrameHaltRealTime</a>",
          "parse": []
        }
      ],
      "references": []
    }
  }
}