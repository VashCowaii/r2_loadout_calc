const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Rappa",
  "trimCharacterName": "Rappa",
  "abilityList": [
    "Rappa_Modifiers",
    "Rappa_LocalPlayer_Rappa_Achievenment",
    "Rappa_LocalPlayer_StandardAbility_AttackBreak",
    "Rappa_LocalPlayer_Rappa_TechniqueUsage",
    "Rappa_LocalPlayer_Rappa_NormalAtk01",
    "Rappa_LocalPlayer_Rappa_TechniqueUsage_ListenInput",
    "Rappa_LocalPlayer_Rappa_TechniqueUsage_Abort",
    "Rappa_LocalPlayer_Rappa_TechniqueUsage_End",
    "Rappa_LocalPlayer_Rappa_TechniqueUsage_TriggerHitMonster",
    "Rappa_Rappa_TechniqueInLevel",
    "Rappa_Rappa_PassiveAbility01",
    "Rappa_Rappa_Ability03_SP0_Part01",
    "Rappa_Rappa_Ability03_Part02",
    "Rappa_Rappa_Ability03_Part01",
    "Rappa_Rappa_Ability03_EnterReady",
    "Rappa_Rappa_Ability02_Part02",
    "Rappa_Rappa_Ability02_Part01",
    "Rappa_Rappa_Ability13_Part02",
    "Rappa_Rappa_Ability13_Part01",
    "Rappa_Rappa_Ability12_Part02",
    "Rappa_Rappa_Ability12_Part01",
    "Rappa_Rappa_Ability11_Part02",
    "Rappa_Rappa_Ability11_Part01",
    "Rappa_Rappa_Ability01_Part02",
    "Rappa_Rappa_Ability01_Part01",
    "Rappa_Functions"
  ],
  "abilityObject": {
    "Rappa_Modifiers": {
      "fileName": "Rappa_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__2126707950\">M_ADV_Maze_Rappa_StopSprintFlag</a>",
          "counter": 1,
          "stackType": "Refresh"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1023191181\">ADV_Modifier_Maze_Rappa_SummonUnit</a>",
          "onCreation": [
            {
              "name": "Create Overworld Entity",
              "summonID": 13171
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
                "summonID": 13171
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1835153663\">ADV_Modifier_Maze_Rappa_HolyShield</a>",
          "counter": 1,
          "stackType": "Merge",
          "modifierFlags": [
            "HolyShield"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1641564581\">ADV_Modifier_Maze_Rappa</a>",
          "counter": 1,
          "stackType": "Refresh",
          "duration": 20,
          "onCreation": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Technique[?]"
              }
            }
          ],
          "onStageExit": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-770906695\">ADV_Modifier_Maze_Rappa_IsHit</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__509266484\">ADV_StageAbility_Maze_Rappa</a>",
          "counter": 1,
          "stackType": "Merge"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1458859803\">Rappa_Break_Modifier_ForShow</a>[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
          "stackType": "ReplaceByCaster",
          "description": "The next time the third hit of \"Ningu: Demonbane Petalblade\" is launched, the additionally dealt Break DMG multiplier increases by <span class=\"descriptionNumberColor\">_CurrentRatio</span>, and the Toughness Reduction increases by <span class=\"descriptionNumberColor\">_CurrentValue</span>.",
          "type": "Buff",
          "statusName": "Ninja Tech: Endurance Gauge",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "_CurrentLayer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(0.5 * _CurrentLayer)"
                  },
                  "variableName": "_CurrentRatio"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(1 * _CurrentLayer)"
                  },
                  "variableName": "_CurrentValue"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1496582647\">Rappa_AbilityEidolon4</a>[<span class=\"descriptionNumberColor\">Lost Is the Nindō Devoured by Time</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">#SkillRank_Rank04_P1_Ratio</span>.",
          "type": "Buff",
          "statusName": "Lost Is the Nindō Devoured by Time",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "0.12"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1412694552\">Rappa_AbilityEidolon1</a>[<span class=\"descriptionNumberColor\">Returned Is the Revenant With No Ferry Toll</span>]",
          "stackType": "ReplaceByCaster",
          "description": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">SkillRank_Rank01_P1_Ratio</span> of the enemy targets' DEF. After exiting \"Sealform,\" regenerates <span class=\"descriptionNumberColor\">#SkillRank_Rank01_P2_Value</span> Energy.",
          "type": "Buff",
          "statusName": "Returned Is the Revenant With No Ferry Toll",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(0 - SkillRank_Rank01_P1_Ratio)"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-103751501\">Rappa_Ability03_Eidolon2_StanceDamagePreShow_Imaginary</a>",
          "stackType": "ReplaceByCaster",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Basic ATK",
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1748394699\">Rappa_UltraMode</a>[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]"
                },
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1369082619\">Rappa_Ability13_StanceDamagePreShow</a>",
                  "invertCondition": true
                },
                {
                  "name": "Is Part Of",
                  "target1": {
                    "name": "Target Name",
                    "target": "{{Player's Aim Primary-Target}}"
                  },
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            "percent": {
              "displayLines": "0.5"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1369082619\">Rappa_Ability13_StanceDamagePreShow</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
              "execute": [
                {
                  "name": "Modifier: UI Preview",
                  "show": "Hide",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player's Aim Target List}}"
                  },
                  "attacker": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "toughnessType": "Imaginary",
                  "baseToughnessDMG": {
                    "displayLines": "((2 + ((_PassiveBreakCountBase + DV_TempCount) * 1)) * 3)"
                  },
                  "toughnessForcedReductionPreview": 1,
                  "isForcedReduction": true
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1932054955\">Rappa_Ability03_StanceDamagePreShow_NoImaginary</a>",
          "stackType": "ReplaceByCaster",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Basic ATK",
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1748394699\">Rappa_UltraMode</a>[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]"
                }
              ]
            },
            "toughnessForcedReductionPreview": {
              "displayLines": "P6_Real_Ratio"
            },
            "showAsForcedReduction": true
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1239346790\">Rappa_PointB3_Enemy</a>[<span class=\"descriptionNumberColor\">Ninjutsu Inscription: Withered Leaf</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Break DMG taken increases by <span class=\"descriptionNumberColor\">MDF_TotalRatio</span>.",
          "type": "Debuff",
          "statusName": "Ninjutsu Inscription: Withered Leaf",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Break DMG"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"615135704\">Rappa_PointB3_Enemy_Aura</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_TotalRatio"
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
          "for": "<a class=\"gModGreen\" id=\"mod__615135704\">Rappa_PointB3_Enemy_Aura</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Break DMG"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1239346790\">Rappa_PointB3_Enemy</a>[<span class=\"descriptionNumberColor\">Ninjutsu Inscription: Withered Leaf</span>]",
                        "justAddedOrActive": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "DV_TotalRatio"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_PropertyValue2 + 0.02)"
                  },
                  "variableName": "DV_TotalRatio"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1239346790\">Rappa_PointB3_Enemy</a>[<span class=\"descriptionNumberColor\">Ninjutsu Inscription: Withered Leaf</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "MDF_TotalRatio": {
                      "displayLines": "DV_TotalRatio"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1957135459\">Rappa_Trace03_Sub</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_PropertyValue * 0.01))"
                  },
                  "variableName": "MDF_Multipler"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_Multipler * 0.01)"
                  },
                  "variableName": "MDF_PropertyValue2"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_PropertyValue2",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "0.08"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "0.08"
                      },
                      "variableName": "MDF_PropertyValue2"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__421544848\">Rappa_Trace03</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"615135704\">Rappa_PointB3_Enemy_Aura</a>",
              "haloStatus": true
            }
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1198981265\">Rappa_Trace03_Sub</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__1198981265\">Rappa_Trace03_Sub</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_CurrentAttackReal",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentAttackReal",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "(2400 + 100)"
                    }
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1957135459\">Rappa_Trace03_Sub</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1957135459\">Rappa_Trace03_Sub</a>",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "displayLines": "(MDF_CurrentAttackReal - 2400)"
                            }
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1957135459\">Rappa_Trace03_Sub</a>",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "displayLines": "(MDF_CurrentAttackReal - 2400)"
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_PropertyValue2"
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1198981265\">Rappa_Trace03_Sub</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1498869655\">Rappa_PointB2_Enemy</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has DMG Instance Tag",
                    "tag": "Rappa_UltraAttack_Damage"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_TotalStanceDamage"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1748394699\">Rappa_UltraMode</a>[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]"
                      },
                      {
                        "name": "Has DMG Instance Tag",
                        "tag": "Rappa_UltraAttack_Damage"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"932403897\">BeingDealSuperBreakDamage</a>",
                      "variables": {
                        "DamagePercentage": {
                          "displayLines": "MDF_PropertyValue2"
                        },
                        "StanceValue": {
                          "displayLines": "MDF_TotalStanceDamage"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Taking Toughness DMG [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "FORCE_SUPERBREAK"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "FORCE_SUPERBREAK"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": null,
                      "variableName": "MDF_HitStanceDamage",
                      "value": "ParamValue2"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_TotalStanceDamage + MDF_HitStanceDamage)"
                      },
                      "variableName": "MDF_TotalStanceDamage"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__185730135\">Rappa_ForceStanceDamage_ForPassive</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ForceStanceDamage"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "statValue": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2114229234\">Rappa_ForceStanceDamage</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ForceStanceDamage"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "P6_Real_Ratio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1991409749\">Rappa_Explosive</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1328811210\">Rappa_UltraMode_BanSKL03_ForCaster</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__685299865\">Rappa_UltraMode_BanSKL02_ForCaster</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTypes": [
                    "Skill"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1748394699\">Rappa_UltraMode</a>[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "description": "Increases Weakness Break Efficiency by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and Break Effect by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
          "type": "Buff",
          "statusName": "Nindō Supreme: Aishiteru",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1498869655\">Rappa_PointB2_Enemy</a>",
              "haloStatus": true,
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Ninjutsu Inscription: Sea Echo"
              },
              "valuePerStack": {
                "MDF_PropertyValue2": {
                  "displayLines": "0.6"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1412694552\">Rappa_AbilityEidolon1</a>[<span class=\"descriptionNumberColor\">Returned Is the Revenant With No Ferry Toll</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "valuePerStack": {
                "AbilityRank_Eidolon1_P1_Ratio": {
                  "displayLines": "0.15"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1496582647\">Rappa_AbilityEidolon4</a>[<span class=\"descriptionNumberColor\">Lost Is the Nindō Devoured by Time</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              }
            }
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "displayLines": "20"
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Owner][?]",
              "execute": [
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
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Ability Enhance Button",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "display": "Show",
                      "abilityName": "Basic ATK"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"685299865\">Rappa_UltraMode_BanSKL02_ForCaster</a>"
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
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "MDF_PropertyValue"
                  },
                  "variableName": "StanceBreakAddedRatioForShow"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_PropertyValue"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_PropertyValue2"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1932054955\">Rappa_Ability03_StanceDamagePreShow_NoImaginary</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-103751501\">Rappa_Ability03_Eidolon2_StanceDamagePreShow_Imaginary</a>"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_AMMO",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_AMMO_RELOADED",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "displayLines": "_AR_STATE_LIFETIME"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "_AMMO_RELOADED"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1328811210\">Rappa_UltraMode_BanSKL03_ForCaster</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_AR_STATE_LIFETIME",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1328811210\">Rappa_UltraMode_BanSKL03_ForCaster</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1748394699\">Rappa_UltraMode</a>[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]"
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "priorState": "Normal"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Turn Action Injection: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_AMMO",
                    "compareType": "=",
                    "value2": 0
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
                        {
                          "name": "Update Ability Enhance Button",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "display": "Show",
                          "abilityName": "Basic ATK"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"685299865\">Rappa_UltraMode_BanSKL02_ForCaster</a>"
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
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "Rappa_LocalPlayer_Rappa_Achievenment": {
      "fileName": "Rappa_LocalPlayer_Rappa_Achievenment",
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
          "modifier": "<a class=\"gModGreen\" id=\"1581434995\">ADV_StageAbility_Maze_Achievenment</a>",
          "duration": {
            "displayLines": "(20 - 0.1)"
          }
        },
        {
          "name": "WAIT FOR",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "DV_AbilityEnd",
                "compareType": "=",
                "value2": 1
              }
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "Rappa_00_Achievenment"
        }
      ],
      "references": [],
      "triggerType": "Free",
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      }
    },
    "Rappa_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Rappa_LocalPlayer_StandardAbility_AttackBreak",
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
            "damageType": "Physical"
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
            "damageType": "Fire"
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
            "damageType": "Ice"
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
            "damageType": "Thunder"
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
            "damageType": "Wind"
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
            "damageType": "Quantum"
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
            "damageType": "Imaginary"
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
    "Rappa_LocalPlayer_Rappa_TechniqueUsage": {
      "fileName": "Rappa_LocalPlayer_Rappa_TechniqueUsage",
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
          "modifier": "<a class=\"gModGreen\" id=\"933509647\">ADV_StageAbility_Maze_IgnoreWeakness_TechniqueUsageMark</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_AbilityEnd",
          "scope": "ContextCaster"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "SprintModifiedSteerSpeed"
          },
          "variableName": "SprintModifiedSteerSpeed"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "SprintModifiedSpeed"
          },
          "variableName": "SprintModifiedSpeed"
        },
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Move Input Active (Overworld)",
                    "invertCondition": true
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "from": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "to": {
                          "name": "Target Name",
                          "target": "{{Ability Target(ST)}}"
                        },
                        "value1": "Distance_Between_Entities",
                        "compareType": "<",
                        "value2": 2
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "from": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "to": {
                          "name": "Target Name",
                          "target": "{{Ability Target(ST)}}"
                        },
                        "value1": "Distance_Between_Entities",
                        "compareType": "<",
                        "value2": 6
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "from": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "to": {
                          "name": "Target Name",
                          "target": "{{Ability Target(ST)}}"
                        },
                        "value1": "Distance_Between_Entities",
                        "compareType": ">=",
                        "value2": 6
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "Create Overworld Entity",
          "summonID": 13171
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "131702()",
          "duration": {
            "displayLines": "20"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-379736777\">Rappa_Sprint_PreProcess</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_AbilityEnd",
            "compareType": "=",
            "value2": 1
          }
        }
      ],
      "onAbortReg": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_AbilityEnd"
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-379736777\">Rappa_Sprint_PreProcess</a>",
          "parse": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1835153663\">ADV_Modifier_Maze_Rappa_HolyShield</a>",
              "duration": 22
            },
            "Deleted bullshit",
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-770906695\">ADV_Modifier_Maze_Rappa_IsHit</a>"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "Rappa_00_Achievenment"
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
    "Rappa_LocalPlayer_Rappa_NormalAtk01": {
      "fileName": "Rappa_LocalPlayer_Rappa_NormalAtk01",
      "skillTrigger": "NormalAtk",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"933509647\">ADV_StageAbility_Maze_IgnoreWeakness_TechniqueUsageMark</a>"
        },
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
                    "flag": "Run"
                  },
                  "passed": [
                    "Deleted bullshit",
                    {
                      "name": "Overworld Attack Instance"
                    }
                  ],
                  "failed": [
                    "Deleted bullshit",
                    {
                      "name": "Overworld Attack Instance"
                    }
                  ]
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
    "Rappa_LocalPlayer_Rappa_TechniqueUsage_ListenInput": {
      "fileName": "Rappa_LocalPlayer_Rappa_TechniqueUsage_ListenInput",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_AbilityEnd"
        }
      ],
      "references": [],
      "triggerType": "Free",
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      }
    },
    "Rappa_LocalPlayer_Rappa_TechniqueUsage_Abort": {
      "fileName": "Rappa_LocalPlayer_Rappa_TechniqueUsage_Abort",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Submit Technique Use",
        {
          "name": "Remove Overworld Entity",
          "targetSummonEntity": {
            "name": "Add Target by Summoned Units",
            "targetSummoner": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "summonID": 13171
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "overworldID": 131702
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1835153663\">ADV_Modifier_Maze_Rappa_HolyShield</a>"
        }
      ],
      "references": [],
      "triggerType": "Free",
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      }
    },
    "Rappa_LocalPlayer_Rappa_TechniqueUsage_End": {
      "fileName": "Rappa_LocalPlayer_Rappa_TechniqueUsage_End",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "Rappa_00_Achievenment",
                "compareType": "<=",
                "value2": 0
              },
              {
                "name": "Has Modifier (OVERWORLD)",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1581434995\">ADV_StageAbility_Maze_Achievenment</a>",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Achievement",
              "relatedAchievements": [
                {
                  "title": "A Step Like a Malicious Spirit in Pursuit",
                  "desc": "While using Rappa's technique \"Ninja Dash: By Leaps and Bounds,\" avoid hitting any obstacles while sliding in the \"Graffiti\" mode.",
                  "rarity": "Low",
                  "type": "Hidden until Completion"
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
          "modifier": "<a class=\"gModGreen\" id=\"1581434995\">ADV_StageAbility_Maze_Achievenment</a>"
        },
        "Submit Technique Use",
        {
          "name": "Remove Overworld Entity",
          "targetSummonEntity": {
            "name": "Add Target by Summoned Units",
            "targetSummoner": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "summonID": 13171
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1835153663\">ADV_Modifier_Maze_Rappa_HolyShield</a>"
        },
        {
          "name": "IF",
          "conditions": "Move Input Active (Overworld)"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "overworldID": 131702
        }
      ],
      "references": [],
      "triggerType": "Free",
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      }
    },
    "Rappa_LocalPlayer_Rappa_TechniqueUsage_TriggerHitMonster": {
      "fileName": "Rappa_LocalPlayer_Rappa_TechniqueUsage_TriggerHitMonster",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Overworld Attack Instance",
          "onBattle": [
            {
              "name": "Remove Overworld Entity",
              "targetSummonEntity": {
                "name": "Add Target by Summoned Units",
                "targetSummoner": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "summonID": 13171
              }
            },
            "Deleted bullshit",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": null,
              "ID": "131701(SkillMaze)"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": null,
              "overworldID": 131702
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
    "Rappa_Rappa_TechniqueInLevel": {
      "fileName": "Rappa_Rappa_TechniqueInLevel",
      "childAbilityList": [
        "Rappa_Rappa_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        30,
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
          "modifier": "<a class=\"gModGreen\" id=\"496713366\">StageAbility_Maze_Rappa_Modifier_Dmg</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"307934607\">StageAbility_Maze_Rappa_Modifier_Bonus</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__307934607\">StageAbility_Maze_Rappa_Modifier_Bonus</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      "Technique Modifies Current Wave",
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
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "displayLines": "10"
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
          "for": "<a class=\"gModGreen\" id=\"mod__496713366\">StageAbility_Maze_Rappa_Modifier_Dmg</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -60,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      "Technique Modifies Current Wave",
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "variableName": "DV_Ultra_Damage_MaxStance",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "warningType": "MaxToughness",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(((0.5 * ((DV_Ultra_Damage_MaxStance / 30) + 2)) / 4) * 2)"
                          },
                          "variableName": "DV_Ratio"
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "DamageBreak": {
                              "displayLines": "DV_Ratio"
                            },
                            "dmgFormula": "Break DMG Scaling",
                            "dmgFormulaFinal": "Pure (No DMG%)",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Break DMG"
                          }
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Targets Adjacent to Parameter Target}}"
                          },
                          "maxTargets": 2,
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "variableName": "DV_Ultra_Damage_MaxStance",
                              "readTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "warningType": "MaxToughness",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": {
                                "displayLines": "(((0.5 * ((DV_Ultra_Damage_MaxStance / 30) + 2)) / 4) * 1.8)"
                              },
                              "variableName": "DV_Ratio2"
                            },
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "DamageBreak": {
                                  "displayLines": "DV_Ratio2"
                                },
                                "dmgFormula": "Break DMG Scaling",
                                "dmgFormulaFinal": "Pure (No DMG%)",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Break DMG"
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
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Rappa_Rappa_PassiveAbility01": {
      "fileName": "Rappa_Rappa_PassiveAbility01",
      "childAbilityList": [
        "Rappa_Rappa_PassiveAbility01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        2,
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
          "modifier": "<a class=\"gModGreen\" id=\"823190278\">Rappa_Passive_Modifier</a>"
        },
        {
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "_AR_STATE_LIFETIME",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Overwrite Value",
          "variableName": "_AR_STATE_LIFETIME",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": 0
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "displayLines": "3"
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3
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
                "displayLines": "(UnusedUnderThisBase_7368 + 5)"
              },
              "variableName": "_PassiveBreakCountBase"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(10 + 5)"
              },
              "variableName": "_PassiveBreakCountMax"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "UnusedUnderThisBase_7368"
              },
              "variableName": "_PassiveBreakCountBase"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "10"
              },
              "variableName": "_PassiveBreakCountMax"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_PassiveBreakCountBase",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1458859803\">Rappa_Break_Modifier_ForShow</a>[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
              "stackLimit": {
                "displayLines": "_PassiveBreakCountMax"
              },
              "addStacksPerTrigger": {
                "displayLines": "_PassiveBreakCountBase"
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-200121332\">Rappa_Break_Modifier</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Exo-Toughness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "failed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1176541882\">Template_Rappa_PassiveBreak</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entering Exo-Toughness Bar [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1176541882\">Template_Rappa_PassiveBreak</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Exo-Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1176541882\">Template_Rappa_PassiveBreak</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__823190278\">Rappa_Passive_Modifier</a>",
          "stackType": "ReplaceByCaster",
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
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_DOT"
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_DOT"
                      }
                    ]
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
                    "name": "Trace Activated",
                    "conditionList": "Ninjutsu Inscription: Withered Leaf"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"421544848\">Rappa_Trace03</a>"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "0.5"
                  },
                  "variableName": "P6_Real_Ratio"
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-200121332\">Rappa_Break_Modifier</a>"
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
                    "name": "Current Action Holder Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-200121332\">Rappa_Break_Modifier</a>"
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
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
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Action Holder Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Action Holder Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  }
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
    "Rappa_Rappa_Ability03_SP0_Part01": {
      "fileName": "Rappa_Rappa_Ability03_SP0_Part01",
      "skillTrigger": "Skill34",
      "abilityType": "Ultimate",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "team": "Enemy Team",
            "value1": "Team_Width_Count",
            "compareType": ">=",
            "value2": 12
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "team": "Enemy Team",
                "value1": "Team_Width_Count",
                "compareType": ">=",
                "value2": 10
              }
            }
          ]
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
    "Rappa_Rappa_Ability03_Part02": {
      "fileName": "Rappa_Rappa_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "DV_StockTempCount"
          },
          "variableName": "_AMMO"
        },
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "_AMMO_RELOADED"
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Overwrite Value",
          "variableName": "_AR_STATE_LIFETIME",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "displayLines": "3"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1748394699\">Rappa_UltraMode</a>[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]"
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1748394699\">Rappa_UltraMode</a>[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.5"
                },
                "MDF_PropertyValue2": {
                  "displayLines": "0.3"
                }
              }
            }
          ]
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
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill11",
          "skillSlot": "Basic ATK"
        },
        {
          "name": "Update Ability Enhance Button",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": "Show",
          "abilityName": "Basic ATK"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"685299865\">Rappa_UltraMode_BanSKL02_ForCaster</a>"
        },
        {
          "name": "Inject Extra-Turn",
          "actionTag": null,
          "afterInjection": [],
          "priorityTag": "CharacterChainedSkill"
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Rappa_Rappa_Ability03_Part01": {
      "fileName": "Rappa_Rappa_Ability03_Part01",
      "childAbilityList": [
        "Rappa_Rappa_Ability03_Camera",
        "Rappa_Rappa_Ability03_EnterReady",
        "Rappa_Rappa_Ability03_Part01",
        "Rappa_Rappa_Ability03_Part02",
        "Rappa_Rappa_Ability03_FPS_Camera",
        "Rappa_Rappa_Ability03_FPS_Camera_Steady",
        "Rappa_Rappa_Ability03_SP0_Part01"
      ],
      "skillTrigger": "Skill03",
      "condition": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1748394699\">Rappa_UltraMode</a>[<span class=\"descriptionNumberColor\">Nindō Supreme: Aishiteru</span>]",
        "invertCondition": true
      },
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "team": "Enemy Team",
            "value1": "Team_Width_Count",
            "compareType": ">=",
            "value2": 12
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "team": "Enemy Team",
                "value1": "Team_Width_Count",
                "compareType": ">=",
                "value2": 10
              }
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Rappa_Ability03_Part02"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "_AR_STATE_LIFETIME"
          },
          "priorState": "Active"
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
    "Rappa_Rappa_Ability03_EnterReady": {
      "fileName": "Rappa_Rappa_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Rappa_Rappa_Ability02_Part02": {
      "fileName": "Rappa_Rappa_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "displayLines": "1.2"
            },
            "HitSplit": 0.5,
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
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
            "DamageType": "Imaginary",
            "Damage": {
              "displayLines": "1.2"
            },
            "HitSplit": 0.5,
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "Tags": null,
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
    "Rappa_Rappa_Ability02_Part01": {
      "fileName": "Rappa_Rappa_Ability02_Part01",
      "childAbilityList": [
        "Rappa_Rappa_Ability02_Camera",
        "Rappa_Rappa_Ability02_Part01",
        "Rappa_Rappa_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
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
          "ability": "Rappa_Ability02_Part02",
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
    "Rappa_Rappa_Ability13_Part02": {
      "fileName": "Rappa_Rappa_Ability13_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "_PassiveBreakCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_AMMO - 1)"
          },
          "variableName": "_AMMO"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "includeDyingTargets": true,
          "maxTargets": 10,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "DamageType": "Imaginary",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2114229234\">Rappa_ForceStanceDamage</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "displayLines": "1"
                    },
                    "Toughness": {
                      "displayLines": "AOE Toughness Value"
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2114229234\">Rappa_ForceStanceDamage</a>"
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "displayLines": "1"
                    },
                    "Toughness": {
                      "displayLines": "AOE Toughness Value"
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
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
          "includeDyingTargets": true,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "DV_Ultra_Damage_MaxStance",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "warningType": "MaxToughness",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(((0.5 * ((DV_Ultra_Damage_MaxStance / 30) + 2)) / 4) * (0.6 + ((_PassiveBreakCountBase + DV_TempCount) * 0.5)))"
              },
              "variableName": "DV_FinalBreakDamagePercentage"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"185730135\">Rappa_ForceStanceDamage_ForPassive</a>"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageBreak": {
                  "displayLines": "DV_FinalBreakDamagePercentage"
                },
                "dmgFormula": "Break DMG Scaling",
                "dmgFormulaFinal": "Pure (No DMG%)",
                "Toughness": {
                  "displayLines": "((2 + ((_PassiveBreakCountBase + DV_TempCount) * 1)) * 3)"
                },
                "instanceTag": "Rappa_UltraAttack_Damage",
                "Tags": null,
                "attackType": "Break DMG"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"185730135\">Rappa_ForceStanceDamage_ForPassive</a>"
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1458859803\">Rappa_Break_Modifier_ForShow</a>[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "_PassiveBreakCountBase",
                "compareType": ">",
                "value2": 0
              },
              {
                "name": "Compare: Variable",
                "value1": "_PassiveBreakCount",
                "compareType": ">",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1458859803\">Rappa_Break_Modifier_ForShow</a>[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
              "stackLimit": {
                "displayLines": "_PassiveBreakCountMax"
              },
              "addStacksPerTrigger": {
                "displayLines": "(_PassiveBreakCountBase + _PassiveBreakCount)"
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
          "modifier": "<a class=\"gModGreen\" id=\"685299865\">Rappa_UltraMode_BanSKL02_ForCaster</a>"
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1369082619\">Rappa_Ability13_StanceDamagePreShow</a>"
        },
        {
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill01",
          "skillSlot": "Basic ATK"
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "_AR_STATE_LIFETIME",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "displayLines": "-1"
          }
        },
        "Trigger: Ability End",
        "Trigger: Skip Death Handling"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Rappa_Rappa_Ability13_Part01": {
      "fileName": "Rappa_Rappa_Ability13_Part01",
      "childAbilityList": [
        "Rappa_Rappa_Ability13_Part01",
        "Rappa_Rappa_Ability13_Part02",
        "Rappa_Rappa_Ability03_FPS_Hit3_Camera"
      ],
      "skillTrigger": "Skill13",
      "abilityType": "Basic ATK",
      "energy": 10,
      "toughnessList": [
        0,
        5,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "team": "Enemy Team",
            "value1": "Team_Width_Count",
            "compareType": ">=",
            "value2": 12
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "team": "Enemy Team",
                "value1": "Team_Width_Count",
                "compareType": ">=",
                "value2": 10
              }
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Rappa_Ability13_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_AR_STATE_LIFETIME",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Hide",
              "abilityName": "Basic ATK"
            }
          ],
          "failed": [
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Hide",
              "abilityName": "Basic ATK"
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
    "Rappa_Rappa_Ability12_Part02": {
      "fileName": "Rappa_Rappa_Ability12_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_AMMO - 1)"
          },
          "variableName": "_AMMO"
        },
        {
          "name": "Define Custom Variable with Distance to Team Center",
          "variableName": "DV_PositionOffsetRatio",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Weakness",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "DamageType": "Imaginary",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2114229234\">Rappa_ForceStanceDamage</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
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
                    "Damage": {
                      "displayLines": "1"
                    },
                    "Toughness": {
                      "displayLines": "(ST Toughness Value * (1 + 0.5))"
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
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
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "displayLines": "1"
                    },
                    "Toughness": {
                      "displayLines": "ST Toughness Value"
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
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
              "modifier": "<a class=\"gModGreen\" id=\"2114229234\">Rappa_ForceStanceDamage</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
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
                    "Damage": {
                      "displayLines": "1"
                    },
                    "Toughness": {
                      "displayLines": "(ST Toughness Value * (1 + 0.5))"
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
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
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "displayLines": "1"
                    },
                    "Toughness": {
                      "displayLines": "ST Toughness Value"
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "includeDyingTargets": true,
          "maxTargets": 2,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "DamageType": "Imaginary",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2114229234\">Rappa_ForceStanceDamage</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "displayLines": "0.5"
                    },
                    "Toughness": {
                      "displayLines": "Blast Toughness Value"
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2114229234\">Rappa_ForceStanceDamage</a>"
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "displayLines": "0.5"
                    },
                    "Toughness": {
                      "displayLines": "Blast Toughness Value"
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
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
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill13",
          "skillSlot": "Basic ATK"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "_PassiveBreakCount"
          },
          "variableName": "DV_TempCount"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1369082619\">Rappa_Ability13_StanceDamagePreShow</a>"
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
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Rappa_Rappa_Ability12_Part01": {
      "fileName": "Rappa_Rappa_Ability12_Part01",
      "childAbilityList": [
        "Rappa_Rappa_Ability12_Part01",
        "Rappa_Rappa_Ability12_Part02",
        "Rappa_Rappa_Ability03_FPS_Hit2_Camera"
      ],
      "skillTrigger": "Skill12",
      "abilityType": "Basic ATK",
      "energy": 5,
      "toughnessList": [
        10,
        0,
        5
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "team": "Enemy Team",
            "value1": "Team_Width_Count",
            "compareType": ">=",
            "value2": 12
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "team": "Enemy Team",
                "value1": "Team_Width_Count",
                "compareType": ">=",
                "value2": 10
              }
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Rappa_Ability12_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets",
        "stateFilter": "AliveOrLimbo"
      }
    },
    "Rappa_Rappa_Ability11_Part02": {
      "fileName": "Rappa_Rappa_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "DV_StockTempCount"
          },
          "variableName": "_AMMO"
        },
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "_AMMO_RELOADED"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_AMMO - 1)"
          },
          "variableName": "_AMMO"
        },
        {
          "name": "Define Custom Variable with Distance to Team Center",
          "variableName": "DV_PositionOffsetRatio",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Weakness",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "DamageType": "Imaginary",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2114229234\">Rappa_ForceStanceDamage</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
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
                    "Damage": {
                      "displayLines": "1"
                    },
                    "Toughness": {
                      "displayLines": "(ST Toughness Value * (1 + 0.5))"
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
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
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "displayLines": "1"
                    },
                    "Toughness": {
                      "displayLines": "ST Toughness Value"
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
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
              "modifier": "<a class=\"gModGreen\" id=\"2114229234\">Rappa_ForceStanceDamage</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
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
                    "Damage": {
                      "displayLines": "1"
                    },
                    "Toughness": {
                      "displayLines": "(ST Toughness Value * (1 + 0.5))"
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
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
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "displayLines": "1"
                    },
                    "Toughness": {
                      "displayLines": "ST Toughness Value"
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "includeDyingTargets": true,
          "maxTargets": 2,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "DamageType": "Imaginary",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2114229234\">Rappa_ForceStanceDamage</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "displayLines": "0.5"
                    },
                    "Toughness": {
                      "displayLines": "Blast Toughness Value"
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2114229234\">Rappa_ForceStanceDamage</a>"
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "displayLines": "0.5"
                    },
                    "Toughness": {
                      "displayLines": "Blast Toughness Value"
                    },
                    "instanceTag": "Rappa_UltraAttack_Damage",
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
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
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill12",
          "skillSlot": "Basic ATK"
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
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Rappa_Rappa_Ability11_Part01": {
      "fileName": "Rappa_Rappa_Ability11_Part01",
      "childAbilityList": [
        "Rappa_Rappa_Ability11_Part01",
        "Rappa_Rappa_Ability11_Part02",
        "Rappa_Rappa_Ability03_FPS_Hit1_Camera"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": 5,
      "toughnessList": [
        10,
        0,
        5
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "team": "Enemy Team",
            "value1": "Team_Width_Count",
            "compareType": ">=",
            "value2": 12
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "team": "Enemy Team",
                "value1": "Team_Width_Count",
                "compareType": ">=",
                "value2": 10
              }
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Rappa_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets",
        "stateFilter": "AliveOrLimbo"
      }
    },
    "Rappa_Rappa_Ability01_Part02": {
      "fileName": "Rappa_Rappa_Ability01_Part02",
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
              "displayLines": "1"
            },
            "HitSplit": 0.5,
            "Toughness": {
              "displayLines": "ST Toughness Value"
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
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "displayLines": "1"
            },
            "HitSplit": 0.5,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
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
    "Rappa_Rappa_Ability01_Part01": {
      "fileName": "Rappa_Rappa_Ability01_Part01",
      "childAbilityList": [
        "Rappa_Rappa_Ability01_Camera",
        "Rappa_Rappa_Ability01_Part01",
        "Rappa_Rappa_Ability01_Part02"
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
          "ability": "Rappa_Ability01_Part02",
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
    "Rappa_Functions": {
      "fileName": "Rappa_Functions",
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
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1176541882\">Template_Rappa_PassiveBreak</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_PassiveBreakCount",
                "compareType": "<",
                "value2": {
                  "displayLines": "(_PassiveBreakCountMax - _PassiveBreakCountBase)"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(_PassiveBreakCount + 1)"
                  },
                  "variableName": "_PassiveBreakCount"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1458859803\">Rappa_Break_Modifier_ForShow</a>[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
                  "stackLimit": {
                    "displayLines": "_PassiveBreakCountMax"
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(DV_Rappa_BreakCount + 1)"
                  },
                  "variableName": "DV_Rappa_BreakCount"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "DV_StockTempCount"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Ninjutsu Inscription: Sky High"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(_PassiveBreakCount + 1)"
                      },
                      "variableName": "DV_StockTempCount"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_StockTempCount",
                        "compareType": ">",
                        "value2": {
                          "displayLines": "(_PassiveBreakCountMax - _PassiveBreakCountBase)"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1458859803\">Rappa_Break_Modifier_ForShow</a>[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
                          "stackLimit": {
                            "displayLines": "_PassiveBreakCountMax"
                          },
                          "addStacksPerTrigger": {
                            "displayLines": "((_PassiveBreakCountMax - _PassiveBreakCountBase) - _PassiveBreakCount)"
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(_PassiveBreakCountMax - _PassiveBreakCountBase)"
                          },
                          "variableName": "_PassiveBreakCount"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1458859803\">Rappa_Break_Modifier_ForShow</a>[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
                          "stackLimit": {
                            "displayLines": "_PassiveBreakCountMax"
                          },
                          "addStacksPerTrigger": {
                            "displayLines": "1"
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(_PassiveBreakCount + 1)"
                          },
                          "variableName": "_PassiveBreakCount"
                        }
                      ]
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "displayLines": "10"
                      },
                      "isFixed": "* ERR"
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
  }
}