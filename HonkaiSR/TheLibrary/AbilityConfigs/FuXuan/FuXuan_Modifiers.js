const configAbility = {
  "fileName": "FuXuan_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__62563489\">ADV_StageAbility_Maze_FuXuan</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__791374853\">ADV_StageAbility_Maze_FuXuan_HolyShield</a>",
      "counter": 1,
      "stackType": "Replace",
      "modifierFlags": [
        "HolyShield"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-72449608\">FuXuan_Eidolon2TeamCheck</a>",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1795072353\">FuXuan_Eidolon2</a>[<span class=\"descriptionNumberColor\">Optimus Felix</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Anyone]: End",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1795072353\">FuXuan_Eidolon2</a>[<span class=\"descriptionNumberColor\">Optimus Felix</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1795072353\">FuXuan_Eidolon2</a>[<span class=\"descriptionNumberColor\">Optimus Felix</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1795072353\">FuXuan_Eidolon2</a>[<span class=\"descriptionNumberColor\">Optimus Felix</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1795072353\">FuXuan_Eidolon2</a>[<span class=\"descriptionNumberColor\">Optimus Felix</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1795072353\">FuXuan_Eidolon2</a>[<span class=\"descriptionNumberColor\">Optimus Felix</span>]",
      "description": "When struck with a killing blow, instead of becoming downed, the character immediately restores HP equal to <span class=\"descriptionNumberColor\">MDF_HealPercentage</span> of Max HP.",
      "type": "Buff",
      "effectName": "Optimus Felix",
      "statusName": "Optimus Felix",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "FuXuan_Eidolon2_Insert"
            }
          ]
        },
        {
          "eventTrigger": "Waiting in Limbo [Owner]",
          "priorityLevel": -70,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurrentHP",
                "compareType": "<=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "FuXuan_Eidolon2_Insert",
                  "priorityTag": "CharacterReviveOthers",
                  "ownerState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "valuePerStack": {
                    "AADF_1": {
                      "displayLines": "MDF_HealPercentage"
                    }
                  },
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-72449608\">FuXuan_Eidolon2TeamCheck</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__227742730\">FuXuan_Tree02TeamCheck</a>",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-72044013\">FuXuan_Tree02</a>[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Turn [Anyone]: End",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-72044013\">FuXuan_Tree02</a>[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-72044013\">FuXuan_Tree02</a>[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-72044013\">FuXuan_Tree02</a>[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-72044013\">FuXuan_Tree02</a>[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-72044013\">FuXuan_Tree02</a>[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-72044013\">FuXuan_Tree02</a>[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "EnduranceEnemyOnly"
      ],
      "description": "This status can be consumed to resist Crowd Control debuffs.",
      "type": "Buff",
      "effectName": "Resist Crowd Control debuffs",
      "statusName": "Liuren, the Sexagenary",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"227742730\">FuXuan_Tree02TeamCheck</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1862182829\">FuXuan_Eidolon6</a>[<span class=\"descriptionNumberColor\">Total HP lost</span>]",
      "stackType": "Replace",
      "description": "Allies have lost <span class=\"descriptionNumberColor\">MDF_FinalDamage</span> HP in total.",
      "type": "Other",
      "statusName": "Total HP lost",
      "execute": [
        {
          "eventTrigger": "HP Change [Anyone]",
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
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "entityType": "Battle Event",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1150141703\">FuXuan_ListenLifeTime</a>[<span class=\"descriptionNumberColor\">Matrix of Prescience</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "HPChangeValue",
                  "value": "ParamValue"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HPChangeValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(GDF_AllTeamMemberLoseHPValue - HPChangeValue)"
                      },
                      "variableName": "GDF_AllTeamMemberLoseHPValue"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "CasterMaxHP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "GDF_AllTeamMemberLoseHPValue",
                        "compareType": "<=",
                        "value2": {
                          "displayLines": "(CasterMaxHP * 1.2)"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "GDF_AllTeamMemberLoseHPValue"
                          },
                          "variableName": "MDF_FinalDamage"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(CasterMaxHP * 1.2)"
                          },
                          "variableName": "MDF_FinalDamage"
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
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_FinalDamage"
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 1000000000,
              "onChange": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "CasterMaxHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "GDF_AllTeamMemberLoseHPValue",
                    "compareType": "<=",
                    "value2": {
                      "displayLines": "(CasterMaxHP * 1.2)"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "GDF_AllTeamMemberLoseHPValue"
                      },
                      "variableName": "MDF_FinalDamage"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(CasterMaxHP * 1.2)"
                      },
                      "variableName": "MDF_FinalDamage"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1150141703\">FuXuan_ListenLifeTime</a>[<span class=\"descriptionNumberColor\">Matrix of Prescience</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Receive DMG distributed by other teammates.",
      "type": "Buff",
      "statusName": "Matrix of Prescience",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1553530097\">FuXuan_HitDamageSplit</a>[<span class=\"descriptionNumberColor\">Matrix of Prescience</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-72044013\">FuXuan_Tree02</a>[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-281320728\">FuXuan_JianZhi_Eidolon1</a>[<span class=\"descriptionNumberColor\">Knowledge</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1745888668\">FuXuan_JianZhi</a>[<span class=\"descriptionNumberColor\">Knowledge</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1795072353\">FuXuan_Eidolon2</a>[<span class=\"descriptionNumberColor\">Optimus Felix</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Owner]: Action-End Phase",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "compareType": "=",
                "value2": 2,
                "valueType": "LifeTime"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "GDF_BPSkill_LifeTime"
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "AITag",
                  "value": 1,
                  "variableName": "AlwaysNeedBP"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "GDF_BPSkill_LifeTime"
            },
            {
              "name": "Define Custom Variable",
              "scope": "AITag",
              "value": 0,
              "variableName": "AlwaysNeedBP"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
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
                    "modifier": "<a class=\"gModGreen\" id=\"-72449608\">FuXuan_Eidolon2TeamCheck</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}.[[removeMemosprite]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1795072353\">FuXuan_Eidolon2</a>[<span class=\"descriptionNumberColor\">Optimus Felix</span>]",
                      "valuePerStack": {
                        "MDF_HealPercentage": {
                          "displayLines": "0.7"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable with Team Count",
              "variableName": "AliveNum",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              },
              "living": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AliveNum",
                "compareType": ">",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 4,
                  "variableName": "AliveNum"
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-281320728\">FuXuan_JianZhi_Eidolon1</a>[<span class=\"descriptionNumberColor\">Knowledge</span>]",
                  "valuePerStack": {
                    "MDF_MaxHPUpRatio": {
                      "displayLines": "0.06"
                    },
                    "MDF_CritChanceUpRatio": {
                      "displayLines": "0.12"
                    },
                    "MDF_CritDamageUpRatio": {
                      "displayLines": "0.3"
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1745888668\">FuXuan_JianZhi</a>[<span class=\"descriptionNumberColor\">Knowledge</span>]",
                  "valuePerStack": {
                    "MDF_MaxHPUpRatio": {
                      "displayLines": "0.06"
                    },
                    "MDF_CritChanceUpRatio": {
                      "displayLines": "0.12"
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
                "name": "Is Part Of",
                "target1": {
                  "name": "Target Name",
                  "target": "{{All Team Members with Unselectables}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1553530097\">FuXuan_HitDamageSplit</a>[<span class=\"descriptionNumberColor\">Matrix of Prescience</span>]",
                  "valuePerStack": {
                    "MDF_SplitPercentage": {
                      "displayLines": "0.65"
                    },
                    "Ability02_P2_DamageResistance": {
                      "displayLines": "UnusedUnderThisBase_5275"
                    },
                    "AddSP": {
                      "displayLines": "5"
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Liuren, the Sexagenary"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-72044013\">FuXuan_Tree02</a>[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-72044013\">FuXuan_Tree02</a>[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-281320728\">FuXuan_JianZhi_Eidolon1</a>[<span class=\"descriptionNumberColor\">Knowledge</span>]",
                      "valuePerStack": {
                        "MDF_MaxHPUpRatio": {
                          "displayLines": "0.06"
                        },
                        "MDF_CritChanceUpRatio": {
                          "displayLines": "0.12"
                        },
                        "MDF_CritDamageUpRatio": {
                          "displayLines": "0.3"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1745888668\">FuXuan_JianZhi</a>[<span class=\"descriptionNumberColor\">Knowledge</span>]",
                      "valuePerStack": {
                        "MDF_MaxHPUpRatio": {
                          "displayLines": "0.06"
                        },
                        "MDF_CritChanceUpRatio": {
                          "displayLines": "0.12"
                        }
                      }
                    }
                  ]
                },
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-72449608\">FuXuan_Eidolon2TeamCheck</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "entityType": "Memosprite",
                        "livingState": "Mask_AliveOnly",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1795072353\">FuXuan_Eidolon2</a>[<span class=\"descriptionNumberColor\">Optimus Felix</span>]",
                      "valuePerStack": {
                        "MDF_HealPercentage": {
                          "displayLines": "0.7"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-2001636468\">FuXuan_ExChangeHP</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
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
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
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
                        "compareType": "<=",
                        "value2": {
                          "displayLines": "0.5"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "GDF_LimboHPChangeFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "GDF_ExChangeHPCount",
                        "compareType": ">",
                        "value2": 0
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
                      "abilityName": "FuXuan_Passive_Ability",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "CharacterHealSelf",
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
          "eventTrigger": "Enter Battle",
          "priorityLevel": -55,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
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
                        "compareType": "<=",
                        "value2": {
                          "displayLines": "0.5"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "GDF_LimboHPChangeFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "GDF_ExChangeHPCount",
                        "compareType": ">",
                        "value2": 0
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
                      "abilityName": "FuXuan_Passive_Ability",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "CharacterHealSelf",
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
          "eventTrigger": "When Modifier is Added [Owner]",
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
                      "target": "{{Caster}}"
                    },
                    "flagName": "DisableAction"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "STAT_CTRL"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "FLAG_BanAction"
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
                "name": "Compare: Variable",
                "value1": "FLAG_BanAction",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "DisableAction"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL"
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "FLAG_BanAction"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
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
                                "compareType": "<=",
                                "value2": {
                                  "displayLines": "0.5"
                                }
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "GDF_LimboHPChangeFlag",
                                "compareType": "=",
                                "value2": 0
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "GDF_ExChangeHPCount",
                                "compareType": ">",
                                "value2": 0
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
                              "abilityName": "FuXuan_Passive_Ability",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "priorityTag": "CharacterHealSelf",
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
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-281320728\">FuXuan_JianZhi_Eidolon1</a>[<span class=\"descriptionNumberColor\">Knowledge</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_MaxHPUpRatio",
        "MDF_CritChanceUpRatio",
        "MDF_CritDamageUpRatio"
      ],
      "latentQueue": [
        "GDF_BPSkill_LifeTime"
      ],
      "description": "Increases Max HP by <span class=\"descriptionNumberColor\">MDF_MaxHPUpRatio</span>, CRIT Rate by <span class=\"descriptionNumberColor\">MDF_CritChanceUpRatio</span>, and CRIT DMG by <span class=\"descriptionNumberColor\">MDF_CritDamageUpRatio</span>.",
      "type": "Buff",
      "effectName": "Increases Max HP, CRIT Rate, and CRIT DMG",
      "statusName": "Knowledge",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "_MaxHP",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "_HPConvert",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(0.06 * (_MaxHP - _HPConvert))"
              },
              "variableName": "MDF_MaxHPUpRatio"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_MaxHPUpRatio"
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_CritChanceUpRatio"
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_CritDamageUpRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1745888668\">FuXuan_JianZhi</a>[<span class=\"descriptionNumberColor\">Knowledge</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_MaxHPUpRatio",
        "MDF_CritChanceUpRatio"
      ],
      "latentQueue": [
        "GDF_BPSkill_LifeTime"
      ],
      "description": "Max HP +<span class=\"descriptionNumberColor\">MDF_MaxHPUpRatio</span>, CRIT Rate +<span class=\"descriptionNumberColor\">MDF_CritChanceUpRatio</span>.",
      "type": "Buff",
      "effectName": "Increases Max HP and CRIT Rate",
      "statusName": "Knowledge",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "_MaxHP",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "_HPConvert",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(0.06 * (_MaxHP - _HPConvert))"
              },
              "variableName": "MDF_MaxHPUpRatio"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_MaxHPUpRatio"
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_CritChanceUpRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1537044450\">FuXuan_DamageReduce</a>[<span class=\"descriptionNumberColor\">Misfortune Avoidance</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Reduces DMG taken by <span class=\"descriptionNumberColor\">MDF_DamageResistanceRatio</span>.",
      "type": "Buff",
      "statusName": "Misfortune Avoidance",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_DamageResistanceRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1553530097\">FuXuan_HitDamageSplit</a>[<span class=\"descriptionNumberColor\">Matrix of Prescience</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "stackData": [
        "MDF_SplitPercentage",
        "Skill02_P2_DamageResistance",
        "AddSP"
      ],
      "latentQueue": [
        "GDF_BPSkill_LifeTime"
      ],
      "description": "Distribute to Fu Xuan <span class=\"descriptionNumberColor\">MDF_SplitPercentage</span> of the DMG this unit receives (before this DMG is mitigated by any Shields).",
      "type": "Buff",
      "statusName": "Matrix of Prescience",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "NOT",
                "conditions": {
                  "name": "Is Joint-Attack",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              },
              "passed": [
                {
                  "name": "Share DMG Taken",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "state": "Mask_AliveOrLimbo",
                  "selfSplit": {
                    "displayLines": "(1 - MDF_SplitPercentage)"
                  },
                  "targetSplit": {
                    "displayLines": "MDF_SplitPercentage"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Team Count",
              "variableName": "AliveNum",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              },
              "living": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AliveNum",
                "compareType": ">",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 4,
                  "variableName": "AliveNum"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "displayLines": "AddSP"
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}