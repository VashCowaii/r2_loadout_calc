const configAbility = {
  "fileName": "Phainon_Modifiers",
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
      "for": "M_Phainon_Ability21_InsertCheck",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Phainon_InsertRetarget"
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
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Phainon_InsertRetarget"
            }
          ],
          "priorityLevel": -55
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Phainon_InsertRetarget"
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Phainon_InsertRetarget"
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
                  "functionName": "Phainon_InsertRetarget"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Phainon_InsertRetarget",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Phainon_Ultimate_LimboMark"
              },
              "passed": [
                "Modifier Deletes Itself"
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "conditionActive": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Phainon_Ultimate_LimboMark",
                            "invertCondition": true
                          }
                        ]
                      },
                      "abilityName": "Phainon_Ability21_Insert_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "AvatarInsertAttackSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "DisableAction",
                        "STAT_CTRL"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_haveNotGainCountFromEnemyAction"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_Tree03_Property[<span class=\"descriptionNumberColor\">Shine with Valor</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_PropertyRatio * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [],
      "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>. This effect stacks up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
      "type": "Buff",
      "statusName": "Shine with Valor"
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_Eidolon2_Property[<span class=\"descriptionNumberColor\">Sky and Earth Churn Mortal Froth</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistancePhysicalPEN</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                "displayLines": "MDF_PropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Physical RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Buff",
      "statusName": "Sky and Earth Churn Mortal Froth",
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_Ultimate_TeamStealth[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Assign DEPARTED(Modifier: Standard_Departed)",
              "groupName": "MuteEntityAction"
            }
          ]
        }
      ],
      "description": "Those in the Departed state cannot be designated as ability targets and will not appear in the Action Order.",
      "type": "Other",
      "statusName": "Ruinous Irontomb"
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_SPOverflow[<span class=\"descriptionNumberColor\">Coreflame</span>]",
      "stackType": "Multiple",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "CurOverflowSpecialSP",
              "value": 0
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Phainon_Passive_ChargeEnergyToGainSP",
              "variables": {
                "parameter[0]_AddValue": {
                  "operator": "Variables[0] (MDF_Count) || RETURN",
                  "displayLines": "MDF_Count",
                  "constants": [],
                  "variables": [
                    "MDF_Count"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "SpecialEnergy%",
                    "compareType": "<",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Count"
      ],
      "latentQueue": [],
      "description": "The current number of overflow \"Coreflame\" points is <span class=\"descriptionNumberColor\">MDF_Count</span>. Gains an equal amount of \"Coreflame\" when the transformation ends.",
      "type": "Other",
      "statusName": "Coreflame"
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_Ultimate_Weakness[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_AttachWeakness"
      ],
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
                "Physical"
              ]
            }
          ]
        }
      ],
      "description": "Additionally implanted Physical Weakness.",
      "type": "Debuff",
      "statusName": "Ruinous Irontomb"
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_FinalBE_Hint",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_NormalBE_Hint",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_Ultimate_ActionBarManager",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "({{Modifier Holder}} + {{All Team Members with Unselectable Team Members(Exclude Self)}}).[[addBattleEvents]]"
                  },
                  {
                    "name": "Sort by Modifier Value",
                    "modifier": "M_Phainon_Ultimate_ActionOrder"
                  }
                ]
              },
              "ifTargetFound": [
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
                      "name": "Set Action-State",
                      "on": null,
                      "stateName": "Phainon_Ultra"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Phainon_Ultimate_TeamStealth[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[addBattleEvents]]"
              },
              "modifier": "M_Phainon_Ultimate_ActionOrder"
            },
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "isLock": false
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "Phainon_UltraEnd_Property[<span class=\"descriptionNumberColor\">He Who Bears the World Must Burn</span>]",
              "duration": 1,
              "referenceModifier": "MReference_SpeedRatioUp",
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
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_ActionOrderIndex",
              "value": 1
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "({{Modifier Holder}} + {{All Team Members with Unselectable Team Members(Exclude Self)}}).[[addBattleEvents]].[[sortByAV]]"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "M_Phainon_Ultimate_ActionOrder",
                  "counter": {
                    "operator": "Variables[0] (MDF_ActionOrderIndex) || RETURN",
                    "displayLines": "MDF_ActionOrderIndex",
                    "constants": [],
                    "variables": [
                      "MDF_ActionOrderIndex"
                    ]
                  },
                  "referenceModifier": "MReference_Empty"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ActionOrderIndex",
                  "value": {
                    "operator": "Variables[0] (MDF_ActionOrderIndex) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_ActionOrderIndex + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_ActionOrderIndex"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "Phainon_Ultra",
              "state": false,
              "cancelQueueUlt": true
            },
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
              "whitelistTag": 46
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Current Turn Owner}}"
                    }
                  },
                  {
                    "name": "Current Turn's Action Phase is Over",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Reset Turn AV",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "skipTurn": true
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
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Modifier Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_ForceActionable"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Phainon_Ultimate_TeamStealth[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Phainon_Ultimate_TeamStealth[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]"
                },
                {
                  "name": "Remove Flags from Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagName": [
                    "FormationAssetCenterWhenSingle"
                  ],
                  "modifierName": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]",
                  "casterFilter": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Modifier Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_ForceActionable"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_ForceActionable",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Phainon_Ultimate_TeamStealth[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]",
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
                  "modifier": "Phainon_Ultimate_TeamStealth[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Phainon's Forced-Action Teammates}}"
                    },
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Flags to Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagName": [
                        "FormationAssetCenterWhenSingle"
                      ],
                      "modifierName": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]",
                      "casterFilter": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "({{All Team Members with Unselectable Team Members(Exclude Self)}} - {{Phainon's Forced-Action Teammates}}).[[addBattleEvents]]"
          },
          "modifier": "Phainon_Ultimate_TeamStealth[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]",
          "haloStatus": true,
          "includeBattleEvent": true
        }
      ],
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_Ultimate_VisualManager",
      "modifierFlags": [
        "KeepOnDeathrattle",
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character UI",
              "characterName": "Phainon"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "M_Phainon_IsAbility31",
                "invertCondition": true
              }
            },
            {
              "name": "Add to Team Target Grouping",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team Entity}}"
                  },
                  "Adjust Relative to Target, Get Team",
                  {
                    "name": "Filter by Life-State",
                    "state": "Mask_DiedButNotDispose"
                  }
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (CurSpecialSP) || Variables[1] (CurOverflowSpecialSP) || ADD || RETURN",
                "displayLines": "(CurSpecialSP + CurOverflowSpecialSP)",
                "constants": [],
                "variables": [
                  "CurSpecialSP",
                  "CurOverflowSpecialSP"
                ]
              },
              "activeCount": {
                "operator": "Variables[0] (12) || RETURN",
                "displayLines": "12",
                "constants": [],
                "variables": [
                  12
                ]
              },
              "maximum": {
                "operator": "Variables[0] (12) || RETURN",
                "displayLines": "12",
                "constants": [],
                "variables": [
                  12
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 4
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CurSpecialSP",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (12) || RETURN",
                  "displayLines": "12",
                  "constants": [],
                  "variables": [
                    12
                  ]
                }
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "priorState": "Active"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Khaslana(Battle Event Cluster)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Set Phainon Action Count",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Khaslana(Battle Event Cluster)}}"
                  },
                  "variableName": "#CL_MDF_BECount",
                  "livingTargets": true,
                  "context": "ContextModifier"
                },
                {
                  "name": "Set Phainon Action Count",
                  "value": {
                    "operator": "Variables[0] (#CL_MDF_BECount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(#CL_MDF_BECount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "#CL_MDF_BECount"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase2_Limbo"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Change Character UI",
              "characterName": "Khaslana",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Khaslana(Battle Event Cluster)}}"
              },
              "variableName": "#CL_MDF_BECount",
              "livingTargets": true,
              "context": "ContextModifier"
            },
            {
              "name": "Set Phainon Action Count",
              "value": {
                "operator": "Variables[0] (#CL_MDF_BECount) || RETURN",
                "displayLines": "#CL_MDF_BECount",
                "constants": [],
                "variables": [
                  "#CL_MDF_BECount"
                ]
              }
            },
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "Skill22_Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (4) || RETURN",
                "displayLines": "4",
                "constants": [],
                "variables": [
                  4
                ]
              }
            },
            {
              "name": "Set Phainon Charge Points",
              "value": {
                "operator": "Variables[0] (Skill22_Energy) || RETURN",
                "displayLines": "Skill22_Energy",
                "constants": [],
                "variables": [
                  "Skill22_Energy"
                ]
              }
            },
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team Entity}}"
                  },
                  "Adjust Relative to Target, Get Team",
                  {
                    "name": "Filter by Life-State",
                    "state": "Mask_DiedButNotDispose"
                  }
                ]
              },
              "stayInTeam": true
            },
            {
              "name": "Set Phainon Action Count",
              "value": {
                "operator": "Variables[0] (8) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(8 - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  8
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "priorState": "Normal",
              "bar#": 1
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{All Team Members with Unselectables}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
              }
            }
          ]
        },
        {
          "eventTrigger": "Action Start [Owner]",
          "execute": [
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": "Hide",
              "abilityName": "Skill"
            }
          ]
        },
        {
          "eventTrigger": "Action Start [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Phainon_Guard[<span class=\"descriptionNumberColor\">Soulscorch</span>]"
              },
              "passed": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase2_Defend"
                }
              ],
              "failed": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase2"
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
                  },
                  {
                    "name": "Target is Unselectable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Is Entity a Part/Body Extension",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Lineup Position",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "scope": "ContextModifier",
                  "variableName": "_enemyIndex"
                },
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "variableName": "_enemyCount",
                  "context": "ContextModifier"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_enemyIndex",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (_enemyCount) || Constants[0] (2) || DIV || RETURN",
                      "displayLines": "(_enemyCount / 2)",
                      "constants": [
                        2
                      ],
                      "variables": [
                        "_enemyCount"
                      ]
                    }
                  }
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
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "Phainon_BEInsertAction"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Khaslana(Battle Event Cluster)}}"
                  },
                  "variableName": "#CL_MDF_BECount",
                  "livingTargets": true,
                  "context": "ContextModifier"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Khaslana(Battle Event Cluster)}}"
                    },
                    "compareType": "<=",
                    "value2": 0
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start ",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "Skill22_Energy",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (4) || RETURN",
                  "displayLines": "4",
                  "constants": [],
                  "variables": [
                    4
                  ]
                }
              },
              "passed": [
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Skill"
                }
              ],
              "failed": [
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Skill"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Khaslana(Battle Event Cluster)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Set Phainon Action Count",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Khaslana(Battle Event Cluster)}}"
                  },
                  "variableName": "#CL_MDF_BECount",
                  "livingTargets": true,
                  "context": "ContextModifier"
                },
                {
                  "name": "Set Phainon Action Count",
                  "value": {
                    "operator": "Variables[0] (#CL_MDF_BECount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(#CL_MDF_BECount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "#CL_MDF_BECount"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter View-Mode [Anyone]"
        },
        {
          "eventTrigger": "Exit View-Mode [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Current Action Owner}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill21",
                    "useActive": true
                  }
                }
              ]
            }
          ]
        }
      ],
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_Ultimate_LimboMark",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "ListenBattleEventSkill",
        "EnduranceLogicOnly",
        "CustomEvent_InfiniteRefresh",
        "FormationAssetCenterWhenSingle",
        "SpecialActionState",
        "SpecialBattleArea"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Khaslana(Battle Event Cluster)}}"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Phainon_Guard[<span class=\"descriptionNumberColor\">Soulscorch</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "Phainon_Ultimate_Weakness[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "M_Phainon_IsAbility31",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Phainon_ClearAvatarArea",
                  "variables": {
                    "IsAsyncLoad": 0
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "March to Oblivion"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Phainon_Passive_ChargeEnergyToGainSP",
                  "variables": {
                    "parameter[0]_AddValue": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Shine with Valor"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Phainon_Tree03_Property[<span class=\"descriptionNumberColor\">Shine with Valor</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
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
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "skillSlot": "Basic ATK",
              "enableSecondaryType": "ControlSkill04"
            }
          ]
        },
        {
          "eventTrigger": "Turn Start [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "function_Phainon_UltraEndCheck"
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
              "modifier": "Phainon_Ultimate_ActionBarManager"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{All Team Members with Unselectables}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Current Turn Owner}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Reconstruct Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Current Turn Owner}}"
                  },
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Modifier_Callback_Value",
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "LifeTime"
                  },
                  "modifierType": "Buff",
                  "execute": [
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Current Turn Owner}}"
                      },
                      "modifierName": "ParamModifier",
                      "function": "Add",
                      "value": 1,
                      "valueType": "Duration"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                "displayLines": "MDF_PropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyRatio2) || RETURN",
                "displayLines": "MDF_PropertyRatio2",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio2"
                ]
              }
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
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill22",
              "skillSlot": "Skill",
              "enableSecondaryType": "ControlSkill02"
            },
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill21",
              "skillSlot": "Skill",
              "enableSecondaryType": "ControlSkill04"
            },
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
        },
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Phainon_Ultimate_LimboMark"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Phainon_Ability31_SelectTarget_OnLimbo",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "AvatarReviveSelf",
              "ownerState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ],
          "priorityLevel": -80
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
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
            }
          ]
        },
        {
          "eventTrigger": "Action Completed [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "UnOperable"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "function_Phainon_UltraEndCheck"
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "function_Phainon_UltraEndCheck"
            }
          ],
          "priorityLevel": -55
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "function_Phainon_UltraEndCheck"
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start ",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Khaslana(Battle Event Cluster)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 1
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
                "modifier": "ClearAvatarArea_ByAbility"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "conditionActive": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                  },
                  "abilityName": "Phainon_Ability31_SelectTarget",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "priorityTag": "AvatarInsertAttackSelf",
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
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "function_Phainon_UltraEndCheck"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
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
                },
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "function_Phainon_UltraEndCheck"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Battle Event/Summon Died [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Khaslana(Battle Event Cluster)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Redirect AV Changes",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "endRedirect": true
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Khaslana(Battle Event Cluster)}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Redirect AV Changes",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "to": {
                        "name": "Target Name",
                        "target": "{{Khaslana(Battle Event Cluster)}}.[[sortByAV]].[[index1]]"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Departed State: Start [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "function_Phainon_UltraEndCheck",
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
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Phainon_Ultimate_LimboMark"
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Khaslana(Battle Event Cluster)}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "<=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "skillOwner": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "QueuedUltimates",
                        "compareType": "<=",
                        "value2": 0,
                        "includeInjectedActions": true
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "conditionActive": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                  },
                  "abilityName": "Phainon_Ability31_SelectTarget",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "priorityTag": "AvatarInsertAttackSelf",
                  "ownerState": "Mask_AliveOrLimbo",
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
      ],
      "stackData": [
        "MDF_PropertyRatio",
        "MDF_PropertyRatio2"
      ],
      "latentQueue": [],
      "description": "Immune to Crowd Control debuffs. ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>, and Max HP increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio2</span>.",
      "type": "Other",
      "statusName": "Divine Vessel",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Phainon_Ultimate_VisualManager"
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Phainon_Eidolon2_Property[<span class=\"descriptionNumberColor\">Sky and Earth Churn Mortal Froth</span>]",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
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
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "Phainon_Ultimate_Weakness[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]",
          "haloStatus": true
        }
      ]
    }
  ],
  "references": []
}