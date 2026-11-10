const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4044011,
  "trimCharacterName": 4044011,
  "abilityList": [
    "4044011_Modifiers",
    "4044011_Monster_W4_Theoroi_Part2Summon",
    "4044011_BattleEventAbility_Monster_W4_Theoroi_SummonMonster",
    "4044011_Monster_W4_Theoroi_Passive01",
    "4044011_Monster_W4_Theoroi_Ability17_Part02",
    "4044011_Monster_W4_Theoroi_Ability17_Part01",
    "4044011_Monster_W4_Theoroi_Ability16_Part02",
    "4044011_Monster_W4_Theoroi_Ability16_Part01",
    "4044011_Monster_W4_Theoroi_Ability14_Part02",
    "4044011_Monster_W4_Theoroi_Ability14_Part01",
    "4044011_Monster_W4_Theoroi_Ability13_Part02",
    "4044011_Monster_W4_Theoroi_Ability13_Part01",
    "4044011_Monster_W4_Theoroi_Ability12_Part02",
    "4044011_Monster_W4_Theoroi_Ability12_Part01",
    "4044011_Monster_W4_Theoroi_Ability11_Part02",
    "4044011_Monster_W4_Theoroi_Ability11_Part01",
    "4044011_Monster_W4_Theoroi_Ability05_Part02",
    "4044011_Monster_W4_Theoroi_Ability05_Part01",
    "4044011_Monster_W4_Theoroi_Ability04_Part02",
    "4044011_Monster_W4_Theoroi_Ability04_Part01",
    "4044011_Monster_W4_Theoroi_Ability03_Part02",
    "4044011_Monster_W4_Theoroi_Ability03_Part01",
    "4044011_Monster_W4_Theoroi_Ability02_Part02",
    "4044011_Monster_W4_Theoroi_Ability02_Part01",
    "4044011_Monster_W4_Theoroi_Ability01_Part02",
    "4044011_Monster_W4_Theoroi_Ability01_Part01",
    "4044011_Monster_W4_Theoroi_PassiveAbility_BGM",
    "4044011_BE_BattleEvents",
    "4044011_Handling"
  ],
  "abilityObject": {
    "4044011_Modifiers": {
      "fileName": "4044011_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1325419016\">Monster_W4_Theoroi_NoCount</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-398571938\">Monster_W4_Theoroi_HPChange</a>",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "({[PassiveSkill02[3]]} - 1)"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2001837227\">Monster_W4_Theoroi_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Corporeal</span>]",
          "stackType": "Replace",
          "useEntitySnapshot": true,
          "description": "DMG received increases by <span class=\"descriptionNumberColor\">MDF_DamageTakenUpRatio_PerLayer</span>. This effect is stackable.",
          "type": "Debuff",
          "effectName": "Corporeal",
          "statusName": "Corporeal",
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(MDF_DamageTakenUpRatio_PerLayer * ModifierLayers)"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1647546505\">Monster_W4_Theoroi_BattleScore2Count</a>",
          "stackType": "Replace",
          "stackLimit": 3,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__417497832\">Monster_W4_Theoroi_BattleScore1Count</a>",
          "stackType": "Replace",
          "stackLimit": 4,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-79285573\">W4_Theoroi_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-1647546505\">Monster_W4_Theoroi_BattleScore2Count</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-1647546505\">Monster_W4_Theoroi_BattleScore2Count</a>",
                        "compareType": "=",
                        "value2": 3,
                        "valueType": "Layer"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Critique of Pure Reason",
                          "desc": "Have ally characters use Ultimate activated by Zandar's \"Antinomy\" for a total of #1 time(s) in a single battle.",
                          "rarity": "Low",
                          "params": [
                            3
                          ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__-62507954\">W4_Theoroi_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"417497832\">Monster_W4_Theoroi_BattleScore1Count</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"417497832\">Monster_W4_Theoroi_BattleScore1Count</a>",
                        "compareType": "=",
                        "value2": 4,
                        "valueType": "Layer"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Critique of Practical Reason",
                          "desc": "Trigger Zandar's algorithm switch acceleration #1 extra time(s) in a single battle",
                          "rarity": "Low",
                          "params": [
                            4
                          ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2031587797\">Monster_W4_Theoroi_Main</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 1.0011718e-7
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            },
            {
              "eventTrigger": "HP Change [Owner]",
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
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0.3
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]"
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    },
                    "team": "Enemy Team"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1719897551\">Monster_W4_Theoroi_Ability16_Self</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Count",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_Count + 1)"
                  },
                  "variableName": "MDF_Count"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1955128164\">Monster_W4_Theoroi_Ability16_EntangleMark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__498620072\">Monster_W4_Theoroi_Ability16_Mark</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1115695489\">Monster_W4_Theoroi_Ability13_Mark</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-356060077\">Monster_W4_Theoroi_Ability12_Self</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1233101616\">Monster_W4_Theoroi_Ability01_Mark</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1275160751\">Monster_W4_Theoroi_SummonTest</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"534638248\">Monster_W4_Theoroi_Part1</a>[<span class=\"descriptionNumberColor\">To Logos</span>]"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": 4012010,
                          "locationType": "KeepOnEdge"
                        },
                        {
                          "name": "Enemy Entry",
                          "enemyID": 4012010,
                          "locationType": "KeepOnEdge"
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
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"584971105\">Monster_W4_Theoroi_Part2</a>"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 1.5,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": 4032010,
                          "locationType": "KeepOnEdge"
                        },
                        {
                          "name": "Enemy Entry",
                          "enemyID": 4032010,
                          "locationType": "KeepOnEdge"
                        }
                      ]
                    },
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": 4032010,
                          "locationType": "KeepOnEdge"
                        },
                        {
                          "name": "Enemy Entry",
                          "enemyID": 4032010,
                          "locationType": "KeepOnEdge"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Minions of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1860207563\">Monster_W4_Theoroi_LastSummon</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__640235566\">Monster_W4_Theoroi_MuteSpeed</a>",
          "modifierFlags": [
            "MuteSpeed"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelist": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelistTag": "Mask_TurnBasedAdvance"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-86387576\">Monster_W4_Theoroi_ReloadControl</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Variable with Cumulative Delay",
                  "variableName": "MDF_InitDelay"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1881355591\">Monster_W4_Theoroi_Reload</a>[<span class=\"descriptionNumberColor\">Infinite Recursion</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1562887426\">Monster_W4_Theoroi_ReloadEffect</a>",
          "stackType": "Replace",
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(MDF_PropertyValue * MDF_Layer)"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1881355591\">Monster_W4_Theoroi_Reload</a>[<span class=\"descriptionNumberColor\">Infinite Recursion</span>]",
          "stackType": "Replace",
          "description": "Each stack increases \"Query: Prime Mover's Outcome\" DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, and additionally inflicts Entanglement on <span class=\"descriptionNumberColor\">MDF_Count</span> target(s).",
          "type": "Buff",
          "effectName": "Infinite Recursion",
          "statusName": "Infinite Recursion",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1161840358\">Monster_W4_Theoroi_Desperation</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"363223908\">MWMonster_W4_Manta_Virus</a>",
                  "duration": -1,
                  "stackLimit": 5,
                  "valuePerStack": {
                    "MDF_Ctrl": 1,
                    "MDF_DamagePercentage": 1.2,
                    "MDF_Chance": 0,
                    "MDF_RallyTransferRatio": 0.5,
                    "MDF_Rally_HealPercentage": 0.2,
                    "MDF_Rally_Strongth_AllDamageTypeAddedRatio": 0.5
                  },
                  "addStacksPerTrigger": 5
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1039726651\">Monster_W4_Theoroi_Destruction_Self</a>[<span class=\"descriptionNumberColor\">Loading: Mythos</span>]",
          "description": "Use \"Query: Prime Mover's Outcome\" after <span class=\"descriptionNumberColor\">MDF_EntityCountRemain</span> more instance(s) of any of the following: enemy target defeats, ally character knock-downs, or memosprite disappearances.",
          "type": "Other",
          "effectName": "Loading: Mythos",
          "statusName": "Loading: Mythos",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_MaxEntityCount - MDF_EntityCount)"
                  },
                  "variableName": "MDF_EntityCountRemain"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "displayLines": "MDF_MaxEntityCount"
                  },
                  "assignState": "True",
                  "state": "Active",
                  "barType": "Theoroi",
                  "trigger": "Phase_02"
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
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"417497832\">Monster_W4_Theoroi_BattleScore1Count</a>"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_EntityCount + 1)"
                  },
                  "variableName": "MDF_EntityCount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_EntityCount",
                    "compareType": ">",
                    "value2": {
                      "displayLines": "MDF_MaxEntityCount"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "MDF_MaxEntityCount"
                      },
                      "variableName": "MDF_EntityCount"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_MaxEntityCount - MDF_EntityCount)"
                  },
                  "variableName": "MDF_EntityCountRemain"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "MDF_EntityCount"
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "displayLines": "MDF_MaxEntityCount"
                  },
                  "assignState": "True",
                  "state": "Active",
                  "barType": "Theoroi",
                  "trigger": "Phase_02"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_EntityCount",
                        "compareType": "=",
                        "value2": {
                          "displayLines": "MDF_MaxEntityCount"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_InsertCheck",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "MDF_InsertCheck"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Theoroi_Ability16_Part01",
                      "priorityTag": "EnemyPhaseChange",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "MDF_EntityCountRemain"
                  },
                  "variableName": "EntityCountRemain"
                }
              ]
            },
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-356060077\">Monster_W4_Theoroi_Ability12_Self</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"688363638\">Monster_W4_Theoroi_Destruction</a>[<span class=\"descriptionNumberColor\">Retribution of \"Law\"</span>]",
                      "valuePerStack": {
                        "MDF_LoseHPRatio": {
                          "displayLines": "{[Skill12[0]]}"
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__688363638\">Monster_W4_Theoroi_Destruction</a>[<span class=\"descriptionNumberColor\">Retribution of \"Law\"</span>]",
          "stackData": [
            "MDF_LoseHPRatio"
          ],
          "latentQueue": [
            "MDF_InsertCheck",
            "EntityCountRemain"
          ],
          "description": "Lose <span class=\"descriptionNumberColor\">MDF_LoseHPRatio</span> HP after each action.",
          "type": "Other",
          "effectName": "Retribution of \"Law\"",
          "statusName": "Retribution of \"Law\"",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-213110193\">Standard_FastAction_Permanent</a>[<span class=\"descriptionNumberColor\">Stormride</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "displayLines": "MDF_LoseHPRatio"
                  },
                  "consumeFloor": 1
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-213110193\">Standard_FastAction_Permanent</a>[<span class=\"descriptionNumberColor\">Stormride</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2105282223\">Monster_W4_Theoroi_Reversion</a>[<span class=\"descriptionNumberColor\">Antinomy</span>]",
          "description": "Ultimate is activated. Using Ultimate consumes HP equal to <span class=\"descriptionNumberColor\">MDF_CostHPRatio</span> of this unit's Max HP, this DMG prioritizes Shield effect reduction and is Non-fatal. If Ultimate is not used during the effect duration, Energy will be regenerated to <span class=\"descriptionNumberColor\">MDF_CurrentSpecialSP</span> points when the effect ends.",
          "type": "Other",
          "effectName": "Antinomy",
          "statusName": "Antinomy",
          "duration": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "MDF_MaxSpecialSP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "MDF_CurrentSpecialSP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "displayLines": "(MDF_MaxSpecialSP - MDF_CurrentSpecialSP)"
                      },
                      "isFixed": "(Fixed)",
                      "ignoreBlock": true,
                      "isSpecialEnergy": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "MDF_MaxSP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "MDF_CurrentSpecialSP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "displayLines": "(MDF_MaxSP - MDF_CurrentSpecialSP)"
                      },
                      "isFixed": "(Fixed)",
                      "ignoreBlock": true
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_UseUltra",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "displayLines": "MDF_CurrentSpecialSP"
                      },
                      "isFixed": "* ERR",
                      "isSetToValue": true,
                      "ignoreBlock": true
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Ultimate activated. Using Ultimate consumes HP equal to <span class=\"descriptionNumberColor\">MDF_CostHPRatio</span> of this unit's Max HP. This DMG prioritizes Shield effect reduction and is Non-fatal."
                    }
                  ]
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
                        "target": "{{Zandar: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1647546505\">Monster_W4_Theoroi_BattleScore2Count</a>"
                    },
                    {
                      "name": "Consume",
                      "consumeFrom": "MaxHP",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "consumePercent": {
                        "displayLines": "MDF_CostHPRatio"
                      },
                      "consumeFloor": 1,
                      "eatShield": true
                    },
                    "Modifier Deletes Itself"
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
                    "name": "Compare: Variable",
                    "value1": "MDF_NeedRemove",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MDF_UseUltra"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MDF_NeedRemove"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate",
                    "activeSkill": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "MDF_MaxHP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "MDF_Shield",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable (VFX)",
                      "value": {
                        "displayLines": "((MDF_MaxHP * MDF_CostHPRatio) - MDF_Shield)"
                      },
                      "variableName": "MDF_PreShowHP"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_PreShowHP",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Update UI Preview",
                          "show": "Show",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "previewType": null,
                          "previewValue": {
                            "displayLines": "MDF_PreShowHP"
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-303636173\">Monster_W4_Theoroi_Creation</a>[<span class=\"descriptionNumberColor\">Potential Realization</span>]",
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio</span>, HP is restored by <span class=\"descriptionNumberColor\">MDF_HPHealRatio</span> at the start of turn.",
          "type": "Buff",
          "effectName": "Potential Realization",
          "statusName": "Potential Realization",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "displayLines": "MDF_HPHealRatio"
                  },
                  "formula": "Heal from Target MaxHP"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_DamageUpRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1628585625\">Monster_W4_Theoroi_Summon</a>",
          "stackType": "Replace",
          "stackLimit": 4,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Theoroi_Part2Summon",
                  "priorityTag": "EnemyBuffOthers_Elation",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__584971105\">Monster_W4_Theoroi_Part2</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase2"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "InSkill05",
                    "compareType": "=",
                    "value2": 0
                  }
                },
                {
                  "name": "Set Enemy Phase",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phaseType": "Form",
                  "phase": 2
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase1"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "assignState": "False"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "variableName": "InSkill05",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"1628585625\">Monster_W4_Theoroi_Summon</a>"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Summoner of Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1225407383\">Monster_W4_Theoroi_Passive</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                    }
                  ]
                },
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
                      "modifier": "<a class=\"gModGreen\" id=\"-398571938\">Monster_W4_Theoroi_HPChange</a>"
                    },
                    {
                      "name": "Consume",
                      "consumeFrom": "MaxHP",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "consumePercent": {
                        "displayLines": "{[PassiveSkill02[0]]}"
                      }
                    },
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "displayLines": "{[PassiveSkill02[1]]}"
                      },
                      "forceReduction": true,
                      "ToughnessDMGType": "Null Type"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__534638248\">Monster_W4_Theoroi_Part1</a>[<span class=\"descriptionNumberColor\">To Logos</span>]",
          "description": "Use \"SET Proof_Method=Black_Tide\" after <span class=\"descriptionNumberColor\">MDF_CurrentCountRemain</span> more instances of either of the following: enemy target generations or ally memosprite summons.",
          "type": "Other",
          "effectName": "To Logos",
          "statusName": "To Logos",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Enemy Phase",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phaseType": "Form",
                  "phase": 1
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "({[PassiveSkill01[0]]} - MDF_CurrentCount)"
                  },
                  "variableName": "MDF_CurrentCountRemain"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "MDF_CurrentCount"
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "displayLines": "{[PassiveSkill01[0]]}"
                  },
                  "assignState": "True",
                  "state": "Active",
                  "barType": "Theoroi",
                  "trigger": "Phase_01"
                },
                {
                  "name": "Define Custom Variable with HP%",
                  "variableName": "MDF_CurrentHPRatio",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "InSkill05"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1325419016\">Monster_W4_Theoroi_NoCount</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "assignState": "False"
                }
              ]
            },
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Summoner of Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1225407383\">Monster_W4_Theoroi_Passive</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "entityType": "Character",
                        "livingState": "Mask_AliveOnly",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1325419016\">Monster_W4_Theoroi_NoCount</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Summoner of Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"417497832\">Monster_W4_Theoroi_BattleScore1Count</a>"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_CurrentCount + 1)"
                      },
                      "variableName": "MDF_CurrentCount"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_CurrentCount",
                        "compareType": ">",
                        "value2": {
                          "displayLines": "{[PassiveSkill01[0]]}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "{[PassiveSkill01[0]]}"
                          },
                          "variableName": "MDF_CurrentCount"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "({[PassiveSkill01[0]]} - MDF_CurrentCount)"
                      },
                      "variableName": "MDF_CurrentCountRemain"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "displayLines": "MDF_CurrentCount"
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "displayLines": "{[PassiveSkill01[0]]}"
                      },
                      "assignState": "True",
                      "state": "Active",
                      "barType": "Theoroi",
                      "trigger": "Phase_01"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_CurrentCountRemain",
                        "compareType": "<=",
                        "value2": 1
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_CurrentCount",
                            "compareType": "=",
                            "value2": {
                              "displayLines": "{[PassiveSkill01[0]]}"
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_InsertCheck",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "MDF_InsertCheck"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_Theoroi_Ability05_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "priorityTag": "EnemyPhaseChange",
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
              "eventTrigger": "Pre-Death [Owner]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__362655312\">Monster_W4_Theoroi_SummonEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1225407383\">Monster_W4_Theoroi_Passive</a>",
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Battle Event List}}"
                  },
                  "conditions": {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1607012248\">Monster_W4_Theoroi_Init</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Part2Summon": {
      "fileName": "4044011_Monster_W4_Theoroi_Part2Summon",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "WAIT FOR",
          "conditions": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "entityType": "Team Characters"
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "SummonLayer"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "SummonCount"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DelayRatio"
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "SummonLayer",
          "modifierName": "<a class=\"gModGreen\" id=\"1628585625\">Monster_W4_Theoroi_Summon</a>",
          "multiplier": 1
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "SummonLayer"
          },
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(SummonCount + 1)"
              },
              "variableName": "SummonCount"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SummonCount",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "{[PassiveSkill03[2]]}"
                  },
                  "variableName": "DelayRatio"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "SummonCount"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "{[PassiveSkill03[4]]}"
                  },
                  "variableName": "DelayRatio"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": 0.7
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 1,
                    "conditions": {
                      "name": "Enemy ID",
                      "ID": {
                        "displayLines": "SummonList_ADF_3"
                      },
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "characterName": null
                    }
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "displayLines": "DelayRatio"
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "displayLines": "SummonList_ADF_2"
                          },
                          "locationType": "FormationRecord"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "displayLines": "DelayRatio"
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "displayLines": "SummonList_ADF_3"
                          },
                          "locationType": "FormationRecord"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "displayLines": "DelayRatio"
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "displayLines": "SummonList_ADF_2"
                      },
                      "locationType": "FormationRecord"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1628585625\">Monster_W4_Theoroi_Summon</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4044011_BattleEventAbility_Monster_W4_Theoroi_SummonMonster": {
      "fileName": "4044011_BattleEventAbility_Monster_W4_Theoroi_SummonMonster",
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
              "target": "{{Zandar: Self}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"534638248\">Monster_W4_Theoroi_Part1</a>[<span class=\"descriptionNumberColor\">To Logos</span>]"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<",
                "value2": 5
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
                    "modifier": "<a class=\"gModGreen\" id=\"1719897551\">Monster_W4_Theoroi_Ability16_Self</a>",
                    "invertCondition": true
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1719897551\">Monster_W4_Theoroi_Ability16_Self</a>"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonList_ADF_1",
                  "summonLocation": "KeepOnEdge"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonList_ADF_1",
                  "summonLocation": "KeepOnEdge"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1860207563\">Monster_W4_Theoroi_LastSummon</a>",
                "invertCondition": true
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1860207563\">Monster_W4_Theoroi_LastSummon</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Passive01": {
      "fileName": "4044011_Monster_W4_Theoroi_Passive01",
      "skillTrigger": "PassiveSkill03",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-62507954\">W4_Theoroi_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-79285573\">W4_Theoroi_BattleScore2</a>"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "show": true
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
          "name": "Divide BossHP into Bars",
          "splitBarCount": {
            "displayLines": "{[PassiveSkill03[5]]}"
          }
        },
        {
          "name": "Preload Battle Event(s)",
          "beID": [
            20024,
            20028
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
            "variableName": "InSkill05",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Battle Event",
              "teamName": "Enemy Team",
              "eventID": 20024,
              "variables": {
                "SummonInitDelay": {
                  "displayLines": "{[PassiveSkill01[1]]}"
                }
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
          "modifier": "<a class=\"gModGreen\" id=\"1225407383\">Monster_W4_Theoroi_Passive</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4044011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "First Genius, Entelechy, Zandar",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
            }
          ]
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"534638248\">Monster_W4_Theoroi_Part1</a>[<span class=\"descriptionNumberColor\">To Logos</span>]"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Ability17_Part02": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability17_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1881355591\">Monster_W4_Theoroi_Reload</a>[<span class=\"descriptionNumberColor\">Infinite Recursion</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "{[PassiveSkill03[0]]}"
            }
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
            "modifier": "<a class=\"gModGreen\" id=\"534638248\">Monster_W4_Theoroi_Part1</a>[<span class=\"descriptionNumberColor\">To Logos</span>]"
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"584971105\">Monster_W4_Theoroi_Part2</a>"
              }
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Ability17_Part01": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability17_Part01",
      "childAbilityList": [
        "4044011_Monster_W4_Theoroi_Ability17_Camera",
        "4044011_Monster_W4_Theoroi_Ability17_Part01",
        "4044011_Monster_W4_Theoroi_Ability17_Part02"
      ],
      "skillTrigger": "Skill17",
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
          "ability": "Monster_W4_Theoroi_Ability17_Part02",
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
    "4044011_Monster_W4_Theoroi_Ability16_Part02": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability16_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "typeOverride": "Unknown",
              "toRemove": [
                "STAT_CTRL"
              ]
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
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "EnhanceCount",
          "scope": "TargetEntity"
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "EnhanceCount",
          "modifierName": "<a class=\"gModGreen\" id=\"1881355591\">Monster_W4_Theoroi_Reload</a>[<span class=\"descriptionNumberColor\">Infinite Recursion</span>]",
          "multiplier": 1
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "EnhanceCount"
          },
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1562887426\">Monster_W4_Theoroi_ReloadEffect</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "{[PassiveSkill03[0]]}"
                }
              }
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
            "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MainCount",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 2,
                  "variableName": "MainCount"
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "Skill16Count"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"498620072\">Monster_W4_Theoroi_Ability16_Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"498620072\">Monster_W4_Theoroi_Ability16_Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"498620072\">Monster_W4_Theoroi_Ability16_Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"498620072\">Monster_W4_Theoroi_Ability16_Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"498620072\">Monster_W4_Theoroi_Ability16_Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"498620072\">Monster_W4_Theoroi_Ability16_Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"498620072\">Monster_W4_Theoroi_Ability16_Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"498620072\">Monster_W4_Theoroi_Ability16_Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Skill16Count + 1)"
              },
              "variableName": "Skill16Count"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill16Count",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "Skill16Count"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(({[Skill16[0]]} / Skill16Count) / 5)"
          },
          "variableName": "Skill16Damage"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "Skill16Damage"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-839772764\">Modifier_BattleEventAbility_Enhance</a>"
          },
          "ifTargetFound": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "Skill16Damage"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "Skill16Damage"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "Skill16Damage"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "Skill16Damage"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "20%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "EnhanceCount"
          },
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1955128164\">Monster_W4_Theoroi_Ability16_EntangleMark</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                  "duration": {
                    "displayLines": "{[Skill16[5]]}"
                  },
                  "baseChance": {
                    "displayLines": "{[Skill16[2]]}"
                  },
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "displayLines": "{[Skill16[3]]}"
                    },
                    "Modifier_Entangle_DamagePercentage": {
                      "displayLines": "{[Skill16[4]]}"
                    },
                    "Modifier_Entangle_DamageValue": 0
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1955128164\">Monster_W4_Theoroi_Ability16_EntangleMark</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
              },
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"534638248\">Monster_W4_Theoroi_Part1</a>[<span class=\"descriptionNumberColor\">To Logos</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2001837227\">Monster_W4_Theoroi_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Corporeal</span>]",
          "valuePerStack": {
            "MDF_DamageTakenUpRatio_PerLayer": {
              "displayLines": "{[Skill16[1]]}"
            }
          },
          "addStacksPerTrigger": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-356060077\">Monster_W4_Theoroi_Ability12_Self</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"584971105\">Monster_W4_Theoroi_Part2</a>"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "entityClass": "Enemy",
          "maximum": {
            "displayLines": "{[PassiveSkill01[0]]}"
          },
          "assignState": "True",
          "state": "Active",
          "barType": "Theoroi",
          "trigger": "Phase_01"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1039726651\">Monster_W4_Theoroi_Destruction_Self</a>[<span class=\"descriptionNumberColor\">Loading: Mythos</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-303636173\">Monster_W4_Theoroi_Creation</a>[<span class=\"descriptionNumberColor\">Potential Realization</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1628585625\">Monster_W4_Theoroi_Summon</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"498620072\">Monster_W4_Theoroi_Ability16_Mark</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1955128164\">Monster_W4_Theoroi_Ability16_EntangleMark</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"688363638\">Monster_W4_Theoroi_Destruction</a>[<span class=\"descriptionNumberColor\">Retribution of \"Law\"</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-213110193\">Standard_FastAction_Permanent</a>[<span class=\"descriptionNumberColor\">Stormride</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1719897551\">Monster_W4_Theoroi_Ability16_Self</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "compareType": "=",
                "value2": 2
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
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
            "variableName": "InSkill05",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Battle Event",
              "teamName": "Enemy Team",
              "eventID": 20024,
              "variables": {
                "SummonInitDelay": {
                  "displayLines": "{[PassiveSkill01[1]]}"
                }
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "AIFlag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1881355591\">Monster_W4_Theoroi_Reload</a>[<span class=\"descriptionNumberColor\">Infinite Recursion</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-86387576\">Monster_W4_Theoroi_ReloadControl</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1562887426\">Monster_W4_Theoroi_ReloadEffect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MainCount",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 3,
                  "variableName": "MainCount"
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Ability16_Part01": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability16_Part01",
      "childAbilityList": [
        "4044011_Monster_W4_Theoroi_Ability16_Camera",
        "4044011_Monster_W4_Theoroi_Ability16_Part01",
        "4044011_Monster_W4_Theoroi_Ability16_Part02"
      ],
      "skillTrigger": "Skill16",
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
          "ability": "Monster_W4_Theoroi_Ability16_Part02",
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
    "4044011_Monster_W4_Theoroi_Ability14_Part02": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability14_Part02",
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
            "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
          }
        },
        "Ability Start",
        {
          "name": "Looped Event",
          "maxLoops": 1,
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemies by Taunt OR Random Aggro}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "displayLines": "{[Skill14[0]]}"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 1,
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "displayLines": "{[Skill14[0]]}"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
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
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "displayLines": "{[Skill14[0]]}"
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 8,
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "displayLines": "{[Skill14[0]]}"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
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
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "displayLines": "{[Skill14[0]]}"
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Ability14_Part01": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability14_Part01",
      "childAbilityList": [
        "4044011_Monster_W4_Theoroi_Ability14_Camera",
        "4044011_Monster_W4_Theoroi_Ability14_Part01",
        "4044011_Monster_W4_Theoroi_Ability14_Part02"
      ],
      "skillTrigger": "Skill14",
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
          "ability": "Monster_W4_Theoroi_Ability14_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}",
        "targetIsVariable": true
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Ability13_Part02": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability13_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemies by Taunt OR Random Aggro(Exclude Memosprites)}}"
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
              "modifier": "<a class=\"gModGreen\" id=\"1115695489\">Monster_W4_Theoroi_Ability13_Mark</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}.[[removeMemosprite]]"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1115695489\">Monster_W4_Theoroi_Ability13_Mark</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1115695489\">Monster_W4_Theoroi_Ability13_Mark</a>"
            }
          ]
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Zandar: Skill13 Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "{[Skill13[0]]}"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Zandar: Skill13 Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2105282223\">Monster_W4_Theoroi_Reversion</a>[<span class=\"descriptionNumberColor\">Antinomy</span>]",
          "duration": {
            "displayLines": "{[Skill03[1]]}"
          },
          "valuePerStack": {
            "MDF_CostHPRatio": {
              "displayLines": "{[Skill03[2]]}"
            }
          },
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Zandar: Skill13 Target}}"
          },
          "set": 0
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Zandar: Skill13 Target}}"
          }
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
                "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Zandar: Skill13 Target}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": ">",
                "value2": 0,
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value1": "CurrentHP",
                  "compareType": ">",
                  "value2": 0
                }
              }
            ]
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
            "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1115695489\">Monster_W4_Theoroi_Ability13_Mark</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Ability13_Part01": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability13_Part01",
      "childAbilityList": [
        "4044011_Monster_W4_Theoroi_Ability13_Camera",
        "4044011_Monster_W4_Theoroi_Ability13_Part01",
        "4044011_Monster_W4_Theoroi_Ability13_Part02"
      ],
      "skillTrigger": "Skill13",
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
          "ability": "Monster_W4_Theoroi_Ability13_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}",
        "targetIsVariable": true
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Ability12_Part02": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability12_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-356060077\">Monster_W4_Theoroi_Ability12_Self</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"688363638\">Monster_W4_Theoroi_Destruction</a>[<span class=\"descriptionNumberColor\">Retribution of \"Law\"</span>]",
          "valuePerStack": {
            "MDF_LoseHPRatio": {
              "displayLines": "{[Skill12[0]]}"
            }
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Ability12_Part01": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability12_Part01",
      "childAbilityList": [
        "4044011_Monster_W4_Theoroi_Ability12_Camera",
        "4044011_Monster_W4_Theoroi_Ability12_Part01",
        "4044011_Monster_W4_Theoroi_Ability12_Part02"
      ],
      "skillTrigger": "Skill12",
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
          "ability": "Monster_W4_Theoroi_Ability12_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "realTargetData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Ability11_Part02": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability11_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1233101616\">Monster_W4_Theoroi_Ability01_Mark</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1233101616\">Monster_W4_Theoroi_Ability01_Mark</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of",
            "target1": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Far Left Player Entity}}"
            }
          }
        },
        "Ability Start",
        {
          "name": "Shot Fired"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "{[Skill11[0]]}"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "{[Skill11[1]]}"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1233101616\">Monster_W4_Theoroi_Ability01_Mark</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Ability11_Part01": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability11_Part01",
      "childAbilityList": [
        "4044011_Monster_W4_Theoroi_Ability11_Camera",
        "4044011_Monster_W4_Theoroi_Ability11_Part01",
        "4044011_Monster_W4_Theoroi_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
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
          "ability": "Monster_W4_Theoroi_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Ability05_Part02": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability05_Part02",
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
              },
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
              }
            ]
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
            "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MainCount",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MainCount"
                }
              ]
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
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "typeOverride": "Unknown",
              "toRemove": [
                "STAT_CTRL"
              ]
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
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "InSkill05"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"534638248\">Monster_W4_Theoroi_Part1</a>[<span class=\"descriptionNumberColor\">To Logos</span>]"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "compareType": "<=",
                "value2": 2
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Summoner of Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1225407383\">Monster_W4_Theoroi_Passive</a>"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
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
          "modifier": "<a class=\"gModGreen\" id=\"584971105\">Monster_W4_Theoroi_Part2</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "variableName": "InSkill05",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "displayLines": "{[PassiveSkill03[1]]}"
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "displayLines": "SummonList_ADF_2"
                  },
                  "locationType": "BeforeCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "displayLines": "{[PassiveSkill03[2]]}"
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "displayLines": "SummonList_ADF_2"
                  },
                  "locationType": "First"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "displayLines": "{[PassiveSkill03[3]]}"
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "displayLines": "SummonList_ADF_3"
                  },
                  "locationType": "AfterCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "displayLines": "{[PassiveSkill03[4]]}"
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "displayLines": "SummonList_ADF_2"
                  },
                  "locationType": "Last"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"746359205\">Modifier_BattleEventAbility_SummonMonster</a>"
          },
          "ifTargetFound": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "AIFlag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1039726651\">Monster_W4_Theoroi_Destruction_Self</a>[<span class=\"descriptionNumberColor\">Loading: Mythos</span>]",
          "valuePerStack": {
            "MDF_MaxEntityCount": {
              "displayLines": "{[PassiveSkill02[2]]}"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2001837227\">Monster_W4_Theoroi_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Corporeal</span>]",
          "valuePerStack": {
            "MDF_DamageTakenUpRatio_PerLayer": {
              "displayLines": "{[Skill16[1]]}"
            }
          },
          "addStacksPerTrigger": 1
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "InSkill05"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-86387576\">Monster_W4_Theoroi_ReloadControl</a>",
          "valuePerStack": {
            "MDF_DamageUpRatio": {
              "displayLines": "{[PassiveSkill03[0]]}"
            }
          }
        },
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20028,
          "variables": null
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MainCount",
                "compareType": "=",
                "value2": 1
              }
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Ability05_Part01": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability05_Part01",
      "childAbilityList": [
        "4044011_Monster_W4_Theoroi_Ability05_Camera",
        "4044011_Monster_W4_Theoroi_Ability05_Part01",
        "4044011_Monster_W4_Theoroi_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
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
          "ability": "Monster_W4_Theoroi_Ability05_Part02",
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
    "4044011_Monster_W4_Theoroi_Ability04_Part02": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability04_Part02",
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
            "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
          }
        },
        "Ability Start",
        {
          "name": "Looped Event",
          "maxLoops": 1,
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemies by Taunt OR Random Aggro}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "displayLines": "{[Skill04[0]]}"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 1,
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "displayLines": "{[Skill04[0]]}"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
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
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "displayLines": "{[Skill04[0]]}"
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 8,
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "displayLines": "{[Skill04[0]]}"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
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
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "displayLines": "{[Skill04[0]]}"
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Ability04_Part01": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability04_Part01",
      "childAbilityList": [
        "4044011_Monster_W4_Theoroi_Ability04_Camera",
        "4044011_Monster_W4_Theoroi_Ability04_Part01",
        "4044011_Monster_W4_Theoroi_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
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
          "ability": "Monster_W4_Theoroi_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}",
        "targetIsVariable": true
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Ability03_Part02": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability03_Part02",
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
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "{[Skill03[0]]}"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2105282223\">Monster_W4_Theoroi_Reversion</a>[<span class=\"descriptionNumberColor\">Antinomy</span>]",
          "duration": {
            "displayLines": "{[Skill03[1]]}"
          },
          "valuePerStack": {
            "MDF_CostHPRatio": {
              "displayLines": "{[Skill03[2]]}"
            }
          },
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "set": 0
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          }
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
                "modifier": "<a class=\"gModGreen\" id=\"-2031587797\">Monster_W4_Theoroi_Main</a>"
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              }
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Ability03_Part01": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability03_Part01",
      "childAbilityList": [
        "4044011_Monster_W4_Theoroi_Ability03_Camera",
        "4044011_Monster_W4_Theoroi_Ability03_Part01",
        "4044011_Monster_W4_Theoroi_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_W4_Theoroi_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "allowMemoHostileTarget": "Forbidden"
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Ability02_Part02": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "set": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-303636173\">Monster_W4_Theoroi_Creation</a>[<span class=\"descriptionNumberColor\">Potential Realization</span>]",
          "valuePerStack": {
            "MDF_DamageUpRatio": {
              "displayLines": "{[Skill02[0]]}"
            },
            "MDF_HPHealRatio": {
              "displayLines": "{[Skill02[1]]}"
            }
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Ability02_Part01": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability02_Part01",
      "childAbilityList": [
        "4044011_Monster_W4_Theoroi_Ability02_Camera",
        "4044011_Monster_W4_Theoroi_Ability02_Part01",
        "4044011_Monster_W4_Theoroi_Ability02_Part02"
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
          "ability": "Monster_W4_Theoroi_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Ally Target",
        "excludeSelf": true
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Ability01_Part02": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability01_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1233101616\">Monster_W4_Theoroi_Ability01_Mark</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1233101616\">Monster_W4_Theoroi_Ability01_Mark</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of",
            "target1": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Far Left Player Entity}}"
            }
          }
        },
        "Ability Start",
        {
          "name": "Shot Fired"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "{[Skill01[0]]}"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "{[Skill01[1]]}"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1233101616\">Monster_W4_Theoroi_Ability01_Mark</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_Ability01_Part01": {
      "fileName": "4044011_Monster_W4_Theoroi_Ability01_Part01",
      "childAbilityList": [
        "4044011_Monster_W4_Theoroi_Ability01_Camera",
        "4044011_Monster_W4_Theoroi_Ability01_Part01",
        "4044011_Monster_W4_Theoroi_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
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
          "ability": "Monster_W4_Theoroi_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      },
      "references": []
    },
    "4044011_Monster_W4_Theoroi_PassiveAbility_BGM": {
      "fileName": "4044011_Monster_W4_Theoroi_PassiveAbility_BGM",
      "childAbilityList": [
        "4044011_Monster_W4_Theoroi_PassiveAbility_BGM"
      ],
      "skillTrigger": "Passive_BGM",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1034094278\">Enemy_W4_Theoroi_ResetStageBGM</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1034094278\">Enemy_W4_Theoroi_ResetStageBGM</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex",
                  "value": "CurWaveIndex"
                }
              ]
            },
            {
              "eventTrigger": "Batch: Enemy Arrival Start",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex2",
                  "value": "CurWaveIndex"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_WaveIndex",
                    "compareType": "NOT=",
                    "value2": {
                      "displayLines": "MDF_WaveIndex2"
                    }
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "4044011_BE_BattleEvents": {
      "fileName": "4044011_BE_BattleEvents",
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
          "beID": 20024,
          "team": "Enemy Team",
          "eventType": "Assist",
          "icon": "BattleEvent_W4_Theoroi_00_Phase1.png",
          "abilityList": [
            "BattleEventAbility_Monster_W4_Theoroi_Summon"
          ],
          "statOverrides": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "spd": 170,
          "hardLevel": true,
          "actionDescription": "Generates \"Titankin\" upon taking action."
        },
        {
          "name": "Battle Event Construction",
          "beID": 20028,
          "team": "Enemy Team",
          "eventType": "Assist",
          "icon": "BattleEvent_W4_Theoroi_00_Phase2.png",
          "abilityList": [
            "BattleEventAbility_Monster_W4_Theoroi_Enhance"
          ],
          "statOverrides": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "spd": 210,
          "hardLevel": true,
          "actionDescription": "When taking action, enhances Zandar and his next use of \"Query: Prime Mover's Outcome.\""
        }
      ],
      "references": []
    },
    "4044011_Handling": {
      "fileName": "4044011_Handling",
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
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 2,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill01"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"534638248\">Monster_W4_Theoroi_Part1</a>[<span class=\"descriptionNumberColor\">To Logos</span>]"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 3,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Compare: Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      "value1": "TeamCharacterCount",
                      "compareType": "<",
                      "value2": 1
                    },
                    "passed": [
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill04"
                      }
                    ],
                    "failed": [
                      {
                        "name": "Choose Ability Target",
                        "skillName": "Skill02",
                        "target": {
                          "name": "Select by Modifier Name",
                          "modifier": "<a class=\"gModGreen\" id=\"-303636173\">Monster_W4_Theoroi_Creation</a>[<span class=\"descriptionNumberColor\">Potential Realization</span>]",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "invertCondition": true
                        }
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill02"
                      }
                    ]
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"534638248\">Monster_W4_Theoroi_Part1</a>[<span class=\"descriptionNumberColor\">To Logos</span>]"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 4,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill04"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"534638248\">Monster_W4_Theoroi_Part1</a>[<span class=\"descriptionNumberColor\">To Logos</span>]"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                    },
                    "passed": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 4,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill01"
                      }
                    ],
                    "failed": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 1,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill03"
                      }
                    ]
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"534638248\">Monster_W4_Theoroi_Part1</a>[<span class=\"descriptionNumberColor\">To Logos</span>]"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 2,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill12"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"584971105\">Monster_W4_Theoroi_Part2</a>"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                    },
                    "passed": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 2,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill14"
                      }
                    ],
                    "failed": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 3,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill13"
                      }
                    ]
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"584971105\">Monster_W4_Theoroi_Part2</a>"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 4,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill11"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"584971105\">Monster_W4_Theoroi_Part2</a>"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 5,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill14"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"584971105\">Monster_W4_Theoroi_Part2</a>"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 6,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill11"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 5,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"584971105\">Monster_W4_Theoroi_Part2</a>"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 3,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill13"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 6,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"584971105\">Monster_W4_Theoroi_Part2</a>"
                      }
                    ]
                  },
                  "passedValue": 0.5
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