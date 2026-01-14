const configAbility = {
  "fileName": "TopazNumby_Topaz_PassiveAbility01",
  "childAbilityList": [
    "TopazNumby_Topaz_PassiveAbility01",
    "TopazNumby_Topaz_Eidolon4_ReduceDelay",
    "TopazNumby_Topaz_BE_NormalAttackDamage",
    "TopazNumby_Topaz_BE_UltraAttackDamage"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    20,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Topaz_Passive"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Topaz_Passive_Sub_ListenAction"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Topaz_BPAbility_ModifyBEAction"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Topaz_Ultimate_Normal_ModifyBEAction"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Topaz_Ultimate_BPAbility_ModifyBEAction"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Overdraft"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Topaz_Normal_ModifyBEAction"
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
          "name": "Define Custom Variable",
          "variableName": "MaxEnhance",
          "value": {
            "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
            "displayLines": "(2 + 1)",
            "constants": [],
            "variables": [
              2,
              1
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MaxEnhance",
          "value": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        }
      ]
    },
    {
      "name": "Add Battle Event",
      "teamName": "Allied Team",
      "eventID": 11216,
      "variables": null
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Numby",
      "modifier": "Topaz_BE_BaseSpeed"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Financial Turmoil"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Topaz_PointB2Effect"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Numby",
          "modifier": "Topaz_BE_ReduceDelay"
        }
      ]
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "operator": "Variables[0] (MaxEnhance) || RETURN",
        "displayLines": "MaxEnhance",
        "constants": [],
        "variables": [
          "MaxEnhance"
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 3,
      "cooldown": 0
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Topaz_Passive_Sub_ListenAction",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Action Phase Start [Anyone][?]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": "All Team Members(In Context, with Untargetable + Battle Events)",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Compare: Target Count SUM",
                    "target": "All Enemies (AOE)(Living)",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": "Use Prior Target(s) Defined",
                      "modifier": "Topaz_BETargetTag[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Topaz_BE_FindNoTargetFlag"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": "All Team Members(In Context, with Untargetable + Battle Events)",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Compare: Target Count SUM",
                    "target": "All Enemies (AOE)(Living)",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": "Use Prior Target(s) Defined",
                      "modifier": "Topaz_BETargetTag[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Topaz_BE_FindNoTargetFlagOnUltraOrExtraTurn"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": "All Team Members(In Context, with Untargetable + Battle Events)",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Compare: Target Count SUM",
                    "target": "All Enemies (AOE)(Living)",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": "Use Prior Target(s) Defined",
                      "modifier": "Topaz_BETargetTag[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Topaz_BE_FindNoTargetFlagOnUltraOrExtraTurn"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": "All Team Members(In Context, with Untargetable + Battle Events)",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Compare: Target Count SUM",
                    "target": "All Enemies (AOE)(Living)",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": "Use Prior Target(s) Defined",
                      "modifier": "Topaz_BETargetTag[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Topaz_BE_FindNoTargetFlag"
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
      "for": "Topaz_Passive",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Take Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "Trigger Ability",
              "from": "Numby",
              "ability": "Topaz_BE_Hit"
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
                "target": "Use Prior Target(s) Defined",
                "team": "TeamLight"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Topaz_Ultimate_Listen_ModifyBEAction"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Numby",
              "modifier": "Topaz_BE_HitEffect"
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "All Teammates (Excluding Owner)",
              "modifier": "Topaz_Ultimate_Listen_ModifyBEAction"
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
                "modifier": "Topaz_BE_FindNoTargetFlag"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Topaz_BE_FindNoTargetFlag"
                },
                {
                  "name": "Find New Target",
                  "from": "All Enemies (AOE)",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Topaz_BETargetTag[<span class=\"descriptionNumberColor\">Proof of Debt</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue1_DamageAdd": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "MDF_PropertyValue3_InsertCriticalDamageAddRatio": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        },
                        "MDF_PropertyValue4_InsertCriticalDamageAddLayer": 0,
                        "MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "ShowSpecialMarkOnCreate": 0
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "Topaz_BE_FindNoTargetFlagOnUltraOrExtraTurn"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Topaz_BE_FindNoTargetFlagOnUltraOrExtraTurn"
                },
                {
                  "name": "Find New Target",
                  "from": "All Enemies (AOE)",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Topaz_BETargetTag[<span class=\"descriptionNumberColor\">Proof of Debt</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue1_DamageAdd": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "MDF_PropertyValue3_InsertCriticalDamageAddRatio": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        },
                        "MDF_PropertyValue4_InsertCriticalDamageAddLayer": 0,
                        "MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "ShowSpecialMarkOnCreate": 1
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "Topaz_BETargetTagHitFlag"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Topaz_BETargetTagHitFlag"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "Topaz_UltraEnhance[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Current Turn Is",
                        "target": "Numby",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": "Numby",
                          "advanceType": "Advance",
                          "value": "-0.5"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "Topaz_BETargetTagInsertHitFlag"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Topaz_BETargetTagInsertHitFlag"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": "Numby",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": "Numby",
                      "advanceType": "Advance",
                      "value": "-0.5"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Active Ability Chosen [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": "Use Prior Target(s) Defined",
                "target2": "Caster"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Topaz_PointB2Effect",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": "Use Prior Target(s) Defined",
                "DamageType": "Fire"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "0.15"
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
      "for": "Topaz_BE_ReduceDelay",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Topaz_BE_BaseSpeed",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (80) || RETURN",
                "displayLines": "80",
                "constants": [],
                "variables": [
                  80
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Topaz_Ultimate_Listen_ModifyBEAction",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": "Numby",
        "skillType": [
          "Basic ATK",
          "Skill",
          "Ultimate"
        ],
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Compare: Target Count SUM",
              "target": "Current Visual Target(All)",
              "conditions": {
                "name": "Has Modifier",
                "target": "Use Prior Target(s) Defined",
                "modifier": "Topaz_BETargetTag[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
              }
            },
            {
              "name": "Has Modifier",
              "target": "Caster",
              "modifier": "Topaz_UltraEnhance[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
            },
            {
              "name": "Current Turn Is",
              "target": "Numby",
              "invertCondition": true
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (0.5) || INVERT || RETURN",
            "displayLines": "-0.5",
            "constants": [],
            "variables": [
              0.5
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Topaz_Ultimate_BPAbility_ModifyBEAction",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": "Numby",
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Modifier",
              "target": "Caster",
              "modifier": "Topaz_UltraEnhance[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
            },
            {
              "name": "Current Turn Is",
              "target": "Numby",
              "invertCondition": true
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (0.5) || INVERT || RETURN",
            "displayLines": "-0.5",
            "constants": [],
            "variables": [
              0.5
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Topaz_Ultimate_Normal_ModifyBEAction",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": "Numby",
        "skillType": [
          "Basic ATK"
        ],
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Modifier",
              "target": "Allied Team Skill Lock Target",
              "modifier": "Topaz_BETargetTag[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
            },
            {
              "name": "Has Modifier",
              "target": "Caster",
              "modifier": "Topaz_UltraEnhance[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
            },
            {
              "name": "Current Turn Is",
              "target": "Numby",
              "invertCondition": true
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (0.5) || INVERT || RETURN",
            "displayLines": "-0.5",
            "constants": [],
            "variables": [
              0.5
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Topaz_BPAbility_ModifyBEAction",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": "Numby",
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "Current Turn Is",
          "target": "Numby",
          "invertCondition": true
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (0.5) || INVERT || RETURN",
            "displayLines": "-0.5",
            "constants": [],
            "variables": [
              0.5
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Topaz_Normal_ModifyBEAction",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": "Numby",
        "skillType": [
          "Basic ATK"
        ],
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Modifier",
              "target": "Allied Team Skill Lock Target",
              "modifier": "Topaz_BETargetTag[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
            },
            {
              "name": "Current Turn Is",
              "target": "Numby",
              "invertCondition": true
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (0.5) || INVERT || RETURN",
            "displayLines": "-0.5",
            "constants": [],
            "variables": [
              0.5
            ]
          }
        }
      }
    }
  ]
}