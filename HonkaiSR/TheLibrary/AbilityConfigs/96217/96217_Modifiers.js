const configAbility = {
  "fileName": "96217_Modifiers",
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
                    "operator": "Variables[0] (UnusedUnderThisBase_1898) || RETURN",
                    "displayLines": "UnusedUnderThisBase_1898",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_1898"
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
          "eventTrigger": "Turn [Pre-action Phase]",
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
          "eventTrigger": "New Enemy Wave",
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
              "skillSlot": "Basic ATK",
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
              "skillSlot": "Basic ATK",
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
                      "operator": "Variables[0] (UnusedUnderThisBase_1904) || RETURN",
                      "displayLines": "UnusedUnderThisBase_1904",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_1904"
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
        "STAT_DefenceDown"
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
                "operator": "Variables[0] (UnusedUnderThisBase_1877) || RETURN",
                "displayLines": "UnusedUnderThisBase_1877",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_1877"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (UnusedUnderThisBase_1880) || RETURN",
                  "displayLines": "UnusedUnderThisBase_1880",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_1880"
                  ]
                },
                "MDF_PropertyValue2": {
                  "operator": "Variables[0] (UnusedUnderThisBase_1881) || RETURN",
                  "displayLines": "UnusedUnderThisBase_1881",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_1881"
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
            "conditionList": "PointB2"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_6019) || RETURN",
              "displayLines": "UnusedUnderThisBase_6019",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_6019"
              ]
            },
            "MDF_PropertyValue2": {
              "operator": "Variables[0] (UnusedUnderThisBase_4444) || RETURN",
              "displayLines": "UnusedUnderThisBase_4444",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_4444"
              ]
            },
            "MDF_PropertyValue3": {
              "operator": "Variables[0] (UnusedUnderThisBase_1902) || RETURN",
              "displayLines": "UnusedUnderThisBase_1902",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_1902"
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
                "conditionList": "PointB3"
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
              "operator": "Variables[0] (UnusedUnderThisBase_1884) || RETURN",
              "displayLines": "UnusedUnderThisBase_1884",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_1884"
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
                "conditionList": "PointB3"
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
              "operator": "Variables[0] (UnusedUnderThisBase_1884) || Variables[1] (UnusedUnderThisBase_1885) || ADD || RETURN",
              "displayLines": "(UnusedUnderThisBase_1884 + UnusedUnderThisBase_1885)",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_1884",
                "UnusedUnderThisBase_1885"
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
                "conditionList": "PointB3"
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
              "operator": "Variables[0] (UnusedUnderThisBase_1884) || RETURN",
              "displayLines": "UnusedUnderThisBase_1884",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_1884"
              ]
            },
            "MDF_PropertyValue2": {
              "operator": "Variables[0] (UnusedUnderThisBase_1882) || RETURN",
              "displayLines": "UnusedUnderThisBase_1882",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_1882"
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
                "conditionList": "PointB3"
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
              "operator": "Variables[0] (UnusedUnderThisBase_1884) || Variables[1] (UnusedUnderThisBase_6709) || ADD || RETURN",
              "displayLines": "(UnusedUnderThisBase_1884 + UnusedUnderThisBase_6709)",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_1884",
                "UnusedUnderThisBase_6709"
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
                "conditionList": "PointB3"
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
              "operator": "Variables[0] (UnusedUnderThisBase_1884) || Variables[1] (UnusedUnderThisBase_6709) || ADD || Variables[2] (UnusedUnderThisBase_1885) || ADD || RETURN",
              "displayLines": "((UnusedUnderThisBase_1884 + UnusedUnderThisBase_6709) + UnusedUnderThisBase_1885)",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_1884",
                "UnusedUnderThisBase_6709",
                "UnusedUnderThisBase_1885"
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
                "conditionList": "PointB3"
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
              "operator": "Variables[0] (UnusedUnderThisBase_1884) || Variables[1] (UnusedUnderThisBase_6709) || ADD || RETURN",
              "displayLines": "(UnusedUnderThisBase_1884 + UnusedUnderThisBase_6709)",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_1884",
                "UnusedUnderThisBase_6709"
              ]
            },
            "MDF_PropertyValue2": {
              "operator": "Variables[0] (UnusedUnderThisBase_1882) || RETURN",
              "displayLines": "UnusedUnderThisBase_1882",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_1882"
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
              "operator": "Variables[0] (UnusedUnderThisBase_6705) || RETURN",
              "displayLines": "UnusedUnderThisBase_6705",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_6705"
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
                  "operator": "Variables[0] (UnusedUnderThisBase_3389) || RETURN",
                  "displayLines": "UnusedUnderThisBase_3389",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_3389"
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
                  "operator": "Variables[0] (UnusedUnderThisBase_1883) || RETURN",
                  "displayLines": "UnusedUnderThisBase_1883",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_1883"
                  ]
                },
                "MDF_PropertyValue2": {
                  "operator": "Variables[0] (UnusedUnderThisBase_1895) || RETURN",
                  "displayLines": "UnusedUnderThisBase_1895",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_1895"
                  ]
                }
              }
            }
          ]
        },
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
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "PointB2"
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
                    "operator": "Variables[0] (UnusedUnderThisBase_1877) || RETURN",
                    "displayLines": "UnusedUnderThisBase_1877",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_1877"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (UnusedUnderThisBase_1880) || RETURN",
                      "displayLines": "UnusedUnderThisBase_1880",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_1880"
                      ]
                    },
                    "MDF_PropertyValue2": {
                      "operator": "Variables[0] (UnusedUnderThisBase_1881) || RETURN",
                      "displayLines": "UnusedUnderThisBase_1881",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_1881"
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
}