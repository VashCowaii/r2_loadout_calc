const configAbility = {
  "fileName": "Fireflyv0_Sam_PassiveAbility01",
  "childAbilityList": [
    "Fireflyv0_Sam_PassiveAbility01",
    "Fireflyv0_Sam_Eidolon2_Bonus",
    "Fireflyv0_Sam_PassiveAbility01_BattleEvent_Insert"
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
      "modifier": "<a class=\"gModGreen\" id=\"618387317\">Sam_PassiveAbility</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1214391345\">Sam_UltraPreShow</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1839227070\">Sam_LoseHPPreShow</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-342359297\">Sam_Ability11_StanceDamagePreShow_Fire</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1576215372\">Sam_Ability11_StanceDamagePreShow_NoFire</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1454050150\">Sam_Ability21_AddWeaknessPreShow</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1595550658\">Sam_Ability21_StanceDamagePreShow_Fire</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1713306799\">Sam_Ability21_StanceDamagePreShow_NoFire</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"390294012\">Sam_Ability02_DelayReduce</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1701719398\">Sam_BreakPreShow</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"765639261\">Sam_BreakedPreShow</a>"
    },
    {
      "name": "Change Character UI",
      "characterName": "SAM"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__765639261\">Sam_BreakedPreShow</a>",
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1084783230\">Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]"
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1701719398\">Sam_BreakPreShow</a>",
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
                        "abilityCaster": {
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__390294012\">Sam_Ability02_DelayReduce</a>",
      "stackType": "ReplaceByCaster",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1084783230\">Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]",
          "invertCondition": true
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "displayLines": "-0.25"
          }
        }
      },
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-1527090005\">ReduceNextActionDelay</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variables": {
                    "parameter[0]_NormalizedValue": {
                      "displayLines": "0.25"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1454050150\">Sam_Ability21_AddWeaknessPreShow</a>",
      "stackType": "ReplaceByCaster",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1084783230\">Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]"
            }
          ]
        },
        "toughnessReductionPreview": {
          "displayLines": "(0.5 + Rank06_StanceBreakAddedRatio)"
        },
        "addedDisplayWeakness": {
          "DamageType": "Fire"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1713306799\">Sam_Ability21_StanceDamagePreShow_NoFire</a>",
      "stackType": "ReplaceByCaster",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1084783230\">Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]"
            },
            {
              "name": "Is Weak to Attacker",
              "targetAttacker": {
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
              "target1": {
                "name": "Target Name",
                "target": "{{Player's Aim Sub-Targets}}"
              },
              "target2": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        "toughnessReductionPreview": {
          "displayLines": "(0.5 + Rank06_StanceBreakAddedRatio)"
        },
        "toughnessForcedReductionPreview": {
          "displayLines": "0.55"
        },
        "showAsForcedReduction": true
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1595550658\">Sam_Ability21_StanceDamagePreShow_Fire</a>",
      "stackType": "ReplaceByCaster",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1084783230\">Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]"
            },
            {
              "name": "Is Weak to Attacker",
              "targetAttacker": {
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
              "target1": {
                "name": "Target Name",
                "target": "{{Player's Aim Sub-Targets}}"
              },
              "target2": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        "toughnessReductionPreview": {
          "displayLines": "(0.5 + Rank06_StanceBreakAddedRatio)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1576215372\">Sam_Ability11_StanceDamagePreShow_NoFire</a>",
      "stackType": "ReplaceByCaster",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1084783230\">Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]"
            },
            {
              "name": "Is Weak to Attacker",
              "targetAttacker": {
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
          "displayLines": "(0.5 + Rank06_StanceBreakAddedRatio)"
        },
        "toughnessForcedReductionPreview": {
          "displayLines": "0.55"
        },
        "showAsForcedReduction": true
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-342359297\">Sam_Ability11_StanceDamagePreShow_Fire</a>",
      "stackType": "ReplaceByCaster",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1084783230\">Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]"
            },
            {
              "name": "Is Weak to Attacker",
              "targetAttacker": {
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
          "displayLines": "(0.5 + Rank06_StanceBreakAddedRatio)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1839227070\">Sam_LoseHPPreShow</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1084783230\">Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_MaxHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
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
                    "displayLines": "(MDF_MaxHP * 0.4)"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1214391345\">Sam_UltraPreShow</a>",
      "stackType": "ReplaceByCaster",
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
            "displayLines": "-1"
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__618387317\">Sam_PassiveAbility</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Sequence",
                "TargetList": [
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
                      "modifier": "<a class=\"gModGreen\" id=\"92987575\">Sam_PassiveAbility01_BattleEvent</a>"
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
              "variableName": "_HPRatioCurrent",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(((1 - _HPRatioCurrent) / (1 - 0.2)) + _RedModeResRatio)"
              },
              "variableName": "_PassiveResRatio"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1021523829\">Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "(0.4 * _PassiveResRatio)"
                    }
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "_BreakDamageAddedRatio",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_BreakDamageAddedRatio",
                "compareType": ">=",
                "value2": {
                  "displayLines": "3.6"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "3.6"
                  },
                  "variableName": "_BreakDamageAddedRatio"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(2 + (0.2 * _BreakDamageAddedRatio))"
              },
              "variableName": "Skill21_DamagePercentage"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(1 + (0.1 * _BreakDamageAddedRatio))"
              },
              "variableName": "Skill21_DamagePercentageAD"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1084783230\">Sam_PassiveAbility_RedMode</a>[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1021523829\">Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with HP%",
                  "variableName": "_HPRatioCurrent",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(((1 - _HPRatioCurrent) / (1 - 0.2)) + _RedModeResRatio)"
                  },
                  "variableName": "_PassiveResRatio"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1021523829\">Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "(0.4 * _PassiveResRatio)"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1021523829\">Sam_PassiveAbility_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]"
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
              "value": {
                "displayLines": "-_HPChange"
              },
              "variableName": "_HPChange"
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
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
                  "variableName": "_MaxSP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Update Energy Value",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "displayLines": "(_MaxSP * 0.5)"
                  },
                  "adjustment": "Set"
                }
              ]
            }
          ]
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
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "_BreakDamageAddedRatio",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_BreakDamageAddedRatio",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "3.6"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "3.6"
                      },
                      "variableName": "_BreakDamageAddedRatio"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(2 + (0.2 * _BreakDamageAddedRatio))"
                  },
                  "variableName": "Skill21_DamagePercentage"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(1 + (0.1 * _BreakDamageAddedRatio))"
                  },
                  "variableName": "Skill21_DamagePercentageAD"
                }
              ]
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