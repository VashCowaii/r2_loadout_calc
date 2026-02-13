const compositeAbilityObject = {
  "fullCharacterName": "Dan Heng • Permansor Terrae",
  "trimCharacterName": "DanHengPT",
  "abilityList": [
    "DanHengPT_DanHengPT_TechniqueInLevel",
    "DanHengPT_DanHengPT_PassiveAbility01",
    "DanHengPT_DanHengPT_BE_PassiveAbility",
    "DanHengPT_DanHengPT_BE_InsertAttack_Part02",
    "DanHengPT_DanHengPT_BE_InsertAttack_Part01",
    "DanHengPT_DanHengPT_BE_InsertShield_Part02",
    "DanHengPT_DanHengPT_BE_InsertShield_Part01",
    "DanHengPT_DanHengPT_Ability03_Part02",
    "DanHengPT_DanHengPT_Ability03_Part01",
    "DanHengPT_DanHengPT_Ability03_EnterReady",
    "DanHengPT_DanHengPT_BE_AddShield",
    "DanHengPT_DanHengPT_Ability02_Part02",
    "DanHengPT_DanHengPT_Ability02_Part01",
    "DanHengPT_DanHengPT_Ability01_Part02",
    "DanHengPT_DanHengPT_Ability01_Part01",
    "DanHengPT_Modifiers",
    "DanHengPT_Functions",
    "DanHengPT_BE_BattleEvents"
  ],
  "abilityObject": {
    "DanHengPT_DanHengPT_TechniqueInLevel": {
      "fileName": "DanHengPT_DanHengPT_TechniqueInLevel",
      "childAbilityList": [
        "DanHengPT_DanHengPT_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1357770440\">DanHengPT_Maze</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1357770440\">DanHengPT_Maze</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Multiply(by 0 if undefined)"
                    }
                  ]
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": null,
                  "skillType": "ControlSkill02",
                  "forceAction": true,
                  "castTarget": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-636149171\">StageAbility_MazeStandard_EnterBattle_MarkTeamLeader</a>"
                        }
                      }
                    ]
                  },
                  "afterInjection": [],
                  "runsAfterBattleEnd": true
                }
              ],
              "priorityLevel": -55
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "DanHengPT_DanHengPT_PassiveAbility01": {
      "fileName": "DanHengPT_DanHengPT_PassiveAbility01",
      "childAbilityList": [
        "DanHengPT_DanHengPT_PassiveAbility01",
        "DanHengPT_DanHengPT_BE_InsertAttack_Part02"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        20,
        0
      ],
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "DanHengPT_Stance_All",
          "value": {
            "operator": "Variables[0] (AOE Toughness Value) || RETURN",
            "displayLines": "AOE Toughness Value",
            "constants": [],
            "variables": [
              "AOE Toughness Value"
            ]
          }
        },
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            11414
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"3985826\">DanHengPT_Olisten_BE_Create</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"292748857\">DanHengPT_PassiveModifier</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DanHengPT_ExtraShieldUPRatio",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DanHengPT_IsFreeAction",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1781840956\">DanHengPT_ExtraListen</a>"
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
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"933382237\">DanHengPT_Eidolon1_Onlisten</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-853961878\">DanHengPT_Eidolon2_Onlisten</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DanHengPT_Passive_MaxCount",
          "value": 99
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
              "scope": "AITag",
              "variableName": "DamageCarry",
              "value": 0.0009999999
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (DanHengPT_Passive_Count) || RETURN",
            "displayLines": "DanHengPT_Passive_Count",
            "constants": [],
            "variables": [
              "DanHengPT_Passive_Count"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (DanHengPT_Passive_MaxCount) || RETURN",
            "displayLines": "DanHengPT_Passive_MaxCount",
            "constants": [],
            "variables": [
              "DanHengPT_Passive_MaxCount"
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 4
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_InsertDanHengPTDamagePercentage",
          "value": {
            "operator": "Variables[0] (0.8) || RETURN",
            "displayLines": "0.8",
            "constants": [],
            "variables": [
              0.8
            ]
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
              "name": "Define Custom Variable",
              "variableName": "Skill03_InsertOwnerDamagePercentage",
              "value": {
                "operator": "Variables[0] (0.8) || Variables[1] (2) || MUL || RETURN",
                "displayLines": "(0.8 * 2)",
                "constants": [],
                "variables": [
                  0.8,
                  2
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "SkillTree_PointB3_OwnerDamagePercentage",
              "value": {
                "operator": "Variables[0] (0.4) || Variables[1] (2) || MUL || RETURN",
                "displayLines": "(0.4 * 2)",
                "constants": [],
                "variables": [
                  0.4,
                  2
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill03_InsertOwnerDamagePercentage",
              "value": {
                "operator": "Variables[0] (0.8) || RETURN",
                "displayLines": "0.8",
                "constants": [],
                "variables": [
                  0.8
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "SkillTree_PointB3_OwnerDamagePercentage",
              "value": {
                "operator": "Variables[0] (0.4) || RETURN",
                "displayLines": "0.4",
                "constants": [],
                "variables": [
                  0.4
                ]
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__85270413\">DanHengPT_ShieldUPFlag</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{DHPT}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"85270413\">DanHengPT_ShieldUPFlag</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{DHPT}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"297054432\">DanHengPT_LongLingExtraShield</a>",
                      "variable": "MDF_ShieldRatio",
                      "target2": null,
                      "variable2": "MDF_ShieldUPRatioTemp",
                      "scope": "ContextModifier"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DanHengPT_ExtraShieldUPRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_ShieldUPRatioTemp) || RETURN",
                        "displayLines": "MDF_ShieldUPRatioTemp",
                        "constants": [],
                        "variables": [
                          "MDF_ShieldUPRatioTemp"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1169230\">DanHengPT_ImmediateAction</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-537679168\">ReduceActionDelay</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Souldragon}}"
                  },
                  "variables": {
                    "parameter[0]_NormalizedValue": 1
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__98427049\">DanHengPT_ExtraDamageCount</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DanHengPT_ExtraDamageCount",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-249685208\">DanHengPT_LongLingAttackExtraDamage</a>",
                  "variable": "MDF_DamageRatio",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  },
                  "variable2": "MDF_DamageRatioTemp",
                  "scope": "ContextModifier"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DanHengPT_ExtraDamageRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageRatioTemp) || RETURN",
                    "displayLines": "MDF_DamageRatioTemp",
                    "constants": [],
                    "variables": [
                      "MDF_DamageRatioTemp"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-249685208\">DanHengPT_LongLingAttackExtraDamage</a>",
                  "variable": "MDF_Count",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  },
                  "variable2": "MDF_DamageCountTemp",
                  "scope": "ContextModifier"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DanHengPT_ExtraDamageCount",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageCountTemp) || RETURN",
                    "displayLines": "MDF_DamageCountTemp",
                    "constants": [],
                    "variables": [
                      "MDF_DamageCountTemp"
                    ]
                  }
                }
              ]
            }
          ],
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"-1655562855\">Memosprite_CyreneServant_AmazingBonus_DanHengPT</a>[<span class=\"descriptionNumberColor\">Ode to Earth</span>]"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1781840956\">DanHengPT_ExtraListen</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-249685208\">DanHengPT_LongLingAttackExtraDamage</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{DHPT}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"98427049\">DanHengPT_ExtraDamageCount</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"297054432\">DanHengPT_LongLingExtraShield</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1866376122\">DanHengPT_LongLingFreeImmediateAction</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"297054432\">DanHengPT_LongLingExtraShield</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{DHPT}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"85270413\">DanHengPT_ShieldUPFlag</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DanHengPT_IsFreeAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__3985826\">DanHengPT_Olisten_BE_Create</a>",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "entityType": "BattleEvent",
            "entityID": 11414,
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "Compare: Variable",
              "value1": "DanHengPT_LongLing_Flag",
              "compareType": "<",
              "value2": 1
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-853961878\">DanHengPT_Eidolon2_Onlisten</a>",
          "execute": [
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
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-537679168\">ReduceActionDelay</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Souldragon}}"
                      },
                      "variables": {
                        "parameter[0]_NormalizedValue": 1
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DanHengPT_IsFreeAction"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Souldragon}}"
            },
            "skillType": [
              "Ultimate"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": -1
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__933382237\">DanHengPT_Eidolon1_Onlisten</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "adjustmentType": "+"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Bondmate}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2035403394\">DanHengPT_Eidolon1</a>[<span class=\"descriptionNumberColor\">Shed Scales of Old</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.18) || RETURN",
                          "displayLines": "0.18",
                          "constants": [],
                          "variables": [
                            0.18
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
          "latentQueue": [
            "DanHengPT_IsFreeAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__292748857\">DanHengPT_PassiveModifier</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]"
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Souldragon}}"
                  },
                  "ignoreHPLossTriggers": true,
                  "ignoreDeathTriggers": true
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
                        "name": "Trace Activated",
                        "conditionList": "Sylvanity"
                      },
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
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "advanceType": "Advance",
                      "multiAdd": "-0.4"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "DanHengPT_Passive_Count",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": {
                    "operator": "Variables[0] (DanHengPT_Passive_MaxCount) || RETURN",
                    "displayLines": "DanHengPT_Passive_MaxCount",
                    "constants": [],
                    "variables": [
                      "DanHengPT_Passive_MaxCount"
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (DanHengPT_Passive_Count) || RETURN",
                        "displayLines": "DanHengPT_Passive_Count",
                        "constants": [],
                        "variables": [
                          "DanHengPT_Passive_Count"
                        ]
                      },
                      "priorState": "Active"
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (DanHengPT_Passive_Count) || RETURN",
                        "displayLines": "DanHengPT_Passive_Count",
                        "constants": [],
                        "variables": [
                          "DanHengPT_Passive_Count"
                        ]
                      },
                      "priorState": "Normal"
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (DanHengPT_Passive_Count) || RETURN",
                        "displayLines": "DanHengPT_Passive_Count",
                        "constants": [],
                        "variables": [
                          "DanHengPT_Passive_Count"
                        ]
                      },
                      "priorState": "Active"
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
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
                      "variableName": "DanHengPT_Attack",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Empyreanity"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "DanHengPT_ConvertAttack",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Bondmate}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-892900131\">DanHengPT_PointB1_AddAttackRatio</a>[<span class=\"descriptionNumberColor\">Empyreanity</span>]",
                          "valuePerStack": {
                            "MDF_AttackDelta": {
                              "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (DanHengPT_ConvertAttack) || SUB || Variables[2] (0.15) || MUL || RETURN",
                              "displayLines": "((DanHengPT_Attack - DanHengPT_ConvertAttack) * 0.15)",
                              "constants": [],
                              "variables": [
                                "DanHengPT_Attack",
                                "DanHengPT_ConvertAttack",
                                0.15
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
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
                      "variableName": "DanHengPT_Attack",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Empyreanity"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "DanHengPT_ConvertAttack",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Bondmate}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-892900131\">DanHengPT_PointB1_AddAttackRatio</a>[<span class=\"descriptionNumberColor\">Empyreanity</span>]",
                          "valuePerStack": {
                            "MDF_AttackDelta": {
                              "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (DanHengPT_ConvertAttack) || SUB || Variables[2] (0.15) || MUL || RETURN",
                              "displayLines": "((DanHengPT_Attack - DanHengPT_ConvertAttack) * 0.15)",
                              "constants": [],
                              "variables": [
                                "DanHengPT_Attack",
                                "DanHengPT_ConvertAttack",
                                0.15
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
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "DanHengPT_DanHengPT_BE_PassiveAbility": {
      "fileName": "DanHengPT_DanHengPT_BE_PassiveAbility",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-516529797\">DanHengPT_BEModifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-516529797\">DanHengPT_BEModifier</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{DHPT}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1300423082\">DanHengPT_BoostEnergy</a>"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "DanHengPT_BE_InsertAttack_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "AvatarInsertAttackSelf",
                      "ownerState": "Mask_AliveOrRevivable",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "DanHengPT_BE_InsertShield_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "priorityTag": "AvatarBuffSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Event Owner Change",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getSummoner]]"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"123456163\">Standard_Departed</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1136407126\">Standard_Departed_Sub</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1136407126\">Standard_Departed_Sub</a>"
                    },
                    {
                      "name": "Set Action-State",
                      "on": null,
                      "stateName": "Standard_Departed"
                    },
                    {
                      "name": "Remove Modifier Behavior Flag(s)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagNames": [
                        "STAT_SheepStatus_SummonObjects"
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-480380135\">Enemy_W2_LycanKing_IF_DisableAction</a>[<span class=\"descriptionNumberColor\">Departed</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"40667951\">Enemy_W2_LycanKing_IF_DisableActionEndMark</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1110462690\">Phainon_Ultimate_TeamStealth</a>[<span class=\"descriptionNumberColor\">Ruinous Irontomb</span>]"
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
    "DanHengPT_DanHengPT_BE_InsertAttack_Part02": {
      "fileName": "DanHengPT_DanHengPT_BE_InsertAttack_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DanHengPT_IsFreeAction",
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
                  "target": "{{DHPT}}"
                },
                "value1": "DanHengPT_Passive_Count",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1300423082\">DanHengPT_BoostEnergy</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{DHPT}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1300423082\">DanHengPT_BoostEnergy</a>",
              "valuePerStack": {
                "MDF_IsStack": 0
              },
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "dispelCount": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "dispelOrder": "LastAdded"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{DHPT}}"
          },
          "ability": "DanHengPT_BE_AddShield"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Skill03_InsertDanHengPTDamagePercentage) || RETURN",
              "displayLines": "Skill03_InsertDanHengPTDamagePercentage",
              "constants": [],
              "variables": [
                "Skill03_InsertDanHengPTDamagePercentage"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
              "displayLines": "DanHengPT_Stance_All",
              "constants": [],
              "variables": [
                "DanHengPT_Stance_All"
              ]
            },
            "Tags": [
              "Summon-Tag DMG"
            ],
            "attackType": "Follow-up"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Skill03_InsertDanHengPTDamagePercentage) || RETURN",
              "displayLines": "Skill03_InsertDanHengPTDamagePercentage",
              "constants": [],
              "variables": [
                "Skill03_InsertDanHengPTDamagePercentage"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
              "displayLines": "DanHengPT_Stance_All",
              "constants": [],
              "variables": [
                "DanHengPT_Stance_All"
              ]
            },
            "Tags": [
              "Summon-Tag DMG"
            ],
            "attackType": "Follow-up"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Skill03_InsertDanHengPTDamagePercentage) || RETURN",
              "displayLines": "Skill03_InsertDanHengPTDamagePercentage",
              "constants": [],
              "variables": [
                "Skill03_InsertDanHengPTDamagePercentage"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
              "displayLines": "DanHengPT_Stance_All",
              "constants": [],
              "variables": [
                "DanHengPT_Stance_All"
              ]
            },
            "Tags": [
              "Summon-Tag DMG"
            ],
            "attackType": "Follow-up"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Skill03_InsertDanHengPTDamagePercentage) || RETURN",
              "displayLines": "Skill03_InsertDanHengPTDamagePercentage",
              "constants": [],
              "variables": [
                "Skill03_InsertDanHengPTDamagePercentage"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
              "displayLines": "DanHengPT_Stance_All",
              "constants": [],
              "variables": [
                "DanHengPT_Stance_All"
              ]
            },
            "Tags": [
              "Summon-Tag DMG"
            ],
            "attackType": "Follow-up"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "ReadTargetType",
              "target": {
                "name": "Target Name",
                "target": "{{Bondmate}}"
              }
            },
            "Damage": {
              "operator": "Variables[0] (Skill03_InsertOwnerDamagePercentage) || RETURN",
              "displayLines": "Skill03_InsertOwnerDamagePercentage",
              "constants": [],
              "variables": [
                "Skill03_InsertOwnerDamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": [
              "Summon-Tag DMG"
            ],
            "attackType": "Additional DMG"
          },
          "overrideDamageOwner": {
            "name": "Target Name",
            "target": "{{Bondmate}}"
          },
          "overrideDamageStatSource": {
            "name": "Target Name",
            "target": "{{Bondmate}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "DanHengPT_ExtraDamageCount",
                "compareType": ">",
                "value2": 0
              },
              {
                "name": "Compare: Variable",
                "value1": "DanHengPT_LongLing_Flag",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable with Shield Value",
              "target": {
                "name": "Target Name",
                "target": "{{Bondmate}}"
              },
              "variableName": "DanHengPT_ExtraDamageShield"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DanHengPT_ExtraDamageCount",
              "value": {
                "operator": "Variables[0] (DanHengPT_ExtraDamageCount) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(DanHengPT_ExtraDamageCount - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "DanHengPT_ExtraDamageCount"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": "ReadTargetType",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Bondmate}}"
                  }
                },
                "DamageFlat": {
                  "operator": "Variables[0] (DanHengPT_ExtraDamageRatio) || Variables[1] (DanHengPT_ExtraDamageShield) || MUL || RETURN",
                  "displayLines": "(DanHengPT_ExtraDamageRatio * DanHengPT_ExtraDamageShield)",
                  "constants": [],
                  "variables": [
                    "DanHengPT_ExtraDamageRatio",
                    "DanHengPT_ExtraDamageShield"
                  ]
                },
                "Toughness": null,
                "Tags": [
                  "Summon-Tag DMG"
                ],
                "attackType": "Additional DMG"
              },
              "overrideDamageOwner": {
                "name": "Target Name",
                "target": "{{Bondmate}}"
              },
              "overrideDamageStatSource": {
                "name": "Target Name",
                "target": "{{Bondmate}}"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Sublimity"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}.[[sortByHPCurrent]].[[reverse]]"
              },
              "includeDyingTargets": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DanHengPT_LongLing_Flag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "ReadTargetType",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Bondmate}}"
                          }
                        },
                        "Damage": {
                          "operator": "Variables[0] (SkillTree_PointB3_OwnerDamagePercentage) || RETURN",
                          "displayLines": "SkillTree_PointB3_OwnerDamagePercentage",
                          "constants": [],
                          "variables": [
                            "SkillTree_PointB3_OwnerDamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": [
                          "Summon-Tag DMG"
                        ],
                        "attackType": "Additional DMG"
                      },
                      "overrideDamageOwner": {
                        "name": "Target Name",
                        "target": "{{Bondmate}}"
                      },
                      "overrideDamageStatSource": {
                        "name": "Target Name",
                        "target": "{{Bondmate}}"
                      }
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
            "name": "Compare: Variable",
            "value1": "DanHengPT_IsFreeAction",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DanHengPT_IsFreeAction",
              "value": 0
            }
          ]
        },
        {
          "name": "Trigger: Attack End",
          "fakeCharacterAttack": true
        }
      ],
      "references": []
    },
    "DanHengPT_DanHengPT_BE_InsertAttack_Part01": {
      "fileName": "DanHengPT_DanHengPT_BE_InsertAttack_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Of Virtue, Forms Unfold"
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{DHPT}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "DanHengPT_BE_InsertAttack_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "DanHengPT_DanHengPT_BE_InsertShield_Part02": {
      "fileName": "DanHengPT_DanHengPT_BE_InsertShield_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "dispelCount": {
            "operator": "Variables[0] (MDF_DisperseNum) || RETURN",
            "displayLines": "MDF_DisperseNum",
            "constants": [],
            "variables": [
              "MDF_DisperseNum"
            ]
          },
          "dispelOrder": "LastAdded"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{DHPT}}"
          },
          "ability": "DanHengPT_BE_AddShield"
        }
      ],
      "references": []
    },
    "DanHengPT_DanHengPT_BE_InsertShield_Part01": {
      "fileName": "DanHengPT_DanHengPT_BE_InsertShield_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "DanHengPT_BE_InsertShield_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "DanHengPT_DanHengPT_Ability03_Part02": {
      "fileName": "DanHengPT_DanHengPT_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DanHengPT_LongLing_Flag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "ReadTargetType",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Bondmate}}"
                      }
                    },
                    "Damage": {
                      "operator": "Variables[0] (3.3) || RETURN",
                      "displayLines": "3.3",
                      "constants": [],
                      "variables": [
                        3.3
                      ]
                    },
                    "Toughness": null,
                    "Tags": [
                      "Summon-Tag DMG"
                    ],
                    "attackType": "Additional DMG"
                  },
                  "overrideDamageOwner": {
                    "name": "Target Name",
                    "target": "{{Bondmate}}"
                  },
                  "overrideDamageStatSource": {
                    "name": "Target Name",
                    "target": "{{Bondmate}}"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DanHengPT_Passive_Count",
              "value": {
                "operator": "Variables[0] (DanHengPT_Passive_Count) || Variables[1] (2) || ADD || Variables[2] (2) || ADD || RETURN",
                "displayLines": "((DanHengPT_Passive_Count + 2) + 2)",
                "constants": [],
                "variables": [
                  "DanHengPT_Passive_Count",
                  2,
                  2
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DanHengPT_Passive_Count",
              "value": {
                "operator": "Variables[0] (DanHengPT_Passive_Count) || Variables[1] (2) || ADD || RETURN",
                "displayLines": "(DanHengPT_Passive_Count + 2)",
                "constants": [],
                "variables": [
                  "DanHengPT_Passive_Count",
                  2
                ]
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Show Attack Time",
              "time": {
                "operator": "Variables[0] (DanHengPT_Passive_Count) || RETURN",
                "displayLines": "DanHengPT_Passive_Count",
                "constants": [],
                "variables": [
                  "DanHengPT_Passive_Count"
                ]
              },
              "on": null,
              "show": true
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1300423082\">DanHengPT_BoostEnergy</a>",
          "valuePerStack": {
            "MDF_IsStack": 1
          }
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DanHengPT_Attack",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1942576362\">DanHengPT_Ability03_AddShield</a>"
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "DanHengPT_DanHengPT_Ability03_Part01": {
      "fileName": "DanHengPT_DanHengPT_Ability03_Part01",
      "childAbilityList": [
        "DanHengPT_DanHengPT_Ability03_Camera",
        "DanHengPT_DanHengPT_Ability03_EnterReady",
        "DanHengPT_DanHengPT_Ability03_Part01",
        "DanHengPT_DanHengPT_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        20,
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
          "ability": "DanHengPT_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "DanHengPT_DanHengPT_Ability03_EnterReady": {
      "fileName": "DanHengPT_DanHengPT_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "DanHengPT_DanHengPT_BE_AddShield": {
      "fileName": "DanHengPT_DanHengPT_BE_AddShield",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DanHengPT_Attack",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"124728741\">DanHengPT_BE_AddShield</a>"
        }
      ],
      "references": []
    },
    "DanHengPT_DanHengPT_Ability02_Part02": {
      "fileName": "DanHengPT_DanHengPT_Ability02_Part02",
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
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
            "invertCondition": true
          },
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DanHengPT_Skill02_Flag",
              "value": 1
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Empyreanity"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-892900131\">DanHengPT_PointB1_AddAttackRatio</a>[<span class=\"descriptionNumberColor\">Empyreanity</span>]"
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
                "name": "Trace Activated",
                "conditionList": "Sylvanity"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
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
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                          "valuePerStack": {
                            "MDF_PointB2_P3_DelayUp": {
                              "operator": "Variables[0] (0.15) || RETURN",
                              "displayLines": "0.15",
                              "constants": [],
                              "variables": [
                                0.15
                              ]
                            },
                            "MDF_PointB2_P2_AddSP": {
                              "operator": "Variables[0] (6) || RETURN",
                              "displayLines": "6",
                              "constants": [],
                              "variables": [
                                6
                              ]
                            },
                            "MDF_Eidolon4_AllDamageReduceRatio": {
                              "operator": "Variables[0] (0.2) || RETURN",
                              "displayLines": "0.2",
                              "constants": [],
                              "variables": [
                                0.2
                              ]
                            },
                            "MDF_Eidolon6_AllDamageTypeTakenRatio": {
                              "operator": "Variables[0] (0.2) || RETURN",
                              "displayLines": "0.2",
                              "constants": [],
                              "variables": [
                                0.2
                              ]
                            },
                            "MDF_Eidolon6_DefPentRatio": {
                              "operator": "Variables[0] (0.12) || RETURN",
                              "displayLines": "0.12",
                              "constants": [],
                              "variables": [
                                0.12
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
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                          "valuePerStack": {
                            "MDF_PointB2_P3_DelayUp": {
                              "operator": "Variables[0] (0.15) || RETURN",
                              "displayLines": "0.15",
                              "constants": [],
                              "variables": [
                                0.15
                              ]
                            },
                            "MDF_PointB2_P2_AddSP": {
                              "operator": "Variables[0] (6) || RETURN",
                              "displayLines": "6",
                              "constants": [],
                              "variables": [
                                6
                              ]
                            },
                            "MDF_Eidolon4_AllDamageReduceRatio": {
                              "operator": "Variables[0] (0.2) || RETURN",
                              "displayLines": "0.2",
                              "constants": [],
                              "variables": [
                                0.2
                              ]
                            },
                            "MDF_Eidolon6_AllDamageTypeTakenRatio": 0,
                            "MDF_Eidolon6_DefPentRatio": 0
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                      "valuePerStack": {
                        "MDF_PointB2_P3_DelayUp": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        },
                        "MDF_PointB2_P2_AddSP": {
                          "operator": "Variables[0] (6) || RETURN",
                          "displayLines": "6",
                          "constants": [],
                          "variables": [
                            6
                          ]
                        },
                        "MDF_Eidolon4_AllDamageReduceRatio": 0,
                        "MDF_Eidolon6_AllDamageTypeTakenRatio": 0,
                        "MDF_Eidolon6_DefPentRatio": 0
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
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
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                          "valuePerStack": {
                            "MDF_PointB2_P3_DelayUp": 0,
                            "MDF_PointB2_P2_AddSP": 0,
                            "MDF_Eidolon4_AllDamageReduceRatio": {
                              "operator": "Variables[0] (0.2) || RETURN",
                              "displayLines": "0.2",
                              "constants": [],
                              "variables": [
                                0.2
                              ]
                            },
                            "MDF_Eidolon6_AllDamageTypeTakenRatio": {
                              "operator": "Variables[0] (0.2) || RETURN",
                              "displayLines": "0.2",
                              "constants": [],
                              "variables": [
                                0.2
                              ]
                            },
                            "MDF_Eidolon6_DefPentRatio": {
                              "operator": "Variables[0] (0.12) || RETURN",
                              "displayLines": "0.12",
                              "constants": [],
                              "variables": [
                                0.12
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
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                          "valuePerStack": {
                            "MDF_PointB2_P3_DelayUp": 0,
                            "MDF_PointB2_P2_AddSP": 0,
                            "MDF_Eidolon4_AllDamageReduceRatio": {
                              "operator": "Variables[0] (0.2) || RETURN",
                              "displayLines": "0.2",
                              "constants": [],
                              "variables": [
                                0.2
                              ]
                            },
                            "MDF_Eidolon6_AllDamageTypeTakenRatio": 0,
                            "MDF_Eidolon6_DefPentRatio": 0
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                      "valuePerStack": {
                        "MDF_PointB2_P3_DelayUp": 0,
                        "MDF_PointB2_P2_AddSP": 0,
                        "MDF_Eidolon4_AllDamageReduceRatio": 0,
                        "MDF_Eidolon6_AllDamageTypeTakenRatio": 0,
                        "MDF_Eidolon6_DefPentRatio": 0
                      }
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
                "name": "Trace Activated",
                "conditionList": "Sylvanity"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                  "valuePerStack": {
                    "MDF_PointB2_P3_DelayUp": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
                      ]
                    },
                    "MDF_PointB2_P2_AddSP": {
                      "operator": "Variables[0] (6) || RETURN",
                      "displayLines": "6",
                      "constants": [],
                      "variables": [
                        6
                      ]
                    },
                    "MDF_Eidolon4_AllDamageReduceRatio": 0,
                    "MDF_Eidolon6_AllDamageTypeTakenRatio": 0,
                    "MDF_Eidolon6_DefPentRatio": 0
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
                  "valuePerStack": {
                    "MDF_PointB2_P3_DelayUp": 0,
                    "MDF_PointB2_P2_AddSP": 0,
                    "MDF_Eidolon4_AllDamageReduceRatio": 0,
                    "MDF_Eidolon6_AllDamageTypeTakenRatio": 0,
                    "MDF_Eidolon6_DefPentRatio": 0
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DanHengPT_Attack",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Empyreanity"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "DanHengPT_ConvertAttack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-892900131\">DanHengPT_PointB1_AddAttackRatio</a>[<span class=\"descriptionNumberColor\">Empyreanity</span>]",
              "valuePerStack": {
                "MDF_AttackDelta": {
                  "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (DanHengPT_ConvertAttack) || SUB || Variables[2] (0.15) || MUL || RETURN",
                  "displayLines": "((DanHengPT_Attack - DanHengPT_ConvertAttack) * 0.15)",
                  "constants": [],
                  "variables": [
                    "DanHengPT_Attack",
                    "DanHengPT_ConvertAttack",
                    0.15
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DanHengPT_Skill02_Flag",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Souldragon}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Sublimity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 2,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Change Battle Event Owner",
                          "eventName": {
                            "name": "Target Name",
                            "target": "{{Souldragon}}"
                          },
                          "assignOwner": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "variables": {
                            "MDF_Ability03_DamagePercentage": {
                              "operator": "Variables[0] (0.8) || RETURN",
                              "displayLines": "0.8",
                              "constants": [],
                              "variables": [
                                0.8
                              ]
                            },
                            "MDF_Stance": {
                              "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
                              "displayLines": "DanHengPT_Stance_All",
                              "constants": [],
                              "variables": [
                                "DanHengPT_Stance_All"
                              ]
                            },
                            "MDF_Eidolon2_P1_DamageRatio": {
                              "operator": "Variables[0] (2) || RETURN",
                              "displayLines": "2",
                              "constants": [],
                              "variables": [
                                2
                              ]
                            },
                            "MDF_Point03_P1_DamageRatio": {
                              "operator": "Variables[0] (0.4) || RETURN",
                              "displayLines": "0.4",
                              "constants": [],
                              "variables": [
                                0.4
                              ]
                            },
                            "MDF_DisperseNum": {
                              "operator": "Variables[0] (1) || RETURN",
                              "displayLines": "1",
                              "constants": [],
                              "variables": [
                                1
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Change Battle Event Owner",
                          "eventName": {
                            "name": "Target Name",
                            "target": "{{Souldragon}}"
                          },
                          "assignOwner": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "variables": {
                            "MDF_Ability03_DamagePercentage": {
                              "operator": "Variables[0] (0.8) || RETURN",
                              "displayLines": "0.8",
                              "constants": [],
                              "variables": [
                                0.8
                              ]
                            },
                            "MDF_Stance": {
                              "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
                              "displayLines": "DanHengPT_Stance_All",
                              "constants": [],
                              "variables": [
                                "DanHengPT_Stance_All"
                              ]
                            },
                            "MDF_Eidolon2_P1_DamageRatio": 0,
                            "MDF_Point03_P1_DamageRatio": {
                              "operator": "Variables[0] (0.4) || RETURN",
                              "displayLines": "0.4",
                              "constants": [],
                              "variables": [
                                0.4
                              ]
                            },
                            "MDF_DisperseNum": {
                              "operator": "Variables[0] (1) || RETURN",
                              "displayLines": "1",
                              "constants": [],
                              "variables": [
                                1
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 2,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Change Battle Event Owner",
                          "eventName": {
                            "name": "Target Name",
                            "target": "{{Souldragon}}"
                          },
                          "assignOwner": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "variables": {
                            "MDF_Ability03_DamagePercentage": {
                              "operator": "Variables[0] (0.8) || RETURN",
                              "displayLines": "0.8",
                              "constants": [],
                              "variables": [
                                0.8
                              ]
                            },
                            "MDF_Stance": {
                              "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
                              "displayLines": "DanHengPT_Stance_All",
                              "constants": [],
                              "variables": [
                                "DanHengPT_Stance_All"
                              ]
                            },
                            "MDF_Eidolon2_P1_DamageRatio": {
                              "operator": "Variables[0] (2) || RETURN",
                              "displayLines": "2",
                              "constants": [],
                              "variables": [
                                2
                              ]
                            },
                            "MDF_Point03_P1_DamageRatio": 0,
                            "MDF_DisperseNum": {
                              "operator": "Variables[0] (1) || RETURN",
                              "displayLines": "1",
                              "constants": [],
                              "variables": [
                                1
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Change Battle Event Owner",
                          "eventName": {
                            "name": "Target Name",
                            "target": "{{Souldragon}}"
                          },
                          "assignOwner": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "variables": {
                            "MDF_Ability03_DamagePercentage": {
                              "operator": "Variables[0] (0.8) || RETURN",
                              "displayLines": "0.8",
                              "constants": [],
                              "variables": [
                                0.8
                              ]
                            },
                            "MDF_Stance": {
                              "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
                              "displayLines": "DanHengPT_Stance_All",
                              "constants": [],
                              "variables": [
                                "DanHengPT_Stance_All"
                              ]
                            },
                            "MDF_Eidolon2_P1_DamageRatio": 0,
                            "MDF_Point03_P1_DamageRatio": 0,
                            "MDF_DisperseNum": {
                              "operator": "Variables[0] (1) || RETURN",
                              "displayLines": "1",
                              "constants": [],
                              "variables": [
                                1
                              ]
                            }
                          }
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
                    "name": "Trace Activated",
                    "conditionList": "Sublimity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 2,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Battle Event",
                          "teamName": "Player Team",
                          "eventID": 11414,
                          "assignOwner": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "variables": {
                            "MDF_Ability03_DamagePercentage": {
                              "operator": "Variables[0] (0.8) || RETURN",
                              "displayLines": "0.8",
                              "constants": [],
                              "variables": [
                                0.8
                              ]
                            },
                            "MDF_Stance": {
                              "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
                              "displayLines": "DanHengPT_Stance_All",
                              "constants": [],
                              "variables": [
                                "DanHengPT_Stance_All"
                              ]
                            },
                            "MDF_Eidolon2_P1_DamageRatio": {
                              "operator": "Variables[0] (2) || RETURN",
                              "displayLines": "2",
                              "constants": [],
                              "variables": [
                                2
                              ]
                            },
                            "MDF_Point03_P1_DamageRatio": {
                              "operator": "Variables[0] (0.4) || RETURN",
                              "displayLines": "0.4",
                              "constants": [],
                              "variables": [
                                0.4
                              ]
                            },
                            "MDF_DisperseNum": {
                              "operator": "Variables[0] (1) || RETURN",
                              "displayLines": "1",
                              "constants": [],
                              "variables": [
                                1
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Battle Event",
                          "teamName": "Player Team",
                          "eventID": 11414,
                          "assignOwner": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "variables": {
                            "MDF_Ability03_DamagePercentage": {
                              "operator": "Variables[0] (0.8) || RETURN",
                              "displayLines": "0.8",
                              "constants": [],
                              "variables": [
                                0.8
                              ]
                            },
                            "MDF_Stance": {
                              "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
                              "displayLines": "DanHengPT_Stance_All",
                              "constants": [],
                              "variables": [
                                "DanHengPT_Stance_All"
                              ]
                            },
                            "MDF_Eidolon2_P1_DamageRatio": 0,
                            "MDF_Point03_P1_DamageRatio": {
                              "operator": "Variables[0] (0.4) || RETURN",
                              "displayLines": "0.4",
                              "constants": [],
                              "variables": [
                                0.4
                              ]
                            },
                            "MDF_DisperseNum": {
                              "operator": "Variables[0] (1) || RETURN",
                              "displayLines": "1",
                              "constants": [],
                              "variables": [
                                1
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 2,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Battle Event",
                          "teamName": "Player Team",
                          "eventID": 11414,
                          "assignOwner": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "variables": {
                            "MDF_Ability03_DamagePercentage": {
                              "operator": "Variables[0] (0.8) || RETURN",
                              "displayLines": "0.8",
                              "constants": [],
                              "variables": [
                                0.8
                              ]
                            },
                            "MDF_Stance": {
                              "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
                              "displayLines": "DanHengPT_Stance_All",
                              "constants": [],
                              "variables": [
                                "DanHengPT_Stance_All"
                              ]
                            },
                            "MDF_Eidolon2_P1_DamageRatio": {
                              "operator": "Variables[0] (2) || RETURN",
                              "displayLines": "2",
                              "constants": [],
                              "variables": [
                                2
                              ]
                            },
                            "MDF_Point03_P1_DamageRatio": 0,
                            "MDF_DisperseNum": {
                              "operator": "Variables[0] (1) || RETURN",
                              "displayLines": "1",
                              "constants": [],
                              "variables": [
                                1
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Battle Event",
                          "teamName": "Player Team",
                          "eventID": 11414,
                          "assignOwner": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "variables": {
                            "MDF_Ability03_DamagePercentage": {
                              "operator": "Variables[0] (0.8) || RETURN",
                              "displayLines": "0.8",
                              "constants": [],
                              "variables": [
                                0.8
                              ]
                            },
                            "MDF_Stance": {
                              "operator": "Variables[0] (DanHengPT_Stance_All) || RETURN",
                              "displayLines": "DanHengPT_Stance_All",
                              "constants": [],
                              "variables": [
                                "DanHengPT_Stance_All"
                              ]
                            },
                            "MDF_Eidolon2_P1_DamageRatio": 0,
                            "MDF_Point03_P1_DamageRatio": 0,
                            "MDF_DisperseNum": {
                              "operator": "Variables[0] (1) || RETURN",
                              "displayLines": "1",
                              "constants": [],
                              "variables": [
                                1
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DanHengPT_Passive_Count",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Show Attack Time",
                  "time": {
                    "operator": "Variables[0] (DanHengPT_Passive_Count) || RETURN",
                    "displayLines": "DanHengPT_Passive_Count",
                    "constants": [],
                    "variables": [
                      "DanHengPT_Passive_Count"
                    ]
                  },
                  "on": null,
                  "show": true
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1300423082\">DanHengPT_BoostEnergy</a>"
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DanHengPT_Skill02_Flag",
              "value": 0
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1290948349\">DanHengPT_AddShield</a>"
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
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1357770440\">DanHengPT_Maze</a>"
          },
          "passed": [
            {
              "name": "Update Ability Properties",
              "propertyList": [
                {
                  "name": "Ability Property Action",
                  "propertyName": "Skill Point Cost",
                  "propertyAction": "Reset to Default"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1357770440\">DanHengPT_Maze</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "DanHengPT_DanHengPT_Ability02_Part01": {
      "fileName": "DanHengPT_DanHengPT_Ability02_Part01",
      "childAbilityList": [
        "DanHengPT_DanHengPT_Ability02_Camera",
        "DanHengPT_DanHengPT_Ability02_Camera_End",
        "DanHengPT_DanHengPT_Ability02_Part01",
        "DanHengPT_DanHengPT_Ability02_Part02",
        "DanHengPT_DanHengPT_BE_AddShield"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
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
          "ability": "DanHengPT_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "DanHengPT_DanHengPT_Ability01_Part02": {
      "fileName": "DanHengPT_DanHengPT_Ability01_Part02",
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
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.3,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
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
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.7,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "DanHengPT_DanHengPT_Ability01_Part01": {
      "fileName": "DanHengPT_DanHengPT_Ability01_Part01",
      "childAbilityList": [
        "DanHengPT_DanHengPT_Ability01_Camera",
        "DanHengPT_DanHengPT_Ability01_Part01",
        "DanHengPT_DanHengPT_Ability01_Part02"
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
          "ability": "DanHengPT_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "DanHengPT_Modifiers": {
      "fileName": "DanHengPT_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__297054432\">DanHengPT_LongLingExtraShield</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-249685208\">DanHengPT_LongLingAttackExtraDamage</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DanHengPT_ExtraDamageCount",
                  "value": 0
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "DanHengPT_ExtraDamageCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable": "DanHengPT_ExtraDamageCount",
                      "target2": null,
                      "variable2": "MDF_DanHengPT_ExtraDamageCount"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_DanHengPT_ExtraDamageCount",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        "Modifier Deletes Itself"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1866376122\">DanHengPT_LongLingFreeImmediateAction</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1300423082\">DanHengPT_BoostEnergy</a>",
                  "valuePerStack": {
                    "MDF_IsStack": 1
                  },
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DanHengPT_IsFreeAction",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1169230\">DanHengPT_ImmediateAction</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DanHengPT_IsFreeAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1272476867\">DanHengPT_Eidolon6_Bonus</a>[<span class=\"descriptionNumberColor\">One Dream to Enfold All Wilds</span>]",
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
                      "value": "-MDF_PropertyValue"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of the enemy target's DEF.",
          "type": "Buff",
          "statusName": "One Dream to Enfold All Wilds"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1040309000\">DanHengPT_Eidolon6_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">One Dream to Enfold All Wilds</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
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
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "statusName": "One Dream to Enfold All Wilds"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1985070537\">DanHengPT_Eidolon4</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-452137321\">DanHengPT_Eidolon4_Bonus</a>[<span class=\"descriptionNumberColor\">By Oath, This Vessel Is I</span>]",
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
          "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "By Oath, This Vessel Is I"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2035403394\">DanHengPT_Eidolon1</a>[<span class=\"descriptionNumberColor\">Shed Scales of Old</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
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
          "latentQueue": [
            "DanHengPT_IsFreeAction"
          ],
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "All-Type RES PEN Boost",
          "statusName": "Shed Scales of Old"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1755552334\">DanHengPT_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "Shield"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class"
                },
                {
                  "name": "Stack Shield",
                  "stackValue": {
                    "operator": "Variables[0] (MDF_DanHengPT_InitShieldValue) || RETURN",
                    "displayLines": "MDF_DanHengPT_InitShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_DanHengPT_InitShieldValue"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (0.2) || MUL || Variables[2] (400) || ADD || Variables[3] (MDF_MaxShieldRatio) || MUL || RETURN",
                    "displayLines": "(((DanHengPT_Attack * 0.2) + 400) * MDF_MaxShieldRatio)",
                    "constants": [],
                    "variables": [
                      "DanHengPT_Attack",
                      0.2,
                      400,
                      "MDF_MaxShieldRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextCaster",
                  "variableName": "MDF_AchievementCount",
                  "value": {
                    "operator": "Variables[0] (MDF_DanHengPT_InitShieldValue) || RETURN",
                    "displayLines": "MDF_DanHengPT_InitShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_DanHengPT_InitShieldValue"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextCaster",
                  "variableName": "MDF_AchievementCount",
                  "value": 0
                }
              ]
            }
          ],
          "description": "Gains a Shield that can offset DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
          "type": "Buff",
          "effectName": "Shield",
          "statusName": "Shield"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-892900131\">DanHengPT_PointB1_AddAttackRatio</a>[<span class=\"descriptionNumberColor\">Empyreanity</span>]",
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackDelta) || RETURN",
                    "displayLines": "MDF_AttackDelta",
                    "constants": [],
                    "variables": [
                      "MDF_AttackDelta"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AttackDelta"
          ],
          "latentQueue": [
            "DanHengPT_Skill02_Flag"
          ],
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_AttackDelta</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Empyreanity"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__309103337\">DanHengPT_LongLing</a>[<span class=\"descriptionNumberColor\">Bondmate</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HadServant",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "AITag"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_modifyAiTag",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "AITag",
                      "variableName": "HadServant",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  },
                  "variableName": "DanHengPT_LongLing_Flag",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-892900131\">DanHengPT_PointB1_AddAttackRatio</a>[<span class=\"descriptionNumberColor\">Empyreanity</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_modifyAiTag",
                    "compareType": "=",
                    "value2": 0,
                    "invertCondition": true,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_modifyAiTag",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "AITag",
                      "variableName": "HadServant",
                      "value": 0
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  },
                  "variableName": "DanHengPT_LongLing_Flag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_PointB2_P2_AddSP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{DHPT}}"
                      },
                      "value": {
                        "operator": "Variables[0] (MDF_PointB2_P2_AddSP) || RETURN",
                        "displayLines": "MDF_PointB2_P2_AddSP",
                        "constants": [],
                        "variables": [
                          "MDF_PointB2_P2_AddSP"
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_PointB2_P3_DelayUp",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-537679168\">ReduceActionDelay</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Souldragon}}"
                      },
                      "variables": {
                        "parameter[0]_NormalizedValue": {
                          "operator": "Variables[0] (MDF_PointB2_P3_DelayUp) || RETURN",
                          "displayLines": "MDF_PointB2_P3_DelayUp",
                          "constants": [],
                          "variables": [
                            "MDF_PointB2_P3_DelayUp"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PointB2_P3_DelayUp",
            "MDF_PointB2_P2_AddSP",
            "MDF_Rank04_AllDamageReduceRatio",
            "MDF_Rank06_AllDamageTypeTakenRatio",
            "MDF_Rank06_DefPentRatio"
          ],
          "latentQueue": [
            "DanHengPT_Skill02_Flag"
          ],
          "description": "\"Souldragon\" holder.",
          "type": "Other",
          "effectName": "Becomes the Bondmate",
          "statusName": "Bondmate",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Souldragon}}"
            },
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Compare: Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Attack Source}}"
                  },
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Action is an Attack",
                  "useActiveAbility": true
                },
                {
                  "name": "Trace Activated",
                  "conditionList": "Sylvanity",
                  "target": {
                    "name": "Target Name",
                    "target": "{{DHPT}}"
                  }
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PointB2_P3_DelayUp) || SUB || RETURN",
                "displayLines": "(0 - MDF_PointB2_P3_DelayUp)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PointB2_P3_DelayUp"
                ]
              }
            }
          },
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-452137321\">DanHengPT_Eidolon4_Bonus</a>[<span class=\"descriptionNumberColor\">By Oath, This Vessel Is I</span>]",
              "aliveOnly": "False",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Rank04_AllDamageReduceRatio",
                "compareType": ">",
                "value2": 0
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_Rank04_AllDamageReduceRatio) || RETURN",
                  "displayLines": "MDF_Rank04_AllDamageReduceRatio",
                  "constants": [],
                  "variables": [
                    "MDF_Rank04_AllDamageReduceRatio"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1272476867\">DanHengPT_Eidolon6_Bonus</a>[<span class=\"descriptionNumberColor\">One Dream to Enfold All Wilds</span>]",
              "aliveOnly": "False",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Rank06_DefPentRatio",
                "compareType": ">",
                "value2": 0
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_Rank06_DefPentRatio) || RETURN",
                  "displayLines": "MDF_Rank06_DefPentRatio",
                  "constants": [],
                  "variables": [
                    "MDF_Rank06_DefPentRatio"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1040309000\">DanHengPT_Eidolon6_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">One Dream to Enfold All Wilds</span>]",
              "aliveOnly": "False",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Rank06_AllDamageTypeTakenRatio",
                "compareType": ">",
                "value2": 0
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_Rank06_AllDamageTypeTakenRatio) || RETURN",
                  "displayLines": "MDF_Rank06_AllDamageTypeTakenRatio",
                  "constants": [],
                  "variables": [
                    "MDF_Rank06_AllDamageTypeTakenRatio"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1941107033\">DanHengPT_Eidolon2_LastBoostEnergyFlag</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1300423082\">DanHengPT_BoostEnergy</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_IsStack",
                    "compareType": "=",
                    "value2": 1
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextCaster",
                      "variableName": "DanHengPT_Passive_Count",
                      "value": {
                        "operator": "Variables[0] (DanHengPT_Passive_Count) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(DanHengPT_Passive_Count - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "DanHengPT_Passive_Count"
                        ]
                      }
                    },
                    {
                      "name": "Show Attack Time",
                      "time": {
                        "operator": "Variables[0] (DanHengPT_Passive_Count) || RETURN",
                        "displayLines": "DanHengPT_Passive_Count",
                        "constants": [],
                        "variables": [
                          "DanHengPT_Passive_Count"
                        ]
                      },
                      "on": null,
                      "show": true
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DanHengPT_Passive_Count",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Eidolon Activated",
                            "eidolon": 2,
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
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1941107033\">DanHengPT_Eidolon2_LastBoostEnergyFlag</a>"
                            }
                          ]
                        },
                        "Modifier Deletes Itself",
                        {
                          "name": "Show Attack Time",
                          "time": 0,
                          "on": null,
                          "show": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_IsStack"
          ],
          "latentQueue": [
            "DanHengPT_IsFreeAction"
          ]
        }
      ],
      "references": []
    },
    "DanHengPT_Functions": {
      "fileName": "DanHengPT_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 3,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1290948349\">DanHengPT_AddShield</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "DanHengPT_Attack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1755552334\">DanHengPT_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "valuePerStack": {
                "MDF_DanHengPT_InitShieldValue": {
                  "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (0.2) || MUL || Variables[2] (400) || ADD || RETURN",
                  "displayLines": "((DanHengPT_Attack * 0.2) + 400)",
                  "constants": [],
                  "variables": [
                    "DanHengPT_Attack",
                    0.2,
                    400
                  ]
                },
                "MDF_MaxShieldRatio": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                },
                "MDF_MainTarget": 1
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1942576362\">DanHengPT_Ability03_AddShield</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "DanHengPT_Attack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1755552334\">DanHengPT_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "valuePerStack": {
                "MDF_DanHengPT_InitShieldValue": {
                  "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (0.2) || MUL || Variables[2] (400) || ADD || RETURN",
                  "displayLines": "((DanHengPT_Attack * 0.2) + 400)",
                  "constants": [],
                  "variables": [
                    "DanHengPT_Attack",
                    0.2,
                    400
                  ]
                },
                "MDF_MaxShieldRatio": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                },
                "MDF_MainTarget": 1
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__124728741\">DanHengPT_BE_AddShield</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "DanHengPT_Attack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DanHengPT_Passive_Count",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "#SkillRank_Rank02_P3_ShieldRatio",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextCaster"
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DanHengPT_IsFreeAction",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "#SkillRank_Rank02_P3_ShieldRatio",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextCaster"
                      }
                    ]
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1941107033\">DanHengPT_Eidolon2_LastBoostEnergyFlag</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1941107033\">DanHengPT_Eidolon2_LastBoostEnergyFlag</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1755552334\">DanHengPT_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DanHengPT_InitShieldValue": {
                      "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (0.1) || MUL || Variables[2] (200) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || Variables[4] (2) || MUL || RETURN",
                      "displayLines": "((((DanHengPT_Attack * 0.1) + 200) * DanHengPT_ExtraShieldUPRatio) * 2)",
                      "constants": [],
                      "variables": [
                        "DanHengPT_Attack",
                        0.1,
                        200,
                        "DanHengPT_ExtraShieldUPRatio",
                        2
                      ]
                    },
                    "MDF_MaxShieldRatio": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
                      ]
                    },
                    "MDF_MainTarget": 1
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Sublimity"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          {
                            "name": "Sort by Stat",
                            "stat": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;",
                            "living": true
                          },
                          {
                            "name": "Return Target",
                            "value": 1
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1755552334\">DanHengPT_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
                          "duration": {
                            "operator": "Variables[0] (3) || RETURN",
                            "displayLines": "3",
                            "constants": [],
                            "variables": [
                              3
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DanHengPT_InitShieldValue": {
                              "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (0.05) || MUL || Variables[2] (100) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || Variables[4] (2) || MUL || RETURN",
                              "displayLines": "((((DanHengPT_Attack * 0.05) + 100) * DanHengPT_ExtraShieldUPRatio) * 2)",
                              "constants": [],
                              "variables": [
                                "DanHengPT_Attack",
                                0.05,
                                100,
                                "DanHengPT_ExtraShieldUPRatio",
                                2
                              ]
                            },
                            "MDF_MaxShieldRatio": {
                              "operator": "Variables[0] (3) || RETURN",
                              "displayLines": "3",
                              "constants": [],
                              "variables": [
                                3
                              ]
                            },
                            "MDF_MainTarget": 1
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1755552334\">DanHengPT_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DanHengPT_InitShieldValue": {
                      "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (0.1) || MUL || Variables[2] (200) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || RETURN",
                      "displayLines": "(((DanHengPT_Attack * 0.1) + 200) * DanHengPT_ExtraShieldUPRatio)",
                      "constants": [],
                      "variables": [
                        "DanHengPT_Attack",
                        0.1,
                        200,
                        "DanHengPT_ExtraShieldUPRatio"
                      ]
                    },
                    "MDF_MaxShieldRatio": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
                      ]
                    },
                    "MDF_MainTarget": 1
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Sublimity"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          {
                            "name": "Sort by Stat",
                            "stat": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;",
                            "living": true
                          },
                          {
                            "name": "Return Target",
                            "value": 1
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1755552334\">DanHengPT_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
                          "duration": {
                            "operator": "Variables[0] (3) || RETURN",
                            "displayLines": "3",
                            "constants": [],
                            "variables": [
                              3
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DanHengPT_InitShieldValue": {
                              "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (0.05) || MUL || Variables[2] (100) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || RETURN",
                              "displayLines": "(((DanHengPT_Attack * 0.05) + 100) * DanHengPT_ExtraShieldUPRatio)",
                              "constants": [],
                              "variables": [
                                "DanHengPT_Attack",
                                0.05,
                                100,
                                "DanHengPT_ExtraShieldUPRatio"
                              ]
                            },
                            "MDF_MaxShieldRatio": {
                              "operator": "Variables[0] (3) || RETURN",
                              "displayLines": "3",
                              "constants": [],
                              "variables": [
                                3
                              ]
                            },
                            "MDF_MainTarget": 1
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DanHengPT_ExtraShieldUPRatio",
              "value": 1
            }
          ]
        }
      ],
      "references": []
    },
    "DanHengPT_BE_BattleEvents": {
      "fileName": "DanHengPT_BE_BattleEvents",
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
          "ID": 11414,
          "team": "Player Team",
          "eventType": "Summon",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFirePEN</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateSUM</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageFire</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;"
            }
          ],
          "eventSpeed": 165
        }
      ],
      "references": []
    }
  }
}