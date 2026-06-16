const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 113101,
  "trimCharacterName": 113101,
  "abilityList": [
    "113101_Modifiers",
    "113101_Advanced_Sam_PassiveAbility01_BattleEvent"
  ],
  "abilityObject": {
    "113101_Modifiers": {
      "fileName": "113101_Modifiers",
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
                      "operator": "Variables[0] (UnusedUnderThisBase_6071) || RETURN",
                      "displayLines": "UnusedUnderThisBase_6071",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_6071"
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
                          "operator": "Variables[0] (UnusedUnderThisBase_6102) || RETURN",
                          "displayLines": "UnusedUnderThisBase_6102",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_6102"
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
                          "operator": "Variables[0] (UnusedUnderThisBase_6100) || RETURN",
                          "displayLines": "UnusedUnderThisBase_6100",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_6100"
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
                              "operator": "Variables[0] (UnusedUnderThisBase_6101) || RETURN",
                              "displayLines": "UnusedUnderThisBase_6101",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_6101"
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
                    "conditionList": "PointB2"
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
                      "operator": "Variables[0] (UnusedUnderThisBase_6100) || RETURN",
                      "displayLines": "UnusedUnderThisBase_6100",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_6100"
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
                  "skillSlot": "Basic ATK",
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
                        "operator": "Constants[0] (1) || Variables[0] (_HPRatioCurrent) || SUB || Constants[0] (1) || Variables[1] (UnusedUnderThisBase_6097) || SUB || DIV || Variables[2] (_RedModeResRatio) || ADD || RETURN",
                        "displayLines": "(((1 - _HPRatioCurrent) / (1 - UnusedUnderThisBase_6097)) + _RedModeResRatio)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_HPRatioCurrent",
                          "UnusedUnderThisBase_6097",
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
                          "operator": "Variables[0] (UnusedUnderThisBase_6077) || Variables[1] (_PassiveResRatio) || MUL || RETURN",
                          "displayLines": "(UnusedUnderThisBase_6077 * _PassiveResRatio)",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_6077",
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
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
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
                          "value": "(UnusedUnderThisBase_6067 + Rank06_StanceBreakAddedRatio)"
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
                  "skillSlot": "Basic ATK",
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
                    "operator": "Constants[0] (1) || Variables[0] (_HPRatioCurrent) || SUB || Constants[0] (1) || Variables[1] (UnusedUnderThisBase_6097) || SUB || DIV || Variables[2] (_RedModeResRatio) || ADD || RETURN",
                    "displayLines": "(((1 - _HPRatioCurrent) / (1 - UnusedUnderThisBase_6097)) + _RedModeResRatio)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_HPRatioCurrent",
                      "UnusedUnderThisBase_6097",
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
                      "operator": "Variables[0] (UnusedUnderThisBase_6077) || Variables[1] (_PassiveResRatio) || MUL || RETURN",
                      "displayLines": "(UnusedUnderThisBase_6077 * _PassiveResRatio)",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_6077",
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
                        "operator": "Variables[0] (UnusedUnderThisBase_6067) || Variables[1] (UnusedUnderThisBase_6065) || ADD || RETURN",
                        "displayLines": "(UnusedUnderThisBase_6067 + UnusedUnderThisBase_6065)",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_6067",
                          "UnusedUnderThisBase_6065"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_FinalDamageUP",
                      "value": {
                        "operator": "Variables[0] (UnusedUnderThisBase_6067) || RETURN",
                        "displayLines": "UnusedUnderThisBase_6067",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_6067"
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
                        "operator": "Variables[0] (MDF_StatusResistance) || Variables[1] (UnusedUnderThisBase_6081) || ADD || RETURN",
                        "displayLines": "(MDF_StatusResistance + UnusedUnderThisBase_6081)",
                        "constants": [],
                        "variables": [
                          "MDF_StatusResistance",
                          "UnusedUnderThisBase_6081"
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
                    "conditionList": "PointB1"
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
                          "operator": "Variables[0] (UnusedUnderThisBase_6098) || RETURN",
                          "displayLines": "UnusedUnderThisBase_6098",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_6098"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_PointB1_Times",
                      "value": {
                        "operator": "Variables[0] (UnusedUnderThisBase_6075) || RETURN",
                        "displayLines": "UnusedUnderThisBase_6075",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_6075"
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
                          "operator": "Variables[0] (UnusedUnderThisBase_6085) || RETURN",
                          "displayLines": "UnusedUnderThisBase_6085",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_6085"
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
                        "conditionList": "PointB1"
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
                      "advanceType": "Set",
                      "multiAdd": "UnusedUnderThisBase_6099"
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
                    "operator": "Variables[0] (UnusedUnderThisBase_6100) || RETURN",
                    "displayLines": "UnusedUnderThisBase_6100",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_6100"
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "PointB2"
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
    "113101_Advanced_Sam_PassiveAbility01_BattleEvent": {
      "fileName": "113101_Advanced_Sam_PassiveAbility01_BattleEvent",
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
          "modifier": "<a class=\"gModGreen\" id=\"493350230\">Advanced_Sam_PassiveAbility01_BattleEvent</a>"
        },
        {
          "name": "Block Advance/Delay Effects",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "whitelist": {
            "name": "Target Name",
            "target": "{{Caster}} + {{Battle Event's Caster}}"
          },
          "whitelistTag": "Mask_TurnBasedAdvance"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__493350230\">Advanced_Sam_PassiveAbility01_BattleEvent</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Advanced_Sam_PassiveAbility01_BattleEvent_Insert",
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
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_Sam_BaseSpeed) || RETURN",
                    "displayLines": "BattleEvent_Sam_BaseSpeed",
                    "constants": [],
                    "variables": [
                      "BattleEvent_Sam_BaseSpeed"
                    ]
                  }
                },
                {
                  "name": "Update Action Bar Display",
                  "triggerName": "Status_Status2",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    }
  },
  "enemyData": {},
  "isBattleEvent": true
}