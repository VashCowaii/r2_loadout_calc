const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Mortenax Blade",
  "trimCharacterName": "MortenaxBlade",
  "abilityList": [
    "MortenaxBlade_Modifiers",
    "MortenaxBlade_MortenaxBlade_Eidolon2",
    "MortenaxBlade_LocalPlayer_StandardAbility_AttackBreak",
    "MortenaxBlade_LocalPlayer_MortenaxBlade_TechniqueUsage",
    "MortenaxBlade_LocalPlayer_MortenaxBlade_NormalAtk01",
    "MortenaxBlade_MortenaxBlade_TechniqueInLevel",
    "MortenaxBlade_MortenaxBlade_PassiveAbility_NormalExit",
    "MortenaxBlade_MortenaxBlade_PassiveAbility_Exit",
    "MortenaxBlade_MortenaxBlade_PassiveAbility",
    "MortenaxBlade_MortenaxBlade_Ability31_Part02",
    "MortenaxBlade_MortenaxBlade_Ability31_Part01",
    "MortenaxBlade_MortenaxBlade_Ability31_EnterReady",
    "MortenaxBlade_MortenaxBlade_Ability03_Part02",
    "MortenaxBlade_MortenaxBlade_Ability03_Part01",
    "MortenaxBlade_MortenaxBlade_Ability03_EnterReady",
    "MortenaxBlade_MortenaxBlade_Ability21_Part02",
    "MortenaxBlade_MortenaxBlade_Ability21_Part01",
    "MortenaxBlade_MortenaxBlade_Ability02_Part02",
    "MortenaxBlade_MortenaxBlade_Ability02_Part01",
    "MortenaxBlade_MortenaxBlade_Ability11_Part02",
    "MortenaxBlade_MortenaxBlade_Ability11_Part01",
    "MortenaxBlade_MortenaxBlade_Ability01_Part02",
    "MortenaxBlade_MortenaxBlade_Ability01_Part01",
    "MortenaxBlade_Functions",
    "MortenaxBlade_BE_BattleEvents"
  ],
  "abilityObject": {
    "MortenaxBlade_Modifiers": {
      "fileName": "MortenaxBlade_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-544641237\">ADV_StageAbility_Maze_MortenaxBlade_00</a>",
          "counter": 1,
          "stackType": "Refresh"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1979209612\">G_MortenaxBlade_EnergyCountListen</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "G_ExSkill21_Allowed",
                  "value": 1
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"349219986\">MortenaxBlade_TrytoPlayAutoBP</a>"
                }
              ]
            },
            {
              "eventTrigger": "Energy/Special Cost Value Change [Owner]: End[?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Change_In_Current_Value",
                    "changeIndex": 1,
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "G_ExSkill21_Allowed",
                      "value": 1
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (25) || RETURN",
                        "displayLines": "25",
                        "constants": [],
                        "variables": [
                          25
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1744828077\">G_MortenaxBlade_BE_ModifyActionDelay</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "MDF_PropertyValue"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-146321629\">MortenaxBlade_PassiveAbility01_BattleEvent</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "MortenaxBlade_PassiveAbility_NormalExit",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "priorityTag": "CharacterBuffOthers",
                  "ownerState": "Anyone",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-828664514\">G_MortenaxBlade_CheckToPlayAutoBP</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "HP Change [Anyone]",
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
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"349219986\">MortenaxBlade_TrytoPlayAutoBP</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1558019774\">MortenaxBlade_InsertRetarget</a>"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1558019774\">MortenaxBlade_InsertRetarget</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "DisableAction"
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
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "STAT_CTRL",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "DisableAction",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "G_ExSkill21_Allowed",
                          "value": 1
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"349219986\">MortenaxBlade_TrytoPlayAutoBP</a>"
                        }
                      ]
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
                  "functionName": "<a class=\"gTempYellow\" id=\"1558019774\">MortenaxBlade_InsertRetarget</a>"
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
                      "functionName": "<a class=\"gTempYellow\" id=\"1558019774\">MortenaxBlade_InsertRetarget</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__1558019774\">MortenaxBlade_InsertRetarget</a>",
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
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"349219986\">MortenaxBlade_TrytoPlayAutoBP</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2094246819\">G_MortenaxBlade_BanBP</a>",
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
                    "Skill"
                  ],
                  "text": "Ability cannot be used"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__66427170\">G_MortenaxBlade_AbilityChange01</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
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
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill31",
                  "skillSlot": "Ultimate",
                  "enableSecondaryType": "ControlSkill03"
                },
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1060588770\">G_MortenaxBlade_Eidolon6_CD</a>[<span class=\"descriptionNumberColor\">If Immortality Could Die, I Swore THEM Slain</span>]",
          "description": "\"If Immortality Could Die, I Swore THEM Slain\" effect auto-trigger is on cooldown.",
          "type": "Other",
          "statusName": "If Immortality Could Die, I Swore THEM Slain"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__180956240\">G_MortenaxBlade_Eidolon6_ExtraEP</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1060588770\">G_MortenaxBlade_Eidolon6_CD</a>[<span class=\"descriptionNumberColor\">If Immortality Could Die, I Swore THEM Slain</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Anyone]: Start Action-End Phase",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1060588770\">G_MortenaxBlade_Eidolon6_CD</a>[<span class=\"descriptionNumberColor\">If Immortality Could Die, I Swore THEM Slain</span>]"
                }
              ]
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1060588770\">G_MortenaxBlade_Eidolon6_CD</a>[<span class=\"descriptionNumberColor\">If Immortality Could Die, I Swore THEM Slain</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "G_EnergyCount",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1060588770\">G_MortenaxBlade_Eidolon6_CD</a>[<span class=\"descriptionNumberColor\">If Immortality Could Die, I Swore THEM Slain</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__199582616\">G_MortenaxBlade_Eidolon2_Ability31RegardAsInsert</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1517379816\">G_MortenaxBlade_Eidolon2_ToOtherMember</a>[<span class=\"descriptionNumberColor\">Ash Was My Heart, Yet the Flame Stayed</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Follow-Up ATK DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Ash Was My Heart, Yet the Flame Stayed",
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
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_PropertyValue"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1514536546\">G_MortenaxBlade_Eidolon2_ToMember</a>[<span class=\"descriptionNumberColor\">Ash Was My Heart, Yet the Flame Stayed</span>]",
          "stackType": "ReplaceByCaster",
          "description": "When using Ultimate to deal DMG, it is considered as having launched Follow-Up ATK. And the Follow-Up ATK DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Ash Was My Heart, Yet the Flame Stayed",
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
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Character"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"199582616\">G_MortenaxBlade_Eidolon2_Ability31RegardAsInsert</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"199582616\">G_MortenaxBlade_Eidolon2_Ability31RegardAsInsert</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__406254526\">G_MortenaxBlade_Eidolon1_BEDelay</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill21"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{BattleEvent96217}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1744828077\">G_MortenaxBlade_BE_ModifyActionDelay</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
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
          "for": "<a class=\"gModGreen\" id=\"mod__1949237298\">G_MortenaxBlade_Eidolon1_EnermyDebuff</a>[<span class=\"descriptionNumberColor\">Ere My Death, I Stood Unmade</span>]",
          "stackType": "ReplaceByCaster",
          "description": "All-Type RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "All-Type RES Reduction",
          "statusName": "Ere My Death, I Stood Unmade",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || INVERT || RETURN",
                    "displayLines": "-MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__917600023\">G_MortenaxBlade_PointB3_DamageUp_Warlock_ToAllLT</a>[<span class=\"descriptionNumberColor\">Heart, Refined ad Infinitum</span>]",
          "stackType": "ReplaceByCaster",
          "description": "The DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and Ultimate DMG dealt additionally increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Heart, Refined ad Infinitum",
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
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_PropertyValue2"
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1420064965\">G_MortenaxBlade_PointB3_DamageUp_NoWarlock_ToSelf</a>[<span class=\"descriptionNumberColor\">Heart, Refined ad Infinitum</span>]",
          "stackType": "ReplaceByCaster",
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Heart, Refined ad Infinitum",
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
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1123291765\">G_MortenaxBlade_PointB3_DamageUp_NoWarlock_ToOtherMember</a>[<span class=\"descriptionNumberColor\">Heart, Refined ad Infinitum</span>]",
          "stackType": "ReplaceByCaster",
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Heart, Refined ad Infinitum",
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
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1823034258\">G_MortenaxBlade_PointB2</a>[<span class=\"descriptionNumberColor\">Soul, Tempered ad Mortem</span>]",
          "stackType": "ReplaceByCaster",
          "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span> and Incoming Healing increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue3</span>.",
          "type": "Buff",
          "statusName": "Soul, Tempered ad Mortem",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
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
                    "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                    "displayLines": "MDF_PropertyValue2",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue3) || RETURN",
                    "displayLines": "MDF_PropertyValue3",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue3"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-470994946\">G_MortenaxBlade_Ability21RegardAsInsert</a>",
          "stackType": "Replace",
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
                  "typeToExtend": "Skill",
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
                  "typeToExtend": "Skill",
                  "extendTypeTo": "Follow-up"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1247337710\">G_MortenaxBlade_Debuff_ToEnemy</a>[<span class=\"descriptionNumberColor\">Balefire Bind</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "DEF_DOWN"
          ],
          "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, and DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
          "type": "Debuff",
          "effectName": "Balefire Bind",
          "statusName": "Balefire Bind",
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
                    "operator": "Variables[0] (MDF_PropertyValue) || INVERT || RETURN",
                    "displayLines": "-MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
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
                    "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                    "displayLines": "MDF_PropertyValue2",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2006654037\">G_MortenaxBlade_Super_ToMember</a>",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1247337710\">G_MortenaxBlade_Debuff_ToEnemy</a>[<span class=\"descriptionNumberColor\">Balefire Bind</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    },
                    "MDF_PropertyValue2": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  }
                },
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "G_EnergyCount",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-19531616\">G_MortenaxBlade_Ability03_Bonus</a>",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
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
                    "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                    "displayLines": "MDF_PropertyValue2",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-110394750\">G_MortenaxBlade_BPNeedHP</a>",
          "stackType": "ReplaceByCaster",
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
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2094246819\">G_MortenaxBlade_BanBP</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2094246819\">G_MortenaxBlade_BanBP</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2094246819\">G_MortenaxBlade_BanBP</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2094246819\">G_MortenaxBlade_BanBP</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Get Revived [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2094246819\">G_MortenaxBlade_BanBP</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2094246819\">G_MortenaxBlade_BanBP</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-476778637\">G_MortenaxBlade_Super</a>[<span class=\"descriptionNumberColor\">Infinite Fury</span>]",
          "stackType": "ReplaceByCaster",
          "description": "CRIT Rate increases by <span class=\"descriptionNumberColor\">#Skill03_P2_AddedCriticalChance</span> and CRIT DMG increases by <span class=\"descriptionNumberColor\">#Skill03_P3_AddedCriticalDamageRatio</span>.",
          "type": "Buff",
          "effectName": "Infinite Fury",
          "statusName": "Infinite Fury",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-110394750\">G_MortenaxBlade_BPNeedHP</a>",
              "haloStatus": true
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2006654037\">G_MortenaxBlade_Super_ToMember</a>",
              "haloStatus": true
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1823034258\">G_MortenaxBlade_PointB2</a>[<span class=\"descriptionNumberColor\">Soul, Tempered ad Mortem</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Soul, Tempered ad Mortem"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (10) || RETURN",
                  "displayLines": "10",
                  "constants": [],
                  "variables": [
                    10
                  ]
                },
                "MDF_PropertyValue2": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                },
                "MDF_PropertyValue3": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]] - {{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1123291765\">G_MortenaxBlade_PointB3_DamageUp_NoWarlock_ToOtherMember</a>[<span class=\"descriptionNumberColor\">Heart, Refined ad Infinitum</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Heart, Refined ad Infinitum"
                  },
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 4,
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectables}}.[[removeMemosprite]] - {{Caster}}"
                    },
                    "conditions": {
                      "name": "Target is Pathstrider",
                      "path": [
                        "Nihility"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    "invertCondition": true
                  }
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
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
              "modifier": "<a class=\"gModGreen\" id=\"1420064965\">G_MortenaxBlade_PointB3_DamageUp_NoWarlock_ToSelf</a>[<span class=\"descriptionNumberColor\">Heart, Refined ad Infinitum</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Heart, Refined ad Infinitum"
                  },
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 4,
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectables}}.[[removeMemosprite]] - {{Caster}}"
                    },
                    "conditions": {
                      "name": "Target is Pathstrider",
                      "path": [
                        "Nihility"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    "invertCondition": true
                  }
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.5) || Variables[1] (0.75) || ADD || RETURN",
                  "displayLines": "(0.5 + 0.75)",
                  "constants": [],
                  "variables": [
                    0.5,
                    0.75
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"917600023\">G_MortenaxBlade_PointB3_DamageUp_Warlock_ToAllLT</a>[<span class=\"descriptionNumberColor\">Heart, Refined ad Infinitum</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Heart, Refined ad Infinitum"
                  },
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 4,
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectables}}.[[removeMemosprite]] - {{Caster}}"
                    },
                    "conditions": {
                      "name": "Target is Pathstrider",
                      "path": [
                        "Nihility"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  }
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                },
                "MDF_PropertyValue2": {
                  "operator": "Variables[0] (0.75) || RETURN",
                  "displayLines": "0.75",
                  "constants": [],
                  "variables": [
                    0.75
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]] - {{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1123291765\">G_MortenaxBlade_PointB3_DamageUp_NoWarlock_ToOtherMember</a>[<span class=\"descriptionNumberColor\">Heart, Refined ad Infinitum</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Heart, Refined ad Infinitum"
                  },
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectables}}.[[removeMemosprite]] - {{Caster}}"
                    },
                    "conditions": {
                      "name": "Target is Pathstrider",
                      "path": [
                        "Nihility"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    "invertCondition": true
                  }
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.5) || Variables[1] (0.5) || ADD || RETURN",
                  "displayLines": "(0.5 + 0.5)",
                  "constants": [],
                  "variables": [
                    0.5,
                    0.5
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
              "modifier": "<a class=\"gModGreen\" id=\"1420064965\">G_MortenaxBlade_PointB3_DamageUp_NoWarlock_ToSelf</a>[<span class=\"descriptionNumberColor\">Heart, Refined ad Infinitum</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Heart, Refined ad Infinitum"
                  },
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectables}}.[[removeMemosprite]] - {{Caster}}"
                    },
                    "conditions": {
                      "name": "Target is Pathstrider",
                      "path": [
                        "Nihility"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    "invertCondition": true
                  }
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.5) || Variables[1] (0.5) || ADD || Variables[2] (0.75) || ADD || RETURN",
                  "displayLines": "((0.5 + 0.5) + 0.75)",
                  "constants": [],
                  "variables": [
                    0.5,
                    0.5,
                    0.75
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"917600023\">G_MortenaxBlade_PointB3_DamageUp_Warlock_ToAllLT</a>[<span class=\"descriptionNumberColor\">Heart, Refined ad Infinitum</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Heart, Refined ad Infinitum"
                  },
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectables}}.[[removeMemosprite]] - {{Caster}}"
                    },
                    "conditions": {
                      "name": "Target is Pathstrider",
                      "path": [
                        "Nihility"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  }
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.5) || Variables[1] (0.5) || ADD || RETURN",
                  "displayLines": "(0.5 + 0.5)",
                  "constants": [],
                  "variables": [
                    0.5,
                    0.5
                  ]
                },
                "MDF_PropertyValue2": {
                  "operator": "Variables[0] (0.75) || RETURN",
                  "displayLines": "0.75",
                  "constants": [],
                  "variables": [
                    0.75
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
              "modifier": "<a class=\"gModGreen\" id=\"406254526\">G_MortenaxBlade_Eidolon1_BEDelay</a>",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1949237298\">G_MortenaxBlade_Eidolon1_EnermyDebuff</a>[<span class=\"descriptionNumberColor\">Ere My Death, I Stood Unmade</span>]",
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
              "modifier": "<a class=\"gModGreen\" id=\"180956240\">G_MortenaxBlade_Eidolon6_ExtraEP</a>",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              }
            }
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{BattleEvent96217}}"
                  },
                  "ignoreHPLossTriggers": true,
                  "ignoreDeathTriggers": true
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (G_EnergyCount) || RETURN",
                    "displayLines": "G_EnergyCount",
                    "constants": [],
                    "variables": [
                      "G_EnergyCount"
                    ]
                  },
                  "priorState": "Disable"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-19531616\">G_MortenaxBlade_Ability03_Bonus</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"66427170\">G_MortenaxBlade_AbilityChange01</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2094246819\">G_MortenaxBlade_BanBP</a>"
                },
                {
                  "name": "Automatically use Ultimate",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "enable": false
                },
                {
                  "name": "Add Battle Event",
                  "teamName": "Player Team",
                  "eventID": 96217,
                  "variables": {
                    "BattleEvent_BaseSpeed": {
                      "operator": "Variables[0] (70) || RETURN",
                      "displayLines": "70",
                      "constants": [],
                      "variables": [
                        70
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-19531616\">G_MortenaxBlade_Ability03_Bonus</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
                      ]
                    },
                    "MDF_PropertyValue2": {
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
            },
            {
              "eventTrigger": "Waiting in Limbo [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "MortenaxBlade_PassiveAbility_Exit",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "CharacterReviveSelf",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Being Attacked [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Soul, Tempered ad Mortem"
                      },
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
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "G_EnergyCount",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1247337710\">G_MortenaxBlade_Debuff_ToEnemy</a>[<span class=\"descriptionNumberColor\">Balefire Bind</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.3) || RETURN",
                          "displayLines": "0.3",
                          "constants": [],
                          "variables": [
                            0.3
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      }
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
                    "name": "Skill Name",
                    "skillName": "Skill21"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-470994946\">G_MortenaxBlade_Ability21RegardAsInsert</a>"
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
                    "name": "Skill Name",
                    "skillName": "Skill21"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-470994946\">G_MortenaxBlade_Ability21RegardAsInsert</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "G_EnergyCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "operator": "Variables[0] (G_EPMax) || RETURN",
                    "displayLines": "G_EPMax",
                    "constants": [],
                    "variables": [
                      "G_EPMax"
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (G_EnergyCount) || RETURN",
                        "displayLines": "G_EnergyCount",
                        "constants": [],
                        "variables": [
                          "G_EnergyCount"
                        ]
                      },
                      "priorState": "Normal"
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (G_EnergyCount) || RETURN",
                        "displayLines": "G_EnergyCount",
                        "constants": [],
                        "variables": [
                          "G_EnergyCount"
                        ]
                      },
                      "priorState": "Normal"
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (G_EPMax) || RETURN",
                    "displayLines": "G_EPMax",
                    "constants": [],
                    "variables": [
                      "G_EPMax"
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (G_EnergyCount) || RETURN",
                        "displayLines": "G_EnergyCount",
                        "constants": [],
                        "variables": [
                          "G_EnergyCount"
                        ]
                      },
                      "priorState": "Active"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"349219986\">MortenaxBlade_TrytoPlayAutoBP</a>"
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"349219986\">MortenaxBlade_TrytoPlayAutoBP</a>"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (G_EnergyCount) || RETURN",
                        "displayLines": "G_EnergyCount",
                        "constants": [],
                        "variables": [
                          "G_EnergyCount"
                        ]
                      },
                      "priorState": "Active"
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
    "MortenaxBlade_MortenaxBlade_Eidolon2": {
      "fileName": "MortenaxBlade_MortenaxBlade_Eidolon2",
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
          "modifier": "<a class=\"gModGreen\" id=\"1805989258\">MortenaxBlade_Eidolon2</a>",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.75) || RETURN",
              "displayLines": "0.75",
              "constants": [],
              "variables": [
                0.75
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1805989258\">MortenaxBlade_Eidolon2</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "MDF_PropertyValue"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)}}.[[removeBattleEvents]] - {{Player Team All(with Unselectable)}}.[[getMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1514536546\">G_MortenaxBlade_Eidolon2_ToMember</a>[<span class=\"descriptionNumberColor\">Ash Was My Heart, Yet the Flame Stayed</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)}}.[[getMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1517379816\">G_MortenaxBlade_Eidolon2_ToOtherMember</a>[<span class=\"descriptionNumberColor\">Ash Was My Heart, Yet the Flame Stayed</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
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
    "MortenaxBlade_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "MortenaxBlade_LocalPlayer_StandardAbility_AttackBreak",
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
    "MortenaxBlade_LocalPlayer_MortenaxBlade_TechniqueUsage": {
      "fileName": "MortenaxBlade_LocalPlayer_MortenaxBlade_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            "Deleted bullshit",
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
                  "ID": "150701(SkillMaze)"
                }
              ],
              "entryTargetType": "AllHitTarget"
            }
          ],
          "failed": [
            "Deleted bullshit",
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
                  "ID": "150701(SkillMaze)"
                }
              ],
              "entryTargetType": "AllHitTarget"
            }
          ]
        }
      ],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "MortenaxBlade_LocalPlayer_MortenaxBlade_NormalAtk01": {
      "fileName": "MortenaxBlade_LocalPlayer_MortenaxBlade_NormalAtk01",
      "skillTrigger": "NormalAtk",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            "Deleted bullshit"
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
            }
          ]
        },
        {
          "name": "Overworld Attack Instance"
        }
      ],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "MortenaxBlade_MortenaxBlade_TechniqueInLevel": {
      "fileName": "MortenaxBlade_MortenaxBlade_TechniqueInLevel",
      "childAbilityList": [
        "MortenaxBlade_MortenaxBlade_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        20,
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
          "modifier": "<a class=\"gModGreen\" id=\"929084302\">MortenaxBlade_TechniqueUsage</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1694352168\">MortenaxBlade_TechniqueUsage_DamageReduce</a>[<span class=\"descriptionNumberColor\">Corpus Impervius</span>]",
          "stackType": "ReplaceByCaster",
          "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">#SkillMaze_P1_DamageReduce</span>.",
          "type": "Buff",
          "statusName": "Corpus Impervius",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
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
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__929084302\">MortenaxBlade_TechniqueUsage</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1488319040\">Standard_CTRL_Taunt</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
                      "duration": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1694352168\">MortenaxBlade_TechniqueUsage_DamageReduce</a>[<span class=\"descriptionNumberColor\">Corpus Impervius</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.9) || RETURN",
                          "displayLines": "0.9",
                          "constants": [],
                          "variables": [
                            0.9
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
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
    "MortenaxBlade_MortenaxBlade_PassiveAbility_NormalExit": {
      "fileName": "MortenaxBlade_MortenaxBlade_PassiveAbility_NormalExit",
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
            "flagName": "STAT_CTRL",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-476778637\">G_MortenaxBlade_Super</a>[<span class=\"descriptionNumberColor\">Infinite Fury</span>]"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (G_EnergyCount) || RETURN",
                "displayLines": "G_EnergyCount",
                "constants": [],
                "variables": [
                  "G_EnergyCount"
                ]
              },
              "priorState": "Disable"
            },
            {
              "name": "Automatically use Ultimate",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"66427170\">G_MortenaxBlade_AbilityChange01</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2094246819\">G_MortenaxBlade_BanBP</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Bone, Hardened ad Nauseam"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "Energy%",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (0.75) || RETURN",
                      "displayLines": "0.75",
                      "constants": [],
                      "variables": [
                        0.75
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_MaxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
                  "context": "ContextAbility"
                },
                {
                  "name": "Update Energy Value",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (_MaxSP) || Variables[1] (0.75) || MUL || RETURN",
                    "displayLines": "(_MaxSP * 0.75)",
                    "constants": [],
                    "variables": [
                      "_MaxSP",
                      0.75
                    ]
                  },
                  "adjustment": "Set"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-476778637\">G_MortenaxBlade_Super</a>[<span class=\"descriptionNumberColor\">Infinite Fury</span>]"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (G_EnergyCount) || RETURN",
                "displayLines": "G_EnergyCount",
                "constants": [],
                "variables": [
                  "G_EnergyCount"
                ]
              },
              "priorState": "Disable"
            },
            {
              "name": "Automatically use Ultimate",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"66427170\">G_MortenaxBlade_AbilityChange01</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2094246819\">G_MortenaxBlade_BanBP</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Bone, Hardened ad Nauseam"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "Energy%",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (0.75) || RETURN",
                      "displayLines": "0.75",
                      "constants": [],
                      "variables": [
                        0.75
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_MaxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
                  "context": "ContextAbility"
                },
                {
                  "name": "Update Energy Value",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (_MaxSP) || Variables[1] (0.75) || MUL || RETURN",
                    "displayLines": "(_MaxSP * 0.75)",
                    "constants": [],
                    "variables": [
                      "_MaxSP",
                      0.75
                    ]
                  },
                  "adjustment": "Set"
                }
              ]
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "MortenaxBlade_MortenaxBlade_PassiveAbility_Exit": {
      "fileName": "MortenaxBlade_MortenaxBlade_PassiveAbility_Exit",
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
          "modifier": "<a class=\"gModGreen\" id=\"-476778637\">G_MortenaxBlade_Super</a>[<span class=\"descriptionNumberColor\">Infinite Fury</span>]"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (G_EnergyCount) || RETURN",
            "displayLines": "G_EnergyCount",
            "constants": [],
            "variables": [
              "G_EnergyCount"
            ]
          },
          "priorState": "Disable"
        },
        {
          "name": "Automatically use Ultimate",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"66427170\">G_MortenaxBlade_AbilityChange01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2094246819\">G_MortenaxBlade_BanBP</a>"
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "silent": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value1": "CurrentHP%",
            "compareType": "<=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "healer": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "healPercent": {
                "operator": "Variables[0] (0.5) || RETURN",
                "displayLines": "0.5",
                "constants": [],
                "variables": [
                  0.5
                ]
              },
              "formula": "Heal from Target MaxHP"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Trace Activated",
                "conditionList": "Bone, Hardened ad Nauseam"
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "Energy%",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (0.75) || RETURN",
                  "displayLines": "0.75",
                  "constants": [],
                  "variables": [
                    0.75
                  ]
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_MaxSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
              "context": "ContextAbility"
            },
            {
              "name": "Update Energy Value",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (_MaxSP) || Variables[1] (0.75) || MUL || RETURN",
                "displayLines": "(_MaxSP * 0.75)",
                "constants": [],
                "variables": [
                  "_MaxSP",
                  0.75
                ]
              },
              "adjustment": "Set"
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "MortenaxBlade_MortenaxBlade_PassiveAbility": {
      "fileName": "MortenaxBlade_MortenaxBlade_PassiveAbility",
      "childAbilityList": [
        "MortenaxBlade_MortenaxBlade_PassiveAbility",
        "MortenaxBlade_MortenaxBlade_PassiveAbility_Exit",
        "MortenaxBlade_MortenaxBlade_PassiveAbility_NormalExit"
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
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "G_EnergyCount",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"531384583\">MortenaxBlade_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1979209612\">G_MortenaxBlade_EnergyCountListen</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "G_EPMax",
              "value": {
                "operator": "Variables[0] (7) || RETURN",
                "displayLines": "7",
                "constants": [],
                "variables": [
                  7
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "G_EPMax",
              "value": {
                "operator": "Variables[0] (9) || RETURN",
                "displayLines": "9",
                "constants": [],
                "variables": [
                  9
                ]
              }
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (G_EnergyCount) || RETURN",
            "displayLines": "G_EnergyCount",
            "constants": [],
            "variables": [
              "G_EnergyCount"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (G_EPMax) || RETURN",
            "displayLines": "G_EPMax",
            "constants": [],
            "variables": [
              "G_EPMax"
            ]
          },
          "assignState": "True",
          "priorState": "Disable",
          "bar#": 2
        },
        {
          "name": "Automatically use Ultimate",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2094246819\">G_MortenaxBlade_BanBP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1604386325\">MortenaxBlade_LoseHPPreShow</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Bone, Hardened ad Nauseam"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-356958636\">MortenaxBlade_PointB1_StockSpValue</a>",
              "valuePerStack": {
                "_PointB1_StockSpValue": {
                  "operator": "Variables[0] (80) || RETURN",
                  "displayLines": "80",
                  "constants": [],
                  "variables": [
                    80
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
              "modifier": "<a class=\"gModGreen\" id=\"-241849908\">MortenaxBlade_PointB1_ReturnSpValue</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-828664514\">G_MortenaxBlade_CheckToPlayAutoBP</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-241849908\">MortenaxBlade_PointB1_ReturnSpValue</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
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
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_CurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MortenaxBlade_00_EntityMaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Temp_Return_SP",
                      "value": {
                        "operator": "Variables[0] (MortenaxBlade_00_EntityStockSP) || RETURN",
                        "displayLines": "MortenaxBlade_00_EntityStockSP",
                        "constants": [],
                        "variables": [
                          "MortenaxBlade_00_EntityStockSP"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MortenaxBlade_00_EntityStockSP",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1776434077\">MortenaxBlade_PointB1_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Bone, Hardened ad Nauseam</span>]"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_Temp_Return_SP) || RETURN",
                        "displayLines": "_Temp_Return_SP",
                        "constants": [],
                        "variables": [
                          "_Temp_Return_SP"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1776434077\">MortenaxBlade_PointB1_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Bone, Hardened ad Nauseam</span>]",
          "counter": 1,
          "stackType": "ReplaceByCaster",
          "description": "<span class=\"descriptionNumberColor\">MortenaxBlade_00_EntityStockSPForShow</span> overflow Energy accumulated.",
          "type": "Other",
          "statusName": "Bone, Hardened ad Nauseam",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MortenaxBlade_00_EntityStockSPForShow",
                    "compareType": ">",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-1776434077\">MortenaxBlade_PointB1_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Bone, Hardened ad Nauseam</span>]",
                      "value": {
                        "operator": "Variables[0] (WHOLE) || Variables[1] (MortenaxBlade_00_EntityStockSPForShow) || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(MortenaxBlade_00_EntityStockSPForShow)",
                        "constants": [],
                        "variables": [
                          "WHOLE",
                          "MortenaxBlade_00_EntityStockSPForShow"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-1776434077\">MortenaxBlade_PointB1_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Bone, Hardened ad Nauseam</span>]",
                      "variableName": "MortenaxBlade_00_EntityStockSPForShow",
                      "value": 1
                    },
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-1776434077\">MortenaxBlade_PointB1_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Bone, Hardened ad Nauseam</span>]",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-356958636\">MortenaxBlade_PointB1_StockSpValue</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "_PointB1_StockSpValue"
          ],
          "execute": [
            {
              "eventTrigger": "Energy Change",
              "execute": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "_SPChangeValue"
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
                        "value1": "Energy%",
                        "compareType": ">=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_SPChangeValue",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "_SPChangeValueRaw",
                  "type": "RawDelta"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_SPChangeValue",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (_SPChangeValueRaw) || RETURN",
                      "displayLines": "_SPChangeValueRaw",
                      "constants": [],
                      "variables": [
                        "_SPChangeValueRaw"
                      ]
                    }
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_SPChangeValueRaw",
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
                          "variableName": "_PointB1_EntityCurrentSP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "_PointB1_EntityCurrentSP",
                          "value": {
                            "operator": "Variables[0] (_PointB1_EntityCurrentSP) || Variables[1] (_SPChangeValue) || SUB || Variables[2] (_SPChangeValueRaw) || ADD || RETURN",
                            "displayLines": "((_PointB1_EntityCurrentSP - _SPChangeValue) + _SPChangeValueRaw)",
                            "constants": [],
                            "variables": [
                              "_PointB1_EntityCurrentSP",
                              "_SPChangeValue",
                              "_SPChangeValueRaw"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MortenaxBlade_00_EntityMaxSP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "_PointB1_EntityCurrentSP",
                            "compareType": ">",
                            "value2": {
                              "operator": "Variables[0] (MortenaxBlade_00_EntityMaxSP) || RETURN",
                              "displayLines": "MortenaxBlade_00_EntityMaxSP",
                              "constants": [],
                              "variables": [
                                "MortenaxBlade_00_EntityMaxSP"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "variableName": "MortenaxBlade_00_EntityStockSP",
                              "value": {
                                "operator": "Variables[0] (MortenaxBlade_00_EntityStockSP) || Variables[1] (_PointB1_EntityCurrentSP) || ADD || Variables[2] (MortenaxBlade_00_EntityMaxSP) || SUB || RETURN",
                                "displayLines": "((MortenaxBlade_00_EntityStockSP + _PointB1_EntityCurrentSP) - MortenaxBlade_00_EntityMaxSP)",
                                "constants": [],
                                "variables": [
                                  "MortenaxBlade_00_EntityStockSP",
                                  "_PointB1_EntityCurrentSP",
                                  "MortenaxBlade_00_EntityMaxSP"
                                ]
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "MortenaxBlade_00_EntityStockSP",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (_PointB1_StockSpValue) || RETURN",
                                  "displayLines": "_PointB1_StockSpValue",
                                  "constants": [],
                                  "variables": [
                                    "_PointB1_StockSpValue"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "MortenaxBlade_00_EntityStockSP",
                                  "value": {
                                    "operator": "Variables[0] (_PointB1_StockSpValue) || RETURN",
                                    "displayLines": "_PointB1_StockSpValue",
                                    "constants": [],
                                    "variables": [
                                      "_PointB1_StockSpValue"
                                    ]
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
                                "modifier": "<a class=\"gModGreen\" id=\"-1776434077\">MortenaxBlade_PointB1_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Bone, Hardened ad Nauseam</span>]"
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable with Copy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1776434077\">MortenaxBlade_PointB1_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Bone, Hardened ad Nauseam</span>]",
                                  "variable": "MortenaxBlade_00_EntityStockSPForShow",
                                  "target2": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variable2": "_Current_Show_Value"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "value1": "_Current_Show_Value",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (MortenaxBlade_00_EntityStockSP) || RETURN",
                                      "displayLines": "MortenaxBlade_00_EntityStockSP",
                                      "constants": [],
                                      "variables": [
                                        "MortenaxBlade_00_EntityStockSP"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-1776434077\">MortenaxBlade_PointB1_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Bone, Hardened ad Nauseam</span>]",
                                      "valuePerStack": {
                                        "MortenaxBlade_EntityStockSPForShow": {
                                          "operator": "Variables[0] (WHOLE) || Variables[1] (MortenaxBlade_00_EntityStockSP) || PARAM_1 || FUNCTION || RETURN",
                                          "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(MortenaxBlade_00_EntityStockSP)",
                                          "constants": [],
                                          "variables": [
                                            "WHOLE",
                                            "MortenaxBlade_00_EntityStockSP"
                                          ]
                                        }
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
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1776434077\">MortenaxBlade_PointB1_ExceedSpStatus</a>[<span class=\"descriptionNumberColor\">Bone, Hardened ad Nauseam</span>]",
                                  "valuePerStack": {
                                    "MortenaxBlade_EntityStockSPForShow": {
                                      "operator": "Variables[0] (WHOLE) || Variables[1] (MortenaxBlade_00_EntityStockSP) || PARAM_1 || FUNCTION || RETURN",
                                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(MortenaxBlade_00_EntityStockSP)",
                                      "constants": [],
                                      "variables": [
                                        "WHOLE",
                                        "MortenaxBlade_00_EntityStockSP"
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
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1604386325\">MortenaxBlade_LoseHPPreShow</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
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
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Update UI Preview",
                      "show": "Show",
                      "skillType": [
                        "Skill"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "previewType": null,
                      "previewValue": {
                        "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.1) || MUL || RETURN",
                        "displayLines": "(MDF_MaxHP * 0.1)",
                        "constants": [],
                        "variables": [
                          "MDF_MaxHP",
                          0.1
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
          "for": "<a class=\"gModGreen\" id=\"mod__531384583\">MortenaxBlade_Passive</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Bone, Hardened ad Nauseam"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Energy%",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (0.75) || RETURN",
                          "displayLines": "0.75",
                          "constants": [],
                          "variables": [
                            0.75
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_MaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "Update Energy Value",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_MaxSP) || Variables[1] (0.75) || MUL || RETURN",
                        "displayLines": "(_MaxSP * 0.75)",
                        "constants": [],
                        "variables": [
                          "_MaxSP",
                          0.75
                        ]
                      },
                      "adjustment": "Set"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Leave Battle"
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
    "MortenaxBlade_MortenaxBlade_Ability31_Part02": {
      "fileName": "MortenaxBlade_MortenaxBlade_Ability31_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
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
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (1.5) || Variables[1] (3.5) || MUL || RETURN",
                  "displayLines": "(1.5 * 3.5)",
                  "constants": [],
                  "variables": [
                    1.5,
                    3.5
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "instanceTag": "DamageTag_SPRen_Skill31",
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
                  "operator": "Variables[0] (3.5) || RETURN",
                  "displayLines": "3.5",
                  "constants": [],
                  "variables": [
                    3.5
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "instanceTag": "DamageTag_SPRen_Skill31",
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "MortenaxBlade_MortenaxBlade_Ability31_Part01": {
      "fileName": "MortenaxBlade_MortenaxBlade_Ability31_Part01",
      "childAbilityList": [
        "MortenaxBlade_MortenaxBlade_Ability31_Camera",
        "MortenaxBlade_MortenaxBlade_Ability31_EnterReady",
        "MortenaxBlade_MortenaxBlade_Ability31_Part01",
        "MortenaxBlade_MortenaxBlade_Ability31_Part02"
      ],
      "skillTrigger": "Skill31",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        20,
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
          "ability": "MortenaxBlade_Ability31_Part02",
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
    "MortenaxBlade_MortenaxBlade_Ability31_EnterReady": {
      "fileName": "MortenaxBlade_MortenaxBlade_Ability31_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Auto-Battle",
            "invertCondition": true
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "MortenaxBlade_MortenaxBlade_Ability03_Part02": {
      "fileName": "MortenaxBlade_MortenaxBlade_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1247337710\">G_MortenaxBlade_Debuff_ToEnemy</a>[<span class=\"descriptionNumberColor\">Balefire Bind</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "MDF_PropertyValue2": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "G_ExSkill21_Allowed",
          "value": 1
        },
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (0.2) || RETURN",
            "displayLines": "0.2",
            "constants": [],
            "variables": [
              0.2
            ]
          },
          "consumeFloor": 1,
          "attackType": "Ultra"
        },
        {
          "name": "Update Displayed Energy Bar",
          "priorState": "Normal"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-476778637\">G_MortenaxBlade_Super</a>[<span class=\"descriptionNumberColor\">Infinite Fury</span>]"
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
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"349219986\">MortenaxBlade_TrytoPlayAutoBP</a>"
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "MortenaxBlade_MortenaxBlade_Ability03_Part01": {
      "fileName": "MortenaxBlade_MortenaxBlade_Ability03_Part01",
      "childAbilityList": [
        "MortenaxBlade_MortenaxBlade_Ability03_Camera",
        "MortenaxBlade_MortenaxBlade_Ability03_EnterReady",
        "MortenaxBlade_MortenaxBlade_Ability03_Part01",
        "MortenaxBlade_MortenaxBlade_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
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
          "ability": "MortenaxBlade_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "MortenaxBlade_MortenaxBlade_Ability03_EnterReady": {
      "fileName": "MortenaxBlade_MortenaxBlade_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "MortenaxBlade_MortenaxBlade_Ability21_Part02": {
      "fileName": "MortenaxBlade_MortenaxBlade_Ability21_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "G_ExSkill21_Allowed",
          "value": 0
        },
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (0.1) || RETURN",
            "displayLines": "0.1",
            "constants": [],
            "variables": [
              0.1
            ]
          },
          "consumeFloor": 1,
          "attackType": "BPSkill"
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "G_EnergyCount",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (G_EPMax) || INVERT || RETURN",
            "displayLines": "-G_EPMax",
            "constants": [],
            "variables": [
              "G_EPMax"
            ]
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (0.72) || RETURN",
              "displayLines": "0.72",
              "constants": [],
              "variables": [
                0.72
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "instanceTag": "DamageTag_MortenaxBlade_Passive",
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
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
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (0.24) || RETURN",
                      "displayLines": "0.24",
                      "constants": [],
                      "variables": [
                        0.24
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || RETURN",
                      "displayLines": "ST Toughness Value",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value"
                      ]
                    },
                    "instanceTag": "DamageTag_MortenaxBlade_Passive",
                    "Tags": null
                  }
                }
              ]
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
    "MortenaxBlade_MortenaxBlade_Ability21_Part01": {
      "fileName": "MortenaxBlade_MortenaxBlade_Ability21_Part01",
      "childAbilityList": [
        "MortenaxBlade_MortenaxBlade_Ability21_Part01",
        "MortenaxBlade_MortenaxBlade_Ability21_Part02"
      ],
      "skillTrigger": "Skill21",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        5,
        10,
        0
      ],
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "All Karma Comes Due"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "MortenaxBlade_Ability21_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "MortenaxBlade_MortenaxBlade_Ability02_Part02": {
      "fileName": "MortenaxBlade_MortenaxBlade_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "#CL_State",
          "value": 1
        },
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (0.1) || RETURN",
            "displayLines": "0.1",
            "constants": [],
            "variables": [
              0.1
            ]
          },
          "consumeFloor": 1,
          "attackType": "BPSkill"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (0.72) || RETURN",
              "displayLines": "0.72",
              "constants": [],
              "variables": [
                0.72
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
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
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (0.24) || RETURN",
                      "displayLines": "0.24",
                      "constants": [],
                      "variables": [
                        0.24
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || RETURN",
                      "displayLines": "ST Toughness Value",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value"
                      ]
                    },
                    "Tags": null
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "#CL_State",
          "value": 0
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "MortenaxBlade_MortenaxBlade_Ability02_Part01": {
      "fileName": "MortenaxBlade_MortenaxBlade_Ability02_Part01",
      "childAbilityList": [
        "MortenaxBlade_MortenaxBlade_Ability02_Camera",
        "MortenaxBlade_MortenaxBlade_Ability02_Part01",
        "MortenaxBlade_MortenaxBlade_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        5,
        10,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "MortenaxBlade_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "MortenaxBlade_MortenaxBlade_Ability11_Part02": {
      "fileName": "MortenaxBlade_MortenaxBlade_Ability11_Part02",
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1488319040\">Standard_CTRL_Taunt</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
          "duration": 1
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "MortenaxBlade_MortenaxBlade_Ability11_Part01": {
      "fileName": "MortenaxBlade_MortenaxBlade_Ability11_Part01",
      "childAbilityList": [
        "MortenaxBlade_MortenaxBlade_Ability11_Camera",
        "MortenaxBlade_MortenaxBlade_Ability11_Part01",
        "MortenaxBlade_MortenaxBlade_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": 20,
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
          "ability": "MortenaxBlade_Ability11_Part02",
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
    "MortenaxBlade_MortenaxBlade_Ability01_Part02": {
      "fileName": "MortenaxBlade_MortenaxBlade_Ability01_Part02",
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1488319040\">Standard_CTRL_Taunt</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
          "duration": 1
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "MortenaxBlade_MortenaxBlade_Ability01_Part01": {
      "fileName": "MortenaxBlade_MortenaxBlade_Ability01_Part01",
      "childAbilityList": [
        "MortenaxBlade_MortenaxBlade_Ability01_Camera",
        "MortenaxBlade_MortenaxBlade_Ability01_Part01",
        "MortenaxBlade_MortenaxBlade_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 20,
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
          "ability": "MortenaxBlade_Ability01_Part02",
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
    "MortenaxBlade_Functions": {
      "fileName": "MortenaxBlade_Functions",
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
          "functionName": "<a class=\"gTempYellow\" id=\"fun__349219986\">MortenaxBlade_TrytoPlayAutoBP</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "G_EnergyCount",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (G_EPMax) || RETURN",
                      "displayLines": "G_EPMax",
                      "constants": [],
                      "variables": [
                        "G_EPMax"
                      ]
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-476778637\">G_MortenaxBlade_Super</a>[<span class=\"descriptionNumberColor\">Infinite Fury</span>]"
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
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "G_ExSkill21_Allowed",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2094246819\">G_MortenaxBlade_BanBP</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": "MortenaxBlade_Passive",
                  "skillIndex": 3,
                  "forceAction": true,
                  "conditions": {
                    "name": "Insert Ability Condition",
                    "type": "SameTagInsertUnusedCount",
                    "typeValue": 1
                  },
                  "castTarget": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "afterInjection": [],
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "ignoreCost": true,
                  "condition": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-476778637\">G_MortenaxBlade_Super</a>[<span class=\"descriptionNumberColor\">Infinite Fury</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "G_EnergyCount",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (G_EPMax) || RETURN",
                          "displayLines": "G_EPMax",
                          "constants": [],
                          "variables": [
                            "G_EPMax"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 1
                      }
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-476778637\">G_MortenaxBlade_Super</a>[<span class=\"descriptionNumberColor\">Infinite Fury</span>]"
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (G_EnergyCount) || RETURN",
                        "displayLines": "G_EnergyCount",
                        "constants": [],
                        "variables": [
                          "G_EnergyCount"
                        ]
                      },
                      "priorState": "Normal"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (G_EnergyCount) || RETURN",
                        "displayLines": "G_EnergyCount",
                        "constants": [],
                        "variables": [
                          "G_EnergyCount"
                        ]
                      },
                      "priorState": "Disable"
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
    "MortenaxBlade_BE_BattleEvents": {
      "fileName": "MortenaxBlade_BE_BattleEvents",
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
          "ID": 96217,
          "team": "Player Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEventAbility_MortenaxBlade_00"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevelEvent": true,
          "barType": 1,
          "actionDescription": "Mortenax Blade enters the \"Infinite Fury\" state, unlocking his Skill, gaining an Enhanced Basic ATK and the new Ultimate \"Tenax Per Ignem,\" and simultaneously increasing this unit's CRIT Rate and CRIT DMG until the start of \"Infinite Fury's\" countdown turn."
        }
      ],
      "references": []
    }
  }
}