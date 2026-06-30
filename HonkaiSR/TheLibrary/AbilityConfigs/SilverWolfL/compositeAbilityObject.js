const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Silver Wolf LV.999",
  "trimCharacterName": "SilverWolfL",
  "abilityList": [
    "SilverWolfL_Modifiers",
    "SilverWolfL_SilverWolf999_Trace03",
    "SilverWolfL_SilverWolf999_Trace01",
    "SilverWolfL_SilverWolf999_Eidolon6",
    "SilverWolfL_SilverWolf999_Eidolon4",
    "SilverWolfL_GlobalAbility_SilverWolf999_Main",
    "SilverWolfL_LocalPlayer_SilverWolf999_TechniqueUsage_TriggerHitMonster",
    "SilverWolfL_LocalPlayer_StandardAbility_AttackBreak",
    "SilverWolfL_LocalPlayer_SilverWolf999_TechniqueUsage",
    "SilverWolfL_LocalPlayer_SilverWolf999_NormalAtk01",
    "SilverWolfL_GlobalAbility_SilverWolf999_Insert_Camera",
    "SilverWolfL_GlobalAbility_SilverWolf999_Insert_Part02",
    "SilverWolfL_GlobalAbility_SilverWolf999_Insert_Part01",
    "SilverWolfL_SilverWolf999_TechniqueInLevel",
    "SilverWolfL_SilverWolf999_UltraEnd_Insert",
    "SilverWolfL_SilverWolf999_PassiveAbility01",
    "SilverWolfL_SilverWolf999_Ability41_Part02",
    "SilverWolfL_SilverWolf999_Ability41_Part01",
    "SilverWolfL_SilverWolf999_Ability04_Part02",
    "SilverWolfL_SilverWolf999_Ability04_Part01",
    "SilverWolfL_SilverWolf999_TechniqueUsage_Insert",
    "SilverWolfL_SilverWolf999_Item3_Part02",
    "SilverWolfL_SilverWolf999_Item3_Part01",
    "SilverWolfL_SilverWolf999_Ability11_Item3_Part02",
    "SilverWolfL_SilverWolf999_Ability11_Item3_Part01",
    "SilverWolfL_SilverWolf999_Ability11_Item3_Prepare",
    "SilverWolfL_SilverWolf999_Item2_Part02",
    "SilverWolfL_SilverWolf999_Item2_Part01",
    "SilverWolfL_SilverWolf999_Ability11_Item2_Part02",
    "SilverWolfL_SilverWolf999_Ability11_Item2_Part01",
    "SilverWolfL_SilverWolf999_Ability11_Item2_Prepare",
    "SilverWolfL_SilverWolf999_Item1_Part02",
    "SilverWolfL_SilverWolf999_Item1_Part01",
    "SilverWolfL_SilverWolf999_Ability11_Item1_Part02",
    "SilverWolfL_SilverWolf999_Ability11_Item1_Part01",
    "SilverWolfL_SilverWolf999_Ability11_Item1_Prepare",
    "SilverWolfL_SilverWolf999_Item_Insert",
    "SilverWolfL_SilverWolf999_Ability11_End_Part02",
    "SilverWolfL_SilverWolf999_Ability11_End_Part01",
    "SilverWolfL_SilverWolf999_Ability11_Part02",
    "SilverWolfL_SilverWolf999_Ability11_Part01",
    "SilverWolfL_SilverWolf999_Ability11_Entry",
    "SilverWolfL_SilverWolf999_Ability03_Part02",
    "SilverWolfL_SilverWolf999_Ability03_Part01",
    "SilverWolfL_SilverWolf999_Ability03_EnterReady",
    "SilverWolfL_SilverWolf999_Ability02_Part02",
    "SilverWolfL_SilverWolf999_Ability02_Part01",
    "SilverWolfL_SilverWolf999_Ability01_Part02",
    "SilverWolfL_SilverWolf999_Ability01_Part01",
    "SilverWolfL_Functions",
    "SilverWolfL_BE_BattleEvents"
  ],
  "abilityObject": {
    "SilverWolfL_Modifiers": {
      "fileName": "SilverWolfL_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__524383076\">ADV_StageAbility_Maze_SilverWolf999_Visual</a>",
          "counter": 1,
          "onCreation": [
            {
              "name": "IF",
              "conditions": {
                "name": "Living State",
                "state": "Mask_AliveOrLimbo",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1753220537\">ADV_StageAbility_Maze_SilverWolf999_00</a>",
          "counter": 1,
          "stackType": "Refresh",
          "onStageExit": [
            {
              "name": "Remove Overworld Entity",
              "summon": {
                "name": "Add Target by Summoned Units",
                "target": {
                  "name": "Target Name",
                  "target": "{{Adventure Player}}"
                },
                "summonID": 15061
              }
            }
          ],
          "onStageEntry": [
            {
              "name": "IF",
              "conditions": "Compare Overworld Tech Points",
              "passed": [
                {
                  "name": "Remove Overworld Entity",
                  "summon": {
                    "name": "Add Target by Summoned Units",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "summonID": 15061
                  }
                }
              ]
            }
          ],
          "onAbilityReset": [
            {
              "name": "Remove Overworld Entity",
              "summon": {
                "name": "Add Target by Summoned Units",
                "target": {
                  "name": "Target Name",
                  "target": "{{Adventure Player}}"
                },
                "summonID": 15061
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1236209971\">ADV_StageAbility_Maze_SilverWolf999_Enemy_Fear</a>",
          "counter": 1,
          "stackType": "Refresh",
          "modifierFlags": [
            "Fear"
          ],
          "onCreation": [
            "Overworld stats adjustment(which we don't care about)"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1548449418\">ADV_StageAbility_Maze_SilverWolf999_KillFlag</a>",
          "counter": 1,
          "stackType": "Refresh",
          "modifierFlags": [
            "NoAlert"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-203146933\">ADV_GlobalAbility_Maze_SilverWolf999_ListenTechniqueUsagePoint</a>",
          "stackType": "Replace",
          "onMPChange": [
            {
              "name": "IF",
              "conditions": "Compare Overworld Tech Points",
              "passed": [
                {
                  "name": "IF",
                  "conditions": "Can Consumables Recover Tech Points",
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-402526884\">ADV_GlobalAbility_Maze_SilverWolf999_TimeOutRemoveSummonUnit</a>",
                      "duration": 0.033999998
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-402526884\">ADV_GlobalAbility_Maze_SilverWolf999_TimeOutRemoveSummonUnit</a>",
          "onRemoval": [
            {
              "name": "Remove Overworld Entity",
              "summon": {
                "name": "Add Target by Summoned Units",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "summonID": 15061
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1859974465\">ADV_GlobalAbility_Maze_SilverWolf999_00</a>",
          "stackType": "Replace"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__221078581\">GlobalAbility_SilverWolf999_ImmuneCTRL</a>[<span class=\"descriptionNumberColor\">Firewall</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CROWD_CONTROL_IMMUNE_SPECIAL",
            "CLEANSE_CONTROL_ENEMY"
          ],
          "description": "Immune to Crowd Control debuffs inflicted by enemy targets.",
          "type": "Buff",
          "effectName": "Firewall",
          "statusName": "Firewall",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Debuff Immunity[?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_CTRL"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1885411916\">SilverWolf999_Eidolon2_SumScore</a>[<span class=\"descriptionNumberColor\">It's a Feature, Not a Bug</span>]",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh",
            "RetainCountZero"
          ],
          "description": "<span class=\"descriptionNumberColor\">MDF_Count</span> point(s) of \"Hidden MMR\" has been taken into account. After reaching <span class=\"descriptionNumberColor\">#SkillRank_Rank02_P1_ScoreThreshold</span> points, gains 1 extra turn, and regains 1 use of Enhanced Basic ATK.",
          "type": "Other",
          "statusName": "It's a Feature, Not a Bug",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "value": {
                    "operator": "Variables[0] (CurScore) || RETURN",
                    "displayLines": "CurScore",
                    "constants": [],
                    "variables": [
                      "CurScore"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Action Completed [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1400233758\">SilverWolf999_Eidolon2InsertRetarget</a>"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1400233758\">SilverWolf999_Eidolon2InsertRetarget</a>"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1400233758\">SilverWolf999_Eidolon2InsertRetarget</a>"
                }
              ]
            },
            {
              "eventTrigger": "Extra Turn Action Injection: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "SilverWolf999_Eidolon2"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "It's a Feature, Not a Bug"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "SilverWolf999_Eidolon2"
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "function": "Add",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (120) || SUB || RETURN",
                        "displayLines": "(0 - 120)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          120
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "UltraAttackCount",
                      "value": {
                        "operator": "Variables[0] (UltraAttackCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(UltraAttackCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "UltraAttackCount"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Batch: Enemy Arrival",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1400233758\">SilverWolf999_Eidolon2InsertRetarget</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1400233758\">SilverWolf999_Eidolon2InsertRetarget</a>",
              "parse": [
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
                        "modifier": "<a class=\"gModGreen\" id=\"1358748576\">SilverWolf999_Ultra</a>[<span class=\"descriptionNumberColor\">Godmode Player</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "<a class=\"gModGreen\" id=\"-1885411916\">SilverWolf999_Eidolon2_SumScore</a>[<span class=\"descriptionNumberColor\">It's a Feature, Not a Bug</span>]",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (120) || RETURN",
                          "displayLines": "120",
                          "constants": [],
                          "variables": [
                            120
                          ]
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1550382446\">_M_SilverWolf999_IsStackingAbility11Succession</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "SilverWolf999_Eidolon2",
                      "conditions": {
                        "name": "Insert Ability Condition",
                        "type": "SameTagInsertUnusedCount",
                        "typeValue": 1
                      },
                      "afterInjection": [],
                      "condition": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1358748576\">SilverWolf999_Ultra</a>[<span class=\"descriptionNumberColor\">Godmode Player</span>]"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "<a class=\"gModGreen\" id=\"-1885411916\">SilverWolf999_Eidolon2_SumScore</a>[<span class=\"descriptionNumberColor\">It's a Feature, Not a Bug</span>]",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (120) || RETURN",
                              "displayLines": "120",
                              "constants": [],
                              "variables": [
                                120
                              ]
                            }
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1550382446\">_M_SilverWolf999_IsStackingAbility11Succession</a>",
                            "invertCondition": true
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "CurScore",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "_tmp_changeValue"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_tmp_changeValue",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Modifier Variable",
                          "modifierName": null,
                          "function": "Add",
                          "value": {
                            "operator": "Variables[0] (_tmp_changeValue) || RETURN",
                            "displayLines": "_tmp_changeValue",
                            "constants": [],
                            "variables": [
                              "_tmp_changeValue"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1400233758\">SilverWolf999_Eidolon2InsertRetarget</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__362501008\">_M_SilverWolf999_ItemInsertCheck</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "stackLimit": 99999,
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-180588390\">SilverWolf999_InsertRetarget</a>"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-180588390\">SilverWolf999_InsertRetarget</a>"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-180588390\">SilverWolf999_InsertRetarget</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "ElationEchoPoint",
                    "invertCondition": true
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Batch: Enemy Arrival",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-180588390\">SilverWolf999_InsertRetarget</a>"
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
                        "state": "Mask_AliveOrRevivable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-180588390\">SilverWolf999_InsertRetarget</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-180588390\">SilverWolf999_InsertRetarget</a>",
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
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (MDF_Layer) || RETURN",
                        "displayLines": "MDF_Layer",
                        "constants": [],
                        "variables": [
                          "MDF_Layer"
                        ]
                      },
                      "Event": [
                        {
                          "name": "Inject Ability Use",
                          "conditionActive": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1358748576\">SilverWolf999_Ultra</a>[<span class=\"descriptionNumberColor\">Godmode Player</span>]"
                          },
                          "abilityName": "SilverWolf999_Item_Insert",
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
                          "allowAbilityTriggers": false
                        }
                      ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1388281283\">_M_SilverWolf999_Item1_Listener</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}.[[living]].[[sortByHPCurrent]].[[getLast]]"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "operator": "Variables[0] (MDF_Item1ExtraDamage) || Variables[1] (0.2) || MUL || RETURN",
                          "displayLines": "(MDF_Item1ExtraDamage * 0.2)",
                          "constants": [],
                          "variables": [
                            "MDF_Item1ExtraDamage",
                            0.2
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "True DMG"
                      },
                      "isConvertedDMG": true
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Anyone]: Any",
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
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Battle Event",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MDF_TempDamage",
                      "value": "Result_FinalDamageBase"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Item1ExtraDamage",
                      "value": {
                        "operator": "Variables[0] (MDF_Item1ExtraDamage) || Variables[1] (MDF_TempDamage) || ADD || RETURN",
                        "displayLines": "(MDF_Item1ExtraDamage + MDF_TempDamage)",
                        "constants": [],
                        "variables": [
                          "MDF_Item1ExtraDamage",
                          "MDF_TempDamage"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Item1ExtraDamage",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TempDamage",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1055848525\">_M_SilverWolf999_Ability11_AddBonusLifetime_CD</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                "Modifier Deletes Itself"
              ],
              "priorityLevel": 200
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1550382446\">_M_SilverWolf999_IsStackingAbility11Succession</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-180588390\">SilverWolf999_InsertRetarget</a>"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-180588390\">SilverWolf999_InsertRetarget</a>"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-180588390\">SilverWolf999_InsertRetarget</a>"
                }
              ]
            },
            {
              "eventTrigger": "Batch: Enemy Arrival",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-180588390\">SilverWolf999_InsertRetarget</a>"
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
                        "state": "Mask_AliveOrRevivable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-180588390\">SilverWolf999_InsertRetarget</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-180588390\">SilverWolf999_InsertRetarget</a>",
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
                      "name": "Inject Extra-Turn",
                      "actionTag": "SilverWolf999_Ability11Succession",
                      "conditions": {
                        "name": "Insert Ability Condition",
                        "type": "SameTagInsertUnusedCount",
                        "typeValue": 1
                      },
                      "afterInjection": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1550382446\">_M_SilverWolf999_IsStackingAbility11Succession</a>"
                        }
                      ],
                      "priorityTag": "CharacterChainedSkill"
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
          "for": "<a class=\"gModGreen\" id=\"mod__773036968\">_M_SilverWolf999_DuringAbility11_DisableControlSkillForUI</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill11",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": null,
                  "text": "Ability cannot be used",
                  "controlTypes": [
                    "ControlSkill01"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__859070664\">_M_SilverWolf999_AutoAbility11</a>",
          "modifierFlags": [
            "Crazy"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill11",
                  "skillSlot": "Basic ATK"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1024723850\">_M_SilverWolf999_IsDuringAbility11</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"859070664\">_M_SilverWolf999_AutoAbility11</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"773036968\">_M_SilverWolf999_DuringAbility11_DisableControlSkillForUI</a>"
                },
                {
                  "name": "Set Render/Load State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}} - {{Caster}}"
                  },
                  "showOrLoad": false
                },
                "Deleted bullshit",
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1816674206\">_M_SilverWolf999_IsAbility11Succession</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_UI_Skill11_ItemIndex",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_UI_Skill11_ItemCount",
                      "value": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"859070664\">_M_SilverWolf999_AutoAbility11</a>"
                },
                {
                  "name": "Set Render/Load State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}} - {{Caster}}"
                  },
                  "showOrLoad": false
                },
                "Deleted bullshit",
                {
                  "name": "Update Character Panel Visibility"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1550382446\">_M_SilverWolf999_IsStackingAbility11Succession</a>"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurScore",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (60) || RETURN",
                      "displayLines": "60",
                      "constants": [],
                      "variables": [
                        60
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">BaseDMGMultiplier</span>&nbsp;",
                          "value": "(1 + (0.15 * &nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(2, &nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((CurScore / 60)))))"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Caused Limbo [Owner]",
              "execute": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">MerryMake</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.5) || RETURN",
                        "displayLines": "0.5",
                        "constants": [],
                        "variables": [
                          0.5
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Update Character Panel Visibility",
                  "show": "CasterOnly",
                  "forceDisplayUltButton": true
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__107262380\">_M_SilverWolf999_Ultimate_ScoreManager</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CurScore) || RETURN",
                    "displayLines": "CurScore",
                    "constants": [],
                    "variables": [
                      "CurScore"
                    ]
                  },
                  "compareType": "<",
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": {
                        "operator": "Variables[0] (60) || RETURN",
                        "displayLines": "60",
                        "constants": [],
                        "variables": [
                          60
                        ]
                      },
                      "execute": [
                        {
                          "name": "SW999 Score Data",
                          "rating": "S",
                          "value": {
                            "operator": "Variables[0] (CurScore) || RETURN",
                            "displayLines": "CurScore",
                            "constants": [],
                            "variables": [
                              "CurScore"
                            ]
                          },
                          "value2": {
                            "operator": "Variables[0] (60) || RETURN",
                            "displayLines": "60",
                            "constants": [],
                            "variables": [
                              60
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": {
                        "operator": "Constants[0] (2) || Variables[0] (60) || MUL || RETURN",
                        "displayLines": "(2 * 60)",
                        "constants": [
                          2
                        ],
                        "variables": [
                          60
                        ]
                      },
                      "execute": [
                        {
                          "name": "SW999 Score Data",
                          "rating": "SS",
                          "value": {
                            "operator": "Variables[0] (CurScore) || Variables[1] (60) || SUB || RETURN",
                            "displayLines": "(CurScore - 60)",
                            "constants": [],
                            "variables": [
                              "CurScore",
                              60
                            ]
                          },
                          "value2": {
                            "operator": "Variables[0] (60) || RETURN",
                            "displayLines": "60",
                            "constants": [],
                            "variables": [
                              60
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": [
                    {
                      "name": "SW999 Score Data",
                      "rating": "SSS",
                      "value": {
                        "operator": "Variables[0] (60) || RETURN",
                        "displayLines": "60",
                        "constants": [],
                        "variables": [
                          60
                        ]
                      },
                      "value2": {
                        "operator": "Variables[0] (60) || RETURN",
                        "displayLines": "60",
                        "constants": [],
                        "variables": [
                          60
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "SW999 Score Data"
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "CurScore",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "operator": "Variables[0] (60) || RETURN",
                    "displayLines": "60",
                    "constants": [],
                    "variables": [
                      60
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "SW999 Score Data",
                      "rating": "S",
                      "value": {
                        "operator": "Variables[0] (CurScore) || RETURN",
                        "displayLines": "CurScore",
                        "constants": [],
                        "variables": [
                          "CurScore"
                        ]
                      },
                      "value2": {
                        "operator": "Variables[0] (60) || RETURN",
                        "displayLines": "60",
                        "constants": [],
                        "variables": [
                          60
                        ]
                      }
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "SW999 Score Data",
                      "rating": "S",
                      "value": {
                        "operator": "Variables[0] (CurScore) || RETURN",
                        "displayLines": "CurScore",
                        "constants": [],
                        "variables": [
                          "CurScore"
                        ]
                      },
                      "value2": {
                        "operator": "Variables[0] (60) || RETURN",
                        "displayLines": "60",
                        "constants": [],
                        "variables": [
                          60
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (60) || RETURN",
                    "displayLines": "60",
                    "constants": [],
                    "variables": [
                      60
                    ]
                  },
                  "maxValue": {
                    "operator": "Constants[0] (2) || Variables[0] (60) || MUL || RETURN",
                    "displayLines": "(2 * 60)",
                    "constants": [
                      2
                    ],
                    "variables": [
                      60
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "SW999 Score Data",
                      "rating": "SS",
                      "value": {
                        "operator": "Variables[0] (CurScore) || Variables[1] (60) || SUB || RETURN",
                        "displayLines": "(CurScore - 60)",
                        "constants": [],
                        "variables": [
                          "CurScore",
                          60
                        ]
                      },
                      "value2": {
                        "operator": "Variables[0] (60) || RETURN",
                        "displayLines": "60",
                        "constants": [],
                        "variables": [
                          60
                        ]
                      }
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "SW999 Score Data",
                      "rating": "SS",
                      "value": {
                        "operator": "Variables[0] (CurScore) || Variables[1] (60) || SUB || RETURN",
                        "displayLines": "(CurScore - 60)",
                        "constants": [],
                        "variables": [
                          "CurScore",
                          60
                        ]
                      },
                      "value2": {
                        "operator": "Variables[0] (60) || RETURN",
                        "displayLines": "60",
                        "constants": [],
                        "variables": [
                          60
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Constants[0] (2) || Variables[0] (60) || MUL || RETURN",
                    "displayLines": "(2 * 60)",
                    "constants": [
                      2
                    ],
                    "variables": [
                      60
                    ]
                  },
                  "maxValue": {
                    "operator": "Constants[0] (78125000) || RETURN",
                    "displayLines": "78125000",
                    "constants": [
                      78125000
                    ],
                    "variables": []
                  },
                  "whenEnteringRange": [
                    {
                      "name": "SW999 Score Data",
                      "rating": "SSS",
                      "value": {
                        "operator": "Variables[0] (60) || RETURN",
                        "displayLines": "60",
                        "constants": [],
                        "variables": [
                          60
                        ]
                      },
                      "value2": {
                        "operator": "Variables[0] (60) || RETURN",
                        "displayLines": "60",
                        "constants": [],
                        "variables": [
                          60
                        ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__1077186888\">_M_SilverWolf999_Ultimate_VisualManager</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"107262380\">_M_SilverWolf999_Ultimate_ScoreManager</a>"
                },
                {
                  "name": "SW999 Test Data 2",
                  "value3": false
                },
                {
                  "name": "Change Character UI",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "icon": "1506.png"
                },
                {
                  "name": "Set Hit-Class",
                  "reset": true
                },
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "SilverWolf999_Default"
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"107262380\">_M_SilverWolf999_Ultimate_ScoreManager</a>"
                },
                {
                  "name": "Change Character UI",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "icon": "1506_02.png"
                },
                {
                  "name": "SW999 Test Data 2",
                  "value": {
                    "operator": "Variables[0] (UltraAttackCount) || RETURN",
                    "displayLines": "UltraAttackCount",
                    "constants": [],
                    "variables": [
                      "UltraAttackCount"
                    ]
                  },
                  "value2": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                },
                {
                  "name": "Set Hit-Class"
                },
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "SilverWolf999_Ultra"
                }
              ]
            },
            {
              "eventTrigger": "Enter View-Mode [Anyone]",
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
                          "target": "{{Caster}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Current Action Owner}}"
                        }
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK",
                        "activeSkill": true
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Exit View-Mode [Anyone]",
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
                          "target": "{{Caster}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Current Action Owner}}"
                        }
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK",
                        "activeSkill": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Assign Unique Name",
                      "uniqueName": "SilverWolf999_Skill11_EnemyGround",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Name",
                        "skillName": "Skill12"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Name",
                        "skillName": "Skill13"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Name",
                        "skillName": "Skill14"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "UltraAttackCount",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "SW999 Test Data 2",
                      "value": {
                        "operator": "Variables[0] (UltraAttackCount) || RETURN",
                        "displayLines": "UltraAttackCount",
                        "constants": [],
                        "variables": [
                          "UltraAttackCount"
                        ]
                      },
                      "value2": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1432780603\">_M_SilverWolf999_Ultimate_AbilityManager</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill02",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                },
                {
                  "name": "Add Ability Tag",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "skillName": "Skill41",
                  "tag": [
                    "AssistCaster"
                  ]
                },
                {
                  "name": "Add Ability Tag",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "skillName": "Skill04",
                  "tag": [
                    "AssistCaster"
                  ]
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"859070664\">_M_SilverWolf999_AutoAbility11</a>"
                },
                {
                  "name": "Add Ability Tag",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "skillName": "Skill04",
                  "tag": [
                    "AssistCaster"
                  ]
                },
                {
                  "name": "Add Ability Tag",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "skillName": "Skill41",
                  "tag": [
                    "AssistCaster"
                  ]
                },
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
            },
            {
              "eventTrigger": "Extra Turn Action Injection: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "SilverWolf999_Ability11Succession"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1816674206\">_M_SilverWolf999_IsAbility11Succession</a>",
                      "referenceModifier": "<a class=\"gModGreen\" id=\"1201071934\">MReference_Mark_RemoveOnAttackEnd</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1007652550\">SilverWolf999_Ultimate_Aura</a>[<span class=\"descriptionNumberColor\">\"αWolf Instant\"</span>]",
          "description": "The current chance of ally targets in the Zone triggering \"Top Loot Box\": <span class=\"descriptionNumberColor\">TriggerItemChance</span>.",
          "type": "Other",
          "statusName": "\"αWolf Instant\"",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Skill Point Changes",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Caster}}.[[getTeamMembers]].[[removeBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "ElationEchoPoint"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": null,
                      "variableName": "_bpChange",
                      "value": "ParamValue",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Constants[0] (0) || Variables[0] (_bpChange) || SUB || RETURN",
                        "displayLines": "(0 - _bpChange)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "_bpChange"
                        ]
                      },
                      "Event": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": {
                              "operator": "Variables[0] (TriggerItemChance) || RETURN",
                              "displayLines": "TriggerItemChance",
                              "constants": [],
                              "variables": [
                                "TriggerItemChance"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "TriggerItemChance",
                              "value": {
                                "operator": "Variables[0] (TriggerItemChance) || Variables[1] (0.2) || MUL || RETURN",
                                "displayLines": "(TriggerItemChance * 0.2)",
                                "constants": [],
                                "variables": [
                                  "TriggerItemChance",
                                  0.2
                                ]
                              }
                            },
                            {
                              "name": "Inject Ability Use",
                              "conditionActive": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1358748576\">SilverWolf999_Ultra</a>[<span class=\"descriptionNumberColor\">Godmode Player</span>]"
                              },
                              "abilityName": "SilverWolf999_Item_Insert",
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
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1358748576\">SilverWolf999_Ultra</a>[<span class=\"descriptionNumberColor\">Godmode Player</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "Endurance",
            "CLEANSE_CONTROL_ANY"
          ],
          "description": "Immune to Crowd Control debuffs. After fully using Enhanced Basic ATK <span class=\"descriptionNumberColor\">MDF_Count</span> more time(s), exits the \"Godmode Player\" state.",
          "type": "Other",
          "statusName": "Godmode Player",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1007652550\">SilverWolf999_Ultimate_Aura</a>[<span class=\"descriptionNumberColor\">\"αWolf Instant\"</span>]"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1432780603\">_M_SilverWolf999_Ultimate_AbilityManager</a>"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-556147059\">SilverWolf999_Eidolon1_Property</a>[<span class=\"descriptionNumberColor\">Aether Editing: Eidolon +1</span>]",
              "refModifier": "<a class=\"gModGreen\" id=\"-1553319646\">MReference_AllDamageTypeTakenRatio</a>",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1885411916\">SilverWolf999_Eidolon2_SumScore</a>[<span class=\"descriptionNumberColor\">It's a Feature, Not a Bug</span>]",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              }
            }
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TriggerItemChance",
                  "value": {
                    "operator": "Variables[0] (TriggerItemBaseChance) || RETURN",
                    "displayLines": "TriggerItemBaseChance",
                    "constants": [],
                    "variables": [
                      "TriggerItemBaseChance"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "UltraAttackCount",
                  "value": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Reconstruct Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Modifier_Callback_Value",
                        "compareType": ">",
                        "value2": 0,
                        "valueType": "LifeTime"
                      },
                      "modifierType": "Buff",
                      "execute": [
                        {
                          "name": "Define Modifier Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
                          "function": "Add",
                          "value": 1,
                          "valueType": "Duration"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "priorState": "Active"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (CurScore) || RETURN",
                    "displayLines": "CurScore",
                    "constants": [],
                    "variables": [
                      "CurScore"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (60) || RETURN",
                    "displayLines": "60",
                    "constants": [],
                    "variables": [
                      60
                    ]
                  },
                  "priorState": "Normal",
                  "bar#": 4
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurScore",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (60) || RETURN",
                      "displayLines": "60",
                      "constants": [],
                      "variables": [
                        60
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "priorState": "Active"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"439718011\">function_SilverWolf999_CheckUltraEnd</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Action-End Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Battle is Over"
                  },
                  "passed": [
                    {
                      "name": "WAIT FOR",
                      "condition": {
                        "name": "Death Animation Completed",
                        "team": "Enemy Team",
                        "type": "Team Characters"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1743454141\">SilverWolf999_Ability11_ReleaseSettings</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1024723850\">_M_SilverWolf999_IsDuringAbility11</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"439718011\">function_SilverWolf999_CheckUltraEnd</a>"
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"439718011\">function_SilverWolf999_CheckUltraEnd</a>"
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Battle is Over"
                  },
                  "passed": [
                    {
                      "name": "WAIT FOR",
                      "condition": {
                        "name": "Death Animation Completed",
                        "team": "Enemy Team",
                        "type": "Team Characters"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1743454141\">SilverWolf999_Ability11_ReleaseSettings</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1024723850\">_M_SilverWolf999_IsDuringAbility11</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__439718011\">function_SilverWolf999_CheckUltraEnd</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "UltraAttackCount",
                        "compareType": "<=",
                        "value2": 0
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1550382446\">_M_SilverWolf999_IsStackingAbility11Succession</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1885411916\">SilverWolf999_Eidolon2_SumScore</a>[<span class=\"descriptionNumberColor\">It's a Feature, Not a Bug</span>]"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "<a class=\"gModGreen\" id=\"-1885411916\">SilverWolf999_Eidolon2_SumScore</a>[<span class=\"descriptionNumberColor\">It's a Feature, Not a Bug</span>]",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (120) || RETURN",
                              "displayLines": "120",
                              "constants": [],
                              "variables": [
                                120
                              ]
                            }
                          }
                        ],
                        "invertCondition": true
                      },
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
                      }
                    ]
                  },
                  "passed": [
                    "Deleted bullshit",
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "SilverWolf999_UltraEnd_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "CharacterBuffSelf",
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
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "UltraAttackCount",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"439718011\">function_SilverWolf999_CheckUltraEnd</a>"
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "modifierName": "<a class=\"gModGreen\" id=\"1358748576\">SilverWolf999_Ultra</a>[<span class=\"descriptionNumberColor\">Godmode Player</span>]",
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (UltraAttackCount) || RETURN",
                        "displayLines": "UltraAttackCount",
                        "constants": [],
                        "variables": [
                          "UltraAttackCount"
                        ]
                      }
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
    "SilverWolfL_SilverWolf999_Trace03": {
      "fileName": "SilverWolfL_SilverWolf999_Trace03",
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
          "modifier": "<a class=\"gModGreen\" id=\"1246302143\">SilverWolf999_Tree03</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1246302143\">SilverWolf999_Tree03</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1358748576\">SilverWolf999_Ultra</a>[<span class=\"descriptionNumberColor\">Godmode Player</span>]"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
                      "variables": {
                        "parameter[0]_AddValue": {
                          "operator": "Variables[0] (20) || RETURN",
                          "displayLines": "20",
                          "constants": [],
                          "variables": [
                            20
                          ]
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
    "SilverWolfL_SilverWolf999_Trace01": {
      "fileName": "SilverWolfL_SilverWolf999_Trace01",
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
          "modifier": "<a class=\"gModGreen\" id=\"1279857381\">SilverWolf999_Tree01</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-767182140\">SilverWolf999_Trace01_Bonus</a>[<span class=\"descriptionNumberColor\">False Ending Speedrun</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Elation increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "statusName": "False Ending Speedrun",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1279857381\">SilverWolf999_Tree01</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_CurrentSpeed",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_CurrentSpeed",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (160) || RETURN",
                      "displayLines": "160",
                      "constants": [],
                      "variables": [
                        160
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_EPRatioBase",
                      "value": {
                        "operator": "Variables[0] (0.5) || RETURN",
                        "displayLines": "0.5",
                        "constants": [],
                        "variables": [
                          0.5
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_CurrentSpeedConvert",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_CurrentSpeed",
                      "value": {
                        "operator": "Variables[0] (_CurrentSpeed) || Variables[1] (_CurrentSpeedConvert) || SUB || RETURN",
                        "displayLines": "(_CurrentSpeed - _CurrentSpeedConvert)",
                        "constants": [],
                        "variables": [
                          "_CurrentSpeed",
                          "_CurrentSpeedConvert"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_OverCountSpeedValue",
                      "value": {
                        "operator": "Variables[0] (_CurrentSpeed) || Variables[1] (160) || SUB || RETURN",
                        "displayLines": "(_CurrentSpeed - 160)",
                        "constants": [],
                        "variables": [
                          "_CurrentSpeed",
                          160
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_OverCountSpeedValue",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (100) || RETURN",
                          "displayLines": "100",
                          "constants": [],
                          "variables": [
                            100
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_OverCountSpeedValue",
                          "value": {
                            "operator": "Variables[0] (100) || RETURN",
                            "displayLines": "100",
                            "constants": [],
                            "variables": [
                              100
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_OverCountSpeedValue",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_EPRatioAdd",
                          "value": {
                            "operator": "Variables[0] (FLOOR) || Variables[1] (_OverCountSpeedValue) || Variables[2] (1) || DIV || PARAM_1 || FUNCTION || Variables[3] (0.02) || MUL || RETURN",
                            "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_OverCountSpeedValue / 1)) * 0.02)",
                            "constants": [],
                            "variables": [
                              "FLOOR",
                              "_OverCountSpeedValue",
                              1,
                              0.02
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_EPRatioAdd",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-767182140\">SilverWolf999_Trace01_Bonus</a>[<span class=\"descriptionNumberColor\">False Ending Speedrun</span>]",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (_EPRatioBase) || Variables[1] (_EPRatioAdd) || ADD || RETURN",
                          "displayLines": "(_EPRatioBase + _EPRatioAdd)",
                          "constants": [],
                          "variables": [
                            "_EPRatioBase",
                            "_EPRatioAdd"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-767182140\">SilverWolf999_Trace01_Bonus</a>[<span class=\"descriptionNumberColor\">False Ending Speedrun</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1279857381\">SilverWolf999_Tree01</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1279857381\">SilverWolf999_Tree01</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1279857381\">SilverWolf999_Tree01</a>"
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
    "SilverWolfL_SilverWolf999_Eidolon6": {
      "fileName": "SilverWolfL_SilverWolf999_Eidolon6",
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
          "modifier": "<a class=\"gModGreen\" id=\"787476202\">SilverWolf999_Eidolon6</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1718633654\">SilverWolf999_Ultimate_Aura_Eidolon6_SubOnEmemy</a>[<span class=\"descriptionNumberColor\">Absolute Weakness</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "WEAKNESS_IMPLANT"
          ],
          "description": "Has All-Type Weakness. All-Type Base RES is reduced to 0 (If Base RES is already at 0, then the corresponding Type RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> instead).",
          "type": "Debuff",
          "effectName": "Absolute Weakness",
          "statusName": "Absolute Weakness",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-259575428\">SilverWolf999_Eidolon6_CheckPropertyResistance</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllBaseOverride</span>&nbsp;",
                  "value": 0
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical"
                  ]
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
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Quantum"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Imaginary"
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-259575428\">SilverWolf999_Eidolon6_CheckPropertyResistance</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_resistanceBase",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ResistancePhysicalBase</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_resistanceBase",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextTaskTemplate"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistancePhysicalBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (0.2) || SUB || RETURN",
                        "displayLines": "(0 - 0.2)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          0.2
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_resistanceBase",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFireBase</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_resistanceBase",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextTaskTemplate"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFireBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (0.2) || SUB || RETURN",
                        "displayLines": "(0 - 0.2)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          0.2
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_resistanceBase",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceLightningBase</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_resistanceBase",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextTaskTemplate"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceLightningBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (0.2) || SUB || RETURN",
                        "displayLines": "(0 - 0.2)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          0.2
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_resistanceBase",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIceBase</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_resistanceBase",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextTaskTemplate"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIceBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (0.2) || SUB || RETURN",
                        "displayLines": "(0 - 0.2)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          0.2
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_resistanceBase",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindBase</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_resistanceBase",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextTaskTemplate"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (0.2) || SUB || RETURN",
                        "displayLines": "(0 - 0.2)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          0.2
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_resistanceBase",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumBase</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_resistanceBase",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextTaskTemplate"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (0.2) || SUB || RETURN",
                        "displayLines": "(0 - 0.2)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          0.2
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_resistanceBase",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceImaginaryBase</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_resistanceBase",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextTaskTemplate"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceImaginaryBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (0.2) || SUB || RETURN",
                        "displayLines": "(0 - 0.2)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          0.2
                        ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__787476202\">SilverWolf999_Eidolon6</a>",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1718633654\">SilverWolf999_Ultimate_Aura_Eidolon6_SubOnEmemy</a>[<span class=\"descriptionNumberColor\">Absolute Weakness</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "SilverWolfL_SilverWolf999_Eidolon4": {
      "fileName": "SilverWolfL_SilverWolf999_Eidolon4",
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
          "modifier": "<a class=\"gModGreen\" id=\"753920964\">SilverWolf999_Eidolon4</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__753920964\">SilverWolf999_Eidolon4</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has DMG Instance Tag",
                    "tag": "SilverWolf999_00_Skill41_Damage"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "scope": "ContextModifier",
                      "variableName": "CurrentEP"
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "AttackData",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">PunchlineFlatBonus</span>&nbsp;",
                          "value": "(CurrentEP * 5)"
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
    "SilverWolfL_GlobalAbility_SilverWolf999_Main": {
      "fileName": "SilverWolfL_GlobalAbility_SilverWolf999_Main",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-402547059\">GlobalAbility_SilverWolf999_CreateBattleEvent</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-402547059\">GlobalAbility_SilverWolf999_CreateBattleEvent</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Battle Event",
                  "teamName": "Player Team",
                  "eventID": 11506,
                  "variables": null
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -93
            }
          ]
        }
      ]
    },
    "SilverWolfL_LocalPlayer_SilverWolf999_TechniqueUsage_TriggerHitMonster": {
      "fileName": "SilverWolfL_LocalPlayer_SilverWolf999_TechniqueUsage_TriggerHitMonster",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Overworld Attack Instance",
          "onAttack": [
            {
              "name": "IF",
              "conditions": {
                "name": "Can Die Instantly",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                "Overworld Mark Target for Death(which we don't care about)"
              ]
            }
          ],
          "entryTargetType": "FirstHitTarget"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              "Compare Overworld Tech Points",
              "Can Consumables Recover Tech Points"
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-402526884\">ADV_GlobalAbility_Maze_SilverWolf999_TimeOutRemoveSummonUnit</a>",
              "duration": 0.033999998
            }
          ]
        }
      ],
      "references": [],
      "triggerType": "BySummonUnit",
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      }
    },
    "SilverWolfL_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "SilverWolfL_LocalPlayer_StandardAbility_AttackBreak",
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Physical"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Fire"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Ice"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Thunder"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Wind"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Quantum"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Imaginary"
            }
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
    "SilverWolfL_LocalPlayer_SilverWolf999_TechniqueUsage": {
      "fileName": "SilverWolfL_LocalPlayer_SilverWolf999_TechniqueUsage",
      "skillTrigger": "MazeSkill",
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
            "buffID": 150601,
            "modifier": null
          },
          "passed": [
            {
              "name": "Remove Overworld Entity",
              "summon": {
                "name": "Add Target by Summoned Units",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "summonID": 15061
              }
            },
            "Submit Technique Use"
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": "Ability Has a Target"
            },
            "Deleted bullshit",
            {
              "name": "Create Overworld Entity",
              "summonID": 15061,
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-203146933\">ADV_GlobalAbility_Maze_SilverWolf999_ListenTechniqueUsagePoint</a>"
                }
              ]
            },
            "Submit Technique Use"
          ]
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
    "SilverWolfL_LocalPlayer_SilverWolf999_NormalAtk01": {
      "fileName": "SilverWolfL_LocalPlayer_SilverWolf999_NormalAtk01",
      "skillTrigger": "NormalAtk",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            "Deleted bullshit",
            {
              "name": "Shot Fired"
            },
            {
              "name": "Shot Fired",
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance"
                }
              ]
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
              "name": "Shot Fired"
            },
            {
              "name": "Shot Fired",
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance"
                }
              ]
            }
          ]
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
    "SilverWolfL_GlobalAbility_SilverWolf999_Insert_Camera": {
      "fileName": "SilverWolfL_GlobalAbility_SilverWolf999_Insert_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "SilverWolfL_GlobalAbility_SilverWolf999_Insert_Part02": {
      "fileName": "SilverWolfL_GlobalAbility_SilverWolf999_Insert_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"294189746\">GlobalAbility_SilverWolf999_BattleEvent_Listener</a>"
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
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_ForceControl",
                "invertCondition": true
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"221078581\">GlobalAbility_SilverWolf999_ImmuneCTRL</a>[<span class=\"descriptionNumberColor\">Firewall</span>]",
          "duration": 1
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Player Team Members"
      }
    },
    "SilverWolfL_GlobalAbility_SilverWolf999_Insert_Part01": {
      "fileName": "SilverWolfL_GlobalAbility_SilverWolf999_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Assign Global Buff State",
          "buffID": 150602,
          "state": "False",
          "amount": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Matching Team Count",
            "countType": "Count1"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Matching Team Count",
            "countType": "Count2"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Matching Team Count",
            "countType": "Count3"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Matching Team Count",
            "countType": "Count4"
          }
        },
        {
          "name": "UI Display Event",
          "popUpText": "McAwolfee 999"
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "GlobalAbility_SilverWolf999_Insert_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "SilverWolfL_SilverWolf999_TechniqueInLevel": {
      "fileName": "SilverWolfL_SilverWolf999_TechniqueInLevel",
      "childAbilityList": [
        "SilverWolfL_SilverWolf999_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"435463122\">StageAbility_Maze_Silwolf_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__435463122\">StageAbility_Maze_Silwolf_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "SilverWolf999_TechniqueUsage_Insert",
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
                  "allowAbilityTriggers": false
                }
              ],
              "priorityLevel": -55
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
    "SilverWolfL_SilverWolf999_UltraEnd_Insert": {
      "fileName": "SilverWolfL_SilverWolf999_UltraEnd_Insert",
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
          "modifier": "<a class=\"gModGreen\" id=\"1358748576\">SilverWolf999_Ultra</a>[<span class=\"descriptionNumberColor\">Godmode Player</span>]"
        },
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1077186888\">_M_SilverWolf999_Ultimate_VisualManager</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
              "variables": {
                "parameter[0]_AddValue": {
                  "operator": "Constants[0] (0) || Variables[0] (CEIL) || Variables[1] (CurScore) || Constants[1] (1) || Variables[2] (0.2) || SUB || MUL || PARAM_1 || FUNCTION || SUB || RETURN",
                  "displayLines": "(0 - &nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>((CurScore * (1 - 0.2))))",
                  "constants": [
                    0,
                    1
                  ],
                  "variables": [
                    "CEIL",
                    "CurScore",
                    0.2
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
              "variables": {
                "parameter[0]_AddValue": {
                  "operator": "Constants[0] (0) || Variables[0] (CurScore) || SUB || RETURN",
                  "displayLines": "(0 - CurScore)",
                  "constants": [
                    0
                  ],
                  "variables": [
                    "CurScore"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "popUpText": "\"αWolf Instant\" has ended"
        },
        "Deleted bullshit"
      ],
      "onAbort": [
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "SilverWolfL_SilverWolf999_PassiveAbility01": {
      "fileName": "SilverWolfL_SilverWolf999_PassiveAbility01",
      "childAbilityList": [
        "SilverWolfL_SilverWolf999_PassiveAbility01",
        "SilverWolfL_SilverWolf999_UltraEnd_Insert",
        "SilverWolfL_SilverWolf999_UltraEnd_Insert_Camera"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
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
          "modifier": "<a class=\"gModGreen\" id=\"2030021673\">SilverWolf999_Passive01</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "TriggerItemBaseChance",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1513010043\">SilverWolf999_SP</a>[<span class=\"descriptionNumberColor\">Hidden MMR</span>]"
        },
        {
          "name": "Automatically use Ultimate",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        "Deleted bullshit",
        {
          "name": "Add Ability Tag",
          "skillName": "Skill04",
          "tag": [
            "AssistCaster"
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (CurScore) || RETURN",
            "displayLines": "CurScore",
            "constants": [],
            "variables": [
              "CurScore"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (60) || RETURN",
            "displayLines": "60",
            "constants": [],
            "variables": [
              60
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 4
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1513010043\">SilverWolf999_SP</a>[<span class=\"descriptionNumberColor\">Hidden MMR</span>]",
          "modifierFlags": [
            "RetainCountZero"
          ],
          "description": "After reaching <span class=\"descriptionNumberColor\">#SkillP01_P1_NeedSP</span> points, can activate Ultimate. When exiting the \"Godmode Player\" state, clears \"Hidden MMR\".<br>The current \"Hidden MMR\" increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_CriticalChangeAdd</span> and CRIT DMG by <span class=\"descriptionNumberColor\">MDF_CriticalDamageAdd</span>.",
          "type": "Buff",
          "statusName": "Hidden MMR",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "value": {
                    "operator": "Variables[0] (CurScore) || RETURN",
                    "displayLines": "CurScore",
                    "constants": [],
                    "variables": [
                      "CurScore"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"161763618\">_T_SilverWolf999_StackPropertyByScore</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__161763618\">_T_SilverWolf999_StackPropertyByScore</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_critChance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                  "context": "ContextTaskTemplate"
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextTaskTemplate",
                  "variableName": "_addCritChanceScore",
                  "value": {
                    "operator": "Variables[0] (CEIL) || Constants[0] (1) || Variables[1] (_critChance) || SUB || Variables[2] (0.0039999997) || DIV || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(((1 - _critChance) / 0.0039999997))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "CEIL",
                      "_critChance",
                      0.0039999997
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CriticalChanceScore",
                  "value": {
                    "operator": "Variables[0] (CLAMP) || Variables[1] (MDF_CriticalChanceScore) || Variables[2] (_addCritChanceScore) || ADD || Constants[0] (0) || Variables[3] (CurScore) || PARAM_3 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CLAMP</span>((MDF_CriticalChanceScore + _addCritChanceScore), 0, CurScore)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "CLAMP",
                      "MDF_CriticalChanceScore",
                      "_addCritChanceScore",
                      "CurScore"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CriticalChangeAdd",
                  "value": {
                    "operator": "Variables[0] (0.0039999997) || Variables[1] (MDF_CriticalChanceScore) || MUL || RETURN",
                    "displayLines": "(0.0039999997 * MDF_CriticalChanceScore)",
                    "constants": [],
                    "variables": [
                      0.0039999997,
                      "MDF_CriticalChanceScore"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CriticalDamageAdd",
                  "value": {
                    "operator": "Variables[0] (0.007999999) || Variables[1] (CurScore) || Variables[2] (MDF_CriticalChanceScore) || SUB || MUL || RETURN",
                    "displayLines": "(0.007999999 * (CurScore - MDF_CriticalChanceScore))",
                    "constants": [],
                    "variables": [
                      0.007999999,
                      "CurScore",
                      "MDF_CriticalChanceScore"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CriticalChangeAdd) || RETURN",
                    "displayLines": "MDF_CriticalChangeAdd",
                    "constants": [],
                    "variables": [
                      "MDF_CriticalChangeAdd"
                    ]
                  },
                  "isRefresh": true
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CriticalDamageAdd) || RETURN",
                    "displayLines": "MDF_CriticalDamageAdd",
                    "constants": [],
                    "variables": [
                      "MDF_CriticalDamageAdd"
                    ]
                  },
                  "isRefresh": true
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "CurScore",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"161763618\">_T_SilverWolf999_StackPropertyByScore</a>"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (CurScore) || RETURN",
                        "displayLines": "CurScore",
                        "constants": [],
                        "variables": [
                          "CurScore"
                        ]
                      }
                    },
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "value": {
                        "operator": "Variables[0] (CurScore) || RETURN",
                        "displayLines": "CurScore",
                        "constants": [],
                        "variables": [
                          "CurScore"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1358748576\">SilverWolf999_Ultra</a>[<span class=\"descriptionNumberColor\">Godmode Player</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "value1": "SpecialEnergy%",
                            "compareType": ">=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "priorState": "Active"
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
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_CurSpecialSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurScore",
                      "value": {
                        "operator": "Variables[0] (MDF_CurSpecialSP) || Variables[1] (MDF_CurExtraSpecialSP) || ADD || RETURN",
                        "displayLines": "(MDF_CurSpecialSP + MDF_CurExtraSpecialSP)",
                        "constants": [],
                        "variables": [
                          "MDF_CurSpecialSP",
                          "MDF_CurExtraSpecialSP"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_CurExtraSpecialSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurScore",
                      "value": {
                        "operator": "Variables[0] (MDF_CurSpecialSP) || Variables[1] (MDF_CurExtraSpecialSP) || ADD || RETURN",
                        "displayLines": "(MDF_CurSpecialSP + MDF_CurExtraSpecialSP)",
                        "constants": [],
                        "variables": [
                          "MDF_CurSpecialSP",
                          "MDF_CurExtraSpecialSP"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"161763618\">_T_SilverWolf999_StackPropertyByScore</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2030021673\">SilverWolf999_Passive01</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Switch to Action/Ability Context"
                },
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
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMaxSpecialOverflow</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (240) || RETURN",
                    "displayLines": "240",
                    "constants": [],
                    "variables": [
                      240
                    ]
                  }
                }
              ]
            }
          ],
          "elationValueChange": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "_epChange"
                },
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
                        "value1": "_epChange",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
                      "variables": {
                        "parameter[0]_AddValue": {
                          "operator": "Variables[0] (_epChange) || RETURN",
                          "displayLines": "_epChange",
                          "constants": [],
                          "variables": [
                            "_epChange"
                          ]
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
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "SilverWolfL_SilverWolf999_Ability41_Part02": {
      "fileName": "SilverWolfL_SilverWolf999_Ability41_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (6) || RETURN",
            "displayLines": "6",
            "constants": [],
            "variables": [
              6
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "paramSequence": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "DamageElation": {
                      "operator": "Variables[0] (0.9) || RETURN",
                      "displayLines": "0.9",
                      "constants": [],
                      "variables": [
                        0.9
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || RETURN",
                      "displayLines": "ST Toughness Value",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value"
                      ]
                    },
                    "instanceTag": "SilverWolf999_00_Skill41_Damage",
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "True Ending Unlocked"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Elation_Skill_Punchline_Value",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (40) || RETURN",
                  "displayLines": "40",
                  "constants": [],
                  "variables": [
                    40
                  ]
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
                  "variables": {
                    "parameter[0]_AddValue": {
                      "operator": "Variables[0] (20) || Variables[1] (20) || ADD || RETURN",
                      "displayLines": "(20 + 20)",
                      "constants": [],
                      "variables": [
                        20,
                        20
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Elation_Skill_Punchline_Value",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (20) || RETURN",
                      "displayLines": "20",
                      "constants": [],
                      "variables": [
                        20
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
                      "variables": {
                        "parameter[0]_AddValue": {
                          "operator": "Variables[0] (20) || RETURN",
                          "displayLines": "20",
                          "constants": [],
                          "variables": [
                            20
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
          "name": "Define Custom Variable",
          "variableName": "TriggerItemChance",
          "value": {
            "operator": "Variables[0] (TriggerItemBaseChance) || RETURN",
            "displayLines": "TriggerItemBaseChance",
            "constants": [],
            "variables": [
              "TriggerItemBaseChance"
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "SilverWolfL_SilverWolf999_Ability41_Part01": {
      "fileName": "SilverWolfL_SilverWolf999_Ability41_Part01",
      "childAbilityList": [
        "SilverWolfL_SilverWolf999_Ability41_Camera",
        "SilverWolfL_SilverWolf999_Ability41_Part01",
        "SilverWolfL_SilverWolf999_Ability41_Part02"
      ],
      "skillTrigger": "Skill41",
      "tag": "InfiniteRefresh",
      "abilityType": "Elation",
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
          "ability": "SilverWolf999_Ability41_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "SilverWolfL_SilverWolf999_Ability04_Part02": {
      "fileName": "SilverWolfL_SilverWolf999_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "True Ending Unlocked"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Elation_Skill_Punchline_Value",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (40) || RETURN",
                  "displayLines": "40",
                  "constants": [],
                  "variables": [
                    40
                  ]
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
                  "variables": {
                    "parameter[0]_AddValue": {
                      "operator": "Variables[0] (15) || Variables[1] (20) || ADD || Variables[2] (20) || ADD || RETURN",
                      "displayLines": "((15 + 20) + 20)",
                      "constants": [],
                      "variables": [
                        15,
                        20,
                        20
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Elation_Skill_Punchline_Value",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (20) || RETURN",
                      "displayLines": "20",
                      "constants": [],
                      "variables": [
                        20
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
                      "variables": {
                        "parameter[0]_AddValue": {
                          "operator": "Variables[0] (15) || Variables[1] (20) || ADD || RETURN",
                          "displayLines": "(15 + 20)",
                          "constants": [],
                          "variables": [
                            15,
                            20
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
                      "variables": {
                        "parameter[0]_AddValue": {
                          "operator": "Variables[0] (15) || RETURN",
                          "displayLines": "15",
                          "constants": [],
                          "variables": [
                            15
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
              "variables": {
                "parameter[0]_AddValue": {
                  "operator": "Variables[0] (15) || RETURN",
                  "displayLines": "15",
                  "constants": [],
                  "variables": [
                    15
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "SilverWolfL_SilverWolf999_Ability04_Part01": {
      "fileName": "SilverWolfL_SilverWolf999_Ability04_Part01",
      "childAbilityList": [
        "SilverWolfL_SilverWolf999_Ability04_Camera",
        "SilverWolfL_SilverWolf999_Ability04_Part01",
        "SilverWolfL_SilverWolf999_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
      "tag": "InfiniteRefresh",
      "abilityType": "Elation",
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
          "ability": "SilverWolf999_Ability04_Part02",
          "isTrigger": true
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
    "SilverWolfL_SilverWolf999_TechniqueUsage_Insert": {
      "fileName": "SilverWolfL_SilverWolf999_TechniqueUsage_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "_Item3_AchievementFlag",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1265642911\">_M_SilverWolf999_TechniqueUsageOverrideEP</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-2134200315\">SilverWolf999_Item3_AfterBox</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1265642911\">_M_SilverWolf999_TechniqueUsageOverrideEP</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"918776177\">SilverWolf999_Item3_Finish</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1265642911\">_M_SilverWolf999_TechniqueUsageOverrideEP</a>",
          "latentQueue": [
            "_Item3_AchievementFlag"
          ],
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has DMG Instance Tag",
                    "tag": "SilverWolf999_00_Item_Damage"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "AttackData",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Punchline</span>&nbsp;",
                          "value": "99"
                        },
                        {
                          "on": "AttackData",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">PunchlineToggle</span>&nbsp;",
                          "value": 0
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
        "primaryTarget": "Inherent Target"
      }
    },
    "SilverWolfL_SilverWolf999_Item3_Part02": {
      "fileName": "SilverWolfL_SilverWolf999_Item3_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "_Item3_AchievementFlag",
          "value": 1
        },
        {
          "name": "UI Display Event",
          "popUpText": "Funky Munch Bean"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-2134200315\">SilverWolf999_Item3_AfterBox</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Active: Fast-Forward Animations"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"918776177\">SilverWolf999_Item3_Finish</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "SilverWolfL_SilverWolf999_Item3_Part01": {
      "fileName": "SilverWolfL_SilverWolf999_Item3_Part01",
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
          "ability": "SilverWolf999_Item3_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "SilverWolfL_SilverWolf999_Ability11_Item3_Part02": {
      "fileName": "SilverWolfL_SilverWolf999_Ability11_Item3_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"773036968\">_M_SilverWolf999_DuringAbility11_DisableControlSkillForUI</a>"
        },
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "adjustment": "Add"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "TDF_EnemyCountForPerformance",
          "context": "ContextAbility"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "variableName": "TDF_EnemyCountForDamage",
              "livingTargets": true,
              "context": "ContextAbility"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "variableName": "TDF_EnemyCountForDamage",
              "context": "ContextAbility"
            }
          ]
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (TDF_EnemyCountForPerformance) || RETURN",
            "displayLines": "TDF_EnemyCountForPerformance",
            "constants": [],
            "variables": [
              "TDF_EnemyCountForPerformance"
            ]
          },
          "hasBreak": false,
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay1",
                  "value": 0
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay1",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay2",
                  "value": 0.4
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay1",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay2",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay3",
                  "value": 0.4
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay1",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay2",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay3",
                  "value": 0.4
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay4",
                  "value": 0.4
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay1",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay2",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay3",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay4",
                  "value": 0.4
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay5",
                  "value": 0.4
                }
              ]
            }
          ],
          "defaultEvents": [
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay1",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay2",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay3",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay4",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay5",
              "value": 0
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_ADF_Index",
          "value": 0
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "includeDyingTargets": true,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Index",
              "value": {
                "operator": "Variables[0] (#CL_ADF_Index) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(#CL_ADF_Index + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "#CL_ADF_Index"
                ]
              }
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (#CL_ADF_Index) || RETURN",
                "displayLines": "#CL_ADF_Index",
                "constants": [],
                "variables": [
                  "#CL_ADF_Index"
                ]
              },
              "hasBreak": false,
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_ADF_Delay",
                      "value": {
                        "operator": "Variables[0] (#CL_ADF_Delay1) || RETURN",
                        "displayLines": "#CL_ADF_Delay1",
                        "constants": [],
                        "variables": [
                          "#CL_ADF_Delay1"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_ADF_Delay",
                      "value": {
                        "operator": "Variables[0] (#CL_ADF_Delay2) || RETURN",
                        "displayLines": "#CL_ADF_Delay2",
                        "constants": [],
                        "variables": [
                          "#CL_ADF_Delay2"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_ADF_Delay",
                      "value": {
                        "operator": "Variables[0] (#CL_ADF_Delay3) || RETURN",
                        "displayLines": "#CL_ADF_Delay3",
                        "constants": [],
                        "variables": [
                          "#CL_ADF_Delay3"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_ADF_Delay",
                      "value": {
                        "operator": "Variables[0] (#CL_ADF_Delay4) || RETURN",
                        "displayLines": "#CL_ADF_Delay4",
                        "constants": [],
                        "variables": [
                          "#CL_ADF_Delay4"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_ADF_Delay",
                      "value": {
                        "operator": "Variables[0] (#CL_ADF_Delay5) || RETURN",
                        "displayLines": "#CL_ADF_Delay5",
                        "constants": [],
                        "variables": [
                          "#CL_ADF_Delay5"
                        ]
                      }
                    }
                  ]
                }
              ],
              "defaultEvents": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay",
                  "value": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Hostile Entities(AOE)}}"
                    },
                    "conditions": {
                      "name": "Living State",
                      "state": "Mask_AliveOnly",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "DamageElation": {
                      "operator": "Variables[0] (0.9) || RETURN",
                      "displayLines": "0.9",
                      "constants": [],
                      "variables": [
                        0.9
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "HitSplit": {
                      "operator": "Constants[0] (1) || Variables[0] (TDF_EnemyCountForDamage) || DIV || RETURN",
                      "displayLines": "(1 / TDF_EnemyCountForDamage)",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "TDF_EnemyCountForDamage"
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
                      "DamageType": "Imaginary"
                    },
                    "instanceTag": "SilverWolf999_00_Item_Damage",
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1713096413\">SilverWolf999_Ability11_ItemDamagePerformfinish</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Skill11_Item_LeftCount",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1468343614\">SilverWolf999_Ability11_Shoot</a>"
                }
              ],
              "failed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "SilverWolf999_Ability11_End_Part01",
                  "isTrigger": true
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"872770640\">SilverWolf999_Ability11_QuitOnKillAll</a>"
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "SilverWolfL_SilverWolf999_Ability11_Item3_Part01": {
      "fileName": "SilverWolfL_SilverWolf999_Ability11_Item3_Part01",
      "childAbilityList": [
        "SilverWolfL_SilverWolf999_Ability11_Item3_Prepare_Camera",
        "SilverWolfL_SilverWolf999_Ability11_Item3_Prepare",
        "SilverWolfL_SilverWolf999_Ability11_Item3_Part01",
        "SilverWolfL_SilverWolf999_Ability11_Item3_Part02",
        "SilverWolfL_SilverWolf999_Ability11_Item3_Camera",
        "SilverWolfL_SilverWolf999_Item3_Part01",
        "SilverWolfL_SilverWolf999_Item3_Part02",
        "SilverWolfL_SilverWolf999_Item3_Camera",
        "SilverWolfL_SilverWolf999_TechniqueUsage_Insert"
      ],
      "skillTrigger": "Skill14",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": [
        0,
        10,
        0
      ],
      "parse": [
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "SilverWolf999_Ability11_Item3_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill11_Item_LeftCount",
            "compareType": "<=",
            "value2": 0
          },
          "passed": [
            "Unknown EventType4 (Not always an error)[1 true]"
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}",
        "stateFilter": "AliveOrLimbo"
      }
    },
    "SilverWolfL_SilverWolf999_Ability11_Item3_Prepare": {
      "fileName": "SilverWolfL_SilverWolf999_Ability11_Item3_Prepare",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill14",
          "skillSlot": "Basic ATK"
        },
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1989702810\">SilverWolf999_HideShooters</a>"
        },
        {
          "name": "Force-Trigger Ability Next-Phase",
          "ability": "MISSING NAME OBJECT(Or implicit from Context)"
        },
        {
          "name": "Trigger: Ability End",
          "skipAttackSettle": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "SilverWolfL_SilverWolf999_Item2_Part02": {
      "fileName": "SilverWolfL_SilverWolf999_Item2_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "_Item2_AchievementFlag",
          "value": 1
        },
        {
          "name": "UI Display Event",
          "popUpText": "Kaboom Eggsplosion"
        },
        {
          "name": "Skill Points Modification",
          "adjustmentValue": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "adjustmentType": "+"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}.[[living]]"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageElation": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Imaginary"
                },
                "instanceTag": "SilverWolf999_00_Item_Damage",
                "Tags": null,
                "attackType": "Elation DMG"
              },
              "distributeEqually": true
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
                "DamageType": "Imaginary",
                "DamageElation": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Imaginary"
                },
                "instanceTag": "SilverWolf999_00_Item_Damage",
                "Tags": null,
                "attackType": "Elation DMG"
              },
              "distributeEqually": true
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Active: Fast-Forward Animations"
          }
        },
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters"
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "SilverWolfL_SilverWolf999_Item2_Part01": {
      "fileName": "SilverWolfL_SilverWolf999_Item2_Part01",
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
          "ability": "SilverWolf999_Item2_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "SilverWolfL_SilverWolf999_Ability11_Item2_Part02": {
      "fileName": "SilverWolfL_SilverWolf999_Ability11_Item2_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"773036968\">_M_SilverWolf999_DuringAbility11_DisableControlSkillForUI</a>"
        },
        {
          "name": "Skill Points Modification",
          "adjustmentValue": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "adjustmentType": "+"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}.[[living]]"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageElation": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Imaginary"
                },
                "instanceTag": "SilverWolf999_00_Item_Damage",
                "Tags": null,
                "attackType": "Elation DMG"
              },
              "distributeEqually": true
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
                "DamageType": "Imaginary",
                "DamageElation": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Imaginary"
                },
                "instanceTag": "SilverWolf999_00_Item_Damage",
                "Tags": null,
                "attackType": "Elation DMG"
              },
              "distributeEqually": true
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1713096413\">SilverWolf999_Ability11_ItemDamagePerformfinish</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Skill11_Item_LeftCount",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1468343614\">SilverWolf999_Ability11_Shoot</a>"
                }
              ],
              "failed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "SilverWolf999_Ability11_End_Part01",
                  "isTrigger": true
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"872770640\">SilverWolf999_Ability11_QuitOnKillAll</a>"
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "SilverWolfL_SilverWolf999_Ability11_Item2_Part01": {
      "fileName": "SilverWolfL_SilverWolf999_Ability11_Item2_Part01",
      "childAbilityList": [
        "SilverWolfL_SilverWolf999_Ability11_Item2_Prepare_Camera",
        "SilverWolfL_SilverWolf999_Ability11_Item2_Prepare",
        "SilverWolfL_SilverWolf999_Ability11_Item2_Part01",
        "SilverWolfL_SilverWolf999_Ability11_Item2_Part02",
        "SilverWolfL_SilverWolf999_Ability11_Item2_Camera",
        "SilverWolfL_SilverWolf999_Item2_Part01",
        "SilverWolfL_SilverWolf999_Item2_Part02",
        "SilverWolfL_SilverWolf999_Item2_Camera"
      ],
      "skillTrigger": "Skill13",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": [
        0,
        10,
        0
      ],
      "parse": [
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "SilverWolf999_Ability11_Item2_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill11_Item_LeftCount",
            "compareType": "<=",
            "value2": 0
          },
          "passed": [
            "Unknown EventType4 (Not always an error)[1 true]"
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}",
        "stateFilter": "AliveOrLimbo"
      }
    },
    "SilverWolfL_SilverWolf999_Ability11_Item2_Prepare": {
      "fileName": "SilverWolfL_SilverWolf999_Ability11_Item2_Prepare",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill13",
          "skillSlot": "Basic ATK"
        },
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1989702810\">SilverWolf999_HideShooters</a>"
        },
        {
          "name": "Force-Trigger Ability Next-Phase",
          "ability": "MISSING NAME OBJECT(Or implicit from Context)"
        },
        {
          "name": "Trigger: Ability End",
          "skipAttackSettle": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "SilverWolfL_SilverWolf999_Item1_Part02": {
      "fileName": "SilverWolfL_SilverWolf999_Item1_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "_Item1_AchievementFlag",
          "value": 1
        },
        {
          "name": "UI Display Event",
          "popUpText": "Big Flipping Sword"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1388281283\">_M_SilverWolf999_Item1_Listener</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}.[[living]]"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageElation": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Imaginary"
                },
                "instanceTag": "SilverWolf999_00_Item_Damage",
                "Tags": null,
                "attackType": "Elation DMG"
              },
              "distributeEqually": true
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
                "DamageType": "Imaginary",
                "DamageElation": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Imaginary"
                },
                "instanceTag": "SilverWolf999_00_Item_Damage",
                "Tags": null,
                "attackType": "Elation DMG"
              },
              "distributeEqually": true
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1388281283\">_M_SilverWolf999_Item1_Listener</a>"
        },
        "Trigger: Attack End",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1669745589\">VS_PFM_CameraShakeMiddle</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Active: Fast-Forward Animations"
          }
        },
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters"
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "SilverWolfL_SilverWolf999_Item1_Part01": {
      "fileName": "SilverWolfL_SilverWolf999_Item1_Part01",
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
          "ability": "SilverWolf999_Item1_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "SilverWolfL_SilverWolf999_Ability11_Item1_Part02": {
      "fileName": "SilverWolfL_SilverWolf999_Ability11_Item1_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"773036968\">_M_SilverWolf999_DuringAbility11_DisableControlSkillForUI</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1388281283\">_M_SilverWolf999_Item1_Listener</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_ADF_Index",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_ADF_DeltaFrame",
          "value": {
            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__307) || Variables[1] (ENEMIES_OBJECT_UNUSED__308) || SUB || Variables[2] (UNKNOWN_SW999_OBJECT[5]) || Constants[0] (1) || SUB || DIV || RETURN",
            "displayLines": "((ENEMIES_OBJECT_UNUSED__307 - ENEMIES_OBJECT_UNUSED__308) / (UNKNOWN_SW999_OBJECT[5] - 1))",
            "constants": [
              1
            ],
            "variables": [
              "ENEMIES_OBJECT_UNUSED__307",
              "ENEMIES_OBJECT_UNUSED__308",
              "UNKNOWN_SW999_OBJECT[5]"
            ]
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (UNKNOWN_SW999_OBJECT[5]) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(UNKNOWN_SW999_OBJECT[5] - 1)",
            "constants": [
              1
            ],
            "variables": [
              "UNKNOWN_SW999_OBJECT[5]"
            ]
          },
          "Event": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemies Still Alive",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}.[[living]]"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "DamageElation": {
                      "operator": "Variables[0] (0.9) || RETURN",
                      "displayLines": "0.9",
                      "constants": [],
                      "variables": [
                        0.9
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "HitSplit": {
                      "operator": "Constants[0] (1) || Variables[0] (UNKNOWN_SW999_OBJECT[5]) || DIV || RETURN",
                      "displayLines": "(1 / UNKNOWN_SW999_OBJECT[5])",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "UNKNOWN_SW999_OBJECT[5]"
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
                      "DamageType": "Imaginary"
                    },
                    "instanceTag": "SilverWolf999_00_Item_Damage",
                    "Tags": null,
                    "attackType": "Elation DMG"
                  },
                  "distributeEqually": true
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
                    "DamageType": "Imaginary",
                    "DamageElation": {
                      "operator": "Variables[0] (0.9) || RETURN",
                      "displayLines": "0.9",
                      "constants": [],
                      "variables": [
                        0.9
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "HitSplit": {
                      "operator": "Constants[0] (1) || Variables[0] (UNKNOWN_SW999_OBJECT[5]) || DIV || RETURN",
                      "displayLines": "(1 / UNKNOWN_SW999_OBJECT[5])",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "UNKNOWN_SW999_OBJECT[5]"
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
                      "DamageType": "Imaginary"
                    },
                    "instanceTag": "SilverWolf999_00_Item_Damage",
                    "Tags": null,
                    "attackType": "Elation DMG"
                  },
                  "distributeEqually": true
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Index",
              "value": {
                "operator": "Variables[0] (#CL_ADF_Index) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(#CL_ADF_Index + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "#CL_ADF_Index"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}.[[living]]"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageElation": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "HitSplit": {
                  "operator": "Constants[0] (1) || Variables[0] (UNKNOWN_SW999_OBJECT[5]) || Constants[0] (1) || SUB || Variables[0] (UNKNOWN_SW999_OBJECT[5]) || DIV || SUB || RETURN",
                  "displayLines": "(1 - ((UNKNOWN_SW999_OBJECT[5] - 1) / UNKNOWN_SW999_OBJECT[5]))",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "UNKNOWN_SW999_OBJECT[5]"
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
                  "DamageType": "Imaginary"
                },
                "instanceTag": "SilverWolf999_00_Item_Damage",
                "Tags": null,
                "attackType": "Elation DMG"
              },
              "distributeEqually": true
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
                "DamageType": "Imaginary",
                "DamageElation": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "HitSplit": {
                  "operator": "Constants[0] (1) || Variables[0] (UNKNOWN_SW999_OBJECT[5]) || Constants[0] (1) || SUB || Variables[0] (UNKNOWN_SW999_OBJECT[5]) || DIV || SUB || RETURN",
                  "displayLines": "(1 - ((UNKNOWN_SW999_OBJECT[5] - 1) / UNKNOWN_SW999_OBJECT[5]))",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "UNKNOWN_SW999_OBJECT[5]"
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
                  "DamageType": "Imaginary"
                },
                "instanceTag": "SilverWolf999_00_Item_Damage",
                "Tags": null,
                "attackType": "Elation DMG"
              },
              "distributeEqually": true
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1388281283\">_M_SilverWolf999_Item1_Listener</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1713096413\">SilverWolf999_Ability11_ItemDamagePerformfinish</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Skill11_Item_LeftCount",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1468343614\">SilverWolf999_Ability11_Shoot</a>"
                }
              ],
              "failed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "SilverWolf999_Ability11_End_Part01",
                  "isTrigger": true
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"872770640\">SilverWolf999_Ability11_QuitOnKillAll</a>"
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "SilverWolfL_SilverWolf999_Ability11_Item1_Part01": {
      "fileName": "SilverWolfL_SilverWolf999_Ability11_Item1_Part01",
      "childAbilityList": [
        "SilverWolfL_SilverWolf999_Ability11_Item1_Prepare_Camera",
        "SilverWolfL_SilverWolf999_Ability11_Item1_Prepare",
        "SilverWolfL_SilverWolf999_Ability11_Item1_Part01",
        "SilverWolfL_SilverWolf999_Ability11_Item1_Part02",
        "SilverWolfL_SilverWolf999_Ability11_Item1_Camera",
        "SilverWolfL_SilverWolf999_Item1_Part01",
        "SilverWolfL_SilverWolf999_Item1_Part02",
        "SilverWolfL_SilverWolf999_Item1_Camera"
      ],
      "skillTrigger": "Skill12",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": [
        0,
        10,
        0
      ],
      "parse": [
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "SilverWolf999_Ability11_Item1_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill11_Item_LeftCount",
            "compareType": "<=",
            "value2": 0
          },
          "passed": [
            "Unknown EventType4 (Not always an error)[1 true]"
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}",
        "stateFilter": "AliveOrLimbo"
      }
    },
    "SilverWolfL_SilverWolf999_Ability11_Item1_Prepare": {
      "fileName": "SilverWolfL_SilverWolf999_Ability11_Item1_Prepare",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill12",
          "skillSlot": "Basic ATK"
        },
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1989702810\">SilverWolf999_HideShooters</a>"
        },
        {
          "name": "Force-Trigger Ability Next-Phase",
          "ability": "MISSING NAME OBJECT(Or implicit from Context)"
        },
        {
          "name": "Trigger: Ability End",
          "skipAttackSettle": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "SilverWolfL_SilverWolf999_Item_Insert": {
      "fileName": "SilverWolfL_SilverWolf999_Item_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1112298097\">SilverWolf999_RollItemIndex</a>"
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (CurrentItem) || RETURN",
            "displayLines": "CurrentItem",
            "constants": [],
            "variables": [
              "CurrentItem"
            ]
          },
          "hasBreak": false,
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "SilverWolf999_Item1_Part01",
                  "isTrigger": true
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "SilverWolf999_Item2_Part01",
                  "isTrigger": true
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "SilverWolf999_Item3_Part01",
                  "isTrigger": true
                }
              ]
            }
          ],
          "defaultEvents": []
        }
      ],
      "onAbort": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"362501008\">_M_SilverWolf999_ItemInsertCheck</a>",
          "addStacksPerTrigger": 1
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "SilverWolfL_SilverWolf999_Ability11_End_Part02": {
      "fileName": "SilverWolfL_SilverWolf999_Ability11_End_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}.[[living]]"
          },
          "variableName": "ADF_TargetCount",
          "livingTargets": true,
          "context": "ContextAbility"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "ElationEchoPoint"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemies Still Alive",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}.[[living]]"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "DamageElation": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Elation DMG"
                  },
                  "distributeEqually": true
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
                    "DamageType": "Imaginary",
                    "DamageElation": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Elation DMG"
                  },
                  "distributeEqually": true
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemies Still Alive",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}.[[living]]"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
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
                    "Tags": null,
                    "attackType": "Basic ATK"
                  },
                  "distributeEqually": true
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
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
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
                    "Tags": null,
                    "attackType": "Basic ATK"
                  },
                  "distributeEqually": true
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "failed": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team Entity}}"
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1024723850\">_M_SilverWolf999_IsDuringAbility11</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "UltraAttackCount",
          "value": {
            "operator": "Variables[0] (UltraAttackCount) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(UltraAttackCount - 1)",
            "constants": [
              1
            ],
            "variables": [
              "UltraAttackCount"
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "SilverWolfL_SilverWolf999_Ability11_End_Part01": {
      "fileName": "SilverWolfL_SilverWolf999_Ability11_End_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          }
        },
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1743454141\">SilverWolf999_Ability11_ReleaseSettings</a>"
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "SilverWolf999_Ability11_End_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "SilverWolfL_SilverWolf999_Ability11_Part02": {
      "fileName": "SilverWolfL_SilverWolf999_Ability11_Part02",
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
            "modifier": "<a class=\"gModGreen\" id=\"1816674206\">_M_SilverWolf999_IsAbility11Succession</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill11_Item_TotalCount",
              "value": {
                "operator": "Variables[0] (Skill11_Item_LeftCount) || RETURN",
                "displayLines": "Skill11_Item_LeftCount",
                "constants": [],
                "variables": [
                  "Skill11_Item_LeftCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Skill11_Shoot_TotalCount",
              "value": {
                "operator": "Variables[0] (Skill11_Shoot_LeftCount) || RETURN",
                "displayLines": "Skill11_Shoot_LeftCount",
                "constants": [],
                "variables": [
                  "Skill11_Shoot_LeftCount"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill11_Shoot_TotalCount",
              "value": {
                "operator": "Variables[0] (100) || RETURN",
                "displayLines": "100",
                "constants": [],
                "variables": [
                  100
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Skill11_Item_TotalCount",
              "value": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill11_Item_LeftCount",
          "value": {
            "operator": "Variables[0] (Skill11_Item_TotalCount) || RETURN",
            "displayLines": "Skill11_Item_TotalCount",
            "constants": [],
            "variables": [
              "Skill11_Item_TotalCount"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill11_Shoot_LeftCount",
          "value": {
            "operator": "Variables[0] (Skill11_Shoot_TotalCount) || RETURN",
            "displayLines": "Skill11_Shoot_TotalCount",
            "constants": [],
            "variables": [
              "Skill11_Shoot_TotalCount"
            ]
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1468343614\">SilverWolf999_Ability11_Shoot</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "SilverWolfL_SilverWolf999_Ability11_Part01": {
      "fileName": "SilverWolfL_SilverWolf999_Ability11_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Unknown EventType4 (Not always an error)",
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "SilverWolf999_Ability11_Part02",
          "isTrigger": true
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "SilverWolf999_Skill11_EnemyGround",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "SilverWolfL_SilverWolf999_Ability11_Entry": {
      "fileName": "SilverWolfL_SilverWolf999_Ability11_Entry",
      "childAbilityList": [
        "SilverWolfL_SilverWolf999_Ability11_Entry",
        "SilverWolfL_SilverWolf999_Ability11_Start_Camera",
        "SilverWolfL_SilverWolf999_Ability11_Part01",
        "SilverWolfL_SilverWolf999_Ability11_Part02",
        "SilverWolfL_SilverWolf999_Ability11_End_Camera",
        "SilverWolfL_SilverWolf999_Ability11_End_Part01",
        "SilverWolfL_SilverWolf999_Ability11_End_Part02",
        "SilverWolfL_SilverWolf999_Item_Insert",
        "SilverWolfL_SilverWolf999_ItemStart_Insert_Camera"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": [
        10,
        10,
        0
      ],
      "parse": [
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "Skill11_Shoot_Stance",
          "value": {
            "operator": "Variables[0] (ST Toughness Value) || RETURN",
            "displayLines": "ST Toughness Value",
            "constants": [],
            "variables": [
              "ST Toughness Value"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1024723850\">_M_SilverWolf999_IsDuringAbility11</a>"
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
                "modifier": "<a class=\"gModGreen\" id=\"1816674206\">_M_SilverWolf999_IsAbility11Succession</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "Skill11_Item_LeftCount",
                "compareType": "<=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "SilverWolf999_Ability11_End_Part01",
              "isTrigger": true
            }
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "SilverWolf999_Ability11_Part01",
              "isTrigger": true
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}",
        "stateFilter": "AliveOrLimbo"
      }
    },
    "SilverWolfL_SilverWolf999_Ability03_Part02": {
      "fileName": "SilverWolfL_SilverWolf999_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_tmp_OverflowSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;"
        },
        {
          "name": "Define Custom Property",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
          "value": 0,
          "function": "="
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"2105895650\">SilverWolf999_ModifySP</a>",
          "variables": {
            "parameter[0]_AddValue": {
              "operator": "Variables[0] (_tmp_OverflowSP) || RETURN",
              "displayLines": "_tmp_OverflowSP",
              "constants": [],
              "variables": [
                "_tmp_OverflowSP"
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
          "modifier": "<a class=\"gModGreen\" id=\"1358748576\">SilverWolf999_Ultra</a>[<span class=\"descriptionNumberColor\">Godmode Player</span>]",
          "valuePerStack": {
            "MDF_Count": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
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
          "modifier": "<a class=\"gModGreen\" id=\"1077186888\">_M_SilverWolf999_Ultimate_VisualManager</a>"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Advance",
          "multiAdd": -1
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "SilverWolfL_SilverWolf999_Ability03_Part01": {
      "fileName": "SilverWolfL_SilverWolf999_Ability03_Part01",
      "childAbilityList": [
        "SilverWolfL_SilverWolf999_Ability03_EnterReady",
        "SilverWolfL_SilverWolf999_Ability03_Camera",
        "SilverWolfL_SilverWolf999_Ability03_Part01",
        "SilverWolfL_SilverWolf999_Ability03_Part02"
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
          "ability": "SilverWolf999_Ability03_Part02",
          "isTrigger": true
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
    "SilverWolfL_SilverWolf999_Ability03_EnterReady": {
      "fileName": "SilverWolfL_SilverWolf999_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "SilverWolfL_SilverWolf999_Ability02_Part02": {
      "fileName": "SilverWolfL_SilverWolf999_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "operator": "Variables[0] (5) || RETURN",
            "displayLines": "5",
            "constants": [],
            "variables": [
              5
            ]
          },
          "adjustment": "Add"
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
              "operator": "Variables[0] (1.6) || RETURN",
              "displayLines": "1.6",
              "constants": [],
              "variables": [
                1.6
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
            "Tags": null,
            "attackType": "Skill"
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
            "flagName": "ElationEchoPoint"
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
                "DamageType": "Imaginary",
                "DamageElation": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": null,
                "Tags": null,
                "attackType": "Elation DMG"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "SilverWolfL_SilverWolf999_Ability02_Part01": {
      "fileName": "SilverWolfL_SilverWolf999_Ability02_Part01",
      "childAbilityList": [
        "SilverWolfL_SilverWolf999_Ability02_Camera",
        "SilverWolfL_SilverWolf999_Ability02_Part01",
        "SilverWolfL_SilverWolf999_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": [
        0,
        10,
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
          "ability": "SilverWolf999_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "SilverWolfL_SilverWolf999_Ability01_Part02": {
      "fileName": "SilverWolfL_SilverWolf999_Ability01_Part02",
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
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK"
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
            "flagName": "ElationEchoPoint"
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
                "DamageType": "Imaginary",
                "DamageElation": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": null,
                "Tags": null,
                "attackType": "Elation DMG"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "SilverWolfL_SilverWolf999_Ability01_Part01": {
      "fileName": "SilverWolfL_SilverWolf999_Ability01_Part01",
      "childAbilityList": [
        "SilverWolfL_SilverWolf999_Ability01_Camera",
        "SilverWolfL_SilverWolf999_Ability01_Part01",
        "SilverWolfL_SilverWolf999_Ability01_Part02"
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
          "ability": "SilverWolf999_Ability01_Part02",
          "isTrigger": true
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
    "SilverWolfL_Functions": {
      "fileName": "SilverWolfL_Functions",
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
          "functionName": "<a class=\"gTempYellow\" id=\"fun__2105895650\">SilverWolf999_ModifySP</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "TDF_MaxSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
              "context": "ContextTaskTemplate"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "TDF_CurSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
              "context": "ContextTaskTemplate"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TDF_NeedSPForCharge",
              "value": {
                "operator": "Variables[0] (TDF_MaxSP) || Variables[1] (TDF_CurSP) || SUB || RETURN",
                "displayLines": "(TDF_MaxSP - TDF_CurSP)",
                "constants": [],
                "variables": [
                  "TDF_MaxSP",
                  "TDF_CurSP"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "TDF_OverflowSPForCost",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Arg0_AddValue",
                "compareType": ">",
                "value2": 0,
                "contextScope": "ContextTaskTemplate"
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MIN) || Variables[1] (parameter[0]_AddValue) || Variables[2] (TDF_NeedSPForCharge) || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(parameter[0]_AddValue, TDF_NeedSPForCharge)",
                    "constants": [],
                    "variables": [
                      "MIN",
                      "parameter[0]_AddValue",
                      "TDF_NeedSPForCharge"
                    ]
                  },
                  "isFixed": "(Fixed)",
                  "ignoreBlock": true,
                  "isSpecialEnergy": true
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Arg0_AddValue",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (TDF_NeedSPForCharge) || RETURN",
                      "displayLines": "TDF_NeedSPForCharge",
                      "constants": [],
                      "variables": [
                        "TDF_NeedSPForCharge"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Property",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (parameter[0]_AddValue) || Variables[1] (TDF_NeedSPForCharge) || SUB || RETURN",
                        "displayLines": "(parameter[0]_AddValue - TDF_NeedSPForCharge)",
                        "constants": [],
                        "variables": [
                          "parameter[0]_AddValue",
                          "TDF_NeedSPForCharge"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Arg0_AddValue",
                "compareType": "<",
                "value2": 0,
                "contextScope": "ContextTaskTemplate"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TDF_OverflowSPForCost",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Property",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MIN) || Variables[1] (ABS) || Variables[2] (parameter[0]_AddValue) || PARAM_1 || FUNCTION || Variables[3] (TDF_OverflowSPForCost) || PARAM_2 || FUNCTION || SUB || RETURN",
                        "displayLines": "(0 - &nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(&nbsp;<span class=\"descriptionFunctionColor\">ABS</span>(parameter[0]_AddValue), TDF_OverflowSPForCost))",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MIN",
                          "ABS",
                          "parameter[0]_AddValue",
                          "TDF_OverflowSPForCost"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": {
                      "operator": "Variables[0] (ABS) || Variables[1] (parameter[0]_AddValue) || PARAM_1 || FUNCTION || RETURN",
                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">ABS</span>(parameter[0]_AddValue)",
                      "constants": [],
                      "variables": [
                        "ABS",
                        "parameter[0]_AddValue"
                      ]
                    },
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (TDF_OverflowSPForCost) || RETURN",
                      "displayLines": "TDF_OverflowSPForCost",
                      "constants": [],
                      "variables": [
                        "TDF_OverflowSPForCost"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (TDF_OverflowSPForCost) || Variables[1] (ABS) || Variables[2] (parameter[0]_AddValue) || PARAM_1 || FUNCTION || SUB || RETURN",
                        "displayLines": "(TDF_OverflowSPForCost - &nbsp;<span class=\"descriptionFunctionColor\">ABS</span>(parameter[0]_AddValue))",
                        "constants": [],
                        "variables": [
                          "TDF_OverflowSPForCost",
                          "ABS",
                          "parameter[0]_AddValue"
                        ]
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
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-2134200315\">SilverWolf999_Item3_AfterBox</a>",
          "parse": [
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "adjustment": "Add"
            },
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "variableName": "TDF_EnemyCountForPerformance",
              "context": "ContextTaskTemplate"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemies Still Alive",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "variableName": "TDF_EnemyCountForDamage",
                  "livingTargets": true,
                  "context": "ContextTaskTemplate"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "variableName": "TDF_EnemyCountForDamage",
                  "context": "ContextTaskTemplate"
                }
              ]
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (TDF_EnemyCountForPerformance) || RETURN",
                "displayLines": "TDF_EnemyCountForPerformance",
                "constants": [],
                "variables": [
                  "TDF_EnemyCountForPerformance"
                ]
              },
              "hasBreak": false,
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay1",
                      "value": 0.4
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay1",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay2",
                      "value": 0.4
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay1",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay2",
                      "value": 0.4
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay3",
                      "value": 0.6
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay1",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay2",
                      "value": 0.4
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay3",
                      "value": 0.4
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay4",
                      "value": 0.6
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay1",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay2",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay3",
                      "value": 0.4
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay4",
                      "value": 0.6
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay5",
                      "value": 0.6
                    }
                  ]
                }
              ],
              "defaultEvents": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay1",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay2",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay3",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay4",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Delay5",
                  "value": 0
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_TDF_Index",
              "value": 0
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "includeDyingTargets": true,
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_Index",
                  "value": {
                    "operator": "Variables[0] (#CL_TDF_Index) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(#CL_TDF_Index + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "#CL_TDF_Index"
                    ]
                  }
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (#CL_TDF_Index) || RETURN",
                    "displayLines": "#CL_TDF_Index",
                    "constants": [],
                    "variables": [
                      "#CL_TDF_Index"
                    ]
                  },
                  "hasBreak": false,
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "#CL_TDF_Delay",
                          "value": {
                            "operator": "Variables[0] (#CL_TDF_Delay1) || RETURN",
                            "displayLines": "#CL_TDF_Delay1",
                            "constants": [],
                            "variables": [
                              "#CL_TDF_Delay1"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "#CL_TDF_Delay",
                          "value": {
                            "operator": "Variables[0] (#CL_TDF_Delay2) || RETURN",
                            "displayLines": "#CL_TDF_Delay2",
                            "constants": [],
                            "variables": [
                              "#CL_TDF_Delay2"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "#CL_TDF_Delay",
                          "value": {
                            "operator": "Variables[0] (#CL_TDF_Delay3) || RETURN",
                            "displayLines": "#CL_TDF_Delay3",
                            "constants": [],
                            "variables": [
                              "#CL_TDF_Delay3"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "#CL_TDF_Delay",
                          "value": {
                            "operator": "Variables[0] (#CL_TDF_Delay4) || RETURN",
                            "displayLines": "#CL_TDF_Delay4",
                            "constants": [],
                            "variables": [
                              "#CL_TDF_Delay4"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 5,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "#CL_TDF_Delay",
                          "value": {
                            "operator": "Variables[0] (#CL_TDF_Delay5) || RETURN",
                            "displayLines": "#CL_TDF_Delay5",
                            "constants": [],
                            "variables": [
                              "#CL_TDF_Delay5"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_Delay",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Target List Entities",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Hostile Entities(AOE)}}"
                        },
                        "conditions": {
                          "name": "Living State",
                          "state": "Mask_AliveOnly",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Imaginary",
                        "DamageElation": {
                          "operator": "Variables[0] (0.9) || RETURN",
                          "displayLines": "0.9",
                          "constants": [],
                          "variables": [
                            0.9
                          ]
                        },
                        "dmgFormula": "Elation Scaling",
                        "HitSplit": {
                          "operator": "Constants[0] (1) || Variables[0] (TDF_EnemyCountForDamage) || DIV || RETURN",
                          "displayLines": "(1 / TDF_EnemyCountForDamage)",
                          "constants": [
                            1
                          ],
                          "variables": [
                            "TDF_EnemyCountForDamage"
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
                          "DamageType": "Imaginary"
                        },
                        "instanceTag": "SilverWolf999_00_Item_Damage",
                        "Tags": null,
                        "attackType": "Elation DMG"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TDF_EnemyCountForPerformance",
                "compareType": "<=",
                "value2": 2,
                "contextScope": "ContextTaskTemplate"
              },
              "passed": [
                "Trigger: Attack End"
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TDF_EnemyCountForPerformance",
                "compareType": ">",
                "value2": 2,
                "contextScope": "ContextTaskTemplate"
              },
              "passed": [
                "Trigger: Attack End"
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__918776177\">SilverWolf999_Item3_Finish</a>",
          "parse": [
            {
              "name": "WAIT FOR",
              "condition": {
                "name": "Death Animation Completed",
                "team": "Enemy Team",
                "type": "Team Characters"
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1112298097\">SilverWolf999_RollItemIndex</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Skill Points",
              "scope": "ContextTaskTemplate",
              "variableName": "TDF_CurBP"
            },
            {
              "name": "Define Custom Variable with Skill Point Max",
              "variableName": "TDF_MaxBP",
              "context": "ContextTaskTemplate"
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (TDF_CurBP) || RETURN",
                "displayLines": "TDF_CurBP",
                "constants": [],
                "variables": [
                  "TDF_CurBP"
                ]
              },
              "compareType": "<=",
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Item2Chance",
                      "value": {
                        "operator": "Variables[0] (Item2Chance) || Constants[0] (10) || MUL || RETURN",
                        "displayLines": "(Item2Chance * 10)",
                        "constants": [
                          10
                        ],
                        "variables": [
                          "Item2Chance"
                        ]
                      }
                    }
                  ]
                }
              ],
              "defaultEvents": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TDF_CurBP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (TDF_MaxBP) || RETURN",
                      "displayLines": "TDF_MaxBP",
                      "constants": [],
                      "variables": [
                        "TDF_MaxBP"
                      ]
                    },
                    "contextScope": "ContextTaskTemplate"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Item2Chance",
                      "value": {
                        "operator": "Variables[0] (Item2Chance) || Constants[0] (0.0009999999) || MUL || RETURN",
                        "displayLines": "(Item2Chance * 0.0009999999)",
                        "constants": [
                          0.0009999999
                        ],
                        "variables": [
                          "Item2Chance"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TDF_CurBP",
                        "compareType": ">=",
                        "value2": 4,
                        "contextScope": "ContextTaskTemplate"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Item2Chance",
                          "value": {
                            "operator": "Variables[0] (Item2Chance) || Constants[0] (0.1) || MUL || RETURN",
                            "displayLines": "(Item2Chance * 0.1)",
                            "constants": [
                              0.1
                            ],
                            "variables": [
                              "Item2Chance"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurScore) || RETURN",
                "displayLines": "CurScore",
                "constants": [],
                "variables": [
                  "CurScore"
                ]
              },
              "compareType": "<",
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": {
                    "operator": "Variables[0] (60) || RETURN",
                    "displayLines": "60",
                    "constants": [],
                    "variables": [
                      60
                    ]
                  },
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Item3Chance",
                      "value": {
                        "operator": "Variables[0] (Item3Chance) || Constants[0] (10) || MUL || RETURN",
                        "displayLines": "(Item3Chance * 10)",
                        "constants": [
                          10
                        ],
                        "variables": [
                          "Item3Chance"
                        ]
                      }
                    }
                  ]
                }
              ],
              "defaultEvents": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurScore",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (60) || Variables[1] (240) || ADD || RETURN",
                      "displayLines": "(60 + 240)",
                      "constants": [],
                      "variables": [
                        60,
                        240
                      ]
                    },
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Item3Chance",
                      "value": {
                        "operator": "Variables[0] (Item3Chance) || Constants[0] (0.0009999999) || MUL || RETURN",
                        "displayLines": "(Item3Chance * 0.0009999999)",
                        "constants": [
                          0.0009999999
                        ],
                        "variables": [
                          "Item3Chance"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CurScore",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (60) || Constants[0] (2) || MUL || RETURN",
                          "displayLines": "(60 * 2)",
                          "constants": [
                            2
                          ],
                          "variables": [
                            60
                          ]
                        },
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Item3Chance",
                          "value": {
                            "operator": "Variables[0] (Item3Chance) || Constants[0] (0.1) || MUL || RETURN",
                            "displayLines": "(Item3Chance * 0.1)",
                            "constants": [
                              0.1
                            ],
                            "variables": [
                              "Item3Chance"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Random Event",
              "odds": [
                {
                  "operator": "Variables[0] (Item1Chance) || RETURN",
                  "displayLines": "Item1Chance",
                  "constants": [],
                  "variables": [
                    "Item1Chance"
                  ]
                },
                {
                  "operator": "Variables[0] (Item2Chance) || RETURN",
                  "displayLines": "Item2Chance",
                  "constants": [],
                  "variables": [
                    "Item2Chance"
                  ]
                },
                {
                  "operator": "Variables[0] (Item3Chance) || RETURN",
                  "displayLines": "Item3Chance",
                  "constants": [],
                  "variables": [
                    "Item3Chance"
                  ]
                }
              ],
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentItem",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentItem",
                  "value": 2
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentItem",
                  "value": 3
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Item1Chance",
              "value": {
                "operator": "Variables[0] (CurrentItem) || Constants[0] (1) || EQUAL || Variables[1] (Item1Chance) || Constants[1] (0.01) || MUL || Constants[0] (1) || CHECK || RETURN",
                "displayLines": "check(value:(CurrentItem === 1), then:(Item1Chance * 0.01), else:1)",
                "constants": [
                  1,
                  0.01
                ],
                "variables": [
                  "CurrentItem",
                  "Item1Chance"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Item2Chance",
              "value": {
                "operator": "Variables[0] (CurrentItem) || Constants[0] (2) || EQUAL || Variables[1] (Item2Chance) || Constants[1] (0.01) || MUL || Constants[2] (1) || CHECK || RETURN",
                "displayLines": "check(value:(CurrentItem === 2), then:(Item2Chance * 0.01), else:1)",
                "constants": [
                  2,
                  0.01,
                  1
                ],
                "variables": [
                  "CurrentItem",
                  "Item2Chance"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Item3Chance",
              "value": {
                "operator": "Variables[0] (CurrentItem) || Constants[0] (3) || EQUAL || Variables[1] (Item3Chance) || Constants[1] (0.01) || MUL || Constants[2] (1) || CHECK || RETURN",
                "displayLines": "check(value:(CurrentItem === 3), then:(Item3Chance * 0.01), else:1)",
                "constants": [
                  3,
                  0.01,
                  1
                ],
                "variables": [
                  "CurrentItem",
                  "Item3Chance"
                ]
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1773570855\">SilverWolf999_ShowShooters</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1989702810\">SilverWolf999_HideShooters</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1468343614\">SilverWolf999_Ability11_Shoot</a>",
          "parse": [
            {
              "name": "SW999 Test Data",
              "value": {
                "operator": "Variables[0] (#CL_UI_Skill11_ItemIndex) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(#CL_UI_Skill11_ItemIndex + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "#CL_UI_Skill11_ItemIndex"
                ]
              },
              "value2": 0,
              "value3": 0
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1773570855\">SilverWolf999_ShowShooters</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Skill11_Item_LeftCount",
                "compareType": ">",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TDF_MaxShootCount",
                  "value": {
                    "operator": "Variables[0] (CEIL) || Variables[1] (Skill11_Shoot_TotalCount) || Variables[2] (Skill11_Item_TotalCount) || DIV || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>((Skill11_Shoot_TotalCount / Skill11_Item_TotalCount))",
                    "constants": [],
                    "variables": [
                      "CEIL",
                      "Skill11_Shoot_TotalCount",
                      "Skill11_Item_TotalCount"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "TDF_MaxShootCount",
                        "compareType": "<=",
                        "value2": 0,
                        "contextScope": "ContextTaskTemplate"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Skill11_Shoot_LeftCount",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextCaster"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TDF_MaxShootCount",
                      "value": 1
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TDF_MaxShootCount",
                  "value": {
                    "operator": "Variables[0] (Skill11_Shoot_LeftCount) || RETURN",
                    "displayLines": "Skill11_Shoot_LeftCount",
                    "constants": [],
                    "variables": [
                      "Skill11_Shoot_LeftCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TDF_MaxShootCount",
                "compareType": ">",
                "value2": 0,
                "contextScope": "ContextTaskTemplate"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": [
                      "Skill11"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": [
                      "Skill11"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TDF_DeltaFrame",
                      "value": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__299) || Variables[1] (ENEMIES_OBJECT_UNUSED__300) || SUB || Variables[2] (TDF_MaxShootCount) || DIV || RETURN",
                        "displayLines": "((ENEMIES_OBJECT_UNUSED__299 - ENEMIES_OBJECT_UNUSED__300) / TDF_MaxShootCount)",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__299",
                          "ENEMIES_OBJECT_UNUSED__300",
                          "TDF_MaxShootCount"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": [
                      "Skill12"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TDF_DeltaFrame",
                      "value": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__301) || Variables[1] (ENEMIES_OBJECT_UNUSED__302) || SUB || Variables[2] (TDF_MaxShootCount) || DIV || RETURN",
                        "displayLines": "((ENEMIES_OBJECT_UNUSED__301 - ENEMIES_OBJECT_UNUSED__302) / TDF_MaxShootCount)",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__301",
                          "ENEMIES_OBJECT_UNUSED__302",
                          "TDF_MaxShootCount"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": [
                      "Skill13"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TDF_DeltaFrame",
                      "value": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__303) || Variables[1] (ENEMIES_OBJECT_UNUSED__304) || SUB || Variables[2] (TDF_MaxShootCount) || DIV || RETURN",
                        "displayLines": "((ENEMIES_OBJECT_UNUSED__303 - ENEMIES_OBJECT_UNUSED__304) / TDF_MaxShootCount)",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__303",
                          "ENEMIES_OBJECT_UNUSED__304",
                          "TDF_MaxShootCount"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": [
                      "Skill14"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TDF_DeltaFrame",
                      "value": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__305) || Variables[1] (ENEMIES_OBJECT_UNUSED__306) || SUB || Variables[2] (TDF_MaxShootCount) || DIV || RETURN",
                        "displayLines": "((ENEMIES_OBJECT_UNUSED__305 - ENEMIES_OBJECT_UNUSED__306) / TDF_MaxShootCount)",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__305",
                          "ENEMIES_OBJECT_UNUSED__306",
                          "TDF_MaxShootCount"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_TDF_CurIndex",
                  "value": 0
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (TDF_MaxShootCount) || RETURN",
                    "displayLines": "TDF_MaxShootCount",
                    "constants": [],
                    "variables": [
                      "TDF_MaxShootCount"
                    ]
                  },
                  "conditions": {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "Event": [
                    {
                      "name": "SW999 Test Data",
                      "value": {
                        "operator": "Variables[0] (#CL_UI_Skill11_ItemIndex) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(#CL_UI_Skill11_ItemIndex + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "#CL_UI_Skill11_ItemIndex"
                        ]
                      },
                      "value2": {
                        "operator": "Variables[0] (EXP^) || Variables[1] (Arg0_AddValue) || Variables[2] (TDF_MaxShootCount) || DIV || Constants[0] (2) || PARAM_2 || FUNCTION || INVERT || Constants[0] (2) || DIV || Constants[1] (3) || Constants[0] (2) || DIV || Variables[1] (Arg0_AddValue) || Variables[2] (TDF_MaxShootCount) || DIV || MUL || ADD || RETURN",
                        "displayLines": "((-&nbsp;<span class=\"descriptionFunctionColor\">EXP^</span>((Arg0_AddValue / TDF_MaxShootCount), 2) / 2) + ((3 / 2) * (Arg0_AddValue / TDF_MaxShootCount)))",
                        "constants": [
                          2,
                          3
                        ],
                        "variables": [
                          "EXP^",
                          "Arg0_AddValue",
                          "TDF_MaxShootCount"
                        ]
                      },
                      "value3": {
                        "operator": "Variables[0] (#CL_TDF_Delay) || Constants[0] (60) || DIV || RETURN",
                        "displayLines": "(#CL_TDF_Delay / 60)",
                        "constants": [
                          60
                        ],
                        "variables": [
                          "#CL_TDF_Delay"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Name",
                        "skillName": [
                          "Skill11"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Name",
                        "skillName": [
                          "Skill12"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Name",
                        "skillName": [
                          "Skill13"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Name",
                        "skillName": [
                          "Skill14"
                        ]
                      }
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "paramSequence": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1000512886\">SilverWolf999_Ability11_SingleShoot</a>"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_TDF_CurIndex",
                      "value": {
                        "operator": "Variables[0] (Arg0_AddValue) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Arg0_AddValue + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Arg0_AddValue"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill11_Shoot_LeftCount",
                      "value": {
                        "operator": "Variables[0] (Skill11_Shoot_LeftCount) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(Skill11_Shoot_LeftCount - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Skill11_Shoot_LeftCount"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemies Still Alive",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-2145619400\">SilverWolf999_Ability11_DamagePerformFinishOnKillAll</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": [
                  "Skill11"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": [
                  "Skill12"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": [
                  "Skill13"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": [
                  "Skill14"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemies Still Alive",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"33782030\">SilverWolf999_Ability11_TriggerNextItemReady</a>"
                }
              ],
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"872770640\">SilverWolf999_Ability11_QuitOnKillAll</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1000512886\">SilverWolf999_Ability11_SingleShoot</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill11"
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
                "flagName": "ElationEchoPoint"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "DamageElation": {
                      "operator": "Variables[0] (2.4) || Variables[1] (100) || DIV || RETURN",
                      "displayLines": "(2.4 / 100)",
                      "constants": [],
                      "variables": [
                        2.4,
                        100
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": {
                      "operator": "Variables[0] (Skill11_Shoot_Stance) || Variables[1] (100) || DIV || RETURN",
                      "displayLines": "(Skill11_Shoot_Stance / 100)",
                      "constants": [],
                      "variables": [
                        "Skill11_Shoot_Stance",
                        100
                      ]
                    },
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (2.4) || Variables[1] (100) || DIV || RETURN",
                      "displayLines": "(2.4 / 100)",
                      "constants": [],
                      "variables": [
                        2.4,
                        100
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (Skill11_Shoot_Stance) || Variables[1] (100) || DIV || RETURN",
                      "displayLines": "(Skill11_Shoot_Stance / 100)",
                      "constants": [],
                      "variables": [
                        "Skill11_Shoot_Stance",
                        100
                      ]
                    },
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__33782030\">SilverWolf999_Ability11_TriggerNextItemReady</a>",
          "parse": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1112298097\">SilverWolf999_RollItemIndex</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Skill11_Item_LeftCount",
              "value": {
                "operator": "Variables[0] (Skill11_Item_LeftCount) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(Skill11_Item_LeftCount - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Skill11_Item_LeftCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_UI_Skill11_ItemIndex",
              "value": {
                "operator": "Variables[0] (#CL_UI_Skill11_ItemIndex) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(#CL_UI_Skill11_ItemIndex + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "#CL_UI_Skill11_ItemIndex"
                ]
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"773036968\">_M_SilverWolf999_DuringAbility11_DisableControlSkillForUI</a>"
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (#CL_UI_Skill11_ItemIndex) || RETURN",
                "displayLines": "#CL_UI_Skill11_ItemIndex",
                "constants": [],
                "variables": [
                  "#CL_UI_Skill11_ItemIndex"
                ]
              },
              "hasBreak": false,
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
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Auto-Battle",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "Taunt",
                    "invertCondition": true
                  }
                ]
              }
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentItem) || RETURN",
                "displayLines": "CurrentItem",
                "constants": [],
                "variables": [
                  "CurrentItem"
                ]
              },
              "hasBreak": false,
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "ability": "SilverWolf999_Ability11_Item1_Prepare",
                      "isTrigger": true
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "ability": "SilverWolf999_Ability11_Item2_Prepare",
                      "isTrigger": true
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "ability": "SilverWolf999_Ability11_Item3_Prepare",
                      "isTrigger": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1713096413\">SilverWolf999_Ability11_ItemDamagePerformfinish</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemies Still Alive",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-2145619400\">SilverWolf999_Ability11_DamagePerformFinishOnKillAll</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-2145619400\">SilverWolf999_Ability11_DamagePerformFinishOnKillAll</a>",
          "parse": [
            "Trigger: Attack End",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1550382446\">_M_SilverWolf999_IsStackingAbility11Succession</a>"
            },
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team Entity}}"
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
                "modifier": "<a class=\"gModGreen\" id=\"-1055848525\">_M_SilverWolf999_Ability11_AddBonusLifetime_CD</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Reconstruct Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Modifier_Callback_Value",
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "LifeTime"
                  },
                  "modifierType": "Buff",
                  "execute": [
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
                      "function": "Add",
                      "value": 1,
                      "valueType": "Duration"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1055848525\">_M_SilverWolf999_Ability11_AddBonusLifetime_CD</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1743454141\">SilverWolf999_Ability11_ReleaseSettings</a>",
          "parse": [
            "Unknown EventType4 (Not always an error)[1 true]"
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__872770640\">SilverWolf999_Ability11_QuitOnKillAll</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Battle is Over"
              },
              "passed": [
                {
                  "name": "WAIT FOR",
                  "condition": {
                    "name": "Death Animation Completed",
                    "team": "Enemy Team",
                    "type": "Team Characters"
                  }
                }
              ],
              "failed": [
                "Trigger: Skip Death Handling",
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1743454141\">SilverWolf999_Ability11_ReleaseSettings</a>"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1024723850\">_M_SilverWolf999_IsDuringAbility11</a>"
            },
            "Trigger: Ability End"
          ]
        }
      ],
      "references": []
    },
    "SilverWolfL_BE_BattleEvents": {
      "fileName": "SilverWolfL_BE_BattleEvents",
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
          "ID": 11506,
          "team": "Player Team",
          "eventType": "Assist",
          "abilityList": [
            "GlobalAbility_SilverWolf999_BattleEvent",
            "GlobalAbility_SilverWolf999_Insert_Part01",
            "GlobalAbility_SilverWolf999_Insert_Part02",
            "GlobalAbility_SilverWolf999_Insert_Camera"
          ],
          "overridesArray": [],
          "hardLevelEvent": true
        }
      ],
      "references": []
    }
  }
}