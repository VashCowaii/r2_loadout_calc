const configAbility = {
  "fileName": "March7thTH_Modifiers",
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
      "for": "M_Mar_7th_10_InsertCheck",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Mar_7th_10_InsertRetarget"
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
              "functionName": "Mar_7th_10_InsertRetarget"
            }
          ],
          "priorityLevel": -55
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Mar_7th_10_InsertRetarget"
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Mar_7th_10_InsertRetarget"
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
                  "functionName": "Mar_7th_10_InsertRetarget"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Mar_7th_10_InsertRetarget",
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
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Mar_7th_10_Eidolon2_Insert_SelectTarget",
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
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Mar_7th_10_Eidolon2_CD[<span class=\"descriptionNumberColor\">Blade Dances on Waves' Fight</span>]",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_target_stance_before_attack"
      ],
      "description": "The \"Blade Dances on Waves' Fight\" effect cannot be triggered yet.",
      "type": "Other",
      "statusName": "Blade Dances on Waves' Fight"
    },
    {
      "name": "Modifier Construction",
      "for": "M_Mar_7th_10_ForbidBP",
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
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "M_Mar_7th_10_MasterAttackEnergyPreshow",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "skillType": [
          "Skill",
          "Basic ATK"
        ],
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Compare: Variable",
              "value1": "EnergyBar_CurEnergy",
              "compareType": ">=",
              "value2": {
                "operator": "Variables[0] (EnergyBar_MaxEnergy) || Variables[1] (Gain_Energy_Value) || SUB || RETURN",
                "displayLines": "(EnergyBar_MaxEnergy - Gain_Energy_Value)",
                "constants": [],
                "variables": [
                  "EnergyBar_MaxEnergy",
                  "Gain_Energy_Value"
                ]
              },
              "contextScope": "ContextCaster"
            },
            {
              "name": "Is Part Of Team",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team Ability Target Lock}}"
              },
              "team": "TeamDark"
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0(Set AV)"
        }
      },
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "Mar_7th_10_Ability02_Master[<span class=\"descriptionNumberColor\">Shifu</span>]",
        "casterFilter": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "M_Mar_7th_10_MasterUltraEnergyPreshow",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "skillType": [
          "Ultimate"
        ],
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Compare: Variable",
              "value1": "EnergyBar_CurEnergy",
              "compareType": ">=",
              "value2": {
                "operator": "Variables[0] (EnergyBar_MaxEnergy) || Variables[1] (Gain_Energy_Value) || SUB || RETURN",
                "displayLines": "(EnergyBar_MaxEnergy - Gain_Energy_Value)",
                "constants": [],
                "variables": [
                  "EnergyBar_MaxEnergy",
                  "Gain_Energy_Value"
                ]
              },
              "contextScope": "ContextCaster"
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0(Set AV)"
        }
      },
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "Mar_7th_10_Ability02_Master[<span class=\"descriptionNumberColor\">Shifu</span>]",
        "casterFilter": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Mar_7th_10_Enhance_Visual",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "Mar_7th_10_Enhance",
        "casterFilter": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Mar_7th_10_Enhance",
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
              "modifier": "M_Mar_7th_10_ForbidBP"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_has_enhanced_this_turn",
              "value": 0
            },
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
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
              "name": "Update Displayed Energy Bar",
              "priorState": "Normal"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Mar_7th_10_Enhance_Visual"
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
                "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                "displayLines": "MDF_PropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            },
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
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
              "name": "Update Displayed Energy Bar",
              "priorState": "Active"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "M_Mar_7th_10_ForbidBP"
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [
        "_has_enhanced_this_turn"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Mar_7th_10_Eidolon1_SpeedUp[<span class=\"descriptionNumberColor\">My Sword Stirs Starlight</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
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
      "description": "When Shifu is on the field, increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "My Sword Stirs Starlight"
    },
    {
      "name": "Modifier Construction",
      "for": "Mar_7th_10_Ability02_Master_SpeedUp[<span class=\"descriptionNumberColor\">Master, It's Tea Time!</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
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
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [],
      "description": "Increases SPD of %CasterName's Shifu by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Buff",
      "statusName": "Master, It's Tea Time!",
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "Mar_7th_10_Ability02_Master[<span class=\"descriptionNumberColor\">Shifu</span>]",
        "casterFilter": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Mar_7th_10_Ability02_HaveMaster"
    },
    {
      "name": "Modifier Construction",
      "for": "Mar_7th_10_Ability02_Master[<span class=\"descriptionNumberColor\">Shifu</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Mar_7th_10_Ability02_Master[<span class=\"descriptionNumberColor\">Shifu</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Mar_7th_10_Ability02_HaveMaster"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Mar_7th_10_Eidolon1_SpeedUp[<span class=\"descriptionNumberColor\">My Sword Stirs Starlight</span>]"
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
              "modifier": "M_Mar_7th_10_MasterUltraEnergyPreshow"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "M_Mar_7th_10_MasterAttackEnergyPreshow"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Mar_7th_10_Ability02_HaveMaster"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Mar_7th_10_Eidolon1_SpeedUp[<span class=\"descriptionNumberColor\">My Sword Stirs Starlight</span>]",
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Target is Pathstrider",
                "path": [
                  "Destruction",
                  "Erudition",
                  "The Hunt",
                  "Remembrance"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Normal_StanceRatio",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Gain_Energy_Value",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Harmony",
                      "Nihility",
                      "Preservation",
                      "Abundance"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Normal_StanceRatio",
                      "value": {
                        "operator": "Constants[0] (1) || Variables[0] (1) || ADD || RETURN",
                        "displayLines": "(1 + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          1
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Gain_Energy_Value",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Mar_7th_10_GainEnergyWithCheck",
              "variables": {
                "parameter[0]_AddValue": {
                  "operator": "Variables[0] (Gain_Energy_Value) || RETURN",
                  "displayLines": "Gain_Energy_Value",
                  "constants": [],
                  "variables": [
                    "Gain_Energy_Value"
                  ]
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_attack_flag",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_attack_flag",
              "value": 0
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
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_attack_flag",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Mar_7th_10_GainEnergyWithCheck",
                  "variables": {
                    "parameter[0]_AddValue": {
                      "operator": "Variables[0] (Gain_Energy_Value) || RETURN",
                      "displayLines": "Gain_Energy_Value",
                      "constants": [],
                      "variables": [
                        "Gain_Energy_Value"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_attack_flag",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "After using an attack or Ultimate, %CasterName gains a max of 1 Charge point each time.",
      "type": "Other",
      "effectName": "Become Shifu",
      "statusName": "Shifu"
    },
    {
      "name": "Modifier Construction",
      "for": "Mar_7th_10_Energy[<span class=\"descriptionNumberColor\">Charge</span>]",
      "counter": 1,
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RetainCountZero"
      ],
      "stackData": [
        "MDF_PropertyRatio",
        "MDF_Count"
      ],
      "latentQueue": [],
      "description": "When Charge equals to <span class=\"descriptionNumberColor\">MDF_Count</span> or more, immediately takes action and simultaneously increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>. Additionally, Basic ATK gets Enhanced.",
      "type": "Other",
      "statusName": "Charge"
    }
  ],
  "references": []
}