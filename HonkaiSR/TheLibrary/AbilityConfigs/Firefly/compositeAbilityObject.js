const compositeAbilityObject = {
  "fullCharacterName": "Firefly",
  "trimCharacterName": "Firefly",
  "abilityList": [
    "Firefly_Sam_Eidolon6",
    "Firefly_Sam_Eidolon4",
    "Firefly_Sam_Eidolon2_Bonus",
    "Firefly_Sam_Eidolon2",
    "Firefly_Sam_Eidolon1",
    "Firefly_Sam_Trace03",
    "Firefly_Sam_Trace02",
    "Firefly_Sam_Trace01",
    "Firefly_Sam_TechniqueInLevel",
    "Firefly_Sam_PassiveAbility01_BattleEvent_Insert",
    "Firefly_Sam_PassiveAbility01_BattleEvent",
    "Firefly_Sam_PassiveAbility01",
    "Firefly_Sam_Ability03_Part02",
    "Firefly_Sam_Ability03_Part01",
    "Firefly_Sam_Ability03_EnterReady",
    "Firefly_Sam_Ability21_Part02",
    "Firefly_Sam_Ability21_Part01",
    "Firefly_Sam_Ability02_Part02",
    "Firefly_Sam_Ability02_Part01",
    "Firefly_Sam_Ability11_Part02",
    "Firefly_Sam_Ability11_Part01",
    "Firefly_Sam_Ability01_Part02",
    "Firefly_Sam_Ability01_Part01",
    "Firefly_Modifiers",
    "Firefly_BE_BattleEvents"
  ],
  "abilityObject": {
    "Firefly_Sam_Eidolon6": {
      "fileName": "Firefly_Sam_Eidolon6",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "Rank06_StanceBreakAddedRatio",
          "value": {
            "operator": "Variables[0] (0.5) || RETURN",
            "displayLines": "0.5",
            "constants": [],
            "variables": [
              0.5
            ]
          }
        }
      ],
      "references": []
    },
    "Firefly_Sam_Eidolon4": {
      "fileName": "Firefly_Sam_Eidolon4",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Firefly_Sam_Eidolon2_Bonus": {
      "fileName": "Firefly_Sam_Eidolon2_Bonus",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Firefly_Sam_Eidolon2": {
      "fileName": "Firefly_Sam_Eidolon2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Update Displayed Energy Bar",
          "assignState": "True",
          "priorState": "Disable",
          "bar#": 1,
          "cooldown": 0
        }
      ],
      "references": []
    },
    "Firefly_Sam_Eidolon1": {
      "fileName": "Firefly_Sam_Eidolon1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Sam_Eidolon1"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Sam_Eidolon1_Sub",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "-0.15"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Sam_Eidolon1",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill21"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Reset to Default"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill21"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Remove"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill21"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Sam_Eidolon1_Sub"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Sam_Eidolon1_Sub"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Firefly_Sam_Trace03": {
      "fileName": "Firefly_Sam_Trace03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Sam_Trace03_BreakDamageAddedRatio"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Sam_Trace03_BreakDamageAddedRatio_Sub[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Multipler",
                  "value": {
                    "operator": "Variables[0] (FLOOR) || Variables[1] (MDF_PropertyValue) || Variables[2] (10) || DIV || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_PropertyValue / 10))",
                    "constants": [],
                    "variables": [
                      "FLOOR",
                      "MDF_PropertyValue",
                      10
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue2",
                  "value": {
                    "operator": "Variables[0] (MDF_Multipler) || Variables[1] (0.007999999) || MUL || RETURN",
                    "displayLines": "(MDF_Multipler * 0.007999999)",
                    "constants": [],
                    "variables": [
                      "MDF_Multipler",
                      0.007999999
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                    "displayLines": "MDF_PropertyValue2",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
          "type": "Buff",
          "statusName": "Module γ: Core Overload"
        },
        {
          "name": "Modifier Construction",
          "for": "Sam_Trace03_BreakDamageAddedRatio",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Sam_Trace03_BreakDamageAddedRatio"
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Sam_Trace03_BreakDamageAddedRatio"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Sam_Trace03_BreakDamageAddedRatio"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Sam_Trace03_BreakDamageAddedRatio"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "Sam_Trace03_BreakDamageAddedRatio",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentAttackConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentAttack2",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentAttack) || Variables[1] (MDF_CurrentAttackConvert) || SUB || RETURN",
                    "displayLines": "(MDF_CurrentAttack - MDF_CurrentAttackConvert)",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentAttack",
                      "MDF_CurrentAttackConvert"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentAttack2",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (1800) || Variables[1] (10) || ADD || RETURN",
                      "displayLines": "(1800 + 10)",
                      "constants": [],
                      "variables": [
                        1800,
                        10
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Sam_Trace03_BreakDamageAddedRatio_Sub[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Sam_Trace03_BreakDamageAddedRatio_Sub[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_CurrentAttack2) || Variables[1] (1800) || SUB || RETURN",
                              "displayLines": "(MDF_CurrentAttack2 - 1800)",
                              "constants": [],
                              "variables": [
                                "MDF_CurrentAttack2",
                                1800
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Sam_Trace03_BreakDamageAddedRatio_Sub[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_CurrentAttack2) || Variables[1] (1800) || SUB || RETURN",
                              "displayLines": "(MDF_CurrentAttack2 - 1800)",
                              "constants": [],
                              "variables": [
                                "MDF_CurrentAttack2",
                                1800
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Sam_Trace03_BreakDamageAddedRatio_Sub[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]"
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
    },
    "Firefly_Sam_Trace02": {
      "fileName": "Firefly_Sam_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Firefly_Sam_Trace01": {
      "fileName": "Firefly_Sam_Trace01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Firefly_Sam_TechniqueInLevel": {
      "fileName": "Firefly_Sam_TechniqueInLevel",
      "childAbilityList": [
        "Firefly_Sam_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        20,
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
          "modifier": "Sam_Maze_AddWeakness"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Sam_Maze"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Sam_Maze",
          "execute": [
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
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Technique"
                      }
                    },
                    "Trigger: Attack End"
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "Toughness": {
                          "operator": "Variables[0] (ST Toughness Value) || RETURN",
                          "displayLines": "ST Toughness Value",
                          "constants": [],
                          "variables": [
                            "ST Toughness Value"
                          ]
                        },
                        "Tags": null,
                        "attackType": "Technique"
                      }
                    },
                    "Trigger: Attack End"
                  ]
                }
              ],
              "priorityLevel": -60
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Sam_Maze_AddWeakness",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "Sam_Ability21_FireWeakType[<span class=\"descriptionNumberColor\">Extra Fire Weakness</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Firefly_Sam_PassiveAbility01_BattleEvent_Insert": {
      "fileName": "Firefly_Sam_PassiveAbility01_BattleEvent_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "STAT_CTRL",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "popUpText": "Complete Combustion dispelled"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Sam_PassiveAbility_RedMode[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Sam_PassiveAbility01_ExitRedMode"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Sam_PassiveAbility01_ExitRedMode",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Sam_PassiveAbility01_BattleEvent_Insert",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "AvatarBuffOthers",
                      "ownerState": "Anyone",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Sam_PassiveAbility01_ExitRedMode"
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
    },
    "Firefly_Sam_PassiveAbility01_BattleEvent": {
      "fileName": "Firefly_Sam_PassiveAbility01_BattleEvent",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Sam_PassiveAbility01_BattleEvent"
        },
        {
          "name": "Block Advance/Delay Effects",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "whitelist": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "whitelistTag": "Mask_TurnBasedAdvance"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Sam_PassiveAbility01_BattleEvent",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Sam_PassiveAbility01_BattleEvent_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "priorityTag": "AvatarBuffOthers",
                  "ownerState": "Anyone",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_Sam_BaseSpeed) || RETURN",
                    "displayLines": "BattleEvent_Sam_BaseSpeed",
                    "constants": [],
                    "variables": [
                      "BattleEvent_Sam_BaseSpeed"
                    ]
                  }
                },
                {
                  "name": "Update Action Bar Display",
                  "triggerName": "Status_Status2",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Firefly_Sam_PassiveAbility01": {
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
    },
    "Firefly_Sam_Ability03_Part02": {
      "fileName": "Firefly_Sam_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "eventID": 11310,
          "variables": {
            "BattleEvent_Sam_BaseSpeed": {
              "operator": "Variables[0] (70) || RETURN",
              "displayLines": "70",
              "constants": [],
              "variables": [
                70
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Sam_PassiveAbility_RedMode[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]",
          "valuePerStack": {
            "MDF_SpeedUP": {
              "operator": "Variables[0] (60) || RETURN",
              "displayLines": "60",
              "constants": [],
              "variables": [
                60
              ]
            },
            "MDF_StatusResistance": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
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
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Advance",
          "value": -1
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Firefly_Sam_Ability03_Part01": {
      "fileName": "Firefly_Sam_Ability03_Part01",
      "childAbilityList": [
        "Firefly_Sam_Ability03_Camera",
        "Firefly_Sam_Ability03_EnterReady",
        "Firefly_Sam_Ability03_Part01",
        "Firefly_Sam_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Sam_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Firefly_Sam_Ability03_EnterReady": {
      "fileName": "Firefly_Sam_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Firefly_Sam_Ability21_Part02": {
      "fileName": "Firefly_Sam_Ability21_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Sam_Ultimate_BreakDamageAddRatio",
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
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "healPercent": {
            "operator": "Variables[0] (0.25) || RETURN",
            "displayLines": "0.25",
            "constants": [],
            "variables": [
              0.25
            ]
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Sam_Ability21_FireWeakType[<span class=\"descriptionNumberColor\">Extra Fire Weakness</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": 4,
          "Event": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "DamageType": "Fire",
                    "invertCondition": true
                  },
                  {
                    "name": "Trace Activated",
                    "conditionList": "Module α: Antilag Outburst"
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
                  "modifier": "Sam_ForceStanceDamage"
                }
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (Skill21_DamagePercentage) || RETURN",
                  "displayLines": "Skill21_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Skill21_DamagePercentage"
                  ]
                },
                "HitSplit": 0.15,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Fire"
                },
                "Tags": null,
                "attackType": "Skill",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Sam_ForceStanceDamage"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "includeDyingTargets": true,
              "maxTargets": 2,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Weakness",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "DamageType": "Fire",
                        "invertCondition": true
                      },
                      {
                        "name": "Trace Activated",
                        "conditionList": "Module α: Antilag Outburst"
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
                      "modifier": "Sam_ForceStanceDamage"
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (Skill21_DamagePercentageAD) || RETURN",
                      "displayLines": "Skill21_DamagePercentageAD",
                      "constants": [],
                      "variables": [
                        "Skill21_DamagePercentageAD"
                      ]
                    },
                    "HitSplit": 0.15,
                    "Toughness": {
                      "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                      "displayLines": "Blast Toughness Value",
                      "constants": [],
                      "variables": [
                        "Blast Toughness Value"
                      ]
                    },
                    "ToughnessDMGType": {
                      "DamageType": "Fire"
                    },
                    "Tags": null,
                    "attackType": "Skill"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Sam_ForceStanceDamage"
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
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "DamageType": "Fire",
                "invertCondition": true
              },
              {
                "name": "Trace Activated",
                "conditionList": "Module α: Antilag Outburst"
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
              "modifier": "Sam_ForceStanceDamage"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (Skill21_DamagePercentage) || RETURN",
              "displayLines": "Skill21_DamagePercentage",
              "constants": [],
              "variables": [
                "Skill21_DamagePercentage"
              ]
            },
            "HitSplit": 0.4,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Fire"
            },
            "Tags": null,
            "attackType": "Skill",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Sam_ForceStanceDamage"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "includeDyingTargets": true,
          "maxTargets": 2,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "DamageType": "Fire",
                    "invertCondition": true
                  },
                  {
                    "name": "Trace Activated",
                    "conditionList": "Module α: Antilag Outburst"
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
                  "modifier": "Sam_ForceStanceDamage"
                }
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (Skill21_DamagePercentageAD) || RETURN",
                  "displayLines": "Skill21_DamagePercentageAD",
                  "constants": [],
                  "variables": [
                    "Skill21_DamagePercentageAD"
                  ]
                },
                "HitSplit": 0.4,
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Fire"
                },
                "Tags": null,
                "attackType": "Skill"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Sam_ForceStanceDamage"
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Sam_Ultimate_BreakDamageAddRatio"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Firefly_Sam_Ability21_Part01": {
      "fileName": "Firefly_Sam_Ability21_Part01",
      "childAbilityList": [
        "Firefly_Sam_Ability21_Camera",
        "Firefly_Sam_Ability21_Part01",
        "Firefly_Sam_Ability21_Part02"
      ],
      "skillTrigger": "Skill21",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": [
        30,
        0,
        15
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Sam_Ability21_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Firefly_Sam_Ability02_Part02": {
      "fileName": "Firefly_Sam_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (0.4) || RETURN",
            "displayLines": "0.4",
            "constants": [],
            "variables": [
              0.4
            ]
          },
          "consumeFloor": 1
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": {
            "operator": "Variables[0] (0.6) || RETURN",
            "displayLines": "0.6",
            "constants": [],
            "variables": [
              0.6
            ]
          },
          "isFixed": "(Fixed)"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.4,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Fire"
            },
            "Tags": null,
            "attackType": "Skill",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.6,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Fire"
            },
            "Tags": null,
            "attackType": "Skill",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Firefly_Sam_Ability02_Part01": {
      "fileName": "Firefly_Sam_Ability02_Part01",
      "childAbilityList": [
        "Firefly_Sam_Ability02_Camera",
        "Firefly_Sam_Ability02_Part01",
        "Firefly_Sam_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": [
        20,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Sam_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Firefly_Sam_Ability11_Part02": {
      "fileName": "Firefly_Sam_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Sam_Ultimate_BreakDamageAddRatio",
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
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Trace Activated",
                "conditionList": "Module α: Antilag Outburst"
              },
              {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "DamageType": "Fire",
                "invertCondition": true
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
              "modifier": "Sam_ForceStanceDamage"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.15,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Fire"
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Sam_ForceStanceDamage"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Trace Activated",
                "conditionList": "Module α: Antilag Outburst"
              },
              {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "DamageType": "Fire",
                "invertCondition": true
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
              "modifier": "Sam_ForceStanceDamage"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.15,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Fire"
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Sam_ForceStanceDamage"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Trace Activated",
                "conditionList": "Module α: Antilag Outburst"
              },
              {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "DamageType": "Fire",
                "invertCondition": true
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
              "modifier": "Sam_ForceStanceDamage"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.15,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Fire"
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Sam_ForceStanceDamage"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Trace Activated",
                "conditionList": "Module α: Antilag Outburst"
              },
              {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "DamageType": "Fire",
                "invertCondition": true
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
              "modifier": "Sam_ForceStanceDamage"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.15,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Fire"
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Sam_ForceStanceDamage"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Trace Activated",
                "conditionList": "Module α: Antilag Outburst"
              },
              {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "DamageType": "Fire",
                "invertCondition": true
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
              "modifier": "Sam_ForceStanceDamage"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.4,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Fire"
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Sam_ForceStanceDamage"
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Sam_Ultimate_BreakDamageAddRatio"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Firefly_Sam_Ability11_Part01": {
      "fileName": "Firefly_Sam_Ability11_Part01",
      "childAbilityList": [
        "Firefly_Sam_Ability11_Camera",
        "Firefly_Sam_Ability11_Part01",
        "Firefly_Sam_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": [
        15,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Sam_Ability11_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Firefly_Sam_Ability01_Part02": {
      "fileName": "Firefly_Sam_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "hitOwner": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Firefly_Sam_Ability01_Part01": {
      "fileName": "Firefly_Sam_Ability01_Part01",
      "childAbilityList": [
        "Firefly_Sam_Ability01_Camera",
        "Firefly_Sam_Ability01_Part01",
        "Firefly_Sam_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Sam_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Firefly_Modifiers": {
      "fileName": "Firefly_Modifiers",
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
          "for": "Sam_PassiveAbility_RedMode_DisableUltraSkill",
          "stackType": "ReplaceByCaster",
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
                    "Ultimate"
                  ],
                  "text": "Ability cannot be used"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Sam_ActionBarPreShow",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Action Phase Start [Owner][?]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_SamSpeed",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_SamActionDelay",
                  "value": {
                    "operator": "Constants[0] (1000) || Variables[0] (_SamSpeed) || DIV || RETURN",
                    "displayLines": "(1000 / _SamSpeed)",
                    "constants": [
                      1000
                    ],
                    "variables": [
                      "_SamSpeed"
                    ]
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
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
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
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
                      "variableName": "_BEActionDelay",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_SamActionDelay",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (_BEActionDelay) || RETURN",
                          "displayLines": "_BEActionDelay",
                          "constants": [],
                          "variables": [
                            "_BEActionDelay"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Action Bar Display",
                          "triggerName": "Status_Status2",
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
          "for": "Sam_Eidolon2_BonusCD[<span class=\"descriptionNumberColor\">From Shattered Sky, I Free Fall</span>]",
          "stackType": "ReplaceByCaster",
          "description": "The \"From Shattered Sky, I Free Fall\" effect cannot be triggered yet.",
          "type": "Other",
          "statusName": "From Shattered Sky, I Free Fall"
        },
        {
          "name": "Modifier Construction",
          "for": "Sam_Eidolon2_BonusCD_LuoJi",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "assignState": "True",
                  "priorState": "CoolDown",
                  "bar#": 1,
                  "cooldown": {
                    "operator": "Variables[0] (Rank02_CD) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(Rank02_CD - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Rank02_CD"
                    ]
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Sam_Eidolon4_Endurance",
          "counter": 2,
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "EnduranceEnemyOnly"
          ],
          "execute": [
            {
              "eventTrigger": "Debuff Immunity[?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_CTRL"
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "function": "Add"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue",
                      "value": -1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Sam_Ultimate_BreakDamageAddRatio",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Break DMG"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Sam_ForceStanceDamage",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ForceStanceDamage"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.55) || RETURN",
                    "displayLines": "0.55",
                    "constants": [],
                    "variables": [
                      0.55
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
          "for": "Sam_Eidolon6_UltraDamageTypeAddRatio[<span class=\"descriptionNumberColor\">In Finalized Morrow, I Full Bloom</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFirePEN</span>&nbsp;",
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
          "description": "Fire RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Fire RES PEN Boost",
          "statusName": "In Finalized Morrow, I Full Bloom"
        },
        {
          "name": "Modifier Construction",
          "for": "Sam_PointB2_SuperBreakBonus",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SuperBreakBuff"
          ],
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
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
                      "name": "Use Custom Character Function",
                      "functionName": "DealSuperBreakDamage",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "variables": {
                        "value_0_DamagePercentage": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "DealSuperBreakDamage",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Attack Targets of Modifier Holder}}"
                          },
                          "variables": {
                            "value_0_DamagePercentage": {
                              "operator": "Variables[0] (0.35) || RETURN",
                              "displayLines": "0.35",
                              "constants": [],
                              "variables": [
                                0.35
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": 100
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Sam_Ability21_FireWeakType[<span class=\"descriptionNumberColor\">Extra Fire Weakness</span>]",
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
                    "Fire"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Implanted with extra Fire Weakness.",
          "type": "Debuff",
          "effectName": "Implant Weakness: Fire",
          "statusName": "Extra Fire Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "Sam_PassiveAbility_AllDamageTypeResistance[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
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
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "DMG Mitigation",
          "statusName": "Chrysalid Pyronexus"
        },
        {
          "name": "Modifier Construction",
          "for": "Sam_PassiveAbility_RedMode[<span class=\"descriptionNumberColor\">Fyrefly Type-IV: Complete Combustion</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
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
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Basic ATK"
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
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Skill"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank02_CD",
                      "value": 0
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "assignState": "True",
                      "priorState": "Disable",
                      "bar#": 1,
                      "cooldown": 0
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_RedModeResRatio",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Sam_Eidolon6_UltraDamageTypeAddRatio[<span class=\"descriptionNumberColor\">In Finalized Morrow, I Full Bloom</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Sam_Eidolon2_BonusCD[<span class=\"descriptionNumberColor\">From Shattered Sky, I Free Fall</span>]"
                },
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
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Sam_PassiveAbility_AllDamageTypeResistance[<span class=\"descriptionNumberColor\">Chrysalid Pyronexus</span>]"
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
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank02_CD",
                      "value": {
                        "operator": "Variables[0] (Rank02_CD) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(Rank02_CD - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Rank02_CD"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Rank02_CD",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "assignState": "True",
                          "priorState": "CoolDown",
                          "bar#": 1,
                          "cooldown": {
                            "operator": "Variables[0] (Rank02_CD) || RETURN",
                            "displayLines": "Rank02_CD",
                            "constants": [],
                            "variables": [
                              "Rank02_CD"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "assignState": "True",
                          "priorState": "Normal",
                          "bar#": 1,
                          "cooldown": 0
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Sam_Eidolon2_BonusCD[<span class=\"descriptionNumberColor\">From Shattered Sky, I Free Fall</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK",
                      "Skill"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                          "value": "(0.5 + Rank06_StanceBreakAddedRatio)"
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
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
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
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill21",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Skill"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 1,
                      "cooldown": 0
                    }
                  ]
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase2"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_RedModeResRatio",
                  "value": 1
                },
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
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_FinalDamageUP",
                      "value": {
                        "operator": "Variables[0] (0.5) || Variables[1] (0.5) || ADD || RETURN",
                        "displayLines": "(0.5 + 0.5)",
                        "constants": [],
                        "variables": [
                          0.5,
                          0.5
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_FinalDamageUP",
                      "value": {
                        "operator": "Variables[0] (0.5) || RETURN",
                        "displayLines": "0.5",
                        "constants": [],
                        "variables": [
                          0.5
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedUP) || RETURN",
                    "displayLines": "MDF_SpeedUP",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedUP"
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
                      "variableName": "MDF_StatusResistance",
                      "value": {
                        "operator": "Variables[0] (MDF_StatusResistance) || Variables[1] (0.5) || ADD || RETURN",
                        "displayLines": "(MDF_StatusResistance + 0.5)",
                        "constants": [],
                        "variables": [
                          "MDF_StatusResistance",
                          0.5
                        ]
                      }
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_StatusResistance) || RETURN",
                        "displayLines": "MDF_StatusResistance",
                        "constants": [],
                        "variables": [
                          "MDF_StatusResistance"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_StatusResistance) || RETURN",
                        "displayLines": "MDF_StatusResistance",
                        "constants": [],
                        "variables": [
                          "MDF_StatusResistance"
                        ]
                      }
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Sam_Eidolon6_UltraDamageTypeAddRatio[<span class=\"descriptionNumberColor\">In Finalized Morrow, I Full Bloom</span>]",
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
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Rank02_CD",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Skill Name",
                        "skillName": [
                          "Skill11",
                          "Skill21"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank02_CD",
                      "value": {
                        "operator": "Variables[0] (Rank02_CD) || Variables[1] (1) || ADD || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "((Rank02_CD + 1) + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Rank02_CD",
                          1
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Rank02_SamSelfInsertActionFlag",
                      "value": 1
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "Sam_Eidolon2_Bonus",
                      "afterInjection": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Rank02_CD",
                          "value": {
                            "operator": "Variables[0] (Rank02_CD) || Variables[1] (1) || SUB || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "((Rank02_CD - 1) - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Rank02_CD",
                              1
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Rank02_SamSelfInsertActionFlag",
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Got a Queued Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Rank02_CD",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Skill Name",
                        "skillName": [
                          "Skill11",
                          "Skill21"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank02_CD",
                      "value": {
                        "operator": "Variables[0] (Rank02_CD) || Variables[1] (1) || ADD || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "((Rank02_CD + 1) + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Rank02_CD",
                          1
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Rank02_SamSelfInsertActionFlag",
                      "value": 1
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "Sam_Eidolon2_Bonus",
                      "afterInjection": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Rank02_CD",
                          "value": {
                            "operator": "Variables[0] (Rank02_CD) || Variables[1] (1) || SUB || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "((Rank02_CD - 1) - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Rank02_CD",
                              1
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Rank02_SamSelfInsertActionFlag",
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Rank02_CD",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Skill Name",
                        "skillName": [
                          "Skill11",
                          "Skill21"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank02_CD",
                      "value": {
                        "operator": "Variables[0] (Rank02_CD) || Variables[1] (1) || ADD || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "((Rank02_CD + 1) + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Rank02_CD",
                          1
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Rank02_SamSelfInsertActionFlag",
                      "value": 1
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "Sam_Eidolon2_Bonus",
                      "afterInjection": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Rank02_CD",
                          "value": {
                            "operator": "Variables[0] (Rank02_CD) || Variables[1] (1) || SUB || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "((Rank02_CD - 1) - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Rank02_CD",
                              1
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Rank02_SamSelfInsertActionFlag",
                          "value": 0
                        }
                      ]
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_Rank02_SamSelfInsertActionFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Parameter String",
                        "compareType": "=",
                        "value2": "Sam_Eidolon2_Bonus"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Rank02_SamSelfInsertActionFlag",
                      "value": 0
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 1,
                      "cooldown": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Sam_Eidolon2_BonusCD[<span class=\"descriptionNumberColor\">From Shattered Sky, I Free Fall</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Sam_Eidolon2_BonusCD_LuoJi"
                    },
                    {
                      "name": "UI Display Event",
                      "popUpText": "From Shattered Sky, I Free Fall"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Sound stuff nobody cares about"
            },
            {
              "eventTrigger": "Sound stuff nobody cares about"
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Module β: Autoreactive Armor"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Sam_PointB2_SuperBreakBonus"
                        }
                      ]
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Sam_PointB2_SuperBreakBonus"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SpeedUP",
            "MDF_StatusResistance",
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "When using Enhanced Basic ATK or Enhanced Skill, increases Weakness Break Efficiency by <span class=\"descriptionNumberColor\">MDF_FinalDamageUP</span> and increases the Break DMG dealt by SAM to the enemy targets by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUP</span>, and Effect RES by <span class=\"descriptionNumberColor\">MDF_StatusResistance</span>.",
          "type": "Other",
          "effectName": "Fyrefly Type-IV: Complete Combustion",
          "statusName": "Fyrefly Type-IV: Complete Combustion",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Sam_PassiveAbility_RedMode_DisableUltraSkill",
              "aliveOnly": "True",
              "haloStatus": true
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Sam_PointB2_SuperBreakBonus",
              "aliveOnly": "True",
              "haloStatus": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Module β: Autoreactive Armor"
                  },
                  {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      ],
      "references": []
    },
    "Firefly_BE_BattleEvents": {
      "fileName": "Firefly_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 11310,
          "team": "TeamLight",
          "eventType": "Assist",
          "abilityList": [
            "Sam_PassiveAbility01_BattleEvent"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevelEvent": true,
          "barType": 1,
          "actionDescription": "While SAM is in the Complete Combustion state, gains Enhanced Basic ATK and Enhanced Skill. Increases this unit's SPD, Weakness Break Efficiency, and the Break DMG taken by enemy targets, lasting until the Complete Combustion countdown turn begins."
        }
      ],
      "references": []
    }
  }
}