const configAbility = {
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
}