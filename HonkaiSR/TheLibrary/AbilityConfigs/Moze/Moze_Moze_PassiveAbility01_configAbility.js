const configAbility = {
  "fileName": "Moze_Moze_PassiveAbility01",
  "childAbilityList": [
    "Moze_Moze_PassiveAbility01",
    "Moze_Moze_Insert_Part01",
    "Moze_Moze_Insert_Camera",
    "Moze_Moze_Insert_Part01_Eidolon6Extra",
    "Moze_Moze_Insert_End_Camera"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": 10,
  "toughnessList": [
    10,
    0,
    0
  ],
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_MaxEnergy",
      "value": {
        "operator": "Variables[0] (9) || RETURN",
        "displayLines": "9",
        "constants": [],
        "variables": [
          9
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_SkillP01_CurrentCount",
      "value": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Moze_ListenUnstageModifier"
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
          "variableName": "MDF_InsertDamagePercentage",
          "value": {
            "operator": "Variables[0] (1.6) || Variables[1] (0.25) || ADD || RETURN",
            "displayLines": "(1.6 + 0.25)",
            "constants": [],
            "variables": [
              1.6,
              0.25
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_InsertDamagePercentage",
          "value": {
            "operator": "Variables[0] (1.6) || RETURN",
            "displayLines": "1.6",
            "constants": [],
            "variables": [
              1.6
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Vengewise"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Moze_Eidolon1_PreChangeUltraToInsertModifier"
        }
      ]
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
          "to": "Caster",
          "modifier": "Moze_Eidolon1_AddSPModifier"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Moze_PassiveModifier"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "operator": "Variables[0] (MDF_MaxEnergy) || RETURN",
        "displayLines": "MDF_MaxEnergy",
        "constants": [],
        "variables": [
          "MDF_MaxEnergy"
        ]
      },
      "assignState": "True",
      "priorState": "Disable",
      "bar#": 2
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Moze_OnlyMozeOnStageModifier",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "All Enemies (AOE)",
              "modifier": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Moze_Ability02_InShadowModifier"
            },
            {
              "name": "Disable Abilities",
              "target": "Owner of this Modifier",
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
      "for": "Moze_ListenUnstageModifier",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_OnStageMember",
              "value": 0
            },
            {
              "name": "Find New Target",
              "from": "Allied Team",
              "searchRandom": true,
              "includeDyingTargets": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Character ID",
                    "ID": 1223,
                    "target": "Use Prior Target(s) Defined",
                    "characterName": "Moze",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Entity Type",
                    "target": "Use Prior Target(s) Defined",
                    "type": "Character"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_OnStageMember",
                  "value": {
                    "operator": "Variables[0] (MDF_OnStageMember) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_OnStageMember + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_OnStageMember"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_OnStageMember",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Moze_OnlyMozeOnStageModifier"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "Monster_W3_Aventurine_Gambling",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Moze_OnlyMozeOnStageModifier"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_OnStageMember",
              "value": 0
            },
            {
              "name": "Find New Target",
              "from": "Allied Team",
              "searchRandom": true,
              "includeDyingTargets": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Character ID",
                    "ID": 1223,
                    "target": "Use Prior Target(s) Defined",
                    "characterName": "Moze",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Entity Type",
                    "target": "Use Prior Target(s) Defined",
                    "type": "Character"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_OnStageMember",
                  "value": {
                    "operator": "Variables[0] (MDF_OnStageMember) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_OnStageMember + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_OnStageMember"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_OnStageMember",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Moze_OnlyMozeOnStageModifier"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_OnStageMember",
              "value": 0
            },
            {
              "name": "Find New Target",
              "from": "Allied Team",
              "searchRandom": true,
              "includeDyingTargets": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Character ID",
                    "ID": 1223,
                    "target": "Use Prior Target(s) Defined",
                    "characterName": "Moze",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Entity Type",
                    "target": "Use Prior Target(s) Defined",
                    "type": "Character"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_OnStageMember",
                  "value": {
                    "operator": "Variables[0] (MDF_OnStageMember) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_OnStageMember + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_OnStageMember"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_OnStageMember",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Moze_OnlyMozeOnStageModifier"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_DisableListener",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Moze_OnlyMozeOnStageModifier"
                    }
                  ]
                }
              ]
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
                "modifier": "Monster_W3_Aventurine_Gambling"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DisableListener",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Moze_OnlyMozeOnStageModifier"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "Monster_W3_Aventurine_Gambling"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_OnStageMember",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": "Allied Team",
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1223,
                        "target": "Use Prior Target(s) Defined",
                        "characterName": "Moze",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity Type",
                        "target": "Use Prior Target(s) Defined",
                        "type": "Character"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_OnStageMember",
                      "value": {
                        "operator": "Variables[0] (MDF_OnStageMember) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_OnStageMember + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_OnStageMember"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_OnStageMember",
                    "compareType": "=",
                    "value2": 0
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DisableListener",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Moze_OnlyMozeOnStageModifier"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_OnStageMember",
              "value": 0
            },
            {
              "name": "Find New Target",
              "from": "Allied Team",
              "searchRandom": true,
              "includeDyingTargets": true,
              "conditions": {
                "name": "Character ID",
                "ID": 1223,
                "target": "Use Prior Target(s) Defined",
                "characterName": "Moze",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_OnStageMember",
                  "value": {
                    "operator": "Variables[0] (MDF_OnStageMember) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_OnStageMember + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_OnStageMember"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_OnStageMember",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Moze_OnlyMozeOnStageModifier"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_DisableListener",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Moze_OnlyMozeOnStageModifier"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_OnStageMember",
              "value": 0
            },
            {
              "name": "Find New Target",
              "from": "Allied Team",
              "searchRandom": true,
              "includeDyingTargets": true,
              "conditions": {
                "name": "Character ID",
                "ID": 1223,
                "target": "Use Prior Target(s) Defined",
                "characterName": "Moze",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_OnStageMember",
                  "value": {
                    "operator": "Variables[0] (MDF_OnStageMember) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_OnStageMember + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_OnStageMember"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_OnStageMember",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Moze_OnlyMozeOnStageModifier"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_DisableListener",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Moze_OnlyMozeOnStageModifier"
                    }
                  ]
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
      "for": "Moze_PassiveModifier",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]"
        },
        {
          "eventTrigger": "Action Phase Start [Owner][?]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_ActionEnd",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": "Allied Team",
              "variableName": "MDF_ActivePlayer",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Target is Unselectable",
                    "target": "Use Prior Target(s) Defined",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": "Use Prior Target(s) Defined",
                    "invertCondition": true
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_ActionEnd",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Use Prior Target(s) Defined",
                "modifier": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Moze_Ability02_InShadowModifier"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]"
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
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamLight"
                  },
                  {
                    "name": "Target is Unselectable",
                    "target": "Use Prior Target(s) Defined",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": "Use Prior Target(s) Defined",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ActivePlayer",
                  "value": {
                    "operator": "Variables[0] (MDF_ActivePlayer) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(MDF_ActivePlayer - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_ActivePlayer"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_ActivePlayer",
                    "compareType": "<=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "All Enemies (AOE)",
                      "modifier": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Moze_Ability02_InShadowModifier"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Daggerhold"
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "target": "Caster",
                  "advanceType": "Advance",
                  "value": "-0.3"
                }
              ]
            }
          ],
          "priorityLevel": -80
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": "Caster",
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": "Caster",
                    "flagName": "DisableAction",
                    "invertCondition": true
                  },
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": "Caster"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "OnInsertAbort_Flg",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemies Still Alive",
                    "target": "Caster",
                    "includeNonTargets": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": "All Enemies (AOE)",
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": "Use Prior Target(s) Defined"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Moze_Insert_Part01_Eidolon6Extra",
                          "abilitySource": "Caster",
                          "abilityTarget": "Use Prior Target(s) Defined",
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
                "name": "Modifier Was",
                "modifier": "Moze_Ability02_InShadowModifier"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Use Prior Target(s) Defined",
                  "variableName": "MDF_BaseSpeed",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Use Prior Target(s) Defined",
                  "variableName": "MDF_SpeedDelta",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Daggerhold"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Target",
                            "target": "Current Turn Owner",
                            "target2": "Caster"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_ActionEnd",
                            "compareType": "=",
                            "value2": 1,
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": {
                            "operator": "Variables[0] (0.2) || INVERT || RETURN",
                            "displayLines": "-0.2",
                            "constants": [],
                            "variables": [
                              0.2
                            ]
                          },
                          "adjustmentType": "Advance"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": "Use Prior Target(s) Defined",
                          "advanceType": "Advance",
                          "value": "-0.2"
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
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": "Caster",
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": "Caster",
                    "flagName": "DisableAction",
                    "invertCondition": true
                  },
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": "Caster"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "OnInsertAbort_Flg",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemies Still Alive",
                    "target": "Caster",
                    "includeNonTargets": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": "All Enemies (AOE)",
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": "Use Prior Target(s) Defined"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Moze_Insert_Part01_Eidolon6Extra",
                          "abilitySource": "Caster",
                          "abilityTarget": "Use Prior Target(s) Defined",
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
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "OnInsertAbort_Flg",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Moze_Ability02_InShadowModifier"
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
                    "name": "Has Flag",
                    "target": "Caster",
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": "Caster",
                    "flagName": "DisableAction",
                    "invertCondition": true
                  },
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": "Caster"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "OnInsertAbort_Flg",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemies Still Alive",
                    "target": "Caster",
                    "includeNonTargets": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": "All Enemies (AOE)",
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": "Use Prior Target(s) Defined"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Moze_Insert_Part01_Eidolon6Extra",
                          "abilitySource": "Caster",
                          "abilityTarget": "Use Prior Target(s) Defined",
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
      "for": "Moze_Eidolon1_ChangeUltraToInsertModifier",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Attack-Type Extension",
              "target": "Owner of this Modifier",
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
              "target": "Owner of this Modifier",
              "typeToExtend": "Ultimate",
              "extendTypeTo": "Follow-up"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Moze_Eidolon1_PreChangeUltraToInsertModifier",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Moze_Eidolon1_ChangeUltraToInsertModifier"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Moze_Eidolon1_ChangeUltraToInsertModifier"
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
      "for": "Moze_Eidolon1_AddSPModifier",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": "Caster",
                  "value": {
                    "operator": "Variables[0] (20) || RETURN",
                    "displayLines": "20",
                    "constants": [],
                    "variables": [
                      20
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}