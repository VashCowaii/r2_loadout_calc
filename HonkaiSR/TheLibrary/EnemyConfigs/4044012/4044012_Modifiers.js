const configAbility = {
  "fileName": "4044012_Modifiers",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[3]]}) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "({[PassiveSkill02[3]]} - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "{[PassiveSkill02[3]]}"
                ]
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageTakenUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_DamageTakenUpRatio_PerLayer * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_DamageTakenUpRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_DamageTakenUpRatio_PerLayer"
      ],
      "latentQueue": [
        "MainCount",
        "AIFlag"
      ],
      "description": "DMG received increases by <span class=\"descriptionNumberColor\">MDF_DamageTakenUpRatio_PerLayer</span>. This effect is stackable.",
      "type": "Debuff",
      "effectName": "Corporeal",
      "statusName": "Corporeal",
      "addStacksPerTrigger": 1
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
      ],
      "stackData": [],
      "latentQueue": []
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
      ],
      "stackData": [],
      "latentQueue": []
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1719897551\">Monster_W4_Theoroi_Ability16_Self</a>",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
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
              "variableName": "MDF_Count",
              "value": {
                "operator": "Variables[0] (MDF_Count) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(MDF_Count + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_Count"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MainCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1955128164\">Monster_W4_Theoroi_Ability16_EntangleMark</a>",
      "stackData": [],
      "latentQueue": [
        "MainCount"
      ]
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
      ],
      "stackData": [],
      "latentQueue": [
        "MainCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1115695489\">Monster_W4_Theoroi_Ability13_Mark</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-356060077\">Monster_W4_Theoroi_Ability12_Self</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1299511648\">Monster_W4_Theoroi_Ability04_AlreadyAttack</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1233101616\">Monster_W4_Theoroi_Ability01_Mark</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "stackData": [],
      "latentQueue": []
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1860207563\">Monster_W4_Theoroi_LastSummon</a>",
      "stackData": [],
      "latentQueue": []
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
      ],
      "stackData": [
        "MDF_DamageUpRatio"
      ],
      "latentQueue": [
        "MainCount",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1562887426\">Monster_W4_Theoroi_ReloadEffect</a>",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1881355591\">Monster_W4_Theoroi_Reload</a>[<span class=\"descriptionNumberColor\">Infinite Recursion</span>]",
      "stackType": "Replace",
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
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
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_EntityCountRemain",
              "value": {
                "operator": "Variables[0] (MDF_MaxEntityCount) || Variables[1] (MDF_EntityCount) || SUB || RETURN",
                "displayLines": "(MDF_MaxEntityCount - MDF_EntityCount)",
                "constants": [],
                "variables": [
                  "MDF_MaxEntityCount",
                  "MDF_EntityCount"
                ]
              }
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
                "operator": "Variables[0] (MDF_MaxEntityCount) || RETURN",
                "displayLines": "MDF_MaxEntityCount",
                "constants": [],
                "variables": [
                  "MDF_MaxEntityCount"
                ]
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
              "variableName": "MDF_EntityCount",
              "value": {
                "operator": "Variables[0] (MDF_EntityCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(MDF_EntityCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_EntityCount"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_EntityCount",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (MDF_MaxEntityCount) || RETURN",
                  "displayLines": "MDF_MaxEntityCount",
                  "constants": [],
                  "variables": [
                    "MDF_MaxEntityCount"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_EntityCount",
                  "value": {
                    "operator": "Variables[0] (MDF_MaxEntityCount) || RETURN",
                    "displayLines": "MDF_MaxEntityCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxEntityCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_EntityCountRemain",
              "value": {
                "operator": "Variables[0] (MDF_MaxEntityCount) || Variables[1] (MDF_EntityCount) || SUB || RETURN",
                "displayLines": "(MDF_MaxEntityCount - MDF_EntityCount)",
                "constants": [],
                "variables": [
                  "MDF_MaxEntityCount",
                  "MDF_EntityCount"
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_EntityCount) || RETURN",
                "displayLines": "MDF_EntityCount",
                "constants": [],
                "variables": [
                  "MDF_EntityCount"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (MDF_MaxEntityCount) || RETURN",
                "displayLines": "MDF_MaxEntityCount",
                "constants": [],
                "variables": [
                  "MDF_MaxEntityCount"
                ]
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
                      "operator": "Variables[0] (MDF_MaxEntityCount) || RETURN",
                      "displayLines": "MDF_MaxEntityCount",
                      "constants": [],
                      "variables": [
                        "MDF_MaxEntityCount"
                      ]
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
                  "variableName": "MDF_InsertCheck",
                  "value": 1
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Theoroi_Ability16_Part01",
                  "priorityTag": "MonsterChangePhase",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "EntityCountRemain",
              "value": {
                "operator": "Variables[0] (MDF_EntityCountRemain) || RETURN",
                "displayLines": "MDF_EntityCountRemain",
                "constants": [],
                "variables": [
                  "MDF_EntityCountRemain"
                ]
              }
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
                      "operator": "Variables[0] ({[Skill12[0]]}) || RETURN",
                      "displayLines": "{[Skill12[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill12[0]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_MaxEntityCount"
      ],
      "latentQueue": [
        "MainCount",
        "AIFlag"
      ],
      "description": "Use \"Query: Prime Mover's Outcome\" after <span class=\"descriptionNumberColor\">MDF_EntityCountRemain</span> more instance(s) of any of the following: enemy target defeats, ally character knock-downs, or memosprite disappearances.",
      "type": "Other",
      "effectName": "Loading: Mythos",
      "statusName": "Loading: Mythos"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__688363638\">Monster_W4_Theoroi_Destruction</a>[<span class=\"descriptionNumberColor\">Retribution of \"Law\"</span>]",
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
                "operator": "Variables[0] (MDF_LoseHPRatio) || RETURN",
                "displayLines": "MDF_LoseHPRatio",
                "constants": [],
                "variables": [
                  "MDF_LoseHPRatio"
                ]
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
      ],
      "stackData": [
        "MDF_LoseHPRatio"
      ],
      "latentQueue": [
        "AIFlag",
        "MainCount",
        "MDF_InsertCheck",
        "EntityCountRemain"
      ],
      "description": "Lose <span class=\"descriptionNumberColor\">MDF_LoseHPRatio</span> HP after each action.",
      "type": "Other",
      "effectName": "Retribution of \"Law\"",
      "statusName": "Retribution of \"Law\""
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2105282223\">Monster_W4_Theoroi_Reversion</a>[<span class=\"descriptionNumberColor\">Antinomy</span>]",
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_MaxSpecialSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentSpecialSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_MaxSpecialSP) || Variables[1] (MDF_CurrentSpecialSP) || SUB || RETURN",
                    "displayLines": "(MDF_MaxSpecialSP - MDF_CurrentSpecialSP)",
                    "constants": [],
                    "variables": [
                      "MDF_MaxSpecialSP",
                      "MDF_CurrentSpecialSP"
                    ]
                  },
                  "isFixed": "(Fixed)",
                  "ignoreBlock": true,
                  "isSpecialEnergy": true
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_MaxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentSpecialSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_MaxSP) || Variables[1] (MDF_CurrentSpecialSP) || SUB || RETURN",
                    "displayLines": "(MDF_MaxSP - MDF_CurrentSpecialSP)",
                    "constants": [],
                    "variables": [
                      "MDF_MaxSP",
                      "MDF_CurrentSpecialSP"
                    ]
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
                    "operator": "Variables[0] (MDF_CurrentSpecialSP) || RETURN",
                    "displayLines": "MDF_CurrentSpecialSP",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentSpecialSP"
                    ]
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
                    "operator": "Variables[0] (MDF_CostHPRatio) || RETURN",
                    "displayLines": "MDF_CostHPRatio",
                    "constants": [],
                    "variables": [
                      "MDF_CostHPRatio"
                    ]
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
              "variableName": "MDF_UseUltra",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_NeedRemove",
              "value": 1
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_Shield",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable (VFX)",
                  "variableName": "MDF_PreShowHP",
                  "value": {
                    "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (MDF_CostHPRatio) || MUL || Variables[2] (MDF_Shield) || SUB || RETURN",
                    "displayLines": "((MDF_MaxHP * MDF_CostHPRatio) - MDF_Shield)",
                    "constants": [],
                    "variables": [
                      "MDF_MaxHP",
                      "MDF_CostHPRatio",
                      "MDF_Shield"
                    ]
                  }
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
                        "operator": "Variables[0] (MDF_PreShowHP) || RETURN",
                        "displayLines": "MDF_PreShowHP",
                        "constants": [],
                        "variables": [
                          "MDF_PreShowHP"
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
      "stackData": [
        "MDF_CostHPRatio"
      ],
      "latentQueue": [],
      "description": "Ultimate is activated. Using Ultimate consumes HP equal to <span class=\"descriptionNumberColor\">MDF_CostHPRatio</span> of this unit's Max HP, this DMG prioritizes Shield effect reduction and is Non-fatal. If Ultimate is not used during the effect duration, Energy will be regenerated to <span class=\"descriptionNumberColor\">MDF_CurrentSpecialSP</span> points when the effect ends.",
      "type": "Other",
      "effectName": "Antinomy",
      "statusName": "Antinomy",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-303636173\">Monster_W4_Theoroi_Creation</a>[<span class=\"descriptionNumberColor\">Potential Realization</span>]",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "healPercent": {
                "operator": "Variables[0] (MDF_HPHealRatio) || RETURN",
                "displayLines": "MDF_HPHealRatio",
                "constants": [],
                "variables": [
                  "MDF_HPHealRatio"
                ]
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageUpRatio) || RETURN",
                "displayLines": "MDF_DamageUpRatio",
                "constants": [],
                "variables": [
                  "MDF_DamageUpRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageUpRatio",
        "MDF_HPHealRatio"
      ],
      "latentQueue": [],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio</span>, HP is restored by <span class=\"descriptionNumberColor\">MDF_HPHealRatio</span> at the start of turn.",
      "type": "Buff",
      "effectName": "Potential Realization",
      "statusName": "Potential Realization"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1628585625\">Monster_W4_Theoroi_Summon</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W4_Theoroi_Part2Summon",
              "priorityTag": "MonsterBuffOthers",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "stackLimit": 4,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__584971105\">Monster_W4_Theoroi_Part2</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
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
              "name": "Change Character Transformation",
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
                    "value": "InSkill05",
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
                    "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                    "displayLines": "{[PassiveSkill02[0]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill02[0]]}"
                    ]
                  }
                },
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                    "displayLines": "{[PassiveSkill02[1]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill02[1]]}"
                    ]
                  },
                  "forceReduction": true,
                  "ToughnessDMGType": {
                    "name": "Damage Type Source",
                    "sourceType": {}
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MainCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__534638248\">Monster_W4_Theoroi_Part1</a>[<span class=\"descriptionNumberColor\">To Logos</span>]",
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
              "variableName": "MDF_CurrentCountRemain",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill01[0]]}) || Variables[1] (MDF_CurrentCount) || SUB || RETURN",
                "displayLines": "({[PassiveSkill01[0]]} - MDF_CurrentCount)",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[0]]}",
                  "MDF_CurrentCount"
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_CurrentCount) || RETURN",
                "displayLines": "MDF_CurrentCount",
                "constants": [],
                "variables": [
                  "MDF_CurrentCount"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[0]]}"
                ]
              },
              "assignState": "True",
              "state": "Active",
              "barType": "Theoroi",
              "trigger": "Phase_01"
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
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "InSkill05"
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
                    "type": "Character",
                    "invertCondition": true,
                    "livingState": "Mask_AliveOnly"
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
                  "variableName": "MDF_CurrentCount",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_CurrentCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_CurrentCount"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentCount",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[0]]}"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CurrentCount",
                      "value": {
                        "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                        "displayLines": "{[PassiveSkill01[0]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill01[0]]}"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentCountRemain",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkill01[0]]}) || Variables[1] (MDF_CurrentCount) || SUB || RETURN",
                    "displayLines": "({[PassiveSkill01[0]]} - MDF_CurrentCount)",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[0]]}",
                      "MDF_CurrentCount"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentCount) || RETURN",
                    "displayLines": "MDF_CurrentCount",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[0]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[0]]}"
                    ]
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
                          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[0]]}"
                          ]
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
                      "variableName": "MDF_InsertCheck",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Theoroi_Ability05_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterChangePhase",
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
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Use \"SET Proof_Method=Black_Tide\" after <span class=\"descriptionNumberColor\">MDF_CurrentCountRemain</span> more instances of either of the following: enemy target generations or ally memosprite summons.",
      "type": "Other",
      "effectName": "To Logos",
      "statusName": "To Logos"
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
      ],
      "stackData": [],
      "latentQueue": []
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
}