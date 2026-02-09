const configAbility = {
  "fileName": "1004025_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__514811508\">Enemy_W1_Gepard_IF_03_Part2EnhanceInti</a>",
      "stackType": "Refresh",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-59384693\">Enemy_W1_Gepard_IF_03_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Will of Steel</span>]",
                  "valuePerStack": {
                    "MDF_SpeedUpPerLayer": {
                      "operator": "Variables[0] ({[SkillP04[2]]}) || RETURN",
                      "displayLines": "{[SkillP04[2]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP04[2]]}"
                      ]
                    },
                    "MDF_AttackUpPerLayer": {
                      "operator": "Variables[0] ({[SkillP04[3]]}) || RETURN",
                      "displayLines": "{[SkillP04[3]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP04[3]]}"
                      ]
                    }
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag",
        "PhaseFlag",
        "isMainAttack"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2141633429\">Monster_W1_Gepard_IF_03_PartController</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1546214500\">Monster_W1_Bronya_IF_02_PartController</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1981216123\">Enemy_IF_LimboMark</a>[<span class=\"descriptionNumberColor\">Valor Via Setbacks</span>]"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "Gepard_LimboFlag",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "value1": "Bronya_LimboFlag",
                        "compareType": "=",
                        "value2": 1
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
                            "value1": "InsertCheck",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "TargetEntity"
                          },
                          "passed": [
                            {
                              "name": "Set Enemy Phase",
                              "mode": "Inc"
                            },
                            {
                              "name": "Exit Broken-State",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            },
                            {
                              "name": "Dispel Debuffs",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "silent": true
                            },
                            {
                              "name": "Set Enemy Phase",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "mode": "Inc"
                            },
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "InsertCheck"
                            },
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "InsertCheck"
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{All Team Members(Exclude Self)}}"
                              },
                              "searchRandom": true,
                              "conditions": {
                                "name": "Enemy ID",
                                "ID": {
                                  "operator": "Variables[0] (SummonID01) || RETURN",
                                  "displayLines": "SummonID01",
                                  "constants": [],
                                  "variables": [
                                    "SummonID01"
                                  ]
                                },
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": null
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Force Entity Death",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W1_Gepard_IF_03_PassiveAbility_Insert",
                              "priorityTag": "MonsterChangePhase",
                              "ownerState": "Mask_AliveOrLimbo",
                              "targetState": "Mask_AliveOrLimbo",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "InsertCheck",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "TargetEntity"
                          },
                          "passed": [
                            {
                              "name": "Set HP Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "setValue": 1
                            },
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "InsertCheck"
                            },
                            {
                              "name": "Reset Toughness",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              }
                            },
                            {
                              "name": "Lock HP",
                              "threshold": 0.0009999999,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              }
                            },
                            {
                              "name": "Exit Broken-State",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            },
                            {
                              "name": "Inject Ability Use",
                              "conditionActive": {
                                "name": "Compare: Variable",
                                "value1": "HP_Bars_Remaining",
                                "compareType": "=",
                                "value2": 1
                              },
                              "abilityName": "Monster_W1_Bronya_IF_02_PassiveAbility_EnhanceSwitch",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "abilityTarget": {
                                "name": "Target Sequence",
                                "Sequence": [
                                  {
                                    "name": "Target Name",
                                    "target": "{{Player Team All}}"
                                  },
                                  "Shuffle Targets",
                                  {
                                    "name": "Return Target",
                                    "value": 1
                                  }
                                ]
                              },
                              "priorityTag": "MonsterChangeState",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "Gepard_LimboFlag",
                  "value": 1
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1546214500\">Monster_W1_Bronya_IF_02_PartController</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W1_Bronya_IF_02_PassiveAbility_EnhanceSwitch",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "abilityTarget": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "Shuffle Targets",
                          {
                            "name": "Return Target",
                            "value": 1
                          }
                        ]
                      },
                      "priorityTag": "MonsterChangeState",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        },
        {
          "eventTrigger": "Pre-Death [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1559306113\">Enemy_W1_Gepard_IF_03_WeaknessProtect</a>",
      "modifierFlags": [
        "MuteBreak"
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
              "action": "Protected",
              "valueList": [
                "AllType"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "isMainAttack",
        "PhaseFlag",
        "AIFlag",
        "Bronya_LimboFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-59384693\">Enemy_W1_Gepard_IF_03_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Will of Steel</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "PhaseFlag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-59384693\">Enemy_W1_Gepard_IF_03_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Will of Steel</span>]",
                  "valuePerStack": {
                    "MDF_SpeedUpPerLayer": {
                      "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
                      "displayLines": "{[SkillP04[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP04[0]]}"
                      ]
                    },
                    "MDF_AttackUpPerLayer": {
                      "operator": "Variables[0] ({[SkillP04[1]]}) || RETURN",
                      "displayLines": "{[SkillP04[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP04[1]]}"
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-59384693\">Enemy_W1_Gepard_IF_03_EnhancePerTurn</a>[<span class=\"descriptionNumberColor\">Will of Steel</span>]",
                  "valuePerStack": {
                    "MDF_SpeedUpPerLayer": {
                      "operator": "Variables[0] ({[SkillP04[2]]}) || RETURN",
                      "displayLines": "{[SkillP04[2]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP04[2]]}"
                      ]
                    },
                    "MDF_AttackUpPerLayer": {
                      "operator": "Variables[0] ({[SkillP04[3]]}) || RETURN",
                      "displayLines": "{[SkillP04[3]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP04[3]]}"
                      ]
                    }
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
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedUpPerLayer) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_SpeedUpPerLayer * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_SpeedUpPerLayer",
                  "MDF_Layer"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackUpPerLayer) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_AttackUpPerLayer * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_AttackUpPerLayer",
                  "MDF_Layer"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_SpeedUpPerLayer",
        "MDF_AttackUpPerLayer"
      ],
      "latentQueue": [
        "isMainAttack",
        "PhaseFlag",
        "AIFlag"
      ],
      "description": "Each stack increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUpPerLayer</span> and ATK by <span class=\"descriptionNumberColor\">MDF_AttackUpPerLayer</span>. All stacks are lost when Weakness is broken.",
      "type": "Buff",
      "effectName": "Enhance",
      "statusName": "Will of Steel",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1430608043\">Enemy_W1_Gepard_IF_03_Enhance</a>[<span class=\"descriptionNumberColor\">Thick and Thin</span>]",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedUp) || RETURN",
                "displayLines": "MDF_SpeedUp",
                "constants": [],
                "variables": [
                  "MDF_SpeedUp"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SpeedUp"
      ],
      "latentQueue": [
        "PhaseFlag"
      ],
      "description": "Greatly enhances this unit, increasing SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUp</span>. When in this state, Frigid Waterfall has a slight chance to Freeze the attacked target.",
      "type": "Buff",
      "effectName": "Enhance",
      "statusName": "Thick and Thin"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1981216123\">Enemy_IF_LimboMark</a>[<span class=\"descriptionNumberColor\">Valor Via Setbacks</span>]",
      "modifierFlags": [
        "DisableHealHP",
        "DisableAction",
        "MuteSpeed"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)"
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Gepard_LimboFlag"
      ],
      "description": "Enters Downed state, waiting for recovery.",
      "type": "Other",
      "effectName": "Downed",
      "statusName": "Valor Via Setbacks"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1241486816\">Enemy_W1_Gepard_IF_03_ListenBeingAttacked</a>",
      "modifierFlags": [
        "MuteHitH"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Action End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members(Exclude Self)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": ">=",
                "value2": 1,
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1584296027\">Enemy_W1_Gepard_IF_03_BlockDamage</a>"
                }
              },
              "failed": [
                "Modifier Deletes Itself"
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "ReturnAttackCounter",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1584296027\">Enemy_W1_Gepard_IF_03_BlockDamage</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ReturnAttackCounter",
                  "value": 1
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_Gepard_IF_03_Ability04_Insert_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "MonsterChangeState",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "DisableAction",
                    "STAT_CTRL",
                    "Break"
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
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1584296027\">Enemy_W1_Gepard_IF_03_BlockDamage</a>",
      "counter": 1,
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "BlockDamageExcludeDot",
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Set Hit-Class"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Hit-Class",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit"
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Damage was Blocked",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "passed": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "function": "Add"
                }
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2038076408\">Monster_Gepard_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Aggravate</span>]",
      "modifierFlags": [
        "TeamAction"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Silvermane Guards will focus their attacks on this target.",
      "type": "Debuff",
      "effectName": "Lock On",
      "statusName": "Aggravate"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1058077488\">Gepard_BattleScore3</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1103,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Serval"
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Foolish Little Brother...",
                      "desc": "Use Serval to deal the final blow in a victory against boss Gepard",
                      "rarity": "Mid",
                      "type": "Hidden until Completion"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1074855107\">Gepard_BattleScore2</a>",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Gepard_BattleScore2_Flag"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Character ID",
                    "ID": 1101,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Bronya"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": []
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
      "for": "<a class=\"gModGreen\" id=\"mod__1091632726\">Gepard_BattleScore1</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Gepard_BattleScore1_Flag"
            }
          ]
        },
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W1_Soldier"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Gepard_BattleScore1_Flag",
                  "context": "TargetEntity",
                  "value": -1,
                  "min": -100,
                  "max": 100
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W1_Soldier"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Gepard_BattleScore1_Flag",
                  "context": "TargetEntity",
                  "value": 1,
                  "min": -100,
                  "max": 100
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Gepard_BattleScore1_Flag",
                "compareType": ">=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "failed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Code of Chivalry",
                      "desc": "Defeat Gepard without defeating the Silvermane Guards that were summoned",
                      "rarity": "Mid"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-36298295\">Enemy_W1_Gepard_PassiveAbility_Formation2</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Related Summoned Entity",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Assign Target Battle-Location",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "row": 1
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1932026203\">Monster_W1_Gepard_RemoveOneMore</a>",
      "execute": [
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Gepard_AICounter",
                    "compareType": "=",
                    "value2": 5,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Gepard_SummonCounter",
        "Gepard_AICounter"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1321981323\">Enemy_W1_Gepard_BlockDamage</a>[<span class=\"descriptionNumberColor\">Barrier</span>]",
      "counter": 1,
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "BlockDamageExcludeDot",
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Set Hit-Class"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Hit-Class",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit"
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Damage was Blocked",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "passed": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "function": "Add"
                }
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [],
      "latentQueue": [],
      "description": "Nullifies all DMG received except for DoT until after being attacked.",
      "type": "Buff",
      "effectName": "Barrier",
      "statusName": "Barrier"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1557546288\">Gepard_SPRL_Shield</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "Shield"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1602419899\">Gepard_RL_ShieldPerformance</a>"
            },
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "variableName": "MDF_Count",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": {
                "operator": "Variables[0] (MDF_MaxHPHitPercentage1) || RETURN",
                "displayLines": "MDF_MaxHPHitPercentage1",
                "constants": [],
                "variables": [
                  "MDF_MaxHPHitPercentage1"
                ]
              },
              "consumeFloor": 1
            },
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "consumePercent": {
                "operator": "Variables[0] (MDF_MaxHPHitPercentage2) || RETURN",
                "displayLines": "MDF_MaxHPHitPercentage2",
                "constants": [],
                "variables": [
                  "MDF_MaxHPHitPercentage2"
                ]
              },
              "consumeFloor": 1
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                "displayLines": "MDF_ShieldValue",
                "constants": [],
                "variables": [
                  "MDF_ShieldValue"
                ]
              },
              "entityClass": "Enemy",
              "maximum": {
                "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                "displayLines": "MDF_ShieldValue",
                "constants": [],
                "variables": [
                  "MDF_ShieldValue"
                ]
              },
              "assignState": "False"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1602419899\">Gepard_RL_ShieldPerformance</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1788931056\">Gepard_RL_ShieldIcon</a>[<span class=\"descriptionNumberColor\">Collective Shield</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1185722758\">Gepard_RL_ShieldIcon2</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-508706525\">Gepard_RL_Break</a>"
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                },
                {
                  "name": "Trigger 0-Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  }
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "multiBase": 1
                }
              ]
            },
            {
              "name": "Remove Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": ">=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Create Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team Entity}}"
                  },
                  "targetDisplay": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Constants[0] (0) || RETURN",
                    "displayLines": "0",
                    "constants": [
                      0
                    ],
                    "variables": []
                  },
                  "valuePercent": {
                    "operator": "Variables[0] (MDF_ShieldPercentage) || Constants[0] (5) || DIV || Variables[1] (MDF_Count) || MUL || Variables[2] (UnusedUnderThisBase_148) || MUL || RETURN",
                    "displayLines": "(((MDF_ShieldPercentage / 5) * MDF_Count) * UnusedUnderThisBase_148)",
                    "constants": [
                      5
                    ],
                    "variables": [
                      "MDF_ShieldPercentage",
                      "MDF_Count",
                      "UnusedUnderThisBase_148"
                    ]
                  },
                  "formula": "HP Scaling (Shield)"
                }
              ],
              "failed": [
                {
                  "name": "Create Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team Entity}}"
                  },
                  "targetDisplay": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Constants[0] (0) || RETURN",
                    "displayLines": "0",
                    "constants": [
                      0
                    ],
                    "variables": []
                  },
                  "valuePercent": {
                    "operator": "Variables[0] (MDF_ShieldPercentage) || Constants[0] (3) || DIV || Variables[1] (MDF_Count) || MUL || RETURN",
                    "displayLines": "((MDF_ShieldPercentage / 3) * MDF_Count)",
                    "constants": [
                      3
                    ],
                    "variables": [
                      "MDF_ShieldPercentage",
                      "MDF_Count"
                    ]
                  },
                  "formula": "HP Scaling (Shield)"
                }
              ]
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team Entity}}"
              },
              "variableName": "MDF_ShieldValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                "displayLines": "MDF_ShieldValue",
                "constants": [],
                "variables": [
                  "MDF_ShieldValue"
                ]
              },
              "entityClass": "Enemy",
              "maximum": {
                "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                "displayLines": "MDF_ShieldValue",
                "constants": [],
                "variables": [
                  "MDF_ShieldValue"
                ]
              },
              "assignState": "True"
            }
          ]
        },
        {
          "eventTrigger": "Shield Value Change [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team Entity}}"
              },
              "variableName": "MDF_CurrentShield",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_CurrentShield) || RETURN",
                "displayLines": "MDF_CurrentShield",
                "constants": [],
                "variables": [
                  "MDF_CurrentShield"
                ]
              },
              "entityClass": "Enemy",
              "maximum": {
                "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                "displayLines": "MDF_ShieldValue",
                "constants": [],
                "variables": [
                  "MDF_ShieldValue"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ShieldPercentage",
        "MDF_MaxHPHitPercentage1",
        "MDF_MaxHPHitPercentage2"
      ],
      "latentQueue": [
        "UsedShieldFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-243818097\">SPRL_Flag</a>",
      "stackData": [],
      "latentQueue": [
        "SPRLCount",
        "Strike_SPRLCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-508706525\">Gepard_RL_Break</a>",
      "modifierFlags": [
        "DisableAction"
      ],
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W1_Gepard_RL_Ability03_Insert",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "MonsterChangeState",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "UsedShieldFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1185722758\">Gepard_RL_ShieldIcon2</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]",
      "stackData": [],
      "latentQueue": [
        "UsedShieldFlag"
      ],
      "description": "Before the Collective Shield ends, enemy targets' Toughness cannot be reduced.",
      "type": "Buff",
      "effectName": "Weakness Protected",
      "statusName": "Weakness Protected"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1788931056\">Gepard_RL_ShieldIcon</a>[<span class=\"descriptionNumberColor\">Collective Shield</span>]",
      "stackData": [],
      "latentQueue": [
        "UsedShieldFlag"
      ],
      "description": "A Shield that absorbs DMG taken by all enemies. While the Shield persists, allies' attacks will not reduce the Shielded enemies' HP.",
      "type": "Buff",
      "effectName": "Collective Shield",
      "statusName": "Collective Shield"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1602419899\">Gepard_RL_ShieldPerformance</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "Shield"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Set Hit-Class"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Hit-Class",
              "reset": true
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "UsedShieldFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__531781317\">Gepard_RL_Shield</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "Shield"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1602419899\">Gepard_RL_ShieldPerformance</a>"
            },
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "variableName": "MDF_Count",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": {
                "operator": "Variables[0] (MDF_MaxHPHitPercentage1) || RETURN",
                "displayLines": "MDF_MaxHPHitPercentage1",
                "constants": [],
                "variables": [
                  "MDF_MaxHPHitPercentage1"
                ]
              },
              "consumeFloor": 1
            },
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "consumePercent": {
                "operator": "Variables[0] (MDF_MaxHPHitPercentage2) || RETURN",
                "displayLines": "MDF_MaxHPHitPercentage2",
                "constants": [],
                "variables": [
                  "MDF_MaxHPHitPercentage2"
                ]
              },
              "consumeFloor": 1
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                "displayLines": "MDF_ShieldValue",
                "constants": [],
                "variables": [
                  "MDF_ShieldValue"
                ]
              },
              "entityClass": "Enemy",
              "maximum": {
                "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                "displayLines": "MDF_ShieldValue",
                "constants": [],
                "variables": [
                  "MDF_ShieldValue"
                ]
              },
              "assignState": "False"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1602419899\">Gepard_RL_ShieldPerformance</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1788931056\">Gepard_RL_ShieldIcon</a>[<span class=\"descriptionNumberColor\">Collective Shield</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1185722758\">Gepard_RL_ShieldIcon2</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-508706525\">Gepard_RL_Break</a>"
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                },
                {
                  "name": "Trigger 0-Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  }
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "multiBase": 1
                }
              ]
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 1
            },
            {
              "name": "Remove Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Create Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team Entity}}"
              },
              "targetDisplay": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Constants[0] (0) || RETURN",
                "displayLines": "0",
                "constants": [
                  0
                ],
                "variables": []
              },
              "valuePercent": {
                "operator": "Variables[0] (MDF_ShieldPercentage) || Constants[0] (3) || DIV || Variables[1] (MDF_Count) || MUL || RETURN",
                "displayLines": "((MDF_ShieldPercentage / 3) * MDF_Count)",
                "constants": [
                  3
                ],
                "variables": [
                  "MDF_ShieldPercentage",
                  "MDF_Count"
                ]
              },
              "formula": "HP Scaling (Shield)"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team Entity}}"
              },
              "variableName": "MDF_ShieldValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                "displayLines": "MDF_ShieldValue",
                "constants": [],
                "variables": [
                  "MDF_ShieldValue"
                ]
              },
              "entityClass": "Enemy",
              "maximum": {
                "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                "displayLines": "MDF_ShieldValue",
                "constants": [],
                "variables": [
                  "MDF_ShieldValue"
                ]
              },
              "assignState": "True"
            }
          ]
        },
        {
          "eventTrigger": "Shield Value Change [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team Entity}}"
              },
              "variableName": "MDF_CurrentShield",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_CurrentShield) || RETURN",
                "displayLines": "MDF_CurrentShield",
                "constants": [],
                "variables": [
                  "MDF_CurrentShield"
                ]
              },
              "entityClass": "Enemy",
              "maximum": {
                "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                "displayLines": "MDF_ShieldValue",
                "constants": [],
                "variables": [
                  "MDF_ShieldValue"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ShieldPercentage",
        "MDF_MaxHPHitPercentage1",
        "MDF_MaxHPHitPercentage2"
      ],
      "latentQueue": [
        "UsedShieldFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]",
      "modifierFlags": [
        "MuteBreak"
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
              "action": "Protected",
              "valueList": [
                "Physical",
                "Fire",
                "Ice",
                "Thunder",
                "Wind",
                "Quantum",
                "Imaginary"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "UsedShieldFlag"
      ],
      "description": "Toughness cannot be reduced.",
      "type": "Other",
      "effectName": "Toughness Protection",
      "statusName": "Toughness Protection"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__979801477\">Monster_Standard_Endurance</a>",
      "modifierFlags": [
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "STAT_CTRL",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Gepard_LimboFlag",
        "Bronya_LimboFlag",
        "isMainAttack"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__352751855\">Monster_W1_Gepard_RL_DamageUP</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Count",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageAddedRatio) || Variables[1] (MDF_Count) || MUL || RETURN",
                "displayLines": "(MDF_DamageAddedRatio * MDF_Count)",
                "constants": [],
                "variables": [
                  "MDF_DamageAddedRatio",
                  "MDF_Count"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageAddedRatio"
      ],
      "latentQueue": [],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1955091143\">Enemy_W1_Gepard_RL_ListenBeingAttacked</a>[<span class=\"descriptionNumberColor\">Counter</span>]",
      "modifierFlags": [
        "MuteHitH"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Set Hit-Class"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Hit-Class",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "ReturnAttackCounter",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Param Flag",
                      "flagName": "IsFakeAvatarAttack"
                    }
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Currency Wars Full OffFieldList}}"
                    },
                    "mustBeAlive2": true,
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ReturnAttackCounter",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W1_Gepard_RL_Ability07_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "MonsterInsertAttackSelf",
                      "showInActionOrder": true,
                      "abortFlags": [
                        "DisableAction",
                        "STAT_CTRL",
                        "Break"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "ReturnAttackCounter"
      ],
      "description": "Uses a Powerful Counter on the attacker after being attacked.",
      "type": "Buff",
      "effectName": "Counter",
      "statusName": "Counter"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__321901706\">Monster_W1_Gepard_RL_Revive</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Die_Flag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Die_Flag",
                  "value": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1955091143\">Enemy_W1_Gepard_RL_ListenBeingAttacked</a>[<span class=\"descriptionNumberColor\">Counter</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-508706525\">Gepard_RL_Break</a>"
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"979801477\">Monster_Standard_Endurance</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Insert_Flag",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W1_Gepard_RL_PassiveAbility_Insert",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W1_Gepard_RL_PassiveAbility_Insert2",
                          "priorityTag": "MonsterChangePhase",
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
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__802362263\">Monster_W1_Gepard_RL_AIWatcher</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "UsedShieldFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-810863903\">Monster_Standard_Boss_Dormancy</a>",
      "modifierFlags": [
        "DisableHealHP"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.0009999999
            }
          ]
        }
      ],
      "duration": 1
    }
  ],
  "references": []
}