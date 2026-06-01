const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Firefly",
  "trimCharacterName": "Firefly",
  "abilityList": [
    "Firefly_Modifiers",
    "Firefly_Advanced_Sam_Trace03",
    "Firefly_Advanced_Sam_Eidolon6",
    "Firefly_Advanced_Sam_Eidolon2",
    "Firefly_Advanced_Sam_Eidolon1",
    "Firefly_LocalPlayer_StandardAbility_AttackBreak",
    "Firefly_LocalPlayer_Firefly_TechniqueUsage",
    "Firefly_LocalPlayer_Firefly_NormalAtk01",
    "Firefly_Advanced_Sam_TechniqueInLevel",
    "Firefly_Advanced_Sam_PassiveAbility01_BattleEvent_Insert",
    "Firefly_Advanced_Sam_PassiveAbility01",
    "Firefly_Advanced_Sam_Ability21_Part02",
    "Firefly_Advanced_Sam_Ability21_Part01",
    "Firefly_Advanced_Sam_Ability11_Part02",
    "Firefly_Advanced_Sam_Ability11_Part01",
    "Firefly_Advanced_Sam_Ability03_Part02",
    "Firefly_Advanced_Sam_Ability03_Part01",
    "Firefly_Advanced_Sam_Ability03_EnterReady",
    "Firefly_Advanced_Sam_Ability02_Part02",
    "Firefly_Advanced_Sam_Ability02_Part01",
    "Firefly_Advanced_Sam_Ability01_Part02",
    "Firefly_Advanced_Sam_Ability01_Part01",
    "Firefly_BE_BattleEvents"
  ],
  "abilityObject": {
    "Firefly_Modifiers": {
      "fileName": "Firefly_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1559408124\">ADV_StageAbility_Maze_Firefly_FadeOut</a>",
          "stackType": "ReplaceByCaster",
          "onStageExit": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1559408124\">ADV_StageAbility_Maze_Firefly_FadeOut</a>"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1650011873\">ADV_StageAbility_Maze_Firefly_MidAirInvincible</a>",
          "counter": 1,
          "tickTime": 0.03,
          "stackType": "Refresh",
          "modifierFlags": [
            "Stealth",
            "HolyShield"
          ],
          "duration": 5,
          "onStageExit": [
            "Modifier Deletes Itself"
          ],
          "onTick": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  "Player Movement Input Active",
                  "Compare Movement Speed"
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_SoundStartFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_SoundStartFlag",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_SoundEndFlag",
                      "value": 0
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_SoundStartFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_SoundEndFlag",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_SoundStartFlag",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_SoundEndFlag",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1474797655\">ADV_StageAbility_Maze_Firefly_FireWeakness</a>",
          "counter": 1,
          "stackType": "Merge",
          "onStack": [
            {
              "name": "Add Global Weakness",
              "type": "Fire"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1246299099\">ADV_StageAbility_Maze_Firefly</a>",
          "counter": 1,
          "stackType": "Merge"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__224961603\">Advanced_Sam_PassiveAbility_RedMode_DisableUltraSkill</a>",
          "stackType": "ReplaceByCaster",
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
                  ],
                  "text": "Ability cannot be used"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1921056251\">Advanced_Sam_ActionBarPreShow</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Action Phase Start [Owner][?]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_SamSpeed",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_SamActionDelay",
                  "value": {
                    "operator": "Constants[0] (1000) || Variables[0] (_SamSpeed) || DIV || RETURN",
                    "displayLines": "(1000 / _SamSpeed)",
                    "constants": [
                      1000
                    ],
                    "variables": [
                      "_SamSpeed"
                    ]
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Battle Event List}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"493350230\">Advanced_Sam_PassiveAbility01_BattleEvent</a>"
                        }
                      }
                    ]
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Battle Event List}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"493350230\">Advanced_Sam_PassiveAbility01_BattleEvent</a>"
                            }
                          }
                        ]
                      },
                      "variableName": "_BEActionDelay",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_SamActionDelay",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (_BEActionDelay) || RETURN",
                          "displayLines": "_BEActionDelay",
                          "constants": [],
                          "variables": [
                            "_BEActionDelay"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Action Bar Display",
                          "triggerName": "Status_Status2",
                          "target": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Battle Event List}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"493350230\">Advanced_Sam_PassiveAbility01_BattleEvent</a>"
                                }
                              }
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
          "for": "<a class=\"gModGreen\" id=\"mod__-143623323\">Advanced_Sam_Eidolon2_BonusCD</a>[<span class=\"descriptionNumberColor\">From Shattered Sky, I Free Fall</span>]",
          "stackType": "ReplaceByCaster",
          "description": "The \"From Shattered Sky, I Free Fall\" effect cannot be triggered yet.",
          "type": "Other",
          "statusName": "From Shattered Sky, I Free Fall"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1903935379\">Advanced_Sam_Eidolon2_BonusCD_LuoJi</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "assignState": "True",
                  "priorState": "CoolDown",
                  "bar#": 1,
                  "cooldown": {
                    "operator": "Variables[0] (Rank02_CD) || RETURN",
                    "displayLines": "Rank02_CD",
                    "constants": [],
                    "variables": [
                      "Rank02_CD"
                    ]
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-778584538\">Advanced_Sam_Eidolon4_Endurance</a>",
          "counter": 2,
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "EnduranceEnemyOnly"
          ],
          "execute": [
            {
              "eventTrigger": "Debuff Immunity[?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_CTRL"
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "function": "Add"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue",
                      "value": -1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-385959697\">Advanced_Sam_Ultimate_BreakDamageAddRatio</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Break DMG"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__770661145\">Advanced_Sam_Eidolon6_FirePenetrate</a>[<span class=\"descriptionNumberColor\">In Finalized Morrow, I Full Bloom</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Fire RES PEN +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Fire RES PEN Boost",
          "statusName": "In Finalized Morrow, I Full Bloom",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFirePEN</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__606092342\">Advanced_Sam_PointB2_SuperBreakBonus</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SuperBreakBuff"
          ],
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"795502164\">DealSuperBreakDamage</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "variables": {
                        "DamagePercentage": {
                          "operator": "Variables[0] (1.5) || RETURN",
                          "displayLines": "1.5",
                          "constants": [],
                          "variables": [
                            1.5
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (1.5) || RETURN",
                          "displayLines": "1.5",
                          "constants": [],
                          "variables": [
                            1.5
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"795502164\">DealSuperBreakDamage</a>",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Attack Targets of Modifier Holder}}"
                          },
                          "variables": {
                            "DamagePercentage": {
                              "operator": "Variables[0] (1) || RETURN",
                              "displayLines": "1",
                              "constants": [],
                              "variables": [
                                1
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": 100
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-688726584\">Advanced_Sam_PointB1_BreakDamageAddedRatioBase</a>[<span class=\"descriptionNumberColor\">Module α: Antilag Outburst</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Break Effect increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Module α: Antilag Outburst",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1165299909\">Advanced_Sam_Ability21_FireWeakType</a>[<span class=\"descriptionNumberColor\">Additional Fire Weakness</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "description": "Additionally implanted Fire Weakness.",
          "type": "Debuff",
          "effectName": "Implant Weakness: Fire",
          "statusName": "Additional Fire Weakness",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
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
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__468515060\">Advanced_Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]",
          "stackType": "ReplaceByCaster",
          "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "DMG Mitigation",
          "statusName": "Chrysalid Pyronexus",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-508204277\">Advanced_Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "FireFlyRedMode"
          ],
          "description": "When using Enhanced Basic ATK or Enhanced Skill, increases Weakness Break Efficiency by <span class=\"descriptionNumberColor\">MDF_FinalDamageUP</span> and increases the Break DMG dealt by SAM to the enemy targets by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUP</span>, and Effect RES by <span class=\"descriptionNumberColor\">MDF_StatusResistance</span>.",
          "type": "Other",
          "effectName": "Fyrefly Type-IV: Complete Combustion",
          "statusName": "Fyrefly Type-IV: Complete Combustion",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"224961603\">Advanced_Sam_PassiveAbility_RedMode_DisableUltraSkill</a>",
              "aliveOnly": "True",
              "haloStatus": true
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"606092342\">Advanced_Sam_PointB2_SuperBreakBonus</a>",
              "aliveOnly": "True",
              "haloStatus": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Module β: Autoreactive Armor"
                  },
                  {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (1.5) || RETURN",
                      "displayLines": "1.5",
                      "constants": [],
                      "variables": [
                        1.5
                      ]
                    }
                  }
                ]
              }
            }
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
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
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill02",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Skill"
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
                      "variableName": "Rank02_CD",
                      "value": 0
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "assignState": "True",
                      "priorState": "Disable",
                      "bar#": 1,
                      "cooldown": 0
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_RedModeResRatio",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-688726584\">Advanced_Sam_PointB1_BreakDamageAddedRatioBase</a>[<span class=\"descriptionNumberColor\">Module α: Antilag Outburst</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"770661145\">Advanced_Sam_Eidolon6_FirePenetrate</a>[<span class=\"descriptionNumberColor\">In Finalized Morrow, I Full Bloom</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-143623323\">Advanced_Sam_Eidolon2_BonusCD</a>[<span class=\"descriptionNumberColor\">From Shattered Sky, I Free Fall</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"468515060\">Advanced_Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_HPRatioCurrent"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_PassiveResRatio",
                      "value": {
                        "operator": "Constants[0] (1) || Variables[0] (_HPRatioCurrent) || SUB || Constants[0] (1) || Variables[1] (0.2) || SUB || DIV || Variables[2] (_RedModeResRatio) || ADD || RETURN",
                        "displayLines": "(((1 - _HPRatioCurrent) / (1 - 0.2)) + _RedModeResRatio)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_HPRatioCurrent",
                          0.2,
                          "_RedModeResRatio"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"468515060\">Advanced_Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.4) || Variables[1] (_PassiveResRatio) || MUL || RETURN",
                          "displayLines": "(0.4 * _PassiveResRatio)",
                          "constants": [],
                          "variables": [
                            0.4,
                            "_PassiveResRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank02_CD",
                      "value": {
                        "operator": "Variables[0] (Rank02_CD) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(Rank02_CD - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Rank02_CD"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Rank02_CD",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "assignState": "True",
                          "priorState": "CoolDown",
                          "bar#": 1,
                          "cooldown": {
                            "operator": "Variables[0] (Rank02_CD) || RETURN",
                            "displayLines": "Rank02_CD",
                            "constants": [],
                            "variables": [
                              "Rank02_CD"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "assignState": "True",
                          "priorState": "Normal",
                          "bar#": 1,
                          "cooldown": 0
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-143623323\">Advanced_Sam_Eidolon2_BonusCD</a>[<span class=\"descriptionNumberColor\">From Shattered Sky, I Free Fall</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK",
                      "Skill"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                          "value": "(0.5 + Rank06_StanceBreakAddedRatio)"
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
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill21",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Skill"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 1,
                      "cooldown": 0
                    }
                  ]
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase2"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_RedModeResRatio",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_HPRatioCurrent"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_PassiveResRatio",
                  "value": {
                    "operator": "Constants[0] (1) || Variables[0] (_HPRatioCurrent) || SUB || Constants[0] (1) || Variables[1] (0.2) || SUB || DIV || Variables[2] (_RedModeResRatio) || ADD || RETURN",
                    "displayLines": "(((1 - _HPRatioCurrent) / (1 - 0.2)) + _RedModeResRatio)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_HPRatioCurrent",
                      0.2,
                      "_RedModeResRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"468515060\">Advanced_Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.4) || Variables[1] (_PassiveResRatio) || MUL || RETURN",
                      "displayLines": "(0.4 * _PassiveResRatio)",
                      "constants": [],
                      "variables": [
                        0.4,
                        "_PassiveResRatio"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_BreakDamageAddedRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
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
                      "variableName": "MDF_FinalDamageUP",
                      "value": {
                        "operator": "Variables[0] (0.5) || Variables[1] (0.5) || ADD || RETURN",
                        "displayLines": "(0.5 + 0.5)",
                        "constants": [],
                        "variables": [
                          0.5,
                          0.5
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_FinalDamageUP",
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedUP) || RETURN",
                    "displayLines": "MDF_SpeedUP",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedUP"
                    ]
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
                      "name": "Define Custom Variable",
                      "variableName": "MDF_StatusResistance",
                      "value": {
                        "operator": "Variables[0] (MDF_StatusResistance) || Variables[1] (0.5) || ADD || RETURN",
                        "displayLines": "(MDF_StatusResistance + 0.5)",
                        "constants": [],
                        "variables": [
                          "MDF_StatusResistance",
                          0.5
                        ]
                      }
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_StatusResistance) || RETURN",
                        "displayLines": "MDF_StatusResistance",
                        "constants": [],
                        "variables": [
                          "MDF_StatusResistance"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_StatusResistance) || RETURN",
                        "displayLines": "MDF_StatusResistance",
                        "constants": [],
                        "variables": [
                          "MDF_StatusResistance"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Module α: Antilag Outburst"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-688726584\">Advanced_Sam_PointB1_BreakDamageAddedRatioBase</a>[<span class=\"descriptionNumberColor\">Module α: Antilag Outburst</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_PointB1_Times",
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
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PointB1_Times",
                      "value": {
                        "operator": "Variables[0] (_PointB1_Times) || RETURN",
                        "displayLines": "_PointB1_Times",
                        "constants": [],
                        "variables": [
                          "_PointB1_Times"
                        ]
                      }
                    },
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "When using Enhanced Basic ATK or Enhanced Skill, increases Weakness Break Efficiency by <span class=\"descriptionNumberColor\">MDF_FinalDamageUP</span> and increases the Break DMG dealt by SAM to the enemy targets by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUP</span>, and Effect RES by <span class=\"descriptionNumberColor\">MDF_StatusResistance</span>. When using Enhanced Basic ATK or Enhanced Skill to inflict Weakness Break on a target, the \"Complete Combustion\" countdown is delayed. This effect can trigger <span class=\"descriptionNumberColor\">MDF_PointB1_Times</span> more time(s) during the current \"Complete Combustion\" state."
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"770661145\">Advanced_Sam_Eidolon6_FirePenetrate</a>[<span class=\"descriptionNumberColor\">In Finalized Morrow, I Full Bloom</span>]",
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
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Rank02_CD",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Skill Name",
                        "skillName": [
                          "Skill11",
                          "Skill21"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank02_CD",
                      "value": {
                        "operator": "Variables[0] (Rank02_CD) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Rank02_CD + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Rank02_CD"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Rank02_SamSelfInsertActionFlag",
                      "value": 1
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "Sam_Eidolon2_Bonus",
                      "afterInjection": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Rank02_CD",
                          "value": {
                            "operator": "Variables[0] (Rank02_CD) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(Rank02_CD - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Rank02_CD"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Rank02_SamSelfInsertActionFlag",
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Got a Queued Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Rank02_CD",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Skill Name",
                        "skillName": [
                          "Skill11",
                          "Skill21"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank02_CD",
                      "value": {
                        "operator": "Variables[0] (Rank02_CD) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Rank02_CD + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Rank02_CD"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Rank02_SamSelfInsertActionFlag",
                      "value": 1
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "Sam_Eidolon2_Bonus",
                      "afterInjection": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Rank02_CD",
                          "value": {
                            "operator": "Variables[0] (Rank02_CD) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(Rank02_CD - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Rank02_CD"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Rank02_SamSelfInsertActionFlag",
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Module α: Antilag Outburst"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_PointB1_Times",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Skill Name",
                        "skillName": [
                          "Skill11",
                          "Skill21"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_PointB1_Times",
                      "value": {
                        "operator": "Variables[0] (_PointB1_Times) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(_PointB1_Times - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_PointB1_Times"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PointB1_Times",
                      "value": {
                        "operator": "Variables[0] (_PointB1_Times) || RETURN",
                        "displayLines": "_PointB1_Times",
                        "constants": [],
                        "variables": [
                          "_PointB1_Times"
                        ]
                      }
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Battle Event List}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"493350230\">Advanced_Sam_PassiveAbility01_BattleEvent</a>"
                            }
                          }
                        ]
                      },
                      "advanceType": "Delay",
                      "multiAdd": "0.1"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Rank02_CD",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Skill Name",
                        "skillName": [
                          "Skill11",
                          "Skill21"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank02_CD",
                      "value": {
                        "operator": "Variables[0] (Rank02_CD) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Rank02_CD + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Rank02_CD"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Rank02_SamSelfInsertActionFlag",
                      "value": 1
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "Sam_Eidolon2_Bonus",
                      "afterInjection": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Rank02_CD",
                          "value": {
                            "operator": "Variables[0] (Rank02_CD) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(Rank02_CD - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Rank02_CD"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Rank02_SamSelfInsertActionFlag",
                          "value": 0
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_Rank02_SamSelfInsertActionFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Parameter String",
                        "compareType": "=",
                        "value2": "Sam_Eidolon2_Bonus"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Rank02_SamSelfInsertActionFlag",
                      "value": 0
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 1,
                      "cooldown": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-143623323\">Advanced_Sam_Eidolon2_BonusCD</a>[<span class=\"descriptionNumberColor\">From Shattered Sky, I Free Fall</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1903935379\">Advanced_Sam_Eidolon2_BonusCD_LuoJi</a>"
                    },
                    {
                      "name": "UI Display Event",
                      "popUpText": "From Shattered Sky, I Free Fall"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Sound stuff nobody cares about"
            },
            {
              "eventTrigger": "Sound stuff nobody cares about"
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (1.5) || RETURN",
                    "displayLines": "1.5",
                    "constants": [],
                    "variables": [
                      1.5
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Module β: Autoreactive Armor"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"606092342\">Advanced_Sam_PointB2_SuperBreakBonus</a>"
                        }
                      ]
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"606092342\">Advanced_Sam_PointB2_SuperBreakBonus</a>"
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
    "Firefly_Advanced_Sam_Trace03": {
      "fileName": "Firefly_Advanced_Sam_Trace03",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1540560354\">Advanced_Sam_Trace03_BreakDamageAddedRatio</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1608282825\">Advanced_Sam_Trace03_BreakDamageAddedRatio_Sub</a>[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
          "type": "Buff",
          "statusName": "Module γ: Core Overload",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Multipler",
                  "value": {
                    "operator": "Variables[0] (FLOOR) || Variables[1] (MDF_PropertyValue) || Variables[2] (10) || DIV || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_PropertyValue / 10))",
                    "constants": [],
                    "variables": [
                      "FLOOR",
                      "MDF_PropertyValue",
                      10
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue2",
                  "value": {
                    "operator": "Variables[0] (MDF_Multipler) || Variables[1] (0.007999999) || MUL || RETURN",
                    "displayLines": "(MDF_Multipler * 0.007999999)",
                    "constants": [],
                    "variables": [
                      "MDF_Multipler",
                      0.007999999
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakConverted</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1540560354\">Advanced_Sam_Trace03_BreakDamageAddedRatio</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1503863738\">Sam_Trace03_BreakDamageAddedRatio</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1503863738\">Sam_Trace03_BreakDamageAddedRatio</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentAttackConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentAttack2",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentAttack) || Variables[1] (MDF_CurrentAttackConvert) || SUB || RETURN",
                    "displayLines": "(MDF_CurrentAttack - MDF_CurrentAttackConvert)",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentAttack",
                      "MDF_CurrentAttackConvert"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentAttack2",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (1800) || Variables[1] (10) || ADD || RETURN",
                      "displayLines": "(1800 + 10)",
                      "constants": [],
                      "variables": [
                        1800,
                        10
                      ]
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1608282825\">Advanced_Sam_Trace03_BreakDamageAddedRatio_Sub</a>[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1608282825\">Advanced_Sam_Trace03_BreakDamageAddedRatio_Sub</a>[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_CurrentAttack2) || Variables[1] (1800) || SUB || RETURN",
                              "displayLines": "(MDF_CurrentAttack2 - 1800)",
                              "constants": [],
                              "variables": [
                                "MDF_CurrentAttack2",
                                1800
                              ]
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1608282825\">Advanced_Sam_Trace03_BreakDamageAddedRatio_Sub</a>[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_CurrentAttack2) || Variables[1] (1800) || SUB || RETURN",
                              "displayLines": "(MDF_CurrentAttack2 - 1800)",
                              "constants": [],
                              "variables": [
                                "MDF_CurrentAttack2",
                                1800
                              ]
                            }
                          }
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1608282825\">Advanced_Sam_Trace03_BreakDamageAddedRatio_Sub</a>[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1503863738\">Sam_Trace03_BreakDamageAddedRatio</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1503863738\">Sam_Trace03_BreakDamageAddedRatio</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1503863738\">Sam_Trace03_BreakDamageAddedRatio</a>"
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
    "Firefly_Advanced_Sam_Eidolon6": {
      "fileName": "Firefly_Advanced_Sam_Eidolon6",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "Rank06_StanceBreakAddedRatio",
          "value": {
            "operator": "Variables[0] (0.5) || RETURN",
            "displayLines": "0.5",
            "constants": [],
            "variables": [
              0.5
            ]
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Firefly_Advanced_Sam_Eidolon2": {
      "fileName": "Firefly_Advanced_Sam_Eidolon2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Update Displayed Energy Bar",
          "assignState": "True",
          "priorState": "Disable",
          "bar#": 1,
          "cooldown": 0
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Firefly_Advanced_Sam_Eidolon1": {
      "fileName": "Firefly_Advanced_Sam_Eidolon1",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1926207913\">Advanced_Sam_Eidolon1</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-814378358\">Advanced_Sam_Eidolon1_Sub</a>",
          "stackType": "ReplaceByCaster",
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
                      "value": "-0.15"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1926207913\">Advanced_Sam_Eidolon1</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill21"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Reset to Default"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill21"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Remove"
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
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-814378358\">Advanced_Sam_Eidolon1_Sub</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-814378358\">Advanced_Sam_Eidolon1_Sub</a>"
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
    "Firefly_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Firefly_LocalPlayer_StandardAbility_AttackBreak",
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
    "Firefly_LocalPlayer_Firefly_TechniqueUsage": {
      "fileName": "Firefly_LocalPlayer_Firefly_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Change Character Model"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1650011873\">ADV_StageAbility_Maze_Firefly_MidAirInvincible</a>",
          "duration": 5
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1559408124\">ADV_StageAbility_Maze_Firefly_FadeOut</a>"
        },
        {
          "name": "Create Overworld Entity",
          "summonID": 13101
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Adventure Enemy NPCs}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Compare: Variable",
                    "from": {
                      "name": "Target Name",
                      "target": "{{Adventure Player}}"
                    },
                    "to": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "Distance_Between_Entities",
                    "compareType": "<=",
                    "value2": 11
                  }
                }
              ]
            },
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Adventure Enemy NPCs}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Compare: Variable",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Adventure Player}}"
                      },
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value1": "Distance_Between_Entities",
                      "compareType": "<=",
                      "value2": 11
                    }
                  },
                  {
                    "name": "Return Target",
                    "value": 1
                  }
                ]
              },
              "searchRandom": true,
              "maxTargets": 1
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "Remove Overworld Entity",
          "summon": {
            "name": "Add Target by Summoned Units",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "summonID": 13101
          }
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
              "ID": "131001(SkillMaze)"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": null,
              "ID": "131002(SkillMaze)"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": null,
              "ID": "1000112(null)"
            }
          ],
          "entryTargetType": "AllHitTarget"
        }
      ],
      "onAbortReg": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1650011873\">ADV_StageAbility_Maze_Firefly_MidAirInvincible</a>"
        },
        {
          "name": "Remove Overworld Entity",
          "summon": {
            "name": "Add Target by Summoned Units",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "summonID": 13101
          }
        },
        {
          "name": "Change Character Model",
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Overworld Logic State",
                "type": "MazeSkill"
              },
              "passed": [
                "Deleted bullshit"
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
    "Firefly_LocalPlayer_Firefly_NormalAtk01": {
      "fileName": "Firefly_LocalPlayer_Firefly_NormalAtk01",
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
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Firefly_Advanced_Sam_TechniqueInLevel": {
      "fileName": "Firefly_Advanced_Sam_TechniqueInLevel",
      "childAbilityList": [
        "Firefly_Advanced_Sam_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1807590194\">Advanced_Sam_Maze_AddWeakness</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1368931789\">Advanced_Sam_Maze</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1368931789\">Advanced_Sam_Maze</a>",
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
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Technique"
                      }
                    },
                    "Trigger: Attack End"
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
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
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
                        "attackType": "Technique"
                      }
                    },
                    "Trigger: Attack End"
                  ]
                }
              ],
              "priorityLevel": -60
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1807590194\">Advanced_Sam_Maze_AddWeakness</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1165299909\">Advanced_Sam_Ability21_FireWeakType</a>[<span class=\"descriptionNumberColor\">Additional Fire Weakness</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
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
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Firefly_Advanced_Sam_PassiveAbility01_BattleEvent_Insert": {
      "fileName": "Firefly_Advanced_Sam_PassiveAbility01_BattleEvent_Insert",
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
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "popUpText": "Complete Combustion dispelled"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-508204277\">Advanced_Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1331677344\">Advanced_Sam_PassiveAbility01_ExitRedMode</a>"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1331677344\">Advanced_Sam_PassiveAbility01_ExitRedMode</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Advanced_Sam_PassiveAbility01_BattleEvent_Insert",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "CharacterBuffOthers",
                      "ownerState": "Anyone",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1331677344\">Advanced_Sam_PassiveAbility01_ExitRedMode</a>"
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
    "Firefly_Advanced_Sam_PassiveAbility01": {
      "fileName": "Firefly_Advanced_Sam_PassiveAbility01",
      "childAbilityList": [
        "Firefly_Advanced_Sam_PassiveAbility01",
        "Firefly_Advanced_Sam_PassiveAbility01_BattleEvent_Insert"
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
          "modifier": "<a class=\"gModGreen\" id=\"1846437996\">Advanced_Sam_PassiveAbility</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1353922036\">Advanced_Sam_UltraPreShow</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"66099957\">Advanced_Sam_LoseHPPreShow</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1562010722\">Advanced_Sam_Ability11_StanceDamagePreShow_Fire</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1654136523\">Advanced_Sam_Ability21_AddWeaknessPreShow</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Module α: Antilag Outburst"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1083799413\">Advanced_Sam_Trace_PointB1_ActionDelayPreShow</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-614773329\">Advanced_Sam_Ability02_DelayReduce</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-500202833\">Advanced_Sam_BreakPreShow</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"262162576\">Advanced_Sam_BreakedPreShow</a>"
        },
        {
          "name": "Change Character UI",
          "characterName": "SAM"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__262162576\">Advanced_Sam_BreakedPreShow</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start"
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
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
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "Break"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-508204277\">Advanced_Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]"
                              }
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
          "for": "<a class=\"gModGreen\" id=\"mod__-500202833\">Advanced_Sam_BreakPreShow</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start"
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
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
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player's Aim Target List}}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Toughness Reduction Preview",
                            "caster": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-614773329\">Advanced_Sam_Ability02_DelayReduce</a>",
          "stackType": "ReplaceByCaster",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-508204277\">Advanced_Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]",
              "invertCondition": true
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (0.25) || INVERT || RETURN",
                "displayLines": "-0.25",
                "constants": [],
                "variables": [
                  0.25
                ]
              }
            }
          },
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill02"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1527090005\">ReduceNextActionDelay</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variables": {
                        "parameter[0]_NormalizedValue": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1083799413\">Advanced_Sam_Trace_PointB1_ActionDelayPreShow</a>",
          "stackType": "ReplaceByCaster",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Battle Event List}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"493350230\">Advanced_Sam_PassiveAbility01_BattleEvent</a>"
                  }
                }
              ]
            },
            "skillType": [
              "Basic ATK",
              "Skill"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-508204277\">Advanced_Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]"
                },
                {
                  "name": "Compare: Variable",
                  "value1": "_PointB1_Times",
                  "compareType": ">",
                  "value2": 0
                },
                {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value1": "_PointB1_BreakableCount",
                  "compareType": ">",
                  "value2": 0
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (0.1) || Variables[1] (MIN) || Variables[2] (_PointB1_BreakableCount) || Variables[3] (_PointB1_Times) || PARAM_2 || FUNCTION || MUL || RETURN",
                "displayLines": "(0.1 * &nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(_PointB1_BreakableCount, _PointB1_Times))",
                "constants": [],
                "variables": [
                  0.1,
                  "MIN",
                  "_PointB1_BreakableCount",
                  "_PointB1_Times"
                ]
              }
            }
          },
          "execute": [
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable (VFX)",
                  "variableName": "_PointB1_BreakableCount",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player's Aim Target List}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Toughness Reduction Preview",
                        "caster": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable (VFX)",
                          "variableName": "_PointB1_BreakableCount",
                          "value": {
                            "operator": "Variables[0] (_PointB1_BreakableCount) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(_PointB1_BreakableCount + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_PointB1_BreakableCount"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1654136523\">Advanced_Sam_Ability21_AddWeaknessPreShow</a>",
          "stackType": "ReplaceByCaster",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Skill",
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
                    "target": "{{Player's Aim Target List}}"
                  },
                  "mustBeAlive2": true
                },
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-508204277\">Advanced_Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]"
                }
              ]
            },
            "toughnessReductionPreview": {
              "operator": "Variables[0] (0.5) || Variables[1] (Rank06_StanceBreakAddedRatio) || ADD || RETURN",
              "displayLines": "(0.5 + Rank06_StanceBreakAddedRatio)",
              "constants": [],
              "variables": [
                0.5,
                "Rank06_StanceBreakAddedRatio"
              ]
            },
            "addedDisplayWeakness": {
              "DamageType": "Fire"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1562010722\">Advanced_Sam_Ability11_StanceDamagePreShow_Fire</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-508204277\">Advanced_Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]"
                },
                {
                  "name": "Is Weak to Attacker",
                  "weakTo": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            "toughnessReductionPreview": {
              "operator": "Variables[0] (0.5) || Variables[1] (Rank06_StanceBreakAddedRatio) || ADD || RETURN",
              "displayLines": "(0.5 + Rank06_StanceBreakAddedRatio)",
              "constants": [],
              "variables": [
                0.5,
                "Rank06_StanceBreakAddedRatio"
              ]
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__66099957\">Advanced_Sam_LoseHPPreShow</a>",
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
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-508204277\">Advanced_Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]",
                        "invertCondition": true
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
                        "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.4) || MUL || RETURN",
                        "displayLines": "(MDF_MaxHP * 0.4)",
                        "constants": [],
                        "variables": [
                          "MDF_MaxHP",
                          0.4
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
          "for": "<a class=\"gModGreen\" id=\"mod__1353922036\">Advanced_Sam_UltraPreShow</a>",
          "stackType": "ReplaceByCaster",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "skillType": [
              "Ultimate"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Constants[0] (1) || INVERT || RETURN",
                "displayLines": "-1",
                "constants": [
                  1
                ],
                "variables": []
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1846437996\">Advanced_Sam_PassiveAbility</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Battle Event List}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"493350230\">Advanced_Sam_PassiveAbility01_BattleEvent</a>"
                        }
                      }
                    ]
                  },
                  "ignoreHPLossTriggers": true,
                  "ignoreDeathTriggers": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_HPRatioCurrent"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_PassiveResRatio",
                  "value": {
                    "operator": "Constants[0] (1) || Variables[0] (_HPRatioCurrent) || SUB || Constants[0] (1) || Variables[1] (0.2) || SUB || DIV || Variables[2] (_RedModeResRatio) || ADD || RETURN",
                    "displayLines": "(((1 - _HPRatioCurrent) / (1 - 0.2)) + _RedModeResRatio)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_HPRatioCurrent",
                      0.2,
                      "_RedModeResRatio"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_PassiveResRatio",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"468515060\">Advanced_Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.4) || Variables[1] (_PassiveResRatio) || MUL || RETURN",
                          "displayLines": "(0.4 * _PassiveResRatio)",
                          "constants": [],
                          "variables": [
                            0.4,
                            "_PassiveResRatio"
                          ]
                        }
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
                  "variableName": "_BreakDamageAddedRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_BreakDamageAddedRatio",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (3.6) || RETURN",
                      "displayLines": "3.6",
                      "constants": [],
                      "variables": [
                        3.6
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_BreakDamageAddedRatio",
                      "value": {
                        "operator": "Variables[0] (3.6) || RETURN",
                        "displayLines": "3.6",
                        "constants": [],
                        "variables": [
                          3.6
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Skill21_DamagePercentage",
                  "value": {
                    "operator": "Variables[0] (2) || Variables[1] (0.2) || Variables[2] (_BreakDamageAddedRatio) || MUL || ADD || RETURN",
                    "displayLines": "(2 + (0.2 * _BreakDamageAddedRatio))",
                    "constants": [],
                    "variables": [
                      2,
                      0.2,
                      "_BreakDamageAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Skill21_DamagePercentageAD",
                  "value": {
                    "operator": "Variables[0] (1) || Variables[1] (0.1) || Variables[2] (_BreakDamageAddedRatio) || MUL || ADD || RETURN",
                    "displayLines": "(1 + (0.1 * _BreakDamageAddedRatio))",
                    "constants": [],
                    "variables": [
                      1,
                      0.1,
                      "_BreakDamageAddedRatio"
                    ]
                  }
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
                    "value1": "CurrentHP%",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-508204277\">Advanced_Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"468515060\">Advanced_Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_HPRatioCurrent"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_PassiveResRatio",
                      "value": {
                        "operator": "Constants[0] (1) || Variables[0] (_HPRatioCurrent) || SUB || Constants[0] (1) || Variables[1] (0.2) || SUB || DIV || Variables[2] (_RedModeResRatio) || ADD || RETURN",
                        "displayLines": "(((1 - _HPRatioCurrent) / (1 - 0.2)) + _RedModeResRatio)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_HPRatioCurrent",
                          0.2,
                          "_RedModeResRatio"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_PassiveResRatio",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"468515060\">Advanced_Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.4) || Variables[1] (_PassiveResRatio) || MUL || RETURN",
                              "displayLines": "(0.4 * _PassiveResRatio)",
                              "constants": [],
                              "variables": [
                                0.4,
                                "_PassiveResRatio"
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
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"468515060\">Advanced_Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "_HPChange"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_HPChange",
                  "value": {
                    "operator": "Variables[0] (_HPChange) || INVERT || RETURN",
                    "displayLines": "-_HPChange",
                    "constants": [],
                    "variables": [
                      "_HPChange"
                    ]
                  }
                }
              ]
            },
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
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Energy%",
                        "compareType": "<",
                        "value2": 0.5
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
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Update Energy Value",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_MaxSP) || Constants[0] (0.5) || MUL || RETURN",
                        "displayLines": "(_MaxSP * 0.5)",
                        "constants": [
                          0.5
                        ],
                        "variables": [
                          "_MaxSP"
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
              "eventTrigger": "Energy Change",
              "execute": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "_ChangeValue"
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
                        "value1": "_ChangeValue",
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
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_BreakDamageAddedRatio",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_BreakDamageAddedRatio",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (3.6) || RETURN",
                          "displayLines": "3.6",
                          "constants": [],
                          "variables": [
                            3.6
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_BreakDamageAddedRatio",
                          "value": {
                            "operator": "Variables[0] (3.6) || RETURN",
                            "displayLines": "3.6",
                            "constants": [],
                            "variables": [
                              3.6
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill21_DamagePercentage",
                      "value": {
                        "operator": "Variables[0] (2) || Variables[1] (0.2) || Variables[2] (_BreakDamageAddedRatio) || MUL || ADD || RETURN",
                        "displayLines": "(2 + (0.2 * _BreakDamageAddedRatio))",
                        "constants": [],
                        "variables": [
                          2,
                          0.2,
                          "_BreakDamageAddedRatio"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill21_DamagePercentageAD",
                      "value": {
                        "operator": "Variables[0] (1) || Variables[1] (0.1) || Variables[2] (_BreakDamageAddedRatio) || MUL || ADD || RETURN",
                        "displayLines": "(1 + (0.1 * _BreakDamageAddedRatio))",
                        "constants": [],
                        "variables": [
                          1,
                          0.1,
                          "_BreakDamageAddedRatio"
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
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Firefly_Advanced_Sam_Ability21_Part02": {
      "fileName": "Firefly_Advanced_Sam_Ability21_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-385959697\">Advanced_Sam_Ultimate_BreakDamageAddRatio</a>",
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
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "healPercent": 0.25,
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1165299909\">Advanced_Sam_Ability21_FireWeakType</a>[<span class=\"descriptionNumberColor\">Additional Fire Weakness</span>]",
          "duration": 2
        },
        {
          "name": "Looped Event",
          "maxLoops": 4,
          "Event": [
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
                  "operator": "Variables[0] (Skill21_DamagePercentage) || RETURN",
                  "displayLines": "Skill21_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Skill21_DamagePercentage"
                  ]
                },
                "HitSplit": 0.15,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Fire"
                },
                "Tags": null,
                "attackType": "Skill",
                "EnergyGainPercent": "100%"
              }
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
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (Skill21_DamagePercentageAD) || RETURN",
                      "displayLines": "Skill21_DamagePercentageAD",
                      "constants": [],
                      "variables": [
                        "Skill21_DamagePercentageAD"
                      ]
                    },
                    "HitSplit": 0.15,
                    "Toughness": {
                      "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                      "displayLines": "Blast Toughness Value",
                      "constants": [],
                      "variables": [
                        "Blast Toughness Value"
                      ]
                    },
                    "ToughnessDMGType": {
                      "DamageType": "Fire"
                    },
                    "Tags": null,
                    "attackType": "Skill"
                  }
                }
              ]
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (Skill21_DamagePercentage) || RETURN",
              "displayLines": "Skill21_DamagePercentage",
              "constants": [],
              "variables": [
                "Skill21_DamagePercentage"
              ]
            },
            "HitSplit": 0.4,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Fire"
            },
            "Tags": null,
            "attackType": "Skill",
            "EnergyGainPercent": "100%"
          }
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (Skill21_DamagePercentageAD) || RETURN",
                  "displayLines": "Skill21_DamagePercentageAD",
                  "constants": [],
                  "variables": [
                    "Skill21_DamagePercentageAD"
                  ]
                },
                "HitSplit": 0.4,
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Fire"
                },
                "Tags": null,
                "attackType": "Skill"
              }
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
          "modifier": "<a class=\"gModGreen\" id=\"-385959697\">Advanced_Sam_Ultimate_BreakDamageAddRatio</a>"
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Firefly_Advanced_Sam_Ability21_Part01": {
      "fileName": "Firefly_Advanced_Sam_Ability21_Part01",
      "childAbilityList": [
        "Firefly_Sam_Ability21_Camera",
        "Firefly_Advanced_Sam_Ability21_Part01",
        "Firefly_Advanced_Sam_Ability21_Part02"
      ],
      "skillTrigger": "Skill21",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": [
        30,
        0,
        15
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Advanced_Sam_Ability21_Part02",
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
        "subTarget": "Blast Targets"
      }
    },
    "Firefly_Advanced_Sam_Ability11_Part02": {
      "fileName": "Firefly_Advanced_Sam_Ability11_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-385959697\">Advanced_Sam_Ultimate_BreakDamageAddRatio</a>",
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
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "healPercent": {
            "operator": "Variables[0] (0.2) || RETURN",
            "displayLines": "0.2",
            "constants": [],
            "variables": [
              0.2
            ]
          },
          "formula": "Heal from Target MaxHP"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.15,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Fire"
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.15,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Fire"
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.15,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Fire"
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.15,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Fire"
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.4,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Fire"
            },
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
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-385959697\">Advanced_Sam_Ultimate_BreakDamageAddRatio</a>"
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Firefly_Advanced_Sam_Ability11_Part01": {
      "fileName": "Firefly_Advanced_Sam_Ability11_Part01",
      "childAbilityList": [
        "Firefly_Sam_Ability11_Camera",
        "Firefly_Advanced_Sam_Ability11_Part01",
        "Firefly_Advanced_Sam_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": [
        15,
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
          "ability": "Advanced_Sam_Ability11_Part02",
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
    "Firefly_Advanced_Sam_Ability03_Part02": {
      "fileName": "Firefly_Advanced_Sam_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "eventID": 113101,
          "variables": {
            "BattleEvent_Sam_BaseSpeed": {
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
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-508204277\">Advanced_Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]",
          "valuePerStack": {
            "MDF_SpeedUP": {
              "operator": "Variables[0] (60) || RETURN",
              "displayLines": "60",
              "constants": [],
              "variables": [
                60
              ]
            },
            "MDF_StatusResistance": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
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
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Advance",
          "multiAdd": -1
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
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Firefly_Advanced_Sam_Ability03_Part01": {
      "fileName": "Firefly_Advanced_Sam_Ability03_Part01",
      "childAbilityList": [
        "Firefly_Sam_Ability03_Camera",
        "Firefly_Advanced_Sam_Ability03_EnterReady",
        "Firefly_Advanced_Sam_Ability03_Part01",
        "Firefly_Advanced_Sam_Ability03_Part02"
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
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Advanced_Sam_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Firefly_Advanced_Sam_Ability03_EnterReady": {
      "fileName": "Firefly_Advanced_Sam_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Firefly_Advanced_Sam_Ability02_Part02": {
      "fileName": "Firefly_Advanced_Sam_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (0.4) || RETURN",
            "displayLines": "0.4",
            "constants": [],
            "variables": [
              0.4
            ]
          },
          "consumeFloor": 1
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": {
            "operator": "Variables[0] (0.6) || RETURN",
            "displayLines": "0.6",
            "constants": [],
            "variables": [
              0.6
            ]
          },
          "isFixed": "(Fixed)"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.4,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Fire"
            },
            "Tags": null,
            "attackType": "Skill",
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
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.6,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Fire"
            },
            "Tags": null,
            "attackType": "Skill",
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
    "Firefly_Advanced_Sam_Ability02_Part01": {
      "fileName": "Firefly_Advanced_Sam_Ability02_Part01",
      "childAbilityList": [
        "Firefly_Sam_Ability02_Camera",
        "Firefly_Advanced_Sam_Ability02_Part01",
        "Firefly_Advanced_Sam_Ability02_Part02"
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
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Advanced_Sam_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
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
    "Firefly_Advanced_Sam_Ability01_Part02": {
      "fileName": "Firefly_Advanced_Sam_Ability01_Part02",
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
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "hitOwner": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
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
    "Firefly_Advanced_Sam_Ability01_Part01": {
      "fileName": "Firefly_Advanced_Sam_Ability01_Part01",
      "childAbilityList": [
        "Firefly_Sam_Ability01_Camera",
        "Firefly_Advanced_Sam_Ability01_Part01",
        "Firefly_Advanced_Sam_Ability01_Part02"
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
          "ability": "Advanced_Sam_Ability01_Part02",
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
    "Firefly_BE_BattleEvents": {
      "fileName": "Firefly_BE_BattleEvents",
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
          "ID": 113101,
          "team": "Player Team",
          "eventType": "Assist",
          "abilityList": [
            "Advanced_Sam_PassiveAbility01_BattleEvent"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevelEvent": true,
          "barType": 1,
          "actionDescription": "While SAM is in the Complete Combustion state, gains Enhanced Basic ATK and Enhanced Skill. Increases this unit's SPD, Weakness Break Efficiency, and the Break DMG taken by enemy targets, lasting until the Complete Combustion countdown turn begins."
        }
      ],
      "references": []
    }
  }
}