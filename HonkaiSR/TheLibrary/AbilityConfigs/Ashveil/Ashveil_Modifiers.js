const configAbility = {
  "fileName": "Ashveil_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-206244305\">ADV_StageAbility_Ashveil_BeforeBattleStunListener</a>",
      "onBattlePrep": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          },
          "modifier": null,
          "ID": "150401(SkillMaze)",
          "counter": 1,
          "duration": {
            "displayLines": "10"
          },
          "conditions": {
            "name": "Has Flag",
            "flagName": "Stun"
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1808468304\">ADV_StageAbility_Maze_Ashveil</a>",
      "counter": 1,
      "stackType": "Merge",
      "modifierFlags": [
        "Stun"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1033168707\">Ashveil_Eidolon6_DamageUp</a>[<span class=\"descriptionNumberColor\">Finale: And Then There Were None</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_TotalRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Finale: And Then There Were None",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(0.04 * MDF_Layer)"
              },
              "variableName": "MDF_TotalRatio"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_TotalRatio"
              },
              "isRefresh": true
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__544701936\">Ashveil_Eidolon6_AllDamageTypeResistenceDown</a>[<span class=\"descriptionNumberColor\">Finale: And Then There Were None</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "description": "All-Type RES decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeResistenceDown</span>.",
      "type": "Debuff",
      "effectName": "All-Type RES Reduction",
      "statusName": "Finale: And Then There Were None",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
              "statValue": {
                "displayLines": "-MDF_AllDamageTypeResistenceDown"
              },
              "isRefresh": true
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-599775826\">Ashveil_Eidolon4_AttackUp</a>[<span class=\"descriptionNumberColor\">Heed: Swallow Truth Whole</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_AttackUp</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Heed: Swallow Truth Whole",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_AttackUp"
              },
              "isRefresh": true
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2023732335\">Ashveil_Eidolon1_DamageTakenAdd</a>[<span class=\"descriptionNumberColor\">Beware: Venture Not at Full Moon</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_DamageTakenForShow</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Beware: Venture Not at Full Moon",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with HP%",
              "variableName": "MDF_HPRatio",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_HPRatio",
                "compareType": "<=",
                "value2": {
                  "displayLines": "MDF_HPThreshold"
                }
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_DamageTakenAdd2"
                  },
                  "isRefresh": true
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "MDF_DamageTakenAdd2"
                  },
                  "variableName": "MDF_DamageTakenForShow"
                }
              ],
              "failed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_DamageTakenAdd1"
                  },
                  "isRefresh": true
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "MDF_DamageTakenAdd1"
                  },
                  "variableName": "MDF_DamageTakenForShow"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with HP%",
              "variableName": "MDF_HPRatio",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_HPRatio",
                "compareType": "<=",
                "value2": {
                  "displayLines": "MDF_HPThreshold"
                }
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_DamageTakenAdd2"
                  },
                  "isRefresh": true
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "MDF_DamageTakenAdd2"
                  },
                  "variableName": "MDF_DamageTakenForShow"
                }
              ],
              "failed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_DamageTakenAdd1"
                  },
                  "isRefresh": true
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "MDF_DamageTakenAdd1"
                  },
                  "variableName": "MDF_DamageTakenForShow"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__35105186\">Ashveil_Eidolon1_DamageTakenAddPre</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2023732335\">Ashveil_Eidolon1_DamageTakenAdd</a>[<span class=\"descriptionNumberColor\">Beware: Venture Not at Full Moon</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_DamageTakenAdd1": {
              "displayLines": "0.24"
            },
            "MDF_DamageTakenAdd2": {
              "displayLines": "0.36"
            },
            "MDF_HPThreshold": {
              "displayLines": "0.5"
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1022843803\">Ashveil_PointB3_CriticalDamageAdd</a>[<span class=\"descriptionNumberColor\">First Fang</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "description": "CRIT DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_CriticalDamage</span>. CRIT DMG dealt by Follow-Up ATK additionally increases by <span class=\"descriptionNumberColor\">MDF_InsertCriticalDamageAdd</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "First Fang",
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
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                      "value": "MDF_InsertCriticalDamageAdd"
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_CriticalDamage"
              },
              "isRefresh": true
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2049711974\">Ashveil_PointB3_CriticalDamageAddPre</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1022843803\">Ashveil_PointB3_CriticalDamageAdd</a>[<span class=\"descriptionNumberColor\">First Fang</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_CriticalDamage": {
              "displayLines": "MDF_CriticalDamageTemp"
            },
            "MDF_InsertCriticalDamageAdd": {
              "displayLines": "MDF_InsertCriticalDamageAddTemp"
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__499961464\">Ashveil_PointB2_ListenAttack</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
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
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((SkillP01_EnhanceInsertBuffStack / 1))"
                  },
                  "variableName": "MDF_Cal1"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(0.8 + (0.1 * MDF_Cal1))"
                  },
                  "variableName": "MDF_Cal2"
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "MDF_Cal2"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1782538245\">Ashveil_PointB1_ListenCharacterLimbo</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MDF_EnemyCount"
            }
          ]
        },
        {
          "eventTrigger": "Entity Put Into Limbo [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Target Is Hostile",
                    "targetRelative1": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "targetRelative2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "entityType": "Battle Event",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1584183733\">Ashveil_PassiveFlag</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"874485230\">Ashveil_PassiveFlag_Enhance</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_EnemyCount + 1)"
                      },
                      "variableName": "MDF_EnemyCount"
                    }
                  ]
                },
                {
                  "name": "Looped Event",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_EnemyCount",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "1"
                    }
                  },
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(SkillP01_EnhanceInsertBuffStack + 1)"
                      },
                      "variableName": "SkillP01_EnhanceInsertBuffStack"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1033168707\">Ashveil_Eidolon6_DamageUp</a>[<span class=\"descriptionNumberColor\">Finale: And Then There Were None</span>]",
                          "stackLimit": {
                            "displayLines": "30"
                          },
                          "addStacksPerTrigger": {
                            "displayLines": "1"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_EnemyCount - 1)"
                      },
                      "variableName": "MDF_EnemyCount"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1644737943\">Ashveil_Passive_ListenEnhanceInsertBonusStackForShow</a>[<span class=\"descriptionNumberColor\">Gluttony</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "description": "The current stack count of \"Gluttony\" is <span class=\"descriptionNumberColor\">MDF_LayerForShow</span>. The next enhanced Talent's Follow-Up ATK will additionally deal up to a maximum of <span class=\"descriptionNumberColor\">MDF_ExtraInsertCountForShow</span> instance(s) of DMG.",
      "type": "Other",
      "statusName": "Gluttony",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_ExtraInsertCountForShow / 4))"
              },
              "variableName": "MDF_ExtraInsertCountForShow"
            },
            {
              "name": "Define Modifier Variable",
              "modifierName": null,
              "value": {
                "displayLines": "MDF_ExtraInsertCountForShow"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1000668599\">Ashveil_Passive_ListenEnhanceInsertBonusStack</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "SkillP01_EnhanceInsertBuffStack",
          "scope": "ContextCaster",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 999,
              "onChange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SkillP01_EnhanceInsertBuffStack",
                    "compareType": ">",
                    "value2": {
                      "displayLines": "SkillP01_EnhanceInsertBuffStackLimit"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "SkillP01_EnhanceInsertBuffStackLimit"
                      },
                      "variableName": "SkillP01_EnhanceInsertBuffStack"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SkillP01_EnhanceInsertBuffStack",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1644737943\">Ashveil_Passive_ListenEnhanceInsertBonusStackForShow</a>[<span class=\"descriptionNumberColor\">Gluttony</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1644737943\">Ashveil_Passive_ListenEnhanceInsertBonusStackForShow</a>[<span class=\"descriptionNumberColor\">Gluttony</span>]",
                      "counter": 0,
                      "valuePerStack": {
                        "MDF_LayerForShow": {
                          "displayLines": "SkillP01_EnhanceInsertBuffStack"
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
      "for": "<a class=\"gModGreen\" id=\"mod__826719973\">Ashveil_Passive_ListenEnergy</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "SkillP01_CurrentEnergy",
          "scope": "ContextCaster",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 99,
              "onChange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SkillP01_CurrentEnergy",
                    "compareType": ">",
                    "value2": {
                      "displayLines": "SkillP01_MaxEnergy"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "SkillP01_MaxEnergy"
                      },
                      "variableName": "SkillP01_CurrentEnergy"
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "SkillP01_CurrentEnergy"
                  },
                  "priorState": "Active"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SkillP01_CurrentEnergy",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "displayLines": "SkillP01_CurrentEnergy"
                      },
                      "priorState": "Normal"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1576406867\">Ashveil_ParasiteDebuffForShow_InsertAbility</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 801502,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null,
                "isCompareUniqueID": true,
                "invertCondition": true
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-387801534\">Ashveil_ParasiteDebuffForShow_Ability02_2</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-404579153\">Ashveil_ParasiteDebuffForShow_Ability02_1</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1362659531\">Ashveil_ParasiteDebuffForShow</a>",
      "stackType": "RetainGlobalLatest",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 801502,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null,
                "isCompareUniqueID": true,
                "invertCondition": true
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__874485230\">Ashveil_PassiveFlag_Enhance</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1584183733\">Ashveil_PassiveFlag</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1569458515\">Ashveil_InsertAbility_LastTarget</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__972275728\">Ashveil_InsertCheckSelf_Enhance</a>",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1853725951\">Ashveil_InsertRetargetSelf_Enhance</a>"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -55,
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1853725951\">Ashveil_InsertRetargetSelf_Enhance</a>"
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1853725951\">Ashveil_InsertRetargetSelf_Enhance</a>"
            }
          ]
        },
        {
          "eventTrigger": "Batch: Enemy Arrival",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1853725951\">Ashveil_InsertRetargetSelf_Enhance</a>"
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "livingState": "Mask_AliveOrRevivable"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1853725951\">Ashveil_InsertRetargetSelf_Enhance</a>"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1853725951\">Ashveil_InsertRetargetSelf_Enhance</a>",
          "parse": [
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
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Ashveil_Insert_SelectTargetSelf_Enhance",
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__532779389\">Ashveil_InsertCheckSelf</a>",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"99569822\">Ashveil_InsertRetargetSelf</a>"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -55,
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"99569822\">Ashveil_InsertRetargetSelf</a>"
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"99569822\">Ashveil_InsertRetargetSelf</a>"
            }
          ]
        },
        {
          "eventTrigger": "Batch: Enemy Arrival",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"99569822\">Ashveil_InsertRetargetSelf</a>"
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "livingState": "Mask_AliveOrRevivable"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"99569822\">Ashveil_InsertRetargetSelf</a>"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__99569822\">Ashveil_InsertRetargetSelf</a>",
          "parse": [
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
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Ashveil_Insert_SelectTargetSelf",
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1818760526\">Ashveil_Ability02_DebuffShift</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "Action Phase Start [Anyone][?]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-178840964\">Ashveil_Ability02_DebuffTransfer</a>"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-178840964\">Ashveil_Ability02_DebuffTransfer</a>"
            }
          ]
        },
        {
          "eventTrigger": "Entity Put Into Limbo [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}.[[sortByHPCurrent]]"
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]",
                      "valuePerStack": {
                        "MDF_DefenceDownTemp": {
                          "displayLines": "0.4"
                        },
                        "MDF_AllDamageTypeResistenceDownTemp": {
                          "displayLines": "0.2"
                        }
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1584183733\">Ashveil_PassiveFlag</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"874485230\">Ashveil_PassiveFlag_Enhance</a>",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1576406867\">Ashveil_ParasiteDebuffForShow_InsertAbility</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-178840964\">Ashveil_Ability02_DebuffTransfer</a>"
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-178840964\">Ashveil_Ability02_DebuffTransfer</a>"
            }
          ]
        },
        {
          "eventTrigger": "Batch: Enemy Arrival"
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-178840964\">Ashveil_Ability02_DebuffTransfer</a>"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-178840964\">Ashveil_Ability02_DebuffTransfer</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-422850470\">Ashveil_InsertAbilityHit</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__942921741\">Ashveil_Ability02_Debuff_DefenceDown</a>[<span class=\"descriptionNumberColor\">Flog: Smite Evil</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "DEF_DOWN"
      ],
      "description": "While \"Bait\" is on the field, DEF decreases by <span class=\"descriptionNumberColor\">MDF_DefenceDown</span>.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "Flog: Smite Evil",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "statValue": {
                "displayLines": "-MDF_DefenceDown"
              },
              "isRefresh": true
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill",
        "STAT_AITargetHigherPriority"
      ],
      "stackData": [
        "MDF_DefenceDownTemp",
        "MDF_AllDamageTypeResistenceDownTemp"
      ],
      "description": "This target is the \"Bait.\"",
      "type": "Other",
      "effectName": "Bait",
      "statusName": "Bait",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"942921741\">Ashveil_Ability02_Debuff_DefenceDown</a>[<span class=\"descriptionNumberColor\">Flog: Smite Evil</span>]",
          "haloStatus": true,
          "detectRevive": true,
          "valuePerStack": {
            "MDF_DefenceDown": {
              "displayLines": "MDF_DefenceDownTemp"
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"544701936\">Ashveil_Eidolon6_AllDamageTypeResistenceDown</a>[<span class=\"descriptionNumberColor\">Finale: And Then There Were None</span>]",
          "haloStatus": true,
          "detectRevive": true,
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "valuePerStack": {
            "MDF_AllDamageTypeResistenceDown": {
              "displayLines": "MDF_AllDamageTypeResistenceDownTemp"
            }
          }
        }
      ],
      "copySubModifiers": true,
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit",
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
                    "modifier": "<a class=\"gModGreen\" id=\"1062721873\">Ashveil_Passive</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-422850470\">Ashveil_InsertAbilityHit</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Left Battle [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target List Entities",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
                },
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1576406867\">Ashveil_ParasiteDebuffForShow_InsertAbility</a>"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}.[[sortByHPCurrent]]"
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]",
                      "valuePerStack": {
                        "MDF_DefenceDownTemp": {
                          "displayLines": "MDF_DefenceDownTemp"
                        },
                        "MDF_AllDamageTypeResistenceDownTemp": {
                          "displayLines": "MDF_AllDamageTypeResistenceDownTemp"
                        }
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1584183733\">Ashveil_PassiveFlag</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"874485230\">Ashveil_PassiveFlag_Enhance</a>",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
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
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
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
                  "target": "{{Current Action Owner}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true,
                  "skillTypesAllow": [
                    "Basic ATK"
                  ],
                  "trigger": "State_Normal"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target List Entities",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Target List}}"
                        },
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
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "SkillP01_CurrentEnergy",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "1"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "trigger": "State_Active"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "trigger": "State_Normal"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Unselectable Adjustment [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target List Entities",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
                },
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-404579153\">Ashveil_ParasiteDebuffForShow_Ability02_1</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-387801534\">Ashveil_ParasiteDebuffForShow_Ability02_2</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1576406867\">Ashveil_ParasiteDebuffForShow_InsertAbility</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}.[[sortByHPCurrent]]"
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1185293706\">Ashveil_Ability02_Debuff</a>[<span class=\"descriptionNumberColor\">Bait</span>]",
                      "valuePerStack": {
                        "MDF_DefenceDownTemp": {
                          "displayLines": "MDF_DefenceDownTemp"
                        },
                        "MDF_AllDamageTypeResistenceDownTemp": {
                          "displayLines": "MDF_AllDamageTypeResistenceDownTemp"
                        }
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1584183733\">Ashveil_PassiveFlag</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"874485230\">Ashveil_PassiveFlag_Enhance</a>",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"1362659531\">Ashveil_ParasiteDebuffForShow</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1998878672\">Ashveil_SpecialMarkAdder2</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "ListenBattleEventSkill",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    },
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
                    }
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Owner}}"
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
                  "name": "Toggle Skill Mark",
                  "toggle": true,
                  "skillTypesAllow": [
                    "Skill",
                    "Ultimate"
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__441988386\">Ashveil_SpecialMarkAdder</a>",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1998878672\">Ashveil_SpecialMarkAdder2</a>",
          "aliveOnly": "True",
          "haloStatus": true
        }
      ]
    }
  ],
  "references": []
}