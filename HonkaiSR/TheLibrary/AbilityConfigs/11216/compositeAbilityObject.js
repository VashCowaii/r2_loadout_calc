const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 11216,
  "trimCharacterName": 11216,
  "abilityList": [
    "11216_Modifiers",
    "11216_Topaz_BE_CheckStun",
    "11216_Topaz_BE_DelayLimbo",
    "11216_Topaz_BE_Hit",
    "11216_Topaz_BE_Ability03Ready",
    "11216_Topaz_BE_Ability01Ready",
    "11216_Topaz_BE_Ability02Ready",
    "11216_Topaz_BE_LaterAttack",
    "11216_Topaz_BE_FirstAttack",
    "11216_Topaz_BE_RefreshEnhance",
    "11216_Topaz_BE_PassiveAbility"
  ],
  "abilityObject": {
    "11216_Modifiers": {
      "fileName": "11216_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1361568506\">Topaz_BE_UltraEnhance_ShowText</a>",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1350976023\">Topaz_BETargetTagActive</a>",
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "ShowSpecialMarkOnCreate",
                        "compareType": ">=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
                      },
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
                        "name": "OR",
                        "conditionList": [
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
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Is Part Of Team",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Current Action Owner}}"
                                },
                                "team": "Player Team"
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
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
                      "passed": [
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
                          "name": "IF",
                          "conditions": {
                            "name": "Trace Activated",
                            "conditionList": "PointB1"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1982768595\">Topaz_BE_FiretakenRatio</a>",
          "stackType": "ReplaceByCaster",
          "duration": 1,
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1899526189\">Topaz_BE_HitEffect</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1524167625\">Topaz_BE_UltraEnhance_Text</a>",
          "stackType": "ReplaceByCaster",
          "type": "Buff",
          "effectName": "DMG multiplier, CRIT DMG Boost",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]",
          "counter": 1,
          "stackType": "ReplaceByCaster",
          "description": "Numby's DMG multiplier increases by <span class=\"descriptionNumberColor\">Skill03_P1_BEDamageRatio</span>, CRIT DMG increases by <span class=\"descriptionNumberColor\">Skill03_P2_CriticalChance</span>. When enemies with Proof of Debt receive attacks from allies' Basic ATK, Skill, or Ultimate, Numby's action is Advanced Forward by <span class=\"descriptionNumberColor\">Skill03_P3_DelayRatio</span>.",
          "type": "Buff",
          "statusName": "Windfall Bonanza!",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Numby}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1182113181\">BE_ExtraSpeedModifier</a>"
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
                      "popUpText": "Numby's DMG multiplier increases by <span class=\"descriptionNumberColor\">Skill03_P1_BEDamageRatio</span>, CRIT DMG increases by <span class=\"descriptionNumberColor\">Skill03_P2_CriticalChance</span>, and Fire RES PEN increases by <span class=\"descriptionNumberColor\">Rank06_P2_PenRatio</span>. When enemies with Proof of Debt receive attacks from allies' Basic ATK, Skill, or Ultimate, Numby's action is Advanced Forward by <span class=\"descriptionNumberColor\">Skill03_P3_DelayRatio</span>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1213282515\">Topaz_BE_CriticalChance</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (UnusedUnderThisBase_6342) || RETURN",
                    "displayLines": "UnusedUnderThisBase_6342",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_6342"
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
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFirePEN</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (UnusedUnderThisBase_6337) || RETURN",
                        "displayLines": "UnusedUnderThisBase_6337",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_6337"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1322510639\">Topaz_BETargetTag_CriticalDamageUp</a>[<span class=\"descriptionNumberColor\">Debtor</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases CRIT DMG received from Follow-Up ATKs by <span class=\"descriptionNumberColor\">MDF_PropertyValue1_InsertCriticalDamageAddRatio</span>, stacking up to <span class=\"descriptionNumberColor\">MDF_PropertyValue2_InsertCriticalDamageAddMaxLayer</span> time(s).",
          "type": "Debuff",
          "effectName": "Debtor",
          "statusName": "Debtor",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-373546697\">Topaz_BE_FindNoTargetFlagOnUltraOrExtraTurn</a>",
          "stackType": "Replace",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-93497222\">Topaz_BE_FindNoTargetFlag</a>",
          "stackType": "Replace",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1346057059\">Topaz_BETargetTagInsertHitFlag</a>",
          "stackType": "Replace",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1594870654\">Topaz_BETargetTagHitFlag</a>",
          "stackType": "Replace",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill"
          ],
          "description": "Increases Follow-Up ATK DMG received by <span class=\"descriptionNumberColor\">MDF_PropertyValue1_DamageAdd</span>. Numby will target this unit as its attack target.",
          "type": "Debuff",
          "effectName": "Proof of Debt",
          "statusName": "Proof of Debt",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 10,
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1350976023\">Topaz_BETargetTagActive</a>"
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1350976023\">Topaz_BETargetTagActive</a>",
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "ShowSpecialMarkOnCreate",
                        "compareType": ">=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
                      },
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
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "OR",
                        "conditionList": [
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
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Is Part Of Team",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Current Action Owner}}"
                                },
                                "team": "Player Team"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1322510639\">Topaz_BETargetTag_CriticalDamageUp</a>[<span class=\"descriptionNumberColor\">Debtor</span>]"
                },
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1322510639\">Topaz_BETargetTag_CriticalDamageUp</a>[<span class=\"descriptionNumberColor\">Debtor</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked [Owner]: Start",
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Team Members}}.[[addBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"1594870654\">Topaz_BETargetTagHitFlag</a>"
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Team Members with Unselectables}}.[[addBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1346057059\">Topaz_BETargetTagInsertHitFlag</a>"
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
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
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
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1322510639\">Topaz_BETargetTag_CriticalDamageUp</a>[<span class=\"descriptionNumberColor\">Debtor</span>]",
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
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
                          "name": "IF",
                          "conditions": {
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
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Trace Activated",
                                "conditionList": "PointB1"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
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
          ]
        }
      ],
      "references": []
    },
    "11216_Topaz_BE_CheckStun": {
      "fileName": "11216_Topaz_BE_CheckStun",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "11216_Topaz_BE_DelayLimbo": {
      "fileName": "11216_Topaz_BE_DelayLimbo",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "11216_Topaz_BE_Hit": {
      "fileName": "11216_Topaz_BE_Hit",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1899526189\">Topaz_BE_HitEffect</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "HasHitEffect",
              "value": 1
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1899526189\">Topaz_BE_HitEffect</a>"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "HasHitEffect",
              "value": 0
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HasHitEffect",
            "compareType": ">",
            "value2": 0
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "11216_Topaz_BE_Ability03Ready": {
      "fileName": "11216_Topaz_BE_Ability03Ready",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "11216_Topaz_BE_Ability01Ready": {
      "fileName": "11216_Topaz_BE_Ability01Ready",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "11216_Topaz_BE_Ability02Ready": {
      "fileName": "11216_Topaz_BE_Ability02Ready",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "11216_Topaz_BE_LaterAttack": {
      "fileName": "11216_Topaz_BE_LaterAttack",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Battle Event's Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Battle Event's Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Topaz_BE_UltraAttackDamage",
              "isTrigger": true
            }
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Topaz_BE_NormalAttackDamage",
              "isTrigger": true
            }
          ]
        }
      ],
      "onAbort": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Battle Event's Caster}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Battle Event's Caster}}"
                },
                "flagName": "STAT_CTRL_Frozen"
              }
            ]
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "11216_Topaz_BE_FirstAttack": {
      "fileName": "11216_Topaz_BE_FirstAttack",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Battle Event's Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "scope": "ContextCaster",
              "variableName": "_damageStart",
              "value": 1
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "scope": "ContextCaster",
              "variableName": "_damageStart",
              "value": 1
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "11216_Topaz_BE_RefreshEnhance": {
      "fileName": "11216_Topaz_BE_RefreshEnhance",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "11216_Topaz_BE_PassiveAbility": {
      "fileName": "11216_Topaz_BE_PassiveAbility",
      "childAbilityList": [
        "11216_Topaz_BE_PassiveAbility",
        "11216_Topaz_BE_RefreshEnhance",
        "11216_Topaz_BE_FirstAttack",
        "11216_Topaz_BE_LaterAttack",
        "11216_Topaz_BE_Ability01_Camera",
        "11216_Topaz_BE_Ability02_Camera",
        "11216_Topaz_BE_Ability01_Enhance_Camera",
        "11216_Topaz_BE_Ability02_Enhance_Camera",
        "11216_Topaz_BE_Ability02Ready",
        "11216_Topaz_BE_Ability01Ready",
        "11216_Topaz_BE_Ability03Ready",
        "11216_Topaz_BE_Hit",
        "11216_Topaz_BE_DelayLimbo",
        "11216_Topaz_BE_CheckStun"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1529971415\">Topaz_BETag</a>"
        },
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "TopazBE",
          "state": false
        },
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "TopazBE"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1529971415\">Topaz_BETag</a>",
          "modifierFlags": [
            "BlockDamage",
            "Stealth"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-182734853\">Topaz_BE_ReduceDelay</a>"
                  },
                  "passed": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Battle Event's Caster}}"
                      },
                      "ability": "Topaz_Eidolon4_ReduceDelay"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}.[[living]]"
                    },
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                    }
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-93497222\">Topaz_BE_FindNoTargetFlag</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target List Entities",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}.[[living]]"
                    },
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                    }
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Topaz_BE_LaterAttack",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}.[[living]]"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                            }
                          }
                        ]
                      },
                      "priorityTag": "STAGE_Character",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Anyone]: End"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1965719686\">Topaz_Passive</a>"
                  }
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1965719686\">Topaz_Passive</a>"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]"
            },
            {
              "eventTrigger": "Injected Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Battle Event's Caster}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Battle Event's Caster}}"
                        },
                        "flagName": "STAT_CTRL_Frozen"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Get Revived [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1965719686\">Topaz_Passive</a>"
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    }
  },
  "enemyData": {
    "SkillP01": {
      "skillID": 1121604,
      "trigger": "SkillP01",
      "name": "",
      "type": "Talent",
      "slot": "Talent",
      "desc": "",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          1.1
        ]
      },
      "skillEffect": "Passive",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_Topaz_00_BE_PassiveSkill",
        "Avatar_Topaz_00_BE_RefreshEnhance",
        "Avatar_Topaz_00_BE_FirstAttack",
        "Avatar_Topaz_00_BE_LaterAttack",
        "Avatar_Topaz_00_BE_Skill01_Camera",
        "Avatar_Topaz_00_BE_Skill02_Camera",
        "Avatar_Topaz_00_BE_Skill01_Enhance_Camera",
        "Avatar_Topaz_00_BE_Skill02_Enhance_Camera",
        "Avatar_Topaz_00_BE_Skill02Ready",
        "Avatar_Topaz_00_BE_Skill01Ready",
        "Avatar_Topaz_00_BE_Skill03Ready",
        "Avatar_Topaz_00_BE_Hit",
        "Avatar_Topaz_00_BE_DelayLimbo",
        "Avatar_Topaz_00_BE_CheckStun"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}