const configAbility = {
  "fileName": "TopazNumby_Modifiers",
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
      "for": "Topaz_BE_UltraEnhance_ShowText",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "ATKCount"
      ],
      "latentQueue": [
        "_damageStart"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Topaz_BETargetTagActive",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "ListenBattleEventSkill",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "ShowSpecialMarkOnCreate",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  {
                    "name": "Compare: Target Count SUM",
                    "target": "Current Visual Target(All)",
                    "conditions": {
                      "name": "Compare: Target",
                      "target": "Owner of this Modifier",
                      "target2": "Use Prior Target(s) Defined"
                    }
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": "Current Action Owner",
                        "target2": "Caster"
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Part Of Team",
                            "target": "Current Action Owner",
                            "team": "TeamLight"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "CurEnhance",
                            "compareType": ">=",
                            "value2": 1,
                            "contextScope": "ContextCaster"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true
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
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "Topaz_UltraEnhance[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count SUM",
                    "target": "Current Visual Target(All)",
                    "conditions": {
                      "name": "Compare: Target",
                      "target": "Owner of this Modifier",
                      "target2": "Use Prior Target(s) Defined"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": "Current Action Owner",
                        "target2": "Caster"
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Basic ATK",
                            "Ultimate"
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark"
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
                        "name": "Compare: Target Count SUM",
                        "target": "Current Visual Target(All)",
                        "conditions": {
                          "name": "Compare: Target",
                          "target": "Owner of this Modifier",
                          "target2": "Use Prior Target(s) Defined"
                        }
                      },
                      {
                        "name": "Compare: Target",
                        "target": "Current Action Owner",
                        "target2": "Caster"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Overdraft"
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Basic ATK",
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
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Topaz_BE_FiretakenRatio",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">FireVulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (TOPAZ_OBJECT_UNUSED_1) || RETURN",
                "displayLines": "TOPAZ_OBJECT_UNUSED_1",
                "constants": [],
                "variables": [
                  "TOPAZ_OBJECT_UNUSED_1"
                ]
              }
            }
          ]
        }
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Topaz_BE_HitEffect",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Topaz_BE_UltraEnhance_Text",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "type": "Buff",
      "effectName": "DMG multiplier, CRIT DMG Boost",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Topaz_UltraEnhance[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]",
      "counter": 1,
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Numby",
              "modifier": "BE_ExtraSpeedModifier"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Numby's DMG multiplier increases by #1[i]%, CRIT DMG increases by #2[i]%, and Fire RES PEN increases by #4[i]%. When enemies with Proof of Debt receive attacks from allies' Basic ATK, Skill, or Ultimate, Numby's action is Advanced Forward by #3[i]%."
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "Skill03_P1_BEDamageRatio",
        "Skill03_P2_CriticalChance",
        "Skill03_P3_DelayRatio",
        "Rank06_P2_PenRatio"
      ],
      "latentQueue": [],
      "description": "Numby's DMG multiplier increases by <span class=\"descriptionNumberColor\">Skill03_P1_BEDamageRatio</span>, CRIT DMG increases by <span class=\"descriptionNumberColor\">Skill03_P2_CriticalChance</span>. When enemies with Proof of Debt receive attacks from allies' Basic ATK, Skill, or Ultimate, Numby's action is Advanced Forward by <span class=\"descriptionNumberColor\">Skill03_P3_DelayRatio</span>.",
      "type": "Buff",
      "statusName": "Windfall Bonanza!"
    },
    {
      "name": "Modifier Construction",
      "for": "Topaz_BE_CriticalChance",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.25) || RETURN",
                "displayLines": "0.25",
                "constants": [],
                "variables": [
                  0.25
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFirePEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.1) || RETURN",
                    "displayLines": "0.1",
                    "constants": [],
                    "variables": [
                      0.1
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_damageStart"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Topaz_BETargetTag_CriticalDamageUp[<span class=\"descriptionNumberColor\">Debtor</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases CRIT DMG received from Follow-Up ATKs by <span class=\"descriptionNumberColor\">MDF_PropertyValue1_InsertCriticalDamageAddRatio</span>, stacking up to <span class=\"descriptionNumberColor\">MDF_PropertyValue2_InsertCriticalDamageAddMaxLayer</span> time(s).",
      "type": "Debuff",
      "effectName": "Debtor",
      "statusName": "Debtor",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Topaz_BE_FindNoTargetFlagOnUltraOrExtraTurn",
      "stackType": "Replace",
      "stackData": [],
      "latentQueue": [],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Topaz_BE_FindNoTargetFlag",
      "stackType": "Replace",
      "stackData": [],
      "latentQueue": [],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Topaz_BETargetTagInsertHitFlag",
      "stackType": "Replace",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Topaz_BETargetTagHitFlag",
      "stackType": "Replace",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Topaz_BETargetTag[<span class=\"descriptionNumberColor\">Proof of Debt</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": "All Enemies(All)",
              "searchRandom": true,
              "includeDyingTargets": true,
              "maxTargets": 10,
              "conditions": {
                "name": "Compare: Target",
                "target": "Use Prior Target(s) Defined",
                "target2": "Owner of this Modifier",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Topaz_BETargetTag[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Topaz_BETargetTagActive"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue4_InsertCriticalDamageAddLayer",
              "value": {
                "operator": "Constants[0] (0) || RETURN",
                "displayLines": "0",
                "constants": [
                  0
                ],
                "variables": []
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Topaz_BETargetTagActive",
              "valuePerStack": {
                "ShowSpecialMarkOnCreate": {
                  "operator": "Variables[0] (ShowSpecialMarkOnCreate) || RETURN",
                  "displayLines": "ShowSpecialMarkOnCreate",
                  "constants": [],
                  "variables": [
                    "ShowSpecialMarkOnCreate"
                  ]
                }
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "ShowSpecialMarkOnCreate",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  {
                    "name": "Compare: Target Count SUM",
                    "target": "Current Visual Target(All)",
                    "conditions": {
                      "name": "Compare: Target",
                      "target": "Owner of this Modifier",
                      "target2": "Use Prior Target(s) Defined"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": "Current Action Owner",
                        "target2": "Caster"
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Part Of Team",
                            "target": "Current Action Owner",
                            "team": "TeamLight"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "CurEnhance",
                            "compareType": ">=",
                            "value2": 1,
                            "contextScope": "ContextCaster"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "_isShowSpecialMark",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_isShowSpecialMark",
                      "value": 1
                    },
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Topaz_BETargetTag_CriticalDamageUp[<span class=\"descriptionNumberColor\">Debtor</span>]"
            },
            {
              "name": "Toggle Skill Mark"
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
                "target": "Owner of this Modifier",
                "value1": "_isShowSpecialMark",
                "compareType": ">=",
                "value2": 1,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_isShowSpecialMark",
                  "value": 0
                },
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Follow-up"
                ],
                "target": "Use Prior Target(s) Defined"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "MDF_PropertyValue1_DamageAdd"
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
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                          "value": "(MDF_PropertyValue4_InsertCriticalDamageAddLayer * MDF_PropertyValue3_InsertCriticalDamageAddRatio)"
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
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1,
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue4_InsertCriticalDamageAddLayer",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Topaz_BETargetTag_CriticalDamageUp[<span class=\"descriptionNumberColor\">Debtor</span>]"
                }
              ]
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
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK",
                      "Skill",
                      "Ultimate"
                    ],
                    "target": "Use Prior Target(s) Defined"
                  },
                  {
                    "name": "Is Part Of",
                    "of": "All Team Members(In Context, with Battle Events/Summon)",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Topaz_BETargetTagHitFlag"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Follow-up"
                ],
                "target": "Use Prior Target(s) Defined"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": "All Team Members(In Context, with Untargetable + Battle Events)",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Topaz_BETargetTagInsertHitFlag"
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "MDF_PropertyValue4_InsertCriticalDamageAddLayer",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer) || RETURN",
                          "displayLines": "MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer"
                          ]
                        },
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_PropertyValue4_InsertCriticalDamageAddLayer",
                          "value": {
                            "operator": "Constants[0] (1) || Variables[0] (MDF_PropertyValue4_InsertCriticalDamageAddLayer) || ADD || RETURN",
                            "displayLines": "(1 + MDF_PropertyValue4_InsertCriticalDamageAddLayer)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_PropertyValue4_InsertCriticalDamageAddLayer"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Topaz_BETargetTag_CriticalDamageUp[<span class=\"descriptionNumberColor\">Debtor</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue1_InsertCriticalDamageAddRatio": {
                              "operator": "Variables[0] (MDF_PropertyValue3_InsertCriticalDamageAddRatio) || RETURN",
                              "displayLines": "MDF_PropertyValue3_InsertCriticalDamageAddRatio",
                              "constants": [],
                              "variables": [
                                "MDF_PropertyValue3_InsertCriticalDamageAddRatio"
                              ]
                            },
                            "MDF_PropertyValue2_InsertCriticalDamageAddMaxLayer": {
                              "operator": "Variables[0] (MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer) || RETURN",
                              "displayLines": "MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer",
                              "constants": [],
                              "variables": [
                                "MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer"
                              ]
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
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "_isShowSpecialMark",
                "compareType": ">=",
                "value2": 1,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_isShowSpecialMark",
                  "value": 0
                },
                {
                  "name": "Toggle Skill Mark"
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
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "_isShowSpecialMark",
                "compareType": ">=",
                "value2": 1,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_isShowSpecialMark",
                  "value": 0
                },
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
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
                    "name": "Compare: Target Count SUM",
                    "target": "Current Visual Target(All)",
                    "conditions": {
                      "name": "Compare: Target",
                      "target": "Owner of this Modifier",
                      "target2": "Use Prior Target(s) Defined"
                    }
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": "Current Action Owner",
                        "target2": "Caster"
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Basic ATK",
                            "Ultimate"
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": "Current Action Owner",
                    "target2": "Caster"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count SUM",
                        "target": "Current Visual Target(All)",
                        "conditions": {
                          "name": "Compare: Target",
                          "target": "Owner of this Modifier",
                          "target2": "Use Prior Target(s) Defined"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Trace Activated",
                            "conditionList": "Overdraft"
                          },
                          "passed": [
                            {
                              "name": "Toggle Skill Mark"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [
                                "Basic ATK"
                              ]
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Basic ATK"
                          ]
                        }
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
          "eventTrigger": "Active Ability Chosen [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": "Use Prior Target(s) Defined",
                    "target2": "Caster"
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamLight"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "CurEnhance",
                        "compareType": ">=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "_isShowSpecialMark",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable (VFX)",
                      "variableName": "_isShowSpecialMark",
                      "value": 1
                    },
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable (VFX)",
                  "variableName": "_isShowSpecialMark",
                  "value": 0
                },
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue1_DamageAdd",
        "MDF_PropertyValue3_InsertCriticalDamageAddRatio",
        "MDF_PropertyValue4_InsertCriticalDamageAddLayer",
        "MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer"
      ],
      "latentQueue": [
        "_damageStart"
      ],
      "description": "Increases Follow-Up ATK DMG received by <span class=\"descriptionNumberColor\">MDF_PropertyValue1_DamageAdd</span>. Numby will target this unit as its attack target.",
      "type": "Debuff",
      "effectName": "Proof of Debt",
      "statusName": "Proof of Debt"
    }
  ],
  "references": []
}