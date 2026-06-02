const configAbility = {
  "fileName": "4064012_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__393866359\">Enemy_W4_Serpent_01_IF_AbilityEX04_TGT</a>[<span class=\"descriptionNumberColor\">Economies of Scale</span>]",
      "stackType": "Replace",
      "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeAddedRatio_PerLayer</span> and reduces DMG received by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce_PerLayer</span>.",
      "type": "Buff",
      "statusName": "Economies of Scale",
      "stackLimit": 5,
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_AllDamageReduce",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio_PerLayer) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "(MDF_AllDamageTypeAddedRatio_PerLayer * _Layer)",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeAddedRatio_PerLayer",
                  "_Layer"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_AllDamageTypeAddedRatio",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageReduce_PerLayer) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "(MDF_AllDamageReduce_PerLayer * _Layer)",
                "constants": [],
                "variables": [
                  "MDF_AllDamageReduce_PerLayer",
                  "_Layer"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                "displayLines": "MDF_AllDamageTypeAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeAddedRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                "displayLines": "MDF_AllDamageReduce",
                "constants": [],
                "variables": [
                  "MDF_AllDamageReduce"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1352221125\">Enemy_W4_Serpent_01_IF_AbilityEX04_EMY</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1105875150\">TaskList_Monster_W4_Serpent_01_IF_AbilityEX04_Refresh</a>"
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
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1105875150\">TaskList_Monster_W4_Serpent_01_IF_AbilityEX04_Refresh</a>"
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
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1105875150\">TaskList_Monster_W4_Serpent_01_IF_AbilityEX04_Refresh</a>"
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
                "modifier": "<a class=\"gModGreen\" id=\"-2017874645\">Enemy_W4_Serpent_01_IF_Summon_SpecialLimbo</a>[<span class=\"descriptionNumberColor\">Feigned Death</span>]"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1105875150\">TaskList_Monster_W4_Serpent_01_IF_AbilityEX04_Refresh</a>"
                }
              ]
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
                "modifier": "<a class=\"gModGreen\" id=\"-2017874645\">Enemy_W4_Serpent_01_IF_Summon_SpecialLimbo</a>[<span class=\"descriptionNumberColor\">Feigned Death</span>]"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1105875150\">TaskList_Monster_W4_Serpent_01_IF_AbilityEX04_Refresh</a>"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1105875150\">TaskList_Monster_W4_Serpent_01_IF_AbilityEX04_Refresh</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}.[[removeUnselectable]]"
              },
              "variableName": "_CharacterNumber",
              "livingTargets": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2017874645\">Enemy_W4_Serpent_01_IF_Summon_SpecialLimbo</a>[<span class=\"descriptionNumberColor\">Feigned Death</span>]",
                "invertCondition": true
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"393866359\">Enemy_W4_Serpent_01_IF_AbilityEX04_TGT</a>[<span class=\"descriptionNumberColor\">Economies of Scale</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CharacterNumber",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"393866359\">Enemy_W4_Serpent_01_IF_AbilityEX04_TGT</a>[<span class=\"descriptionNumberColor\">Economies of Scale</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageReduce_PerLayer": {
                      "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                      "displayLines": "MDF_AllDamageReduce",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageReduce"
                      ]
                    },
                    "MDF_AllDamageTypeAddedRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                      "displayLines": "MDF_AllDamageTypeAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageTypeAddedRatio"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (_CharacterNumber) || RETURN",
                    "displayLines": "_CharacterNumber",
                    "constants": [],
                    "variables": [
                      "_CharacterNumber"
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
      "for": "<a class=\"gModGreen\" id=\"mod__883611863\">Enemy_W4_Serpent_01_IF_AbilityEX04</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1759595362\">Enemy_W4_Serpent_01_IF_AbilityEX03_ShareHP</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Create Shared HP Group",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "subTarget": {
                "name": "Target Name",
                "target": "{{Enemy Team All}} - {{Modifier Holder}}"
              },
              "removeShields": true
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_MaxHPAddRatio) || RETURN",
                "displayLines": "MDF_MaxHPAddRatio",
                "constants": [],
                "variables": [
                  "MDF_MaxHPAddRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__833279006\">Enemy_W4_Serpent_01_IF_AbilityEX03</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__850056625\">Enemy_W4_Serpent_01_IF_AbilityEX02</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__799723768\">Enemy_W4_Serpent_01_IF_AbilityEX01</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__312693527\">Enemy_W4_Serpent_01_IF_ServantHideAbilityDisplayInfo</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1049616782\">Enemy_W4_Serpent_01_IF_LockStance</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock Toughness",
              "percent": 0
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__939143793\">Enemy_W4_Serpent_01_IF_Summon_Deathrattle</a>",
      "modifierFlags": [
        "Deathrattle",
        "KeepOnDeathrattle",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "Monster_W4_Serpent_01_SummonNoDeathrattle"
            }
          ]
        },
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Summoner of Modifier Holder}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "MDF_Deathrattle",
                  "value": 1
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Summoner of Modifier Holder}}"
                    },
                    "value1": "Deathrattle",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "conditionActive": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "abilityName": "Monster_W4_Serpent_01_IF_SummonDeathrattle",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "priorityTag": "EnemyDeathEffect",
                      "ownerState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "Break"
                      ],
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "variableName": "Deathrattle",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Summoner of Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      }
                    }
                  ]
                },
                {
                  "name": "Inject Ability Use",
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_W4_Serpent_01_SummonNoDeathrattle",
                  "priorityTag": "EnemyDeathEffect",
                  "ownerState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1471415103\">Enemy_W4_Serpent_01_IF_Summon_DeathrattleOverride</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"120636483\">Enemy_W4_Serpent_01_Summon_Deathrattle</a>[<span class=\"descriptionNumberColor\">Execution Squad</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"120636483\">Enemy_W4_Serpent_01_Summon_Deathrattle</a>[<span class=\"descriptionNumberColor\">Execution Squad</span>]",
                  "removeToBeAdded": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"939143793\">Enemy_W4_Serpent_01_IF_Summon_Deathrattle</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2017874645\">Enemy_W4_Serpent_01_IF_Summon_SpecialLimbo</a>[<span class=\"descriptionNumberColor\">Feigned Death</span>]",
      "modifierFlags": [
        "MuteSpeed"
      ],
      "description": "Cannot be selected, cannot take action.",
      "type": "Other",
      "effectName": "Feigned Death",
      "statusName": "Feigned Death",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)",
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "W4_Serpent_01_IF_Servant",
              "state": false
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": [
                  "Break"
                ]
              },
              "failed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentStance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                },
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentStance) || RETURN",
                    "displayLines": "MDF_CurrentStance",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentStance"
                    ]
                  },
                  "attacker": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "defender": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "forceReduction": true,
                  "canDelay": true,
                  "ToughnessDMGType": "Imaginary"
                }
              ]
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "flagNames": []
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-874509273\">Enemy_W4_Serpent_01_IF_Summon_SpecialLimboController</a>[<span class=\"descriptionNumberColor\">Monoform Merger</span>]",
      "description": "When receiving fatal damage, enters the \"Feigned Death\" state. When all \"ichor memosprites\" possessing \"Monoform Merger\" enter the \"Feigned Death\" state, they merge back into the \"Arbiter of the Lost Abyss.\"",
      "type": "Other",
      "statusName": "Monoform Merger",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_W4_Serpent_01_IF_SpecialLimboInsert"
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Monster_W4_Serpent_01_IF_SpecialLimboInsert",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "STAGE_Enemy",
              "ownerState": "Mask_AliveOrLimbo",
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-92334699\">Enemy_W4_Serpent_01_IF_TiredDisplay</a>[<span class=\"descriptionNumberColor\">Bloodline Frailty</span>]",
      "stackType": "Replace",
      "description": "After every action, the \"ichor memosprite\" with \"Monoform Merger\" reduces \"Bloodline Frailty\" by 1 point. When the \"ichor memosprite\" merges back into the \"Arbiter of the Lost Abyss,\" reduces the Toughness of the \"Arbiter of the Lost Abyss\" based on the remaining amount of \"Bloodline Frailty.\" Currently remaining \"Bloodline Frailty\": <span class=\"descriptionNumberColor\">ModifierLayers</span> point(s).",
      "type": "Other",
      "statusName": "Bloodline Frailty",
      "stackLimit": 100,
      "execute": [
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1424767145\">Enemy_W4_Serpent_01_IF_OffTeamController</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "InsertFlag_Return"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_BonusPoint",
              "value": {
                "operator": "Variables[0] ({[SkillP03[5]]}) || RETURN",
                "displayLines": "{[SkillP03[5]]}",
                "constants": [],
                "variables": [
                  "{[SkillP03[5]]}"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-92334699\">Enemy_W4_Serpent_01_IF_TiredDisplay</a>[<span class=\"descriptionNumberColor\">Bloodline Frailty</span>]",
              "addStacksPerTrigger": {
                "operator": "Variables[0] (MDF_BonusPoint) || RETURN",
                "displayLines": "MDF_BonusPoint",
                "constants": [],
                "variables": [
                  "MDF_BonusPoint"
                ]
              }
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
              "modifier": "<a class=\"gModGreen\" id=\"-92334699\">Enemy_W4_Serpent_01_IF_TiredDisplay</a>[<span class=\"descriptionNumberColor\">Bloodline Frailty</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Action Completed [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Minions of Modifier Holder}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "Monster_W4_Serpent_01_IF_SpecialLimboInsert",
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_BonusPoint",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_BonusPoint",
                      "value": -1,
                      "max": 100
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-92334699\">Enemy_W4_Serpent_01_IF_TiredDisplay</a>[<span class=\"descriptionNumberColor\">Bloodline Frailty</span>]",
                      "addStacksPerTrigger": -1
                    }
                  ]
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-2017874645\">Enemy_W4_Serpent_01_IF_Summon_SpecialLimbo</a>[<span class=\"descriptionNumberColor\">Feigned Death</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All(with Unselectable)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 5,
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2017874645\">Enemy_W4_Serpent_01_IF_Summon_SpecialLimbo</a>[<span class=\"descriptionNumberColor\">Feigned Death</span>]"
                    }
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertFlag_Return",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertFlag_Return",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Serpent_01_IF_Return_Part01",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
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
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1006714510\">Enemy_W4_Serpent_01_IF_OffTeamFormation</a>",
      "modifierFlags": [
        "Stealth",
        "MuteSpeed",
        "Endurance",
        "DisableAction"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stayInTeam": true
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "W4_Serpent_01_IF_Summoner"
            },
            {
              "name": "Add to Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
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
              "stateName": "W4_Serpent_01_IF_Summoner",
              "state": false
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__322023732\">Enemy_W4_Serpent_01_IF_BonusDefenceDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
      "stackType": "Replace",
      "description": "Each stack decreases DEF by <span class=\"descriptionNumberColor\">MDF_Bonus_DefenceDownRatio_PerLayer</span>.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "DEF Reduction",
      "stackLimit": 999,
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Bonus_DefenceDownRatio",
              "value": {
                "operator": "Variables[0] (MDF_Bonus_DefenceDownRatio_PerLayer) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "(MDF_Bonus_DefenceDownRatio_PerLayer * _Layer)",
                "constants": [],
                "variables": [
                  "MDF_Bonus_DefenceDownRatio_PerLayer",
                  "_Layer"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_Bonus_DefenceDownRatio) || SUB || RETURN",
                "displayLines": "(0 - MDF_Bonus_DefenceDownRatio)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_Bonus_DefenceDownRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1282840806\">Enemy_W4_Serpent_01_IF_OriginalDefence</a>[<span class=\"descriptionNumberColor\">Enhance Defense</span>]",
      "description": "DEF increases by <span class=\"descriptionNumberColor\">MDF_Original_DefenceAddedRatio</span>. Dispelled after being Weakness Broken.",
      "type": "Buff",
      "effectName": "DEF Boost",
      "statusName": "Enhance Defense",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Original_DefenceAddedRatio) || RETURN",
                "displayLines": "MDF_Original_DefenceAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_Original_DefenceAddedRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-720916793\">Enemy_W4_Serpent_01_IF_DebuffListener</a>[<span class=\"descriptionNumberColor\">Degraded Vessel</span>]",
      "description": "If an ally inflicts a debuff on an enemy unit with \"Degraded Vessel\" when using an attack, slightly reduces that enemy unit's Toughness and causes them to take True DMG.",
      "type": "Other",
      "statusName": "Degraded Vessel",
      "execute": [
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DebuffBonusTriggeredFlag_Pre",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "variableName": "DebuffBonusTriggeredFlag_Attack",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Completed [Owner]",
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
                    "value1": "DebuffBonusTriggeredFlag_Attack",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DebuffBonusTriggeredFlag_Debuff",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] (MDF_StanceDamage) || RETURN",
                    "displayLines": "MDF_StanceDamage",
                    "constants": [],
                    "variables": [
                      "MDF_StanceDamage"
                    ]
                  },
                  "attacker": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "defender": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "ignoreAttackerBonuses": true,
                  "canDelay": true,
                  "ToughnessDMGType": {
                    "name": "Damage Type Source",
                    "sourceType": {}
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": {}
                    },
                    "Damage": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "True DMG"
                  },
                  "overrideDamageOwner": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "attackType": "Additional DMG"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "variableName": "DebuffBonusTriggeredFlag_Attack",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "variableName": "DebuffBonusTriggeredFlag_Debuff",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Action Start [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team All(with Unselectable)V2}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "variableName": "DebuffBonusTriggeredFlag_Pre",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action Completed [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "variableName": "DebuffBonusTriggeredFlag_Pre",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "variableName": "DebuffBonusTriggeredFlag_Attack",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "variableName": "DebuffBonusTriggeredFlag_Debuff",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Type Was",
                    "statusType": "Debuff"
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DebuffBonusTriggeredFlag_Pre",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "variableName": "DebuffBonusTriggeredFlag_Debuff",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1753334299\">Enemy_W4_Serpent_01_IF_DebuffListenerController</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"-720916793\">Enemy_W4_Serpent_01_IF_DebuffListener</a>[<span class=\"descriptionNumberColor\">Degraded Vessel</span>]",
              "valuePerStack": {
                "MDF_StanceDamage": {
                  "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
                  "displayLines": "{[SkillP04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[0]]}"
                  ]
                },
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] ({[SkillP04[1]]}) || RETURN",
                  "displayLines": "{[SkillP04[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[1]]}"
                  ]
                }
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
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-720916793\">Enemy_W4_Serpent_01_IF_DebuffListener</a>[<span class=\"descriptionNumberColor\">Degraded Vessel</span>]",
                  "valuePerStack": {
                    "MDF_StanceDamage": {
                      "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
                      "displayLines": "{[SkillP04[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP04[0]]}"
                      ]
                    },
                    "MDF_DamagePercentage": {
                      "operator": "Variables[0] ({[SkillP04[1]]}) || RETURN",
                      "displayLines": "{[SkillP04[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP04[1]]}"
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
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-116303489\">Enemy_W4_Serpent_01_IF_DefenceController</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"1282840806\">Enemy_W4_Serpent_01_IF_OriginalDefence</a>[<span class=\"descriptionNumberColor\">Enhance Defense</span>]",
              "valuePerStack": {
                "MDF_Original_DefenceAddedRatio": {
                  "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                  "displayLines": "{[SkillP01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1282840806\">Enemy_W4_Serpent_01_IF_OriginalDefence</a>[<span class=\"descriptionNumberColor\">Enhance Defense</span>]"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"322023732\">Enemy_W4_Serpent_01_IF_BonusDefenceDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"149951100\">Enemy_W4_Serpent_01_Passive_StanceDamage</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"322023732\">Enemy_W4_Serpent_01_IF_BonusDefenceDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
                  "valuePerStack": {
                    "MDF_Bonus_DefenceDownRatio_PerLayer": {
                      "operator": "Variables[0] ({[SkillP02[0]]}) || RETURN",
                      "displayLines": "{[SkillP02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP02[0]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enemy HP Phased",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1282840806\">Enemy_W4_Serpent_01_IF_OriginalDefence</a>[<span class=\"descriptionNumberColor\">Enhance Defense</span>]",
              "valuePerStack": {
                "MDF_Original_DefenceAddedRatio": {
                  "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                  "displayLines": "{[SkillP01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[0]]}"
                  ]
                }
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"322023732\">Enemy_W4_Serpent_01_IF_BonusDefenceDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1844919084\">Enemy_W4_Serpent_01_IF_PickUpMessage</a>",
      "execute": [
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__980547163\">Enemy_W4_Serpent_01_IF_HintToastController</a>",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]"
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1006714510\">Enemy_W4_Serpent_01_IF_OffTeamFormation</a>"
              },
              "passed": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Defeat all summons as quickly as possible"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1560904792\">Enemy_W4_Serpent_01_Charge01</a>[<span class=\"descriptionNumberColor\">Pursuer</span>]"
              },
              "passed": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Blocking attacks with Shield can reduce enemy Toughness"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1006714510\">Enemy_W4_Serpent_01_IF_OffTeamFormation</a>"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1560904792\">Enemy_W4_Serpent_01_Charge01</a>[<span class=\"descriptionNumberColor\">Pursuer</span>]"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1817283784\">Enemy_W4_Serpent_01_IF_ChangePhaseController</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "ChangePhase",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"939143793\">Enemy_W4_Serpent_01_IF_Summon_Deathrattle</a>"
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1884113430\">Enemy_W4_Serpent_01_IF_Charge01</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ChangePhase"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                },
                {
                  "name": "Set Enemy Phase",
                  "mode": "Inc"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Serpent_01_IF_ChangePhase1",
                  "priorityTag": "EnemyPhaseChange",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            "Modifier Deletes Itself"
          ],
          "priorityLevel": -90
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-980871361\">Enemy_W4_Serpent_01_IF_EnterBattle</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "silent": true,
              "toRemove": [
                "STAT_CTRL"
              ]
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W4_Serpent_01_IF_InitiateInsert",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "EnemyBattleCry",
              "allowAbilityTriggers": false
            }
          ],
          "priorityLevel": -45
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1025520110\">Enemy_W4_Serpent_01_IF_Passive</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"149951100\">Enemy_W4_Serpent_01_Passive_StanceDamage</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
                  "variable": "MDF_StanceDamage",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "MDF_StanceDamage"
                },
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] (MDF_StanceDamage) || RETURN",
                    "displayLines": "MDF_StanceDamage",
                    "constants": [],
                    "variables": [
                      "MDF_StanceDamage"
                    ]
                  },
                  "attacker": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "defender": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "ignoreAttackerBonuses": true,
                  "canDelay": true,
                  "ToughnessDMGType": {
                    "name": "Damage Type Source",
                    "sourceType": {}
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1916197424\">Monster_W4_Serpent_01_RLBoss_Ability06Judge</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__968355900\">Monster_W4_Serpent_01_RLBoss_Ability06Choose</a>[<span class=\"descriptionNumberColor\">Hemotort Drench</span>]",
      "description": "The character that has been selected by \"Name the Culprit.\"",
      "type": "Other",
      "statusName": "Hemotort Drench"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__986553475\">Monster_W4_Serpent_01_RLBoss_TriggerDamage</a>",
      "duration": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Trigger Modifier Event",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "DOT_TriggerRatio",
              "eventType": "DOT",
              "value": 1
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128925615\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_DOT</a>[<span class=\"descriptionNumberColor\">Hemotort Corruption</span>]"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-227770037\">Monster_W4_Serpent_01_RLBoss_Passive</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill06"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}.[[removeMemosprite]]"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">",
                    "value2": 0,
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"968355900\">Monster_W4_Serpent_01_RLBoss_Ability06Choose</a>[<span class=\"descriptionNumberColor\">Hemotort Drench</span>]",
                      "invertCondition": true
                    }
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[removeMemosprite]]"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"968355900\">Monster_W4_Serpent_01_RLBoss_Ability06Choose</a>[<span class=\"descriptionNumberColor\">Hemotort Drench</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1916197424\">Monster_W4_Serpent_01_RLBoss_Ability06Judge</a>"
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
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Name",
                    "skillName": "Skill04"
                  },
                  {
                    "name": "Skill Name",
                    "skillName": "Skill05"
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
                  "modifier": "<a class=\"gModGreen\" id=\"437668983\">Monster_W4_Nikadory_RLBoss_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_DamageUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio_PerLayer"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill07"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1916197424\">Monster_W4_Serpent_01_RLBoss_Ability06Judge</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1144531535\">W4_Serpent_01_BattleScore2</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Achievement",
              "relatedAchievements": [
                {
                  "title": "Vindicated by Faith",
                  "desc": "The ally character targeted by \"Name the Culprit\" has their HP equal to their Max HP after being hit by \"Hemotort Decapitation\" from \"Ichor Memosprite: Judge of Oblivion\"",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1161309154\">W4_Serpent_01_BattleScore1</a>",
      "stackType": "Replace",
      "stackLimit": 3,
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
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
                "value2": 3,
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "The Ascension of the Shield Powerhouse",
                      "desc": "All of \"Ichor Memosprite: Judge of Oblivion's\" #1 Single Target attack(s) to the locked-on target hit a Shield",
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
        },
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"149951100\">Enemy_W4_Serpent_01_Passive_StanceDamage</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1161309154\">W4_Serpent_01_BattleScore1</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]",
      "modifierFlags": [
        "AttackSign"
      ],
      "description": "When \"%DynamicTargetName\" uses \"Hemotort Decapitation\", they take maximum damage, and if any DMG is not offset by Shield, they will be inflicted with \"Hemotort Corruption.\"",
      "type": "Other",
      "effectName": "First Offense",
      "statusName": "First Offense",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Set Target Parameter",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "paramTarget": {
                "name": "Add Target by Unique Identifier",
                "identifier": "W4_Serpent_01"
              },
              "variableName": "MMonster_W4_Serpent_01_Charge02_Target_DynamicTarget"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__839686414\">Enemy_W4_Serpent_01_Charge02_Target_Sub</a>[<span class=\"descriptionNumberColor\">Accomplice</span>]",
      "modifierFlags": [
        "AttackSign"
      ],
      "description": "\"%DynamicTargetName\" takes damage when using \"Hemotort Decapitation.\"",
      "type": "Other",
      "effectName": "Accomplice",
      "statusName": "Accomplice",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Set Target Parameter",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "paramTarget": {
                "name": "Add Target by Unique Identifier",
                "identifier": "W4_Serpent_01"
              },
              "variableName": "MMonster_W4_Serpent_01_Charge02_Target_Sub_DynamicTarget"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1611237649\">Enemy_W4_Serpent_01_Charge02</a>[<span class=\"descriptionNumberColor\">Penance Prep</span>]",
      "description": "Use \"Hemotort Decapitation\" in the next action. This effect is dispelled when this unit becomes Weakness Broken.",
      "type": "Other",
      "effectName": "Penance Prep",
      "statusName": "Penance Prep",
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
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself",
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"839686414\">Enemy_W4_Serpent_01_Charge02_Target_Sub</a>[<span class=\"descriptionNumberColor\">Accomplice</span>]"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__986864876\">Enemy_W4_Serpent_01_MuteUltra</a>",
      "execute": [
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
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1965565011\">Enemy_W4_Serpent_01_Charge01_Target_Change</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "AttackSign"
      ],
      "description": "Will receive <span class=\"descriptionNumberColor\">MDF_Layer</span> instances of Single Target attacks from \"%CasterName.\" If this unit has Shield, when hit by \"%CasterName's\" Single Target attacks, reduces Toughness. This effect is dispelled when \"%CasterName\" is Weakness Broken.",
      "type": "Other",
      "effectName": "Pursuit Target",
      "statusName": "Pursuit Target",
      "addStacksPerTrigger": -1,
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1161309154\">W4_Serpent_01_BattleScore1</a>",
              "addStacksPerTrigger": 0
            },
            {
              "name": "Set Target Parameter",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "paramTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MMonster_W4_Serpent_01_Charge01_DynamicTarget"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "Stealth"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1965565011\">Enemy_W4_Serpent_01_Charge01_Target_Change</a>"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1161309154\">W4_Serpent_01_BattleScore1</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1560904792\">Enemy_W4_Serpent_01_Charge01</a>[<span class=\"descriptionNumberColor\">Pursuer</span>]",
      "stackType": "Replace",
      "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. Will launch <span class=\"descriptionNumberColor\">MDF_Count</span> instance(s) of Single Target attacks on %DynamicTargetName. This effect is dispelled when this unit's Weakness is Broken.",
      "type": "Other",
      "effectName": "Pursuer",
      "statusName": "Pursuer",
      "addStacksPerTrigger": -1,
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "AttackFlag",
              "value": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
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
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AttackFlag",
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "assignState": "False"
            }
          ]
        },
        {
          "eventTrigger": "Turn Start [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AttackFlag",
                      "value": 2
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AttackFlag",
                      "value": 1
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
              "variableName": "MDF_Count",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_Count",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Count) || RETURN",
                    "displayLines": "MDF_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Count"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                    "displayLines": "MDF_MaxCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxCount"
                    ]
                  },
                  "assignState": "True",
                  "state": "Active",
                  "trigger": "SpEff_Trigger"
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
                    "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]"
                    }
                  ]
                }
              ]
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Count",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemies by Aggro OR Random}}"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                        "displayLines": "MDF_MaxCount",
                        "constants": [],
                        "variables": [
                          "MDF_MaxCount"
                        ]
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_Count) || RETURN",
                        "displayLines": "MDF_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Count"
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
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Modifier Has Flag",
                    "flagName": "Taunt"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target 2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                    "displayLines": "MDF_MaxCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxCount"
                    ]
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_Count) || RETURN",
                    "displayLines": "MDF_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Count"
                    ]
                  }
                }
              ]
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
                    "value1": "MDF_Count",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1965565011\">Enemy_W4_Serpent_01_Charge01_Target_Change</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemies by Aggro OR Random}}"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                        "displayLines": "MDF_MaxCount",
                        "constants": [],
                        "variables": [
                          "MDF_MaxCount"
                        ]
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_Count) || RETURN",
                        "displayLines": "MDF_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Count"
                        ]
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
      "for": "<a class=\"gModGreen\" id=\"mod__120636483\">Enemy_W4_Serpent_01_Summon_Deathrattle</a>[<span class=\"descriptionNumberColor\">Execution Squad</span>]",
      "modifierFlags": [
        "Deathrattle",
        "KeepOnDeathrattle",
        "RemoveWhenCasterDead"
      ],
      "description": "When defeated, reduces the Toughness of \"Ichor Memosprite: Judge of Oblivion.\"",
      "type": "Other",
      "effectName": "Execution Squad",
      "statusName": "Execution Squad",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "Monster_W4_Serpent_01_SummonNoDeathrattle"
            }
          ]
        },
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Summoner of Modifier Holder}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "MDF_Deathrattle",
                  "value": 1
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Summoner of Modifier Holder}}"
                    },
                    "value1": "Deathrattle",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "conditionActive": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "abilityName": "Monster_W4_Serpent_01_SummonDeathrattle",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "priorityTag": "EnemyDeathEffect",
                      "ownerState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "Break"
                      ],
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "variableName": "Deathrattle",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Summoner of Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      }
                    }
                  ]
                },
                {
                  "name": "Inject Ability Use",
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_W4_Serpent_01_SummonNoDeathrattle",
                  "priorityTag": "EnemyDeathEffect",
                  "ownerState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
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
      "for": "<a class=\"gModGreen\" id=\"mod__149951100\">Enemy_W4_Serpent_01_Passive_StanceDamage</a>",
      "stackType": "Multiple",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Action Holder Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "passed": [
                {
                  "name": "Lock Toughness",
                  "percent": 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1922828191\">Enemy_W4_Serpent_01_Passive_Sub2</a>[<span class=\"descriptionNumberColor\">Expedite Verdict</span>]",
      "modifierFlags": [
        "STAT_SuperArmorBreak"
      ],
      "description": "Takes <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span> more DMG. Dispelled when recovering from the Weakness Break state.",
      "type": "Other",
      "statusName": "Expedite Verdict",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                  "displayLines": "MDF_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "MDF_DamagePercentage"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                "displayLines": "MDF_AllDamageTypeTakenRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeTakenRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1717754231\">Enemy_W4_Serpent_01_Passive_Sub</a>[<span class=\"descriptionNumberColor\">Expedite Verdict</span>]",
      "modifierFlags": [
        "STAT_SuperArmor"
      ],
      "description": "DMG received decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce</span>. When this unit is Weakness Broken, this effect is dispelled, its action will be further delayed, and deals massive Imaginary DMG to this unit.",
      "type": "Other",
      "effectName": "Expedite Verdict",
      "statusName": "Expedite Verdict",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
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
              }
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                "displayLines": "MDF_AllDamageReduce",
                "constants": [],
                "variables": [
                  "MDF_AllDamageReduce"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-501224004\">Enemy_W4_Serpent_01_Passive</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1717754231\">Enemy_W4_Serpent_01_Passive_Sub</a>[<span class=\"descriptionNumberColor\">Expedite Verdict</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageReduce": {
                      "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                      "displayLines": "MDF_AllDamageReduce",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageReduce"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1717754231\">Enemy_W4_Serpent_01_Passive_Sub</a>[<span class=\"descriptionNumberColor\">Expedite Verdict</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1922828191\">Enemy_W4_Serpent_01_Passive_Sub2</a>[<span class=\"descriptionNumberColor\">Expedite Verdict</span>]",
              "valuePerStack": {
                "MDF_AllDamageTypeTakenRatio": {
                  "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                  "displayLines": "MDF_AllDamageTypeTakenRatio",
                  "constants": [],
                  "variables": [
                    "MDF_AllDamageTypeTakenRatio"
                  ]
                },
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                  "displayLines": "MDF_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "MDF_DamagePercentage"
                  ]
                }
              }
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Set",
              "multiAdd": "MDF_ActionDelay"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1717754231\">Enemy_W4_Serpent_01_Passive_Sub</a>[<span class=\"descriptionNumberColor\">Expedite Verdict</span>]",
              "valuePerStack": {
                "MDF_AllDamageReduce": {
                  "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                  "displayLines": "MDF_AllDamageReduce",
                  "constants": [],
                  "variables": [
                    "MDF_AllDamageReduce"
                  ]
                }
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1922828191\">Enemy_W4_Serpent_01_Passive_Sub2</a>[<span class=\"descriptionNumberColor\">Expedite Verdict</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"149951100\">Enemy_W4_Serpent_01_Passive_StanceDamage</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
                  "variable": "MDF_StanceDamage",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "MDF_StanceDamage"
                },
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] (MDF_StanceDamage) || RETURN",
                    "displayLines": "MDF_StanceDamage",
                    "constants": [],
                    "variables": [
                      "MDF_StanceDamage"
                    ]
                  },
                  "attacker": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "defender": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "ignoreAttackerBonuses": true,
                  "canDelay": true,
                  "ToughnessDMGType": {
                    "name": "Damage Type Source",
                    "sourceType": {}
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
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