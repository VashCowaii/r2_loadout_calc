const configAbility = {
  "fileName": "Phainon_Phainon_Ability21_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "variableName": "ADF_EnemyCount",
      "livingTargets": true,
      "context": "ContextAbility"
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
        "operator": "Variables[0] (Skill21_ExtraEnergyAdd) || Variables[1] (ADF_EnemyCount) || ADD || RETURN",
        "displayLines": "(Skill21_ExtraEnergyAdd + ADF_EnemyCount)",
        "constants": [],
        "variables": [
          "Skill21_ExtraEnergyAdd",
          "ADF_EnemyCount"
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
          "variableName": "ADF_AddCount",
          "value": {
            "operator": "Constants[0] (1) || Variables[0] (4) || ADD || RETURN",
            "displayLines": "(1 + 4)",
            "constants": [
              1
            ],
            "variables": [
              4
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "ADF_AddCount",
          "value": 1
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Phainon_Guard[<span class=\"descriptionNumberColor\">Soulscorch</span>]",
      "valuePerStack": {
        "MDF_PropertyRatio": {
          "operator": "Variables[0] (0.75) || RETURN",
          "displayLines": "0.75",
          "constants": [],
          "variables": [
            0.75
          ]
        }
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] (ADF_AddCount) || RETURN",
        "displayLines": "ADF_AddCount",
        "constants": [],
        "variables": [
          "ADF_AddCount"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Phainon_Guard_VisualOnStack"
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "set": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "M_Phainon_Ability21_Mark"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Phainon_Guard_VisualAfterAbilityUse"
    },
    "Trigger: Ability End"
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "M_Phainon_Ability21_Insert_Preshow"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Phainon_Ability21_Mark",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "RemoveWhenOwnerUnselectable"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_Guard_Visual_ReadyForHitBack",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "priorState": "Custom1"
            }
          ]
        },
        {
          "eventTrigger": "Action Start [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_Guard_Visual_ReadyForHitBack_OverrideHitEffect",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            "Modifier Deletes Itself",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Phainon_Guard_OverrideHitEffect"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Phainon_Guard_OverrideHitEffect"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_Guard_OverrideHitEffect",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_Guard_VisualAfterAbilityUse",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Hit-Class",
              "reset": true
            },
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
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Phainon_Guard_OverrideHitEffect"
            },
            {
              "name": "Set Hit-Class"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase2_Defend"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_Guard_VisualOnStack",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_Guard[<span class=\"descriptionNumberColor\">Soulscorch</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
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
              "priorState": "Active",
              "bar#": 4
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "priorState": "Normal",
              "bar#": 1
            }
          ]
        },
        {
          "eventTrigger": "Turn Start [Anyone]",
          "execute": [
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
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "M_Phainon_Ability21_Mark"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Phainon_Ultimate_LimboMark",
                    "invertCondition": true
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
                "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                "displayLines": "MDF_PropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
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
                    "modifier": "Phainon_Ultimate_LimboMark",
                    "invertCondition": true
                  },
                  {
                    "name": "Filter Target List",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "M_Phainon_Ability21_Mark",
                      "invertCondition": true
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Hostile Entities(AOE)}}"
                    }
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
                  "modifier": "Phainon_Guard_Visual_ReadyForHitBack",
                  "silentAdd": true
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Phainon_Guard[<span class=\"descriptionNumberColor\">Soulscorch</span>]",
                  "addStacksPerTrigger": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_haveNotGainCountFromEnemyAction",
                  "value": 0
                }
              ]
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "function_Phainon_HitBackCheck"
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
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_haveNotGainCountFromEnemyAction",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
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
                  "modifier": "Phainon_Guard[<span class=\"descriptionNumberColor\">Soulscorch</span>]",
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_haveNotGainCountFromEnemyAction",
              "value": 0
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "function_Phainon_HitBackCheck"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
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
                  "name": "Define Custom Variable",
                  "variableName": "_haveNotGainCountFromEnemyAction",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Owner has Pending",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "M_Phainon_Ability21_Mark"
                    }
                  ]
                }
              ]
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
                    "modifier": "Phainon_Ultimate_LimboMark",
                    "invertCondition": true
                  },
                  {
                    "name": "Filter Target List",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "M_Phainon_Ability21_Mark",
                      "invertCondition": true
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Hostile Entities(AOE)}}"
                    }
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
                  "modifier": "Phainon_Guard_Visual_ReadyForHitBack_OverrideHitEffect",
                  "silentAdd": true
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_Count",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
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
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "function_Phainon_HitBackCheck",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Phainon_Ultimate_LimboMark",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "M_Phainon_Ability21_Mark"
                  },
                  "noTargetFound": [
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
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "M_Phainon_Ability21_InsertCheck"
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
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [],
      "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>. Launches Counter after enemy targets finish taking actions.",
      "type": "Buff",
      "effectName": "Soulscorch",
      "statusName": "Soulscorch",
      "stackLimit": 9999,
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
      }
    },
    {
      "name": "Modifier Construction",
      "for": "M_Phainon_Ability21_Insert_Preshow",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Hostile Entities(AOE)}}"
        },
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Skill Name",
              "skillName": "Skill21",
              "useActive": true
            },
            {
              "name": "Compare: Target Count",
              "target": {
                "name": "Target Name",
                "target": "{{Khaslana(Battle Event Cluster)}}"
              },
              "compareType": ">",
              "value2": 0
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0(Set AV)"
        }
      }
    }
  ]
}