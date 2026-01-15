const configAbility = {
  "fileName": "TheDahlia_Constance_PassiveAbility01",
  "childAbilityList": [
    "TheDahlia_Constance_PassiveAbility01",
    "TheDahlia_Constance_Insert_SelectTarget",
    "TheDahlia_Constance_Insert_Camera",
    "TheDahlia_Constance_Insert_Part01",
    "TheDahlia_Constance_Insert_Part02"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": 2,
  "toughnessList": [
    3,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Constance_Passive"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Constance_Ultimate_AddWeaknessPreShow"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Rank01_Activated",
          "value": 1
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Rank01_Activated",
          "value": 0
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Constance_ReduceStanceTriggerCD",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Get Revived [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Sub-Target in HP-Share Group",
                "target": "Owner of this Modifier"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": "All Enemies(All)",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Sub-Target in HP-Share Group",
                        "target": "Use Prior Target(s) Defined"
                      },
                      {
                        "name": "Compare: Target",
                        "target": "Use Prior Target(s) Defined",
                        "target2": "Owner of this Modifier",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Constance_ReduceStanceTriggerCD",
                      "removeToBeAdded": true
                    }
                  ]
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Constance_ReduceStanceTriggerCD",
              "removeToBeAdded": true
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Eidolon1_ReduceStance",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": "Ability Target List",
              "includeDyingTargets": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": "Use Prior Target(s) Defined",
                        "flagName": "MuteBreak"
                      },
                      {
                        "name": "Compare: Ability Value",
                        "target": "Use Prior Target(s) Defined",
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;",
                        "compareType": ">",
                        "value2": 0
                      }
                    ],
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "Constance_ReduceStanceTriggerCD",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Use Prior Target(s) Defined",
                  "variableName": "MDF_TargetMaxStanceValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                  "warningType": "MaxToughness"
                },
                {
                  "name": "Define Custom Variable",
                  "target": "Owner of this Modifier",
                  "scope": "ContextModifier",
                  "variableName": "MDF_StanceValue",
                  "value": {
                    "operator": "Variables[0] (MDF_TargetMaxStanceValue) || Variables[1] (MDF_StanceRatio) || MUL || RETURN",
                    "displayLines": "(MDF_TargetMaxStanceValue * MDF_StanceRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_TargetMaxStanceValue",
                      "MDF_StanceRatio"
                    ]
                  }
                },
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] (MDF_StanceValue) || RETURN",
                    "displayLines": "MDF_StanceValue",
                    "constants": [],
                    "variables": [
                      "MDF_StanceValue"
                    ]
                  },
                  "attacker": "Owner of this Modifier",
                  "forceReduction": true,
                  "ignoreAttackerBonuses": true,
                  "canDelay": true,
                  "livingState": "Mask_AliveOrLimbo",
                  "ToughnessDMGType": {
                    "name": "Damage Type Source",
                    "sourceType": {}
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Constance_ReduceStanceTriggerCD"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_StancePreview",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "isPercentofMaxToughness": true,
        "addedPercent": {
          "operator": "Variables[0] (MDF_StanceRatio) || RETURN",
          "displayLines": "MDF_StanceRatio",
          "constants": [],
          "variables": [
            "MDF_StanceRatio"
          ]
        },
        "maxToughness": {
          "operator": "Variables[0] (MDF_MinStanceValue) || Constants[0] (3) || MUL || RETURN",
          "displayLines": "(MDF_MinStanceValue * 3)",
          "constants": [
            3
          ],
          "variables": [
            "MDF_MinStanceValue"
          ]
        },
        "minToughness": {
          "operator": "Variables[0] (MDF_MaxStanceValue) || Constants[0] (3) || MUL || RETURN",
          "displayLines": "(MDF_MaxStanceValue * 3)",
          "constants": [
            3
          ],
          "variables": [
            "MDF_MaxStanceValue"
          ]
        },
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Flag",
                  "target": "Use Prior Target(s) Defined",
                  "flagName": "MuteBreak"
                },
                {
                  "name": "Compare: Ability Value",
                  "target": "Use Prior Target(s) Defined",
                  "value1": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;",
                  "compareType": ">",
                  "value2": 0
                }
              ],
              "invertCondition": true
            },
            {
              "name": "Has Modifier",
              "target": "Use Prior Target(s) Defined",
              "modifier": "Constance_ReduceStanceTriggerCD",
              "invertCondition": true
            }
          ]
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "_M_Constance_Aura_ElementDamage",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": "Ability Target List",
              "ifTargetFound": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "DealSuperBreakDamage_DamagePerformance",
                  "target": "Use Prior Target(s) Defined",
                  "variables": {
                    "value_0_DamagePercentage": {
                      "operator": "Variables[0] (MDF_SuperBreakDamagePercentage) || RETURN",
                      "displayLines": "MDF_SuperBreakDamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_SuperBreakDamagePercentage"
                      ]
                    }
                  },
                  "damageSequence": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "PursuedDamage_PerformanceDelay",
                      "target": "Use Prior Target(s) Defined"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Use Prior Target(s) Defined",
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "ReadTargetType",
                          "target": "Owner of this Modifier"
                        },
                        "DamageBreak": {
                          "operator": "Variables[0] (value_0_DamagePercentage) || RETURN",
                          "displayLines": "value_0_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "value_0_DamagePercentage"
                          ]
                        },
                        "dmgFormula": "Break DMG Scaling",
                        "dmgFormulaFinal": "Pure (No DMG%)",
                        "Toughness": null,
                        "Tags": [
                          "Super Break"
                        ],
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
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Eidolon1_SuperBreak[<span class=\"descriptionNumberColor\">When a Bud Readies to Bloom</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "STAT_SuperBreakBuff"
      ],
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "_M_Constance_Aura_ElementDamage",
              "valuePerStack": {
                "MDF_SuperBreakDamagePercentage": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ],
          "priorityLevel": 100
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "description": "After attacking a Weakness Broken enemy target, converts the Toughness Reduction of this attack into 1 instance of <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> Super Break DMG.",
      "type": "Buff",
      "statusName": "When a Bud Readies to Bloom"
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_DancerSuperBreak",
      "modifierFlags": [
        "STAT_SuperBreakBuff"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Modifier-Specific Variable",
              "modifierName": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]",
              "variableName": "MDF_PropertyValue",
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
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "_M_Constance_Aura_ElementDamage",
              "valuePerStack": {
                "MDF_SuperBreakDamagePercentage": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ],
          "priorityLevel": 100
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Dancer_UITOP",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": "Owner of this Modifier",
                "target2": "Caster"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]",
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
                "name": "Compare: Target",
                "target": "Owner of this Modifier",
                "target2": "Caster",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Teammates + Unselectable (Excluding Owner, and Owner of this Modifier)",
                  "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                }
              ]
            }
          ]
        }
      ],
      "description": "After attacking a Weakness Broken enemy target, converts the Toughness Reduction of this attack into 1 instance of <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> Super Break DMG.",
      "type": "Buff",
      "statusName": "Dance Partner",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "Owner of this Modifier",
          "modifier": "Constance_DancerSuperBreak",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (Rank01_Activated) || Variables[1] (0.6) || Variables[2] (0.4) || ADD || Variables[1] (0.6) || CHECK || RETURN",
              "displayLines": "check(value:Rank01_Activated, then:(0.6 + 0.4), else:0.6)",
              "constants": [],
              "variables": [
                "Rank01_Activated",
                0.6,
                0.4
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "Owner of this Modifier",
          "modifier": "Constance_Dancer_UITOP"
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "Owner of this Modifier",
          "modifier": "Constance_StancePreview",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "valuePerStack": {
            "MDF_StanceRatio": {
              "operator": "Variables[0] (0.25) || RETURN",
              "displayLines": "0.25",
              "constants": [],
              "variables": [
                0.25
              ]
            },
            "MDF_MinStanceValue": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            },
            "MDF_MaxStanceValue": {
              "operator": "Variables[0] (300) || RETURN",
              "displayLines": "300",
              "constants": [],
              "variables": [
                300
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "Owner of this Modifier",
          "modifier": "Constance_Eidolon1_ReduceStance",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "valuePerStack": {
            "MDF_StanceRatio": {
              "operator": "Variables[0] (0.25) || RETURN",
              "displayLines": "0.25",
              "constants": [],
              "variables": [
                0.25
              ]
            },
            "MDF_MinStanceValue": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            },
            "MDF_MaxStanceValue": {
              "operator": "Variables[0] (300) || RETURN",
              "displayLines": "300",
              "constants": [],
              "variables": [
                300
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "_M_Constance_ListenInsert_SubOnEnemy",
      "execute": [
        {
          "eventTrigger": "Being Attacked End [Owner]",
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
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "Constance_InsertCD[<span class=\"descriptionNumberColor\">Who's Afraid of Constance?</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Target",
                    "target": "Use Prior Target(s) Defined",
                    "target2": "Caster",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemies Still Alive",
                    "target": "Caster"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Constance_Insert_SelectTarget",
                      "abilitySource": "Caster",
                      "abilityTarget": "All Hostile Entities (AOE)",
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
                      "to": "Caster",
                      "modifier": "_M_Constance_InsertCheck"
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
      "for": "_M_Constance_DancerManager",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
            },
            {
              "name": "Find New Target",
              "from": "All Team Members(In Context, with Untargetable, exclude Owner)",
              "maxTargets": 1,
              "conditions": {
                "name": "Has Flag",
                "target": "Use Prior Target(s) Defined",
                "flagName": "STAT_TriggerBattleCharacter"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Teammates + Unselectable (Living, Excluding Owner) [Sort by Break Effect][Reverse][1]",
                  "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "Rank01_Activated",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Teammates + Unselectable (Excluding Owner, Memosprites, and Dahlia's Dance Partners)",
                  "modifier": "Constance_Eidolon1_SuperBreak[<span class=\"descriptionNumberColor\">When a Bud Readies to Bloom</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": "All Teammates + Unselectable (Excluding Owner)",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": "Dahlia's Dance Partners [Exclude Caster]",
                    "value1": "TeamCharacterCount",
                    "compareType": "<=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Teammates + Unselectable (Living, Excluding Owner) [Sort by Break Effect][Reverse][1]",
                  "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": "All Team Members(In Context, with Untargetable, NO Memosprites)",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "Rank01_Activated",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Constance_Eidolon1_SuperBreak[<span class=\"descriptionNumberColor\">When a Bud Readies to Bloom</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
                      ]
                    }
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
                    "name": "Modifier Was",
                    "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                  },
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOrLimbo",
                    "target": "Caster"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": "Dahlia's Dance Partners [Exclude Caster]",
                    "value1": "TeamCharacterCount",
                    "compareType": "<=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Teammates + Unselectable (Living, Excluding Owner) [Sort by Break Effect][Reverse][1]",
                  "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Ultimate_AddWeaknessPreShow",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Ultimate",
        "addedDisplayWeakness": {
          "TargetType": "TargetAlias",
          "TargetAlias": "Constance_Dancers",
          "Sequence": [],
          "TargetList": []
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Eidolon2_PropertyValue[<span class=\"descriptionNumberColor\">Fresh, Ethereal, and Beloved</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "description": "Decreases All-Type RES by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>",
      "type": "Debuff",
      "effectName": "All-Type RES Reduction",
      "statusName": "Fresh, Ethereal, and Beloved"
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Eidolon2_Halo",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "All Hostile Entities (AOE)(ALL)",
              "modifier": "Constance_Eidolon2_PropertyValue[<span class=\"descriptionNumberColor\">Fresh, Ethereal, and Beloved</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": "All Hostile Entities (AOE)(ALL)",
                "target": "Use Prior Target(s) Defined",
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Constance_Eidolon2_PropertyValue[<span class=\"descriptionNumberColor\">Fresh, Ethereal, and Beloved</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
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
      "for": "Constance_MonsterPhaseChangeControl",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "CustomEvent_MonsterChangePhaseTrigger"
      ],
      "execute": [
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Find New Target",
              "from": "All Enemies(All)",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Is Sub-Target in HP-Share Group",
                    "target": "Use Prior Target(s) Defined"
                  },
                  {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "Enemy_Standard_ChangephaseMark"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Constance_ReduceStanceTriggerCD",
                  "removeToBeAdded": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Eidolon6_Property[<span class=\"descriptionNumberColor\">And Yet, Always, Deathly Beautiful</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
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
      ],
      "description": "Break Effect increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "And Yet, Always, Deathly Beautiful"
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Eidolon6_PropertyListen",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Dahlia's Dance Partners",
              "modifier": "Constance_Eidolon6_Property[<span class=\"descriptionNumberColor\">And Yet, Always, Deathly Beautiful</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                }
              }
            }
          ],
          "priorityLevel": -80
        },
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Constance_Eidolon6_Property[<span class=\"descriptionNumberColor\">And Yet, Always, Deathly Beautiful</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
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
      "for": "Constance_Tree01_Property[<span class=\"descriptionNumberColor\">Yet Another Funeral</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": "Caster",
              "variableName": "MDF_PropertyValueCaster",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "context": "ContextModifier"
            },
            {
              "name": "Define Custom Variable",
              "target": "Owner of this Modifier",
              "scope": "ContextModifier",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValueCaster) || Variables[1] (0.24) || MUL || Variables[2] (0.5) || ADD || RETURN",
                "displayLines": "((MDF_PropertyValueCaster * 0.24) + 0.5)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValueCaster",
                  0.24,
                  0.5
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakConverted</span>&nbsp;",
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
      ],
      "description": "Break Effect increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Break Effect Boost",
      "statusName": "Yet Another Funeral"
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_ListenTrace01",
      "execute": [
        {
          "eventTrigger": "Receiving Heal End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": "All Teammates + Battle Events(Excluding Owner)",
                    "target": "Use Prior Target(s) Defined(REAL SOURCE OF)",
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "_M_Constance_Tree01_CD",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "_M_Constance_Tree01_CD",
                  "referenceModifier": "MReference_Mark_RemoveOnTurnEnd"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Team Members(In Context, with Untargetable, NO Memosprites)[Exclude Caster]",
                  "modifier": "Constance_Tree01_Property[<span class=\"descriptionNumberColor\">Yet Another Funeral</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
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
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Team Members(In Context, with Untargetable, NO Memosprites)[Exclude Caster]",
                  "modifier": "Constance_Tree01_Property[<span class=\"descriptionNumberColor\">Yet Another Funeral</span>]",
                  "duration": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  }
                }
              ]
            }
          ],
          "priorityLevel": -80
        },
        {
          "eventTrigger": "Created Shield [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": "All Teammates + Battle Events(Excluding Owner)",
                    "target": "Use Prior Target(s) Defined(REAL SOURCE OF)",
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Compare: Target",
                    "target": "Use Secondary Prior Target(s) Defined",
                    "target2": "Owner of this Modifier"
                  },
                  {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "_M_Constance_Tree01_CD",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "_M_Constance_Tree01_CD",
                  "referenceModifier": "MReference_Mark_RemoveOnTurnEnd"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Team Members(In Context, with Untargetable, NO Memosprites)[Exclude Caster]",
                  "modifier": "Constance_Tree01_Property[<span class=\"descriptionNumberColor\">Yet Another Funeral</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
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
      "for": "Constance_Passive",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
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
                    "operator": "Variables[0] (35) || RETURN",
                    "displayLines": "35",
                    "constants": [],
                    "variables": [
                      35
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "_M_Constance_DancerManager"
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "Caster",
          "modifier": "Constance_MonsterPhaseChangeControl",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "Caster",
          "modifier": "Constance_Eidolon6_PropertyListen",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "Caster",
          "modifier": "Constance_ListenTrace01",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Yet Another Funeral"
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "Caster",
          "modifier": "Constance_Eidolon2_Halo",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
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
          "name": "Add Sub-Events/Bonuses",
          "to": "All Hostile Entities (AOE)(ALL)",
          "modifier": "_M_Constance_ListenInsert_SubOnEnemy",
          "aliveOnly": "False",
          "haloStatus": true
        }
      ]
    }
  ]
}