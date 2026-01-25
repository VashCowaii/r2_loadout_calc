const configAbility = {
  "fileName": "Firefly_Sam_PassiveAbility01",
  "childAbilityList": [
    "Firefly_Sam_PassiveAbility01",
    "Firefly_Sam_Eidolon2_Bonus",
    "Firefly_Sam_PassiveAbility01_BattleEvent_Insert"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Sam_PassiveAbility"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Sam_UltraPreShow"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Sam_LoseHPPreShow"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Sam_Ability11_StanceDamagePreShow_Fire"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Sam_Ability11_StanceDamagePreShow_NoFire"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Sam_Ability21_AddWeaknessPreShow"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Sam_Ability21_StanceDamagePreShow_Fire"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Sam_Ability21_StanceDamagePreShow_NoFire"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "Sam_Ability02_DelayReduce"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "Sam_BreakPreShow"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "Sam_BreakedPreShow"
    },
    {
      "name": "Change Character UI",
      "characterName": "SAM"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Sam_BreakedPreShow",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: Start"
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
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Break"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "Sam_PassiveAbility_RedMode[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]"
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Sam_BreakPreShow",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: Start"
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
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player's Aim Target List}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Toughness Reduction Preview",
                        "caster": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
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
      "for": "Sam_Ability02_DelayReduce",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill02"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "ReduceNextActionDelay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variables": {
                    "parameter[0]_NormalizedValue": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Sam_PassiveAbility_RedMode[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]",
          "invertCondition": true
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (0.25) || INVERT || RETURN",
            "displayLines": "-0.25",
            "constants": [],
            "variables": [
              0.25
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Sam_Ability21_AddWeaknessPreShow",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Skill",
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
                "target": "{{Player's Aim Primary-Target}}"
              }
            },
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Sam_PassiveAbility_RedMode[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]"
            }
          ]
        },
        "toughnessReductionPreview": {
          "operator": "Variables[0] (0.5) || Variables[1] (Rank06_StanceBreakAddedRatio) || ADD || RETURN",
          "displayLines": "(0.5 + Rank06_StanceBreakAddedRatio)",
          "constants": [],
          "variables": [
            0.5,
            "Rank06_StanceBreakAddedRatio"
          ]
        },
        "addedDisplayWeakness": {
          "DamageType": "Fire"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Sam_Ability21_StanceDamagePreShow_NoFire",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Skill",
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Sam_PassiveAbility_RedMode[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]"
            },
            {
              "name": "Is Weak to Attacker",
              "weakTo": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "invertCondition": true
            },
            {
              "name": "Is Part Of",
              "of": {
                "name": "Target Name",
                "target": "{{Player's Aim Sub-Targets}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "mustBeAlive2": true
            }
          ]
        },
        "toughnessReductionPreview": {
          "operator": "Variables[0] (0.5) || Variables[1] (Rank06_StanceBreakAddedRatio) || ADD || RETURN",
          "displayLines": "(0.5 + Rank06_StanceBreakAddedRatio)",
          "constants": [],
          "variables": [
            0.5,
            "Rank06_StanceBreakAddedRatio"
          ]
        },
        "toughnessForcedReductionPreview": {
          "operator": "Variables[0] (0.55) || RETURN",
          "displayLines": "0.55",
          "constants": [],
          "variables": [
            0.55
          ]
        },
        "showAsForcedReduction": true
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Sam_Ability21_StanceDamagePreShow_Fire",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Skill",
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Sam_PassiveAbility_RedMode[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]"
            },
            {
              "name": "Is Weak to Attacker",
              "weakTo": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Is Part Of",
              "of": {
                "name": "Target Name",
                "target": "{{Player's Aim Sub-Targets}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "mustBeAlive2": true
            }
          ]
        },
        "toughnessReductionPreview": {
          "operator": "Variables[0] (0.5) || Variables[1] (Rank06_StanceBreakAddedRatio) || ADD || RETURN",
          "displayLines": "(0.5 + Rank06_StanceBreakAddedRatio)",
          "constants": [],
          "variables": [
            0.5,
            "Rank06_StanceBreakAddedRatio"
          ]
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Sam_Ability11_StanceDamagePreShow_NoFire",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Basic ATK",
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Sam_PassiveAbility_RedMode[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]"
            },
            {
              "name": "Is Weak to Attacker",
              "weakTo": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "invertCondition": true
            }
          ]
        },
        "toughnessReductionPreview": {
          "operator": "Variables[0] (0.5) || Variables[1] (Rank06_StanceBreakAddedRatio) || ADD || RETURN",
          "displayLines": "(0.5 + Rank06_StanceBreakAddedRatio)",
          "constants": [],
          "variables": [
            0.5,
            "Rank06_StanceBreakAddedRatio"
          ]
        },
        "toughnessForcedReductionPreview": {
          "operator": "Variables[0] (0.55) || RETURN",
          "displayLines": "0.55",
          "constants": [],
          "variables": [
            0.55
          ]
        },
        "showAsForcedReduction": true
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Sam_Ability11_StanceDamagePreShow_Fire",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Basic ATK",
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Sam_PassiveAbility_RedMode[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]"
            },
            {
              "name": "Is Weak to Attacker",
              "weakTo": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        "toughnessReductionPreview": {
          "operator": "Variables[0] (0.5) || Variables[1] (Rank06_StanceBreakAddedRatio) || ADD || RETURN",
          "displayLines": "(0.5 + Rank06_StanceBreakAddedRatio)",
          "constants": [],
          "variables": [
            0.5,
            "Rank06_StanceBreakAddedRatio"
          ]
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Sam_LoseHPPreShow",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Update Target Selected(UI) [Owner]",
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
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Sam_PassiveAbility_RedMode[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Update UI Preview",
                  "show": "Show",
                  "skillType": [
                    "Skill"
                  ],
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "previewType": null,
                  "previewValue": {
                    "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.4) || MUL || RETURN",
                    "displayLines": "(MDF_MaxHP * 0.4)",
                    "constants": [],
                    "variables": [
                      "MDF_MaxHP",
                      0.4
                    ]
                  }
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
      "for": "Sam_UltraPreShow",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "skillType": [
          "Ultimate"
        ],
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Constants[0] (1) || INVERT || RETURN",
            "displayLines": "-1",
            "constants": [
              1
            ],
            "variables": []
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Sam_PassiveAbility",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
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
                      "modifier": "Sam_PassiveAbility01_BattleEvent"
                    }
                  }
                ]
              },
              "ignoreHPLossTriggers": true,
              "ignoreDeathTriggers": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with HP%",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_HPRatioCurrent"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_PassiveResRatio",
              "value": {
                "operator": "Constants[0] (1) || Variables[0] (_HPRatioCurrent) || SUB || Constants[0] (1) || Variables[1] (0.2) || SUB || DIV || Variables[2] (_RedModeResRatio) || ADD || RETURN",
                "displayLines": "(((1 - _HPRatioCurrent) / (1 - 0.2)) + _RedModeResRatio)",
                "constants": [
                  1
                ],
                "variables": [
                  "_HPRatioCurrent",
                  0.2,
                  "_RedModeResRatio"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_PassiveResRatio",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Sam_PassiveAbility_AllDamageTypeResistance[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.4) || Variables[1] (_PassiveResRatio) || MUL || RETURN",
                      "displayLines": "(0.4 * _PassiveResRatio)",
                      "constants": [],
                      "variables": [
                        0.4,
                        "_PassiveResRatio"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_BreakDamageAddedRatio",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_BreakDamageAddedRatio",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (3.6) || RETURN",
                  "displayLines": "3.6",
                  "constants": [],
                  "variables": [
                    3.6
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_BreakDamageAddedRatio",
                  "value": {
                    "operator": "Variables[0] (3.6) || RETURN",
                    "displayLines": "3.6",
                    "constants": [],
                    "variables": [
                      3.6
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Skill21_DamagePercentage",
              "value": {
                "operator": "Variables[0] (2) || Variables[1] (0.2) || Variables[2] (_BreakDamageAddedRatio) || MUL || ADD || RETURN",
                "displayLines": "(2 + (0.2 * _BreakDamageAddedRatio))",
                "constants": [],
                "variables": [
                  2,
                  0.2,
                  "_BreakDamageAddedRatio"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Skill21_DamagePercentageAD",
              "value": {
                "operator": "Variables[0] (1) || Variables[1] (0.1) || Variables[2] (_BreakDamageAddedRatio) || MUL || ADD || RETURN",
                "displayLines": "(1 + (0.1 * _BreakDamageAddedRatio))",
                "constants": [],
                "variables": [
                  1,
                  0.1,
                  "_BreakDamageAddedRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Sam_PassiveAbility_RedMode[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Sam_PassiveAbility_AllDamageTypeResistance[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_HPRatioCurrent"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_PassiveResRatio",
                  "value": {
                    "operator": "Constants[0] (1) || Variables[0] (_HPRatioCurrent) || SUB || Constants[0] (1) || Variables[1] (0.2) || SUB || DIV || Variables[2] (_RedModeResRatio) || ADD || RETURN",
                    "displayLines": "(((1 - _HPRatioCurrent) / (1 - 0.2)) + _RedModeResRatio)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_HPRatioCurrent",
                      0.2,
                      "_RedModeResRatio"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_PassiveResRatio",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Sam_PassiveAbility_AllDamageTypeResistance[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.4) || Variables[1] (_PassiveResRatio) || MUL || RETURN",
                          "displayLines": "(0.4 * _PassiveResRatio)",
                          "constants": [],
                          "variables": [
                            0.4,
                            "_PassiveResRatio"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Sam_PassiveAbility_AllDamageTypeResistance[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable with Changes to Stats",
              "variableName": "_HPChange"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_HPChange",
              "value": {
                "operator": "Variables[0] (_HPChange) || INVERT || RETURN",
                "displayLines": "-_HPChange",
                "constants": [],
                "variables": [
                  "_HPChange"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Energy%",
                    "compareType": "<",
                    "value2": 0.5
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_MaxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Update Energy Value",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (_MaxSP) || Constants[0] (0.5) || MUL || RETURN",
                    "displayLines": "(_MaxSP * 0.5)",
                    "constants": [
                      0.5
                    ],
                    "variables": [
                      "_MaxSP"
                    ]
                  },
                  "adjustment": "Set"
                }
              ]
            }
          ],
          "priorityLevel": -80
        },
        {
          "eventTrigger": "Energy Change",
          "execute": [
            {
              "name": "Define Custom Variable with Changes to Stats",
              "variableName": "_ChangeValue"
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
                    "value1": "Energy%",
                    "compareType": ">=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_ChangeValue",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_BreakDamageAddedRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_BreakDamageAddedRatio",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (3.6) || RETURN",
                      "displayLines": "3.6",
                      "constants": [],
                      "variables": [
                        3.6
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_BreakDamageAddedRatio",
                      "value": {
                        "operator": "Variables[0] (3.6) || RETURN",
                        "displayLines": "3.6",
                        "constants": [],
                        "variables": [
                          3.6
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Skill21_DamagePercentage",
                  "value": {
                    "operator": "Variables[0] (2) || Variables[1] (0.2) || Variables[2] (_BreakDamageAddedRatio) || MUL || ADD || RETURN",
                    "displayLines": "(2 + (0.2 * _BreakDamageAddedRatio))",
                    "constants": [],
                    "variables": [
                      2,
                      0.2,
                      "_BreakDamageAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Skill21_DamagePercentageAD",
                  "value": {
                    "operator": "Variables[0] (1) || Variables[1] (0.1) || Variables[2] (_BreakDamageAddedRatio) || MUL || ADD || RETURN",
                    "displayLines": "(1 + (0.1 * _BreakDamageAddedRatio))",
                    "constants": [],
                    "variables": [
                      1,
                      0.1,
                      "_BreakDamageAddedRatio"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}