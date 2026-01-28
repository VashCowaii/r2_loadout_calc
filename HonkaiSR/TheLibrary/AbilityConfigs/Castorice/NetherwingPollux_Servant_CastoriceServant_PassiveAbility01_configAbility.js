const configAbility = {
  "fileName": "NetherwingPollux_Servant_CastoriceServant_PassiveAbility01",
  "childAbilityList": [
    "NetherwingPollux_Servant_CastoriceServant_PassiveAbility01",
    "NetherwingPollux_Servant_CastoriceServant_Together_Part01"
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
      "name": "Set Netherwing Skill Phase",
      "level": 1
    },
    {
      "name": "Update Action Bar Display",
      "triggerName": "Level_1",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Set Netherwing's Ardent Will Stacks",
          "display": 0,
          "preview": 0
        }
      ],
      "failed": [
        {
          "name": "Set Netherwing's Ardent Will Stacks",
          "show": false,
          "display": 0,
          "preview": 0
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_CastoriceServant_Passive"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_CastoriceServant_LoseHPPreShow"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_CastoriceServant_LifeTime",
      "counter": {
        "operator": "Variables[0] (CastoriceServant_LifeTime) || RETURN",
        "displayLines": "CastoriceServant_LifeTime",
        "constants": [],
        "variables": [
          "CastoriceServant_LifeTime"
        ]
      },
      "valuePerStack": {
        "_AttackTime": {
          "operator": "Variables[0] (CastoriceServant_LifeTime) || RETURN",
          "displayLines": "CastoriceServant_LifeTime",
          "constants": [],
          "variables": [
            "CastoriceServant_LifeTime"
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
      "modifier": "Memosprite_CastoriceServant_Deathrattle"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_CastoriceServant_OnListenHitDamageSplit"
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
          "modifier": "Memosprite_CastoriceServant_Eidolon6_StancePreview"
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Servant_CastoriceServant_GetMaxHP"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CastoriceServant_Deathrattle",
      "modifierFlags": [
        "Deathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Servant_CastoriceServant_PassiveInsertAbility_Part01",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "AvatarInsertAttackSelf",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "ClearAvatarArea_ByAbility"
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Servant_CastoriceServant_PassiveInsertAbility_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "AvatarInsertAttackSelf",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
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
      "for": "Memosprite_CastoriceServant_TiggerKiller",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Auto-Battle",
                "invertCondition": true
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_Disable"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CastoriceServant_LifeTime",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_TiggerKiller"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_CastoriceServant_RefreshActionBar"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_AttackTime",
              "value": {
                "operator": "Variables[0] (_AttackTime) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_AttackTime - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_AttackTime"
                ]
              }
            },
            {
              "name": "Define Modifier Variable",
              "modifierName": null,
              "function": "Add"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (_AttackTime) || RETURN",
                "displayLines": "_AttackTime",
                "constants": [],
                "variables": [
                  "_AttackTime"
                ]
              },
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "assignState": "True",
              "bar#": "Dot"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_AttackTime",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_AttackMaxTime",
              "value": {
                "operator": "Variables[0] (_AttackTime) || RETURN",
                "displayLines": "_AttackTime",
                "constants": [],
                "variables": [
                  "_AttackTime"
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (_AttackTime) || RETURN",
                "displayLines": "_AttackTime",
                "constants": [],
                "variables": [
                  "_AttackTime"
                ]
              },
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "maximum": {
                "operator": "Variables[0] (_AttackMaxTime) || RETURN",
                "displayLines": "_AttackMaxTime",
                "constants": [],
                "variables": [
                  "_AttackMaxTime"
                ]
              },
              "assignState": "True",
              "bar#": "Dot"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_CastoriceServant_RefreshActionBar"
            }
          ]
        }
      ],
      "stackData": [
        "_AttackTime"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_CastoriceServant_Passive",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "ImmuneDebuff",
        "SpecialBattleArea"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "Castorice_Ability03_Field"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_CastoriceServant_OnPhase1Change"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CastoriceServant_BPCost_3"
                }
              ]
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
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CastoriceServant_PlayCrossHairPreviewFadeIn"
            },
            {
              "name": "Mark Entity as Non-Target(Unselectable) [CUSTOM]",
              "blockTeams": "Enemy Team"
            },
            {
              "name": "Reinstance Stat Value/Bounds",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (CastoriceServant_MaxHP) || RETURN",
                "displayLines": "CastoriceServant_MaxHP",
                "constants": [],
                "variables": [
                  "CastoriceServant_MaxHP"
                ]
              }
            },
            {
              "name": "Reinstance Stat Value/Bounds",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "value": 0,
              "floor": 0,
              "ceiling": 0
            },
            {
              "name": "Reinstance Stat Value/Bounds",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
              "value": 0,
              "floor": 0,
              "ceiling": 0
            },
            {
              "name": "Reinstance Stat Value/Bounds",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
              "value": 0,
              "floor": 0,
              "ceiling": 0
            },
            {
              "name": "Set HP Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "setValue": {
                "operator": "Variables[0] (CastoriceServant_CurrentHP) || RETURN",
                "displayLines": "CastoriceServant_CurrentHP",
                "constants": [],
                "variables": [
                  "CastoriceServant_CurrentHP"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CastoriceServant_CurrentCount",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Servant_CastoriceServant_GetMaxHP"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ParameterValue",
                "compareType": "<",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CastoriceServant_CurrentCount",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CastoriceServant_CurrentCount",
                  "value": {
                    "operator": "Variables[0] (FLOOR) || Variables[1] (CastoriceServant_CurrentCount) || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(CastoriceServant_CurrentCount)",
                    "constants": [],
                    "variables": [
                      "FLOOR",
                      "CastoriceServant_CurrentCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ParameterValue",
                "compareType": "<",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "CastoriceServant_Skill02_AttackCurrent_LostHP"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CastoriceServant_Skill02_AttackCurrent_LostHP",
                  "value": {
                    "operator": "Variables[0] (CastoriceServant_Skill02_AttackCurrent_LostHP) || INVERT || RETURN",
                    "displayLines": "-CastoriceServant_Skill02_AttackCurrent_LostHP",
                    "constants": [],
                    "variables": [
                      "CastoriceServant_Skill02_AttackCurrent_LostHP"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CastoriceServant_Skill02_AttackTotal_LostHP",
                  "value": {
                    "operator": "Variables[0] (FLOOR) || Variables[1] (CastoriceServant_Skill02_AttackTotal_LostHP) || Variables[2] (CastoriceServant_Skill02_AttackCurrent_LostHP) || ADD || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((CastoriceServant_Skill02_AttackTotal_LostHP + CastoriceServant_Skill02_AttackCurrent_LostHP))",
                    "constants": [],
                    "variables": [
                      "FLOOR",
                      "CastoriceServant_Skill02_AttackTotal_LostHP",
                      "CastoriceServant_Skill02_AttackCurrent_LostHP"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Leave Battle"
        },
        {
          "eventTrigger": "New Enemy Wave"
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CastoriceServant_SkillMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Memosprite_CastoriceServant_BP_Explode"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Memosprite_CastoriceServant_BPCost_3"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Memosprite_CastoriceServant_BPCost_3"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "CastoriceServant_BPSkill_Level",
                            "compareType": "<=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "Memosprite_CastoriceServant_BPCost_1"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "CastoriceServant_BPSkill_Level",
                            "compareType": ">=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "Memosprite_CastoriceServant_BPCost_2"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_CastoriceServant_RefreshActionBar"
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
      "for": "Memosprite_CastoriceServant_PlayCrossHairPreviewFadeIn",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
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
                    "team": "Player Team"
                  },
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
                  }
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "EnterBattlePlayTimes",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Anyone][?]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "EnterBattlePlayTimes",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "mustBeAlive2": true,
                    "invertCondition": true
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
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
                  "target": "{{Caster}}"
                },
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CL_PlayTimes",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action End [Owner]"
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "CL_PlayTimes",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "CL_EnterBattlePlayTimes",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle"
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
                    "name": "Compare: Variable",
                    "value1": "EnterBattlePlayTimes",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "mustBeAlive2": true,
                    "invertCondition": true
                  }
                ]
              }
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
                    "name": "Compare: Variable",
                    "value1": "EnterBattlePlayTimes",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "mustBeAlive2": true,
                    "invertCondition": true
                  }
                ]
              }
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
                    "name": "Compare: Variable",
                    "value1": "EnterBattlePlayTimes",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "mustBeAlive2": true,
                    "invertCondition": true
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Active Ability Chosen [Anyone]",
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
                    "name": "Compare: Variable",
                    "value1": "CL_EnterBattlePlayTimes",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "CL_PlayTimes",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              }
            },
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
                    "name": "Compare: Variable",
                    "value1": "CL_EnterBattlePlayTimes",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "CL_PlayTimes",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Check Callback Flag Parameter",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Param Flag",
                "flagName": "CallBackBefore_OnListenInsertAbilityStart"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}