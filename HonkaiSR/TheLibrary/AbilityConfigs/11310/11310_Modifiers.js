const configAbility = {
  "fileName": "11310_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-340351438\">Sam_PassiveAbility_RedMode_DisableUltraSkill</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1084322434\">Sam_ActionBarPreShow</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Action Phase Start [Owner][?]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "_SamSpeed",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(1000 / _SamSpeed)"
              },
              "variableName": "_SamActionDelay"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "TargetList": [
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
                      "modifier": "<a class=\"gModGreen\" id=\"92987575\">Sam_PassiveAbility01_BattleEvent</a>"
                    }
                  }
                ]
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "_BEActionDelay",
                  "readTarget": {
                    "name": "Target Sequence",
                    "TargetList": [
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
                          "modifier": "<a class=\"gModGreen\" id=\"92987575\">Sam_PassiveAbility01_BattleEvent</a>"
                        }
                      }
                    ]
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_SamActionDelay",
                    "compareType": ">",
                    "value2": {
                      "displayLines": "_BEActionDelay"
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Action Bar Display",
                      "triggerName": "Status_Status2",
                      "target": {
                        "name": "Target Sequence",
                        "TargetList": [
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
                              "modifier": "<a class=\"gModGreen\" id=\"92987575\">Sam_PassiveAbility01_BattleEvent</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__881956526\">Sam_Eidolon2_BonusCD</a>[<span class=\"descriptionNumberColor\">From Shattered Sky, I Free Fall</span>]",
      "stackType": "ReplaceByCaster",
      "description": "The \"From Shattered Sky, I Free Fall\" effect cannot be triggered yet.",
      "type": "Other",
      "statusName": "From Shattered Sky, I Free Fall"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__539387692\">Sam_Eidolon2_BonusCD_LuoJi</a>",
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
                "displayLines": "(Rank02_CD - 1)"
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1135525513\">Sam_Eidolon4_Endurance</a>",
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
                  "value": -1,
                  "variableName": "MDF_PropertyValue"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__64395692\">Sam_Ultimate_BreakDamageAddRatio</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-2077791877\">Sam_ForceStanceDamage</a>",
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
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
              "value": {
                "displayLines": "UnusedUnderThisBase_2766"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__154726309\">Sam_Eidolon6_UltraDamageTypeAddRatio</a>[<span class=\"descriptionNumberColor\">In Finalized Morrow, I Full Bloom</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Fire RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
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
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__100735339\">Sam_PointB2_SuperBreakBonus</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SuperBreakBuff"
      ],
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "priorityLevel": 100,
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
                  "displayLines": "UnusedUnderThisBase_6552"
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
                      "displayLines": "UnusedUnderThisBase_6583"
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
                      "displayLines": "UnusedUnderThisBase_6581"
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
                          "displayLines": "UnusedUnderThisBase_6582"
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
      "for": "<a class=\"gModGreen\" id=\"mod__639093534\">Sam_Ability21_FireWeakType</a>[<span class=\"descriptionNumberColor\">Extra Fire Weakness</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "WEAKNESS_IMPLANT"
      ],
      "description": "Implanted with extra Fire Weakness.",
      "type": "Debuff",
      "effectName": "Implant Weakness: Fire",
      "statusName": "Extra Fire Weakness",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1021523829\">Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]",
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
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1084783230\">Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]",
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
          "modifier": "<a class=\"gModGreen\" id=\"-340351438\">Sam_PassiveAbility_RedMode_DisableUltraSkill</a>",
          "aliveOnly": "True",
          "haloStatus": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"100735339\">Sam_PointB2_SuperBreakBonus</a>",
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
                  "displayLines": "UnusedUnderThisBase_6581"
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
              "name": "Change Entity Turn-State",
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
                  "value": 0,
                  "variableName": "Rank02_CD"
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
              "value": 0,
              "variableName": "_RedModeResRatio"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"154726309\">Sam_Eidolon6_UltraDamageTypeAddRatio</a>[<span class=\"descriptionNumberColor\">In Finalized Morrow, I Full Bloom</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"881956526\">Sam_Eidolon2_BonusCD</a>[<span class=\"descriptionNumberColor\">From Shattered Sky, I Free Fall</span>]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1021523829\">Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with HP%",
                  "variableName": "_HPRatioCurrent",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(((1 - _HPRatioCurrent) / (1 - UnusedUnderThisBase_6578)) + _RedModeResRatio)"
                  },
                  "variableName": "_PassiveResRatio"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1021523829\">Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "(UnusedUnderThisBase_6558 * _PassiveResRatio)"
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
                  "value": {
                    "displayLines": "(Rank02_CD - 1)"
                  },
                  "variableName": "Rank02_CD"
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
                        "displayLines": "Rank02_CD"
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
                      "modifier": "<a class=\"gModGreen\" id=\"881956526\">Sam_Eidolon2_BonusCD</a>[<span class=\"descriptionNumberColor\">From Shattered Sky, I Free Fall</span>]"
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
                      "value": "(UnusedUnderThisBase_6548 + Rank06_StanceBreakAddedRatio)"
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
              "name": "Change Entity Turn-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase2"
            },
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "_RedModeResRatio"
            },
            {
              "name": "Define Custom Variable with HP%",
              "variableName": "_HPRatioCurrent",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(((1 - _HPRatioCurrent) / (1 - UnusedUnderThisBase_6578)) + _RedModeResRatio)"
              },
              "variableName": "_PassiveResRatio"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1021523829\">Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "(UnusedUnderThisBase_6558 * _PassiveResRatio)"
                }
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "_BreakDamageAddedRatio",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
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
                  "value": {
                    "displayLines": "(UnusedUnderThisBase_6548 + UnusedUnderThisBase_6546)"
                  },
                  "variableName": "MDF_FinalDamageUP"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "UnusedUnderThisBase_6548"
                  },
                  "variableName": "MDF_FinalDamageUP"
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
                "displayLines": "MDF_SpeedUP"
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
                  "value": {
                    "displayLines": "(MDF_StatusResistance + UnusedUnderThisBase_6562)"
                  },
                  "variableName": "MDF_StatusResistance"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                  "value": {
                    "displayLines": "MDF_StatusResistance"
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
                    "displayLines": "MDF_StatusResistance"
                  }
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
                  "modifier": "<a class=\"gModGreen\" id=\"154726309\">Sam_Eidolon6_UltraDamageTypeAddRatio</a>[<span class=\"descriptionNumberColor\">In Finalized Morrow, I Full Bloom</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "UnusedUnderThisBase_2796"
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
                  "value": {
                    "displayLines": "((Rank02_CD + UnusedUnderThisBase_2795) + 1)"
                  },
                  "variableName": "Rank02_CD"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "_Rank02_SamSelfInsertActionFlag"
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": [
                    "Sam_Eidolon2_Bonus"
                  ],
                  "afterInjection": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "((Rank02_CD - UnusedUnderThisBase_2795) - 1)"
                      },
                      "variableName": "Rank02_CD"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "_Rank02_SamSelfInsertActionFlag"
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
                  "value": {
                    "displayLines": "((Rank02_CD + UnusedUnderThisBase_2795) + 1)"
                  },
                  "variableName": "Rank02_CD"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "_Rank02_SamSelfInsertActionFlag"
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": [
                    "Sam_Eidolon2_Bonus"
                  ],
                  "afterInjection": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "((Rank02_CD - UnusedUnderThisBase_2795) - 1)"
                      },
                      "variableName": "Rank02_CD"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "_Rank02_SamSelfInsertActionFlag"
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
                  "value": {
                    "displayLines": "((Rank02_CD + UnusedUnderThisBase_2795) + 1)"
                  },
                  "variableName": "Rank02_CD"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "_Rank02_SamSelfInsertActionFlag"
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": [
                    "Sam_Eidolon2_Bonus"
                  ],
                  "afterInjection": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "((Rank02_CD - UnusedUnderThisBase_2795) - 1)"
                      },
                      "variableName": "Rank02_CD"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "_Rank02_SamSelfInsertActionFlag"
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
                    "value2": "Sam_Eidolon2_Bonus"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "_Rank02_SamSelfInsertActionFlag"
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
                  "modifier": "<a class=\"gModGreen\" id=\"881956526\">Sam_Eidolon2_BonusCD</a>[<span class=\"descriptionNumberColor\">From Shattered Sky, I Free Fall</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"539387692\">Sam_Eidolon2_BonusCD_LuoJi</a>"
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
          "eventTrigger": "Sound stuff nobody cares about",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "value2": "soundevent_marker_vo_avatar_advantage02_sam_start"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "value2": "soundevent_marker_vo_avatar_turn_begin02_sam_01_start"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Parameter String",
                        "value2": "soundevent_marker_vo_avatar_turn_begin02_sam_02_start"
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Parameter String",
                            "value2": "soundevent_marker_vo_avatar_waiting02_sam_start"
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
          "eventTrigger": "Sound stuff nobody cares about"
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "displayLines": "UnusedUnderThisBase_6581"
              },
              "enteringRange": [
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
                      "modifier": "<a class=\"gModGreen\" id=\"100735339\">Sam_PointB2_SuperBreakBonus</a>"
                    }
                  ]
                }
              ],
              "leavingRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"100735339\">Sam_PointB2_SuperBreakBonus</a>"
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