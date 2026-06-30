const configAbility = {
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
          "eventTrigger": "New Enemy Wave",
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
          "eventTrigger": "New Enemy Wave",
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
          "eventTrigger": "New Enemy Wave",
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
}